# Zylora Architecture Consolidation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidate hosted AI, communications, infrastructure, billing, and Penpot integration behind migration-safe internal boundaries while preserving the verified Zylora baseline.

**Architecture:** Add provider-neutral interfaces and validated settings first, then switch one provider surface at a time behind deterministic local adapters. Add a real Penpot runtime boundary only as a feature-gated integration with versioned mapping/compiler/migration records; SiteDocument remains the compiled runtime/publishing representation. Legacy paths stay until focused tests prove the replacement.

**Tech Stack:** FastAPI, Pydantic Settings, SQLAlchemy migrations, HTTPX, existing AI credit ledger, React/Vite Studio, Playwright, pytest, PostgreSQL-compatible SQL.

**Spec:** `docs/superpowers/specs/2026-09-15-architecture-consolidation-design.md`

## Global Constraints

* Preserve the existing 481-pass baseline and never delete or weaken a test.
* SiteDocument remains the only persisted runtime/publish representation.
* Penpot is design-time source only after mapping/compiler validation exists.
* All mutations use the existing authorization → command → validation → CAS → revision/history/audit boundary.
* Hosted AI preserves reserve → execute → settle/release, streaming, tools, retries, fallback, and idempotency.
* External MCP/REST inference remains outside hosted Zylora AI credits.
* Lead email + WhatsApp notification bundles consume one lead credit across retries/replays.
* Production secrets remain server-side; no provider key is returned to browser or plugin code.
* Legacy providers and Studio remain until replacement tests pass.
* No live provider, sender approval, DNS, deployment, or Penpot upstream claim is made without evidence.

---

## File map and responsibilities

* Create `app/provider_services.py`: provider-neutral protocols, normalized result/error types, correlation context, and adapter registry.
* Modify `app/config.py`: target settings, compatibility aliases, startup validation, and secret-safe readiness checks.
* Create `app/ai_gateway.py`: Vercel AI Gateway adapter and response/usage normalization.
* Create `app/ai_service.py`: model registry and hosted-AI orchestration around the existing credit ledger.
* Modify `app/ai_models.py`, `app/generate_v4.py`, `app/api_editor.py`, `app/api_operations.py`, `app/cms.py`, and `app/studio_ai_operations.py`: route hosted calls through `AIService`.
* Create `app/telnyx_service.py`: Telnyx email/WhatsApp/SMS adapter, webhook verification, and normalized delivery state.
* Modify `app/email_service.py`, `app/providers.py`, notification jobs, and webhook routes: use `CommunicationService` while retaining outbox/idempotency.
* Create `app/infrastructure_service.py`: Cloudflare DNS/R2/Turnstile interface and adapter facade.
* Modify `app/providers.py` and custom-domain/media/Turnstile call sites to use the facade.
* Create `app/payment_service.py`: Razorpay interface and adapter facade.
* Modify billing routes/jobs to use `PaymentService` without changing plan/entitlement semantics.
* Create `app/penpot_manifest.py`, `app/penpot_mapping.py`, `app/penpot_compiler.py`, and `app/penpot_migration.py`: manifest, mapping, deterministic compiler, repeatable migration/rollback.
* Add SQL migration for `site_penpot_mapping` and migration/audit status fields only if no equivalent table exists.
* Create `static/penpot-plugin/zylora-website-tools/` with manifest, typed metadata schema, and API bridge; no provider secrets.
* Modify `/studio/{site_id}` route and Studio bootstrap to honor `STUDIO_ENGINE=legacy|penpot` without changing the default until certified.
* Create `app/provider_health.py` and admin API/UI surface for health/usage summaries.
* Create focused tests under `tests/test_provider_services.py`, `tests/test_ai_gateway.py`, `tests/test_telnyx_service.py`, `tests/test_penpot_compiler.py`, `tests/test_penpot_migration.py`, and `tests/test_provider_health.py`.
* Update `.env.example`, `docker-compose.yml`, `THIRD_PARTY_COMPONENTS.md`, `THIRD_PARTY_LICENSES/`, and `PENPOT_INTEGRATION.md` only after code paths and evidence exist.

