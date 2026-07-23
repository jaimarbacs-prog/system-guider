import { isElementPresent, isElementReady, resolveElement, resolveHighlightTarget, waitForStableElement } from './selectors.js'
import { resolveByScore } from './scoring.js'
import { normalizeUiSettings } from './settings.js'
import {
  findOpenChoiceField,
  findVisibleChoiceFields,
  isChoiceElement,
  isChoiceField,
  isDateLikeInput,
  resolveInteractiveField,
} from './recorder.js'
import { CALENDAR_CELL_SELECTOR, MENU_SELECTOR } from './overlay.js'

function looksLikeNavigationClick(clicked, element) {
  const node = clicked instanceof Element ? clicked : element
  if (!(node instanceof Element)) return false
  const link = node.closest?.('a[href], [href], [data-inertia], .nav-link, .custom-nav-class, [role="link"]')
  if (!link) return false
  if (link.hasAttribute('download')) return false
  const target = (link.getAttribute?.('target') || '').toLowerCase()
  if (target && target !== '_self') return false
  const href = (link.getAttribute?.('href') || '').trim()
  if (href && href !== '#' && !href.toLowerCase().startsWith('javascript:')) return true
  // Vue/Inertia nav items often use preventDefault + router.visit.
  return link.matches?.('a, .nav-link, .custom-nav-class, [data-inertia], [role="link"]') || false
}

/** Hide old auto-generated descriptions that only repeat the step title. */
function tipDescriptionFor(step) {
  const title = String(step?.title || '').trim()
  const description = String(step?.description || '').trim()
  if (!description) return ''
  if (description === title) return ''
  const stripped = description.replace(/^(click|select|enter|choose)\s+/i, '').trim()
  const titleCore = title.replace(/^(click|select|enter|choose)\s+/i, '').trim()
  if (stripped && titleCore && stripped.toLowerCase() === titleCore.toLowerCase()) return ''
  if (/^(click|select|enter|choose)\s+.+/i.test(description) && description.length <= title.length + 12) {
    return ''
  }
  return description
}

export class Player {
  constructor({
    overlay,
    timeout = 5000,
    autoAdvanceOnInput = true,
    autoAdvanceDelay = 600,
    autoSkipMissing = true,
    autoSkipMissingDelay = 400,
    stableWaitTimeout = 1500,
    targetWaitTimeout = 20000,
    targetRetryInterval = 250,
    targetReadyHits = 2,
    stepDelay = 0,
    autoScroll = true,
    ui = null,
    onChange,
    onFail,
    onComplete,
    onClickAdvance = null,
  }) {
    this.overlay = overlay
    this.timeout = timeout
    this.autoAdvanceOnInput = autoAdvanceOnInput
    this.autoAdvanceDelay = autoAdvanceDelay
    this.autoSkipMissing = autoSkipMissing
    this.autoSkipMissingDelay = autoSkipMissingDelay
    this.stableWaitTimeout = stableWaitTimeout
    this.targetWaitTimeout = Math.max(1000, Number(targetWaitTimeout) || 20000)
    this.targetRetryInterval = Math.max(50, Number(targetRetryInterval) || 250)
    this.targetReadyHits = Math.max(1, Number(targetReadyHits) || 2)
    this.stepDelay = stepDelay
    this.autoScroll = autoScroll !== false
    this.ui = normalizeUiSettings(ui || {})
    this.onChange = onChange
    this.onFail = onFail
    this.onComplete = onComplete
    this.onClickAdvance = onClickAdvance
    this.steps = []
    this.index = 0
    this.active = false
    this.token = 0
    this.waitCleanup = null
    this.autoSkipTimer = null
    this.navWaitTimer = null
    this.readyWaitInterval = null
    this.readyWaitResolve = null
    this.targetLostTimer = null
    this.rebindDebounceTimer = null
    this.waitingForNavigation = false
    this.lastChoiceField = null
    this.lastCompletedField = null
  }

  setUiOptions(ui) {
    this.ui = normalizeUiSettings(ui || {})
  }

  setOptions(partial = {}) {
    if (partial.autoAdvanceDelay != null) this.autoAdvanceDelay = Number(partial.autoAdvanceDelay) || 0
    if (partial.stepDelay != null) this.stepDelay = Number(partial.stepDelay) || 0
    if (partial.autoScroll != null) this.autoScroll = Boolean(partial.autoScroll)
    if (partial.timeout != null) this.timeout = Number(partial.timeout) || this.timeout
    if (partial.stableWaitTimeout != null) this.stableWaitTimeout = Number(partial.stableWaitTimeout) || this.stableWaitTimeout
    if (partial.targetWaitTimeout != null) this.targetWaitTimeout = Math.max(1000, Number(partial.targetWaitTimeout) || this.targetWaitTimeout)
    if (partial.targetRetryInterval != null) this.targetRetryInterval = Math.max(50, Number(partial.targetRetryInterval) || this.targetRetryInterval)
    if (partial.targetReadyHits != null) this.targetReadyHits = Math.max(1, Number(partial.targetReadyHits) || this.targetReadyHits)
  }

  resolveStepField(step) {
    if (!step?.selector && !step?.match) return null
    const found = resolveByScore(step.match, { selector: step.selector || '' })
      || resolveElement(step.selector)
    if (!found) return null
    return resolveInteractiveField(found) || found
  }

