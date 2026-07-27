import { resolveByScore, isFragileSelector, enrichMatchHints, resolveByFieldName, scoreElement } from './scoring.js'

const escapeCss = (value) => {
  if (globalThis.CSS?.escape) return globalThis.CSS.escape(value)
  return String(value).replace(/[^a-zA-Z0-9_-]/g, '\\$&')
}

/**
 * Clickable page tiles/cards (not form controls). Prefer these roots over
 * inner icon/text nodes, and keep CSS fallback when match scoring can't see them.
 */
export const CLICKABLE_TILE_SELECTOR = [
  '.branch-card',
  '.day-column',
  '.day-name',
  '[data-guider-tile]',
  '[class*="branch-card"]',
  '.schedule-card',
  '.stat-card',
  '.kpi-card',
].join(', ')

const NESTED_CONTROL_SELECTOR = [
  'button',
  'a[href]',
  '[role="button"]',
  '.p-button',
  'input',
  'select',
  'textarea',
  '[role="combobox"]',
  '.p-dropdown',
  '.p-multiselect',
  '.p-autocomplete',
  '.p-cascadeselect',
].join(', ')

export function isClickableTile(element) {
  if (!(element instanceof Element)) return false
  return element.matches(CLICKABLE_TILE_SELECTOR)
}

/**
 * Nearest clickable tile root, unless the click landed on a nested real control
 * (e.g. kebab menu on a branch card).
 */
export function resolveClickableTile(element) {
  if (!(element instanceof Element)) return null
  const tile = element.closest?.(CLICKABLE_TILE_SELECTOR)
  if (!tile) return null
  const nested = element.closest?.(NESTED_CONTROL_SELECTOR)
  if (nested && tile.contains(nested) && nested !== tile) return null
  // Prefer the card/column root over an inner .day-name label node.
  if (tile.matches?.('.day-name')) {
    const column = tile.closest?.('.day-column')
    if (column) return column
  }
  return tile
}

export function isSensitiveElement(element) {
  if (!(element instanceof Element)) return true
  return element.matches(
    'input[type="password"], [data-guider-ignore], [contenteditable][data-sensitive]',
  )
}

/** PrimeVue UniqueComponentId values change every page load — never persist them. */
export function isUnstableElementId(id) {
  if (!id || typeof id !== 'string') return true
  return /^(pv_|apv_|pr_|p_)id_?\d+$/i.test(id)
    || /^[a-z]{1,5}_id_\d+$/i.test(id)
}

const PRIME_ROOT_SELECTOR = '.p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect'

const UNSTABLE_NAME_RE = /^(pv_|apv_|pr_|p_)/i

/** True when a name= value is worth persisting as a selector hook. */
export function isUsableFieldName(name) {
  const value = String(name || '').trim()
  if (!value || value.length > 80) return false
  if (UNSTABLE_NAME_RE.test(value)) return false
  return true
}

/**
 * Walk ancestors for the nearest usable name= (e.g. div.mb-0[name="company_department"]).
 * Do not stop at .p-float-label — that wrapper usually has no name.
 */
export function getFieldWrapName(element) {
  if (!(element instanceof Element)) return ''
  let current = element
  for (let depth = 0; depth < 14 && current && current !== document.body; depth += 1) {
    const own = current.getAttribute?.('name') || ''
    if (isUsableFieldName(own)) return own
    current = current.parentElement
  }
  return ''
}

/** Nearest ancestor (or self) that owns a usable name=. */
export function getNamedFieldWrap(element) {
  if (!(element instanceof Element)) return null
  let current = element
  for (let depth = 0; depth < 14 && current && current !== document.body; depth += 1) {
    if (isUsableFieldName(current.getAttribute?.('name'))) return current
    current = current.parentElement
  }
  return null
}

/**
 * Prefer name-scoped selectors over :nth-of-type — sibling cards (no .field)
 * still shift nth-of-type indexes because they are still `div`s.
 */
