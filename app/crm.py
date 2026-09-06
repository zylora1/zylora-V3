"""Zylora CRM Domain Engine

Authoritative business logic, normalized entities, deterministic deduplication,
tenancy boundaries, pipeline mechanics, automation engine, timeline activities,
lead scoring, CSV import/export formula safety, and CRM analytics.
"""

from __future__ import annotations
import csv
import io
import json
import re
import secrets
import uuid
from datetime import datetime, timedelta, timezone
from typing import Any, Dict, List, Optional, Tuple

from sqlalchemy import text
from sqlalchemy.orm import Session

from .db import now_iso


def _uuid() -> str:
    return str(uuid.uuid4())


def normalize_email(email: Optional[str]) -> Optional[str]:
    if not email:
        return None
    cleaned = email.strip().lower()
    return cleaned if "@" in cleaned and "." in cleaned else None


def normalize_phone(phone: Optional[str]) -> Optional[str]:
    if not phone:
        return None
    cleaned = re.sub(r"[^\d+]", "", phone.strip())
    if cleaned.startswith("00"):
        cleaned = "+" + cleaned[2:]
    return cleaned if len(cleaned) >= 6 else None


def sanitize_csv_value(val: Any) -> str:
    """Neutralize spreadsheet formula injection (=, +, -, @, tab, newline)."""
    s = str(val or "")
    if s and s[0] in ("=", "+", "-", "@", "\t", "\r", "\n"):
        return "'" + s
    return s


# -------------------------------------------------------------------------
# Default Workspace Setup (Pipelines, Stages, Sources)
# -------------------------------------------------------------------------

DEFAULT_STAGES = [
    ("New", 0, 0.10, "#5B5CF0", "OPEN"),
    ("Contacted", 1, 0.25, "#3B82F6", "OPEN"),
    ("Qualified", 2, 0.50, "#10B981", "OPEN"),
    ("Proposal", 3, 0.75, "#F59E0B", "OPEN"),
    ("Won", 4, 1.00, "#16A34A", "WON"),
    ("Lost", 5, 0.00, "#EF4444", "LOST"),
]

DEFAULT_SOURCES = [
    ("FORM", "Website Form", "INBOUND"),
    ("CHATBOT", "Website Chatbot", "INBOUND"),
    ("AI_ASSISTANT", "AI Sales Assistant", "INBOUND"),
    ("APPOINTMENT", "Appointment Booking", "INBOUND"),
    ("MANUAL", "Manual Entry", "DIRECT"),
    ("CSV", "CSV Import", "IMPORT"),
]


def ensure_default_pipeline_and_sources(db: Session, user_id: str) -> str:
    """Ensure user has at least one default pipeline and standard sources."""
    now = now_iso()
    # Check pipeline
    pipe = db.execute(
        text("SELECT id FROM crm_pipelines WHERE user_id=:u AND is_default=1 LIMIT 1"),
        {"u": user_id},
    ).mappings().first()

    if not pipe:
        pipe_id = _uuid()
        db.execute(
            text(
                """INSERT INTO crm_pipelines(id, user_id, name, is_default, is_active, position, created_at, updated_at)
                   VALUES (:id, :u, 'Sales Pipeline', 1, 1, 0, :now, :now)"""
            ),
            {"id": pipe_id, "u": user_id, "now": now},
        )
        for name, order, prob, color, stype in DEFAULT_STAGES:
            db.execute(
                text(
                    """INSERT INTO crm_pipeline_stages(id, user_id, pipeline_id, name, stage_order, probability, color, stage_type, created_at, updated_at)
                       VALUES (:id, :u, :p, :name, :ord, :prob, :color, :stype, :now, :now)"""
                ),
                {
                    "id": _uuid(),
                    "u": user_id,
                    "p": pipe_id,
                    "name": name,
                    "ord": order,
                    "prob": prob,
                    "color": color,
                    "stype": stype,
                    "now": now,
                },
            )
        pipeline_id = pipe_id
    else:
        pipeline_id = pipe["id"]

    # Ensure sources
    for code, name, category in DEFAULT_SOURCES:
        src_exists = db.execute(
            text("SELECT id FROM crm_sources WHERE user_id=:u AND code=:c"),
            {"u": user_id, "c": code},
        ).first()
        if not src_exists:
            db.execute(
                text(
                    """INSERT INTO crm_sources(id, user_id, code, name, category, is_active, created_at)
                       VALUES (:id, :u, :c, :n, :cat, 1, :now)"""
                ),
                {"id": _uuid(), "u": user_id, "c": code, "n": name, "cat": category, "now": now},
            )

    return pipeline_id


# -------------------------------------------------------------------------
# Deduplication & Contact Lookup
# -------------------------------------------------------------------------

def find_contact_by_identity(
    db: Session, user_id: str, email: Optional[str] = None, phone: Optional[str] = None
) -> Optional[Dict[str, Any]]:
    """Deterministic tenant-scoped deduplication priority: verified email -> normalized phone."""
    n_email = normalize_email(email)
    if n_email:
        row = db.execute(
            text(
                """SELECT * FROM crm_contacts
                   WHERE user_id=:u AND lower(email)=:e AND is_archived=0 LIMIT 1"""
            ),
            {"u": user_id, "e": n_email},
        ).mappings().first()
        if row:
            return dict(row)

    n_phone = normalize_phone(phone)
    if n_phone:
        row = db.execute(
            text(
                """SELECT * FROM crm_contacts
                   WHERE user_id=:u AND phone=:p AND is_archived=0 LIMIT 1"""
            ),
            {"u": user_id, "p": n_phone},
        ).mappings().first()
        if row:
            return dict(row)

    return None