  findStepTarget(step) {
    if (!step?.selector && !step?.match) return null
    const scored = resolveByScore(step.match, { selector: step.selector || '' })
    if (scored && isElementPresent(scored)) return scored
    const fallback = resolveElement(step.selector)
    if (fallback && isElementPresent(fallback)) return fallback
    return null
  }

  clearReadyWait(resolveWith = null) {
    if (this.readyWaitInterval != null) {
      clearInterval(this.readyWaitInterval)
      this.readyWaitInterval = null
    }
    const resolve = this.readyWaitResolve
    this.readyWaitResolve = null
    if (resolve) resolve(resolveWith)
    this.overlay.hideWaiting?.()
  }

  /**
   * Poll until the step target exists in the DOM (SPA/page load safe).
   * Owns a single interval — always cleared via clearReadyWait / clearWait / stop.
   */
  waitUntilTargetReady(step, requestToken) {
    this.clearReadyWait(null)

    const immediate = this.findStepTarget(step)
    if (immediate) return Promise.resolve(immediate)

    const startedAt = Date.now()
    const timeout = Math.max(this.timeout, this.targetWaitTimeout)
    let attempt = 0
    let readyHits = 0
    let lastFound = null
    let lastShownSec = null

    return new Promise((resolve) => {
      this.readyWaitResolve = resolve

      const finish = (element) => {
        if (this.readyWaitResolve !== resolve) return
        this.clearReadyWait(element)
      }

      const tick = () => {
        if (!this.active || requestToken !== this.token) {
          finish(null)
          return
        }

        attempt += 1
        const found = this.findStepTarget(step)
        if (found) {
          readyHits = found === lastFound ? readyHits + 1 : 1
          lastFound = found
          if (readyHits >= this.targetReadyHits) {
            finish(found)
            return
          }
        } else {
          readyHits = 0
          lastFound = null
        }

        const elapsed = Date.now() - startedAt
        if (elapsed >= timeout) {
          finish(found || null)
          return
        }

        const remainingSec = Math.max(0, Math.ceil((timeout - elapsed) / 1000))
        if (remainingSec !== lastShownSec) {
          lastShownSec = remainingSec
          const label = `Waiting… ${remainingSec}s`
          this.onChange(step, this.index, {
            waiting: true,
            failed: false,
            waitKind: 'target',
            retryCount: attempt,
            message: label,
          })
          this.overlay.showWaiting?.(label, { seconds: remainingSec })
          this.overlay.positionSkipChipFallback?.()
        }
      }

      tick()
      if (this.readyWaitResolve !== resolve) return
      this.readyWaitInterval = setInterval(tick, this.targetRetryInterval)
    })
  }

  dedupeSteps(steps) {
    const result = []
    let lastField = null
    for (const step of steps) {
      if (step.action === 'input' && step.selector) {
        const field = this.resolveStepField(step)
        if (field && field === lastField) continue
        lastField = field || null
      } else {
        lastField = null
      }
      result.push(step)
    }
    return result
  }

  async start(steps, index = 0) {
    this.stop()
    this.steps = this.dedupeSteps(steps)
    this.index = Math.max(0, Math.min(index, Math.max(steps.length - 1, 0)))
    this.active = true
    if (!steps.length) {
      this.complete()
      return
    }
    await this.showCurrent()
  }

  missingTargetMessage(step) {
    const title = String(step?.title || '').trim()
    const target = title ? `"${title}"` : 'this step'
    return [
      `Target for ${target} was not found on this page.`,
      'Please follow this guide\'s requirements first',
      '(for example: create or open a record that shows this field),',
      'then continue — or skip this step.',
    ].join(' ')
  }

  normalizeStepTarget(step, found) {
    if (!found) {
      // Only retarget to a truly open choice control — never a random page Search input.
      if (step.action === 'click' || step.action === 'input') {
        return findOpenChoiceField()
      }
      return null
    }

    if (isChoiceElement(found)) {
      return resolveInteractiveField(found) || found
    }

    if (step.action === 'click') {
      const field = resolveInteractiveField(found)
      if (field && isChoiceField(field)) return field
    }

    return found
  }

