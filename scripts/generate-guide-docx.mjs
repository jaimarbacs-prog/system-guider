/**
 * Generates docs/System-Guider-Library-Guide.docx — professional library documentation for GitHub.
 * Run: npm run docs:docx
 */
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  AlignmentType,
  LevelFormat,
  Header,
  Footer,
  PageNumber,
} from 'docx'
import { writeFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '..', 'docs')
const outFile = join(outDir, 'System-Guider-Library-Guide.docx')

const FONT = 'Calibri'
const MONO = 'Consolas'
const INK = '0F172A'
const MUTED = '475569'
const ACCENT = '1D4ED8'
const CODE_BG = 'F8FAFC'
const HDR_BG = '0F172A'

const thin = { style: BorderStyle.SINGLE, size: 4, color: 'E2E8F0' }
const borders = { top: thin, bottom: thin, left: thin, right: thin }

function cell(text, { header = false, width = 4500, mono = false } = {}) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: header ? { fill: HDR_BG } : undefined,
    margins: { top: 60, bottom: 60, left: 80, right: 80 },
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text: String(text),
            bold: header,
            color: header ? 'F8FAFC' : INK,
            size: mono ? 17 : 19,
            font: mono ? MONO : FONT,
          }),
        ],
      }),
    ],
  })
}

function table(headers, rows, widths) {
  const w = widths || headers.map(() => Math.floor(9360 / headers.length))
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: w,
    rows: [
      new TableRow({
        children: headers.map((h, i) => cell(h, { header: true, width: w[i] })),
      }),
      ...rows.map(
        (row) =>
          new TableRow({
            children: row.map((value, i) =>
              cell(value, {
                width: w[i],
                mono: typeof value === 'string' && (value.includes('/') || value.includes('.') || value.includes('(')),
              }),
            ),
          }),
      ),
    ],
  })
}

const title = (text) =>
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
    children: [new TextRun({ text, bold: true, size: 56, font: FONT, color: INK })],
  })

const subtitle = (text) =>
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 120 },
    children: [new TextRun({ text, size: 22, font: FONT, color: MUTED })],
  })

const meta = (text) =>
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 360 },
    children: [new TextRun({ text, size: 18, font: FONT, color: '64748B', italics: true })],
  })

const h1 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 160 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: 'CBD5E1', space: 8 } },
    children: [new TextRun({ text, bold: true, size: 28, font: FONT, color: INK })],
  })

const h2 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 100 },
    children: [new TextRun({ text, bold: true, size: 24, font: FONT, color: ACCENT })],
  })

const h3 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 80 },
    children: [new TextRun({ text, bold: true, size: 22, font: FONT, color: INK })],
  })

const p = (text, opts = {}) =>
  new Paragraph({
    spacing: { after: 120, line: 276 },
    children: [
      new TextRun({
        text,
        font: FONT,
        size: 21,
        italics: Boolean(opts.italics),
        bold: Boolean(opts.bold),
        color: opts.muted ? MUTED : INK,
      }),
    ],
  })

const note = (text) =>
  new Paragraph({
    spacing: { before: 80, after: 140 },
    shading: { fill: 'EFF6FF' },
    border: {
      left: { style: BorderStyle.SINGLE, size: 24, color: ACCENT, space: 8 },
    },
    indent: { left: 120 },
    children: [new TextRun({ text, font: FONT, size: 20, color: '1E3A8A' })],
  })

const bullet = (text) =>
  new Paragraph({
    numbering: { reference: 'bullets', level: 0 },
    spacing: { after: 56 },
    children: [new TextRun({ text, font: FONT, size: 21, color: INK })],
  })

const numbered = (text) =>
  new Paragraph({
    numbering: { reference: 'steps', level: 0 },
    spacing: { after: 56 },
    children: [new TextRun({ text, font: FONT, size: 21, color: INK })],
  })

const codeLine = (text) =>
  new Paragraph({
    spacing: { before: 0, after: 0 },
    shading: { fill: CODE_BG },
    indent: { left: 120 },
    children: [new TextRun({ text: text.length ? text : ' ', font: MONO, size: 17, color: INK })],
  })

