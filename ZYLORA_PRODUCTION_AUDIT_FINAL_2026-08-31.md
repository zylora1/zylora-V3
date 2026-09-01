# ZYLORA PRODUCTION AUDIT — FINAL RESULT

Audit date: 2026-08-31  
Audit baseline: latest Zylora production repository after regional Starter/Growth billing and `/billing/select` security correction  
Final collected test inventory: **147 tests**

## 1. Executive verdict

**PRODUCTION READY WITH EXTERNAL-INTEGRATION VERIFICATION REQUIRED**

Within the repository and the capabilities of this sandbox, no unresolved production-blocking application defect remains. All 147 collected tests were reconciled successfully through deterministic test batches/module isolation, including the real Chromium E2E test and adversarial cross-process security tests. The actual FastAPI application was booted and a real HTTP workflow was completed successfully.

Live production-provider verification is still required before public launch because this environment does not contain production/staging credentials for OpenAI, Razorpay, Cloudflare, Turnstile, Google OAuth, Resend/SMTP, or WhatsApp providers. Docker and vulnerability-database tooling are also unavailable in this sandbox.

The one-process `pytest -q` command does not terminate reliably in this CI container when all browser and cross-process tests are composed into the same interpreter. No assertion failure occurs; the same 147 collected tests pass through deterministic isolated batches. The browser and adversarial suites each terminate and pass independently.

## 2. Repository / architecture reviewed

Reviewed systems include:

- FastAPI application and middleware
- SQLAlchemy database layer and 25 SQL migrations
- session authentication, signup/login/logout, email verification, password reset and Google OAuth
- USER and SUPER_ADMIN authorization boundaries
- tenant ownership and IDOR protections
- SiteDocument/editor/revision architecture
- AI website creation and AI editor flows
- GPT model/provider configuration
- AI and lead credit wallets and top-ups
- regional Starter/Growth billing and subscription lifecycle
- Razorpay checkout, verification and webhook processing
- unlimited AI Sales Assistant/chatbot
- lead capture and notification delivery
- appointments and availability engine
- Business Profile/site knowledge context
- templates, asset registries and 40 production template projects
- media upload/import/replacement
- publishing, subdomains and custom domains
- SEO/GEO, sitemap, robots, canonical and structured metadata
- analytics and operational events
- freelancer marketplace/support
- SUPER_ADMIN blog system
- source/ZIP export
- static HTML/JavaScript frontend
- security headers, CSRF, SSRF controls, XSS/file validation and rate limiting
- Dockerfile, docker-compose, environment validation and startup paths
- QA scripts and browser E2E infrastructure

The shipped product repository is a FastAPI application with a static browser frontend; it is not a root Next.js application. Next.js is produced by Zylora's source-export subsystem.

## 3. Tests

### Pytest

Final collected inventory:

- **147 passed**
- **0 failed**
- **0 skipped**
- **0 xfailed**

The final reconciliation was performed in deterministic batches/module isolation because a single long-lived Pytest interpreter in this sandbox can remain open when browser E2E is combined with prior process/thread-heavy tests. The product assertions themselves are green.

Specific final isolated gates include:

- adversarial/security suite: **9 passed / 0 failed**
- Chromium E2E Pytest: **1 passed / 0 failed**
- browser workflow script: **99 checks / 0 errors**
- marketplace/support browser workflow: **21 checks / 0 errors**
- freelancer Turnstile UI: **4 checks / 0 errors**

### Repository QA

- migration QA: **7 checks / 0 errors**
- SEO audit: **17 checks / 0 errors**
- template asset QA: **40 templates / 1,477 image references / 0 remote production images / 0 errors**
- template uniqueness: **40 templates / 0 exact duplicate groups**
- export source QA: **7 checks / 0 errors**, 11 JS/JSX/MJS files transpiled
- Assistant accessibility: **13 checks / 0 errors**
- responsive QA: **56 checks across 8 widths / 0 errors**
- template browser QA: **40 templates / 0 errors**
- UI control inventory: **172/172 buttons and 72/72 links wired**
- security source QA: **108 files / 0 errors**
- template/source structural analysis: **479 files / 0 errors**
- premium template quality: **40/40 public templates passed**
- template dependency-security QA: **40 templates / 72 external scripts / 5 external iframes / 0 errors**
- Python compilation: **PASS**
- static JavaScript `node --check`: **PASS**
- release-package QA: **0 forbidden artifacts** after clean packaging (no local DB, `.env`, cache/bytecode, runtime media, logs, private-key material or symlinks)

