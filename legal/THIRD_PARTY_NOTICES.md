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

---

## 2. Onlook Open-Source Editor (Transplanted Editor & Core Engine)

- **Upstream Project**: Onlook
- **Repository**: https://github.com/onlook-dev/onlook
- **Imported commit**: `423e2e924366419e418ee049093872d535eea41a`
- **License**: Apache License 2.0
- **License Text**: See [Apache-2.0-Onlook.txt](./Apache-2.0-Onlook.txt)
- **Vendored Reference**: `vendor/onlook`
- **Transplanted Studio Subsystems**:
  - `studio/onlook/models/` (from `packages/models/src`)
  - `studio/onlook/constants/` (from `packages/constants/src`)
  - `studio/onlook/penpal/` (from `packages/penpal/src`)
  - `studio/onlook/utility/` (from `packages/utility/src`)
  - `studio/onlook/parser/` (from `packages/parser/src`)
  - `studio/onlook/ui/` (from `packages/ui/src`)
  - `studio/onlook/core/` (from `apps/web/client/src/components/store/editor`)
  - `studio/onlook/editor/` (from `apps/web/client/src/app/project/[id]/_components`)
  - `static/onlook-preload-script.js` (from `apps/web/client/public/onlook-preload-script.js`)

These modules and components constitute the core visual and code editing engine for Zylora Studio in Code Mode (`studio_engine === 'code'`). In accordance with the Apache License, Version 2.0:
- All original copyright, patent, trademark, and attribution notices from upstream sources are preserved.
- The complete text of the Apache-2.0 license is provided in `legal/Apache-2.0-Onlook.txt`.
- Modifications, module path mappings, and adapter interfaces are documented in `docs/onlook-integration/PATCHES.md`.

Zylora does not ship Onlook's proprietary SaaS backend, database, Supabase authentication, Stripe billing, Freestyle hosting, or telemetry. Zylora platform systems (authentication, tenancy, billing, media storage, AI gateway, local sandbox provider, and production publisher) remain sovereign and authoritative.

### Trademark Notice
Onlook is a trademark of Onlook, Inc. Zylora and Zylora Studio are independent products and are neither sponsored, endorsed, nor affiliated with Onlook, Inc.

