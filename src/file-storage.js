/**
 * File-based guide storage helpers.
 * Layout (under the app public folder):
 *   public/guides/
 *     index.json
 *     {route}/
 *       {guide-name}.json
 * Example:
 *   public/guides/dashboard/create-profile.json
 *   public/guides/settings/preferences.json
 */

export function slugifySegment(value) {
  const slug = String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug || 'untitled'
}

/** `/settings/profile` → `settings/profile`; `/` → `root` */
export function routeToDir(urlKey) {
  const parts = String(urlKey || '/')
    .split(/[\\/]+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map(slugifySegment)
  return parts.length ? parts.join('/') : 'root'
}

export function guideFileName(guide) {
  const base = slugifySegment(guide?.title || guide?.id || 'guide')
  return `${base}.json`
}

/** Relative path inside public/guides/, e.g. `settings/create-profile.json` */
export function guideRelativePath(guide, urlKey = guide?.url) {
  return `${routeToDir(urlKey)}/${guideFileName(guide)}`
}

export function defaultFileStorageOptions(options = {}) {
  if (options === false) return null
  const config = options === true || options == null ? {} : options
  return {
    baseUrl: config.baseUrl || '/__sg/guides',
    publicBase: config.publicBase || '/guides',
    downloadFallback: config.downloadFallback !== false,
    ...config,
  }
}

async function request(baseUrl, method, body) {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  }
  const xsrf = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]+)/)
  if (xsrf?.[1]) {
    headers['X-XSRF-TOKEN'] = decodeURIComponent(xsrf[1])
  }
  const meta = document.querySelector('meta[name="csrf-token"]')
  if (meta?.content) {
    headers['X-CSRF-TOKEN'] = meta.content
  }

  const response = await fetch(baseUrl, {
    method,
    headers,
    credentials: 'same-origin',
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!response.ok) {
    const text = await response.text().catch(() => '')
    let detail = text
    try {
      const json = JSON.parse(text)
      detail = json.message || json.error || `HTTP ${response.status}`
      if (!String(detail).trim()) detail = `HTTP ${response.status}`
    } catch {
      if (!detail) detail = `HTTP ${response.status}`
    }
    throw new Error(detail)
  }
  const contentType = response.headers.get('content-type') || ''
  if (contentType.includes('application/json')) return response.json()
  return null
}

export async function saveGuideToFileStorage(config, guide, urlKey) {
  const path = guideRelativePath(guide, urlKey)
  try {
    const result = await request(config.baseUrl, 'POST', {
      guide,
      urlKey: urlKey || guide.url || '/',
      path,
    })
    return { ok: true, path: result?.path || path, via: 'api' }
  } catch (error) {
    if (!config.downloadFallback) throw error
    const filename = path.replace(/\//g, '__')
    const blob = new Blob([JSON.stringify(guide, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = filename
    anchor.click()
    URL.revokeObjectURL(url)
    return { ok: true, path, via: 'download', error: error.message }
  }
}

export async function deleteGuideFromFileStorage(config, { guideId, urlKey, path }) {
  try {
    await request(config.baseUrl, 'DELETE', { guideId, urlKey, path })
    return { ok: true }
  } catch {
    return { ok: false }
  }
}

export async function loadFileStorageIndex(config) {
  const url = `${String(config.publicBase || '/guides').replace(/\/$/, '')}/index.json`
  const response = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!response.ok) return { version: 1, guides: [] }
  const data = await response.json()
  return data && typeof data === 'object'
    ? { version: Number(data.version) || 1, guides: Array.isArray(data.guides) ? data.guides : [] }
    : { version: 1, guides: [] }
}

/** True when the host write API (`baseUrl`) answers successfully. */
export async function probeGuideApi(config) {
  if (!config?.baseUrl) return false
  try {
    const response = await fetch(config.baseUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      credentials: 'same-origin',
      cache: 'no-store',
    })
    return response.ok
  } catch {
    return false
  }
}

export async function loadGuidesFromFileStorage(config) {
  const index = await loadFileStorageIndex(config)
  const publicBase = String(config.publicBase || '/guides').replace(/\/$/, '')
  const loaded = []

  for (const entry of index.guides) {
    const path = entry?.path
    if (!path) continue
    try {
      const response = await fetch(`${publicBase}/${path}`, {
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) continue
      const guide = await response.json()
      if (guide && Array.isArray(guide.steps)) {
        loaded.push({
          ...guide,
          url: guide.url || entry.url,
          title: guide.title || entry.title,
          id: guide.id || entry.id,
        })
      }
    } catch {
      // Skip a broken file without hiding other guides.
    }
  }

  return loaded
}

export async function loadSettingsFromFileStorage(config) {
  const publicBase = String(config.publicBase || '/guides').replace(/\/$/, '')
  const response = await fetch(`${publicBase}/settings.json`, {
    headers: { Accept: 'application/json' },
    cache: 'no-store',
  })
  if (!response.ok) return null
  const data = await response.json()
  return data && typeof data === 'object' && !Array.isArray(data) ? data : null
}

export async function saveSettingsToFileStorage(config, settings) {
  const result = await request(config.baseUrl, 'POST', {
    type: 'settings',
    settings,
    path: 'settings.json',
  })
  return {
    ok: true,
    path: result?.path || 'settings.json',
    via: 'api',
    settings: result?.settings && typeof result.settings === 'object' ? result.settings : null,
  }
}

export function groupGuidesByUrl(guides) {
  const map = {}
  for (const guide of guides) {
    const key = guide.url || '/'
    if (!map[key]) map[key] = []
    map[key].push(guide)
  }
  return map
}
