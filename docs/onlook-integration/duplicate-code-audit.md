# Zylora Studio — Duplicate Code & Legacy Subsystem Audit

**Pinned Upstream Commit**: `423e2e924366419e418ee049093872d535eea41a`  
**Purpose**: Audit custom duplicate components created during prior selective-recreation phases. Classify each as `KEEP`, `REPLACE`, `REMOVE`, or `FALLBACK` to ensure zero shadow logic competes with the transplanted Onlook OSS modules.

---

## 1. Classification Categories

- **`KEEP`**: Sovereign Zylora infrastructure necessary for security, multi-tenancy, workspace confinement, database persistence, or dual-engine isolation (not a duplicate of Onlook UI).
- **`REPLACE`**: Replaced directly by the transplanted Onlook OSS subsystem.
- **`REMOVE`**: Redundant, competing, or unused duplicate code retired from production bundle.
- **`FALLBACK`**: Retained as a resilient, graceful degradation path if AST parse encounters syntax errors or dynamic runtime JSX constructs.

---

## 2. Comprehensive Audit Matrix

| File / Component | Intended Function | Classification | Justification & Replacement Action |
| :--- | :--- | :--- | :--- |
| `studio/ZyloraOnlookStudio.tsx` (regex style replacer) | Regex string substitution for Tailwind classes | `REPLACE` / `FALLBACK` | **REPLACED** by `studio/onlook/ast-actions.ts` (`applyAstStyleChange` using `@onlook/parser`). Retained only as a non-breaking fallback if an untracked dynamic node cannot be resolved in the AST. |
| `studio/ZyloraOnlookStudio.tsx` (regex component insertion) | Regex string insertion before closing tags | `REPLACE` / `FALLBACK` | **REPLACED** by `studio/onlook/ast-actions.ts` (`applyAstComponentInsert` using Babel AST parser). Retained as secondary fallback. |
| `studio/NativeZyloraStudio` (in `studio/App.tsx`) | Native SiteDocument visual builder | `KEEP` | **KEPT**. Sovereign visual canvas for non-code sites (`studio_engine === 'native'`). Must have 0 regressions and be strictly isolated from code-backed projects. |
| `studio/zylora/adapters.ts` (`ZyloraAuthAdapter`) | Tenant CSRF and session token propagation | `KEEP` | **KEPT**. Required for tenant security. Onlook OSS has no concept of Zylora tenancy/CSRF. |
| `studio/zylora/adapters.ts` (`ZyloraWorkspaceAdapter`) | REST client for `/api/sites/:id/code/*` | `KEEP` | **KEPT**. Required for sovereign filesystem persistence and atomic writes within tenant container. |
| `studio/zylora/adapters.ts` (`ZyloraSandboxAdapter`) | REST client for `/api/sites/:id/code/workspace/*` | `KEEP` | **KEPT**. Manages lifecycle of local Vite/Next dev server processes under `LocalSandboxProvider`. |
| `studio/zylora/adapters.ts` (`ZyloraAIAdapter`) | Multi-model AI router with credit accounting | `KEEP` | **KEPT**. Routes prompts across configured LLM providers (Anthropic, OpenAI, Google) with tenant credit deduction. |
| `studio/zylora/adapters.ts` (`ZyloraPublishAdapter`) | Production export and deployment pipeline | `KEEP` | **KEPT**. Runs production build verification, sanitization, and deployment to Zylora hosting. |
| Custom MobX/React State store in Studio | Recreated state management | `REPLACE` | **REPLACED** by transplanted Onlook `EditorEngine` (`studio/onlook/core/engine.ts`). `EditorEngine` is now the authoritative store. |
| Cloud CodeSandbox SDK (`@codesandbox/sdk`) | Upstream Onlook cloud container client | `REMOVE` / `REPLACE` | **REPLACED** by `studio/onlook/code-provider/index.ts` backed by Zylora's sovereign `LocalSandboxProvider`. |
| PostHog Analytics SDK (`posthog-js`) | Upstream Onlook external telemetry | `REMOVE` / `REPLACE` | **REPLACED** by `studio/onlook/telemetry/posthog-stub.ts`. Eliminates external data exfiltration and protects tenant code confidentiality. |
| Custom Penpal Wrapper | Custom postMessage message bridge | `REPLACE` | **REPLACED** by transplanted `@onlook/penpal` WindowMessenger and connection methods. |
| `studio/components/*` (Native studio controls) | Controls for native SiteDocument builder | `KEEP` | **KEPT** exclusively for `NativeZyloraStudio`. Untouched by Code Mode. |

---

## 3. Structural Isolation & Anti-Collision Verification

1. **Routing Verification**:
   In `studio/App.tsx`, the routing is strictly binary:
   ```tsx
   if (codeEngine) {
     return <ZyloraOnlookStudio siteId={siteId} csrf={csrf} workspaceId={workspaceId} />;
   }
   return <NativeZyloraStudio />;
   ```
   No state, styles, or reducers bleed between the two engines.

2. **Bundle Verification**:
   Both engines coexist in `static/studio.js` without symbol collisions. `EditorEngineContext` is scoped strictly to `ZyloraOnlookStudio`.

3. **Filesystem Confinement**:
   `ZyloraWorkspaceAdapter` strictly enforces path traversal protection and blocks lockfiles (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `bun.lock`) from being created or altered via the Studio code endpoints.
