# Zylora Final Production Release Certification

**Audit date:** 2026-09-11
**Repository:** `C:\Zylora-Ithanda finalu\Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4`
**Scope:** exact release candidate `d9eb2843bce51ae721aa0dfd1edbbda63b5e94a4`
**Evidence rule:** only commands and service responses executed during this release audit are used below. Historical certification reports are not evidence.

## A. Executive verdict

## NOT PRODUCTION READY

The release cannot be certified because the exact candidate was not deployed. Two Railway local-context attempts created `INITIALIZING` records without an associated build; the first CLI upload returned HTTP 503, and the second Railway API upload also failed at the upload/API boundary. The live service is therefore an older deployment, not this candidate.

Additional mandatory gates remain open: the final suite has one WebKit environment failure, WebKit Studio QA cannot create a page on this host, authenticated production and SUPER_ADMIN journeys were not performed, live billing credentials are absent, and the source production validator requires `EMAIL_UNSUBSCRIBE_SECRET`, which is not configured in the Railway variable set.

The repository changes made for this release are narrow and preserve the current architecture:

- Geometry and nudge commits now use copy-on-write node updates instead of cloning the full page and rewriting all z-indices.
- Release packaging copies only Git-tracked runtime files and reachable template assets.
- Release-only JPEG optimization is reproducible through `--jpeg-quality`.
- A reproducible 500-node Studio profiler was added.

## B. Release identity

| Item | Result |
|---|---|
| Branch | `main` |
| Local SHA | `d9eb2843bce51ae721aa0dfd1edbbda63b5e94a4` |
| Cached `origin/main` ref | `f1f6a54dc51285b564fb82ada964208cc746da1f` |
| Current remote `origin/main` | **UNKNOWN** — `git ls-remote` could not connect to GitHub through the configured proxy |
| Railway candidate deployment 1 | `200c6341-2009-4b9e-904d-972bb3115647`, `INITIALIZING`, SHA `-`, no build |
| Railway candidate deployment 2 | `a8d0518d-bc50-4362-b4b0-d31dda3c7bcf`, `FAILED`, SHA `-`, no build |
| Known prior successful deployment | `2683969a-da76-43a2-b172-5f2060f3eeaa`, SHA `33e1b98dd80bc5ad111975d81612a5fae3747215` |
| Railway service | `zylora-app` in project `zylora-staging` / production environment |
| Live service URL | `https://zylora-api-production.up.railway.app` |
| All SHAs match | **NO** — the candidate is not deployed and current remote SHA is unavailable |

The worktree was intentionally not cleaned. At the release audit baseline it contained 85 tracked/uncommitted entries, 138 untracked entries, and 21 ignored entries. Scoped release files are clean; unrelated user changes and artifacts were preserved.

This report is intentionally a documentation worktree change and is not included in the candidate SHA. Committing it would create a different release identity; no successful deployment exists that would require that new identity to be rebuilt and redeployed.

## C. Deployment size investigation

The prior observed upload was approximately 321 MB and was rejected with HTTP 413. That size is recorded as the supplied baseline; it was not re-created as a fresh 321 MB upload during this audit.

### Phase-1 filesystem audit

| Area | Size |
|---|---:|
| Complete repository including `.git` | 1,742,826,287 bytes / 1,662.089 MiB |
| Source tree excluding `.git` | 936,389,679 bytes / 893.011 MiB |
| `.git` | 806,436,608 bytes / 769.078 MiB |
| `template_projects` | 334,772,587 bytes / 319.264 MiB |
| `node_modules` | 67,683,190 bytes / 64.548 MiB |
| `data` | 52,618,020 bytes / 50.180 MiB |
| `static` | 32,722,967 bytes / 31.207 MiB |
| `artifacts` | 11,146,920 bytes / 10.630 MiB |

The largest individual contributors included Git pack files, `data/zylora.db`, native Node binaries, and large template images. The 81-template reachability audit found 319.264 MiB of source, 190,997,383 referenced asset bytes, and 139,140,904 orphan-candidate asset bytes. Runtime template source remains required by current site creation/rendering paths; orphan assets were excluded from the release context.

### Release-context result

