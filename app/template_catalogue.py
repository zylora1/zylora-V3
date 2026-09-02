from __future__ import annotations

from sqlalchemy import text

from .db import SessionLocal, now_iso
from .templates import BY_SLUG, TEMPLATES


def template_publication_state() -> dict[str, bool]:
    with SessionLocal() as db:
        rows = db.execute(text("SELECT slug,published FROM template_catalogue_state")).mappings().all()
    return {str(row["slug"]): bool(row["published"]) for row in rows}


def public_templates() -> list[dict]:
    state = template_publication_state()
    return [item for item in TEMPLATES if state.get(str(item["slug"]), True)]


def admin_templates() -> list[dict]:
    state = template_publication_state()
    return [{**item, "published": state.get(str(item["slug"]), True)} for item in TEMPLATES]


def set_template_published(slug: str, published: bool, admin_id: str) -> dict:
    if slug not in BY_SLUG or not any(str(item["slug"]) == slug for item in TEMPLATES):
        raise KeyError(slug)
    with SessionLocal.begin() as db:
        db.execute(text("""INSERT INTO template_catalogue_state(slug,published,updated_by,updated_at)
            VALUES (:s,:p,:u,:a)
            ON CONFLICT(slug) DO UPDATE SET published=:p,updated_by=:u,updated_at=:a"""),
            {"s": slug, "p": int(published), "u": admin_id, "a": now_iso()})
    return {"slug": slug, "published": bool(published)}
