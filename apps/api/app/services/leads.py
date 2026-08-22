from __future__ import annotations

import re
from uuid import uuid4

from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from ..enums import LeadSource, SiteState
from ..models import Lead, NotificationDelivery, Site, User
from .notifications import create_delivery, dispatch_delivery


class LeadError(ValueError):
    pass


EMAIL = re.compile(r"^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,63}$")
REQUEST_KEY = re.compile(r"^[A-Za-z0-9._:-]{8,128}$")


def _clean_single_line(value: str, limit: int, field: str) -> str:
    text = re.sub(r"[\x00-\x1f\x7f]", " ", value or "")
    text = re.sub(r"\s+", " ", text).strip()
    if not text or len(text) > limit:
        raise LeadError(f"invalid_{field}")
    return text


def _clean_optional_line(value: str | None, limit: int, field: str) -> str | None:
    if value is None or not value.strip():
        return None
    return _clean_single_line(value, limit, field)


def _clean_message(value: str | None) -> str | None:
    if value is None or not value.strip():
        return None
    text = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]", "", value)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    if len(text) > 2000:
        raise LeadError("invalid_message")
    return text


def capture_lead(
    db: Session,
    site_id: int,
    source: str,
    name: str,
    email: str,
    phone: str | None = None,
    message: str | None = None,
    client_request_id: str | None = None,
) -> Lead:
    site = db.get(Site, site_id)
    if not site or site.state != SiteState.LIVE:
        raise LeadError("site_not_found")
    if source not in tuple(LeadSource):
        raise LeadError("invalid_source")

    clean_name = _clean_single_line(name, 160, "name")
    clean_email = _clean_single_line(email, 320, "email").lower()
    if not EMAIL.fullmatch(clean_email):
        raise LeadError("invalid_email")
    clean_phone = _clean_optional_line(phone, 64, "phone")
    clean_message = _clean_message(message)
    request_id = client_request_id or str(uuid4())
    if not REQUEST_KEY.fullmatch(request_id):
        raise LeadError("invalid_idempotency_key")

    existing = db.scalar(select(Lead).where(Lead.site_id == site.id, Lead.client_request_id == request_id))
    if existing:
        if (existing.source, existing.name, existing.email, existing.phone, existing.message) != (source, clean_name, clean_email, clean_phone, clean_message):
            raise LeadError("idempotency_conflict")
        return existing

    lead = Lead(
        owner_id=site.owner_id,
        site_id=site.id,
        source=source,
        name=clean_name,
        email=clean_email,
        phone=clean_phone,
        message=clean_message,
        client_request_id=request_id,
    )
    db.add(lead)
    try:
        db.flush()
        delivery = create_delivery(db, lead)
        db.commit()
    except IntegrityError:
        db.rollback()
        existing = db.scalar(select(Lead).where(Lead.site_id == site.id, Lead.client_request_id == request_id))
        if not existing:
            raise
        return existing
    db.refresh(lead)
    dispatch_delivery(db, delivery.id)
    return lead


def leads_for_owner(db: Session, owner: User) -> list[Lead]:
    return list(db.scalars(select(Lead).where(Lead.owner_id == owner.id).order_by(Lead.created_at.desc())).all())


def notification_statuses_for_owner(db: Session, owner: User) -> dict[int, str]:
    rows = db.execute(
        select(NotificationDelivery.lead_id, NotificationDelivery.status).where(
            NotificationDelivery.owner_id == owner.id,
            NotificationDelivery.channel == "WHATSAPP",
            NotificationDelivery.event_type == "NEW_LEAD",
        )
    ).all()
    return {lead_id: status for lead_id, status in rows}
