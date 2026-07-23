# System Guider

A framework-independent JavaScript library for recording, managing, and replaying interactive UI guides.

## Features

- Record clicks and form-field interactions without storing entered values
- Manage captured steps in a modern left panel
- Edit, remove, drag, reorder, preview, and play from any step
- Smooth target spotlight with input wait conditions
- JSON download, clipboard copy, file load, and optional draft persistence
- ESM and UMD builds with TypeScript declarations

## Install and build

```bash
cd system-guider
npm install
npm run build
```

Run the local demo:

```bash
npm run dev
```

Then open `/demo/index.html`.

## Floating launcher (bottom-right)

When `showLauncher: true` (default), System Guider mounts two modern action buttons:

1. **Guide Panel** — open/close the left recording/manage panel
2. **Play page guide** — play the guide saved for the current page URL

```js
const guider = SystemGuider.init({
  showLauncher: true,
  guidesByUrl: true,
  urlMatch: 'pathname', // or 'full'
  guides: {
    '/schedule': [
      createScheduleGuide,
      manageTemplateGuide,
      branchHistoryGuide,
    ],
    '/attendance': attendanceGuide,
  },
})
```

Guides are keyed by URL pathname by default. A URL can contain one guide or an array of
guides. The Play button starts a single guide directly; with multiple guides it opens a
guide picker. Recording a flow and stopping adds it to the current page. Give each guide
a clear name in Manage mode, then use **Save for page** to update it.

## File storage (host app, JS only)

The library is **100% JavaScript**. Guides are JSON files in your app (`public/guides/`).

| Action | How |
|---|---|
| **Play** | `fetch('/guides/index.json')` — static files, no backend |
| **Save** | `fetch('POST /__sg/guides')` — optional; browser cannot write disk alone |

For local dev, add optional **Node middleware** (not PHP):

```js
// vite.config.js in your Laravel / Vite host app
import { createGuideStorageMiddleware } from 'system-guider/guide-storage'
import { resolve } from 'path'

export default defineConfig({
  configureServer(server) {
    server.middlewares.use(createGuideStorageMiddleware({
      guidesRoot: resolve(__dirname, 'public/guides'),
    }))
  },
})
```

Or set `fileStorage: false` and use Download/Load JSON from the panel.

### Laravel install

From your Laravel host project:

```powershell
npm install github:jaimarbacs-prog/system-guider#main
npm run system-guider:install
```

Add to your Laravel app `package.json` (once):

```json
"system-guider:install": "node node_modules/system-guider/integrations/laravel/install.js"
```

Overwrite existing files: `npm run system-guider:install -- --force`

No `php artisan` command is created — install is 100% via npm.

See [`integrations/laravel/README.md`](integrations/laravel/README.md).

By default, **Play page guide** refreshes the page first (`resetBeforePlay: 'reload'`) so
the guide always starts from a clean onload state (modals closed, base UI ready). After
reload, the selected guide resumes automatically.

```js
SystemGuider.init({
  resetBeforePlay: 'reload', // default — recommended
  // resetBeforePlay: 'none', // play immediately on current UI state
  resetBeforePlayDelay: 450, // wait for SPA mount after reload
})
```

For SPA apps with custom routes:

```js
SystemGuider.init({
  getUrlKey: () => window.location.hash || window.location.pathname,
})
```

## ESM usage

```js
import SystemGuider from 'system-guider'
import 'system-guider/style.css'

const guider = SystemGuider.init({
  storageKey: 'my-app:guide-draft',
  autoAdvanceOnInput: true,
  autoAdvanceDelay: 600,
  onComplete: () => console.log('Guide complete'),
})

guider.load(myGuide).start()
```

## Script-tag usage

Copy the generated files from `dist/` into the host project:

```html
<link rel="stylesheet" href="/vendor/system-guider/system-guider.css">
<script src="/vendor/system-guider/system-guider.umd.js"></script>
<script>
  const guider = SystemGuider.init({ panelPosition: 'left' })
</script>
```

## Integrate with a Laravel host

Guides are saved in the **host app** (`public/guides/`), not inside this library repo.

```powershell
cd your-laravel-app
npm install github:jaimarbacs-prog/system-guider#main
npm run system-guider:install
```

Then add `import './system-guider-init.js'` in `resources/js/app.js`.

See [`integrations/laravel/README.md`](integrations/laravel/README.md).

### Quick init (`resources/js/app.js`)

```js
import './system-guider-init.js'
```

`system-guider-init.js`:

```js
import SystemGuider from 'system-guider'
import 'system-guider/style.css'

SystemGuider.init({
  showLauncher: true,
  guidesByUrl: false,              // play from JSON files, not localStorage
  fileStorage: {
    baseUrl: '/__sg/guides',       // save API
    publicBase: '/guides',         // public/guides/*.json
    downloadFallback: false,
  },
  storageKey: 'app:guider-draft',
})
```

