# Onlook Runtime Certification

**Status:** `PARTIAL ONLOOK EDITOR TRANSPLANT`

**Certification date:** 2026-09-20

**Pinned source recorded for this transplant:** Onlook `423e2e924366419e418ee049093872d535eea41a`.

This document records evidence from the current repository. A production build
proves that the transplanted modules are reachable, but it does not prove that
the editor booted or that a user interaction changed editor state. The
database-backed browser runner is therefore deliberately recorded as
unverified until it can run against a real PostgreSQL-backed application.

## Latest repository suite result

The latest final local suite completed with **527 passed, 1 skipped, and 59
warnings in 495.07 seconds**. The earlier cross-browser failure was traced to
the certification fixture returning the full editor document for workspace and
preview requests; the fixture now serves bounded JSON/preview responses and
the lazy Layers tab is opened before its runtime assertion. The provider
inventory scanner was also changed to prune generated trees before filesystem
stat calls, preventing stale test workspaces from causing Windows
`WinError 1450`.

## Environment evidence

| Check | Result | Evidence |
|---|---|---|
| Node | PASS | `v24.11.0` |
| npm | PASS | `11.6.1` |
| Host | PASS | Windows `win32/x64` |
| Studio build | PASS | `npm.cmd run build:studio`; 4,577 modules transformed; `static/studio.js` 11,397.87 kB (3,531.11 kB gzip); 5.13 s on the final source build |
| Browser worker | PASS | `scripts/onlook_browser_sanity.py`: Chromium, Firefox, WebKit launch and trivial-page probes |
| PostgreSQL-backed app | BLOCKED | No `DATABASE_URL`; no running PostgreSQL service; Docker Linux engine unavailable |
| Authenticated Studio E2E | BLOCKED | `scripts/test_code_studio_ui_e2e.py --browser chromium` fails during Uvicorn lifespan because PostgreSQL at `127.0.0.1:5432` refuses the connection |

The final frame bridge now derives Penpal's `allowedOrigins` from the preview
frame URL; wildcard origin trust is no longer used in that bridge. The shared
Zylora filesystem now coalesces concurrent initialization requests and treats
`.onlook/index.json` as replaceable transient cache metadata, preventing a
ZenFS `EEXIST` rejection from surfacing as an editor page error.

## Local browser fixture evidence (not certification)

The loopback fixture runner loads the production bundle on a real HTTP origin,
serves a bounded preview document, and exercises the actual editor tree. The
latest matrix passes for **WebKit, Chromium, and Firefox**: TopBar, Canvas,
design panel, lazy Layers tab, Components surface, Code panel, return to Design,
and Native Studio smoke all pass with zero non-trivial page exceptions. The
stable blank Studio harness also passes 9/9 in all three engines.

This remains fixture evidence: it uses SQLite/TestClient and does **not** prove
authenticated PostgreSQL persistence, durable source equality after a real
server save, HMR, publish, tenant authorization, or a runtime tRPC trace.

The fixture does not claim a Penpal connection: its preview is a bounded static
document and the diagnostics registry correctly reports `Penpal: false`. The
real preload/iframe handshake therefore remains an authenticated runtime gate.

## Component provenance and mount evidence

The `data-onlook-runtime` attributes below are attached to the transplanted
component roots. They are not a substitute for behavior assertions. The
`Mounted` column is intentionally `BUILD_ONLY` until the browser runner can
exercise the real runtime.

