import { defineConfig } from 'vite'
import { resolve } from 'path'

/**
 * Static demo build for GitHub Pages (and local preview).
 * Relative base so assets work at /system-guider/ without hardcoding the repo name.
 */
export default defineConfig({
  root: resolve(__dirname, 'demo'),
  base: './',
  publicDir: false,
  build: {
    outDir: resolve(__dirname, 'demo-dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'demo/index.html'),
    },
  },
  server: {
    open: '/',
  },
  preview: {
    open: '/',
  },
})
