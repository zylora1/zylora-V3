from __future__ import annotations

from datetime import datetime
import logging
import re
from typing import Protocol
from urllib.parse import quote

from sqlalchemy import select, update
from sqlalchemy.orm import Session

from ..config import settings
from ..integrations import (
    AmbiguousIntegrationError,
    IntegrationError,
    TransientIntegrationError,
    twilio_whatsapp,
)
from ..models import Lead, NotificationDelivery, Site, User

logger = logging.getLogger(__name__)
E164 = re.compile(r"^\+[1-9]\d{7,14}$")


class NotificationError(RuntimeError):
    pass


class TransientNotificationError(NotificationError):
    pass


class WhatsAppProvider(Protocol):
    def send(self, destination: str, body: str) -> str: ...


class TwilioWhatsAppProvider:
    def send(self, destination: str, body: str) -> str:
        try:
            result = twilio_whatsapp(destination, body)
        except TransientIntegrationError as exc:
            raise TransientNotificationError(str(exc)) from exc
        except (AmbiguousIntegrationError, IntegrationError) as exc:
            raise NotificationError(str(exc)) from exc
        message_id = str(result.get("sid") or "").strip()
        if not message_id:
            raise NotificationError("twilio_missing_message_id")
        return message_id


def normalize_whatsapp_number(value: str | None) -> str | None:
    if value is None or not value.strip():
        return None
    raw = value.strip()
    if raw.lower().startswith("whatsapp:"):
        raw = raw.split(":", 1)[1]
    normalized = re.sub(r"[\s().-]", "", raw)
    if not E164.fullmatch(normalized):
        raise ValueError("invalid_whatsapp_number")
    return normalized


def _plain(value: object, limit: int) -> str:
    text = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]", "", str(value or ""))
    return re.sub(r"\s+", " ", text).strip()[:limit]


def build_new_lead_message(lead: Lead, site: Site) -> str:
    lines = [f"New lead from {_plain(site.name, 160)}", "", f"Name: {_plain(lead.name, 160)}"]
    if lead.email:
        lines.append(f"Email: {_plain(lead.email, 320)}")
    if lead.phone:
        lines.append(f"Phone: {_plain(lead.phone, 64)}")
    lines.append(f"Source: {_plain(lead.source, 32)}")
    public_url = f"{settings.public_site_base_url.rstrip('/')}/site/{quote(site.slug, safe='')}"
    lines.extend([
        f"Page: {public_url}",
        f"Submitted: {lead.created_at.isoformat()}Z",
        "",
        "View lead in Zylora:",
        f"{settings.public_base_url.rstrip('/')}/dashboard#leads",
    ])
    return "\n".join(lines)


def create_delivery(db: Session, lead: Lead) -> NotificationDelivery:
    existing = db.scalar(select(NotificationDelivery).where(
        NotificationDelivery.lead_id == lead.id,
        NotificationDelivery.channel == "WHATSAPP",
        NotificationDelivery.event_type == "NEW_LEAD",
    ))
    if existing:
        return existing
    delivery = NotificationDelivery(
        owner_id=lead.owner_id,
        site_id=lead.site_id,
        lead_id=lead.id,
        channel="WHATSAPP",
        event_type="NEW_LEAD",
        status="PENDING",
        provider="TWILIO",
    )
    db.add(delivery)
    db.flush()
    return delivery


