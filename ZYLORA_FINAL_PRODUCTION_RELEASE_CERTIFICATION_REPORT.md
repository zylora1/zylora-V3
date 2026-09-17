# ZYLORA FINAL PRODUCTION RELEASE CERTIFICATION REPORT

**Date:** 2026-09-16  
**Verdict:** **CONDITIONALLY CERTIFIED**  
**Final Studio engine:** `legacy`  
**Launch recommendation:** **READY AFTER SPECIFIC EXTERNAL FIXES**

## A. Final Verdict

The locally controllable Zylora backend, security boundaries, provider
contracts, SiteDocument mutation path, publishing rules, semantic compiler and
legacy Studio contracts are passing. The release cannot receive an
unconditional production certification because the real Penpot runtime,
PostgreSQL, live providers and a stable WebKit process were unavailable on the
certification host. Railway staging access was confirmed, but the workspace's
expired trial prevents provisioning the missing Redis/Penpot services, and the
existing staging database cannot be reached from this host without a Railway
SSH key or TCP proxy.

### Railway staging evidence

The existing `zylora-staging` Railway project and `staging` environment were
resolved without touching production. The intended topology is documented in
[`docs/RAILWAY_STAGING_ARCHITECTURE.md`](docs/RAILWAY_STAGING_ARCHITECTURE.md).
The current environment contains the Zylora app/web/admin services and a
separate Zylora PostgreSQL service. A private Redis provisioning attempt was
rejected before resource creation because the Railway trial has expired. No
Penpot services were created, no production service was changed, and no deploy
was reported as successful. Detailed evidence is in
[`artifacts/final-production-certification/railway-staging-attempt-2026-09-16.txt`](artifacts/final-production-certification/railway-staging-attempt-2026-09-16.txt).

This leaves real Railway runtime, PostgreSQL, Penpot and provider staging gates
blocked by external account/runtime capacity.

## B. Executive Summary

The audit found no reproducible P0/P1 product defect in the focused security,
hardening, entitlement, CMS/SEO/media, provider-contract or legacy Studio
groups. The most significant current failures are environment gates:

- WebKit/Playwright process startup fails on this Windows host.
- Docker's Linux engine is unavailable, so Penpot cannot start.
- No usable PostgreSQL service is available.
- Live Vercel, Telnyx, Cloudflare, Razorpay and Google OAuth credentials are
  unavailable.

The application remains safe to keep on `STUDIO_ENGINE=legacy`; switching to
Penpot would be unsupported by evidence.

## C. Bugs Found

See the complete reproduction and disposition record in
[`docs/FINAL_RELEASE_BUG_LOG.md`](docs/FINAL_RELEASE_BUG_LOG.md).

| ID | Severity | Area | Root cause | Fix/disposition | Status |
|---|---|---|---|---|---|
| REL-ENV-001 | P1 release blocker | Browser QA | WebKit process exits with `TargetClosedError`; managed process startup also returned `WinError 5` | Classified as environment-blocked; Chromium and Firefox gap runs pass | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| REL-ENV-002 | P1 release blocker | Penpot | Docker Linux engine unavailable | Legacy engine retained; Penpot source bridge remains fail-closed | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| REL-ENV-003 | P1 release blocker | PostgreSQL | No usable PostgreSQL service | No PostgreSQL claim made | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| REL-ENV-004 | P1 release blocker | Live providers | Staging credentials/accounts unavailable | Adapter contracts retained; no fake live result | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| REL-ENV-005 | P1 release blocker | Railway staging capacity | Workspace trial expired; missing Redis/Penpot services cannot be provisioned | No plan change authorized; staging remains isolated and production untouched | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| REL-ENV-006 | P1 release blocker | Railway PostgreSQL access | Existing staging database has no TCP proxy and no SSH key is available on this host | No database mutation; defer real PostgreSQL certification to a Linux/Railway runner | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| REL-UX-001 | P3 | Smart guides | Browser probe reports the temporary-guide assertion as `UNVERIFIED` | No reproducible geometry/browser error captured | OPEN / UNVERIFIED |
| REL-RISK-001 | P2 risk | Provider migration | Compatibility fallbacks remain until live Vercel/Telnyx cutover proof | Kept intentionally; removal would be unsafe before live verification | DOCUMENTED RISK |

## D. Bugs Remaining

No reproducible local P0/P1 product defect remains. The open certification
blockers and the smart-guide uncertainty are listed above. Provider fallback
paths remain compatibility code, not silently selected production defaults.

## E. Full Regression

- Previous complete repository run after the Penpot changes: **527 passed,
  0 failed, 0 skipped, 59 warnings in 710.75s**.
- Current focused release/security run: **27 passed, 1 warning in 124.29s**.
- Current entitlement/configuration run: **46 passed, 1 warning in 102.00s**.
- Current CMS/SEO/media/Telnyx/CRM run: **32 passed, 1 warning in 110.83s**.
- Current legacy Studio contract run: **29 passed, 1 warning in 40.98s**.
- Current semantic/compiler/migration run: **24 passed, 0 failed, 0 skipped in
  7.40s**.
