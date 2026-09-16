"""Canonical Studio mutation services.

All non-browser Studio writers use this module after translating their input
to typed operations.  The database row is only the persistence boundary: the
validated :class:`SiteDocument` remains the source of truth, and every write
uses the same revision CAS, revision history, and audit provenance.
"""

from __future__ import annotations

import json
import re
import secrets
from typing import Any
from uuid import uuid4

from sqlalchemy import text

from .db import now_iso
from .editor_state import create_revision, ensure_history, push_history
from .plans import MAX_PAGES_PER_SITE, get_plan
from .studio_ai_operations import apply_v4_operations
from .studio_document import Node, NodeGeometry, Page, SiteDocument, create_empty_document, validate_studio_document
from .templates import AI_RUNTIME_SLUG, BY_SLUG


class StudioMutationConflict(Exception):
    """Raised when the document changed after a caller read its base revision."""

    def __init__(self, current_revision: int | None = None):
        self.current_revision = current_revision
        super().__init__("The Studio revision changed; reload and retry.")


def _audit(db, *, user_id: str, site_id: str, action: str, metadata: dict[str, Any] | None = None) -> None:
    db.execute(
        text("""INSERT INTO audit_log(user_id,action,object_type,object_id,metadata,created_at)
               VALUES (:user_id,:action,'site',:site_id,:metadata,:created_at)"""),
        {
            "user_id": user_id,
            "action": action[:80],
            "site_id": site_id,
            "metadata": json.dumps(metadata or {}, separators=(",", ":")),
            "created_at": now_iso(),
        },
    )


