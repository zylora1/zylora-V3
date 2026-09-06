"""Zylora CRM REST API Router

Production endpoints for Contacts, Companies, Leads, Deals, Pipelines, Tasks,
Notes, Automations, Segments, Custom Fields, Timeline Activities, CSV Import/Export,
and Analytics.
"""

from __future__ import annotations
import json
import uuid
from typing import Any, Dict, List, Optional
from datetime import datetime, timezone

from fastapi import APIRouter, HTTPException, Request, Response
from fastapi.responses import PlainTextResponse
from pydantic import BaseModel, Field
from sqlalchemy import text

from .db import SessionLocal, now_iso
from .security import current_user, require_csrf
from .crm import (
    ensure_default_pipeline_and_sources,
    find_contact_by_identity,
    move_deal_stage,
    record_activity,
    run_automations,
    merge_contacts,
    export_contacts_csv,
    export_deals_csv,
    import_contacts_csv,
    get_crm_overview_analytics,
    normalize_email,
    normalize_phone,
)

router = APIRouter(prefix="/api/crm", tags=["CRM"])


def _u(request: Request, csrf: bool = False) -> dict:
    u = current_user(request)
    if csrf:
        require_csrf(request, u, request.headers.get('X-CSRF-Token'))
    return u


# -------------------------------------------------------------------------
# Schemas
# -------------------------------------------------------------------------

