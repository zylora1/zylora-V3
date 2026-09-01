# Zylora Public Plans & Unlimited AI Sales Assistant — Production Audit

Date: 2026-08-30
Baseline: `Zylora-Regional-Billing-Sales-Assistant-Premium-Production-QA-2026-08-30.zip`

## Final public catalogue

| Plan | India | International | Template page limit | Monthly AI credits | Monthly lead credits | AI Sales Assistant |
|---|---:|---:|---:|---:|---:|---|
| Free | ₹0 | $0 | 2 | 15 | 20 | Unlimited |
| Starter | ₹799/month | US$9/month | 5 | 100 | 100 | Unlimited |
| Growth | ₹1,799/month | US$19/month | 8 | 300 | 300 | Unlimited |
| Pro / Managed | Get in touch | Get in touch | Managed | No self-service wallet | No self-service wallet | Included in managed service |

`ZYLORA` remains in the database/application enum only as a legacy entitlement for existing rows and historical subscription lifecycle compatibility. It is not returned by `/api/public/plans` and cannot be purchased through the public checkout.

## Implemented changes

- Restored Free / Starter / Growth / Pro as the public plan architecture instead of the temporary single-paid-plan catalogue.
- Added migration `021_public_plan_catalogue_and_unlimited_assistant.sql` with Growth India fixed at ₹1,799 (179900 paise), Growth international at US$19, Starter at ₹799/US$9, and final page/credit limits.
- Converted regional subscription checkout to be plan-aware for Starter and Growth. The selected plan is persisted on the subscription and activated only after payment/country reconciliation.
- Added four independent Razorpay provider-plan setting keys: Starter India, Starter international, Growth India, Growth international.
- Preserved legacy `ZYLORA` subscription activation/cancellation/webhook compatibility without exposing it as a new purchase option.
- Added safe paid-plan replacement semantics so a successful Starter/Growth switch supersedes older active subscriptions and attempts provider cancellation of the replaced subscription.
- Updated landing page, plan chooser, dashboard billing, publish-upgrade flow, structured data, `llms.txt`, and Terms to the final catalogue.
- Updated SUPER_ADMIN system controls to configure the four current provider plan IDs. Public prices remain editable through the existing Plans control plane.
- Removed the Assistant monthly entitlement quota from runtime enforcement. Session and site-hourly controls remain operational abuse/service-protection guardrails.
- Confirmed Assistant usage does not debit AI credits or lead credits.
- Added `SALES_ASSISTANT_MODEL`, defaulting to `gpt-4o-mini`, so the website Assistant no longer inherits the builder/editor model (`OPENAI_MODEL`).
- `/api/public/plans` now returns exactly `FREE`, `STARTER`, `GROWTH`, and `PRO`; legacy `ZYLORA` is excluded.

## AI page-count policy

AI-created website page count remains prompt/business-needs driven. The 2/5/8 page limits are template-publishing entitlement limits and are not used to truncate AI-created information architecture.

## Verification

### Automated test suite

- Pytest collection: **137 tests**.
- Result: **137 / 137 passed** when executed module-by-module.
- The monolithic `pytest -q` process hit the container execution timeout after a sequence of passing tests; every collected test module was therefore run separately/batched and the module totals reconcile to all 137 collected tests.
- Billing/Assistant focused suite includes:
  - Starter India ₹799 and international US$9.
  - Growth India ₹1,799 and international US$19.
  - Server-authoritative country resolution and mismatch rejection.
  - Subscription verification idempotency and concurrency safety.
  - Direct paid-plan mutation blocked; checkout required.
  - Unlimited Assistant ignores the deprecated monthly-message setting.
  - Assistant leaves AI and lead credit balances unchanged.
  - Assistant conversation model is `gpt-4o-mini`.
  - Oversized message/service guardrails remain active.
  - Public plan API excludes legacy `ZYLORA`.

### Additional QA

- `migration_qa.py`: **7 checks / 0 errors**.
- `security_source_qa.py`: **107 files / 0 errors**.
- `control_inventory_qa.py`: **172/172 buttons and 72/72 links accounted for**.
- `assistant_accessibility_qa.py`: **13 checks / 0 errors**.
- `platform_responsive_qa.py`: **56 checks across 8 widths / 0 errors**.
- `check_nextjs_sources.js`: **477 files / 0 errors**.
- Browser product workflow after billing-selector changes: **1 / 1 passed**.
- Python modules and changed JavaScript files pass syntax/compile checks.

## Production deployment requirements

Before enabling real paid checkout in production, configure valid Razorpay plan IDs for all four plan/region combinations in SUPER_ADMIN → System:

- `starter_india_provider_plan_id`
- `starter_international_provider_plan_id`
- `growth_india_provider_plan_id`
- `growth_international_provider_plan_id`

Also configure the normal Razorpay credentials/webhook secret and OpenAI key. `SALES_ASSISTANT_MODEL` defaults to `gpt-4o-mini`; set it explicitly in production configuration if environment policy requires explicit values.

Live external-provider transactions were not executed in this environment because production Razorpay/OpenAI credentials are not available here. Provider-facing paths fail closed in production when required configuration is absent, and mock/payment-signature/browser workflows were covered by automated tests.

## Packaging hygiene

Transient local test database files, pytest caches, Python bytecode, and `__pycache__` directories are excluded from the production ZIP. Existing source, migrations, template/assets, QA JSON evidence, and production configuration examples are retained.
