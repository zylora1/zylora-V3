# Public Railway browser matrix

The read-only public smoke covered `/`, `/signup`, `/login`, `/templates`, `/freelancers`, `/choose-plan`, `/blog`, `/terms`, `/privacy`, `/llms.txt`, `/robots.txt`, and `/sitemap.xml`.

| Engine | Route status | Page errors | Notes |
|---|---|---|---|
| Chromium | All 12 routes HTTP 200 | 0 page errors | Two expected 401 auth-bootstrap console entries; Turnstile challenge request is external. |
| Firefox | All 12 routes HTTP 200 | 0 page errors | First-party preview requests were observed as failed during rapid route navigation, but direct URL probes returned HTTP 200; no persistent 5xx. |
| WebKit | All 12 routes HTTP 200 | 0 page errors | Two expected 401 auth-bootstrap console entries; Turnstile/rapid image requests are environment-sensitive. |

Authenticated production browser matrix: **BLOCKED** pending a legitimate Turnstile-completed normal-user account.
