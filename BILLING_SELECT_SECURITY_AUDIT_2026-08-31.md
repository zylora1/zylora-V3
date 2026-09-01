# Zylora Billing Select Security Audit — 2026-08-31

## Scope
This audit addresses the production findings reported against the Free/Starter/Growth/Pro regional-billing build:

1. `/api/billing/select` could set `users.plan='FREE'` while an ACTIVE paid subscription remained ACTIVE.
2. AI-created sites could exceed the template page-limit values.
3. A manual freelancer application probe using `starting_price` appeared to store a zero price.

## Disposition

### 1. `/api/billing/select` paid-subscription downgrade — CONFIRMED, FIXED
The endpoint was a genuine entitlement/subscription consistency bug.

Production fix:
- `/api/billing/select` is now an initial Free-plan selection endpoint only.
- It cannot be used as a downgrade primitive for Starter, Growth, or legacy Zylora accounts.
- An ACTIVE paid subscription returns HTTP 409 with `SUBSCRIPTION_CANCELLATION_REQUIRED`.
- Existing paid accounts without an ACTIVE subscription must use `/api/billing/change`, which retains downgrade validation, wallet reset, page checks, and billing-event logging.
- The final Free-selection UPDATE contains a `NOT EXISTS (... status='ACTIVE')` predicate to prevent a concurrent payment activation from being overwritten.
- The endpoint self-heals historical entitlement drift when it sees `users.plan=FREE` but an ACTIVE paid subscription: the active subscription product is restored as the user entitlement before the request is rejected.

Data repair:
- `migrations/022_billing_select_subscription_reconciliation.sql` repairs existing rows where an ACTIVE Starter/Growth/legacy-Zylora subscription disagrees with `users.plan`.
- Migration repair was explicitly verified against a synthetic corrupted `FREE + ACTIVE STARTER` row; the result was `STARTER, plan_selected=1`.

Regression coverage:
- ACTIVE Starter cannot be downgraded via `/api/billing/select`.
- Subscription remains ACTIVE and user entitlement remains Starter.
- Historical `FREE + ACTIVE GROWTH` corruption is self-healed to Growth.

### 2. AI-created page count vs plan page limits — INTENTIONAL POLICY, NOT CHANGED
The publish carve-out for `origin='AI'` is deliberate under the current Zylora product policy:
- AI information architecture is derived from the user's prompt/business requirements.
- Free/Starter/Growth page-limit values apply to template publishing, not AI-created information architecture.

No plan gate was added to AI-created sites because doing so would contradict the current product contract.

To remove API ambiguity without changing behavior:
- `/api/public/plans` now includes `page_limit_scope: "TEMPLATE"` and `ai_page_policy: "PROMPT_DRIVEN"`.
- `/api/billing.limits` exposes the same policy metadata.
- Existing `pages` / `page_limit` fields are retained for backward compatibility.
- Current landing, choose-plan, publish-flow, and dashboard copy already describes the limits as template-page/template-publishing limits.

### 3. Freelancer starting price — FALSE POSITIVE, FRONTEND/API ARE CONSISTENT
The production form is correctly wired:
- UI displays major units by dividing `starting_price_minor` by 100.
- User freelancer submission sends `starting_price_minor: Math.round(value * 100)`.
- SUPER_ADMIN moderation uses the same conversion.
- API schema and persistence both consume `starting_price_minor`.

The reported zero came from manually sending the unrecognized key `starting_price`; Pydantic used the defined default for `starting_price_minor`.

A static regression assertion now covers both the user and SUPER_ADMIN price-conversion paths.

## Verification

- Test collection after the change: **139 tests**.
- All 139 tests passed module-by-module after the billing guard was introduced, including the browser E2E module.
- After adding explicit page-policy metadata, the directly affected billing/public-plan/marketplace/E2E suites were rerun: **36/36 passed**.
- Focused billing + freelancer hardening suite: **18/18 passed**.
- `python -m compileall -q app`: passed.
- All 14 `static/*.js` files passed `node --check`.
- Browser E2E: **1/1 passed** in this execution environment.
- Migration 022 semantic repair test: `FREE + ACTIVE STARTER` -> `STARTER`.

## Production behavior after fix

- First-time unselected Free account -> `/api/billing/select FREE` succeeds.
- Already-selected Free account -> same request is idempotent.
- Active Starter/Growth subscriber -> `/api/billing/select FREE` is blocked with 409; paid entitlement remains active.
- Scheduled cancellation -> paid access remains active through the current period; provider cancellation/completion transitions the account through the authoritative subscription lifecycle.
- Paid account with no ACTIVE subscription -> downgrade must go through `/api/billing/change`.
- AI-created site page count remains prompt-driven.
- Template page limits remain Free 2 / Starter 5 / Growth 8.

## Deployment note
Apply migrations before serving traffic so migration 022 repairs any historical entitlement drift. Live Razorpay/OpenAI provider validation still requires production credentials and provider connectivity.
