# Zylora Studio zero-trust audit

Baseline inspected: `975a09eb57dd65ac1536e40ac47e4c02d06ea659` on `main`.

## File-by-file implementation inventory

Counts are `added/deleted` against the baseline. Generated bundles are listed separately from their TypeScript source.

| File | +/- | Purpose and reference interaction |
|---|---:|---|
| `package.json` | 3/2 | Replaces the retired ad-hoc build with the Vite Studio production build. |
| `package-lock.json` | 777/35 | Locks React, TypeScript and Vite build dependencies. |
| `vite.studio.config.mjs` | 16/0 | New deterministic Vite entry/output configuration. |
| `scripts/build_studio.js` | 0/10 | Deleted retired build path. |
| `studio/App.tsx` | 35/21 | Reference top bar, nine-item rail, collapsible drawer, canvas workspace, pan, zoom, drop coordinate conversion, autosave, preview/publish and keyboard commands. |
| `studio/store.ts` | 3/1 | 58% reference zoom plus authoritative nudge/action state. Existing reducer remains the document/history authority. |
| `studio/engine/coordinates.ts` | 24/0 | New screen/world/canvas coordinate conversion and DOM rectangle normalization. |
| `studio/engine/gestures.ts` | 4/0 | New six-pixel intentional-drag threshold. |
| `studio/engine/viewport.ts` | 7/0 | New 25%-200% zoom clamp and Fit calculation. |
| `studio/engine/index.ts` | 3/0 | Public engine exports. |
| `studio/interactions/useDrag.ts` | 2/1 | Zoom-aware drag deltas and snap threshold. |
| `studio/components/CanvasNode.tsx` | 10/10 | Click/select then deliberate drag, explicit resize handles, direct text edit, overlap, image-frame crop/reposition/zoom and one commit at gesture completion. |
| `studio/components/AddPanel.tsx` | 46/30 | Reference Templates/Elements/Text category drawers; every visible tile inserts or drags a structured SiteDocument node. |
| `studio/components/AssetsPanel.tsx` | 4/3 | Reference Uploads drawer, working upload/filter/insert flow and camera recording path. |
| `studio/components/CMSPanel.tsx` | 1/1 | Removes internal IDs and developer wording from normal UI. |
| `studio/components/LayersPanel.tsx` | 9/3 | Human names, structural flattening, selection sync and section drag reordering. |
| `studio/components/PageNavigator.tsx` | 10/20 | Reference Add-section bar, page thumbnail strip and bottom zoom control. |
| `static/studio.html` | 15/3 | Minimal production mount document and stylesheet loading. |
| `static/studio-ux.css` | 119/3 | Measured 1535px reference geometry, gradient header, rail/drawer/panel states, category visuals, canvas and mobile behavior. |
| `static/studio.js` | 10/22988 | Vite production bundle from the TypeScript source. |
| `static/studio.js.map` | 1/7 | Vite source map. |
| `app/main.py` | 4/1 | Prevents duplicate Studio stylesheet injection while retaining session restoration. |
| `scripts/studio_v4_e2e.py` | 27/11 | Real pointer/keyboard/upload/crop/persistence workflow; expanded to 28 checks. |
| `scripts/studio_final_interactions_e2e.py` | 60/37 | Pan, section order, viewport matrix and reference-size screenshots. |
| `scripts/studio_mobile_ux_e2e.py` | 13/10 | Mobile bottom navigation, sheet, insertion, zoom and overflow checks. |
| `scripts/studio_video_parity.py` | 66/0 | Same-size pixel comparison, edge/overlay artifacts and exact landmark comparison. |
| `tests/test_studio_ux_contract.py` | 53/9 | Vite, reference rail, semantic primitives, labels, coordinate and shell contracts. |
| `app/studio_legacy_materializer.py` | 89/0 | Backward-compatible legacy-to-SiteDocument materializer; no automatic destructive migration. |
| `scripts/materialize_legacy_sites.py` | 26/0 | Explicit dry-run/apply migration command. |
| `tests/test_template_retirement_materializer.py` | 40/0 | Stable identity and validated draft/public snapshot coverage. |
| `ZYLORA_STUDIO_ZERO_TRUST_AUDIT.md` | created | This file-level, engine and evidence audit. |
| `ZYLORA_STUDIO_VIDEO_PARITY_REPORT.md` | created | Measured still/reference comparison. |
| `ZYLORA_STUDIO_TEST_REPORT.md` | created | Exact automated and browser results. |
| `ZYLORA_STUDIO_MIGRATION_REPORT.md` | created | Build and compatibility migration record. |
| `ZYLORA_STUDIO_PRODUCTION_CERTIFICATION.md` | created | Release verdict and pending deployed-SHA gate. |