## 4. Production build

### Main application

**VERIFIED**

The actual FastAPI application booted successfully through the repository startup script and returned `{"status":"ok"}` from `/api/health`.

`run.sh` was corrected from mode `0644` to executable mode `0755`, then executed successfully.

There is no root Next.js/React build manifest in this application repository. The frontend is static HTML/JavaScript and passed JavaScript syntax, browser, structural, responsive and interaction QA.

### Generated Next.js source export

**STATICALLY VERIFIED / ENVIRONMENT BLOCKED FOR FULL NPM BUILD**

A real Next.js source export was generated. Its JavaScript/JSX/MJS sources pass the repository export transpilation QA. A real `npm install && npm run build` was attempted, but npm could not resolve `registry.npmjs.org` (`EAI_AGAIN`) in this sandbox, so the dependency installation/build is environment blocked rather than reported as successful.

### Docker image

**ENVIRONMENT BLOCKED**

Docker is not installed in this sandbox. Dockerfile/startup configuration was inspected statically; the live application command itself was verified outside Docker.

## 5. Database/migrations

**VERIFIED**

- migration files: **25**
- fresh database migration to current head: PASS
- previous-head → current-head upgrade: PASS
- existing content preservation checks: PASS
- migration QA: **7/7**

New migrations introduced during this release harden webhook processing/reconciliation and Google OAuth profile-image persistence. The prior billing-selection reconciliation migration remains present and verified.

No destructive customer-data reset is required.

## 6. Security audit

### Tenant isolation / IDOR

**VERIFIED BY AUTOMATED TEST**

Cross-tenant read/write/publish/editor/SEO/media/knowledge/blog/domain/integration/export/transfer operations were attacked using valid sessions from another tenant and denied with 403/404 as appropriate.

### Authentication

**VERIFIED BY AUTOMATED TEST**

Signup, verification, login/logout, password reset, session invalidation, multi-device behavior, Google OIDC claim validation, wrong audience, expired/tampered token and unverified Google email paths were tested.

One-time verification/reset token consumption is now atomic (`UPDATE ... RETURNING`) to prevent concurrent replay.

### SUPER_ADMIN

**VERIFIED BY AUTOMATED TEST**

Ordinary users cannot invoke admin user/settings/audit capabilities by direct API calls or client-state manipulation.

### XSS / input trust boundaries

**VERIFIED BY AUTOMATED TEST + STATIC REVIEW**

HTML/content trust boundaries, image normalization, dangerous URI handling and public input sanitization were inspected/tested. Template and generated content is not allowed to bypass server ownership/security boundaries.

### CSRF

**VERIFIED BY AUTOMATED TEST / STATIC REVIEW**

Authenticated state-changing requests require the existing CSRF contract. Frontend hiding is not relied on for authorization.

### SQL injection

**STATICALLY VERIFIED + TESTED INPUT PATHS**

Normal user values are bound parameters. Dynamic SQL fragments reviewed in the application are internally controlled identifiers/clauses rather than direct user-provided SQL.

### SSRF

**VERIFIED BY AUTOMATED TEST**

Remote media import blocks localhost, loopback, private, reserved, link-local and unsupported remote hosts; redirects and content validation are constrained.

### Upload/file security

**VERIFIED BY AUTOMATED TEST**

Image polyglots are re-encoded, pixel/size caps apply, unsupported ZIP uploads are rejected, tenant ownership is checked and source export rejects unsafe symlinks/traversal.

### Export traversal

**VERIFIED BY AUTOMATED TEST**

Absolute paths, `..`, backslash traversal and symlinks are rejected/confined.

### Rate limiting

**VERIFIED BY AUTOMATED TEST**

The durable limiter uses an atomic database update/upsert strategy. Cross-process contention is tested with 18 independent Python processes against a limit of 5; exactly 5 succeed and the remainder are rejected.

Additional limits were added to expensive/provider-facing authenticated operations including publishing, media import/upload, source-export operations and transfer flows.

