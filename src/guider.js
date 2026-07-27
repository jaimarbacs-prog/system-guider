import { Panel } from './panel.js'
import { Player } from './player.js'
import { Recorder } from './recorder.js'
import { SpotlightOverlay } from './overlay.js'
import { Launcher } from './launcher.js'
import {
  copyGuide,
  downloadGuide,
  downloadGuidesBundle,
  exportGuide,
  loadDraft,
  parseGuidesPayload,
  saveDraft,
  validateGuide,
} from './persistence.js'
import {
  clearPendingPlay,
  consumePendingPlay,
  currentUrlKey,
  loadAllGuides,
  loadGuidesForUrl,
  removeGuideForUrl,
  saveGuideForUrl,
  savePendingPlay,
} from './routes.js'
import {
  defaultFileStorageOptions,
  deleteGuideFromFileStorage,
  guideRelativePath,
  loadGuidesFromFileStorage,
  loadSettingsFromFileStorage,
  probeGuideApi,
  saveGuideToFileStorage,
  saveSettingsToFileStorage,
} from './file-storage.js'
import { isStepTargetValid, resolveStepTarget } from './selectors.js'
import { normalizeGuideUrl } from './toc.js'
import {
  defaultGuiderSettings,
  normalizeGuiderSettings,
  applyUiTheme,
  defaultUiSettings,
  canAccountManageGuides,
  isUrlHiddenForGuider,
} from './settings.js'

const defaultLabels = {
  next: 'Next Step',
  back: 'Back',
  close: 'Close Guide',
  skip: 'Next Step',
  startRecording: 'Start Recording',
  stopRecording: 'Stop Recording',
}

const makeGuide = (urlKey = '') => ({
  id: `guide-${Date.now()}`,
  title: urlKey ? `Guide for ${urlKey}` : 'New system guide',
  version: 1,
  url: urlKey || undefined,
  steps: [],
})

export class Guider {
  constructor(options = {}) {
    this.options = {
      overlayOpacity: 0.58,
      allowClose: true,
      zIndex: 2147483000,
      selectorTimeout: 5000,
      autoAdvanceOnInput: true,
      autoAdvanceDelay: 600,
      autoSkipMissing: true,
      autoSkipMissingDelay: 400,
      stableWaitTimeout: 1500,
      targetWaitTimeout: 20000,
      targetRetryInterval: 250,
      showLauncher: true,
      guidesByUrl: true,
      urlMatch: 'pathname',
      resetBeforePlay: 'none',
      resetBeforePlayDelay: 450,
      /** Host navigation (e.g. Inertia router.visit). Receives url string; may return a Promise. */
      navigate: null,
      guides: {},
      storageKey: 'system-guider',
      fileStorage: false,
      ...options,
      labels: { ...defaultLabels, ...options.labels },
    }
    this.settings = normalizeGuiderSettings({
      ...defaultGuiderSettings(),
      ...(options.settings || {}),
    })
    // Apply persisted playback settings onto runtime options.
    this.options.resetBeforePlay = this.settings.resetBeforePlay || this.options.resetBeforePlay
    this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay ?? this.options.resetBeforePlayDelay
    applyUiTheme(this.settings)
    this.fileStorage = defaultFileStorageOptions(this.options.fileStorage)
    this.fileGuides = []
    this.guideSaveTimer = null
    this.settingsSaveTimer = null
    this.apiReady = !this.fileStorage
    this.apiProbeTimer = null
    this.guide = makeGuide(this.getUrlKey())
    this.mode = 'idle'
    this.dirty = false
    this.recordingAppend = false
    this.destroyed = false
    this.recordingStepsBaseline = 0
    this.panelVisible = !this.options.showLauncher
    this.readOnly = false
    this.bypassUnlocked = false
    // Start hidden; applyAccessPolicy / bootstrap decide when to show (avoids orb flash).
    this.launcherVisible = false
    this.settingsReady = !this.fileStorage
    this.accountId = options.accountId ?? null
    this.overlay = new SpotlightOverlay({
      ...this.options,
      skipLabel: this.options.labels?.skip || this.options.labels?.next || 'Next Step',
      onSkip: () => this.skip(),
      onEnd: () => this.endPlayback(),
      onHighlightBox: (box) => this.panel?.avoidHighlight(box),
      onTargetLost: () => this.player?.onSpotlightTargetLost?.(),
      ui: this.settings.ui,
    })
    this.recorder = new Recorder({
      onStep: (step) => this.recordStep(step),
    })
    this.player = new Player({
      overlay: this.overlay,
      timeout: this.options.selectorTimeout,
      autoAdvanceOnInput: this.options.autoAdvanceOnInput,
      autoAdvanceDelay: this.options.autoAdvanceDelay,
      autoSkipMissing: this.options.autoSkipMissing,
      autoSkipMissingDelay: this.options.autoSkipMissingDelay,
      stableWaitTimeout: this.options.stableWaitTimeout,
      targetWaitTimeout: this.options.targetWaitTimeout,
      targetRetryInterval: this.options.targetRetryInterval,
      stepDelay: 0,
      autoScroll: true,
      ui: this.settings.ui,
      onChange: (step, index, status) => this.onPlaybackChange(step, index, status),
      onFail: (step, index) => this.onPlaybackFail(step, index),
      onComplete: () => this.onPlaybackComplete(),
      onClickAdvance: (step, fromIndex, nextIndex, meta) => {
        this.persistPlaybackProgress(nextIndex, meta)
      },
    })
    this.playbackResumeTimer = null
    this.panel = new Panel({
      labels: this.options.labels,
      zIndex: this.options.zIndex,
      handlers: this.createHandlers(),
      visible: this.panelVisible,
    })
    this.launcher = this.options.showLauncher
      ? new Launcher({
        zIndex: this.options.zIndex,
        onOpenPanel: () => this.togglePanel(),
        onBypassOpenPanel: () => this.openPanelViaBypass(),
        onStartRecording: () => this.startRecording(),
        onPlayPageGuide: () => this.playPageGuide(),
        onDeleteGuide: (guideId) => this.deletePageGuide(guideId),
        onOpenManage: () => this.openManageRoutes(),
        onStopTutorial: () => this.close(true),
        onSearchGuide: (guide) => this.playGuide(guide),
      })
      : null
    this.launcher?.setApiReady(this.apiReady)
    this.launcher?.setReadOnly(this.readOnly)
    this.launcher?.setBypassPin?.(this.settings?.bypassPin)
    this.launcher?.setLauncherSettings?.(this.settings?.launcher)
    this.launcher?.setAccountId?.(this.accountId)
    this.launcher?.setVisible(false)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onUrlChange = this.onUrlChange.bind(this)
    document.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('popstate', this.onUrlChange)
    this.installHistoryHooks()
    this.applyAccessPolicy()

    this.bootstrap()
  }

  /** Inertia/Vue soft navigations use pushState — popstate alone misses them. */
  installHistoryHooks() {
    if (this._historyHooksInstalled) return
    this._historyHooksInstalled = true
    this._origPushState = history.pushState.bind(history)
    this._origReplaceState = history.replaceState.bind(history)
    const notify = () => {
      queueMicrotask(() => {
        if (!this.destroyed) this.onUrlChange()
      })
    }
    history.pushState = (...args) => {
      this._origPushState(...args)
      notify()
    }
    history.replaceState = (...args) => {
      this._origReplaceState(...args)
      notify()
    }
  }

