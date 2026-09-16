# ZYLORA V1 FINAL PRODUCTION CERTIFICATION

Date: 2026-09-16 (Asia/Calcutta)

## A. FINAL VERDICT

**NOT PRODUCTION READY**

The local release candidate is green and the tested legacy Studio/dashboard
surface is ready for controlled review. Full production certification is not
issued because the exact commit has not been deployed and verified on Render,
real PostgreSQL has not been exercised, and live provider smoke tests were not
available in this environment. Penpot remains a pinned, fail-closed,
deferred production path while the legacy engine is active.

## B. CERTIFIED VERSION

| Field | Value |
|---|---|
| Repository | `zylora1/zylora-V3` |
| Branch | `main` |
| Base commit before release commit | `8c29bee4c62543744ab07d953afa9d48b0ea9fb1` |
| Release candidate implementation commit | `ce3097fdc02626a53c8ce92445009ba1eaee4db7` |
| Working-tree state at audit start | Existing authorized changes; preserved without reset/clean |
| Active Studio engine | `legacy` |
| Penpot source | `vendor/penpot/` at 2.17.0 / `bdce5817ea86d028db29113d9ecdadcf07097b36` |

The release candidate implementation commit was created locally. The working tree still has
preserved out-of-scope historical/generated changes that were intentionally
not included in this commit. No deployment SHA is claimed because Render
access is unavailable.

## C. CHANGES MADE DURING CERTIFICATION

- Fixed the responsive harness assertion to match current Zylora-owned copy.
- Clipped the document root to prevent hidden off-canvas drawers from creating
  real horizontal document overflow.
- Updated the rich Studio browser harness to use the current eight-tool rail,
  blank sections, and canonical viewport panning state.
- Added the exact `axe-core` 4.13.0 dev dependency and lockfile entry for the
  reproducible accessibility run.
- Added a `<main>` landmark for SiteDocument-rendered pages and for legacy
  template output when a user document has no main landmark; runtime scripts
  remain outside the landmark.
- Preserved legacy template heading tags while adding calculated
  `aria-level` values only where the authored outline skipped levels.
- Tightened the Studio v4 browser journey with a real smart-guide visibility,
  geometry-commit and cleanup assertion in Chromium, Firefox and WebKit.
- Updated the final audit matrix and bug log with the superseding browser and
  accessibility evidence.

## D. TEST SUMMARY

| Check | Result |
|---|---|
| Full Python suite | **531 passed, 0 failed, 0 skipped, 59 warnings** |
| Full-suite duration | **387.44s (0:06:27)** |
| Focused redesign contract | **5 passed** in 4.61s |
| Focused renderer/import/regression group | **50 passed** in 39.17s |
| Accessibility heading-order regression | **2 passed** in 9.14s |
| Focused browser E2E | **1 passed** in 50.96s |
| Security/provider contract tests | Local contract evidence remains green; no live-provider claim |

The 59 warnings are dependency deprecations from Starlette/httpx cookie
handling. They do not indicate a failed product assertion.

## E. BUILD SUMMARY

| Build/check | Result |
|---|---|
| Python compileall (`app scripts tests`) | PASS |
| Studio TypeScript/build pipeline | PASS |
| Studio production build | PASS — Vite 8.2.2; 335.11 kB, 101.27 kB gzip |
| JavaScript syntax (`dashboard.js`, `dashboard-tinkered.js`) | PASS |
| JSON/schema/manifest checks | PASS in existing Penpot contract evidence |
| `git diff --check` | PASS; line-ending normalization warnings only |
| Exact conflict-marker scan | PASS |

## F. BROWSER MATRIX

| Surface | Chromium | Firefox | WebKit |
|---|---|---|---|
| Landing/dashboard/super-admin responsive harness | PASS; 0 console/page errors | PASS; 0 console/page errors | PASS; 0 console/page errors |
| Legacy Studio rich interaction | PASS; 12/12, 0 errors | PASS; 12/12, 0 errors | PASS; 12/12, 0 errors |
| Legacy Studio smart-guide v4 journey | PASS; 29/29, 0 errors | PASS; 29/29, 0 errors | PASS; 29/29, 0 errors |
| Blank Studio workflow | PASS | PASS | PASS |
| Real Penpot Studio | DEFERRED / DISABLED PRODUCTION PATH | DEFERRED / DISABLED PRODUCTION PATH | DEFERRED / DISABLED PRODUCTION PATH |

