# Backend integration gaps and release blockers

This file records real limits found during the release work. It does not turn unverified capabilities into claims.

## Blocking external work

1. Railway deployment has not been performed in this task. The required production upload is awaiting explicit authorization for the exact generated `release_context` destination and contents. No deployment or post-deploy authenticated verification is claimed.
2. Production credentials and provider configuration were not supplied for a permitted end-to-end authentication, billing, CAPTCHA, domain, email or media-provider run. Local route and authorization checks do not substitute for that evidence.
3. The non-elevated Windows Playwright subprocess is permission-blocked with `WinError 5`. The required elevated run is available and passed the current cross-browser smoke/golden-path checks; normal sandbox execution of the child-process E2E test is therefore not evidence.

## Known product boundaries

- The new `/checkout/*` pages are safe server-rendered return/status surfaces. They do not infer payment success from a URL; provider verification and the billing panel remain authoritative.
- Public information pages and help articles are server-rendered content, not a new CMS write workflow. Editorial publishing still uses the existing blog/admin APIs.
- The generated `release_context` used by the earlier deployment attempt must be rebuilt after the current local route/source changes before any future deployment.

## Not gaps

Existing authentication, tenant ownership, CSRF, CAS revisions, media ownership, plan limits, AI credit debits, public widget scoping and legacy rendering remain implemented in the current backend and were not weakened by this delta.
