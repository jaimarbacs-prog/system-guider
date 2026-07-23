import SystemGuider from 'system-guider'
import 'system-guider/style.css'

/**
 * Smart Attendance — guides saved under public/guides/{route}/{name}.json
 * Play loads from /guides/index.json (same files on every device).
 */
SystemGuider.init({
  showLauncher: true,
  guidesByUrl: false,
  fileStorage: {
    baseUrl: '/__sg/guides',
    publicBase: '/guides',
    downloadFallback: false,
  },
  storageKey: 'smart-attendance:guider-draft',
  urlMatch: 'pathname',
  resetBeforePlay: 'reload',
  resetBeforePlayDelay: 450,
})