function selectorFromFieldName(element, fieldName) {
  if (!(element instanceof Element) || !fieldName) return null
  const name = escapeCss(fieldName)
  const tag = element.tagName.toLowerCase()
  const candidates = []

  if (element.matches?.(PRIME_ROOT_SELECTOR)) {
    const primeClass = [...element.classList].find((cls) => (
      /^p-(dropdown|multiselect|autocomplete|cascadeselect)$/.test(cls)
    ))
    if (primeClass) {
      candidates.push(`[name="${name}"] .${escapeCss(primeClass)}`)
      candidates.push(`.field[name="${name}"] .${escapeCss(primeClass)}`)
      candidates.push(`.mb-0[name="${name}"] .${escapeCss(primeClass)}`)
      candidates.push(`[name="${name}"] ${tag}.${escapeCss(primeClass)}`)
    }
  }

  if (tag === 'textarea' || tag === 'select' || tag === 'input') {
    candidates.push(`[name="${name}"] ${tag}`)
    candidates.push(`.field[name="${name}"] ${tag}`)
    candidates.push(`.form-group[name="${name}"] ${tag}`)
    candidates.push(`.mb-0[name="${name}"] ${tag}`)
  }

  // Named wrap itself (unique on page)
  candidates.push(`[name="${name}"]`)
  candidates.push(`.field[name="${name}"]`)
  candidates.push(`.mb-0[name="${name}"]`)

  for (const selector of candidates) {
    try {
      const matches = [...document.querySelectorAll(selector)]
      if (matches.length === 1) return selector
      if (matches.length > 1 && matches.includes(element)) {
        const narrowed = matches.filter((node) => node === element || node.contains(element))
        if (narrowed.length === 1 && narrowed[0] === element) return selector
      }
      // Scope to interactive child when the wrap matched but element is inside it
      if (matches.length === 1 && matches[0].contains?.(element) && element !== matches[0]) {
        if (element.matches?.(PRIME_ROOT_SELECTOR)) {
          const primeClass = [...element.classList].find((cls) => (
            /^p-(dropdown|multiselect|autocomplete|cascadeselect)$/.test(cls)
          ))
          if (primeClass) {
            const scoped = `[name="${name}"] .${escapeCss(primeClass)}`
            if (document.querySelectorAll(scoped).length === 1) return scoped
          }
        }
      }
    } catch {
      // ignore invalid selector
    }
  }
  return null
}

export function getElementSelector(element) {
  if (!(element instanceof Element)) return null

  // Prefer stable PrimeVue control roots over ephemeral label/placeholder nodes.
  const primeRoot = element.closest?.(PRIME_ROOT_SELECTOR)
  if (primeRoot) element = primeRoot

  const hook = element.getAttribute('data-guider')
  if (hook) return `[data-guider="${escapeCss(hook)}"]`

  if (element.id && !isUnstableElementId(element.id)) {
    const selector = `#${escapeCss(element.id)}`
    if (document.querySelectorAll(selector).length === 1) return selector
  }

  const fieldName = getFieldWrapName(element)
  const byName = selectorFromFieldName(element, fieldName)
  if (byName) return byName

  // Stable nested inputId (e.g. company_branch_ids) — avoid fragile positional paths.
  if (element.matches?.(PRIME_ROOT_SELECTOR)) {
    const nested = [...element.querySelectorAll('[id]')].find(
      (node) => node.id && !isUnstableElementId(node.id),
    )
    const primeClass = [...element.classList].find((name) => (
      /^p-(dropdown|multiselect|autocomplete|cascadeselect)$/.test(name)
    ))
    if (nested && primeClass) {
      const selector = `${element.tagName.toLowerCase()}.${escapeCss(primeClass)}:has(#${escapeCss(nested.id)})`
      try {
        if (document.querySelectorAll(selector).length === 1) return selector
      } catch {
        // :has() unsupported — fall through to path segments
      }
    }
  }

  // Prefer recording the clickable tile root (shorter, more stable path).
  if (isClickableTile(element) || resolveClickableTile(element)) {
    const tile = isClickableTile(element) ? element : resolveClickableTile(element)
    if (tile) element = tile
  }

  // Scope schedule cells under grid content (avoids bare :nth-child colliding site-wide).
  if (element.matches?.('.day-column')) {
    const grid = element.closest?.('.schedule-grid-content')
    const parent = element.parentElement
    if (grid && parent === grid) {
      const childIndex = [...parent.children].indexOf(element) + 1
      if (childIndex > 0) {
        const scoped = `.schedule-grid-content > .day-column:nth-child(${childIndex})`
        try {
          if (document.querySelectorAll(scoped).length === 1) return scoped
        } catch {
          // fall through
        }
      }
    }
  }

  const segments = []
  let current = element
  while (current && current !== document.body && segments.length < 5) {
    let segment = current.tagName.toLowerCase()
    const stableClass = [...current.classList].find(
      (name) => !/^(active|selected|open|focus|hover|ng-|css-|jsx-|p-placeholder|p-focus|p-inputtext|p-disabled|p-highlight|p-inputwrapper|p-inputwrapper-filled|p-inputwrapper-focus|p-overlay-open)$/i.test(name),
    )
    if (stableClass) segment += `.${escapeCss(stableClass)}`

    const parent = current.parentElement
    if (parent) {
      // Prefer index among same-class peers for tiles (more stable than all tag siblings).
      if (stableClass && isClickableTile(current)) {
        const peers = [...parent.children].filter(
          (child) => child instanceof Element && child.classList?.contains(stableClass),
        )
        if (peers.length > 1) {
          const idx = [...parent.children].indexOf(current) + 1
          segment += `:nth-child(${idx})`
        }
      } else {
        const matches = [...parent.children].filter(
          (child) => child.tagName === current.tagName,
        )
        if (matches.length > 1) segment += `:nth-of-type(${matches.indexOf(current) + 1})`
      }
    }
    segments.unshift(segment)
    const selector = segments.join(' > ')
    if (document.querySelectorAll(selector).length === 1) return selector
    // Tile roots are usually unique enough as a single segment among peers.
    if (segments.length === 1 && isClickableTile(current) && parent) {
      try {
        if (parent.querySelectorAll(`:scope > ${segment}`).length === 1) return selector
      } catch {
        // ignore
      }
    }
    current = parent
  }

  return segments.join(' > ') || null
}