def commit_document(
    db,
    *,
    site_id: str,
    user_id: str,
    document: SiteDocument,
    base_revision: int,
    kind: str,
    label: str,
    audit_metadata: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """Persist one validated canonical document with an exact revision CAS."""

    if base_revision < 0:
        raise ValueError("base_revision must be non-negative")
    if len(document.pages) > MAX_PAGES_PER_SITE:
        raise ValueError(f"Each website supports a maximum of {MAX_PAGES_PER_SITE} pages")
    before = db.execute(
        text("SELECT * FROM sites WHERE id=:site_id AND user_id=:user_id"),
        {"site_id": site_id, "user_id": user_id},
    ).mappings().first()
    if not before:
        raise ValueError("Site not found")
    ensure_history(db, dict(before), user_id)
    validated = validate_studio_document(document.model_dump(exclude_none=True))
    validated.revision = base_revision + 1
    updated = db.execute(
        text("""UPDATE sites SET studio_document_json=:document,studio_revision=:revision,
            document_schema_version=:schema_version,page_count=:page_count,
            document_version=document_version+1,updated_at=:updated
            WHERE id=:site_id AND user_id=:user_id AND studio_revision=:base_revision"""),
        {
            "document": validated.model_dump_json(exclude_none=True),
            "revision": validated.revision,
            "schema_version": validated.schemaVersion,
            "page_count": len(validated.pages),
            "updated": now_iso(),
            "site_id": site_id,
            "user_id": user_id,
            "base_revision": base_revision,
        },
    )
    if updated.rowcount != 1:
        current = db.execute(
            text("SELECT studio_revision FROM sites WHERE id=:site_id AND user_id=:user_id"),
            {"site_id": site_id, "user_id": user_id},
        ).scalar_one_or_none()
        raise StudioMutationConflict(int(current or 0))
    push_history(db, site_id, user_id, kind)
    revision = create_revision(db, site_id, user_id, kind, label)
    _audit(
        db,
        user_id=user_id,
        site_id=site_id,
        action=kind,
        metadata={"base_revision": base_revision, "new_revision": validated.revision, **(audit_metadata or {})},
    )
    return {"document": validated, "new_revision": validated.revision, "revision": revision}


def apply_operations(
    db,
    *,
    site_id: str,
    user_id: str,
    document: SiteDocument,
    operations: list[dict[str, Any]],
    base_revision: int,
    kind: str,
    label: str,
    audit_metadata: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """Apply bounded typed commands, then persist via :func:`commit_document`."""

    patched = apply_v4_operations(document, operations)
    return commit_document(
        db,
        site_id=site_id,
        user_id=user_id,
        document=patched,
        base_revision=base_revision,
        kind=kind,
        label=label,
        audit_metadata={"operations": operations, **(audit_metadata or {})},
    )


def preview_operations(document: SiteDocument, operations: list[dict[str, Any]]) -> SiteDocument:
    """Apply typed commands without persistence for dry-run clients."""

    return validate_studio_document(apply_v4_operations(document, operations).model_dump(exclude_none=True))


def add_page(document: SiteDocument, name: str, slug: str) -> tuple[SiteDocument, str]:
    """Add a bounded, empty page to a canonical document."""

    if len(document.pages) >= MAX_PAGES_PER_SITE:
        raise ValueError(f"Each website supports a maximum of {MAX_PAGES_PER_SITE} pages")
    clean_name = str(name or "").strip()
    clean_slug = str(slug or "").strip().strip("/").lower()
    if not clean_name or len(clean_name) > 80:
        raise ValueError("Page name is required and must be at most 80 characters.")
    if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", clean_slug) or clean_slug == "home":
        raise ValueError("Page slug must be lowercase kebab-case and cannot be home.")
    if any(page.slug == clean_slug for page in document.pages.values()):
        raise ValueError(f"A page with this slug already exists: {clean_slug}")
    page_id = f"page_{uuid4().hex[:16]}"
    root_id = f"root_{uuid4().hex[:16]}"
    section_id = f"section_{uuid4().hex[:16]}"
    root = Node(id=root_id, type="page", children=[section_id])
    section = Node(
        id=section_id,
        type="section",
        parentId=root_id,
        style={"css": {"position": "relative", "width": "1440px", "height": "810px", "minHeight": "810px", "overflow": "hidden", "background": "#ffffff"}},
        metadata={"displayName": "Section 1", "kind": "root-section"},
        geometry=NodeGeometry(x=0, y=0, width=1440, height=810, mode="flow"),
    )
    document.pages[page_id] = Page(id=page_id, slug=clean_slug, name=clean_name, rootNodeId=root_id, nodes={root_id: root, section_id: section})
    return validate_studio_document(document.model_dump(exclude_none=True)), page_id


def create_agent_site(
    db,
    *,
    user_id: str,
    name: str,
    description: str = "",
    audit_metadata: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """Create a hosted blank site through the canonical Studio boundary."""

    clean_name = str(name or "").strip()
    clean_description = str(description or "").strip()
    if len(clean_name) < 2 or len(clean_name) > 120:
        raise ValueError("name must be between 2 and 120 characters.")
    if len(clean_description) > 6000:
        raise ValueError("description must be at most 6000 characters.")
    user_row = db.execute(text("SELECT plan FROM users WHERE id=:user_id"), {"user_id": user_id}).mappings().first()
    draft_count = int(db.execute(text("SELECT count(*) FROM sites WHERE user_id=:user_id AND status='DRAFT'"), {"user_id": user_id}).scalar_one())
    site_limit = int(get_plan(str((user_row or {}).get("plan") or "FREE")).get("site_limit") or 1)
    if draft_count >= site_limit:
        raise ValueError(f"DRAFT_LIMIT_REACHED:{site_limit}:{draft_count}")
    site_id = str(uuid4())
    slug_base = re.sub(r"[^a-z0-9]+", "-", clean_name.lower()).strip("-")[:45] or "website"
    slug = f"{slug_base}-{secrets.token_hex(2)}"
    now = now_iso()
    document = create_empty_document()
    document.id = site_id
    accent = str(BY_SLUG.get(AI_RUNTIME_SLUG, {}).get("accent") or "#6f7bff")
    db.execute(
        text("""INSERT INTO sites(
            id,user_id,name,slug,template_slug,origin,status,business_name,tagline,description,accent,page_count,
            draft_structure_json,document_schema_version,document_version,generation_state,studio_document_json,studio_revision,updated_at,created_at
          ) VALUES (:id,:user_id,:name,:slug,:template_slug,'AGENT','DRAFT',:name,'',:description,:accent,1,
            '{}',:schema_version,1,'DRAFT',:document,1,:now,:now)"""),
        {
            "id": site_id,
            "user_id": user_id,
            "name": clean_name,
            "slug": slug,
            "template_slug": AI_RUNTIME_SLUG,
            "description": clean_description,
            "accent": accent,
            "schema_version": document.schemaVersion,
            "document": document.model_dump_json(exclude_none=True),
            "now": now,
        },
    )
    revision = create_revision(db, site_id, user_id, "AGENT_CREATE", "Created by external agent")
    _audit(db, user_id=user_id, site_id=site_id, action="AGENT_CREATE", metadata=audit_metadata)
    return {"site_id": site_id, "slug": slug, "revision": 1, "page_count": 1, "document": document, "revision_record": revision}
