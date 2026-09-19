# Zylora Studio Source-of-Truth Policy

## Legacy and current SiteDocument projects

Existing Zylora projects use `SiteDocument` or the older `draft_structure_json` representation. These formats remain supported because published sites, SEO metadata, assets, forms, leads, and domain publishing depend on them. The validated Studio document is the authoritative editable representation for these projects. Human edits, approved AI edits, autosave, revisions, and publishing all pass through the existing schema validation and revision checks.

Legacy projects are migrated only through the existing validated migration endpoint. The original representation remains recoverable through revision backups. A malformed or incompatible document fails closed; it is not silently rewritten and published.

## Future code-backed projects

A future code-backed project may use real JSX/TSX/CSS source as its preferred editable representation. That mode must be opt-in and must not be inferred merely because the Onlook parser is vendored. It requires a Zylora project adapter that owns file access, tenant isolation, source mapping, parse/format validation, preview lifecycle, and revision checkpoints.

For code-backed projects, AST-aware source edits are preferred over regular-expression replacement. Each write must parse successfully, preserve formatting where possible, run the available type/validation checks, and be rejected or rolled back when invalid. The visual preview must refresh only after the validated write succeeds.

## Publishing

Zylora publishing remains authoritative for both representations. SiteDocument projects render through `app/studio_renderer.py` and the existing SEO/domain/publish pipeline. Code-backed projects may publish only through a reviewed adapter that produces a validated Zylora publish artifact and preserves the same authorization, billing, domain, analytics, and rollback gates.

## Rollback and history

There must be one synchronized user-visible history model. Existing server revisions and Studio undo/redo remain authoritative. Any future code-backed checkpoint must record the source snapshot or immutable artifact reference in the same Zylora revision system, with actor, timestamp, summary, and validation result. Restore must be atomic and must not leave the preview, source, or published artifact out of sync.

## AI and tools

AI receives only tenant-authorized project context. The current Edit flow produces a validated SiteDocument preview and requires approval before applying. Ask mode, Agent mode, file tools, MCP tools, and sandbox execution are not considered enabled until their authorization, audit, timeout, cancellation, and isolation contracts are implemented and browser-tested.
