const escapeCss = (value) => {
  if (globalThis.CSS?.escape) return globalThis.CSS.escape(value)
  return String(value).replace(/[^a-zA-Z0-9_-]/g, '\\$&')
}

const normalizeText = (value) => String(value || '')
  .replace(/\s+/g, ' ')
  .trim()
  .toLowerCase()

const visibleLabel = (element) => {
  if (!(element instanceof Element)) return ''

  const floatWrap = element.closest?.('.p-float-label') || element.parentElement
  const floatLabel = floatWrap?.querySelector?.(':scope > label, label')
  if (floatLabel) {
    const floatText = normalizeText(floatLabel.textContent)
    if (floatText) return floatText
  }

  const titleNode = element.querySelector?.('.nav-link-title, .menu-title, .sidebar-title, [class*="title"]')
  if (titleNode) {
    const title = normalizeText(titleNode.textContent)
    if (title) return title
  }

  const clone = element.cloneNode(true)
  clone.querySelectorAll?.('script, style, svg, i, .nav-icon, .sidebar-pending-dot, .badge, .p-dropdown-label, .p-multiselect-label').forEach((node) => node.remove())
  const text = normalizeText(clone.textContent)
  if (text) return text

  return normalizeText(
    element.getAttribute('aria-label')
    || element.getAttribute('title')
    || element.getAttribute('placeholder')
    || element.getAttribute('name')
    || '',
  )
}

const hrefOf = (element) => {
  if (!(element instanceof Element)) return ''
  const raw = element.getAttribute('href') || element.getAttribute('data-href') || ''
  if (!raw || raw === '#' || raw.startsWith('javascript:')) return ''
  try {
    const url = new URL(raw, globalThis.location?.origin || 'http://localhost')
    return `${url.pathname}${url.search}`.replace(/\/+$/, '') || '/'
  } catch {
    return raw.split('#')[0].replace(/\/+$/, '') || raw
  }
}

/**
 * Nearest section/group label (e.g. sidebar "Attendance" above nav links).
 */
export function getSectionLabel(element) {
  if (!(element instanceof Element)) return ''

  const headerSelector = [
    '.dropdown-header',
    '.nav-header',
    '.nav-subtitle',
    '.menu-header',
    '.sidebar-header',
    '[class*="nav-header"]',
    '[class*="menu-header"]',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  ].join(', ')

  let current = element
  for (let depth = 0; depth < 12 && current; depth += 1) {
    let sibling = current.previousElementSibling
    while (sibling) {
      if (sibling.matches?.(headerSelector)) {
        return normalizeText(sibling.textContent).slice(0, 80)
      }
      const nested = sibling.querySelector?.(headerSelector)
      if (nested) return normalizeText(nested.textContent).slice(0, 80)
      sibling = sibling.previousElementSibling
    }

    const parent = current.parentElement
    if (!parent || parent === document.body) break

    // Group wrappers: check parent's previous header siblings.
    let parentSibling = parent.previousElementSibling
    while (parentSibling) {
      if (parentSibling.matches?.(headerSelector)) {
        return normalizeText(parentSibling.textContent).slice(0, 80)
      }
      const nested = parentSibling.querySelector?.(headerSelector)
      if (nested) return normalizeText(nested.textContent).slice(0, 80)
      parentSibling = parentSibling.previousElementSibling
    }

    current = parent
  }

  return ''
}

export function captureMatchHints(element) {
  if (!(element instanceof Element)) return null

  const prime = element.closest?.('.p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect') || (
    element.matches?.('.p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect') ? element : null
  )
  const target = prime || element

  const text = visibleLabel(target)
  const href = hrefOf(target)
  const section = getSectionLabel(target)
  const dataGuider = target.getAttribute('data-guider') || ''
  const ariaLabel = normalizeText(prime ? '' : (target.getAttribute('aria-label') || ''))
  const name = target.getAttribute('name') || ''
  const placeholder = normalizeText(target.getAttribute('placeholder') || '')
  const role = target.getAttribute('role') || (prime ? 'combobox' : '')
  const tag = target.tagName.toLowerCase()
  const type = target.getAttribute('type') || ''
  const nestedId = prime
    ? ([...prime.querySelectorAll('[id]')].find((node) => node.id && !/^(pv_|apv_|pr_|p_)id_?\d+$/i.test(node.id))?.id || '')
    : ''
  const id = (!/^(pv_|apv_|pr_|p_)id_?\d+$/i.test(target.id || '') && target.id) || nestedId || ''

  if (!text && !href && !dataGuider && !name && !ariaLabel && !id) return null

  return {
    ...(text ? { text } : {}),
    ...(href ? { href } : {}),
    ...(section ? { section } : {}),
    ...(dataGuider ? { dataGuider } : {}),
    ...(ariaLabel ? { ariaLabel } : {}),
    ...(name ? { name } : {}),
    ...(placeholder ? { placeholder } : {}),
    ...(role ? { role } : {}),
    ...(tag ? { tag } : {}),
    ...(type ? { type } : {}),
    ...(id ? { id } : {}),
  }
}