  restoreHistoryHooks() {
    if (!this._historyHooksInstalled) return
    if (this._origPushState) history.pushState = this._origPushState
    if (this._origReplaceState) history.replaceState = this._origReplaceState
    this._historyHooksInstalled = false
    this._origPushState = null
    this._origReplaceState = null
  }

  async reloadFileGuides() {
    if (!this.fileStorage) {
      this.fileGuides = []
      return
    }
    try {
      const remote = await loadGuidesFromFileStorage(this.fileStorage)
      this.fileGuides = Array.isArray(remote) ? remote : []
      // Don't let a stale server copy overwrite in-progress edits (e.g. just-removed steps).
      if (this.dirty && this.guide?.id) {
        const snapshot = structuredClone(this.guide)
        const idx = this.fileGuides.findIndex((item) => item.id === this.guide.id)
        if (idx >= 0) this.fileGuides[idx] = snapshot
        else this.fileGuides = [...this.fileGuides, snapshot]
      }
    } catch {
      this.fileGuides = []
    }
    this.syncLauncher()
    this.render()
  }

  async reloadFileSettings() {
    if (!this.fileStorage) {
      this.settingsReady = true
      return
    }
    try {
      const remote = await loadSettingsFromFileStorage(this.fileStorage)
      if (remote) {
        this.settings = normalizeGuiderSettings({
          ...this.settings,
          ...remote,
          ...(this.options.settings || {}),
        })
        this.options.resetBeforePlay = this.settings.resetBeforePlay
        this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay
        applyUiTheme(this.settings)
        this.overlay?.applyUiSettings?.(this.settings.ui)
        this.player?.setUiOptions?.(this.settings.ui)
        this.launcher?.setLauncherSettings?.(this.settings.launcher)
      }
    } catch {
      // Keep in-memory defaults when settings.json is missing.
    } finally {
      this.settingsReady = true
      this.applyAccessPolicy()
    }
  }

  /** Host app sets the logged-in account id used for editor allow-list checks. */
  setAccountId(accountId) {
    this.accountId = accountId == null || accountId === '' ? null : String(accountId)
    this.launcher?.setAccountId?.(this.accountId)
    this.applyAccessPolicy()
    return this
  }

  setReadOnly(readOnly) {
    const next = Boolean(readOnly)
    if (this.readOnly === next) {
      this.launcher?.setReadOnly(this.readOnly)
      return this
    }
    this.readOnly = next
    this.launcher?.setReadOnly(this.readOnly)
    if (this.readOnly && (this.mode === 'recording' || this.mode === 'manage' || this.mode === 'manage-routes')) {
      if (this.mode === 'recording') this.stopRecording()
      this.mode = 'idle'
      this.closePanel()
    }
    this.render()
    return this
  }

  setLauncherVisible(visible) {
    const next = Boolean(visible)
    if (this.launcherVisible === next) {
      this.launcher?.setVisible(this.launcherVisible)
      return this
    }
    this.launcherVisible = next
    this.launcher?.setVisible(this.launcherVisible)
    if (!this.launcherVisible) {
      this.launcher?.setMenuOpen?.(false)
      if (this.mode !== 'playback' && this.mode !== 'recording') this.closePanel()
    }
    return this
  }

  /** Sync read-only + toolbar visibility from settings + current account/url. */
  applyAccessPolicy() {
    const canManage = this.bypassUnlocked
      || canAccountManageGuides(this.accountId, this.settings?.editorAccountIds)
    this.setReadOnly(!canManage)
    // Wait for settings.json before showing the orb when file storage is on
    // (prevents flash on hiddenUrls / showOrb:false pages).
    if (this.fileStorage && !this.settingsReady) {
      this.setLauncherVisible(false)
      return this
    }
    const pathHidden = isUrlHiddenForGuider(this.getUrlKey(), this.settings?.hiddenUrls)
    const orbEnabled = this.settings?.showOrb !== false
    const show = this.options.showLauncher !== false && orbEnabled && !pathHidden
    this.setLauncherVisible(show)
    this.launcher?.setBypassPin?.(this.settings?.bypassPin)
    this.launcher?.setShowAccountId?.(Boolean(this.settings?.showAccountId))
    this.launcher?.setLauncherSettings?.(this.settings?.launcher)
    return this
  }

  /** Unlock editor mode via orb hover + PIN, then open Global Settings panel. */
  openPanelViaBypass() {
    if (this.mode === 'playback') return this
    if (this.fileStorage && !this.apiReady) return this
    this.bypassUnlocked = true
    this.setReadOnly(false)
    this.openManageRoutes()
    this.launcher?.setMenuOpen?.(false)
    return this
  }

  async bootstrap() {
    await Promise.all([this.reloadFileGuides(), this.reloadFileSettings()])
    this.settingsReady = true
    this.applyAccessPolicy()
    try {
      const pageGuide = this.getGuideForCurrentPage()
      if (pageGuide) this.load(pageGuide, { dirty: false, mode: 'idle' })
      else if (!this.fileStorage) {
        const draft = loadDraft(this.options.storageKey)
        if (draft) this.load(draft, { dirty: false, mode: 'manage' })
      }
    } catch {
      // Ignore corrupted local drafts; explicitly loaded guides still report validation errors.
    }

    await this.ensureGuideApiReady()
    this.syncLauncher()
    this.render()
    applyUiTheme(this.settings)
    this.overlay?.applyUiSettings?.(this.settings.ui)
    this.player?.setUiOptions?.(this.settings.ui)
    this.resumePendingPlay()
  }

  setApiReady(ready) {
    this.apiReady = Boolean(ready)
    this.launcher?.setApiReady(this.apiReady)
  }

  clearApiProbeTimer() {
    if (this.apiProbeTimer) {
      clearTimeout(this.apiProbeTimer)
      this.apiProbeTimer = null
    }
  }

  /**
   * With file storage, Record/Panel/Play stay locked until `/__sg/guides` answers.
   * Retries quietly so a late Laravel/Vite boot unlocks the launcher.
   * If downloadFallback is on, unlock after probe failure (save can download).
   */
  async ensureGuideApiReady() {
    if (!this.fileStorage) {
      this.setApiReady(true)
      return true
    }
    this.clearApiProbeTimer()
    const ok = await probeGuideApi(this.fileStorage)
    if (ok || this.fileStorage.downloadFallback) {
      this.setApiReady(true)
      return true
    }
    this.setApiReady(false)
    if (this.destroyed) return false

    const retry = async () => {
      if (this.destroyed || !this.fileStorage) return
      const nextOk = await probeGuideApi(this.fileStorage)
      if (nextOk || this.fileStorage.downloadFallback) {
        this.setApiReady(true)
        this.clearApiProbeTimer()
        this.syncLauncher()
        return
      }
      this.apiProbeTimer = setTimeout(retry, 2000)
    }
    this.apiProbeTimer = setTimeout(retry, 2000)
    return false
  }

