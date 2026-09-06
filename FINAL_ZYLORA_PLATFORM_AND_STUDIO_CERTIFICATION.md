# ZYLORA — FINAL PLATFORM AND STUDIO CERTIFICATION

## Verdict

**Platform: CONDITIONALLY CERTIFIED**

The repository-side release gates completed successfully for the current source changes: the full elevated suite passed with `371 passed, 1 skipped, 0 failed`, and the Studio browser suite passed in Chromium, Firefox, and WebKit with `16 checks / 0 errors` per engine. The release is not marked fully production-certified because the final Railway authenticated Studio journey could not be established safely without a controlled account and valid Turnstile test path. Razorpay remains intentionally unconfigured and was not contacted.

## Release

- Starting SHA: `6821cba252770522b2daf141cd25c544a5abf09c`
- Current local SHA before release commit: `6821cba252770522b2daf141cd25c544a5abf09c`
- Branch: `main`
- Target Railway service: `zylora-app`
- Railway URL: https://zylora-api-production.up.railway.app
- Existing deployed baseline: `6821cba252770522b2daf141cd25c544a5abf09c`, deployment `1f951175-8a5c-4e7a-a9f8-6bb03dc0885c`
- Final implementation commit: `677f903c6bb522b0e13b0920315a879d3e45e4eb`
- `origin/main`: `677f903c6bb522b0e13b0920315a879d3e45e4eb`
- Railway deployment SHA: `677f903c6bb522b0e13b0920315a879d3e45e4eb`
- Railway deployment ID: `a1976d5b-e61e-4b2f-b06c-27640a5b5d38` — `SUCCESS`

## P0 accidental-movement gate

Implemented in `studio/components/CanvasNode.tsx`. An unselected node no longer captures the pointer or mutates geometry on pointer-down. Movement starts only after the node is already selected and the pointer crosses a 6px intentional-drag threshold. Selection remains click-based; pointer capture begins only after drag activation. Selected-node and resize-handle touch behavior use explicit gesture semantics, while canvas nodes retain vertical scrolling behavior.

Evidence:

- Chromium: `studio_v4_e2e`: **16 checks / 0 errors**
- Firefox: `studio_v4_e2e`: **16 checks / 0 errors**
- WebKit: `studio_v4_e2e`: **16 checks / 0 errors**
- Regression covers wheel scrolling over an unselected heading and intentional drag after selection, including persistence assertions.

## Studio feature matrix

| Capability | Status | Evidence |
|---|---|---|
| Selection / deselection | PASS | Browser suite |
| Safe scroll over unselected nodes | PASS | P0 regression |
| Direct drag after selection | PASS | Browser suite |
| Direct resize | PASS | Browser suite |
| Contextual toolbar | PASS | Browser suite and component tests |
| Text editing / typography controls | PASS | Component tests/browser suite |
| Asset workflow | EXISTING / REGRESSION-PROTECTED | Existing suite; live auth upload not run |
| Links / duplicate / delete | EXISTING / REGRESSION-PROTECTED | Existing suite |
| Undo / redo | EXISTING / REGRESSION-PROTECTED | Full suite |
| Layers / z-order / reparenting | EXISTING / REGRESSION-PROTECTED | Full suite |
| Responsive modes | PASS | Browser suite |
| Scroll effects | PASS | Renderer test plus IntersectionObserver output |
| Reduced-motion fallback | PASS | Renderer regression |
| Save/reopen | EXISTING / REGRESSION-PROTECTED | Full suite; final live auth blocked |
| Publish parity | EXISTING / REGRESSION-PROTECTED | Existing renderer/publishing tests |

## Scroll effects

`app/studio_renderer.py` now emits restrained reveal/fade/rise/slide/scale effects using `IntersectionObserver`, adds `prefers-reduced-motion` handling, and persists effect metadata through the existing document interaction state. `ContextToolbar` exposes a compact scroll-effect control rather than a permanent inspector.

## Sales Assistant owner billing

Implemented in `app/sales_assistant.py` and covered by two new regression tests. Non-test assistant requests now resolve the owning site user, reserve wallet credits transactionally, call the configured provider, settle the reservation against measured usage cost, persist the existing usage/credit ledger records, and refund reservations on provider failure. A zero-balance owner receives a public fallback without a provider call. Test mode remains non-billable for deterministic tests.

Targeted evidence: `6 passed` for Studio renderer plus Sales Assistant owner-billing and zero-balance tests. Full suite includes these tests.

## Automated tests

- `python -m compileall -q app studio scripts tests/test_studio_canva_contract.py`: PASS
- Focused Studio/billing tests: `6 passed, 1 warning`
- Full elevated pytest: **`371 passed, 1 skipped, 0 failed, 59 warnings`**
- Duration: `272.54s`

## Production deployment status

Railway auto-deployed the GitHub `main` push for the exact implementation SHA. The deployment reached terminal `SUCCESS`; `/api/health` returned HTTP 200 with `{"status":"ok"}`. Public smoke returned HTTP 200 for `/`, `/pricing`, and `/templates`.

## Known blockers and limitations

1. Final Railway authenticated browser proof remains blocked unless a controlled production account and valid Turnstile test path are available; no security bypass was used.
2. Direct Railway PostgreSQL SQL introspection remains outside this pass because the managed database is private; no local database or Docker was used.
3. Razorpay: **NOT CONFIGURED** and not contacted.

## Final certification statement

The exact SHA `677f903c6bb522b0e13b0920315a879d3e45e4eb` is deployed and healthy on Railway. The platform remains **CONDITIONALLY CERTIFIED** because authenticated live production journeys still require a controlled account/Turnstile path; no unsupported production claim is made.
