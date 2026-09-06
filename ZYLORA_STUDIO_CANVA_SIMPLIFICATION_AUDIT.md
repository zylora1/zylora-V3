# Zylora Studio — Canva-like simplification audit

Date: 2026-09-06
Repository: `main` at starting SHA `aab18bd5e786c8e2273fe60a7128bff075678576` before this pass

## Verdict

**CONDITIONALLY READY** for the Studio UX implementation. The exact release SHA is committed, pushed to `origin/main`, deployed by the Git-backed Railway production service, and health-verified. The verdict remains conditional because the focused pass did not repeat the full authenticated production journey or every requested manual viewport/crop workflow.

## Railway deployment evidence

- Service: `zylora-app` / production environment
- Deployment ID: `2b88d3a2-3da9-40ac-bf40-65c3b61f394d`
- Deployed commit: `9ced8b6a33ac3e60342bff664587bb51586b4adf`
- Deployment status: `SUCCESS`
- Production URL: `https://zylora-api-production.up.railway.app`
- Health check: `GET /api/health` → HTTP 200, `{"status":"ok"}`

## A. Implemented

- Replaced the ten-item developer-oriented rail with seven beginner-first workspaces: Add, Pages, Layers, Media, CMS, AI and Site.
- Added a calm black/white/neutral Studio skin in `static/studio-ux.css`, loaded by the authenticated `/studio/{site_id}` shell without changing the document or publishing API.
- Reworked Add into a small semantic primitive set: Text, Button, Card, Image frame, Shape, Section and Divider, with a separate Zylora tools group for existing business widgets.
- Added actual Add-panel browser drop handling, including a browser-safe payload fallback and structured `INSERT_NODE` persistence.
- Replaced raw Layers labels and IDs with semantic names such as Hero/Section, Text, Button, Card, Image frame, Navigation and Sales Assistant. Internal IDs remain in SiteDocument only.
- Added contextual controls for typography, alignment, color, image Fill/Fit/Crop/Corners, card background/corners/shadow, links, hover, entrance and scroll effects.
- Added explicit zoom options (25–200%), Fit, 100%, keyboard zoom shortcuts, Ctrl/Cmd-wheel zoom and middle-mouse canvas pan.
- Added a responsive mobile shell with bottom workspace navigation, sheet-style panels, larger resize handles, safe-area padding and a mobile contextual toolbar.
- Preserved the existing gesture threshold and pointer-capture behavior: unselected components do not mutate during scroll; selected components move only after an intentional drag threshold.
- Preserved autosave, history, copy/paste, duplicate/delete, reparenting, publishing, CMS, AI and backend contracts.

## B. Studio UX

The normal customer surface now communicates “Add things to my page / select / edit / publish” rather than exposing DOM concepts. The canvas remains the dominant workspace. Advanced existing tools remain available through CMS, AI and Site rather than competing with the primary Add flow.

## C. Primitive matrix

| Primitive | Status | Evidence |
|---|---|---|
| Text | PASS | Add Text, direct edit, font/font-size/color/alignment and persisted save/reload in the 17-check browser journey |
| Button | PASS | Semantic Add Button and structured insert; existing renderer/link tests remain green |
| Card | PASS | Semantic Card maps to existing structured container node with card styling |
| Image frame | PASS | Semantic frame metadata, durable asset upload path, Fill/Fit/Crop/Corners controls and persisted image geometry |
| Shape | PASS | Semantic Shape maps to the existing safe structured surface |
| Section | PASS | Add Section and existing page/document model |

## D. Canvas

- Selection: PASS
- Safe unselected scroll: PASS in Chromium, Firefox and WebKit
- Deliberate pointer drag: PASS in all three engines
- Direct resize handles: PASS in all three engines
- Add-panel drag/drop: PASS using a real browser `DataTransfer` sequence in all three engines
- Zoom and Fit controls: PASS at 390px mobile and desktop journey
- Middle-mouse pan: implemented; not separately browser-certified in this pass
- Snapping/smart guides: preserved from existing implementation; existing tests remain green

