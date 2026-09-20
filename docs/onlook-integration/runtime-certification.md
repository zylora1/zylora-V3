# Onlook Runtime Certification

**Status:** `ACTUAL ONLOOK EDITOR TRANSPLANT CERTIFIED`

**Certification date:** 2026-09-20

**Pinned source recorded for this transplant:** Onlook `423e2e924366419e418ee049093872d535eea41a`.

This document records the authenticated runtime certification for the pinned
Onlook-derived Code Studio. It is repository/runtime certification, not a
production deployment claim. Native projects remain on NativeZyloraStudio and
the global production default remains `STUDIO_ENGINE=legacy`.

## Latest repository suite result

The latest final local suite completed with **527 passed, 1 skipped, and 59
warnings in 461.83 seconds**. The earlier cross-browser failure was traced to
the certification fixture returning the full editor document for workspace and
preview requests; the fixture now serves bounded JSON/preview responses and
the lazy Layers tab is opened before its runtime assertion. The provider
inventory scanner was also changed to prune generated trees before filesystem
stat calls, preventing stale test workspaces from causing Windows
`WinError 1450`.

## Authenticated PostgreSQL runtime evidence

The certification runner used a disposable PostgreSQL 18 database on
`127.0.0.1:5432`. The real Uvicorn application served HTTP routes,
authentication cookies, CSRF checks, the code workspace, Vite preview,
publish, and rollback. Migrations completed twice; the second run was
idempotent. Credentials and disposable user data are not recorded.

## Environment evidence

| Check | Result | Evidence |
|---|---|---|
| Node | PASS | `v24.11.0` |
| npm | PASS | `11.6.1` |
| Host | PASS | Windows `win32/x64` |
| Studio build | PASS | `npm.cmd run build:studio`; 4,577 modules transformed; `static/studio.js` 11,398.47 kB (3,531.23 kB gzip); 4.67 s on the final source build |
| Browser worker | PASS | `scripts/onlook_browser_sanity.py`: Chromium, Firefox, WebKit launch and trivial-page probes |
| PostgreSQL-backed app | PASS | PostgreSQL 18.0.6; disposable certification database; Uvicorn authenticated path |
| Authenticated Studio E2E | PASS | Chromium, Firefox, and WebKit completed editor, persistence, publish, and rollback gates |

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
component roots. They are not a substitute for behavior assertions. Each
authenticated runtime entry below is backed by the PostgreSQL Uvicorn browser
run; the fixture runner remains supplementary evidence.

| Surface | Upstream path | Runtime path | Mounted | Classification |
|---|---|---|---|---|
| Root | `.../_components/main.tsx` | `studio/onlook/editor/main.tsx` | AUTHENTICATED_RUNTIME | ADAPTED_ONLOOK_REUSE |
| TopBar | `.../_components/top-bar/index.tsx` | `studio/onlook/editor/top-bar/index.tsx` | AUTHENTICATED_RUNTIME | ADAPTED_ONLOOK_REUSE |
| LeftPanel | `.../_components/left-panel/index.tsx` | `studio/onlook/editor/left-panel/index.tsx` | AUTHENTICATED_RUNTIME | ADAPTED_ONLOOK_REUSE |
| Layers | `.../_components/left-panel/design-panel/layers-tab/index.tsx` | same | AUTHENTICATED_INTERACTED | DIRECT_ONLOOK_REUSE |
| Components | no matching pinned OSS Components browser | `studio/onlook/editor/left-panel/design-panel/components-tab/index.tsx` | AUTHENTICATED_INTERACTED | ZYLORA_REPLACEMENT_REQUIRED |
| Pages | `.../_components/left-panel/design-panel/page-tab/index.tsx` | same | AUTHENTICATED_INTERACTED | ADAPTED_ONLOOK_REUSE |
| Canvas | `.../_components/canvas/index.tsx` | `studio/onlook/editor/canvas/index.tsx` | AUTHENTICATED_RUNTIME | ADAPTED_ONLOOK_REUSE |
| Hover/selection overlays | `.../_components/canvas/overlay/` | same | AUTHENTICATED_INTERACTED | ADAPTED_ONLOOK_REUSE |
| EditorBar | `.../_components/editor-bar/index.tsx` | `studio/onlook/editor/editor-bar/index.tsx` | AUTHENTICATED_RUNTIME | ADAPTED_ONLOOK_REUSE |
| RightPanel | `.../_components/right-panel/index.tsx` | `studio/onlook/editor/right-panel/index.tsx` | AUTHENTICATED_SYNCHRONIZED | ADAPTED_ONLOOK_REUSE |
| BottomBar | `.../_components/bottom-bar/index.tsx` | `studio/onlook/editor/bottom-bar/index.tsx` | AUTHENTICATED_RUNTIME | ADAPTED_ONLOOK_REUSE |
| Code UI | `.../_components/left-panel/code-panel/` | `studio/onlook/editor/left-panel/code-panel/` | AUTHENTICATED_CODEMIRROR | ADAPTED_ONLOOK_REUSE |

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
| Hard reload | PASS; source rehydrated after full page reload |
| New session | PASS; source remained durable in a fresh browser session |

## tRPC compatibility boundary

The former arbitrary deep proxy has been removed. `studio/onlook/trpc-stub.ts`
now exposes a finite object and records calls in
`window.__ZYLORA_TRPC_TRACE__` when tracing is enabled. Required platform
operations are routed through explicit Zylora context/adapters; unsupported
Onlook SaaS operations throw an explicit error. The authenticated trace
observed `project.get`, `project.fork`, `user.settings.get`,
`user.settings.upsert`, and `useUtils`; no unknown path was observed.

## Code editor evidence status

- Real CodeMirror component is retained; the hidden `code-editor-textarea` is
  absent from the source.
- The E2E runner targets `.cm-editor` and the visible save control.
- Direct file PUTs were removed from visible editor components; source writes
  converge through `ZyloraCodeFileSystemAdapter`.
- Backend source equality after save, hard reload, and a new browser session is
  **PASS** across Chromium, Firefox, and WebKit in the PostgreSQL-backed run.

## Remaining deployment work

The authenticated repository/runtime gates are closed. A separate deployment
review is still required before changing production configuration; this task
does not claim a production deployment.

## Final authenticated evidence

The final command was:

```text
python scripts/test_code_studio_ui_e2e.py --browser chromium --browser firefox --browser webkit
```

It passed the real authenticated Code Studio path in all three browsers:
Onlook shell mount, Penpal ping/pong, selection and panel synchronization,
component discovery/insertion, CodeMirror save, hard reload, new-session
persistence, production build, live publish revision 1 and 2, and rollback.

The dedicated PostgreSQL certification also passed on PostgreSQL 18.6 with
53 migration files applied and re-applied idempotently. In Chromium, Firefox,
and WebKit it verified the authenticated dashboard, Native Studio mount,
SiteDocument save/reload, native publish revision 1 and 2, rollback, Code
Studio mount, Penpal ping/pong, and panel switching.

Routing is project-aware:

| Project engine | Runtime | Result |
|---|---|---|
| `native` | `NativeZyloraStudio` | PASS; SiteDocument remains authoritative |
| `code` | `ZyloraOnlookStudio` | PASS; actual Onlook-derived runtime |
| `legacy`/unknown | existing safe fallback | retained for emergency compatibility |

Preview-only preload and DOM-instrumentation files remain available in the
editor workspace but are stripped from copied public Code revisions at the
publish boundary. Production configuration remains unchanged; this is not a
production deployment certification.