### Webhook security

**VERIFIED BY AUTOMATED TEST / STATIC REVIEW**

Signature verification, replay protection, processing states, transient-failure retry, exactly-once top-up behavior and stale subscription-event ordering are covered.

## 7. Billing and credits

**VERIFIED BY AUTOMATED TEST + SOURCE INSPECTION**

Public plans:

- FREE
- STARTER — India ₹799/month; international US$9/month
- GROWTH — India ₹1,799/month; international US$19/month
- PRO — managed/contact-only

Server-side regional pricing remains authoritative. Client country input cannot directly set the charged amount.

The previous `/api/billing/select` defect is fixed: an active paid subscriber cannot silently change the user plan to FREE while the subscription remains active. Historical inconsistent rows are reconciled by migration.

AI credit defaults:

- Free 15
- Starter 100
- Growth 300

Lead credit defaults:

- Free 20
- Starter 100
- Growth 300

AI top-ups verified in source/tests:

- 50 — $3
- 150 — $8
- 400 — $18
- 1000 — $40

Lead top-ups:

- 50 — $5
- 150 — $13
- 400 — $30
- 1000 — $65

Credit reservation, atomic debit, failure refund, concurrency protection, typed exhaustion and top-up/webhook idempotency are covered by tests.

## 8. AI

### AI creator

**VERIFIED BY AUTOMATED TEST / HTTP WORKFLOW**

The creator accepts business requirements, produces AI-origin sites, preserves SiteDocument/editor behavior, charges the configured AI action cost and can publish successfully.

### Page-count policy

**VERIFIED**

AI-created website page count is **prompt/business-needs driven and is not restricted by Free/Starter/Growth template page limits**. Template page limits remain separately scoped.

### AI editor

**VERIFIED BY AUTOMATED TEST / BROWSER E2E**

AI edits persist safely, charge the configured credit amount and retain editor functionality.

### Failure/refund

**VERIFIED BY AUTOMATED TEST**

Provider failures do not silently double-charge operations; wallet reservation/refund paths are covered.

### AI Sales Assistant

**VERIFIED BY AUTOMATED TEST / BROWSER E2E**

- dedicated model: **GPT-4o mini**
- unlimited from the user's plan-credit perspective
- does **not** debit AI credits
- does **not** debit lead credits for ordinary Assistant usage
- context is site/tenant scoped
- public lead hand-off and appointment actions use existing authoritative systems
- abuse and length/output limits remain independent safeguards
- contact-bearing conversion is Turnstile-gated when production bot protection is configured, without forcing CAPTCHA on informational chat

The older grounded-chatbot execution path was aligned to the same dedicated Sales Assistant model to eliminate model-cost drift.

## 9. Website builder

**VERIFIED BY AUTOMATED TEST / BROWSER / HTTP**

- 40 production templates available
- premium template gate 40/40
- editor save/load works
- manual content edits persist
- media replacement persists
- responsive preview works
- publishing works
- public runtime loads
- template assets are local (0 production image hotlinks)
- source export works and ZIP contents are confined

The audit also removed visible pseudo-Latin/Lorem-style filler and inherited DreamHost affiliate/sponsored content from production templates. LearnHub's unbuilt Vite-only entrypoint was replaced with a runtime that works from bundled assets.

## 10. Leads / appointments

**VERIFIED BY AUTOMATED TEST / BROWSER / REAL HTTP**

Lead capture successfully associates public submissions with the correct site/tenant and feeds the unified lead pipeline.

Email/WhatsApp delivery logic uses separate lead-credit accounting and idempotent delivery/refund behavior.

Appointments use the server-authoritative slot engine. Duplicate booking of the same slot returns a conflict; concurrent booking uniqueness is database-enforced and regression tested.

Public availability/booking checks now establish that the site is live before exposing schedule information or creating conversion side effects.

## 11. SEO/GEO

**VERIFIED**

SEO audit: **17 checks / 0 errors**.

Published sites were checked for title/description, canonical handling, robots, sitemap, OG/Twitter data, structured metadata, indexability behavior and 404 handling. The real HTTP smoke returned 200 for `/robots.txt` and `/sitemap.xml`.

## 12. Bugs found and fixed