  createHandlers() {
    return {
      'start-recording': () => this.startRecording(),
      'add-steps': () => this.continueRecording(),
      'stop-recording': () => this.stopRecording(),
      load: () => this.openGuideFile(),
      paste: () => this.pasteGuide(),
      play: () => this.start(),
      'play-here': (id) => this.startFrom(id),
      prev: () => this.prev(),
      next: () => this.next(),
      skip: () => this.skip(),
      close: () => this.close(),
      'save-page': () => this.saveGuideForCurrentPage(),
      download: () => this.downloadJSON(),
      'download-all': () => this.downloadAllGuides(),
      copy: () => this.copyJSON().catch((error) => {
        globalThis.alert?.(`Could not copy guide: ${error.message}`)
      }),
      remove: (id) => this.confirmRemove(id),
      'move-up': (id) => this.moveRelative(id, -1),
      'move-down': (id) => this.moveRelative(id, 1),
      'move-to': (id, position) => this.moveToPosition(id, position),
      edit: (id, field, value) => this.editStep(id, field, value),
      editGuide: (field, value) => this.editGuide(field, value),
      commitGuideTitle: () => this.commitGuideTitle(),
      preview: (id) => this.preview(id),
      previewEnd: () => this.overlay.hide(),
      drop: (sourceId, targetId) => this.dropStep(sourceId, targetId),
      'open-manage': () => this.openManageRoutes(),
      'close-manage': () => {
        this.mode = 'idle'
        this.render()
      },
      'update-setting': (key, value) => this.updateSetting(key, value),
      'reset-ui-settings': () => this.resetUiSettings(),
      'play-guide': (id) => {
        const guide = this.getAllGuides().find((item) => item.id === id)
        if (guide) this.playGuide(guide)
      },
      'edit-guide': (id) => this.openGuideForEdit(id),
      'delete-guide': (id) => this.deletePageGuide(id),
      'edit-step-setting': (id, key, value) => this.editStepSetting(id, key, value),
      'edit-guide-setting': (guideId, key, value) => this.editGuideSetting(guideId, key, value),
    }
  }

  getUrlKey() {
    if (typeof this.options.getUrlKey === 'function') {
      return String(this.options.getUrlKey() || '/')
    }
    return currentUrlKey(this.options.urlMatch)
  }

  getGuideForCurrentPage() {
    return this.getGuidesForCurrentPage()[0] || null
  }

  getGuidesForCurrentPage() {
    const urlKey = normalizeGuideUrl(this.getUrlKey())
    return this.getAllGuides().filter((guide) => normalizeGuideUrl(guide.url || '/') === urlKey)
  }

  getAllGuides() {
    const seeded = []
    Object.entries(this.options.guides || {}).forEach(([url, value]) => {
      const list = Array.isArray(value) ? value : value ? [value] : []
      list.forEach((guide) => seeded.push({ ...guide, url: guide.url || url }))
    })
    const fromStorage = this.options.guidesByUrl ? loadAllGuides(this.options.storageKey) : []
    const fromFiles = this.fileGuides || []
    const guidesById = new Map()
    const candidates = this.fileStorage
      ? [...seeded, ...fromStorage, ...fromFiles]
      : [...seeded, ...fromFiles, ...fromStorage]
    for (const candidate of candidates) {
      try {
        const guide = validateGuide(candidate)
        guidesById.set(guide.id, guide)
      } catch {
        // skip invalid
      }
    }
    return [...guidesById.values()].sort((a, b) => (
      String(a.url || '').localeCompare(String(b.url || ''))
      || String(a.title || '').localeCompare(String(b.title || ''))
    ))
  }

  hasGuideForCurrentPage() {
    return this.getGuidesForCurrentPage().length > 0
  }

  saveGuideForCurrentPage() {
    this.assertUsable()
    if (this.readOnly) return this
    if (!this.guide.steps.length) {
      globalThis.alert?.('Add at least one step before saving this page guide.')
      return this
    }
    const urlKey = this.getUrlKey()
    this.guide = validateGuide({
      ...this.guide,
      url: urlKey,
      title: this.guide.title || `Guide for ${urlKey}`,
    })
    if (this.options.guidesByUrl) {
      saveGuideForUrl(this.options.storageKey, urlKey, this.guide)
    }
    this.dirty = false
    this.persistDraft()

    // Optimistic list update so renamed titles show immediately.
    if (Array.isArray(this.fileGuides)) {
      const existing = this.fileGuides.findIndex((guide) => guide.id === this.guide.id)
      if (existing >= 0) {
        this.fileGuides[existing] = { ...this.fileGuides[existing], ...this.guide }
      } else {
        this.fileGuides = [...this.fileGuides, structuredClone(this.guide)]
      }
    }

    this.syncLauncher()
    this.render({
      flashMessage: `Saved “${this.guide.title || 'Untitled guide'}”.`,
    })

    if (this.fileStorage) {
      const path = guideRelativePath(this.guide, urlKey)
      saveGuideToFileStorage(this.fileStorage, this.guide, urlKey)
        .then(async (result) => {
          await this.reloadFileGuides()
          if (result.via === 'download') {
            globalThis.alert?.(
              `Guide downloaded as ${String(result.path).replace(/\//g, '__')}. Place it in your app public/guides/ (same route folders).`,
            )
          }
        })
        .catch((error) => {
          globalThis.alert?.(`Guide saved locally, but file storage failed: ${error.message}`)
        })
    }
    return this
  }

  playPageGuide(guideId) {
    this.assertUsable()
    if (this.fileStorage && !this.apiReady) return this
    const guides = this.getAllGuides()
    if (!guides.length) {
      this.openPanel()
      globalThis.alert?.('No guides saved yet. Record one first.')
      return this
    }
    // Always show TOC unless a specific guide id was requested.
    if (guideId) {
      const selectedGuide = guides.find((guide) => guide.id === guideId)
      if (!selectedGuide) {
        globalThis.alert?.('That guide could not be found.')
        return this
      }
      return this.playGuide(selectedGuide)
    }
    this.launcher?.showGuideOptions(
      guides,
      (guide) => this.playGuide(guide),
      { hierarchical: true, currentUrl: this.getUrlKey() },
    )
    return this
  }

  async playGuide(pageGuide) {
    this.assertUsable()
    const guide = validateGuide(pageGuide)
    const targetUrl = normalizeGuideUrl(guide.url || '/')
    const currentUrl = normalizeGuideUrl(this.getUrlKey())

    if (targetUrl !== currentUrl) {
      savePendingPlay(this.options.storageKey, {
        guideId: guide.id,
        urlKey: targetUrl,
        guide,
        stepIndex: 0,
      })

      const playSettings = this.getGuidePlaybackSettings(guide)
      if (playSettings.reloadOnNavigate || typeof this.options.navigate !== 'function') {
        globalThis.location.assign(targetUrl)
        return this
      }

      try {
        await this.options.navigate(targetUrl)
      } catch (error) {
        globalThis.alert?.(`Could not open ${targetUrl}: ${error?.message || error}`)
        return this
      }
      this.resumePendingPlay({ soft: true })
      return this
    }

    return this.startPageGuide(guide)
  }