Evidence files created: `recording-aligned-desktop.png`, `recording-aligned-layers.png`, `recording-aligned-mobile.png`, `reference-elements-1535.png`, `reference-initial-1535.png`, `test-results.txt`, and under `video-parity/`: `difference-2x.png`, `implementation-app.png`, `implementation-edges.png`, `metrics.json`, `overlay-50.png`, `reference-app.png`, `reference-edges.png`. Binary images have no meaningful text addition/deletion count; `test-results.txt` is 14/0 and `metrics.json` is 74/0.

No intended Studio source file was deleted except the retired `scripts/build_studio.js` build script.

## Editor engine proof

| Capability | File / function or component | Mechanism | Verification |
|---|---|---|---|
| Document state | `studio/store.ts` / `StudioState`, `studioReducer` | SiteDocument is the single editing state; reducer operations clone and commit documents. | Full pytest; autosave/reload browser check. |
| Geometry | `studio/engine/coordinates.ts`, `studio/geometry/math.ts` | Normalizes DOM rectangles and converts pointer deltas through zoom. | Pointer drag/resize browser checks and viewport-coordinate contract tests. |
| Selection | `CanvasNode.select`, `SELECT_NODE` | Click selects; Shift-click builds a unique ID set; blank workspace/Escape clears. | Single-selection browser check; multi-selection source/reducer inspected, not separately browser-certified in this pass. |
| Multi-selection/group | `CanvasNode.select`, `GROUP_SELECTED`, `UNGROUP_SELECTED` | Shift selection plus authoritative wrapper creation/removal with stable child IDs. | Implemented; not separately exercised in the 28-step browser journey. |
| Drag | `CanvasNode.pointerDown`, `useDrag`, `intentionalDrag` | Unselected gesture selects only; selected node must cross 6px threshold before capture/mutation. | Chromium/Firefox/WebKit pointer drag; unselected scroll invariant. |
| Resize | `useResize`, `CanvasNode.renderHandle` | Eight explicit handles update live geometry, then commit once. | Text and image pointer-resize checks in all three engines. |
| Snapping/guides | `computeSnapping`, `useDrag.calculate`, `App` `.snap-guide` | Parent/peer edge and center snapping with zoom-scaled threshold. | Transient guide observed during a real button drag in all three engines. |
| Overlap | free-position styles plus `REORDER_NODE` | Visual objects can occupy intersecting rectangles; layer order remains document-aware. | Duplicate overlap measured in all three engines. |
| Layers/z-order | `LayersPanel`, `REORDER_NODE`, `REORDER_SECTION` | Human-readable presentation tree and authoritative sibling reorder. | Context-menu z-order browser check; section-order/persistence test. |
| Direct text editing | `EditableText` | Double-click enables contentEditable; blur/Enter commits; Escape exits. | Browser text edit in all three engines. |
| Image frames/crop | `AddPanel`, `CanvasNode` crop state, `UPDATE_NODE_CROP` | Clipped frame retains x/y/scale; pointer moves image; slider/buttons zoom; Done commits one operation. | Upload, resize, crop drag, zoom, autosave and reload checks. |
| Copy/paste | `COPY_SELECTED`, `PASTE`, `cloneForest` | Copies structured subtrees and regenerates IDs/references. | Real Ctrl+C/Ctrl+V count assertion. |
| Duplicate/delete | reducer duplicate/delete actions | Structured subtree clone or removal, never DOM cloning. | Browser duplicate/new-ID/delete checks. |
| Undo/redo | `commit`, `UNDO`, `REDO` | Document snapshots, history cursor and redo truncation. | Browser delete undo/redo and repository tests. |
| Keyboard nudge | `App` key handler, `NUDGE_SELECTED` | Arrow=1px and Shift+Arrow=10px authoritative movement. | Contract test; not a distinct browser assertion in this pass. |
| Zoom/Fit | `viewport.ts`, `PageNavigator`, `App.fit` | 25%-200% zoom and available-workspace Fit without document mutation. | Pan/zoom/viewport browser suite and coordinate tests. |
| Pan | `App` workspace pointer handlers | Middle drag or Space+drag changes scroll offsets only. | Both paths asserted; node geometry compared before/after. |
| Responsive editing | `SET_BREAKPOINT`, `CanvasNode` responsive merge | Desktop base plus tablet/mobile override cascade. | Mobile switch in three engines; eight viewport widths. |
| Context toolbar | `ContextToolbar` | Selected node type controls typography/image/card/link/effects actions. | Browser typography, opacity, image fit, link and effects checks. |
| Sidebar insertion | `AddPanel.itemButton`, `App.onWorkspaceDrop` | Click or HTML drag payload creates typed nodes, with zoom-aware drop position. | Add section, drag Button, click Text and upload Image checks. |
| Persistence/autosave | `App` save effect | 700ms debounce, revision synchronization, conflict/failure states, pending-save replay. | Backend document read and full Studio reload. |
| History grouping | pointer/crop end handlers plus reducer `commit` | Pointer previews stay local; move, resize and crop commit only on completion/Done. | Undo/redo plus crop persistence tests. |
| Viewport conversion | `screenToCanvas`, `screenDeltaToWorld`, `canvasToScreen` | Converts UI pointer positions to logical document coordinates at current zoom/pan. | Contract tests and Add drag at reference zoom. |