def calculate_lead_score(lead_data: Dict[str, Any], has_appointment: bool = False) -> Tuple[int, str, List[str]]:
    """Transparent deterministic lead scoring."""
    score = 10
    reasons = ["Initial engagement captured (+10)"]

    email = lead_data.get("email") or ""
    if "@" in email:
        domain = email.split("@")[-1].lower()
        if domain not in ("gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com"):
            score += 15
            reasons.append("Corporate/business email domain (+15)")
        else:
            score += 5
            reasons.append("Valid contact email provided (+5)")

    if lead_data.get("phone"):
        score += 10
        reasons.append("Direct phone number supplied (+10)")

    if lead_data.get("company"):
        score += 10
        reasons.append("Organization details specified (+10)")

    if has_appointment or lead_data.get("appointment_id"):
        score += 30
        reasons.append("Appointment scheduled (+30)")

    intent = str(lead_data.get("intent") or "").upper()
    message = str(lead_data.get("message") or "").lower()
    high_intents = {"HIGH_INTENT", "HOT", "APPOINTMENT_INTENT", "QUOTE_REQUEST", "PURCHASE_INTENT", "CALLBACK_REQUEST"}
    if any(k in intent for k in high_intents) or any(k in message for k in ("pricing", "quote", "cost", "hire", "urgent", "demo")):
        score += 20
        reasons.append("Commercial buying intent demonstrated (+20)")

    score = min(100, max(0, score))
    temp = "HOT" if score >= 50 else ("WARM" if score >= 25 else "COLD")
    return score, temp, reasons


# -------------------------------------------------------------------------
# Lead Ingestion into CRM
# -------------------------------------------------------------------------

def ingest_lead_into_crm(
    db: Session,
    user_id: str,
    lead_data: Dict[str, Any],
    site_id: Optional[str] = None,
    source: str = "FORM",
) -> Dict[str, Any]:
    """Ingest a visitor lead into CRM: deduplicate/create contact, create crm_leads, record timeline."""
    ensure_default_pipeline_and_sources(db, user_id)
    now = now_iso()

    email = normalize_email(lead_data.get("email"))
    phone = normalize_phone(lead_data.get("phone"))
    name = (lead_data.get("name") or "").strip()
    if not name:
        name = email.split("@")[0] if email else "Website Visitor"

    name_parts = name.split(" ", 1)
    first_name = name_parts[0]
    last_name = name_parts[1] if len(name_parts) > 1 else ""

    score, temp, reasons = calculate_lead_score(lead_data)

    contact = find_contact_by_identity(db, user_id, email, phone)
    if contact:
        contact_id = contact["id"]
        # Update existing contact
        new_score = max(contact.get("lead_score") or 0, score)
        db.execute(
            text(
                """UPDATE crm_contacts
                   SET last_activity_at=:now,
                       lead_score=:score,
                       phone=COALESCE(phone, :phone),
                       company_name=COALESCE(company_name, :comp),
                       updated_at=:now
                   WHERE id=:id AND user_id=:u"""
            ),
            {
                "now": now,
                "score": new_score,
                "phone": phone,
                "comp": lead_data.get("company"),
                "id": contact_id,
                "u": user_id,
            },
        )
    else:
        contact_id = _uuid()
        db.execute(
            text(
                """INSERT INTO crm_contacts(
                       id, user_id, first_name, last_name, display_name,
                       email, phone, company_name, lifecycle_stage, lead_status,
                       lead_score, source, source_detail, last_activity_at,
                       created_at, updated_at
                   ) VALUES (
                       :id, :u, :fn, :ln, :dn,
                       :e, :p, :comp, 'LEAD', 'NEW',
                       :score, :src, :src_det, :now,
                       :now, :now
                   )"""
            ),
            {
                "id": contact_id,
                "u": user_id,
                "fn": first_name,
                "ln": last_name,
                "dn": name,
                "e": email,
                "p": phone,
                "comp": lead_data.get("company"),
                "score": score,
                "src": source,
                "src_det": lead_data.get("page_url") or lead_data.get("source_detail"),
                "now": now,
            },
        )

        record_activity(
            db,
            user_id=user_id,
            contact_id=contact_id,
            activity_type="CONTACT_CREATED",
            actor_name="System Ingestion",
            source=source,
            summary=f"Contact record created via {source}",
            metadata={"email": email, "phone": phone, "source": source},
        )

    # Insert crm_lead
    crm_lead_id = _uuid()
    db.execute(
        text(
            """INSERT INTO crm_leads(
                   id, user_id, site_id, contact_id, source, source_detail,
                   status, name, email, phone, company, message, summary,
                   qualification_json, lead_score, lead_temperature, score_reasons_json,
                   session_id, conversation_id, appointment_id, page_url,
                   utm_source, utm_medium, utm_campaign, created_at, updated_at
               ) VALUES (
                   :id, :u, :s, :cid, :src, :src_det,
                   'NEW', :name, :email, :phone, :comp, :msg, :summary,
                   :qual, :score, :temp, :reasons,
                   :sess, :conv, :appt, :page,
                   :utms, :utmm, :utmc, :now, :now
               )"""
        ),
        {
            "id": crm_lead_id,
            "u": user_id,
            "s": site_id,
            "cid": contact_id,
            "src": source,
            "src_det": lead_data.get("page_url") or lead_data.get("source_detail"),
            "name": name,
            "email": email or "",
            "phone": phone,
            "comp": lead_data.get("company"),
            "msg": lead_data.get("message"),
            "summary": lead_data.get("summary"),
            "qual": json.dumps(lead_data.get("qualification_json") or {}),
            "score": score,
            "temp": temp,
            "reasons": json.dumps(reasons),
            "sess": lead_data.get("session_id"),
            "conv": lead_data.get("conversation_id"),
            "appt": lead_data.get("appointment_id"),
            "page": lead_data.get("page_url"),
            "utms": lead_data.get("utm_source"),
            "utmm": lead_data.get("utm_medium"),
            "utmc": lead_data.get("utm_campaign"),
            "now": now,
        },
    )

    # Activity Timeline Record
    record_activity(
        db,
        user_id=user_id,
        contact_id=contact_id,
        lead_id=crm_lead_id,
        activity_type="LEAD_CAPTURED",
        actor_name=name,
        source=source,
        summary=f"Inbound lead received from {source}" + (f" ({lead_data['company']})" if lead_data.get("company") else "") + (f": {lead_data.get('message')[:80]}..." if lead_data.get("message") else ""),
        metadata={
            "lead_id": crm_lead_id,
            "source": source,
            "score": score,
            "temperature": temp,
            "page_url": lead_data.get("page_url"),
        },
    )

    # Trigger Automations
    run_automations(
        db,
        user_id=user_id,
        trigger_type="NEW_LEAD",
        record_id=contact_id,
        record_type="CONTACT",
        context={"source": source, "lead_score": score, "email": email, "company": lead_data.get("company")},
    )

    return {"contact_id": contact_id, "lead_id": crm_lead_id, "lead_score": score, "status": "NEW"}


