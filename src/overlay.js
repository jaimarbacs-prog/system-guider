import { isElementPresent, isElementReady, resolveHighlightTarget, scrollElementIntoView } from './selectors.js'
import { normalizeUiSettings } from './settings.js'

export const CALENDAR_CELL_SELECTOR = [
  'td.day',
  '.day',
  '[role="gridcell"]',
  '.flatpickr-day',
  '.dp__cell',
  '.datepicker-days td',
  '.p-datepicker-day',
  '.p-datepicker-calendar td',
  '.p-datepicker-calendar td > span',
  '.p-monthpicker-month',
  '.p-yearpicker-year',
  '.ant-picker-cell',
  '.mx-calendar-content .cell',
  '.react-datepicker__day',
  '.el-date-table td',
  '.bootstrap-datepicker td',
].join(', ')

export const MENU_SELECTOR = [
  '[role="listbox"]',
  '[role="menu"]',
  '.dropdown-menu',
  '.dropdown-menu.show',
  '.select2-dropdown',
  '.select2-results',
  '.vs__dropdown-menu',
  '.n-base-select-menu',
  '.el-select-dropdown',
  '.el-picker-panel',
  '.el-date-picker',
  '.multiselect__content-wrapper',
  '.choices__list--dropdown',
  '.ts-dropdown',
  '.ss-content',
  '.p-dropdown-panel',
  '.p-multiselect-panel',
  '.p-autocomplete-panel',
  '.p-cascadeselect-panel',
  '.dp__menu',
  '.dp__outer_menu',
  '.dp__calendar',
  '.flatpickr-calendar',
  '.flatpickr-calendar.open',
  '.datepicker',
  '.datepicker-dropdown',
  '.datepicker-picker',
  '.bootstrap-datetimepicker-widget',
  '.daterangepicker',
  '.mx-datepicker-popup',
  '.mx-datepicker-main',
  '.mx-calendar',
  '.react-datepicker',
  '.react-datepicker-popper',
  '.react-datepicker__portal',
  '.ant-picker-dropdown',
  '.p-datepicker-panel',
  '.p-datepicker',
  '.picker__holder',
  '.ui-autocomplete',
  '.ui-datepicker',
  '.autocomplete-results',
  '.tt-menu',
  '.typeahead',
  '[class*="picker-panel"]',
  '[class*="calendar-panel"]',
].join(', ')

const CALENDAR_PANEL_SELECTOR = [
  '.datepicker-dropdown',
  '.datepicker',
  '.flatpickr-calendar',
  '.dp__menu',
  '.dp__outer_menu',
  '.dp__calendar',
  '.ant-picker-dropdown',
  '.p-datepicker-panel',
  '.p-datepicker',
  '.mx-datepicker-popup',
  '.mx-datepicker-main',
  '.bootstrap-datetimepicker-widget',
  '.daterangepicker',
  '.react-datepicker',
  '.react-datepicker-popper',
  '.el-picker-panel',
  '.ui-datepicker',
  '.picker__holder',
  '.dropdown-menu',
  '[class*="picker-panel"]',
  '[class*="calendar-panel"]',
].join(', ')

function isVisibleMenu(menu) {
  if (!(menu instanceof HTMLElement)) return false
  if (menu.closest('.sg-overlay, .sg-panel, .sg-launcher, .sg-skip-chip')) return false
  const style = getComputedStyle(menu)
  if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) {
    return false
  }
  const rect = menu.getBoundingClientRect()
  return rect.width >= 2 && rect.height >= 2
}

function isPopupPanel(element) {
  if (!(element instanceof Element)) return false
  const rect = element.getBoundingClientRect()
  // PrimeVue dropdown/multiselect option lists can be tall with filters.
  const isPrimeMenu = element.matches?.(
    '.p-dropdown-panel, .p-multiselect-panel, .p-autocomplete-panel, .p-cascadeselect-panel',
  )
  const maxEdge = isPrimeMenu ? 900 : 520
  if (rect.width > maxEdge || rect.height > maxEdge) return false
  // Never treat large page overlays / filter drawers as "menus".
  if (element.matches('.p-overlaypanel, .modal, .modal-dialog, .modal-content, [class*="overlay-custom"], .offcanvas')) {
    return false
  }
  if (element.matches('.modal, .modal.show, .modal-dialog, .modal-content')) return false
  if (element.closest('.modal.show, .modal') && !element.matches('.dropdown-menu, .datepicker-dropdown, [class*="picker"], [class*="calendar"], .p-dropdown-panel, .p-multiselect-panel, .p-autocomplete-panel')) {
    const style = getComputedStyle(element)
    if (style.position !== 'absolute' && style.position !== 'fixed') return false
  }
  return true
}

