# Zylora Final Release Closure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce the smallest safe deployable Zylora release, remove measured Studio interaction bottlenecks, verify the release locally and in Railway production, and publish the required final certification.

**Architecture:** Keep the existing FastAPI backend, React/Vite Studio, SiteDocument V4 reducer, server-side renderer, and provider contracts. Use a compact, reachability-based deployment context for runtime template assets, and keep gesture previews transient with one persisted document/history commit at pointer-up.

**Tech Stack:** Python 3.11/3.13, FastAPI, SQLAlchemy, SQLite test fixtures/PostgreSQL production, React 19, TypeScript, Vite, Playwright, Railway CLI.

**Spec:** `docs/superpowers/specs/2026-09-11-final-release-closure-design.md`

## Global Constraints

- Preserve all existing user/source changes in the dirty worktree.
- Do not reset, clean, overwrite, or delete unrelated work.
- Do not remove required production templates/assets, migrations, or tests.
- Do not weaken security, authorization, billing, credit, or tenant-isolation behavior.
- Do not claim `PRODUCTION READY` unless every mandatory gate actually passes.
- Mark unavailable provider flows `NOT VERIFIED — CREDENTIALS UNAVAILABLE`.
- Stage and commit only release-closure files.

---

### Task 1: Establish a protected baseline and commit the approved design

**Files:**
- Create: `docs/superpowers/specs/2026-09-11-final-release-closure-design.md`
- Create: `docs/superpowers/plans/2026-09-11-final-release-closure.md`
- Do not modify: any existing dirty file outside these two new documents.

**Interfaces:**
- Produces: a design and task plan that identify the release context, Studio profiler, verification commands, deployment identity, and certification artifact.

- [ ] **Step 1: Confirm protected repository state**

Run:

```powershell
git status --short --branch
git rev-parse HEAD
git diff --name-only
```

Expected: current dirty files are listed; no file is reset or cleaned.

- [ ] **Step 2: Stage only the approved design files**

Run:

```powershell
git add -- docs/superpowers/specs/2026-09-11-final-release-closure-design.md docs/superpowers/plans/2026-09-11-final-release-closure.md
git diff --cached --name-only
```

Expected: exactly the two new documents are staged.

- [ ] **Step 3: Commit the design records**

Run:

```powershell
git commit -m "docs: define final release closure"
```

Expected: a new commit containing only the design and plan.

### Task 2: Make deployment packaging explicit and measurable

**Files:**
- Modify: `.railwayignore`
- Modify: `.dockerignore`
- Modify: `scripts/build_release_context.py`
- Modify: `scripts/release_package_qa.py`
- Create: `tests/test_release_packaging.py`
- Create: `scripts/release_context_report.py`

**Interfaces:**
- Consumes: `artifacts/repository-audit/template-reachability.json`, tracked Git files, current `.dockerignore` rules.
- Produces: a fresh compact context containing only runtime-required files, a machine-readable size report, and fail-closed package QA.

- [ ] **Step 1: Write failing packaging tests**

Add tests that assert:

```python
def test_ignore_rules_cover_all_generated_release_contexts():
    assert "release_context*/" in Path(".railwayignore").read_text()
    assert "release_context*/" in Path(".dockerignore").read_text()

def test_release_context_report_classifies_template_source_and_runtime():
    report = classify_path("template_projects/example/assets/source/app.js")
    assert report == "RUNTIME_REQUIRED" or report == "SOURCE_REQUIRED"

def test_release_package_qa_rejects_database_and_cache_artifacts(tmp_path):
    (tmp_path / "data").mkdir()
    (tmp_path / "data" / "local.db").write_bytes(b"x")
    assert scan_dir(tmp_path)
```

The classification test must use the repository's actual path classes, not a fabricated production template assumption.

- [ ] **Step 2: Run focused packaging tests and capture the expected failures**

Run:

```powershell
pytest -q tests/test_release_packaging.py
```

Expected: FAIL because suffixed contexts are not yet ignored and the report helper is not yet present.

- [ ] **Step 3: Harden ignore rules without excluding runtime templates**

Add these patterns to both ignore files:

```text
release_context*/
release_context*.zip
browser-results/
test-results/
coverage/
htmlcov/
scratch/
```

Keep `template_projects/` out of the ignore files because the current legacy renderer and catalogue still require it in a normal checkout. The deployment command will use the generated compact context.

- [ ] **Step 4: Add a deterministic classification/report helper**

Implement `scripts/release_context_report.py` with:

```python
def classify_path(relative: str) -> str: ...
def summarize_tree(root: Path) -> dict[str, object]: ...
def main() -> int: ...
```

