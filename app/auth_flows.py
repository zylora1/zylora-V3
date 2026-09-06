from __future__ import annotations
import hashlib, secrets
from datetime import datetime, timedelta, timezone
from uuid import uuid4
from sqlalchemy import text
from .db import SessionLocal, now_iso
from .providers import send_email
from .config import settings
from .operations import record_operational_event, safe_exception_summary

PURPOSES={'VERIFY_EMAIL':24*60,'RESET_PASSWORD':30}

def issue_auth_token(user_id: str, purpose: str, email: str) -> str:
    if purpose not in PURPOSES: raise ValueError('Unknown token purpose')
    raw=secrets.token_urlsafe(32)
    digest=hashlib.sha256(raw.encode()).hexdigest()
    expires=(datetime.now(timezone.utc)+timedelta(minutes=PURPOSES[purpose])).isoformat()
    with SessionLocal.begin() as db:
        db.execute(text('UPDATE auth_tokens SET consumed=1 WHERE user_id=:u AND purpose=:p AND consumed=0'),{'u':user_id,'p':purpose})
        db.execute(text('INSERT INTO auth_tokens(id,user_id,purpose,token_hash,expires_at,consumed,created_at) VALUES (:i,:u,:p,:h,:e,0,:c)'),{'i':str(uuid4()),'u':user_id,'p':purpose,'h':digest,'e':expires,'c':now_iso()})
    try:
        if purpose=='VERIFY_EMAIL':
            url=f"{settings.app_url}/verify-email?token={raw}"
            send_email(email,'Verify your Zylora email',f'Verify your email address to publish websites on Zylora:\n\n{url}\n\nThis link expires in 24 hours.')
        else:
            url=f"{settings.app_url}/reset-password?token={raw}"
            send_email(email,'Reset your Zylora password',f'Reset your Zylora password:\n\n{url}\n\nThis link expires in 30 minutes. If you did not request this, ignore this message.')
    except Exception as exc:
        # The API deliberately returns a generic response for account-enumeration
        # resistance. Preserve the token and record the provider failure instead of
        # turning a transient email outage into a raw 500 response.
        record_operational_event('NOTIFICATIONS','AUTH_EMAIL_DELIVERY_FAILED',safe_exception_summary(exc),severity='ERROR',metadata={'purpose':purpose})
    return raw

def consume_auth_token(raw: str, purpose: str) -> dict | None:
    digest=hashlib.sha256(raw.encode()).hexdigest()
    now=now_iso()
    with SessionLocal.begin() as db:
        row=db.execute(text('''UPDATE auth_tokens SET consumed=1
            WHERE id=(SELECT id FROM auth_tokens WHERE token_hash=:h AND purpose=:p AND consumed=0 AND expires_at>:n LIMIT 1)
              AND consumed=0
            RETURNING *'''),{'h':digest,'p':purpose,'n':now}).mappings().first()
        if not row: return None
        user=db.execute(text('SELECT email,name FROM users WHERE id=:u'),{'u':row['user_id']}).mappings().first()
        if not user: return None
        return {**dict(row),**dict(user)}