The focused browser harnesses ran with elevated local browser permissions;
the earlier Windows process-startup failure is retained as historical
environment evidence and is not a current product assertion failure.

## G. RESPONSIVE MATRIX

The final Chromium geometry harness completed **64/64** checks with zero
console errors and zero failed network requests. Dashboard/super-admin QA also
completed all eight widths in each browser.

| Width | Result |
|---:|---|
| 1440 | PASS |
| 1280 | PASS |
| 1024 | PASS |
| 768 | PASS |
| 430 | PASS |
| 390 | PASS |
| 375 | PASS |
| 360 | PASS |

## H. ACCESSIBILITY

Actual axe-core run: `artifacts/final-production-certification/accessibility-axe-certification.json`

| Impact | Count |
|---|---:|
| Critical | 0 |
| Serious | 0 |
| Moderate | 0 |
| Minor | 0 |

Landing, login, signup, dashboard, super-admin, the legacy Studio shell and
the published preview have no axe violations. Legacy templates retain their
authored `h1`/`h5`/`h6` visual tags; the runtime now adds non-destructive
`aria-level` corrections when the authored outline skips levels. The focused
regression verifies that visual tags remain unchanged while the accessible
outline is ordered.

## I. DASHBOARD CERTIFICATION

The Tinkered-inspired shell was verified at all required widths. Sidebar,
dashboard views, super-admin views, site cards, responsive controls and the
account/product shell loaded without console or page errors. The responsive
root overflow regression was fixed with root clipping while preserving the
drawer’s own interaction model.

## J. AI CREATOR CERTIFICATION

Local API, mutation, SiteDocument and credit-contract suites remain green.
The creator is routed through the existing AI abstraction. A real Vercel AI
Gateway request was **not tested** because no staging credential was present.

## K. STUDIO CERTIFICATION

Legacy Studio remains the active engine. Dedicated browser evidence covers
blank-site creation, text/button/section insertion, selection, multi-select,
ordering, panning, resize/rotation contracts, viewport matrix and persistence.
The rich harness has 12 checks per browser with zero errors. The tightened v4
journey adds 29 checks per browser, including guide visibility during an
intentional drag, committed geometry and guide cleanup after release. The real
Penpot path is intentionally deferred and disabled for production; its
fail-closed gate remains in place and it is not used by the active editor.

### Legacy Studio performance evidence

The latest repeatable profile is
`artifacts/final-production-certification/performance-profile-drag-raf-built.json`.
It measures the legacy editor, not Penpot.

| Nodes | Drag p50/p95 | Resize p50/p95 | Undo p95 | Zoom p95 | Long tasks |
|---:|---:|---:|---:|---:|---:|
| 50 | 16.7 / 16.8 ms | 16.7 / 16.7 ms | 16.7 ms | 16.8 ms | 0 |
| 100 | 16.7 / 16.8 ms | 16.7 / 16.8 ms | 16.7 ms | 16.7 ms | 0 |
| 250 | 16.7 / 16.7 ms | 16.7 / 16.8 ms | 16.7 ms | 16.7 ms | 0 |
| 500 | 16.7 / 16.8 ms | 16.7 / 16.7 ms | 33.4 ms | 16.7 ms | 0 |

Penpot load, interaction, compile, preview and publish performance is not
tested because the production Penpot path is disabled and no runtime is
available in this environment.

## L. AI CREDIT CERTIFICATION

Local reservation/settlement/refund, idempotency, CAS and insufficient-credit
tests pass. Live provider usage/cost settlement is **not tested**.

## M. LEADS CERTIFICATION

Local lead persistence, ownership, validation, notification-contract and
single-credit bundle tests pass. Live Telnyx delivery, bounce handling and
provider webhooks are **not tested**.

## N. APPOINTMENTS CERTIFICATION

Local availability, ownership, conflict and cancellation contracts pass.
Live timezone/DST and production-provider flows are **not tested**.

## O. BILLING CERTIFICATION

Mock/local entitlement and webhook-idempotency contracts pass. Razorpay
test-mode credentials were not configured; no real payment was attempted.

## P. AUTHENTICATION CERTIFICATION

Local signup/login/logout, session, OAuth/PKCE contract, scope, revocation and
role-boundary suites pass. Google OAuth live callback and production cookie
configuration are **not tested**.

## Q. SUPER ADMIN / ROLE SEPARATION

Dashboard QA exercised the super-admin shell and all configured views in
Chromium, Firefox and WebKit. Server-side role/tenant isolation tests remain
green. No client-side navigation hiding is used as the authorization boundary.

