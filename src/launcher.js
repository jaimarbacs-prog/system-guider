import { buildGuideToc, flattenToc, normalizeGuideUrl } from './toc.js'

const panelIcon = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <rect x="4" y="4" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="13" y="4" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="4" y="13" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="13" y="13" width="7" height="7" rx="1.8" fill="currentColor"/>
</svg>`

const recordIcon = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="12" cy="12" r="5" fill="currentColor"/>
</svg>`

const playIcon = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M10.2 8.4L16.2 12L10.2 15.6V8.4Z" fill="currentColor"/>
</svg>`

const stopIcon = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="8.5" y="8.5" width="7" height="7" rx="1.2" fill="currentColor"/>
</svg>`

function makeSiriOrbSvg(id = 'sg') {
  return `
<svg class="sg-siri" viewBox="0 0 80 80" aria-hidden="true" focusable="false">
  <defs>
    <clipPath id="${id}-clip">
      <circle cx="40" cy="40" r="32"/>
    </clipPath>
    <radialGradient id="${id}-base" cx="42%" cy="38%" r="68%">
      <stop offset="0%" stop-color="#343178"/>
      <stop offset="55%" stop-color="#15123d"/>
      <stop offset="100%" stop-color="#07051d"/>
    </radialGradient>
    <linearGradient id="${id}-pink" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.12"/>
      <stop offset="48%" stop-color="#ec4899" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#f0abfc" stop-opacity="0.42"/>
    </linearGradient>
    <linearGradient id="${id}-cyan" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.12"/>
      <stop offset="48%" stop-color="#22d3ee" stop-opacity="0.98"/>
      <stop offset="100%" stop-color="#67e8f9" stop-opacity="0.36"/>
    </linearGradient>
    <linearGradient id="${id}-blue" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#111827" stop-opacity="0.15"/>
      <stop offset="50%" stop-color="#3b82f6" stop-opacity="0.82"/>
      <stop offset="100%" stop-color="#a5b4fc" stop-opacity="0.34"/>
    </linearGradient>
    <linearGradient id="${id}-rim" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#c4b5fd"/>
      <stop offset="42%" stop-color="#7c3aed"/>
      <stop offset="76%" stop-color="#22d3ee"/>
      <stop offset="100%" stop-color="#312e81"/>
    </linearGradient>
    <radialGradient id="${id}-glass" cx="35%" cy="24%" r="72%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.22"/>
      <stop offset="28%" stop-color="#ffffff" stop-opacity="0.03"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.18"/>
    </radialGradient>
    <filter id="${id}-soft" x="-35%" y="-35%" width="170%" height="170%">
      <feGaussianBlur stdDeviation="1.2"/>
    </filter>
    <filter id="${id}-liquid" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2.5"/>
    </filter>
  </defs>

  <circle class="sg-siri__outer-glow" cx="40" cy="40" r="34" fill="none" stroke="url(#${id}-rim)" stroke-width="4" opacity="0.24"/>
  <g clip-path="url(#${id}-clip)">
    <circle cx="40" cy="40" r="32" fill="url(#${id}-base)"/>
    <g class="sg-siri__liquid" filter="url(#${id}-liquid)">
      <g class="sg-siri__fluid sg-siri__fluid--pink">
        <ellipse cx="39" cy="23" rx="29" ry="14" fill="url(#${id}-pink)" transform="rotate(-16 40 40)"/>
      </g>
      <g class="sg-siri__fluid sg-siri__fluid--cyan">
        <path d="M8 43C24 29 48 28 72 43C58 61 35 64 8 43Z" fill="url(#${id}-cyan)"/>
      </g>
      <g class="sg-siri__fluid sg-siri__fluid--blue">
        <path d="M19 13C50 21 66 43 59 73C38 60 24 41 19 13Z" fill="url(#${id}-blue)"/>
      </g>
      <g class="sg-siri__fluid sg-siri__fluid--light">
        <ellipse cx="40" cy="40" rx="20" ry="9" fill="#ecfeff" opacity="0.58" transform="rotate(22 40 40)"/>
      </g>
      <circle class="sg-siri__center-glow" cx="40" cy="40" r="9" fill="#ffffff" opacity="0.58"/>
    </g>
    <circle cx="40" cy="40" r="32" fill="url(#${id}-glass)"/>
  </g>
  <circle class="sg-siri__rim" cx="40" cy="40" r="32.5" fill="none" stroke="url(#${id}-rim)" stroke-width="1.5"/>
  <ellipse cx="34" cy="19" rx="15" ry="5" fill="#ffffff" opacity="0.12" transform="rotate(-12 34 19)"/>
</svg>`
}

const avatarIcon = makeSiriOrbSvg('sgA')
const avatarIconOrb = makeSiriOrbSvg('sgB')

