# ZYLORA CRM — ZERO-TRUST SECURITY AUDIT

## 1. Audit Scope & Multi-Tenant Model
The multi-tenant isolation model of Zylora CRM treats every workspace as mutually hostile.
- **Tenant Anchor**: `user_id` authenticated via signed HTTP-only session cookie.
- **CSRF Defense**: Double-submit `X-CSRF-Token` required on all mutating verbs (POST, PATCH, PUT, DELETE).
- **IDOR Defense**: All SQL statements enforce `WHERE id = :id AND user_id = :u`. Foreign resource lookups unconditionally yield `404 Not Found`.

---

## 2. Attack Suite Execution (`tests/test_crm_security.py`)
Result: **8/8 PASSED (100%)**

### Attack Scenarios Verified:
1. **Cross-Tenant IDOR Matrix**: Attacker Tenant B probes Contact, Company, Pipeline, Deal, Task, Custom Field, Segment, Automation, and Timeline IDs owned by Victim Tenant A.
   - Result: All 18 endpoints returned `404 Not Found`. Zero data leakage.
2. **Cross-Tenant Relationship Linkage Attack**: Tenant B crafts requests attempting to attach Tenant A's contact_id, company_id, or pipeline_id to Tenant B's deals or tasks.
   - Result: Strict pre-validation rejects cross-tenant references with `404 Not Found`.
3. **Cross-Tenant Contact Merging Attack**: Tenant B initiates `/api/crm/contacts/merge` passing Tenant A's contact ID as secondary or primary.
   - Result: Operation rejected with `404 Not Found`. Victim contact remains intact and unarchived.
4. **Cross-Tenant Bulk Operations Isolation**: Tenant B supplies Tenant A contact IDs to `/api/crm/contacts/bulk`.
   - Result: Safe `WHERE user_id = :u AND id IN (...)` clause updates 0 rows. Victim records unaffected.
5. **Mass Assignment Protection**: Malicious payloads injecting `user_id`, `is_admin`, `revision`, or `created_at`.
   - Result: Pydantic schemas discard unauthorized fields. Explicit SQL parameters preserve immutable attributes.
6. **SQL Injection & Filter Tampering**: Payloads containing `' OR 1=1 --`, UNION SELECT, and unexpected sort keys in query parameters (`sort_by`, `search`, `op`).
   - Result: Parameterized SQLAlchemy queries safely escape all inputs. Whitelisted sort keys reject malicious expressions.
7. **CSRF Enforcement**: Mutating requests missing, manipulating, or submitting mismatched `X-CSRF-Token`.
   - Result: `403 Forbidden` returned on every mutating route.
8. **Unauthenticated Access Denial**: Direct HTTP probing without valid session cookies.
   - Result: `401 Unauthorized` on all private CRM endpoints.
9. **CSV Formula Injection Mitigation**: Sanitizer strips or single-quote prefixes any cell starting with `=`, `+`, `-`, `@`, `\t`, or `\r`.\n