function findCalendarPanelRoot(cell) {
  if (!(cell instanceof Element)) return null
  const panel = cell.closest(CALENDAR_PANEL_SELECTOR)
  if (panel && isPopupPanel(panel)) return panel
  const table = cell.closest('table, [role="grid"]')
  if (table && table.querySelector(CALENDAR_CELL_SELECTOR) && isPopupPanel(table)) return table
  return null
}

function findAdjacentPickerPanels(anchor) {
  if (!(anchor instanceof Element)) return []
  const hostRect = anchor.getBoundingClientRect()
  const candidates = document.querySelectorAll([
    'table',
    '[role="grid"]',
    '[class*="picker"]',
    '[class*="calendar"]',
    '[class*="datepicker"]',
    '.dropdown-menu',
    '.p-dropdown-panel',
    '.p-multiselect-panel',
    '.p-autocomplete-panel',
  ].join(', '))
  return [...candidates].filter((el) => {
    if (!isVisibleMenu(el) || !isPopupPanel(el)) return false
    if (el === anchor || anchor.contains(el)) return false
    const hasCalendarCells = el.matches(CALENDAR_PANEL_SELECTOR)
      || Boolean(el.querySelector?.(CALENDAR_CELL_SELECTOR))
    if (!hasCalendarCells && !el.matches(MENU_SELECTOR)) return false
    const rect = el.getBoundingClientRect()
    const near = rect.top >= hostRect.top - 48 && rect.top <= hostRect.bottom + 380
    const overlap = rect.left < hostRect.right + 140 && rect.right > hostRect.left - 140
    return near && overlap
  })
}

