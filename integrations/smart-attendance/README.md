# Smart Attendance — System Guider

System Guider is a JavaScript library. This app uses Laravel only to persist guide JSON to disk.

```text
smart-attendance-system/
  public/
    guides/
      index.json
      settings.json
      attendance/
        create-timesheet.json
```

| Action | Behavior |
|---|---|
| Play | Static `/guides/index.json` + JSON files |
| Save | `POST /__sg/guides` (Laravel controller) |

## Install (in order)

**1.** Build the library and install into this app:

```bash
cd /path/to/system-guider
npm install && npm run build

cd /path/to/smart-attendance-system
npm install "file:/path/to/system-guider"
```

**2.** Add to `package.json` (once):

```json
"system-guider:install": "node node_modules/system-guider/integrations/laravel/install.js"
```

**3.** Publish:

```bash
npm run system-guider:install
```

**4.** Import from your JavaScript entry file and pass the logged-in account id:

```js
import './system-guider-init.js'
// guider.setAccountId(currentUserId) — must match editorAccountIds
```

**5.** Edit `public/guides/settings.json` — add editor account ids:

```json
"editorAccountIds": ["1"]
```

**6.** Run the frontend:

```bash
npm run dev
```

## Vite middleware (optional)

For save during pure Vite dev without Laravel, see `vite.guide-storage.example.js`.

Production uses the Laravel `/__sg/guides` route.