const deleteIcon = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M9 3.75h6M5.25 6.75h13.5M8.25 6.75V18a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5V6.75" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5 10.5v6M13.5 10.5v6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`

const bookIcon = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15.5H7.5A2.5 2.5 0 0 0 5 21V5.5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
  <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`

const gearIcon = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <path d="M19.4 13a7.7 7.7 0 0 0 .05-2l1.7-1.33-1.7-2.94-2.05.5a7.8 7.8 0 0 0-1.73-1L15.4 4h-3.4l-.27 2.23a7.8 7.8 0 0 0-1.73 1l-2.05-.5-1.7 2.94L8.55 11a7.7 7.7 0 0 0 0 2l-1.7 1.33 1.7 2.94 2.05-.5a7.8 7.8 0 0 0 1.73 1L12 20h3.4l.27-2.23a7.8 7.8 0 0 0 1.73-1l2.05.5 1.7-2.94L19.4 13Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`

const copyIcon = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <rect x="8" y="8" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <path d="M6 14.5V6.5A1.5 1.5 0 0 1 7.5 5H15.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`

const playArrowIcon = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M9 6.5 16 12 9 17.5V6.5Z" fill="currentColor"/>
</svg>`

const sparkIcon = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 3c.6 3.4 2.3 5.1 5.7 5.7-3.4.6-5.1 2.3-5.7 5.7-.6-3.4-2.3-5.1-5.7-5.7C9.7 8.1 11.4 6.4 12 3Z" fill="currentColor"/>
  <path d="M18.5 14.5c.25 1.3.9 1.95 2.2 2.2-1.3.25-1.95.9-2.2 2.2-.25-1.3-.9-1.95-2.2-2.2 1.3-.25 1.95-.9 2.2-2.2Z" fill="currentColor"/>
</svg>`

const arrowUpIcon = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

export class Launcher {
  constructor({
    zIndex,
    onOpenPanel,
    onBypassOpenPanel,
    onStartRecording,
    onPlayPageGuide,
    onDeleteGuide,
    onOpenManage,
    onStopTutorial,
    onSearchGuide,
  }) {
    this.onOpenPanel = onOpenPanel
    this.onBypassOpenPanel = onBypassOpenPanel
    this.onStartRecording = onStartRecording
    this.onPlayPageGuide = onPlayPageGuide
    this.onDeleteGuide = onDeleteGuide
    this.onOpenManage = onOpenManage
    this.onStopTutorial = onStopTutorial
    this.onSearchGuide = onSearchGuide
    this.playing = false
    this.guideCount = 0
    this.apiReady = true
    this.readOnly = false
    this.visible = false
    this.menuOpen = false
    this.searchGuides = []
    this.searchCurrentUrl = '/'
    this.accountId = null
    this.bypassPin = '123456'
    this.bypassBuffer = ''
    this.orbHovering = false
    this.showAccountId = false
    this.launcherSettings = {
      size: 80,
      position: 'bottom-right',
      animations: true,
    }

    this.root = document.createElement('div')
    this.root.className = 'sg-launcher is-hidden'
    this.root.hidden = true
    this.root.style.zIndex = String(zIndex + 5)
    this.root.setAttribute('aria-label', 'System Guider actions')
    this.root.setAttribute('aria-hidden', 'true')

    this.optionsRoot = document.createElement('section')
    this.optionsRoot.className = 'sg-guide-picker'
    this.optionsRoot.hidden = true
    this.optionsRoot.setAttribute('aria-label', 'All guides')

    this.trigger = document.createElement('button')
    this.trigger.type = 'button'
    this.trigger.className = 'sg-launcher__trigger'
    this.trigger.dataset.action = 'toggle-menu'
    this.trigger.setAttribute('aria-label', 'Show System Guider toolbar')
    this.trigger.setAttribute('aria-expanded', 'false')
    this.trigger.title = 'Show toolbar'
    this.trigger.innerHTML = `
      <span class="sg-launcher__avatar">${avatarIcon}</span>
    `

    this.menu = this.createMenu()
    this.recordButton = this.menu.querySelector('[data-action="start-recording"]')
    this.panelButton = this.menu.querySelector('[data-action="open-panel"]')
    this.playButton = this.menu.querySelector('[data-action="play-page"]')
    this.playTitle = this.playButton.querySelector('.sg-launcher__tile-title')
    // stopButton, searchInput and searchResults are created inside createMenu()

    this.root.append(this.optionsRoot, this.menu, this.trigger)
    this.bindOrbHover([this.trigger, this.orb].filter(Boolean))
    this.applyControlsDisabled()
    this.setMenuOpen(false)

    this.onKeyDown = this.onKeyDown.bind(this)
    this.root.addEventListener('click', (event) => this.handleClick(event))
    document.addEventListener('keydown', this.onKeyDown)
    document.body.append(this.root)
    this.setLauncherSettings(this.launcherSettings)
  }