Classify paths as `RUNTIME_REQUIRED`, `BUILD_REQUIRED`, `TEST_ONLY`, `SOURCE_REQUIRED`, or `DEVELOPMENT_ONLY` using explicit path rules and the reachability manifest. Report total bytes, top directories, top files, template source bytes, reachable runtime bytes, and excluded categories. Never print secrets or file contents.

- [ ] **Step 5: Make release-context creation fail closed**

Update `build_release_context.py` so it:

1. Refuses to overwrite any existing output directory.
2. Copies only tracked backend/static/migration files and `scripts/run_migrations.py`.
3. Copies only reachable render files and referenced assets from `template_projects`.
4. Excludes caches, maps, bytecode, backups, test artifacts, and local runtime data.
5. Records source commit, dirty status, reachability hash, context hash, file count, byte count, and classifications.

- [ ] **Step 6: Add release-context integrity checks**

Extend `release_package_qa.py` to reject generated contexts containing ignored scratch trees, source maps, local databases/media, caches, symlinks, secrets, or private keys while allowing the required compact template runtime files.

- [ ] **Step 7: Run focused packaging tests and measure the context**

Run:

```powershell
pytest -q tests/test_release_packaging.py
python scripts/release_context_report.py --root . --output artifacts/repository-audit/final-size-audit.json
python scripts/build_release_context.py --output release_context-final
python scripts/release_context_report.py --root release_context-final --output release_context-final/release-context-report.json
python scripts/release_package_qa.py release_context-final
```

Expected: focused tests pass, QA reports zero forbidden artifacts, and the report identifies exact remaining bytes. If the context is not below 100 MiB, retain only safe optimizations and document why the remaining assets are runtime-required.

- [ ] **Step 8: Commit packaging changes only**

Run:

```powershell
git add -- .railwayignore .dockerignore scripts/build_release_context.py scripts/release_package_qa.py scripts/release_context_report.py tests/test_release_packaging.py
git diff --cached --name-only
git commit -m "build: harden compact production packaging"
```

Expected: no unrelated dirty file is staged.

### Task 3: Reproduce and instrument Studio interaction performance

**Files:**
- Modify: `scripts/studio_performance_profile.py`
- Create: `tests/test_studio_performance_harness.py`
- Inspect only initially: `studio/interactions/useDrag.ts`, `studio/interactions/useResize.ts`, `studio/components/CanvasNode.tsx`, `studio/persistence/useAutosave.ts`, `studio/store.ts`.

**Interfaces:**
- Consumes: the real Studio bundle and isolated temporary test database.
- Produces: JSON metrics for 50, 100, 250, and 500 nodes covering render counts, RAF/frame timings, long tasks, input timings, layout reads, serialization, autosave calls, and history/document correctness.

- [ ] **Step 1: Add harness contract tests**

Test that the profiler result contains exactly these fields for every node count:

```python
required = {
    "requested_nodes", "rendered_nodes", "dom_elements", "initial_render_ms",
    "resize", "drag", "selection", "zoom", "breakpoint_switch", "undo", "save",
    "render_counts", "long_tasks", "serialization", "autosave_requests", "browser_errors",
}
assert required <= result.keys()
```

- [ ] **Step 2: Run the harness contract test to verify it fails**

Run:

```powershell
pytest -q tests/test_studio_performance_harness.py
```

Expected: FAIL because the current profiler only reports 500-node resize and does not include the full operation matrix.

- [ ] **Step 3: Instrument without changing Studio behavior**

Add browser probes for:

- `PerformanceObserver` long tasks and event timings.
- `requestAnimationFrame` frame intervals.
- `JSON.stringify` duration while explicitly enabled.
- `getBoundingClientRect` count/time.
- `fetch` count for `/studio-save`.
- per-node render counters exposed through a test-only global increment in the harness.

Exercise each operation with isolated pointer/keyboard events and wait for the save status to become `Saved`. Use a fresh temporary database and never the developer database.

- [ ] **Step 4: Run the profiler with browser permissions**

Run:

```powershell
python scripts/studio_performance_profile.py --output artifacts/repository-audit/studio-performance-baseline.json
```

Expected: a JSON artifact or an explicit environment error naming the Playwright browser/driver failure. Do not substitute subjective claims for missing metrics.

- [ ] **Step 5: Commit the harness before performance changes**

Run:

```powershell
git add -- scripts/studio_performance_profile.py tests/test_studio_performance_harness.py
git commit -m "test: add deterministic Studio performance profile"
```

### Task 4: Apply measured Studio gesture optimizations

**Files:**
- Modify only after profiling: `studio/interactions/useDrag.ts`, `studio/interactions/useResize.ts`, `studio/components/CanvasNode.tsx`, `studio/engine/transient.ts`, or `studio/store.ts` as evidence requires.
- Modify: `tests/test_studio_transform_rebuild.py` or a focused new test only for reproduced behavior.

