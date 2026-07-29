const HIGHLIGHT_MOTIONS = new Set(['none', 'pulse', 'wobble', 'fade'])
const FONT_FAMILIES = new Set(['system', 'inter', 'arial', 'roboto', 'serif'])
const LAUNCHER_POSITIONS = new Set(['bottom-right', 'bottom-left', 'top-right', 'top-left'])

const FONT_STACKS = {
  system: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  inter: 'Inter, ui-sans-serif, system-ui, sans-serif',
  arial: 'Arial, Helvetica, sans-serif',
  roboto: 'Roboto, Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", serif',
}

export const defaultUiSettings = () => ({
  fontFamily: 'system',
  animations: true,
  highlightMotion: 'pulse',
  spotlightFade: true,
  animatedCursor: false,
  tipBg: '#0f1b33',
  tipText: '#f8fafc',
  skipBg: '#2563eb',
  skipText: '#ffffff',
  spotlightColor: '#3b82f6',
  overlayOpacity: 0.58,
  transitionMs: 220,
})

export const defaultLauncherSettings = () => ({
  size: 80,
  position: 'bottom-right',
  animations: true,
})

/** Built-in CSS selectors treated as page loading / skeleton UI. */
export const DEFAULT_LOADING_SELECTORS = [
  '.skeleton',
  '.shimmer',
  '[aria-busy="true"]',
  '.p-skeleton',
]

/** Normalize a list of loading CSS selectors (comma / newline separated or array). */
export function normalizeLoadingSelectorList(value) {
  let items = []
  if (Array.isArray(value)) {
    items = value.map((item) => String(item || '').trim()).filter(Boolean)
  } else if (value != null && value !== '') {
    items = String(value)
      .split(/[\n,]+/)
      .map((item) => item.trim())
      .filter(Boolean)
  }
  const unique = [...new Set(items)]
  return unique.length ? unique : [...DEFAULT_LOADING_SELECTORS]
}

/** Join loading selectors into a single CSS selector string. */
export function loadingSelectorsToCss(selectors) {
  return normalizeLoadingSelectorList(selectors).join(', ')
}

export const defaultGuiderSettings = () => ({
  /** Full page reload before play (legacy). */
  resetBeforePlay: 'none',
  /** When opening a guide on another route, hard-reload instead of soft navigate. */
  reloadOnNavigate: false,
  resetBeforePlayDelay: 450,
  /**
   * After a click step, wait for page loaders (skeleton / shimmer / aria-busy)
   * to clear before highlighting the next step. Default true.
   */
  pageSettleAfterClick: true,
  /** Max ms to wait for page loaders after a click. */
  pageSettleTimeout: 20000,
  /** Ms to allow loaders to appear after a click before treating the page as idle. */
  pageSettleAppearGraceMs: 300,
  /** Extra ms after loaders clear before highlighting. Only used when a loader was seen. Default 1500. */
  postReadyDelay: 1500,
  /**
   * CSS selectors that mark loading / skeleton UI.
   * Playback waits until none match (and targets containing them are not ready).
   */
  loadingSelectors: [...DEFAULT_LOADING_SELECTORS],
  /**
   * URL query param for auto-play: ?demo=0 plays the 1st guide on this route,
   * ?demo=1 the 2nd, etc. Set false/empty to disable. Default "demo".
   */
  autoPlayQueryParam: 'demo',
  /** Remove the auto-play query param from the URL after starting playback. Default true. */
  autoPlayStripQuery: true,
  /** Panel chrome theme: dark | light */
  theme: 'dark',
  /**
   * Account IDs allowed to record / manage guides.
   * Empty = view-only for everyone (Play only). Must list IDs to allow Record/Panel.
   */
  editorAccountIds: [],
  /**
   * While hovering the launcher orb, typing this PIN opens the settings panel
   * even when the account is not in editorAccountIds. Empty = disabled.
   */
  bypassPin: '123456',
  /** Show “Account ID: …” under the launcher search bar. Off by default. */
  showAccountId: false,
  /**
   * Show the floating orb / launcher. Default true.
   * Set false in settings.json to turn off System Guider UI on the host app.
   */
  showOrb: true,
  /**
   * Pathname prefixes/paths where the floating toolbar is hidden.
   * Includes `/` for apps that serve login (or no-guider pages) at the root.
   * Examples: /login, /, /time-log
   */
  hiddenUrls: ['/login', '/'],
  launcher: defaultLauncherSettings(),
  ui: defaultUiSettings(),
})

/** Normalize a free-text list of account ids (comma / newline / space separated). */
export function normalizeAccountIdList(value) {
  if (Array.isArray(value)) {
    return [...new Set(value.map((id) => String(id).trim()).filter(Boolean))]
  }
  if (value == null || value === '') return []
  return [...new Set(
    String(value)
      .split(/[\s,;]+/)
      .map((id) => id.trim())
      .filter(Boolean),
  )]
}