# -------------------------------------------------------------------------
# Appointment Integration Hook
# -------------------------------------------------------------------------

def link_appointment_to_crm(
    db: Session,
    user_id: str,
    site_id: str,
    appt_data: Dict[str, Any],
    is_cancellation: bool = False,
    event_type: Optional[str] = None,
) -> Optional[str]:
    """Deeply integrate booking with CRM contact, activity timeline, and lifecycle stage."""
    if event_type and "cancel" in event_type.lower():
        is_cancellation = True
    ensure_default_pipeline_and_sources(db, user_id)
    now = now_iso()

    email = normalize_email(appt_data.get("email"))
    phone = normalize_phone(appt_data.get("phone"))
    name = (appt_data.get("name") or "").strip() or "Appointment Client"
    starts_at = appt_data.get("starts_at") or now

    contact = find_contact_by_identity(db, user_id, email, phone)
    if contact:
        contact_id = contact["id"]
        if not is_cancellation:
            db.execute(
                text(
                    """UPDATE crm_contacts
                       SET lifecycle_stage='QUALIFIED',
                           lead_score=lead_score + 25,
                           last_activity_at=:now,
                           updated_at=:now
                       WHERE id=:id AND user_id=:u"""
                ),
                {"now": now, "id": contact_id, "u": user_id},
            )
    else:
        name_parts = name.split(" ", 1)
        contact_id = _uuid()
        db.execute(
            text(
                """INSERT INTO crm_contacts(
                       id, user_id, first_name, last_name, display_name,
                       email, phone, lifecycle_stage, lead_status, lead_score,
                       source, last_activity_at, created_at, updated_at
                   ) VALUES (
                       :id, :u, :fn, :ln, :dn,
                       :e, :p, 'QUALIFIED', 'CONNECTED', 60,
                       'APPOINTMENT', :now, :now, :now
                   )"""
            ),
            {
                "id": contact_id,
                "u": user_id,
                "fn": name_parts[0],
                "ln": name_parts[1] if len(name_parts) > 1 else "",
                "dn": name,
                "e": email,
                "p": phone,
                "now": now,
            },
        )

    act_type = "APPOINTMENT_CANCELLED" if is_cancellation else "APPOINTMENT_BOOKED"
    summary = f"Appointment cancelled for {starts_at}" if is_cancellation else f"Appointment booked for {starts_at}"
    record_activity(
        db,
        user_id=user_id,
        contact_id=contact_id,
        activity_type=act_type,
        actor_name=name,
        source="APPOINTMENT",
        summary=summary,
        metadata={"starts_at": starts_at, "appointment_id": appt_data.get("id")},
    )

    run_automations(
        db,
        user_id=user_id,
        trigger_type=act_type,
        record_id=contact_id,
        record_type="CONTACT",
        context={"starts_at": starts_at, "email": email, "name": name},
    )

    return contact_id


# -------------------------------------------------------------------------
# Activities Timeline Recording
# -------------------------------------------------------------------------

def record_activity(
    db: Session,
    user_id: str,
    activity_type: str,
    summary: str,
    contact_id: Optional[str] = None,
    company_id: Optional[str] = None,
    deal_id: Optional[str] = None,
    lead_id: Optional[str] = None,
    actor_id: Optional[str] = None,
    actor_name: Optional[str] = None,
    source: Optional[str] = None,
    metadata: Optional[Dict[str, Any]] = None,
) -> str:
    """Record an authoritative event on the CRM timeline."""
    act_id = _uuid()
    now = now_iso()
    db.execute(
        text(
            """INSERT INTO crm_activities(
                   id, user_id, contact_id, company_id, deal_id, lead_id,
                   activity_type, actor_id, actor_name, source, summary,
                   metadata_json, created_at
               ) VALUES (
                   :id, :u, :cid, :comp_id, :did, :lid,
                   :atype, :aid, :aname, :src, :summary,
                   :meta, :now
               )"""
        ),
        {
            "id": act_id,
            "u": user_id,
            "cid": contact_id,
            "comp_id": company_id,
            "did": deal_id,
            "lid": lead_id,
            "atype": activity_type,
            "aid": actor_id,
            "aname": actor_name or "System",
            "src": source or "CRM",
            "summary": summary,
            "meta": json.dumps(metadata or {}),
            "now": now,
        },
    )
    if contact_id:
        db.execute(
            text("UPDATE crm_contacts SET last_activity_at=:now WHERE id=:id AND user_id=:u"),
            {"now": now, "id": contact_id, "u": user_id},
        )
    return act_id