  deletePageGuide(guideId) {
    this.assertUsable()
    if (this.readOnly) return this
    if (!guideId) return this
    if (!globalThis.confirm?.('Delete this page guide? This cannot be undone.')) return this

    const target = this.getAllGuides().find((guide) => guide.id === guideId)
    const urlKey = normalizeGuideUrl(target?.url || this.getUrlKey())
    if (this.options.guidesByUrl) {
      removeGuideForUrl(this.options.storageKey, urlKey, guideId)
    }
    this.fileGuides = (this.fileGuides || []).filter((guide) => guide.id !== guideId)
    if (this.fileStorage && target) {
      deleteGuideFromFileStorage(this.fileStorage, {
        guideId,
        urlKey,
        path: guideRelativePath(target, urlKey),
      }).then(() => this.reloadFileGuides()).catch(() => {})
    }

    const remaining = this.getAllGuides().filter((guide) => guide.id !== guideId)

    if (this.guide?.id === guideId) {
      const next = remaining.find((guide) => normalizeGuideUrl(guide.url) === normalizeGuideUrl(this.getUrlKey()))
        || remaining[0]
      if (next) this.load(next, { dirty: false, mode: this.mode === 'manage-routes' ? 'manage-routes' : 'idle' })
      else {
        this.guide = makeGuide(this.getUrlKey())
        this.mode = this.mode === 'manage-routes' ? 'manage-routes' : 'idle'
        this.dirty = false
        this.persistDraft()
      }
    }

    this.syncLauncher()
    this.render()

    if (remaining.length && this.launcher && !this.launcher.optionsRoot.hidden) {
      this.launcher.showGuideOptions(
        remaining,
        (guide) => this.playGuide(guide),
        { hierarchical: true, currentUrl: this.getUrlKey() },
      )
    } else {
      this.launcher?.hideGuideOptions()
    }
    return this
  }

  startPageGuide(pageGuide, { skipReset = false, stepIndex = 0 } = {}) {
    const guide = validateGuide(pageGuide)
    const playSettings = this.getGuidePlaybackSettings(guide)
    const shouldReload = !skipReset && playSettings.resetBeforePlay === 'reload'
    if (shouldReload) {
      savePendingPlay(this.options.storageKey, {
        guideId: guide.id,
        urlKey: normalizeGuideUrl(guide.url || this.getUrlKey()),
        guide,
        stepIndex: 0,
      })
      globalThis.location.reload()
      return this
    }
    if (!skipReset) clearPendingPlay(this.options.storageKey)
    this.load(guide, { dirty: false, mode: 'manage' })
    const index = Math.max(0, Math.min(Number(stepIndex) || 0, Math.max(guide.steps.length - 1, 0)))
    return this.startFrom(index)
  }

  persistPlaybackProgress(stepIndex, { mayNavigate = false } = {}) {
    if (!this.guide?.id) return
    const total = this.guide.steps?.length || 0
    if (stepIndex >= total) {
      clearPendingPlay(this.options.storageKey)
      return
    }
    savePendingPlay(this.options.storageKey, {
      guideId: this.guide.id,
      guide: this.guide,
      stepIndex,
      resumeAnyUrl: true,
      mayNavigate: Boolean(mayNavigate),
      savedAt: Date.now(),
    })
  }

  resumePendingPlay({ soft = false } = {}) {
    const pending = consumePendingPlay(this.options.storageKey)
    if (!pending?.guideId && !pending?.guide) return
    const resumeAnyUrl = Boolean(pending.resumeAnyUrl)
    const pendingUrl = normalizeGuideUrl(pending.urlKey || '/')
    const currentUrl = normalizeGuideUrl(this.getUrlKey())
    if (pending.urlKey && !resumeAnyUrl && pendingUrl !== currentUrl) {
      if (soft) {
        savePendingPlay(this.options.storageKey, pending)
        window.setTimeout(() => this.resumePendingPlay({ soft: true }), 300)
      }
      return
    }

    // Soft Inertia resumes should be snappy. Only use resetBeforePlayDelay for hard reload resumes.
    const delay = soft
      ? 120
      : Math.max(0, Number(this.settings.resetBeforePlayDelay || this.options.resetBeforePlayDelay) || 450)

    window.setTimeout(() => {
      if (this.destroyed) return
      let guide = this.getAllGuides().find((item) => item.id === pending.guideId)
      if (!guide && pending.guide) {
        try {
          guide = validateGuide(pending.guide)
        } catch {
          guide = null
        }
      }
      if (!guide) {
        globalThis.alert?.('The page guide could not be resumed after navigation.')
        return
      }
      try {
        // Soft Inertia: continue on the saved step.
        // Full page reload: always restart the guide from step 1.
        const stepIndex = soft
          ? Math.max(0, Number(pending.stepIndex) || 0)
          : 0
        this.startPageGuide(guide, { skipReset: true, stepIndex })
      } catch (error) {
        globalThis.alert?.(`Could not resume page guide: ${error.message}`)
      }
    }, delay)
  }

  rebindPlaybackAfterNavigation() {
    if (this.mode !== 'playback') return
    clearTimeout(this.playbackResumeTimer)
    this.persistPlaybackProgress(this.player?.index ?? 0, { mayNavigate: true })
    // Wait a beat for SPA content to swap, then rebind the *current* step (not next).
    this.playbackResumeTimer = window.setTimeout(() => {
      if (this.destroyed) return
      if (this.mode === 'playback' && this.player?.active) {
        this.player.continueAfterNavigation()
        return
      }
      // Instance survived poorly or player stopped — resume from pending snapshot.
      this.resumePendingPlay({ soft: true })
    }, 200)
  }

  /** Effective navigation settings: per-guide first, then global defaults. */
  getGuidePlaybackSettings(guide = this.guide) {
    const global = normalizeGuiderSettings(this.settings)
    const local = guide?.settings && typeof guide.settings === 'object' ? guide.settings : {}
    return {
      reloadOnNavigate: local.reloadOnNavigate != null ? Boolean(local.reloadOnNavigate) : global.reloadOnNavigate,
      resetBeforePlay: local.resetBeforePlay === 'reload' || local.resetBeforePlay === 'none'
        ? local.resetBeforePlay
        : global.resetBeforePlay,
      resetBeforePlayDelay: Number.isFinite(Number(local.resetBeforePlayDelay))
        ? Math.max(0, Number(local.resetBeforePlayDelay))
        : global.resetBeforePlayDelay,
    }
  }

  openManageRoutes() {
    if (this.readOnly) return this
    if (this.fileStorage && !this.apiReady) return this
    // Never leave the click-capturing recorder running under Manage / Panel.
    if (this.mode === 'recording') {
      this.recorder.stop()
    }
    // Set mode + render while still hidden so we never flash the idle "Create a guided flow" view.
    this.mode = 'manage-routes'
    this.render()
    this.openPanel()
    return this
  }

  openGuideForEdit(guideId) {
    this.assertUsable()
    if (this.readOnly) return this
    if (this.mode === 'recording') this.recorder.stop()
    const guide = this.getAllGuides().find((item) => item.id === guideId)
    if (!guide) {
      globalThis.alert?.('Guide not found.')
      return this
    }
    this.load(guide, { dirty: false, mode: 'manage' })
    this.openPanel()
    return this
  }