  createMenu() {
    const menu = document.createElement('div')
    menu.className = 'sg-launcher__menu'
    menu.setAttribute('role', 'dialog')
    menu.setAttribute('aria-label', 'System Guider menu')

    const radial = document.createElement('div')
    radial.className = 'sg-launcher__radial'
    this.radial = radial

    const petals = document.createElement('div')
    petals.className = 'sg-launcher__petals'

    const connector = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    connector.classList.add('sg-launcher__connector')
    connector.setAttribute('viewBox', '0 0 304 150')
    connector.setAttribute('aria-hidden', 'true')
    connector.innerHTML = `
      <g class="sg-launcher__connector-line sg-launcher__connector-line--play">
        <path d="M46 108C34 78 58 28 96 28" pathLength="100"/>
        <circle r="2.4"/>
        <circle r="2.4"/>
        <circle r="2.6"/>
      </g>
      <g class="sg-launcher__connector-line sg-launcher__connector-line--record">
        <path d="M52 100C48 84 64 72 96 74" pathLength="100"/>
        <circle r="2.3"/>
        <circle r="2.3"/>
        <circle r="2.5"/>
      </g>
      <g class="sg-launcher__connector-line sg-launcher__connector-line--panel">
        <path d="M54 112C58 118 72 122 96 120" pathLength="100"/>
        <circle r="2.3"/>
        <circle r="2.3"/>
        <circle r="2.5"/>
      </g>
    `
    this.connector = connector
    this.placeAllConnectorDots()

    const recordTile = this.createTile({
      action: 'start-recording',
      variant: 'record',
      title: 'Record',
      subtitle: 'Create a guide',
      icon: recordIcon,
      shortcut: 'R',
    })
    const panelTile = this.createTile({
      action: 'open-panel',
      variant: 'panel',
      title: 'Panel',
      subtitle: 'Guide controls',
      icon: panelIcon,
      shortcut: 'P',
    })
    const playTile = this.createTile({
      action: 'play-page',
      variant: 'play',
      title: 'Play guides',
      subtitle: 'Start a tutorial',
      icon: playIcon,
    })
    this.stopButton = this.createTile({
      action: 'stop-tutorial',
      variant: 'stop',
      title: 'Stop',
      subtitle: 'End tutorial',
      icon: stopIcon,
    })
    this.stopButton.hidden = true

    petals.append(playTile, recordTile, panelTile, this.stopButton)
    this.petalGroup = petals

    const orb = document.createElement('button')
    orb.type = 'button'
    orb.className = 'sg-launcher__orb'
    orb.dataset.action = 'toggle-menu'
    orb.setAttribute('aria-label', 'Hide System Guider toolbar')
    orb.title = 'Close'
    orb.innerHTML = `
      <span class="sg-launcher__avatar">${avatarIconOrb}</span>
    `
    this.orb = orb

    radial.append(connector, petals, orb)

    const search = document.createElement('form')
    search.className = 'sg-launcher__search'
    search.setAttribute('role', 'search')
    search.innerHTML = `
      <span class="sg-launcher__search-spark">${sparkIcon}</span>
      <input
        type="text"
        class="sg-launcher__search-input"
        placeholder="Search guides or press /"
        autocomplete="off"
        spellcheck="false"
        aria-label="Search guides"
      />
      <button type="submit" class="sg-launcher__search-go" aria-label="Search">${arrowUpIcon}</button>
    `
    this.searchInput = search.querySelector('.sg-launcher__search-input')
    this.searchInput.addEventListener('input', () => this.renderSearchResults())
    search.addEventListener('submit', (event) => {
      event.preventDefault()
      this.submitSearch()
    })

    this.searchResults = document.createElement('div')
    this.searchResults.className = 'sg-launcher__results'
    this.searchResults.hidden = true

    this.accountLabel = document.createElement('span')
    this.accountLabel.className = 'sg-launcher__account'
    this.accountLabel.hidden = true

    const hint = document.createElement('div')
    hint.className = 'sg-launcher__hint'
    hint.innerHTML = 'Press <kbd>Esc</kbd> to close'

    menu.append(radial, search, this.searchResults, this.accountLabel, hint)
    this.syncAccountLabel()
    return menu
  }

  createTile({ action, variant, title, subtitle = '', icon, shortcut = '' }) {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = `sg-launcher__tile sg-launcher__tile--${variant}`
    button.dataset.action = action
    button.setAttribute('aria-label', title)
    button.title = title
    button.innerHTML = `
      ${shortcut ? `<span class="sg-launcher__shortcut">${shortcut}</span>` : ''}
      <span class="sg-launcher__icon">${icon}</span>
      <span class="sg-launcher__tile-copy">
        <span class="sg-launcher__tile-title">${title}</span>
        ${subtitle ? `<span class="sg-launcher__tile-subtitle">${subtitle}</span>` : ''}
      </span>
    `
    return button
  }

