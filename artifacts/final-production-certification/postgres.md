# PostgreSQL evidence

- Railway deployment metadata shows the production service ran `python -m scripts.run_migrations` before startup and reached SUCCESS.
- `DATABASE_URL` is present in Railway variables.
- `/api/health` returned HTTP 200 and recent startup logs show application startup complete.
- External direct DB introspection is environment-limited because the managed database is private.
- Authenticated user/site/lead/media lifecycle persistence could not be exercised in this pass because Turnstile prevented creating the required normal user.

Status: application-level PostgreSQL persistence is **UNVERIFIED for this run**; direct introspection is **ENVIRONMENT-LIMITED**.
