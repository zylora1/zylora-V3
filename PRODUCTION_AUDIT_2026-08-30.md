# Zylora Production Implementation & Audit Report — 2026-08-30

## 1. Existing architecture discovered

Zylora is a FastAPI-backed website builder with server-rendered/public static UI surfaces, a schema-backed structured editor, a verified template-project catalogue, first-party leads/appointments/analytics, Razorpay billing primitives, OpenAI integration, notification/outbox infrastructure, Google Sheets integration, custom-domain/publishing/export paths, freelancer/support tooling and a SUPER_ADMIN control plane. The implementation extends these existing systems rather than adding parallel billing, chatbot, lead, appointment, analytics or admin applications.

## 2. Principal modules changed

Key application modules include `app/api.py`, `app/api_extended.py`, `app/api_gapfixes.py`, `app/api_operations.py`, `app/api_sales_assistant.py`, `app/billing_regions.py`, `app/sales_assistant.py`, `app/appointment_engine.py`, `app/providers.py`, `app/security.py`, `app/plans.py`, `app/exporter.py`, `app/operations.py`, `app/structured_editor.py` and `app/main.py`.

Key UI/runtime modules include `static/index.html`, `static/landing.js`, `static/choose-plan.*`, `static/dashboard.*`, `static/editor.*`, `static/premium-design.*`, `static/public-runtime.js`, public legal/privacy/terms surfaces, templates/freelancer surfaces and shared Zylora UI styles.

Template metadata/descriptions were refreshed across the 40-template catalogue. Broken/localized asset references were corrected in affected template projects and only their deterministic render hashes were refreshed; source archive hashes and rights attestations were not rewritten.

## 3. Database migrations

- `020_regional_billing_sales_assistant.sql`: additive regional ZYLORA subscription/billing profile schema, Assistant configuration/conversation/message/usage schema, unified lead fields, lead/appointment linkage and system pricing/quota settings.
- `021_sales_assistant_completion.sql`: provider payment/recovery fields, idempotent Assistant action keys and editable smart-form configuration.

The migrations preserve legacy Starter/Growth data structures for historical subscriptions rather than destructively rewriting existing billing history.

## 4. Pricing implementation

New purchases use one logical paid entitlement: `ZYLORA`.

- India: `INR`, `amount_minor=79900` → **₹799/month**.
- International: `USD`, `amount_minor=900` → **US$9/month**.

This is regional pricing, not currency conversion. Core paid entitlements are the same in both regions. Amounts are represented in integer minor units.

Checkout pricing is derived server-side. Frontend-submitted amount/currency values are not authoritative.

## 5. India billing behavior

Verified Indian billing country resolves to the INDIA region and INR 79,900 minor units. Verified billing information has priority over browser/user-selected country hints. A user changing a frontend country field is not sufficient to obtain Indian checkout pricing.

## 6. International billing behavior

Any verified non-Indian billing country resolves to INTERNATIONAL and USD 900 minor units. Tests cover representative US, UK, Canada, Australia and EU-region billing-country cases. Public copy uses `US$9/month` rather than an ambiguous `$9` label.

## 7. AI Sales Assistant architecture

The existing public chatbot capability was upgraded into a shared Sales Assistant system. It uses server-side Business Profile data, currently published site content and approved knowledge sources as trusted grounding inputs. Retrieved website/knowledge content is treated as data rather than system instructions.

Conversation state includes page attribution, intent, qualification, summary, lead/appointment linkage and AI/version metadata. The published runtime is shared across compatible templates and inherits practical site design tokens while enforcing readable accessible surfaces.

Legacy `/api/public/chatbot` compatibility is retained for existing integrations; newly published sites use the unified Sales Assistant conversation API.

## 8. Actions/tools implemented

The Assistant service supports server-validated capabilities equivalent to business knowledge lookup, service/hours/location/contact lookup, lead upsert, lead context/qualification updates, appointment availability, appointment creation/request, WhatsApp/human handoff and owner notification. The model is never permitted to execute arbitrary database queries or bypass tenant authorization.

## 9. Lead-system integration

Forms, AI Assistant and appointments feed the same `leads` pipeline with source values such as `FORM`, `AI_ASSISTANT`, `APPOINTMENT`, `WHATSAPP`, `PHONE`, `OTHER` and historical `CHATBOT` compatibility.

The owner lifecycle remains `NEW → CONTACTED → QUALIFIED → WON → LOST`.

Safe association uses explicit conversation/session relationships plus matching contact evidence where appropriate. A chat followed by a form can enrich an existing lead without aggressively merging unrelated visitors. Appointment-origin synthetic lead records are not double-counted during Google Sheets historical resync.

Explainable lead scoring stores a score, COLD/WARM/HOT temperature and deterministic reason codes rather than an unexplained LLM-only number.

## 10. Appointment integration

The Sales Assistant uses the existing appointment engine. Availability remains server-authoritative and respects configured timezone, operating windows, duration/buffer and conflicts. Appointment confirmation is returned only after the backend booking succeeds. Conversation → lead → appointment relationships are persisted.

## 11. WhatsApp/email integration

Assistant handoff uses the existing WhatsApp/contact and notification/outbox infrastructure. Marketing consent is not inferred from service-enquiry/transactional consent. Existing lead-credit/add-on controls remain applicable where configured.

## 12. Analytics integration