  layoutPetals() {
    if (!this.petalGroup) return
    const petals = Array.from(this.petalGroup.children).filter((el) => !el.hidden)
    petals.forEach((petal, index) => {
      petal.style.setProperty('--sg-petal-index', String(index))
    })
    const count = petals.length
    this.petalGroup.dataset.count = String(count)
    const hasRecord = petals.some((el) => el.classList.contains('sg-launcher__tile--record'))
    const hasPanel = petals.some((el) => el.classList.contains('sg-launcher__tile--panel'))
    this.radial?.classList.toggle('is-compact', !hasRecord && !hasPanel)
    this.syncConnectorLayout(petals)
  }

  /** Place connector dots exactly on their path (by arc length). */
  placeConnectorDots(group, fractions = [0.36, 0.68, 1]) {
    if (!group) return
    const path = group.querySelector('path')
    if (!path || typeof path.getTotalLength !== 'function') return
    let length = 0
    try {
      length = path.getTotalLength()
    } catch {
      return
    }
    if (!length) return
    const circles = group.querySelectorAll('circle')
    fractions.forEach((t, index) => {
      const circle = circles[index]
      if (!circle) return
      const pt = path.getPointAtLength(Math.min(1, Math.max(0, t)) * length)
      circle.setAttribute('cx', String(Math.round(pt.x * 10) / 10))
      circle.setAttribute('cy', String(Math.round(pt.y * 10) / 10))
    })
  }

  placeAllConnectorDots() {
    if (!this.connector) return
    this.connector.querySelectorAll('.sg-launcher__connector-line').forEach((group) => {
      this.placeConnectorDots(group)
    })
  }

  syncConnectorLayout(visiblePetals) {
    if (!this.connector) return
    const petals = visiblePetals
      || Array.from(this.petalGroup?.children || []).filter((el) => !el.hidden)
    const count = petals.length
    const hasRecord = petals.some((el) => el.classList.contains('sg-launcher__tile--record'))
    const hasPanel = petals.some((el) => el.classList.contains('sg-launcher__tile--panel'))
    const playLine = this.connector.querySelector('.sg-launcher__connector-line--play')
    const recordLine = this.connector.querySelector('.sg-launcher__connector-line--record')
    const panelLine = this.connector.querySelector('.sg-launcher__connector-line--panel')

    if (recordLine) recordLine.style.display = hasRecord ? '' : 'none'
    if (panelLine) panelLine.style.display = hasPanel ? '' : 'none'

    if (!playLine) return
    const path = playLine.querySelector('path')
    // Only Play (or Play+Stop): tile sits lower — arc to bottom/mid stack
    const compact = !hasRecord && !hasPanel
    if (compact && count === 1) {
      path?.setAttribute('d', 'M54 112C58 118 72 122 96 120')
    } else if (compact && count === 2) {
      path?.setAttribute('d', 'M52 100C48 84 64 72 96 74')
    } else {
      path?.setAttribute('d', 'M46 108C34 78 58 28 96 28')
    }
    this.placeConnectorDots(playLine)
    if (hasRecord) this.placeConnectorDots(recordLine)
    if (hasPanel) this.placeConnectorDots(panelLine)
  }

