import SystemGuider from 'system-guider'
import 'system-guider/style.css'

/**
 * Guides saved under public/guides/{route}/{name}.json
 * Play loads from /guides/index.json (same files on every device).
 *
 * Pass the logged-in account id so it can match editorAccountIds
 * in public/guides/settings.json (required for Record / Panel).
 */
const guider = SystemGuider.init({
  showLauncher: true,
  guidesByUrl: false,
  fileStorage: {
    baseUrl: '/__sg/guides',
    publicBase: '/guides',
    downloadFallback: false,
  },
  storageKey: 'app:guider-draft',
  urlMatch: 'pathname',
  resetBeforePlay: 'none',
  resetBeforePlayDelay: 450,
  // accountId: window.__USER_ID__ ?? null,
})

// After login / on auth change:
// guider.setAccountId(currentUserId)

if (typeof window !== 'undefined') {
  window.systemGuider = guider
}

export default guider
