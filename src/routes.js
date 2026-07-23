export function normalizeUrlKey(url = globalThis.location?.href, mode = 'pathname') {
  try {
    const parsed = new URL(url, globalThis.location?.origin || 'http://localhost')
    if (mode === 'full') {
      return `${parsed.pathname}${parsed.search}` || '/'
    }
    return parsed.pathname || '/'
  } catch {
    return '/'
  }
}

export function currentUrlKey(mode = 'pathname') {
  return normalizeUrlKey(globalThis.location?.href, mode)
}

export function getGuideStoreKey(storageKey) {
  return `${storageKey || 'system-guider'}:by-url`
}

export function loadGuideMap(storageKey) {
  if (typeof localStorage === 'undefined') return {}
  try {
    const raw = localStorage.getItem(getGuideStoreKey(storageKey))
    const parsed = raw ? JSON.parse(raw) : {}
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

export function saveGuideMap(storageKey, map) {
  if (typeof localStorage === 'undefined') return
  localStorage.setItem(getGuideStoreKey(storageKey), JSON.stringify(map))
}

function asGuideList(value) {
  if (Array.isArray(value)) return value.filter(Boolean)
  return value ? [value] : []
}

export function saveGuideForUrl(storageKey, urlKey, guide) {
  const map = loadGuideMap(storageKey)
  const guides = asGuideList(map[urlKey])
  const existingIndex = guides.findIndex((item) => item?.id === guide.id)
  if (existingIndex >= 0) guides[existingIndex] = guide
  else guides.push(guide)
  map[urlKey] = guides
  saveGuideMap(storageKey, map)
  return guides
}

export function loadGuidesForUrl(storageKey, urlKey) {
  const map = loadGuideMap(storageKey)
  return asGuideList(map[urlKey])
}

export function loadAllGuides(storageKey) {
  const map = loadGuideMap(storageKey)
  const guides = []
  Object.entries(map).forEach(([url, value]) => {
    asGuideList(value).forEach((guide) => {
      guides.push({ ...guide, url: guide?.url || url })
    })
  })
  return guides
}

export function removeGuideForUrl(storageKey, urlKey, guideId) {
  const map = loadGuideMap(storageKey)
  const guides = asGuideList(map[urlKey]).filter((item) => item?.id !== guideId)
  if (guides.length) map[urlKey] = guides
  else delete map[urlKey]
  saveGuideMap(storageKey, map)
  return guides
}

export function loadGuideForUrl(storageKey, urlKey) {
  return loadGuidesForUrl(storageKey, urlKey)[0] || null
}

export function getPendingPlayKey(storageKey) {
  return `${storageKey || 'system-guider'}:pending-play`
}

export function savePendingPlay(storageKey, payload) {
  if (typeof sessionStorage === 'undefined') return
  sessionStorage.setItem(getPendingPlayKey(storageKey), JSON.stringify(payload))
}

export function peekPendingPlay(storageKey) {
  if (typeof sessionStorage === 'undefined') return null
  const raw = sessionStorage.getItem(getPendingPlayKey(storageKey))
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function consumePendingPlay(storageKey) {
  if (typeof sessionStorage === 'undefined') return null
  const key = getPendingPlayKey(storageKey)
  const raw = sessionStorage.getItem(key)
  sessionStorage.removeItem(key)
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function clearPendingPlay(storageKey) {
  if (typeof sessionStorage === 'undefined') return
  sessionStorage.removeItem(getPendingPlayKey(storageKey))
}
