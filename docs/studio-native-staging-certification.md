# Zylora Native Studio — Local Certification Evidence

**Date:** 2026-09-17  
**Repository SHA at start of this pass:** `c0955e5dc14afee178b48cc2af0fdc35bd167512`  
**Production engine:** `STUDIO_ENGINE=legacy`

The configuration accepts `legacy`, `native`, and the separately gated
`penpot` compatibility value. Unknown engine values fail closed. This pass
does not change the production value; `native` is the staging candidate.

The final local regression run completed with **539 passed, 0 failed, 0
skipped, and 59 warnings in 499.43 seconds**. The focused Studio/config set
completed with **80 passed and 1 warning in 25.78 seconds**.

This document records evidence from the native Studio gap-closure pass. It is
not a production cutover approval and does not claim a deployed staging golden
path.

## Interaction gates

- Smart-guide visibility and pointer-up cleanup: **PASS** in the deterministic
  gap harness on Chromium, Firefox, and WebKit (16/16 checks per browser, zero
  browser errors).
- Smart-guide coordinate agreement: **PASS** in all three browsers. The
  browser assertion compares the rendered horizontal guide with the actual
  snapped node/sibling edge or center (within 2 CSS px); the overlay now lives
  inside `#zylora-canvas`, so artboard padding and scroll offsets are applied
  exactly once.
- Nested-frame guide translation is covered for ordinary (unrotated) parent
  frames: local guide coordinates are translated by the parent-to-artboard
  offset once before overlay rendering. Rotated-parent guides remain under the
  documented axis-aligned policy and are not represented as rotated overlay
  lines.
- Production snapping matrix: **PASS** in the TypeScript implementation test:
  all 9 horizontal source/target edge-center relationships, all 9 vertical
  relationships, horizontal and vertical equal-spacing candidates, parent
  bounds, and the 25/50/75/100/125/150/200/400% zoom threshold matrix. Rotated
  snapping is explicitly documented as axis-aligned-bounding-box policy.
- Resize geometry: **PASS** in the browser harness for the committed resize
  gesture and in the production TypeScript math matrix for all eight handles,
  seven rotations, and eight zoom levels (448 anchor checks). Aspect-lock,
  centered resize, minimum dimensions, and fractional coordinates are covered.
- Nested transformed-parent resize: **PASS** in Chromium, Firefox, and WebKit
  using a real nested child in a translated parent with a 25° CSS rotation and
  a 30° child rotation. All eight handles changed geometry and preserved the
  rendered opposite anchor; the worst measured cross-browser error was 0.61 CSS
  px (the harness limit is 1 CSS px). The resize solver resolves viewport
  deltas through parent-local coordinates before applying node-local rotation.
- Pointer cleanup: resize and drag now cancel on pointer cancellation, lost
  pointer capture (resize), window blur, and Escape. Cancellation restores the
  pre-gesture preview and clears transient guides.
- Blank-first Studio: **PASS** in Chromium, Firefox, and WebKit (9/9 checks
  per browser, zero browser errors).
- Explicit `STUDIO_ENGINE=native` Chromium run: **PASS** (16/16 checks, zero
  browser errors), confirming the staging candidate selects the direct native
  Studio path without enabling the separately gated upstream runtime.
- Mobile Studio UX: **PASS** in Chromium with zero browser errors.

## Performance evidence

The corrected profile uses preloaded documents rather than inserting the same
node count a second time. Chromium headless results:

| Requested nodes | Rendered nodes | Drag p95 frame | Resize p95 frame | Zoom p95 frame | Save wall time | Long tasks | Browser errors |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 750 | 751 | 16.8 ms | 16.7 ms | 16.7 ms | 785.93 ms | 0 | 0 |
| 1,000 | 1,001 | 16.8 ms | 16.7 ms | 16.7 ms | 1,105.38 ms | 0 | 0 |
| 2,000 | 2,001 | 16.7 ms | 16.8 ms | 33.4 ms | 1,973.67 ms | 1 (70 ms) | 0 |

The 2,000-node undo long task remains a staging performance risk. It is
reported rather than averaged away. These are local headless measurements and
are not a representative-hardware SLA.

## Remaining staging gates

The following evidence is not available on this host and remains required
before changing the staging engine or recommending production cutover:

- real PostgreSQL migrations, CAS, transaction, and concurrency verification;
- deployed authenticated native-Studio golden path;
- staging deployment ID/URL and rollback rehearsal;
- provider checks required by the staging golden path;
- representative staging-browser performance and accessibility review.

The legacy editor remains the rollback path. No production engine default was
changed in this pass.
