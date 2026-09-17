# Zylora Complete UI/UX Rebuild — Certification Report

Date: 2026-09-10
Repository: `Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4`
Branch: `main`

## Verdict

**NOT PRODUCTION READY**

The requested implementation is present and the local repository regression suite is green. Release certification is withheld because Railway deployment did not complete, authenticated post-deploy verification was not possible without permitted production credentials, and the measured 500-node resize probe still contains long tasks.

## Implemented

- Canonical `/studio/{site_id}` Studio route retained; `/editor/{site_id}` compatibility behavior preserved; no `/studio-v2` route added.
- Studio schema v5 remains compatible and now carries the additive `engineVersion: 2` document extension.
- Canonical parent-local geometry, responsive overrides with desktop → tablet → mobile inheritance, canonical locking, migration/normalization, and legacy CSS mirroring are implemented in `app/studio_document.py`, `app/studio_migration.py`, and `studio/store.ts`.
- Studio mutations use the centralized command path with bounded history metadata, gesture-boundary commits, geometry actions, grouping/reparenting/order/visibility/locking support, viewport transforms, pinch/pan/zoom, rotation, resize semantics, and snapping.
- Internal page actions use stable page IDs and resolve the current slug at render time; typed action editing is available in the Studio inspector. Legacy href content remains readable.
- Autosave retains debounced persistence, CAS revisions, conflict diagnostics, deterministic rebase where possible, and IndexedDB recovery for unresolved local drafts.
- Semantic rendering and publishing paths were extended without removing URL safety, sanitization, responsive visibility, CMS/widget markers, lead forms, appointments, and chatbot markers.
- The user dashboard and super-admin control plane remain on their existing routes and real API-backed views. Responsive billing overflow was corrected without replacing the product data flows.
- Landing, authentication, pricing, terms, dashboard, super-admin, and Studio surfaces now share the additive token contract in `static/zylora-tokens.css`; public-site theme tokens remain separate from editor chrome.
- Existing worktree changes and historical artifacts were preserved. `.railwayignore` excludes local databases, media, artifacts, and temporary QA bundles from deployment context without deleting them.

## Executed verification

### Repository and focused checks

- Full repository suite: **442 passed, 1 skipped, 59 warnings** in 275.48 seconds.
- Focused Studio/public contract suite after the final action-model changes: **15 passed, 1 warning**.
- Python compilation: `python -m compileall -q app` passed.
- Studio production build: `npm.cmd run build:studio` passed. Generated `static/studio.js` was 325.92 kB; gzip 98.69 kB; source map 1,182.45 kB.
- `git diff --check`: no whitespace errors; only expected LF-to-CRLF working-copy warnings were emitted by Git.

### Browser and responsive checks

- Studio rebuild QA: **33 runs passed** across Chromium, Firefox, and WebKit at 11 viewports: 1920×1080, 1536×864, 1440×900, 1366×768, 1280×800, 1024×768, 768×1024, 430×932, 390×844, 375×812, and 360×800.
- Mobile closure QA: **5 widths passed**, 20 interactions per width, no errors.
- Cursor-state QA: **3 browser engines passed**.
- Control-state QA: disabled, hover, pressed, and focus-visible checks passed.
- Platform responsive QA: **56 checks across 8 widths, 0 errors**.
- Read-only billing shell overflow check: **4 widths passed** at 430, 390, 375, and 360 pixels.
- Read-only super-admin shell overflow check: **8 widths passed** at 1440, 1280, 1024, 768, 430, 390, 375, and 360 pixels.
- Combined browser product workflow: **1 passed** when run with the process permissions required by Windows Playwright.

### Smoothness probe

The corrected probe uses the current `.save-status-control` selector and completed without browser errors for 20, 100, 250, and 500 requested insertions. Measured steady-state results:

| Requested nodes | Rendered nodes | Drag p95 | Resize p95 | Resize long tasks |
|---:|---:|---:|---:|---:|
| 20 | 76 | 16.8 ms | 16.8 ms | 0 |
| 100 | 156 | 16.8 ms | 16.7 ms | 0 |
| 250 | 306 | 16.8 ms | 33.3 ms | 0 |
| 500 | 556 | 16.7 ms | 66.6 ms | 4 × 71–75 ms |

This is useful evidence of the rAF gesture path, but it is not a clean 60 FPS certification at the largest probe size.

## Deployment status

Target Railway project: `zylora-staging` (`0d9ce2ad-9ede-4df7-a6e3-4e8e88d429d4`), production environment, service `zylora-app` (`e4030f96-3196-499d-97b2-79824e63b49b`).

Deployment attempts from the working tree did not reach a build:

1. Railway upload rejected **334,410,269 bytes** with HTTP 413.
2. A retry returned a generic Railway request error.
3. After excluding only non-runtime local data and QA output, Railway still rejected **321,386,600 bytes** with HTTP 413.

The remaining payload is primarily the preserved `template_projects` source library, which the existing runtime template/catalogue code reads. It was not excluded because doing so would break existing template behavior. Railway currently has an older successful deployment, but no successful deployment for this rebuild was created by this release attempt.

No authenticated production flow, publish verification, live public-page verification, billing verification, or real provider verification is claimed. Permitted production credentials were not available in this task.

## Open release blockers and risks

- Resolve the Railway upload limit without removing runtime template behavior. Options include deploying from a provider-supported repository build context or moving immutable template assets to the existing production asset/storage path.
- Re-run deployment, `/api/health`, authenticated dashboard/Studio flow, save/reload, preview, publish, public-page, form, widget, and authorization checks against the resulting deployment.
- Optimize or virtualize the 250–500-node resize path; the current probe records frame-budget regressions at those sizes.
- The root repository has no root `tsconfig.json`; Vite’s production build passed, but a standalone root TypeScript typecheck is not available.
- The working tree contains extensive pre-existing and generated changes. They were preserved and not reset or deleted; release packaging should use an explicit reviewed commit or clean build context.