# -------------------------------------------------------------------------
# Deal Management & Kanban Stage Progression
# -------------------------------------------------------------------------

def move_deal_stage(
    db: Session,
    user_id: str,
    deal_id: str,
    target_stage_id: str,
    actor_id: Optional[str] = None,
    actor_name: Optional[str] = None,
    expected_revision: Optional[int] = None,
) -> Dict[str, Any]:
    """Move deal to a new stage with optimistic concurrency and timeline history."""
    deal = db.execute(
        text("SELECT * FROM crm_deals WHERE id=:id AND user_id=:u"),
        {"id": deal_id, "u": user_id},
    ).mappings().first()

    if not deal:
        raise ValueError("Deal not found or access denied")

    if expected_revision is not None and deal["revision"] != expected_revision:
        raise ValueError("Concurrent update conflict: deal was modified by another session")

    stage = db.execute(
        text("SELECT * FROM crm_pipeline_stages WHERE id=:id AND user_id=:u"),
        {"id": target_stage_id, "u": user_id},
    ).mappings().first()

    if not stage:
        raise ValueError("Target pipeline stage not found")

    old_stage_id = deal["stage_id"]
    new_status = stage["stage_type"]
    now = now_iso()
    new_rev = (deal["revision"] or 1) + 1

    if expected_revision is not None:
        res = db.execute(
            text(
                """UPDATE crm_deals
                   SET stage_id=:s,
                       status=:status,
                       probability=:prob,
                       revision=:rev,
                       updated_at=:now
                   WHERE id=:id AND user_id=:u AND revision=:expected_revision"""
            ),
            {
                "s": target_stage_id,
                "status": new_status,
                "prob": stage["probability"],
                "rev": new_rev,
                "now": now,
                "id": deal_id,
                "u": user_id,
                "expected_revision": expected_revision,
            },
        )
        if res.rowcount == 0:
            raise ValueError("Concurrent update conflict: deal was modified by another session")
    else:
        db.execute(
            text(
                """UPDATE crm_deals
                   SET stage_id=:s,
                       status=:status,
                       probability=:prob,
                       revision=:rev,
                       updated_at=:now
                   WHERE id=:id AND user_id=:u"""
            ),
            {
                "s": target_stage_id,
                "status": new_status,
                "prob": stage["probability"],
                "rev": new_rev,
                "now": now,
                "id": deal_id,
                "u": user_id,
            },
        )

    # Record stage history
    db.execute(
        text(
            """INSERT INTO crm_deal_stage_history(id, user_id, deal_id, from_stage_id, to_stage_id, actor_id, actor_name, created_at)
               VALUES (:id, :u, :did, :from_s, :to_s, :aid, :aname, :now)"""
        ),
        {
            "id": _uuid(),
            "u": user_id,
            "did": deal_id,
            "from_s": old_stage_id,
            "to_s": target_stage_id,
            "aid": actor_id,
            "aname": actor_name or "Representative",
            "now": now,
        },
    )

    record_activity(
        db,
        user_id=user_id,
        deal_id=deal_id,
        contact_id=deal["contact_id"],
        activity_type="DEAL_STAGE_CHANGED",
        actor_id=actor_id,
        actor_name=actor_name,
        summary=f"Deal moved to {stage['name']}",
        metadata={"from_stage": old_stage_id, "to_stage": target_stage_id, "status": new_status},
    )

    run_automations(
        db,
        user_id=user_id,
        trigger_type="DEAL_STAGE_CHANGED",
        record_id=deal_id,
        record_type="DEAL",
        context={"stage_id": target_stage_id, "stage_name": stage["name"], "status": new_status, "amount": deal["amount"]},
    )

    return {"deal_id": deal_id, "stage_id": target_stage_id, "status": new_status, "revision": new_rev}


# -------------------------------------------------------------------------
# Automation Engine
# -------------------------------------------------------------------------