def process_delivery(
    db: Session,
    notification_id: int,
    provider: WhatsAppProvider | None = None,
    max_attempts: int | None = None,
) -> str:
    delivery = db.get(NotificationDelivery, notification_id)
    if not delivery:
        raise NotificationError("notification_not_found")
    if delivery.status in ("SENT", "SKIPPED", "FAILED", "SENDING"):
        return delivery.status

    claimed = db.execute(
        update(NotificationDelivery)
        .where(NotificationDelivery.id == notification_id, NotificationDelivery.status == "PENDING")
        .values(status="SENDING", attempt_count=NotificationDelivery.attempt_count + 1)
    )
    db.commit()
    if claimed.rowcount != 1:
        return db.get(NotificationDelivery, notification_id).status

    delivery = db.get(NotificationDelivery, notification_id)
    lead = db.get(Lead, delivery.lead_id)
    site = db.get(Site, delivery.site_id)
    owner = db.get(User, delivery.owner_id)
    if not lead or not site or not owner or lead.site_id != site.id or lead.owner_id != owner.id or site.owner_id != owner.id:
        delivery.status = "FAILED"
        delivery.last_error = "notification_tenant_integrity_failed"
        delivery.failed_at = datetime.utcnow()
        db.commit()
        logger.error("notification tenant integrity failure", extra={"notification_id": delivery.id, "lead_id": delivery.lead_id, "site_id": delivery.site_id, "owner_id": delivery.owner_id})
        return delivery.status

    try:
        destination = normalize_whatsapp_number(owner.whatsapp_number)
    except ValueError:
        delivery.status = "FAILED"
        delivery.last_error = "invalid_owner_whatsapp_number"
        delivery.failed_at = datetime.utcnow()
        db.commit()
        logger.warning("invalid stored WhatsApp destination", extra={"notification_id": delivery.id, "lead_id": lead.id, "site_id": site.id, "owner_id": owner.id, "status": delivery.status})
        return delivery.status
    if not destination:
        delivery.status = "SKIPPED"
        delivery.last_error = "owner_whatsapp_not_configured"
        db.commit()
        logger.info("WhatsApp notification skipped", extra={"notification_id": delivery.id, "lead_id": lead.id, "site_id": site.id, "owner_id": owner.id, "status": delivery.status})
        return delivery.status

    try:
        message_id = (provider or TwilioWhatsAppProvider()).send(destination, build_new_lead_message(lead, site))
    except TransientNotificationError as exc:
        limit = max_attempts or settings.notification_max_attempts
        delivery.last_error = _plain(exc, 500)
        if delivery.attempt_count >= limit:
            delivery.status = "FAILED"
            delivery.failed_at = datetime.utcnow()
        else:
            delivery.status = "PENDING"
        db.commit()
        logger.warning("transient WhatsApp delivery failure", extra={"notification_id": delivery.id, "lead_id": lead.id, "site_id": site.id, "owner_id": owner.id, "status": delivery.status, "attempt_count": delivery.attempt_count})
        if delivery.status == "PENDING":
            raise
        return delivery.status
    except NotificationError as exc:
        delivery.status = "FAILED"
        delivery.last_error = _plain(exc, 500)
        delivery.failed_at = datetime.utcnow()
        db.commit()
        logger.warning("permanent WhatsApp delivery failure", extra={"notification_id": delivery.id, "lead_id": lead.id, "site_id": site.id, "owner_id": owner.id, "status": delivery.status, "attempt_count": delivery.attempt_count})
        return delivery.status

    delivery.status = "SENT"
    delivery.provider_message_id = message_id
    delivery.last_error = None
    delivery.sent_at = datetime.utcnow()
    delivery.failed_at = None
    db.commit()
    logger.info("WhatsApp notification sent", extra={"notification_id": delivery.id, "lead_id": lead.id, "site_id": site.id, "owner_id": owner.id, "provider_message_id": message_id, "status": delivery.status})
    return delivery.status


def mark_enqueue_error(db: Session, notification_id: int, error: Exception) -> None:
    delivery = db.get(NotificationDelivery, notification_id)
    if delivery and delivery.status == "PENDING":
        delivery.last_error = "queue_unavailable:" + _plain(error, 300)
        db.commit()


def dispatch_delivery(db: Session, notification_id: int) -> None:
    if settings.notification_delivery_mode.lower() == "inline":
        try:
            process_delivery(db, notification_id)
        except TransientNotificationError:
            # Lead capture remains successful. A later inline call or the recovery
            # task can retry the still-PENDING delivery.
            pass
        return
    try:
        from apps.worker.tasks import deliver_whatsapp_notification
        deliver_whatsapp_notification.delay(notification_id)
    except Exception as exc:
        mark_enqueue_error(db, notification_id, exc)
        logger.exception("failed to enqueue WhatsApp notification", extra={"notification_id": notification_id})


def pending_delivery_ids(db: Session, limit: int = 200) -> list[int]:
    return list(db.scalars(
        select(NotificationDelivery.id)
        .where(NotificationDelivery.status == "PENDING")
        .order_by(NotificationDelivery.created_at.asc())
        .limit(limit)
    ).all())
