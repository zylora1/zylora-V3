# Penpot Integration Matrix

Date: 2026-09-15

The official Penpot open-source repository and technical documentation were inspected before implementing the adapter boundary:

- Source: https://github.com/penpot/penpot
- Frontend architecture: https://help.penpot.app/technical-guide/developer/architecture/frontend/
- Data model guidance: https://help.penpot.app/technical-guide/developer/data-guide/
- License: MPL-2.0; no Penpot source files were copied into the runtime.

Zylora keeps SiteDocument authoritative. `app.penpot_adapter.PenpotAdapter` creates a request-scoped projection and translates supported interactions into existing typed Studio operations. It does not persist a second Penpot scene graph.

| PENPOT CAPABILITY | ZYLORA ADAPTER STATUS | TRANSLATION / OWNER | TEST EVIDENCE |
|---|---|---|---|
| Canvas / workspace projection | IMPLEMENTED | `project_site_document()` exposes page objects, geometry, style, layout, tokens and semantic business metadata | `tests/test_penpot_adapter.py`; gateway projection test |
| Selection / multi-selection / marquee model | PROJECTED | Capability metadata and canonical Studio selection state; browser gesture certification remains open | adapter unit tests; existing Studio interaction tests |
| Drag / resize / rotate / reparent | IMPLEMENTED | `UPDATE_GEOMETRY`, `REPARENT_NODE`, `ROTATE_NODE` through `apply_v4_operations` | adapter tests and gateway CAS test |
| Text / style / color edits | IMPLEMENTED | `UPDATE_TEXT`, `UPDATE_STYLE` after safe CSS validation | adapter tests |
| Site tokens | IMPLEMENTED | `UPDATE_SITE_TOKEN` through the existing command engine | `tests/test_penpot_adapter.py`; Studio operation tests |
| Group / ungroup | IMPLEMENTED | `GROUP_NODES` and `UNGROUP_NODES` through canonical document mutation | Studio operation tests; adapter translation coverage |
| Layers / z-order / lock / hide | PROJECTED | Canonical node tree and metadata preserved; interaction mappings remain bounded | projection test |
| Shapes / images / frames / business components | PRESERVED | Semantic Zylora node types and IDs survive projection; business nodes are not flattened into generic shapes | projection test |
| Components / variants / Flex / Grid / snapping / guides / measurement | PARTIAL | Canonical fields are projected where present; dedicated Penpot parity and performance certification remain open | no complete parity suite yet |
| History / autosave / revisions | EXISTING CANONICAL PATH | Adapter commits through Studio command engine, CAS and `create_revision`; no second history | gateway CAS test; recovery/history suites |

## Runtime boundary

`SiteDocument → Penpot projection → user/agent interaction → typed Zylora operation → command engine → SiteDocument → revision/history → renderer`.

Licensing records: [THIRD_PARTY_LICENSES/PENPOT_MPL-2.0.md](../../THIRD_PARTY_LICENSES/PENPOT_MPL-2.0.md) and `THIRD_PARTY_COMPONENTS.md`.