def run_automations(
    db: Session,
    user_id: str,
    trigger_type: str,
    record_id: str,
    record_type: str,
    context: Dict[str, Any],
    depth: int = 0,
) -> List[Dict[str, Any]]:
    """Safe, tenant-scoped, loop-protected automation execution."""
    if depth > 3:  # recursion guard
        return []

    rules = db.execute(
        text("SELECT * FROM crm_automations WHERE user_id=:u AND trigger_type=:t AND is_active=1"),
        {"u": user_id, "t": trigger_type},
    ).mappings().all()

    runs_summary = []
    now = now_iso()

    for rule in rules:
        run_id = _uuid()
        completed_steps = []
        err_msg = None

        try:
            conditions = json.loads(rule["conditions_json"] or "[]")
            matches = True
            for cond in conditions:
                field = cond.get("field")
                op = cond.get("op", "eq")
                expected = cond.get("value")
                actual = context.get(field)
                if op == "eq" and str(actual).lower() != str(expected).lower():
                    matches = False
                    break
                elif op == "gte" and float(actual or 0) < float(expected or 0):
                    matches = False
                    break

            if not matches:
                continue

            actions = json.loads(rule["actions_json"] or "[]")
            for action in actions:
                atype = action.get("type")
                if atype == "ADD_TAG":
                    tag_name = action.get("tag")
                    if tag_name and record_type == "CONTACT":
                        tag = db.execute(
                            text("SELECT id FROM crm_tags WHERE user_id=:u AND lower(name)=:n LIMIT 1"),
                            {"u": user_id, "n": tag_name.lower()},
                        ).mappings().first()
                        if not tag:
                            tag_id = _uuid()
                            db.execute(
                                text("INSERT INTO crm_tags(id, user_id, name, created_at) VALUES (:id, :u, :n, :now)"),
                                {"id": tag_id, "u": user_id, "n": tag_name, "now": now},
                            )
                        else:
                            tag_id = tag["id"]
                        ct_exists = db.execute(
                            text("SELECT 1 FROM crm_contact_tags WHERE user_id=:u AND contact_id=:c AND tag_id=:t"),
                            {"u": user_id, "c": record_id, "t": tag_id},
                        ).first()
                        if not ct_exists:
                            db.execute(
                                text(
                                    "INSERT INTO crm_contact_tags(id, user_id, contact_id, tag_id, created_at) VALUES (:id, :u, :c, :t, :now)"
                                ),
                                {"id": _uuid(), "u": user_id, "c": record_id, "t": tag_id, "now": now},
                            )
                        completed_steps.append(f"Tag '{tag_name}' applied")

                elif atype == "CREATE_TASK":
                    title = action.get("title", "Follow up with lead")
                    task_id = _uuid()
                    due = (datetime.now(timezone.utc) + timedelta(days=action.get("due_days", 1))).strftime("%Y-%m-%d")
                    db.execute(
                        text(
                            """INSERT INTO crm_tasks(id, user_id, contact_id, title, priority, due_date, status, created_at, updated_at)
                               VALUES (:id, :u, :cid, :t, 'HIGH', :due, 'TODO', :now, :now)"""
                        ),
                        {"id": task_id, "u": user_id, "cid": record_id if record_type == "CONTACT" else None, "t": title, "due": due, "now": now},
                    )
                    completed_steps.append(f"Task '{title}' scheduled for {due}")

                elif atype == "CHANGE_LIFECYCLE" and record_type == "CONTACT":
                    stage = action.get("lifecycle", "QUALIFIED")
                    db.execute(
                        text("UPDATE crm_contacts SET lifecycle_stage=:s, updated_at=:now WHERE id=:id AND user_id=:u"),
                        {"s": stage, "now": now, "id": record_id, "u": user_id},
                    )
                    completed_steps.append(f"Lifecycle changed to {stage}")

            status = "SUCCESS"
            db.execute(
                text("UPDATE crm_automations SET execution_count=execution_count+1, updated_at=:now WHERE id=:id"),
                {"now": now, "id": rule["id"]},
            )

        except Exception as ex:
            status = "FAILED"
            err_msg = str(ex)

        db.execute(
            text(
                """INSERT INTO crm_automation_runs(id, user_id, automation_id, trigger_event, record_id, record_type, status, steps_completed_json, error_message, started_at, completed_at)
                   VALUES (:id, :u, :aid, :t, :rid, :rtype, :s, :steps, :err, :now, :now)"""
            ),
            {
                "id": run_id,
                "u": user_id,
                "aid": rule["id"],
                "t": trigger_type,
                "rid": record_id,
                "rtype": record_type,
                "s": status,
                "steps": json.dumps(completed_steps),
                "err": err_msg,
                "now": now,
            },
        )
        runs_summary.append({"rule_id": rule["id"], "status": status, "steps": completed_steps, "error": err_msg})

    return runs_summary


# -------------------------------------------------------------------------
# Contact Merge Engine
# -------------------------------------------------------------------------