export function resolveElement(selector) {
  if (!selector || typeof selector !== 'string') return null
  try {
    let found = document.querySelector(selector)
    if (!found && /\.p-placeholder|\.p-inputtext|\.p-focus/.test(selector)) {
      const softened = selector
        .replace(/\.p-placeholder/g, '')
        .replace(/\.p-inputtext/g, '')
        .replace(/\.p-focus/g, '')
        .replace(/\s{2,}/g, ' ')
        .replace(/>\s*>/g, '>')
        .trim()
      if (softened) found = document.querySelector(softened)
    }
    if (found) {
      const prime = found.closest?.('.p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect')
      if (prime) return prime
    }
    return found
  } catch {
    return null
  }
}

/**
 * Loading placeholders — not ready for highlight / interaction yet.
 * Host apps with custom loaders should set aria-busy="true" on the loading
 * region (and remove it when done) so playback can wait for content.
 */
export const LOADING_UI_SELECTOR = '.skeleton, .shimmer, [aria-busy="true"]'

/** True when the element or an ancestor is still in a skeleton/loading state. */
export function isElementLoading(element) {
  if (!(element instanceof Element)) return false
  try {
    return Boolean(element.closest(LOADING_UI_SELECTOR))
  } catch {
    return false
  }
}

/** True when any page region is still showing a loading / skeleton UI. */
export function isPageLoading(root = document) {
  try {
    const scope = root instanceof Element || root === document ? root : document
    return Boolean(scope.querySelector?.(LOADING_UI_SELECTOR))
  } catch {
    return false
  }
}

/**
 * After a click that refreshes content: brief grace for loaders to mount,
 * then wait until loading markers are gone.
 * - No loader during grace → return immediately (no postReadyDelay).
 * - Loader seen → wait until clear, then postReadyDelay.
 */
export async function waitUntilPageSettled({
  timeout = 20000,
  appearGraceMs = 300,
  postReadyDelay = 1500,
  pollInterval = 100,
  signal = null,
  isLoading = isPageLoading,
  onTick = null,
} = {}) {
  const deadline = Date.now() + Math.max(0, Number(timeout) || 0)
  const grace = Math.max(0, Number(appearGraceMs) || 0)
  const after = Math.max(0, Number(postReadyDelay) || 0)
  const interval = Math.max(40, Number(pollInterval) || 100)

  const aborted = () => Boolean(signal?.aborted)
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  // Already loading when we start — skip grace, wait it out.
  let sawLoading = isLoading()
  if (!sawLoading && grace > 0) {
    const graceDeadline = Date.now() + grace
    while (!sawLoading && Date.now() < graceDeadline) {
      if (aborted()) return false
      onTick?.({ phase: 'grace', remainingMs: Math.max(0, deadline - Date.now()), sawLoading: false })
      await sleep(interval)
      sawLoading = isLoading()
    }
  }
  if (aborted()) return false

  // No loader appeared → next step immediately (no postReadyDelay).
  if (!sawLoading) return true

  while (isLoading() && Date.now() <= deadline) {
    if (aborted()) return false
    const remainingMs = Math.max(0, deadline - Date.now())
    onTick?.({ phase: 'loading', remainingMs, sawLoading: true })
    await sleep(interval)
  }
  if (aborted()) return false

  if (after > 0) {
    onTick?.({ phase: 'settle', remainingMs: after, sawLoading: true })
    await sleep(after)
  }
  return !aborted()
}