**Save for page** → writes `public/guides/{route}/{name}.json`  
**Play page guide** → loads from `/guides/index.json` + those files (same on all devices)

### 1. Add stable hooks (optional)

Use `data-guider` attributes on important controls. These attributes do not alter the UI:

```html
<button data-guider="mark-attendance-btn">Mark Attendance</button>
<input data-guider="attendance-date" type="date">
<select data-guider="employee-select"></select>
<button data-guider="submit-attendance">Save</button>
```

System Guider chooses selectors in this order:

1. `data-guider`
2. Unique element ID
3. Resilient CSS path

Stable hooks are recommended because generated CSS paths can change when the host UI changes.

### 2. Record a guide

```js
const guider = SystemGuider.init({
  storageKey: 'app:guide-draft',
})

document.querySelector('#train-guide').addEventListener('click', () => {
  guider.startRecording()
})

// The administrator performs the attendance flow and clicks
// Stop Recording in the panel. The guide then enters Manage mode.
```

In Manage mode, edit titles and descriptions, remove unwanted steps, reorder them, preview targets, and download the resulting JSON.

### 3. Ship and play the guide

Save the exported file in the host project, for example:

```text
src/guides/mark-attendance.json
```

Then load it for end users:

```js
import attendanceGuide from './guides/mark-attendance.json'

document.querySelector('#attendance-help').addEventListener('click', () => {
  guider.load(attendanceGuide).start()
})
```

See [`demo/guides/mark-attendance.json`](demo/guides/mark-attendance.json) for a complete example.

## Guide schema

```json
{
  "id": "mark-attendance-flow",
  "title": "Mark Attendance",
  "version": 1,
  "steps": [
    {
      "id": "choose-date",
      "selector": "[data-guider=\"attendance-date\"]",
      "action": "input",
      "title": "Choose the date",
      "description": "Select the attendance date.",
      "waitFor": { "type": "input", "required": true }
    }
  ]
}
```

Supported actions are `click`, `input`, and `manual`. A manual step may omit `selector`.

## Scoring (resilient targeting)

During recording, System Guider stores a CSS selector plus optional **match hints**
(`text`, `href`, `section`, `id`, and similar). During playback, if the primary selector
fails or is weak, candidates are ranked by `scoreElement(match)`.

**`data-guider` is optional.** Guides work without it — scoring uses the other hints.
Add `data-guider="…"` on important controls when you want the most stable targets.

### Hint fields

- `dataGuider` — strongest when present (`data-guider="…"`)
- `id`, `text` / visible label, `href`, `section` (sidebar group)
- `name`, `placeholder`, `ariaLabel`, `role`, `tag`, `type`

### Score weights (approximate)

| Signal | Score impact |
|---|---|
| `data-guider` exact match | **+100** (mismatch **−40**) |
| element `id` exact | **+80** |
| `href` exact / suffix / partial | **+45** / **+28** / **+12** (mismatch **−25**) |
| visible text exact / word-set | **+50** / **+40** (weaker partials lower) |
| section label | **+30** / **+12** (mismatch **−20**) |
| `name` / `role` / `type` / `tag` | **+25** / **+6** / **+6** / **+4** |

Default threshold for accepting a scored match is **40** (`SCORE_THRESHOLD`).

### Best practice

```html
<!-- Prefer stable hooks (optional) -->
<button data-guider="save-timesheet">Save</button>
<input data-guider="timesheet-date" type="date">
```

Resolution order: CSS selector → scored candidates from match hints
(`data-guider` ranks highest when present).

## Public API

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

Options include `overlayOpacity`, `allowClose`, `storageKey`, `zIndex`, `selectorTimeout`,
`autoAdvanceOnInput`, `autoAdvanceDelay`, custom `labels`, and lifecycle callbacks.

Input steps automatically advance after the user provides a non-empty text value. Dropdown
steps advance after any committed option selection, regardless of its value. The default
600 ms delay is debounced so text fields wait until the user pauses typing.

Only one initialized instance is active at a time. Initializing another instance destroys the previous one.

## Security and limitations

- Password fields and `[data-guider-ignore]` elements are not recorded.
- Typed values are never included in guide JSON.
- Loaded guide JSON is validated before use.
- v1 does not target iframes, cross-origin pages, multiple tabs, or deep shadow roots.
- Initialize only in a browser; importing is safe in SSR, but `init()` intentionally throws outside the browser.

## Acceptance walkthrough

1. Start recording in the panel.
2. Select the attendance date and employee, then save.
3. Stop recording and edit the captured steps.
4. Remove and reorder a step; verify numbering.
5. Hover a step to preview its target.
6. Download, reload, and play the guide.
7. Verify input steps block Next until a value is selected.
8. Verify a missing selector shows Skip instead of crashing.

## License

MIT