/** Normalize hidden URL path list. */
export function normalizeHiddenUrlList(value) {
  if (Array.isArray(value)) {
    return [...new Set(value.map((url) => normalizeHiddenUrl(url)).filter(Boolean))]
  }
  if (value == null || value === '') return []
  return [...new Set(
    String(value)
      .split(/[\n,;]+/)
      .map((url) => normalizeHiddenUrl(url))
      .filter(Boolean),
  )]
}

function normalizeHiddenUrl(value) {
  let path = String(value || '').trim()
  if (!path) return ''
  try {
    if (/^https?:\/\//i.test(path)) path = new URL(path).pathname
  } catch {
    // keep raw
  }
  path = path.split('?')[0].split('#')[0]
  if (!path.startsWith('/')) path = `/${path}`
  if (path.length > 1) path = path.replace(/\/+$/, '')
  return path.toLowerCase()
}

/** True when current pathname should hide the guider toolbar. */
export function isUrlHiddenForGuider(pathname, hiddenUrls = []) {
  const current = normalizeHiddenUrl(pathname || '/')
  const list = normalizeHiddenUrlList(hiddenUrls)
  if (!list.length) return false
  return list.some((rule) => {
    if (rule.endsWith('*')) {
      const prefix = rule.slice(0, -1)
      return current === prefix.replace(/\/+$/, '') || current.startsWith(prefix)
    }
    return current === rule || current.startsWith(`${rule}/`)
  })
}

/** True when account may record/manage. Must be listed — empty allow-list = view-only. */
export function canAccountManageGuides(accountId, editorAccountIds = []) {
  const allowed = normalizeAccountIdList(editorAccountIds)
  if (!allowed.length) return false
  if (accountId == null || accountId === '') return false
  const id = String(accountId).trim()
  return allowed.includes(id)
}

/** Digits-only bypass PIN (max 12). Empty string disables the shortcut. */
export function normalizeBypassPin(value, fallback = '123456') {
  if (value === null || value === undefined) {
    return String(fallback ?? '').replace(/\D/g, '').slice(0, 12)
  }
  const digits = String(value).replace(/\D/g, '').slice(0, 12)
  return digits
}

function normalizeHexColor(value, fallback) {
  const raw = String(value || '').trim()
  if (/^#[0-9a-fA-F]{6}$/.test(raw)) return raw.toLowerCase()
  if (/^#[0-9a-fA-F]{3}$/.test(raw)) {
    const [, a, b, c] = raw
    return `#${a}${a}${b}${b}${c}${c}`.toLowerCase()
  }
  return fallback
}

export function normalizeUiSettings(value = {}) {
  const base = defaultUiSettings()
  if (!value || typeof value !== 'object' || Array.isArray(value)) return base
  const motion = String(value.highlightMotion || base.highlightMotion)
  const fontFamily = String(value.fontFamily || base.fontFamily).toLowerCase()
  return {
    fontFamily: FONT_FAMILIES.has(fontFamily) ? fontFamily : base.fontFamily,
    animations: value.animations !== false,
    highlightMotion: HIGHLIGHT_MOTIONS.has(motion) ? motion : base.highlightMotion,
    spotlightFade: value.spotlightFade !== false,
    animatedCursor: Boolean(value.animatedCursor),
    tipBg: normalizeHexColor(value.tipBg, base.tipBg),
    tipText: normalizeHexColor(value.tipText, base.tipText),
    skipBg: normalizeHexColor(value.skipBg, base.skipBg),
    skipText: normalizeHexColor(value.skipText, base.skipText),
    spotlightColor: normalizeHexColor(value.spotlightColor, base.spotlightColor),
    overlayOpacity: (() => {
      const n = Number(value.overlayOpacity)
      return Number.isFinite(n) ? Math.min(0.9, Math.max(0, n)) : base.overlayOpacity
    })(),
    transitionMs: (() => {
      const n = Math.round(Number(value.transitionMs))
      return Number.isFinite(n) ? Math.min(1000, Math.max(0, n)) : base.transitionMs
    })(),
  }
}

export function normalizeLauncherSettings(value = {}) {
  const base = defaultLauncherSettings()
  if (!value || typeof value !== 'object' || Array.isArray(value)) return base
  const position = String(value.position || base.position).toLowerCase()
  const size = Math.round(Number(value.size))
  return {
    size: Number.isFinite(size) ? Math.min(96, Math.max(48, size)) : base.size,
    position: LAUNCHER_POSITIONS.has(position) ? position : base.position,
    animations: value.animations !== false,
  }
}

export function normalizeGuiderSettings(value = {}) {
  const base = defaultGuiderSettings()
  if (!value || typeof value !== 'object' || Array.isArray(value)) return base
  const opacity = Number(value.ui?.overlayOpacity)
  const transition = Number(value.ui?.transitionMs)
  const uiSource = {
    ...(value.ui && typeof value.ui === 'object' ? value.ui : {}),
    overlayOpacity: Number.isFinite(opacity) ? opacity : base.ui.overlayOpacity,
    transitionMs: Number.isFinite(transition) ? transition : base.ui.transitionMs,
  }
  return {
    ...base,
    ...value,
    resetBeforePlay: value.resetBeforePlay === 'reload' ? 'reload' : 'none',
    reloadOnNavigate: Boolean(value.reloadOnNavigate),
    resetBeforePlayDelay: Math.max(0, Number(value.resetBeforePlayDelay) || base.resetBeforePlayDelay),
    pageSettleAfterClick: Object.prototype.hasOwnProperty.call(value, 'pageSettleAfterClick')
      ? Boolean(value.pageSettleAfterClick)
      : Boolean(base.pageSettleAfterClick),
    pageSettleTimeout: Math.max(0, Number(value.pageSettleTimeout) || base.pageSettleTimeout),
    pageSettleAppearGraceMs: Math.max(0, Number(
      Object.prototype.hasOwnProperty.call(value, 'pageSettleAppearGraceMs')
        ? value.pageSettleAppearGraceMs
        : base.pageSettleAppearGraceMs,
    ) || 0),
    postReadyDelay: Math.max(0, Number(
      Object.prototype.hasOwnProperty.call(value, 'postReadyDelay')
        ? value.postReadyDelay
        : base.postReadyDelay,
    ) || 0),
    loadingSelectors: normalizeLoadingSelectorList(
      Object.prototype.hasOwnProperty.call(value, 'loadingSelectors')
        ? value.loadingSelectors
        : base.loadingSelectors,
    ),
    autoPlayQueryParam: (() => {
      if (!Object.prototype.hasOwnProperty.call(value, 'autoPlayQueryParam')) {
        return base.autoPlayQueryParam
      }
      if (value.autoPlayQueryParam === false || value.autoPlayQueryParam == null) return false
      const key = String(value.autoPlayQueryParam).trim()
      return key || false
    })(),
    autoPlayStripQuery: Object.prototype.hasOwnProperty.call(value, 'autoPlayStripQuery')
      ? Boolean(value.autoPlayStripQuery)
      : Boolean(base.autoPlayStripQuery),
    theme: String(value.theme || base.theme).toLowerCase() === 'light' ? 'light' : 'dark',
    editorAccountIds: normalizeAccountIdList(
      value.editorAccountIds ?? value.guiderAccounts ?? base.editorAccountIds,
    ),
    bypassPin: normalizeBypassPin(
      Object.prototype.hasOwnProperty.call(value, 'bypassPin')
        ? value.bypassPin
        : base.bypassPin,
      base.bypassPin,
    ),
    showAccountId: Object.prototype.hasOwnProperty.call(value, 'showAccountId')
      ? Boolean(value.showAccountId)
      : Boolean(base.showAccountId),
    showOrb: Object.prototype.hasOwnProperty.call(value, 'showOrb')
      ? Boolean(value.showOrb)
      : Object.prototype.hasOwnProperty.call(value, 'showLauncher')
        ? Boolean(value.showLauncher)
        : Boolean(base.showOrb),
    hiddenUrls: normalizeHiddenUrlList(
      value.hiddenUrls ?? value.hiddenRoutes ?? base.hiddenUrls,
    ),
    launcher: normalizeLauncherSettings(value.launcher),
    ui: normalizeUiSettings(uiSource),
  }
}

/** Apply playback appearance CSS variables on documentElement. */
export function applyUiTheme(settings = {}) {
  const normalized = normalizeGuiderSettings(settings)
  const ui = normalized.ui
  const theme = normalized.theme === 'light' ? 'light' : 'dark'
  const root = document.documentElement
  if (!root) return ui
  root.dataset.sgTheme = theme
  root.style.setProperty('--sg-tip-bg', ui.tipBg)
  root.style.setProperty('--sg-tip-text', ui.tipText)
  root.style.setProperty('--sg-skip-bg', ui.skipBg)
  root.style.setProperty('--sg-skip-text', ui.skipText)
  root.style.setProperty('--sg-spotlight', ui.spotlightColor)
  root.style.setProperty('--sg-overlay-opacity', String(ui.overlayOpacity))
  root.style.setProperty('--sg-spotlight-ms', `${ui.transitionMs}ms`)
  root.style.setProperty('--sg-font-family', FONT_STACKS[ui.fontFamily] || FONT_STACKS.system)
  root.dataset.sgAnimations = ui.animations ? 'on' : 'off'
  root.dataset.sgHighlightMotion = ui.highlightMotion
  root.dataset.sgSpotlightFade = ui.spotlightFade ? 'on' : 'off'
  return ui
}