## R. SECURITY SANITY

The local suite covers tenant IDOR, role separation, stale revisions, OAuth
state/PKCE, scopes, allowlists, revocation, idempotency, unsafe URLs, media
validation, branding/page-limit enforcement and webhook contracts. No P0/P1
product defect was reproduced locally. Live provider signatures and live
PostgreSQL concurrency remain external gates.

## S. LANDING / SEO CERTIFICATION

Landing/auth/dashboard surfaces passed the responsive and axe runs. Existing
SEO routes, semantic output, canonical handling and structured metadata remain
covered by the full suite. A production-domain crawl and search-console check
were not performed.

## T. PLAYWRIGHT / WINERROR 5 RESOLUTION

The original failure was a Windows browser-process startup restriction
(`WinError 5`/`TargetClosedError`), before product assertions ran. The final
browser runs used the same harnesses under elevated permissions; Chromium,
Firefox and WebKit completed the dashboard and legacy Studio checks with zero
browser errors. This resolves the local harness blocker, but it is not evidence
of a real Penpot runtime.

## U. DEPLOYMENT

Render is the current deployment target, but this workspace has no authenticated
Render CLI/API session, Render service URL, or deployment credential. No
production deployment was attempted. Therefore:

**DEPLOYMENT VERIFICATION NOT EXECUTABLE FROM CURRENT ENVIRONMENT**

The exact certified commit cannot be compared with a Render deployed SHA, and
production smoke tests were not run.

The local production configuration guard was exercised separately: setting
`APP_ENV=production` with a SQLite `DATABASE_URL` was rejected with the
expected fail-closed error (`production sqlite fail-closed: PASS`). This does
not substitute for a real PostgreSQL migration/concurrency rehearsal.

## V. PRODUCTION ENVIRONMENT CONTRACT

Names only; values intentionally omitted.

**Required/conditional:** `APP_ENV`, `APP_URL`, `DATABASE_URL`,
`AI_GATEWAY_API_KEY`, `AI_GATEWAY_BASE_URL`, `TELNYX_API_KEY`,
`TELNYX_EMAIL_FROM`, `TELNYX_WHATSAPP_FROM`, `RAZORPAY_KEY_ID`,
`RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET`, application/session secret,
and the configured Cloudflare/domain settings.

**Optional feature configuration:** `GOOGLE_CLIENT_ID`,
`GOOGLE_CLIENT_SECRET`, `GOOGLE_REDIRECT_URI`, `TURNSTILE_SITE_KEY`,
`TURNSTILE_SECRET_KEY`, R2 settings, SMS settings and Penpot/OIDC settings.

`OPENAI_API_KEY`, `RESEND_API_KEY`, Twilio and Meta variables remain
compatibility-only paths and are not required by the Vercel/Telnyx production
architecture. No secret values were printed or committed.

## W. PRODUCTION SMOKE TEST

| Workflow | Status |
|---|---|
| Public local landing/auth/static routes | PASS locally |
| Authenticated dashboard/Studio local flows | PASS locally |
| Render health/startup/migrations | NOT TESTED — deployment access unavailable |
| Production PostgreSQL | NOT TESTED — no usable service/CLI/Docker engine |
| Disabled Penpot path (runtime/SSO/plugin/compile/publish) | DEFERRED — not enabled by the active production engine |
| Vercel AI Gateway | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| Telnyx | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| Cloudflare/R2/Turnstile | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| Razorpay test mode | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| Google OAuth staging | BLOCKED_BY_EXTERNAL_ENVIRONMENT |

## X. KNOWN NON-BLOCKING ISSUES

- The Penpot integration remains a deferred, disabled production path. Its
  source pin and fail-closed bridge are preserved, but no runtime claim is
  made while the legacy engine is active.
- The 59-test warning group is dependency deprecation noise, not a failed
  application assertion.

## Y. RELEASE BLOCKERS

1. Verify the exact release commit on Render and run production smoke tests.
2. Run the high-value suite against real PostgreSQL, including concurrency and
   migration rehearsal.
3. Run safe staging checks for Vercel AI Gateway, Telnyx, Cloudflare/R2/
   Turnstile, Razorpay test mode and Google OAuth when credentials/approvals
   are available.

The pinned Penpot source remains available for a separately authorized
staging activation. It is not an active production-release blocker while
`STUDIO_ENGINE=legacy` is enforced and the bridge fails closed.

## Z. FINAL VERDICT

**NOT PRODUCTION READY**
