import { getElementSelector, isSensitiveElement, resolveElement } from './selectors.js'
import { captureMatchHints } from './scoring.js'

const INPUT_SELECTOR = 'input:not([type="password"]), textarea, select'

const CHOICE_SELECTOR = [
  '[role="option"]',
  '[data-option]',
  '.dropdown-item',
  '.dropdown-item-text',
  '.select2-results__option',
  '.vs__dropdown-option',
  '.n-base-select-option',
  '.el-select-dropdown__item',
  '.multiselect__option',
  '.p-dropdown-item',
  '.p-multiselect-item',
  '.p-autocomplete-item',
  '.p-cascadeselect-item',
  '.dp__cell',
  '.flatpickr-day',
  '.datepicker-days td',
  'td.day',
  '.p-datepicker-day',
  // PrimeVue Calendar (v3): days are td > span inside .p-datepicker-calendar
  '.p-datepicker-calendar td',
  '.p-datepicker-calendar td > span',
  '.p-monthpicker-month',
  '.p-yearpicker-year',
  '.ant-picker-cell',
  '.mx-calendar-content .cell',
  '.react-datepicker__day',
  '.el-date-table td.available',
  '[role="gridcell"]',
  '.ui-menu-item',
  '.ui-menu-item-wrapper',
  '.ui-datepicker-calendar td',
].join(', ')

const DATE_HOST_SELECTOR = [
  '.p-calendar',
  '.p-datepicker',
  '.input-group',
  '.mx-datepicker',
  '.flatpickr-wrapper',
  '.dp__main',
  '.ant-picker',
  '.v-date-picker',
  '[class*="datepicker"]',
  '[class*="date-picker"]',
].join(', ')

const CALENDAR_CHROME_SELECTOR = [
  '.p-datepicker-prev',
  '.p-datepicker-next',
  '.p-datepicker-prev-icon',
  '.p-datepicker-next-icon',
  '.p-datepicker-header',
  '.p-datepicker-title',
  '.p-datepicker-month',
  '.p-datepicker-year',
  '.p-datepicker-buttonbar',
].join(', ')

const LIST_SELECTOR = [
  '[role="listbox"]',
  '[role="menu"]',
  '.dropdown-menu',
  '.select2-dropdown',
  '.select2-results',
  '.vs__dropdown-menu',
  '.n-base-select-menu',
  '.el-select-dropdown',
  '.el-picker-panel',
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
  '.flatpickr-calendar',
  '.datepicker',
  '.datepicker-dropdown',
  '.bootstrap-datetimepicker-widget',
  '.daterangepicker',
  '.mx-datepicker-popup',
  '.react-datepicker',
  '.ant-picker-dropdown',
  '.p-datepicker-panel',
  '.ui-autocomplete',
  '.ui-datepicker',
  '.autocomplete-results',
  '.tt-menu',
].join(', ')

const PRIME_HOST_SELECTOR = '.p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect'
const PRIME_PANEL_SELECTOR = [
  '.p-dropdown-panel',
  '.p-multiselect-panel',
  '.p-autocomplete-panel',
  '.p-cascadeselect-panel',
].join(', ')

function escapeAttr(value) {
  if (globalThis.CSS?.escape) return globalThis.CSS.escape(value)
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}

function asPrimeHost(element) {
  if (!(element instanceof Element)) return null
  if (element.matches(PRIME_HOST_SELECTOR)) return element
  return element.closest(PRIME_HOST_SELECTOR)
}

function associatedLabelText(element) {
  const label = element.labels?.[0]
  if (!label) return ''
  const clone = label.cloneNode(true)
  clone.querySelectorAll('input, select, textarea, button').forEach((control) => control.remove())
  return clone.textContent.trim()
}

function floatLabelText(element) {
  const host = asPrimeHost(element) || element
  const wrap = host.closest?.('.p-float-label, .form-group, .mb-1, .mb-3, .col, [class*="form-group"]')
    || host.parentElement
  if (!(wrap instanceof Element)) return ''
  const label = wrap.querySelector(':scope > label, label')
  if (!(label instanceof Element)) return ''
  return label.textContent.trim().replace(/\s+/g, ' ')
}

