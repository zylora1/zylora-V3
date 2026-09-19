# Upstream Provenance & Tracking: Zylora Studio Editor Core

## 1. Active Upstream Source

- **Repository**: `https://github.com/onlook-dev/onlook`
- **Branch**: `main`
- **Imported Commit SHA**: `423e2e924366419e418ee049093872d535eea41a`
- **Transplant Verification Date**: `2026-09-18`
- **Vendored Reference Path**: `vendor/onlook`
- **Upstream License**: Apache License 2.0 (see `legal/Apache-2.0-Onlook.txt`)

---

## 2. Transplant Architecture & Module Inventory

Zylora Studio operates with strict dual-engine separation:
1. **Native Engine (`studio_engine === 'native'`)**: Runs `NativeZyloraStudio` with Zylora's native SiteDocument schema, canvas rendering, and tool rails.
2. **Code Engine (`studio_engine === 'code'`)**: Mounts `ZyloraOnlookStudio`, transplanting the intact Onlook open-source editor shell and core engine.

### Transplanted Subsystems

| Upstream Path (`vendor/onlook/`) | Transplant Path (`studio/onlook/`) | Purpose |
| :--- | :--- | :--- |
| `packages/models/src/` | `studio/onlook/models/` | Core domain models (`Action`, `ChatMessage`, `Code`, `Element`, `Editor`, `Project`, `User`, `Run`, `Settings`, `Socket`). |
| `packages/constants/src/` | `studio/onlook/constants/` | Canvas dimensions, zoom ratios, hotkeys, styling constants (`editor.ts`). |
| `packages/penpal/src/` | `studio/onlook/penpal/` | Bidirectional postMessage RPC communication between the editor shell and sandboxed iframe. |
| `packages/utility/src/` | `studio/onlook/utility/` | Deep clone, tree traversal, cloning helpers, style normalization. |
| `packages/parser/src/` | `studio/onlook/parser/` | Babel JSX/TSX AST parser, element locator, style injector, code stringifier. |
| `packages/ui/src/` | `studio/onlook/ui/` | Onlook UI components (`Button`, `Input`, `Icons`, `DropdownMenu`, etc.). |
| `apps/web/client/src/components/store/editor/` | `studio/onlook/core/` | MobX editor state engines (`EditorEngine`, `CanvasManager`, `HistoryManager`, `AstManager`, `ChatManager`). |
| `apps/web/client/src/app/project/[id]/_components/` | `studio/onlook/editor/` | Transplanted editor UI shell (`TopBar`, `EditorBar`, `LeftPanel`, `Canvas`, `RightPanel`, `BottomBar`). |
| `apps/web/client/public/onlook-preload-script.js` | `static/onlook-preload-script.js` | In-frame preview runtime script injected into project workspaces for live element inspection and click-to-select. |

---

## 3. Zylora Platform Sovereignty & Adapters

To preserve Zylora's platform security, enterprise compliance, and multi-tenant isolation, Onlook's proprietary SaaS infrastructure (Supabase, Stripe, Freestyle, PostHog) was excluded and replaced with Zylora platform adapters located in `studio/zylora/adapters/`:

- **`ZyloraAuthAdapter`**: Bridges editor operations with Zylora session cookies and CSRF protection (`X-CSRF-Token`).
- **`ZyloraWorkspaceAdapter`**: Bridges file read/write operations to `/api/sites/{site_id}/code/files` and `/api/sites/{site_id}/code/file`.
- **`ZyloraSandboxAdapter`**: Controls local preview dev servers via Zylora's `LocalSandboxProvider` (`/api/sites/{site_id}/code/workspace/*`).
- **`ZyloraProjectAdapter`**: Maps Zylora site entities to Onlook `Project` and `Branch` models.
- **`ZyloraAIAdapter`**: Directs AI design prompts through Zylora's provider-neutral multi-model registry (`ZYLORA_AI_MODELS`).
- **`ZyloraHistoryAdapter`**: Translates undo/redo steps to atomic snapshots (`/api/sites/{site_id}/code/snapshot`).
- **`ZyloraPublishAdapter`**: Manages build execution and triggers Zylora production CDN deployment.

---

## 4. Historical Provenance

Historical Penpot-derived algorithmic records (such as affine transforms and matrix utilities) remain cataloged in `legal/` for copyright compliance. The active Zylora Studio does not mount Penpot workspace frames or depend on Penpot backend services.