  updateSetting(key, value) {
    if (this.readOnly && (key === 'editorAccountIds' || key === 'hiddenUrls' || key === 'bypassPin'
      || key === 'showAccountId' || key === 'showOrb'
      || key === 'reloadOnNavigate' || key === 'resetBeforePlay' || key === 'resetBeforePlayDelay'
      || key === 'theme'
      || String(key || '').startsWith('launcher.')
      || String(key || '').startsWith('ui.'))) {
      return this
    }
    const next = normalizeGuiderSettings({ ...this.settings })
    if (key === 'reloadOnNavigate') next.reloadOnNavigate = Boolean(value)
    if (key === 'resetBeforePlay') next.resetBeforePlay = value ? 'reload' : 'none'
    if (key === 'resetBeforePlayDelay') next.resetBeforePlayDelay = Math.max(0, Number(value) || 0)
    if (key === 'theme') next.theme = String(value || 'dark').toLowerCase() === 'light' ? 'light' : 'dark'
    if (key === 'editorAccountIds') next.editorAccountIds = value
    if (key === 'hiddenUrls') next.hiddenUrls = value
    if (key === 'bypassPin') next.bypassPin = value
    if (key === 'showAccountId') next.showAccountId = Boolean(value)
    if (key === 'showOrb') next.showOrb = Boolean(value)

    if (String(key || '').startsWith('launcher.')) {
      const launcherKey = String(key).slice(9)
      const launcher = { ...next.launcher }
      if (launcherKey === 'size') launcher.size = Number(value)
      if (launcherKey === 'position') launcher.position = String(value || 'bottom-right')
      if (launcherKey === 'animations') launcher.animations = Boolean(value)
      next.launcher = launcher
    }

    if (String(key || '').startsWith('ui.')) {
      const uiKey = String(key).slice(3)
      const ui = { ...next.ui }
      if (uiKey === 'animations' || uiKey === 'spotlightFade' || uiKey === 'animatedCursor') {
        ui[uiKey] = Boolean(value)
      } else if (uiKey === 'highlightMotion') {
        ui.highlightMotion = String(value || 'pulse')
      } else if (uiKey === 'overlayOpacity') {
        const pct = Number(value)
        ui.overlayOpacity = Number.isFinite(pct)
          ? Math.min(0.9, Math.max(0, pct > 1 ? pct / 100 : pct))
          : ui.overlayOpacity
      } else if (uiKey === 'transitionMs') {
        ui.transitionMs = Math.max(0, Math.round(Number(value) || 0))
      } else if (uiKey === 'fontFamily') {
        ui.fontFamily = String(value || 'system')
      } else if (['tipBg', 'tipText', 'skipBg', 'skipText', 'spotlightColor'].includes(uiKey)) {
        ui[uiKey] = String(value || '')
      }
      next.ui = ui
    }

    this.settings = normalizeGuiderSettings(next)
    this.options.resetBeforePlay = this.settings.resetBeforePlay
    this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay
    applyUiTheme(this.settings)
    this.overlay?.applyUiSettings?.(this.settings.ui)
    this.player?.setUiOptions?.(this.settings.ui)
    this.launcher?.setLauncherSettings?.(this.settings.launcher)
    this.scheduleSettingsSave()
    if (key === 'editorAccountIds' || key === 'hiddenUrls' || key === 'bypassPin' || key === 'showOrb') {
      this.applyAccessPolicy()
    }
    if (key === 'showAccountId') {
      this.launcher?.setShowAccountId?.(this.settings.showAccountId)
    }

    const skipRender = key === 'editorAccountIds' || key === 'hiddenUrls' || key === 'bypassPin'
      || key === 'showAccountId' || key === 'showOrb'
      || String(key || '').startsWith('launcher.') || (String(key || '').startsWith('ui.') && (
      key.includes('Bg') || key.includes('Text') || key.includes('Color')
      || key === 'ui.overlayOpacity' || key === 'ui.transitionMs' || key === 'ui.fontFamily'
    ))
    if (!skipRender) this.render()
    return this
  }

  resetUiSettings() {
    this.settings = normalizeGuiderSettings({
      ...this.settings,
      ui: defaultUiSettings(),
    })
    applyUiTheme(this.settings)
    this.overlay?.applyUiSettings?.(this.settings.ui)
    this.player?.setUiOptions?.(this.settings.ui)
    this.scheduleSettingsSave()
    this.render()
    return this
  }

  scheduleSettingsSave() {
    clearTimeout(this.settingsSaveTimer)
    this.settingsSaveTimer = setTimeout(() => {
      this.flushSettingsSave().catch(() => {})
    }, 250)
  }

  async flushSettingsSave() {
    if (!this.fileStorage) return
    const payload = normalizeGuiderSettings(this.settings)
    const result = await saveSettingsToFileStorage(this.fileStorage, payload)
    if (result?.settings && typeof result.settings === 'object') {
      this.settings = normalizeGuiderSettings({
        ...this.settings,
        ...result.settings,
      })
      this.launcher?.setBypassPin?.(this.settings.bypassPin)
      this.applyAccessPolicy()
    }
  }

  editStepSetting(stepId, key, value) {
    const step = this.guide.steps.find((item) => item.id === stepId)
    if (!step) return
    step.settings = { ...(step.settings || {}) }
    if (key === 'delay' || key === 'hideDelay') {
      const ms = Math.max(0, Math.round(Number(value) || 0))
      if (ms) step.settings[key] = ms
      else delete step.settings[key]
    }
    if (key === 'autoAdvanceDelay') {
      if (value === '' || value == null) delete step.settings.autoAdvanceDelay
      else step.settings.autoAdvanceDelay = Math.max(0, Number(value) || 0)
    }
    if (key === 'autoScroll') {
      if (value) delete step.settings.autoScroll
      else step.settings.autoScroll = false
    }
    if (key === 'autoSkipMissing') {
      if (value) delete step.settings.autoSkipMissing
      else step.settings.autoSkipMissing = false
    }
    if (Object.keys(step.settings).length === 0) delete step.settings
    this.dirty = true
    this.scheduleGuideSave()
  }

  scheduleGuideSave() {
    clearTimeout(this.guideSaveTimer)
    this.guideSaveTimer = setTimeout(() => {
      this.flushGuideSave().catch(() => {})
    }, 300)
  }

  async flushGuideSave() {
    if (!this.guide) return
    if (this.fileStorage) {
      const urlKey = normalizeGuideUrl(this.guide.url || this.getUrlKey())
      if (Array.isArray(this.fileGuides)) {
        this.fileGuides = this.fileGuides.map((item) => (
          item.id === this.guide.id ? { ...this.guide } : item
        ))
      }
      await saveGuideToFileStorage(this.fileStorage, this.guide, urlKey)
      return
    }
    if (this.options.guidesByUrl) {
      saveGuideForUrl(this.options.storageKey, normalizeGuideUrl(this.guide.url || this.getUrlKey()), this.guide)
      return
    }
    this.persistDraft()
  }

