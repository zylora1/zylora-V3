# Active Onlook tRPC Dependencies

## Scope and evidence status

The pinned Onlook source is imported through Vite aliases. `@/trpc/client` and
`@/trpc/react` resolve to the finite compatibility object in
`studio/onlook/trpc-stub.ts`. The old arbitrary deep proxy is gone.

Static call-site inventory is complete and the authenticated runtime trace is
now available. The real PostgreSQL-backed Chromium, Firefox, and WebKit runs
observed five finite compatibility accesses during boot and editor use; no
unknown path was observed. The table below combines source inventory with that
runtime evidence.

The latest repository suite recorded 527 passed, 1 skipped, and 59 warnings in
461.83 seconds.
The fixture matrix remains supplementary and was not used to promote required
methods.

## Active call classification

| Method | Call sites | Classification | Current handling |
|---|---|---|---|
| `project.get` | breadcrumb, publish domain | EDITOR_REQUIRED | Observed in authenticated trace; current Zylora project context |
| `project.list` | recent-projects menu | ZYLORA_PLATFORM_REQUIRED | Explicit empty list until a project-list adapter is wired; menu is not a certification path |
| `project.captureScreenshot` | screenshot manager | ZYLORA_PLATFORM_REQUIRED | Explicit stable null result; screenshot service adapter still required for this optional action |
| `project.create`, `project.fork` | create/clone hooks | OPTIONAL / ZYLORA_PLATFORM_REQUIRED | `project.fork` observed as a hook; no Code Studio mutation depends on it; creation remains Dashboard-owned |
| `branch.fork`, `branch.createBlank` | branch manager | ZYLORA_PLATFORM_REQUIRED | Explicit unsupported error; no fake branch is returned |
| `branch.update`, `branch.delete` | branch manager | ZYLORA_PLATFORM_REQUIRED | Explicit local success only; requires backend branch adapter before branch management certification |
| `frame.create/update/delete` | frame manager | EDITOR_REQUIRED | Explicit local success while frame state is editor-owned; persistence adapter still requires runtime verification |
| `sandbox.start` | sandbox session | EDITOR_REQUIRED | Calls `ZyloraSandboxAdapter.start()` |
| `sandbox.hibernate` | sandbox session | EDITOR_REQUIRED | Calls `ZyloraSandboxAdapter.stop()` |
| `sandbox.fork` | create-project hook | ZYLORA_PLATFORM_REQUIRED | Explicit unsupported error |
| `user.get` | create-project hook | ZYLORA_PLATFORM_REQUIRED | Current authenticated user from `ZyloraAuthAdapter` |
| `user.settings.get/upsert` | chat controls | OPTIONAL | Observed in authenticated trace; explicit Zylora compatibility state |
| `userCanvas.update` | canvas manager | OPTIONAL | Explicit local success; viewport state is editor-local and not a source authority |
| `userCanvas.getWithFrames` | no active runtime call found | UNUSED | Explicit empty result |
| `chat.conversation.*` | chat manager | OPTIONAL | Explicit local in-memory compatibility state; Zylora AI adapter remains platform authority |
| `chat.message.getAll/updateCheckpoints` | chat panel / chat hook | OPTIONAL | Explicit local compatibility state; not observed in the authenticated certification trace |
| `utils.applyDiff` | editor API | EDITOR_REQUIRED | Writes validated generated source through the configured workspace adapter |
| `utils.webSearch`, `utils.scrapeUrl` | editor API | OPTIONAL | Explicit unsupported error; no silent empty response |
| `domain.preview.get/create` | publish dropdown | ZYLORA_PLATFORM_REQUIRED | Read is explicit null; create is explicit unsupported until a Zylora preview-domain adapter exists |
| `domain.custom.get` | custom-domain publish UI | ZYLORA_PLATFORM_REQUIRED | Explicit null; Zylora domain APIs remain the authority outside the transplant |
| `subscription.get` | breadcrumb/publish UI | ZYLORA_PLATFORM_REQUIRED | Explicit null; Zylora billing is authoritative and is not represented as Onlook subscription state |
| `member.list`, `invitation.*` | members UI | ONLOOK_SAAS_ONLY | Explicit empty/error responses; Onlook organization cloud is not part of Zylora Studio |
| `useUtils` | invitation/chat controls | OPTIONAL | Observed in authenticated trace; explicit finite invalidation hooks |

## Hard rule for certification

No method may be promoted to `EDITOR_REQUIRED` based only on a selector or a
successful build. The Chromium golden path must capture
`window.__ZYLORA_TRPC_TRACE__`, verify arguments, exercise the resulting editor
state change, and then prove durable source persistence. Any observed required
method without an adapter-backed implementation fails certification.

## Tracing procedure

The browser runner enables `window.__ZYLORA_TRPC_TRACE_ENABLED__` before page
load and prints the trace after the Studio boot and source-edit phases. Run:

```text
python scripts/test_code_studio_ui_e2e.py --browser chromium
```

The final authenticated command was:

```text
python scripts/test_code_studio_ui_e2e.py --browser chromium --browser firefox --browser webkit
```

Observed paths were `project.get`, `project.fork`, `user.settings.upsert`,
`user.settings.get`, and `useUtils`. No unknown runtime path was recorded.
Required source operations use explicit Zylora workspace/sandbox adapters;
Onlook SaaS-only operations remain finite explicit stubs.
