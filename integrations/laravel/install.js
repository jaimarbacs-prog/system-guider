import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join, relative } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

function findLaravelRoot(startDir) {
  let dir = startDir
  for (let i = 0; i < 12; i++) {
    if (existsSync(join(dir, 'artisan'))) {
      return dir
    }
    const parent = dirname(dir)
    if (parent === dir) {
      break
    }
    dir = parent
  }
  return null
}

function relPath(laravelRoot, filePath) {
  return relative(laravelRoot, filePath).replace(/\\/g, '/')
}

function publishFile(from, to, force, laravelRoot) {
  if (!existsSync(from)) {
    console.warn(`  stub missing: ${from}`)
    return
  }

  if (existsSync(to) && !force) {
    console.log(`  skip (exists): ${relPath(laravelRoot, to)}`)
    return
  }

  mkdirSync(dirname(to), { recursive: true })
  copyFileSync(from, to)
  console.log(`  published: ${relPath(laravelRoot, to)}`)
}

function patchWebRoutes(laravelRoot) {
  const webPath = join(laravelRoot, 'routes', 'web.php')

  if (!existsSync(webPath)) {
    console.warn("  routes/web.php not found — add manually: require __DIR__.'/system-guider.php';")
    return
  }

  let content = readFileSync(webPath, 'utf8')
  const marker = '// system-guider routes'
  const requireLine = `    ${marker}\n    require __DIR__.'/system-guider.php';`

  if (content.includes(marker) || content.includes("require __DIR__.'/system-guider.php'")) {
    console.log('  routes/web.php already includes system-guider.php')
    return
  }

  const inlinePattern =
    /\s*Route::match\(\[\s*['"]get['"],\s*['"]post['"],\s*['"]delete['"]\s*\],\s*['"]\/__sg\/guides['"].*?\}\);\s*/s

  if (inlinePattern.test(content)) {
    content = content.replace(inlinePattern, `\n${requireLine}\n`)

    if (!content.includes('SystemGuiderController::class')) {
      content = content.replace(/use App\\Http\\Controllers\\SystemGuiderController;\r?\n/, '')
    }

    writeFileSync(webPath, content)
    console.log('  patched: routes/web.php (replaced inline /__sg/guides route)')
    return
  }

  // Prefer appending before the final closing brace of a Route::middleware group,
  // otherwise append at end of file.
  const groupClose = content.lastIndexOf('});')
  if (groupClose !== -1 && /Route::middleware\s*\(/.test(content)) {
    content =
      content.slice(0, groupClose) +
      `\n${requireLine}\n` +
      content.slice(groupClose)
    writeFileSync(webPath, content)
    console.log('  patched: routes/web.php (added require inside route group)')
    return
  }

  writeFileSync(webPath, content.trimEnd() + `\n\n${requireLine}\n`)
  console.log('  patched: routes/web.php (appended require)')
}

const laravelRoot = findLaravelRoot(process.cwd())
if (!laravelRoot) {
  console.error('Could not find artisan. Run this from your Laravel project root.')
  process.exit(1)
}

const force = process.argv.includes('--force')
const stubs = join(__dirname, 'stubs')

if (!existsSync(stubs)) {
  console.error('system-guider stubs not found. Run: npm install system-guider')
  process.exit(1)
}

console.log('System Guider — Laravel install')
console.log('')
console.log('Publishing System Guider Laravel integration...')

publishFile(
  join(stubs, 'SystemGuiderController.php'),
  join(laravelRoot, 'app', 'Http', 'Controllers', 'SystemGuiderController.php'),
  force,
  laravelRoot
)

publishFile(
  join(stubs, 'routes', 'system-guider.php'),
  join(laravelRoot, 'routes', 'system-guider.php'),
  force,
  laravelRoot
)

publishFile(
  join(stubs, 'public', 'guides', 'index.json'),
  join(laravelRoot, 'public', 'guides', 'index.json'),
  force,
  laravelRoot
)

publishFile(
  join(stubs, 'public', 'guides', 'settings.json'),
  join(laravelRoot, 'public', 'guides', 'settings.json'),
  force,
  laravelRoot
)

publishFile(
  join(stubs, 'resources', 'js', 'system-guider-init.js'),
  join(laravelRoot, 'resources', 'js', 'system-guider-init.js'),
  force,
  laravelRoot
)

patchWebRoutes(laravelRoot)

console.log('')
console.log('System Guider installed.')
console.log('')
console.log('Next steps (in order):')
console.log('  1. Import from your JavaScript entry file:')
console.log("       import './system-guider-init.js'")
console.log('  2. Pass the logged-in user id: guider.setAccountId(currentUserId)')
console.log('  3. Edit public/guides/settings.json → editorAccountIds (e.g. ["1"])')
console.log('  4. Run npm run dev')
console.log('')
console.log('Typical Laravel + Vite entry: resources/js/app.js')
console.log('Empty editorAccountIds = Play only. Bypass PIN (hover orb): default 123456')
console.log('')
