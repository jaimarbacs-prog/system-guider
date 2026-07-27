const escapeCss = (value) => {
  if (globalThis.CSS?.escape) return globalThis.CSS.escape(value)
  return String(value).replace(/[^a-zA-Z0-9_-]/g, '\\$&')
}

const normalizeText = (value) => String(value || '')
  .replace(/\s+/g, ' ')
  .trim()
  .toLowerCase()

/** Keep in sync with selectors.js CLICKABLE_TILE_SELECTOR (avoid circular import). */
const CLICKABLE_TILE_SELECTOR = [
  '.branch-card',
  '.day-column',
  '.day-name',
  '[data-guider-tile]',
  '[class*="branch-card"]',
  '.schedule-card',
  '.stat-card',
  '.kpi-card',
].join(', ')

const visibleLabel = (element) => {
  if (!(element instanceof Element)) return ''

  if (element.id) {
    try {
      const forLabel = document.querySelector(`label[for="${escapeCss(element.id)}"]`)
      if (forLabel) {
        const linked = normalizeText(forLabel.textContent)
        if (linked) return linked
      }
    } catch {
      // ignore invalid id for querySelector
    }
  }

  const fieldWrap = element.closest?.([
    '.field',
    '.form-group',
    '.p-field',
    '.p-float-label',
    '.n-form-item',
    '.el-form-item',
    '.v-input',
    '[class*="form-item"]',
    '[class*="FormItem"]',
  ].join(', '))
  if (fieldWrap) {
    const wrapLabel = fieldWrap.querySelector(':scope > label, :scope label')
    if (wrapLabel) {
      const wrapText = normalizeText(wrapLabel.textContent)
      if (wrapText) return wrapText
    }
    const fieldName = fieldWrap.getAttribute?.('name')
    if (fieldName) {
      const fromName = normalizeText(fieldName.replace(/_/g, ' '))
      if (fromName) return fromName
    }
  }

  const floatWrap = element.closest?.('.p-float-label') || element.parentElement
  const floatLabel = floatWrap?.querySelector?.(':scope > label, label')
  if (floatLabel) {
    const floatText = normalizeText(floatLabel.textContent)
    if (floatText) return floatText
  }

  // Clickable tiles: prefer the heading / day label over the full address blob.
  const tile = element.matches?.(CLICKABLE_TILE_SELECTOR)
    ? element
    : element.closest?.(CLICKABLE_TILE_SELECTOR)
  if (tile) {
    // Schedule cells: employee names live in .day-date; .day-name is often a count.
    if (tile.matches?.('.day-column, .day-name')) {
      const dayDate = tile.querySelector?.('.day-date')
      const dayDateText = normalizeText(dayDate?.textContent || '')
      if (dayDateText && dayDateText !== '—' && dayDateText.length <= 80) return dayDateText
    }
    const heading = tile.querySelector?.(
      'h1, h2, h3, h4, h5, .card-title, [class*="card-title"], [class*="tile-title"]',
    )
    if (heading) {
      const headingText = normalizeText(heading.textContent)
      if (headingText && headingText.length <= 80) return headingText
    }
    const dayName = tile.querySelector?.('.day-name')
    const dayNameText = normalizeText(dayName?.textContent || '')
    if (dayNameText && dayNameText !== '—' && dayNameText.length <= 40) return dayNameText
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
  let name = target.getAttribute('name') || ''
  if (!name || /^(pv_|apv_|pr_|p_)/i.test(name)) {
    let current = target.parentElement
    for (let depth = 0; depth < 14 && current && current !== document.body; depth += 1) {
      const candidate = current.getAttribute?.('name') || ''
      if (candidate && !/^(pv_|apv_|pr_|p_)/i.test(candidate) && candidate.length <= 80) {
        name = candidate
        break
      }
      current = current.parentElement
    }
  }
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

  if (match.name) {
    const ownName = element.getAttribute('name') || ''
    const wrapName = element.closest?.(
      '.field, .form-group, .p-field, .n-form-item, .el-form-item, [class*="form-item"]',
    )?.getAttribute?.('name') || ''
    if (ownName === match.name || wrapName === match.name) score += 45
  }
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
    parts.push(`.field[name="${escapeCss(match.name)}"]`)
    parts.push(`.field[name="${escapeCss(match.name)}"] textarea`)
    parts.push(`.field[name="${escapeCss(match.name)}"] input`)
  }
  parts.push('a.nav-link, a[href], button, [role="button"], [data-guider], input:not([type="hidden"]):not([type="password"]), select, textarea, [role="combobox"], label')
  // Clickable tiles/cards are not form controls but are common guide targets.
  parts.push(CLICKABLE_TILE_SELECTOR)
  return parts.join(', ')
}

