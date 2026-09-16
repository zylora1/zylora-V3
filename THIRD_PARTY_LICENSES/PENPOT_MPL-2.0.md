# Penpot source, distribution and license record

Zylora inspected the official Penpot repository and technical documentation on
2026-09-15 and pinned the official source on 2026-09-16:

- Repository: https://github.com/penpot/penpot
- Frontend architecture: https://help.penpot.app/technical-guide/developer/architecture/frontend/
- Data guide: https://help.penpot.app/technical-guide/developer/data-guide/
- License: Mozilla Public License 2.0 (MPL-2.0)
- Pinned tag: `2.17.0`
- Pinned upstream commit: `bdce5817ea86d028db29113d9ecdadcf07097b36`
- Source checkout: `vendor/penpot/` Git submodule
- Official distribution artifact:
  `integrations/penpot/docker-compose.2.17.0.yaml`
- Artifact SHA-256:
  `79330B4445D6C6DBA6918D222D342A365710BA90B6BB8A8EAE3D333155B0CF5E`

No Penpot source file is copied or modified in this repository. The submodule
is the official upstream source boundary and the compose file is the official
self-hosted distribution artifact. The `app/penpot_adapter.py` module and
`static/penpot-plugin/zylora-website-tools` files are original Zylora code.
The zero-modification manifest is
`integrations/penpot/modified-upstream-files.json`.

`PENPOT_MPL_COMPLIANCE=NEEDS_LEGAL_REVIEW`: the artifact and attribution are
recorded, but final deployment/distribution review and any future source-level
adaptation remain outstanding.
