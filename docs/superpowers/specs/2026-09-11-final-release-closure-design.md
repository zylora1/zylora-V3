# Zylora Final Release Closure Design

## Goal

Close the current production release blockers without replacing Zylora's existing FastAPI, React/Vite Studio, SiteDocument V4, template, billing, credit, publishing, or tenant-isolation architecture.

## Evidence baseline

- Repository: `Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4`
- Baseline commit: `d9eb2843bce51ae721aa0dfd1edbbda63b5e94a4`
- Branch: `main`
- Worktree: intentionally dirty with existing user audit artifacts; unrelated changes must remain untouched.
- Tracked `template_projects`: 3,319 files, 319.26 MiB.
- Reachability audit: 81 projects, 146 render files, 1,361 required assets, 0 unresolved references.
- Existing compact context: 158.54 MiB, consisting of 126.91 MiB compact template files and 29.96 MiB preview/static assets.
- Full baseline: 451 passed, 1 skipped, 1 Playwright/WebKit environment failure.
- Studio build: passed, 327.09 kB uncompressed and 99.08 kB gzip.
- Existing 20/100/250/500 smoothness evidence has no observed long tasks, but the dedicated instrumented 500-node profiler cannot launch its Playwright driver in the current environment.

## Packaging design

The source template catalogue remains runtime-required for the current legacy renderer, catalogue APIs, previews, migration, and export paths. The full source tree also contains build/reference material that is not required by the runtime. Production deployment will use the existing reachability packager to copy only tracked runtime code, migrations, static assets, required render files, and referenced template assets into a fresh release context.

The root deployment ignore rules will exclude development dependencies, test artifacts, local databases/media, generated reports, and every `release_context-*` scratch directory. They will not exclude `template_projects` from a normal source checkout unless the deployment is explicitly performed from a verified compact context. A release QA gate will reject forbidden runtime artifacts and record the measured context size and manifest hash.

The compact context will be optimized only in the generated copy. Asset conversion or resizing is allowed only when references, MIME behavior, hashes, and representative template renders remain valid. If the safe compact context cannot reach 100 MiB, the certification will report its exact composition and continue with the smallest context accepted by Railway.

## Studio performance design

The existing document reducer remains authoritative. Drag, resize, and rotate keep persisted document/history writes at gesture boundaries. Pointer-driven visual previews use transient state and `requestAnimationFrame`; peer/parent geometry is measured once per gesture and reused for snapping. The reducer is not dispatched for raw pointer moves. The profiler will record render counts, input timings, frame intervals, long tasks, layout reads, serialization, autosave requests, and final document/history behavior for 50, 100, 250, and 500 nodes.

Only bottlenecks reproduced by the profiler will be changed. Candidate changes are limited to RAF scheduling and cached geometry in interaction hooks, stable subscriptions/memoization where render counts prove a need, and deterministic autosave coalescing. Undo/redo, responsive inheritance, overlap, snapping, guides, and canonical geometry must remain unchanged.

## Verification and deployment design

Verification proceeds from focused unit/contracts to Studio build, browser workflows, responsive QA, security/tenant isolation, release-package QA, full pytest, and provider checks. The Playwright/WebKit failure will be rerun after verifying browser installation and subprocess availability; it will be classified as an application failure only if the same workflow fails after the browser environment is healthy.

Railway deployment is authorized because the CLI is authenticated and linked to `zylora-staging / zylora-app`. The deployed input will be generated from the tested commit, with manifest/source SHA evidence. No provider flow will be marked successful without credentials and observed production behavior.

The final certification must distinguish PASS, FAIL, and NOT VERIFIED, include all required matrices, name every unresolved issue with severity, and select exactly one verdict. P0/P1 issues or missing mandatory production gates prevent `PRODUCTION READY`.

## Non-goals

- No framework migration or Studio rewrite.
- No deletion of required templates, migrations, tests, or runtime assets.
- No dashboard/marketing redesign.
- No weakening of authorization, CSRF, rate limiting, validation, billing, or credit controls.
- No reset, clean, force-push, branch deletion, or overwrite of unrelated dirty work.