const codeBlock = (src) => {
  const lines = String(src).replace(/\r\n/g, '\n').split('\n')
  return [
    new Paragraph({ spacing: { before: 100 }, children: [] }),
    ...lines.map(codeLine),
    new Paragraph({ spacing: { after: 140 }, children: [] }),
  ]
}

const spacer = () => new Paragraph({ spacing: { after: 80 }, children: [] })

const doc = new Document({
  creator: 'System Guider',
  title: 'System Guider — Library Documentation',
  description: 'Installation, configuration, access control, scoring, and uninstall reference.',
  numbering: {
    config: [
      {
        reference: 'bullets',
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: '•',
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
      {
        reference: 'steps',
        levels: [
          {
            level: 0,
            format: LevelFormat.DECIMAL,
            text: '%1.',
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
    ],
  },
  styles: {
    default: {
      document: {
        styles: [{ id: 'Normal', run: { font: FONT, size: 21 } }],
      },
    },
  },
  sections: [
    {
      properties: {
        page: { margin: { top: 860, right: 860, bottom: 860, left: 860 } },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({ text: 'System Guider  ·  Library Documentation', font: FONT, size: 16, color: '94A3B8' }),
              ],
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'v1.0.0  ·  MIT  ·  Page ', font: FONT, size: 16, color: '94A3B8' }),
                new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: '94A3B8' }),
              ],
            }),
          ],
        }),
      },
      children: [
        title('System Guider'),
        subtitle('Interactive UI guide recording & playback library'),
        meta('Documentation v1.0.0  ·  JavaScript (ESM / UMD)  ·  TypeScript declarations included'),

        // ——— TOC-like overview ———
        h1('1. Introduction'),
        p(
          'System Guider is a framework-agnostic JavaScript library for authoring and replaying interactive product guides. Host applications embed the package, supply runtime context (URL, account identity, navigation), and optionally persist guides as JSON through a small HTTP API.',
        ),
        p('The library owns UI chrome, recording, playback, targeting, and access policy. The host owns authentication, authorization middleware, routing, and static file serving.'),
        h3('Capabilities'),
        bullet('Floating launcher for Play, Record, Panel, and guide search'),
        bullet('Step recording for click / input / manual actions (never stores typed secrets)'),
        bullet('Left manage panel: edit, reorder, preview, import / export'),
        bullet('Optional file storage: static JSON for play, authenticated API for save'),
        bullet('Editor allow-list by account identifier; viewers remain Play-only'),
        bullet('Resilient DOM targeting via match hints and scoring'),

        h1('2. Install into a host project (step-by-step)'),
        p(
          'Use these steps inside the application that will show the floating launcher (for example a Laravel + Vite app). Run commands from that project root — not only from the system-guider folder.',
        ),

        h2('2.1 Prerequisites'),
        numbered('Node.js 18+ installed.'),
        numbered('Host project already has package.json (npm init done).'),
        numbered('You know which install source to use: GitHub, local folder, or npm registry.'),

        h2('2.2 Choose an install source'),
        table(
          ['Source', 'When to use', 'Command (run in HOST project)'],
          [
            ['GitHub', 'Library is on GitHub', 'npm install github:jaimarbacs-prog/system-guider#main'],
            ['GitHub tag', 'Pin a release', 'npm install github:jaimarbacs-prog/system-guider#v1.0.0'],
            ['Local file', 'Developing the library next to the app', 'npm install "file:../system-guider"'],
            ['npm registry', 'Package published to npm', 'npm install system-guider'],
          ],
          [1800, 2800, 4760],
        ),
        spacer(),
        note(
          'After install, the package appears under node_modules/system-guider and is listed in the host package.json dependencies.',
        ),

        h2('2.3 Full example — install from GitHub'),
        numbered('Open a terminal.'),
        numbered('Go to your host app folder (the project that uses Vite/Laravel):'),
        ...codeBlock(`cd C:\\path\\to\\your-host-app`),
        numbered('Install System Guider from GitHub:'),
        ...codeBlock(`npm install github:jaimarbacs-prog/system-guider#main`),
        numbered('Confirm it was added:'),
        ...codeBlock(`npm ls system-guider
# or open package.json → dependencies → "system-guider"`),

        h2('2.4 Full example — install from a local folder'),
        numbered('Build the library once (in the library folder):'),
        ...codeBlock(`cd C:\\path\\to\\system-guider
npm install
npm run build`),
        numbered('Install into the host app using a relative file: path:'),
        ...codeBlock(`cd C:\\path\\to\\your-host-app
npm install "file:../system-guider"`),
        note(
          'Use a relative file: path when the library sits next to the host app. After you change the library, run npm run build in system-guider, then reinstall in the host if needed.',
        ),

        h2('2.5 Wire the frontend (required after npm install)'),
        numbered('Create or edit an init module that boots the guider (for example system-guider-init.js next to your JS entry):'),
        ...codeBlock(`import SystemGuider from 'system-guider'
import 'system-guider/style.css'

window.systemGuider = SystemGuider.init({
  showLauncher: true,
  storageKey: 'app:guider-draft',
  fileStorage: {
    baseUrl: '/__sg/guides',
    publicBase: '/guides',
    downloadFallback: false,
  },
})`),
        numbered('Import that file from your JavaScript entry file (the file Vite/Webpack boots — e.g. resources/js/app.js, src/main.js, src/index.js):'),
        ...codeBlock(`import './system-guider-init.js'`),
        numbered('Pass the logged-in account id from your host auth (example):'),
        ...codeBlock(`window.systemGuider.setAccountId(currentUserId)
window.systemGuider.applyAccessPolicy()`),
        numbered('Rebuild frontend assets:'),
        ...codeBlock(`npm run dev
# or for production
npm run build`),

        h2('2.6 Optional — Laravel publisher (save API + public/guides)'),
        p(
          'If the host is Laravel and you want POST/DELETE /__sg/guides plus public/guides scaffolding:',
        ),
        numbered('Add this script once to the host package.json:'),
        ...codeBlock(`"scripts": {
  "system-guider:install": "node node_modules/system-guider/integrations/laravel/install.js"
}`),
        numbered('Publish stubs:'),
        ...codeBlock(`npm run system-guider:install
# overwrite if needed
npm run system-guider:install -- --force`),
        numbered('Ensure routes/web.php requires the published system-guider routes file.'),
        numbered('Run npm run dev again and open the app — the launcher orb should appear.'),

        h2('2.7 Update or remove later'),
        ...codeBlock(`# Update from GitHub main
npm install github:jaimarbacs-prog/system-guider#main

# Uninstall from the host project
npm uninstall system-guider`),

        h1('3. Quick start snippets'),
        h2('3.1 ESM (after npm install)'),
        ...codeBlock(`import SystemGuider from 'system-guider'
import 'system-guider/style.css'

const guider = SystemGuider.init({
  showLauncher: true,
  storageKey: 'app:guider-draft',
  fileStorage: {
    baseUrl: '/__sg/guides',
    publicBase: '/guides',
  },
})`),

        h2('3.2 UMD (copy dist files)'),
        ...codeBlock(`<link rel="stylesheet" href="/vendor/system-guider/system-guider.css" />
<script src="/vendor/system-guider/system-guider.umd.js"></script>
<script>
  window.guider = SystemGuider.init({ showLauncher: true })
</script>`),

        h2('3.3 Operator workflow'),
        numbered('Open the launcher orb.'),
        numbered('Record a flow, then stop and refine steps in the panel.'),
        numbered('Persist the guide (file API or Download JSON).'),
        numbered('End users run Play guides on matching routes.'),

        h1('4. Configuration reference'),
        p('Pass options to SystemGuider.init(options). Selected keys:'),
        spacer(),
        table(
          ['Option', 'Type', 'Description'],
          [
            ['showLauncher', 'boolean', 'Mount floating launcher (default true).'],
            ['accountId', 'string | number | null', 'Current user id for editor allow-list.'],
            ['fileStorage', 'object | false', 'baseUrl + publicBase for save/play.'],
            ['guidesByUrl', 'boolean', 'Use in-memory/local URL map vs file index.'],
            ['urlMatch', "'pathname' | 'full'", 'How the current page key is derived.'],
            ['getUrlKey', '() => string', 'Custom page key (hash routers, etc.).'],
            ['navigate', '(url) => void | Promise', 'Soft navigation for cross-route play.'],
            ['resetBeforePlay', "'reload' | 'none'", 'Hard reload before playback.'],
            ['settings', 'GuiderSettings', 'Initial theme, allow-list, UI tokens.'],
            ['onComplete / onClose', 'callbacks', 'Lifecycle hooks.'],
          ],
          [2400, 2600, 4360],
        ),

        h1('5. Runtime API'),
        ...codeBlock(`const guider = SystemGuider.init(options)

guider.setAccountId(id)       // sync host auth identity
guider.applyAccessPolicy()    // re-evaluate allow-list + hidden URLs
guider.setReadOnly(flag)      // force viewer mode
guider.setLauncherVisible(v)

guider.startRecording()
guider.stopRecording()
guider.load(guide).start()
guider.playPageGuide(guideId?)
guider.next() / prev() / skip() / close()

guider.exportJSON()
guider.downloadJSON(name?)
guider.importGuides(payload)
guider.destroy()`),
        note('Only one active instance is supported. Calling init() again destroys the previous instance.'),

        h1('6. Identity & access policy'),
        h2('6.1 Design'),
        p(
          'System Guider does not authenticate users. The host injects an opaque account identifier. The library compares that identifier to settings.editorAccountIds and toggles Record / Panel visibility accordingly.',
        ),
        table(
          ['Role', 'Condition', 'Launcher'],
          [
            ['Editor', 'accountId ∈ editorAccountIds', 'Play, Record, Panel'],
            ['Viewer', 'not listed, or list empty', 'Play (+ search) only'],
            ['Bypass session', 'orb hover + bypassPin', 'Temporary unlock to edit settings'],
          ],
          [2200, 3600, 3560],
        ),
        spacer(),
        h2('6.2 Host identity adapter'),
        p(
          'Wire whatever identity your stack already exposes (session, JWT claim, Inertia shared props, etc.). Keep the adapter thin and re-run it on client-side navigations.',
        ),
        ...codeBlock(`function syncGuiderIdentity(guider, accountId) {
  guider.setAccountId(accountId ?? null)
  guider.applyAccessPolicy()
}

// Example — call after login and after SPA route changes
syncGuiderIdentity(window.systemGuider, currentUser?.id)`),

        h2('6.3 Persisted settings (settings.json)'),
        table(
          ['Key', 'Behavior'],
          [
            ['editorAccountIds', 'Allow-list for Record/Panel. Empty ⇒ all users are viewers.'],
            ['bypassPin', 'Digits only. Hover orb and type to open settings when locked. Empty disables.'],
            ['showAccountId', 'Show Account ID label on the launcher (default true).'],
            ['hiddenUrls', 'Path prefixes where the launcher is hidden.'],
            ['theme', 'Panel chrome: dark | light.'],
            ['ui.*', 'Playback appearance tokens (colors, opacity, motion).'],
          ],
          [2800, 6560],
        ),

        h1('7. Host authorization (HTTP API)'),
        p(
          'When fileStorage.baseUrl is enabled, the host must expose an HTTP endpoint (default /__sg/guides) for index, save, and delete. Playback of public/guides/*.json can remain static.',
        ),
        h2('7.1 Suggested contract'),
        table(
          ['Method', 'Path', 'Purpose'],
          [
            ['GET', '/__sg/guides', 'Return guide index JSON'],
            ['POST', '/__sg/guides', 'Save guide or settings payload'],
            ['DELETE', '/__sg/guides', 'Remove a guide by id/path'],
          ],
          [1600, 2800, 4960],
        ),
        spacer(),
        h2('7.2 Integrating with existing access middleware'),
        p(
          'Most applications already gate routes through role, module, or permission middleware. System Guider does not register those rules—configure your host so the save API is reachable for the principals you intend.',
        ),
        h3('Pattern A — Authenticated users; editors enforced in library settings'),
        p(
          'Allow any authenticated session to hit the guide API. Restrict Record/Panel with editorAccountIds. Viewers can still play static guide files.',
        ),
        ...codeBlock(`// Pseudocode — allow authenticated traffic to the guide API route name/path
if (routeIs('system-guider.guides') && userIsAuthenticated()) {
  return next()
}`),

        h3('Pattern B — Dedicated permission / module'),
        p(
          'Require an explicit permission (for example guides.manage) before POST/DELETE. Keep GET index public or auth-only as needed. Static /guides/** may stay world-readable for playback.',
        ),
        ...codeBlock(`// Pseudocode
if (routeIs('system-guider.guides') && methodIsWrite()) {
  assertPermission(user, 'guides.manage')
}
return next()`),

        h3('Pattern C — Hide launcher on auth screens'),
        p('Use settings.hiddenUrls (for example /login, /password-reset) so the orb never appears on those paths.'),

        note(
          'Do not hard-code host-specific middleware class names into application guides. Treat authorization as a host adapter around the published route name or path.',
        ),

        h1('8. Scoring (resilient targeting)'),
        p(
          'When a CSS selector breaks (layout or account differences), System Guider uses match hints captured at record time and scores candidate DOM elements to find the best target.',
        ),
        note(
          'data-guider is optional. Guides work without it: the library still records match hints and uses scoring. Adding data-guider is recommended for maximum stability when labels or layout change.',
        ),
        h2('8.1 Hint fields'),
        bullet('dataGuider — strongest when present; add data-guider="…" on important controls (optional)'),
        bullet('id, text / visible label, href, section (sidebar group), name, placeholder, role, tag, type'),
        h2('8.2 Score weights (approximate)'),
        table(
          ['Signal', 'Score impact'],
          [
            ['data-guider exact match', '+100 (mismatch −40)'],
            ['element id exact', '+80'],
            ['href exact / partial', '+45 / +28 / +12 (mismatch −25)'],
            ['visible text exact / word-set', '+50 / +40 (weaker partials lower)'],
            ['section label', '+30 / +12 (mismatch −20)'],
            ['name / role / type / tag', '+25 / +6 / +6 / +4'],
          ],
          [3600, 5760],
        ),
        spacer(),
        h2('8.3 Best practice'),
        p(
          'Default: record without markup changes. Playback uses the CSS selector first; if it fails or is weak, scoring ranks candidates from the recorded hints.',
        ),
        p('Optional — prefer stable hooks on critical controls:'),
        ...codeBlock(`<!-- Prefer stable hooks (optional) -->
<button data-guider="save-timesheet">Save</button>
<input data-guider="timesheet-date" type="date" />`),
        p('Resolution order: CSS selector → scored candidates from match hints (data-guider ranks highest when present).'),

        h1('9. File layout'),
        ...codeBlock(`public/guides/
  index.json
  settings.json
  {route-segment}/
    {guide-slug}.json`),
        p('Play reads public JSON. Save writes through the host API into the same tree.'),

        h1('10. Uninstall from a host project'),
        ...codeBlock(`cd C:\\path\\to\\your-host-app
npm uninstall system-guider`),
        numbered('Remove the frontend import / SystemGuider.init call.'),
        numbered('Remove published routes and controller if the Laravel helper was used.'),
        numbered('Drop guide API entries from host authorization rules.'),
        numbered('Optionally delete public/guides/ if guides are no longer needed.'),
        numbered('Rebuild host assets (npm run build).'),

        h1('11. Publish / push this library to GitHub (author tutorial)'),
        p(
          'These steps are for the library folder (system-guider), when YOU are uploading the package to GitHub so other projects can npm install it.',
        ),
        h2('11.1 Create an empty repo on GitHub'),
        numbered('Open https://github.com/new'),
        numbered('Repository name: system-guider'),
        numbered('Description (optional): Record and replay interactive UI guides.'),
        numbered('Choose Public.'),
        numbered('Leave README / .gitignore / license OFF if the project already has those files locally.'),
        numbered('Click Create repository.'),

        h2('11.2 First-time push from your PC'),
        numbered('Open Command Prompt or PowerShell.'),
        numbered('Go to the library folder:'),
        ...codeBlock(`cd C:\\path\\to\\system-guider`),
        numbered('Build before push (so dist/ is ready for consumers):'),
        ...codeBlock(`npm install
npm run build`),
        numbered('Initialize git (skip if already done):'),
        ...codeBlock(`git init
git branch -M main`),
        numbered('If a nested empty clone folder exists (system-guider\\system-guider), remove it first:'),
        ...codeBlock(`rmdir /s /q system-guider`),
        numbered('Stage and commit (IMPORTANT — do this before push):'),
        ...codeBlock(`git add .
git status
git commit -m "Initial commit: System Guider library"`),
        numbered('Add the GitHub remote (use your username/repo):'),
        ...codeBlock(`git remote add origin https://github.com/jaimarbacs-prog/system-guider.git
# If remote already exists:
# git remote set-url origin https://github.com/jaimarbacs-prog/system-guider.git`),
        numbered('Push:'),
        ...codeBlock(`git push -u origin main`),
        note(
          'Error "src refspec main does not match any" means there is no commit yet. Run git add . and git commit first, then push again. Error "system-guider/ does not have a commit checked out" means a nested empty clone folder exists — delete it, then git add again.',
        ),

        h2('11.3 Later updates (you push changes)'),
        ...codeBlock(`cd C:\\path\\to\\system-guider
npm run build
git add .
git commit -m "Describe your change"
git push`),

        h2('11.4 Optional version tag'),
        ...codeBlock(`git tag v1.0.0
git push origin v1.0.0

# Hosts can then pin:
# npm install github:jaimarbacs-prog/system-guider#v1.0.0`),

        h1('12. Security notes'),
        bullet('Password inputs and [data-guider-ignore] are excluded from recording.'),
        bullet('Guide JSON never includes typed field values.'),
        bullet('Loaded JSON is validated before playback.'),
        bullet('Not supported in v1: iframes, cross-origin documents, multi-tab sync, deep shadow DOM.'),

        h1('13. Guide schema (excerpt)'),
        ...codeBlock(`{
  "id": "save-timesheet",
  "title": "Save timesheet",
  "version": 1,
  "url": "/attendance",
  "steps": [
    {
      "id": "pick-date",
      "selector": "[data-guider=\\"timesheet-date\\"]",
      "match": {
        "dataGuider": "timesheet-date",
        "tag": "input",
        "type": "date"
      },
      "action": "input",
      "title": "Choose the date",
      "description": "Select the timesheet date.",
      "waitFor": { "type": "input", "required": true }
    }
  ]
}`),
        p('Step actions: click | input | manual.', { muted: true }),
        spacer(),
        p('System Guider is released under the MIT License.', { italics: true, muted: true }),
      ],
    },
  ],
})

mkdirSync(outDir, { recursive: true })
const buffer = await Packer.toBuffer(doc)

function tryWrite(path) {
  try {
    writeFileSync(path, buffer)
    console.log(`Wrote ${path} (${buffer.length} bytes)`)
    return true
  } catch (error) {
    if (error && error.code === 'EBUSY') {
      console.warn(`Skipped ${path} (file is open/locked). Close Word and re-run npm run docs:docx`)
      return false
    }
    throw error
  }
}

if (!tryWrite(outFile)) {
  const fallback = join(outDir, `System-Guider-Library-Guide-${Date.now()}.docx`)
  writeFileSync(fallback, buffer)
  console.log(`Wrote fallback ${fallback} (${buffer.length} bytes)`)
}