def merge_contacts(
    db: Session, user_id: str, primary_id: str, secondary_id: str, actor_id: Optional[str] = None
) -> Dict[str, Any]:
    """Merge secondary contact into primary, reassigning all associations and activities safely."""
    if primary_id == secondary_id:
        raise ValueError("Cannot merge contact into itself")

    c1 = db.execute(
        text("SELECT * FROM crm_contacts WHERE id=:id AND user_id=:u AND is_archived=0"),
        {"id": primary_id, "u": user_id},
    ).mappings().first()

    c2 = db.execute(
        text("SELECT * FROM crm_contacts WHERE id=:id AND user_id=:u AND is_archived=0"),
        {"id": secondary_id, "u": user_id},
    ).mappings().first()

    if not c1 or not c2:
        raise ValueError("Both contacts must exist and belong to the active workspace")

    now = now_iso()

    # Reassign activities
    db.execute(
        text("UPDATE crm_activities SET contact_id=:p WHERE contact_id=:s AND user_id=:u"),
        {"p": primary_id, "s": secondary_id, "u": user_id},
    )

    # Reassign leads
    db.execute(
        text("UPDATE crm_leads SET contact_id=:p WHERE contact_id=:s AND user_id=:u"),
        {"p": primary_id, "s": secondary_id, "u": user_id},
    )

    # Reassign deals
    db.execute(
        text("UPDATE crm_deals SET contact_id=:p WHERE contact_id=:s AND user_id=:u"),
        {"p": primary_id, "s": secondary_id, "u": user_id},
    )

    # Reassign tasks
    db.execute(
        text("UPDATE crm_tasks SET contact_id=:p WHERE contact_id=:s AND user_id=:u"),
        {"p": primary_id, "s": secondary_id, "u": user_id},
    )

    # Reassign notes
    db.execute(
        text("UPDATE crm_notes SET contact_id=:p WHERE contact_id=:s AND user_id=:u"),
        {"p": primary_id, "s": secondary_id, "u": user_id},
    )

    # Transfer tags
    sec_tags = db.execute(
        text("SELECT tag_id FROM crm_contact_tags WHERE contact_id=:s AND user_id=:u"),
        {"s": secondary_id, "u": user_id},
    ).fetchall()
    for row in sec_tags:
        ct_exists = db.execute(
            text("SELECT 1 FROM crm_contact_tags WHERE user_id=:u AND contact_id=:p AND tag_id=:t"),
            {"u": user_id, "p": primary_id, "t": row[0]},
        ).first()
        if not ct_exists:
            db.execute(
                text(
                    "INSERT INTO crm_contact_tags(id, user_id, contact_id, tag_id, created_at) VALUES (:id, :u, :p, :t, :now)"
                ),
                {"id": _uuid(), "u": user_id, "p": primary_id, "t": row[0], "now": now},
            )

    # Update primary with any missing secondary properties
    new_phone = c1["phone"] or c2["phone"]
    new_company = c1["company_name"] or c2["company_name"]
    new_score = max(c1["lead_score"] or 0, c2["lead_score"] or 0)

    db.execute(
        text(
            """UPDATE crm_contacts
               SET phone=:p,
                   company_name=:c,
                   lead_score=:score,
                   last_activity_at=:now,
                   updated_at=:now
               WHERE id=:id AND user_id=:u"""
        ),
        {"p": new_phone, "c": new_company, "score": new_score, "now": now, "id": primary_id, "u": user_id},
    )

    # Archive secondary
    db.execute(
        text(
            """UPDATE crm_contacts
               SET is_archived=1,
                   display_name=display_name || ' [Merged into ' || :pid || ']',
                   updated_at=:now
               WHERE id=:id AND user_id=:u"""
        ),
        {"pid": primary_id[:8], "now": now, "id": secondary_id, "u": user_id},
    )

    # Log merge event
    merge_id = _uuid()
    db.execute(
        text(
            """INSERT INTO crm_merge_events(id, user_id, primary_contact_id, secondary_contact_id, merge_strategy_json, actor_id, created_at)
               VALUES (:id, :u, :p, :s, :strat, :aid, :now)"""
        ),
        {
            "id": merge_id,
            "u": user_id,
            "p": primary_id,
            "s": secondary_id,
            "strat": json.dumps({"transferred": ["activities", "leads", "deals", "tasks", "notes", "tags"]}),
            "aid": actor_id,
            "now": now,
        },
    )

    record_activity(
        db,
        user_id=user_id,
        contact_id=primary_id,
        activity_type="MERGE_EVENT",
        actor_id=actor_id,
        summary=f"Merged duplicate contact ({c2['display_name']}) into this record",
        metadata={"secondary_contact_id": secondary_id, "secondary_email": c2["email"]},
    )

    return {"status": "MERGED", "primary_id": primary_id, "secondary_id": secondary_id}


# -------------------------------------------------------------------------
# CSV Import / Export (with Formula Injection Safeguard)
# -------------------------------------------------------------------------

def export_contacts_csv(db: Session, user_id: str, contact_ids: Optional[List[str]] = None) -> str:
    """Export contacts to CSV safely neutralizing spreadsheet formula characters."""
    query = "SELECT * FROM crm_contacts WHERE user_id=:u AND is_archived=0"
    params: Dict[str, Any] = {"u": user_id}
    if contact_ids:
        query += f" AND id IN ({','.join([':c' + str(i) for i in range(len(contact_ids))])})"
        for i, cid in enumerate(contact_ids):
            params[f"c{i}"] = cid
    query += " ORDER BY created_at DESC"

    rows = db.execute(text(query), params).mappings().all()

    output = io.StringIO()
    writer = csv.writer(output)
    headers = [
        "Display Name",
        "Email",
        "Phone",
        "Company",
        "Lifecycle Stage",
        "Lead Status",
        "Lead Score",
        "Source",
        "Created At",
        "Last Activity",
    ]
    writer.writerow(headers)

    for r in rows:
        writer.writerow(
            [
                sanitize_csv_value(r["display_name"]),
                sanitize_csv_value(r["email"]),
                sanitize_csv_value(r["phone"]),
                sanitize_csv_value(r["company_name"]),
                sanitize_csv_value(r["lifecycle_stage"]),
                sanitize_csv_value(r["lead_status"]),
                sanitize_csv_value(r["lead_score"]),
                sanitize_csv_value(r["source"]),
                sanitize_csv_value(r["created_at"]),
                sanitize_csv_value(r["last_activity_at"]),
            ]
        )

    return output.getvalue()


def export_deals_csv(db: Session, user_id: str) -> str:
    """Export deals to CSV with formula injection safeguard."""
    rows = db.execute(
        text(
            """SELECT d.*, c.display_name AS contact_name, s.name AS stage_name
               FROM crm_deals d
               LEFT JOIN crm_contacts c ON c.id = d.contact_id
               LEFT JOIN crm_pipeline_stages s ON s.id = d.stage_id
               WHERE d.user_id=:u AND d.is_archived=0
               ORDER BY d.created_at DESC"""
        ),
        {"u": user_id},
    ).mappings().all()

    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["Deal Name", "Contact", "Stage", "Amount", "Currency", "Status", "Probability", "Created At"])

    for r in rows:
        writer.writerow(
            [
                sanitize_csv_value(r["name"]),
                sanitize_csv_value(r["contact_name"]),
                sanitize_csv_value(r["stage_name"]),
                sanitize_csv_value(r["amount"]),
                sanitize_csv_value(r["currency"]),
                sanitize_csv_value(r["status"]),
                sanitize_csv_value(r["probability"]),
                sanitize_csv_value(r["created_at"]),
            ]
        )

    return output.getvalue()


