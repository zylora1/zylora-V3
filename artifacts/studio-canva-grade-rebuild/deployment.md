# Railway deployment evidence

- Project: existing Zylora Railway project
- Environment: production
- Service: existing `zylora-app`
- Branch: `main`
- Commit: `589ec561386c7d0846a20613e27c555609a76e43`
- Deployment ID: `bfc562cb-5812-40d9-ac86-f70956bab9fe`
- Status: `SUCCESS`
- Health check: `GET https://zylora-api-production.up.railway.app/api/health` → HTTP 200, `{"status":"ok"}`
- Pre-deploy command observed: `python -m scripts.run_migrations`
- Start command observed: `sh ./run.sh`
- Startup logs: application startup complete; Uvicorn bound to `0.0.0.0:8080`; health request 200.

No credentials or secret values are included.
