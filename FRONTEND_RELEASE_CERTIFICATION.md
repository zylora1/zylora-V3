# Zylora frontend release certification

Release review date: 2026-09-11

## A. Verdict

**NOT PRODUCTION READY**

The local implementation and public route delta are in place, but the release is not certified for production because Railway deployment/post-deploy verification is still blocked on explicit upload authorization, the broader exact viewport matrix is incomplete, and production provider evidence is unavailable.

## B. Design system

Implemented the light editorial public system and separate dashboard/Studio drafting-table chrome. Tokens and ownership are documented in `ZYLORA_DESIGN_SYSTEM.md`.

## C. Reference translation

Direct inspection of [Linearity](https://www.linearity.io/) and [Wix](https://www.wix.com/) informed hierarchy, product storytelling, route grouping and support/footer patterns. No reference assets or source code were imported.

## D. Routes

Implemented/verified server-rendered public product, solution, information and help route families; added `/auth/error`, `/account/suspended`, `/onboarding`, `/checkout/*`, authenticated `/preview/{site_id}` and `/studio/{site_id}/publish`. `/editor/{site_id}` remains a compatibility redirect; `/studio-v2` was not added.

## E. Backend integration

Existing `/api` identity, site, Studio, billing, media, CMS, CRM, widget, SEO, operations and SUPER_ADMIN routes remain the integration boundary. No frontend route invents a payment result or bypasses ownership/CSRF checks.

## F. M3E/reference boundary

M3E interaction patterns were translated into the existing Zylora command/viewport/gesture engine. M3E is not the persistence or application architecture.

## G. Studio

Schema v5 compatibility, `engineVersion: 2`, canonical geometry, responsive inheritance, command dispatch, selection/transform controls, layers, inspector, autosave/CAS and publish entry integration are implemented in the current source tree. Studio build passed.

## H. Responsiveness

Current public smoke evidence: Chromium 30/30, Firefox 30/30 and WebKit 30/30 at 1440×900 and 390×844. The authenticated Studio golden-path harness passed 9 assertions each in Chromium, Firefox and WebKit at 1440×900. The broader exact viewport matrix remains unverified in this delta.

## I. Accessibility

Semantic headings/landmarks, labels, focus states, keyboard Layers actions and reduced-motion paths are implemented. Full WCAG 2.2 AA, screen-reader and keyboard-only certification remains unexecuted.

## J. SEO

Implemented server-rendered metadata, canonicals, JSON-LD, semantic H1/H2 content, internal links, robots/sitemaps and private noindex handling. Route tests passed.

## K. AEO

Product/help pages use direct answers, descriptive headings, workflow steps and supported FAQs. No ranking instructions were inserted.

## L. GEO

Entity naming and product/solution topical clusters are consistent across route registries, page copy, related links and `llms.txt`.

## M. Performance

Studio build: 326.88 kB / 98.99 kB gzip. Public route checks recorded no console errors. Prior node-document smoothness evidence did not meet the strict 16.7 ms p95 resize target at 500 nodes. Fresh LCP/INP/CLS and deployed measurements are unverified.

## N. Tests

- Focused current suite: **19 passed, 1 warning**.
- Current full repository suite (elevated browser permissions): **452 passed, 1 skipped, 59 warnings**.
- Current public browser smoke: **Chromium 30/30, Firefox 30/30 and WebKit 30/30 passed**.
- Current authenticated Studio golden path: **Chromium 9/9, Firefox 9/9 and WebKit 9/9 passed**.
- Current screenshot capture: **6 Chromium images captured and inspected**.
- Studio TypeScript check: passed.
- Studio production build: passed.
- Python compileall: passed after route changes.
- The earlier non-elevated full-suite attempt was **450 passed, 1 skipped, 2 failed**; one stale pricing assertion was corrected to the new public/private contract and one child-browser subprocess failure was the sandbox `WinError 5`.

## O. Cross-browser

Chromium, Firefox and WebKit route coverage passed at the representative desktop/mobile sizes. The authenticated Studio golden path also passed in all three engines at 1440×900.

## P. Security

Private preview and publish-entry routes require authentication and site ownership. Checkout status pages are noindex and do not infer payment state. Existing auth, CSRF, billing, credits, media ownership and rate-limit controls were preserved. Production auth/IDOR/CAPTCHA/provider verification remains unverified without permitted credentials and deployment.

## Q. Remaining blockers

1. Explicit authorization is required before uploading the generated private `release_context` to the specified Railway production project/service.
2. Rebuild `release_context` after these local source changes, then deploy and verify health plus authenticated flows with permitted credentials.
3. Execute the remaining exact viewport, Studio golden-path, accessibility, performance and provider-backed billing/domain/media checks.

## Evidence boundary

This report contains executed local evidence and explicit gaps only. It does not claim Railway deployment, production availability, real credential verification, or a production certification verdict.