  editGuideSetting(guideId, key, value) {
    const targetId = guideId || this.guide?.id
    let guide = this.guide?.id === targetId ? this.guide : this.getAllGuides().find((item) => item.id === targetId)
    if (!guide) return this

    guide = { ...guide, settings: { ...(guide.settings || {}) } }
    if (key === 'autoScroll') {
      if (value) delete guide.settings.autoScroll
      else guide.settings.autoScroll = false
    }
    if (key === 'reloadOnNavigate') {
      if (value) guide.settings.reloadOnNavigate = true
      else delete guide.settings.reloadOnNavigate
    }
    if (key === 'resetBeforePlay') {
      if (value) guide.settings.resetBeforePlay = 'reload'
      else delete guide.settings.resetBeforePlay
    }
    if (Object.keys(guide.settings).length === 0) delete guide.settings

    if (this.guide?.id === guide.id) {
      this.guide = guide
      this.dirty = true
      this.persistDraft()
    }

    if (Array.isArray(this.fileGuides)) {
      this.fileGuides = this.fileGuides.map((item) => (item.id === guide.id ? { ...item, ...guide } : item))
    }

    if (this.fileStorage) {
      const urlKey = normalizeGuideUrl(guide.url || this.getUrlKey())
      saveGuideToFileStorage(this.fileStorage, guide, urlKey)
        .then(() => this.reloadFileGuides())
        .catch(() => {})
    } else if (this.options.guidesByUrl) {
      saveGuideForUrl(this.options.storageKey, normalizeGuideUrl(guide.url || '/'), guide)
    }

    this.render()
    return this
  }

  togglePanel() {
    if (this.mode === 'playback') return
    // Close only when Manage guides is already open. If idle/edit is showing, switch to manage.
    if (this.panelVisible && this.mode === 'manage-routes') {
      this.closePanel()
      return
    }
    this.openManageRoutes()
  }

  openPanel() {
    if (this.mode === 'playback') return
    this.panelVisible = true
    this.panel.setVisible(true)
    this.syncLauncher()
  }

  closePanel() {
    if (this.mode === 'recording') return
    this.panelVisible = false
    this.panel.setVisible(false)
    this.syncLauncher()
  }

  syncLauncher() {
    const count = this.getAllGuides().length
    this.launcher?.setApiReady(this.apiReady)
    this.launcher?.setReadOnly(this.readOnly)
    this.launcher?.setBypassPin?.(this.settings?.bypassPin)
    this.launcher?.setShowAccountId?.(Boolean(this.settings?.showAccountId))
    this.launcher?.setLauncherSettings?.(this.settings?.launcher)
    this.launcher?.setAccountId?.(this.accountId)
    this.launcher?.setVisible(this.launcherVisible)
    this.launcher?.setSearchData(this.getAllGuides(), this.getUrlKey())
    this.launcher?.setPlayState(count)
    this.launcher?.setPanelOpen(this.panelVisible)
    this.launcher?.setPlaying(this.mode === 'playback')
  }

  onUrlChange() {
    this.applyAccessPolicy()
    if (this.mode === 'recording') return
    if (this.mode === 'playback') {
      this.rebindPlaybackAfterNavigation()
      return
    }
    // Keep manage list open across soft navigations; don't kick back to idle create view.
    const keepManage = this.mode === 'manage-routes' && !this.readOnly
    const pageGuide = this.getGuideForCurrentPage()
    if (pageGuide) {
      this.load(pageGuide, { dirty: false, mode: keepManage ? 'manage-routes' : 'idle' })
    } else {
      this.guide = makeGuide(this.getUrlKey())
      this.mode = keepManage ? 'manage-routes' : 'idle'
      this.dirty = false
      this.render()
    }
    this.syncLauncher()
  }

  render(extra = {}) {
    const steps = this.guide.steps.map((step) => ({
      ...step,
      invalid: !isStepTargetValid(step),
    }))
    const focusGuideTitle = Boolean(this.focusGuideTitle)
    this.focusGuideTitle = false
    this.panel.update({
      mode: this.mode,
      steps,
      guideTitle: this.guide.title,
      pageUrl: this.getUrlKey(),
      hasPageGuide: this.hasGuideForCurrentPage(),
      pageGuides: this.getGuidesForCurrentPage().map((guide) => ({
        id: guide.id,
        title: guide.title,
        steps: guide.steps?.length || 0,
        url: guide.url,
      })),
      allGuides: this.getAllGuides().map((guide) => ({
        id: guide.id,
        title: guide.title,
        steps: guide.steps?.length || 0,
        url: guide.url,
        settings: guide.settings || {},
      })),
      settings: { ...this.settings },
      guideSettings: this.guide?.settings || {},
      currentGuideId: this.guide?.id || null,
      accountId: this.accountId,
      recordingAppend: Boolean(this.recordingAppend),
      recordingStepsBaseline: Number(this.recordingStepsBaseline) || 0,
      newStepsCount: this.mode === 'recording'
        ? Math.max(0, (this.guide.steps?.length || 0) - (Number(this.recordingStepsBaseline) || 0))
        : 0,
      focusGuideTitle,
      dirty: Boolean(this.dirty),
      readOnly: Boolean(this.readOnly),
      flashMessage: '',
      ...extra,
    })
    this.syncLauncher()
  }

  startRecording() {
    this.assertUsable()
    if (this.readOnly) return this
    if (this.fileStorage && !this.apiReady) return this
    this.player.stop()
    this.overlay.setControlsEnabled(false)
    this.overlay.hide()
    this.openPanel()
    this.guide = makeGuide(this.getUrlKey())
    this.dirty = false
    this.recordingAppend = false
    this.recordingStepsBaseline = 0
    this.mode = 'recording'
    this.recorder.start()
    this.render()
    return this
  }

  /** Append more recorded interactions to the current guide (from Manage steps). */
  continueRecording() {
    this.assertUsable()
    if (this.readOnly) return this
    if (!this.guide) this.guide = makeGuide(this.getUrlKey())
    this.player.stop()
    this.overlay.setControlsEnabled(false)
    this.overlay.hide()
    this.openPanel()
    this.recordingAppend = true
    this.recordingStepsBaseline = this.guide.steps.length
    this.mode = 'recording'
    this.recorder.start()
    this.render()
    return this
  }

  stopRecording() {
    this.assertUsable()
    this.recorder.stop()
    this.mode = 'manage'
    this.dirty = this.guide.steps.length > 0
    this.guide.url = this.getUrlKey()

    const appending = Boolean(this.recordingAppend)
    const added = Math.max(0, this.guide.steps.length - (Number(this.recordingStepsBaseline) || 0))
    this.recordingAppend = false
    this.recordingStepsBaseline = this.guide.steps.length

    const stamp = new Date().toLocaleString()
    const fallbackTitle = `${this.guide.steps.length} step${this.guide.steps.length === 1 ? '' : 's'} · ${stamp}`
    const hasCustomTitle = Boolean(
      this.guide.title
      && this.guide.title !== `Guide for ${this.guide.url}`
      && !/^\d+ steps? · /.test(this.guide.title),
    )

    // Naming happens in the Review & save panel — no browser prompt.
    if (!hasCustomTitle) {
      this.guide.title = fallbackTitle
    }

    this.focusGuideTitle = !appending
    this.persistDraft()
    if (this.guide.steps.length) this.saveGuideForCurrentPage()
    this.openPanel()
    this.render({
      flashMessage: appending && added > 0
        ? `${added} step${added === 1 ? '' : 's'} added. Rename below if needed.`
        : 'Guide saved. Rename it below if you want a clearer title.',
    })
    return structuredClone(this.guide)
  }

