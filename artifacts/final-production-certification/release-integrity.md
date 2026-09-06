# Release integrity evidence

- Certification baseline SHA: `fc107de1106200336e67a4416ebf14e1da6158fe`
- Branch: `main`
- Railway deployment: `c0d42b96-0ca5-414d-8c90-1c4d5428f59f`
- Railway deployment status: `SUCCESS`
- Railway deployment metadata commit: `fc107de1106200336e67a4416ebf14e1da6158fe`
- Health: `GET /api/health` returned HTTP 200 with `{"status":"ok"}`.
- Start command: `sh ./run.sh`
- Pre-deploy migration command: `python -m scripts.run_migrations`
- Health-check path: `/api/health`

The working tree contained inherited unrelated dirty/untracked files; none were reset or discarded.
