# Automated verification

- Full repository: **383 passed, 1 skipped, 0 failed, 59 warnings**, 271.29 seconds. Executed outside the restricted subprocess sandbox so the browser subprocess could start.
- The same suite inside the restricted sandbox produced one WinError 5 while spawning Playwright; the isolated `tests/test_e2e.py` rerun outside that sandbox passed 1/1. This is an execution-environment limitation, not a product failure.
- Compileall: **PASS** (`python -m compileall -q app scripts`).
- Existing Studio cross-engine suites remain the previously verified Chromium/Firefox/WebKit 18-check and mobile passes; Studio was not modified in this certification pass.
