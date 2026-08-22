"""Run Alembic after optionally preparing an isolated PostgreSQL schema."""

from __future__ import annotations

import os
import re

from alembic import command
from alembic.config import Config
from sqlalchemy import create_engine, text

from apps.api.app.db import normalize_database_url


def validated_schema_name(value: str) -> str:
    if not re.fullmatch(r"[a-z_][a-z0-9_]{0,62}", value):
        raise ValueError("DATABASE_SCHEMA must be a safe PostgreSQL identifier")
    return value


def prepare_schema() -> None:
    schema = os.getenv("DATABASE_SCHEMA", "").strip()
    if not schema:
        return
    schema = validated_schema_name(schema)
    admin_url = os.getenv("DATABASE_ADMIN_URL", "").strip()
    if not admin_url:
        raise RuntimeError("DATABASE_ADMIN_URL is required when DATABASE_SCHEMA is set")
    engine = create_engine(normalize_database_url(admin_url))
    with engine.begin() as connection:
        connection.execute(text(f'CREATE SCHEMA IF NOT EXISTS "{schema}"'))
    engine.dispose()


def main() -> None:
    prepare_schema()
    config = Config("alembic.ini")
    command.upgrade(config, "head")
    command.check(config)


if __name__ == "__main__":
    main()
