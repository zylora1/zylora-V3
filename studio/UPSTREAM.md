# Upstream Provenance & Tracking: Zylora Studio editor core

## 1. Upstream source

- **Repository**: `https://github.com/penpot/penpot`
- **Tracked tag**: `2.17.0`
- **Official upstream tag SHA**: `bdce5817ea86d028db29113d9ecdadcf07097b36`
- **Checked-out source SHA**: `246c6a09eaf7c9806fda64ccd836be68c47eaeec`
- **Checked-out source parent**: `bdce5817ea86d028db29113d9ecdadcf07097b36`
- **Checked-out source commit**: `chore: add zylora workspace compilation target`
- **Initial verification date**: `2026-09-17`
- **Submodule/reference path**: `vendor/penpot`
- **Upstream license**: Mozilla Public License Version 2.0 (MPL-2.0)

The checked-out source contains one Zylora-owned build-target commit on top of
the official upstream tag. The two SHAs are intentionally recorded separately:
the tag identifies the upstream code being studied and the source SHA identifies
the exact checkout used by this repository.

## 2. Adapted editor modules

Zylora Studio is a native website builder editor. Selected editor algorithms
from Penpot are adapted into the TypeScript engine under `studio/editor-core/`
and `studio/common/`; Zylora owns the document store, UI, persistence, semantic
bindings and publisher.

| Penpot upstream path | Zylora implementation | Purpose |
| --- | --- | --- |
| `common/src/app/common/geom/matrix.cljc` | `studio/editor-core/matrix.ts` | Affine transforms and decomposition |
| `common/src/app/common/geom/rect.cljc`, `point.cljc`, `proportions.cljc` | `studio/editor-core/geometry.ts` | Rectangles, bounds and aspect constraints |
| `common/src/app/common/geom/snap.cljc` | `studio/editor-core/snapping.ts` | Alignment, magnetic snapping and spacing guides |
| `common/src/app/common/logic/flex_layout/`, `grid_layout/` | `studio/editor-core/layout.ts` | Website-friendly Flex/Grid layout calculations |
| `common/src/app/common/logic/undo_stack.cljc` | `studio/editor-core/history.ts` and `studio/store.ts` | Atomic history and rollback behavior |
| `common/src/app/common/types/` | `studio/common/types.ts` | Shared geometry/layout types |

These are adaptations, not a claim that the full ClojureScript/Rust Penpot
application is embedded in Zylora.

## 3. Deliberately omitted product runtime

The following upstream surfaces are not part of the ordinary Zylora Studio
runtime:

- Penpot backend, database, WebSocket sync and account/session stack
- Penpot dashboard, teams, onboarding, billing and cloud product shell
- Penpot plugin runtime and iframe sandbox
- Penpot MCP/plugin bridge
- Penpot exporter and media processor services
- Penpot branding, community/help links and customer-facing routes

Zylora authentication, authorization, billing, CRM, leads, booking, CMS, AI,
analytics, publishing, domains and hosting remain authoritative. The browser
mounts the native Zylora `CanvasNode` tree and selection overlay; it does not
mount a `PENPOT_WORKSPACE` global or iframe.

## 4. License and attribution boundary

MPL-2.0 notices and third-party records remain in `legal/`. This repository
keeps the upstream checkout intact and separates it from Zylora-authored
adaptations. Any future copied or materially modified MPL-covered file must be
added to `legal/THIRD_PARTY_NOTICES.md` and reviewed before distribution.

## 5. Updating the source

1. Fetch and verify the desired upstream tag or commit.
2. Record the upstream tag SHA and the exact checkout SHA in
   `integrations/penpot/penpot.lock.json`.
3. Inspect changes under the adapted geometry/layout paths.
4. Port changes into the Zylora-owned TypeScript modules rather than copying
   the Penpot product shell or backend.
5. Run the focused Studio/Penpot suite, the native build, and the full suite.
6. Update this file and the legal notices with the new evidence.

## 6. Runtime certification status

The source checkout is present and pinned. The actual upstream Penpot product
runtime has not been started on this host, and no full upstream runtime
certification is claimed. `STUDIO_ENGINE=legacy` remains the production default
until a separately authorized native Studio rollout passes the browser,
database, migration and publishing gates.
