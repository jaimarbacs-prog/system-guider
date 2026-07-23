const HIGHLIGHT_MOTIONS = new Set(['none', 'pulse', 'wobble', 'fade'])

export const defaultUiSettings = () => ({
  animations: true,
  highlightMotion: 'pulse',
  spotlightFade: true,
  animatedCursor: false,
  tipBg: '#0f1b33',
  tipText: '#f8fafc',
  skipBg: '#2563eb',
  skipText: '#ffffff',
  spotlightColor: '#3b82f6',
  overlayOpacity: 0.58,
  transitionMs: 220,
})

export const defaultGuiderSettings = () => ({
  /** Full page reload before play (legacy). */
  resetBeforePlay: 'none',
  /** When opening a guide on another route, hard-reload instead of soft navigate. */
  reloadOnNavigate: false,
  resetBeforePlayDelay: 450,
  /** Panel chrome theme: dark | light */
  theme: 'dark',
  /**
   * Account IDs allowed to record / manage guides.
   * Empty = view-only for everyone (Play only). Must list IDs to allow Record/Panel.
   */
  editorAccountIds: [],
  /**
   * While hovering the launcher orb, typing this PIN opens the settings panel
   * even when the account is not in editorAccountIds. Empty = disabled.
   */
  bypassPin: '123456',
  /** Show “Account ID: …” under the launcher search bar. */
  showAccountId: true,
  /**
   * Pathname prefixes/paths where the floating toolbar is hidden.
   * Examples: /login, /time-log
   */
  hiddenUrls: ['/login'],
  ui: defaultUiSettings(),
})

/** Normalize a free-text list of account ids (comma / newline / space separated). */
export function normalizeAccountIdList(value) {
  if (Array.isArray(value)) {
    return [...new Set(value.map((id) => String(id).trim()).filter(Boolean))]
  }
  if (value == null || value === '') return []
  return [...new Set(
    String(value)
      .split(/[\s,;]+/)
      .map((id) => id.trim())
      .filter(Boolean),
  )]
}

/** Normalize hidden URL path list. */
export function normalizeHiddenUrlList(value) {
  if (Array.isArray(value)) {
    return [...new Set(value.map((url) => normalizeHiddenUrl(url)).filter(Boolean))]
  }
  if (value == null || value === '') return []
  return [...new Set(
    String(value)
      .split(/[\n,;]+/)
      .map((url) => normalizeHiddenUrl(url))
      .filter(Boolean),
  )]
}

