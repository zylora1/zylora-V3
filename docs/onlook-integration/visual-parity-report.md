# Zylora Code Studio Visual-Parity Report

## Verdict

**PARTIAL VISUAL PARITY.** The source-level parity audit is complete for the pinned Onlook transplant and Zylora adapters. Runtime screenshot capture, computed-style comparison, region image diffs, and Chromium/Firefox/WebKit certification remain blocked until a runnable database-backed application environment and a healthy browser worker are available.

A certified verdict is intentionally not claimed.

## Upstream identity

| Field | Value |
|---|---|
| Repository | `https://github.com/onlook-dev/onlook` |
| Pinned SHA | `423e2e924366419e418ee049093872d535eea41a` |
| Runtime source | `studio/onlook/`, `studio/ZyloraOnlookStudio.tsx` |
| License | Apache-2.0 |

## Zylora identity

| Field | Value |
|---|---|
| Runtime source | `studio/App.tsx`, `studio/ZyloraOnlookStudio.tsx`, `studio/zylora/` |
| Shared visual tokens | `static/studio-ux.css`, `static/zylora-studio-tokens.css` |
| Dashboard surface | `static/dashboard.html`, `static/dashboard.css`, `static/dashboard.js` |

## Source-level style parity

| Property | Upstream reference | Zylora reference | Result |
|---|---|---|---|
| Top bar height | `--topbar-height: 44px` | `--topbar-height: 44px` | PASS at token level |
| Left rail width | `--rail-width: 48px` | Studio rail token `48px`; Dashboard compact rail adaptation | PASS with documented surface adaptation |
| Canvas color | `--studio-canvas-bg: #E8EAED` | Same Studio token | PASS |
| Panel | `--studio-panel: #18181A` | Same Studio token | PASS |
| Secondary panel | `--studio-panel-secondary: #1E1E20` | Same Studio token | PASS |
| Surface | `--studio-surface: #242428` | Same Studio token | PASS |
| Hover surface | `--studio-surface-hover: #2C2C32` | Same Studio token | PASS |
| Border | `--studio-border: #2E2E32` | Same Studio token | PASS |
| Strong border | `--studio-border-strong: #3D3D44` | Same Studio token | PASS |
| Accent | `--studio-accent: #7D2CFF` | Same Studio token | PASS |
| Primary text | `--studio-text: #EEEEEE` | Same Studio token | PASS |
| Muted text | `--studio-text-muted: #8A8A93` | Same Studio token | PASS |
| Font family | System UI stack | Same system UI stack | PASS at source level |
| Control rhythm | Compact 24–30px controls | Dashboard controls use 26–30px adaptations | PASS with surface adaptation |

## Component reuse table

| Area | Classification | Upstream path | Zylora path | Reason |
|---|---|---|---|---|
| TopBar | ADAPTED_REUSE | `studio/editor/TopBar` and Studio shell primitives | `studio/App.tsx`, `static/studio-ux.css` | Native and Dashboard need platform-specific actions |
| Left rail | ADAPTED_REUSE | `studio/App.tsx` rail definitions | `studio/App.tsx`, Dashboard navigation | Preserve exact editor rail while adapting product navigation |
| Layers | DIRECT_REUSE / ADAPTED_REUSE | `studio/components/LayersPanel.tsx`, `studio/onlook/core/` | Same paths | Existing Zylora Studio component |
| Components | DIRECT_REUSE | `studio/components/AddPanel.tsx`, `studio/onlook/ui/` | Same paths | Existing Studio component surface |
| Pages | DIRECT_REUSE | `studio/components/PagesPanel.tsx` | Same path | Existing Studio page navigation |
| Canvas | DIRECT_REUSE / ADAPTED_REUSE | `studio/components/CanvasNode.tsx`, `studio/onlook/core/` | Same paths | Native and code engines require adapters |
| EditorBar | ADAPTED_REUSE | `studio/components/ContextToolbar.tsx` | Same path | Zylora actions replace unsupported cloud actions |
| Right panel | DIRECT_REUSE | `studio/components/Inspector.tsx`, `AIPanel.tsx` | Same paths | Existing Studio inspector and AI flows |
| Code panel | ADAPTED_REUSE | `studio/components/CodePreview.tsx`, `studio/code/` | Same paths | Zylora sandbox and source editor boundary |
| Menus | DIRECT_REUSE / ADAPTED_REUSE | `studio/onlook/ui/` | `studio/components/`, Dashboard shared controls | Preserve geometry while retaining Zylora permissions |

## Runtime evidence status

| Required evidence | Status | Blocker |
|---|---|---|
| Pinned upstream runtime | NOT CAPTURED | Browser worker crash-loop disabled |
| Zylora runtime | NOT CAPTURED | App requires database initialization; temporary SQLite server did not complete startup |
| Equivalent screenshots | NOT CAPTURED | Same environment blockers |
| Region image diff | NOT COMPUTED | No paired screenshots |
| Computed style comparison | NOT COMPUTED | Browser worker unavailable |
| Chromium regression | NOT RUN | Browser worker unavailable |
| Firefox regression | NOT RUN | Browser worker unavailable |
| WebKit regression | NOT RUN | Browser worker unavailable |

## Required follow-up

Run the comparison index after provisioning a development PostgreSQL/SQLite-compatible database that completes migrations and restarting the browser worker. Do not upgrade this report to `VISUAL PARITY CERTIFIED` without paired screenshots, region metrics, computed styles, and functional regression results.
