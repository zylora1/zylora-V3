# Actual Onlook Editor Provenance

## Evidence status

The pinned Onlook-derived editor is mounted and exercised in the authenticated
Zylora Code Studio runtime. Chromium, Firefox, and WebKit completed editor
boot, Penpal handshake, selection/panel flow, component insertion, CodeMirror
save, hard reload, and new-session persistence against the PostgreSQL-backed
Uvicorn application. This is repository/runtime evidence; production
deployment remains a separate operation.

## Pinned source

- Repository: `https://github.com/onlook-dev/onlook`
- Commit recorded for this transplant: `423e2e924366419e418ee049093872d535eea41a`
- Vendored source root: `vendor/onlook/`
- Runtime source root: `studio/onlook/`
- Independent upstream Git-object verification: **not available in this checkout** (the vendored tree is part of the application worktree, not a standalone submodule)

## Runtime surface matrix

| Surface | Upstream source | Zylora runtime path | Build reachable | Browser mounted/interacted | Classification |
|---|---|---|---|---|---|
| Root | `apps/web/client/src/app/project/[id]/_components/main.tsx` | `studio/onlook/editor/main.tsx` | PASS | AUTHENTICATED BOOT | ADAPTED_ONLOOK_REUSE |
| TopBar | `.../_components/top-bar/index.tsx` | `studio/onlook/editor/top-bar/index.tsx` | PASS | MARKER + UI | ADAPTED_ONLOOK_REUSE |
| LeftPanel | `.../_components/left-panel/index.tsx` | `studio/onlook/editor/left-panel/index.tsx` | PASS | MARKER + TABS | ADAPTED_ONLOOK_REUSE |
| Layers | `.../left-panel/design-panel/layers-tab/index.tsx` | `studio/onlook/editor/left-panel/design-panel/layers-tab/index.tsx` | PASS | OPENED AFTER EDITOR FLOW | DIRECT_ONLOOK_REUSE |
| Components | no matching pinned OSS Components browser | `studio/onlook/editor/left-panel/design-panel/components-tab/index.tsx` | PASS | DISCOVERY + INSERTION | ZYLORA_REPLACEMENT_REQUIRED |
| Pages | `.../left-panel/design-panel/page-tab/index.tsx` | same | PASS | OPENED IN RUNTIME | ADAPTED_ONLOOK_REUSE |
| Canvas | `.../_components/canvas/index.tsx` | `studio/onlook/editor/canvas/index.tsx` | PASS | PENPAL + SELECTION | ADAPTED_ONLOOK_REUSE |
| Overlays | `.../_components/canvas/overlay/` | same | PASS | SELECTION WORKFLOW | ADAPTED_ONLOOK_REUSE |
| EditorBar | `.../_components/editor-bar/index.tsx` | `studio/onlook/editor/editor-bar/index.tsx` | PASS | MOUNTED WITH STATE | ADAPTED_ONLOOK_REUSE |
| RightPanel | `.../_components/right-panel/index.tsx` | `studio/onlook/editor/right-panel/index.tsx` | PASS | MOUNTED/SYNCHRONIZED | ADAPTED_ONLOOK_REUSE |
| BottomBar | `.../_components/bottom-bar/index.tsx` | `studio/onlook/editor/bottom-bar/index.tsx` | PASS | MOUNTED | ADAPTED_ONLOOK_REUSE |
| Code UI | `.../left-panel/code-panel/` | `studio/onlook/editor/left-panel/code-panel/` | PASS | REAL CODEMIRROR SAVE/RELOAD | ADAPTED_ONLOOK_REUSE |

The runtime roots carry non-visual `data-onlook-runtime` markers solely for the
browser certification harness. A marker is not accepted without the
authenticated interaction evidence in the table.

## Source comparison evidence

Using line-level comparisons against the corresponding pinned files:

| Surface | Added lines | Removed lines | Main reason |
|---|---:|---:|---|
| Main | 7 | 2 | Zylora bootstrap and runtime integration |
| TopBar | 1 | 1 | Runtime marker |
| LeftPanel | 2 | 2 | Root runtime marker |
| Canvas | 1 | 0 | Runtime marker |
| EditorBar | 1 | 0 | Runtime marker |
| RightPanel | 5 | 5 | Corrective Zylora boundary/marker changes |
| BottomBar | 1 | 1 | Runtime marker |

## RightPanel

The pinned RightPanel is retained as the chat panel. The former custom
Zylora inspector controls, local selection-event bridge, fallback regex
mutation, and direct PUT calls are absent. The authenticated path mounted the
panel and verified runtime synchronization without replacement inspector UI.

## Filesystem authority

`ZyloraCodeFileSystemAdapter` and `ZyloraWorkspaceAdapter` are the durable
source boundary. `ZyloraCodeFileSystem` uses the upstream parser/index logic
and a transient cache for `.onlook` metadata; source reads and writes go to the
tenant-scoped Zylora workspace. Shared filesystem instances are registered by
`projectId/branchId` and unregistered during branch teardown.

## Code editor

The visible CodeMirror editor is retained from the upstream code panel. The
hidden `code-editor-textarea` compatibility control is absent. The E2E runner
targets `.cm-editor`, saves through the visible save action, and checks the
durable workspace after save, hard reload, and a fresh browser session.

## Routing and platform ownership

`studio/App.tsx` selects the runtime from the server-provided project engine:
`studio_engine === "code"` mounts `ZyloraOnlookStudio`; native projects mount
`NativeZyloraStudio`. Zylora owns auth, tenancy, source persistence, sandbox,
AI, history, assets, publish, hosting, domains, and billing. The Onlook
surface is an editor runtime only. The global production setting remains
`STUDIO_ENGINE=legacy`; project-aware Code routing is verified independently.

The editor preview uses a strict parent-origin Penpal allowlist. A publish
boundary sanitizer removes preview-only preload/instrumentation scripts from
public code revisions, so the live site does not ship editor runtime hooks.