function textScore(candidateText, targetText) {
  const a = normalizeText(candidateText)
  const b = normalizeText(targetText)
  if (!a || !b) return 0
  if (a === b) return 50

  const wordsA = a.split(/\s+/).filter(Boolean)
  const wordsB = b.split(/\s+/).filter(Boolean)

  // Exact word-set match ignoring order noise
  if (wordsA.length === wordsB.length && wordsB.every((word) => wordsA.includes(word))) {
    return 40
  }

  // "Schedule" inside "Apply For Schedule" — weak partial only
  if (a.includes(b)) {
    const extra = Math.max(0, wordsA.length - wordsB.length)
    return Math.max(4, 18 - extra * 6)
  }

  if (b.includes(a) && a.length >= 3) return 8
  return 0
}

function hrefScore(candidateHref, targetHref) {
  const a = normalizeText(candidateHref).replace(/\/+$/, '')
  const b = normalizeText(targetHref).replace(/\/+$/, '')
  if (!a || !b) return 0
  if (a === b) return 45
  if (a.endsWith(b) || b.endsWith(a)) return 28
  if (a.includes(b) || b.includes(a)) return 12
  return -25
}

function sectionScore(candidateSection, targetSection) {
  const a = normalizeText(candidateSection)
  const b = normalizeText(targetSection)
  if (!a || !b) return 0
  if (a === b) return 30
  if (a.includes(b) || b.includes(a)) return 12
  return -20
}

export function scoreElement(element, match) {
  if (!(element instanceof Element) || !match || typeof match !== 'object') return 0

  let score = 0

  const dataGuider = element.getAttribute('data-guider') || ''
  if (match.dataGuider) {
    if (dataGuider === match.dataGuider) score += 100
    else if (dataGuider) score -= 40
  }

  if (match.id && element.id) {
    if (element.id === match.id) score += 80
  }

  if (match.href) {
    score += hrefScore(hrefOf(element), match.href)
  }

  if (match.text) {
    score += textScore(visibleLabel(element), match.text)
    if (match.ariaLabel) {
      score += Math.round(textScore(element.getAttribute('aria-label') || '', match.ariaLabel) * 0.5)
    }
  } else if (match.ariaLabel) {
    score += textScore(element.getAttribute('aria-label') || '', match.ariaLabel)
  }

  if (match.section) {
    score += sectionScore(getSectionLabel(element), match.section)
  }

  if (match.name && element.getAttribute('name') === match.name) score += 25
  if (match.placeholder) {
    score += Math.round(textScore(element.getAttribute('placeholder') || '', match.placeholder) * 0.6)
  }
  if (match.tag && element.tagName.toLowerCase() === match.tag) score += 4
  if (match.role && element.getAttribute('role') === match.role) score += 6
  if (match.type && element.getAttribute('type') === match.type) score += 6

  return score
}

function candidateSelector(match) {
  const parts = []
  if (match?.dataGuider) parts.push(`[data-guider="${escapeCss(match.dataGuider)}"]`)
  if (match?.id) parts.push(`#${escapeCss(match.id)}`)
  if (match?.href) {
    const href = String(match.href)
    parts.push(`a[href="${escapeCss(href)}"]`)
    parts.push(`a[href="${escapeCss(href)}/"]`)
    // Relative path variants without leading slash handling
    const bare = href.replace(/^\//, '')
    if (bare && bare !== href) {
      parts.push(`a[href="/${escapeCss(bare)}"]`)
    }
  }
  if (match?.name) {
    parts.push(`[name="${escapeCss(match.name)}"]`)
  }
  parts.push('a.nav-link, a[href], button, [role="button"], [data-guider], input:not([type="hidden"]):not([type="password"]), select, textarea, [role="combobox"], label')
  return parts.join(', ')
}

function collectCandidates(match, root = document) {
  const scope = root instanceof Element || root === document ? root : document
  let nodes = []
  try {
    nodes = [...scope.querySelectorAll(candidateSelector(match))]
  } catch {
    nodes = [...scope.querySelectorAll('a, button, [role="button"], input, select, textarea, [data-guider]')]
  }

  // Prefer interactive targets; unwrap labels to controls when useful.
  const expanded = []
  for (const node of nodes) {
    if (!(node instanceof Element)) continue
    if (node.closest?.('.sg-panel, .sg-overlay, .sg-launcher')) continue
    expanded.push(node)
    if (node.matches('label') && node.control instanceof Element) {
      expanded.push(node.control)
    }
  }

  return [...new Set(expanded)]
}

export const SCORE_THRESHOLD = 40

/**
 * Resolve best DOM element for a recorded match (+ optional CSS selector fallback).
 */
export function resolveByScore(match, {
  selector = '',
  root = document,
  threshold = SCORE_THRESHOLD,
} = {}) {
  const results = []

  if (selector) {
    try {
      const direct = document.querySelector(selector)
      if (direct instanceof Element) {
        const scored = match ? scoreElement(direct, match) : 35
        results.push({ element: direct, score: scored, via: 'selector' })
      }
    } catch {
      // ignore invalid selector
    }
  }

  if (match && typeof match === 'object') {
    for (const element of collectCandidates(match, root)) {
      const score = scoreElement(element, match)
      if (score > 0) results.push({ element, score, via: 'score' })
    }
  }

  if (!results.length) return null

  results.sort((a, b) => b.score - a.score || (a.via === 'selector' ? -1 : 1))
  const best = results[0]
  if (!best || best.score < threshold) {
    // Keep strict selector hit if it was unique data-guider / id style.
    if (best?.via === 'selector' && selector && (
      selector.startsWith('[data-guider=')
      || selector.startsWith('#')
    )) {
      return best.element
    }
    return null
  }

  return best.element
}
