# Laravel integration (System Guider)

Publishes the PHP save API and guide storage folder into a Laravel app.

## Install (one command)

From your Laravel host project:

```powershell
# 1. Install from GitHub
cd C:\path\to\your-laravel-app
npm install github:jaimarbacs-prog/system-guider#main

# 2. Add this script to package.json (once):
#    "system-guider:install": "node node_modules/system-guider/integrations/laravel/install.js"

# 3. Publish controller, routes, and guides folder
npm run system-guider:install
```

### Local library development (optional)

```powershell
# Build the library first
cd C:\path\to\system-guider
npm install
npm run build

# Install into the host via relative/local path
cd C:\path\to\your-laravel-app
npm install "file:../system-guider"
npm run system-guider:install
```

Overwrite existing files:

```powershell
npm run system-guider:install -- --force
```

## What `npm run system-guider:install` does

Publishes from `node_modules/system-guider/integrations/laravel/stubs/`:

| Published file | Purpose |
|---|---|
| `app/Http/Controllers/SystemGuiderController.php` | Save/delete guides to `public/guides/` |
| `routes/system-guider.php` | `GET/POST/DELETE /__sg/guides` |
| `public/guides/index.json` | Guide index for playback |
| `resources/js/system-guider-init.js` | Frontend init with `fileStorage` |

Patches `routes/web.php` to add:

```php
// system-guider routes
require __DIR__.'/system-guider.php';
```

No `php artisan` command is created or required.

## Frontend

In `resources/js/app.js`:

```js
import './system-guider-init.js'
```

Then:

```powershell
npm run dev
```

## Flow

- **Record → Stop Recording** → saves JSON to `public/guides/{route}/{name}.json`
- **Play page guide** → loads from `/guides/index.json` + static JSON files

No Vite middleware required in production — Apache/nginx serves the JSON files directly.
