# Penpot Source Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the official Penpot 2.17.0 source as an isolated, exact, upgradeable dependency while preserving Zylora's existing bridge, compiler, migration, legacy Studio, and certification gates.

**Architecture:** `vendor/penpot/` contains only the upstream pinned source. `integrations/penpot/` contains Zylora-authored mapping, compiler, migration, plugin, auth, runtime, and documentation boundaries. `STUDIO_ENGINE=legacy` stays the default until a real Linux Penpot runtime, SSO, file lifecycle, compiler, publish, migration, and browser matrix are verified.

**Tech Stack:** Git submodule, Penpot 2.17.0, Docker Compose, FastAPI, existing Zylora SiteDocument/compiler/mapping/migration tests.

**Spec:** `C:\Users\joys0\.codex\attachments\07d11fed-45e2-49b5-a52e-8bba6eadd5cf\pasted-text.txt`

## Global Constraints

- Preserve the current 511-pass baseline.
- Pin Penpot to commit `bdce5817ea86d028db29113d9ecdadcf07097b36` and do not track `main`.
- Keep upstream Penpot isolated from `app/`, `static/`, and legacy `studio/` code.
- Do not modify upstream Penpot files unless a supported configuration/plugin/OIDC boundary is insufficient.
- Keep `SiteDocument` as the runtime/publishing source and Zylora authorization as the tenant boundary.
- Keep `STUDIO_ENGINE=legacy` until every real Penpot cutover gate passes.
- Do not remove compatibility providers without live replacement evidence.

### Task 1: Add the pinned upstream source boundary

**Files:**
- Create: `.gitmodules`
- Create: `vendor/penpot/` as a Git submodule
- Modify: `integrations/penpot/penpot.lock.json`
- Modify: `integrations/penpot/penpot-compliance-manifest.json`

**Interfaces:**
- Produces an exact Git submodule reference that `git submodule update --init --recursive` can reproduce.

- [ ] Add the official submodule at `vendor/penpot/`.
- [ ] Checkout commit `bdce5817ea86d028db29113d9ecdadcf07097b36`.
- [ ] Verify `git -C vendor/penpot describe --tags --exact-match` reports `2.17.0` or document the exact tag mapping.
- [ ] Record submodule path, repository, version, commit, and source provenance in the lock and compliance manifests.
- [ ] Run `git submodule status` and confirm the worktree is clean inside the submodule.

### Task 2: Make the source/build boundary reproducible

**Files:**
- Create: `OPEN_SOURCE_COMPONENTS.md`
- Modify: `integrations/penpot/README.md`
- Modify: `PENPOT_INTEGRATION.md`
- Modify: `THIRD_PARTY_COMPONENTS.md`
- Modify: `THIRD_PARTY_LICENSES/PENPOT_MPL-2.0.md`

**Interfaces:**
- Documents clone, submodule initialization, official Compose startup, staging requirements, upgrade procedure, and the current Docker blocker without claiming a running runtime.

- [ ] Document `git clone --recurse-submodules` and `git submodule update --init --recursive`.
- [ ] Document `PENPOT_VERSION=2.17.0` Compose startup and the separate Penpot services.
- [ ] State that no upstream files are modified unless added to `modified-upstream-files.json`.
- [ ] Record MPL notice and source location without exposing proprietary Zylora code.
- [ ] Document Railway staging as a future Linux runtime target, with isolated Penpot PostgreSQL/Redis services.

### Task 3: Track upstream modifications explicitly

**Files:**
- Create: `integrations/penpot/modified-upstream-files.json`
- Modify: `integrations/penpot/penpot-compliance-manifest.json`

**Interfaces:**
- The manifest must contain `upstream_version`, `upstream_commit`, and `modified_files`, with an empty list while all integration code remains outside the submodule.

- [ ] Write the zero-modification manifest.
- [ ] Add a test that fails if a tracked submodule file is changed without a manifest entry.
- [ ] Run the manifest test and source audit.

### Task 4: Preserve the legacy cutover gate

**Files:**
- Modify: `app/penpot_manifest.py`
- Modify: `app/provider_health.py`
- Modify: `tests/test_penpot_mapping.py`

**Interfaces:**
- `engine_enabled()` stays false until runtime, source, and SSO evidence exists.

- [ ] Read the submodule metadata without enabling Penpot automatically.
- [ ] Keep `STUDIO_ENGINE=legacy` as the default.
- [ ] Expose source/runtime status in provider health without secrets.
- [ ] Keep premature `STUDIO_ENGINE=penpot` requests fail-closed.

### Task 5: Verify and report

**Files:**
- Create/update: `ZYLORA_ACTUAL_PENPOT_STUDIO_CERTIFICATION_REPORT.md`
- Create/update: `artifacts/final-production-certification/penpot-source-verification.txt`

- [ ] Run Penpot source/submodule checks.
- [ ] Run focused Penpot mapping/compiler/migration/security tests.
- [ ] Run the complete Zylora suite and build checks.
- [ ] Attempt the actual runtime only if Docker/Linux services are available.
- [ ] Report runtime, SSO, real-file, compiler, publish, Railway, PostgreSQL, and browser gates as PASS, NOT TESTED, or BLOCKED_BY_EXTERNAL_ENVIRONMENT with evidence.
