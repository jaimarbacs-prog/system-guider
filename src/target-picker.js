import {
  CLICKABLE_TILE_SELECTOR,
  getElementSelector,
  getFieldWrapName,
  getNamedFieldWrap,
  isClickableTile,
  isSensitiveElement,
  isUnstableElementId,
  resolveClickableTile,
} from './selectors.js'
import { isFragileSelector } from './scoring.js'

const SKIP_SELECTOR = [
  '.sg-panel',
  '.sg-overlay',
  '.sg-launcher',
  '.sg-recording-indicator',
  '.sg-target-picker',
  '.modal-backdrop',
].join(', ')

/** Page chrome — never offer these as record targets. */
const PAGE_SHELL_SELECTOR = [
  'html',
  'body',
  '#app',
  '#root',
  '#__next',
  '#content',
  'main',
  'header',
  'footer',
  'aside',
  'nav.navbar',
  '.navbar',
  '.sidebar',
  '.main-sidebar',
  '.content-wrapper',
  '.container-fluid',
  '.wrapper',
  '[data-inertia]',
].join(', ')

const INTERACTIVE_SELECTOR = [
  'a[href]',
  'button',
  'input',
  'textarea',
  'select',
  '[role="button"]',
  '[role="combobox"]',
  '[role="link"]',
  '.p-dropdown',
  '.p-multiselect',
  '.p-autocomplete',
  '.p-cascadeselect',
  '.p-button',
  '.nav-link',
  '[data-guider]',
  CLICKABLE_TILE_SELECTOR,
].join(', ')

function shortText(element) {
  if (!(element instanceof Element)) return ''
  const label = element.getAttribute?.('aria-label')
    || element.getAttribute?.('placeholder')
    || element.getAttribute?.('title')
    || ''
  if (label) return String(label).trim().slice(0, 48)

  if (element.matches?.('button, a, [role="button"], .p-button, label') || isClickableTile(element)) {
    if (isClickableTile(element)) {
      const heading = element.querySelector?.(
        'h1, h2, h3, h4, h5, .day-name, .card-title, [class*="card-title"]',
      )
      const headingText = String(heading?.textContent || '').replace(/\s+/g, ' ').trim()
      if (headingText) return headingText.slice(0, 48)
    }
    const clone = element.cloneNode(true)
    clone.querySelectorAll?.('script, style, svg, img, .badge, .p-badge, [aria-hidden="true"]').forEach((n) => n.remove())
    return String(clone.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 48)
  }

  const ownName = element.getAttribute('name') || ''
  if (ownName) return ownName
  return ''
}

function candidateMeta(element) {
  const tag = element.tagName.toLowerCase()
  const name = element.getAttribute('name') || ''
  const id = element.id && !isUnstableElementId(element.id) ? element.id : ''
  const guider = element.getAttribute('data-guider') || ''
  const href = element.getAttribute('href') || ''
  const classes = [...element.classList]
    .filter((c) => !/^(p-focus|p-inputtext|p-placeholder|active|open|show|p-component)$/i.test(c))
    .slice(0, 2)
  const parts = [tag]
  if (guider) parts.push(`[data-guider="${guider}"]`)
  else if (name) parts.push(`[name="${name}"]`)
  else if (id) parts.push(`#${id}`)
  else if (classes.length) parts.push(`.${classes.join('.')}`)
  if (href && href !== '#') parts.push(href.slice(0, 32))
  const text = shortText(element)
  return {
    title: parts.join(''),
    detail: text && text.toLowerCase() !== name.toLowerCase() ? text : (name || id || guider || ''),
  }
}

function isPageShell(element) {
  if (!(element instanceof Element)) return true
  if (element === document.body || element === document.documentElement) return true
  if (element.matches?.(PAGE_SHELL_SELECTOR)) return true
  const id = (element.id || '').toLowerCase()
  if (['app', 'root', 'content', '__next', 'main', 'wrapper'].includes(id)) return true
  return false
}