**Interfaces:**
- Consumes: profiler bottleneck metrics.
- Produces: transient RAF-driven drag/resize previews, cached gesture geometry, one canonical reducer commit at pointer-up, one history entry, and one debounced autosave schedule per gesture.

- [ ] **Step 1: Add a regression test for one commit per gesture**

Assert that a 24-event resize or drag sequence produces one `UPDATE_NODE_GEOMETRY` reducer commit, one history entry, and no document revision mutation during pointer moves.

- [ ] **Step 2: Run the focused regression test before implementation**

Run:

```powershell
pytest -q tests/test_studio_transform_rebuild.py -k "gesture or history or geometry"
```

Expected: the new regression test fails if the current implementation dispatches or serializes on pointer moves.

- [ ] **Step 3: Implement only proven optimizations**

Preserve the existing reducer and document schema. Use a ref-held latest pointer event plus one pending RAF for drag; measure peers/parent once at pointer-down; compute snapping from cached geometry; update transient preview state in the RAF; commit the final canonical geometry on pointer-up. Keep resize's existing RAF and extend it only where profiling shows a remaining cost. Do not memoize unrelated panels or virtualize the canvas without evidence.

- [ ] **Step 4: Verify Studio functional contracts and the profiler**

Run:

```powershell
pytest -q tests/test_studio_engine_v2_contract.py tests/test_studio_freeform_contract.py tests/test_studio_geometry_contract.py tests/test_studio_transform_rebuild.py tests/test_studio_publish_fidelity.py
npm.cmd run build:studio
python scripts/studio_performance_profile.py --output artifacts/repository-audit/studio-performance-after.json
```

Expected: focused tests and build pass; the after-profile quantifies whether long tasks, p95 input duration, layout reads, and serialization improved. If the profiler remains unavailable, report the exact environment blocker and do not claim a measured improvement.

- [ ] **Step 5: Commit only the measured Studio changes**

Run:

```powershell
git add -- studio tests scripts/studio_performance_profile.py
git diff --cached --name-only
git commit -m "perf: keep Studio gestures transient"
```

### Task 5: Verify local release, security, and provider boundaries

**Files:**
- Modify only if a focused test proves a defect: the relevant existing backend/config/security file.
- Create/update: `artifacts/final-production-certification/*` as generated evidence.

**Interfaces:**
- Consumes: committed packaging and Studio changes.
- Produces: reproducible local verification evidence and an explicit provider-credential matrix.

- [ ] **Step 1: Run focused backend/security/credit tests**

Run:

```powershell
pytest -q tests/test_production_delivery_config.py tests/test_adversarial_security.py tests/test_unified_ai_credits.py tests/test_free_branding.py tests/test_unified_page_limit.py tests/test_crm_security.py tests/test_crm_concurrency.py tests/test_regional_billing_sales_assistant.py tests/test_role_dashboard_separation.py
```

- [ ] **Step 2: Run the source and migration QA tools**

Run:

```powershell
python scripts/migration_qa.py
python scripts/security_source_qa.py
python scripts/security_pattern_scan.py
python scripts/template_dependency_security_qa.py
```

Expected: failures are investigated and fixed at the root cause; tests are never weakened.

- [ ] **Step 3: Verify WebKit environment independently**

Run:

```powershell
python -m playwright install --dry-run webkit
python scripts/blank_studio_browser_e2e.py
```

If the dry run identifies a missing browser and installation is feasible without an unavailable external credential, install the exact browser runtime and rerun the test. If the browser still closes before page creation, classify it as `NOT VERIFIED — LOCAL PLAYWRIGHT ENVIRONMENT` and retain the full error.

- [ ] **Step 4: Run the full local suite and Studio build**

Run:

```powershell
pytest -q
npm.cmd run build:studio
```

Record passed, skipped, failed, duration, and the exact failure output.

### Task 6: Cross-browser, responsive, accessibility, and tenant verification

**Files:**
- Use existing browser scripts under `scripts/` and existing tests.
- Create/update generated evidence under `artifacts/final-production-certification/`.

**Interfaces:**
- Consumes: the exact locally tested commit and compact release context.
- Produces: Chromium/Firefox/WebKit critical-workflow evidence, responsive matrix, accessibility results, and tenant-isolation results.

- [ ] **Step 1: Run critical Studio/public browser workflows**

Run the existing Chromium, Firefox, and WebKit scripts for authentication, dashboard, Studio, publishing, public rendering, chatbot/lead forms, booking, billing page, and admin separation. Capture browser errors and screenshots only in the existing artifacts directory.

- [ ] **Step 2: Run responsive checks at all required widths**

