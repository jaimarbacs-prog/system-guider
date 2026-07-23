# System Guider

Framework-independent JavaScript library for recording, editing, and replaying interactive UI guides.

## Features

- Record and replay against your existing UI — no markup changes required
- Captures clicks and form interactions without storing typed values
- Left-side panel for editing, reordering, previewing, and playing steps
- Spotlight overlay with input wait conditions
- Export/import as JSON; optional draft persistence
- ESM and UMD builds with TypeScript declarations

## Installation

```bash
npm install github:jaimarbacs-prog/system-guider#main
```

### Minimal setup (any host)

Import from your app’s JavaScript entry file (the file your bundler boots — e.g. `src/main.js`, `resources/js/app.js`):

```js
import SystemGuider from 'system-guider'
import 'system-guider/style.css'

const guider = SystemGuider.init({ showLauncher: true })

// Pass the logged-in user id from your auth layer
guider.setAccountId(currentUserId)
```

Without file storage, use Download / Load JSON from the panel. For persisted guides, use the Laravel publisher below or your own save API.

### Laravel host

Publishes a PHP save API, `public/guides/`, and a frontend init stub. Do these steps in order.

**1. Install the package** (command above).

**2. Register the install script** in `package.json` (once):

```json
"scripts": {
  "system-guider:install": "node node_modules/system-guider/integrations/laravel/install.js"
}
```

**3. Publish** controller, routes, guides folder, and init stub:

```bash
npm run system-guider:install
```

Force overwrite: `npm run system-guider:install -- --force`

**4. Wire the frontend** — import the published init from your JavaScript entry file:

```js
import './system-guider-init.js'
```

Then pass the logged-in account id (required for Record / Panel):

```js
// After login / on each auth change
window.systemGuider?.setAccountId?.(currentUserId)
// or keep a local reference from SystemGuider.init(...)
```

**5. Allow editors** — the install always creates `public/guides/settings.json`. Add account ids that may record and manage guides:

```json
{
  "version": 1,
  "resetBeforePlay": "none",
  "reloadOnNavigate": false,
  "resetBeforePlayDelay": 450,
  "editorAccountIds": ["1", "12"]
}
```

An empty `editorAccountIds` list means Play-only for everyone. The current user’s id (step 4) must match an entry in this list.

**6. Rebuild frontend assets:**

```bash
npm run dev
```

Full details: [`integrations/laravel/README.md`](integrations/laravel/README.md).

First-time unlock without an allow-list: hover the launcher orb and type the bypass PIN (default `123456`) to open Global Settings and edit the list in the UI.

## Quick start

```js
import SystemGuider from 'system-guider'
import 'system-guider/style.css'

const guider = SystemGuider.init({
  showLauncher: true,
  storageKey: 'app:guider-draft',
  fileStorage: {
    baseUrl: '/__sg/guides',
    publicBase: '/guides',
    downloadFallback: false,
  },
})

// Required for Record / Panel — must match an id in public/guides/settings.json
guider.setAccountId(currentUserId)
```

Or keep init in a separate module and import it from your entry:

```js
import './system-guider-init.js'
```

**Save for page** writes `public/guides/{route}/{name}.json`.  
**Play page guide** loads `/guides/index.json` and those files.

Guides are stored in the **host app**, not in this repository.

### Script tag

After building (or copying from `dist/`):

```html
<link rel="stylesheet" href="/vendor/system-guider/system-guider.css">
<script src="/vendor/system-guider/system-guider.umd.js"></script>
<script>
  SystemGuider.init({ panelPosition: 'left' })
</script>
```

## Local demo

```bash
git clone https://github.com/jaimarbacs-prog/system-guider.git
cd system-guider
npm install
npm run build
npm run dev
```

Open the URL printed by Vite (typically `http://localhost:5173/demo/index.html`).

## Usage

### Floating launcher

With `showLauncher: true` (default), two controls appear:

1. **Guide Panel** — open/close the recording and manage UI
2. **Play page guide** — play the guide for the current URL

```js
SystemGuider.init({
  showLauncher: true,
  guidesByUrl: true,
  urlMatch: 'pathname', // or 'full'
  guides: {
    '/dashboard': onboardingGuide,
    '/settings': [profileGuide, securityGuide],
  },
})
```

Guides are keyed by pathname by default. One guide plays immediately; multiple guides open a picker. After recording, name the guide in Manage mode and use **Save for page**.

### File storage

Guides are plain JSON under `public/guides/`.

| Action | Behavior |
|---|---|
| Play | `GET /guides/index.json` (static; no backend required) |
| Save | `POST /__sg/guides` (optional; browsers cannot write disk alone) |

