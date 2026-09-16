# Railway staging architecture

Status: **staging control plane resolved; runtime certification in progress**

This document describes the isolated Railway staging topology for the final
Zylora cutover rehearsal. It is intentionally separate from the Railway
`production` environment and must never be used with production customer data.

## Project and environments

| Item | Value |
| --- | --- |
| Project | `zylora-staging` |
| Project id | `0d9ce2ad-9ede-4df7-a6e3-4e8e88d429d4` |
| Test environment | `staging` (`362e0d71-31c8-479f-b102-90e4793fea13`) |
| Production environment | Existing project environment; out of scope for this rehearsal |
| Region | Railway service configuration (currently Amsterdam for the existing app) |
| Data policy | Synthetic/fixture data only; no production customer data |

## Existing Zylora services

| Service | Purpose | Exposure | Port/health | Storage | Dependencies |
| --- | --- | --- | --- | --- | --- |
| `zylora-app` | FastAPI API, migrations, publisher and runtime | Public API domain plus Railway private DNS | `$PORT`; `/ready` and `/api/health` | No service volume currently attached | Zylora PostgreSQL; Redis when configured; provider facades |
| `zylora-web` | Zylora web/dashboard surface | Public web domain | Frontend service healthcheck | Build artifact | `zylora-app` |
| `zylora-admin` | Super-admin surface | Intended restricted/admin surface | Service-specific | Build artifact | `zylora-app` |
| `Postgres` | Zylora relational database | Private only | Railway PostgreSQL | Railway persistent volume | `zylora-app` |

The Zylora database is never shared with Penpot. Zylora migrations run only
against the Zylora database/schema.

## Penpot staging services (required before Penpot certification)

These services must be created in the same `staging` environment, with private
networking and no public database endpoints:

| Service | Official source/image | Purpose | Exposure | Port/health | Persistent storage | Dependencies |
| --- | --- | --- | --- | --- | --- | --- |
| `penpot-frontend` | `penpotapp/frontend:2.17.0` | Actual Penpot UI | Public only through a controlled staging domain | HTTP 8080; frontend readiness | None | `penpot-backend`, `penpot-exporter`, `penpot-mcp` |
| `penpot-backend` | `penpotapp/backend:2.17.0` | Penpot API/session/file backend | Private to frontend and Zylora bridge | Penpot backend readiness | Shared Penpot assets volume/object storage | `penpot-postgres`, `penpot-valkey` |
| `penpot-exporter` | `penpotapp/exporter:2.17.0` | Penpot export service | Private only | Internal health | None | `penpot-valkey`, `penpot-frontend` |
| `penpot-mcp` | `penpotapp/mcp:2.17.0` | Official Penpot MCP service | Private unless explicitly required | Internal service port | None | Penpot backend/session config |
| `penpot-postgres` | `postgres:15` | Penpot-only database | Private only | `pg_isready` | Dedicated Railway volume | None |
| `penpot-valkey` | `valkey/valkey:8.1` | Penpot websocket/cache service | Private only | `valkey-cli ping` | No durable application data | None |

The service images and version are pinned to the official Penpot 2.17.0
distribution recorded in `integrations/penpot/penpot.lock.json`. If Railway
cannot run this topology within the staging account limits, the Penpot gate is
recorded as `BLOCKED_BY_EXTERNAL_ENVIRONMENT`; no substitute/mock service is
accepted as runtime evidence.

## Network and secret boundaries

- Public entry points are limited to `zylora-app`, `zylora-web`, the intended
  admin surface, and the controlled Penpot frontend domain.
- PostgreSQL and Valkey services remain private.
- `PENPOT_SECRET_KEY`, OIDC signing material, provider keys, database URLs and
  object-storage secrets are Railway secrets only; they are not committed here,
  embedded in plugin bundles, or returned by health endpoints.
- Zylora and Penpot use separate databases, migrations, credentials and
  persistent storage.
- `STUDIO_ENGINE=legacy` remains the production/default value until the full
  Penpot runtime checklist passes in staging.

## Health and readiness

The rehearsal records process health separately from dependency readiness:

- Zylora: `/api/health` for process/application health and `/ready` for required
  dependency readiness where configured.
- Penpot frontend: HTTP reachability and the actual authenticated file workflow.
- Penpot backend: authenticated API/session/file operation, not only a TCP or
  process check.
- PostgreSQL: `pg_isready` plus migrations and transactional/concurrency tests.
- Valkey: `PING` plus the relevant websocket/cache operation.

An environment variable being present is not provider health evidence.

## Rollback

The safe rollback is to leave `STUDIO_ENGINE=legacy`, preserve the previous
SiteDocument/revision, and stop or detach only the Penpot staging services. A
failed Penpot migration never deletes the legacy SiteDocument. Production is not
mutated by this rehearsal.

## Current external blocker

Railway authentication and project discovery succeeded, but the workspace trial
is expired. Provisioning the required private Redis dependency was rejected
before creation, so the Penpot service set cannot be brought up in this
environment. The existing staging PostgreSQL service also has no public TCP
proxy and the host has no SSH key for Railway's private tunnel. These are
account/runner constraints; they are not represented as application PASS
evidence.

The Railway variable-list command used during diagnosis returned staging
configuration to the command runner. Secret values are intentionally not
recorded in this repository or report; rotate any staging credentials exposed
by an operator-facing console before reusing the environment.
