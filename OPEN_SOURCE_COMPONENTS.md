# Open-source component boundary

## Penpot

- Upstream: https://github.com/penpot/penpot
- Version/tag: `2.17.0`
- Commit: `bdce5817ea86d028db29113d9ecdadcf07097b36`
- License: MPL-2.0
- Source location: `vendor/penpot/` (Git submodule)
- Integration method: official upstream source plus the official self-hosted
  Docker Compose distribution recorded in `integrations/penpot/`
- Zylora-authored files: `app/penpot_*.py`, `app/provider_health.py`,
  `static/penpot-plugin/zylora-website-tools/`, and integration manifests.
- Upstream modifications: none. The authoritative list is
  `integrations/penpot/modified-upstream-files.json`.

## Reproducibility

```powershell
git clone --recurse-submodules <zylora-repository>
git submodule update --init --recursive
git -C vendor/penpot checkout --detach bdce5817ea86d028db29113d9ecdadcf07097b36
```

The local host does not provide a Docker Linux engine, so the Penpot runtime,
OIDC SSO and real file lifecycle are not certified here. Start the pinned
distribution only on an isolated Linux-capable staging host and complete the
cutover checklist before changing `STUDIO_ENGINE` from `legacy`.

License notices and the compliance record are retained in
`THIRD_PARTY_LICENSES/PENPOT_MPL-2.0.md` and
`integrations/penpot/penpot-compliance-manifest.json`.
