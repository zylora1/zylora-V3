# Zylora Penpot integration record

## Current status

`STUDIO_ENGINE=legacy` remains the default. The official Penpot self-hosted
distribution has now been acquired and pinned, but the certification host does
not have a Docker engine, so no Penpot container was started and the runtime is
not certified.

The direct Penpot runtime gate is still
`BLOCKED_BY_EXTERNAL_ENVIRONMENT` because starting the official distribution,
SSO, file lifecycle and browser flow require Docker on the certification host.
The verified acquisition record is in
`integrations/penpot/penpot.lock.json`; it intentionally does not enable the
engine or claim a running runtime.

Pinned distribution:

- Version/tag: `2.17.0`
- Upstream commit: `bdce5817ea86d028db29113d9ecdadcf07097b36`
- Install method: official self-hosted Docker Compose distribution
- Artifact: `integrations/penpot/docker-compose.2.17.0.yaml`
- Artifact SHA-256: `79330B4445D6C6DBA6918D222D342A365710BA90B6BB8A8EAE3D333155B0CF5E`
- Runtime result: `BLOCKED_BY_EXTERNAL_ENVIRONMENT` (`docker` unavailable)
- Source checkout: `vendor/penpot/` Git submodule at the same verified commit
- Source mode: `git_submodule` (`source_copied=false`)

The controlled bridge is implemented in `static/penpot-plugin/zylora-website-tools/`,
`app/penpot_compiler.py`, `app/penpot_mapping.py`, and
`app/penpot_migration.py`. It preserves semantic plugin metadata, tenant
ownership, the server-side 298-page limit, deterministic compilation, and a
rollback snapshot. The plugin is first-party Zylora code and never receives
provider credentials.

`source_bridge_ready=false` is an explicit fail-closed cutover gate. While it
is false, `STUDIO_ENGINE=penpot` cannot enable the public Studio path and the
external MCP/REST gateway refuses deterministic writes that would otherwise
update only the compiled SiteDocument and leave the Penpot design source
stale. The legacy Studio remains the active default until a real Penpot bridge
has been exercised and the lock record is updated with evidence.

The versioned semantic boundary is centralized in
`app/penpot_semantics.py` and `integrations/penpot/zylora-component-registry.json`.
It validates `zyloraWebsiteSchemaVersion=1`, component schema version 1,
stable `zl_cmp_` instance IDs, explicit action targets, safe URLs, runtime
bindings, accessibility/SEO fields and deterministic duplicate identities.
The feature ownership matrix is maintained in
`docs/PENPOT_ZYLORA_FEATURE_PARITY.md`.

## Evidence inspected

- Upstream repository: https://github.com/penpot/penpot
- Frontend architecture: https://help.penpot.app/technical-guide/developer/architecture/frontend/
- Data guide: https://help.penpot.app/technical-guide/developer/data-guide/
- License: MPL-2.0

The source and documentation were inspected on 2026-09-15. The official
source is now present as a clean Git submodule; no upstream source file is
copied into or modified by this repository (`source_copied=false`).

## Boundary

When enabled in a future certified migration, Penpot will be the design-time
source and Zylora SiteDocument will remain the runtime/publish source. The
versioned `site_penpot_mapping` table holds tenant-scoped team/project/file
IDs, design and compiled revisions, migration status, and rollback metadata.
Ownership is checked against the Zylora site before any Penpot ID is used.

OIDC SSO and a running upstream Penpot distribution are **not yet certified**.
The `/studio/{site_id}` route keeps the legacy Studio as the default and
returns `PENPOT_NOT_READY` if the Penpot engine is selected prematurely.

## Licensing

The MPL-2.0 record is retained in
`THIRD_PARTY_LICENSES/PENPOT_MPL-2.0.md`. No MPL-covered Penpot source files
were modified. The source manifest is
`integrations/penpot/modified-upstream-files.json`. The compliance result for distribution/use is
`NEEDS_LEGAL_REVIEW` until the final self-hosted deployment and any future
source modifications receive legal review.
