# Zylora Studio Phase 2 Gap Audit

This audit evaluates capabilities against the actual Zylora Studio production path. A capability is marked **ALREADY IMPLEMENTED** only when it is exercised by the native Studio UI or a production backend path; vendored source alone is not treated as integration.

| Capability | Status | Evidence or gap |
| --- | --- | --- |
| Visual canvas | ALREADY IMPLEMENTED | Native `CanvasNode` tree mounted by `studio/App.tsx`. |
| Live preview | ALREADY IMPLEMENTED | Editing/Preview toggle renders the current validated SiteDocument. |
| DOM instrumentation | PARTIAL | Zylora nodes expose stable Studio IDs and editor metadata; no Onlook iframe instrumentation layer is mounted. |
| Hover selection | PARTIAL | Selection outlines and pointer selection exist; dedicated Onlook-style hover inspection is not a separate source-backed surface. |
| Click selection | ALREADY IMPLEMENTED | Canvas and layer clicks dispatch synchronized selection. |
| DOM -> source mapping | MISSING for code-backed projects | SiteDocument node IDs map to persisted nodes; JSX/TSX file/location mapping is not wired into the UI. |
| Visual text editing | ALREADY IMPLEMENTED | Double-click contentEditable editor persists node text through the reducer/autosave path. |
| Visual image editing | ALREADY IMPLEMENTED | Upload, replacement, crop, focal point, alt text, and asset APIs are present. |
| Drag/reorder | ALREADY IMPLEMENTED | Pointer drag, layer drag/reparent, and section reorder are implemented. |
| Resize/positioning | ALREADY IMPLEMENTED | Resize handles, geometry inspector, rotation, snapping, and positioning are implemented. |
| Source write-back | PARTIAL | Structured SiteDocument write-back is safe and reversible; Phase 3 now has an opt-in, tenant-scoped source file adapter, but AST source write-back is not yet connected. |
| Layers | ALREADY IMPLEMENTED | `LayersPanel` is synchronized with canvas selection, visibility, lock, reorder, search, and nesting. |
| Components | PARTIAL | Reusable SiteDocument components and component insertion exist; automatic React component discovery is not connected. |
| Component detection/insertion | PARTIAL | Zylora component definitions and basic insertions exist; Onlook project-source discovery is not wired. |
| Pages/page switching | ALREADY IMPLEMENTED | `PagesPanel`, page routes, creation/rename/delete, and page-aware history exist. |
| Visual style inspector | ALREADY IMPLEMENTED | `Inspector.tsx` covers layout, geometry, typography, fills, borders, shadows, gradients, actions, responsive values, and accessibility. |
| Tailwind style editing | MISSING | Current authoritative model writes safe CSS properties, not Tailwind class AST edits. |
| Responsive preview | ALREADY IMPLEMENTED | Desktop/tablet/mobile breakpoints use real responsive overrides. |
| Code editor | PARTIAL | A feature-gated code file API and isolated-root adapter now exist; no production code-backed file browser/editor is mounted in Studio. |
| Code -> preview refresh | PARTIAL | SiteDocument changes refresh immediately; source-file changes are not supported. |
| Preview -> source refresh | PARTIAL | Native document changes persist; JSX/TSX source refresh is not supported. |
| History/checkpoints | ALREADY IMPLEMENTED | Reducer history plus server revisions, conflict recovery, undo/redo, and restore APIs exist. |
| Variations/branching | PARTIAL | Revisions and private user templates exist; compare/keep/discard variations are not a dedicated UI. |
| Assets UI | ALREADY IMPLEMENTED | Browse, upload, insert, replace, preview, metadata, stock import, and permission-aware delete paths exist. |
| AI sidebar | ALREADY IMPLEMENTED | `AIPanel` is mounted in Studio with model picker and contextual requests. |
| Ask mode | ALREADY IMPLEMENTED | `ai-ask` is a read-only, tenant-scoped endpoint and the sidebar exposes a separate Ask tab without document mutation. |
| Edit mode | ALREADY IMPLEMENTED | Scoped AI edit request, server validation, preview, approve, reject, autosave, and rollback through history. |
| Agent mode | MISSING | No safe multi-tool agent workflow is exposed in Studio. |
| Model selector | ALREADY IMPLEMENTED | Vendor-neutral frontend registry and server model routing are present. |
| Auto model selection | PARTIAL | Server registry supports primary/fallback models; task-aware automatic routing is not exposed as a user mode. |
| Image/screenshot references | MISSING | No attachment picker or tenant-scoped AI attachment request path is mounted. |
| Queued prompts | MISSING | No visible serialized AI queue/cancellation model is mounted. |
| Tool calls | PARTIAL | Existing server AI infrastructure has provider tool capability metadata; Studio does not expose project-scoped tools. |
| Diff view | PARTIAL | Operation summaries are shown; file/code diff rendering is unavailable without code-backed projects. |
| Apply/reject | ALREADY IMPLEMENTED | AI preview can be rejected or applied as one undoable document edit. |
| Rollback | ALREADY IMPLEMENTED | Server revisions and native undo/redo provide rollback. |
| MCP | PARTIAL | Zylora agent/MCP routes exist server-side; project-scoped Studio MCP permissions and activity UI are not wired. |
| Sandbox/runtime | BLOCKED | File persistence is isolated behind `CodeProjectAdapter`, but no approved isolated code execution provider is connected; source writes explicitly report that preview validation is unavailable. |
| Browser E2E | BLOCKED | Browser matrix has not been completed in this environment. |
| Production frontend build | BLOCKED | Mounted dependencies lack the native rolldown binding; clean native install required. |
| Full backend tests | BLOCKED | Full dependency-backed pytest run stalled in the current environment; clean CI/native checkout required. |

## Immediate safe implementation scope

The current release keeps the native SiteDocument editor authoritative and does not pretend that parser/model vendoring equals code-editor integration. The next implementation tranche should add a code-backed project adapter, an AST-safe file service, and a browser-tested iframe/source mapping surface before enabling code editing for any tenant. Agent tools, MCP, and sandbox commands must remain disabled until tenant isolation, command policy, timeout, audit, and cancellation tests pass.
