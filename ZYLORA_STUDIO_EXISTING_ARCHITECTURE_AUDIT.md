# Zylora Studio Existing Architecture Audit

Audit date: 2026-09-07  
Repository: `Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4`  
Branch: `main`  
Baseline commit: `975a09eb57dd65ac1536e40ac47e4c02d06ea659`

## Current Studio surface

- `/studio/{site_id}` is the canonical authenticated editor route in `app/main.py`.
- `/editor/{site_id}` is a 307 compatibility redirect to the canonical Studio route.
- `static/studio.html` is the shell. It mounts the React application from `static/studio.js` and loads `static/studio-ux.css`.
- `studio/index.tsx` is the TypeScript entry point; `studio/App.tsx` owns shell composition, panel state, autosave orchestration, viewport panning, file drops, preview, and publishing.
- The source is React 19 + TypeScript. The current build script uses esbuild, not Vite. `scripts/build_studio.js` bundles `studio/index.tsx` to `static/studio.js` with a source map.

## Editor state and document authority

- `studio/store.ts` defines separate persisted and editor-only data in one reducer state: SiteDocument, current page, selection, breakpoint, history, zoom, clipboard, crop mode, and snap guides.
- `app/studio_document.py` is the server authority for SiteDocument schema version 4.
- SiteDocument contains pages, a normalized node map, stable IDs, styles, assets, components, breakpoints, responsive overrides, bindings, interactions, metadata, and revision.
- Pydantic validation rejects cycles, missing children, mismatched parents, duplicate global IDs, invalid component references, malformed breakpoint names, and orphan nodes.
- `app/studio_migration.py` converts legacy rendered HTML/V3 operations into V4 nodes. Existing tag semantics map to section, container, heading/text, image, button, and link nodes.

## Interaction architecture

- `studio/components/CanvasNode.tsx` renders and selects nodes, supports direct text editing, crop mode, drag initiation, resize handles, and nested-node rendering.
- `studio/interactions/useDrag.ts` and `useResize.ts` isolate pointer interactions from React components.
- `studio/geometry/math.ts` performs zoom-correct resize math.
- `studio/geometry/snapping.ts` computes snap candidates and guide output.
- The reducer commits one authoritative document snapshot per completed action; viewport zoom/pan and selection are editor-only state.
- `studio/App.tsx` implements middle-button and Space+drag panning by changing workspace scroll offsets. Panning does not dispatch document mutations.
- Autosave is debounced 700 ms, uses optimistic local state, revision compare-and-swap, a 15-second request timeout, pending-save coalescing, offline retention, and visible state.

## Persistence and concurrency

- `GET /api/sites/{site_id}/studio-migrate` materializes a V4 document for an owned site.
- `POST /api/sites/{site_id}/studio-save` validates the complete V4 document and updates it with an ownership predicate and revision compare-and-swap.
- A stale or concurrent save returns 409 with the authoritative revision.
- Media upload and metadata routes are tenant-scoped under `/api/sites/{site_id}/assets`.

## Publishing

- V4 publishing stores `published_studio_document_json`; public rendering is performed by `app/studio_renderer.py`, never by the React editor.
- The renderer sanitizes CSS values and links, handles responsive overrides, hover/entrance/scroll effects, media references, crop state, CMS bindings, lead forms, appointments, and Sales Assistant markers.
- Public runtime scripts hydrate website-only features after safe server-side HTML rendering.
- Legacy publications without a valid published V4 document still call `render_template_page()` against `template_projects` at request time. This is the decisive migration dependency for catalogue removal.

## AI, CMS, business widgets, and related systems

- `app/studio_ai_operations.py` validates structured AI mutations; Studio documents remain authoritative.
- `studio/components/CMSPanel.tsx` and server CMS routes preserve bindings in nodes rather than injecting database concepts into the canvas.
- Lead forms, appointments, and AI Sales Assistant are typed nodes rendered with public hydration markers.
- Storage and upload implementation live in `app/media.py` and `app/api_editor.py`; the rebuild does not replace their tenant/security contracts.

## Template system boundary

- Public catalogue: `app/template_catalogue.py`, `GET /api/templates`, `/templates`, `static/templates.*`.
- Admin catalogue controls: `/api/admin/templates*` and Super Admin UI handlers.
- Source registry/rendering: `app/templates.py` and 81 directories under `template_projects`.
- Preview/static assets: `/template-assets/{slug}/...` and 81 preview images.
- Legacy rendering/migration/export currently depend on template sources and `BY_SLUG`.
- Instantiated V4 sites do not need catalogue selection, but legacy sites do until their draft and published output are materialized.

## Root architectural conclusions

1. The existing React/TypeScript reducer and SiteDocument V4 are real editor foundations, not an iframe or thin legacy wrapper.
2. The requested Vite requirement is unmet and can be introduced without replacing the backend or document contract.
3. Editor responsibilities are partially separated, but `App.tsx`, reducer logic, and CanvasNode remain too broad for the requested explicit engine boundary.
4. Template deletion is unsafe until every affected persisted site has an independently renderable V4 draft and published snapshot.
5. The safe sequence is a two-release migration: materialize and verify legacy sites first; remove catalogue selection and sources only after production evidence shows zero dependent sites.

