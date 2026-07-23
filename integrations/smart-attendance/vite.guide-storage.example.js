/**
 * Example: add to Smart Attendance vite.config.js
 *
 * import { createGuideStorageMiddleware } from 'system-guider/guide-storage'
 * import { resolve } from 'path'
 *
 * export default defineConfig({
 *   configureServer(server) {
 *     server.middlewares.use(createGuideStorageMiddleware({
 *       guidesRoot: resolve(__dirname, 'public/guides'),
 *     }))
 *   },
 * })
 */
