# Zylora V1 — Production-Ready Audit Report

**Audit date:** 31 August 2026  
**Audit target:** `Zylora-Production-Ready-UIUX-Audited-2026-08-31-v3.zip`  
**Audit scope:** application code, authentication/authorization, SUPER_ADMIN provisioning, tenant isolation, billing/payments, AI/credit accounting, lead notifications, appointments, publishing/export, custom domains, media/import, SEO, template integrity, UI/responsiveness/accessibility, migrations, deployment configuration, secrets/package hygiene, and external-provider readiness.

## Executive verdict

**Code-side release status: PASS / release candidate.**

No unresolved P0/P1 repository defect was found after the changes made during this audit. The existing application tests, security checks, browser flows, migration checks, source scans, responsive checks, template checks, and release-package checks completed without code failures when run in bounded suites.

**Go-live status: CONDITIONAL GO.** Production deployment should proceed only after the real production credentials are supplied and the external-provider smoke tests listed in this report are executed. Those integrations cannot be certified from source code alone.

## Changes implemented during this audit

### 1. Secure SUPER_ADMIN environment bootstrap

The requested SUPER_ADMIN environment-variable flow did **not** exist in the target ZIP. It is now implemented.

Added server-side settings:

```env
SUPER_ADMIN_EMAIL=
SUPER_ADMIN_PASSWORD=
```

Behavior:

- Startup migrations run first.
- If both bootstrap variables are empty, startup does not alter any admin account.
- If both are supplied and the email does not exist, Zylora creates one `SUPER_ADMIN` account.
- The plaintext password is never written to PostgreSQL/SQLite; only the existing salted `scrypt` password hash is stored.
- The bootstrap is idempotent: future restarts do not reset the existing SUPER_ADMIN password.
- If the configured email already belongs to a normal `USER`, startup fails closed instead of silently escalating that account.
- Partial configuration (email only or password only) fails closed.
- Bootstrap passwords shorter than 16 characters are rejected.
- The created account is marked email-verified and plan-selected so the admin can log in immediately.
- A non-secret audit entry records that the account was bootstrapped from environment configuration.
- Docker Compose now forwards both variables to the application container.
- `.env.example` and the README document the one-time bootstrap process.

Recommended production operation: set both secrets for the first boot, confirm SUPER_ADMIN login, then remove both bootstrap variables. The stored password hash remains in the database and normal login continues to work.

### 2. Production delivery configuration hardened

Production startup validation was tightened so Zylora fails before launch when notification delivery is obviously misconfigured:

- A Resend deployment now rejects placeholder `.local` / `.example` sender addresses.
- SMTP deployments similarly reject placeholder sender addresses.
- Production now requires a complete WhatsApp provider configuration: either the preferred Twilio credential triplet or the existing Meta fallback credential pair.

This prevents a production instance from appearing healthy while an advertised lead-delivery channel is guaranteed to fail.

### 3. Documentation correction

The README contained a stale statement saying `/api/templates` intentionally returned an empty catalogue, while the code and current build expose the verified 40-template catalogue. The documentation now matches the application behavior.

## Test and QA evidence

### Python application tests

- **147 pre-existing repository test functions:** passed in bounded suites.
- **4 new SUPER_ADMIN bootstrap tests:** passed.
- **2 new production delivery-configuration tests:** passed.
- **Current test inventory:** 153 test functions.
- Final targeted hardening rerun after the configuration changes: **14/14 passed**.

The covered areas include authentication, Google OAuth behavior, session handling, CSRF, tenant isolation/IDOR, SUPER_ADMIN boundaries, account deletion, payment/webhook replay and ordering, billing/entitlements, AI and lead credits, AI generation policy, publishing permissions, export entitlements, marketplace/support, editor/media, SEO/GEO, template contracts, import security, and reliability/recovery behavior.

### Migration and database checks

`migration_qa.py`:

- **7 checks / 0 errors**
- Fresh database reaches exact migration head.
- Existing database upgrades to current head.
- Existing site content survives migration.
- Required production editor/marketplace/support tables exist.
- Versioned editor/publish columns exist.
- Configurable plan-credit economics exist.
- Obsolete freelancer transfer-fee table remains removed.

### Security/source checks

`security_source_qa.py`:

- **111 files scanned / 0 errors**

Additional manual scans found no embedded OpenAI-style keys, Razorpay live/test keys, webhook secrets, Twilio Account SID patterns, Google API-key patterns, private-key blocks, or similar production credential signatures in the application package.

Dynamic SQL call sites were reviewed. User-controlled values are parameter-bound; the interpolated fragments observed are application-controlled table/column/where fragments rather than raw request values.

### Browser/end-to-end checks

`browser_e2e.py`:

- **101 checks / 0 errors**

Coverage includes landing navigation, signup/login/logout, Google OAuth entry points, password reset, email verification, AI creation, AI-edit credit deduction, editor persistence, preview breakpoints, publishing, public-site rendering, plan selection, source export, knowledge/Sales Assistant flows, unified leads, appointment booking, Google Sheets integration, notification settings, WhatsApp OTP development flow, regional billing, cancellation behavior, mobile layout, and session invalidation.

