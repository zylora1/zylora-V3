# Zylora Studio — Penpot-derived editor migration audit

**Audit date:** 2026-09-17  
**Repository:** Zylora production repository  
**Upstream repository:** `https://github.com/penpot/penpot`  
**Upstream tag:** `2.17.0` (`bdce5817ea86d028db29113d9ecdadcf07097b36`)  
**Checked-out source:** `246c6a09eaf7c9806fda64ccd836be68c47eaeec`  
**Production engine:** `STUDIO_ENGINE=legacy`

## Executive result

The repository already contains a native React/TypeScript Studio engine with
Penpot-derived geometry, matrix, snapping, layout and history algorithms. The
official Penpot checkout is present as an upstream source dependency. The full
Penpot ClojureScript/Rust product runtime is deliberately not imported: it would
introduce a second backend, account model, database and product shell, contrary
to Zylora's single-product boundary.

The audit found and fixed a release-blocking runtime defect: `studio/App.tsx`
was dynamically mounting a `PENPOT_WORKSPACE` bridge and rendering a loading
placeholder instead of the existing native `CanvasNode` tree. The Studio now
mounts the native document tree and multi-selection overlay directly. The old
bridge file is removed from the runtime path. The legacy engine remains the
production default until the new path is separately browser and publishing
certified.

## 1. Existing Zylora architecture

- **Shell/build:** React 19 + TypeScript, Vite library build, served by the
  existing Zylora route.
- **Canonical document:** `studio/store.ts` and FastAPI `SiteDocument` schema
  v5; the document contains pages, hierarchy, geometry, styles, semantics and
  responsive overrides.
- **Mutation boundary:** the reducer's `EXECUTE_COMMAND` envelope on the
  client and `app/studio_mutations.py`/`apply_v4_operations` with revision CAS,
  history and audit provenance on the server.
- **Persistence:** debounced `useAutosave` writes through the existing
  `/api/sites/{site_id}/document` CAS endpoint and exposes conflict recovery.
- **Publishing:** Zylora's compiler/renderer and hosting pipeline remain the
  only publish authority.
- **Business systems:** FastAPI, SQLAlchemy and the existing database,
  authentication, billing, credits, CRM, leads, booking, CMS, analytics,
  domains and provider abstractions remain authoritative.

## 2. Upstream architecture relevant to the editor

Penpot's useful editor concepts are concentrated in the `common` geometry and
layout code plus its history model. The upstream product also includes a
ClojureScript/Rum frontend, Potok state, Rust/Skia rendering, a Clojure/JVM
backend, plugins, MCP, exporter and media services. Those product services are
not needed to provide Zylora's native Studio and would duplicate Zylora's
existing boundaries.

## 3. Overlap and decisions

| Area | Existing Zylora | Upstream Penpot | Decision |
| --- | --- | --- | --- |
| 2D matrices/transforms | TypeScript geometry helpers | `matrix.cljc`, transforms | Adapt into `studio/editor-core/matrix.ts` |
| Bounds/hit testing | Node geometry and browser DOM | `rect.cljc`, point/proportions | Adapt into `geometry.ts` |
| Snap/guides | Existing snap engine | `snap.cljc` | Adapt into `snapping.ts`; keep Zylora guide UI |
| Flex/Grid | Responsive node styles | Penpot flex/grid logic | Adapt into `layout.ts`; compile to semantic CSS |
| History | Reducer snapshots + CAS | Undo stack | Keep Zylora persistence; group local commands atomically |
| Canvas rendering | `CanvasNode` React tree | WASM/canvas renderer | Keep native React tree for semantic editing/publish parity |
| Auth/data/billing | FastAPI/Zylora | Penpot backend/accounts | Keep Zylora; do not import Penpot backend |
| Semantics/publish | Zylora registry/compiler/publisher | Visual design model | Keep Zylora semantic manifest and SiteDocument |
| Plugins/MCP | Zylora command/API paths | Penpot plugin/MCP runtime | Not used by ordinary Studio editing |

## 4. Current runtime boundary

The Studio browser bundle contains no iframe or external workspace mount. It
renders `CanvasNode` from the canonical document, then uses Zylora controls for
semantics, AI, autosave, preview and publish. `static/penpot-plugin/` and the
compatibility projection endpoints are legacy evidence only; they are not
loaded by the Studio and must not become a required dependency.

## 5. Data-model decision

`SiteDocument` is the persisted visual/semantic source for this migration. It
holds Penpot-derived visual concepts plus Zylora semantic metadata and remains
the compiler input. There is no second live Penpot document to synchronize.
The server validates all AI/external operations before the CAS commit. See
`docs/adr/studio-document-canonical-model.md` and `docs/studio-command-api.md`.

## 6. Risks and mitigations

1. **Upstream drift:** record both upstream tag and checked-out source SHA;
   port changes through the adapted modules and rerun the focused suite.
2. **Visual/editor regression:** keep the legacy engine as the default and
   preserve the feature gate until browser evidence exists.
3. **Semantic loss:** validate schema-versioned Zylora metadata during compile,
   migration and publish; reject unsafe or unknown bindings.
4. **Concurrency/data loss:** use document revision CAS, history, recovery and
   explicit conflict handling; do not silently overwrite newer revisions.
5. **License boundary:** retain MPL notices and the upstream checkout; keep
   Zylora-owned product code separate and record any future copied files.

## 7. Deployment and release strategy

No Zylora backend or database migration is required for the native canvas
mount fix. `STUDIO_ENGINE=legacy` remains the rollback/default path. A future
rollout of the native tree must be feature-gated and must pass browser, mobile,
accessibility, migration, publishing and real-database verification before any
production default change.

## 8. Evidence and blockers

The focused Studio/Penpot contract baseline before this change was green. The
native Vite bundle builds after the change. Full upstream Penpot runtime,
PostgreSQL concurrency, live provider verification and cross-browser Penpot
runtime evidence are not established on this Windows host; they remain
explicitly unverified rather than being represented as passed.