---

### Task 1: Freeze the migration baseline and provider inventory

**Files:**
- Create: `artifacts/architecture-consolidation/provider-inventory.json`
- Create: `scripts/provider_inventory.py`
- Test: `tests/test_provider_inventory.py`

**Interfaces:**
- Produces a deterministic inventory of provider names, environment variables, direct call sites, and current status without reading secret values.

- [ ] **Step 1: Write the failing inventory test**

```python
def test_inventory_lists_direct_legacy_calls_without_secret_values(tmp_path):
    result = collect_inventory(Path("."))
    assert "OPENAI_API_KEY" in result["legacy_secrets"]
    assert "RESEND_API_KEY" in result["legacy_secrets"]
    assert "TWILIO_ACCOUNT_SID" in result["legacy_secrets"]
    assert all("sk-" not in json.dumps(result) for _ in [0])
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `pytest -q tests/test_provider_inventory.py::test_inventory_lists_direct_legacy_calls_without_secret_values`

Expected: FAIL because `scripts/provider_inventory.py` does not exist.

- [ ] **Step 3: Implement the inventory scanner**

Scan only source/config/test/docs paths, exclude generated bundles and artifacts, classify legacy/target variables, record file:line references, and redact values. Emit stable sorted JSON.

- [ ] **Step 4: Run focused tests and generate the artifact**

Run: `pytest -q tests/test_provider_inventory.py && python scripts/provider_inventory.py`

Expected: PASS and `artifacts/architecture-consolidation/provider-inventory.json` is created.

- [ ] **Step 5: Commit**

```bash
git add scripts/provider_inventory.py tests/test_provider_inventory.py artifacts/architecture-consolidation/provider-inventory.json
git commit -m "chore: record provider migration inventory"
```

### Task 2: Add the central settings and provider-neutral interfaces

**Files:**
- Create: `app/provider_services.py`
- Modify: `app/config.py`, `.env.example`, `docker-compose.yml`
- Test: `tests/test_provider_services.py`

**Interfaces:**
- `CorrelationContext(request_id: str, user_id: str|None, site_id: str|None, feature: str)`
- `AIService.complete(...)`, `AIService.stream(...)`
- `CommunicationService.send_email(...)`, `send_whatsapp(...)`, `send_sms(...)`, `verify_webhook(...)`
- `InfrastructureService.ensure_domain(...)`, `put_media(...)`, `verify_turnstile(...)`
- `PaymentService.create_order(...)`, `verify_webhook(...)`, `get_subscription(...)`

- [ ] **Step 1: Add contract tests**

Assert adapters expose the interfaces, settings names are present, no interface returns secret fields, and correlation context is attached to normalized results.

- [ ] **Step 2: Run focused tests and verify failure**

Run: `pytest -q tests/test_provider_services.py`

Expected: FAIL with missing module/classes.

- [ ] **Step 3: Implement protocols and settings aliases**

Add `ai_gateway_provider`, `ai_gateway_api_key`, `ai_gateway_base_url`, target model names, `telnyx_*`, `r2_*`, and `penpot_*` fields. Keep legacy fields read-only for migration. Centralize readiness validation in `validate_production_settings()`.

- [ ] **Step 4: Run focused tests and existing configuration tests**

Run: `pytest -q tests/test_provider_services.py tests/test_production_delivery_config.py tests/test_release_gaps.py`

Expected: existing tests remain green; new contract tests pass.

- [ ] **Step 5: Commit**

```bash
git add app/provider_services.py app/config.py .env.example docker-compose.yml tests/test_provider_services.py
git commit -m "feat: add provider-neutral service boundaries"
```

### Task 3: Implement Vercel AI Gateway and model registry

**Files:**
- Create: `app/ai_gateway.py`, `app/ai_service.py`
- Modify: `app/ai_models.py`, `app/ai_billing.py`
- Test: `tests/test_ai_gateway.py`

**Interfaces:**
- `VercelAIGatewayAdapter.complete(request: AIRequest) -> AIResponse`
- `AIService.resolve_model(feature: str, requested: str|None) -> AIModelConfig`
- `AIService.execute(request: AIRequest, reservation: ReservationContext) -> AIResponse`

- [ ] **Step 1: Write failing HTTP contract tests**

Mock the gateway endpoint and assert bearer auth, model resolution, tool payloads, streaming event normalization, usage extraction, timeout translation, retry budget, and no secret in raised errors.

- [ ] **Step 2: Run focused tests to verify failure**

Run: `pytest -q tests/test_ai_gateway.py`

Expected: FAIL because the adapter and service are missing.

- [ ] **Step 3: Implement adapter and registry**

Use HTTPX, a single configured base URL, bounded retries for retryable status codes, provider/model/correlation metadata, and an explicit fallback constrained by feature capability and cost ceiling.

- [ ] **Step 4: Run focused AI accounting tests**

Run: `pytest -q tests/test_ai_gateway.py tests/test_unified_ai_credits.py tests/test_credit_ai_production_hardening.py`

Expected: PASS with reserve → execute → settle/release preserved.

- [ ] **Step 5: Commit**

```bash
git add app/ai_gateway.py app/ai_service.py app/ai_models.py app/ai_billing.py tests/test_ai_gateway.py
git commit -m "feat: add hosted AI gateway service"
```

### Task 4: Migrate hosted AI call sites and remove direct model coupling

**Files:**
- Modify: `app/generate_v4.py`, `app/api_editor.py`, `app/api_operations.py`, `app/cms.py`, `app/studio_ai_operations.py`, `app/sales_assistant.py`
- Modify: `tests/test_release_gaps.py`, `tests/test_adversarial_security.py`, relevant AI tests
- Remove direct `api.openai.com`/provider URL calls only after replacement tests pass.

**Interfaces:**
- All call sites consume `AIService.execute()` and use the existing operation reservation IDs.

- [ ] **Step 1: Add call-site regression tests**

Monkeypatch `AIService` and assert each feature invokes it, preserves feature name/model/correlation, and never reads direct provider keys.

- [ ] **Step 2: Run focused tests and verify direct-call assertions fail**

Run: `pytest -q tests/test_ai_gateway.py tests/test_release_gaps.py tests/test_adversarial_security.py`

- [ ] **Step 3: Migrate one feature at a time**

Migrate website generation, editor/sitewide edits, SEO, CMS, and Sales Assistant. Keep a compatibility facade only where an existing test/import boundary requires it; the facade delegates to `AIService`.

- [ ] **Step 4: Scan and test**

Run: `rg -n --glob '!static/studio.js' --glob '!static/vendor/**' 'api\.openai\.com|api\.anthropic\.com|generativelanguage\.googleapis\.com' app` and the focused tests.

Expected: zero direct hosted-provider URLs in business modules and all focused tests pass.

- [ ] **Step 5: Commit**

```bash
git add app tests
git commit -m "refactor: route hosted AI through AIService"
```

### Task 5: Implement Telnyx CommunicationService and migrate email/WhatsApp

**Files:**
- Create: `app/telnyx_service.py`
- Modify: `app/email_service.py`, `app/providers.py`, notification jobs/routes, `app/config.py`
- Test: `tests/test_telnyx_service.py`, existing mail/lead tests

**Interfaces:**
- `TelnyxAdapter.send_email(...) -> DeliveryResult`
- `TelnyxAdapter.send_whatsapp(...) -> DeliveryResult`
- `TelnyxAdapter.send_sms(...) -> DeliveryResult`
- `TelnyxAdapter.verify_webhook(headers, raw_body) -> VerifiedEvent`

- [ ] **Step 1: Write failing Telnyx contract tests**

Mock email/WhatsApp/SMS HTTP calls and signature verification. Assert idempotency headers, normalized statuses, schema rejection, replay rejection, and no duplicate outbox event.

- [ ] **Step 2: Run focused tests to verify failure**

Run: `pytest -q tests/test_telnyx_service.py`

- [ ] **Step 3: Implement the adapter and durable event handling**

Use one `TELNYX_API_KEY`, sender settings, bounded retries, provider event IDs, and the existing outbox/queue. Keep local mode deterministic and production fail-closed when Telnyx is required but unconfigured.

- [ ] **Step 4: Switch email and WhatsApp facades**

Make `email_service` and `send_whatsapp` delegate through `CommunicationService`; preserve templates, unsubscribe behavior, lead bundle idempotency, and per-channel outcome persistence.

- [ ] **Step 5: Run focused communication/security tests and commit**

Run: `pytest -q tests/test_telnyx_service.py tests/test_auth_email_delivery_resilience.py tests/test_smtp_mail_center.py tests/test_adversarial_security.py`

```bash
git add app/telnyx_service.py app/email_service.py app/providers.py app/config.py tests/test_telnyx_service.py tests
git commit -m "feat: route communications through Telnyx service"
```

### Task 6: Wrap Cloudflare and Razorpay without changing product behavior

**Files:**
- Create: `app/infrastructure_service.py`, `app/payment_service.py`
- Modify: `app/providers.py`, custom-domain/media/Turnstile modules, billing routes/jobs
- Test: `tests/test_provider_services.py`, provider/billing tests

**Interfaces:**
- `CloudflareAdapter.ensure_hostname(...)`, `upload_media(...)`, `verify_turnstile(...)`
- `RazorpayAdapter.create_order(...)`, `create_subscription(...)`, `verify_signature(...)`, `verify_webhook(...)`

- [ ] **Step 1: Add facade contract tests**

Assert existing custom-domain, Turnstile, media, checkout, and webhook behavior reaches the interfaces and secrets are not serialized.

- [ ] **Step 2: Implement delegating adapters**

Move only provider-specific request/response code behind the adapters. Preserve existing transaction/idempotency and fail-closed validation.

- [ ] **Step 3: Run billing/domain/security tests and commit**

Run: `pytest -q tests/test_final_production_hardening.py tests/test_marketplace_support.py tests/test_turnstile_security.py tests/test_release_gaps.py`

```bash
git add app/infrastructure_service.py app/payment_service.py app/providers.py app tests
git commit -m "refactor: isolate Cloudflare and Razorpay providers"
```

### Task 7: Add Penpot manifest, mapping schema, and feature gate

**Files:**
- Create: `app/penpot_manifest.py`, `app/penpot_mapping.py`, `migrations/versions/<timestamp>_site_penpot_mapping.py`, `PENPOT_INTEGRATION.md`
- Modify: `app/config.py`, `/studio/{site_id}` route, `THIRD_PARTY_COMPONENTS.md`, `THIRD_PARTY_LICENSES/`
- Test: `tests/test_penpot_mapping.py`

**Interfaces:**
- `PenpotManifest.load() -> PenpotManifestRecord`
- `PenpotMappingService.get_for_site(site_id, user_id) -> SitePenpotMapping`
- `PenpotMappingService.authorize(site_id, user_id) -> SitePenpotMapping`

- [ ] **Step 1: Write failing mapping/feature-gate tests**

Assert legacy is the default, unknown engine values fail closed, tenant A cannot resolve tenant B's Penpot file, and missing upstream evidence is reported `BLOCKED_BY_EXTERNAL_ENVIRONMENT` rather than fabricated.

- [ ] **Step 2: Implement manifest and migration**

Add a versioned table with site ID, Penpot team/project/file IDs, design revision, compiled revision, migration version/status, timestamps, and rollback metadata. Record `source_copied=false` until an upstream checkout is actually verified.

- [ ] **Step 3: Add the `/studio/{site_id}` gate**

Authorize Zylora site ownership before resolving Penpot IDs. Route to existing Studio by default; expose the Penpot bridge only when explicitly enabled.

- [ ] **Step 4: Run mapping/tenant tests and commit**

Run: `pytest -q tests/test_penpot_mapping.py tests/test_penpot_adapter.py tests/test_agent_gateway.py`

```bash
git add app/penpot_manifest.py app/penpot_mapping.py migrations PENPOT_INTEGRATION.md THIRD_PARTY_COMPONENTS.md THIRD_PARTY_LICENSES tests
git commit -m "feat: add versioned Penpot site mapping gate"
```

### Task 8: Implement semantic metadata, deterministic compiler, and legacy migration

**Files:**
- Create: `app/penpot_compiler.py`, `app/penpot_migration.py`, `static/penpot-plugin/zylora-website-tools/manifest.json`, `static/penpot-plugin/zylora-website-tools/index.js`, `static/penpot-plugin/zylora-website-tools/schema.json`
- Test: `tests/test_penpot_compiler.py`, `tests/test_penpot_migration.py`

**Interfaces:**
- `compile_penpot_document(payload, *, site_id, expected_revision) -> CompileResult(document, warnings)`
- `migrate_site_document(document, *, site_id, mapping) -> MigrationResult`
- `rollback_migration(migration_id) -> RollbackResult`

- [ ] **Step 1: Write failing deterministic compiler tests**

Cover text, image, groups/frames, geometry, styles, z-order, responsive metadata, semantic plugin data, unsafe script rejection, page limit, stable IDs, and deterministic output hash.

- [ ] **Step 2: Implement compiler**

Translate only typed Penpot/plugin payloads into the existing validated SiteDocument schema. Reject executable values and unknown tenant/site IDs. Do not execute plugin JavaScript on the server.

- [ ] **Step 3: Implement repeatable importer/exporter bridge**

Convert legacy SiteDocument nodes to a Penpot transport payload with stable IDs and semantic metadata, record an audit/migration revision, compile back, compare normalized documents, and retain the original for rollback.

- [ ] **Step 4: Add the Zylora Website Tools plugin contract**

Expose typed actions for semantic components, page metadata, SEO, CMS, leads, appointments, and publish validation through authenticated Zylora APIs. The plugin receives no infrastructure credentials.

- [ ] **Step 5: Run compiler/migration tests and commit**

Run: `pytest -q tests/test_penpot_compiler.py tests/test_penpot_migration.py tests/test_penpot_adapter.py`

```bash
git add app/penpot_compiler.py app/penpot_migration.py static/penpot-plugin tests
git commit -m "feat: add deterministic Penpot compiler and migration"
```

### Task 9: Connect external AI edits to the Penpot-backed command boundary

**Files:**
- Modify: `app/agent_gateway.py`, `app/api_editor.py`, `app/studio_mutations.py`, `app/penpot_compiler.py`
- Test: `tests/test_agent_gateway.py`, `tests/test_penpot_compiler.py`, new continuity tests

**Interfaces:**
- `apply_external_edit(site_id, command, expected_revision, source) -> CompiledRevision`

- [ ] **Step 1: Add failing continuity tests**

Create/edit through the gateway, reopen Studio/Penpot bridge, compile, and assert text/geometry/semantic metadata match; stale revisions return `STALE_REVISION` and do not overwrite newer changes.

- [ ] **Step 2: Implement source-aware command routing**

When `STUDIO_ENGINE=penpot` and a mapping is active, apply the typed command to the design source/metadata boundary, compile to SiteDocument, and commit one CAS/revision/history event. Keep legacy routing unchanged when the flag is legacy.

- [ ] **Step 3: Run continuity/security tests and commit**

Run: `pytest -q tests/test_agent_gateway.py tests/test_agent_oauth.py tests/test_penpot_compiler.py tests/test_adversarial_security.py`

```bash
git add app/agent_gateway.py app/api_editor.py app/studio_mutations.py app/penpot_compiler.py tests
git commit -m "feat: keep external edits visible in Penpot-backed Studio"
```

### Task 10: Add provider health, usage, and alert surfaces

**Files:**
- Create: `app/provider_health.py`, `app/api_provider_health.py`, `static/provider-health.html`, `static/provider-health.js`
- Modify: `app/main.py`, `static/super-admin.html`, `static/super-admin.js`
- Test: `tests/test_provider_health.py`

**Interfaces:**
- `check_provider(name) -> ProviderHealth`
- `summarize_provider_usage(period) -> ProviderUsageSummary`

- [ ] **Step 1: Write failing admin authorization tests**

Assert SUPER_ADMIN can read non-secret health/usage summaries, USER cannot, provider timeout becomes `DEGRADED`, and response JSON never contains credential values.

- [ ] **Step 2: Implement bounded checks and cached summaries**

Use adapter-level safe checks, correlation IDs, short timeouts, cache last-known status, and queue expensive usage calls. Add configurable threshold records only if no existing equivalent table exists.

- [ ] **Step 3: Add the Super Admin view**

Render provider status, last checked time, failure reason category, usage totals, and alert state; never render keys or raw provider payloads.

- [ ] **Step 4: Run admin/security/browser checks and commit**

Run: `pytest -q tests/test_provider_health.py tests/test_role_dashboard_separation.py tests/test_adversarial_security.py`

```bash
git add app/provider_health.py app/api_provider_health.py static/provider-health.html static/provider-health.js static/super-admin.* tests
git commit -m "feat: add provider health and usage overview"
```

### Task 11: Remove obsolete provider secrets only after switch evidence

**Files:**
- Modify: `.env.example`, `docker-compose.yml`, `app/config.py`, deployment docs, provider inventory
- Test: `tests/test_release_gaps.py`, `tests/test_provider_inventory.py`, `scripts/security_pattern_scan.py`

- [ ] **Step 1: Run direct-call and secret inventory scans**

Run: `python scripts/provider_inventory.py` and `python scripts/security_pattern_scan.py`.

Expected: no production direct OpenAI/Resend/Twilio/Meta calls remain after Tasks 4–5; compatibility aliases are explicitly marked transitional.

- [ ] **Step 2: Update docs/config and remove only proven-unused variables**

Remove old variables from required production configuration only after all focused tests pass. Keep a migration note for operators and never print values.

- [ ] **Step 3: Run full configuration/security tests and commit**

Run: `pytest -q tests/test_release_gaps.py tests/test_production_delivery_config.py tests/test_adversarial_security.py`

```bash
git add .env.example docker-compose.yml app/config.py scripts/provider_inventory.py scripts/security_pattern_scan.py tests docs
git commit -m "chore: retire obsolete provider configuration"
```

### Task 12: Full certification and external-gate report

**Files:**
- Create: `artifacts/architecture-consolidation/final-certification.md`
- Modify: `docs/v1-20260915/verification-summary.md`, `PENPOT_INTEGRATION.md`

- [ ] **Step 1: Run focused migration tests**

Run provider abstraction, AI gateway, Telnyx, mapping, compiler, migration, health, gateway, OAuth, security, publishing, and page-limit tests.

- [ ] **Step 2: Run complete verification**

Run the full pytest suite on a fresh database, Python compileall, TypeScript check, Studio build, Chromium/Firefox/WebKit Studio and dashboard journeys, `git diff --check`, and available accessibility/SEO checks.

- [ ] **Step 3: Record exact evidence**

Report passed/failed/skipped/warnings/duration, browser matrices, performance, provider inventory before/after, API-key inventory, removed credentials, Penpot evidence, and every `BLOCKED_BY_EXTERNAL_ENVIRONMENT` item.

- [ ] **Step 4: Commit only certification artifacts**

```bash
git add artifacts/architecture-consolidation/final-certification.md docs/v1-20260915/verification-summary.md PENPOT_INTEGRATION.md
git commit -m "docs: record architecture consolidation certification"
```

