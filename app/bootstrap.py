from __future__ import annotations

from uuid import uuid4

from sqlalchemy import text

from .config import settings
from .db import SessionLocal, now_iso
from .security import hash_password


def bootstrap_super_admin() -> bool:
    """Create the initial SUPER_ADMIN from server-side environment secrets.

    This is intentionally a one-time bootstrap, not a password synchronizer:
    - when both variables are unset, startup proceeds without changing accounts;
    - when configured, a missing account is created with a salted password hash;
    - an existing SUPER_ADMIN is left untouched, so redeploys never reset its password;
    - an existing non-admin account with the same email fails closed rather than being
      silently privilege-escalated by a configuration mistake.

    Returns True only when a new SUPER_ADMIN was created.
    """
    email = str(settings.super_admin_email or '').strip().lower()
    password = str(settings.super_admin_password or '')

    if not email and not password:
        return False
    if not email or not password:
        raise RuntimeError('SUPER_ADMIN_EMAIL and SUPER_ADMIN_PASSWORD must be set together for bootstrap')
    if '@' not in email or email.startswith('@') or email.endswith('@'):
        raise RuntimeError('SUPER_ADMIN_EMAIL must be a valid email address')
    if len(password) < 16:
        raise RuntimeError('SUPER_ADMIN_PASSWORD must be at least 16 characters')

    with SessionLocal.begin() as db:
        existing = db.execute(
            text('SELECT id,role FROM users WHERE lower(email)=lower(:e) LIMIT 1'),
            {'e': email},
        ).mappings().first()
        if existing:
            if existing['role'] != 'SUPER_ADMIN':
                raise RuntimeError('SUPER_ADMIN_EMAIL belongs to an existing non-admin account; refusing automatic privilege escalation')
            return False

        uid = str(uuid4())
        stamp = now_iso()
        password_hash = hash_password(password)
        db.execute(text('''INSERT INTO users(
            id,email,password_hash,name,role,plan,plan_selected,ai_credits,lead_credits,
            email_verified,account_type,updated_at,created_at
        ) VALUES (
            :i,:e,:p,'Zylora Admin','SUPER_ADMIN','FREE',1,0,0,1,'CLIENT',:a,:a
        )'''), {'i': uid, 'e': email, 'p': password_hash, 'a': stamp})
        db.execute(text('''INSERT INTO notification_settings(
            id,user_id,site_id,email_to,updated_at,created_at
        ) VALUES (:i,:u,NULL,:e,:a,:a)'''), {
            'i': str(uuid4()), 'u': uid, 'e': email, 'a': stamp,
        })
        db.execute(text('''INSERT INTO audit_log(user_id,action,object_type,object_id,metadata,created_at)
            VALUES (:u,'SUPER_ADMIN_BOOTSTRAPPED','USER',:u,'{"source":"environment"}',:a)'''),
            {'u': uid, 'a': stamp})
    return True