class ContactIn(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    display_name: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    whatsapp_number: Optional[str] = None
    company_name: Optional[str] = None
    job_title: Optional[str] = None
    location: Optional[str] = None
    website: Optional[str] = None
    lifecycle_stage: str = "LEAD"
    lead_status: str = "NEW"
    lead_score: int = 0
    source: str = "MANUAL"
    notes: Optional[str] = None
    custom_fields: Dict[str, Any] = Field(default_factory=dict)


class ContactUpdateIn(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    display_name: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    whatsapp_number: Optional[str] = None
    company_name: Optional[str] = None
    job_title: Optional[str] = None
    location: Optional[str] = None
    website: Optional[str] = None
    lifecycle_stage: Optional[str] = None
    lead_status: Optional[str] = None
    lead_score: Optional[int] = None
    assigned_owner_id: Optional[str] = None
    notes: Optional[str] = None
    custom_fields: Optional[Dict[str, Any]] = None


class CompanyIn(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    domain: Optional[str] = None
    industry: Optional[str] = None
    location: Optional[str] = None
    employee_size: Optional[str] = None
    website: Optional[str] = None
    lifecycle_stage: Optional[str] = "PROSPECT"
    assigned_owner_id: Optional[str] = None
    notes: Optional[str] = None
    custom_fields: Optional[Dict[str, Any]] = None


class CompanyUpdateIn(BaseModel):
    name: Optional[str] = None
    domain: Optional[str] = None
    industry: Optional[str] = None
    location: Optional[str] = None
    employee_size: Optional[str] = None
    website: Optional[str] = None
    lifecycle_stage: Optional[str] = None
    assigned_owner_id: Optional[str] = None
    notes: Optional[str] = None
    custom_fields: Optional[Dict[str, Any]] = None



class DealIn(BaseModel):
    name: Optional[str] = None
    title: Optional[str] = None
    pipeline_id: Optional[str] = None
    stage_id: Optional[str] = None
    contact_id: Optional[str] = None
    company_id: Optional[str] = None
    amount: float = Field(default=0.0, ge=0)
    currency: str = "INR"
    expected_close_date: Optional[str] = None
    probability: Optional[float] = 0.2
    source: str = "WEBSITE"
    notes: Optional[str] = None


class DealUpdateIn(BaseModel):
    name: Optional[str] = None
    title: Optional[str] = None
    amount: Optional[float] = None
    currency: Optional[str] = None
    probability: Optional[float] = None
    expected_close_date: Optional[str] = None
    notes: Optional[str] = None
    contact_id: Optional[str] = None
    company_id: Optional[str] = None
    stage_id: Optional[str] = None


class DealMoveIn(BaseModel):
    stage_id: str
    expected_revision: Optional[int] = None
    revision: Optional[int] = None


class PipelineIn(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    stages: Optional[List[Dict[str, Any]]] = None


class TaskIn(BaseModel):
    title: str = Field(min_length=1, max_length=200)
    description: Optional[str] = None
    contact_id: Optional[str] = None
    deal_id: Optional[str] = None
    due_date: Optional[str] = None
    task_type: str = "FOLLOW_UP"
    priority: str = "MEDIUM"


class NoteIn(BaseModel):
    content: str = Field(min_length=1, max_length=10000)
    contact_id: Optional[str] = None
    deal_id: Optional[str] = None
    lead_id: Optional[str] = None


class BulkContactsIn(BaseModel):
    contact_ids: List[str]
    action: str  # tag, assign_owner, change_lifecycle, archive, delete
    tag: Optional[str] = None
    owner_id: Optional[str] = None
    lifecycle: Optional[str] = None


class MergeContactsIn(BaseModel):
    primary_contact_id: str
    secondary_contact_id: str


class AutomationIn(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    description: Optional[str] = None
    trigger_type: str
    trigger_config: Dict[str, Any] = Field(default_factory=dict)
    conditions: List[Dict[str, Any]] = Field(default_factory=list)
    actions: List[Dict[str, Any]] = Field(default_factory=list)
    is_active: bool = True


class CustomFieldIn(BaseModel):
    resource_type: Optional[str] = None
    entity_type: Optional[str] = "CONTACT"
    field_name: Optional[str] = None
    field_key: Optional[str] = None
    field_label: Optional[str] = None
    name: Optional[str] = None
    field_type: str = "TEXT"
    options: Optional[List[str]] = None
    is_required: bool = False
    position: int = 0



class SegmentIn(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    description: Optional[str] = None
    rules: Optional[List[Dict[str, Any]]] = None
    filters: Optional[List[Dict[str, Any]]] = None



class CsvImportIn(BaseModel):
    csv_text: str


class LeadStatusIn(BaseModel):
    status: str


# -------------------------------------------------------------------------
# CRM Overview & Analytics
# -------------------------------------------------------------------------

@router.get("/overview")
@router.get("/analytics/overview")
@router.get("/analytics/conversion-funnel")
def get_overview(request: Request):
    u = _u(request)
    with SessionLocal.begin() as db:
        stats = get_crm_overview_analytics(db, u["id"])
    return stats


# -------------------------------------------------------------------------
# Contacts CRUD & Timeline
# -------------------------------------------------------------------------

@router.get("/contacts")
def list_contacts(
    request: Request,
    page: int = 1,
    page_size: int = 25,
    search: Optional[str] = None,
    lifecycle: Optional[str] = None,
    lifecycle_stage: Optional[str] = None,
    source: Optional[str] = None,
    sort_by: str = "created_at",
    sort_dir: str = "desc",
):
    u = _u(request)
    limit = min(max(page_size, 5), 100)
    offset = (max(page, 1) - 1) * limit

    sort_field = "created_at"
    if sort_by in ("display_name", "email", "lead_score", "last_activity_at", "company_name"):
        sort_field = sort_by
    order = "ASC" if str(sort_dir).lower() == "asc" else "DESC"

    where_clauses = ["user_id = :u", "is_archived = 0"]
    params: Dict[str, Any] = {"u": u["id"], "limit": limit, "offset": offset}

    target_lifecycle = lifecycle_stage or lifecycle
    if target_lifecycle:
        where_clauses.append("lifecycle_stage = :life")
        params["life"] = target_lifecycle
    if source:
        where_clauses.append("source = :src")
        params["src"] = source
    if search:
        where_clauses.append("(lower(display_name) LIKE :q OR lower(email) LIKE :q OR lower(company_name) LIKE :q OR phone LIKE :q)")
        params["q"] = f"%{search.strip().lower()}%"

    sql_where = " AND ".join(where_clauses)

    with SessionLocal() as db:
        total = db.execute(text(f"SELECT COUNT(*) FROM crm_contacts WHERE {sql_where}"), params).scalar_one()
        rows = db.execute(
            text(f"SELECT * FROM crm_contacts WHERE {sql_where} ORDER BY {sort_field} {order} LIMIT :limit OFFSET :offset"),
            params,
        ).mappings().all()

        c_ids = [r["id"] for r in rows]
        tags_by_contact: Dict[str, List[Dict[str, Any]]] = {cid: [] for cid in c_ids}
        if c_ids:
            in_clause = ",".join([f":cid_{i}" for i in range(len(c_ids))])
            tag_params = {f"cid_{i}": cid for i, cid in enumerate(c_ids)}
            tag_params["u"] = u["id"]
            tag_rows = db.execute(
                text(
                    f"""SELECT ct.contact_id, t.name, t.color
                        FROM crm_contact_tags ct
                        JOIN crm_tags t ON t.id = ct.tag_id
                        WHERE ct.user_id = :u AND ct.contact_id IN ({in_clause})"""
                ),
                tag_params,
            ).mappings().all()
            for tr in tag_rows:
                tags_by_contact[tr["contact_id"]].append({"name": tr["name"], "color": tr["color"]})

    items = []
    for r in rows:
        d = dict(r)
        d["tags"] = tags_by_contact.get(r["id"], [])
        try:
            d["custom_fields"] = json.loads(d.get("custom_fields_json") or "{}")
        except Exception:
            d["custom_fields"] = {}
        items.append(d)

    return {"items": items, "total": total, "page": page, "page_size": limit}


@router.post("/contacts")
def create_contact(payload: ContactIn, request: Request):
    u = _u(request, csrf=True)
    now = now_iso()
    cid = str(uuid.uuid4())

    dn = (payload.display_name or "").strip()
    if not dn:
        dn = f"{payload.first_name or ''} {payload.last_name or ''}".strip() or payload.email or "Unnamed Contact"

    with SessionLocal.begin() as db:
        existing = find_contact_by_identity(db, u["id"], payload.email, payload.phone)
        if existing:
            raise HTTPException(400, "A contact with this email or phone already exists")

        db.execute(
            text(
                """INSERT INTO crm_contacts(
                       id, user_id, first_name, last_name, display_name,
                       email, phone, whatsapp_number, company_name, job_title,
                       location, website, lifecycle_stage, lead_status, lead_score,
                       source, notes, custom_fields_json, last_activity_at, is_archived, created_at, updated_at
                   ) VALUES (
                       :id, :u, :fn, :ln, :dn,
                       :e, :p, :wa, :comp, :jt,
                       :loc, :web, :life, :st, :score,
                       :src, :notes, :cf, :now, 0, :now, :now
                   )"""
            ),
            {
                "id": cid,
                "u": u["id"],
                "fn": payload.first_name,
                "ln": payload.last_name,
                "dn": dn,
                "e": normalize_email(payload.email),
                "p": normalize_phone(payload.phone),
                "wa": normalize_phone(payload.whatsapp_number),
                "comp": payload.company_name,
                "jt": payload.job_title,
                "loc": payload.location,
                "web": payload.website,
                "life": payload.lifecycle_stage,
                "st": payload.lead_status,
                "score": payload.lead_score,
                "src": payload.source,
                "notes": payload.notes,
                "cf": json.dumps(payload.custom_fields),
                "now": now,
            },
        )

        record_activity(
            db,
            user_id=u["id"],
            contact_id=cid,
            activity_type="CONTACT_CREATED",
            actor_id=u["id"],
            actor_name=u.get("name", "User"),
            summary=f"Contact created: {dn}",
        )

    return {"id": cid, "display_name": dn, "message": "Contact created successfully"}


@router.get("/contacts/{contact_id}")
def get_contact_detail(contact_id: str, request: Request):
    u = _u(request)
    with SessionLocal() as db:
        c = db.execute(
            text("SELECT * FROM crm_contacts WHERE id=:id AND user_id=:u AND is_archived=0"),
            {"id": contact_id, "u": u["id"]},
        ).mappings().first()

        if not c:
            raise HTTPException(404, "Contact not found")

        contact_dict = dict(c)

        tags = db.execute(
            text(
                """SELECT t.id, t.name, t.color
                   FROM crm_contact_tags ct
                   JOIN crm_tags t ON t.id = ct.tag_id
                   WHERE ct.contact_id=:cid AND ct.user_id=:u"""
            ),
            {"cid": contact_id, "u": u["id"]},
        ).mappings().all()
        contact_dict["tags"] = [dict(t) for t in tags]

        deals = db.execute(
            text(
                """SELECT d.*, s.name AS stage_name, s.color AS stage_color
                   FROM crm_deals d
                   LEFT JOIN crm_pipeline_stages s ON s.id = d.stage_id
                   WHERE d.contact_id=:cid AND d.user_id=:u AND d.is_archived=0
                   ORDER BY d.created_at DESC"""
            ),
            {"cid": contact_id, "u": u["id"]},
        ).mappings().all()
        contact_dict["deals"] = [dict(d) for d in deals]

        tasks = db.execute(
            text(
                """SELECT * FROM crm_tasks
                   WHERE contact_id=:cid AND user_id=:u
                   ORDER BY due_date ASC"""
            ),
            {"cid": contact_id, "u": u["id"]},
        ).mappings().all()
        contact_dict["tasks"] = [dict(t) for t in tasks]

        notes = db.execute(
            text(
                """SELECT * FROM crm_notes
                   WHERE contact_id=:cid AND user_id=:u
                   ORDER BY created_at DESC"""
            ),
            {"cid": contact_id, "u": u["id"]},
        ).mappings().all()
        contact_dict["notes"] = [dict(n) for n in notes]

    return contact_dict


@router.patch("/contacts/{contact_id}")
def update_contact(contact_id: str, payload: ContactUpdateIn, request: Request):
    u = _u(request, csrf=True)
    now = now_iso()

    with SessionLocal.begin() as db:
        c = db.execute(
            text("SELECT * FROM crm_contacts WHERE id=:id AND user_id=:u AND is_archived=0"),
            {"id": contact_id, "u": u["id"]},
        ).mappings().first()
        if not c:
            raise HTTPException(404, "Contact not found")

        updates = ["updated_at = :now"]
        params: Dict[str, Any] = {"now": now, "id": contact_id, "u": u["id"]}

        data = payload.model_dump(exclude_unset=True)
        for k, v in data.items():
            if k == "custom_fields" and v is not None:
                updates.append("custom_fields_json = :cf")
                params["cf"] = json.dumps(v)
            elif k == "email":
                updates.append("email = :e")
                params["e"] = normalize_email(v)
            elif k in ("phone", "whatsapp_number"):
                updates.append(f"{k} = :{k}")
                params[k] = normalize_phone(v)
            elif v is not None:
                updates.append(f"{k} = :{k}")
                params[k] = v

        db.execute(
            text(f"UPDATE crm_contacts SET {', '.join(updates)} WHERE id=:id AND user_id=:u"),
            params,
        )

        record_activity(
            db,
            user_id=u["id"],
            contact_id=contact_id,
            activity_type="PROPERTY_CHANGED",
            actor_id=u["id"],
            actor_name=u.get("name", "User"),
            summary="Contact properties updated",
        )

    return {"message": "Contact updated successfully"}


@router.delete("/contacts/{contact_id}")
def delete_contact(contact_id: str, request: Request):
    u = _u(request, csrf=True)
    now = now_iso()
    with SessionLocal.begin() as db:
        res = db.execute(
            text("UPDATE crm_contacts SET is_archived=1, updated_at=:now WHERE id=:id AND user_id=:u AND is_archived=0"),
            {"now": now, "id": contact_id, "u": u["id"]},
        )
        if res.rowcount == 0:
            raise HTTPException(404, "Contact not found")
    return {"message": "Contact archived successfully"}


@router.get("/contacts/{contact_id}/timeline")
def get_contact_timeline(contact_id: str, request: Request):
    u = _u(request)
    with SessionLocal() as db:
        contact_exists = db.execute(
            text("SELECT 1 FROM crm_contacts WHERE id=:id AND user_id=:u AND is_archived=0"),
            {"id": contact_id, "u": u["id"]},
        ).first()
        if not contact_exists:
            raise HTTPException(404, "Contact not found")

        activities = db.execute(
            text(
                """SELECT * FROM crm_activities
                   WHERE contact_id=:cid AND user_id=:u
                   ORDER BY created_at DESC, id DESC LIMIT 100"""
            ),
            {"cid": contact_id, "u": u["id"]},
        ).mappings().all()

    items = []
    for a in activities:
        d = dict(a)
        try:
            d["metadata"] = json.loads(d.get("metadata_json") or "{}")
        except Exception:
            d["metadata"] = {}
        items.append(d)

    return {"timeline": items, "activities": items, "items": items}


@router.post("/contacts/{contact_id}/notes")
def add_contact_note(contact_id: str, payload: NoteIn, request: Request):
    u = _u(request, csrf=True)
    now = now_iso()
    nid = str(uuid.uuid4())

    with SessionLocal.begin() as db:
        c = db.execute(
            text("SELECT id FROM crm_contacts WHERE id=:id AND user_id=:u AND is_archived=0"),
            {"id": contact_id, "u": u["id"]},
        ).first()
        if not c:
            raise HTTPException(404, "Contact not found")

        db.execute(
            text(
                """INSERT INTO crm_notes(id, user_id, contact_id, content, author_id, author_name, created_at, updated_at)
                   VALUES (:id, :u, :cid, :cnt, :aid, :an, :now, :now)"""
            ),
            {
                "id": nid,
                "u": u["id"],
                "cid": contact_id,
                "cnt": payload.content,
                "aid": u["id"],
                "an": u.get("name", "User"),
                "now": now,
            },
        )

        record_activity(
            db,
            user_id=u["id"],
            contact_id=contact_id,
            activity_type="NOTE_ADDED",
            actor_id=u["id"],
            actor_name=u.get("name", "User"),
            summary=f"Note added: {payload.content[:60]}...",
        )

    return {"id": nid, "message": "Note added successfully"}


@router.post("/contacts/{contact_id}/tasks")
def add_contact_task(contact_id: str, payload: TaskIn, request: Request):
    u = _u(request, csrf=True)
    now = now_iso()
    tid = str(uuid.uuid4())
    due = payload.due_date or now

    with SessionLocal.begin() as db:
        c = db.execute(
            text("SELECT id FROM crm_contacts WHERE id=:id AND user_id=:u AND is_archived=0"),
            {"id": contact_id, "u": u["id"]},
        ).first()
        if not c:
            raise HTTPException(404, "Contact not found")

        db.execute(
            text(
                """INSERT INTO crm_tasks(
                       id, user_id, contact_id, title, description,
                       task_type, priority, due_date, status, created_at, updated_at
                   ) VALUES (
                       :id, :u, :cid, :title, :desc,
                       :tt, :prio, :due, 'PENDING', :now, :now
                   )"""
            ),
            {
                "id": tid,
                "u": u["id"],
                "cid": contact_id,
                "title": payload.title,
                "desc": payload.description,
                "tt": payload.task_type,
                "prio": payload.priority,
                "due": due,
                "now": now,
            },
        )

        record_activity(
            db,
            user_id=u["id"],
            contact_id=contact_id,
            activity_type="TASK_CREATED",
            actor_id=u["id"],
            actor_name=u.get("name", "User"),
            summary=f"Task scheduled: {payload.title}",
        )

    return {"id": tid, "message": "Task created successfully"}


@router.post("/contacts/bulk")
def bulk_contact_action(payload: BulkContactsIn, request: Request):
    u = _u(request, csrf=True)
    now = now_iso()

    with SessionLocal.begin() as db:
        if not payload.contact_ids:
            return {"message": "No contacts provided"}

        in_clause = ",".join([f":cid_{i}" for i in range(len(payload.contact_ids))])
        params: Dict[str, Any] = {f"cid_{i}": cid for i, cid in enumerate(payload.contact_ids)}
        params["u"] = u["id"]
        valid_ids = [
            r[0] for r in db.execute(
                text(f"SELECT id FROM crm_contacts WHERE user_id=:u AND id IN ({in_clause}) AND is_archived=0"),
                params
            ).fetchall()
        ]

        if not valid_ids:
            return {"message": "No valid contacts found in workspace"}

        if payload.action == "tag" and payload.tag:
            tag = db.execute(
                text("SELECT id FROM crm_tags WHERE user_id=:u AND lower(name)=lower(:n)"),
                {"u": u["id"], "n": payload.tag.strip()},
            ).mappings().first()
            if not tag:
                tid = str(uuid.uuid4())
                db.execute(
                    text("INSERT INTO crm_tags(id, user_id, name, created_at) VALUES (:id, :u, :n, :now)"),
                    {"id": tid, "u": u["id"], "n": payload.tag.strip(), "now": now},
                )
            else:
                tid = tag["id"]

            for cid in valid_ids:
                ct_exists = db.execute(
                    text("SELECT 1 FROM crm_contact_tags WHERE user_id=:u AND contact_id=:c AND tag_id=:t"),
                    {"u": u["id"], "c": cid, "t": tid},
                ).first()
                if not ct_exists:
                    db.execute(
                        text("INSERT INTO crm_contact_tags(id, user_id, contact_id, tag_id, created_at) VALUES (:id, :u, :c, :t, :now)"),
                        {"id": str(uuid.uuid4()), "u": u["id"], "c": cid, "t": tid, "now": now},
                    )

        elif payload.action == "change_lifecycle" and payload.lifecycle:
            valid_in = ",".join([f":vid_{i}" for i in range(len(valid_ids))])
            v_params = {f"vid_{i}": cid for i, cid in enumerate(valid_ids)}
            v_params.update({"u": u["id"], "life": payload.lifecycle, "now": now})
            db.execute(
                text(f"UPDATE crm_contacts SET lifecycle_stage=:life, updated_at=:now WHERE user_id=:u AND id IN ({valid_in})"),
                v_params,
            )

        elif payload.action == "archive":
            valid_in = ",".join([f":vid_{i}" for i in range(len(valid_ids))])
            v_params = {f"vid_{i}": cid for i, cid in enumerate(valid_ids)}
            v_params.update({"u": u["id"], "now": now})
            db.execute(
                text(f"UPDATE crm_contacts SET is_archived=1, updated_at=:now WHERE user_id=:u AND id IN ({valid_in})"),
                v_params,
            )

    return {"message": f"Bulk action '{payload.action}' applied to {len(valid_ids)} contacts"}


@router.post("/contacts/merge")
def merge_contacts_endpoint(payload: MergeContactsIn, request: Request):
    u = _u(request, csrf=True)
    with SessionLocal.begin() as db:
        c1 = db.execute(
            text("SELECT id FROM crm_contacts WHERE id=:id AND user_id=:u AND is_archived=0"),
            {"id": payload.primary_contact_id, "u": u["id"]},
        ).first()
        c2 = db.execute(
            text("SELECT id FROM crm_contacts WHERE id=:id AND user_id=:u AND is_archived=0"),
            {"id": payload.secondary_contact_id, "u": u["id"]},
        ).first()
        if not c1 or not c2:
            raise HTTPException(404, "Both contacts must exist and belong to the active workspace")

        try:
            res = merge_contacts(db, u["id"], payload.primary_contact_id, payload.secondary_contact_id, actor_id=u["id"])
        except ValueError as e:
            raise HTTPException(400, str(e))
    return res


# -------------------------------------------------------------------------
# Companies CRUD
# -------------------------------------------------------------------------

@router.get("/companies")
def list_companies(
    request: Request,
    page: int = 1,
    page_size: int = 25,
    search: Optional[str] = None,
    sort_by: str = "created_at",
    sort_dir: str = "desc",
):
    u = _u(request)
    limit = min(max(page_size, 5), 100)
    offset = (max(page, 1) - 1) * limit

    sort_field = "created_at"
    if sort_by in ("name", "domain", "industry", "annual_revenue", "created_at"):
        sort_field = sort_by
    order = "ASC" if str(sort_dir).lower() == "asc" else "DESC"

    where = ["user_id = :u", "is_archived = 0"]
    params: Dict[str, Any] = {"u": u["id"], "limit": limit, "offset": offset}

    if search:
        where.append("(lower(name) LIKE :q OR lower(domain) LIKE :q OR lower(industry) LIKE :q)")
        params["q"] = f"%{search.strip().lower()}%"

    sql_where = " AND ".join(where)

    with SessionLocal() as db:
        total = db.execute(text(f"SELECT COUNT(*) FROM crm_companies WHERE {sql_where}"), params).scalar_one()
        rows = db.execute(
            text(f"SELECT * FROM crm_companies WHERE {sql_where} ORDER BY {sort_field} {order} LIMIT :limit OFFSET :offset"),
            params,
        ).mappings().all()

        comp_ids = [r["id"] for r in rows]
        contact_counts: Dict[str, int] = {cid: 0 for cid in comp_ids}
        deal_counts: Dict[str, int] = {cid: 0 for cid in comp_ids}

        if comp_ids:
            in_clause = ",".join([f":cid_{i}" for i in range(len(comp_ids))])
            cnt_params = {f"cid_{i}": cid for i, cid in enumerate(comp_ids)}
            cnt_params["u"] = u["id"]

            cc_rows = db.execute(
                text(f"SELECT company_id, COUNT(*) FROM crm_deals WHERE user_id=:u AND company_id IN ({in_clause}) AND is_archived=0 GROUP BY company_id"),
                cnt_params,
            ).fetchall()
            for cr in cc_rows:
                deal_counts[cr[0]] = cr[1]

    items = []
    for r in rows:
        d = dict(r)
        d["deals_count"] = deal_counts.get(r["id"], 0)
        items.append(d)

    return {"items": items, "total": total, "page": page, "page_size": limit}


@router.post("/companies")
def create_company(payload: CompanyIn, request: Request):
    u = _u(request, csrf=True)
    now = now_iso()
    cid = str(uuid.uuid4())

    with SessionLocal.begin() as db:
        db.execute(
            text(
                """INSERT INTO crm_companies(
                       id, user_id, name, domain, industry, location, employee_size,
                       website, assigned_owner_id, lifecycle_stage, notes, custom_fields_json,
                       is_archived, created_at, updated_at
                   ) VALUES (
                       :id, :u, :n, :dom, :ind, :loc, :emp,
                       :web, :owner, :stage, :notes, :cf,
                       0, :now, :now
                   )"""
            ),
            {
                "id": cid,
                "u": u["id"],
                "n": payload.name.strip(),
                "dom": (payload.domain or "").strip().lower() or None,
                "ind": payload.industry,
                "loc": payload.location,
                "emp": payload.employee_size,
                "web": payload.website,
                "owner": payload.assigned_owner_id,
                "stage": payload.lifecycle_stage or "PROSPECT",
                "notes": payload.notes,
                "cf": json.dumps(payload.custom_fields or {}),
                "now": now,
            },
        )

        record_activity(
            db,
            user_id=u["id"],
            company_id=cid,
            activity_type="COMPANY_CREATED",
            actor_id=u["id"],
            actor_name=u.get("name", "User"),
            summary=f"Company profile created: {payload.name}",
        )

    return {"id": cid, "name": payload.name, "message": "Company created successfully"}


@router.get("/companies/{company_id}")
def get_company(company_id: str, request: Request):
    u = _u(request)
    with SessionLocal() as db:
        comp = db.execute(
            text("SELECT * FROM crm_companies WHERE id=:id AND user_id=:u AND is_archived=0"),
            {"id": company_id, "u": u["id"]},
        ).mappings().first()
        if not comp:
            raise HTTPException(404, "Company not found")

        cd = dict(comp)

        deals = db.execute(
            text("SELECT * FROM crm_deals WHERE company_id=:cid AND user_id=:u AND is_archived=0 ORDER BY created_at DESC"),
            {"cid": company_id, "u": u["id"]},
        ).mappings().all()
        cd["deals"] = [dict(d) for d in deals]

        contacts = db.execute(
            text("SELECT * FROM crm_contacts WHERE company_name=:cn AND user_id=:u AND is_archived=0 ORDER BY created_at DESC"),
            {"cn": comp["name"], "u": u["id"]},
        ).mappings().all()
        cd["contacts"] = [dict(c) for c in contacts]

    return cd


@router.patch("/companies/{company_id}")
def update_company(company_id: str, payload: CompanyUpdateIn, request: Request):
    u = _u(request, csrf=True)
    now = now_iso()

    with SessionLocal.begin() as db:
        comp = db.execute(
            text("SELECT id FROM crm_companies WHERE id=:id AND user_id=:u AND is_archived=0"),
            {"id": company_id, "u": u["id"]},
        ).first()
        if not comp:
            raise HTTPException(404, "Company not found")

        updates = ["updated_at = :now"]
        params: Dict[str, Any] = {"now": now, "id": company_id, "u": u["id"]}

        data = payload.model_dump(exclude_unset=True)
        for k, v in data.items():
            if v is not None:
                if k == "custom_fields":
                    updates.append("custom_fields_json = :custom_fields_json")
                    params["custom_fields_json"] = json.dumps(v)
                else:
                    updates.append(f"{k} = :{k}")
                    params[k] = v

        db.execute(
            text(f"UPDATE crm_companies SET {', '.join(updates)} WHERE id=:id AND user_id=:u"),
            params,
        )

    return {"message": "Company updated successfully"}


@router.delete("/companies/{company_id}")
def delete_company(company_id: str, request: Request):
    u = _u(request, csrf=True)
    now = now_iso()
    with SessionLocal.begin() as db:
        res = db.execute(
            text("UPDATE crm_companies SET is_archived=1, updated_at=:now WHERE id=:id AND user_id=:u AND is_archived=0"),
            {"now": now, "id": company_id, "u": u["id"]},
        )
        if res.rowcount == 0:
            raise HTTPException(404, "Company not found")
    return {"message": "Company archived successfully"}


# -------------------------------------------------------------------------
# Deals & Pipelines
# -------------------------------------------------------------------------

@router.get("/pipelines")
def get_pipelines(request: Request):
    u = _u(request)
    with SessionLocal.begin() as db:
        p_id = ensure_default_pipeline_and_sources(db, u["id"])
        pipelines = db.execute(
            text("SELECT * FROM crm_pipelines WHERE user_id=:u AND is_active=1 ORDER BY position ASC"),
            {"u": u["id"]},
        ).mappings().all()

        stages = db.execute(
            text("SELECT * FROM crm_pipeline_stages WHERE user_id=:u ORDER BY stage_order ASC"),
            {"u": u["id"]},
        ).mappings().all()

    stages_by_pipe: Dict[str, List[Dict[str, Any]]] = {}
    for s in stages:
        pid = s["pipeline_id"]
        stages_by_pipe.setdefault(pid, []).append(dict(s))

    result = []
    for p in pipelines:
        pd = dict(p)
        pd["stages"] = stages_by_pipe.get(p["id"], [])
        result.append(pd)

    return {"pipelines": result, "items": result}


@router.post("/pipelines")
def create_pipeline(payload: PipelineIn, request: Request):
    u = _u(request, csrf=True)
    now = now_iso()
    pid = str(uuid.uuid4())

    with SessionLocal.begin() as db:
        db.execute(
            text("INSERT INTO crm_pipelines(id, user_id, name, is_default, is_active, position, created_at, updated_at) VALUES (:id, :u, :n, 0, 1, 10, :now, :now)"),
            {"id": pid, "u": u["id"], "n": payload.name.strip(), "now": now},
        )

        stages = payload.stages or [
            {"name": "Discovery", "probability": 0.2, "color": "#6366f1", "stage_type": "OPEN"},
            {"name": "Proposal", "probability": 0.5, "color": "#f59e0b", "stage_type": "OPEN"},
            {"name": "Won", "probability": 1.0, "color": "#10b981", "stage_type": "WON"},
            {"name": "Lost", "probability": 0.0, "color": "#ef4444", "stage_type": "LOST"},
        ]

        for idx, stg in enumerate(stages):
            db.execute(
                text(
                    """INSERT INTO crm_pipeline_stages(id, user_id, pipeline_id, name, stage_order, probability, color, stage_type, created_at, updated_at)
                       VALUES (:id, :u, :p, :n, :ord, :prob, :col, :st, :now, :now)"""
                ),
                {
                    "id": str(uuid.uuid4()),
                    "u": u["id"],
                    "p": pid,
                    "n": stg["name"],
                    "ord": idx + 1,
                    "prob": stg.get("probability", 0.2),
                    "col": stg.get("color", "#6366f1"),
                    "st": stg.get("stage_type", "OPEN"),
                    "now": now,
                },
            )

    return {"id": pid, "name": payload.name, "message": "Pipeline created successfully"}


@router.get("/pipelines/{pipeline_id}")
def get_pipeline(pipeline_id: str, request: Request):
    u = _u(request)
    with SessionLocal() as db:
        pipe = db.execute(
            text("SELECT * FROM crm_pipelines WHERE id=:id AND user_id=:u AND is_active=1"),
            {"id": pipeline_id, "u": u["id"]},
        ).mappings().first()
        if not pipe:
            raise HTTPException(404, "Pipeline not found")

        stages = db.execute(
            text("SELECT * FROM crm_pipeline_stages WHERE pipeline_id=:pid AND user_id=:u ORDER BY stage_order ASC"),
            {"pid": pipeline_id, "u": u["id"]},
        ).mappings().all()

        pd = dict(pipe)
        pd["stages"] = [dict(s) for s in stages]

    return pd


@router.delete("/pipelines/{pipeline_id}")
def delete_pipeline(pipeline_id: str, request: Request):
    u = _u(request, csrf=True)
    with SessionLocal.begin() as db:
        pipe = db.execute(
            text("SELECT is_default FROM crm_pipelines WHERE id=:id AND user_id=:u"),
            {"id": pipeline_id, "u": u["id"]},
        ).mappings().first()
        if not pipe:
            raise HTTPException(404, "Pipeline not found")
        if pipe["is_default"]:
            raise HTTPException(400, "Cannot delete the default sales pipeline")

        db.execute(
            text("UPDATE crm_pipelines SET is_active=0, updated_at=:now WHERE id=:id AND user_id=:u"),
            {"id": pipeline_id, "u": u["id"], "now": now_iso()},
        )
    return {"message": "Pipeline deactivated"}


@router.get("/deals")
def list_deals(request: Request, pipeline_id: Optional[str] = None):
    u = _u(request)
    with SessionLocal.begin() as db:
        p_id = ensure_default_pipeline_and_sources(db, u["id"])
        active_pipeline = pipeline_id or p_id

        # Verify pipeline belongs to tenant
        pipe = db.execute(
            text("SELECT 1 FROM crm_pipelines WHERE id=:p AND user_id=:u AND is_active=1"),
            {"p": active_pipeline, "u": u["id"]},
        ).first()
        if not pipe:
            active_pipeline = p_id

        stages = db.execute(
            text("SELECT * FROM crm_pipeline_stages WHERE user_id=:u AND pipeline_id=:p ORDER BY stage_order ASC"),
            {"u": u["id"], "p": active_pipeline},
        ).mappings().all()

        deals = db.execute(
            text(
                """SELECT d.*, c.display_name AS contact_name, c.email AS contact_email, comp.name AS company_name
                   FROM crm_deals d
                   LEFT JOIN crm_contacts c ON c.id = d.contact_id
                   LEFT JOIN crm_companies comp ON comp.id = d.company_id
                   WHERE d.user_id=:u AND d.pipeline_id=:p AND d.is_archived=0
                   ORDER BY d.created_at DESC"""
            ),
            {"u": u["id"], "p": active_pipeline},
        ).mappings().all()

    deals_by_stage: Dict[str, List[Dict[str, Any]]] = {s["id"]: [] for s in stages}
    for d in deals:
        sid = d["stage_id"]
        if sid in deals_by_stage:
            deals_by_stage[sid].append(dict(d))

    stage_columns = []
    for s in stages:
        sd = dict(s)
        stage_deals = deals_by_stage.get(s["id"], [])
        sd["deals"] = stage_deals
        sd["total_value"] = sum(float(d.get("amount") or 0) for d in stage_deals)
        sd["count"] = len(stage_deals)
        stage_columns.append(sd)

    return {
        "pipeline_id": active_pipeline,
        "stages": stage_columns,
        "items": [dict(d) for d in deals],
        "total": len(deals),
    }


@router.post("/deals")
def create_deal(payload: DealIn, request: Request):
    u = _u(request, csrf=True)
    now = now_iso()
    did = str(uuid.uuid4())

    with SessionLocal.begin() as db:
        default_pipe_id = ensure_default_pipeline_and_sources(db, u["id"])
        pipe_id = payload.pipeline_id or default_pipe_id

        # Validate pipeline ownership
        p_row = db.execute(
            text("SELECT id FROM crm_pipelines WHERE id=:pid AND user_id=:u AND is_active=1"),
            {"pid": pipe_id, "u": u["id"]},
        ).first()
        if not p_row:
            raise HTTPException(404, "Pipeline not found")

        # Validate stage ownership
        if not payload.stage_id:
            first_stage = db.execute(
                text("SELECT id FROM crm_pipeline_stages WHERE user_id=:u AND pipeline_id=:p ORDER BY stage_order ASC LIMIT 1"),
                {"u": u["id"], "p": pipe_id},
            ).scalar_one()
            stage_id = first_stage
        else:
            s_row = db.execute(
                text("SELECT id FROM crm_pipeline_stages WHERE id=:sid AND user_id=:u AND pipeline_id=:p"),
                {"sid": payload.stage_id, "u": u["id"], "p": pipe_id},
            ).first()
            if not s_row:
                raise HTTPException(404, "Pipeline stage not found")
            stage_id = payload.stage_id

        # Validate contact ownership if supplied
        if payload.contact_id:
            c_row = db.execute(
                text("SELECT id FROM crm_contacts WHERE id=:cid AND user_id=:u AND is_archived=0"),
                {"cid": payload.contact_id, "u": u["id"]},
            ).first()
            if not c_row:
                raise HTTPException(404, "Referenced contact not found")

        # Validate company ownership if supplied
        if payload.company_id:
            comp_row = db.execute(
                text("SELECT id FROM crm_companies WHERE id=:comp AND user_id=:u AND is_archived=0"),
                {"comp": payload.company_id, "u": u["id"]},
            ).first()
            if not comp_row:
                raise HTTPException(404, "Referenced company not found")

        deal_name = (payload.name or payload.title or "").strip() or "Untitled Deal"
        db.execute(
            text(
                """INSERT INTO crm_deals(
                       id, user_id, contact_id, company_id, pipeline_id, stage_id,
                       name, amount, currency, probability, expected_close_date,
                       source, notes, is_archived, revision, created_at, updated_at
                   ) VALUES (
                       :id, :u, :cid, :comp, :pid, :sid,
                       :name, :amt, :curr, :prob, :ecd,
                       :src, :notes, 0, 1, :now, :now
                   )"""
            ),
            {
                "id": did,
                "u": u["id"],
                "cid": payload.contact_id,
                "comp": payload.company_id,
                "pid": pipe_id,
                "sid": stage_id,
                "name": deal_name,
                "amt": payload.amount,
                "curr": payload.currency,
                "prob": payload.probability,
                "ecd": payload.expected_close_date,
                "src": payload.source,
                "notes": payload.notes,
                "now": now,
            },
        )

        record_activity(
            db,
            user_id=u["id"],
            deal_id=did,
            contact_id=payload.contact_id,
            company_id=payload.company_id,
            activity_type="DEAL_CREATED",
            actor_id=u["id"],
            actor_name=u.get("name", "User"),
            summary=f"Deal created: {deal_name} ({payload.currency} {payload.amount})",
        )

    return {"id": did, "name": deal_name, "title": deal_name, "amount": payload.amount, "revision": 1, "message": "Deal created successfully"}


@router.get("/deals/{deal_id}")
def get_deal(deal_id: str, request: Request):
    u = _u(request)
    with SessionLocal() as db:
        deal = db.execute(
            text(
                """SELECT d.*, c.display_name AS contact_name, c.email AS contact_email,
                          c.phone AS contact_phone, comp.name AS company_name, s.name AS stage_name
                   FROM crm_deals d
                   LEFT JOIN crm_contacts c ON c.id = d.contact_id
                   LEFT JOIN crm_companies comp ON comp.id = d.company_id
                   LEFT JOIN crm_pipeline_stages s ON s.id = d.stage_id
                   WHERE d.id=:id AND d.user_id=:u AND d.is_archived=0"""
            ),
            {"id": deal_id, "u": u["id"]},
        ).mappings().first()

        if not deal:
            raise HTTPException(404, "Deal not found")

        dd = dict(deal)

        history = db.execute(
            text(
                """SELECT h.*, s1.name AS from_stage_name, s2.name AS to_stage_name
                   FROM crm_deal_stage_history h
                   LEFT JOIN crm_pipeline_stages s1 ON s1.id = h.from_stage_id
                   LEFT JOIN crm_pipeline_stages s2 ON s2.id = h.to_stage_id
                   WHERE h.deal_id=:did AND h.user_id=:u
                   ORDER BY h.created_at ASC"""
            ),
            {"did": deal_id, "u": u["id"]},
        ).mappings().all()
        dd["stage_history"] = [dict(h) for h in history]

        activities = db.execute(
            text("SELECT * FROM crm_activities WHERE deal_id=:did AND user_id=:u ORDER BY created_at DESC LIMIT 50"),
            {"did": deal_id, "u": u["id"]},
        ).mappings().all()
        dd["activities"] = [dict(a) for a in activities]

    return dd


@router.patch("/deals/{deal_id}")
def update_deal(deal_id: str, payload: DealUpdateIn, request: Request):
    u = _u(request, csrf=True)
    now = now_iso()

    with SessionLocal.begin() as db:
        deal = db.execute(
            text("SELECT * FROM crm_deals WHERE id=:id AND user_id=:u AND is_archived=0"),
            {"id": deal_id, "u": u["id"]},
        ).mappings().first()
        if not deal:
            raise HTTPException(404, "Deal not found")

        updates = ["updated_at = :now"]
        params: Dict[str, Any] = {"now": now, "id": deal_id, "u": u["id"]}

        data = payload.model_dump(exclude_unset=True)
        if "title" in data and "name" not in data:
            data["name"] = data.pop("title")

        for k, v in data.items():
            if v is not None:
                updates.append(f"{k} = :{k}")
                params[k] = v

        db.execute(
            text(f"UPDATE crm_deals SET {', '.join(updates)} WHERE id=:id AND user_id=:u"),
            params,
        )

    return {"message": "Deal updated successfully"}


@router.delete("/deals/{deal_id}")
def delete_deal(deal_id: str, request: Request):
    u = _u(request, csrf=True)
    now = now_iso()
    with SessionLocal.begin() as db:
        res = db.execute(
            text("UPDATE crm_deals SET is_archived=1, updated_at=:now WHERE id=:id AND user_id=:u AND is_archived=0"),
            {"now": now, "id": deal_id, "u": u["id"]},
        )
        if res.rowcount == 0:
            raise HTTPException(404, "Deal not found")
    return {"message": "Deal archived successfully"}


@router.put("/deals/{deal_id}/stage")
@router.post("/deals/{deal_id}/stage")
def move_deal_stage_endpoint(deal_id: str, payload: DealMoveIn, request: Request):
    u = _u(request, csrf=True)
    with SessionLocal.begin() as db:
        try:
            exp_rev = payload.expected_revision if payload.expected_revision is not None else payload.revision
            res = move_deal_stage(
                db,
                user_id=u["id"],
                deal_id=deal_id,
                target_stage_id=payload.stage_id,
                actor_id=u["id"],
                actor_name=u.get("name", "User"),
                expected_revision=exp_rev,
            )
        except ValueError as e:
            err_str = str(e)
            if "not found" in err_str.lower() or "access denied" in err_str.lower():
                raise HTTPException(404, err_str)
            if "conflict" in err_str.lower():
                raise HTTPException(409, err_str)
            raise HTTPException(400, err_str)
    return res


# -------------------------------------------------------------------------
# Tasks
# -------------------------------------------------------------------------

@router.get("/tasks")
def list_tasks(request: Request, view: str = "all"):
    u = _u(request)
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")

    where = ["t.user_id=:u"]
    params: Dict[str, Any] = {"u": u["id"], "today": today}

    if view == "pending":
        where.append("t.status = 'PENDING'")
    elif view == "completed":
        where.append("t.status = 'COMPLETED'")
    elif view == "today":
        where.append("t.status = 'PENDING' AND t.due_date <= :today")
    elif view == "overdue":
        where.append("t.status = 'PENDING' AND t.due_date < :today")

    sql_where = " AND ".join(where)

    with SessionLocal() as db:
        rows = db.execute(
            text(
                f"""SELECT t.*, c.display_name AS contact_name, d.name AS deal_name
                    FROM crm_tasks t
                    LEFT JOIN crm_contacts c ON c.id = t.contact_id
                    LEFT JOIN crm_deals d ON d.id = t.deal_id
                    WHERE {sql_where}
                    ORDER BY t.due_date ASC, t.created_at DESC"""
            ),
            params,
        ).mappings().all()

    return {"tasks": [dict(r) for r in rows], "items": [dict(r) for r in rows], "total": len(rows)}


@router.post("/tasks")
def create_task(payload: TaskIn, request: Request):
    u = _u(request, csrf=True)
    now = now_iso()
    tid = str(uuid.uuid4())
    due = payload.due_date or now

    with SessionLocal.begin() as db:
        if payload.contact_id:
            c = db.execute(
                text("SELECT 1 FROM crm_contacts WHERE id=:cid AND user_id=:u AND is_archived=0"),
                {"cid": payload.contact_id, "u": u["id"]},
            ).first()
            if not c:
                raise HTTPException(404, "Referenced contact not found")

        if payload.deal_id:
            d = db.execute(
                text("SELECT 1 FROM crm_deals WHERE id=:did AND user_id=:u AND is_archived=0"),
                {"did": payload.deal_id, "u": u["id"]},
            ).first()
            if not d:
                raise HTTPException(404, "Referenced deal not found")

        db.execute(
            text(
                """INSERT INTO crm_tasks(
                       id, user_id, contact_id, deal_id, title, description,
                       task_type, priority, due_date, status, created_at, updated_at
                   ) VALUES (
                       :id, :u, :cid, :did, :title, :desc,
                       :tt, :prio, :due, 'PENDING', :now, :now
                   )"""
            ),
            {
                "id": tid,
                "u": u["id"],
                "cid": payload.contact_id,
                "did": payload.deal_id,
                "title": payload.title,
                "desc": payload.description,
                "tt": payload.task_type,
                "prio": payload.priority,
                "due": due,
                "now": now,
            },
        )
        record_activity(
            db,
            user_id=u["id"],
            contact_id=payload.contact_id,
            deal_id=payload.deal_id,
            activity_type="TASK_CREATED",
            actor_id=u["id"],
            actor_name=u.get("name", "User"),
            summary=f"Task scheduled: {payload.title} (due {due})",
        )

    return {"id": tid, "title": payload.title, "message": "Task created successfully"}


@router.get("/tasks/{task_id}")
def get_task(task_id: str, request: Request):
    u = _u(request)
    with SessionLocal() as db:
        task = db.execute(
            text(
                """SELECT t.*, c.display_name AS contact_name, d.name AS deal_name
                   FROM crm_tasks t
                   LEFT JOIN crm_contacts c ON c.id = t.contact_id
                   LEFT JOIN crm_deals d ON d.id = t.deal_id
                   WHERE t.id=:id AND t.user_id=:u"""
            ),
            {"id": task_id, "u": u["id"]},
        ).mappings().first()
        if not task:
            raise HTTPException(404, "Task not found")
    return dict(task)


@router.patch("/tasks/{task_id}")
@router.post("/tasks/{task_id}/complete")
def update_task_status(task_id: str, request: Request, payload: Optional[Dict[str, Any]] = None):
    u = _u(request, csrf=True)
    now = now_iso()
    status = (payload or {}).get("status", "COMPLETED") if isinstance(payload, dict) else "COMPLETED"

    with SessionLocal.begin() as db:
        t = db.execute(
            text("SELECT * FROM crm_tasks WHERE id=:id AND user_id=:u"),
            {"id": task_id, "u": u["id"]},
        ).mappings().first()
        if not t:
            raise HTTPException(404, "Task not found")

        completed_at = now if status == "COMPLETED" else None
        completed_by = u["id"] if status == "COMPLETED" else None

        db.execute(
            text(
                """UPDATE crm_tasks
                   SET status=:st, completed_at=:ca, completed_by=:cb, updated_at=:now
                   WHERE id=:id AND user_id=:u"""
            ),
            {"st": status, "ca": completed_at, "cb": completed_by, "now": now, "id": task_id, "u": u["id"]},
        )

        if status == "COMPLETED":
            record_activity(
                db,
                user_id=u["id"],
                contact_id=t["contact_id"],
                deal_id=t["deal_id"],
                activity_type="TASK_COMPLETED",
                actor_id=u["id"],
                actor_name=u.get("name", "User"),
                summary=f"Task completed: {t['title']}",
            )

    return {"id": task_id, "status": status, "message": f"Task marked as {status}"}


@router.delete("/tasks/{task_id}")
def delete_task(task_id: str, request: Request):
    u = _u(request, csrf=True)
    with SessionLocal.begin() as db:
        res = db.execute(
            text("DELETE FROM crm_tasks WHERE id=:id AND user_id=:u"),
            {"id": task_id, "u": u["id"]},
        )
        if res.rowcount == 0:
            raise HTTPException(404, "Task not found")
    return {"message": "Task deleted"}


# -------------------------------------------------------------------------
# Tags
# -------------------------------------------------------------------------

@router.get("/tags")
def list_tags(request: Request):
    u = _u(request)
    with SessionLocal() as db:
        rows = db.execute(
            text("SELECT * FROM crm_tags WHERE user_id=:u ORDER BY name ASC"),
            {"u": u["id"]},
        ).mappings().all()
    return {"tags": [dict(r) for r in rows], "items": [dict(r) for r in rows]}


@router.post("/tags")
def create_tag(request: Request, payload: Dict[str, Any]):
    u = _u(request, csrf=True)
    name = (payload.get("name") or "").strip()
    if not name:
        raise HTTPException(400, "Tag name required")
    color = payload.get("color", "#5B5CF0")
    tid = str(uuid.uuid4())
    now = now_iso()

    with SessionLocal.begin() as db:
        existing = db.execute(
            text("SELECT id FROM crm_tags WHERE user_id=:u AND lower(name)=lower(:n)"),
            {"u": u["id"], "n": name},
        ).mappings().first()
        if existing:
            tid = existing["id"]
        else:
            db.execute(
                text("INSERT INTO crm_tags(id, user_id, name, color, created_at) VALUES (:id, :u, :n, :c, :now)"),
                {"id": tid, "u": u["id"], "n": name, "c": color, "now": now},
            )
    return {"id": tid, "name": name, "color": color}


@router.delete("/tags/{tag_id}")
def delete_tag(tag_id: str, request: Request):
    u = _u(request, csrf=True)
    with SessionLocal.begin() as db:
        res = db.execute(
            text("DELETE FROM crm_tags WHERE id=:id AND user_id=:u"),
            {"id": tag_id, "u": u["id"]},
        )
        if res.rowcount == 0:
            raise HTTPException(404, "Tag not found")
        db.execute(
            text("DELETE FROM crm_contact_tags WHERE tag_id=:tid AND user_id=:u"),
            {"tid": tag_id, "u": u["id"]},
        )
    return {"message": "Tag deleted"}


# -------------------------------------------------------------------------
# Custom Fields
# -------------------------------------------------------------------------

@router.get("/custom-fields")
def list_custom_fields(request: Request, resource_type: Optional[str] = None, entity_type: Optional[str] = None):
    u = _u(request)
    where = ["user_id = :u"]
    params: Dict[str, Any] = {"u": u["id"]}
    target_type = entity_type or resource_type
    if target_type:
        where.append("entity_type = :rt")
        params["rt"] = target_type.upper()

    with SessionLocal() as db:
        rows = db.execute(
            text(f"SELECT * FROM crm_custom_fields WHERE {' AND '.join(where)} ORDER BY position ASC, created_at ASC"),
            params,
        ).mappings().all()

    items = []
    for r in rows:
        d = dict(r)
        d["options"] = json.loads(d.get("options_json") or "[]")
        d["resource_type"] = d.get("entity_type")
        d["field_name"] = d.get("field_key")
        d["field_label"] = d.get("name")
        items.append(d)
    return {"items": items, "total": len(items)}


@router.post("/custom-fields")
def create_custom_field(payload: CustomFieldIn, request: Request):
    u = _u(request, csrf=True)
    fid = str(uuid.uuid4())
    now = now_iso()

    ent = (payload.entity_type or payload.resource_type or "CONTACT").upper()
    fkey = (payload.field_key or payload.field_name or "").strip().lower()
    fname = (payload.name or payload.field_label or fkey).strip()

    with SessionLocal.begin() as db:
        db.execute(
            text(
                """INSERT INTO crm_custom_fields(id, user_id, entity_type, field_key, name, field_type, options_json, is_required, position, created_at, updated_at)
                   VALUES (:id, :u, :ent, :fkey, :name, :ft, :opt, :req, :pos, :now, :now)"""
            ),
            {
                "id": fid,
                "u": u["id"],
                "ent": ent,
                "fkey": fkey,
                "name": fname,
                "ft": (payload.field_type or "TEXT").upper(),
                "opt": json.dumps(payload.options or []),
                "req": 1 if payload.is_required else 0,
                "pos": payload.position,
                "now": now,
            },
        )
    return {"id": fid, "field_key": fkey, "field_name": fkey, "name": fname, "message": "Custom field created"}


@router.delete("/custom-fields/{field_id}")
def delete_custom_field(field_id: str, request: Request):
    u = _u(request, csrf=True)
    with SessionLocal.begin() as db:
        res = db.execute(
            text("DELETE FROM crm_custom_fields WHERE id=:id AND user_id=:u"),
            {"id": field_id, "u": u["id"]},
        )
        if res.rowcount == 0:
            raise HTTPException(404, "Custom field not found")
    return {"message": "Custom field deleted"}


# -------------------------------------------------------------------------
# Segments
# -------------------------------------------------------------------------

@router.get("/segments")
def list_segments(request: Request):
    u = _u(request)
    with SessionLocal() as db:
        rows = db.execute(
            text("SELECT * FROM crm_segments WHERE user_id=:u ORDER BY created_at DESC"),
            {"u": u["id"]},
        ).mappings().all()

    items = []
    for r in rows:
        d = dict(r)
        filt = json.loads(d.get("filters_json") or "[]")
        d["filters"] = filt
        d["rules"] = filt
        items.append(d)
    return {"items": items, "total": len(items)}


@router.post("/segments")
def create_segment(payload: SegmentIn, request: Request):
    u = _u(request, csrf=True)
    sid = str(uuid.uuid4())
    now = now_iso()
    filt = payload.filters or payload.rules or []

    with SessionLocal.begin() as db:
        db.execute(
            text(
                """INSERT INTO crm_segments(id, user_id, name, description, filters_json, created_at, updated_at)
                   VALUES (:id, :u, :n, :d, :f, :now, :now)"""
            ),
            {
                "id": sid,
                "u": u["id"],
                "n": payload.name.strip(),
                "d": payload.description,
                "f": json.dumps(filt),
                "now": now,
            },
        )
    return {"id": sid, "name": payload.name, "message": "Segment created"}


@router.delete("/segments/{segment_id}")
def delete_segment(segment_id: str, request: Request):
    u = _u(request, csrf=True)
    with SessionLocal.begin() as db:
        res = db.execute(
            text("DELETE FROM crm_segments WHERE id=:id AND user_id=:u"),
            {"id": segment_id, "u": u["id"]},
        )
        if res.rowcount == 0:
            raise HTTPException(404, "Segment not found")
    return {"message": "Segment deleted"}


# -------------------------------------------------------------------------
# Automations
# -------------------------------------------------------------------------

@router.get("/automations")
def list_automations(request: Request):
    u = _u(request)
    with SessionLocal() as db:
        rows = db.execute(
            text("SELECT * FROM crm_automations WHERE user_id=:u ORDER BY created_at DESC"),
            {"u": u["id"]},
        ).mappings().all()

    items = []
    for r in rows:
        d = dict(r)
        d["trigger_config"] = json.loads(d.get("trigger_config_json") or "{}")
        d["conditions"] = json.loads(d.get("conditions_json") or "[]")
        d["actions"] = json.loads(d.get("actions_json") or "[]")
        items.append(d)

    return {"automations": items, "items": items, "total": len(items)}


@router.post("/automations")
def create_automation(payload: AutomationIn, request: Request):
    u = _u(request, csrf=True)
    now = now_iso()
    aid = str(uuid.uuid4())

    with SessionLocal.begin() as db:
        db.execute(
            text(
                """INSERT INTO crm_automations(
                       id, user_id, name, description, trigger_type,
                       trigger_config_json, conditions_json, actions_json,
                       is_active, created_at, updated_at
                   ) VALUES (
                       :id, :u, :name, :desc, :tt,
                       :cfg, :conds, :acts,
                       :act, :now, :now
                   )"""
            ),
            {
                "id": aid,
                "u": u["id"],
                "name": payload.name,
                "desc": payload.description,
                "tt": payload.trigger_type,
                "cfg": json.dumps(payload.trigger_config),
                "conds": json.dumps(payload.conditions),
                "acts": json.dumps(payload.actions),
                "act": 1 if payload.is_active else 0,
                "now": now,
            },
        )

    return {"id": aid, "message": "Automation rule created"}


@router.get("/automations/runs")
def list_all_automation_runs(request: Request, limit: int = 50):
    u = _u(request)
    bounded_limit = min(max(limit, 5), 100)
    with SessionLocal() as db:
        rows = db.execute(
            text(
                """SELECT r.*, a.name AS automation_name
                   FROM crm_automation_runs r
                   LEFT JOIN crm_automations a ON a.id = r.automation_id
                   WHERE r.user_id=:u
                   ORDER BY r.started_at DESC LIMIT :lim"""
            ),
            {"u": u["id"], "lim": bounded_limit},
        ).mappings().all()

    items = []
    for r in rows:
        d = dict(r)
        d["steps_completed"] = json.loads(d.get("steps_completed_json") or "[]")
        items.append(d)

    return {"runs": items, "items": items, "total": len(items)}


@router.get("/automations/{automation_id}")
def get_automation(automation_id: str, request: Request):
    u = _u(request)
    with SessionLocal() as db:
        row = db.execute(
            text("SELECT * FROM crm_automations WHERE id=:id AND user_id=:u"),
            {"id": automation_id, "u": u["id"]},
        ).mappings().first()
        if not row:
            raise HTTPException(404, "Automation not found")
        d = dict(row)
        d["trigger_config"] = json.loads(d.get("trigger_config_json") or "{}")
        d["conditions"] = json.loads(d.get("conditions_json") or "[]")
        d["actions"] = json.loads(d.get("actions_json") or "[]")
    return d


@router.delete("/automations/{automation_id}")
def delete_automation(automation_id: str, request: Request):
    u = _u(request, csrf=True)
    with SessionLocal.begin() as db:
        res = db.execute(
            text("DELETE FROM crm_automations WHERE id=:id AND user_id=:u"),
            {"id": automation_id, "u": u["id"]},
        )
        if res.rowcount == 0:
            raise HTTPException(404, "Automation not found")
    return {"message": "Automation deleted"}


@router.get("/automations/{automation_id}/runs")
def get_automation_runs(automation_id: str, request: Request):
    u = _u(request)
    with SessionLocal() as db:
        auto = db.execute(
            text("SELECT 1 FROM crm_automations WHERE id=:aid AND user_id=:u"),
            {"aid": automation_id, "u": u["id"]},
        ).first()
        if not auto:
            raise HTTPException(404, "Automation not found")

        rows = db.execute(
            text(
                """SELECT * FROM crm_automation_runs
                   WHERE automation_id=:aid AND user_id=:u
                   ORDER BY started_at DESC LIMIT 50"""
            ),
            {"aid": automation_id, "u": u["id"]},
        ).mappings().all()

    items = []
    for r in rows:
        d = dict(r)
        d["steps_completed"] = json.loads(d.get("steps_completed_json") or "[]")
        items.append(d)

    return {"runs": items, "items": items, "total": len(items)}


# -------------------------------------------------------------------------
# CRM Leads
# -------------------------------------------------------------------------

@router.get("/leads")
def list_crm_leads(
    request: Request,
    page: int = 1,
    page_size: int = 25,
    source: Optional[str] = None,
    status: Optional[str] = None,
):
    u = _u(request)
    limit = min(max(page_size, 5), 100)
    offset = (max(page, 1) - 1) * limit

    where = ["user_id = :u"]
    params: Dict[str, Any] = {"u": u["id"], "limit": limit, "offset": offset}

    if source:
        where.append("source = :src")
        params["src"] = source
    if status:
        where.append("status = :st")
        params["st"] = status

    sql_where = " AND ".join(where)

    with SessionLocal() as db:
        total = db.execute(text(f"SELECT COUNT(*) FROM crm_leads WHERE {sql_where}"), params).scalar_one()
        rows = db.execute(
            text(f"SELECT * FROM crm_leads WHERE {sql_where} ORDER BY created_at DESC LIMIT :limit OFFSET :offset"),
            params,
        ).mappings().all()

    items = []
    for r in rows:
        d = dict(r)
        d["score_reasons"] = json.loads(d.get("score_reasons_json") or "[]")
        d["qualification"] = json.loads(d.get("qualification_json") or "{}")
        items.append(d)

    return {"items": items, "total": total, "page": page, "page_size": limit}


@router.get("/leads/{lead_id}")
def get_crm_lead(lead_id: str, request: Request):
    u = _u(request)
    with SessionLocal() as db:
        lead = db.execute(
            text("SELECT * FROM crm_leads WHERE id=:id AND user_id=:u"),
            {"id": lead_id, "u": u["id"]},
        ).mappings().first()
        if not lead:
            raise HTTPException(404, "Lead not found")
        d = dict(lead)
        d["score_reasons"] = json.loads(d.get("score_reasons_json") or "[]")
        d["qualification"] = json.loads(d.get("qualification_json") or "{}")
    return d


@router.patch("/leads/{lead_id}/status")
def update_crm_lead_status(lead_id: str, payload: LeadStatusIn, request: Request):
    u = _u(request, csrf=True)
    status = str(payload.status or "").upper()
    if status not in {"NEW", "CONTACTED", "QUALIFIED", "UNQUALIFIED", "CONVERTED", "LOST"}:
        raise HTTPException(422, "Unsupported lead status")

    with SessionLocal.begin() as db:
        res = db.execute(
            text("UPDATE crm_leads SET status=:st, updated_at=:now WHERE id=:id AND user_id=:u"),
            {"st": status, "now": now_iso(), "id": lead_id, "u": u["id"]},
        )
        if res.rowcount == 0:
            raise HTTPException(404, "Lead not found")
    return {"id": lead_id, "status": status, "message": f"Lead marked as {status}"}


# -------------------------------------------------------------------------
# CSV Import / Export
# -------------------------------------------------------------------------

@router.get("/export/contacts")
def export_contacts(request: Request):
    u = _u(request)
    with SessionLocal() as db:
        csv_content = export_contacts_csv(db, u["id"])

    response = PlainTextResponse(csv_content, media_type="text/csv")
    response.headers["Content-Disposition"] = f"attachment; filename=zylora_contacts_{int(datetime.now(timezone.utc).timestamp())}.csv"
    return response


@router.get("/export/deals")
def export_deals(request: Request):
    u = _u(request)
    with SessionLocal() as db:
        csv_content = export_deals_csv(db, u["id"])

    response = PlainTextResponse(csv_content, media_type="text/csv")
    response.headers["Content-Disposition"] = f"attachment; filename=zylora_deals_{int(datetime.now(timezone.utc).timestamp())}.csv"
    return response


@router.post("/import/contacts")
def import_contacts(payload: CsvImportIn, request: Request):
    u = _u(request, csrf=True)
    with SessionLocal.begin() as db:
        stats = import_contacts_csv(db, u["id"], payload.csv_text)
    return stats


# -------------------------------------------------------------------------
# AI Assistant CRM Endpoint
# -------------------------------------------------------------------------

@router.post("/ai-assistant")
def ai_assistant_action(payload: Dict[str, Any], request: Request):
    u = _u(request, csrf=True)
    action = payload.get("action", "summarize_lead")

    if action == "summarize_lead":
        msg = payload.get("message", "")
        summary = f"Summary: {msg[:100]}..." if msg else "No notes provided"
        return {"summary": summary, "buying_intent": "HIGH" if "price" in msg.lower() or "demo" in msg.lower() else "MEDIUM"}

    return {"message": "AI Action complete"}