function collectCandidates(match, root = document) {
  const scope = root instanceof Element || root === document ? root : document
  let nodes = []
  try {
    nodes = [...scope.querySelectorAll(candidateSelector(match))]
  } catch {
    nodes = [...scope.querySelectorAll(`a, button, [role="button"], input, select, textarea, [data-guider], ${CLICKABLE_TILE_SELECTOR}`)]
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

  // Text-bearing tiles: match.heading "BRANCH 1" even when not in the broad query set.
  const needle = normalizeText(match?.text || '')
  if (needle.length >= 2) {
    try {
      for (const tile of scope.querySelectorAll(CLICKABLE_TILE_SELECTOR)) {
        if (!(tile instanceof Element)) continue
        if (tile.closest?.('.sg-panel, .sg-overlay, .sg-launcher')) continue
        const label = visibleLabel(tile)
        if (label && (label === needle || label.includes(needle) || needle.includes(label))) {
          expanded.push(tile)
        }
      }
    } catch {
      // ignore
    }
  }

  return [...new Set(expanded)]
}

export const SCORE_THRESHOLD = 40

/**
 * Positional / deep CSS paths break when the host DOM gains/removes blocks
 * (e.g. an employee info card inserted above a form field).
 */
export function isFragileSelector(selector) {
  const s = String(selector || '').trim()
  if (!s) return false
  if (/:nth-(?:of-type|child)\s*\(/i.test(s)) return true
  if (s.includes('#') || s.includes('[data-guider')) return false
  const depth = (s.match(/>/g) || []).length
  if (depth >= 2) return true
  return false
}

/**
 * Title → soft label ("Fill in Description" → "description").
 */
export function labelFromStepTitle(title) {
  const raw = String(title || '').trim()
  if (!raw) return ''
  return raw
    .replace(/^(fill\s+in|enter|type|pick\s+a|pick|select|choose|click)\s+/i, '')
    .trim()
    .toLowerCase()
}

/**
 * Ensure steps have usable match hints. Always merge title-derived label/name so
 * old guides that captured typed values (or omitted match) still resolve fields.
 */
export function enrichMatchHints(step) {
  const existing = step?.match && typeof step.match === 'object' && !Array.isArray(step.match)
    ? { ...step.match }
    : {}
  const fromTitle = labelFromStepTitle(step?.title)
  if (fromTitle.length >= 3) {
    if (!existing.text) {
      existing.text = fromTitle
    } else if (
      existing.text !== fromTitle
      && existing.text.length <= fromTitle.length + 2
      && !existing.dataGuider
      && !existing.id
      && !existing.text.includes(fromTitle)
      && !fromTitle.includes(existing.text)
    ) {
      // Replace accidental typed-value captures with the field label from the title.
      // Never shrink a richer tile/card label (e.g. employee name) down to "branch".
      existing.text = fromTitle
    }
    // Invent name= only for real form controls — not div/day-column clicks.
    const formish = /^(input|textarea|select)$/i.test(String(existing.tag || ''))
      || Boolean(existing.placeholder)
      || Boolean(existing.type)
      || existing.role === 'combobox'
    if (
      !existing.name
      && formish
      && fromTitle === fromTitle.toLowerCase()
      && /^[a-z][a-z0-9\s_-]*$/.test(fromTitle)
    ) {
      existing.name = fromTitle.replace(/\s+/g, '_')
    }
  }
  if (existing.text || existing.dataGuider || existing.id || existing.name || existing.ariaLabel) {
    return existing
  }
  return Object.keys(existing).length ? existing : null
}

/**
 * Resolve interactive control inside a named form row (.field[name="description"]).
 */
export function resolveByFieldName(name, {
  root = document,
  tag = '',
} = {}) {
  const raw = String(name || '').trim()
  if (!raw) return null
  const escaped = escapeCss(raw)
  const scope = root instanceof Element || root === document ? root : document
  const tagHint = String(tag || '').toLowerCase()

  const selectors = []
  if (tagHint === 'textarea' || tagHint === 'input' || tagHint === 'select') {
    selectors.push(`.field[name="${escaped}"] ${tagHint}`)
    selectors.push(`[name="${escaped}"] ${tagHint}`)
    selectors.push(`.form-group[name="${escaped}"] ${tagHint}`)
  }
  selectors.push(
    `[name="${escaped}"] textarea`,
    `[name="${escaped}"] input:not([type="hidden"])`,
    `[name="${escaped}"] select`,
    `[name="${escaped}"] .p-dropdown`,
    `[name="${escaped}"] .p-autocomplete`,
    `[name="${escaped}"] .p-calendar`,
    `[name="${escaped}"] .p-multiselect`,
    `.field[name="${escaped}"] textarea`,
    `.field[name="${escaped}"] input:not([type="hidden"])`,
    `.field[name="${escaped}"] select`,
    `.field[name="${escaped}"] .p-dropdown`,
    `.field[name="${escaped}"] .p-autocomplete`,
    `.field[name="${escaped}"] .p-calendar`,
    `.mb-0[name="${escaped}"] .p-dropdown`,
    `.mb-0[name="${escaped}"] .p-autocomplete`,
    `.mb-0[name="${escaped}"] input:not([type="hidden"])`,
    `.mb-0[name="${escaped}"] textarea`,
    `.field[name="${escaped}"]`,
    `.mb-0[name="${escaped}"]`,
    `[name="${escaped}"]`,
  )

  for (const selector of selectors) {
    try {
      const nodes = [...scope.querySelectorAll(selector)]
      for (const node of nodes) {
        if (!(node instanceof Element)) continue
        if (node.closest?.('.sg-panel, .sg-overlay, .sg-launcher')) continue
        if (node.matches('textarea, input, select, .p-dropdown, .p-autocomplete, .p-calendar, .p-multiselect')) {
          return node
        }
        const nested = node.querySelector?.(
          'textarea, input:not([type="hidden"]), select, .p-dropdown, .p-autocomplete, .p-calendar',
        )
        if (nested) return nested
        return node
      }
    } catch {
      // ignore
    }
  }
  return null
}

/**
 * Resolve best DOM element for a recorded match (+ optional CSS selector fallback).
 */
export function resolveByScore(match, {
  selector = '',
  root = document,
  threshold = SCORE_THRESHOLD,
} = {}) {
  const results = []
  const hasMatch = match && typeof match === 'object' && !Array.isArray(match)
  const fragile = isFragileSelector(selector)
  const selectorTargetsTile = isTileSelector(selector)

  if (selector) {
    try {
      const direct = document.querySelector(selector)
      if (direct instanceof Element) {
        const scored = hasMatch ? scoreElement(direct, match) : 35
        const tileHit = isTileElement(direct) || selectorTargetsTile
        // Forms: fragile positional hits must earn a real match score.
        // Tiles/grid cells: always keep the CSS hit — weak title text like "branch"
        // must not lose to header buttons ("Branch Holidays").
        const ok = tileHit
          || !fragile
          || !hasMatch
          || scored >= threshold
        if (ok) {
          results.push({
            element: direct,
            score: tileHit ? Math.max(scored, 48) : scored,
            via: 'selector',
            tile: tileHit,
          })
        }
      }
    } catch {
      // ignore invalid selector
    }
  }

  // Stable recovery for old :nth-of-type guides and dynamic sibling inserts.
  // Skip name recovery when the recorded selector is clearly a page tile/grid cell —
  // invented names like "branch" must not redirect to unrelated form rows.
  if (hasMatch && match.name && !selectorTargetsTile) {
    const byName = resolveByFieldName(match.name, { root, tag: match.tag })
    if (byName) {
      const scored = scoreElement(byName, match)
      results.push({ element: byName, score: Math.max(scored, 55), via: 'name' })
    }
  }

  if (hasMatch) {
    for (const element of collectCandidates(match, root)) {
      const score = scoreElement(element, match)
      if (score > 0) results.push({ element, score, via: 'score', tile: isTileElement(element) })
    }
  }

  // Tile CSS recorded → don't let partial button text ("Branch Holidays") steal the step.
  const tileSelectorHit = results.find((item) => item.via === 'selector' && item.tile)
  let pool = results
  if (tileSelectorHit) {
    pool = results.filter((item) => {
      if (item.via === 'selector' || item.via === 'name') return true
      if (item.tile) return true
      if (isFormControlElement(item.element) && match?.name) return true
      // Exact label match only (textScore exact = 50+).
      if (item.element?.matches?.('button, a, [role="button"], .p-button, .nav-link')) {
        return item.score >= 50
      }
      return item.score >= tileSelectorHit.score + 15
    })
  }

  if (!pool.length) return null

  pool.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    // Forms (fragile, non-tile): prefer name/score over positional CSS.
    // Tiles: prefer the recorded selector over weak score hits.
    if (tileSelectorHit) {
      const rank = { selector: 0, name: 1, score: 2 }
      const ra = rank[a.via] ?? 3
      const rb = rank[b.via] ?? 3
      if (ra !== rb) return ra - rb
      return 0
    }
    const rank = { name: 0, score: 1, selector: 2 }
    const ra = rank[a.via] ?? 3
    const rb = rank[b.via] ?? 3
    if (fragile && ra !== rb) return ra - rb
    return a.via === 'selector' ? -1 : 1
  })
  const best = pool[0]
  if (!best || best.score < threshold) {
    // Keep strict selector hit if it was unique data-guider / id style.
    if (best?.via === 'selector' && selector && (
      selector.startsWith('[data-guider=')
      || selector.startsWith('#')
    )) {
      return best.element
    }
    // Recorded tile CSS — accept even when title/match text is weak/wrong.
    if (best?.via === 'selector' && best.tile) return best.element
    // Name hits are intentionally strong even when text scoring is weak.
    if (best?.via === 'name' && best.score >= 40) return best.element
    return null
  }

  return best.element
}

function isTileElement(element) {
  if (!(element instanceof Element)) return false
  return element.matches?.(CLICKABLE_TILE_SELECTOR)
    || Boolean(element.closest?.(CLICKABLE_TILE_SELECTOR))
}

function isTileSelector(selector) {
  return /\.(day-column|branch-card|schedule-card|stat-card|kpi-card)|data-guider-tile|branch-card/i.test(
    String(selector || ''),
  )
}

function isFormControlElement(element) {
  if (!(element instanceof Element)) return false
  return Boolean(element.matches?.(
    'input, textarea, select, [role="combobox"], .p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect, .p-calendar, .field, .form-group',
  ) || element.closest?.('.field, .form-group, .p-field, .p-float-label'))
}
