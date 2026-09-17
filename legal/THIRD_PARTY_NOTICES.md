# Third-Party Software Notices and Information

This product includes software and algorithmic components derived from open-source projects, licensed under the terms described below.

---

## 1. Penpot (Editor Core & Mathematical Geometry Algorithms)

- **Upstream Project**: Penpot
- **Repository**: https://github.com/penpot/penpot
- **Upstream tag**: `2.17.0` — `bdce5817ea86d028db29113d9ecdadcf07097b36`
- **Checked-out source**: `246c6a09eaf7c9806fda64ccd836be68c47eaeec` (one Zylora build-target commit on top of the tag)
- **Copyright**: (c) Kaleidos Open Source SL
- **License**: Mozilla Public License Version 2.0 (MPL-2.0)
- **License Text**: See [MPL-2.0.txt](./MPL-2.0.txt)

Portions of Zylora Studio's editor engine, specifically:
- 2D affine transformation matrix operations (`studio/editor-core/matrix.ts` derived from `common/src/app/common/geom/matrix.cljc`)
- Point, rectangle, rotation, proportions, and bounding box geometry (`studio/editor-core/geometry.ts` derived from `common/src/app/common/geom/rect.cljc`, `common/src/app/common/geom/modifiers.cljc`, and `common/src/app/common/geom/proportions.cljc`)
- Magnetic snapping, guide intersections, and distance distribution rules (`studio/editor-core/snapping.ts` derived from `common/src/app/common/geom/snap.cljc`)
- Freeform vs Flex/Grid layout constraints and calculations (`studio/editor-core/layout.ts` derived from `common/src/app/common/logic/flex_layout/` and `common/src/app/common/logic/grid_layout/`)
- Transactional undo/redo stack semantics (`studio/editor-core/history.ts` derived from `common/src/app/common/logic/undo_stack.cljc`)

are derived from the Penpot open-source project and are subject to the Mozilla Public License Version 2.0.

The full Penpot product runtime, backend, plugin sandbox, MCP service and
customer-facing shell are not shipped as part of ordinary Zylora Studio. The
checked-in source provenance and the adapted-file mapping are maintained in
`studio/UPSTREAM.md` and `integrations/penpot/penpot.lock.json`.

In accordance with Section 3.1 of the MPL-2.0:
- The Source Code Form of covered software and any modifications are documented in `studio/UPSTREAM.md`.
- All original copyright, patent, trademark, and attribution notices from upstream sources are preserved in derived files.
- The complete text of the MPL-2.0 is provided in `legal/MPL-2.0.txt`.

### Trademark Notice
Penpot is a registered trademark of Kaleidos Open Source SL. Zylora and Zylora Studio are independent products and are neither sponsored, endorsed, nor affiliated with Kaleidos Open Source SL.
