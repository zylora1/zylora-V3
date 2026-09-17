# Zylora V4 migration audit

Renderer authority is explicit and persisted through migration `033_renderer_authority.sql`. Legacy snapshots remain available when V4 canary/V4 is selected, and the rollback regression passes. The full PostgreSQL migration rehearsal is blocked because no PostgreSQL service is available; SQLite test results are not substituted.