The deterministic packager generated a context from the exact candidate SHA and only Git-tracked runtime files. It retained 81 templates, 146 rendered pages, and all 2,638 referenced assets.

| Context | Files | Bytes | MiB |
|---|---:|---:|---:|
| Before release-only optimization | 2,100 | 229,869,143 | 219.220 |
| Final `release_context-d9eb284` after JPEG quality 65 | 2,102 | 166,243,059 | 158.542 |

The final optimizer changed 917 raster files, reducing 169,950,728 bytes to 106,180,113 bytes, saving 63,770,615 bytes. This is a release-context transformation only; source assets were not deleted.

### Classification and exclusions

| Item | Classification | Release treatment |
|---|---|---|
| `app`, migrations, `run.sh`, Dockerfile, required scripts | Runtime/build required | Included |
| `static`, reachable template render files/assets | Runtime required | Included |
| `template_projects` orphan assets | Generated/stale candidate | Excluded by reachability packager |
| `.git`, GitHub metadata | Development-only | Excluded |
| `node_modules`, Python caches, Playwright/browser caches | Build/test-only | Excluded |
| `data`, local DB/media, test artifacts, screenshots, recordings | Development/user-generated data | Excluded |
| root `release_context*` directories | Generated/reproducible | Excluded from the context itself |

The final context passed `verify_release_context.py`: 81 templates, 146 rendered pages, 2,638 asset references, zero missing assets. It passed `release_package_qa.py` with zero forbidden artifacts. The previous HTTP 413 was not repeated, but the upload problem is not resolved: the final attempts failed with HTTP 503/API transport errors before a build existed.

## D. Build results

| Check | Result | Evidence |
|---|---|---|
| Python compileall | PASS | `python -m compileall -q app migrations scripts` |
| Release-tool syntax | PASS | `py_compile` for packager, optimizer, profiler |
| Studio TypeScript | PASS | `npx tsc --noEmit -p studio/tsconfig.json` |
| Studio production build | PASS | Vite 8.2.2; 39 modules; 327.09 kB; 99.08 kB gzip |
| Next-source check | PASS | 480 files, 0 errors |
| Final release-context asset verification | PASS | zero missing assets |
| Final release-package QA | PASS | zero forbidden artifacts |
| Separate frontend build | NOT CONFIGURED | `package.json` exposes `build:studio` only |

## E. Automated test results

Final `pytest -q` on the release SHA:

- **451 passed**
- **1 failed**
- **1 skipped**
- **59 warnings**
- Duration: 428.32 seconds

The single failure is `tests/test_e2e.py::test_combined_browser_product_workflow`. Chromium and Firefox completed their nine workflow assertions. The WebKit subprocess failed before page creation with Playwright `TargetClosedError: Browser.new_page: Target page, context or browser has been closed`.

The 59 warnings were one Starlette/httpx deprecation warning and 58 Starlette cookie deprecation warnings. No test was removed or weakened.

Focused Studio contract tests on the implementation change: **17 passed**.

## F. Browser QA

### Studio matrix

The Studio matrix covers 11 viewports: 1920×1080, 1536×864, 1440×900, 1366×768, 1280×800, 1024×768, 768×1024, 430×932, 390×844, 375×812, and 360×800. Each viewport exercises 12 checks: blank canvas, text insertion, panel close, selection, duplication, nudge, multi-select, aggregate drag, aggregate resize, grouping/ungrouping, autosave, and document overflow.

| Engine | Result |
|---|---|
| Chromium | **PASS — 11/11 viewports, 132/132 recorded checks, 0 browser errors** |
| Firefox | **PASS — 11/11 viewports, 132/132 recorded checks, 0 browser errors** |
| WebKit | **BLOCKED — browser closed before first page; reproduced twice** |

The combined blank Studio journey likewise completed Chromium and Firefox and stopped at WebKit page creation. WebKit is therefore not certified for this release.

### Live public-route smoke

The read-only smoke against the currently live Railway domain covered 15 routes × 2 viewports × 3 engines = 90 route/viewport checks. It is explicitly evidence for the older live deployment, not `d9eb284`.

- `/` and `/pricing` returned 200 in the three engines and both viewports.
- The other 13 expected public routes returned 404 in all engines/viewports: 78 route requests.
- H1 count was one and horizontal overflow was false in the returned pages.
- Console errors accumulated during the failed route navigations.

