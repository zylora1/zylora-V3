# Zylora Studio Engine Architecture

## Migration objective

Preserve SiteDocument V4, FastAPI contracts, publishing, AI, CMS, media, leads, appointments, Sales Assistant, auth, and tenant boundaries while moving the frontend build to Vite and making editor responsibilities explicit.

## Target modules

| Module | Responsibility | Current source to preserve/migrate |
|---|---|---|
| DocumentEngine | validated immutable document operations | `studio/store.ts`, server Pydantic schema |
| SceneGraph | parent/child traversal, stable IDs, grouping, reparenting | reducer helpers |
| ViewportEngine | zoom, fit, pan, device viewport | `App.tsx` viewport state |
| CoordinateEngine | screen/workspace/canvas/node conversion | geometry math and drop math |
| SelectionEngine | selection, multi-select, editing target | CanvasNode/reducer |
| TransformEngine | drag/resize transaction orchestration | `useDrag.ts`, `useResize.ts` |
| SnapGuideEngine | geometry candidates and visual guides | `geometry/snapping.ts` |
| CropEngine | frame-relative pan/zoom bounds and commit | CanvasNode/reducer crop logic |
| HistoryEngine | transaction snapshots and undo/redo | reducer history |
| ClipboardEngine | copy/paste/duplicate with regenerated IDs | reducer clone forest |
| ResponsiveEngine | base + tablet/mobile override resolution | renderer and CanvasNode |
| PersistenceEngine | debounced CAS autosave/retry/offline | `App.tsx` save flow |
| PublishingAdapter | publish request and server renderer contract | existing API + `studio_renderer.py` |
| AIAdapter | structured operations only | existing Studio AI operation API |

## State boundaries

- **DocumentState:** pages, nodes, styles, assets, interactions, responsive overrides, revision.
- **SelectionState:** selected IDs, hovered ID, editing text ID.
- **InteractionState:** drag, resize, crop, reorder, guide preview.
- **ViewportState:** zoom, pan/scroll, device, fit mode.
- **UIState:** rail tool, drawer, toolbar/popover, preview.
- **HistoryState:** transaction snapshots and cursor.
- **PersistenceState:** dirty/saving/saved/conflict/offline and pending document.

Only DocumentState is published. Viewport, selection, interaction, and UI state must never leak into persisted website geometry.

## Coordinate contract

All direct manipulation uses a central conversion contract:

`screen → workspace → canvas → parent-local`, with inverse transforms for overlays. Zoom is applied exactly once. Drop, drag, resize, guides, crop, and hit testing consume the same functions.

## Build migration

- Add Vite as the build authority with `studio/index.tsx` as entry.
- Output a deterministic browser bundle into the existing FastAPI static directory so backend routes remain unchanged.
- Keep a source map for certification builds; production can minify through the same configuration.
- Remove esbuild only after Vite output passes focused and full regressions.

## Template retirement architecture

Template retirement is a two-release data migration, not a filesystem-only deletion. Release one materializes all legacy drafts/publications into valid V4 documents and records evidence. Release two removes the catalogue and source payload after an enforced zero-dependent-site precondition. Rollback uses preserved database snapshots and the prior Railway deployment; no customer row is deleted.

## Compatibility rules

- Existing V4 documents open without mutation.
- Legacy sites are migrated once, transactionally, before sources are removed.
- Historical `origin`/`template_slug` may remain as non-selectable provenance.
- Published rendering remains server-side and SEO-safe.
- AI and CMS operate on stable node IDs; transforms never regenerate IDs.
- All backend writes retain user/site ownership predicates and CSRF requirements.

