/**
 * Group guides into a table-of-contents hierarchy by URL path.
 * Example:
 *   /attendance/timesheet → section "attendance" → subsection "timesheet"
 */

export function normalizeGuideUrl(url) {
  const raw = String(url || '/').trim() || '/'
  try {
    if (/^https?:\/\//i.test(raw)) {
      return new URL(raw).pathname || '/'
    }
  } catch {
    // ignore
  }
  const path = raw.split('?')[0].split('#')[0] || '/'
  return path.startsWith('/') ? path : `/${path}`
}

export function urlToSegments(url) {
  return normalizeGuideUrl(url)
    .split('/')
    .map((part) => part.trim())
    .filter(Boolean)
}

export function formatSectionLabel(segment) {
  return String(segment || 'root')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

/**
 * @returns {Array<{ path: string, label: string, guides: object[], children: object[] }>}
 */
export function buildGuideToc(guides = []) {
  const root = { path: '/', label: 'Home', guides: [], children: new Map() }

  const ensureChild = (parent, segment, path) => {
    if (!parent.children.has(segment)) {
      parent.children.set(segment, {
        path,
        label: formatSectionLabel(segment),
        guides: [],
        children: new Map(),
      })
    }
    return parent.children.get(segment)
  }

  for (const guide of guides) {
    if (!guide || typeof guide !== 'object') continue
    const url = normalizeGuideUrl(guide.url || '/')
    const segments = urlToSegments(url)
    if (!segments.length) {
      root.guides.push(guide)
      continue
    }
    let node = root
    let path = ''
    segments.forEach((segment) => {
      path += `/${segment}`
      node = ensureChild(node, segment, path)
    })
    node.guides.push(guide)
  }

  const toArray = (node) => ({
    path: node.path,
    label: node.label,
    guides: [...node.guides].sort((a, b) => String(a.title || '').localeCompare(String(b.title || ''))),
    children: [...node.children.values()]
      .map(toArray)
      .sort((a, b) => a.label.localeCompare(b.label)),
  })

  return [toArray(root)].filter((node) => (
    node.guides.length > 0 || node.children.length > 0
  ))
}

export function flattenToc(nodes, depth = 0, out = []) {
  for (const node of nodes || []) {
    const childRows = []
    flattenToc(node.children, depth + 1, childRows)
    const guides = node.guides || []
    // Only show a section heading when this path has guides.
    // Empty parents (e.g. Home `/` with only /attendance children) stay hidden.
    if (guides.length) {
      out.push({ type: 'section', depth, path: node.path, label: node.label })
      for (const guide of guides) {
        out.push({ type: 'guide', depth: depth + 1, guide })
      }
    }
    out.push(...childRows)
  }
  return out
}
