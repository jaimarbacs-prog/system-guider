# Smart Attendance — System Guider setup

**System Guider is a pure JS library.** Laravel handles saving guides to disk.

Guides live as JSON in your app:

```text
smart-attendance-system/
  public/
    guides/
      index.json
      attendance/
        create-timesheet.json
```

- **Play** → reads `/guides/index.json` + JSON files (static, works on all devices)
- **Save** → browser calls `POST /__sg/guides` (Laravel controller)

## Install

```powershell
# 1. Build the library
cd C:\Users\PC\connected-devices\system-guider
npm install
npm run build

# 2. Install into Smart Attendance
cd C:\xampp8.0\htdocs\smart-attendance-system
npm install "file:C:/Users/PC/connected-devices/system-guider"

# 3. Publish controller, routes, and guides folder
npm run system-guider:install
```

Overwrite existing files:

```powershell
npm run system-guider:install -- --force
```

## Frontend

In `resources/js/app.js`:

```js
import './system-guider-init.js'
```

Then:

```powershell
npm run dev
```

## Vite dev middleware (optional)

For save without Laravel during pure Vite dev, use Node middleware — see `vite.guide-storage.example.js`.

Production uses the Laravel `/__sg/guides` route instead.

## Without save API

Set `fileStorage: false` and use **Download JSON** / **Load JSON** from the panel, then place files manually under `public/guides/{route}/`.
