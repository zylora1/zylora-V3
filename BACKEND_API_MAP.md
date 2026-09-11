# Backend API map

All application APIs below are mounted under `/api` unless a route is explicitly marked public. Authorization and CSRF checks remain in the existing handlers; this map is a navigation aid, not a replacement for route-level policy.

## Identity and account

- `/api/auth/signup`, `/api/auth/login`, `/api/auth/logout`, `/api/auth/me`, profile and account deletion routes.
- `/api/auth/google/start`, `/api/auth/google/callback`, email verification and password token flows.
- `/api/credits`, `/api/ai-credits`, `/api/ai-credits/usage`, `/api/ai-credits/transactions`.

## Sites, Studio and publishing

- `/api/sites`, `/api/sites/{site_id}`, `/api/sites/{site_id}/structure`, `/api/sites/{site_id}/publish`, `/api/sites/{site_id}/unpublish`, rollback and export routes.
- `/api/sites/blank` creates the blank-site path used by the current Studio onboarding.
- `/api/sites/{site_id}/editor-document`, `/api/sites/{site_id}/editor/actions`, undo/redo and revisions.
- `/api/sites/{site_id}/studio-migrate` and `/api/sites/{site_id}/studio-save` preserve the Studio migration, CAS save and revision workflow.
- `/api/sites/{site_id}/assets`, stock-image import, brand, business profile, SEO settings, footer links and accessibility checks.

## Billing and entitlements

- `/api/public/plans`, `/api/public/regional-price` and `/api/billing/regional-offer` provide server-owned plan/price data.
- `/api/billing`, `/api/billing/history`, `/api/billing/select`, `/api/billing/change`, subscription and Razorpay order/verify/webhook routes.
- `/api/billing/credit-topups` and AI wallet operations remain server-authoritative for paid credits.

## Growth and business workflows

- Lead and appointment APIs remain in `app/api.py` and `app/api_sales_assistant.py`.
- CRM contacts, companies, pipelines, deals, tasks, tags, segments, automations and imports/exports are under `/api/crm`.
- CMS content and bindings are under `/api` routes in `app/cms.py`.
- Public chatbot and Sales Assistant routes are scoped by site ID; authenticated settings, conversations and analytics require account ownership.

## Operations and administration

- `/api/sites/{site_id}/qa`, health, launch checklist, backups and growth/audit reports.
- `/api/admin/*` covers users, plans, templates, analytics, payments, AI credits, campaigns, support and health, with SUPER_ADMIN enforcement.
- `/api/health` is the unauthenticated health probe used for deployment checks.

## Security invariants

The Studio page and private preview check session plus site ownership before rendering. Existing API handlers retain CSRF, durable rate limiting, tenant ownership, billing entitlement and provider verification boundaries. No frontend route added in this delta creates a new payment amount, bypasses authentication or fabricates a provider result.