| Surface | Upstream path | Runtime path | Mounted | Classification |
|---|---|---|---|---|
| Root | `.../_components/main.tsx` | `studio/onlook/editor/main.tsx` | FIXTURE_MOUNTED | ADAPTED_ONLOOK_REUSE |
| TopBar | `.../_components/top-bar/index.tsx` | `studio/onlook/editor/top-bar/index.tsx` | FIXTURE_MOUNTED | ADAPTED_ONLOOK_REUSE |
| LeftPanel | `.../_components/left-panel/index.tsx` | `studio/onlook/editor/left-panel/index.tsx` | FIXTURE_MOUNTED | ADAPTED_ONLOOK_REUSE |
| Layers | `.../_components/left-panel/design-panel/layers-tab/index.tsx` | same | FIXTURE_INTERACTED | DIRECT_ONLOOK_REUSE |
| Components | no matching pinned OSS Components browser | `studio/onlook/editor/left-panel/design-panel/components-tab/index.tsx` | FIXTURE_INTERACTED | ZYLORA_REPLACEMENT_REQUIRED |
| Pages | `.../_components/left-panel/design-panel/page-tab/index.tsx` | same | NOT_ASSERTED | ADAPTED_ONLOOK_REUSE |
| Canvas | `.../_components/canvas/index.tsx` | `studio/onlook/editor/canvas/index.tsx` | FIXTURE_MOUNTED | ADAPTED_ONLOOK_REUSE |
| Hover/selection overlays | `.../_components/canvas/overlay/` | same | NOT_ASSERTED | ADAPTED_ONLOOK_REUSE |
| EditorBar | `.../_components/editor-bar/index.tsx` | `studio/onlook/editor/editor-bar/index.tsx` | FIXTURE_INTERACTED | ADAPTED_ONLOOK_REUSE |
| RightPanel | `.../_components/right-panel/index.tsx` | `studio/onlook/editor/right-panel/index.tsx` | MOUNT_NOT_ASSERTED | ADAPTED_ONLOOK_REUSE |
| BottomBar | `.../_components/bottom-bar/index.tsx` | `studio/onlook/editor/bottom-bar/index.tsx` | FIXTURE_MOUNTED | ADAPTED_ONLOOK_REUSE |
| Code UI | `.../_components/left-panel/code-panel/` | `studio/onlook/editor/left-panel/code-panel/` | FIXTURE_INTERACTED | ADAPTED_ONLOOK_REUSE |

## Upstream diff checks

Line-level comparisons against the corresponding pinned files produced these
review counts. They are source-diff evidence, not runtime evidence.

| Surface | Added | Removed | Review |
|---|---:|---:|---|
| Main | 7 | 2 | Zylora bootstrap/marker adaptations |
| TopBar | 1 | 1 | Runtime marker only |
| LeftPanel | 2 | 2 | Root marker wrapper |
| Canvas | 1 | 0 | Runtime marker |
| EditorBar | 1 | 0 | Runtime marker |
| RightPanel | 5 | 5 | Zylora marker and corrective cleanup |
| BottomBar | 1 | 1 | Runtime marker |

## Filesystem authority

| Boundary | Current implementation |
|---|---|
| Durable source | Tenant-scoped Zylora workspace (`ZyloraWorkspaceAdapter`) |
| Editor cache | `OnlookCodeFileSystem` / ZenFS-derived cache, including `.onlook` index only |
| Adapter | `ZyloraCodeFileSystemAdapter` |
| Hydration | `ZyloraCodeFileSystem.initialize()` lists and reads durable files before sandbox start |
| Writes | `ZyloraCodeFileSystem.writeFile()` transforms through the upstream parser/cache, then writes durable source through the adapter |
| Watchers | Adapter-backed polling watchers, disposed on branch cleanup |
| Hard reload | Designed to reconstruct cache from workspace; browser proof pending PostgreSQL runtime |
| New session | Designed to reconstruct cache from workspace; browser proof pending PostgreSQL runtime |

## tRPC compatibility boundary

The former arbitrary deep proxy has been removed. `studio/onlook/trpc-stub.ts`
now exposes a finite object and records calls in
`window.__ZYLORA_TRPC_TRACE__` when tracing is enabled. Required platform
operations are routed through explicit Zylora context/adapters; unsupported
Onlook SaaS operations throw an explicit error. The active trace is still
pending because the canonical authenticated runner cannot start without
PostgreSQL; the fixture matrix does not substitute for that evidence.

## Code editor evidence status

- Real CodeMirror component is retained; the hidden `code-editor-textarea` is
  absent from the source.
- The E2E runner targets `.cm-editor` and the visible save control.
- Direct file PUTs were removed from visible editor components; source writes
  converge through `ZyloraCodeFileSystemAdapter`.
- Backend source equality after save, hard reload, and a new browser session is
  **UNVERIFIED** until the PostgreSQL-backed runner executes.

## Remaining certification blockers

1. Provide a running PostgreSQL-backed Zylora test environment and run the
   Chromium golden path with tRPC tracing.
2. Promote every observed editor-required tRPC call to a tested adapter path;
   retain only explicitly documented SaaS-only stubs.
3. Assert actual RightPanel/selection/source-edit/component-insertion behavior
   in the authenticated runtime; the current cross-browser fixture proves
   mount and panel transitions only.
4. Re-run the full repository suite after the runtime trace and any fixes.
5. Capture source equality, HMR, hard-reload, new-session, and publish evidence.

Until those gates pass, the repository remains a **PARTIAL ONLOOK EDITOR
TRANSPLANT** and the document does not certify that a user is operating the
actual editor at runtime.