  matchGuides(query) {
    const q = String(query || '').trim().toLowerCase()
    const guides = Array.isArray(this.searchGuides) ? this.searchGuides : []
    if (!q) return guides.slice(0, 6)
    return guides
      .map((guide) => {
        const title = String(guide.title || '').toLowerCase()
        const url = String(guide.url || '').toLowerCase()
        let score = 0
        if (title.startsWith(q)) score += 3
        if (title.includes(q)) score += 2
        if (url.includes(q)) score += 1
        return { guide, score }
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((item) => item.guide)
  }

  renderSearchResults() {
    if (!this.searchResults) return
    const query = this.searchInput?.value || ''
    const matches = this.matchGuides(query)
    this.searchResults.replaceChildren()

    if (!query.trim()) {
      this.searchResults.hidden = true
      return
    }

    if (!matches.length) {
      const empty = document.createElement('div')
      empty.className = 'sg-launcher__result-empty'
      empty.textContent = 'No matching guides'
      this.searchResults.append(empty)
      this.searchResults.hidden = false
      return
    }

    matches.forEach((guide) => {
      const item = document.createElement('button')
      item.type = 'button'
      item.className = 'sg-launcher__result'
      item.dataset.action = 'search-select'
      item.dataset.guideId = guide.id
      const steps = Array.isArray(guide.steps) ? guide.steps.length : 0
      const rawTitle = String(guide.title || 'Untitled guide').trim()
      const titleParts = rawTitle.split(' · ')
      const headTitle = (titleParts[0] || 'Untitled guide').trim()
      const dateMeta = titleParts.slice(1).join(' · ').trim()
      const isRedundantStepsTitle = /^\d+\s+steps?$/i.test(headTitle)
      const displayTitle = isRedundantStepsTitle
        ? (dateMeta || 'Untitled guide')
        : rawTitle
      item.innerHTML = `
        <span class="sg-launcher__result-spark">${sparkIcon}</span>
        <span class="sg-launcher__result-copy">
          <span class="sg-launcher__result-title"></span>
          <span class="sg-launcher__result-meta"></span>
        </span>
        <span class="sg-launcher__result-arrow">→</span>
      `
      item.querySelector('.sg-launcher__result-title').textContent = displayTitle
      item.querySelector('.sg-launcher__result-meta').textContent =
        `${guide.url || '/'} · ${steps} step${steps === 1 ? '' : 's'}`
      this.searchResults.append(item)
    })
    this.searchResults.hidden = false
  }

  submitSearch() {
    const matches = this.matchGuides(this.searchInput?.value || '')
    if (matches.length) this.selectSearchGuide(matches[0])
  }

  selectSearchGuide(guide) {
    if (!guide) return
    if (this.searchInput) this.searchInput.value = ''
    this.renderSearchResults()
    this.setMenuOpen(false)
    this.onSearchGuide?.(guide)
  }

  setSearchData(guides, currentUrl = '/') {
    this.searchGuides = Array.isArray(guides) ? guides : []
    this.searchCurrentUrl = currentUrl
    if (this.menuOpen) this.renderSearchResults()
  }

  handleClick(event) {
    const action = event.target.closest('[data-action]')?.dataset.action
    if (!action) return

    if (action === 'toggle-menu') {
      this.setMenuOpen(!this.menuOpen)
      return
    }
    if (action === 'start-recording') {
      if (this.readOnly) return
      this.onStartRecording?.()
      this.setMenuOpen(false)
      return
    }
    if (action === 'open-panel') {
      if (this.readOnly) return
      this.onOpenPanel?.()
      this.setMenuOpen(false)
      return
    }
    if (action === 'play-page') {
      this.onPlayPageGuide?.()
      this.setMenuOpen(false)
      return
    }
    if (action === 'stop-tutorial') {
      this.onStopTutorial?.()
      return
    }
    if (action === 'search-select') {
      const guideId = event.target.closest('[data-guide-id]')?.dataset.guideId
      const guide = this.searchGuides?.find((item) => item.id === guideId)
      if (guide) this.selectSearchGuide(guide)
      return
    }
    if (action === 'close-picker') this.hideGuideOptions()
    if (action === 'open-manage') {
      if (this.readOnly) return
      this.hideGuideOptions()
      this.onOpenManage?.()
    }
    if (action === 'select-guide') {
      const guideId = event.target.closest('[data-guide-id]')?.dataset.guideId
      const guide = this.guides?.find((item) => item.id === guideId)
      if (guide) {
        const onSelect = this.onSelectGuide
        this.hideGuideOptions()
        onSelect?.(guide)
      }
    }
    if (action === 'delete-guide') {
      if (this.readOnly) return
      event.preventDefault()
      event.stopPropagation()
      const guideId = event.target.closest('[data-guide-id]')?.dataset.guideId
      if (!guideId) return
      this.onDeleteGuide?.(guideId)
    }
  }

  bindOrbHover(elements) {
    const setHover = (on) => {
      this.orbHovering = Boolean(on)
      if (!on) this.bypassBuffer = ''
    }
    elements.forEach((el) => {
      el.addEventListener('pointerenter', () => setHover(true))
      el.addEventListener('pointerleave', () => setHover(false))
    })
  }

  setBypassPin(pin) {
    this.bypassPin = String(pin || '').replace(/\D/g, '').slice(0, 12)
    this.bypassBuffer = ''
  }

  tryBypassPin(event) {
    const pin = this.bypassPin
    if (!pin || !this.orbHovering || !this.visible) return false
    if (event.metaKey || event.ctrlKey || event.altKey) return false
    const target = event.target
    const inField =
      target instanceof HTMLElement &&
      (target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.isContentEditable)
    if (inField) return false

    const key = event.key
    if (key === 'Backspace') {
      event.preventDefault()
      this.bypassBuffer = this.bypassBuffer.slice(0, -1)
      return true
    }
    if (key === 'Escape') {
      this.bypassBuffer = ''
      return false
    }
    if (!/^[0-9]$/.test(key)) return false

    event.preventDefault()
    this.bypassBuffer = `${this.bypassBuffer}${key}`.slice(-Math.max(pin.length, 12))
    if (this.bypassBuffer === pin || this.bypassBuffer.endsWith(pin)) {
      this.bypassBuffer = ''
      this.onBypassOpenPanel?.()
    }
    return true
  }

  onKeyDown(event) {
    if (this.tryBypassPin(event)) return

    if (event.key === 'Escape') {
      if (!this.optionsRoot.hidden) {
        this.hideGuideOptions()
        return
      }
      if (this.menuOpen && this.searchInput?.value) {
        event.preventDefault()
        this.searchInput.value = ''
        this.renderSearchResults()
        return
      }
      if (this.menuOpen) {
        event.preventDefault()
        this.setMenuOpen(false)
      }
      return
    }

    if (!this.menuOpen || event.metaKey || event.ctrlKey || event.altKey) return
    const target = event.target
    const inField =
      target instanceof HTMLElement &&
      (target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.isContentEditable)

    if (event.key === '/' && !inField) {
      event.preventDefault()
      this.searchInput?.focus()
      return
    }
    if (inField) return

    const key = String(event.key || '').toLowerCase()
    if (key === 'r' && !this.recordButton.disabled) {
      event.preventDefault()
      this.onStartRecording?.()
      this.setMenuOpen(false)
    }
    if (key === 'p' && !this.panelButton.disabled) {
      event.preventDefault()
      this.onOpenPanel?.()
      this.setMenuOpen(false)
    }
  }

  setMenuOpen(open) {
    this.menuOpen = Boolean(open)
    this.root.classList.toggle('is-menu-open', this.menuOpen)
    this.syncClosedRail()
    this.menu.hidden = !this.menuOpen
    this.trigger.hidden = this.menuOpen || !this.optionsRoot.hidden
    this.trigger.setAttribute('aria-expanded', String(this.menuOpen))
    this.trigger.setAttribute(
      'aria-label',
      this.menuOpen ? 'Hide System Guider toolbar' : 'Show System Guider toolbar',
    )
    this.trigger.title = this.menuOpen ? 'Hide toolbar' : 'Show toolbar'

    if (this.menuOpen) {
      this.layoutPetals()
      this.renderSearchResults()
    } else if (this.searchInput) {
      this.searchInput.value = ''
      if (this.searchResults) this.searchResults.hidden = true
    }
  }

  syncClosedRail() {
    const pickerOpen = !this.optionsRoot.hidden
    const showRail = !this.menuOpen && !pickerOpen
    this.root.classList.toggle('is-menu-closed', showRail)
    this.trigger.hidden = !showRail
  }

  setPlayState(count) {
    this.guideCount = count
    if (this.playTitle) {
      this.playTitle.textContent = count > 1 ? `Play guides (${count})` : 'Play guides'
    }
    this.applyControlsDisabled()
  }

  setApiReady(ready) {
    this.apiReady = Boolean(ready)
    this.root.classList.toggle('is-api-pending', !this.apiReady)
    this.applyControlsDisabled()
  }

  setReadOnly(readOnly) {
    this.readOnly = Boolean(readOnly)
    this.root.classList.toggle('is-readonly', this.readOnly)
    if (this.recordButton) this.recordButton.hidden = this.readOnly
    if (this.panelButton) this.panelButton.hidden = this.readOnly
    if (this.manageButton) this.manageButton.hidden = this.readOnly
    this.applyControlsDisabled()
    if (this.menuOpen) this.layoutPetals()
  }

  setAccountId(accountId) {
    this.accountId = accountId == null || accountId === '' ? null : String(accountId)
    this.syncAccountLabel()
  }

  setShowAccountId(show) {
    this.showAccountId = Boolean(show)
    this.syncAccountLabel()
  }

  setLauncherSettings(settings = {}) {
    const size = Math.min(96, Math.max(48, Math.round(Number(settings.size) || 80)))
    const positions = ['bottom-right', 'bottom-left', 'top-right', 'top-left']
    const position = positions.includes(settings.position) ? settings.position : 'bottom-right'
    const animations = settings.animations !== false
    this.launcherSettings = { size, position, animations }
    this.root.style.setProperty('--sg-orb-size', `${size}px`)
    positions.forEach((value) => {
      this.root.classList.toggle(`is-position-${value}`, position === value)
    })
    this.root.classList.toggle('is-orb-static', !animations)
  }

  syncAccountLabel() {
    if (!this.accountLabel) return
    const id = this.accountId == null || this.accountId === '' ? '' : String(this.accountId)
    const visible = Boolean(this.showAccountId && id)
    this.accountLabel.hidden = !visible
    this.accountLabel.textContent = visible ? `Account ID: ${id}` : ''
  }

  setVisible(visible) {
    this.visible = Boolean(visible)
    this.root.hidden = !this.visible
    this.root.classList.toggle('is-hidden', !this.visible)
    this.root.setAttribute('aria-hidden', String(!this.visible))
    if (!this.visible) this.setMenuOpen(false)
  }

  applyPlayDisabled() {
    this.applyControlsDisabled()
  }

  applyControlsDisabled() {
    const apiBlocked = !this.apiReady
    const playing = Boolean(this.playing)
    const readOnly = Boolean(this.readOnly)

    this.playButton.disabled = apiBlocked || playing || (this.guideCount ?? 0) < 1
    if (apiBlocked) {
      this.playButton.title = 'Waiting for guide API…'
    } else if ((this.guideCount ?? 0) < 1) {
      this.playButton.title = 'No guides saved yet'
    } else if (playing) {
      this.playButton.title = 'Stop the tutorial first'
    } else {
      const count = this.guideCount ?? 0
      this.playButton.title = `${count} guide${count === 1 ? '' : 's'} available`
    }

    this.recordButton.disabled = apiBlocked || playing || readOnly
    this.panelButton.disabled = apiBlocked || playing || readOnly
    this.stopButton.disabled = !playing
    this.stopButton.hidden = !playing
    this.stopButton.classList.toggle('is-disabled', !playing)
    if (this.menuOpen) this.layoutPetals()

    if (readOnly) {
      this.recordButton.title = 'View-only: recording disabled'
      this.panelButton.title = 'View-only: manage disabled'
    } else if (apiBlocked) {
      this.recordButton.title = 'Waiting for guide API…'
      this.panelButton.title = 'Waiting for guide API…'
    } else if (playing) {
      this.recordButton.title = 'Stop the tutorial first'
      this.panelButton.title = 'Stop the tutorial first'
    } else {
      this.recordButton.title = 'Start recording'
      this.panelButton.title = 'Guide Panel'
    }
    this.stopButton.title = playing ? 'Stop tutorial' : 'No tutorial playing'
  }

  showGuideOptions(guides, onSelect, { hierarchical = true, currentUrl = '/' } = {}) {
    this.guides = guides
    this.onSelectGuide = onSelect
    this.optionsRoot.replaceChildren()
    this.setMenuOpen(false)

    const header = document.createElement('header')
    header.className = 'sg-guide-picker__header'

    const brand = document.createElement('div')
    brand.className = 'sg-guide-picker__brand'
    const brandIcon = document.createElement('span')
    brandIcon.className = 'sg-guide-picker__brand-icon'
    brandIcon.setAttribute('aria-hidden', 'true')
    brandIcon.innerHTML = bookIcon
    const brandCopy = document.createElement('div')
    brandCopy.className = 'sg-guide-picker__brand-copy'
    const title = document.createElement('strong')
    title.className = 'sg-guide-picker__title'
    title.textContent = hierarchical ? 'All Guides' : 'Page Guides'
    const subtitle = document.createElement('span')
    subtitle.className = 'sg-guide-picker__subtitle'
    subtitle.textContent = hierarchical ? 'Manage your guides' : 'Choose a guide to play'
    brandCopy.append(title, subtitle)
    brand.append(brandIcon, brandCopy)

    const actions = document.createElement('div')
    actions.className = 'sg-guide-picker__actions'
    const manage = document.createElement('button')
    manage.type = 'button'
    manage.className = 'sg-guide-picker__manage'
    manage.dataset.action = 'open-manage'
    manage.innerHTML = `<span class="sg-guide-picker__manage-icon">${gearIcon}</span><span>Manage</span>`
    manage.hidden = this.readOnly
    this.manageButton = manage
    const close = document.createElement('button')
    close.type = 'button'
    close.className = 'sg-guide-picker__close'
    close.dataset.action = 'close-picker'
    close.setAttribute('aria-label', 'Close guide options')
    close.textContent = '×'
    actions.append(manage, close)
    header.append(brand, actions)

    const list = document.createElement('div')
    list.className = 'sg-guide-picker__list'

    if (!guides.length) {
      const empty = document.createElement('div')
      empty.className = 'sg-guide-picker__empty'
      empty.textContent = 'No guides saved yet.'
      list.append(empty)
    } else if (hierarchical) {
      const rows = flattenToc(buildGuideToc(guides))
      let guideIndex = 0
      rows.forEach((row) => {
        if (row.type === 'section') {
          const section = document.createElement('div')
          section.className = 'sg-guide-picker__section'
          section.style.setProperty('--sg-toc-depth', String(row.depth))
          const current = normalizeGuideUrl(currentUrl)
          const path = normalizeGuideUrl(row.path)
          if (current === path || (path !== '/' && current.startsWith(`${path}/`))) {
            section.classList.add('is-current')
          }
          const label = document.createElement('span')
          label.className = 'sg-guide-picker__section-label'
          label.textContent = row.label
          const pathWrap = document.createElement('span')
          pathWrap.className = 'sg-guide-picker__section-meta'
          const pathEl = document.createElement('span')
          pathEl.className = 'sg-guide-picker__section-path'
          pathEl.textContent = row.path
          const copyBtn = document.createElement('button')
          copyBtn.type = 'button'
          copyBtn.className = 'sg-guide-picker__copy-path'
          copyBtn.title = 'Copy path'
          copyBtn.setAttribute('aria-label', `Copy ${row.path}`)
          copyBtn.innerHTML = copyIcon
          copyBtn.addEventListener('click', async (event) => {
            event.preventDefault()
            event.stopPropagation()
            try {
              await navigator.clipboard?.writeText?.(row.path)
              copyBtn.classList.add('is-copied')
              setTimeout(() => copyBtn.classList.remove('is-copied'), 900)
            } catch {
              // ignore clipboard errors
            }
          })
          pathWrap.append(pathEl, copyBtn)
          section.append(label, pathWrap)
          list.append(section)
          return
        }

        guideIndex += 1
        list.append(this.createGuideRow(row.guide, guideIndex, {
          depth: row.depth,
          currentUrl,
        }))
      })
    } else {
      guides.forEach((guide, index) => {
        list.append(this.createGuideRow(guide, index + 1, { depth: 0, currentUrl }))
      })
    }

    this.optionsRoot.append(header, list)
    this.optionsRoot.hidden = false
    this.syncClosedRail()
  }

  createGuideRow(guide, index, { depth = 0, currentUrl = '/' } = {}) {
    const row = document.createElement('div')
    row.className = 'sg-guide-picker__row'
    row.dataset.guideId = guide.id
    row.style.setProperty('--sg-toc-depth', String(depth))
    const guideUrl = normalizeGuideUrl(guide.url || '/')
    if (guideUrl === normalizeGuideUrl(currentUrl)) {
      row.classList.add('is-current-page')
    }

    const option = document.createElement('button')
    option.type = 'button'
    option.className = 'sg-guide-picker__option'
    option.dataset.action = 'select-guide'
    option.dataset.guideId = guide.id

    const number = document.createElement('span')
    number.className = 'sg-guide-picker__number'
    number.textContent = String(index).padStart(2, '0')

    const copy = document.createElement('span')
    copy.className = 'sg-guide-picker__copy'
    const name = document.createElement('strong')
    const rawTitle = String(guide.title || 'Untitled guide').trim()
    const titleParts = rawTitle.split(' · ')
    const headTitle = (titleParts[0] || 'Untitled guide').trim()
    const dateMeta = titleParts.slice(1).join(' · ').trim()
    const isRedundantStepsTitle = /^\d+\s+steps?$/i.test(headTitle)
    name.textContent = isRedundantStepsTitle
      ? (dateMeta || 'Untitled guide')
      : rawTitle
    const meta = document.createElement('small')
    const steps = Array.isArray(guide.steps) ? guide.steps.length : Number(guide.steps) || 0
    const pathSpan = document.createElement('span')
    pathSpan.className = 'sg-guide-picker__path'
    pathSpan.textContent = guideUrl
    const dot = document.createElement('span')
    dot.className = 'sg-guide-picker__dot'
    dot.textContent = '·'
    const stepsSpan = document.createElement('span')
    stepsSpan.textContent = `${steps} step${steps === 1 ? '' : 's'}`
    meta.append(pathSpan, dot, stepsSpan)
    copy.append(name, meta)

    const play = document.createElement('span')
    play.className = 'sg-guide-picker__play'
    play.setAttribute('aria-hidden', 'true')
    play.innerHTML = playArrowIcon

    option.append(number, copy, play)

    const remove = document.createElement('button')
    remove.type = 'button'
    remove.className = 'sg-guide-picker__delete'
    remove.dataset.action = 'delete-guide'
    remove.dataset.guideId = guide.id
    remove.setAttribute('aria-label', `Delete ${guide.title || 'guide'}`)
    remove.title = 'Delete guide'
    remove.innerHTML = deleteIcon
    if (this.readOnly) remove.hidden = true

    row.append(option, remove)
    return row
  }

  hideGuideOptions() {
    this.optionsRoot.hidden = true
    this.optionsRoot.replaceChildren()
    this.guides = null
    this.onSelectGuide = null
    this.syncClosedRail()
  }

  setPanelOpen(open) {
    this.panelButton.classList.toggle('is-active', open)
    this.panelButton.setAttribute('aria-pressed', String(open))
  }

  setPlaying(playing) {
    this.playing = Boolean(playing)
    this.root.classList.toggle('is-playing', this.playing)
    if (this.playing) {
      this.hideGuideOptions()
      this.panelButton.classList.remove('is-active')
      this.panelButton.setAttribute('aria-pressed', 'false')
      this.setMenuOpen(true)
    }
    this.applyControlsDisabled()
  }

  destroy() {
    this.hideGuideOptions()
    document.removeEventListener('keydown', this.onKeyDown)
    this.root.remove()
  }
}
