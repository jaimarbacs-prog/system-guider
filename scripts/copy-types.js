import { copyFileSync, mkdirSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
mkdirSync(resolve(root, 'dist'), { recursive: true })
copyFileSync(resolve(root, 'src/types.d.ts'), resolve(root, 'dist/types.d.ts'))
console.log('Copied types.d.ts to dist/')
