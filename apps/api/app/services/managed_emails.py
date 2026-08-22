from __future__ import annotations

from datetime import datetime, timedelta, timezone
from html import escape
import logging
import re
from typing import Protocol
from zoneinfo import ZoneInfo

from sqlalchemy import select, update
from sqlalchemy.orm import Session

from ..config import settings
from ..integrations import IntegrationError, TransientIntegrationError, resend_email
from ..models import Appointment, ManagedLead, ManagedLeadEmailDelivery
from .admin import LEAD_NOTIFICATION_EMAIL_KEY, get_config, normalize_notification_email

logger = logging.getLogger(__name__)
CUSTOMER_CONFIRMATION = "CUSTOMER_CONFIRMATION"
ADMIN_NOTIFICATION = "ADMIN_NOTIFICATION"


class ManagedEmailError(RuntimeError): pass
class TransientManagedEmailError(ManagedEmailError): pass


class EmailProvider(Protocol):
    def send(self, delivery: ManagedLeadEmailDelivery) -> str: ...


class ResendProvider:
    def send(self, delivery: ManagedLeadEmailDelivery) -> str:
        try:
            result=resend_email(
                delivery.recipient, delivery.subject, delivery.html,
                idempotency_key=f"managed-lead/{delivery.managed_lead_id}/{delivery.kind.lower()}",
            )
        except TransientIntegrationError as exc:
            raise TransientManagedEmailError(str(exc)) from exc
        except IntegrationError as exc:
            raise ManagedEmailError(str(exc)) from exc
        message_id=str(result.get("id") or "").strip()
        if not message_id: raise ManagedEmailError("resend_missing_message_id")
        return message_id


def _subject_name(value: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"[\r\n\x00-\x1f\x7f]", "", value)).strip()[:120]


def _submitted_at(lead: ManagedLead, appointment: Appointment) -> str:
    created=lead.created_at.replace(tzinfo=timezone.utc) if lead.created_at.tzinfo is None else lead.created_at.astimezone(timezone.utc)
    try: local=created.astimezone(ZoneInfo(appointment.timezone))
    except Exception: local=created
    return local.strftime("%d %b %Y, %I:%M %p %Z")


def _contact_time(appointment: Appointment) -> str:
    start=appointment.starts_at.replace(tzinfo=timezone.utc) if appointment.starts_at.tzinfo is None else appointment.starts_at.astimezone(timezone.utc)
    try: local=start.astimezone(ZoneInfo(appointment.timezone))
    except Exception: local=start
    return local.strftime("%d %b %Y, %I:%M %p %Z")


def _layout(title: str, body: str) -> str:
    return f'<div style="font-family:Arial,sans-serif;color:#17202a;line-height:1.6"><h2>{escape(title)}</h2>{body}<p>— Zylora</p></div>'


def _customer_html(lead: ManagedLead, appointment: Appointment) -> str:
    return _layout("Your Managed-by-experts enquiry has been received", (
        "<p>Thank you for contacting Zylora. Our team will review your project and contact you at the selected time.</p>"
        f"<p><strong>Reference:</strong> {escape(lead.lead_code)}<br>"
        f"<strong>Preferred contact time:</strong> {escape(_contact_time(appointment))}</p>"
        "<p>Please keep this reference for future correspondence.</p>"
    ))


def _admin_html(lead: ManagedLead, appointment: Appointment) -> str:
    admin_url=f"{settings.public_base_url.rstrip('/')}/admin#managed-leads"
    return _layout("New Managed-by-experts enquiry", (
        f"<p><strong>Reference:</strong> {escape(lead.lead_code)}<br>"
        f"<strong>Name:</strong> {escape(lead.name)}<br>"
        f"<strong>Email:</strong> {escape(lead.email)}<br>"
        f"<strong>Website/project type:</strong> {escape(lead.website_type)}<br>"
        f"<strong>Preferred contact time:</strong> {escape(_contact_time(appointment))}<br>"
        f"<strong>Submitted:</strong> {escape(_submitted_at(lead, appointment))}<br>"
        f"<strong>Status:</strong> {escape(str(lead.status))}</p>"
        f'<p><a href="{escape(admin_url, quote=True)}">Open this lead in Zylora</a></p>'
    ))


