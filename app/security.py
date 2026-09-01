from __future__ import annotations
import base64, hashlib, hmac, os, secrets, time
from datetime import datetime, timedelta, timezone
from fastapi import Cookie, Header, HTTPException, Request
from sqlalchemy import text
from .db import SessionLocal, now_iso, engine
from .config import settings

def hash_password(password: str) -> str:
    salt = os.urandom(16)
    derived = hashlib.scrypt(password.encode(), salt=salt, n=2**14, r=8, p=1)
    return base64.b64encode(salt + derived).decode()

def verify_password(password: str, encoded: str) -> bool:
    raw = base64.b64decode(encoded.encode())
    salt, expected = raw[:16], raw[16:]
    actual = hashlib.scrypt(password.encode(), salt=salt, n=2**14, r=8, p=1)
    return hmac.compare_digest(actual, expected)

def new_session(user_id: str) -> tuple[str, str, str]:
    token = secrets.token_urlsafe(32)
    csrf = secrets.token_urlsafe(24)
    expires = (datetime.now(timezone.utc) + timedelta(hours=settings.session_ttl_hours)).isoformat()
    with SessionLocal.begin() as db:
        db.execute(text('INSERT INTO sessions(token,user_id,csrf_token,expires_at,created_at) VALUES (:t,:u,:c,:e,:a)'),
                   {'t': token, 'u': user_id, 'c': csrf, 'e': expires, 'a': now_iso()})
    return token, csrf, expires

def current_user(request: Request):
    token = request.cookies.get('zylora_session')
    if not token:
        raise HTTPException(401, 'Authentication required')
    with SessionLocal() as db:
        row = db.execute(text('''SELECT u.*, s.csrf_token, s.expires_at, s.created_at AS session_created_at FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=:t'''), {'t':token}).mappings().first()
        if not row:
            raise HTTPException(401, 'Invalid session')
        exp = row['expires_at']
        if isinstance(exp, datetime):
            exp_dt = exp if exp.tzinfo else exp.replace(tzinfo=timezone.utc)
        elif isinstance(exp, str):
            exp_dt = datetime.fromisoformat(exp)
            if not exp_dt.tzinfo:
                exp_dt = exp_dt.replace(tzinfo=timezone.utc)
        else:
            exp_dt = datetime.fromisoformat(str(exp))
            if not exp_dt.tzinfo:
                exp_dt = exp_dt.replace(tzinfo=timezone.utc)
        if exp_dt < datetime.now(timezone.utc):
            raise HTTPException(401, 'Session expired')
        return dict(row)

def require_csrf(request: Request, user: dict, x_csrf_token: str | None = Header(default=None)):
    if request.method in {'POST','PUT','PATCH','DELETE'} and x_csrf_token != user['csrf_token']:
        raise HTTPException(403, 'CSRF validation failed')

_RATE: dict[str, list[float]] = {}
def rate_limit(key: str, limit: int, window_seconds: int):
    now = time.time()
    values = [t for t in _RATE.get(key, []) if now - t < window_seconds]
    if len(values) >= limit:
        raise HTTPException(429, 'Too many requests')
    values.append(now)
    _RATE[key] = values



def durable_rate_limit(key: str, limit: int, window_seconds: int):
    """Atomically consume one slot from a database-backed fixed-window limiter.

    A single INSERT .. ON CONFLICT .. DO UPDATE statement is used on both SQLite
    and PostgreSQL. The conflict update is guarded by the current request count,
    so concurrent workers cannot each observe the same stale value and overshoot
    the configured limit. If the guard rejects the update, RETURNING yields no
    row and the request is rate-limited.
    """
    if limit <= 0 or window_seconds <= 0:
        raise ValueError('limit and window_seconds must be positive')
    bucket=hashlib.sha256(key.encode('utf-8')).hexdigest()
    now=int(time.time())
    start=now-(now % window_seconds)
    stamp=now_iso()
    sql=text('''INSERT INTO rate_limit_buckets(bucket_key,window_started,request_count,updated_at)
        VALUES (:k,:w,1,:a)
        ON CONFLICT(bucket_key) DO UPDATE SET
          window_started=excluded.window_started,
          request_count=CASE
            WHEN rate_limit_buckets.window_started=excluded.window_started
              THEN rate_limit_buckets.request_count+1
            ELSE 1
          END,
          updated_at=excluded.updated_at
        WHERE rate_limit_buckets.window_started<>excluded.window_started
           OR rate_limit_buckets.request_count<:l
        RETURNING request_count''')
    with SessionLocal.begin() as db:
        row=db.execute(sql,{'k':bucket,'w':start,'a':stamp,'l':limit}).first()
        if not row:
            raise HTTPException(429,'Too many requests')

def clear_rate_limits() -> None:
    _RATE.clear()