  recordStep(step) {
    this.guide.steps.push(step)
    this.dirty = true
    this.persistDraft()
    this.options.onRecordStep?.(structuredClone(step))
    // Keep the System Guider panel visible while capturing so steps stay on screen.
    this.openPanel()
    this.render()
  }

  load(value, { dirty = false, mode = 'manage' } = {}) {
    this.assertUsable()
    const parsed = typeof value === 'string' ? JSON.parse(value) : value
    this.guide = validateGuide(parsed)
    this.recorder.stop()
    this.player.stop()
    this.overlay.setControlsEnabled(false)
    this.mode = mode
    this.dirty = dirty
    this.render()
    return this
  }

  updateSteps(steps) {
    this.guide.steps = validateGuide({ ...this.guide, steps }).steps
    this.changed()
    return this
  }

  removeStep(stepId) {
    const id = String(stepId || '').trim()
    if (!id || !this.guide?.steps) return this
    const oldIndex = this.guide.steps.findIndex((step) => String(step.id) === id)
    if (oldIndex < 0) return this
    this.guide.steps = this.guide.steps.filter((step) => String(step.id) !== id)
    // Keep "New" badges correct when removing a step recorded before this append session.
    if (this.mode === 'recording') {
      const baseline = Number(this.recordingStepsBaseline) || 0
      if (oldIndex < baseline) {
        this.recordingStepsBaseline = Math.max(0, baseline - 1)
      }
    }
    this.changed()
    return this
  }

  confirmRemove(stepId) {
    const id = String(stepId || '').trim()
    if (!id) return
    // If confirm is blocked/unavailable, still remove (user explicitly clicked Remove).
    const canConfirm = typeof globalThis.confirm === 'function'
    const ok = canConfirm ? globalThis.confirm('Remove this guide step?') : true
    if (ok) this.removeStep(id)
  }

  moveStep(stepId, newIndex) {
    const id = String(stepId || '').trim()
    if (!id) return this
    const oldIndex = this.guide.steps.findIndex((step) => String(step.id) === id)
    if (oldIndex < 0) return this
    const bounded = Math.max(0, Math.min(Number(newIndex), this.guide.steps.length - 1))
    if (bounded === oldIndex) return this
    const [step] = this.guide.steps.splice(oldIndex, 1)
    this.guide.steps.splice(bounded, 0, step)
    this.changed()
    return this
  }

  moveRelative(stepId, amount) {
    const id = String(stepId || '').trim()
    if (!id || !amount) return this
    const index = this.guide.steps.findIndex((step) => String(step.id) === id)
    if (index < 0) return this
    return this.moveStep(id, index + amount)
  }

  /** Move a step to a 1-based position (e.g. 1 = first step). */
  moveToPosition(stepId, position) {
    const id = String(stepId || '').trim()
    const pos = Math.floor(Number(position))
    if (!id || !Number.isFinite(pos) || pos < 1) return this
    return this.moveStep(id, pos - 1)
  }

  dropStep(sourceId, targetId) {
    const source = String(sourceId || '').trim()
    const target = String(targetId || '').trim()
    if (!source || !target || source === target) return this
    const targetIndex = this.guide.steps.findIndex((step) => String(step.id) === target)
    if (targetIndex < 0) return this
    return this.moveStep(source, targetIndex)
  }

  editStep(stepId, field, value) {
    const step = this.guide.steps.find((item) => item.id === stepId)
    if (!step) return
    if (field === 'waitRequired') {
      step.waitFor = value ? { type: 'input', required: true } : null
    } else if (field === 'selector') {
      const next = String(value || '').trim()
      if (!next) return
      step.selector = next
      const alts = Array.isArray(step.selectorAlternatives) ? step.selectorAlternatives : []
      const chosen = alts.find((item) => item?.selector === next)
      if (chosen?.match && typeof chosen.match === 'object') {
        step.match = { ...chosen.match }
      }
      if (alts.length) {
        step.selectorAlternatives = alts.map((item) => ({
          ...item,
          suggested: item?.selector === next,
        }))
      }
    } else if (['title', 'description'].includes(field)) {
      step[field] = String(value)
    }
    this.dirty = true
    this.persistDraft()
    if (['title', 'description', 'selector'].includes(field)) this.scheduleGuideSave()
    if (field === 'waitRequired') this.render()
  }

  editGuide(field, value) {
    if (field !== 'title') return
    const nextTitle = String(value).trim() || this.guide.title
    this.guide.title = nextTitle
    this.dirty = true
    this.persistDraft()

    // Keep Play list / in-memory file guides in sync while renaming.
    if (Array.isArray(this.fileGuides)) {
      this.fileGuides = this.fileGuides.map((guide) => (
        guide.id === this.guide.id ? { ...guide, title: nextTitle } : guide
      ))
    }
    this.syncLauncher()
  }

  commitGuideTitle() {
    if (!this.guide?.steps?.length) return this
    return this.saveGuideForCurrentPage()
  }

  changed() {
    this.dirty = true
    this.persistDraft()
    // Keep in-memory file list in sync immediately so a later reload can't revive removed steps.
    if (Array.isArray(this.fileGuides) && this.guide?.id) {
      const snapshot = structuredClone(this.guide)
      const idx = this.fileGuides.findIndex((item) => item.id === this.guide.id)
      if (idx >= 0) this.fileGuides[idx] = snapshot
      else this.fileGuides = [...this.fileGuides, snapshot]
    }
    this.scheduleGuideSave()
    this.render()
  }

  preview(stepId) {
    const step = this.guide.steps.find((item) => item.id === stepId)
    const element = step && resolveStepTarget(step)
    if (element) this.overlay.highlight(element, false)
  }

  start() {
    return this.startFrom(0)
  }

  startFrom(stepIdOrIndex = 0) {
    this.assertUsable()
    if (!this.guide.steps.length) throw new Error('Cannot start a guide with no steps.')
    const index = typeof stepIdOrIndex === 'number'
      ? stepIdOrIndex
      : this.guide.steps.findIndex((step) => step.id === stepIdOrIndex)
    if (index < 0) throw new Error('The requested guide step does not exist.')
    this.recorder.stop()
    this.closePanel()
    this.mode = 'playback'
    this.overlay.setControlsEnabled(true)
    this.player.setOptions({
      autoScroll: true,
      stepDelay: 0,
    })
    // Persist even step 1 so a full page reload can resume this guide.
    this.persistPlaybackProgress(index)
    this.render({
      currentStep: this.guide.steps[index],
      currentIndex: index,
      total: this.guide.steps.length,
      waiting: false,
      failed: false,
    })
    this.player.start(this.guide.steps, index)
    return this
  }

  onPlaybackChange(step, index, status) {
    this.options.onStepChange?.(structuredClone(step), index)
    this.render({
      currentStep: step,
      currentIndex: index,
      total: this.guide.steps.length,
      ...status,
    })
  }

  onPlaybackFail(step, index) {
    this.options.onStepFail?.(structuredClone(step), index)
    this.render({
      currentStep: step,
      currentIndex: index,
      total: this.guide.steps.length,
      waiting: false,
      failed: true,
      autoSkipping: false,
      message: this.player?.missingTargetMessage?.(step) || '',
    })
  }