Assistant events feed existing first-party analytics/Growth Center surfaces rather than a separate analytics product. Relevant funnel stages include impressions/opens/messages, leads, qualification/HOT leads, appointment activity, handoff, dismissals and errors. Test-mode conversations are excluded from production conversion counts.

## 13. Abuse and cost protections

Controls include site/session quotas, durable rate limits, input-size limits, output limits, bounded conversation history/usage accounting, configurable SUPER_ADMIN quotas, test-mode isolation, graceful quota exhaustion and graceful AI-provider failure. Visitor-facing fallbacks expose enquiry/booking/contact options rather than internal credit/provider errors.

## 14. Security changes

- Server-authoritative regional price resolution and verified billing-country reconciliation.
- Idempotent subscription checkout/verification and atomic entitlement activation.
- Legacy Starter/Growth blocked from new purchases while historical subscription compatibility remains.
- Explicit tenant/site authorization for owner Assistant resources.
- Prompt-injection filtering in deterministic retrieval plus system/data separation for AI prompting.
- Idempotent Assistant lead/appointment actions.
- Existing webhook verification/replay handling retained.
- Source export does not embed tenant/provider secrets and explicitly identifies hosted-backend-dependent capabilities.
- Public runtime includes message/rate limits and accessibility-safe fallback behavior.

## 15. Tests and QA added/updated

The regional billing/Sales Assistant acceptance suite covers regional prices, frontend manipulation resistance, checkout idempotency, region mismatch, legacy-plan blocking, tenant isolation, prompt injection, unknown-price hallucination safeguards, explainable/idempotent lead creation, test-mode isolation, quota fallback and oversized input.

Browser/editor/export/regression suites were migrated away from obsolete Starter/Growth purchase assumptions to the current ZYLORA checkout flow. New QA validators cover template assets, exact-template duplication, template previews, platform responsive rules, UI interaction inventory, Assistant accessibility/responsiveness, source/secret scanning and Next.js/JS/TS syntax validation.

## 16. Current test results

### Backend

`pytest --collect-only`: **136 tests collected**.

Every `tests/test_*.py` module was then executed independently to completion: **136/136 tests pass**. The sandbox's single monolithic `pytest -q` invocation exceeds its command execution window after printing progress; no individual module remains unverified.

### Full QA command

`make qa`: **PASS, exit status 0**.

Important component results:

- Migration QA: **7 checks / 0 errors**.
- SEO audit: **17 checks / 0 errors**.
- Template asset audit: **40 templates, 1,426 image references, 0 remote image hotlinks, 0 errors**.
- Template exact-duplicate audit: **0 duplicate groups**.
- Source export QA: **7 checks / 0 errors**, exported JS/JSX/MJS transpilation successful.
- Editor/media browser QA: **17 checks / 0 errors**.
- Full product browser E2E: **98 checks / 0 errors**.
- Marketplace/support browser E2E: **21 checks / 0 errors**.
- Freelancer Turnstile UI QA: **4 checks / 0 errors**.
- AI Sales Assistant accessibility/responsive QA: **13 checks / 0 errors**, including 1440/1280/1024/768/430/390/375/360 widths.
- Platform responsive static QA: **56 width/page checks / 0 errors**.
- Template browser QA: **40/40 templates / 0 errors**.
- UI control inventory: **171/171 buttons and 71/71 links wired/valid**.
- Production source/security scan: **107 files / 0 errors**.
- Python `compileall`: **PASS**.
- All `static/*.js` `node --check`: **PASS**.
- Next.js/JS/TS source transpilation check: **477 files / 0 errors**.
- Final release-blocker smoke: **45 checks / 0 errors** (pricing placeholders, regional chooser, legal routes and all template preview files).

## 17. Build/static validation

Python compilation, static JavaScript syntax and 477 JS/JSX/TS/TSX/MJS source checks pass. Source-export-generated code also transpiles successfully in QA. The repository does not expose raw Starter/Growth price variables on the public pricing surfaces.

## 18. Staging/live-provider verification still required

Local/mocked verification is not equivalent to production-provider certification. Before public launch, verify with actual production/staging credentials and provider-side configuration for:

- Razorpay INR and USD monthly subscription plans, webhooks, renewals, failures and billing-country data available from the selected flow.
- OpenAI production model/tool behavior and cost telemetry.
- Resend/SMTP delivery, retry and suppression behavior.
- WhatsApp/Twilio or configured WhatsApp provider, templates/consent and credit accounting.
- Cloudflare custom-domain/SSL lifecycle.
- Turnstile production site/secret keys and adaptive abuse behavior.
- Google OAuth and Google Sheets production credentials/permissions.

No live-provider claim is made by this local audit.

## 19. Backward compatibility

Historical Starter/Growth plan records, legacy webhook/order recognition and historical `CHATBOT` lead attribution remain supported where required. They are hidden/blocked from new purchases. Existing paid customers are not silently migrated to the new regional subscription; an explicit provider-safe migration strategy is required if/when historical subscriptions are migrated.

## Final local-audit verdict

**LOCAL PRODUCTION QA: PASS.** The reconstructed repository passes all locally executable deterministic backend and `make qa` gates after the fixes above.

**LIVE PROVIDER RELEASE GATE: PENDING.** Production Razorpay/OpenAI/email/WhatsApp/Cloudflare/Turnstile/Google credentialed staging verification is still required before a real customer launch.
