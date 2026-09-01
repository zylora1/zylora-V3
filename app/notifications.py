from __future__ import annotations
import hashlib
from datetime import datetime, timedelta, timezone
from uuid import uuid4
from fastapi import HTTPException
from sqlalchemy import text
from .config import settings
from .db import SessionLocal, now_iso
from .providers import send_email, send_whatsapp
from .settings_store import get_system_setting
from .credits import reserve_wallet, finalize_wallet, refund_wallet
from .operations import safe_exception_summary


def _effective_settings(user_id:str,site_id:str):
    with SessionLocal() as db:
        site=db.execute(text('SELECT * FROM notification_settings WHERE user_id=:u AND site_id=:s'),{'u':user_id,'s':site_id}).mappings().first()
        account=db.execute(text('SELECT * FROM notification_settings WHERE user_id=:u AND site_id IS NULL'),{'u':user_id}).mappings().first()
        return dict(site or account or {})

def _credit_cost(channel:str)->int:
    key='lead_email_credit_cost' if channel=='EMAIL' else 'lead_whatsapp_credit_cost'
    try: return max(0,min(100,int(get_system_setting(key,'1'))))
    except Exception: return 1

def _retry_policy() -> tuple[int,int]:
    try: attempts=max(1,min(10,int(get_system_setting('notification_retry_max_attempts','4'))))
    except Exception: attempts=4
    try: base=max(15,min(3600,int(get_system_setting('notification_retry_base_seconds','60'))))
    except Exception: base=60
    return attempts,base

def _next_retry(attempt_count:int) -> str:
    _,base=_retry_policy(); seconds=min(6*3600,base*(2**max(0,attempt_count-1)))
    return (datetime.now(timezone.utc)+timedelta(seconds=seconds)).isoformat()

def _delivery(user_id:str,site_id:str,event_type:str,channel:str,recipient:str,subject:str,body:str,idempotency_key:str)->dict:
    idem=hashlib.sha256(f'{idempotency_key}|{channel}|{recipient}'.encode()).hexdigest()[:120]
    txid=None; delivery_id=str(uuid4()); cost=_credit_cost(channel)
    try:
        with SessionLocal.begin() as db:
            existing=db.execute(text('''SELECT * FROM notification_deliveries WHERE user_id=:u AND idempotency_key=:k AND channel=:c AND recipient=:r'''),
                {'u':user_id,'k':idem,'c':channel,'r':recipient}).mappings().first()
            if existing: return {**dict(existing),'idempotent':True}
            user=db.execute(text('SELECT plan FROM users WHERE id=:u'),{'u':user_id}).mappings().first()
            if not user: return {'status':'FAILED','error':'User not found'}
            reserved=reserve_wallet(db,user_id,user['plan'],cost,f'LEAD_{channel}',credit_type='lead',idempotency_key=idem,reference_id=site_id)
            txid=reserved.get('id')
            max_attempts,_=_retry_policy()
            db.execute(text('''INSERT INTO notification_deliveries(id,user_id,site_id,event_type,channel,recipient,idempotency_key,
              credit_transaction_id,subject,body,status,attempt_count,max_attempts,created_at,updated_at) VALUES (:i,:u,:s,:e,:c,:r,:k,:t,:sub,:b,'PENDING',0,:mx,:a,:a)'''),
              {'i':delivery_id,'u':user_id,'s':site_id,'e':event_type,'c':channel,'r':recipient,'k':idem,'t':txid,'sub':subject,'b':body,'mx':max_attempts,'a':now_iso()})
    except HTTPException as exc:
        if exc.status_code==402:
            with SessionLocal.begin() as db:
                db.execute(text('''INSERT INTO notification_deliveries(id,user_id,site_id,event_type,channel,recipient,idempotency_key,status,attempt_count,last_error,created_at,updated_at)
                  VALUES (:i,:u,:s,:e,:c,:r,:k,'SKIPPED_CREDITS',0,:x,:a,:a)
                  ON CONFLICT(user_id,idempotency_key,channel,recipient) DO NOTHING'''),
                  {'i':delivery_id,'u':user_id,'s':site_id,'e':event_type,'c':channel,'r':recipient,'k':idem,'x':str(exc.detail),'a':now_iso()})
            return {'status':'SKIPPED_CREDITS','error':exc.detail,'credit_type':'lead'}
        raise
    try:
        result=send_email(recipient,subject,body) if channel=='EMAIL' else send_whatsapp(recipient,body)
        with SessionLocal.begin() as db:
            if txid: finalize_wallet(db,txid)
            db.execute(text("UPDATE notification_deliveries SET provider=:p,provider_message_id=:m,status='SENT',attempt_count=attempt_count+1,updated_at=:a WHERE id=:i"),
                {'p':result.get('provider'),'m':result.get('message_id'),'a':now_iso(),'i':delivery_id})
        return {'status':'SENT','channel':channel,'provider':result.get('provider'),'credit_cost':cost}
    except Exception as exc:
        with SessionLocal.begin() as db:
            if txid:
                try: refund_wallet(db,txid,'provider failure')
                except Exception: pass
            db.execute(text("UPDATE notification_deliveries SET status=CASE WHEN attempt_count+1>=max_attempts THEN 'DEAD_LETTER' ELSE 'FAILED' END,attempt_count=attempt_count+1,last_error=:x,next_attempt_at=CASE WHEN attempt_count+1>=max_attempts THEN NULL ELSE :n END,dead_lettered_at=CASE WHEN attempt_count+1>=max_attempts THEN :a ELSE NULL END,updated_at=:a WHERE id=:i"),
                {'x':safe_exception_summary(exc),'n':_next_retry(1),'a':now_iso(),'i':delivery_id})
        try:
            from .operations import record_operational_event
            record_operational_event('NOTIFICATIONS','DELIVERY_PROVIDER_FAILED',safe_exception_summary(exc),severity='ERROR',user_id=user_id,site_id=site_id,metadata={'delivery_id':delivery_id,'channel':channel})
        except Exception: pass
        return {'status':'FAILED','channel':channel,'error':'Notification delivery failed'}