`editor_media_e2e.py`:

- **17 checks / 0 errors**
- Managed uploads, image replacement, crop/focal/fit/alt persistence, undo/redo, responsive typography, revision history, publishing, source export, and mobile shell validated.

`marketplace_support_e2e.py`:

- **21 checks / 0 errors**

`assistant_accessibility_qa.py`:

- **13 checks / 0 errors**
- Accessible dialog/log semantics, focus trapping/restoration, Escape behavior, and 1440/1280/1024/768/430/390/375/360 layouts validated.

`freelancer_turnstile_ui_qa.py`:

- **4 checks / 0 errors**

### Responsive/UI checks

`platform_responsive_qa.py`:

- **56 checks across 8 widths / 0 errors**

`ui_ux_production_qa.py`:

- **159/159 passed / 0 errors**

`control_inventory_qa.py`:

- **172/172 buttons validated**
- **72/72 links validated**
- **0 errors**

### Template and asset integrity

`validate_template_assets.py`:

- **40 templates**
- **1,477 image references**
- **0 remote image references**
- **0 errors**

`uniqueness_audit.py`:

- **40 templates**
- **0 exact duplicate groups**

`template_browser_qa.py`:

- **40 templates / 0 errors**

### Export/build/source checks

`export_source_qa.py`:

- **7 checks / 0 errors**
- 11 generated JS/JSX/MJS files transpiled in the export QA path.

Python compilation and JavaScript syntax checks completed successfully.

`check_nextjs_sources.js`:

- **479 files / 0 errors**

### Release-package hygiene

The original ZIP was verified not to contain audit-created `__pycache__`, `.pytest_cache`, or local `data/zylora.db` artifacts.

After test artifacts were cleaned, `release_package_qa.py` returned:

- **0 forbidden artifacts**

The final release package must be generated only after the same cleanup step.

## Security assessment

### Authentication and sessions — PASS

- Passwords use salted `scrypt` hashing.
- Session cookies are HTTP-only.
- Production session cookies are `Secure`.
- SameSite protection is enabled.
- CSRF enforcement exists for authenticated state-changing API operations.
- Login/signup and other sensitive paths use a durable database-backed rate limiter.
- Email verification/reset tokens are hashed in storage and designed for single use.
- Password reset invalidates the old password in browser E2E coverage.
- Google OAuth state/redirect behavior has dedicated test coverage.

### SUPER_ADMIN boundary — PASS after implementation

- Admin routes check `role == 'SUPER_ADMIN'`.
- Normal users are denied admin actions by adversarial tests.
- SUPER_ADMIN self-service account deletion is blocked.
- Initial provisioning now comes from server-side environment secrets and no plaintext admin password is persisted.

### Tenant isolation / IDOR — PASS in tested matrix

Adversarial tests cover cross-user resource manipulation and SUPER_ADMIN boundary attempts. No tested IDOR path succeeded.

### Billing and webhooks — PASS in local/provider-mocked validation

- Razorpay webhook signatures and replay/idempotency behavior are covered.
- Failed webhook retry and exactly-once credit granting are tested.
- Stale/out-of-order subscription events are tested.
- Region-specific INR/USD pricing and entitlement transitions are covered.
- Cancellation preserves paid access until the intended period boundary in browser coverage.

**Live Razorpay certification remains required.**

### AI / credits — PASS in local/provider-mocked validation

- AI page count is brief/business-driven rather than subscription-plan-driven.
- AI and lead credit wallets are separate.
- Transactional reserve/finalize/refund behavior exists.
- Idempotency/concurrency paths are tested.
- AI Sales Assistant usage remains separate from normal editor/generation AI credits as intended.

**Live OpenAI certification remains required.**

### Lead notifications — PASS locally; live provider certification required

- Resend is the preferred email path with SMTP fallback.
- Twilio is the preferred WhatsApp path with Meta fallback.
- Lead-credit reservation is refunded when provider delivery fails.
- Retry/dead-letter behavior exists.
- Production startup now rejects an entirely missing WhatsApp provider.

**Live Resend and Twilio certification remains required.**

### Media/import/export — PASS in tested scope

- Media ownership is tenant-scoped.
- Import validation is designed to reject traversal/symlink/executable-content hazards.
- Export tests cover independent source ZIP generation and entitlement gating.
- Managed-image assets and edits survive export.

### Publishing/custom domains/SEO — PASS locally; live Cloudflare certification required

- Draft/live separation and immutable published state are tested.
- Sitemap/robots/canonical/structured-data checks pass.
- Custom-domain runtime requires active domain + SSL state.
- Cloudflare configuration is required by production settings validation.

**Real custom-hostname provisioning, DNS propagation and SSL issuance must still be tested with the production Cloudflare account.**

## Production environment variables

The exact names are already represented in `.env.example`. For the current V1 architecture, the important production values are:

### Core

```env
APP_ENV=production
APP_URL=https://<production-zylora-origin>
DATABASE_URL=postgresql+psycopg://...
SESSION_TTL_HOURS=168
```

