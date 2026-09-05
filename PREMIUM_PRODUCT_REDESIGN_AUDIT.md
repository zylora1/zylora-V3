# Zylora premium product redesign audit

Date: 2026-09-05  
Scope: landing, authentication, dashboard, AI creation flow and visual editor  
Architecture decision: preserve the FastAPI/static-client architecture and existing server contracts

## Executive result

The product now presents a more coherent premium system across the public site and authenticated workspace, and two load-bearing JavaScript failures discovered during browser QA were corrected. Marketing/demo surfaces no longer use the audited fabricated ratings, review counts, customer metrics, named activity, uptime claims or unsupported trust badges.

This pass does **not** claim feature parity with Wix Studio. Zylora has a capable structured visual editor with persistent typed edits, responsive controls, history, media, AI editing and publishing, but it does not have unrestricted freeform canvas authoring or typed section insertion. Those boundaries are documented in `VISUAL_EDITOR_ARCHITECTURE.md`.

## Implemented changes

### Landing

- Established a large editorial hero with restrained blue texture, serif display typography, clear primary action and a real product-capability strip.
- Replaced fabricated ratings, review counts, uptime/performance statistics and faux live analytics with capability language or explicit empty/demo states.
- Rebuilt JSON-LD to include only supportable Organization, WebSite and SoftwareApplication data.
- Repaired the template carousel content and the broken GoDesign preview/slug reference.
- Reframed analytics and booking visuals as interface/workflow previews rather than live customer results.
- Increased navigation contrast over the dark hero.

### Authentication and plan selection

- Replaced the login page's invented customer domain, visit/lead totals and named consultation with a neutral product-capability preview.
- Replaced unverified checkout/security slogans with server-verification and billing-record language.

### Dashboard

- Fixed malformed selectors that prevented `dashboard.js` from parsing and stopped the workspace from initializing.
- Added a real no-site state: no fake website, domain, assistant status, health score, uptime or dead site actions.
- Hides controls and health detail that require an existing site.
- Uses zero/empty states for leads, appointments and conversion, and fetches assistant status from the site settings endpoint when a site exists.
- Added honest domain/publish steps based on site state.

### AI website creation

- Fixed a malformed selector block that prevented the page script from parsing and left Continue disabled.
- Restored an always-available native business-brief textarea; the enhanced prompt component is progressive enhancement only.
- Verified the complete goal → brief → art direction → create → editor path in a local browser.

### Visual editor

- Reduced side-panel widths at desktop/tablet breakpoints so the center canvas remains dominant.
- Preserved the contextual inspector, device preview, page navigation, media, brand, SEO, accessibility, revisions, undo/redo, preview, export and publish entry points.
- Verified a real generated site, node selection, persistent text edit and server-backed undo in the browser.

## Verification evidence

- JavaScript syntax: every top-level file in `static/*.js` passes `node --check` after the fixes.
- Focused redesign/editor/static tests: **28 passed**.
- Unrestricted Playwright product workflow: **1 passed**, covering **101 browser checks** across desktop and mobile landing, authentication, AI creation, dashboard views, editor/device modes, publishing, lead capture, assistant, bookings, integrations, billing and password reset.
- Final full Python suite: **307 passed, 1 skipped** in 173.07 seconds. The skip is the suite's existing conditional skip; there were no failures.
- Manual browser QA additionally covered signup, honest empty dashboard, AI creation, generated multi-page editor, element selection, persistent text edit and server-backed undo.

## Accessibility and resilience checks

- Core surfaces retain semantic headings, links, buttons, labeled form controls, skip links and focusable editor actions.
- Empty, loading, error and saved states are visibly distinct.
- Editor motion remains centralized and respects reduced-motion output.
- Native input fallback prevents AI creation from depending on the optional React prompt component.

## Risks and release recommendation

1. The repository contained a large pre-existing dirty working tree. This pass intentionally avoided reverting or broadly rewriting unrelated work.
2. Playwright could not spawn inside the restricted filesystem sandbox, so the final E2E and full-suite runs were executed with the required unrestricted test permission. Both passed; CI should retain the same browser coverage.
3. The editor is structured rather than freeform. Marketing must not promise arbitrary section construction, coordinate-level placement or real-time collaboration until those typed capabilities exist.
4. Pricing and plan entitlements remain existing product configuration and were not redesigned at the backend level in this pass.

Recommendation: acceptable for staging and release-candidate review. The code-level and browser regression gates pass; production approval remains conditional only on the target environment's normal deployment, secret, migration, domain and monitoring checks.
