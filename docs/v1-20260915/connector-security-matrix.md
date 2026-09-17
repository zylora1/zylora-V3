# Connector Security Matrix



| THREAT | EXPECTED CONTROL | TEST | RESULT | EVIDENCE |
|---|---|---|---|---|
| Missing/expired/revoked token | Resource-bound credentials; server revocation | Revoked token rejects with 401 | PASS | tests/test_agent_gateway.py |
| OAuth replay / wrong resource | One-time authorization code, S256 PKCE, audience validation, refresh rotation | Code replay and wrong-audience connector reject | PASS | tests/test_agent_oauth.py; app/agent_oauth.py; app/agent_gateway.py |
| Scope escalation | Server scopes; sensitive scopes off by default | Read cannot edit; publish requires explicit `sites.publish` | PASS | tests/test_agent_gateway.py |
| Cross-tenant/allowlist escape | Ownership plus selected-site restriction | Foreign site rejected | PASS | tests/test_agent_gateway.py |
| Replay | Per-connector durable idempotency with payload binding | Same key replay; changed payload conflict | PASS | tests/test_agent_gateway.py |
| Lost update | Atomic revision CAS | Stale base revision rejected | PASS | tests/test_agent_gateway.py |
| Injection | Typed operations and executable payload rejection | Typed patch path; unsafe fields rejected | PASS / focused | app/agent_gateway.py; studio_ai_operations.py |
| Secret leakage | Minimum response/audit fields | Hash and token excluded from listings | PASS | tests/test_agent_gateway.py |
| Abuse / rate limit | Durable per-connector fixed-window limiter | Connector requests are bounded at 120 per minute | IMPLEMENTED / code path | app/agent_gateway.py; app/security.py |
| Unmetered hosted inference | Deterministic edits bypass AI billing | No provider call in gateway service | PASS / code path | app/agent_gateway.py |

`sites.create`, `sites.edit`, and `sites.publish` are separate gateway scopes. The create/page/publish/revoke continuity contract is covered locally; named hosted-client onboarding remains a separate certification boundary.