def import_contacts_csv(db: Session, user_id: str, csv_text: str, filename: str = "import.csv") -> Dict[str, Any]:
    """Import contacts from CSV with duplicate detection."""
    ensure_default_pipeline_and_sources(db, user_id)
    now = now_iso()
    f = io.StringIO(csv_text)
    reader = csv.DictReader(f)

    job_id = _uuid()
    total = 0
    imported = 0
    updated = 0
    failed = 0
    errors = []

    for idx, row in enumerate(reader):
        total += 1
        name = (row.get("Display Name") or row.get("name") or row.get("Full Name") or "").strip()
        email = normalize_email(row.get("Email") or row.get("email"))
        phone = normalize_phone(row.get("Phone") or row.get("phone"))
        company = (row.get("Company") or row.get("company") or "").strip()

        if not name and not email:
            failed += 1
            errors.append(f"Row {idx+1}: Missing required name or email")
            continue

        if not name and email:
            name = email.split("@")[0]

        existing = find_contact_by_identity(db, user_id, email, phone)
        if existing:
            # Update
            db.execute(
                text(
                    """UPDATE crm_contacts
                       SET phone=COALESCE(phone, :p),
                           company_name=COALESCE(company_name, :c),
                           updated_at=:now
                       WHERE id=:id AND user_id=:u"""
                ),
                {"p": phone, "c": company or None, "now": now, "id": existing["id"], "u": user_id},
            )
            updated += 1
        else:
            cid = _uuid()
            name_parts = name.split(" ", 1)
            db.execute(
                text(
                    """INSERT INTO crm_contacts(
                           id, user_id, first_name, last_name, display_name,
                           email, phone, company_name, source, last_activity_at,
                           created_at, updated_at
                       ) VALUES (
                           :id, :u, :fn, :ln, :dn,
                           :e, :p, :comp, 'CSV', :now,
                           :now, :now
                       )"""
                ),
                {
                    "id": cid,
                    "u": user_id,
                    "fn": name_parts[0],
                    "ln": name_parts[1] if len(name_parts) > 1 else "",
                    "dn": name,
                    "e": email,
                    "p": phone,
                    "comp": company or None,
                    "now": now,
                },
            )
            imported += 1

    db.execute(
        text(
            """INSERT INTO crm_import_jobs(id, user_id, entity_type, status, total_rows, imported_rows, duplicate_rows, failed_rows, errors_json, file_name, created_at, completed_at)
               VALUES (:id, :u, 'CONTACT', 'COMPLETED', :tot, :imp, :upd, :fail, :errs, :fn, :now, :now)"""
        ),
        {
            "id": job_id,
            "u": user_id,
            "tot": total,
            "imp": imported,
            "upd": updated,
            "fail": failed,
            "errs": json.dumps(errors[:20]),
            "fn": filename,
            "now": now,
        },
    )

    return {
        "job_id": job_id,
        "total_rows": total,
        "imported_contacts": imported,
        "updated_contacts": updated,
        "failed_rows": failed,
    }


# -------------------------------------------------------------------------
# CRM Analytics Engine
# -------------------------------------------------------------------------

def get_crm_overview_analytics(db: Session, user_id: str) -> Dict[str, Any]:
    """Calculate authentic aggregate KPIs and conversion funnel from real CRM data."""
    ensure_default_pipeline_and_sources(db, user_id)

    # Contacts total
    contacts_count = db.execute(
        text("SELECT COUNT(*) FROM crm_contacts WHERE user_id=:u AND is_archived=0"),
        {"u": user_id},
    ).scalar_one()

    # Leads counts
    leads_count = db.execute(
        text("SELECT COUNT(*) FROM crm_leads WHERE user_id=:u"),
        {"u": user_id},
    ).scalar_one()

    qualified_leads = db.execute(
        text("SELECT COUNT(*) FROM crm_leads WHERE user_id=:u AND (lead_score >= 40 OR status='QUALIFIED')"),
        {"u": user_id},
    ).scalar_one()

    # Deals counts & values
    deal_stats = db.execute(
        text(
            """SELECT
                   COUNT(*) AS total_deals,
                   SUM(CASE WHEN status='OPEN' THEN amount ELSE 0 END) AS open_value,
                   SUM(CASE WHEN status='WON' THEN amount ELSE 0 END) AS won_value,
                   COUNT(CASE WHEN status='OPEN' THEN 1 END) AS open_deals,
                   COUNT(CASE WHEN status='WON' THEN 1 END) AS won_deals,
                   COUNT(CASE WHEN status='LOST' THEN 1 END) AS lost_deals
               FROM crm_deals
               WHERE user_id=:u AND is_archived=0"""
        ),
        {"u": user_id},
    ).mappings().first()

    # Real Appointments linked
    appts_count = db.execute(
        text("SELECT COUNT(*) FROM crm_activities WHERE user_id=:u AND activity_type='APPOINTMENT_BOOKED'"),
        {"u": user_id},
    ).scalar_one()

    # Tasks count
    pending_tasks = db.execute(
        text("SELECT COUNT(*) FROM crm_tasks WHERE user_id=:u AND status='TODO'"),
        {"u": user_id},
    ).scalar_one()

    # Conversion Funnel
    funnel = [
        {"stage": "Leads", "count": leads_count},
        {"stage": "Qualified", "count": qualified_leads},
        {"stage": "Appointments", "count": appts_count},
        {"stage": "Deals Created", "count": deal_stats["total_deals"]},
        {"stage": "Won Deals", "count": deal_stats["won_deals"]},
    ]

    # Leads by Source
    sources_rows = db.execute(
        text(
            """SELECT source, COUNT(*) AS cnt
               FROM crm_leads
               WHERE user_id=:u
               GROUP BY source
               ORDER BY cnt DESC"""
        ),
        {"u": user_id},
    ).fetchall()
    sources_breakdown = {r[0]: r[1] for r in sources_rows}

    # Deals by Stage
    deals_by_stage_rows = db.execute(
        text(
            """SELECT s.name, s.color, COUNT(d.id) AS cnt, COALESCE(SUM(d.amount), 0) AS val
               FROM crm_pipeline_stages s
               LEFT JOIN crm_deals d ON d.stage_id = s.id AND d.is_archived=0
               WHERE s.user_id=:u
               GROUP BY s.id, s.name, s.color, s.stage_order
               ORDER BY s.stage_order ASC"""
        ),
        {"u": user_id},
    ).mappings().all()

    return {
        "contacts_count": contacts_count,
        "leads_count": leads_count,
        "qualified_leads": qualified_leads,
        "open_deals_count": deal_stats["open_deals"],
        "open_pipeline_value": deal_stats["open_value"] or 0.0,
        "won_revenue": deal_stats["won_value"] or 0.0,
        "won_deals_count": deal_stats["won_deals"],
        "lost_deals_count": deal_stats["lost_deals"],
        "appointments_count": appts_count,
        "pending_tasks_count": pending_tasks,
        "conversion_rate": round((deal_stats["won_deals"] / leads_count * 100) if leads_count > 0 else 0.0, 1),
        "funnel": funnel,
        "sources_breakdown": sources_breakdown,
        "pipeline_stages": [dict(r) for r in deals_by_stage_rows],
        "deals": {
            "open_count": deal_stats["open_deals"],
            "open_value": deal_stats["open_value"] or 0.0,
            "won_count": deal_stats["won_deals"],
            "won_revenue": deal_stats["won_value"] or 0.0,
            "lost_count": deal_stats["lost_deals"],
        },
    }


