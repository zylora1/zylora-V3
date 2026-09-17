# ZYLORA CRM — ARCHITECTURE & DATA SPECIFICATION

## 1. Executive Architectural Overview
Zylora CRM is an enterprise-grade customer relationship management engine embedded within the Zylora multi-tenant architecture. Built upon a unified tenant isolation model, it connects inbound website lead capture, AI Sales Assistant conversational intelligence, and public appointment scheduling directly into an actionable pipeline, contact timeline, and automation execution layer.

### System Principles:
- **Tenant Integrity**: Authoritative tenant is `user_id`. Every table strictly enforces `FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE`.
- **Operational Isolation (`CRM != CMS`)**: CRM operates independently of site publishing and CMS page layout rendering. CRM regressions cannot break public website generation, and CMS edits cannot mutate contact history.
- **Dual-Model Database Portability**: Full ANSI SQL compliance validated against SQLite for edge runtime and PostgreSQL for production cluster containerization (`test_runtime_sql_is_postgresql_portable` PASS).
- **Optimistic Concurrency Control (OCC)**: High-velocity pipeline operations employ atomic revision incrementing (`WHERE id=:id AND user_id=:u AND revision=:expected_revision`) returning `409 Conflict` on race conditions.

---

## 2. Relational Schema & Storage Model (26 Core Tables)
Defined in authoritative migration `migrations/034_crm_core.sql`:
1. `crm_contacts`: Core contact registry (`id`, `user_id`, `first_name`, `last_name`, `display_name`, `email`, `phone`, `company_name`, `lifecycle_stage`, `lead_score`, `custom_fields_json`, `is_archived`, `last_activity_at`, `created_at`, `updated_at`).
2. `crm_companies`: B2B account entities with domain, industry, size, and aggregate revenue tracking.
3. `crm_contact_companies`: Many-to-many junction between contacts and organizations.
4. `crm_leads`: Unprocessed and qualified visitor enquiries capturing UTM attribution, session tokens, and buying intent.
5. `crm_pipelines`: Configurable sales and onboarding funnels per tenant (`is_default`, `is_active`).
6. `crm_pipeline_stages`: Ordered stage progression with probability weighting and stage types (`LEAD`, `QUALIFIED`, `PROPOSAL`, `WON`, `LOST`).
7. `crm_deals`: Pipeline opportunities with monetary valuation, expected close dates, and atomic revision counters.
8. `crm_deal_stage_history`: Authoritative audit trail recording deal transition timestamps and actors.
9. `crm_tasks`: Follow-up reminders, calls, emails, and meetings linked to contacts and deals.
10. `crm_notes`: Pinned and chronological customer interaction documentation.
11. `crm_activities`: Unified chronological timeline recording all platform events (`LEAD_CAPTURED`, `STAGE_MOVED`, `TASK_COMPLETED`, `NOTE_ADDED`).
12. `crm_tags` & `crm_contact_tags`: Multi-faceted tagging taxonomy for audience segmentation.
13. `crm_custom_fields` & `crm_custom_field_values`: EAV extension schema supporting string, number, date, and select attributes.
14. `crm_segments`: Dynamic filter expressions evaluating contact attributes for targeted outreach.
15. `crm_saved_views`: User-curated table column orders, sorts, and filter configurations.
16. `crm_automations`: Event-driven trigger/condition/action state machine (`NEW_LEAD`, `SCORE_THRESHOLD`, `STAGE_CHANGED`).
17. `crm_automation_runs`: Comprehensive execution logs tracking idempotency keys, execution duration, and failure states.
18. `crm_notifications`: In-app notification dispatcher for sales reps and account owners.
19. `crm_audit_log`: Compliance audit trail recording administrative and data mutation actions.
20. `crm_sources`: Lead source taxonomy tracking marketing channel efficacy.

---

## 3. Ingestion & Data Flow Pipeline
```
[Public Website Form / AI Assistant / Booking Widget]
                      │
                      ▼
         /api/leads  OR  /api/appointments
                      │
                      ▼
             CRM Ingestion Hook
             (app/crm.py::ingest_lead_into_crm)
                      │
     ┌────────────────┴────────────────┐
     ▼                                 ▼
Normalize Identity              Score Lead & Intent
(E.164 phone + RFC5322 email)   (0-100 scale, HOT/WARM/COLD)
     │                                 │
     └────────────────┬────────────────┘
                      ▼
            Deduplicate Contact
   (Lookup by user_id + normalized email/phone)
                      │
             ┌────────┴────────┐
             ▼                 ▼
     [Existing Contact]   [New Contact]
     Update Score/Time    Create Record
             │                 │
             └────────┬────────┘
                      ▼
          Append crm_activities (Timeline)
                      │
                      ▼
          Evaluate crm_automations (Idempotent Run)
```

---

## 4. Concurrency & Optimistic Locking Engine
To prevent pipeline corruption when multiple sales representatives simultaneously drag or update the same deal:
```sql
UPDATE crm_deals
SET stage_id = :target_stage,
    status = :status,
    probability = :prob,
    revision = revision + 1,
    updated_at = :now
WHERE id = :deal_id
  AND user_id = :user_id
  AND revision = :expected_revision;
```
If `rowcount == 0`, a `ValueError("Concurrent update conflict")` is raised and transformed into `HTTP 409 Conflict`, prompting the frontend client to refresh its state without data loss.\n