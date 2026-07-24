import { resolveByScore } from './scoring.js'

const escapeCss = (value) => {
  if (globalThis.CSS?.escape) return globalThis.CSS.escape(value)
  return String(value).replace(/[^a-zA-Z0-9_-]/g, '\\$&')
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
      const matches = [...parent.children].filter(
        (child) => child.tagName === current.tagName,
      )
      if (matches.length > 1) segment += `:nth-of-type(${matches.indexOf(current) + 1})`
    }
    segments.unshift(segment)
    const selector = segments.join(' > ')
    if (document.querySelectorAll(selector).length === 1) return selector
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

export function isElementPresent(element) {
  if (!(element instanceof Element) || !element.isConnected) return false
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
 * Wait for a step target using match scoring (preferred) with CSS selector fallback.
 * Pass AbortSignal to cancel MutationObserver / poll interval early.
 */
export async function waitForStepTarget(step, timeout = 3000, options = {}) {
  const signal = options?.signal
  const deadline = Date.now() + timeout

  const find = () => {
    const scored = resolveByScore(step?.match, { selector: step?.selector || '' })
    if (scored && isElementPresent(scored)) return scored
    const fallback = resolveElement(step?.selector)
    if (fallback && isElementPresent(fallback)) return fallback
    return scored || fallback || null
  }

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
