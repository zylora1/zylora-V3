# ZYLORA RELEASE ARTIFACT INTEGRITY AUDIT — 2026-08-31

## Verdict

**PASS — release artifact is clean after remediation.**

## Findings and remediation

The first certified ZIP was re-inspected at archive level. It incorrectly contained `data/zylora.db`, a populated local audit/test SQLite database. This was a release-packaging defect, not a live-customer database leak, but it was treated as high severity because release artifacts must never include authentication/session/token/customer-like fixture state.

The database was removed and the release process was hardened with `scripts/release_package_qa.py`. The gate rejects:

- `.db`, `.sqlite`, `.sqlite3`, WAL/SHM/runtime database artifacts
- `.env`
- Python bytecode and cache directories
- Pytest/mypy/ruff caches
- runtime uploaded media
- logs
- private-key/certificate file patterns
- symbolic links
- `node_modules` and `.next`

The Docker Compose/environment surface was also re-audited. Production startup now rejects the shipped local-development PostgreSQL password and Compose forwards all Settings fields, including `SESSION_TTL_HOURS`, `SALES_ASSISTANT_MODEL` and `INDEXNOW_ENDPOINT`. `.env.example` documents every application Settings field.

## Post-fix verification

- collected Pytest inventory: **147**
- final deterministic test reconciliation: **147 passed / 0 failed**
- Chromium E2E: **1 passed / 0 failed**
- migration QA: **7 checks / 0 errors**
- security source QA: **108 files / 0 errors**
- template/source structural validation: **479 files / 0 errors**
- clean working-tree release-package QA: **0 forbidden artifacts**
- final ZIP release-package QA: **0 forbidden artifacts**
- final ZIP database files: **0**
- final ZIP `.env` files: **0**
- `run.sh` executable mode in ZIP: **0755**

## Operational requirement

Build distributable releases from a clean worktree or run `make clean-test-data` before `make release-package-qa`. Do not package a post-test working directory without this gate.
