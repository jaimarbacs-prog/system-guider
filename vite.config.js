import { defineConfig } from 'vite'
import { resolve } from 'path'
import { systemGuiderStoragePlugin } from './scripts/file-storage-middleware.js'

export default defineConfig({
  plugins: [systemGuiderStoragePlugin()],
  publicDir: 'public',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'SystemGuider',
      formats: ['es', 'umd'],
      fileName: (format) =>
        format === 'es' ? 'system-guider.es.js' : 'system-guider.umd.js',
    },
    rollupOptions: {
      output: {
        assetFileNames: 'system-guider.[ext]',
      },
    },
    cssCodeSplit: false,
    emptyOutDir: true,
  },
  server: {
    open: '/demo/index.html',
  },
})
