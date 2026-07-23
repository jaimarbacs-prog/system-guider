const clone = (value) => JSON.parse(JSON.stringify(value))

export function validateGuide(value) {
  if (!value || typeof value !== 'object' || !Array.isArray(value.steps)) {
    throw new TypeError('Guide must be an object with a steps array.')
  }

  const ids = new Set()
  value.steps.forEach((step, index) => {
    if (!step || typeof step !== 'object') {
      throw new TypeError(`Step ${index + 1} must be an object.`)
    }
    if (typeof step.id !== 'string' || !step.id.trim()) {
      throw new TypeError(`Step ${index + 1} requires an id.`)
    }
    if (ids.has(step.id)) throw new TypeError(`Duplicate step id: ${step.id}`)
    ids.add(step.id)
    if (!['click', 'input', 'manual'].includes(step.action)) {
      throw new TypeError(`Unsupported action in step ${index + 1}.`)
    }
    if (step.action !== 'manual' && typeof step.selector !== 'string' && !step.match) {
      throw new TypeError(`Step ${index + 1} requires a selector or match hints.`)
    }
    if (step.match != null && (typeof step.match !== 'object' || Array.isArray(step.match))) {
      throw new TypeError(`Step ${index + 1} match must be an object.`)
    }
  })

  return clone({
    id: String(value.id || `guide-${Date.now()}`),
    title: String(value.title || 'Untitled guide'),
    version: Number(value.version) || 1,
    ...(value.url ? { url: String(value.url) } : {}),
    ...(value.settings && typeof value.settings === 'object' && !Array.isArray(value.settings)
      ? { settings: value.settings }
      : {}),
    steps: value.steps,
  })
}

/**
 * Accepts a single guide, an array of guides, or a `{ guides: [...] }` bundle.
 * Returns validated guides (may be empty only when throwing).
 */
export function parseGuidesPayload(value) {
  const raw = typeof value === 'string' ? JSON.parse(value) : value
  let candidates = []
  if (Array.isArray(raw)) {
    candidates = raw
  } else if (raw && typeof raw === 'object' && Array.isArray(raw.guides)) {
    candidates = raw.guides
  } else if (raw && typeof raw === 'object' && Array.isArray(raw.steps)) {
    candidates = [raw]
  } else {
    throw new TypeError('Expected a guide JSON, an array of guides, or a { guides: [...] } bundle.')
  }

  const guides = []
  const errors = []
  candidates.forEach((item, index) => {
    try {
      guides.push(validateGuide(item))
    } catch (error) {
      errors.push(`Guide ${index + 1}: ${error.message}`)
    }
  })
  if (!guides.length) {
    throw new TypeError(errors[0] || 'No valid guides found in the file.')
  }
  return { guides, errors }
}

export function exportGuide(guide) {
  return JSON.stringify(validateGuide(guide), null, 2)
}

export function exportGuidesBundle(guides) {
  const list = (Array.isArray(guides) ? guides : []).map((guide) => validateGuide(guide))
  return JSON.stringify({
    version: 1,
    exportedAt: new Date().toISOString(),
    guides: list,
  }, null, 2)
}

export function saveDraft(storageKey, guide) {
  if (!storageKey || typeof localStorage === 'undefined') return
  localStorage.setItem(storageKey, exportGuide(guide))
}

export function loadDraft(storageKey) {
  if (!storageKey || typeof localStorage === 'undefined') return null
  const raw = localStorage.getItem(storageKey)
  return raw ? validateGuide(JSON.parse(raw)) : null
}

function triggerDownload(content, filename, mime = 'application/json') {
  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

export function downloadGuide(guide, filename = 'system-guide.json') {
  triggerDownload(exportGuide(guide), filename)
}

export function downloadGuidesBundle(guides, filename = 'system-guider-guides.json') {
  triggerDownload(exportGuidesBundle(guides), filename)
}

export async function copyGuide(guide) {
  const content = exportGuide(guide)
  if (!navigator.clipboard?.writeText) {
    throw new Error('Clipboard API is unavailable in this browser.')
  }
  await navigator.clipboard.writeText(content)
  return content
}