function normalizeHiddenUrl(value) {
  let path = String(value || '').trim()
  if (!path) return ''
  try {
    if (/^https?:\/\//i.test(path)) path = new URL(path).pathname
  } catch {
    // keep raw
  }
  path = path.split('?')[0].split('#')[0]
  if (!path.startsWith('/')) path = `/${path}`
  if (path.length > 1) path = path.replace(/\/+$/, '')
  return path.toLowerCase()
}

/** True when current pathname should hide the guider toolbar. */
export function isUrlHiddenForGuider(pathname, hiddenUrls = []) {
  const current = normalizeHiddenUrl(pathname || '/')
  const list = normalizeHiddenUrlList(hiddenUrls)
  if (!list.length) return false
  return list.some((rule) => {
    if (rule.endsWith('*')) {
      const prefix = rule.slice(0, -1)
      return current === prefix.replace(/\/+$/, '') || current.startsWith(prefix)
    }
    return current === rule || current.startsWith(`${rule}/`)
  })
}

/** True when account may record/manage. Must be listed — empty allow-list = view-only. */
export function canAccountManageGuides(accountId, editorAccountIds = []) {
  const allowed = normalizeAccountIdList(editorAccountIds)
  if (!allowed.length) return false
  if (accountId == null || accountId === '') return false
  const id = String(accountId).trim()
  return allowed.includes(id)
}

/** Digits-only bypass PIN (max 12). Empty string disables the shortcut. */
export function normalizeBypassPin(value, fallback = '123456') {
  if (value === null || value === undefined) {
    return String(fallback ?? '').replace(/\D/g, '').slice(0, 12)
  }
  const digits = String(value).replace(/\D/g, '').slice(0, 12)
  return digits
}

function normalizeHexColor(value, fallback) {
  const raw = String(value || '').trim()
  if (/^#[0-9a-fA-F]{6}$/.test(raw)) return raw.toLowerCase()
  if (/^#[0-9a-fA-F]{3}$/.test(raw)) {
    const [, a, b, c] = raw
    return `#${a}${a}${b}${b}${c}${c}`.toLowerCase()
  }
  return fallback
}

export function normalizeUiSettings(value = {}) {
  const base = defaultUiSettings()
  if (!value || typeof value !== 'object' || Array.isArray(value)) return base
  const motion = String(value.highlightMotion || base.highlightMotion)
  return {
    animations: value.animations !== false,
    highlightMotion: HIGHLIGHT_MOTIONS.has(motion) ? motion : base.highlightMotion,
    spotlightFade: value.spotlightFade !== false,
    animatedCursor: Boolean(value.animatedCursor),
    tipBg: normalizeHexColor(value.tipBg, base.tipBg),
    tipText: normalizeHexColor(value.tipText, base.tipText),
    skipBg: normalizeHexColor(value.skipBg, base.skipBg),
    skipText: normalizeHexColor(value.skipText, base.skipText),
    spotlightColor: normalizeHexColor(value.spotlightColor, base.spotlightColor),
    overlayOpacity: (() => {
      const n = Number(value.overlayOpacity)
      return Number.isFinite(n) ? Math.min(0.9, Math.max(0, n)) : base.overlayOpacity
    })(),
    transitionMs: (() => {
      const n = Math.round(Number(value.transitionMs))
      return Number.isFinite(n) ? Math.min(1000, Math.max(0, n)) : base.transitionMs
    })(),
  }
}

export function normalizeGuiderSettings(value = {}) {
  const base = defaultGuiderSettings()
  if (!value || typeof value !== 'object' || Array.isArray(value)) return base
  const opacity = Number(value.ui?.overlayOpacity)
  const transition = Number(value.ui?.transitionMs)
  const uiSource = {
    ...(value.ui && typeof value.ui === 'object' ? value.ui : {}),
    overlayOpacity: Number.isFinite(opacity) ? opacity : base.ui.overlayOpacity,
    transitionMs: Number.isFinite(transition) ? transition : base.ui.transitionMs,
  }
  return {
    ...base,
    ...value,
    resetBeforePlay: value.resetBeforePlay === 'reload' ? 'reload' : 'none',
    reloadOnNavigate: Boolean(value.reloadOnNavigate),
    resetBeforePlayDelay: Math.max(0, Number(value.resetBeforePlayDelay) || base.resetBeforePlayDelay),
    theme: String(value.theme || base.theme).toLowerCase() === 'light' ? 'light' : 'dark',
    editorAccountIds: normalizeAccountIdList(
      value.editorAccountIds ?? value.guiderAccounts ?? base.editorAccountIds,
    ),
    bypassPin: normalizeBypassPin(
      Object.prototype.hasOwnProperty.call(value, 'bypassPin')
        ? value.bypassPin
        : base.bypassPin,
      base.bypassPin,
    ),
    showAccountId: Object.prototype.hasOwnProperty.call(value, 'showAccountId')
      ? value.showAccountId !== false
      : base.showAccountId !== false,
    hiddenUrls: normalizeHiddenUrlList(
      value.hiddenUrls ?? value.hiddenRoutes ?? base.hiddenUrls,
    ),
    ui: normalizeUiSettings(uiSource),
  }
}

/** Apply playback appearance CSS variables on documentElement. */
export function applyUiTheme(settings = {}) {
  const normalized = normalizeGuiderSettings(settings)
  const ui = normalized.ui
  const theme = normalized.theme === 'light' ? 'light' : 'dark'
  const root = document.documentElement
  if (!root) return ui
  root.dataset.sgTheme = theme
  root.style.setProperty('--sg-tip-bg', ui.tipBg)
  root.style.setProperty('--sg-tip-text', ui.tipText)
  root.style.setProperty('--sg-skip-bg', ui.skipBg)
  root.style.setProperty('--sg-skip-text', ui.skipText)
  root.style.setProperty('--sg-spotlight', ui.spotlightColor)
  root.style.setProperty('--sg-overlay-opacity', String(ui.overlayOpacity))
  root.style.setProperty('--sg-spotlight-ms', `${ui.transitionMs}ms`)
  root.dataset.sgAnimations = ui.animations ? 'on' : 'off'
  root.dataset.sgHighlightMotion = ui.highlightMotion
  root.dataset.sgSpotlightFade = ui.spotlightFade ? 'on' : 'off'
  return ui
}