  onPlaybackComplete() {
    clearPendingPlay(this.options.storageKey)
    clearTimeout(this.playbackResumeTimer)
    this.player.stop()
    this.overlay.setControlsEnabled(false)
    this.overlay.hide()
    this.mode = this.options.showLauncher ? 'idle' : 'manage'
    this.render()
    if (this.options.showLauncher) this.closePanel()
    else this.openPanel()
    this.options.onComplete?.()
  }

  endPlayback() {
    if (this.mode !== 'playback' && !this.player?.active) return this
    clearPendingPlay(this.options.storageKey)
    clearTimeout(this.playbackResumeTimer)
    this.player.stop()
    this.overlay.setControlsEnabled(false)
    this.overlay.hide()
    this.mode = this.options.showLauncher ? 'idle' : 'manage'
    this.render()
    if (this.options.showLauncher) this.closePanel()
    else this.openPanel()
    return this
  }

  next() {
    this.player.next()
    return this
  }

  prev() {
    this.player.prev()
    return this
  }

  skip() {
    this.player.skip()
    return this
  }

  close(force = false) {
    if (!this.options.allowClose && !force) return false
    if (
      this.dirty
      && !force
      && globalThis.confirm
      && !globalThis.confirm('Close with unsaved guide changes?')
    ) {
      return false
    }
    this.recorder.stop()
    this.player.stop()
    this.overlay.setControlsEnabled(false)
    this.overlay.hide()
    clearPendingPlay(this.options.storageKey)
    clearTimeout(this.playbackResumeTimer)
    this.mode = 'idle'
    this.render()
    if (this.options.showLauncher) this.closePanel()
    this.options.onClose?.()
    return true
  }

  exportJSON() {
    return exportGuide(this.guide)
  }

  downloadJSON(filename = `${this.guide.id}.json`) {
    downloadGuide(this.guide, filename)
    this.dirty = false
    return this
  }

  downloadAllGuides() {
    this.assertUsable()
    const guides = this.getAllGuides()
    if (!guides.length) {
      globalThis.alert?.('No guides to download yet.')
      return this
    }
    const stamp = new Date().toISOString().slice(0, 10)
    downloadGuidesBundle(guides, `system-guider-guides-${stamp}.json`)
    return this
  }

  async copyJSON() {
    const result = await copyGuide(this.guide)
    this.dirty = false
    return result
  }

  /** Persist one guide to local map + backend (file storage) without changing the active editor. */
  async persistImportedGuide(guide) {
    const validated = validateGuide(guide)
    const urlKey = normalizeGuideUrl(validated.url || '/')
    validated.url = urlKey

    if (this.options.guidesByUrl) {
      saveGuideForUrl(this.options.storageKey, urlKey, validated)
    }

    if (Array.isArray(this.fileGuides)) {
      const existing = this.fileGuides.findIndex((item) => item.id === validated.id)
      if (existing >= 0) this.fileGuides[existing] = { ...validated }
      else this.fileGuides = [...this.fileGuides, { ...validated }]
    } else {
      this.fileGuides = [{ ...validated }]
    }

    if (this.fileStorage) {
      await saveGuideToFileStorage(this.fileStorage, validated, urlKey)
    }
    return validated
  }

  /**
   * Import one or more guides from JSON text/objects/files.
   * Auto-saves each guide to the backend when file storage is enabled.
   */
  async importGuides(payload, { sourceLabel = 'import' } = {}) {
    if (this.readOnly) return []
    this.assertUsable()
    const { guides, errors } = parseGuidesPayload(payload)
    const saved = []
    const saveErrors = [...errors]

    for (const guide of guides) {
      try {
        saved.push(await this.persistImportedGuide(guide))
      } catch (error) {
        saveErrors.push(`${guide.title || guide.id}: ${error.message}`)
      }
    }

    if (this.fileStorage) {
      try {
        await this.reloadFileGuides()
      } catch {
        // Keep optimistic in-memory list if reload fails.
      }
    }

    this.syncLauncher()
    this.mode = 'manage-routes'
    this.openPanel()
    const flash = saved.length
      ? `Loaded ${saved.length} guide${saved.length === 1 ? '' : 's'} from ${sourceLabel}${this.fileStorage ? ' and saved to backend' : ''}.`
      : `No guides loaded from ${sourceLabel}.`
    this.render({ flashMessage: flash })

    if (saveErrors.length) {
      globalThis.alert?.(
        `${saved.length ? 'Some guides had issues:\n' : 'Could not load guides:\n'}${saveErrors.slice(0, 8).join('\n')}`,
      )
    }
    return saved
  }

  openGuideFile() {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'application/json,.json'
    input.multiple = true
    input.addEventListener('change', async () => {
      const files = [...(input.files || [])]
      if (!files.length) return
      const collected = []
      const errors = []
      for (const file of files) {
        try {
          const text = await file.text()
          const { guides, errors: fileErrors } = parseGuidesPayload(text)
          collected.push(...guides)
          errors.push(...fileErrors.map((msg) => `${file.name}: ${msg}`))
        } catch (error) {
          errors.push(`${file.name}: ${error.message}`)
        }
      }
      if (!collected.length) {
        globalThis.alert?.(errors[0] || 'No valid guide JSON selected.')
        return
      }
      // Last file wins for duplicate guide ids.
      const unique = [...new Map(collected.map((guide) => [guide.id, guide])).values()]
      try {
        await this.importGuides(
          { guides: unique },
          { sourceLabel: files.length === 1 ? files[0].name : `${files.length} files` },
        )
        if (errors.length) {
          globalThis.alert?.(`Loaded with warnings:\n${errors.slice(0, 8).join('\n')}`)
        }
      } catch (error) {
        globalThis.alert?.(`Could not load guides: ${error.message}`)
      }
    }, { once: true })
    input.click()
  }

  pasteGuide() {
    const content = globalThis.prompt?.('Paste System Guider JSON (one guide, array, or { guides: [...] })')
    if (!content) return
    this.importGuides(content, { sourceLabel: 'clipboard' }).catch((error) => {
      globalThis.alert?.(`Could not load guide: ${error.message}`)
    })
  }

  persistDraft() {
    // With file storage, guides/settings live on disk — skip localStorage drafts.
    if (this.fileStorage) return
    saveDraft(this.options.storageKey, this.guide)
  }

  onKeyDown(event) {
    if (event.key === 'Escape' && this.mode === 'playback' && this.options.allowClose) {
      this.close()
    }
    if (event.key === 'Enter' && this.mode === 'playback') {
      const next = this.panel.root.querySelector('[data-action="next"]')
      if (next && !next.disabled) this.next()
    }
  }

  assertUsable() {
    if (this.destroyed) throw new Error('This System Guider instance was destroyed.')
  }

  destroy() {
    if (this.destroyed) return
    this.destroyed = true
    this.clearApiProbeTimer()
    clearTimeout(this.playbackResumeTimer)
    clearTimeout(this.guideSaveTimer)
    clearTimeout(this.settingsSaveTimer)
    this.recorder.destroy()
    this.player.destroy()
    this.overlay.destroy()
    this.panel.destroy()
    this.launcher?.destroy()
    document.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('popstate', this.onUrlChange)
    this.restoreHistoryHooks()
  }
}