### BUG-001 — Paid subscriber could silently become FREE while subscription stayed ACTIVE
Severity: Critical  
Affected area: Billing  
Root cause: `/billing/select` allowed unconditional FREE selection.  
Fix: initial-selection-only semantics, active-subscription guard, authoritative cancellation/change path and reconciliation migration.  
Regression test: paid subscription + direct FREE selection + corrupted historical row recovery.  
Status: **FIXED**

### BUG-002 — Webhook event could be marked seen before side effects completed
Severity: Critical  
Affected area: Billing/top-ups/subscriptions  
Root cause: dedupe record preceded successful processing.  
Fix: durable PROCESSING/FAILED/SUCCEEDED states, retryable failed claims, attempt tracking and provider event ordering.  
Regression test: forced first-attempt failure → replay → exactly-once grant; stale lifecycle event.  
Status: **FIXED**

### BUG-003 — Published Assistant/lead conversion did not consistently supply Turnstile
Severity: High  
Affected area: Sales Assistant/leads/appointments  
Root cause: public runtime and Assistant action path were inconsistent with production bot-protection requirements.  
Fix: production-gated Turnstile hand-off, token reset and side-effect deferral; informational chat remains frictionless.  
Regression test: protected/unprotected conversion and booking paths.  
Status: **FIXED**

### BUG-004 — OAuth validated return destination was discarded
Severity: Medium  
Affected area: Google OAuth  
Root cause: validated `next` was not persisted through OAuth state.  
Fix: persist/use validated return path and prune expired states.  
Regression test: OAuth return-path preservation.  
Status: **FIXED**

### BUG-005 — Raw Google/provider exceptions could reach users
Severity: Medium/High  
Affected area: OAuth/payments/notifications/domains/AI/Google Sheets  
Root cause: several handlers used raw exception strings.  
Fix: sanitized customer responses and safe operational exception summaries.  
Regression test: injected secret/path text is absent from response/persistence.  
Status: **FIXED**

### BUG-006 — Google profile image was not persisted/rendered safely
Severity: Medium  
Affected area: User profile/dashboard  
Root cause: provider picture field was dropped; dashboard later referenced a missing avatar helper.  
Fix: profile-image persistence migration and HTTPS-only avatar renderer with initials fallback/no-referrer.  
Regression test: OAuth profile propagation + Chromium dashboard startup.  
Status: **FIXED**

### BUG-007 — Dashboard initialization stopped on undefined `renderAvatar`
Severity: High UI regression  
Affected area: Dashboard  
Root cause: call to undefined JavaScript function caused startup `ReferenceError`.  
Fix: implemented safe avatar renderer.  
Regression test: full Chromium browser E2E.  
Status: **FIXED**

### BUG-008 — Production configuration failed open
Severity: High  
Affected area: Deployment/configuration  
Root cause: production could start with SQLite/mock/missing release-critical credentials and `.example` targets.  
Fix: production validation fails closed on required database/provider/domain configuration.  
Regression test: unsafe production config rejected; complete synthetic config contract accepted.  
Status: **FIXED**

### BUG-009 — Legacy grounded chatbot inherited builder model
Severity: Medium  
Affected area: AI model configuration/cost  
Root cause: public chatbot path used general OpenAI model setting.  
Fix: all Sales Assistant/chatbot paths use dedicated `SALES_ASSISTANT_MODEL` (`gpt-4o-mini`).  
Regression test: dedicated model remains independent of builder model.  
Status: **FIXED**

### BUG-010 — Provider-facing operations lacked dedicated abuse limits
Severity: Medium  
Affected area: Publishing/media/export/domains/transfers  
Root cause: authentication alone protected several expensive operations.  
Fix: durable tenant/site/user-scoped limits added.  
Regression test: security/hardening suites.  
Status: **FIXED**

### BUG-011 — Production template image hotlinks
Severity: Medium  
Affected area: Templates/privacy/reliability  
Root cause: rendered HTML/CSS referenced third-party image URLs not represented by asset manifests.  
Fix: localized all production images and refreshed deterministic hashes.  
Regression test: 1,477 image references / 0 remote production images.  
Status: **FIXED**