# -------------------------------------------------------------------------
# Backfill Migration Hook
# -------------------------------------------------------------------------

def backfill_existing_leads_to_crm(db: Session) -> int:
    """Idempotently backfill pre-existing rows from `leads` table into `crm_contacts` and `crm_leads`."""
    legacy_leads = db.execute(
        text(
            """SELECT l.*, s.user_id
               FROM leads l
               JOIN sites s ON s.id = l.site_id
               WHERE l.email IS NOT NULL AND l.email != ''"""
        )
    ).mappings().all()

    backfilled_count = 0
    now = now_iso()

    for row in legacy_leads:
        user_id = row["user_id"]
        ensure_default_pipeline_and_sources(db, user_id)

        # Check if already synced
        exists = db.execute(
            text("SELECT id FROM crm_leads WHERE id=:id"),
            {"id": row["id"]},
        ).first()
        if exists:
            continue

        email = normalize_email(row["email"])
        phone = normalize_phone(row.get("phone"))
        name = (row.get("name") or "").strip() or (email.split("@")[0] if email else "Website Visitor")
        name_parts = name.split(" ", 1)

        contact = find_contact_by_identity(db, user_id, email, phone)
        if contact:
            contact_id = contact["id"]
        else:
            contact_id = _uuid()
            db.execute(
                text(
                    """INSERT INTO crm_contacts(
                           id, user_id, first_name, last_name, display_name,
                           email, phone, company_name, lifecycle_stage, lead_status,
                           lead_score, source, last_activity_at, created_at, updated_at
                       ) VALUES (
                           :id, :u, :fn, :ln, :dn,
                           :e, :p, :comp, 'LEAD', 'NEW',
                           :score, :src, :now, :created, :created
                       )"""
                ),
                {
                    "id": contact_id,
                    "u": user_id,
                    "fn": name_parts[0],
                    "ln": name_parts[1] if len(name_parts) > 1 else "",
                    "dn": name,
                    "e": email,
                    "p": phone,
                    "comp": row.get("company"),
                    "score": row.get("lead_score") or 10,
                    "src": row.get("source") or "FORM",
                    "now": now,
                    "created": row.get("created_at") or now,
                },
            )

        lead_exists = db.execute(
            text("SELECT id FROM crm_leads WHERE id=:id"),
            {"id": row["id"]},
        ).first()
        if not lead_exists:
            db.execute(
                text(
                    """INSERT INTO crm_leads(
                           id, user_id, site_id, contact_id, source,
                           status, name, email, phone, company, message, summary,
                           qualification_json, lead_score, lead_temperature, score_reasons_json,
                           session_id, conversation_id, appointment_id, page_url,
                           created_at, updated_at
                       ) VALUES (
                           :id, :u, :s, :cid, :src,
                           :st, :name, :email, :phone, :comp, :msg, :summary,
                           :qual, :score, :temp, :reasons,
                           :sess, :conv, :appt, :page,
                           :created, :created
                       )"""
                ),
                {
                    "id": row["id"],
                    "u": user_id,
                    "s": row["site_id"],
                    "cid": contact_id,
                    "src": row.get("source") or "FORM",
                    "st": row.get("status") or "NEW",
                    "name": name,
                    "email": email or "",
                    "phone": phone,
                    "comp": row.get("company"),
                    "msg": row.get("message"),
                    "summary": row.get("summary"),
                    "qual": row.get("qualification_json") or "{}",
                    "score": row.get("lead_score") or 10,
                    "temp": row.get("lead_temperature") or "WARM",
                    "reasons": row.get("score_reasons_json") or "[]",
                    "sess": row.get("session_id"),
                    "conv": row.get("conversation_id"),
                    "appt": row.get("appointment_id"),
                    "page": row.get("page_url"),
                    "created": row.get("created_at") or now,
                },
            )
            backfilled_count += 1

    return backfilled_count
