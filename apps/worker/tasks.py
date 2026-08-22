from __future__ import annotations

from apps.api.app.config import settings
from apps.api.app.db import SessionLocal
from apps.api.app.services.notifications import (
    TransientNotificationError,
    pending_delivery_ids,
    process_delivery,
)
from .celery_app import celery_app


@celery_app.task(
    bind=True,
    name="zylora.notifications.deliver_whatsapp",
    max_retries=2,
    acks_late=True,
    reject_on_worker_lost=True,
)
def deliver_whatsapp_notification(self, notification_id: int) -> str:
    try:
        with SessionLocal() as db:
            return process_delivery(db, notification_id, max_attempts=settings.notification_max_attempts)
    except TransientNotificationError as exc:
        countdown = min(300, 5 * (2 ** self.request.retries))
        raise self.retry(exc=exc, countdown=countdown)


@celery_app.task(name="zylora.notifications.recover_pending")
def recover_pending_notifications() -> int:
    with SessionLocal() as db:
        ids = pending_delivery_ids(db)
    for notification_id in ids:
        deliver_whatsapp_notification.delay(notification_id)
    return len(ids)
