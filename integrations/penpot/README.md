# Pinned Penpot source and distribution

The official Penpot source is present as an isolated Git submodule at
`vendor/penpot/`, pinned by the superproject to tag `2.17.0` and commit
`bdce5817ea86d028db29113d9ecdadcf07097b36`. Zylora does not copy or modify
upstream files. The submodule is the reproducible source boundary; the
Zylora bridge, compiler, migration and plugin stay outside it.

Clone and verify the source with:

```powershell
git clone --recurse-submodules <zylora-repository>
git submodule update --init --recursive
git -C vendor/penpot checkout --detach bdce5817ea86d028db29113d9ecdadcf07097b36
git -C vendor/penpot describe --tags --exact-match
```

This directory records the official Penpot self-hosted distribution selected
for the controlled cutover. The compose file was fetched from the official
`2.17.0` tag and its SHA-256, upstream commit, and acquisition status are
recorded in `penpot.lock.json`.

The certification host does not have a Docker CLI/engine, so the distribution
was not started here. `STUDIO_ENGINE=legacy` therefore remains the safe default
and no Penpot runtime or SSO claim is made.

When a host with Docker is available, follow the official Penpot Docker guide
and start this pinned file with an explicit version:

```powershell
$env:PENPOT_VERSION = "2.17.0"
docker compose -p zylora-penpot -f integrations/penpot/docker-compose.2.17.0.yaml up -d
```

Do not enable the Zylora Penpot engine until the runtime, OIDC session, real
file lifecycle, plugin, compiler, preview and publish flow have passed the
cutover checklist.

The current certification host has no Docker Linux engine, so the runtime
remains blocked. Railway staging is a future Linux-runtime target and is not
part of this local certification pass.
