# Render deployment guide

Render is the current and only deployment target for the hosted Zylora application. Railway documents in this repository are historical evidence and are not part of the current deployment path.

## Web service

Use the repository root `Dockerfile` as the Render web service runtime.

- Build: Dockerfile build
- Start: the image `CMD`, which invokes `run.sh`
- Bind address: `0.0.0.0`
- Port: `${PORT:-8000}`
- Health check: `/api/health`
- Migrations: `run.sh` invokes `python -m scripts.run_migrations` before `uvicorn`
- Studio engine: `STUDIO_ENGINE=legacy`

The application serves the static frontend from the same FastAPI process. No separate worker or Redis service is required by the current code. If a Render persistent disk is used for local media, mount it at `/app/data/media` and set `MEDIA_STORAGE_DURABLE=true`; otherwise configure the existing S3-compatible media boundary with Cloudflare R2 values.

## Required production configuration

At minimum, production needs a real HTTPS `APP_URL`, a PostgreSQL `DATABASE_URL`, `APP_ENV=production`, `AI_GATEWAY_API_KEY`, the chosen communications/payment/domain configuration, and the applicable application secrets. See `.env.example` and `docs/ENVIRONMENT_VARIABLE_AUDIT.md`. Keep all secrets in Render's secret store; never commit `.env`.

## PostgreSQL

Use Render PostgreSQL's connection URL as `DATABASE_URL`. The process fails closed if production is pointed at SQLite. Run migrations from the image before serving traffic and verify `/api/health` only after the database is ready.

## Deploy and rollback checklist

1. Push the reviewed commit to the GitHub `main` branch.
2. Confirm Render is deploying that exact commit SHA.
3. Confirm the image starts migrations once and reaches `/api/health`.
4. Run the release smoke tests against the Render URL.
5. Roll back by redeploying the previous known-good commit; do not rewrite migration history or delete tables.

This workspace has no authenticated Render CLI/API session, so a live Render deployment cannot be certified from the local environment until Render access is supplied.
