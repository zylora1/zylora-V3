# Performance report

## Current measurements

- `npm.cmd run build:studio` passed on 2026-09-11. Vite 8.2.2 transformed 39 modules and emitted `static/studio.js` at 326.88 kB, 98.99 kB gzip.
- The public route smoke run loaded server-rendered pages without loading the Studio bundle from the public route handler.
- Representative Chromium and Firefox checks completed 30 routes each with zero console errors and no detected horizontal overflow.
- The preceding Studio performance gate measured zero tasks over 50 ms on 20/100/250/500-node documents; 500-node resize p95 was 33.3 ms, so the strict 16.7 ms target was not fully met.

## Architecture controls

Pointer movement remains transient/rAF-oriented; document serialization and network save happen at command boundaries/autosave rather than per pointer event. Public pages use shared CSS and server HTML, while the editor bundle is route-scoped.

## Unverified

No fresh lab LCP, INP or CLS measurements were executed in this delta, and no new 200+ node authenticated Studio trace was captured. CDN compression, production caching, real-device touch latency and deployed Core Web Vitals require the authorized Railway deployment and a permitted post-deploy test.
