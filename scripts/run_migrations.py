"""Apply pending Zylora database migrations for release/pre-deploy jobs."""

from app.config import settings
from app.db import migrate


if __name__ == "__main__":
    if settings.app_env == 'production' and (not settings.database_url or settings.database_url.startswith('sqlite')):
        raise RuntimeError(
            "CRITICAL CONFIGURATION ERROR: Production database migrations require PostgreSQL. "
            "DATABASE_URL cannot be missing or use SQLite in production."
        )
    migrate()
