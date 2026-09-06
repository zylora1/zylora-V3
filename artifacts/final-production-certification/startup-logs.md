# Railway startup log summary

Deployment `c0d42b96-0ca5-414d-8c90-1c4d5428f59f` is terminal `SUCCESS` for commit `fc107de1106200336e67a4416ebf14e1da6158fe`.

Recent redacted service logs show:

- `Waiting for application startup.`
- `Application startup complete.`
- repeated `/api/health` requests returning `200 OK`.

No migration failure, restart loop, or uncaught provider/storage exception appeared in the inspected recent redacted lines. The deployment metadata confirms the pre-deploy migration command `python -m scripts.run_migrations` and health-check path `/api/health`.
