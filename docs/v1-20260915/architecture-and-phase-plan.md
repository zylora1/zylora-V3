# Zylora v1 architecture and phase plan

## Governing design

The user supplied the implementation architecture and authorized product completion. Retain the existing FastAPI backend, React Studio, canonical schema v5 and publisher. Work in the specification's phase order. No deployment. Existing working-tree modifications are preserved.

The eight initial matrices exist in this directory. Their UNVERIFIED entries are audit work remaining, not passes. The route inventory is statically generated and includes router-local paths; literal test references are candidates only.

## Verified initial source findings

- `app/studio_document.py` defines canonical SiteDocument and schema validation.
- `studio/store.ts` owns document changes and ephemeral selection; `studio/engine/commands.ts` wraps reducer actions.
- `studio/persistence/useAutosave.ts` saves with revisions and retains local changes on conflict.
- `app/api_editor.py:save_studio` uses a conditional revision update but omits revision snapshots and page-count synchronization.
- `app/editor_state.py:site_state` omits Studio JSON. Existing revisions/backups therefore cannot recover canonical Studio edits.
- `studio/store.ts:commit` appends snapshots without a bound.
- `writeGeometry` stores all inherited CSS dimensions into responsive overrides even when changing one geometry field. This needs an executed inheritance regression before modification.
- No Penpot adapter or external MCP/tool gateway was found in app/ or studio/.
- The supplied TailAdmin archive exists and includes the MIT license. Extracted audit reference retains that notice.

## Phase 1: canonical recovery and state integrity

Files: `app/editor_state.py`, `app/api_editor.py`, `studio/store.ts`, focused regression tests.

1. Reproduce missing canonical revision data through real blank-site/save/revisions/restore routes.
2. Include canonical JSON in revision and backup payloads; never add another document model.
3. Persist pre-save recovery and post-save checkpoints atomically with the conditional save. Update page count from the validated document.
4. Restore Studio content with a fresh monotonically increasing revision, preserving old revision payload compatibility and leaving published snapshots unchanged.
5. Render revision preview from the restored canonical document through the existing renderer.
6. Bound in-memory history while retaining redo-branch semantics.
7. Test failure rollback, stale saves, cross-owner restoration and published-state isolation.

Validation: isolated SQLite database; existing Studio, recovery, renderer, page-limit and entitlement suites; TypeScript check and Studio build. PostgreSQL concurrency requires a separate actual test and cannot be inferred from SQLite.

## Subsequent phases

2. Inspect upstream Penpot source boundaries and license; adapt actual relevant mechanics through typed mappings, preserving current geometry tests. A visual rename is insufficient.
3–5. Inspector, tokens, responsive inheritance and renderer parity. Execute inheritance regression before changing responsive geometry serialization.
6–10. Verify pages, media, business components, CMS and AI against existing services. Avoid duplicate backends; close confirmed gaps with tests.
11. Port supplied TailAdmin geometry and components around current dashboard data/actions. Matched reference screenshots are required before fidelity claims.
12. Verify public acquisition routes; implement truthful integration registry and official brand provenance only as capabilities become available.
Gateway. `app/agent_gateway.py` now exposes one authorization-aware tool service through REST (`/api/agent`) and MCP (`/mcp`). It uses durable connector hashes, scopes, site allowlists, revocation, payload-bound idempotency, typed `apply_v4_operations`, exact Studio revision CAS and audit provenance. Deterministic patches do not reserve AI credits. Generic REST/MCP protocol compatibility is locally covered; named ChatGPT, Claude and Manus client flows remain unverified.
13. Rerun all feasible tests and workflows A–N. External client and provider tests remain unverified until actually run. Final verdict cannot be COMPLETE with missing critical gates.

## Architecture choice

Incremental convergence is selected because the current schema, publisher and business services already exist. Replacing the backend or embedding a separately persisted Penpot product would violate the governing design and put customer data at risk.