def notify(user_id:str,site_id:str,event_type:str,subject:str,body:str,idempotency_key:str|None=None):
    cfg=_effective_settings(user_id,site_id)
    with SessionLocal() as db:
        user=db.execute(text('SELECT email FROM users WHERE id=:u'),{'u':user_id}).scalar_one()
    base=idempotency_key or hashlib.sha256(f'{site_id}|{event_type}|{subject}|{body}'.encode()).hexdigest()
    deliveries=[]
    email_to=cfg.get('email_to') or user
    if email_to: deliveries.append(_delivery(user_id,site_id,event_type,'EMAIL',email_to,subject,body,base))
    # Admin copies are platform operational mail and intentionally do not consume the tenant's lead credits.
    admin_email=get_system_setting('admin_notification_email',settings.admin_notification_email)
    if admin_email and admin_email!=email_to:
        try: send_email(admin_email,f'[Admin copy] {subject}',body)
        except Exception: pass
    toggle_map={'FORM_LEAD':'notify_new_form_lead','CHATBOT_LEAD':'notify_new_chatbot_lead','APPOINTMENT':'notify_new_appointment',
      'APPOINTMENT_CHANGE':'notify_appointment_cancelled_or_rescheduled','OTHER':'notify_other_enquiries'}
    enabled=bool(cfg.get(toggle_map.get(event_type,'notify_other_enquiries'),1))
    if cfg.get('whatsapp_verified') and cfg.get('phone_number') and enabled:
        recipient=f"{cfg.get('country_code','+91')}{cfg['phone_number']}"
        deliveries.append(_delivery(user_id,site_id,event_type,'WHATSAPP',recipient,subject,body,base))
    return {'deliveries':deliveries}


