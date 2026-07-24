const button = (label, action, variant = '') => {
  const node = document.createElement('button')
  node.type = 'button'
  node.className = `sg-button ${variant ? `sg-button--${variant}` : ''}`.trim()
  node.dataset.action = action
  node.textContent = label
  return node
}

const text = (tag, className, value) => {
  const node = document.createElement(tag)
  node.className = className
  node.textContent = value
  return node
}

/** Compact action button without data-action (local list handlers). */
const tinyButton = (label, variant = 'ghost', { icon = '', ariaLabel = '', withLabel = false } = {}) => {
  const node = document.createElement('button')
  node.type = 'button'
  node.className = `sg-button sg-button--tiny ${variant ? `sg-button--${variant}` : ''}`.trim()
  if (icon) {
    node.classList.add(withLabel ? 'sg-button--with-icon' : 'sg-button--icon')
    if (withLabel) {
      node.innerHTML = `${icon}<span>${label}</span>`
    } else {
      node.innerHTML = icon
    }
    node.setAttribute('aria-label', ariaLabel || label)
    node.title = ariaLabel || label
  } else {
    node.textContent = label
  }
  return node
}

const ICON_ADD = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 3.25v9.5M3.25 8h9.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>
`
const ICON_EDIT = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M11.6 2.7a1.5 1.5 0 0 1 2.1 2.1L5.8 12.7 2.5 13.5l.8-3.3L11.6 2.7Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>
`
const ICON_DELETE = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.5 4.5h9M6.2 4.5V3.4h3.6v1.1M5.2 4.5l.6 8.1h4.4l.6-8.1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
const ICON_SAVE = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.5 8.2 6.6 11.3 12.5 4.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
const ICON_CANCEL = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M4.2 4.2 11.8 11.8M11.8 4.2 4.2 11.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>
`
const ICON_MINIMIZE = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.5 8h9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
`
const ICON_RESTORE = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <rect x="5.2" y="5.8" width="6.6" height="6.6" rx="1.1" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M6.4 5.1h4.4c.9 0 1.6.7 1.6 1.6v4.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>
`
const ICON_CLOSE = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M4.4 4.4 11.6 11.6M11.6 4.4 4.4 11.6" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"/>
  </svg>
`
const ICON_PLAY = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M5 3.2 12.2 8 5 12.8V3.2Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </svg>
`
const ICON_LOAD = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 2.8v7.2M5.2 7.2 8 10l2.8-2.8M3.2 12.8h9.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
const ICON_PASTE = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M6.2 3.2h3.6v1.5H6.2V3.2Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M5.2 4h-.8A1.4 1.4 0 0 0 3 5.4v7.2A1.4 1.4 0 0 0 4.4 14h7.2A1.4 1.4 0 0 0 13 12.6V5.4A1.4 1.4 0 0 0 11.6 4h-.8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>
`
const ICON_EXPORT = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 9.8V2.8M5.2 5.2 8 2.4l2.8 2.8M3.2 12.8h9.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
const ICON_FOLDER = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M2.6 4.4h3.2l1.2 1.3h6.4v6.5H2.6V4.4Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>
`
const ICON_GUIDES = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.2 3.2h3.4A2.2 2.2 0 0 1 8 4.4v8.4a1.8 1.8 0 0 0-1.4-.6H3.2V3.2Zm9.6 0H9.4A2.2 2.2 0 0 0 8 4.4v8.4c.4-.4.9-.6 1.4-.6h3.4V3.2Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/>
  </svg>
`
const ICON_COPY = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <rect x="5.2" y="5.2" width="7.2" height="7.2" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M3.6 10.2V3.8A1.2 1.2 0 0 1 4.8 2.6h6.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>
`
const ICON_GEAR = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <circle cx="8" cy="8" r="2.2" fill="none" stroke="currentColor" stroke-width="1.35"/>
    <path d="M8 1.8v1.4M8 12.8v1.4M1.8 8h1.4M12.8 8h1.4M3.4 3.4l1 1M11.6 11.6l1 1M12.6 3.4l-1 1M4.4 11.6l-1 1" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>
  </svg>
`
const ICON_NAME = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.2 4.2h9.6v8.2H3.2V4.2Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M5.2 2.8h5.6v1.8H5.2V2.8Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M5.5 7.2h5M5.5 9.6h3.6" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>
  </svg>
`
const ICON_USER = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <circle cx="8" cy="5.4" r="2.4" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M3.4 13.2c.7-2.4 2.2-3.6 4.6-3.6s3.9 1.2 4.6 3.6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>
`
const ICON_SHIELD = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 2.4 12.6 4.2v3.4c0 2.7-1.8 4.8-4.6 5.8-2.8-1-4.6-3.1-4.6-5.8V4.2L8 2.4Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/>
    <path d="M6.1 8.1 7.4 9.4 10 6.8" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
