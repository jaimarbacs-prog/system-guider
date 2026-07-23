# Laravel integration

Publishes a PHP save API and guide storage into a Laravel host app. Playback uses static JSON; no Artisan command is required.

## Install (in order)

### 1. Install the package

```bash
cd /path/to/your-laravel-app
npm install github:jaimarbacs-prog/system-guider#main
```

### 2. Register the install script

Add once to `package.json`:

```json
"scripts": {
  "system-guider:install": "node node_modules/system-guider/integrations/laravel/install.js"
}
```

### 3. Publish stubs

```bash
npm run system-guider:install
```

Force overwrite: `npm run system-guider:install -- --force`

### 4. Wire the frontend

Import the published init from your JavaScript entry file (typically `resources/js/app.js` with Laravel + Vite; use your actual entry if different):

```js
import './system-guider-init.js'
```

The publisher writes `resources/js/system-guider-init.js`. Adjust the import path if needed.

Expose the logged-in account id to the guider (required for Record / Panel):

```js
import SystemGuider from 'system-guider'
import 'system-guider/style.css'

const guider = SystemGuider.init({
  showLauncher: true,
  guidesByUrl: false,
  fileStorage: {
    baseUrl: '/__sg/guides',
    publicBase: '/guides',
    downloadFallback: false,
  },
  storageKey: 'app:guider-draft',
  accountId: window.__USER_ID__ ?? null, // from your auth / blade / SPA store
})

// Or after login / auth changes:
// guider.setAccountId(currentUserId)
```

### 5. Allow editor accounts

Install always creates `public/guides/settings.json`. Edit it and list the account ids that may record and manage guides:

```json
{
  "version": 1,
  "resetBeforePlay": "none",
  "reloadOnNavigate": false,
  "resetBeforePlayDelay": 450,
  "editorAccountIds": ["1", "12"]
}
```

| Setting | Meaning |
|---|---|
| `editorAccountIds` | Allow-list for Record / Panel. Empty ⇒ Play only for everyone. |
| Current `accountId` (step 4) | Must match an entry above, or the user stays view-only. |

You can also set this later in the panel under **Global Settings** (save writes the same file). If locked out on first run, hover the launcher orb and type the bypass PIN (default `123456`).

### 6. Run the frontend

```bash
npm run dev
```

### Local library development

```bash
# In the library repo
npm install && npm run build

# In the Laravel app
npm install "file:../system-guider"
npm run system-guider:install
```

(Requires the `system-guider:install` script from step 2.)

## What gets published

From `node_modules/system-guider/integrations/laravel/stubs/`:

| File | Purpose |
|---|---|
| `app/Http/Controllers/SystemGuiderController.php` | Save/delete guides under `public/guides/` |
| `routes/system-guider.php` | `GET` / `POST` / `DELETE` `/__sg/guides` |
| `public/guides/index.json` | Guide index for playback |
| `public/guides/settings.json` | Global settings (incl. `editorAccountIds`) |
| `resources/js/system-guider-init.js` | Frontend init with `fileStorage` |

Patches `routes/web.php`:

```php
// system-guider routes
require __DIR__.'/system-guider.php';
```

## Host auth adapter

The published controller resolves the current user via `App\Library\Helper` (`isAuthenticated` / `authId`). Point that at your app’s auth helper, or replace `currentAccountId()` with your own session/user lookup. The same id must be what you pass to `setAccountId` / `accountId` on the frontend.

Save/delete on `/__sg/guides` is also gated by `editorAccountIds` on the server.

## Flow

- **Record → Stop** → `public/guides/{route}/{name}.json`
- **Play page guide** → `/guides/index.json` + static JSON files

In production, the web server serves those files directly. Vite middleware is not required.