def create_deliveries(db: Session, lead: ManagedLead, appointment: Appointment) -> list[ManagedLeadEmailDelivery]:
    existing=list(db.scalars(select(ManagedLeadEmailDelivery).where(ManagedLeadEmailDelivery.managed_lead_id==lead.id)).all())
    by_kind={item.kind:item for item in existing}
    if CUSTOMER_CONFIRMATION not in by_kind:
        item=ManagedLeadEmailDelivery(
            managed_lead_id=lead.id, kind=CUSTOMER_CONFIRMATION, recipient=lead.email,
            subject=f"Your Zylora enquiry has been received — {lead.lead_code}",
            html=_customer_html(lead, appointment), status="PENDING", provider="RESEND",
        )
        db.add(item); by_kind[item.kind]=item
    raw_admin=get_config(db, LEAD_NOTIFICATION_EMAIL_KEY)
    try: admin_email=normalize_notification_email(raw_admin)
    except ValueError:
        admin_email=None
        logger.error("managed lead admin email skipped: stored notification recipient is invalid",extra={"managed_lead_id":lead.id})
    if admin_email and ADMIN_NOTIFICATION not in by_kind:
        item=ManagedLeadEmailDelivery(
            managed_lead_id=lead.id, kind=ADMIN_NOTIFICATION, recipient=admin_email,
            subject=f"New Zylora lead — {lead.lead_code} — {_subject_name(lead.name)}",
            html=_admin_html(lead, appointment), status="PENDING", provider="RESEND",
        )
        db.add(item); by_kind[item.kind]=item
    elif not admin_email:
        logger.warning("managed lead admin email skipped: notification recipient is not configured", extra={"managed_lead_id":lead.id})
    db.flush()
    return list(by_kind.values())


def process_delivery(db: Session, delivery_id: int, provider: EmailProvider | None=None, max_attempts: int | None=None) -> str:
    delivery=db.get(ManagedLeadEmailDelivery, delivery_id)
    if not delivery: raise ManagedEmailError("managed_email_not_found")
    if delivery.status in ("SENT","FAILED","SENDING"): return delivery.status
    claimed=db.execute(update(ManagedLeadEmailDelivery).where(
        ManagedLeadEmailDelivery.id==delivery_id, ManagedLeadEmailDelivery.status=="PENDING"
    ).values(status="SENDING",claimed_at=datetime.utcnow(),attempt_count=ManagedLeadEmailDelivery.attempt_count+1))
    db.commit()
    if claimed.rowcount!=1: return db.get(ManagedLeadEmailDelivery,delivery_id).status
    delivery=db.get(ManagedLeadEmailDelivery,delivery_id)
    try: message_id=(provider or ResendProvider()).send(delivery)
    except TransientManagedEmailError as exc:
        delivery.last_error=str(exc)[:500]
        if delivery.attempt_count >= (max_attempts or settings.notification_max_attempts):
            delivery.status="FAILED";delivery.failed_at=datetime.utcnow()
        else: delivery.status="PENDING"
        db.commit()
        if delivery.status=="PENDING": raise
        return delivery.status
    except ManagedEmailError as exc:
        delivery.status="FAILED";delivery.last_error=str(exc)[:500];delivery.failed_at=datetime.utcnow();db.commit()
        return delivery.status
    delivery.status="SENT";delivery.provider_message_id=message_id;delivery.last_error=None;delivery.sent_at=datetime.utcnow();delivery.failed_at=None;delivery.claimed_at=None;db.commit()
    return delivery.status


def dispatch_delivery(db: Session, delivery_id: int) -> None:
    if settings.notification_delivery_mode.lower()=="inline":
        try: process_delivery(db,delivery_id)
        except TransientManagedEmailError: pass
        return
    try:
        from apps.worker.tasks import deliver_managed_lead_email
        deliver_managed_lead_email.delay(delivery_id)
    except Exception as exc:
        delivery=db.get(ManagedLeadEmailDelivery,delivery_id)
        if delivery and delivery.status=="PENDING": delivery.last_error=("queue_unavailable:"+str(exc))[:500];db.commit()
        logger.exception("failed to enqueue managed lead email",extra={"delivery_id":delivery_id})


def pending_delivery_ids(db: Session, limit: int=200) -> list[int]:
    stale=datetime.utcnow()-timedelta(minutes=10)
    db.execute(update(ManagedLeadEmailDelivery).where(
        ManagedLeadEmailDelivery.status=="SENDING", ManagedLeadEmailDelivery.claimed_at < stale
    ).values(status="PENDING",claimed_at=None,last_error="recovered_after_worker_restart"))
    db.commit()
    return list(db.scalars(select(ManagedLeadEmailDelivery.id).where(
        ManagedLeadEmailDelivery.status=="PENDING"
    ).order_by(ManagedLeadEmailDelivery.created_at).limit(limit)).all())