function isOversizedAncestor(element, anchor) {
  if (!(element instanceof Element)) return true
  const rect = element.getBoundingClientRect?.()
  if (!rect) return true
  const vw = Math.max(window.innerWidth || 0, 1)
  const vh = Math.max(window.innerHeight || 0, 1)
  if (rect.width >= vw * 0.85 && rect.height >= vh * 0.55) return true
  if (rect.width * rect.height >= vw * vh * 0.45) return true

  if (anchor instanceof Element) {
    const a = anchor.getBoundingClientRect?.()
    if (a && a.width > 0 && a.height > 0) {
      const areaRatio = (rect.width * rect.height) / (a.width * a.height)
      if (areaRatio > 40) return true
    }
  }
  return false
}

function isUsefulAncestor(element, anchor) {
  if (!(element instanceof Element) || isPageShell(element)) return false
  if (isOversizedAncestor(element, anchor)) return false
  if (element.getAttribute('data-guider')) return true
  if (element.getAttribute('name')) return true
  if (isClickableTile(element)) return true
  if (element.matches?.('.field, .form-group, .p-field, .p-float-label, .mb-0, .input-group, .btn-group')) {
    return true
  }
  if (element.id && !isUnstableElementId(element.id)) {
    const rect = element.getBoundingClientRect()
    if (rect.width <= 480 && rect.height <= 320) return true
  }
  return false
}

function scoreCandidate(element, selector, { interactive = null, raw = null } = {}) {
  let score = 0
  if (!(element instanceof Element) || isPageShell(element)) return -999

  if (interactive && element === interactive) score += 140
  if (raw && element === raw && element.matches?.(INTERACTIVE_SELECTOR)) score += 120
  if (element.matches?.(INTERACTIVE_SELECTOR)) score += 50

  if (element.getAttribute('data-guider')) score += 100
  if (element.id && !isUnstableElementId(element.id)) score += 35
  if (element.getAttribute('name')) score += 95
  const wrapName = getFieldWrapName(element)
  if (wrapName) {
    score += 55
    if (element.getAttribute('name') === wrapName) score += 25
  }
  if (element.matches?.('a[href]:not([href="#"])')) score += 40
  if (element.matches?.('.p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect, .p-button')) {
    score += 45
  }
  if (element.matches?.('input, textarea, select, button')) score += 40
  if (element.matches?.('a.nav-link, .nav-link')) score += 35
  // Prefer card/column roots over inner icon / label nodes.
  if (element.matches?.('.branch-card, .day-column, [data-guider-tile]')) score += 70
  else if (isClickableTile(element)) score += 40

  if (isFragileSelector(selector)) score -= 25
  if (isOversizedAncestor(element, interactive || raw)) score -= 120

  const text = shortText(element)
  if (text && text.length <= 40) score += 8
  return score
}

/**
 * Build ancestor / control choices for the record-time target picker.
 */
export function collectTargetCandidates(rawElement, { interactive = null } = {}) {
  if (!(rawElement instanceof Element)) return []

  const resolved = interactive instanceof Element ? interactive : rawElement
  const namedWrap = getNamedFieldWrap(rawElement) || getNamedFieldWrap(resolved)
  const tile = resolveClickableTile(rawElement) || resolveClickableTile(resolved)
  const seen = new Set()
  const list = []

  const push = (element) => {
    if (!(element instanceof Element) || seen.has(element)) return
    if (element === document.body || element === document.documentElement) return
    if (isPageShell(element)) return
    if (isOversizedAncestor(element, resolved) && element !== resolved && element !== rawElement) return
    if (element.closest?.(SKIP_SELECTOR)) return
    if (isSensitiveElement(element)) return
    const selector = getElementSelector(element)
    if (!selector) return
    seen.add(element)
    const meta = candidateMeta(element)
    list.push({
      element,
      selector,
      title: meta.title,
      detail: meta.detail,
      score: scoreCandidate(element, selector, { interactive: resolved, raw: rawElement }),
      fragile: isFragileSelector(selector),
    })
  }

  // Prefer the tile root first so auto-fill lands on the card, not an inner node.
  if (tile) push(tile)
  push(resolved)
  if (rawElement !== resolved && rawElement.matches?.(INTERACTIVE_SELECTOR)) {
    push(rawElement)
  }
  if (namedWrap && !isPageShell(namedWrap) && !isOversizedAncestor(namedWrap, resolved)) {
    push(namedWrap)
  }

  let current = resolved.parentElement || rawElement.parentElement
  for (let depth = 0; depth < 6 && current; depth += 1) {
    if (isPageShell(current) || isOversizedAncestor(current, resolved)) break
    if (isUsefulAncestor(current, resolved)) push(current)
    current = current.parentElement
  }

  list.sort((a, b) => b.score - a.score)
  let top = list.slice(0, 6)
  if (!top.length && resolved) {
    push(resolved)
    top = list.slice(0, 1)
  }
  if (!top.length) return []

  const bestScore = top[0].score
  return top.map((item, index) => ({
    ...item,
    suggested: index === 0 && bestScore >= 40,
  }))
}

