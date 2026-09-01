from __future__ import annotations
from sqlalchemy import text
from .db import SessionLocal
from .config import settings

def get_system_setting(key: str, default: str|None=None) -> str|None:
    try:
        with SessionLocal() as db:
            row=db.execute(text('SELECT value FROM system_settings WHERE key=:k'),{'k':key}).first()
        if row: return row[0]
    except Exception:
        pass
    if key=='admin_notification_email': return settings.admin_notification_email
    return default
