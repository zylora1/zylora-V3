# Studio architecture and M3E reference boundary

## Position

M3E Canvas was used as an interaction reference for camera/world transforms, hierarchy, touch gestures, pointer capture and history patterns. It is not the persistence model and is not transplanted into the Zylora application. No M3E runtime dependency or reference asset is required by the public marketing routes.

## Current Zylora engine

- `studio/store.ts`: typed v5-compatible document state, selection, node mutations, responsive inheritance, lock/visibility and reducer transaction boundary.
- `studio/engine/commands.ts`: command identity, labels, source metadata, merge keys and atomic dispatch envelope.
- `studio/engine/coordinates.ts`: screen, canvas and artboard conversion in one transform vocabulary.
- `studio/engine/viewport.ts`: zoom, fit and viewport helpers.
- `studio/engine/transient.ts`: transient pointer/rAF state and snap-line handling.
- `studio/engine/gestures.ts`: pinch and gesture calculations.
- `studio/geometry/`: rotation-aware transforms, alignment/distribution and smart snapping.
- `studio/interactions/`: drag, resize and rotation gesture boundaries.
- `studio/components/`: canvas node, selection overlay, Layers, Pages, Assets, Add, AI, CMS and Inspector panels.

## Document authority

`app/studio_document.py` preserves schema v5 and adds `engineVersion: 2`, canonical parent-local geometry, responsive overrides, locking, validation and migration diagnostics. Legacy CSS geometry is mirrored for rollback compatibility. `app/studio_renderer.py` resolves desktop → tablet → mobile geometry and projects it into parent-relative published CSS.

## Gesture contract

Pointer movement updates transient state. A completed drag/resize/rotation produces one command and one history boundary. Inspector, keyboard, clipboard and AI paths dispatch through the same command envelope. The server save is debounced during ordinary editing and flushed at command/page/navigation/publish boundaries through the existing CAS revision protocol.

## Product boundary

The public route handler does not import the Studio bundle. The canonical editor remains `/studio/{site_id}`; `/editor/{site_id}` redirects to it for compatibility, and `/studio-v2` is intentionally not introduced.