## Reference workflow parity matrix

| Reference action/state | Zylora action | Result | Difference |
|---|---|---|---|
| Initial gradient header and closed drawer | Open Studio | PASS | Project title is real site data. |
| Nine-item left rail | Templates through Photos | PASS | Independently drawn SVGs; no proprietary Canva asset files copied. |
| Drawer at 362px | Select Templates/Elements/Text/Uploads | PASS | Exact x=70..432 landmark. |
| Blank centered website canvas | Empty SiteDocument page | PASS | Exact x/y/width/height landmark at 1535x777. |
| Elements category drawer | Select Elements | PASS | Matching category order, color families and scrolling layout. |
| Text drawer | Select Text | PASS | Presets create one internal text primitive. |
| Upload drawer | Select Uploads | PASS | Upload and asset insertion are live. |
| Shapes/Buttons/Frames/Grids drawers | Open category | PASS | Tiles create structured nodes; illustrative tile artwork is original. |
| Add object | Click or drag a tile | PASS | SiteDocument node created and selected. |
| Select/move/resize | Click, then drag selected object or handle | PASS | Real pointer interactions in three engines. |
| Overlap and alignment guide | Move/duplicate objects | PASS | Intersecting bounds and transient snap guide measured. |
| Direct text/style | Double-click and contextual controls | PASS | Text, font, size, color and opacity mutate document. |
| Duplicate/copy/delete/history | Keyboard commands | PASS | Stable new IDs; undo/redo verified. |
| Image workflow | Upload, resize, crop/reposition/zoom | PASS | Persisted crop and durable test-server URL verified. |
| Zoom/pan | Slider/keyboard/Fit, middle/Space drag | PASS | Viewport only; geometry invariant. |
| Responsive mode | Device controls | PASS | Functional; device control presentation is Zylora-specific when selected. |
| Preview/publish | Header buttons | PARTIAL | Routes/handlers exist and repository publishing tests pass; this pass did not perform an authenticated live-production publish. |

## Visual overlay result

- Comparison size: 1535 x 777.
- Normalized mean absolute pixel difference: 0.032877.
- Exact measured landmarks: top bar, rail, drawer, canvas and Add-section bar.
- Artifact: `artifacts/studio-canva-grade-rebuild/video-parity/overlay-50.png`.
- Pixel-identical parity is **not** proven. Different project content, font rasterization and original local icon artwork remain visible differences.

## Superficial implementation scan

Active Studio source contains no TODO/FIXME markers, `alert()` calls, `console.log` debugging or mock/fake/stub labels. Disabled controls are state preconditions (for example Paste without clipboard, Group without multiple selection, or CMS actions without a selected compatible item). `ComponentsPanel.tsx` and `Inspector.tsx` are legacy, unmounted modules; the normal App does not import them. The visible AI placeholder panel was removed instead of shipping a disabled action.

## Implementation verdict

- CANVA/VIDEO WORKFLOW PARITY: **PARTIAL**
- CANVAS ENGINE: **PASS**
- VISUAL PARITY: **PARTIAL**
- INTERACTION PARITY: **PASS for the tested workflow**
- PERSISTENCE: **PASS in the authenticated controlled application environment**
- RESPONSIVE EDITING: **PASS**
- REAL BROWSER QA: **PASS**

Remaining discrepancies: the implementation uses independently drawn provider-safe icons instead of copied Canva assets; exact glyph paths and project-specific content are not pixel-identical; multi-selection/group and keyboard nudge exist but were not separately browser-certified in this pass; authenticated live-production publish was not executed as part of this UI rebuild.