export function isElementPresent(element) {
  if (!(element instanceof Element) || !element.isConnected) return false
  if (isElementLoading(element)) return false
  const style = getComputedStyle(element)
  if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) {
    return false
  }
  const rect = element.getBoundingClientRect()
  return rect.width >= 2 && rect.height >= 2
}

export function isElementInWindow(element) {
  if (!(element instanceof Element)) return false
  const rect = element.getBoundingClientRect()
  return !(
    rect.bottom < 0
    || rect.right < 0
    || rect.top > window.innerHeight
    || rect.left > window.innerWidth
  )
}

export function isElementReady(element) {
  return isElementPresent(element) && isElementInWindow(element)
}

/**
 * Scroll nested overflow containers (e.g. sidebar) so the target is visible,
 * then fall back to scrollIntoView for the window.
 */
export function scrollElementIntoView(element, { behavior = 'smooth', block = 'center' } = {}) {
  if (!(element instanceof Element) || !element.isConnected) return

  const ancestors = []
  let parent = element.parentElement
  while (parent && parent !== document.documentElement) {
    ancestors.push(parent)
    parent = parent.parentElement
  }

  ancestors.forEach((node) => {
    const style = getComputedStyle(node)
    const canScrollY = /(auto|scroll|overlay)/.test(style.overflowY)
      && node.scrollHeight > node.clientHeight + 1
    const canScrollX = /(auto|scroll|overlay)/.test(style.overflowX)
      && node.scrollWidth > node.clientWidth + 1
    if (!canScrollY && !canScrollX) return

    const parentRect = node.getBoundingClientRect()
    const elRect = element.getBoundingClientRect()
    if (canScrollY) {
      const delta = (elRect.top + elRect.height / 2) - (parentRect.top + node.clientHeight / 2)
      if (Math.abs(delta) > 2) node.scrollTop += delta
    }
    if (canScrollX) {
      const delta = (elRect.left + elRect.width / 2) - (parentRect.left + node.clientWidth / 2)
      if (Math.abs(delta) > 2) node.scrollLeft += delta
    }
  })

  try {
    element.scrollIntoView({ behavior, block, inline: 'nearest' })
  } catch {
    element.scrollIntoView()
  }
}

/** Prefer a measurable visible host for spotlight when the raw field is hidden/replaced. */
export function resolveHighlightTarget(element) {
  if (!(element instanceof Element)) return null

  // PrimeVue controls: spotlight the compact control, never the parent filter/drawer.
  const primeHost = element.closest?.('.p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect')
  if (primeHost && isElementPresent(primeHost)) return primeHost

  // Keep the real target when it only needs scrolling (sidebar / overflow).
  if (isElementPresent(element)) {
    // Avoid expanding tiny labels into huge page cards/panels.
    const oversized = element.closest?.(
      '.p-overlaypanel, .modal-content, .card, .offcanvas, [class*="overlay-custom"], .filter-panel',
    )
    if (oversized && oversized !== element && !element.matches('input, textarea, select, button, a, [role="combobox"]')) {
      return element
    }
    return element
  }

  let current = element.parentElement
  for (let depth = 0; depth < 8 && current; depth += 1) {
    if (current.matches?.('.p-overlaypanel, .modal, .modal-content, .card, .offcanvas, body, html')) break
    const rect = current.getBoundingClientRect?.()
    if (rect && (rect.width > 420 || rect.height > 280)) {
      current = current.parentElement
      continue
    }
    if (isElementReady(current)) return current
    current = current.parentElement
  }

  const wrap = element.closest([
    '.p-dropdown',
    '.p-multiselect',
    '.p-autocomplete',
    '.p-float-label',
    '.form-group',
    '.mb-3',
    '.n-form-item',
    '.el-form-item',
    '.v-input',
    '.mx-datepicker',
    '.dp__main',
    '.input-group',
    '[class*="form-item"]',
    '[class*="FormItem"]',
    'label',
  ].join(', '))
  if (wrap && isElementPresent(wrap)) {
    const rect = wrap.getBoundingClientRect()
    if (rect.width <= 420 && rect.height <= 280) return wrap
  }

  return isElementPresent(element) ? element : null
}

function rectKey(rect) {
  return [rect.top, rect.left, rect.width, rect.height]
    .map((value) => Math.round(value * 2) / 2)
    .join(':')
}

