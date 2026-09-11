# Frontend architecture

## Runtime shape

Zylora uses the existing FastAPI application as the route and document boundary. Public pages are server-rendered HTML assembled by `app/public_seo.py` or existing static shells. The authenticated dashboard, authentication pages and SUPER_ADMIN shell are static assets served by FastAPI. Studio is the only Vite/React editor bundle and is loaded by the canonical `/studio/{site_id}` route.

```text
request
  -> FastAPI route/auth/ownership boundary
  -> server-rendered public page or static application shell
  -> existing /api/* session, billing, site, editor, CMS, CRM and widget APIs
  -> Studio reducer/document engine or application-local panel state
```

## Public surface

`static/public-theme.css` and `static/public-redesign.css` provide the public light system. Product, solution, information and help pages are generated from typed route registries and include canonical metadata, JSON-LD, semantic headings and internal links. Marketing visitors do not receive `studio.js` from the public route handlers.

## Studio surface

`studio/App.tsx` owns the editor shell and panels. `studio/store.ts` owns the document reducer and selection state. `studio/engine/` supplies command envelopes, coordinate transforms, viewport math and transient gesture helpers. `studio/geometry/` supplies transform, alignment and snapping calculations. `studio/interactions/` keeps pointer gestures transient until the gesture boundary. `studio/persistence/useAutosave.ts` connects command boundaries to the existing save/CAS path.

## Persistence boundary

The browser is not the production document store. The server document and `studio_revision` remain authoritative. The editor may retain a recovery buffer for conflict recovery, but it does not silently overwrite an authoritative server revision.

## Build and delivery

The Studio bundle is produced by `npm.cmd run build:studio` with `vite.studio.config.mjs` and emitted to `static/studio.js`. The current executed build transformed 39 modules and emitted 326.88 kB / 98.99 kB gzip. Public pages continue to use the server route plus static CSS and do not share the Studio bundle by default.
