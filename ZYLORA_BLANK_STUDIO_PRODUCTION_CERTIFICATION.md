# Zylora Blank Studio Production Certification

Date: 2026-09-07

## Verdict

**CONDITIONALLY READY**

The blank-canvas creation workflow is implemented, tested, committed, pushed, and deployed on the exact SHA below. The repository gate is green and the blank Studio browser flow passes in Chromium, Firefox, and WebKit. This pass does not claim a new authenticated Railway user journey: Turnstile completion, provider-backed AI execution, and durable-media restart proof still require legitimate external test access.

## Release identity

- Local SHA: `f04105a509f58a5988a238b55bcaa4804bb23dc6`
- `origin/main`: `f04105a509f58a5988a238b55bcaa4804bb23dc6`
- Railway SHA: `f04105a509f58a5988a238b55bcaa4804bb23dc6`
- Deployment ID: `37c744f9-31ff-4a5a-8aef-dbb6560b0e9b`
- Deployment status: `SUCCESS`
- Production URL: `https://zylora-api-production.up.railway.app`
- Health: Railway deployment log recorded `GET /api/health` → `200 OK`

## Product flow

| Gate | Result | Evidence |
|---|---|---|
| Create Website → blank Studio | PASS | `/api/sites/blank`, dashboard CTA, 5 focused tests |
| No AI/template chooser before Studio | PASS | dashboard and public CTA contract tests |
| Active platform template catalogue retired | PASS | `/api/templates` retired payload, route redirects, sitemap exclusion |
| AI remains optional inside Studio | PASS | Studio AI panel and structured operation tests |
| Curated elements/sections | PASS | Text, Button, Card, Image Frame, Shape, Hero/section insertion |
| User Save as Template | PASS | sanitized snapshot and clone endpoint tests |
| Existing SiteDocument compatibility | PASS | renderer branches on `studio_document_json`; full suite green |

## Editor implementation

The change uses the existing structured Studio document and renderer. It adds a dedicated blank-site creation endpoint and a curated beginner-first insertion surface; it does not create a second document model. Added/updated systems include:

- `app/api_editor.py`: blank-site creation and private user-template snapshot/clone APIs.
- `app/user_site_templates.py`: sensitive-data sanitization and ID-safe cloning.
- `studio/store.ts`: subtree insertion and external document application.
- `studio/components/AddPanel.tsx`: curated elements, image frames, and editable section presets.
- `studio/components/AIPanel.tsx` and `UserTemplatesPanel.tsx`: optional in-editor AI and reusable private templates.
- `studio/App.tsx`: Sections / Elements / Text / Uploads / Draw / Layers / AI rail and template actions.
- `studio/components/CanvasNode.tsx`: editable child subtree drops and existing direct-manipulation behavior.

The existing crop, reorder, pan, zoom, history, autosave, responsive, CMS, publishing, and AI contracts were retained and covered by the existing Studio regression suite.

## Tests

- Full repository: **393 passed, 1 skipped, 0 failed**
- Focused blank Studio/template tests: **5 passed**
- `python -m compileall -q app`: PASS
- `node --check static/dashboard.js`: PASS
- `npm.cmd run build:studio`: PASS (Vite, 30 modules)
- Browser harness: Chromium / Firefox / WebKit, blank creation and editable subtree persistence; **0 errors**
- Warnings: 59 full-suite warnings (existing Starlette/httpx and cookie deprecation warnings)

## Browser evidence

The focused browser harness verifies, per engine:

1. Dashboard Create Website creates a one-page blank Home site.
2. Studio exposes the seven beginner-first rail entries.
3. Text insertion creates an editable text node.
4. Existing direct manipulation can move the inserted text.
5. Button, Card, and Hero section insertion persists editable child nodes to the SiteDocument.

The harness runs against Chromium, Firefox, and WebKit with a disposable SQLite audit database and an in-process API bridge; it does not mutate the developer database.

## Production limitations

These are not silently marked as passes:

- **LIVE-AUTH-003 — HUMAN ACTION REQUIRED:** a legitimate Turnstile-completable normal-user production signup is still required before claiming live authenticated AI/Studio certification.
- **LIVE-MEDIA-004 — HUMAN ACTION REQUIRED:** authenticated upload → publish → Railway restart → reload proof is still required before claiming durable-media certification on this release.
- Provider-backed OpenAI, Resend, and payment certification remains dependent on valid production provider credentials; no bypass or fake provider response was added.
- Razorpay is not part of this pass and paid checkout is not certified.

See `PRODUCTION_DEFECT_REGISTER.md` for the tracked gates and exact rerun actions.

## Final judgment

The blank-canvas Studio creation experience is implemented and repository/deployment verified. It is suitable for continued controlled beta validation, but this artifact does not certify the full live authenticated golden path until the external Turnstile, provider, and durable-storage evidence is supplied.