Exercise 1440, 1280, 1024, 768, 430, 390, 375, and 360 widths. Assert zero unexplained horizontal overflow and record any inaccessible controls or clipping.

- [ ] **Step 3: Run accessibility checks on representative routes**

Check keyboard navigation, focus, labels, contrast, dialogs, forms, ARIA, and editor controls. Record serious/critical violations and manually classify false positives.

- [ ] **Step 4: Run tenant isolation and authorization tests**

Use two isolated accounts and attempt cross-account access to sites, pages, leads, appointments, conversations, domains, billing, credits, integrations, media, and Studio documents. Expected result is the architecture's 403/404 behavior for every resource.

### Task 7: Verify exact release context and deploy to Railway

**Files:**
- Create: `release_context-final/` as an ignored generated directory only.
- Create/update: `artifacts/final-production-certification/deployment-*` evidence files.
- Do not modify: unrelated dirty files or the existing release contexts.

**Interfaces:**
- Consumes: the final tested commit, the compact packager, Railway service link.
- Produces: release context hash/size, deployment ID, remote/deployed commit evidence, and health endpoint result.

- [ ] **Step 1: Confirm the tested commit and staged diff**

Run:

```powershell
git rev-parse HEAD
git status --short --branch
git diff HEAD -- app studio static scripts tests .railwayignore .dockerignore Dockerfile requirements-prod.txt run.sh
```

Expected: only intended release-closure changes are present in the committed release surface.

- [ ] **Step 2: Build and QA a fresh context from the final commit**

Run:

```powershell
python scripts/build_release_context.py --output release_context-final
python scripts/release_package_qa.py release_context-final
```

Expected: zero forbidden artifacts, context hash recorded, and source commit equals `git rev-parse HEAD`.

- [ ] **Step 3: Deploy the compact context**

Run only after all local gates pass:

```powershell
railway up --service zylora-app --detach
```

The command must run with the working directory set to `release_context-final`, so Railway receives only the QA-approved context. Record the deployment ID returned by Railway. This is an authorized external state change and must not be retried blindly after an unknown outcome.

- [ ] **Step 4: Verify deployment identity and health**

Run:

```powershell
railway status
Invoke-WebRequest -UseBasicParsing https://zylora-api-production.up.railway.app/api/health
```

Expected: deployment is online, the deployed source identity matches the release manifest/commit evidence, and health returns HTTP 200. Inspect logs for unexplained critical errors.

### Task 8: Run production golden path and create final certification

**Files:**
- Create: `FINAL_ZYLORA_PRODUCTION_CERTIFICATION.md`
- Create/update: `artifacts/final-production-certification/` evidence files.

**Interfaces:**
- Consumes: production URL, authenticated test accounts/credentials available in the environment, deployment identity, local and browser evidence.
- Produces: the required final report with one strict verdict.

- [ ] **Step 1: Execute authenticated production golden path**

Verify landing, signup/auth, dashboard, website creation, Studio add/edit/drag/resize/overlap/layers/responsive/autosave/refresh, AI editing/credits, preview/publish/public rendering, chatbot/lead capture, appointments, CRM status, billing, upgrade/downgrade, branding, custom domains where credentials exist, and logout. Verify server-side state after each major mutation.

- [ ] **Step 2: Verify infrastructure and provider flows**

Use PASS/FAIL/NOT VERIFIED for PostgreSQL, Redis, object storage, Cloudflare, Turnstile, Google OAuth, email, WhatsApp, AI, and payments. Do not infer provider success from source code or dashboard configuration.

- [ ] **Step 3: Write the exact required certification structure**

Populate sections A–N exactly as requested, including:

- final verdict;
- local/remote/deployed SHA and deployment ID;
- before/after artifact size and percentage reduction;
- 50/100/250/500-node Studio performance table;
- local verification counts;
- production golden path status for every step;
- infrastructure/security/billing/AI/lead-credit matrices;
- Studio functional matrix;
- every remaining issue with P0–P3 severity;
- free/paid/payment/AI/customer recommendation.

- [ ] **Step 4: Self-attack the verdict and verify report claims**

For every PASS, locate command/output evidence. For every unavailable provider, retain `NOT VERIFIED`. Recalculate artifact reduction as:

```text
reduction_percent = (before_bytes - after_bytes) / before_bytes * 100
```

Do not call the release production-ready if any mandatory gate is failed, unverified without an explicitly acceptable branch, or contradicted by deployment logs.

- [ ] **Step 5: Run final verification before claiming completion**

Run:

```powershell
git diff --check
python scripts/release_package_qa.py release_context-final
git status --short --branch
```

Expected: no whitespace errors, package QA passes, and unrelated dirty work remains present and unmodified.
