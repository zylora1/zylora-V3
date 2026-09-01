# Zylora AI Prompt Guidance — Implementation & Audit

Date: 2026-08-29

## Implemented

- Added a dismissible detailed-prompt guidance panel above the Build with AI business-description textarea.
- Guidance explains why one-line prompts are generic and explicitly suggests business type, target audience, tone, key services, and desired sections.
- Added a detailed grey placeholder that demonstrates the expected prompt shape.
- Added a live word-count hint with a 20-word advisory threshold. It is informational only and never disables navigation or site creation.
- Removed the legacy Step 2 frontend minimum-description gate.
- Persisted guidance dismissal in `localStorage` using a signed-in user identity key. Guest dismissal migrates to the user key on authentication and the guest key is removed to avoid cross-user leakage on shared browsers.
- Scope is limited to `/ai-create`; Browse Templates is unchanged.
- AI generation logic, credit behavior, prompt transformation, page inference, and model invocation were not changed.
- The existing API request schema had a 12-character description minimum. That minimum was relaxed so the requested no-gate UX remains true when a short prompt reaches the existing create-site endpoint. Maximum length remains 6000 characters.

## Verification

- JavaScript syntax check: passed (`node --check static/ai-create.js`).
- Python syntax checks: passed.
- Non-browser repository suite: 119/119 tests passed, executed in split batches because the monolithic command exceeds the sandbox execution window.
- Browser E2E wrapper: passed.
- Browser checks: 91/91 passed, 0 errors.
- Browser coverage specifically verifies that `gym website` (2 words) shows the advisory word count, advances to art direction, and creates an AI site without a minimum prompt-length gate.

## Files changed

- `static/ai-create.html`
- `static/ai-create.css`
- `static/ai-create.js`
- `app/api.py` (legacy description-minimum compatibility relaxation only)
- `tests/test_ai_prompt_guidance.py`
- `scripts/browser_e2e.py`
- `data/browser-e2e-qa.json`