const ICON_CLOCK = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <circle cx="8" cy="8" r="5.4" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M8 5v3.2l2.2 1.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
const ICON_MOON = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M11.8 9.8A4.8 4.8 0 0 1 6.2 4.2 5.4 5.4 0 1 0 11.8 9.8Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>
`

/** Clicks on button labels are often Text nodes — those have no .closest(). */
const eventElement = (event) => {
  const target = event?.target
  if (target instanceof Element) return target
  if (target?.parentElement instanceof Element) return target.parentElement
  return null
}

/** Inline add/edit row for string lists. */
const buildDraftRow = ({ value, placeholder, onChange, onSave, onCancel }) => {
  const item = document.createElement('li')
  item.className = 'sg-string-list__item sg-string-list__item--draft'

  const input = document.createElement('input')
  input.type = 'text'
  input.className = 'sg-field sg-string-list__draft-input'
  input.value = value
  input.placeholder = placeholder
  input.setAttribute('aria-label', placeholder || 'Value')
  input.addEventListener('input', () => onChange(input.value))
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSave()
    }
    if (event.key === 'Escape') {
      event.preventDefault()
      onCancel()
    }
  })

  const actions = document.createElement('div')
  actions.className = 'sg-string-list__actions'
  const saveBtn = tinyButton('Save', 'primary', { icon: ICON_SAVE, ariaLabel: 'Save' })
  saveBtn.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    onSave()
  })
  const cancelBtn = tinyButton('Cancel', 'ghost', { icon: ICON_CANCEL, ariaLabel: 'Cancel' })
  cancelBtn.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    onCancel()
  })
  actions.append(saveBtn, cancelBtn)
  item.append(input, actions)
  return item
}

export class Panel {
  constructor({ labels, zIndex, handlers, visible = true }) {
    this.labels = labels
    this.handlers = handlers
    this.state = { mode: 'idle', steps: [], collapsed: false, pageUrl: '', hasPageGuide: false, pageGuides: [], focusGuideTitle: false }
    this.position = null
    this.dragging = null
    this.settingsSection = 'guides'
    this.root = document.createElement('aside')
    this.root.className = 'sg-panel'
    this.root.style.zIndex = String(zIndex + 2)
    this.root.setAttribute('aria-label', 'System Guider')
    this.root.addEventListener('click', (event) => this.handleClick(event))
    this.root.addEventListener('pointerdown', (event) => this.startDrag(event))
    this.root.addEventListener('input', (event) => this.handleInput(event))
    this.root.addEventListener('change', (event) => this.handleInput(event))
    this.root.addEventListener('mouseover', (event) => this.handlePreview(event))
    this.root.addEventListener('mouseout', (event) => this.handlePreviewEnd(event))
    this.root.addEventListener('dragstart', (event) => this.handleDragStart(event))
    this.root.addEventListener('dragover', (event) => event.preventDefault())
    this.root.addEventListener('drop', (event) => this.handleDrop(event))
    this.onPointerMove = this.onPointerMove.bind(this)
    this.onPointerUp = this.onPointerUp.bind(this)
    this.recordingIndicator = this.createRecordingIndicator(zIndex)
    document.body.append(this.root)
    document.body.append(this.recordingIndicator)
    this.root.addEventListener('animationend', (event) => {
      if (event.target === this.root && event.animationName === 'sg-slide-in') {
        this.root.classList.add('sg-panel--settled')
      }
    })
    // Avoid replay flicker if reduced-motion / animation already skipped.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) {
      this.root.classList.add('sg-panel--settled')
    }
    this.setVisible(visible)
    this.render()
  }

  createRecordingIndicator(zIndex) {
    const indicator = document.createElement('div')
    indicator.className = 'sg-recording-indicator'
    indicator.style.zIndex = String(zIndex + 4)
    indicator.hidden = true
    indicator.setAttribute('role', 'status')
    indicator.setAttribute('aria-live', 'polite')

    const live = document.createElement('span')
    live.className = 'sg-recording-indicator__live'
    live.setAttribute('aria-hidden', 'true')
    live.innerHTML = `
      <svg class="sg-recording-indicator__pulse" viewBox="0 0 40 40" focusable="false">
        <circle class="sg-recording-indicator__ring sg-recording-indicator__ring--outer" cx="20" cy="20" r="15" fill="none"/>
        <circle class="sg-recording-indicator__ring sg-recording-indicator__ring--inner" cx="20" cy="20" r="10.5" fill="none"/>
        <circle class="sg-recording-indicator__dot" cx="20" cy="20" r="5.5"/>
      </svg>
    `

    const wave = document.createElement('span')
    wave.className = 'sg-recording-indicator__wave'
    wave.setAttribute('aria-hidden', 'true')
    wave.innerHTML = `
      <svg viewBox="0 0 22 18" focusable="false">
        <rect class="sg-recording-indicator__bar" x="1" y="6" width="2.5" height="6" rx="1.25"/>
        <rect class="sg-recording-indicator__bar" x="5.5" y="3" width="2.5" height="12" rx="1.25"/>
        <rect class="sg-recording-indicator__bar" x="10" y="1" width="2.5" height="16" rx="1.25"/>
        <rect class="sg-recording-indicator__bar" x="14.5" y="4" width="2.5" height="10" rx="1.25"/>
        <rect class="sg-recording-indicator__bar" x="19" y="6.5" width="2.5" height="5" rx="1.25"/>
      </svg>
    `

    const status = text('span', 'sg-recording-indicator__status', 'Recording...')

    const divider = document.createElement('span')
    divider.className = 'sg-recording-indicator__divider'
    divider.setAttribute('aria-hidden', 'true')

    const stop = document.createElement('button')
    stop.type = 'button'
    stop.className = 'sg-recording-indicator__stop'
    stop.title = 'Stop recording'
    stop.setAttribute('aria-label', 'Stop recording')
    const stopIcon = document.createElement('span')
    stopIcon.className = 'sg-recording-indicator__stop-icon'
    stopIcon.setAttribute('aria-hidden', 'true')
    stopIcon.innerHTML = `
      <svg viewBox="0 0 12 12" focusable="false">
        <rect x="1.5" y="1.5" width="9" height="9" rx="2"/>
      </svg>
    `
    const stopLabel = text('span', 'sg-recording-indicator__stop-label', 'Stop')
    stop.append(stopIcon, stopLabel)
    stop.addEventListener('click', (event) => {
      event.preventDefault()
      event.stopPropagation()
      this.handlers['stop-recording']?.()
    })

    indicator.append(live, wave, status, divider, stop)
    return indicator
  }

  setVisible(visible) {
    this.visible = Boolean(visible)
    this.root.classList.toggle('sg-panel--hidden', !this.visible)
    this.root.setAttribute('aria-hidden', String(!this.visible))
  }

  applyPosition() {
    if (!this.position) {
      this.root.classList.remove('sg-panel--moved')
      this.root.style.left = ''
      this.root.style.top = ''
      this.root.style.right = ''
      this.root.style.bottom = ''
      return
    }
    this.root.classList.add('sg-panel--moved')
    this.root.style.left = `${this.position.left}px`
    this.root.style.top = `${this.position.top}px`
    this.root.style.right = 'auto'
    this.root.style.bottom = 'auto'
  }

  clampPosition(left, top) {
    const rect = this.root.getBoundingClientRect()
    const width = rect.width || 360
    const height = rect.height || 200
    const maxLeft = Math.max(8, window.innerWidth - width - 8)
    const maxTop = Math.max(8, window.innerHeight - height - 8)
    return {
      left: Math.min(Math.max(8, left), maxLeft),
      top: Math.min(Math.max(8, top), maxTop),
    }
  }

  /** Move the panel if it covers the highlighted step target. */
  avoidHighlight(box) {
    if (!box || this.root.classList.contains('sg-panel--hidden') || this.visible === false) return
    if (this.state?.mode === 'playback') return
    if (this.dragging) return

    const panelRect = this.root.getBoundingClientRect()
    if (panelRect.width < 2 || panelRect.height < 2) return

    const pad = 14
    const overlaps = !(
      box.right + pad < panelRect.left
      || box.left - pad > panelRect.right
      || box.bottom + pad < panelRect.top
      || box.top - pad > panelRect.bottom
    )
    if (!overlaps) return

    const gap = 16
    const width = panelRect.width
    const height = panelRect.height
    const vw = window.innerWidth
    const vh = window.innerHeight
    const spaceRight = vw - box.right - gap
    const spaceLeft = box.left - gap
    const spaceBelow = vh - box.bottom - gap
    const spaceAbove = box.top - gap

    let left = panelRect.left
    let top = panelRect.top

    if (spaceRight >= width) {
      left = box.right + gap
      top = Math.min(Math.max(8, box.top), Math.max(8, vh - height - 8))
    } else if (spaceLeft >= width) {
      left = box.left - width - gap
      top = Math.min(Math.max(8, box.top), Math.max(8, vh - height - 8))
    } else if (spaceBelow >= Math.min(height, 180)) {
      left = this.clampPosition(panelRect.left, 0).left
      top = box.bottom + gap
    } else if (spaceAbove >= Math.min(height, 180)) {
      left = this.clampPosition(panelRect.left, 0).left
      top = box.top - height - gap
    } else if (spaceRight >= spaceLeft) {
      left = Math.max(8, Math.min(vw - width - 8, box.right + gap))
      top = Math.min(Math.max(8, box.top), Math.max(8, vh - height - 8))
    } else {
      left = Math.max(8, Math.min(vw - width - 8, box.left - width - gap))
      top = Math.min(Math.max(8, box.top), Math.max(8, vh - height - 8))
    }

    const next = this.clampPosition(left, top)
    if (
      Math.abs(next.left - panelRect.left) < 2
      && Math.abs(next.top - panelRect.top) < 2
    ) {
      return
    }

    this.position = next
    this.applyPosition()
  }

  update(nextState) {
    this.state = { ...this.state, ...nextState }
    this.applyTheme()
    this.render()
  }

  applyTheme() {
    const theme = this.state.settings?.theme === 'light' ? 'light' : 'dark'
    this.root.dataset.sgTheme = theme
  }

  render() {
    const { mode, collapsed } = this.state
    this.root.dataset.mode = mode
    this.root.classList.toggle('sg-panel--collapsed', collapsed)
    this.recordingIndicator.hidden = mode !== 'recording'

    // Keep the white panel out of the way while a guide is playing.
    if (mode === 'playback') {
      this.root.classList.add('sg-panel--hidden')
      this.root.setAttribute('aria-hidden', 'true')
      this.root.replaceChildren()
      return
    }

    // Preserve list scroll when re-rendering after edit / reorder / remove.
    const prevBody = this.root.querySelector('.sg-panel__body')
    const savedScrollTop = prevBody ? prevBody.scrollTop : (this._bodyScrollTop || 0)
    if (prevBody) this._bodyScrollTop = prevBody.scrollTop

    this.root.classList.toggle('sg-panel--hidden', !this.visible)
    this.root.setAttribute('aria-hidden', String(!this.visible))
    this.applyTheme()
    this.root.replaceChildren()

    const header = document.createElement('header')
    header.className = 'sg-panel__header'
    const brand = document.createElement('div')
    brand.className = 'sg-panel__brand'
    const brandIcon = document.createElement('span')
    brandIcon.className = 'sg-panel__brand-icon'
    brandIcon.setAttribute('aria-hidden', 'true')
    brandIcon.innerHTML = `
      <svg class="sg-brand-mark" viewBox="0 0 24 24" focusable="false">
        <path
          class="sg-brand-mark__route"
          d="M5.25 17.75c0-3.1 1.7-4.65 4.4-4.65h2.15c2.7 0 4.35-1.55 4.35-4.65"
          pathLength="100"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <circle class="sg-brand-mark__node sg-brand-mark__node--start" cx="5.25" cy="17.75" r="2"/>
        <circle class="sg-brand-mark__node sg-brand-mark__node--middle" cx="11.1" cy="13.1" r="1.65"/>
        <circle class="sg-brand-mark__node sg-brand-mark__node--end" cx="16.15" cy="8.45" r="2.1"/>
        <path
          class="sg-brand-mark__spark"
          d="M18.6 3.2c.3 1.55 1.05 2.3 2.6 2.6-1.55.3-2.3 1.05-2.6 2.6-.3-1.55-1.05-2.3-2.6-2.6 1.55-.3 2.3-1.05 2.6-2.6Z"
        />
      </svg>
    `
    const brandCopy = document.createElement('div')
    brandCopy.className = 'sg-panel__brand-copy'
    if (mode === 'recording') {
      brandCopy.append(
        text('span', 'sg-eyebrow', '● LIVE RECORDING'),
        text('h2', 'sg-panel__title', this.titleForMode(mode)),
      )
    } else {
      brandCopy.append(
        text('h2', 'sg-panel__title', 'System Guider'),
        text('div', 'sg-panel__subtitle', this.titleForMode(mode)),
      )
    }
    brand.append(brandIcon, brandCopy)
    const headerActions = document.createElement('div')
    headerActions.className = 'sg-panel__header-actions'
    if (mode === 'manage-routes') {
      const collapse = tinyButton(collapsed ? 'Open' : 'Minimize', 'ghost', {
        icon: collapsed ? ICON_RESTORE : ICON_MINIMIZE,
        ariaLabel: collapsed ? 'Open settings' : 'Minimize',
      })
      collapse.dataset.action = 'toggle-collapse'
      collapse.classList.add('sg-panel__chrome-btn', 'sg-panel__header-minimize')
      collapse.setAttribute('aria-expanded', String(!collapsed))
      headerActions.append(collapse)
      if (!collapsed) {
        const close = tinyButton('Close', 'ghost', {
          icon: ICON_CLOSE,
          ariaLabel: 'Close settings',
        })
        close.dataset.action = 'close'
        close.classList.add('sg-panel__chrome-btn', 'sg-panel__header-close')
        headerActions.append(close)
      }
    } else {
      const collapse = button(collapsed ? 'Open' : 'Minimize', 'toggle-collapse', 'ghost')
      collapse.setAttribute('aria-expanded', String(!collapsed))
      headerActions.append(collapse)
    }
    header.append(brand, headerActions)
    this.root.append(header)
    if (collapsed) {
      this.applyPosition()
      return
    }

    const body = document.createElement('div')
    body.className = 'sg-panel__body'
    if (mode === 'idle') this.renderIdle(body)
    if (mode === 'recording' || mode === 'manage') this.renderSteps(body, mode)
    if (mode === 'manage-routes') this.renderManageRoutes(body)
    this.root.append(body)
    const footer = this.renderFooter(mode)
    if (footer) this.root.append(footer)
    this.applyPosition()

    const followNewest = mode === 'recording' && (Number(this.state.newStepsCount) || 0) > 0
    queueMicrotask(() => {
      const nextBody = this.root.querySelector('.sg-panel__body')
      if (!nextBody) return
      if (followNewest) {
        nextBody.scrollTop = nextBody.scrollHeight
      } else {
        nextBody.scrollTop = savedScrollTop
      }
      this._bodyScrollTop = nextBody.scrollTop
    })
  }

  titleForMode(mode) {
    if (mode === 'recording' && this.state.recordingAppend) {
      const added = Number(this.state.newStepsCount) || 0
      return added > 0 ? `Adding steps (${added} new)` : 'Adding steps'
    }
    return {
      idle: 'Create a guided flow',
      recording: 'Capturing your flow',
      manage: 'Edit this guide',
      playback: this.state.guideTitle || 'Guide in progress',
      'manage-routes': 'Settings',
    }[mode]
  }

  /**
   * List editor with Add / Edit / Delete for string settings (account ids, hidden urls).
   */
  createEditableStringList({
    label,
    settingKey,
    items = [],
    placeholder = '',
    emptyText = 'No items yet',
    addLabel = 'Add',
  }) {
    const root = document.createElement('div')
    root.className = 'sg-string-list sg-settings__row'
    root.dataset.stringList = settingKey

    let values = [...items].map((item) => String(item))
    let draftMode = null // 'add' | number (edit index) | null
    let draftValue = ''

    const commit = (next) => {
      values = [...next]
      draftMode = null
      draftValue = ''
      this.handlers['update-setting']?.(settingKey, values)
      paint()
    }

    const paint = () => {
      root.replaceChildren()

      const head = document.createElement('div')
      head.className = 'sg-string-list__head'
      head.append(text('span', 'sg-string-list__label', label))
      const addBtn = tinyButton(addLabel, 'secondary', { icon: ICON_ADD, ariaLabel: addLabel || 'Add' })
      addBtn.classList.add('sg-string-list__add')
      addBtn.disabled = draftMode !== null
      addBtn.addEventListener('click', (event) => {
        event.preventDefault()
        event.stopPropagation()
        draftMode = 'add'
        draftValue = ''
        paint()
        root.querySelector('.sg-string-list__draft-input')?.focus()
      })
      head.append(addBtn)
      root.append(head)

      const list = document.createElement('ul')
      list.className = 'sg-string-list__items'

      if (draftMode === 'add') {
        list.append(buildDraftRow({
          value: draftValue,
          placeholder,
          onChange: (value) => { draftValue = value },
          onSave: () => {
            const next = String(draftValue || '').trim()
            if (!next) {
              draftMode = null
              draftValue = ''
              paint()
              return
            }
            if (values.includes(next)) {
              draftMode = null
              draftValue = ''
              paint()
              return
            }
            commit([...values, next])
          },
          onCancel: () => {
            draftMode = null
            draftValue = ''
            paint()
          },
        }))
      }

      if (!values.length && draftMode !== 'add') {
        const empty = document.createElement('li')
        empty.className = 'sg-string-list__empty'
        empty.textContent = emptyText
        list.append(empty)
      }

      values.forEach((value, index) => {
        if (draftMode === index) {
          list.append(buildDraftRow({
            value: draftValue,
            placeholder,
            onChange: (nextValue) => { draftValue = nextValue },
            onSave: () => {
              const next = String(draftValue || '').trim()
              if (!next) {
                draftMode = null
                draftValue = ''
                paint()
                return
              }
              const updated = [...values]
              updated[index] = next
              commit([...new Set(updated)])
            },
            onCancel: () => {
              draftMode = null
              draftValue = ''
              paint()
            },
          }))
          return
        }

        const item = document.createElement('li')
        item.className = 'sg-string-list__item'

        const valueEl = document.createElement('code')
        valueEl.className = 'sg-string-list__value'
        valueEl.textContent = value
        valueEl.title = value

        const actions = document.createElement('div')
        actions.className = 'sg-string-list__actions'

        const editBtn = tinyButton('Edit', 'ghost', { icon: ICON_EDIT, ariaLabel: 'Edit' })
        editBtn.disabled = draftMode !== null
        editBtn.addEventListener('click', (event) => {
          event.preventDefault()
          event.stopPropagation()
          draftMode = index
          draftValue = value
          paint()
          root.querySelector('.sg-string-list__draft-input')?.focus()
          root.querySelector('.sg-string-list__draft-input')?.select()
        })

        const deleteBtn = tinyButton('Delete', 'danger', { icon: ICON_DELETE, ariaLabel: 'Delete' })
        deleteBtn.disabled = draftMode !== null
        deleteBtn.addEventListener('click', (event) => {
          event.preventDefault()
          event.stopPropagation()
          commit(values.filter((_, i) => i !== index))
        })

        actions.append(editBtn, deleteBtn)
        item.append(valueEl, actions)
        list.append(item)
      })

      root.append(list)
    }

    paint()
    return root
  }

  renderIdle(container) {
    container.append(
      text('p', 'sg-lead', 'Record actions, refine the steps, then replay a polished walkthrough.'),
    )
    if (this.state.pageUrl) {
      container.append(text('p', 'sg-page-key', `Page: ${this.state.pageUrl}`))
    }
    this.renderPageGuidesList(container)
    const empty = document.createElement('div')
    empty.className = 'sg-empty'
    empty.append(
      text('strong', '', this.state.hasPageGuide ? 'Guide ready for this page' : 'Ready when you are'),
      text(
        'span',
        '',
        this.state.hasPageGuide
          ? 'Use Play guides, or tap Record on the floating launcher to capture a new flow.'
          : 'Tap Record on the floating launcher to capture a new flow.',
      ),
    )
    container.append(empty)
  }

  renderPageGuidesList(container) {
    const guides = Array.isArray(this.state.pageGuides) ? this.state.pageGuides : []
    if (!guides.length) return

    const wrap = document.createElement('div')
    wrap.className = 'sg-page-guides sg-settings-content__section'
    wrap.append(text('div', 'sg-page-guides__label', 'Saved guides on this page'))
    const list = document.createElement('ul')
    list.className = 'sg-page-guides__list'
    guides.forEach((guide, index) => {
      const item = document.createElement('li')
      item.className = 'sg-page-guides__item'
      if (guide.id === this.state.currentGuideId) item.classList.add('is-current')
      const title = document.createElement('strong')
      const rawTitle = String(guide.title || `Guide ${index + 1}`).trim()
      const titleParts = rawTitle.split(' · ')
      const headTitle = (titleParts[0] || `Guide ${index + 1}`).trim()
      const dateMeta = titleParts.slice(1).join(' · ').trim()
      const isRedundantStepsTitle = /^\d+\s+steps?$/i.test(headTitle)
      title.textContent = isRedundantStepsTitle
        ? (dateMeta || `Guide ${index + 1}`)
        : rawTitle
      const meta = document.createElement('span')
      meta.textContent = `${guide.steps} step${guide.steps === 1 ? '' : 's'}`
      item.append(title, meta)
      list.append(item)
    })
    wrap.append(list)
    container.append(wrap)
  }

  renderSteps(container, mode) {
    if (this.state.flashMessage) {
      container.append(text('p', 'sg-status', this.state.flashMessage))
    }
    if (mode === 'recording') {
      const appending = Boolean(this.state.recordingAppend)
      const added = Number(this.state.newStepsCount) || 0
      const lead = document.createElement('p')
      lead.className = 'sg-lead'
      if (appending) {
        lead.textContent = added > 0
          ? `Keep going — ${added} new step${added === 1 ? '' : 's'} added. Interact again for more, then Stop Recording.`
          : 'Interact with the page as many times as you need. Each action becomes a new step. Click Stop Recording when done.'
      } else {
        lead.textContent = added > 0
          ? `Capturing… ${added} step${added === 1 ? '' : 's'} so far. Keep interacting, then Stop Recording.`
          : 'Perform the flow on screen. Add as many steps as you need, then Stop Recording.'
      }
      container.append(lead)
    }
    if (mode === 'manage') {
      const stepCount = this.state.steps.length
      const editor = document.createElement('section')
      editor.className = 'sg-guide-editor'

      const guideField = document.createElement('label')
      guideField.className = 'sg-guide-field sg-guide-field--rename'
      const nameLabel = document.createElement('span')
      nameLabel.className = 'sg-guide-field__label-row'
      const nameLeft = document.createElement('span')
      nameLeft.className = 'sg-guide-field__label-left'
      const nameIcon = document.createElement('span')
      nameIcon.className = 'sg-guide-field__label-icon'
      nameIcon.setAttribute('aria-hidden', 'true')
      nameIcon.innerHTML = ICON_NAME
      nameLeft.append(nameIcon, document.createTextNode('Guide name'))
      if (this.state.dirty) {
        nameLeft.append(text('em', 'sg-guide-editor__badge', 'Unsaved'))
      }
      const saveBtn = tinyButton('Save', 'primary', { icon: ICON_SAVE, withLabel: true, ariaLabel: 'Save guide' })
      saveBtn.dataset.action = 'save-page'
      saveBtn.classList.add('sg-guide-field__save')
      saveBtn.disabled = this.state.steps.length === 0
      nameLabel.append(nameLeft, saveBtn)
      guideField.append(nameLabel)
      const guideTitle = document.createElement('input')
      guideTitle.className = 'sg-field sg-field--guide-title'
      guideTitle.value = this.state.guideTitle || ''
      guideTitle.dataset.guideField = 'title'
      guideTitle.placeholder = 'Example: Create employee schedule'
      guideTitle.setAttribute('aria-label', 'Guide name')
      guideTitle.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()
          guideTitle.blur()
        }
      })
      guideTitle.addEventListener('blur', () => {
        this.handlers.commitGuideTitle?.()
      })
      guideField.append(guideTitle)

      const guideSettings = document.createElement('details')
      guideSettings.className = 'sg-step-settings sg-guide-settings'
      const guideSummary = document.createElement('summary')
      guideSummary.className = 'sg-step-settings__summary sg-step-settings__summary--split'
      guideSummary.innerHTML = `<span>Guide options</span><span class="sg-step-settings__chevron" aria-hidden="true">▾</span>`
      guideSettings.append(guideSummary)
      const guideSettingsBody = document.createElement('div')
      guideSettingsBody.className = 'sg-step-settings__body'
      const reloadNav = document.createElement('label')
      reloadNav.className = 'sg-check'
      const reloadNavToggle = document.createElement('input')
      reloadNavToggle.type = 'checkbox'
      reloadNavToggle.dataset.guideSetting = 'reloadOnNavigate'
      reloadNavToggle.checked = Boolean(this.state.guideSettings?.reloadOnNavigate)
      reloadNav.append(reloadNavToggle, document.createTextNode(' Reload on other route'))
      const reloadPlay = document.createElement('label')
      reloadPlay.className = 'sg-check'
      const reloadPlayToggle = document.createElement('input')
      reloadPlayToggle.type = 'checkbox'
      reloadPlayToggle.dataset.guideSetting = 'resetBeforePlay'
      reloadPlayToggle.checked = this.state.guideSettings?.resetBeforePlay === 'reload'
      reloadPlay.append(reloadPlayToggle, document.createTextNode(' Reload before play'))
      guideSettingsBody.append(reloadNav, reloadPlay)
      guideSettings.append(guideSettingsBody)
      guideField.append(guideSettings)
      editor.append(guideField)

      const stepsBlock = document.createElement('div')
      stepsBlock.className = 'sg-guide-editor__steps'
      const stepsHead = document.createElement('div')
      stepsHead.className = 'sg-guide-editor__steps-head'
      const stepsMeta = document.createElement('div')
      stepsMeta.className = 'sg-guide-editor__steps-meta'
      stepsMeta.append(
        text('span', 'sg-guide-editor__steps-label', 'Steps'),
        text('span', 'sg-guide-editor__steps-count', String(stepCount)),
      )
      const addStepsBtn = button('Add steps', 'add-steps', 'secondary')
      addStepsBtn.classList.add('sg-button--compact', 'sg-guide-editor__add-steps')
      stepsHead.append(stepsMeta, addStepsBtn)
      stepsBlock.append(stepsHead)
      editor.append(stepsBlock)
      container.append(editor)
      this._stepsBlock = stepsBlock

      if (this.state.focusGuideTitle) {
        queueMicrotask(() => {
          guideTitle.focus()
          guideTitle.select()
        })
      }
    } else {
      this._stepsBlock = null
    }
    if (!this.state.steps.length) {
      const empty = text('div', 'sg-empty', mode === 'manage'
        ? 'No steps in this guide yet.'
        : 'No steps yet — start interacting with the page.')
      if (mode === 'manage' && this._stepsBlock) this._stepsBlock.append(empty)
      else container.append(empty)
      return
    }

    const list = document.createElement('ol')
    list.className = 'sg-step-list'
    this.state.steps.forEach((step, index) => {
      const item = document.createElement('li')
      item.className = 'sg-step'
      item.dataset.stepId = step.id
      // Whole-row drag steals Remove / ↑↓ clicks — drag only via the handle.
      item.draggable = false
      if (step.invalid) item.classList.add('sg-step--invalid')
      const baseline = Number(this.state.recordingStepsBaseline) || 0
      const isNew = mode === 'recording' && index >= baseline
      if (isNew) item.classList.add('sg-step--new')

      const row = document.createElement('div')
      row.className = 'sg-step__top'
      const topLeft = document.createElement('div')
      topLeft.className = 'sg-step__top-left'
      if (mode === 'manage') {
        const dragHandle = document.createElement('span')
        dragHandle.className = 'sg-step__drag'
        dragHandle.draggable = true
        dragHandle.title = 'Drag to reorder'
        dragHandle.setAttribute('aria-label', `Drag step ${index + 1}`)
        dragHandle.textContent = '⋮⋮'
        dragHandle.addEventListener('dragstart', (event) => {
          event.dataTransfer.setData('text/plain', step.id)
          event.dataTransfer.effectAllowed = 'move'
          item.classList.add('sg-step--dragging')
        })
        dragHandle.addEventListener('dragend', () => {
          item.classList.remove('sg-step--dragging')
        })
        topLeft.append(dragHandle)
      }
      topLeft.append(
        text('span', 'sg-step__number', String(index + 1)),
        text('span', 'sg-step__action', step.action),
      )
      if (isNew) topLeft.append(text('span', 'sg-step__new', 'New'))
      if (step.invalid) topLeft.append(text('span', 'sg-step__warning', 'Target missing'))
      row.append(topLeft)

      if (mode === 'manage') {
        const topRight = document.createElement('div')
        topRight.className = 'sg-step__top-right'
        const playHere = tinyButton('Play', 'ghost', { icon: ICON_PLAY, withLabel: true, ariaLabel: 'Play from here' })
        playHere.classList.add('sg-step__play')
        playHere.addEventListener('click', (event) => {
          event.preventDefault()
          event.stopPropagation()
          this.handlers['play-here']?.(step.id)
        })
        const removeIcon = tinyButton('Remove', 'danger', { icon: ICON_DELETE, ariaLabel: 'Remove step' })
        removeIcon.classList.add('sg-step__remove-icon')
        removeIcon.addEventListener('click', (event) => {
          event.preventDefault()
          event.stopPropagation()
          this.handlers.remove?.(step.id)
        })
        topRight.append(playHere, removeIcon)
        row.append(topRight)
      }

      const titleInput = document.createElement('input')
      titleInput.className = 'sg-field sg-step__title'
      titleInput.value = step.title
      titleInput.dataset.field = 'title'
      titleInput.disabled = mode === 'recording'
      titleInput.placeholder = 'Step title'
      titleInput.setAttribute('aria-label', `Step ${index + 1} title`)

      const selectorWrap = document.createElement('div')
      selectorWrap.className = 'sg-step__selector-wrap'
      const selector = text('code', 'sg-step__selector', step.selector || 'No target')
      selectorWrap.append(selector)
      if (mode === 'manage' && step.selector) {
        const copyBtn = tinyButton('Copy', 'ghost', { icon: ICON_COPY, ariaLabel: 'Copy selector' })
        copyBtn.classList.add('sg-step__selector-copy')
        copyBtn.addEventListener('click', async (event) => {
          event.preventDefault()
          event.stopPropagation()
          try {
            await navigator.clipboard?.writeText?.(String(step.selector))
            copyBtn.title = 'Copied'
            setTimeout(() => { copyBtn.title = 'Copy selector' }, 1000)
          } catch {
            // ignore
          }
        })
        selectorWrap.append(copyBtn)
      }
      const body = document.createElement('div')
      body.className = 'sg-step__body'
      body.append(titleInput, selectorWrap)
      item.append(row, body)

      if (mode === 'manage' || mode === 'recording') {
        const controls = document.createElement('div')
        controls.className = 'sg-step__controls'
        const bindStepAction = (label, action, variant = '') => {
          const btn = button(label, action, variant)
          btn.classList.add('sg-button--compact')
          btn.addEventListener('click', (event) => {
            event.preventDefault()
            event.stopPropagation()
            this.handlers[action]?.(step.id)
          })
          return btn
        }

        const left = document.createElement('div')
        left.className = 'sg-step__controls-left'
        const right = document.createElement('div')
        right.className = 'sg-step__controls-right'

        if (mode === 'manage') {
          if (step.action === 'input') {
            const label = document.createElement('label')
            label.className = 'sg-check sg-check--compact'
            const toggle = document.createElement('input')
            toggle.type = 'checkbox'
            toggle.dataset.field = 'waitRequired'
            toggle.checked = Boolean(step.waitFor?.required)
            label.append(toggle, document.createTextNode(' Require value'))
            left.append(label)
          }

          const total = this.state.steps.length
          const current = index + 1
          const makeMovePicker = (direction) => {
            const wrap = document.createElement('div')
            wrap.className = 'sg-step__move-picker'
            const isUp = direction === 'up'
            const btn = button(isUp ? '↑' : '↓', '', 'ghost')
            btn.classList.add('sg-button--compact', 'sg-step__move-btn')
            btn.setAttribute('aria-haspopup', 'listbox')
            btn.setAttribute('aria-expanded', 'false')
            btn.title = isUp ? 'Move to an earlier step' : 'Move to a later step'
            btn.setAttribute('aria-label', isUp
              ? `Move step ${current} to an earlier position`
              : `Move step ${current} to a later position`)

            // Step 6 → up: 5,4,3,2,1 | down: 7,8,9,10
            const positions = isUp
              ? Array.from({ length: index }, (_, i) => current - 1 - i)
              : Array.from({ length: total - current }, (_, i) => current + 1 + i)
            if (!positions.length) btn.disabled = true

            const menu = document.createElement('div')
            menu.className = 'sg-step__move-menu'
            menu.hidden = true
            menu.setAttribute('role', 'listbox')
            menu.setAttribute('aria-label', isUp ? 'Earlier step numbers' : 'Later step numbers')
            positions.forEach((pos) => {
              const opt = document.createElement('button')
              opt.type = 'button'
              opt.className = 'sg-step__move-option'
              opt.textContent = String(pos)
              opt.setAttribute('role', 'option')
              opt.title = `Move to step ${pos}`
              opt.addEventListener('click', (event) => {
                event.preventDefault()
                event.stopPropagation()
                this.closeMoveMenus()
                this.handlers['move-to']?.(step.id, pos)
              })
              menu.append(opt)
            })

            btn.addEventListener('click', (event) => {
              event.preventDefault()
              event.stopPropagation()
              if (btn.disabled) return
              const willOpen = menu.hidden
              this.closeMoveMenus()
              if (!willOpen) return
              menu.hidden = false
              btn.setAttribute('aria-expanded', 'true')
            })

            wrap.append(btn, menu)
            return wrap
          }

          left.append(makeMovePicker('up'), makeMovePicker('down'))
        } else {
          right.append(
            bindStepAction('Play', 'play-here', 'ghost'),
            bindStepAction('Remove', 'remove', 'danger'),
          )
        }
        controls.append(left)
        if (right.childNodes.length) controls.append(right)

        if (mode === 'manage') {
          const details = document.createElement('details')
          details.className = 'sg-step-settings'
          const summary = document.createElement('summary')
          summary.className = 'sg-step-settings__summary sg-step-settings__summary--split'
          summary.innerHTML = `
            <span class="sg-step-settings__summary-left">
              <span class="sg-step-settings__gear" aria-hidden="true">${ICON_GEAR}</span>
              Settings
            </span>
            <span class="sg-step-settings__chevron" aria-hidden="true">▾</span>
          `
          details.append(summary)

          const settingsBody = document.createElement('div')
          settingsBody.className = 'sg-step-settings__body'

          const descField = document.createElement('label')
          descField.className = 'sg-step-settings__field'
          descField.append(document.createTextNode('Step description'))
          const descInput = document.createElement('textarea')
          descInput.className = 'sg-field sg-step__description'
          descInput.rows = 2
          descInput.value = step.description || ''
          descInput.dataset.field = 'description'
          descInput.placeholder = 'Shown next to the highlight while playing'
          descInput.setAttribute('aria-label', `Step ${index + 1} description`)
          descField.append(descInput)

          const scrollField = document.createElement('label')
          scrollField.className = 'sg-check'
          const scrollToggle = document.createElement('input')
          scrollToggle.type = 'checkbox'
          scrollToggle.dataset.stepSetting = 'autoScroll'
          scrollToggle.checked = step.settings?.autoScroll !== false
          scrollField.append(scrollToggle, document.createTextNode(' Auto-scroll'))

          const delayField = document.createElement('label')
          delayField.className = 'sg-step-settings__field'
          delayField.append(document.createTextNode('Show delay (ms)'))
          const delayInput = document.createElement('input')
          delayInput.type = 'number'
          delayInput.min = '0'
          delayInput.step = '50'
          delayInput.className = 'sg-field'
          delayInput.value = String(step.settings?.delay ?? 0)
          delayInput.dataset.stepSetting = 'delay'
          delayField.append(delayInput)

          const hideField = document.createElement('label')
          hideField.className = 'sg-step-settings__field'
          hideField.append(document.createTextNode('Hide delay (ms)'))
          const hideInput = document.createElement('input')
          hideInput.type = 'number'
          hideInput.min = '0'
          hideInput.step = '50'
          hideInput.className = 'sg-field'
          hideInput.value = String(step.settings?.hideDelay ?? 0)
          hideInput.dataset.stepSetting = 'hideDelay'
          hideField.append(hideInput)

          const skipField = document.createElement('label')
          skipField.className = 'sg-check'
          const skipToggle = document.createElement('input')
          skipToggle.type = 'checkbox'
          skipToggle.dataset.stepSetting = 'autoSkipMissing'
          skipToggle.checked = step.settings?.autoSkipMissing !== false
          skipField.append(skipToggle, document.createTextNode(' Auto-skip if missing'))
          settingsBody.append(descField, scrollField, delayField, hideField, skipField)
          details.append(settingsBody)

          item.append(controls, details)
        } else {
          item.append(controls)
        }
      }
      list.append(item)
    })
    if (mode === 'manage' && this._stepsBlock) this._stepsBlock.append(list)
    else container.append(list)
  }

  renderManageRoutes(container) {
    if (this.state.flashMessage) {
      container.append(text('p', 'sg-status', this.state.flashMessage))
    }
    const settings = this.state.settings || {}
    const guides = Array.isArray(this.state.allGuides) ? this.state.allGuides : []
    const wrap = document.createElement('div')
    wrap.className = 'sg-page-guides'
    const labelRow = document.createElement('div')
    labelRow.className = 'sg-page-guides__label-row'
    const labelIcon = document.createElement('span')
    labelIcon.className = 'sg-page-guides__label-icon'
    labelIcon.setAttribute('aria-hidden', 'true')
    labelIcon.innerHTML = ICON_GUIDES
    labelRow.append(labelIcon, text('div', 'sg-page-guides__label', `All guides (${guides.length})`))
    wrap.append(labelRow)
    if (!guides.length) {
      wrap.append(text('p', 'sg-lead', 'No guides saved yet.'))
    } else {
      const byUrl = new Map()
      guides.forEach((guide) => {
        const url = guide.url || '/'
        if (!byUrl.has(url)) byUrl.set(url, [])
        byUrl.get(url).push(guide)
      })
      ;[...byUrl.entries()].sort((a, b) => a[0].localeCompare(b[0])).forEach(([url, list]) => {
        const section = document.createElement('div')
        section.className = 'sg-manage-section'
        const pathRow = document.createElement('div')
        pathRow.className = 'sg-manage-section__path'
        const pathIcon = document.createElement('span')
        pathIcon.className = 'sg-manage-section__path-icon'
        pathIcon.setAttribute('aria-hidden', 'true')
        pathIcon.innerHTML = ICON_FOLDER
        pathRow.append(pathIcon, document.createTextNode(url))
        section.append(pathRow)
        const ul = document.createElement('ul')
        ul.className = 'sg-page-guides__list'
        list.forEach((guide) => {
          const item = document.createElement('li')
          item.className = 'sg-page-guides__item sg-page-guides__item--actions'
          item.dataset.guideId = guide.id

          const copy = document.createElement('div')
          copy.className = 'sg-page-guides__copy'
          const head = document.createElement('div')
          head.className = 'sg-page-guides__head'
          const titleWrap = document.createElement('div')
          titleWrap.className = 'sg-page-guides__title-row'
          const rawTitle = String(guide.title || 'Untitled')
          const titleParts = rawTitle.split(' · ')
          const headTitle = (titleParts[0] || 'Untitled').trim()
          const dateMeta = titleParts.slice(1).join(' · ').trim()
          const stepsLabel = `${guide.steps} step${guide.steps === 1 ? '' : 's'}`
          const isRedundantStepsTitle = /^(\d+)\s+steps?$/i.test(headTitle)
          const titleLine = document.createElement('div')
          titleLine.className = 'sg-page-guides__title-line'
          if (!isRedundantStepsTitle) {
            const title = document.createElement('strong')
            title.textContent = headTitle
            titleLine.append(title)
          }
          if (dateMeta) {
            const meta = document.createElement('span')
            meta.className = `sg-page-guides__meta${isRedundantStepsTitle ? ' sg-page-guides__meta--solo' : ''}`
            meta.textContent = dateMeta
            titleLine.append(meta)
          } else if (isRedundantStepsTitle) {
            const meta = document.createElement('span')
            meta.className = 'sg-page-guides__meta sg-page-guides__meta--solo'
            meta.textContent = 'Untitled guide'
            titleLine.append(meta)
          }
          const badge = document.createElement('span')
          badge.className = 'sg-page-guides__badge'
          badge.textContent = stepsLabel
          titleWrap.append(titleLine, badge)
          head.append(titleWrap)
          copy.append(head)

          const actions = document.createElement('div')
          actions.className = 'sg-page-guides__actions'
          const playBtn = tinyButton('Play', 'secondary', { icon: ICON_PLAY, ariaLabel: 'Play guide' })
          playBtn.classList.add('sg-page-guides__action', 'sg-page-guides__action--play')
          playBtn.dataset.action = 'play-guide'
          playBtn.dataset.guideId = guide.id
          if (this.state.readOnly) {
            actions.append(playBtn)
          } else {
            const editBtn = tinyButton('Edit', 'secondary', { icon: ICON_EDIT, ariaLabel: 'Edit steps' })
            editBtn.classList.add('sg-page-guides__action', 'sg-page-guides__action--edit')
            editBtn.dataset.action = 'edit-guide'
            editBtn.dataset.guideId = guide.id
            const delBtn = tinyButton('Delete', 'danger', { icon: ICON_DELETE, ariaLabel: 'Delete guide' })
            delBtn.classList.add('sg-page-guides__action', 'sg-page-guides__action--delete')
            delBtn.dataset.action = 'delete-guide'
            delBtn.dataset.guideId = guide.id
            actions.append(editBtn, playBtn, delBtn)
          }
          item.append(copy, actions)
          ul.append(item)
        })
        section.append(ul)
        wrap.append(section)
      })
    }

    const guideTools = document.createElement('div')
    guideTools.className = 'sg-guides-tools'
    const loadBtn = tinyButton('Load', 'secondary', { icon: ICON_LOAD, withLabel: true })
    loadBtn.dataset.action = 'load'
    const pasteBtn = tinyButton('Paste', 'secondary', { icon: ICON_PASTE, withLabel: true })
    pasteBtn.dataset.action = 'paste'
    const exportBtn = tinyButton('Export', 'primary', { icon: ICON_EXPORT, withLabel: true })
    exportBtn.dataset.action = 'download-all'
    guideTools.append(loadBtn, pasteBtn, exportBtn)
    wrap.append(guideTools)

    container.append(wrap)

    const accountBlock = document.createElement('div')
    accountBlock.className = 'sg-settings sg-settings--nested sg-settings-card sg-account-panel'

    const accountHead = document.createElement('div')
    accountHead.className = 'sg-account-panel__head'
    const accountHeadIcon = document.createElement('span')
    accountHeadIcon.className = 'sg-account-panel__head-icon'
    accountHeadIcon.setAttribute('aria-hidden', 'true')
    accountHeadIcon.innerHTML = ICON_USER
    accountHead.append(accountHeadIcon, text('div', 'sg-page-guides__label', 'Current account'))
    accountBlock.append(accountHead)

    const currentAccountId = this.state.accountId
    const hasAccountId = !(currentAccountId == null || currentAccountId === '')
    const accountCard = document.createElement('div')
    accountCard.className = `sg-account-card${hasAccountId ? '' : ' sg-account-card--empty'}`

    const accountLeft = document.createElement('div')
    accountLeft.className = 'sg-account-card__left'
    const idBadge = document.createElement('span')
    idBadge.className = 'sg-account-card__badge'
    idBadge.textContent = 'ID'
    const accountMeta = document.createElement('div')
    accountMeta.className = 'sg-account-card__meta'
    accountMeta.append(text('span', 'sg-account-card__caption', 'Your account ID'))
    const accountValue = document.createElement('strong')
    accountValue.className = 'sg-account-card__value'
    accountValue.textContent = hasAccountId ? String(currentAccountId) : 'Not signed in'
    accountValue.title = hasAccountId
      ? 'Logged-in account ID from the host app'
      : 'Host app has not passed an account ID yet'
    accountMeta.append(accountValue)
    accountLeft.append(idBadge, accountMeta)
    accountCard.append(accountLeft)

    if (hasAccountId) {
      const copyBtn = tinyButton('Copy', 'secondary', {
        icon: ICON_COPY,
        withLabel: true,
        ariaLabel: 'Copy account ID',
      })
      copyBtn.classList.add('sg-account-card__copy')
      copyBtn.addEventListener('click', async (event) => {
        event.preventDefault()
        event.stopPropagation()
        const id = String(currentAccountId)
        const label = copyBtn.querySelector('span')
        try {
          await navigator.clipboard?.writeText?.(id)
          if (label) label.textContent = 'Copied'
          else copyBtn.textContent = 'Copied'
          setTimeout(() => {
            if (label) label.textContent = 'Copy'
            else {
              copyBtn.innerHTML = `${ICON_COPY}<span>Copy</span>`
            }
          }, 1200)
        } catch {
          if (label) label.textContent = id
          else copyBtn.textContent = id
        }
      })
      accountCard.append(copyBtn)
    }

    accountBlock.append(accountCard)

    const accountHint = document.createElement('p')
    accountHint.className = 'sg-account-panel__hint'
    const hintIcon = document.createElement('span')
    hintIcon.className = 'sg-account-panel__hint-icon'
    hintIcon.setAttribute('aria-hidden', 'true')
    hintIcon.innerHTML = ICON_SHIELD
    const hintText = document.createElement('span')
    if (hasAccountId) {
      hintText.innerHTML = 'Add this ID under <strong>Access</strong> to allow editing.'
    } else {
      hintText.textContent = 'Sign in or pass an account ID from the host app.'
    }
    accountHint.append(hintIcon, hintText)
    accountBlock.append(accountHint)

    const form = document.createElement('div')
    form.className = 'sg-settings sg-settings--nested sg-settings-card sg-defaults-panel'

    const defaultsHead = document.createElement('div')
    defaultsHead.className = 'sg-defaults-panel__head'
    const defaultsHeadIcon = document.createElement('span')
    defaultsHeadIcon.className = 'sg-defaults-panel__head-icon'
    defaultsHeadIcon.setAttribute('aria-hidden', 'true')
    defaultsHeadIcon.innerHTML = ICON_GEAR
    defaultsHead.append(defaultsHeadIcon, text('div', 'sg-page-guides__label', 'Default settings'))
    form.append(defaultsHead)

    const checkList = document.createElement('div')
    checkList.className = 'sg-defaults-panel__checks'

    const reloadNav = document.createElement('label')
    reloadNav.className = 'sg-check sg-settings__row sg-defaults-panel__check'
    const reloadNavToggle = document.createElement('input')
    reloadNavToggle.type = 'checkbox'
    reloadNavToggle.dataset.setting = 'reloadOnNavigate'
    reloadNavToggle.checked = Boolean(settings.reloadOnNavigate)
    reloadNav.append(reloadNavToggle, document.createTextNode(' Reload when opening another route'))
    checkList.append(reloadNav)

    const reloadPlay = document.createElement('label')
    reloadPlay.className = 'sg-check sg-settings__row sg-defaults-panel__check'
    const reloadPlayToggle = document.createElement('input')
    reloadPlayToggle.type = 'checkbox'
    reloadPlayToggle.dataset.setting = 'resetBeforePlay'
    reloadPlayToggle.checked = settings.resetBeforePlay === 'reload'
    reloadPlay.append(reloadPlayToggle, document.createTextNode(' Reload page before playing'))
    checkList.append(reloadPlay)
    form.append(checkList)

    const resetDelayField = document.createElement('label')
    resetDelayField.className = 'sg-step-settings__field sg-settings__row sg-defaults-panel__field'
    resetDelayField.append(document.createTextNode('Reload resume delay (ms)'))
    const resetDelayWrap = document.createElement('div')
    resetDelayWrap.className = 'sg-field-shell'
    const resetDelayIcon = document.createElement('span')
    resetDelayIcon.className = 'sg-field-shell__icon'
    resetDelayIcon.setAttribute('aria-hidden', 'true')
    resetDelayIcon.innerHTML = ICON_CLOCK
    const resetDelayInput = document.createElement('input')
    resetDelayInput.type = 'number'
    resetDelayInput.min = '0'
    resetDelayInput.max = '10000'
    resetDelayInput.step = '50'
    resetDelayInput.className = 'sg-field sg-field--shell'
    resetDelayInput.dataset.setting = 'resetBeforePlayDelay'
    resetDelayInput.value = String(settings.resetBeforePlayDelay ?? 450)
    resetDelayWrap.append(resetDelayIcon, resetDelayInput)
    resetDelayField.append(resetDelayWrap)
    form.append(resetDelayField)

    const themeField = document.createElement('label')
    themeField.className = 'sg-step-settings__field sg-settings__row sg-defaults-panel__field'
    themeField.append(document.createTextNode('Theme mode'))
    const themeWrap = document.createElement('div')
    themeWrap.className = 'sg-field-shell sg-field-shell--select'
    const themeIcon = document.createElement('span')
    themeIcon.className = 'sg-field-shell__icon'
    themeIcon.setAttribute('aria-hidden', 'true')
    themeIcon.innerHTML = ICON_MOON
    const themeSelect = document.createElement('select')
    themeSelect.className = 'sg-field sg-field--shell'
    themeSelect.dataset.setting = 'theme'
    ;[
      ['dark', 'Dark'],
      ['light', 'Light'],
    ].forEach(([value, label]) => {
      const opt = document.createElement('option')
      opt.value = value
      opt.textContent = label
      if ((settings.theme || 'dark') === value) opt.selected = true
      themeSelect.append(opt)
    })
    const themeChevron = document.createElement('span')
    themeChevron.className = 'sg-field-shell__chevron'
    themeChevron.setAttribute('aria-hidden', 'true')
    themeChevron.textContent = '▾'
    themeWrap.append(themeIcon, themeSelect, themeChevron)
    themeField.append(themeWrap)
    form.append(themeField)

    const access = document.createElement('div')
    access.className = 'sg-settings sg-settings--nested sg-settings-card'
    access.append(text('div', 'sg-page-guides__label', 'Access & toolbar'))

    const accountsField = this.createEditableStringList({
      label: 'Editor account IDs (not listed = Play only)',
      settingKey: 'editorAccountIds',
      items: Array.isArray(settings.editorAccountIds) ? settings.editorAccountIds : [],
      placeholder: 'e.g. 12',
      emptyText: 'No editor accounts — Play only for everyone',
      addLabel: 'Add',
    })
    access.append(accountsField)

    const bypassField = document.createElement('label')
    bypassField.className = 'sg-step-settings__field sg-settings__row'
    bypassField.append(document.createTextNode('Bypass PIN (hover orb + type to open panel)'))
    const bypassWrap = document.createElement('div')
    bypassWrap.className = 'sg-password-field'
    const bypassInput = document.createElement('input')
    bypassInput.type = 'password'
    bypassInput.className = 'sg-field'
    bypassInput.inputMode = 'numeric'
    bypassInput.autocomplete = 'new-password'
    bypassInput.placeholder = '••••••'
    bypassInput.maxLength = 12
    bypassInput.dataset.setting = 'bypassPin'
    bypassInput.value = String(settings.bypassPin ?? '123456')
    const bypassToggle = tinyButton('Show', 'ghost', {
      icon: `
        <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
          <path d="M1.8 8s2.6-4.2 6.2-4.2S14.2 8 14.2 8s-2.6 4.2-6.2 4.2S1.8 8 1.8 8Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <circle cx="8" cy="8" r="1.8" fill="none" stroke="currentColor" stroke-width="1.4"/>
        </svg>
      `,
      ariaLabel: 'Show PIN',
    })
    bypassToggle.classList.add('sg-password-field__toggle')
    bypassToggle.addEventListener('click', (event) => {
      event.preventDefault()
      event.stopPropagation()
      const show = bypassInput.type === 'password'
      bypassInput.type = show ? 'text' : 'password'
      bypassToggle.title = show ? 'Hide PIN' : 'Show PIN'
      bypassToggle.setAttribute('aria-label', show ? 'Hide PIN' : 'Show PIN')
    })
    bypassWrap.append(bypassInput, bypassToggle)
    bypassField.append(bypassWrap)
    access.append(bypassField)

    const showAccountRow = document.createElement('label')
    showAccountRow.className = 'sg-check sg-settings__row'
    const showAccountToggle = document.createElement('input')
    showAccountToggle.type = 'checkbox'
    showAccountToggle.dataset.setting = 'showAccountId'
    showAccountToggle.checked = Boolean(settings.showAccountId)
    showAccountRow.append(showAccountToggle, document.createTextNode(' Show account ID on launcher'))
    access.append(showAccountRow)

    const hiddenField = this.createEditableStringList({
      label: 'Hide toolbar on URLs',
      settingKey: 'hiddenUrls',
      items: Array.isArray(settings.hiddenUrls) ? settings.hiddenUrls : [],
      placeholder: '/login',
      emptyText: 'No hidden URLs — toolbar shows everywhere',
      addLabel: 'Add',
    })
    access.append(hiddenField)
    access.append(text(
      'p',
      'sg-lead',
      'Only listed IDs can record or manage. The bypass PIN provides recovery access.',
    ))

    const ui = settings.ui || {}
    const appearance = document.createElement('div')
    appearance.className = 'sg-settings sg-settings--nested sg-settings-card'
    appearance.append(text('div', 'sg-page-guides__label', 'Playback appearance'))

    const fontField = document.createElement('label')
    fontField.className = 'sg-step-settings__field sg-settings__row'
    fontField.append(document.createTextNode('Font family'))
    const fontSelect = document.createElement('select')
    fontSelect.className = 'sg-field'
    fontSelect.dataset.setting = 'ui.fontFamily'
    ;[
      ['system', 'System'],
      ['inter', 'Inter'],
      ['arial', 'Arial'],
      ['roboto', 'Roboto'],
      ['serif', 'Serif'],
    ].forEach(([value, label]) => {
      const option = document.createElement('option')
      option.value = value
      option.textContent = label
      if ((ui.fontFamily || 'system') === value) option.selected = true
      fontSelect.append(option)
    })
    fontField.append(fontSelect)
    appearance.append(fontField)

    const addCheck = (key, label, checked) => {
      const row = document.createElement('label')
      row.className = 'sg-check sg-settings__row'
      const input = document.createElement('input')
      input.type = 'checkbox'
      input.dataset.setting = key
      input.checked = Boolean(checked)
      row.append(input, document.createTextNode(` ${label}`))
      appearance.append(row)
    }

    addCheck('ui.animations', 'Enable animations', ui.animations !== false)
    addCheck('ui.spotlightFade', 'Spotlight fade in/out', ui.spotlightFade !== false)
    addCheck('ui.animatedCursor', 'Animated cursor between steps', ui.animatedCursor)

    const motionField = document.createElement('label')
    motionField.className = 'sg-step-settings__field sg-settings__row'
    motionField.append(document.createTextNode('Highlight motion'))
    const motionSelect = document.createElement('select')
    motionSelect.className = 'sg-field'
    motionSelect.dataset.setting = 'ui.highlightMotion'
    ;[
      ['none', 'None'],
      ['pulse', 'Pulse'],
      ['wobble', 'Wobble'],
      ['fade', 'Fade'],
    ].forEach(([value, label]) => {
      const opt = document.createElement('option')
      opt.value = value
      opt.textContent = label
      if ((ui.highlightMotion || 'pulse') === value) opt.selected = true
      motionSelect.append(opt)
    })
    motionField.append(motionSelect)
    appearance.append(motionField)

    const speedField = document.createElement('label')
    speedField.className = 'sg-step-settings__field sg-settings__row'
    speedField.append(document.createTextNode('Transition speed (ms)'))
    const speedInput = document.createElement('input')
    speedInput.type = 'number'
    speedInput.min = '0'
    speedInput.max = '1000'
    speedInput.step = '20'
    speedInput.className = 'sg-field'
    speedInput.dataset.setting = 'ui.transitionMs'
    speedInput.value = String(ui.transitionMs ?? 220)
    speedField.append(speedInput)
    appearance.append(speedField)

    const dimField = document.createElement('div')
    dimField.className = 'sg-appearance-dim sg-settings__row'
    const dimHead = document.createElement('div')
    dimHead.className = 'sg-appearance-dim__head'
    dimHead.append(text('span', 'sg-appearance-dim__label', 'Overlay dim'))
    const dimValue = document.createElement('span')
    dimValue.className = 'sg-appearance-dim__value'
    const dimInput = document.createElement('input')
    dimInput.type = 'range'
    dimInput.min = '0'
    dimInput.max = '90'
    dimInput.step = '5'
    dimInput.className = 'sg-field sg-field--range'
    dimInput.dataset.setting = 'ui.overlayOpacity'
    dimInput.value = String(Math.round((Number(ui.overlayOpacity) || 0.58) * 100))
    dimValue.textContent = `${dimInput.value}%`
    dimInput.addEventListener('input', () => {
      dimValue.textContent = `${dimInput.value}%`
      dimField.style.setProperty('--sg-dim-pct', `${dimInput.value}%`)
    })
    dimField.style.setProperty('--sg-dim-pct', `${dimInput.value}%`)
    dimHead.append(dimValue)
    dimField.append(dimHead, dimInput)
    appearance.append(dimField)

    const colors = document.createElement('div')
    colors.className = 'sg-settings__colors'
    const addColor = (key, label, value) => {
      const row = document.createElement('label')
      row.className = 'sg-settings__color-row'
      const meta = document.createElement('span')
      meta.className = 'sg-settings__color-meta'
      meta.append(text('span', 'sg-settings__color-label', label))
      const hex = document.createElement('span')
      hex.className = 'sg-settings__color-hex'
      const normalized = String(value || '#000000').toLowerCase()
      hex.textContent = normalized
      meta.append(hex)
      const swatch = document.createElement('span')
      swatch.className = 'sg-settings__color-swatch'
      const input = document.createElement('input')
      input.type = 'color'
      input.dataset.setting = key
      input.value = normalized
      input.setAttribute('aria-label', label)
      input.addEventListener('input', () => {
        hex.textContent = String(input.value || '').toLowerCase()
      })
      swatch.append(input)
      row.append(meta, swatch)
      colors.append(row)
    }
    addColor('ui.tipBg', 'Tip background', ui.tipBg || '#0f1b33')
    addColor('ui.tipText', 'Tip text', ui.tipText || '#f8fafc')
    addColor('ui.skipBg', 'Skip background', ui.skipBg || '#2563eb')
    addColor('ui.skipText', 'Skip text', ui.skipText || '#ffffff')
    addColor('ui.spotlightColor', 'Spotlight', ui.spotlightColor || '#3b82f6')
    appearance.append(colors)

    const resetBtn = button('Reset appearance', 'reset-ui-settings', 'secondary')
    resetBtn.classList.add('sg-button--compact', 'sg-appearance-reset')
    appearance.append(resetBtn)

    const launcher = settings.launcher || {}
    const orbSettings = document.createElement('div')
    orbSettings.className = 'sg-settings sg-settings--nested sg-settings-card'
    orbSettings.append(text('div', 'sg-page-guides__label', 'Orb'))

    const orbSizeField = document.createElement('label')
    orbSizeField.className = 'sg-step-settings__field sg-settings__row'
    orbSizeField.append(document.createTextNode('Size'))
    const orbSizeSelect = document.createElement('select')
    orbSizeSelect.className = 'sg-field'
    orbSizeSelect.dataset.setting = 'launcher.size'
    ;[
      ['56', 'Small'],
      ['68', 'Medium'],
      ['80', 'Large'],
    ].forEach(([value, label]) => {
      const option = document.createElement('option')
      option.value = value
      option.textContent = label
      if (Number(launcher.size ?? 80) === Number(value)) option.selected = true
      orbSizeSelect.append(option)
    })
    orbSizeField.append(orbSizeSelect)

    const orbPositionField = document.createElement('label')
    orbPositionField.className = 'sg-step-settings__field sg-settings__row'
    orbPositionField.append(document.createTextNode('Position'))
    const orbPositionSelect = document.createElement('select')
    orbPositionSelect.className = 'sg-field'
    orbPositionSelect.dataset.setting = 'launcher.position'
    ;[
      ['bottom-right', 'Bottom right'],
      ['bottom-left', 'Bottom left'],
      ['top-right', 'Top right'],
      ['top-left', 'Top left'],
    ].forEach(([value, label]) => {
      const option = document.createElement('option')
      option.value = value
      option.textContent = label
      if ((launcher.position || 'bottom-right') === value) option.selected = true
      orbPositionSelect.append(option)
    })
    orbPositionField.append(orbPositionSelect)

    const orbAnimationRow = document.createElement('label')
    orbAnimationRow.className = 'sg-check sg-settings__row'
    const orbAnimationToggle = document.createElement('input')
    orbAnimationToggle.type = 'checkbox'
    orbAnimationToggle.dataset.setting = 'launcher.animations'
    orbAnimationToggle.checked = launcher.animations !== false
    orbAnimationRow.append(orbAnimationToggle, document.createTextNode(' Animate orb'))

    orbSettings.append(orbSizeField, orbPositionField, orbAnimationRow)

    const layout = document.createElement('div')
    layout.className = 'sg-settings-layout'
    const sidebar = document.createElement('nav')
    sidebar.className = 'sg-settings-sidebar'
    sidebar.setAttribute('aria-label', 'Panel sections')
    sidebar.append(text('div', 'sg-settings-sidebar__title', 'System Guider'))

    const content = document.createElement('div')
    content.className = 'sg-settings-content'

    const sections = {
      guides: wrap,
      account: accountBlock,
      general: form,
      access,
      appearance,
      orb: orbSettings,
    }
    Object.entries(sections).forEach(([key, section]) => {
      section.classList.add('sg-settings-content__section')
      section.dataset.settingsSection = key
    })
    content.append(...Object.values(sections))

    const navIcons = {
      guides: `
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <path d="M4 2.75h7l3 3v9.5H4v-12.5Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
          <path d="M11 2.75v3h3M6.5 9h5M6.5 11.75h5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
        </svg>
      `,
      account: `
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <circle cx="9" cy="6.25" r="2.5" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <path d="M4.25 14.5c.45-2.45 2.15-3.7 4.75-3.7s4.3 1.25 4.75 3.7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
        </svg>
      `,
      general: `
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <path d="M3 5h7M13 5h2M3 9h2M8 9h7M3 13h6M12 13h3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          <circle cx="11.5" cy="5" r="1.5" fill="none" stroke="currentColor" stroke-width="1.3"/>
          <circle cx="6.5" cy="9" r="1.5" fill="none" stroke="currentColor" stroke-width="1.3"/>
          <circle cx="10.5" cy="13" r="1.5" fill="none" stroke="currentColor" stroke-width="1.3"/>
        </svg>
      `,
      access: `
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <rect x="3.5" y="7.5" width="11" height="7.5" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <path d="M6 7.5V5.75a3 3 0 0 1 6 0V7.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          <circle cx="9" cy="11" r="1" fill="currentColor"/>
        </svg>
      `,
      appearance: `
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <path d="M9 2.5a6.5 6.5 0 1 0 0 13h1.1a1.35 1.35 0 0 0 .25-2.68l-.4-.08a1.25 1.25 0 0 1 .25-2.47h1.55A3.75 3.75 0 0 0 15.5 6.5c0-2.2-2.65-4-6.5-4Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/>
          <circle cx="6" cy="6.25" r=".85" fill="currentColor"/>
          <circle cx="9" cy="4.85" r=".85" fill="currentColor"/>
          <circle cx="12" cy="6.25" r=".85" fill="currentColor"/>
        </svg>
      `,
      orb: `
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <circle cx="9" cy="9" r="5.75" fill="none" stroke="currentColor" stroke-width="1.35"/>
          <circle cx="9" cy="9" r="2.25" fill="none" stroke="currentColor" stroke-width="1.35"/>
          <path d="M9 1.75v1.5M9 14.75v1.5M1.75 9h1.5M14.75 9h1.5" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>
        </svg>
      `,
    }

    const activateSection = (key) => {
      this.settingsSection = sections[key] ? key : 'guides'
      Object.entries(sections).forEach(([sectionKey, section]) => {
        section.hidden = sectionKey !== this.settingsSection
      })
      sidebar.querySelectorAll('.sg-settings-sidebar__item').forEach((item) => {
        const active = item.dataset.section === this.settingsSection
        item.classList.toggle('is-active', active)
        item.setAttribute('aria-current', active ? 'page' : 'false')
      })
      content.scrollTop = 0
    }

    const addNavItem = (label, icon, sectionKey) => {
      const navButton = document.createElement('button')
      navButton.type = 'button'
      navButton.className = 'sg-settings-sidebar__item'
      navButton.innerHTML = navIcons[icon] || navIcons.general
      navButton.dataset.tooltip = label
      navButton.dataset.section = sectionKey
      navButton.setAttribute('aria-label', label)
      navButton.title = label
      navButton.addEventListener('click', () => {
        activateSection(sectionKey)
      })
      sidebar.append(navButton)
      return navButton
    }

    addNavItem('Guides', 'guides', 'guides')
    addNavItem('Account', 'account', 'account')
    addNavItem('Defaults', 'general', 'general')
    addNavItem('Access', 'access', 'access')
    addNavItem('Appearance', 'appearance', 'appearance')
    addNavItem('Orb', 'orb', 'orb')

    layout.append(sidebar, content)
    container.append(layout)
    activateSection(this.settingsSection)
  }

  renderPlayback(container) {
    const {
      currentStep,
      currentIndex = 0,
      total = 0,
      failed,
      autoSkipping,
    } = this.state
    const progress = document.createElement('div')
    progress.className = 'sg-progress'
    progress.append(
      text('span', '', `Step ${Math.min(currentIndex + 1, total)} of ${total}`),
      text('span', '', `${total ? Math.round(((currentIndex + 1) / total) * 100) : 0}%`),
    )
    const bar = document.createElement('div')
    bar.className = 'sg-progress__bar'
    const fill = document.createElement('span')
    fill.style.width = `${total ? ((currentIndex + 1) / total) * 100 : 0}%`
    bar.append(fill)
    container.append(progress, bar)
    if (currentStep) {
      container.append(
        text('h3', 'sg-playback__title', currentStep.title),
        text('p', 'sg-playback__description', currentStep.description),
      )
    }
    if (failed) {
      const custom = String(this.state.message || '').trim()
      container.append(text(
        'p',
        'sg-status sg-status--error',
        custom || (autoSkipping
          ? 'Target not found. Skipping to the next step…'
          : 'Target not found. Follow this guide\'s requirements first, then continue — or skip this step.'),
      ))
    } else if (this.state.waiting && (this.state.waitKind === 'target' || this.state.waitKind === 'navigate')) {
      container.append(text(
        'p',
        'sg-status sg-status--waiting',
        String(this.state.message || 'Waiting…').trim() || 'Waiting…',
      ))
    }
  }

  renderFooter(mode) {
    const footer = document.createElement('footer')
    footer.className = 'sg-panel__footer'
    if (mode === 'idle' || mode === 'recording') {
      // Idle opens via Manage; recording stop is on the floating indicator.
      return null
    } else if (mode === 'manage') {
      footer.classList.add('sg-panel__footer--manage')

      const playBtn = tinyButton('Play guide', 'secondary', {
        icon: ICON_PLAY,
        withLabel: true,
        ariaLabel: 'Play guide',
      })
      playBtn.dataset.action = 'play'
      playBtn.classList.add('sg-panel__btn-play')
      playBtn.disabled = this.state.steps.length === 0

      const more = document.createElement('div')
      more.className = 'sg-panel__footer-more'
      more.append(
        button('All guides', 'open-manage', 'ghost'),
        button('Download', 'download', 'ghost'),
        button('Download all', 'download-all', 'ghost'),
        button('Copy JSON', 'copy', 'ghost'),
        button('Close', 'close', 'ghost'),
      )

      footer.append(playBtn, more)
    } else if (mode === 'manage-routes') {
      return null
    } else if (mode === 'playback') {
      footer.append(
        button(this.labels.back, 'prev', 'secondary'),
        button(this.labels.skip, 'skip', 'secondary'),
        button(this.labels.next, 'next', 'primary'),
        button(this.labels.close, 'close', 'ghost'),
      )
      footer.querySelector('[data-action="prev"]').disabled = this.state.currentIndex <= 0
      footer.querySelector('[data-action="next"]').disabled = Boolean(this.state.waiting || this.state.failed)
    }
    return footer
  }

  handleClick(event) {
    const el = eventElement(event)
    if (!el) return
    // Close move menus when clicking elsewhere in the panel.
    if (!el.closest('.sg-step__move-picker')) this.closeMoveMenus()
    const actionBtn = el.closest('[data-action]')
    const action = actionBtn?.dataset.action
    if (!action) return
    event.preventDefault()
    event.stopPropagation()
    if (action === 'toggle-collapse') {
      this.update({ collapsed: !this.state.collapsed })
      return
    }
    const item = el.closest('[data-step-id]')
    const guideId = el.closest('[data-guide-id]')?.dataset.guideId
    if (action === 'play-guide' || action === 'delete-guide' || action === 'edit-guide') {
      this.handlers[action]?.(guideId)
      return
    }
    const stepId = item?.dataset.stepId || actionBtn?.closest?.('[data-step-id]')?.dataset.stepId
    this.handlers[action]?.(stepId)
  }

  closeMoveMenus() {
    this.root.querySelectorAll('.sg-step__move-menu:not([hidden])').forEach((menu) => {
      menu.hidden = true
    })
    this.root.querySelectorAll('.sg-step__move-btn[aria-expanded="true"]').forEach((btn) => {
      btn.setAttribute('aria-expanded', 'false')
    })
  }

  handleInput(event) {
    const el = eventElement(event)
    if (!el) return
    const setting = el.dataset.setting
    if (setting) {
      const value = el.type === 'checkbox' ? el.checked : el.value
      this.handlers['update-setting']?.(setting, value)
      return
    }
    const guideSetting = el.dataset.guideSetting
    if (guideSetting) {
      const guideId = el.dataset.guideId || this.state.currentGuideId
      const value = el.type === 'checkbox' ? el.checked : el.value
      this.handlers['edit-guide-setting']?.(guideId, guideSetting, value)
      return
    }
    const stepSetting = el.dataset.stepSetting
    if (stepSetting) {
      const stepId = el.closest('[data-step-id]')?.dataset.stepId
      const value = el.type === 'checkbox' ? el.checked : el.value
      this.handlers['edit-step-setting']?.(stepId, stepSetting, value)
      return
    }
    const guideField = el.dataset.guideField
    if (guideField) {
      this.handlers.editGuide?.(guideField, el.value)
      return
    }
    const field = el.dataset.field
    const stepId = el.closest('[data-step-id]')?.dataset.stepId
    if (!field || !stepId) return
    this.handlers.edit?.(stepId, field, field === 'waitRequired' ? el.checked : el.value)
  }

  handlePreview(event) {
    const el = eventElement(event)
    const item = el?.closest?.('[data-step-id]')
    if (item && !item.contains(event.relatedTarget)) this.handlers.preview?.(item.dataset.stepId)
  }

  handlePreviewEnd(event) {
    const el = eventElement(event)
    const item = el?.closest?.('[data-step-id]')
    if (item && !item.contains(event.relatedTarget)) this.handlers.previewEnd?.()
  }

  handleDragStart(event) {
    const el = eventElement(event)
    if (!el) return
    // Only the dedicated drag handle may start a reorder drag.
    if (!el.closest('.sg-step__drag')) {
      event.preventDefault()
      return
    }
    if (el.closest('.sg-panel__header')) {
      event.preventDefault()
      return
    }
    const item = el.closest('[data-step-id]')
    if (item) {
      event.dataTransfer.setData('text/plain', item.dataset.stepId)
      event.dataTransfer.effectAllowed = 'move'
    }
  }

  handleDrop(event) {
    event.preventDefault()
    const el = eventElement(event)
    const target = el?.closest?.('[data-step-id]')
    const sourceId = event.dataTransfer.getData('text/plain')
    if (sourceId && target && sourceId !== target.dataset.stepId) {
      this.handlers.drop?.(sourceId, target.dataset.stepId)
    }
  }

  startDrag(event) {
    if (event.button != null && event.button !== 0) return
    const el = eventElement(event)
    if (el?.closest('button, a, input, textarea, select, label, .sg-step__drag, .sg-step__controls')) return
    const inHeader = Boolean(el?.closest('.sg-panel__header'))
    const blankSurface = Boolean(el?.matches(
      '.sg-panel, .sg-panel__body, .sg-settings-layout, .sg-settings-content, .sg-settings-sidebar',
    ))
    if (!inHeader && !blankSurface) return

    const rect = this.root.getBoundingClientRect()
    this.dragging = {
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
      startX: event.clientX,
      startY: event.clientY,
      pointerId: event.pointerId,
      active: false,
    }
    try {
      event.currentTarget.setPointerCapture?.(event.pointerId)
    } catch {
      // ignore capture failures
    }
    window.addEventListener('pointermove', this.onPointerMove)
    window.addEventListener('pointerup', this.onPointerUp)
    window.addEventListener('pointercancel', this.onPointerUp)
    event.preventDefault()
  }

  onPointerMove(event) {
    if (!this.dragging) return
    if (!this.dragging.active) {
      const dx = event.clientX - this.dragging.startX
      const dy = event.clientY - this.dragging.startY
      if ((dx * dx) + (dy * dy) < 25) return
      this.dragging.active = true
      this.root.classList.add('sg-panel--settled')
      this.position = this.clampPosition(
        event.clientX - this.dragging.offsetX,
        event.clientY - this.dragging.offsetY,
      )
      this.applyPosition()
      this.root.classList.add('sg-panel--dragging')
    }
    this.position = this.clampPosition(
      event.clientX - this.dragging.offsetX,
      event.clientY - this.dragging.offsetY,
    )
    this.applyPosition()
  }

  onPointerUp() {
    if (!this.dragging) return
    const wasDragging = this.dragging.active
    this.dragging = null
    if (wasDragging) this.root.classList.remove('sg-panel--dragging')
    window.removeEventListener('pointermove', this.onPointerMove)
    window.removeEventListener('pointerup', this.onPointerUp)
    window.removeEventListener('pointercancel', this.onPointerUp)
  }

  destroy() {
    this.onPointerUp()
    this.recordingIndicator.remove()
    this.root.remove()
  }
}
