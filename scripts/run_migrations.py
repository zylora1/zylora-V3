"""Apply pending Zylora database migrations for release/pre-deploy jobs."""

from app.db import migrate


if __name__ == "__main__":
    migrate()
