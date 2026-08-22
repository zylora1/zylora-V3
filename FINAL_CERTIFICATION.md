# Zylora — Final Local Certification

Certification date: 2026-08-22

## Verdict

**CONDITIONAL PASS — all executable local certification gates pass.**

The only blocked mandatory gate is the exact Next.js dependency install/typecheck/production build. The execution environment cannot resolve `registry.npmjs.org`; therefore this document does not fabricate a build PASS.

## Catalogue

- Total templates: **1008**
- Unique IDs: **1008**
- Unique implementation files: **1008**
- Unique structural signatures: **1008**
- Unique source hashes: **1008**
- Industry/category count: **63**
- Design-style count: **76**
- Layout-archetype count: **36**
- Hero-archetype count: **32**
- Navigation-pattern count: **16**
- Typography-system count: **24**
- Preview images: **1008**
- Registry/metadata failures: **0**
- Templates over 10 pages: **0**

Templates by page count: `{"1": 126, "10": 0, "2": 126, "3": 126, "4": 126, "5": 126, "6": 126, "7": 126, "8": 126, "9": 0}`

## Similarity audit

- Near-duplicate pairs above structural rejection threshold: **0**
- Highest catalogue similarity score: **0.6325**
- Random-50 unique structural signatures: **50 / 50**
- Random-50 normalized source max similarity: **0.776**

## Automated tests

- Pytest: **1,090 passed / 0 failed**
- Backend/domain/API coverage: **92.80%**
- Python compileall: **PASS**
- TypeScript/TSX syntax transpilation: **1,049 files / 0 syntax errors**
- Frontend structural audit: **PASS**
- Frontend build-regression audit: **PASS**
- Engagement audit: **PASS**
- Catalogue audit: **PASS**

## Database

- Clean Alembic upgrade: **PASS**
- Migration head: **20260822_0003**

## Browser visual QA

- Browser: **system Chromium /usr/bin/chromium**
- Templates inspected: **50**
- Viewports: **1440, 1280, 1024, 768, 430, 390, 360**
- Render checks: **350**
- Responsive/runtime issues: **0**

## Accessibility QA

- Templates inspected: **50**
- Viewport checks: **100**
- Serious failures: **0**
- Critical failures: **0**

The previously detected contrast failure in `template-0069-wellness-postmodern` was corrected and the accessibility audit was rerun successfully. Its browser preview was regenerated after the repair.

## Live HTTP E2E smoke

Real Uvicorn process: **PASS**

- Signup: 200
- Create template site: 201
- Save customer content + SEO: 200
- Configure booking: 200
- Publish: 200
- Visit returned public URL: 200
- Capture lead: 201
- Chatbot: 200 (LEAD_CREDITS)
- Fetch slots: 200
- Book appointment: 201
- Lead dashboard: 200
- ZIP/source export: 200

Production unsafe-config startup guard: **PASS** (`dev-secret` is rejected in production).

## Export QA

- Representative exports tested: **20**
- Exported TS/TSX files transpiled: **40**
- Errors: **0**
- Result: **PASS**

## Frontend production build gate

**BLOCKED — external environment network.**

A fresh npm installation was retried. Direct connectivity check returned:

```text
curl: (6) Could not resolve host: registry.npmjs.org
```

Because dependencies cannot be installed in this environment, the following exact-tree gates are not claimed:

- `npm run typecheck`
- `npm run build`
- Next.js Playwright E2E

Run these in an environment with npm registry access before deployment:

```bash
cd apps/web
npm install
npm run typecheck
npm run build
```

## Live-provider boundary

Real Anthropic, Razorpay, Google OAuth, Resend, Twilio and Cloudflare transactions require configured provider credentials/account resources and are not represented as live-provider PASS results in this archive.

## Packaging

The archive excludes `node_modules`, `.next`, `.git`, test caches, local publication artifacts, `.coverage`, secrets and real `.env` credentials. `.env.example`, migrations, source, tests and documentation are preserved.