- Final full-suite rerun: **527 passed, 0 failed, 0 skipped, 59 warnings in
  710.65s (0:11:50)**.

Build and source checks: Python `compileall` PASS; Studio TypeScript PASS;
Studio build PASS (`334.64 kB`, gzip `101.17 kB`); plugin syntax PASS; Penpot
registry/schema/fixture JSON parsing PASS; conflict-marker scan PASS;
high-confidence source secret scan PASS; `git diff --check` PASS with only
line-ending normalization warnings.

The 59 test warnings are known Starlette/httpx deprecation warnings: one import
warning and 58 per-request-cookie warnings from the role-dashboard test group.
They do not indicate a failed product assertion, but should be removed before
the next dependency refresh.

## F. Authentication

Local tests cover signup, duplicate/invalid input, email verification, login,
logout, password reset, one-time token replay, OAuth state/claims, session
revocation and production configuration fail-closed behavior. Google OAuth live
identity verification is **BLOCKED_BY_EXTERNAL_ENVIRONMENT**.

## G. Tenant / Role Security

Tenant ID substitution, cross-site reads/writes, media/knowledge access,
agent allowlists, stale revisions, scopes, revocation and normal-user access
to admin APIs pass locally. Real Penpot file tenant isolation is not tested.

## H. Dashboard

Dashboard data and route contracts pass locally. Existing desktop/browser
artifacts cover the supported layout matrix. The standalone combined browser
rerun is environment-dependent: one run passed inside the full suite, while a
direct rerun failed before product assertions because the WebKit process
exited. No stable fresh cross-browser sign-off is claimed.

## I. Super Admin

Role separation, user/site/payment/credit controls and audit-oriented service
contracts pass locally. Destructive-action browser verification is incomplete.

## J. Studio

### Legacy Studio

The legacy Studio remains authoritative. Local tests cover geometry, selection,
history, recovery, CAS, responsive state, publish fidelity and semantic
renderer behavior. Chromium and Firefox gap-closure probes each passed 12
actionable checks with no browser errors. WebKit is blocked by the host.

### Penpot Studio

The official source is pinned, the semantic registry/compiler/migration/plugin
contract is locally tested, but the actual runtime, SSO, file lifecycle,
plugin execution and real-file publish flow are **NOT TESTED**.

## K. Pages / Navigation

The server-side 298-page limit, page IDs/slugs, navigation actions, unsafe URL
validation and stale revision handling pass local tests. Real Penpot page
operations and 297/298/299 runtime behavior through the actual plugin remain
blocked.

## L. Leads / Forms

Lead/contact/enquiry validation, ownership, persistence, credit accounting,
duplicate handling and failure-safe notification contracts pass locally. Live
Telnyx delivery is blocked.

## M. Appointments

Availability, conflict handling, idempotency, ownership and cancellation paths
pass locally. Live provider and full public-browser journeys remain partial.

## N. AI

AIService, model registry, hosted-credit reservation/settlement tests, prompt
safety and deterministic mutation/CAS tests pass locally. Live Vercel Gateway
requests, provider failover and live usage verification are blocked.

## O. External AI

MCP initialize/tools/list/tools/call, REST tool authorization, OAuth PKCE,
scopes, allowlists, revocation, idempotency and stale revision tests pass
locally. Penpot-backed human/AI continuity is blocked because the real Penpot
source bridge is not enabled.

## P. CMS / Blog

CMS collection, field, binding, tenant ownership and SEO-related local tests
pass. Blog/CMS browser and large live dataset validation remain partial.

## Q. SEO

Local tests cover titles, descriptions, canonical URLs, sitemap quality,
structured output and public-route safety. Custom-domain and live hosted-site
verification are blocked.

## R. Publishing

The tested local pipeline remains:

`SiteDocument → validation → plan/branding checks → publisher → hosted output`.

CAS, failed-provider handling, revision/history and branding tests pass. Real
Penpot compile/preview/publish and live hosting invalidation are not tested.

## S. Billing

Mock/test-mode checkout, subscription verification, replay/out-of-order
webhooks, entitlement changes and credit top-ups pass locally. No destructive
live payment was attempted. Live Razorpay verification is blocked.

## T. Providers

| Provider | Status |
|---|---|
| Vercel AI Gateway | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| Telnyx | LOCAL VERIFIED; live delivery blocked |
| Cloudflare/R2/Turnstile | LOCAL CONTRACT VERIFIED; live environment blocked |
| Razorpay | LOCAL TEST/MOCK VERIFIED; live staging blocked |
| Google OAuth | LOCAL CONTRACT VERIFIED; live identity blocked |

## U. Penpot