  async showCurrent() {
    if (!this.active) return
    this.clearWait()
    const requestToken = ++this.token
    const step = this.steps[this.index]
    const fromCenter = this.overlay?.getHighlightCenter?.() || this.overlay?.lastHighlightCenter || null
    this.onChange(step, this.index, { waiting: false, failed: false })
    // Drop previous spotlight immediately so a completed select does not look like it "came back".
    this.overlay.hide()

    const delay = Number(step?.settings?.delay) || 0
    if (delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay))
      if (!this.active || requestToken !== this.token) return
    }

    if (step.action === 'manual' || (!step.selector && !step.match)) {
      this.overlay.hide()
      return
    }

    const found = await this.waitUntilTargetReady(step, requestToken)
    if (!this.active || requestToken !== this.token) return

    let element = this.normalizeStepTarget(step, found)
    if (element) {
      // After a choice (employee select → profile card), the modal reflows — don't wait
      // the full stable timeout or the guide feels stuck on the previous field.
      const justAdvanced = Boolean(this.lastCompletedField)
      const stableTimeout = justAdvanced
        ? Math.min(220, this.stableWaitTimeout)
        : this.stableWaitTimeout
      element = await waitForStableElement(element, {
        timeout: stableTimeout,
        stableFrames: justAdvanced ? 2 : 4,
      }) || element
    }
    if (!this.active || requestToken !== this.token) return

    // SPA re-render can detach the node between find and highlight — retry once.
    if (element && !isElementPresent(element)) {
      const again = await this.waitUntilTargetReady(step, requestToken)
      if (!this.active || requestToken !== this.token) return
      element = this.normalizeStepTarget(step, again)
    }
    if (!this.active || requestToken !== this.token) return

    const treatAsChoiceField = Boolean(
      (element && (isChoiceField(element) || isDateLikeInput(element)))
      || step.waitFor?.mode === 'interaction'
      || isChoiceElement(found),
    )

    // Only retarget when the recorded element is missing/hidden AND a dialog choice is available.
    // Never steal focus to the page Search bar.
    if (treatAsChoiceField && (!element || !isElementReady(element))) {
      const looksLikeSearch = (node) => {
        if (!(node instanceof Element)) return false
        if (node.matches?.('input[type="search"]')) return true
        const hint = [
          node.getAttribute?.('placeholder'),
          node.getAttribute?.('name'),
          node.getAttribute?.('aria-label'),
          node.id,
          node.className,
        ].filter(Boolean).join(' ').toLowerCase()
        return /\bsearch\b/.test(hint)
      }
      const dialog = document.querySelector('.modal.show, [role="dialog"][aria-modal="true"], [role="dialog"].show')
      if (dialog) {
        const selects = findVisibleChoiceFields(dialog).filter((node) => (
          (node.matches('select, [role="combobox"]') || isChoiceField(node))
          && !looksLikeSearch(node)
        ))
        let preferred = findOpenChoiceField()
        if (preferred && looksLikeSearch(preferred)) preferred = null
        if (!preferred && this.lastChoiceField && dialog.contains(this.lastChoiceField)) {
          const lastTop = this.lastChoiceField.getBoundingClientRect?.().top ?? -Infinity
          preferred = selects.find((node) => node.getBoundingClientRect().top > lastTop + 4) || null
        }
        if (!preferred) preferred = selects[0] || null
        if (preferred) element = preferred
      }
    }

    const highlightHost = resolveHighlightTarget(element) || element

    if (!element && !highlightHost) {
      this.overlay.hide()
      const message = this.missingTargetMessage(step)
      this.overlay.showWarning?.(message)
      this.onFail(step, this.index)
      this.onChange(step, this.index, {
        waiting: false,
        failed: true,
        autoSkipping: false,
        failKind: 'missing-target',
        message,
      })
      // Keep Skip available; do not jump to an unrelated field.
      this.overlay.positionSkipChipFallback?.()
      return
    }

    this.overlay.hideWarning?.()
    this.overlay.hideWaiting?.()

    const watchTarget = element || highlightHost
    if (fromCenter && this.ui?.animatedCursor && this.ui?.animations) {
      const rect = watchTarget.getBoundingClientRect?.()
      if (rect && rect.width >= 1 && rect.height >= 1) {
        const toCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        }
        await this.overlay.animateCursorTo?.(fromCenter, toCenter, this.ui.transitionMs)
        if (!this.active || requestToken !== this.token) return
      }
    }

    const isInputStep = step.action === 'input'
      || step.waitFor?.type === 'input'
      || treatAsChoiceField
      || isChoiceField(watchTarget)

    const shouldScroll = step?.settings?.autoScroll !== false
    this.overlay.highlight(highlightHost || watchTarget, shouldScroll, {
      // Keep spotlight cutout for selects so the active field stays bright.
      blockOutside: true,
      tip: {
        title: step.title || '',
        description: tipDescriptionFor(step),
        stepNumber: this.index + 1,
        totalSteps: this.steps.length,
      },
    })

    if (isInputStep) {
      let field = watchTarget.matches?.('input, textarea, select, .p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect')
        ? watchTarget
        : watchTarget.querySelector?.('input, textarea, select, .p-dropdown, .p-multiselect') || watchTarget
      const primeField = field.closest?.('.p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect')
      if (primeField) field = primeField
      const stepAdvance = Number(step?.settings?.autoAdvanceDelay)
      const previousAdvance = this.autoAdvanceDelay
      if (Number.isFinite(stepAdvance)) this.autoAdvanceDelay = stepAdvance
      const choiceMode = treatAsChoiceField
        || isChoiceField(field)
        || Boolean(primeField)
        || step.waitFor?.mode === 'interaction'
      this.watchInput(field, {
        ...step,
        waitFor: {
          type: 'input',
          required: true,
          mode: choiceMode ? 'interaction' : (step.waitFor?.mode || 'value'),
        },
      }, true)
      this.autoAdvanceDelay = previousAdvance
      return
    }

    if (step.action === 'click') {
      this.watchClick(watchTarget, step)
    }
  }

  watchClick(element, step) {
    const stepIndex = this.index
    this.onChange(step, stepIndex, { waiting: true, failed: false, waitKind: 'click' })
    const onTargetClick = async (event) => {
      const clicked = event.target instanceof Element ? event.target : null
      if (!clicked || !(clicked === element || element.contains(clicked))) return
      if (!this.active || this.index !== stepIndex) return
      // Hide immediately so navigation/scroll cannot resurrect the spotlight.
      this.overlay.hide()
      this.clearWait()

      const nextIndex = this.resolveNextIndex(stepIndex)
      const mayNavigate = looksLikeNavigationClick(clicked, element)
      this.onClickAdvance?.(step, stepIndex, nextIndex, { mayNavigate })

      await this.applyHideDelay(step)
      if (!this.active) return

      if (nextIndex >= this.steps.length) {
        this.complete()
        return
      }

      this.index = nextIndex
      if (mayNavigate) {
        // Don't show the next step yet — wait for SPA URL/content settle via
        // continueAfterNavigation (single show). Fallback if pushState never fires.
        this.waitingForNavigation = true
        this.onChange(this.steps[this.index], this.index, {
          waiting: true,
          failed: false,
          waitKind: 'navigate',
          message: 'Waiting…',
        })
        this.overlay.showWaiting?.('Waiting…')
        clearTimeout(this.navWaitTimer)
        this.navWaitTimer = setTimeout(() => {
          if (!this.active || !this.waitingForNavigation) return
          this.waitingForNavigation = false
          this.scheduleRebindCurrent({ force: true, delay: 0 })
        }, 1500)
        return
      }

      this.showCurrent()
    }
    element.addEventListener('click', onTargetClick, true)
    this.waitCleanup = () => {
      element.removeEventListener('click', onTargetClick, true)
    }
  }

  /** True when the current step spotlight is already live on a matching DOM node. */
  isCurrentStepBound() {
    if (!this.active) return false
    if (this.readyWaitInterval != null || this.readyWaitResolve) return false
    if (this.waitingForNavigation) return false
    const step = this.steps[this.index]
    if (!step) return false
    const host = this.overlay?.target || this.overlay?.highlightHost
    if (!(host instanceof Element) || !host.isConnected) return false
    if (!isElementPresent(host)) return false
    if (!this.overlay?.root?.classList.contains('sg-overlay--visible')) return false
    const found = this.findStepTarget(step)
    if (!found) return false
    return found === host || host.contains(found) || found.contains(host)
  }

  /**
   * Single coalesced path to (re)show the current step — avoids double spotlight animation
   * when nav timer + pushState + target-lost all fire close together.
   */
  scheduleRebindCurrent({ force = false, delay = 180 } = {}) {
    clearTimeout(this.navWaitTimer)
    this.navWaitTimer = null
    clearTimeout(this.targetLostTimer)
    this.targetLostTimer = null
    clearTimeout(this.rebindDebounceTimer)
    this.rebindDebounceTimer = setTimeout(() => {
      this.rebindDebounceTimer = null
      if (!this.active) return
      if (!force && this.isCurrentStepBound()) return
      this.waitingForNavigation = false
      this.showCurrent()
    }, Math.max(0, delay))
  }

  /** Call after host navigation (Inertia) so the next step binds to the new DOM. */
  continueAfterNavigation() {
    if (!this.active) return
    clearTimeout(this.navWaitTimer)
    this.navWaitTimer = null
    this.waitingForNavigation = false
    // Skip restart when step 2 is already highlighted on a live node.
    this.scheduleRebindCurrent({ force: false, delay: 180 })
  }

  /**
   * Spotlight target was remounted/removed while still on this step (content refresh).
   * Re-bind the same step — do not advance.
   */
  onSpotlightTargetLost() {
    if (!this.active) return
    // Already polling / navigating — let that path finish (no second show).
    if (this.readyWaitInterval != null || this.readyWaitResolve) return
    if (this.waitingForNavigation) return
    if (this.rebindDebounceTimer != null) return
    this.scheduleRebindCurrent({ force: true, delay: 160 })
  }

  resolveNextIndex(fromIndex = this.index) {
    const currentStep = this.steps[fromIndex]
    const completedField = this.lastCompletedField
    let nextIndex = fromIndex + 1
    while (nextIndex < this.steps.length) {
      const nextStep = this.steps[nextIndex]
      if (currentStep?.action !== 'input' || nextStep?.action !== 'input') break
      if (nextStep.selector === currentStep.selector) {
        nextIndex += 1
        continue
      }
      if (completedField) {
        const nextField = this.resolveStepField(nextStep)
        if (nextField && nextField === completedField) {
          nextIndex += 1
          continue
        }
      }
      break
    }
    return nextIndex
  }

  watchInput(element, step, required = true) {
    const stepIndex = this.index
    // Normalize PrimeVue label/placeholder nodes to the stable control root.
    const primeRoot = element?.closest?.('.p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect')
    if (primeRoot) element = primeRoot

    const isSelect = element instanceof HTMLSelectElement
    const isDateField = isDateLikeInput(element)
    const isAutocomplete = Boolean(
      element?.matches?.('.p-autocomplete')
      || element?.closest?.('.p-autocomplete'),
    )
    // Multi-select stays open for several picks — advance only after the panel closes.
    const isMultiSelect = Boolean(
      element?.matches?.('.p-multiselect')
      || element?.closest?.('.p-multiselect'),
    )
    const isPrimeChoice = Boolean(
      element?.matches?.('.p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect')
      || element?.closest?.('.p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect'),
    )
    const isInteractionOnly = isSelect
      || isDateField
      || step.waitFor?.mode === 'interaction'
      || isChoiceField(element)
      || isPrimeChoice
    const isDiscreteInput = element instanceof HTMLInputElement
      && ['date', 'datetime-local', 'time', 'month', 'week', 'color', 'range'].includes(element.type)
    let hasInteracted = false
    let menuOpened = false
    let optionPicked = false
    let autoAdvanceTimer = null
    let labelObserver = null
    let expandedObserver = null
    let multiSelectObserver = null
    // Choice fields advance right after the option is picked (no multi-second settle).
    // Multiselect waits for panel close instead (delay applied then).
    const delay = isSelect || isDiscreteInput || isInteractionOnly || isPrimeChoice || isAutocomplete
      ? Math.min(this.autoAdvanceDelay || 0, 50)
      : this.autoAdvanceDelay
    // Do NOT use [class*="overlay"] — PrimeVue adds p-overlay-open on the control itself.
    const dialog = element.closest?.('.modal.show, .modal, [role="dialog"], .p-overlaypanel')
      || document.querySelector('.modal.show, [role="dialog"], .p-overlaypanel')
      || document
    const menuSelector = MENU_SELECTOR
    const optionSelector = [
      '.p-dropdown-item',
      '.p-multiselect-item',
      '.p-autocomplete-item',
      '.p-cascadeselect-item',
      '[role="option"]',
      '.dropdown-item',
      '.select2-results__option',
      '.el-select-dropdown__item',
      '.n-base-select-option',
      '.vs__dropdown-option',
      '.multiselect__option',
    ].join(', ')
    const openMenuSelector = [
      '.p-autocomplete-panel',
      '.p-dropdown-panel',
      '.p-multiselect-panel',
      '.p-cascadeselect-panel',
    ].join(', ')
    const triggerSelector = [
      'select',
      '[role="combobox"]',
      'input',
      'textarea',
      '[aria-haspopup="listbox"]',
      '[aria-haspopup="true"]',
      '[aria-haspopup="dialog"]',
      '[aria-expanded]',
      '.dropdown-toggle',
      '.select2-selection',
      '.vs__dropdown-toggle',
      '.n-base-selection',
      '.el-select',
      '.multiselect',
      '.choices',
      '.ts-control',
      '.p-dropdown',
      '.p-dropdown-trigger',
      '.p-dropdown-label',
      '.p-multiselect',
      '.p-multiselect-trigger',
      '.p-multiselect-label',
      '.p-autocomplete',
      '.p-cascadeselect',
      '.input-group button',
      '.input-group .btn',
      '[class*="datepicker"] button',
      '.mx-input-append',
      '.ant-picker-suffix',
      '.p-datepicker-trigger',
    ].join(', ')

    const isCalendarCell = (node) => Boolean(
      node instanceof Element && (node.matches(CALENDAR_CELL_SELECTOR) || isChoiceElement(node)),
    )

    const isMultiSelectPanelOpen = () => {
      if (!isMultiSelect || !(element instanceof Element)) return false
      if (element.classList.contains('p-overlay-open')) return true
      if (element.classList.contains('p-inputwrapper-focus') && element.querySelector('[aria-expanded="true"]')) {
        return true
      }
      if (element.getAttribute('aria-expanded') === 'true') return true
      if (element.querySelector?.('[aria-expanded="true"]')) return true
      const panel = document.querySelector('.p-multiselect-panel')
      if (!(panel instanceof Element)) return false
      const style = globalThis.getComputedStyle?.(panel)
      if (style && (style.display === 'none' || style.visibility === 'hidden')) return false
      const owner = resolveInteractiveField(panel) || findOpenChoiceField()
      return Boolean(owner && (owner === element || element.contains(owner) || owner.contains?.(element)))
    }

    /** Multiselect: keep waiting while the overlay is open so users can pick several values. */
    const shouldDeferMultiSelectAdvance = () => isMultiSelect && isMultiSelectPanelOpen()

    const readPrimeLabel = () => {
      const root = element.matches?.('.p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect')
        ? element
        : element.closest?.('.p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect')
      if (!root) return ''
      const label = root.querySelector('.p-dropdown-label, .p-multiselect-label, .p-autocomplete-input')
      if (!label) return ''
      if (label.classList.contains('p-placeholder') || label.classList.contains('p-dropdown-label-empty')) return ''
      if (label instanceof HTMLInputElement) return String(label.value || '').trim()
      return String(label.textContent || '').trim()
    }

    const readValue = () => {
      const control = (
        element instanceof HTMLInputElement
        || element instanceof HTMLTextAreaElement
        || element instanceof HTMLSelectElement
      )
        ? element
        : element.querySelector?.('input:not([type="hidden"]), textarea, select') || element

      if (control instanceof HTMLInputElement && ['checkbox', 'radio'].includes(control.type)) {
        return String(control.checked)
      }
      // Only real form controls have a meaningful .value — never read it from div.p-dropdown.
      if (
        control instanceof HTMLInputElement
        || control instanceof HTMLTextAreaElement
        || control instanceof HTMLSelectElement
      ) {
        return String(control.value ?? '')
      }
      return readPrimeLabel()
    }
    let lastObservedValue = readValue()

    const isMet = () => {
      if (isInteractionOnly) return hasInteracted
      if (element instanceof HTMLInputElement && ['checkbox', 'radio'].includes(element.type)) {
        return element.checked
      }
      if (isPrimeChoice) return hasInteracted || Boolean(readPrimeLabel())
      return String(readValue()).trim().length > 0
    }

    const notify = () => {
      this.onChange(step, stepIndex, {
        waiting: required && !isMet(),
        failed: false,
        waitKind: isInteractionOnly || isPrimeChoice ? 'choice' : 'input',
      })
    }

    const retargetHighlight = (field) => {
      if (!(field instanceof Element)) return
      const host = resolveHighlightTarget(field) || field
      // Re-highlighting the same control closes/steals focus from open dropdowns.
      const sameTarget = this.overlay.target === host
        || this.overlay.highlightHost === host
        || this.overlay.target === field
        || this.overlay.highlightHost === field
      if (sameTarget) {
        this.overlay.refreshMenus?.()
        return
      }
      this.overlay.highlight(host, false, { blockOutside: true })
    }

    const isTextValueStep = !isInteractionOnly && !isPrimeChoice && !isAutocomplete

    const blurField = () => {
      const control = (
        element instanceof HTMLInputElement
        || element instanceof HTMLTextAreaElement
      )
        ? element
        : element.querySelector?.('input:not([type="hidden"]), textarea')
      if (control instanceof HTMLElement) {
        try { control.blur() } catch { /* ignore */ }
      }
      try {
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
      } catch { /* ignore */ }
    }

    const goNext = () => {
      if (this.active && this.index === stepIndex) this.next()
    }

    const advanceNow = (field = element) => {
      if (!this.active || this.index !== stepIndex || hasInteracted) return
      hasInteracted = true
      lastObservedValue = readValue()
      clearTimeout(autoAdvanceTimer)
      this.overlay.hideGoChip?.()
      if (field instanceof Element) {
        this.lastChoiceField = field
        this.lastCompletedField = resolveInteractiveField(field) || field
      }
      notify()
      blurField()
      this.overlay.hide()
      autoAdvanceTimer = setTimeout(goNext, isTextValueStep ? Math.min(delay, 120) : delay)
    }

    const syncGoChip = () => {
      if (!isTextValueStep) return
      if (!this.active || this.index !== stepIndex || hasInteracted) {
        this.overlay.hideGoChip?.()
        return
      }
      if (isMet()) {
        this.overlay.showGoChip?.(() => {
          if (!this.active || this.index !== stepIndex || hasInteracted) return
          if (!isMet()) {
            notify()
            this.overlay.hideGoChip?.()
            return
          }
          advanceNow(element)
        }, 'Go')
      } else {
        this.overlay.hideGoChip?.()
      }
    }

    const completeInteraction = (field = element) => {
      if (!this.active || this.index !== stepIndex || hasInteracted) return
      // Multiselect: only finish after the panel is closed (X / outside click / toggle).
      if (shouldDeferMultiSelectAdvance()) return

      // Choice/PrimeVue selects advance on interaction even when "require value" is on.
      const canAdvance = isInteractionOnly || isPrimeChoice
        ? true
        : isMet()

      if (!canAdvance) {
        notify()
        syncGoChip()
        return
      }

      // Plain text: show Go — blur + advance only when the user confirms.
      if (isTextValueStep) {
        lastObservedValue = readValue()
        notify()
        syncGoChip()
        return
      }

      if (!this.autoAdvanceOnInput) {
        hasInteracted = true
        lastObservedValue = readValue()
        if (field instanceof Element) {
          this.lastChoiceField = field
          this.lastCompletedField = resolveInteractiveField(field) || field
        }
        notify()
        return
      }

      advanceNow(field)
    }

    const belongsToThisField = (node) => {
      if (!(node instanceof Element)) return false
      if (node === element || element.contains(node)) return true
      const nested = element.querySelector?.('input, textarea, select')
      if (nested && (node === nested || nested.contains(node))) return true
      const resolved = resolveInteractiveField(node)
      if (resolved && (resolved === element || element.contains(resolved) || resolved.contains?.(element))) {
        return true
      }
      // Portaled autocomplete/dropdown items: resolve to our host while our menu is open.
      const panel = node.closest(openMenuSelector)
      if (panel && (isAutocomplete || isPrimeChoice)) {
        const owner = resolveInteractiveField(node) || findOpenChoiceField()
        if (owner && (owner === element || element.contains(owner) || owner.contains?.(element))) {
          return true
        }
        // Fallback: if this field's panel is the one open near us.
        const open = findOpenChoiceField()
        return Boolean(open && (open === element || element.contains(open)))
      }
      const open = findOpenChoiceField()
      return Boolean(open && (open === element || element.contains(open) || open.contains?.(element)))
    }

    const scheduleComplete = (field = element) => {
      if (!this.active || this.index !== stepIndex || hasInteracted) return
      if (shouldDeferMultiSelectAdvance()) return
      // Let PrimeVue/Vue commit the selected value before we advance.
      clearTimeout(autoAdvanceTimer)
      autoAdvanceTimer = setTimeout(() => completeInteraction(field), 0)
    }

    const tryCompleteMultiSelectAfterClose = () => {
      if (!isMultiSelect || hasInteracted) return
      if (shouldDeferMultiSelectAdvance()) return
      if (!(optionPicked || readValue() !== lastObservedValue)) return
      scheduleComplete(element)
    }

    const onValueEvent = (event) => {
      const target = event?.target
      // Autocomplete: never complete from typing/change — only from a real option pick.
      if (isAutocomplete) {
        if (!optionPicked) return
        scheduleComplete(element)
        return
      }
      if (isMultiSelect) {
        // Value changes while open are expected (multi pick). Wait until panel closes.
        if (belongsToThisField(target instanceof Element ? target : element)) {
          optionPicked = true
          menuOpened = true
        }
        tryCompleteMultiSelectAfterClose()
        return
      }
      if (isPrimeChoice && !isDateField && !isSelect) {
        if (event?.type === 'input') return
        if (event?.type === 'change' && !optionPicked && !menuOpened) return
      }
      if (isInteractionOnly && target instanceof Element) {
        const inScope = dialog.contains(target)
          || Boolean(target.closest(menuSelector))
          || belongsToThisField(target)
        if (inScope && (
          target.matches('select, input, textarea')
          || isChoiceField(target)
          || isChoiceElement(target)
        )) {
          // Typing inside a choice control input — ignore until an option is picked.
          if (
            isPrimeChoice
            && target.matches('input, textarea')
            && !isChoiceElement(target)
            && event?.type === 'input'
          ) {
            return
          }
          scheduleComplete(resolveInteractiveField(target) || element)
          return
        }
      }
      // Ignore bubbled events from unrelated controls while waiting on a choice field.
      if (isInteractionOnly && target instanceof Element && !belongsToThisField(target)) {
        return
      }
      // Plain text inputs: only advance from events on THIS field (ignore other inputs).
      if (!isInteractionOnly && !isPrimeChoice && target instanceof Element && !belongsToThisField(target)) {
        return
      }
      scheduleComplete(element)
    }

    const onDocPointer = (event) => {
      if (!isInteractionOnly || hasInteracted) return
      const clicked = event.target instanceof Element ? event.target : null
      if (!clicked) return

      // Custom select menus are often portaled under <body>, outside the modal.
      const inDialog = dialog.contains(clicked)
      const menu = clicked.closest(menuSelector)
      const inMenu = Boolean(menu)
      const option = clicked.closest(optionSelector)
      const calendarCell = isCalendarCell(clicked)
      const multiClose = isMultiSelect && Boolean(clicked.closest([
        '.p-multiselect-close',
        '.p-multiselect-remove',
        '[data-pc-section="closebutton"]',
        '[data-pc-section="clearicon"]',
        '.p-multiselect-header .p-multiselect-close',
      ].join(', ')))

      // Multiselect close control: finish only after picks (or value change).
      if (multiClose && belongsToThisField(clicked)) {
        menuOpened = true
        // Let PrimeVue close the panel, then advance if a value was chosen.
        setTimeout(tryCompleteMultiSelectAfterClose, 40)
        return
      }

      // Option / calendar pick for THIS field.
      // PrimeVue AutoComplete removes the item on mousedown, so use pointerdown.
      if ((option || calendarCell) && belongsToThisField(clicked)) {
        menuOpened = true
        // Ignore filter typing inside the open panel.
        if (clicked.matches('input, textarea') && !option && !calendarCell) {
          this.overlay.refreshMenus?.()
          return
        }
        // Autocomplete: only a list item counts — not panel chrome.
        if (isAutocomplete && !option) {
          this.overlay.refreshMenus?.()
          return
        }
        if (
          event.type === 'pointerdown'
          || event.type === 'pointerup'
          || event.type === 'click'
          || calendarCell
        ) {
          optionPicked = true
          // Multiselect: keep panel open for more picks — advance on close only.
          if (isMultiSelect) {
            this.overlay.refreshMenus?.()
            return
          }
          scheduleComplete(resolveInteractiveField(clicked) || findOpenChoiceField() || element)
        }
        return
      }

      if (!inDialog && !inMenu && !calendarCell) {
        // Outside click can close a multiselect panel.
        if (isMultiSelect && menuOpened) {
          setTimeout(tryCompleteMultiSelectAfterClose, 40)
        }
        return
      }

      // Opening the control: keep highlight/menus usable — do not advance yet.
      const openedField = clicked.closest(triggerSelector)
      if (openedField && (inDialog || dialog.contains(openedField)) && !inMenu && !option && !calendarCell) {
        menuOpened = true
        const field = resolveInteractiveField(openedField) || openedField
        if (belongsToThisField(field) || belongsToThisField(openedField)) {
          retargetHighlight(field)
          this.overlay.refreshMenus?.()
          // Toggling the multiselect trigger closed the panel.
          if (isMultiSelect) setTimeout(tryCompleteMultiSelectAfterClose, 40)
        }
        if (openedField instanceof HTMLSelectElement && event.type === 'pointerdown') {
          const finish = () => scheduleComplete(field)
          const openedAt = Date.now()
          openedField.addEventListener('change', finish, { once: true })
          openedField.addEventListener('focusout', () => {
            if (Date.now() - openedAt < 280) return
            setTimeout(finish, 40)
          }, { once: true })
        }
      }
    }

    element.addEventListener('input', onValueEvent)
    element.addEventListener('change', onValueEvent)
    document.addEventListener('change', onValueEvent, true)
    document.addEventListener('input', onValueEvent, true)
    document.addEventListener('pointerdown', onDocPointer, true)
    document.addEventListener('pointerup', onDocPointer, true)
    document.addEventListener('click', onDocPointer, true)

    // PrimeVue updates the label text without firing input/change on the root.
    if (isPrimeChoice && typeof MutationObserver !== 'undefined') {
      const label = element.querySelector?.('.p-dropdown-label, .p-multiselect-label, .p-autocomplete-input')
      // Regular dropdown: label text change after a pick is enough.
      // Autocomplete: ignore mutations — typing also changes the input value.
      // Multiselect: chip/label changes while open must not advance yet.
      if (label && !isAutocomplete) {
        labelObserver = new MutationObserver(() => {
          if (readValue() === lastObservedValue) return
          if (isMultiSelect) {
            optionPicked = true
            menuOpened = true
            tryCompleteMultiSelectAfterClose()
            return
          }
          scheduleComplete(element)
        })
        labelObserver.observe(label, {
          characterData: true,
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['class', 'value'],
        })
      }
      const expanded = element.querySelector?.('[aria-expanded]') || (
        element.hasAttribute?.('aria-expanded') ? element : null
      )
      if (expanded) {
        expandedObserver = new MutationObserver(() => {
          if (!menuOpened || hasInteracted) return
          if (expanded.getAttribute('aria-expanded') !== 'false') return
          // Autocomplete: panel close without a list pick must not advance.
          if (isAutocomplete && !optionPicked) return
          if (isMultiSelect) {
            tryCompleteMultiSelectAfterClose()
            return
          }
          if (optionPicked || readValue() !== lastObservedValue) scheduleComplete(element)
        })
        expandedObserver.observe(expanded, { attributes: true, attributeFilter: ['aria-expanded'] })
      }
      if (isMultiSelect) {
        multiSelectObserver = new MutationObserver(() => {
          tryCompleteMultiSelectAfterClose()
        })
        multiSelectObserver.observe(element, {
          attributes: true,
          attributeFilter: ['class', 'aria-expanded'],
        })
      }
    }

    const valueObserver = setInterval(() => {
      if (hasInteracted) return
      // Autocomplete: only after a real list option pick.
      if (isAutocomplete) {
        if (!optionPicked) return
        scheduleComplete(element)
        return
      }
      if (isMultiSelect) {
        if (readValue() !== lastObservedValue) {
          optionPicked = true
          menuOpened = true
        }
        tryCompleteMultiSelectAfterClose()
        return
      }
      if (readValue() !== lastObservedValue) {
        lastObservedValue = readValue()
        scheduleComplete(element)
        return
      }
      if (isTextValueStep) syncGoChip()
    }, 80)

    const onEnterKey = (event) => {
      if (!isTextValueStep || hasInteracted) return
      if (event.key !== 'Enter') return
      if (!belongsToThisField(event.target instanceof Element ? event.target : element)) return
      if (!isMet()) return
      event.preventDefault()
      advanceNow(element)
    }

    this.waitCleanup = () => {
      clearTimeout(autoAdvanceTimer)
      clearInterval(valueObserver)
      labelObserver?.disconnect()
      expandedObserver?.disconnect()
      multiSelectObserver?.disconnect()
      this.overlay.hideGoChip?.()
      element.removeEventListener('input', onValueEvent)
      element.removeEventListener('change', onValueEvent)
      document.removeEventListener('change', onValueEvent, true)
      document.removeEventListener('input', onValueEvent, true)
      document.removeEventListener('keydown', onEnterKey, true)
      document.removeEventListener('pointerdown', onDocPointer, true)
      document.removeEventListener('pointerup', onDocPointer, true)
      document.removeEventListener('click', onDocPointer, true)
    }
    notify()
    if (isTextValueStep) {
      document.addEventListener('keydown', onEnterKey, true)
      syncGoChip()
    }
  }

  async applyHideDelay(step) {
    const hideDelay = Math.max(0, Number(step?.settings?.hideDelay) || 0)
    if (!hideDelay) return
    this.overlay.hide()
    await new Promise((resolve) => setTimeout(resolve, hideDelay))
  }

  async next() {
    if (!this.active) return
    const currentStep = this.steps[this.index]
    const nextIndex = this.resolveNextIndex(this.index)
    await this.applyHideDelay(currentStep)
    if (!this.active) return
    if (nextIndex >= this.steps.length) {
      this.complete()
      return
    }
    this.index = nextIndex
    this.waitingForNavigation = false
    clearTimeout(this.navWaitTimer)
    this.showCurrent()
  }

  prev() {
    if (!this.active || this.index <= 0) return
    this.index -= 1
    this.waitingForNavigation = false
    clearTimeout(this.navWaitTimer)
    this.showCurrent()
  }

  skip() {
    this.next()
  }

  complete() {
    this.stop()
    this.onComplete()
  }

  clearWait() {
    clearTimeout(this.autoSkipTimer)
    this.autoSkipTimer = null
    this.clearReadyWait(null)
    this.waitCleanup?.()
    this.waitCleanup = null
  }

  stop() {
    this.active = false
    this.token += 1
    this.waitingForNavigation = false
    clearTimeout(this.navWaitTimer)
    this.navWaitTimer = null
    clearTimeout(this.targetLostTimer)
    this.targetLostTimer = null
    clearTimeout(this.rebindDebounceTimer)
    this.rebindDebounceTimer = null
    this.lastChoiceField = null
    this.lastCompletedField = null
    this.clearWait()
    this.overlay.hideWarning?.()
    this.overlay.hideWaiting?.()
    this.overlay.hide()
  }

  destroy() {
    this.stop()
  }
}