### BUG-012 — LearnHub required an unavailable Vite/SCSS build at runtime
Severity: High template defect  
Affected area: Template rendering  
Root cause: source entrypoint imported Bootstrap/SCSS without a compiled production artifact.  
Fix: bundled local Bootstrap assets and dependency-free runtime adapter.  
Regression test: premium/source/template-browser gates.  
Status: **FIXED**

### BUG-013 — Mutable third-party template dependencies and weak iframe metadata
Severity: Medium  
Affected area: Template supply-chain/privacy/accessibility  
Root cause: several CDN references used mutable package versions and external iframes lacked hardening.  
Fix: concrete package versions; iframe titles/lazy loading/referrer policy.  
Regression test: template dependency-security QA 40 templates / 0 errors.  
Status: **FIXED**

### BUG-014 — Visitor-visible filler and affiliate/sponsored copy shipped in templates
Severity: Medium  
Affected area: Template quality/trust  
Root cause: inherited licensed-template placeholder/promo content.  
Fix: text-only neutral production copy cleanup without fabricating reviews/business facts.  
Regression test: strengthened visible-content sweep + premium gate.  
Status: **FIXED**

### BUG-015 — Durable rate-limit implementation/test harness exposed concurrency ambiguity
Severity: High-risk hardening  
Affected area: Rate limiting  
Root cause: multi-step contention behavior and unreliable multiprocessing test instrumentation.  
Fix: atomic database rate-limit operation; genuine independent-process contention regression uses subprocesses rather than shared queues.  
Regression test: 18 processes with limit 5 → exactly 5 success.  
Status: **FIXED**

### BUG-016 — Verification/reset tokens could be consumed twice concurrently
Severity: High  
Affected area: Authentication  
Root cause: SELECT-then-UPDATE single-use token consumption.  
Fix: atomic claim with `UPDATE ... RETURNING`.  
Regression test: concurrent same-token replay yields one successful consume.  
Status: **FIXED**

### BUG-017 — Custom domain side effect occurred before authoritative DB claim
Severity: High  
Affected area: Custom domains/Cloudflare  
Root cause: provider operation could run before uniqueness reservation.  
Fix: database claim first; provider operation second; Zylora base-domain namespace protected.  
Regression test: domain/security suites.  
Status: **FIXED**

### BUG-018 — Ownership transfer acceptance/delivery was replayable or left undelivered pending state
Severity: High  
Affected area: Ownership transfer  
Root cause: non-atomic PENDING transition and provider failure left unusable pending invitations.  
Fix: atomic transfer claim, rate limit, DELIVERY_FAILED state on send failure and sanitized provider response.  
Regression test: concurrent/retry/provider-failure transfer cases.  
Status: **FIXED**

### BUG-019 — Draft sites could expose appointment availability before public liveness check
Severity: Medium/High  
Affected area: Public appointments/Assistant  
Root cause: availability/CRM work happened before final public-site validation.  
Fix: live-site trust check moved before schedule and conversion side effects.  
Regression test: unpublished appointment privacy.  
Status: **FIXED**

### BUG-020 — Duplicate test definitions silently shadowed coverage
Severity: QA integrity  
Affected area: Test suite  
Root cause: duplicate Python test function names.  
Fix: removed shadowed duplicates and verified collected definition count.  
Regression test: static definition count equals Pytest collected inventory.  
Status: **FIXED**

### BUG-021 — `run.sh` was not executable
Severity: Low deployment defect  
Affected area: Startup packaging  
Root cause: file mode 0644.  
Fix: mode changed to 0755 and application successfully booted through `./run.sh`.  
Regression verification: `/api/health` returned 200 after direct script startup.  
Status: **FIXED**

### BUG-022 — Production could accept Docker Compose development database credentials
Severity: High deployment hardening  
Affected area: Production configuration / PostgreSQL  
Root cause: Compose intentionally defaulted to `zylora-dev-only` for local development, while production startup validated only that the database was non-SQLite. An operator setting `APP_ENV=production` without overriding the Compose password could therefore reach application startup with the shipped development credential.  
Fix: production validation parses `DATABASE_URL` and rejects the shipped development password without logging credential values. Compose now also forwards `SESSION_TTL_HOURS`, `SALES_ASSISTANT_MODEL` and `INDEXNOW_ENDPOINT`; `.env.example` documents the complete Settings surface.  
Regression test: production configuration rejects the development database credential; focused production/release configuration suites pass.  
Status: **FIXED**

