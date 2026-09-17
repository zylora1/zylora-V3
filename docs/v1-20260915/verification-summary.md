# Zylora continuation verification summary

Date: 2026-09-15

## Verified in this working tree

- Final full Python suite on the current tree after the performance, cross-browser and accessibility pass: **481 passed, 59 warnings, 0 failed** in 647.29s (10:47) on a fresh database using the elevated local browser path required by Playwright on this Windows host. The earlier 346.20s run remains historical evidence; this is the current regression result.
- Penpot adapter, shared mutation boundary, and REST/MCP gateway contracts: **13 passed, 1 warning** in the final focused rerun (including create/page/publish/revoke continuity).
- OAuth authorization-code/PKCE, replay, rotation, revocation, audience and scoped create/publish contracts: **5 passed**.
- Post-scoped-gateway adversarial security plus gateway/OAuth regression set: **19 passed, 1 warning**.
- Website source/ZIP export removal and related import/publishing regressions: **73 passed**.
- Post-copy cleanup export/SEO/master-policy focused regression subset: **14 passed, 1 warning**.
- Final dashboard responsive QA rerun: Chromium, 1440x900 through 360x640; all supported USER views and SUPER_ADMIN tabs active; zero console/page errors.
- Post-icon-cleanup dashboard QA rerun: **0 errors**, all eight required viewports and supported USER/SUPER_ADMIN views active.
- Supplied TailAdmin reference was built and captured locally; the eight-viewport RGB diff completed with zero browser errors and recorded per-viewport changed-pixel metrics. Fidelity remains **NOT_CERTIFIED** pending structural alignment review.
- TypeScript check: `node node_modules/typescript/bin/tsc --project studio/tsconfig.json --noEmit` passed.
- Studio production bundle: `npm.cmd run build:studio` passed; `static/studio.js` emitted at 333.41 kB (100.76 kB gzip) after the shared SVG icon and wheel-handler pass.
- Python compilation: `python -m compileall -q app tests` passed.
- `git diff --check` passed.
- Current Studio browser journey passes in Chromium, Firefox and WebKit with **28 checks and 0 errors per engine**. The certification runner was corrected to match the current eight-workspace Studio and current `.save-status-control` contract.
- Dedicated Studio performance profile ran for 50/100/250/500 requested nodes with zero browser errors. The final rebuilt-bundle 500-node profile records p95 frame times of 16.8 ms (drag), 16.7 ms (resize), 16.7 ms (zoom), and 33.4 ms (undo), with zero long tasks in every operation. Per-sibling layout reads during snapping are reduced to two. Evidence: `artifacts/final-production-certification/performance-profile-drag-raf-built.json` and `performance-results.md`.
- Dashboard QA passes in Chromium, Firefox and WebKit at all eight required viewports with zero console/page errors. The supplied TailAdmin reference has objective RGB diff metrics, but the fidelity gate remains open because the reference content and Zylora's real data-driven content differ structurally.
- Accessibility smoke audit reports 0 missing accessible names and 0 images missing alt text for the dashboard and Studio shell. `axe-core` is not installed in this environment, so automated axe status is explicitly `NOT_RUN`.
- Repository audit regenerated: 406 statically declared routes and 107 requirement headings.

## Implemented in this continuation

- Official Penpot source and technical documentation were inspected. `app/penpot_adapter.py` now provides a request-scoped Penpot-shaped projection and translates supported canvas interactions into the existing typed Zylora command engine. SiteDocument remains the only persisted source of truth.
- Penpot projection and interaction REST endpoints and gateway tools use the shared `app/studio_mutations.py` command/persistence boundary for Studio CAS, revisions, audit provenance and idempotency. The gateway now also exposes separately scoped deterministic create/page/publish operations; publish delegates to the existing Zylora publisher.
- OAuth authorization endpoints, dynamic client registration, exact redirect validation, S256 PKCE, state/CSRF consent, short-lived access tokens, rotating refresh tokens, resource/audience validation and revocation were added on top of the hashed connector credential path.
- Website source/ZIP export runtime routes, UI actions and obsolete pricing copy were removed. CMS/CRM CSV workflows, import, media and backup paths remain.
- Obsolete source-export QA/browser/media helpers were removed or converted to hosted preview/public-site checks; remaining negative route assertions only guard that removed endpoints stay unavailable.
- Dashboard/CRM placeholder emoji and app-logo stand-ins were replaced with SVG or semantic controls. Unverified branded client cards remain disabled; the registry reports generic MCP/REST compatibility truthfully.
- Studio controls, layers, page navigation, crop controls, asset search and inserted primitive icons now use the shared `StudioIcon` SVG component; no control relies on a Unicode glyph as its icon.
- The remaining reusable-component glyph, responsive override marker and Super Admin global-search glyph were replaced with the shared SVG or semantic CSS treatments; the refreshed Chromium journey still reports 28/0.
- The public landing page now explains “Build with the AI you already use” with MCP, API/OpenAPI and Custom Agent paths and the shared SiteDocument flow.

## Remaining certification boundaries

- The supplied TailAdmin ZIP is inspected, built and rendered locally. An eight-viewport RGB pixel diff now has objective metrics, but fidelity is **not certified**: the reference is a generic ecommerce dashboard while Zylora's candidate contains different data-driven site/health content, and all viewport diffs require structural review. Evidence: `artifacts/redesign_qa/dashboard-visual-diff-report.json`.
- OpenAI/ChatGPT, Claude and Manus hosted client onboarding was not exercised in this environment. Their registry status remains `NOT_CURRENTLY_CERTIFIED`; no branded asset is displayed as verified.
- The complete named external-client create → Studio edit → second-client edit → add page → publish-with-scope → revoke workflow is not certified end to end. The local gateway continuity contract now covers create, page addition, CAS, scoped publish denial/approval, normal publisher delegation, revocation and site preservation.
- The local performance profile is complete, but the 500-node long-task/undo result remains a performance risk; PostgreSQL/representative-hardware profiling and a full Penpot parity profile remain open.
- Deployment and hosted provider certification were not performed; they remain out of scope for this continuation.