## G. Responsive QA

`platform_responsive_qa.py` passed **56 checks, 0 errors** across:

- Widths: 1440, 1280, 1024, 768, 430, 390, 375, 360.
- Pages: `index.html`, `templates.html`, `login.html`, `signup.html`, `choose-plan.html`, `dashboard.html`, `editor.html`.

This is a static responsive contract check. The exact candidate still lacks a deployed authenticated browser verification.

## H. Studio performance

The reproducible profiler uses an isolated database and creates a 500-node document. It measures five resize samples, frame timing, long tasks, layout reads, interaction time, and `JSON.stringify` during autosave. Evidence files are `artifacts/repository-audit/performance-profile-before.json` and `performance-profile-after.json`.

| Metric | Before | After |
|---|---:|---:|
| Requested/rendered nodes | 500 / 576 | 500 / 576 |
| DOM elements | 1,314 | 1,314 |
| Sequential insertion | 36,732.16 ms | 36,983.86 ms |
| Resize samples | 5 | 5 |
| Long tasks | 0 | 0 |
| Maximum long-task duration | 0 ms | 0 ms |
| Median frame time | 16.7 ms | 16.7 ms |
| Maximum sample p95 frame time | 33.3 ms | 33.4 ms |
| Maximum frame observed | 66.7 ms | 66.6 ms |
| Maximum interaction time | 310.69 ms | 336.70 ms |
| Average layout reads/sample | 507 | 507 |
| Maximum layout-read time | 2.3 ms | 2.8 ms |
| Total serialization time | 25.2 ms | 25.5 ms |
| Maximum serialization call | 4.8 ms | 3.5 ms |

The implementation change removes full-page cloning and all-node z-index synchronization from geometry/nudge commits. It does not change gesture semantics. The measured pair does not prove a wall-clock improvement: insertion and maximum interaction time increased, while maximum serialization call decreased. A narrow acceptance threshold of zero long tasks and p95 frame time ≤50 ms is met by the after sample, but the historical long-task warning and the non-improving wall-clock result mean Gate 20 remains **CONDITIONAL**, not certified PASS. Repeated profiling on a host with stable browser processes is required.

## I. Production deployment

### Candidate deployment

- Exact context: `release_context-d9eb284`.
- Railway CLI upload: HTTP 503 `UPLOAD_FAILED`, before an associated build.
- Railway API retry: request failure; the second record later reached `FAILED` without an associated build.
- Build logs for both candidate records: unavailable because neither deployment has an associated build.
- Migration status: not observed for the candidate.
- Startup status: not observed for the candidate.

### Current live environment

Read-only checks against `https://zylora-api-production.up.railway.app` returned:

- `/api/health`: HTTP 200, body `{"status":"ok"}`.
- `/`: HTTP 200.
- `/static/studio.js`: HTTP 200, 309,162 bytes.

These responses are from the prior live deployment and cannot establish candidate health. Live logs during the smoke included expected unauthenticated `401` responses and repeated `404` responses for the 13 missing public routes. No candidate logs were available.

## J. Authenticated golden path

**NOT PERFORMED.** The exact candidate was not running in production, and no authorized production test credentials were available in the local environment. Signup, Turnstile completion, login, site creation, canonical Studio editing, autosave reload, preview, publish, public mobile rendering, chatbot, lead capture, appointments, credit deductions, logout/login, and persistence across re-entry therefore remain unverified in production.

No database manipulation or authentication bypass was used.

## K. SUPER_ADMIN verification

**NOT PERFORMED in production.** Local authorization and role-separation tests ran as part of the suite, but `/super-admin` capabilities, role enforcement, user management, health, payments, credits, audit logs, and per-user drilldown were not verified against the deployed candidate.

## L. Billing

Local server-authoritative billing and regional-pricing tests are covered by the passing portion of the test suite. Live checkout, payment verification, webhook idempotency, activation, failure handling, upgrade/downgrade, and cancellation were not tested.

