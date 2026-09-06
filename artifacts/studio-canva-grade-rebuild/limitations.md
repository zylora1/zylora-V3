# Limitations and blockers

- **BLOCKED — supplied recording unavailable:** the requested screen recording was not present, so no recording-based visual parity claim is made.
- **BLOCKED — authenticated production browser flow:** legitimate Turnstile completion remains unavailable in the controlled runner; no production bypass was introduced.
- **IMPORTANT — public Firefox assets:** template-preview request failures were observed in the final public smoke and require follow-up before a full public-site matrix can be certified.
- **BLOCKED — public WebKit runner:** the local Playwright/WebKit process closed its context under a resource limit; local Studio WebKit interaction tests remain green.
- **OUT OF SCOPE:** previously documented platform-level durable-media, private PostgreSQL introspection, and optional provider gaps were not re-audited in this Studio-focused pass.