### First SUPER_ADMIN bootstrap

```env
SUPER_ADMIN_EMAIL=<admin email>
SUPER_ADMIN_PASSWORD=<strong secret, minimum 16 chars>
```

Set both only for bootstrap. After confirming the admin can sign in, remove both from the production environment.

### OpenAI

```env
OPENAI_API_KEY=...
OPENAI_MODEL=...
SALES_ASSISTANT_MODEL=gpt-4o-mini
```

### Resend

```env
RESEND_API_KEY=...
RESEND_FROM="Zylora <notifications@your-verified-domain>"
```

### Twilio WhatsApp

```env
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_WHATSAPP_FROM=...
```

### Google OAuth

```env
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GOOGLE_REDIRECT_URI=https://<production-origin>/api/auth/google/callback
```

### Razorpay

```env
PAYMENT_PROVIDER=razorpay
RAZORPAY_KEY_ID=...
RAZORPAY_KEY_SECRET=...
RAZORPAY_WEBHOOK_SECRET=...
```

### Cloudflare / custom domains

```env
CLOUDFLARE_API_TOKEN=...
CLOUDFLARE_ZONE_ID=...
CLOUDFLARE_SAAS_TARGET=<real SaaS target>
PUBLIC_BASE_DOMAIN=<real base domain>
```

### Turnstile

```env
TURNSTILE_SITE_KEY=...
TURNSTILE_SECRET_KEY=...
```

Other values such as Google Sheets service-account configuration, S3 media storage and Pexels are required only if those optional deployment paths are used.

## External-provider smoke status

The repository includes `scripts/external_provider_smoke.py`. In this audit environment it correctly reported the following as **BLOCKED by missing real credentials**, not failed code tests:

| Provider | Audit status | Required before launch |
|---|---|---|
| OpenAI | BLOCKED — no API key in audit environment | Yes |
| Razorpay | BLOCKED — no live/test provider credentials | Yes |
| Cloudflare | BLOCKED — no account token/zone | Yes |
| Turnstile | BLOCKED — no secret | Yes |
| Google OAuth | BLOCKED — no OAuth client credentials | Yes |
| Resend | BLOCKED — no API key | Yes |
| Twilio WhatsApp | BLOCKED — no SID/token/sender | Yes for current V1 WhatsApp path |
| SMTP fallback | BLOCKED — not configured | No if Resend is used |
| Meta WhatsApp fallback | BLOCKED — not configured | No if Twilio is used |

## Required real-world launch smoke tests

Before exposing production to customers, perform these with the real deployment and real credentials:

1. Create the first SUPER_ADMIN from environment variables, log in, confirm role, then remove the bootstrap variables.
2. Create a normal user and complete Google OAuth from the production domain.
3. Send one real Resend verification/notification email from the verified sending domain.
4. Send one real Twilio WhatsApp message through the approved production sender/template flow.
5. Complete one Razorpay production/test-mode checkout, then confirm webhook signature verification and entitlement activation.
6. Replay the same webhook and confirm it does not duplicate entitlement/credits.
7. Submit a Turnstile-protected public lead form from the real hostname.
8. Generate and edit one AI site with the production OpenAI project and verify actual credit deductions/refunds.
9. Publish a site to a Zylora subdomain.
10. Connect one real custom domain and wait for Cloudflare hostname + SSL activation; verify canonical URL, sitemap and HTTPS.
11. Submit one form lead and one appointment; verify dashboard record, email notification and WhatsApp notification.
12. Export one site and run a clean `npm install` + production `npm run build` on the generated Next.js source in network-enabled CI.

## Audit limitations

These are evidence boundaries, not hidden passes:

- No production provider credentials were supplied, so external OpenAI/Razorpay/Cloudflare/Turnstile/Google/Resend/Twilio calls were not executed.
- No Docker/Podman daemon is available in the audit runtime, so the Dockerfile was statically reviewed but a fresh container image build was not executed here.
- A network-enabled dependency/SCA pipeline was not available as an integrated `pip-audit` step in this runtime. Production CI should run dependency vulnerability scanning against `requirements-prod.txt`.
- A clean network-enabled `npm install && npm run build` of a generated exported Next.js project remains a CI/release gate; local source/transpilation/syntax checks passed.
- Load/soak testing against a production-equivalent PostgreSQL/Redis/provider environment is outside this source-only audit.

## Final launch decision

### Repository / code

**PASS.** No unresolved launch-blocking code defect was found after the audit fixes above.

### SUPER_ADMIN environment requirement

**IMPLEMENTED AND VERIFIED.** An isolated application-startup smoke successfully bootstrapped the admin from environment variables, logged in with HTTP 200, returned `/api/auth/me` with `role=SUPER_ADMIN`, and persisted only the password hash.

### Production launch

**CONDITIONAL GO.** Add the real production credentials and complete the 12 provider/deployment smoke checks above. If those pass, this build is suitable to freeze as the Zylora V1 release candidate rather than adding more features before launch.
