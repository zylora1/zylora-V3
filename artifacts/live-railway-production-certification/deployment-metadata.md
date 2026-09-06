# Deployment metadata (redacted, final release)

## Current release verification

- Deployment: `a1976d5b-e61e-4b2f-b06c-27640a5b5d38`
- Commit: `677f903c6bb522b0e13b0920315a879d3e45e4eb`
- Status: `SUCCESS`
- Health: `/api/health` → HTTP 200 (`{"status":"ok"}`)
- Public smoke: `/`, `/pricing`, `/templates` → HTTP 200

- Project ID: `0d9ce2ad-9ede-4df7-a6e3-4e8e88d429d4`
- Environment ID: `1bb09f58-6094-4bba-8c94-51eb859b1d1b`
- Service: `zylora-app`
- Deployment: `6eba968e-4e20-4481-8d8a-6866504b76e6`
- Commit: `de9cd19377ebda7925d70ebc4efe366d205196e2`
- Status: `SUCCESS`
- URL: `https://zylora-api-production.up.railway.app`
- Start: `sh ./run.sh`
- Pre-deploy migration: `python -m scripts.run_migrations`
- Health: `/api/health` → HTTP 200 (`{"status":"ok"}`)
- Docker: not used locally

Environment inventory was inspected by variable name only. Secret values are intentionally omitted. Deployment logs reached application startup complete and health 200. Direct SQL tunnel/schema inventory remains BLOCKED because Railway Postgres is private and no SSH key/public proxy was available.
