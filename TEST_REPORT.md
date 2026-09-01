# Test Report — 2026-08-26

## Latest UI-polish verification

- Direct Playwright + real FastAPI browser workflow: **89 checks / 0 errors**.
- Focused AI-first and platform-blog regression tests: **7 passed**.
- Static and SiteDocument/runtime contract tests: **13 passed**.
- Python compilation: PASS.
- Static JavaScript syntax checks: PASS.

The browser workflow covers landing, signup, plan choice, AI creation, dashboard navigation, notification indicator, editor, publishing, public assistant, appointments, leads, source export, Google Sheets, notifications, billing, responsive behavior, logout/login and password reset.

The regression coverage verifies the public catalogue is truly empty, AI creation is prompt-derived, the internal renderer is not exposed as a template, customer blog APIs/runtime are absent, and the platform blog is SUPER_ADMIN-only for writes.

## Earlier complete non-browser run on this cleaned architecture

- Pytest excluding the long browser wrapper: **96 passed / 0 failed**.

External-provider and dependency-installed production-build checks remain credential/network deployment gates rather than being reported as locally verified.
