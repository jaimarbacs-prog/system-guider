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

/** Clicks on button labels are often Text nodes — those have no .closest(). */
const eventElement = (event) => {
  const target = event?.target
  if (target instanceof Element) return target
  if (target?.parentElement instanceof Element) return target.parentElement
  return null
}

export class Panel {
  constructor({ labels, zIndex, handlers, visible = true }) {
    this.labels = labels
    this.handlers = handlers
    this.state = { mode: 'idle', steps: [], collapsed: false, pageUrl: '', hasPageGuide: false, pageGuides: [], focusGuideTitle: false }
    this.position = null
    this.dragging = null
    this.root = document.createElement('aside')
    this.root.className = 'sg-panel'
    this.root.style.zIndex = String(zIndex + 2)
    this.root.setAttribute('aria-label', 'System Guider')
    this.root.addEventListener('click', (event) => this.handleClick(event))
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
    live.append(document.createElement('span'))

    const status = text('span', 'sg-recording-indicator__status', 'RECORDING…')

    const stop = document.createElement('button')
    stop.type = 'button'
    stop.className = 'sg-recording-indicator__stop'
    stop.title = 'Stop recording'
    stop.setAttribute('aria-label', 'Stop recording')
    const stopIcon = document.createElement('span')
    stopIcon.className = 'sg-recording-indicator__stop-icon'
    stopIcon.setAttribute('aria-hidden', 'true')
    const stopLabel = text('span', 'sg-recording-indicator__stop-label', 'STOP')
    stop.append(stopIcon, stopLabel)
    stop.addEventListener('click', (event) => {
      event.preventDefault()
      event.stopPropagation()
      this.handlers['stop-recording']?.()
    })

    indicator.append(live, status, stop)
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
    const globalSettingsOpen = Boolean(this.root.querySelector('.sg-global-settings[open]'))

    this.root.classList.toggle('sg-panel--hidden', !this.visible)
    this.root.setAttribute('aria-hidden', String(!this.visible))
    this.applyTheme()
    this.root.replaceChildren()

    const header = document.createElement('header')
    header.className = 'sg-panel__header'
    header.addEventListener('pointerdown', (event) => this.startDrag(event))
    const brand = document.createElement('div')
    brand.className = 'sg-panel__brand'
    const brandIcon = document.createElement('span')
    brandIcon.className = 'sg-panel__brand-icon'
    brandIcon.setAttribute('aria-hidden', 'true')
    brandIcon.innerHTML = `
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M12 3c.55 3.1 2.1 4.65 5.2 5.2-3.1.55-4.65 2.1-5.2 5.2-.55-3.1-2.1-4.65-5.2-5.2C9.9 7.65 11.45 6.1 12 3Z" fill="currentColor"/>
        <path d="M18.2 14.2c.25 1.35.9 2 2.25 2.25-1.35.25-2 .9-2.25 2.25-.25-1.35-.9-2-2.25-2.25 1.35-.25 2-.9 2.25-2.25Z" fill="currentColor"/>
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
    const collapse = button(collapsed ? 'Open' : 'Minimize', 'toggle-collapse', 'ghost')
    collapse.setAttribute('aria-expanded', String(!collapsed))
    header.append(brand, collapse)
    this.root.append(header)
    if (collapsed) {
      this.applyPosition()
      return
    }

    const body = document.createElement('div')
    body.className = 'sg-panel__body'
    if (mode === 'idle') this.renderIdle(body)
    if (mode === 'recording' || mode === 'manage') this.renderSteps(body, mode)
    if (mode === 'manage-routes') this.renderManageRoutes(body, { globalSettingsOpen })
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
      'manage-routes': 'Manage guides & settings',
    }[mode]
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
    wrap.className = 'sg-page-guides'
    wrap.append(text('div', 'sg-page-guides__label', 'Saved guides on this page'))
    const list = document.createElement('ul')
    list.className = 'sg-page-guides__list'
    guides.forEach((guide, index) => {
      const item = document.createElement('li')
      item.className = 'sg-page-guides__item'
      if (guide.id === this.state.currentGuideId) item.classList.add('is-current')
      const title = document.createElement('strong')
      title.textContent = guide.title || `Guide ${index + 1}`
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
      nameLeft.append(document.createTextNode('Guide name'))
      if (this.state.dirty) {
        nameLeft.append(text('em', 'sg-guide-editor__badge', 'Unsaved'))
      }
      const saveBtn = button('Save', 'save-page', 'primary')
      saveBtn.classList.add('sg-button--compact', 'sg-guide-field__save')
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
      guideSummary.className = 'sg-step-settings__summary'
      guideSummary.textContent = 'Guide options'
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
      editor.append(stepsHead)
      container.append(editor)

      if (this.state.focusGuideTitle) {
        queueMicrotask(() => {
          guideTitle.focus()
          guideTitle.select()
        })
      }
    }
    if (!this.state.steps.length) {
      container.append(text('div', 'sg-empty', mode === 'manage'
        ? 'No steps in this guide yet.'
        : 'No steps yet — start interacting with the page.'))
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
        row.append(dragHandle)
      }
      row.append(
        text('span', 'sg-step__number', String(index + 1)),
        text('span', 'sg-step__action', step.action),
      )
      if (isNew) row.append(text('span', 'sg-step__new', 'New'))
      if (step.invalid) row.append(text('span', 'sg-step__warning', 'Target missing'))

      const titleInput = document.createElement('input')
      titleInput.className = 'sg-field sg-step__title'
      titleInput.value = step.title
      titleInput.dataset.field = 'title'
      titleInput.disabled = mode === 'recording'
      titleInput.placeholder = 'Step title'
      titleInput.setAttribute('aria-label', `Step ${index + 1} title`)

      const selector = text('code', 'sg-step__selector', step.selector || 'No target')
      const body = document.createElement('div')
      body.className = 'sg-step__body'
      body.append(titleInput, selector)
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
        }

        right.append(
          bindStepAction('Play', 'play-here', 'ghost'),
          bindStepAction('Remove', 'remove', 'danger'),
        )
        controls.append(left, right)

        if (mode === 'manage') {
          const details = document.createElement('details')
          details.className = 'sg-step-settings'
          const summary = document.createElement('summary')
          summary.className = 'sg-step-settings__summary'
          summary.textContent = 'Settings'
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
    container.append(list)
  }

  renderManageRoutes(container, { globalSettingsOpen = false } = {}) {
    if (this.state.flashMessage) {
      container.append(text('p', 'sg-status', this.state.flashMessage))
    }
    const settings = this.state.settings || {}
    const guides = Array.isArray(this.state.allGuides) ? this.state.allGuides : []
    const wrap = document.createElement('div')
    wrap.className = 'sg-page-guides'
    wrap.append(text('div', 'sg-page-guides__label', `All guides (${guides.length})`))
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
        section.append(text('div', 'sg-manage-section__path', url))
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
          const icon = document.createElement('span')
          icon.className = 'sg-page-guides__icon'
          icon.setAttribute('aria-hidden', 'true')
          icon.innerHTML = `
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M7 4.75h7.5L17 7.25V19.25a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" stroke-width="1.7"/>
              <path d="M9 10.5h6M9 13.5h6M9 16.5h4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            </svg>
          `
          const titleWrap = document.createElement('div')
          titleWrap.className = 'sg-page-guides__title-row'
          const title = document.createElement('strong')
          title.textContent = guide.title || 'Untitled'
          const badge = document.createElement('span')
          badge.className = 'sg-page-guides__badge'
          badge.textContent = `${guide.steps} step${guide.steps === 1 ? '' : 's'}`
          titleWrap.append(title, badge)
          head.append(icon, titleWrap)
          copy.append(head)

          const actions = document.createElement('div')
          actions.className = 'sg-page-guides__actions'
          const playBtn = button('Play', 'play-guide', 'ghost')
          playBtn.dataset.guideId = guide.id
          if (this.state.readOnly) {
            actions.append(playBtn)
          } else {
            const editBtn = button('Edit steps', 'edit-guide', 'secondary')
            editBtn.dataset.guideId = guide.id
            const delBtn = button('Delete', 'delete-guide', 'danger')
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
    container.append(wrap)

    const global = document.createElement('details')
    global.className = 'sg-global-settings'
    if (globalSettingsOpen) global.open = true
    const summary = document.createElement('summary')
    summary.className = 'sg-global-settings__summary'
    summary.innerHTML = `
      <span class="sg-global-settings__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" fill="none" stroke="currentColor" stroke-width="1.7"/>
          <path d="M19.4 13a7.7 7.7 0 0 0 .05-2l1.7-1.33-1.7-2.94-2.05.5a7.8 7.8 0 0 0-1.73-1L15.4 4h-3.4l-.27 2.23a7.8 7.8 0 0 0-1.73 1l-2.05-.5-1.7 2.94L8.55 11a7.7 7.7 0 0 0 0 2l-1.7 1.33 1.7 2.94 2.05-.5a7.8 7.8 0 0 0 1.73 1L12 20h3.4l.27-2.23a7.8 7.8 0 0 0 1.73-1l2.05.5 1.7-2.94L19.4 13Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="sg-global-settings__copy">
        <span class="sg-global-settings__label">Global Settings</span>
        <span class="sg-global-settings__hint">Configure default guide preferences</span>
      </span>
    `
    const body = document.createElement('div')
    body.className = 'sg-global-settings__body'
    body.append(text('p', 'sg-lead', 'App defaults (used when a guide has no own settings). Step delays are per step inside each guide.'))

    const accountBlock = document.createElement('div')
    accountBlock.className = 'sg-settings sg-settings--nested'
    accountBlock.append(text('div', 'sg-page-guides__label', 'Current account'))

    const accountField = document.createElement('label')
    accountField.className = 'sg-step-settings__field sg-settings__row'
    accountField.append(document.createTextNode('Account ID'))
    const accountValue = document.createElement('input')
    accountValue.type = 'text'
    accountValue.className = 'sg-field sg-account-id__field'
    accountValue.readOnly = true
    accountValue.tabIndex = 0
    accountValue.setAttribute('aria-readonly', 'true')
    const currentAccountId = this.state.accountId
    accountValue.value =
      currentAccountId == null || currentAccountId === ''
        ? 'Not set'
        : String(currentAccountId)
    accountValue.title = 'Logged-in account ID from the host app'
    accountField.append(accountValue)
    accountBlock.append(accountField)
    accountBlock.append(text(
      'p',
      'sg-lead',
      'Use this ID in the editor allow-list below. Host apps set it via Guider setAccountId / options.accountId.',
    ))
    body.append(accountBlock)

    const form = document.createElement('div')
    form.className = 'sg-settings sg-settings--nested'
    form.append(text('div', 'sg-page-guides__label', 'Default settings'))

    const reloadNav = document.createElement('label')
    reloadNav.className = 'sg-check sg-settings__row'
    const reloadNavToggle = document.createElement('input')
    reloadNavToggle.type = 'checkbox'
    reloadNavToggle.dataset.setting = 'reloadOnNavigate'
    reloadNavToggle.checked = Boolean(settings.reloadOnNavigate)
    reloadNav.append(reloadNavToggle, document.createTextNode(' Default: reload when opening a guide on another route'))
    form.append(reloadNav)

    const reloadPlay = document.createElement('label')
    reloadPlay.className = 'sg-check sg-settings__row'
    const reloadPlayToggle = document.createElement('input')
    reloadPlayToggle.type = 'checkbox'
    reloadPlayToggle.dataset.setting = 'resetBeforePlay'
    reloadPlayToggle.checked = settings.resetBeforePlay === 'reload'
    reloadPlay.append(reloadPlayToggle, document.createTextNode(' Default: reload page before playing'))
    form.append(reloadPlay)

    const themeField = document.createElement('label')
    themeField.className = 'sg-step-settings__field sg-settings__row'
    themeField.append(document.createTextNode('Theme mode'))
    const themeSelect = document.createElement('select')
    themeSelect.className = 'sg-field'
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
    themeField.append(themeSelect)
    form.append(themeField)

    const access = document.createElement('div')
    access.className = 'sg-settings sg-settings--nested'
    access.append(text('div', 'sg-page-guides__label', 'Access & toolbar'))

    const accountsField = document.createElement('label')
    accountsField.className = 'sg-step-settings__field sg-settings__row'
    accountsField.append(document.createTextNode('Editor account IDs (not listed = Play only)'))
    const accountsInput = document.createElement('textarea')
    accountsInput.className = 'sg-field'
    accountsInput.rows = 3
    accountsInput.placeholder = 'e.g. 1, 12, 45'
    accountsInput.dataset.setting = 'editorAccountIds'
    accountsInput.value = Array.isArray(settings.editorAccountIds)
      ? settings.editorAccountIds.join(', ')
      : String(settings.editorAccountIds || '')
    accountsField.append(accountsInput)
    access.append(accountsField)

    const bypassField = document.createElement('label')
    bypassField.className = 'sg-step-settings__field sg-settings__row'
    bypassField.append(document.createTextNode('Bypass PIN (hover orb + type to open panel)'))
    const bypassInput = document.createElement('input')
    bypassInput.type = 'text'
    bypassInput.className = 'sg-field'
    bypassInput.inputMode = 'numeric'
    bypassInput.autocomplete = 'off'
    bypassInput.placeholder = '123456'
    bypassInput.maxLength = 12
    bypassInput.dataset.setting = 'bypassPin'
    bypassInput.value = String(settings.bypassPin ?? '123456')
    bypassField.append(bypassInput)
    access.append(bypassField)

    const showAccountRow = document.createElement('label')
    showAccountRow.className = 'sg-check sg-settings__row'
    const showAccountToggle = document.createElement('input')
    showAccountToggle.type = 'checkbox'
    showAccountToggle.dataset.setting = 'showAccountId'
    showAccountToggle.checked = settings.showAccountId !== false
    showAccountRow.append(showAccountToggle, document.createTextNode(' Show account ID on launcher'))
    access.append(showAccountRow)

    const hiddenField = document.createElement('label')
    hiddenField.className = 'sg-step-settings__field sg-settings__row'
    hiddenField.append(document.createTextNode('Hide toolbar on URLs (one per line)'))
    const hiddenInput = document.createElement('textarea')
    hiddenInput.className = 'sg-field'
    hiddenInput.rows = 3
    hiddenInput.placeholder = '/login\n/time-log'
    hiddenInput.dataset.setting = 'hiddenUrls'
    hiddenInput.value = Array.isArray(settings.hiddenUrls)
      ? settings.hiddenUrls.join('\n')
      : String(settings.hiddenUrls || '')
    hiddenField.append(hiddenInput)
    access.append(hiddenField)
    access.append(text(
      'p',
      'sg-lead',
      'Accounts not in this list only see Play guides (and search). Add an ID to allow Record and Panel. Empty list = Play only for everyone. Hover the orb and type the bypass PIN to open settings when locked out.',
    ))

    const ui = settings.ui || {}
    const appearance = document.createElement('div')
    appearance.className = 'sg-settings sg-settings--nested'
    appearance.append(text('div', 'sg-page-guides__label', 'Playback appearance'))

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

    const dimField = document.createElement('label')
    dimField.className = 'sg-step-settings__field sg-settings__row'
    dimField.append(document.createTextNode('Overlay dim (%)'))
    const dimInput = document.createElement('input')
    dimInput.type = 'range'
    dimInput.min = '0'
    dimInput.max = '90'
    dimInput.step = '5'
    dimInput.className = 'sg-field sg-field--range'
    dimInput.dataset.setting = 'ui.overlayOpacity'
    dimInput.value = String(Math.round((Number(ui.overlayOpacity) || 0.58) * 100))
    const dimValue = document.createElement('span')
    dimValue.className = 'sg-settings__range-value'
    dimValue.textContent = `${dimInput.value}%`
    dimInput.addEventListener('input', () => {
      dimValue.textContent = `${dimInput.value}%`
    })
    dimField.append(dimInput, dimValue)
    appearance.append(dimField)

    const colors = document.createElement('div')
    colors.className = 'sg-settings__colors'
    const addColor = (key, label, value) => {
      const row = document.createElement('label')
      row.className = 'sg-settings__color-row'
      const name = document.createElement('span')
      name.textContent = label
      const input = document.createElement('input')
      input.type = 'color'
      input.dataset.setting = key
      input.value = value || '#000000'
      row.append(name, input)
      colors.append(row)
    }
    addColor('ui.tipBg', 'Tip background', ui.tipBg || '#0f1b33')
    addColor('ui.tipText', 'Tip text', ui.tipText || '#f8fafc')
    addColor('ui.skipBg', 'Skip background', ui.skipBg || '#2563eb')
    addColor('ui.skipText', 'Skip text', ui.skipText || '#ffffff')
    addColor('ui.spotlightColor', 'Spotlight', ui.spotlightColor || '#3b82f6')
    appearance.append(colors)

    const resetBtn = button('Reset appearance', 'reset-ui-settings', 'ghost')
    resetBtn.classList.add('sg-button--compact')
    appearance.append(resetBtn)

    body.append(form, access, appearance)
    global.append(summary, body)
    container.append(global)
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

      const playBtn = button('Play guide', 'play', 'secondary')
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
      footer.classList.add('sg-panel__footer--manage')

      const actions = document.createElement('div')
      actions.className = 'sg-panel__footer-actions'
      actions.append(
        button('Load guides', 'load', 'secondary'),
        button('Paste JSON', 'paste', 'secondary'),
        button('Download all', 'download-all', 'primary'),
      )

      const more = document.createElement('div')
      more.className = 'sg-panel__footer-more'
      more.append(button('Close', 'close', 'ghost'))

      footer.append(actions, more)
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

    const rect = this.root.getBoundingClientRect()
    this.dragging = {
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
      pointerId: event.pointerId,
    }
    this.position = this.clampPosition(rect.left, rect.top)
    this.applyPosition()
    this.root.classList.add('sg-panel--dragging')
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
    this.position = this.clampPosition(
      event.clientX - this.dragging.offsetX,
      event.clientY - this.dragging.offsetY,
    )
    this.applyPosition()
  }

  onPointerUp() {
    if (!this.dragging) return
    this.dragging = null
    this.root.classList.remove('sg-panel--dragging')
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