export function getVisiblePickerPanels(anchor = null) {
  const panels = new Set()
  const nearAnchor = (el) => {
    if (!(anchor instanceof Element)) return true
    const hostRect = anchor.getBoundingClientRect()
    const rect = el.getBoundingClientRect()
    const nearY = rect.top >= hostRect.top - 64 && rect.top <= hostRect.bottom + 420
    const nearX = rect.left < hostRect.right + 220 && rect.right > hostRect.left - 220
    if (nearY && nearX) return true
    const ids = [el.id]
    el.querySelectorAll?.('[id]').forEach((node) => {
      if (node.id) ids.push(node.id)
    })
    return ids.some((id) => {
      if (!id) return false
      const safe = globalThis.CSS?.escape?.(id) || id.replace(/"/g, '\\"')
      const owner = document.querySelector(`[aria-controls="${safe}"], [aria-owns="${safe}"]`)
      return Boolean(owner && (anchor === owner || anchor.contains(owner) || owner.contains(anchor)))
    })
  }

  document.querySelectorAll(MENU_SELECTOR).forEach((el) => {
    if (!isVisibleMenu(el) || !isPopupPanel(el)) return
    if (!nearAnchor(el)) return
    panels.add(el)
  })
  document.querySelectorAll(CALENDAR_CELL_SELECTOR).forEach((cell) => {
    const panel = findCalendarPanelRoot(cell)
    if (panel && isVisibleMenu(panel) && nearAnchor(panel)) panels.add(panel)
  })
  if (anchor instanceof Element) {
    findAdjacentPickerPanels(anchor).forEach((panel) => panels.add(panel))
  }
  return [...panels]
}

export class SpotlightOverlay {
  constructor({
    overlayOpacity = 0.58,
    zIndex = 2147483000,
    onSkip = null,
    skipLabel = 'Skip Step',
    onHighlightBox = null,
    onTargetLost = null,
    ui = null,
  } = {}) {
    this.opacity = overlayOpacity
    this.zIndex = zIndex
    this.onSkip = onSkip
    this.skipLabel = skipLabel
    this.onHighlightBox = onHighlightBox
    this.onTargetLost = onTargetLost
    this.ui = normalizeUiSettings(ui || { overlayOpacity })
    this.root = null
    this.frame = null
    this.blocks = null
    this.skipChip = null
    this.stepTip = null
    this.stepTipContent = null
    this.guideCursor = null
    this.cursorTimer = null
    this.warningBanner = null
    this.waitingBanner = null
    this.controlsEnabled = false
    this.raf = null
    this.target = null
    this.highlightHost = null
    this.blockOutside = false
    this.raisedTarget = null
    this.previousTargetStyle = null
    this.resizeObserver = null
    this.menuObserver = null
    this.menuWatchTimer = null
    this.menuRefreshTimer = null
    this.relayoutTimers = []
    this.elevatedMenus = []
    this.syncing = false
    this.targetLostNotified = false
    this.lastHighlightCenter = null
    this.onViewportChange = () => this.scheduleLayout()
    this.onBlockInteraction = (event) => {
      if (this.allowsInteractionAt(event.clientX, event.clientY)) return
      event.preventDefault()
      event.stopPropagation()
    }
    this.onSkipClick = (event) => {
      event.preventDefault()
      event.stopPropagation()
      this.onSkip?.()
    }
  }

  applyUiSettings(ui) {
    this.ui = normalizeUiSettings(ui || {})
    this.opacity = this.ui.overlayOpacity
    if (this.root) {
      this.root.style.setProperty('--sg-overlay-opacity', String(this.opacity))
      this.syncSpotlightMotionClass()
    }
  }

  prefersReducedMotion() {
    return Boolean(globalThis.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches)
  }

  motionsEnabled() {
    return Boolean(this.ui?.animations) && !this.prefersReducedMotion()
  }

  syncSpotlightMotionClass() {
    if (!this.frame) return
    this.frame.classList.remove(
      'sg-spotlight--pulse',
      'sg-spotlight--wobble',
      'sg-spotlight--fade',
      'sg-spotlight--fade-in',
    )
    if (!this.motionsEnabled()) return
    const motion = this.ui?.highlightMotion || 'none'
    if (motion === 'pulse') this.frame.classList.add('sg-spotlight--pulse')
    if (motion === 'wobble') this.frame.classList.add('sg-spotlight--wobble')
    if (motion === 'fade') this.frame.classList.add('sg-spotlight--fade')
  }

  getHighlightCenter() {
    const host = this.highlightHost || this.target
    if (!(host instanceof Element) || !host.isConnected) return this.lastHighlightCenter
    const rect = host.getBoundingClientRect()
    if (rect.width < 1 || rect.height < 1) return this.lastHighlightCenter
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    }
  }

  mountGuideCursor() {
    if (this.guideCursor) return
    this.guideCursor = document.createElement('div')
    this.guideCursor.className = 'sg-guide-cursor'
    this.guideCursor.setAttribute('aria-hidden', 'true')
    this.guideCursor.hidden = true
    this.guideCursor.style.zIndex = String(this.zIndex + 50)
    document.body.append(this.guideCursor)
  }

  hideGuideCursor() {
    clearTimeout(this.cursorTimer)
    this.cursorTimer = null
    if (this.guideCursor) this.guideCursor.hidden = true
  }

  /**
   * Animate a flat cursor from one point to another (between steps).
   * Resolves when the tween finishes (or immediately if disabled).
   */
  animateCursorTo(from, to, durationMs) {
    return new Promise((resolve) => {
      if (!this.motionsEnabled() || !this.ui?.animatedCursor || !from || !to) {
        resolve()
        return
      }
      this.mountGuideCursor()
      const ms = Math.max(0, Number(durationMs) || this.ui.transitionMs || 220)
      const cursor = this.guideCursor
      cursor.hidden = false
      cursor.style.transition = 'none'
      cursor.style.left = `${Math.round(from.x)}px`
      cursor.style.top = `${Math.round(from.y)}px`
      void cursor.offsetWidth
      cursor.style.transition = `left ${ms}ms ease, top ${ms}ms ease, opacity ${Math.max(120, ms / 2)}ms ease`
      cursor.style.left = `${Math.round(to.x)}px`
      cursor.style.top = `${Math.round(to.y)}px`
      clearTimeout(this.cursorTimer)
      this.cursorTimer = setTimeout(() => {
        this.hideGuideCursor()
        resolve()
      }, ms + 40)
    })
  }

  setSkipHandler(handler) {
    this.onSkip = handler
  }

  setControlsEnabled(enabled) {
    this.controlsEnabled = Boolean(enabled)
    if (this.controlsEnabled) {
      this.mountSkipChip()
      this.mountStepTip()
      if (this.skipChip) this.skipChip.hidden = false
      if (this.root?.classList.contains('sg-overlay--visible') && this.target) {
        this.scheduleLayout()
      } else {
        this.positionSkipChipFallback()
      }
    } else if (this.skipChip) {
      this.skipChip.hidden = true
      this.hideStepTip()
    }
  }

  showWarning(message) {
    this.mount()
    this.hideWaiting()
    if (!this.warningBanner) {
      this.warningBanner = document.createElement('div')
      this.warningBanner.className = 'sg-warning-banner'
      this.warningBanner.setAttribute('role', 'alert')
      document.body.append(this.warningBanner)
    }
    this.warningBanner.style.zIndex = String(this.zIndex + 40)
    this.warningBanner.textContent = String(message || 'Target not found.')
    this.warningBanner.hidden = false
    this.positionSkipChipFallback()
  }

  hideWarning() {
    if (this.warningBanner) this.warningBanner.hidden = true
  }

  showWaiting(message, { seconds = null } = {}) {
    this.mount()
    this.hideWarning()
    if (!this.waitingBanner) {
      this.waitingBanner = document.createElement('div')
      this.waitingBanner.className = 'sg-waiting-banner'
      this.waitingBanner.setAttribute('role', 'status')
      this.waitingBanner.setAttribute('aria-live', 'polite')
      document.body.append(this.waitingBanner)
    }
    this.waitingBanner.style.zIndex = String(this.zIndex + 40)
    this.waitingBanner.hidden = false

    const hasSeconds = seconds != null && Number.isFinite(Number(seconds))
    if (hasSeconds) {
      const sec = Math.max(0, Math.ceil(Number(seconds)))
      const prev = this.waitingBanner.dataset.seconds
      this.waitingBanner.dataset.seconds = String(sec)
      this.waitingBanner.innerHTML = `
        <span class="sg-waiting-banner__label">Waiting</span>
        <span class="sg-waiting-banner__count">${sec}</span>
        <span class="sg-waiting-banner__unit">s</span>
      `
      const count = this.waitingBanner.querySelector('.sg-waiting-banner__count')
      if (count && prev !== String(sec)) {
        count.classList.remove('sg-waiting-banner__count--tick')
        void count.offsetWidth
        count.classList.add('sg-waiting-banner__count--tick')
      }
    } else {
      delete this.waitingBanner.dataset.seconds
      this.waitingBanner.textContent = String(message || 'Waiting…')
    }

    this.positionSkipChipFallback()
  }

  hideWaiting() {
    if (this.waitingBanner) {
      this.waitingBanner.hidden = true
      delete this.waitingBanner.dataset.seconds
    }
  }

  mount() {
    if (this.root) return
    this.root = document.createElement('div')
    this.root.className = 'sg-overlay'
    this.root.style.setProperty('--sg-overlay-opacity', String(this.opacity))
    this.root.style.zIndex = String(this.zIndex)
    this.root.setAttribute('aria-hidden', 'true')

    this.blocks = {
      top: this.createBlock('top'),
      left: this.createBlock('left'),
      right: this.createBlock('right'),
      bottom: this.createBlock('bottom'),
    }

    this.frame = document.createElement('div')
    this.frame.className = 'sg-spotlight'

    this.root.append(
      this.blocks.top,
      this.blocks.left,
      this.blocks.right,
      this.blocks.bottom,
      this.frame,
    )
    document.body.append(this.root)
    window.addEventListener('resize', this.onViewportChange)
    window.addEventListener('scroll', this.onViewportChange, true)
    if (this.controlsEnabled) this.mountSkipChip()
  }

  mountSkipChip() {
    if (this.skipChip) return
    this.skipChip = document.createElement('button')
    this.skipChip.type = 'button'
    this.skipChip.className = 'sg-skip-chip'
    this.skipChip.textContent = this.skipLabel
    this.skipChip.style.zIndex = String(this.zIndex + 30)
    this.skipChip.hidden = !this.controlsEnabled
    this.skipChip.addEventListener('click', this.onSkipClick)
    document.body.append(this.skipChip)
  }

  mountStepTip() {
    if (this.stepTip) return
    this.stepTip = document.createElement('div')
    this.stepTip.className = 'sg-step-tip'
    this.stepTip.setAttribute('role', 'status')
    this.stepTip.style.zIndex = String(this.zIndex + 31)
    this.stepTip.hidden = true
    document.body.append(this.stepTip)
  }

  setStepTip({
    title = '',
    description = '',
    stepNumber = null,
    totalSteps = null,
  } = {}) {
    this.mountStepTip()
    const tipTitle = String(title || '').trim()
    const tipDescription = String(description || '').trim()
    const number = Number.isFinite(Number(stepNumber)) ? Math.max(1, Number(stepNumber)) : null
    const total = Number.isFinite(Number(totalSteps)) ? Math.max(1, Number(totalSteps)) : null
    this.stepTipContent = {
      title: tipTitle,
      description: tipDescription,
      stepNumber: number,
      totalSteps: total,
    }
    if (!tipTitle) {
      this.hideStepTip()
      return
    }

    this.stepTip.replaceChildren()
    if (this.skipChip) this.skipChip.hidden = true

    const badge = document.createElement('div')
    badge.className = 'sg-step-tip__badge'
    badge.textContent = String(number || 1)
    badge.setAttribute(
      'aria-label',
      total ? `Step ${number || 1} of ${total}` : `Step ${number || 1}`,
    )

    const titleEl = document.createElement('div')
    titleEl.className = 'sg-step-tip__title'
    titleEl.textContent = tipTitle

    this.stepTip.append(badge, titleEl)

    if (tipDescription) {
      const descriptionEl = document.createElement('div')
      descriptionEl.className = 'sg-step-tip__description'
      descriptionEl.textContent = tipDescription
      this.stepTip.append(descriptionEl)
    }

    const skipButton = document.createElement('button')
    skipButton.type = 'button'
    skipButton.className = 'sg-step-tip__skip'
    skipButton.textContent = this.skipLabel
    skipButton.addEventListener('click', this.onSkipClick)
    this.stepTip.append(skipButton)

    this.stepTip.hidden = false
  }

  hideStepTip() {
    if (this.stepTip) this.stepTip.hidden = true
    this.stepTipContent = null
    if (this.skipChip) this.skipChip.hidden = !this.controlsEnabled
  }

  positionSkipChip(x, y, w, h) {
    if (!this.controlsEnabled) return
    const gap = 10
    const vw = window.innerWidth
    const vh = window.innerHeight
    const tipVisible = this.stepTip && !this.stepTip.hidden
    const tipW = tipVisible ? (this.stepTip.offsetWidth || 220) : 0
    const tipH = tipVisible ? (this.stepTip.offsetHeight || 48) : 0
    const chipW = this.skipChip && !this.skipChip.hidden ? (this.skipChip.offsetWidth || 100) : 0
    const chipH = this.skipChip && !this.skipChip.hidden ? (this.skipChip.offsetHeight || 36) : 0
    const clusterW = Math.max(tipW, chipW)
    const clusterH = (tipVisible ? tipH : 0) + (tipVisible && chipW ? 8 : 0) + (chipW ? chipH : 0)

    let left = x + w + gap
    let top = y

    if (left + clusterW > vw - 8) {
      left = Math.min(Math.max(8, x), vw - clusterW - 8)
      top = y - clusterH - gap
    }
    if (top < 8) {
      top = y + h + gap
    }

    left = Math.min(Math.max(8, left), vw - clusterW - 8)
    top = Math.min(Math.max(8, top), vh - clusterH - 8)

    if (tipVisible) {
      this.stepTip.style.left = `${Math.round(left)}px`
      this.stepTip.style.top = `${Math.round(top)}px`
      top += tipH + 8
    }
    if (this.skipChip && !this.skipChip.hidden) {
      this.skipChip.style.left = `${Math.round(left)}px`
      this.skipChip.style.top = `${Math.round(top)}px`
    }
  }

  positionSkipChipFallback() {
    if (!this.controlsEnabled) return
    const tipVisible = this.stepTip && !this.stepTip.hidden
    const tipW = tipVisible ? (this.stepTip.offsetWidth || 220) : 0
    const tipH = tipVisible ? (this.stepTip.offsetHeight || 48) : 0
    const chipW = this.skipChip && !this.skipChip.hidden ? (this.skipChip.offsetWidth || 100) : 0
    const chipH = this.skipChip && !this.skipChip.hidden ? (this.skipChip.offsetHeight || 36) : 0
    const warningVisible = this.warningBanner && !this.warningBanner.hidden
    const waitingVisible = this.waitingBanner && !this.waitingBanner.hidden
    const warningH = warningVisible ? (this.warningBanner.offsetHeight || 72) : 0
    const waitingH = waitingVisible ? (this.waitingBanner.offsetHeight || 40) : 0
    const bottomGap = 24 + warningH + waitingH + (warningVisible || waitingVisible ? 12 : 0)
    const clusterH = (tipVisible ? tipH + 8 : 0) + (chipW ? chipH : 0)
    let top = Math.max(8, window.innerHeight - clusterH - bottomGap)
    const left = Math.max(8, Math.round((window.innerWidth - Math.max(tipW, chipW || tipW)) / 2))

    if (tipVisible) {
      this.stepTip.style.left = `${left}px`
      this.stepTip.style.top = `${Math.round(top)}px`
      top += tipH + 8
    }
    if (this.skipChip && !this.skipChip.hidden) {
      this.skipChip.style.left = `${Math.max(8, Math.round((window.innerWidth - chipW) / 2))}px`
      this.skipChip.style.top = `${Math.round(top)}px`
    }
  }

  createBlock(side) {
    const block = document.createElement('div')
    block.className = `sg-overlay__block sg-overlay__block--${side}`
    ;['click', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'pointerdown', 'pointerup', 'contextmenu']
      .forEach((type) => block.addEventListener(type, this.onBlockInteraction, true))
    return block
  }

  highlight(target, shouldScroll = true, { blockOutside = false, tip = null } = {}) {
    if (!(target instanceof Element)) return
    this.hideWarning()
    this.hideWaiting()
    this.hideGuideCursor()
    this.targetLostNotified = false
    this.mount()
    if (this.controlsEnabled) {
      this.mountSkipChip()
      this.mountStepTip()
    }
    if (this.root) {
      this.root.style.display = ''
      this.root.style.setProperty('--sg-overlay-opacity', String(this.ui?.overlayOpacity ?? this.opacity))
    }
    this.clearRelayoutTimers()
    this.unobserveTarget()

    this.target = target
    this.highlightHost = resolveHighlightTarget(target) || target
    this.blockOutside = Boolean(blockOutside)
    this.root.classList.toggle('sg-overlay--blocking', this.blockOutside)
    this.raiseTarget(this.blockOutside ? this.highlightHost : null)

    if (tip && tip.title) {
      this.setStepTip(tip)
    } else {
      this.hideStepTip()
    }

    if (shouldScroll && isElementPresent(this.highlightHost)) {
      scrollElementIntoView(this.highlightHost, { behavior: 'smooth', block: 'center' })
    }

    this.observeTarget(this.highlightHost)
    this.watchMenus()
    this.root.classList.add('sg-overlay--visible')
    this.syncSpotlightMotionClass()
    if (this.frame && this.motionsEnabled() && this.ui?.spotlightFade) {
      this.frame.classList.remove('sg-spotlight--fade-in')
      void this.frame.offsetWidth
      this.frame.classList.add('sg-spotlight--fade-in')
    }
    this.scheduleLayout()
    this.elevateOpenMenus()
    this.lastHighlightCenter = this.getHighlightCenter()
    ;[80, 180, 320, 520, 800].forEach((delay) => {
      this.relayoutTimers.push(setTimeout(() => {
        if (!this.target) return
        this.highlightHost = resolveHighlightTarget(this.target) || this.target
        this.scheduleLayout()
        this.elevateOpenMenus()
        this.lastHighlightCenter = this.getHighlightCenter()
      }, delay))
    })
  }

  /** Refresh cutout/menus without re-raising the target (avoids closing open dropdowns). */
  refreshMenus() {
    if (!this.root || !this.target || this.syncing) return
    this.elevateOpenMenus()
    this.scheduleLayout()
  }

  getVisibleMenus() {
    const anchor = this.highlightHost || this.target
    return getVisiblePickerPanels(anchor)
  }

  allowsInteractionAt(clientX, clientY) {
    const anchor = this.highlightHost || this.target
    const menus = getVisiblePickerPanels(anchor)
    if (!menus.length) return false
    return menus.some((menu) => {
      const rect = menu.getBoundingClientRect()
      return clientX >= rect.left
        && clientX <= rect.right
        && clientY >= rect.top
        && clientY <= rect.bottom
    })
  }

  elevateOpenMenus() {
    if (this.syncing) return
    this.syncing = true
    try {
      const menus = this.getVisibleMenus()
      const prev = this.elevatedMenus.map((item) => item.menu)
      const same = menus.length === prev.length && menus.every((menu, index) => menu === prev[index])
      if (same) {
        // Already elevated — only ensure pointer events stay enabled.
        menus.forEach((menu) => {
          if (menu.style.pointerEvents !== 'auto') menu.style.pointerEvents = 'auto'
          if (menu.style.zIndex !== String(this.zIndex + 20)) {
            menu.style.zIndex = String(this.zIndex + 20)
          }
        })
        return
      }

      this.restoreElevatedMenus()
      menus.forEach((menu) => {
        this.elevatedMenus.push({
          menu,
          zIndex: menu.style.zIndex,
          pointerEvents: menu.style.pointerEvents,
          position: menu.style.position,
        })
        const computed = getComputedStyle(menu)
        if (computed.position === 'static') {
          menu.style.position = 'relative'
        }
        menu.style.zIndex = String(this.zIndex + 20)
        menu.style.pointerEvents = 'auto'
      })
    } finally {
      this.syncing = false
    }
  }

  restoreElevatedMenus() {
    this.elevatedMenus.forEach(({ menu, zIndex, pointerEvents, position }) => {
      menu.style.zIndex = zIndex || ''
      menu.style.pointerEvents = pointerEvents || ''
      if (position !== undefined) menu.style.position = position || ''
    })
    this.elevatedMenus = []
  }

  queueMenuRefresh() {
    if (this.syncing || this.menuRefreshTimer) return
    this.menuRefreshTimer = setTimeout(() => {
      this.menuRefreshTimer = null
      if (!this.root?.classList.contains('sg-overlay--visible')) return
      this.elevateOpenMenus()
      this.scheduleLayout()
    }, 60)
  }

  watchMenus() {
    this.unwatchMenus()
    if (typeof MutationObserver !== 'undefined') {
      this.menuObserver = new MutationObserver((mutations) => {
        if (this.syncing) return
        const relevant = mutations.some((mutation) => {
          const node = mutation.target instanceof Element
            ? mutation.target
            : mutation.target?.parentElement
          if (!node) return false
          if (node.closest?.('.sg-overlay, .sg-panel, .sg-launcher, .sg-skip-chip')) return false
          if (mutation.type === 'childList') return true
          // Never watch inline style — overlay layout writes style constantly.
          return mutation.attributeName === 'class'
            || mutation.attributeName === 'aria-expanded'
            || mutation.attributeName === 'hidden'
        })
        if (relevant) this.queueMenuRefresh()
      })
      this.menuObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'aria-expanded', 'hidden'],
      })
    }
    // Lightweight poll for menus that open without class/DOM mutations we care about.
    this.menuWatchTimer = setInterval(() => {
      if (!this.root?.classList.contains('sg-overlay--visible') || this.syncing) return
      this.queueMenuRefresh()
    }, 400)
  }

  unwatchMenus() {
    this.menuObserver?.disconnect()
    this.menuObserver = null
    if (this.menuWatchTimer) {
      clearInterval(this.menuWatchTimer)
      this.menuWatchTimer = null
    }
    if (this.menuRefreshTimer) {
      clearTimeout(this.menuRefreshTimer)
      this.menuRefreshTimer = null
    }
  }

  observeTarget(target) {
    if (typeof ResizeObserver === 'undefined' || !(target instanceof Element)) return
    this.resizeObserver = new ResizeObserver(() => this.scheduleLayout())
    this.resizeObserver.observe(target)
    if (target.parentElement) this.resizeObserver.observe(target.parentElement)
  }

  unobserveTarget() {
    this.resizeObserver?.disconnect()
    this.resizeObserver = null
  }

  scheduleLayout() {
    if (!this.root || !this.target) return
    cancelAnimationFrame(this.raf)
    this.raf = requestAnimationFrame(() => {
      this.layout()
    })
  }

  clearRelayoutTimers() {
    this.relayoutTimers.forEach((timer) => clearTimeout(timer))
    this.relayoutTimers = []
  }

  layout() {
    if (!this.root || this.syncing || !this.target) return
    const host = resolveHighlightTarget(this.target) || this.highlightHost || this.target
    if (!(host instanceof Element) || !host.isConnected) {
      // Target remounted/gone (SPA content refresh) — blank + ask player to rebind current step.
      this.hide()
      if (!this.targetLostNotified) {
        this.targetLostNotified = true
        this.onTargetLost?.()
      }
      return
    }

    this.highlightHost = host
    const rect = host.getBoundingClientRect()
    if (rect.width < 1 || rect.height < 1) {
      // Still in DOM but not measurable yet (transition/reflow) — keep waiting, don't blank.
      return
    }

    const padding = 8
    let left = rect.left - padding
    let top = rect.top - padding
    let right = rect.right + padding
    let bottom = rect.bottom + padding

    // Include open dropdown/autocomplete menus in the cutout so options stay clickable.
    this.getVisibleMenus().forEach((menu) => {
      const menuRect = menu.getBoundingClientRect()
      left = Math.min(left, menuRect.left - padding)
      top = Math.min(top, menuRect.top - padding)
      right = Math.max(right, menuRect.right + padding)
      bottom = Math.max(bottom, menuRect.bottom + padding)
    })

    const x = Math.max(0, left)
    const y = Math.max(0, top)
    const w = Math.max(8, right - left)
    const h = Math.max(8, bottom - top)
    this.applyCutout(x, y, w, h)
    this.positionSkipChip(x, y, w, h)
    this.root.classList.add('sg-overlay--visible')
    this.onHighlightBox?.({
      left: x,
      top: y,
      right: x + w,
      bottom: y + h,
      width: w,
      height: h,
    })
  }

  layoutFullDim() {
    const vw = window.innerWidth
    const vh = window.innerHeight
    this.frame.style.setProperty('--sg-x', `${Math.max(16, vw / 2 - 40)}px`)
    this.frame.style.setProperty('--sg-y', `${Math.max(16, vh / 2 - 24)}px`)
    this.frame.style.setProperty('--sg-w', '80px')
    this.frame.style.setProperty('--sg-h', '48px')
    this.blocks.top.style.cssText = `top:0;left:0;width:${vw}px;height:${vh}px;`
    this.blocks.left.style.cssText = 'top:0;left:0;width:0;height:0;'
    this.blocks.right.style.cssText = 'top:0;left:0;width:0;height:0;'
    this.blocks.bottom.style.cssText = 'top:0;left:0;width:0;height:0;'
    this.root.classList.add('sg-overlay--visible')
  }

  applyCutout(x, y, w, h) {
    const vw = window.innerWidth
    const vh = window.innerHeight
    this.frame.style.setProperty('--sg-x', `${x}px`)
    this.frame.style.setProperty('--sg-y', `${y}px`)
    this.frame.style.setProperty('--sg-w', `${w}px`)
    this.frame.style.setProperty('--sg-h', `${h}px`)
    this.blocks.top.style.cssText = `top:0;left:0;width:${vw}px;height:${y}px;`
    this.blocks.left.style.cssText = `top:${y}px;left:0;width:${x}px;height:${h}px;`
    this.blocks.right.style.cssText = `top:${y}px;left:${x + w}px;width:${Math.max(0, vw - x - w)}px;height:${h}px;`
    this.blocks.bottom.style.cssText = `top:${y + h}px;left:0;width:${vw}px;height:${Math.max(0, vh - y - h)}px;`
  }

  raiseTarget(target) {
    if (this.raisedTarget && this.raisedTarget !== target) {
      this.restoreTarget()
    }
    if (!target || this.raisedTarget === target || !isElementReady(target)) return

    this.raisedTarget = target
    this.previousTargetStyle = {
      position: target.style.position,
      zIndex: target.style.zIndex,
      pointerEvents: target.style.pointerEvents,
    }
    const computed = getComputedStyle(target)
    if (computed.position === 'static') {
      target.style.position = 'relative'
    }
    target.style.zIndex = String(this.zIndex + 1)
    target.style.pointerEvents = 'auto'
    target.classList.add('sg-target-active')
  }

  restoreTarget() {
    if (!this.raisedTarget) return
    const target = this.raisedTarget
    const previous = this.previousTargetStyle || {}
    target.style.position = previous.position || ''
    target.style.zIndex = previous.zIndex || ''
    target.style.pointerEvents = previous.pointerEvents || ''
    target.classList.remove('sg-target-active')
    this.raisedTarget = null
    this.previousTargetStyle = null
  }

  hide() {
    const center = this.getHighlightCenter()
    if (center) this.lastHighlightCenter = center
    cancelAnimationFrame(this.raf)
    this.raf = null
    this.target = null
    this.highlightHost = null
    this.blockOutside = false
    this.clearRelayoutTimers()
    this.unobserveTarget()
    this.unwatchMenus()
    this.restoreElevatedMenus()
    this.restoreTarget()
    if (this.frame) {
      this.frame.classList.remove(
        'sg-spotlight--pulse',
        'sg-spotlight--wobble',
        'sg-spotlight--fade',
        'sg-spotlight--fade-in',
      )
    }
    if (this.root) {
      this.root.classList.remove('sg-overlay--visible', 'sg-overlay--blocking')
      this.root.style.display = 'none'
    }
    if (this.frame) {
      this.frame.style.removeProperty('--sg-x')
      this.frame.style.removeProperty('--sg-y')
      this.frame.style.removeProperty('--sg-w')
      this.frame.style.removeProperty('--sg-h')
    }
    if (this.controlsEnabled) this.positionSkipChipFallback()
    this.hideWaiting()
    this.hideStepTip()
    this.hideGuideCursor()
  }

  destroy() {
    cancelAnimationFrame(this.raf)
    this.clearRelayoutTimers()
    this.unobserveTarget()
    this.unwatchMenus()
    this.restoreElevatedMenus()
    this.restoreTarget()
    window.removeEventListener('resize', this.onViewportChange)
    window.removeEventListener('scroll', this.onViewportChange, true)
    if (this.blocks) {
      Object.values(this.blocks).forEach((block) => {
        ;['click', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'pointerdown', 'pointerup', 'contextmenu']
          .forEach((type) => block.removeEventListener(type, this.onBlockInteraction, true))
      })
    }
    if (this.skipChip) {
      this.skipChip.removeEventListener('click', this.onSkipClick)
      this.skipChip.remove()
      this.skipChip = null
    }
    if (this.stepTip) {
      this.stepTip.remove()
      this.stepTip = null
      this.stepTipContent = null
    }
    if (this.warningBanner) {
      this.warningBanner.remove()
      this.warningBanner = null
    }
    if (this.waitingBanner) {
      this.waitingBanner.remove()
      this.waitingBanner = null
    }
    if (this.guideCursor) {
      clearTimeout(this.cursorTimer)
      this.guideCursor.remove()
      this.guideCursor = null
    }
    this.root?.remove()
    this.root = null
    this.frame = null
    this.blocks = null
    this.target = null
    this.highlightHost = null
  }
}
