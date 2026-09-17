# Zylora production system map

## Runtime entrypoints

- `app/main.py` is the FastAPI application entrypoint. It mounts the core API, editor, extended/admin, operations, gap-fix, importer, CRM, CMS, and sales-assistant routers and serves the public/static surfaces.
- `app/db.py` owns SQLAlchemy engine/session setup and migration/bootstrap helpers. The configured default in this checkout is SQLite for development; production validation rejects SQLite.
- `static/` contains the browser applications and public shells. `static/studio.html` and `static/studio.js` are the Studio shell/bundle.
- `studio/` contains the TypeScript Studio source: document store, canvas/layers, inspector, panels, geometry, drag/resize, and responsive editing. `scripts/build_studio.js` produces the browser bundle.

## Product surfaces and route modules

| Surface | Primary implementation | Representative routes |
|---|---|---|
| Authentication/account | `app/api.py`, `app/api_extended.py` | `/api/auth/signup`, `/api/auth/login`, `/api/auth/logout`, `/api/auth/me`, password/email verification, Google OAuth |
| Dashboard/sites | `app/api.py` | `/api/sites`, `/api/sites/{site_id}`, duplicate/delete, preview, export |
| AI creator/editor | `app/api.py`, `app/studio_ai_operations.py`, `app/api_operations.py` | `/api/sites`, `/api/sites/{site_id}/ai-edit`, `/api/sites/{site_id}/ai-edit/sitewide` |
| Zylora Studio | `app/api_editor.py`, `app/main.py`, `studio/` | `/studio/{site_id}`, editor document/actions, studio save, revisions, assets, SEO/accessibility |
| Publishing/rendering | `app/api.py`, `app/main.py`, `app/studio_renderer.py`, `app/cms_runtime.py` | publish/unpublish/rollback, public site paths, dynamic CMS routes, sitemap extension |
| CMS | `app/cms.py`, `app/cms_runtime.py`, `app/main.py` | `/api/cms/*`, dynamic collection/item pages, CMS revisions/bindings/repeaters |
| CRM/leads | `app/api_crm.py`, `app/crm.py`, `app/api.py` | contacts, companies, pipelines/deals, tasks, automations, leads, exports |
| Chatbot/sales assistant | `app/api_sales_assistant.py`, `app/api_gapfixes.py`, `app/sales_assistant.py`, `app/chatbot.py` | public chatbot, knowledge/context, metrics, assistant conversations |
| Billing/credits | `app/api_extended.py`, `app/api.py` | regional pricing, subscriptions, Razorpay order/verify/webhook, credit topups, `/api/credits` |
| Domains/integrations | `app/api_extended.py` | domains, Google Sheets, ownership transfer, integration tests/resync |
| Operations/admin | `app/api_extended.py`, `app/api_operations.py`, `app/api_gapfixes.py` | admin users/templates/plans/blog/payments/usage/health, backups, QA, audit, operations |
| Media/import/export | `app/api_editor.py`, `app/api_importer.py`, `app/media.py`, `app/api.py` | site assets, uploads, import summary, source export |

## Persistence and external dependencies

- SQLAlchemy models live under `app/models/` and migrations are in `migrations/`. The current migration chain includes Studio/CMS/CRM additions through `034_crm_core.sql` and renderer authority in `033_renderer_authority.sql`.
- Redis is optional in development and is configured through `REDIS_URL`; production cache/session behavior is not certified unless a Redis service is available.
- Media supports local storage and S3-compatible storage through `app/media.py` and settings in `app/config.py`. Production validation requires either S3 credentials or an explicitly durable local volume.
- Optional providers are configured by environment: OpenAI, Resend, Twilio/Meta WhatsApp, Google OAuth/Sheets, Razorpay, Cloudflare, and Turnstile. `validate_production_settings()` fails closed for required production credentials.

## Renderer authority and safety boundaries

- Legacy publishing remains the default. Migration `033_renderer_authority.sql` persists `renderer_state`, immutable V4 publication snapshots, and legacy backups.
- Super Admin-only renderer endpoints in `app/api_extended.py` support snapshot capture, `LEGACY`/`V4_CANARY`/`V4` selection, audit events, and rollback without deleting the legacy snapshot.
- Site ownership and collaborator checks are enforced in the API dependencies/services; client-side visibility is not treated as authorization.
- Public rendering reads immutable published state. Draft Studio/CMS state is not used as a live publication source.

## Certification scope note

This map is based on the current checkout and route/module inspection. External-provider, PostgreSQL, and non-Chromium browser status is recorded separately in the certification artifacts and is not inferred from source presence.
