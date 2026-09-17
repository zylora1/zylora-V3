# Zylora native Studio / Penpot-derived core migration plan

## Goal

Make Zylora Studio a native Zylora editor whose geometry, layout, snapping and
history algorithms are derived from the pinned Penpot source, while keeping
Zylora's `SiteDocument`, authentication, authorization, billing, AI, publishing
and hosting authoritative.

## Phase 0 — baseline and boundary

1. Record the repository commit, submodule commit, Studio engine default and
   focused regression result.
2. Confirm `vendor/penpot` is the official upstream checkout and record the
   local build-target commit separately from the upstream tag.
3. Keep `STUDIO_ENGINE=legacy` as the production default and preserve a
   reversible feature-gate path.

## Phase 1 — native runtime correctness

1. Remove the runtime import of the old `PENPOT_WORKSPACE` bridge.
2. Mount the existing native `CanvasNode` tree and multi-selection overlay in
   the Studio canvas.
3. Preserve the existing reducer, autosave/CAS, history, preview and publisher
   contracts.
4. Replace user-visible engine/bridge wording with Zylora Studio wording.

## Phase 2 — command boundary

1. Treat the existing `EXECUTE_COMMAND` envelope and backend
   `apply_operations`/CAS service as the single mutation boundary.
2. Add strict command validation and provenance metadata for AI/external calls.
3. Keep plugin and bridge artifacts out of the ordinary Studio runtime; retain
   them only as compatibility evidence until their removal can be separately
   reviewed.

## Phase 3 — provenance and documentation

1. Update the audit, architecture, command API, migration, compiler, security,
   performance, release and canonical-model documents with the actual source
   state and explicit omissions.
2. Track the official Penpot 2.17.0 base tag and the repository's local
   workspace-build commit independently.
3. Preserve MPL-2.0 and third-party notices and state the legal review boundary.

## Phase 4 — verification

1. Add regression contracts for native canvas mounting, no bridge import,
   branding scrubbing and source-pin consistency.
2. Run focused Studio/Penpot tests, TypeScript/Vite build, Python compilation,
   diff checks and the broader suite.
3. Leave real Penpot runtime, PostgreSQL and live-provider gates explicitly
   blocked unless they are actually exercised in this environment.

## Rollback

The change is reversible through Git and the existing `STUDIO_ENGINE=legacy`
default. No database migration or deletion of legacy Studio data is required.