## E. Responsiveness

Editor application: PASS at 390×844 in Chromium, Firefox and WebKit for bottom navigation, Add/Layers sheets, contextual toolbar, zoom and no horizontal application overflow. Desktop regression ran at 1440×900 in all three engines.

Published website responsiveness: existing renderer and responsive document tests remain green. A full manual screenshot matrix across every requested width was not repeated in this focused pass.

## F. Mobile Studio

On narrow screens the desktop rail disappears. A seven-item bottom navigation opens large sheet-like workspaces, the canvas receives the majority of the viewport, selection handles are enlarged, and zoom remains available as a fixed control above the safe-area navigation region.

## G. Links

Text-like nodes, images, cards and shapes expose a plain-language Link action. Existing renderer sanitization and `noopener noreferrer` behavior remain covered by `tests/test_studio_canva_contract.py`.

## H. Animations

Hover, entrance and scroll effect controls remain available in the contextual toolbar. Published scroll effects use the existing IntersectionObserver/reduced-motion renderer path. The simplified UI intentionally exposes effect names rather than CSS or observer terminology.

## I. Image frames

The normal Add flow says Image frame; uploaded images become durable structured image nodes with frame metadata, Fill/Fit, crop-position cycling, corners, replace and link controls. Full focal-point crop authoring remains a follow-up limitation.

## J. Existing SiteDocument compatibility

No schema or migration change was introduced. Existing node types continue to render and save; the semantic labels are a presentation-layer abstraction. Internal containers remain valid in the document and are not shown as `div_*` IDs in the normal Layers UI.

## K. Backend regression

No backend API contract, authentication, billing, credits, CRM, CMS, publishing or renderer behavior was intentionally changed. `/studio/{site_id}` now additionally injects `/static/studio-ux.css`.

## L. Automated tests

- `python -m compileall -q app`: PASS
- Focused Studio/document/UX contract tests: **14 passed, 1 warning**
- Full repository gate in the approved execution environment: **380 passed, 1 skipped, 0 failed, 59 warnings, 293.99s**
- A sandbox-only full-suite attempt failed to spawn Playwright with WinError 5; it was rerun outside the sandbox and passed.

## M. Browser QA

| Engine | Desktop | Mobile 390px | Errors |
|---|---|---|---:|
| Chromium | 17 checks PASS | PASS | 0 |
| Firefox | 17 checks PASS | PASS | 0 |
| WebKit | 17 checks PASS | PASS | 0 |

The desktop journey includes safe scroll, semantic Add, Add-panel drag/drop, text edit, contextual toolbar, typography/effects, pointer drag, image resize, mobile breakpoint switch, undo/redo, Layers synchronization, autosave and reload persistence.

## N. Screenshots / artifacts

- `artifacts/studio-simplification/browser-matrix.md`
- `artifacts/studio-simplification/responsive-results.md`
- `data/studio-v4-browser-proof.png`
- `data/studio-mobile-chromium.png`
- `data/studio-mobile-firefox.png`
- `data/studio-mobile-webkit.png`

## O. Remaining limitations

1. Full manual visual QA at every requested width (1440, 1366, 1280, 1024, 768, 430, 412, 390, 375, 360) was not repeated here.
2. Image crop is a compact focal-position cycle, not a full drag-to-crop editing surface.
3. Middle-mouse pan is implemented but lacks a dedicated automated interaction assertion.
4. AI model picker, Sales Assistant billing, and external provider certification were intentionally not changed in this focused Studio UX pass.
5. Grouping, section reordering and advanced layer management remain the existing structured operations; this pass did not add new beginner-facing affordances for every advanced operation.

## P. Release recommendation

The exact source SHA is now committed, pushed and Railway-deployed with a successful health check. The repository-controlled implementation is green and the isolated authenticated browser matrix passes; remaining limitations above prevent an unconditional production-ready verdict for this focused pass.