function visibleControlText(element) {
  if (!(element instanceof Element)) return ''
  const clone = element.cloneNode(true)
  clone.querySelectorAll([
    '.badge',
    '.p-badge',
    '.p-tag',
    '.sr-only',
    '.visually-hidden',
    '[aria-hidden="true"]',
    'svg',
    'img',
    'input',
    'select',
    'textarea',
  ].join(', ')).forEach((node) => node.remove())
  return clone.textContent.trim().replace(/\s+/g, ' ')
}

function cleanLabelText(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .replace(/\s+\d+$/, '') // Drop trailing badge counts ("Filter 7" → "Filter")
    .trim()
    .slice(0, 80)
}

/** Reject chart dumps, selectors, tag names, and other non-human labels. */
function isNoiseLabel(value) {
  const t = String(value || '').trim()
  if (!t) return true
  if (t.length < 2) return true
  if (/^(div|span|button|a|input|select|svg|path|g|rect|li|ul|td|th|tr|table|canvas)$/i.test(t)) return true
  if (/^(click|submit|button|link|here|null|undefined)$/i.test(t)) return true
  // Pure numeric / year dumps: "202020212022..." or "2020 2021 2022..."
  const digits = t.replace(/\D/g, '')
  if (digits.length >= 8 && digits.length >= t.replace(/\s/g, '').length * 0.7) return true
  // Concatenated tokens with no spaces
  if (!/\s/.test(t) && t.length > 28) return true
  if (/^[.#\[]/.test(t) || /[{};>]/.test(t)) return true
  if ((t.match(/\b20\d{2}\b/g) || []).length >= 3) return true
  return false
}

function usableLabel(value) {
  const cleaned = cleanLabelText(value)
  return isNoiseLabel(cleaned) ? '' : cleaned
}

function nearestSectionHeading(element) {
  if (!(element instanceof Element)) return ''
  const headerSelector = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'legend',
    'figcaption',
    '.card-title',
    '.card-header',
    '.panel-title',
    '.modal-title',
    '[class*="card-title"]',
    '[class*="chart-title"]',
    '[class*="section-title"]',
    '[data-guider-label]',
  ].join(', ')

  let current = element
  for (let depth = 0; depth < 10 && current; depth += 1) {
    const labelledBy = current.getAttribute?.('aria-labelledby')
    if (labelledBy) {
      const ref = document.getElementById(labelledBy.split(/\s+/)[0])
      const text = usableLabel(ref?.textContent)
      if (text) return text
    }
    const own = current.getAttribute?.('data-guider-label')
    if (own) {
      const text = usableLabel(own)
      if (text) return text
    }

    let sibling = current.previousElementSibling
    while (sibling) {
      if (sibling.matches?.(headerSelector)) {
        const text = usableLabel(sibling.textContent)
        if (text) return text
      }
      const nested = sibling.querySelector?.(headerSelector)
      if (nested) {
        const text = usableLabel(nested.textContent)
        if (text) return text
      }
      sibling = sibling.previousElementSibling
    }

    const parentHeading = current.parentElement?.querySelector?.(
      ':scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > .card-title, :scope > .card-header',
    )
    if (parentHeading && !parentHeading.contains(element)) {
      const text = usableLabel(parentHeading.textContent)
      if (text) return text
    }

    current = current.parentElement
  }
  return ''
}

function looksLikeChartTarget(element) {
  if (!(element instanceof Element)) return false
  return Boolean(element.closest([
    'canvas',
    'svg',
    '.chart',
    '.chartjs',
    '[class*="chart"]',
    '[class*="Chart"]',
    '.apexcharts-canvas',
    '.highcharts-container',
    '.recharts-wrapper',
    '[class*="legend"]',
  ].join(', ')))
}

function choiceOptionText(element) {
  if (!(element instanceof Element) || !isChoiceElement(element)) return ''
  return usableLabel(visibleControlText(element) || element.textContent)
}

function labelFor(element) {
  const prime = asPrimeHost(element)
  const floatText = usableLabel(floatLabelText(element))
  if (floatText) return floatText

  const isFormControl = element.matches('input, textarea, select')
  const buttonText = !isFormControl && !prime ? usableLabel(visibleControlText(element)) : ''
  if (buttonText) return buttonText

  const candidates = [
    !prime ? element.getAttribute('aria-label') : '',
    element.getAttribute('title'),
    associatedLabelText(element),
    isFormControl ? element.getAttribute('placeholder') : '',
    element.getAttribute('placeholder'),
    element.getAttribute('name'),
    element.getAttribute('data-guider-label'),
    nearestSectionHeading(element),
    prime?.matches?.('.p-autocomplete') ? 'Search' : '',
    prime ? 'Dropdown' : '',
  ]

  for (const candidate of candidates) {
    const text = usableLabel(candidate)
    if (text) return text
  }

  if (looksLikeChartTarget(element)) {
    return nearestSectionHeading(element) || 'chart'
  }

  return ''
}

function sentenceCaseLabel(label) {
  const text = cleanLabelText(label)
  if (!text) return ''
  if (/^[A-Z0-9\s\-_/]+$/.test(text) && text.length <= 24) return text
  return text.charAt(0).toUpperCase() + text.slice(1)
}

/** User-facing step title shown in the highlight tip. */
function friendlyStepTitle({
  label,
  choiceField,
  isNativeField,
  action,
  element,
  optionText = '',
}) {
  const name = sentenceCaseLabel(label)
  const option = sentenceCaseLabel(optionText)

  if (isCalendarChoice(element) || (element && isDateLikeInput(element))) {
    return name && !/^date|calendar$/i.test(name) ? `Pick a date for ${name}` : 'Pick a date'
  }

  if (choiceField) {
    if (option && name) return `Select ${name}: ${option}`
    if (option) return `Choose “${option}”`
    return name ? `Select ${name}` : 'Choose a value'
  }

  if (isNativeField) {
    const type = (element?.getAttribute?.('type') || '').toLowerCase()
    if (type === 'checkbox' || type === 'radio') {
      return name ? `Toggle ${name}` : 'Toggle this option'
    }
    if (element?.matches?.('textarea')) {
      return name ? `Fill in ${name}` : 'Enter details'
    }
    return name ? `Enter ${name}` : 'Enter a value'
  }

  if (action === 'click' || action === 'input') {
    if (looksLikeChartTarget(element)) {
      return name && name.toLowerCase() !== 'chart'
        ? `Interact with ${name}`
        : 'Interact with the chart'
    }
    if (element?.matches?.('a, [role="link"]') || element?.closest?.('a[href]')) {
      return name ? `Go to ${name}` : 'Follow this link'
    }
    if (element?.matches?.('button, [role="button"], input[type="submit"], input[type="button"]')) {
      if (/^(save|submit|continue|next|confirm|apply|search|login|sign in)$/i.test(name)) {
        return name
      }
      return name ? `Click ${name}` : 'Click this button'
    }
    return name ? `Click ${name}` : 'Click here'
  }

  return name || 'Continue'
}

function friendlyStepDescription({
  title,
  label,
  choiceField,
  isNativeField,
  element,
  optionText = '',
}) {
  const name = sentenceCaseLabel(label)
  const option = sentenceCaseLabel(optionText)
  const heading = nearestSectionHeading(element)

  if (isCalendarChoice(element) || (element && isDateLikeInput(element))) {
    return 'Choose a day on the calendar to continue.'
  }
  if (choiceField && option) {
    return name
      ? `Pick “${option}” from ${name}.`
      : `Pick “${option}” from the list.`
  }
  if (choiceField) {
    return name
      ? `Open ${name} and choose a value.`
      : 'Open the dropdown and choose a value.'
  }
  if (isNativeField) {
    const type = (element?.getAttribute?.('type') || '').toLowerCase()
    if (type === 'checkbox' || type === 'radio') {
      return name ? `Check or uncheck ${name}.` : 'Toggle this option.'
    }
    return name ? `Type the value for ${name}.` : 'Type a value in this field.'
  }
  if (looksLikeChartTarget(element)) {
    const chartName = name && name.toLowerCase() !== 'chart' ? name : (heading || 'the chart')
    return `Use ${chartName} to continue to the next step.`
  }
  if (element?.matches?.('a, [role="link"]') || element?.closest?.('a[href]')) {
    return name ? `Open ${name} to move forward.` : 'Follow this link to continue.'
  }

  // Avoid repeating the title when it already says enough.
  const titleCore = String(title || '').replace(/^(click|select|enter|choose|go to|interact with|toggle|pick|fill in)\s+/i, '').trim()
  if (name && titleCore && name.toLowerCase() === titleCore.toLowerCase()) return ''
  if (heading && name && heading.toLowerCase() !== name.toLowerCase()) {
    return `In ${heading}, continue with ${name}.`
  }
  return ''
}

export function isChoiceElement(element) {
  return Boolean(element?.closest?.(CHOICE_SELECTOR))
}

export function isCalendarChoice(element) {
  if (!(element instanceof Element)) return false
  return Boolean(element.closest([
    '.p-datepicker-calendar td',
    '.p-datepicker-calendar td > span',
    '.p-datepicker-day',
    '.p-monthpicker-month',
    '.p-yearpicker-year',
    '.flatpickr-day',
    '.dp__cell',
    '.datepicker-days td',
    'td.day',
    '[role="gridcell"]',
    '.ant-picker-cell',
    '.mx-calendar-content .cell',
    '.react-datepicker__day',
    '.el-date-table td.available',
    '.ui-datepicker-calendar td',
  ].join(', ')))
}

function isCalendarChrome(element) {
  if (!(element instanceof Element)) return false
  if (isCalendarChoice(element)) return false
  return Boolean(element.closest(CALENDAR_CHROME_SELECTOR))
}

export function isDateLikeInput(element) {
  if (!(element instanceof Element)) return false
  if (element instanceof HTMLInputElement) {
    if (['date', 'datetime-local', 'time', 'month', 'week'].includes(element.type)) return true
    if (element.getAttribute('inputmode') === 'none') return true
    if (/date|time/i.test(element.name || '')) return true
    if (/date|time/i.test(element.id || '')) return true
    if (element.className.toLowerCase().includes('date')) return true
  }
  // Host control (.p-calendar), not the portaled overlay panel alone.
  if (element.closest('.p-calendar, .p-datepicker-trigger')) return true
  const wrap = element.closest(DATE_HOST_SELECTOR)
  if (!wrap) return false
  // Overlay panel (.p-datepicker) without a day cell is chrome/open — still date-related.
  if (/date|time|calendar|picker/i.test(wrap.className)) return true
  return Boolean(wrap.querySelector('button, [class*="calendar"], table, .flatpickr-calendar, .dp__menu'))
}

function findDateHostForPanel(panel) {
  if (!(panel instanceof Element)) return null

  const expanded = document.querySelectorAll(
    '.p-calendar input[aria-expanded="true"], .p-calendar [aria-expanded="true"], input[aria-expanded="true"]',
  )
  for (const node of expanded) {
    if (!(node instanceof Element) || isSensitiveElement(node)) continue
    const host = node.closest('.p-calendar') || node
    const input = host.matches?.('input') ? host : host.querySelector?.('input:not([type="hidden"])')
    if (input && !isSensitiveElement(input)) return input
  }

  const focused = document.querySelector('.p-calendar.p-inputwrapper-focus, .p-calendar.p-focus, .p-calendar.p-overlay-open')
  if (focused) {
    const input = focused.querySelector('input:not([type="hidden"])')
    if (input && !isSensitiveElement(input)) return input
  }

  const active = document.activeElement
  if (active instanceof HTMLInputElement && isDateLikeInput(active) && !isSensitiveElement(active)) {
    return active
  }

  // Nearest date input above the open panel (inside filter overlay / dialog).
  const root = document.querySelector('.p-overlaypanel, .modal.show, [role="dialog"]') || document.body
  const candidates = [...root.querySelectorAll('input:not([type="hidden"]):not([type="password"])')]
    .filter((node) => isDateLikeInput(node) && !isSensitiveElement(node))
  if (!candidates.length) return null
  const panelTop = panel.getBoundingClientRect?.().top ?? 0
  const nearby = candidates
    .map((node) => ({ node, top: node.getBoundingClientRect().top }))
    .filter((item) => item.top <= panelTop + 8)
    .sort((a, b) => b.top - a.top)[0]
  return nearby?.node || candidates[0] || null
}

export function isChoiceField(element) {
  if (!(element instanceof Element)) return false
  if (element instanceof HTMLSelectElement) return true
  if (isDateLikeInput(element)) return true
  if (asPrimeHost(element)) return true
  if (element.closest(PRIME_PANEL_SELECTOR)) return true
  if (element.matches('[role="combobox"], [aria-autocomplete], [aria-haspopup="listbox"]')) return true
  if (element.getAttribute('aria-expanded') != null) return true
  if (element.closest('[role="combobox"]')) return true
  return false
}

function fieldFromOwner(owner) {
  if (!owner) return null
  const prime = asPrimeHost(owner)
  if (prime) return prime
  if (owner.matches(INPUT_SELECTOR) || owner.matches('[role="combobox"]')) return owner
  const nested = owner.querySelector(`${INPUT_SELECTOR}, [role="combobox"]`)
  return asPrimeHost(nested) || nested
}

function findPrimeHostForPanel(panel) {
  if (!(panel instanceof Element)) return null
  const list = panel.querySelector('[role="listbox"], .p-dropdown-items, .p-multiselect-items, .p-autocomplete-items')
  const listId = list?.id || panel.id
  if (listId) {
    const id = escapeAttr(listId)
    const owner = resolveElement(`[aria-controls="${id}"], [aria-owns="${id}"]`)
    const host = asPrimeHost(owner) || fieldFromOwner(owner)
    if (host) return asPrimeHost(host) || host
  }
  const open = document.querySelector([
    '.p-dropdown.p-overlay-open',
    '.p-dropdown.p-inputwrapper-focus',
    '.p-multiselect.p-overlay-open',
    '.p-multiselect.p-inputwrapper-focus',
    '.p-autocomplete.p-focus',
    `${PRIME_HOST_SELECTOR} [aria-expanded="true"]`,
    `${PRIME_HOST_SELECTOR}[aria-expanded="true"]`,
  ].join(', '))
  return asPrimeHost(open)
}

function formItemScope(element) {
  return element?.closest?.([
    '.form-group',
    '.mb-3',
    '.mb-0',
    '.col',
    '.p-float-label',
    '.n-form-item',
    '.el-form-item',
    '.v-input',
    '.mx-datepicker',
    '[class*="form-item"]',
    '[class*="FormItem"]',
    'label',
  ].join(', '))
}

export function resolveInteractiveField(element) {
  if (!(element instanceof Element)) return null

  // Always bind PrimeVue controls to the stable root — never the inner label span / pv_id_*.
  const primeHost = asPrimeHost(element)
  if (primeHost) return primeHost

  // Calendar day/month pick → owning date input (#start_date / #end_date), not the overlay.
  if (isCalendarChoice(element)) {
    const panel = element.closest('.p-datepicker, .flatpickr-calendar, .dp__menu, .ant-picker-dropdown, .p-datepicker-panel')
    const dateHost = findDateHostForPanel(panel || element)
    if (dateHost) return dateHost
  }

  const panel = element.closest(PRIME_PANEL_SELECTOR)
  if (panel) {
    const host = findPrimeHostForPanel(panel)
    if (host) return host
  }

  // Date field host / trigger / input
  const calendarHost = element.closest('.p-calendar')
  if (calendarHost) {
    const input = calendarHost.querySelector('input:not([type="hidden"])')
    if (input) return input
  }

  if (element.matches(INPUT_SELECTOR)) return element
  const directInput = element.closest(INPUT_SELECTOR)
  if (directInput) return directInput

  const combobox = element.matches('[role="combobox"]')
    ? element
    : element.closest('[role="combobox"]')
  if (combobox) return asPrimeHost(combobox) || combobox

  const choice = element.closest(CHOICE_SELECTOR)
  if (choice) {
    if (isCalendarChoice(choice)) {
      const dateHost = findDateHostForPanel(
        choice.closest('.p-datepicker, .flatpickr-calendar, .dp__menu, .p-datepicker-panel') || choice,
      )
      if (dateHost) return dateHost
    }

    const fromPanel = findPrimeHostForPanel(choice.closest(PRIME_PANEL_SELECTOR) || choice.closest(LIST_SELECTOR))
    if (fromPanel) return fromPanel

    const active = document.activeElement
    if (
      active instanceof Element
      && (active.matches(INPUT_SELECTOR) || active.matches('[role="combobox"]') || asPrimeHost(active))
      && !isSensitiveElement(active)
    ) {
      return asPrimeHost(active) || active
    }

    const list = choice.closest(LIST_SELECTOR)
    if (list?.id) {
      const id = escapeAttr(list.id)
      const owner = resolveElement(`[aria-controls="${id}"], [aria-owns="${id}"]`)
      const field = fieldFromOwner(owner)
      if (field) return field
    }

    const expanded = document.querySelector(
      `${PRIME_HOST_SELECTOR} [aria-expanded="true"], ${PRIME_HOST_SELECTOR}[aria-expanded="true"], [aria-expanded="true"]`,
    )
    const expandedField = fieldFromOwner(expanded)
    if (expandedField && !isSensitiveElement(expandedField)) return expandedField

    // Prefer the field in the same form row/item as the open menu — never the first Search box.
    const item = formItemScope(list) || formItemScope(choice) || formItemScope(expanded)
    if (item) {
      const localPrime = item.querySelector(PRIME_HOST_SELECTOR)
      if (localPrime && !isSensitiveElement(localPrime)) return localPrime
      const localField = item.querySelector(`select, ${INPUT_SELECTOR}, [role="combobox"]`)
      if (localField && !isSensitiveElement(localField)) return asPrimeHost(localField) || localField
    }

    // Nearest preceding select/combobox in the dialog (custom menus render outside the row).
    const root = list?.closest('.modal.show, .modal, [role="dialog"], .p-overlaypanel, form') || document.body
    const candidates = [...root.querySelectorAll(`${PRIME_HOST_SELECTOR}, select, [role="combobox"]`)]
      .filter((node) => !isSensitiveElement(node))
      .map((node) => asPrimeHost(node) || node)
    if (candidates.length) {
      const listTop = list?.getBoundingClientRect?.().top ?? choice.getBoundingClientRect().top
      const nearby = candidates
        .map((node) => ({ node, top: node.getBoundingClientRect().top }))
        .filter((item) => item.top <= listTop + 8)
        .sort((a, b) => b.top - a.top)[0]
      if (nearby) return nearby.node
    }
  }

  const dateWrap = element.closest('.p-calendar, .input-group, .date, .mx-datepicker, .vdatetime, .flatpickr-wrapper, .dp__main')
  if (dateWrap) {
    const input = dateWrap.querySelector(INPUT_SELECTOR)
    if (input) return input
  }

  return element.closest(`button, a, [role="button"], input, select, textarea, [role="combobox"], ${PRIME_HOST_SELECTOR}, [data-guider]`) || element
}

export function findVisibleChoiceFields(scope = document) {
  const nodes = [
    ...scope.querySelectorAll(`${PRIME_HOST_SELECTOR}, select, [role="combobox"], input:not([type="hidden"]):not([type="password"]), textarea`),
  ]
  const seen = new Set()
  return nodes
    .map((node) => asPrimeHost(node) || node)
    .filter((node) => {
      if (seen.has(node) || isSensitiveElement(node)) return false
      seen.add(node)
      const style = getComputedStyle(node)
      if (style.display === 'none' || style.visibility === 'hidden') return false
      const rect = node.getBoundingClientRect()
      return rect.width >= 2 && rect.height >= 2
    })
}

export function findOpenChoiceField() {
  const openPrime = findPrimeHostForPanel(document.querySelector(PRIME_PANEL_SELECTOR))
    || asPrimeHost(document.querySelector([
      '.p-dropdown.p-overlay-open',
      '.p-multiselect.p-overlay-open',
      `${PRIME_HOST_SELECTOR} [aria-expanded="true"]`,
      `${PRIME_HOST_SELECTOR}[aria-expanded="true"]`,
    ].join(', ')))
  if (openPrime && !isSensitiveElement(openPrime)) return openPrime

  const expanded = document.querySelector('[aria-expanded="true"]')
  const expandedField = fieldFromOwner(expanded)
  if (expandedField && !isSensitiveElement(expandedField)) return expandedField

  // Only reuse the focused control inside an open dialog — never the page Search box.
  const dialog = document.querySelector('.modal.show, [role="dialog"][aria-modal="true"], [role="dialog"].show, .p-overlaypanel')
  if (!dialog) return null
  const active = document.activeElement
  if (
    active instanceof Element
    && dialog.contains(active)
    && (active.matches(INPUT_SELECTOR) || active.matches('[role="combobox"]') || asPrimeHost(active))
    && !isSensitiveElement(active)
  ) {
    return asPrimeHost(active) || active
  }

  return null
}

export class Recorder {
  constructor({ onStep }) {
    this.onStep = onStep
    this.active = false
    this.lastKey = ''
    this.lastAt = 0
    this.onClick = this.onClick.bind(this)
    this.onFocus = this.onFocus.bind(this)
  }

  start() {
    // Always restart clean so "Add steps" can capture many interactions in one session.
    this.stop()
    this.active = true
    this.lastKey = ''
    this.lastAt = 0
    document.addEventListener('click', this.onClick, true)
    document.addEventListener('focusin', this.onFocus, true)
  }

  stop() {
    this.active = false
    document.removeEventListener('click', this.onClick, true)
    document.removeEventListener('focusin', this.onFocus, true)
  }

  shouldIgnore(element) {
    return !this.active
      || !(element instanceof Element)
      || isSensitiveElement(element)
      || Boolean(element.closest('.sg-panel, .sg-overlay, .sg-launcher, .sg-recording-indicator'))
  }

  capture(element, action) {
    if (this.shouldIgnore(element)) return

    const choiceClick = action === 'click' && isChoiceElement(element)
    const target = resolveInteractiveField(element)
    if (!target || isSensitiveElement(target)) return

    const selector = getElementSelector(target)
    if (!selector) return

    const isNativeField = target.matches(INPUT_SELECTOR)
    const choiceField = isChoiceField(target) || choiceClick
    // PrimeVue / custom selects must be "input" steps (wait for pick), not plain clicks.
    const normalizedAction = isNativeField || choiceClick || choiceField ? 'input' : action
    const now = Date.now()
    const key = `${normalizedAction}:${selector}`
    // Same choice field open+pick → one step. Reset on recorder.start() for each Add steps session.
    const isConsecutiveInputDuplicate = normalizedAction === 'input' && key === this.lastKey
    const isRapidDuplicate = key === this.lastKey && now - this.lastAt < 300
    if (isConsecutiveInputDuplicate || isRapidDuplicate) return
    this.lastKey = key
    this.lastAt = now

    const label = labelFor(target)
    const optionText = choiceClick ? choiceOptionText(element) : ''
    const title = friendlyStepTitle({
      label,
      choiceField,
      isNativeField,
      action: normalizedAction,
      element: target,
      optionText,
    })
    const description = friendlyStepDescription({
      title,
      label,
      choiceField,
      isNativeField,
      element: target,
      optionText,
    })
    const match = captureMatchHints(target)
    this.onStep({
      id: globalThis.crypto?.randomUUID?.() || `step-${now}-${Math.random().toString(36).slice(2, 7)}`,
      selector,
      ...(match ? { match } : {}),
      action: normalizedAction,
      title,
      description,
      waitFor: isNativeField || choiceClick || choiceField
        ? {
          type: 'input',
          required: true,
          mode: choiceField || choiceClick ? 'interaction' : 'value',
        }
        : null,
    })
  }

  onClick(event) {
    const target = event.target instanceof Element ? event.target : null
    if (!target) return
    // Native <select> records on change/option, not on the open click.
    if (target instanceof HTMLSelectElement && !isChoiceElement(target)) return
    // Ignore calendar month navigation / title chrome (not a value pick).
    if (isCalendarChrome(target)) return
    // Date field open + day pick both resolve to the same input and are deduped.
    // (Previously day clicks were skipped because the overlay matched isDateLikeInput.)
    this.capture(event.target, 'click')
  }

  onFocus(event) {
    const target = event.target
    if (!target.matches?.(INPUT_SELECTOR)) return
    // Native selects record on option pick. Date fields record on click/day pick.
    if (target instanceof HTMLSelectElement) return
    if (isDateLikeInput(target)) {
      this.capture(target, 'input')
      return
    }
    this.capture(target, 'input')
  }

  destroy() {
    this.stop()
  }
}