### BUG-023 — Release ZIP contained a populated local SQLite audit database
Severity: High release-packaging defect  
Affected area: Release artifact / data hygiene  
Root cause: the release archive filter excluded several transient patterns but did not reject every `.db/.sqlite/.sqlite3` file. The packaged `data/zylora.db` contained local audit/test state.  
Fix: removed all runtime database files from the release; added `scripts/release_package_qa.py` and `make release-package-qa` to fail closed on databases, `.env`, caches/bytecode, uploaded media, logs, private-key/certificate material, symlinks, `node_modules` and `.next`. The final ZIP is scanned again after creation.  
Regression verification: clean release tree and final ZIP both report **0 forbidden artifacts**. No database contents are included in the release.  
Status: **FIXED**

## 13. Remaining known limitations

Repository defects currently known and reproducible: **none discovered within the completed tested scope**.

Environment/test-infrastructure limitations:

1. A single monolithic `pytest -q` process does not reliably terminate in this sandbox after composing all long-running browser/process-heavy modules. All 147 collected tests pass in deterministic batches/module isolation; adversarial and browser suites independently terminate successfully.
2. `npm install` for a generated Next.js export is blocked by DNS/package-registry resolution (`EAI_AGAIN`), so the full generated-site `next build` could not be physically completed here. Source transpilation checks pass.
3. Docker is unavailable, so the Docker image cannot be physically built in this environment.
4. `pip-audit`/Safety are unavailable. `pip check` on the global sandbox environment reports a MoviePy/Pillow conflict, but MoviePy is **not** in Zylora's production requirements and therefore this is not a Zylora dependency conflict.
5. Exact-version external scripts/fonts used by some licensed templates could not all be fetched in this network-restricted sandbox. Dependency URLs are pinned and the repository dependency-security gate passes.

## 14. External integrations not physically verified

**ENVIRONMENT BLOCKED — missing live/staging credentials and/or network access**

- OpenAI live request
- Razorpay live checkout/payment and provider-delivered webhook
- Cloudflare custom-domain/DNS/SSL provisioning
- Turnstile live siteverify transaction
- Google OAuth live authorization-code exchange
- Resend live authenticated delivery
- SMTP fallback live connection/delivery
- Twilio WhatsApp live authentication/delivery
- Meta WhatsApp fallback live authentication/delivery
- Google Sheets live Google-service-account delivery where production credentials are required

Repository request construction, validation, error handling, mocks and regression logic were inspected/tested; these live provider checks must still be executed in staging before public launch.

## 15. Deployment blockers

**No repository-level deployment blocker discovered within tested scope.**

The final distributable artifact itself was scanned after cleanup and contains **0 forbidden runtime/test artifacts**; in particular, it contains no local SQLite database or `.env` file.

Before opening production traffic, operations must:

1. configure all production-required environment variables so production startup validation passes;
2. run all 25 migrations before serving traffic;
3. execute the repository's `external_provider_smoke.py` with staging credentials/test targets;
4. verify Razorpay plan IDs and webhooks for Starter/Growth India/international;
5. verify Cloudflare custom-domain/SSL issuance in the real zone;
6. verify OpenAI, Turnstile, Google OAuth, email and configured WhatsApp delivery;
7. perform the generated Next.js export build in network-enabled CI.

## 16. Final recommendation

**Zylora can be deployed to a production/staging environment for final live-provider verification.**

The repository itself is suitable for release under the verdict **PRODUCTION READY WITH EXTERNAL-INTEGRATION VERIFICATION REQUIRED**. Do not open public paid traffic until the environment-blocked provider checks above pass with real staging/production configuration.

The strongest deployment sequence is:

1. deploy this audited artifact to staging;
2. apply all migrations;
3. confirm production startup validation and health;
4. run the external-provider smoke suite using real staging credentials;
5. complete one Razorpay Starter and Growth test transaction, replay webhook tests, one custom-domain/SSL cycle, one OpenAI creator/editor/Assistant request, one Turnstile conversion, Google OAuth login, email and WhatsApp delivery;
6. build one generated Next.js export in CI;
7. then enable public production traffic.
