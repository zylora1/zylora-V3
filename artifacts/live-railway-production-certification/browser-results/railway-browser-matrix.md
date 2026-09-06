# Final deployed browser matrix

Playwright target: `https://zylora-api-production.up.railway.app` (not localhost).

Public home, login, signup, pricing, templates, and robots pages returned expected status in Chromium, Firefox, and WebKit. All eight required viewport widths reported `scrollWidth == clientWidth`. `/api/auth/me` 401 probes were expected unauthenticated checks. Authenticated Studio/CRM/Admin surfaces were not exercised.

| Surface | Chromium | Firefox | WebKit |
|---|---|---|---|
| Public | PASS | PASS | PASS |
| Auth pages | PASS | PASS | PASS |
| Pricing | PASS | PASS | PASS |
| Templates | PASS | PASS | PASS |
| Dashboard | BLOCKED | BLOCKED | BLOCKED |
| Studio | BLOCKED | BLOCKED | BLOCKED |
| CRM | BLOCKED | BLOCKED | BLOCKED |
| Appointments | BLOCKED | BLOCKED | BLOCKED |
| Chatbot public route | PASS | PASS | PASS |
| Published site | PASS (known live site) | BLOCKED | BLOCKED |
| Super Admin | BLOCKED | BLOCKED | BLOCKED |
