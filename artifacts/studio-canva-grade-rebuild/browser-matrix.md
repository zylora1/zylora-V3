# Browser evidence

## Local Studio interaction harness

| Engine | Result |
|---|---|
| Chromium | 11 checks / 0 errors |
| Firefox | 11 checks / 0 errors |
| WebKit | 11 checks / 0 errors |

The checks covered semantic Layers section reorder with stable IDs, middle-mouse pan, Space+drag pan, and no application overflow at 1440, 1280, 1024, 768, 430, 390, 375, and 360px.

## Local mobile Studio harness

Chromium, Firefox, and WebKit: PASS / 0 errors.

## Production public smoke for the deployed release

- Chromium: all required public routes returned HTTP 200; no page errors; two expected unauthenticated 401 console probes.
- Firefox: all required public routes returned HTTP 200; no console/page errors; template-preview request failures were recorded.
- WebKit: not completed because the local Playwright/WebKit runner closed the browser context before page creation under a resource limit.