def retry_delivery(delivery_id: str, *, force: bool=False) -> dict:
    """Claim and retry one stored delivery. The conditional claim prevents duplicate sends across workers."""
    now=now_iso()
    with SessionLocal.begin() as db:
        row=db.execute(text('SELECT * FROM notification_deliveries WHERE id=:i'),{'i':delivery_id}).mappings().first()
        if not row: return {'status':'MISSING','id':delivery_id}
        row=dict(row)
        if row['status']=='SENT': return {'status':'SENT','id':delivery_id,'idempotent':True}
        if row['status']=='SKIPPED_CREDITS': return {'status':'SKIPPED_CREDITS','id':delivery_id}
        if int(row.get('attempt_count') or 0)>=int(row.get('max_attempts') or 4) and not force:
            return {'status':'DEAD_LETTER','id':delivery_id}
        if not force and row.get('next_attempt_at'):
            try:
                due=datetime.fromisoformat(str(row['next_attempt_at']).replace('Z','+00:00'))
                if due.tzinfo is None: due=due.replace(tzinfo=timezone.utc)
                if due>datetime.now(timezone.utc): return {'status':'NOT_DUE','id':delivery_id,'next_attempt_at':row['next_attempt_at']}
            except Exception: pass
        claimed=db.execute(text("UPDATE notification_deliveries SET status='RETRYING',updated_at=:a WHERE id=:i AND status IN ('FAILED','DEAD_LETTER','PENDING')"),{'a':now,'i':delivery_id})
        if claimed.rowcount!=1: return {'status':'BUSY','id':delivery_id}
        user=db.execute(text('SELECT plan FROM users WHERE id=:u'),{'u':row['user_id']}).mappings().first()
        if not user:
            db.execute(text("UPDATE notification_deliveries SET status='DEAD_LETTER',last_error='User not found',dead_lettered_at=:a,updated_at=:a WHERE id=:i"),{'a':now,'i':delivery_id})
            return {'status':'DEAD_LETTER','id':delivery_id}
        cost=_credit_cost(row['channel'])
        try:
            reserved=reserve_wallet(db,row['user_id'],user['plan'],cost,f"LEAD_{row['channel']}_RETRY",credit_type='lead',idempotency_key=f"delivery-retry:{delivery_id}:{int(row.get('attempt_count') or 0)+1}",reference_id=row['site_id'])
            txid=reserved.get('id')
            db.execute(text('UPDATE notification_deliveries SET credit_transaction_id=:t WHERE id=:i'),{'t':txid,'i':delivery_id})
        except HTTPException as exc:
            db.execute(text("UPDATE notification_deliveries SET status='SKIPPED_CREDITS',last_error=:x,next_attempt_at=NULL,updated_at=:a WHERE id=:i"),{'x':str(exc.detail)[:1000],'a':now_iso(),'i':delivery_id})
            return {'status':'SKIPPED_CREDITS','id':delivery_id}
    try:
        result=send_email(row['recipient'],row.get('subject') or 'Zylora notification',row.get('body') or '') if row['channel']=='EMAIL' else send_whatsapp(row['recipient'],row.get('body') or '')
        with SessionLocal.begin() as db:
            if txid: finalize_wallet(db,txid)
            db.execute(text("UPDATE notification_deliveries SET provider=:p,provider_message_id=:m,status='SENT',attempt_count=attempt_count+1,last_error=NULL,next_attempt_at=NULL,dead_lettered_at=NULL,updated_at=:a WHERE id=:i"),{'p':result.get('provider'),'m':result.get('message_id'),'a':now_iso(),'i':delivery_id})
        return {'status':'SENT','id':delivery_id,'provider':result.get('provider')}
    except Exception as exc:
        with SessionLocal.begin() as db:
            if txid:
                try: refund_wallet(db,txid,'provider retry failure')
                except Exception: pass
            current=db.execute(text('SELECT attempt_count,max_attempts FROM notification_deliveries WHERE id=:i'),{'i':delivery_id}).mappings().first() or {'attempt_count':0,'max_attempts':4}
            next_count=int(current['attempt_count'] or 0)+1; max_attempts=int(current['max_attempts'] or 4)
            dead=next_count>=max_attempts
            db.execute(text("UPDATE notification_deliveries SET status=:st,attempt_count=:n,last_error=:x,next_attempt_at=:nr,dead_lettered_at=:dl,updated_at=:a WHERE id=:i"),{'st':'DEAD_LETTER' if dead else 'FAILED','n':next_count,'x':safe_exception_summary(exc),'nr':None if dead else _next_retry(next_count),'dl':now_iso() if dead else None,'a':now_iso(),'i':delivery_id})
        try:
            from .operations import record_operational_event
            record_operational_event('NOTIFICATIONS','DELIVERY_DEAD_LETTER' if dead else 'DELIVERY_RETRY_FAILED',safe_exception_summary(exc),severity='CRITICAL' if dead else 'WARNING',user_id=row['user_id'],site_id=row['site_id'],metadata={'delivery_id':delivery_id,'channel':row['channel'],'attempt':next_count})
        except Exception: pass
        return {'status':'DEAD_LETTER' if dead else 'FAILED','id':delivery_id,'error':'Notification delivery failed'}


def retry_due_deliveries(limit: int=25) -> dict:
    with SessionLocal() as db:
        rows=db.execute(text("SELECT id FROM notification_deliveries WHERE status='FAILED' AND next_attempt_at IS NOT NULL AND next_attempt_at<=:a ORDER BY next_attempt_at ASC LIMIT :l"),{'a':now_iso(),'l':max(1,min(limit,100))}).all()
    results=[retry_delivery(str(r[0])) for r in rows]
    return {'attempted':len(results),'sent':sum(1 for x in results if x.get('status')=='SENT'),'dead_letter':sum(1 for x in results if x.get('status')=='DEAD_LETTER'),'results':results}
