# Production Release Checklist

Do not treat the generated ZIP as production-certified until every item below passes in the deployment environment.

- [ ] `python -m pytest -q --cov=apps.api.app --cov-report=term-missing --cov-fail-under=92`
- [ ] `python tools/audit_templates.py`
- [ ] `python tools/audit_frontend.py`
- [ ] `npm ci` in `apps/web`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] Browser E2E on Chrome/WebKit/Firefox where practical
- [ ] Axe WCAG AA scan on landing, dashboard, gallery, editor, managed flow and admin
- [ ] Real PostgreSQL migrations and rollback check
- [ ] Redis/Celery worker integration
- [ ] Durable S3/MinIO publication persistence across API/web/worker processes
- [ ] Auth and cross-tenant authorization review
- [ ] One-live-site concurrency test
- [ ] Appointment double-booking concurrency test
- [ ] ZIP export secret/path traversal review
- [ ] Custom-domain routing + SSL test
- [ ] Billing/plan entitlement integration
- [ ] Email delivery and appointment confirmation
- [ ] Chatbot tenant isolation and mandatory removal protection
- [ ] Proactive lead form 10-second/end-scroll behaviour
- [ ] SUPER_ADMIN audit and protected invariants
- [ ] Manual visual comparison against supplied dashboard and landing references
