# Onlook OSS Integration & Transplant Patches

## 1. Upstream Metadata
- **Upstream Repository**: `https://github.com/onlook-dev/onlook`
- **Pinned Upstream Commit**: `423e2e924366419e418ee049093872d535eea41a`
- **License**: Apache License 2.0 (see `legal/Apache-2.0-Onlook.txt`)
- **Integration Strategy**: Maximum Practical OSS Reuse via clean transplant and sovereign Zylora platform adapters.

---

## 2. Transplanted Subsystems and File Inventory

The transplant pulls full upstream subsystems intact from `vendor/onlook` into `studio/onlook/` and `static/`, mounting them when `studio_engine === 'code'`.

| Upstream Path (`vendor/onlook/`) | Transplant Path | Purpose & Functionality |
| :--- | :--- | :--- |
| `packages/models/src/` | `studio/onlook/models/` | Core domain models (`Action`, `ChatMessage`, `Code`, `Element`, `Editor`, `Project`, `User`, `Run`, `Settings`, `Socket`). |
| `packages/constants/src/` | `studio/onlook/constants/` | Editor dimensions, default zoom, hotkeys, styling constants (`editor.ts`). |
| `packages/penpal/src/` | `studio/onlook/penpal/` | PostMessage RPC bridge connecting the host editor to preview iframes. |
| `packages/utility/src/` | `studio/onlook/utility/` | Deep cloning, tree traversal, cloning helpers, style normalization. |
| `packages/parser/src/` | `studio/onlook/parser/` | Babel-based JSX/TSX AST parsing, code modification, stringification, DOM-to-source mapping. |
| `packages/ui/src/` | `studio/onlook/ui/` | Onlook UI component library (`Button`, `Input`, `Icons`, `DropdownMenu`, etc.). |
| `apps/web/client/src/components/store/editor/` | `studio/onlook/core/` | MobX-based core editor state engines (`EditorEngine`, `CanvasManager`, `HistoryManager`, `AstManager`, `ChatManager`). |
| `apps/web/client/src/app/project/[id]/_components/` | `studio/onlook/editor/` | Upstream editor shell (`TopBar`, `EditorBar`, `LeftPanel`, `Canvas`, `RightPanel`, `BottomBar`). |
| `apps/web/client/public/onlook-preload-script.js` | `static/onlook-preload-script.js` | Browser preview runtime script injected into projects for live Penpal RPC inspection and hover/click highlighting. |

---

## 3. Adaptations and Modifications

To ensure seamless compilation inside Zylora's Vite-based build pipeline and maintain strict platform security, the following adaptations were applied:

1. **Vite & TSConfig Module Aliasing**:
   - Configured `vite.studio.config.mjs` and `studio/tsconfig.json` with path aliases:
     - `@onlook/models/*` -> `studio/onlook/models/*`
     - `@onlook/constants/*` -> `studio/onlook/constants/*`
     - `@onlook/penpal/*` -> `studio/onlook/penpal/*`
     - `@onlook/utility/*` -> `studio/onlook/utility/*`
     - `@onlook/parser/*` -> `studio/onlook/parser/*`
     - `@onlook/ui/*` -> `studio/onlook/ui/*`
     - `@/*` -> `studio/onlook/*`
   - Bundled externalized dependencies: `mobx`, `mobx-react-lite`, `penpal`, `@babel/standalone`, `tailwind-merge`, `clsx`.

2. **Clean Engine Separation**:
   - `studio/App.tsx` branches top-level mounting:
     - `studio_engine === "native"`: Boots `NativeZyloraStudio` with Zylora's native document tree, tool rails, and visual canvas.
     - `studio_engine === "code"`: Boots `ZyloraOnlookStudio` mounting Onlook's complete transplanted editor UI and engine.
   - Zero regression or contamination to existing native Zylora projects.

3. **Preview Instrumentation Injection**:
   - In `app/code_project.py`: `install_preview_instrumentation()` copies `static/onlook-preload-script.js` to `public/onlook-preload-script.js` in the project workspace and injects `<script src="/onlook-preload-script.js"></script>` into `index.html`.
   - The preview iframe connects to the parent via Penpal child RPC for bidirectional element selection, bounding box tracking, and style application.

---

## 4. Zylora Platform Adapters (`studio/zylora/adapters/`)

All proprietary, non-OSS, and cloud-dependent services from Onlook were excluded and replaced with sovereign Zylora platform adapters:

1. **`ZyloraAuthAdapter`**:
   - Replaces Supabase/Clerk authentication with Zylora's session cookies and CSRF headers (`X-CSRF-Token`).
   - Validates user permissions against the active site.

2. **`ZyloraWorkspaceAdapter`**:
   - Replaces local Electron filesystem operations and cloud file sync with Zylora's atomic REST endpoints:
     - `GET /api/sites/{site_id}/code/files` (file tree listing)
     - `GET /api/sites/{site_id}/code/file?path=...` (atomic read)
     - `PUT /api/sites/{site_id}/code/file` (atomic write)
   - Enforces lockfile blocking (`package-lock.json`, etc.) and directory traversal protection.

3. **`ZyloraSandboxAdapter`**:
   - Replaces Onlook local daemon / Docker containers with Zylora's `LocalSandboxProvider`:
     - `POST /api/sites/{site_id}/code/workspace/start`
     - `POST /api/sites/{site_id}/code/workspace/stop`
     - `GET /api/sites/{site_id}/code/workspace/status`
   - Manages preview URLs on localhost with secure sandboxed iframes.

4. **`ZyloraProjectAdapter`**:
   - Maps Zylora `Site` entity and workspace IDs into Onlook `Project` and `Branch` models.

5. **`ZyloraAIAdapter`**:
   - Replaces hardcoded Anthropic/OpenAI keys with Zylora's multi-model AI routing engine (`ZYLORA_AI_MODELS`).
   - Connects to `/api/sites/{site_id}/code/source/text` and Zylora AI gateway.

6. **`ZyloraHistoryAdapter`**:
   - Bridges Onlook undo/redo transactions to Zylora snapshots (`POST /api/sites/{site_id}/code/snapshot` and restore).

7. **`ZyloraPublishAdapter`**:
   - Replaces Freestyle/Vercel hosting with Zylora's production publisher, executing sandbox build and publishing to live CDN.

---

## 5. Deliberately Excluded Surfaces

The following upstream surfaces were purposefully omitted:
- Onlook SaaS backend and database schema (`apps/backend`, `packages/db`).
- Onlook Cloud authentication, Supabase users, and billing (`Stripe`).
- Onlook Telemetry and PostHog tracking.
- Onlook branding, marketing routes, and hosted domains.
