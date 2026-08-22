import pytest

from apps.api.app.db import make_engine, normalize_database_url
from apps.worker.celery_app import celery_app
from scripts.run_migrations import validated_schema_name


def test_managed_postgres_url_uses_installed_psycopg_driver(monkeypatch):
    captured = {}

    def fake_create_engine(url, **kwargs):
        captured["url"] = url
        captured["kwargs"] = kwargs
        return object()

    monkeypatch.setattr("apps.api.app.db.create_engine", fake_create_engine)

    make_engine("postgresql://user:password@database.internal:5432/zylora")

    assert captured["url"] == (
        "postgresql+psycopg://user:password@database.internal:5432/zylora"
    )
    assert captured["kwargs"] == {"future": True}


def test_migration_url_uses_installed_psycopg_driver():
    assert normalize_database_url("postgres://host/db") == "postgresql+psycopg://host/db"


def test_explicit_database_driver_is_preserved(monkeypatch):
    captured = {}
    monkeypatch.setattr(
        "apps.api.app.db.create_engine",
        lambda url, **_kwargs: captured.setdefault("url", url),
    )

    make_engine("postgresql+psycopg://database.internal/zylora")

    assert captured["url"] == "postgresql+psycopg://database.internal/zylora"


def test_worker_imports_all_registered_tasks():
    assert "apps.worker.tasks" in celery_app.conf.include


def test_migration_schema_name_is_constrained():
    assert validated_schema_name("zylora_v3_staging") == "zylora_v3_staging"
    with pytest.raises(ValueError, match="safe PostgreSQL identifier"):
        validated_schema_name("public; DROP SCHEMA public")
