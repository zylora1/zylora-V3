# Test evidence

- Focused Studio/media/security tests: 31 passed, 1 warning.
- Full `pytest -q`: 384 passed, 1 skipped, 0 failed, 59 warnings, 274.43s.
- `python -m compileall -q app scripts`: PASS.
- `node scripts/build_studio.js`: PASS (elevated execution required by Windows esbuild spawn policy).
- Existing warning class: Starlette/httpx deprecation and TestClient cookie deprecation; no test failures.
