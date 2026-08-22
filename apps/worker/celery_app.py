from celery import Celery

from apps.api.app.config import settings

celery_app = Celery("zylora", broker=settings.redis_url, backend=settings.redis_url)
celery_app.conf.update(
    task_serializer="json",
    result_serializer="json",
    accept_content=["json"],
    task_acks_late=True,
    task_reject_on_worker_lost=True,
    worker_prefetch_multiplier=1,
    broker_connection_retry_on_startup=True,
    timezone=settings.default_timezone,
)
celery_app.conf.beat_schedule = {
    "recover-pending-whatsapp-notifications": {
        "task": "zylora.notifications.recover_pending",
        "schedule": 60.0,
    },
    "recover-pending-managed-lead-emails": {
        "task": "zylora.managed_emails.recover_pending",
        "schedule": 60.0,
    }
}
