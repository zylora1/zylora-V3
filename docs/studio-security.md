# Zylora Studio Security Specification & Threat Model

## 1. Threat Model & Risk Surface

| Attack Vector | Vulnerability Description | Mitigation Strategy |
| :--- | :--- | :--- |
| **XSS via User Content** | Malicious `<script>` or event handlers injected into text, HTML, or SVG nodes. | Sanitization via `bleach`/`nh3`, script tags stripped, unquoted URI validation (`javascript:` / `data:text/html` rejected). |
| **CSS Injection** | Attacker injects `expression()` or malicious `url(...)` in style fields. | Regex validation (`_SAFE_CSS_VALUE`) rejects script execution, external URLs verified against allowlist. |
| **IDOR & Multi-Tenant Bypass** | User modifies another tenant's site by manipulating `siteId`. | Server-side authorization on every endpoint: `WHERE id = :site AND user_id = :user`. Client-supplied IDs never trusted. |
| **CSRF on Mutations** | Malicious third-party site triggers unauthorized document changes or publish. | Signed session cookies paired with mandatory `X-CSRF-Token` headers on all state-changing endpoints. |
| **AI Tool Abuse / Poisoning** | Malicious prompts cause AI to delete nodes or inject backdoors. | AI operations pass strictly through the validated Studio Command API. No raw SQL or code execution tools exposed. |
| **Concurrency & Lost Updates** | Multiple tabs or simultaneous edits overwrite changes. | Compare-And-Swap (CAS) revision checking (`revision: int`). Stale saves trigger conflict resolution. |
| **Payload DoS** | Massive document payloads (>50 MB) exhaust memory or CPU during parsing. | Pydantic max page constraints (`MAX_PAGES_PER_SITE = 298`), node count limits, recursive tree depth limits. |

---

## 2. Tenant Isolation Invariants
1. **Database Queries**: Every query fetching, updating, or deleting a site, page, document, asset, lead, or appointment joins against `user_id = current_user.id`.
2. **Media Storage**: Uploaded files are stored with cryptographically generated unique filenames under tenant-isolated paths. Direct file paths are verified against user ownership before deletion.
3. **Publishing Permissions**: Only authenticated users with active permissions on a site can trigger `/api/sites/{id}/publish`.
