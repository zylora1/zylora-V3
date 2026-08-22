from __future__ import annotations
import logging, time
from sqlalchemy import text
from sqlalchemy.orm import Session
from ..config import settings
log=logging.getLogger("zylora")

def readiness(db:Session)->dict:
    checks={}
    try: db.execute(text("SELECT 1")); checks["database"]="ok"
    except Exception: checks["database"]="failed"
    checks["secret_key"]="ok" if len(settings.secret_key)>=32 and settings.secret_key!='dev-secret' else "unsafe"
    checks["providers"]={"google":bool(settings.google_client_id),"razorpay":bool(settings.razorpay_key_id and settings.razorpay_key_secret and settings.razorpay_webhook_secret),"resend":bool(settings.resend_api_key),"twilio":bool(settings.twilio_account_sid and settings.twilio_auth_token and settings.twilio_whatsapp_from),"cloudflare":bool(settings.cloudflare_api_token and settings.cloudflare_zone_id),"turnstile":bool(settings.turnstile_secret_key)}
    return {"ready":checks["database"]=="ok" and checks["secret_key"]=="ok","checks":checks,"timestamp":int(time.time())}
