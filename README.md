# Zylora V3 — Fixed Application Build

This build repairs the audited non-template application gaps. Read `FIXED_RELEASE_REPORT.md`
before deployment. It contains the exact executed test results and the remaining environment/provider
certification boundaries.

# Zylora V3 — Production Candidate

A from-scratch monorepo implementing the canonical Zylora V3 product contract.

## Included
- Next.js/React web source for premium landing, dark operations dashboard, template gallery, managed scheduling, blog and SUPER_ADMIN surfaces.
- FastAPI + SQLAlchemy backend with auth, entitlements, sites, one-live-site switching, drafts, leads, scheduling, managed leads, blog, admin config, publishing and source ZIP export.
- PostgreSQL-first models with SQLite test compatibility.
- Redis/Celery/S3-compatible production configuration stubs and Docker Compose.
- 1,008 individually-authored template source files (standalone TSX implementations; no GenericTemplate renderer).
- Automated catalogue quality audit and backend/unit/integration tests.
- Security, release and deployment documentation.

## Important certification scope
The included automated test suite certifies the Python domain/API implementation and static source invariants. The Next.js project source is included but package installation/build was not executed in the generation environment because npm registry access was unavailable. Run `npm ci && npm run build && npm test` in your connected environment before deployment.

## Quick test
```bash
python -m pytest -q --cov=apps.api.app --cov-report=term-missing --cov-fail-under=92
python tools/audit_templates.py
python tools/audit_frontend.py
```

## Local stack
```bash
docker compose -f infra/docker-compose.yml up -d
```
Then configure `.env` from `.env.example`.

## Production rule
Do not deploy until all checks in `docs/RELEASE_CHECKLIST.md` pass against real PostgreSQL, Redis, durable object storage, web runtime and API runtime.