Railway reports `PAYMENT_PROVIDER` configured as `razorpay`, but `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, and `RAZORPAY_WEBHOOK_SECRET` are not configured. This blocks live billing certification.

## M. AI credit system

Local unified-credit, reservation, settlement, refund, idempotency, and insufficient-credit tests are included in the passing local suite. No live AI-credit path was run. Railway reports `OPENAI_API_KEY` and both model variables configured, but provider reachability and production ledger behavior remain untested.

## N. Lead credit system

Local lead notification and credit-accounting tests are included in the passing local suite. Production email-only, WhatsApp-only, dual-channel, retry, duplicate-event, and provider-failure accounting were not run. Railway reports Twilio variables and `RESEND_API_KEY` configured, but no live notification was sent.

## O. Publishing

Local renderer, Studio save, migration, preview, publish-plan, and public-site contract tests passed within the local suite. The candidate was not deployed, so production Studio save, preview, publish, public rendering, mobile rendering, chatbot, lead capture, and appointment behavior are **NOT TESTED**. The older live deployment failed the public-route smoke for 13 routes.

## P. Security

Executed local checks:

- Security pattern scan: PASS; no high-confidence secret patterns in 4,377 source/config files, values not printed.
- Security source QA: PASS; 231 files, 0 errors.
- Full local authorization, tenant-isolation, CSRF, upload, billing-signature, and provider-boundary tests are represented in the suite; the suite as a whole is not green because of the WebKit host failure.

Production security certification is incomplete because the exact candidate was not deployed. No Sev-1 security defect was found by the executed static/local checks; this does not replace live authorization and cookie verification.

## Q. Third-party providers

Only status categories are reported; secret values are intentionally omitted.

| Provider/configuration | Status | Evidence |
|---|---|---|
| PostgreSQL `DATABASE_URL` | CONFIGURED / NOT TESTED for candidate | Railway variable exists; candidate had no build/startup |
| Redis | NOT CONFIGURED | Optional in current source |
| OpenAI | CONFIGURED / NOT TESTED | Railway key and model variables exist |
| Resend | CONFIGURED / NOT TESTED | `RESEND_API_KEY` exists; `EMAIL_FROM` is absent and `RESEND_FROM` is not the field consumed by current `Settings` |
| Email unsubscribe secret | NOT CONFIGURED | Required by current production validator |
| Twilio WhatsApp | CONFIGURED / NOT TESTED | Required Twilio variables exist |
| Meta WhatsApp fallback | NOT CONFIGURED | Phone ID and access token absent |
| Google OAuth | CONFIGURED / NOT TESTED | Client ID, secret, and redirect URI exist |
| Turnstile | CONFIGURED / NOT TESTED | Site key, secret, enabled flag, and allowed hostnames exist; no real challenge was run |
| Razorpay | NOT CONFIGURED / BLOCKED | All three live Razorpay variables absent |
| Cloudflare API/zone | NOT CONFIGURED | API token and zone ID absent |
| Cloudflare SaaS target | CONFIGURED / NOT TESTED | Target variable exists |
| S3 media storage | CONFIGURED / NOT TESTED | S3 provider and bucket/access variables exist |
| SUPER_ADMIN bootstrap | CONFIGURED / NOT TESTED | Server-side bootstrap variables exist; values omitted |

The Railway environment was confirmed as `production`; no secret value was printed.

## R. Production log review

- Candidate deployment logs: **NOT AVAILABLE**; both candidate deployment records have no associated build.
- Prior live deployment during public smoke: expected `401` for unauthenticated session probes and repeated `404` for the 13 missing public routes.
- No candidate traceback, migration failure, or startup result can be inferred from the `INITIALIZING` records.
- The 404s are classified as a deployed-revision mismatch/product-surface defect in the current live environment, not attributed to the unreleased candidate.

## S. Known issues

| Severity | Issue | Minimum remaining action |
|---|---|---|
| SEV-2 | Exact candidate upload fails with HTTP 503/API transport failure before build; deployment records remain `INITIALIZING` with SHA `-`. | Restore Railway/GitHub transport, push the exact release SHA, and verify a build and running deployment. |
| SEV-2 | Current production lacks `EMAIL_UNSUBSCRIBE_SECRET`, which the candidate source validator requires in production. | Configure the required secret through the approved secret-management path, then redeploy and verify startup. |
| SEV-2 | Origin/main cannot be read and cached `origin/main` differs from local SHA. | Restore GitHub connectivity, push/verify the exact release commit, and record live remote SHA. |
| SEV-2 | Authenticated golden path and SUPER_ADMIN production paths are untested. | Use authorized production test credentials after exact deployment. |
| SEV-2 | Live billing variables are absent for configured Razorpay provider. | Provision approved live/test Razorpay credentials and run non-destructive checkout/webhook certification. |
| SEV-3 | WebKit browser process closes before page creation on this host; reproduced twice. | Run the same matrix on a host with a functioning WebKit Playwright runtime. |
| SEV-3 | 500-node profiler shows no long tasks in the after sample but no wall-clock improvement and only one before/after pair. | Repeat profiling on a stable browser host and define/meet the final product threshold. |
| SEV-3 | Template dependency audit finds one remote production image in `template_projects/hollhii-agency/render/home.html`. | Localize or explicitly approve that legacy template dependency without removing current template functionality. |
| SEV-2 | Current live deployment returns 404 for 13 expected public routes. | Deploy and verify the current source revision, then rerun the public-route smoke. |

## T. Final release gate matrix

| Gate | Status | Evidence | Blocking? |
|---|---|---|---|
| 1. Full local automated suite green | FAIL | 451 passed, 1 failed, 1 skipped, 59 warnings; WebKit E2E failure | Yes |
| 2. Studio production build | PASS | Vite 39 modules; 327.09 kB | No |
| 3. Chromium QA | PASS | 11/11 viewports, 132 checks, 0 errors | No |
| 4. Firefox QA | PASS | 11/11 viewports, 132 checks, 0 errors | No |
| 5. WebKit QA | BLOCKED | TargetClosedError before first page, twice | Yes |
| 6. Responsive matrix | PASS | 56 checks, 0 errors, 8 widths | No |
| 7. Deployment payload issue resolved | BLOCKED | 158.542 MiB context; upload still failed 503 before build | Yes |
| 8. Railway deployment succeeds | FAIL | Candidate records have no associated build | Yes |
| 9. Exact deployed SHA known/matches | FAIL | Candidate SHA is `-`; local is `d9eb284...` | Yes |
| 10. Application startup | NOT TESTED | No candidate build/startup | Yes |
| 11. Database connection | NOT TESTED | No candidate startup | Yes |
| 12. Production migrations | NOT TESTED | Local migration QA passed; candidate predeploy not observed | Yes |
| 13. Authenticated production golden path | NOT TESTED | No authorized credentials/candidate deployment | Yes |
| 14. SUPER_ADMIN production verification | NOT TESTED | No candidate deployment | Yes |
| 15. Publish/public rendering | NOT TESTED | Local contracts pass; current live revision has 13 route 404s | Yes |
| 16. AI-credit accounting | CONDITIONAL | Local tests pass; live path not tested | Yes |
| 17. Lead-credit accounting | CONDITIONAL | Local tests pass; live delivery not tested | Yes |
| 18. Billing/payment path | BLOCKED | Razorpay provider selected; live keys absent | Yes |
| 19. No unresolved Sev-1/Sev-2 security issue | CONDITIONAL | Local scans pass; live security verification incomplete | Yes |
| 20. 500-node performance | CONDITIONAL | After sample: zero long tasks and p95 frame 33.4 ms; wall-clock improvement not demonstrated | Yes |

## U. Final recommendation

**DO NOT LAUNCH.**

Neither a free/beta launch nor a paid commercial launch is approved. The minimum release sequence is:

1. Restore GitHub/Railway transport and deploy the exact `d9eb2843bce51ae721aa0dfd1edbbda63b5e94a4` commit.
2. Configure and safely validate the required production environment, especially `EMAIL_UNSUBSCRIBE_SECRET` and the selected billing provider credentials.
3. Confirm build, migrations, startup, health, logs, and deployed SHA.
4. Rerun the full suite and browser matrices on a host with functioning WebKit.
5. Execute the authorized authenticated and SUPER_ADMIN production journeys, including publish, credits, leads, appointments, and billing.
6. Repeat the 500-node performance profile and update this report with only the final deployment’s evidence.

Until those actions pass, the truthful verdict remains **NOT PRODUCTION READY**.
