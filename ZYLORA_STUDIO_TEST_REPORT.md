# Zylora Studio test report

## Automated repository gates

- Full pytest: **389 passed, 1 skipped, 0 failed, 59 warnings** in 266.82 seconds.
- Focused Studio contract suite: **16 passed, 0 failed**.
- Python compileall (`app scripts tests`): **PASS**.
- JavaScript/Next source scan: **480 files, 0 errors**.
- Vite production build: **PASS**, 30 modules, 271.38 kB bundle, 82.39 kB gzip.

The single skip is inherited and not introduced by the Studio rebuild. Warnings are one TestClient deprecation and 58 cookie API deprecations.

## Real browser interaction matrix

The same exact built `static/studio.js` ran in every engine.

| Engine | Full Studio checks | Errors | Mobile |
|---|---:|---:|---|
| Chromium | 28 | 0 | PASS / 0 errors |
| Firefox | 28 | 0 | PASS / 0 errors |
| WebKit | 28 | 0 | PASS / 0 errors |

The 28-check flow covers the nine workspaces; safe scroll over unselected nodes; section insertion; drag insertion; direct text editing; upload insertion; contextual toolbar; font/size/color/link/hover/animation; intentional pointer drag; visible smart guide; text and image resize; opacity; duplicate/new ID; overlap; copy/paste; delete; undo/redo; crop move/zoom/Done; responsive view; layer order; autosave; backend persistence; full reload; and uncaught errors.

## Pan and viewport matrix

Chromium interaction suite: **12 checks, 0 errors**.

- Middle-mouse pan: PASS, document geometry unchanged.
- Space+drag pan: PASS, document geometry unchanged.
- Section ordering/stable IDs: PASS.
- Widths 1440, 1280, 1024, 768, 430, 390, 375 and 360: PASS with no application horizontal overflow.

## Honest gaps

Multi-selection/group and keyboard nudge are implemented but were not isolated as dedicated browser assertions in this pass. Preview/publishing retain tested repository contracts; authenticated live-production publishing was not performed by this UI rebuild.