export async function waitForElement(selector, timeout = 3000, options = {}) {
  return waitForStepTarget({ selector }, timeout, options)
}

/**
 * Resolve a guide step target using match scoring (preferred) with CSS fallback.
 * Skips fragile positional selectors when title/match hints can locate a form field.
 * Clickable tiles/cards still allow a soft CSS fallback (scoring often misses them).
 */
export function resolveStepTarget(step, { requirePresent = true } = {}) {
  if (!step?.selector && !step?.match && !step?.title) return null

  const match = enrichMatchHints(step)
  const scored = resolveByScore(match, { selector: step?.selector || '' })
  if (scored && (!requirePresent || isElementPresent(scored))) {
    return promoteToTileRoot(scored)
  }

  // Explicit name-row recovery for older :nth-of-type recordings.
  const nameHint = match?.name || String(match?.text || '').replace(/\s+/g, '_')
  if (nameHint) {
    const byName = resolveByFieldName(nameHint, { tag: match?.tag })
    if (byName && (!requirePresent || isElementPresent(byName))) return byName
  }

  const sel = step?.selector || ''
  const fallback = resolveElement(sel)
  if (!fallback || (requirePresent && !isElementPresent(fallback))) return null

  const tile = promoteToTileRoot(fallback)
  if (!(isFragileSelector(sel) && match)) return tile

  // Fragile + match: keep form-field protection, but accept tiles / soft text agreement.
  const soft = match ? scoreElement(tile, match) : 0
  if (soft >= 18) return tile
  if (isClickableTile(tile) || tile.closest?.(CLICKABLE_TILE_SELECTOR)) {
    if (soft >= 8 || !match?.name) return tile
    // Invented/irrelevant name= must not block a real grid/card CSS hit.
    if (!resolveByFieldName(match.name, { tag: match.tag })) return tile
  }
  // Named form recovery exists — refuse a misleading positional hit.
  if (match?.name && resolveByFieldName(match.name, { tag: match.tag })) return null
  if (match?.dataGuider || match?.id) return null
  // Display clicks (cards/columns) — positional CSS is better than TARGET MISSING.
  if (!match?.name && !match?.href) return tile
  return null
}

function promoteToTileRoot(element) {
  if (!(element instanceof Element)) return element
  const tile = resolveClickableTile(element)
  return tile || element
}

/**
 * Whether a non-manual step can be located on the current page.
 */
export function isStepTargetValid(step) {
  if (!step || step.action === 'manual') return true
  if (!step.selector && !step.match && !step.title) return false
  return Boolean(resolveStepTarget(step))
}

/**
 * Wait for a step target using match scoring (preferred) with CSS selector fallback.
 * Pass AbortSignal to cancel MutationObserver / poll interval early.
 */
export async function waitForStepTarget(step, timeout = 3000, options = {}) {
  const signal = options?.signal
  const deadline = Date.now() + timeout

  const find = () => resolveStepTarget(step, { requirePresent: true })

  if (signal?.aborted) return null

  const immediate = find()
  if (immediate && isElementPresent(immediate)) return immediate

  return new Promise((resolve) => {
    let completed = false
    const finish = (element) => {
      if (completed) return
      completed = true
      observer.disconnect()
      clearInterval(poll)
      clearTimeout(timer)
      signal?.removeEventListener?.('abort', onAbort)
      resolve(element)
    }

    const onAbort = () => finish(null)

    const check = () => {
      if (signal?.aborted) {
        finish(null)
        return
      }
      const element = find()
      if (element && isElementPresent(element)) finish(element)
      else if (Date.now() >= deadline) finish(element || null)
    }

    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
    })
    const poll = setInterval(check, 50)
    const timer = setTimeout(() => finish(find()), Math.max(0, deadline - Date.now()))
    signal?.addEventListener?.('abort', onAbort, { once: true })
    check()
  })
}

export async function waitForStableElement(element, {
  timeout = 1500,
  stableFrames = 4,
  interval = 50,
} = {}) {
  if (!(element instanceof Element)) return null
  const deadline = Date.now() + timeout
  let lastKey = ''
  let hits = 0

  while (Date.now() <= deadline) {
    if (!element.isConnected) return null
    if (!isElementPresent(element)) {
      hits = 0
      lastKey = ''
    } else {
      const key = rectKey(element.getBoundingClientRect())
      if (key === lastKey) hits += 1
      else {
        lastKey = key
        hits = 1
      }
      if (hits >= stableFrames) return element
    }
    await new Promise((resolve) => setTimeout(resolve, interval))
  }

  return isElementReady(element) ? element : null
}