/**
 * Page highlight + candidate resolution. UI is hosted in the System Guider panel
 * via requestUi (no floating overlay on the page).
 */
export class TargetPicker {
  constructor({ requestUi = null, dismissUi = null } = {}) {
    this.requestUi = typeof requestUi === 'function' ? requestUi : null
    this.dismissUi = typeof dismissUi === 'function' ? dismissUi : null
    this.highlightEl = null
    this.resolve = null
    this.pending = false
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  get open() {
    return this.pending
  }

  clearHighlight() {
    this.highlightEl?.classList.remove('sg-target-picker-highlight')
    this.highlightEl = null
  }

  setHighlight(element) {
    this.clearHighlight()
    if (!(element instanceof Element)) return
    element.classList.add('sg-target-picker-highlight')
    this.highlightEl = element
    try {
      element.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' })
    } catch {
      // ignore
    }
  }

  close(result = null, { dismissHost = true } = {}) {
    this.clearHighlight()
    document.removeEventListener('keydown', this.onKeyDown, true)
    this.pending = false
    const resolve = this.resolve
    this.resolve = null
    if (dismissHost) {
      try { this.dismissUi?.() } catch { /* ignore */ }
    }
    resolve?.(result)
  }

  onKeyDown(event) {
    if (event.key === 'Escape') {
      event.preventDefault()
      event.stopPropagation()
      this.close(null)
    }
  }

  /**
   * @returns {Promise<Element|null>}
   */
  pick(rawElement, _clientX = 0, _clientY = 0, { interactive = null } = {}) {
    this.close(null)
    const candidates = collectTargetCandidates(rawElement, { interactive })
    const fallback = interactive instanceof Element ? interactive : rawElement
    const isChoiceLike = interactive instanceof Element && interactive.matches?.(
      '.p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect, select, [role="combobox"]',
    )
    const hasNamedAlternative = candidates.some((item) => (
      item.element !== interactive
      && (
        item.element.getAttribute?.('name')
        || getFieldWrapName(item.element)
      )
    ))

    if (!candidates.length) {
      return Promise.resolve(fallback instanceof Element ? fallback : null)
    }

    if (candidates.length === 1 && !candidates[0].fragile && !isChoiceLike) {
      return Promise.resolve(candidates[0].element)
    }

    const best = candidates[0]
    const second = candidates[1]
    if (
      best
      && interactive instanceof Element
      && best.element === interactive
      && !best.fragile
      && !isChoiceLike
      && !hasNamedAlternative
      && (!second || best.score >= (second.score + 40))
    ) {
      return Promise.resolve(best.element)
    }

    const suggested = candidates.find((c) => c.suggested) || candidates[0]
    this.setHighlight(suggested.element)
    document.addEventListener('keydown', this.onKeyDown, true)
    this.pending = true

    if (!this.requestUi) {
      this.close(suggested.element, { dismissHost: false })
      return Promise.resolve(suggested.element)
    }

    return new Promise((resolve) => {
      this.resolve = resolve
      Promise.resolve(this.requestUi(candidates))
        .then((chosen) => {
          if (this.resolve !== resolve) return
          // Host already cleared its UI; don't dismiss again.
          this.close(chosen instanceof Element ? chosen : null, { dismissHost: false })
        })
        .catch(() => {
          if (this.resolve !== resolve) return
          this.close(null, { dismissHost: false })
        })
    })
  }

  destroy() {
    this.close(null)
  }
}
