# Laravel integration (System Guider)

Publishes the PHP save API and guide storage folder into a Laravel app.

## Install (one command)

From your Laravel project (e.g. Smart Attendance):

```powershell
# 1. Build the library (once, or after library changes)
cd C:\Users\PC\connected-devices\system-guider
npm install
npm run build

# 2. Install the npm package
cd C:\path\to\your-laravel-app
npm install "file:C:/Users/PC/connected-devices/system-guider"

# 3. Add this script to package.json (once):
#    "system-guider:install": "node node_modules/system-guider/integrations/laravel/install.js"

# 4. Publish controller, routes, and guides folder
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
