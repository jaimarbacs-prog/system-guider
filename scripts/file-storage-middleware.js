import { mkdirSync, writeFileSync, readFileSync, existsSync, unlinkSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, resolve, relative, sep } from 'node:path'

function slugifySegment(value) {
  const slug = String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug || 'untitled'
}

function routeToDir(urlKey) {
  const parts = String(urlKey || '/')
    .split(/[\\/]+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map(slugifySegment)
  return parts.length ? parts.join('/') : 'root'
}

function guideFileName(guide) {
  return `${slugifySegment(guide?.title || guide?.id || 'guide')}.json`
}

function guideRelativePath(guide, urlKey) {
  return `${routeToDir(urlKey || guide?.url)}/${guideFileName(guide)}`.replace(/\\/g, '/')
}

function sendJson(res, status, payload) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(payload))
}

async function readBody(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const raw = Buffer.concat(chunks).toString('utf8')
  return raw ? JSON.parse(raw) : {}
}

/**
 * Optional Node middleware (dev server / Express / Connect).
 * Writes guides to `{hostProject}/public/guides/{route}/{name}.json`
 *
 * The browser library stays 100% JS — this is only for saving files during dev.
 */
export function createGuideStorageMiddleware({
  guidesRoot,
  apiPath = '/__sg/guides',
} = {}) {
  if (!guidesRoot) {
    throw new Error('createGuideStorageMiddleware requires guidesRoot (e.g. path/to/public/guides)')
  }

  const root = resolve(guidesRoot)
  mkdirSync(root, { recursive: true })

  const ensureIndex = () => {
    const indexPath = join(root, 'index.json')
    if (!existsSync(indexPath)) {
      writeFileSync(indexPath, `${JSON.stringify({ version: 1, guides: [] }, null, 2)}\n`, 'utf8')
    }
  }

  const readIndex = () => {
    ensureIndex()
    try {
      return JSON.parse(readFileSync(join(root, 'index.json'), 'utf8'))
    } catch {
      return { version: 1, guides: [] }
    }
  }

  const writeIndex = (index) => {
    ensureIndex()
    writeFileSync(
      join(root, 'index.json'),
      `${JSON.stringify({ version: 1, guides: index.guides || [] }, null, 2)}\n`,
      'utf8',
    )
  }

  const safeResolve = (relPath) => {
    const normalized = String(relPath || '').replace(/\\/g, '/').replace(/^\/+/, '')
    const absolute = resolve(root, normalized)
    const relativePath = relative(root, absolute)
    if (relativePath.startsWith('..') || relativePath.includes(`..${sep}`)) {
      throw new Error('Invalid guide path')
    }
    return { absolute, relativePath: relativePath.replace(/\\/g, '/') }
  }

  const upsertIndexEntry = (guide, urlKey, path) => {
    const index = readIndex()
    const guides = Array.isArray(index.guides) ? [...index.guides] : []
    const entry = {
      id: guide.id,
      title: guide.title,
      url: urlKey || guide.url || '/',
      path,
      updatedAt: new Date().toISOString(),
    }
    const existing = guides.findIndex((item) => item.id === guide.id || item.path === path)
    if (existing >= 0) guides[existing] = entry
    else guides.push(entry)
    writeIndex({ version: 1, guides })
    return entry
  }

  const removeIndexEntry = ({ guideId, path }) => {
    const index = readIndex()
    const guides = (index.guides || []).filter((item) => {
      if (guideId && item.id === guideId) return false
      if (path && item.path === path) return false
      return true
    })
    writeIndex({ version: 1, guides })
  }

  ensureIndex()

  return async (req, res, next) => {
    const url = req.url?.split('?')[0] || ''
    if (url !== apiPath) return next()

    try {
      if (req.method === 'POST') {
        const body = await readBody(req)
        const guide = body.guide
        if (!guide || !Array.isArray(guide.steps)) {
          sendJson(res, 400, { error: 'guide with steps is required' })
          return
        }
        const urlKey = body.urlKey || guide.url || '/'
        const path = body.path || guideRelativePath(guide, urlKey)
        const { absolute, relativePath } = safeResolve(path)
        mkdirSync(dirname(absolute), { recursive: true })
        writeFileSync(absolute, `${JSON.stringify(guide, null, 2)}\n`, 'utf8')
        const entry = upsertIndexEntry(guide, urlKey, relativePath)
        sendJson(res, 200, { ok: true, path: relativePath, entry })
        return
      }

      if (req.method === 'DELETE') {
        const body = await readBody(req)
        const index = readIndex()
        const entry = (index.guides || []).find((item) => (
          (body.guideId && item.id === body.guideId)
          || (body.path && item.path === body.path)
        ))
        const path = body.path || entry?.path
        if (path) {
          const { absolute } = safeResolve(path)
          if (existsSync(absolute)) unlinkSync(absolute)
        }
        removeIndexEntry({ guideId: body.guideId || entry?.id, path })
        sendJson(res, 200, { ok: true })
        return
      }

      if (req.method === 'GET') {
        sendJson(res, 200, readIndex())
        return
      }

      sendJson(res, 405, { error: 'Method not allowed' })
    } catch (error) {
      sendJson(res, 500, { error: error.message || 'Guide storage error' })
    }
  }
}

/** Vite dev plugin for this repo's demo (optional). */
export function systemGuiderStoragePlugin({ guidesRoot } = {}) {
  const middleware = createGuideStorageMiddleware({
    guidesRoot: guidesRoot || resolve(process.cwd(), 'public', 'guides'),
  })

  return {
    name: 'system-guider-guides',
    configureServer(server) {
      server.middlewares.use(middleware)
    },
  }
}

export function listGuideFiles(guidesRoot) {
  const root = resolve(guidesRoot)
  mkdirSync(root, { recursive: true })
  const files = []
  const walk = (dir, prefix = '') => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name)
      const rel = prefix ? `${prefix}/${name}` : name
      if (statSync(full).isDirectory()) walk(full, rel)
      else if (name.endsWith('.json') && name !== 'index.json') files.push(rel.replace(/\\/g, '/'))
    }
  }
  walk(root)
  return files
}
