# Final Railway browser evidence

Current source SHA before this release commit: `6821cba252770522b2daf141cd25c544a5abf09c`.

The following is local controlled browser evidence for the current source changes; it is not a claim of final Railway authenticated certification.

Studio regression: Chromium `16 checks / 0 errors`; Firefox `16 checks / 0 errors`; WebKit `16 checks / 0 errors`.

The three runs were rerun after the final source/bundle changes in this pass. They exercised unselected scrolling, selected drag, resize, text/typography, upload insertion, effects, keyboard history, layers, autosave, reload persistence, responsive switch, and zero uncaught browser errors.

Previous Railway baseline SHA: `de9cd19377ebda7925d70ebc4efe366d205196e2`.

Public Railway smoke on the final deployment:

| Surface | Chromium | Firefox | WebKit |
|---|---|---|---|
| Public landing/catalogue matrix from prior deployed run | PASS | PASS | PASS |
| Authenticated login + Back/Forward/refresh | BLOCKED | BLOCKED | BLOCKED |
| Authenticated Studio | BLOCKED | BLOCKED | BLOCKED |
| CRM / appointments / Super Admin | BLOCKED | BLOCKED | BLOCKED |

The public matrix covered 1440, 1280, 1024, 768, 430, 390, 375, and 360 widths with no unexpected horizontal overflow on public/auth/catalogue pages. The final SHA public HTTP smoke returned 200 for `/`, `/pricing`, and `/templates`; `/api/health` returned 200. Live authenticated browser proof was blocked by Turnstile rejecting controlled signup without a valid token.
