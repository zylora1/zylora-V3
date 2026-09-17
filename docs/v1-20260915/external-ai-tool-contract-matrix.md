# External Ai Tool Contract Matrix

REST and MCP transports dispatch through one internal typed tool service. Deterministic agent patches do not reserve AI credits.

| TOOL | REQUIRED SCOPE | READ/WRITE/SENSITIVE | INTERNAL SERVICE | IDEMPOTENT | REVISION-AWARE | TEST |
|---|---|---|---|---|---|---|
| zylora.get_capabilities | account.read | READ | Connector capability registry | Read | N/A | tests/test_agent_gateway.py |
| zylora.list_sites | sites.read | READ | Owned-site access + allowlist | Read | Returns current revisions | tests/test_agent_gateway.py |
| zylora.get_site_revision / zylora.get_site_structure | sites.read | READ | Canonical SiteDocument validation | Read | Returns revision | tests/test_agent_gateway.py |
| zylora.apply_site_patch | sites.edit | WRITE | studio_ai_operations.apply_v4_operations | Durable key + payload binding | Exact CAS required | tests/test_agent_gateway.py |
| publish_site / billing / delete | Not exposed by default | SENSITIVE | No gateway dispatch | N/A | N/A | Registry absence asserted in tests/test_agent_gateway.py |
