# Final Railway authenticated browser evidence

Deployment SHA: `aab18bd5e786c8e2273fe60a7128bff075678576`
Deployment ID: `589e3ca8-44f9-4e9f-a3f5-cb89773a9e6a` (SUCCESS)
URL: `https://zylora-api-production.up.railway.app`

Controlled Super Admin login used Railway-configured credentials in memory only. The flow exercised `/dashboard` → same-origin `/super-admin` → `/studio/cef9e842-727d-4372-90cc-7fa33303ac51`, Back, Forward, and refresh.

| Engine | Checks | Console/page/request errors | Result |
|---|---:|---:|---|
| Chromium | 6 route/history checks | 0 | PASS |
| Firefox | 6 route/history checks | 0 | PASS |
| WebKit | 6 route/history checks | 0 | PASS |

All engines observed HTTP 200 for the portal and Studio. Chromium additionally verified logout HTTP 200 followed by `/api/auth/me` HTTP 401.
