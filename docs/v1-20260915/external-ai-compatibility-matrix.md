# External AI Compatibility Matrix

Date: 2026-09-15. The shared gateway is protocol-compatible locally; named third-party client connection flows remain unverified and are not presented as supported integrations.

## Current official capability references inspected

- OpenAI ChatGPT custom MCP apps: https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt — remote MCP endpoints, OAuth-capable setup, and plan/workspace restrictions apply; local MCP servers are not directly reachable.
- Anthropic MCP documentation: https://docs.anthropic.com/en/docs/mcp — MCP is documented across Claude.ai, Claude Code, Claude Desktop and the Messages API.
- Manus custom MCP documentation: https://manus.im/docs/integrations/custom-mcp — custom MCP servers are hosted HTTPS endpoints with tool discovery and authentication requirements.

These documents establish protocol capability only. They do not replace an actual Zylora onboarding and write-path test in each hosted client.

| CLIENT | CONNECTION METHOD | AUTH | SCOPES | TOOLS | STATUS / REAL TEST | LIMITATIONS |
|---|---|---|---|---|---|---|
| OpenAI / ChatGPT ecosystem | Remote MCP or REST/OpenAPI adapter | OAuth authorization-code + S256 PKCE where the client supports it; connector bearer fallback | account.read; sites.read; sites.edit; sites.create; sites.publish | Shared Zylora registry | NOT_CURRENTLY_CERTIFIED; no live branded client test | Current client onboarding path was not exercised in this local environment |
| Claude | Remote MCP or REST/OpenAPI adapter | OAuth authorization-code + S256 PKCE where supported; connector bearer fallback | account.read; sites.read; sites.edit; sites.create; sites.publish | Shared Zylora registry | NOT_CURRENTLY_CERTIFIED; no live branded client test | Current client onboarding path was not exercised in this local environment |
| Manus | MCP connector or REST/OpenAPI adapter | OAuth where supported; connector bearer fallback | account.read; sites.read; sites.edit; sites.create; sites.publish | Shared Zylora registry | NOT_CURRENTLY_CERTIFIED; no live branded client test | Current client onboarding path was not exercised in this local environment |
| Generic MCP client / inspector | JSON-RPC `initialize`, `tools/list`, `tools/call` | Connector bearer token | Connector-scoped | MCP tool registry, including create/page/publish gates | PROTOCOL_COMPATIBLE — local contract test passed 2026-09-15 | External inspector interoperability still needs a live run |
| REST / OpenAPI reference client | Versioned `/api/agent` REST service | Connector bearer token or OAuth-issued access token | Connector-scoped | `/api/agent/tools`, `/api/agent/invoke` | PROTOCOL_COMPATIBLE — local contract test passed 2026-09-15 | No third-party hosted client was used |

## Authorization controls verified locally

- exact redirect URI registration and loopback/HTTPS validation;
- authorization-code flow with S256 PKCE and state/CSRF protection;
- short-lived access tokens and rotating refresh tokens;
- one-time authorization codes and refresh-rotation replay rejection;
- resource/audience validation;
- connector scopes and explicit site allowlists;
- CAS stale-write rejection, durable idempotency and revocation;
- no passwords or raw tokens are written to logs or connector listings.
