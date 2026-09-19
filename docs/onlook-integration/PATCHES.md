# Onlook OSS Integration & Transplant Patches

## Upstream metadata

- **Repository**: `https://github.com/onlook-dev/onlook`
- **Pinned commit**: `423e2e924366419e418ee049093872d535eea41a`
- **License**: Apache License 2.0 (`legal/Apache-2.0-Onlook.txt`)
- **Strategy**: Preserve actual Onlook editor behavior and connect it to sovereign Zylora adapters.

## Transplanted subsystems

| Upstream surface | Zylora path | Classification |
|---|---|---|
| `packages/models/src/` | `studio/onlook/models/` | DIRECT_ONLOOK_REUSE |
| `packages/constants/src/` | `studio/onlook/constants/` | DIRECT_ONLOOK_REUSE |
| `packages/penpal/src/` | `studio/onlook/penpal/` | ADAPTED_ONLOOK_REUSE |
| `packages/utility/src/` | `studio/onlook/utility/` | DIRECT_ONLOOK_REUSE |
| `packages/parser/src/` | `studio/onlook/parser/` | ADAPTED_ONLOOK_REUSE |
| `packages/ui/src/` | `studio/onlook/ui/` | DIRECT_ONLOOK_REUSE |
| `apps/web/client/src/components/store/editor/` | `studio/onlook/core/` | ADAPTED_ONLOOK_REUSE |
| `apps/web/client/src/app/project/[id]/_components/` | `studio/onlook/editor/` | ADAPTED_ONLOOK_REUSE |
| `apps/web/client/public/onlook-preload-script.js` | `static/onlook-preload-script.js` | ADAPTED_ONLOOK_REUSE |

## Corrective continuation patches

### RightPanel

The pinned upstream RightPanel is a chat panel. It does not contain the former custom Zylora text/classes inspector. The previous local implementation added custom selected-element React state, a `window` selection listener, text/classes inputs, update buttons, fallback regex mutation, and direct PUT calls.

Those visible custom controls and the duplicate selection authority were removed. `studio/onlook/editor/right-panel/index.tsx` now preserves the pinned upstream structure: chat dropdown, chat controls, chat history, conversation panel, and resizable panel. The only Zylora addition is a non-visual `data-subsystem="onlook-right-panel"` hook for deterministic certification.

| Classification | Final state |
|---|---|
| UPSTREAM_PRESERVED | Chat panel structure, layout, controls, history, conversation rendering |
| ZYLORA_ADAPTER_WIRING | Platform boundaries remain below the editor shell |
| CUSTOM_ZYLORA_UI | None in RightPanel |
| TEST_ONLY_UI | None in RightPanel |
| SAAS_DEPENDENCY_REPLACEMENT | Existing compatibility boundary remains isolated to unsupported cloud services |

### Code editor

The pinned upstream editor uses CodeMirror via `@uiw/react-codemirror`. The transparent `data-testid="code-editor-textarea"` overlay was test-only UI and has been removed. The E2E test now focuses the visible `.cm-editor`, performs `ControlOrMeta+A`, inserts source text, clicks the real save control, and verifies durable source persistence.

### E2E selectors

The old inspector selectors are no longer product requirements and have been removed from the test flow:

- `inspector-text-input`
- `inspector-update-text-btn`
- `inspector-classes-input`
- `inspector-update-classes-btn`
- `code-editor-textarea`

The E2E path now verifies the real Onlook RightPanel and real CodeMirror surface. The pinned commit does not provide the former custom Design inspector mutation controls, so the test does not fabricate them.

### Canonical filesystem

`ZyloraCodeFileSystemAdapter` in `app/code_project.py` is the single filesystem contract for code-mode source operations. It delegates to the guarded tenant-scoped `CodeProjectAdapter` and supports initialization, reads, writes, directory reads, existence, creation, rename, delete, and watcher hooks. Zylora workspace files remain the durable authority; browser editor state is transient only.

### Engine separation and adapters

`studio/App.tsx` continues to preserve the native/code engine boundary. Code mode mounts `ZyloraOnlookStudio`; native mode remains the existing Zylora Native Studio. Zylora adapters continue to own authentication, project identity, workspace persistence, sandbox lifecycle, history, AI routing, permissions, and publishing.

## Deliberately excluded upstream surfaces

- Onlook SaaS backend and database schema.
- Onlook cloud authentication and billing.
- Onlook telemetry and PostHog tracking.
- Onlook branding, marketing routes, and hosted domains.

These exclusions are documented platform replacements, not hidden editor UI substitutions.