- Source: official `2.17.0`, commit `bdce5817ea86d028db29113d9ecdadcf07097b36`.
- Submodule: clean; zero modified upstream files.
- Runtime: **BLOCKED_BY_EXTERNAL_ENVIRONMENT**.
- SSO/file lifecycle/plugin/browser/compiler/publish: **NOT TESTED**.
- Compliance: **NEEDS_LEGAL_REVIEW**; repository notices and manifests exist.

## V. PostgreSQL

**BLOCKED_BY_EXTERNAL_ENVIRONMENT.** The completed suite uses the available
local SQLite path; PostgreSQL migrations, locks, JSON behavior and transaction
semantics are not certified here.

## W. Security

Focused adversarial/security/hardening groups pass. Covered categories include
cross-tenant access, admin boundaries, stale revisions, replay/idempotency,
unsafe URLs, malicious media, prompt injection, rate limits, OAuth claims,
webhook ordering and publish authorization.

## X. Accessibility

Recorded local axe result: **0 critical, 0 serious, 20 moderate, 0 minor**.
Moderate findings remain documented. A fresh complete browser rerun is blocked
by the current Playwright environment.

## Y. Performance

Legacy Studio performance evidence is available. Penpot-backed load/edit/save,
compile, preview and publish measurements are not available because Penpot
cannot start. No Penpot performance claim is made.

## Z. Browser Matrix

| Surface | Chromium | Firefox | WebKit |
|---|---|---|---|
| Legacy Studio gap closure | PASS: 12 actionable checks | PASS: 12 actionable checks | BLOCKED: Playwright process startup |
| Combined auth/dashboard/public workflow | PASS inside final full suite; standalone rerun environment-dependent | NOT CURRENTLY RUN | BLOCKED by harness startup |
| Penpot Studio | NOT TESTED | NOT TESTED | NOT TESTED |

## AA. Responsive Matrix

Existing local artifacts cover `1440`, `1280`, `1024`, `768`, `430`, `390`,
`375` and `360`. The current audit did not produce a new complete browser
matrix because the browser process blocker occurs before the combined workflow.

## AB. Complete Workflow Matrix

| Workflow | Result |
|---|---|
| New customer signup → site → Studio → publish | PARTIAL: local/API and legacy Studio contracts pass; combined browser rerun blocked |
| Existing customer edit → republish | PASS local / PARTIAL browser |
| Hosted AI edit → credits → undo/publish | PASS local / live provider blocked |
| External AI authorize → edit → revoke → Studio | PASS protocol/local / Penpot continuity blocked |
| Lead submission → storage → notification → retry | PASS local / live Telnyx blocked |
| Appointment booking → conflict → cancellation | PASS local / full public browser partial |
| Billing test mode → entitlement → replay | PASS local |
| Custom domain lifecycle | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| Super-admin inspect/change/restrict/restore | PASS local / browser partial |
| Network/publish failure recovery | PASS local contract / browser network simulation partial |

## AC. Environment Blockers

1. Docker Linux engine for Penpot.
2. Stable Playwright WebKit/browser process on this host.
3. PostgreSQL service.
4. Live provider staging credentials/accounts.
5. Railway staging capacity: the authenticated `zylora-staging` workspace trial
   is expired, so the missing Redis/Penpot services cannot be provisioned; the
   existing staging app has no successful current deployment. The existing
   PostgreSQL service is private with no TCP proxy, and this host has no SSH key
   for a Railway tunnel.

The Railway variable inspection was not copied into the report. Any staging
credentials exposed by an operator-facing console during diagnosis should be
rotated before that environment is reused.

## AD. Release Risks

- Penpot is not the production editor yet.
- Compatibility provider paths remain until live replacement proof exists.
- PostgreSQL-specific behavior is unverified.
- Moderate accessibility findings remain.
- One smart-guide browser assertion remains unverified.

## AE. Rollback Plan

Keep `STUDIO_ENGINE=legacy`. Existing SiteDocument snapshots, revisions,
history and Penpot migration checkpoints provide rollback. The Penpot source
bridge rejects external writes until runtime/mapping evidence is verified.

## AF. Final Studio Engine

`legacy`.

Evidence does not support switching to `penpot`.

## AG. Final Launch Recommendation

**READY AFTER SPECIFIC EXTERNAL FIXES**.

Minimum actions before public V1 certification:

1. Start and exercise the pinned Penpot runtime, SSO, plugin, file lifecycle,
   compile, preview, publish and human/AI continuity.
2. Run the full browser matrix on a stable Chromium/Firefox/WebKit host.
3. Run migrations and high-value tests against PostgreSQL.
4. Perform safe staging verification for Vercel, Telnyx, Cloudflare, Razorpay
   and Google OAuth.
5. Resolve or explicitly accept the documented moderate accessibility findings
   and smart-guide uncertainty.
6. Restore Railway staging capacity (or provide an equivalent Linux staging
   runner) and rotate any staging credentials exposed during diagnosis.
