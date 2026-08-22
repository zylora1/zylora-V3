# Zylora V3 deployment

## Required services
- Web: Next.js 16
- API: FastAPI/Uvicorn
- Worker: Celery
- PostgreSQL
- Redis
- S3-compatible durable object storage
- Cloudflare zone / Cloudflare for SaaS
- Razorpay account and live plans
- Resend verified sending domain
- Twilio WhatsApp production sender
- Google OAuth Web client

## Before first production request
1. Copy `.env.example` to the host's secret manager and replace every placeholder.
2. Use a cryptographically random `ZYLORA_SECRET_KEY`; never use the development value.
3. Configure Razorpay live webhook URL `/webhooks/razorpay` and its separate webhook secret.
4. Configure Google authorized origins for the deployed Zylora URL.
5. Verify the Resend sending domain.
6. Move Twilio from Sandbox to an approved production WhatsApp sender.
7. Configure Cloudflare for SaaS fallback origin and custom-hostname permissions.
8. Configure Turnstile production site/secret keys.
9. Run migrations/DB initialization, then the test/certification commands in `TEST_REPORT.md`.

## API and notification worker

Run the API and Celery worker from the same release and environment. The worker must be able to reach the same PostgreSQL database and Redis broker as the API:

```bash
uvicorn apps.api.app.main:app --host 0.0.0.0 --port 8000
celery -A apps.worker.celery_app:celery_app worker --loglevel=INFO
celery -A apps.worker.celery_app:celery_app beat --loglevel=INFO
```

Set `NOTIFICATION_DELIVERY_MODE=celery` in production. Lead capture writes the lead and its WhatsApp delivery outbox record in one database transaction, then queues the delivery. Celery beat recovers pending outbox records if the broker was unavailable during capture. Provider failure never rolls back the lead.

The source can be deployed without provider secrets, but provider-backed features will intentionally fail closed until their credentials are configured.


## Bootstrap the first SUPER_ADMIN
Run after migrations on the production database:

```bash
python scripts/bootstrap_super_admin.py --email you@example.com --password 'use-a-long-random-password'
```

There is intentionally no public promote-to-admin HTTP route.

## Razorpay plan integrity
Configure server-owned plan IDs:

```env
RAZORPAY_PLAN_STARTER_ID=plan_...
RAZORPAY_PLAN_GROWTH_ID=plan_...
```

The checkout endpoint maps STARTER/GROWTH to these IDs server-side and rejects mismatched client-supplied IDs.

## Public site base URL
`PUBLIC_SITE_BASE_URL` must point to the Next.js frontend/custom-site host. If omitted it now falls back to `PUBLIC_BASE_URL`, not the API origin.
