# Zylora Final Release Bug Log

Date: 2026-09-16

This log distinguishes product defects from certification blockers caused by
unavailable external environments. No P0/P1 product defect was reproducible in
the local focused suites.

| ID | Severity | Component | Reproduction | Root cause | Fix / disposition | Files | Test | Status |
|---|---|---|---|---|---|---|---|---|
| REL-ENV-001 | P1 release blocker | Browser certification | Run `pytest -q tests/test_e2e.py` or `python scripts/blank_studio_browser_e2e.py` | Playwright WebKit process exits with `TargetClosedError` / exit `3221225501`; the managed Windows host also produced `WinError 5` while starting Playwright transport | No product change; classify browser evidence as blocked. Chromium and Firefox Studio gap runs still pass. | `scripts/blank_studio_browser_e2e.py`, `scripts/browser_e2e.py` | current E2E run; Chromium/Firefox gap closure | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| REL-ENV-002 | P1 release blocker | Penpot runtime | Start the pinned Penpot distribution and exercise `/studio/{site_id}` | Docker Linux engine is unavailable; a bounded Docker Desktop start attempt left the `desktop-linux` server pipe absent, and Railway cannot provision the Penpot service set | Keep `STUDIO_ENGINE=legacy`; preserve fail-closed `source_bridge_ready=false` gate | `integrations/penpot/penpot.lock.json`, `app/penpot_manifest.py`, `artifacts/final-production-certification/railway-staging-attempt-2026-09-16.txt` | semantic/compiler tests only | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| REL-ENV-003 | P1 release blocker | Production database | Run migrations and high-value suite against PostgreSQL | No usable PostgreSQL service is available on this host | Do not claim PostgreSQL certification | DB/migration test configuration | SQLite/local suite only | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| REL-ENV-004 | P1 release blocker | Live providers | Perform real Vercel, Telnyx, Cloudflare, Razorpay and Google OAuth staging calls | Credentials/staging accounts are unavailable | Retain provider abstractions and compatibility paths; do not fake live PASS | `app/ai_service.py`, `app/communication_service.py`, provider adapters | local adapter/security contracts | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| REL-ENV-005 | P1 release blocker | Railway staging capacity | Provisioning the missing private Redis dependency returned `Your trial has expired`; the existing staging services have no active deployment | No plan/billing change was authorized; no new service was created and production was not touched | `docs/RAILWAY_STAGING_ARCHITECTURE.md` | Railway authenticated preflight, service list, add attempt | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| REL-ENV-006 | P1 release blocker | Staging PostgreSQL access | Existing staging Postgres has no public TCP proxy and the host has no SSH key for Railway's private tunnel; local host has no PostgreSQL server/binary | No database mutation; keep PostgreSQL certification open until a Linux/Railway-capable staging runner is available | `artifacts/final-production-certification/railway-staging-attempt-2026-09-16.txt` | Railway connect attempts; local binary check | BLOCKED_BY_EXTERNAL_ENVIRONMENT |
| REL-UX-001 | P3 | Legacy Studio smart guides | Run Chromium/Firefox Studio gap closure and inspect temporary guide assertion | The test reports the smart-guide assertion as `UNVERIFIED`; no browser errors or geometry failures occurred | Leave behavior unchanged until a reproducible guide failure is captured | `scripts/studio_gap_closure_e2e.py` | 12 actionable checks pass per Chromium/Firefox | OPEN / UNVERIFIED |
| REL-RISK-001 | P2 risk | Provider migration | Search runtime paths for direct OpenAI/Resend/Twilio/Meta compatibility adapters | Staged cutover intentionally keeps fallback adapters until live Vercel/Telnyx proof exists | No destructive removal before live replacement verification; production readiness requires explicit provider configuration | `app/ai_gateway.py`, `app/email_service.py`, `app/providers.py`, `.env.example` | provider inventory/config tests | DOCUMENTED RISK |

## Closed locally

- Tenant IDOR and role separation: covered and passing.
- OAuth/PKCE, scopes, allowlists, CAS, idempotency and revocation: covered and
  passing locally.
- Page limits, branding, billing replay handling and credit accounting: covered
  and passing locally.
- CMS, SEO, media security, Telnyx adapter contracts and legacy Studio
  mutation/history behavior: covered and passing locally.

## Certification refresh — 2026-09-16

- **REL-ENV-001:** dedicated dashboard and legacy-Studio browser harnesses now
  pass in Chromium, Firefox and WebKit under the elevated browser runner.
  The earlier combined-harness startup issue is retained as historical
  environment evidence, not a current product failure.
- **REL-UX-001:** remains **OPEN / UNVERIFIED** for the separate smart-guide
  assertion. The current rich interaction harness proves canvas panning,
  ordering, responsive geometry and the tool rail, but does not replace a
  dedicated smart-guide visual assertion.
- Published-output accessibility improved from the prior 20 moderate findings
  to **4 moderate heading-order findings**, with 0 critical, 0 serious and 0
  minor findings. The remaining nodes belong to seeded legacy template
  heading levels and remain a documented P3 cleanup item.