Vite dev middleware (optional):

```js
// vite.config.js
import { createGuideStorageMiddleware } from 'system-guider/guide-storage'
import { resolve } from 'path'

export default defineConfig({
  configureServer(server) {
    server.middlewares.use(
      createGuideStorageMiddleware({
        guidesRoot: resolve(__dirname, 'public/guides'),
      }),
    )
  },
})
```

Without a save API, set `fileStorage: false` and use Download / Load JSON from the panel.

### Playback reset

By default, play reloads the page first so the UI starts from a clean state:

```js
SystemGuider.init({
  resetBeforePlay: 'reload', // default
  // resetBeforePlay: 'none',
  resetBeforePlayDelay: 450,
})
```

Custom URL key (SPAs / hash routes):

```js
SystemGuider.init({
  getUrlKey: () => window.location.hash || window.location.pathname,
})
```

### Record → edit → ship

1. Start recording from the panel (or `guider.startRecording()`).
2. Perform the flow in your app; stop recording.
3. Edit titles, remove or reorder steps, preview targets on hover.
4. Download JSON or **Save for page**, then play for end users.

```js
const guider = SystemGuider.init({ storageKey: 'app:guide-draft' })

guider.startRecording()
// …user completes the flow…
const guide = guider.stopRecording()

guider.load(guide).start()
```

Example guide: [`demo/guides/mark-attendance.json`](demo/guides/mark-attendance.json).

## Guide schema

```json
{
  "id": "example-flow",
  "title": "Example flow",
  "version": 1,
  "steps": [
    {
      "id": "pick-date",
      "selector": "#date-field",
      "action": "input",
      "title": "Choose a date",
      "description": "Select the date for this record.",
      "waitFor": { "type": "input", "required": true }
    }
  ]
}
```

Actions: `click`, `input`, `manual`. Manual steps may omit `selector`.

## Target scoring

Recording stores a CSS selector plus match hints (`id`, label text, `name`, `href`, section, etc.). On playback, if the primary selector is weak or missing, candidates are ranked and the best match is used.

No HTML changes are required. Optional `data-guider="…"` attributes on critical controls improve stability when the UI changes often.

| Signal | Approx. score |
|---|---|
| `data-guider` exact (optional) | +100 (mismatch −40) |
| element `id` exact | +80 |
| `href` exact / suffix / partial | +45 / +28 / +12 |
| visible text exact / word-set | +50 / +40 |
| section label | +30 / +12 |
| `name` / `role` / `type` / `tag` | +25 / +6 / +6 / +4 |

Default accept threshold: **40**. Resolution: CSS selector → scored candidates (`data-guider` ranks highest when present).

```html
<!-- Optional -->
<button data-guider="save-form">Save</button>
```

## API

```js
const guider = SystemGuider.init(options)

guider.startRecording()
const guide = guider.stopRecording()
guider.load(guide)
guider.updateSteps(steps)
guider.removeStep(stepId)
guider.moveStep(stepId, newIndex)
guider.start()
guider.startFrom(stepIdOrIndex)
guider.next()
guider.prev()
guider.skip()
guider.close()
guider.exportJSON()
guider.downloadJSON(filename)
await guider.copyJSON()
guider.destroy()
```

Common options: `overlayOpacity`, `allowClose`, `storageKey`, `zIndex`, `selectorTimeout`, `autoAdvanceOnInput`, `autoAdvanceDelay`, `labels`, lifecycle callbacks.

Input steps auto-advance after a non-empty value (debounced, default 600 ms). Dropdown steps advance on any committed selection. Only one instance is active; a new `init()` destroys the previous one.

## Security and limitations

- Password fields and `[data-guider-ignore]` are not recorded
- Typed values are never stored in guide JSON
- Loaded JSON is validated before use
- v1 does not support iframes, cross-origin pages, multi-tab sync, or deep shadow roots
- Safe to import under SSR; `init()` throws outside a browser

## Verification checklist

1. Start recording in the panel
2. Complete a short multi-step flow (field, dropdown, submit)
3. Stop recording and edit steps
4. Remove and reorder a step; confirm numbering
5. Hover a step to preview its target
6. Download, reload, and play the guide
7. Confirm input steps block Next until a value is set
8. Confirm a missing selector shows Skip instead of crashing

## Uninstall

```bash
npm uninstall system-guider
```

Then remove:

1. Any `import './system-guider-init.js'` or `SystemGuider.init(...)` from your entry file
2. The `system-guider:install` script from `package.json` (if added)
3. Laravel publisher artifacts (`routes/system-guider.php`, controller) if used
4. Optionally `public/guides/`

Rebuild frontend assets afterward.

## License

MIT
