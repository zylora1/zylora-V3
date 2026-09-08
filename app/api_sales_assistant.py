from __future__ import annotations

import hashlib
import json
import re
import secrets
from datetime import datetime, timedelta, timezone
from uuid import uuid4

from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel, EmailStr, Field
from sqlalchemy import text
from sqlalchemy.exc import IntegrityError

from .db import SessionLocal, now_iso
from .config import settings
from .security import current_user, require_csrf, durable_rate_limit
from .providers import verify_turnstile, sync_google_sheet_event
from .notifications import notify
from .operations import record_analytics
from .appointment_engine import get_appointment_settings, available_slots, slot_is_available
from .sales_assistant import (
    create_conversation, process_message, site_config, save_site_config,
    conversation_detail, assistant_funnel, get_contact_options, ensure_conversion_lead,
    link_appointment,
)
from .ai_models import enabled_models

router=APIRouter(prefix='/api')


def _user(request: Request, csrf: bool=False) -> dict:
    u=current_user(request)
    if csrf: require_csrf(request,u,request.headers.get('X-CSRF-Token'))
    return u


def _owned_site(db,user_id: str,site_id: str) -> dict:
    row=db.execute(text('SELECT * FROM sites WHERE id=:s AND user_id=:u'),{'s':site_id,'u':user_id}).mappings().first()
    if not row: raise HTTPException(404,'Site not found')
    return dict(row)


class PublicConversationIn(BaseModel):
    session_id:str=Field(min_length=8,max_length=120)
    visitor_id:str|None=Field(default=None,max_length=120)
    page_url:str|None=Field(default=None,max_length=500)
    referrer:str|None=Field(default=None,max_length=500)
    utm_source:str|None=Field(default=None,max_length=160)
    utm_medium:str|None=Field(default=None,max_length=160)
    utm_campaign:str|None=Field(default=None,max_length=160)
    turnstile_token:str|None=None


class ContactIn(BaseModel):
    name:str|None=Field(default=None,max_length=80)
    email:EmailStr|None=None
    phone:str|None=Field(default=None,max_length=40)
    company:str|None=Field(default=None,max_length=120)
    service_interest:str|None=Field(default=None,max_length=160)
    location:str|None=Field(default=None,max_length=160)
    preferred_date:str|None=Field(default=None,max_length=80)
    preferred_time:str|None=Field(default=None,max_length=80)
    budget:str|None=Field(default=None,max_length=120)
    service_enquiry_consent:bool=True
    marketing_consent:bool=False


class MessageIn(BaseModel):
    message:str=Field(min_length=1,max_length=10000)
    contact:ContactIn|None=None
    turnstile_token:str|None=None


@router.get('/public/sites/{site_id}/assistant/config')
def public_assistant_config(site_id: str, request: Request):
    ip=request.client.host if request.client else 'unknown'; durable_rate_limit(f'assistant-config:{ip}',120,3600)
    with SessionLocal() as db:
        site=db.execute(text("SELECT * FROM sites WHERE id=:s AND status='LIVE'"),{'s':site_id}).mappings().first()
        if not site: raise HTTPException(404,'Live site not found')
        form=db.execute(text('SELECT fields_json FROM lead_form_configs WHERE site_id=:s'),{'s':site_id}).mappings().first()
    cfg=site_config(site_id)
    if not int(cfg.get('enabled') or 0):
        return {'enabled':False,'primary_goal':str(site.get('primary_conversion_goal') or 'GET_ENQUIRIES')}
    try: profile=json.loads(site.get('business_profile_json') or '{}')
    except Exception: profile={}
    if not isinstance(profile,dict): profile={}
    options=get_contact_options(dict(site),cfg)
    fields=json.loads(form['fields_json']) if form else _default_form(dict(site))
    path=(request.query_params.get('path') or '/').lower()
    if 'pricing' in path: prompt='Not sure which option fits? Ask me.'
    elif 'book' in path or 'appointment' in path: prompt='I can help you find an available time.'
    elif 'service' in path: prompt='Have a question about this service?'
    elif 'portfolio' in path or 'project' in path: prompt='Want something similar? Ask about availability.'
    else: prompt='Need help? Ask about services, pricing or availability.'
    return {
      'enabled':True,'business_name':str(site.get('business_name') or '')[:160],
      'primary_goal':cfg.get('primary_goal') or site.get('primary_conversion_goal') or 'GET_ENQUIRIES',
      'proactive_prompts':bool(cfg.get('proactive_prompts')),'appointment_booking':bool(cfg.get('appointment_booking') and get_appointment_settings(site_id)),
      'whatsapp_handoff':bool(cfg.get('whatsapp_handoff') and options.get('whatsapp')),'human_handoff':bool(cfg.get('human_handoff')),
      'contact_collection':cfg.get('contact_collection') or 'BOTH','contact_options':{k:options.get(k) for k in ('phone','whatsapp','email')},
      'address':', '.join(str(profile.get(k) or '').strip() for k in ('street','locality','region','postal_code','country') if str(profile.get(k) or '').strip())[:500] or None,
      'lead_form_fields':fields[:20],'prompt':prompt,'turnstile_site_key':settings.turnstile_site_key or None,
    }


@router.post('/public/sites/{site_id}/assistant/conversations')
def public_conversation(site_id: str, payload: PublicConversationIn, request: Request):
    ip=request.client.host if request.client else 'unknown'
    durable_rate_limit(f'assistant-create-ip:{ip}',30,3600); durable_rate_limit(f'assistant-create-site:{site_id}',500,3600)
    # CAPTCHA stays adaptive: validate a supplied token, but ordinary low-rate messages do not require one.
    if payload.turnstile_token: verify_turnstile(payload.turnstile_token,ip)
    try:
        conv=create_conversation(site_id,payload.session_id,page_url=payload.page_url,referrer=payload.referrer,utm_source=payload.utm_source,utm_medium=payload.utm_medium,utm_campaign=payload.utm_campaign,visitor_id=payload.visitor_id,test_mode=False)
    except KeyError: raise HTTPException(404,'Live site not found')
    except PermissionError: raise HTTPException(404,'Assistant is unavailable')
    except ValueError as exc: raise HTTPException(422,str(exc))
    cfg=site_config(site_id)
    return {'id':conv['id'],'enabled':True,'primary_goal':cfg['primary_goal'],'proactive_prompts':bool(cfg['proactive_prompts']),'tone':cfg['tone']}


@router.post('/public/sites/{site_id}/assistant/conversations/{conversation_id}/messages')
def public_message(site_id: str,conversation_id: str,payload: MessageIn,request: Request):
    ip=request.client.host if request.client else 'unknown'
    durable_rate_limit(f'assistant-ip:{ip}',60,3600); durable_rate_limit(f'assistant-conversation:{conversation_id}',45,3600); durable_rate_limit(f'assistant-site:{site_id}',500,3600)
    if payload.turnstile_token: verify_turnstile(payload.turnstile_token,ip)
    contact=payload.contact.model_dump(mode='json') if payload.contact else None
    if contact:
        contact['service_enquiry_consent']=bool(contact.get('service_enquiry_consent',True)); contact['marketing_consent']=bool(contact.get('marketing_consent',False))
    turnstile_required = settings.app_env == 'production' or bool(settings.turnstile_secret_key)
    conversion_allowed = bool(payload.turnstile_token) or not turnstile_required
    idem=(request.headers.get('Idempotency-Key') or '').strip()[:120]
    request_id=f'{conversation_id}:{idem}' if idem else None
    try: return process_message(site_id,conversation_id,payload.message,contact=contact,test_mode=False,conversion_allowed=conversion_allowed,expected_assistant_type='PUBLIC_SITE_ASSISTANT',request_id=request_id)
    except KeyError: raise HTTPException(404,'Conversation not found')
    except OverflowError as exc: raise HTTPException(413,str(exc))
    except ValueError as exc: raise HTTPException(422,str(exc))


class AppointmentActionIn(BaseModel):
    starts_at:str=Field(max_length=80)
    name:str=Field(min_length=2,max_length=80)
    email:EmailStr
    phone:str|None=Field(default=None,max_length=40)
    service_interest:str|None=Field(default=None,max_length=160)
    service_enquiry_consent:bool=True
    turnstile_token:str|None=None


@router.get('/public/sites/{site_id}/assistant/availability')
def public_assistant_availability(site_id: str,request: Request,date: str|None=None,daypart: str|None=None):
    ip=request.client.host if request.client else 'unknown';durable_rate_limit(f'assistant-slots:{ip}',60,3600)
    with SessionLocal() as db:
        live=db.execute(text("SELECT 1 FROM sites WHERE id=:s AND status='LIVE'"),{'s':site_id}).first()
    if not live: raise HTTPException(404,'Live site not found')
    return {'slots':available_slots(site_id,requested_date=date,daypart=daypart,limit=8),'configured':bool(get_appointment_settings(site_id))}


@router.post('/public/sites/{site_id}/assistant/conversations/{conversation_id}/appointments')
def public_assistant_appointment(site_id: str,conversation_id: str,payload: AppointmentActionIn,request: Request):
    ip=request.client.host if request.client else 'unknown'; durable_rate_limit(f'assistant-book:{ip}',20,3600)
    if not payload.service_enquiry_consent:
        raise HTTPException(422, 'Service enquiry consent is required before booking an appointment')
    verify_turnstile(payload.turnstile_token,ip)
    idem=(request.headers.get('Idempotency-Key') or hashlib.sha256(f'{conversation_id}|{payload.starts_at}|{str(payload.email).lower()}'.encode()).hexdigest())[:120]
    # Establish public liveness and conversation ownership before exposing schedule state or creating a lead.
    with SessionLocal() as db:
        live=db.execute(text("SELECT 1 FROM sites WHERE id=:s AND status='LIVE'"),{'s':site_id}).first()
        conv_exists=db.execute(text('SELECT 1 FROM assistant_conversations WHERE id=:c AND site_id=:s AND test_mode=0'),{'c':conversation_id,'s':site_id}).first()
    if not live or not conv_exists: raise HTTPException(404,'Conversation not found')
    ok,why=slot_is_available(site_id,payload.starts_at,require_settings=True)
    if not ok: raise HTTPException(409,detail={'code':'APPOINTMENT_SLOT_UNAVAILABLE','message':why or 'That slot is unavailable'})
    contact={'name':payload.name,'email':str(payload.email).lower(),'phone':payload.phone,'service_interest':payload.service_interest,'preferred_date':payload.starts_at,'service_enquiry_consent':payload.service_enquiry_consent}
    try: lead=ensure_conversion_lead(site_id,conversation_id,contact=contact,intent='APPOINTMENT_INTENT',note=f'Appointment requested for {payload.starts_at}',test_mode=False)
    except KeyError: raise HTTPException(404,'Conversation not found')
    aid=str(uuid4());raw_cancel=secrets.token_urlsafe(32);cancel_hash=hashlib.sha256(raw_cancel.encode()).hexdigest();created=False
    try:
        with SessionLocal.begin() as db:
            conv=db.execute(text('SELECT * FROM assistant_conversations WHERE id=:c AND site_id=:s AND test_mode=0'),{'c':conversation_id,'s':site_id}).mappings().first()
            if not conv: raise HTTPException(404,'Conversation not found')
            site=db.execute(text("SELECT * FROM sites WHERE id=:s AND status='LIVE'"),{'s':site_id}).mappings().first()
            if not site: raise HTTPException(404,'Live site not found')
            prior=db.execute(text("SELECT result_id FROM assistant_action_keys WHERE site_id=:s AND action_type='CREATE_APPOINTMENT' AND idempotency_key=:k"),{'s':site_id,'k':idem}).mappings().first()
            if prior:
                row=db.execute(text('SELECT * FROM appointments WHERE id=:i'),{'i':prior['result_id']}).mappings().first()
                return {'ok':True,'id':prior['result_id'],'idempotent':True,'starts_at':row['starts_at'] if row else payload.starts_at}
            # Recheck inside the write transaction as close to the authoritative unique insert as possible.
            ok,why=slot_is_available(site_id,payload.starts_at,require_settings=True)
            if not ok: raise HTTPException(409,detail={'code':'APPOINTMENT_SLOT_UNAVAILABLE','message':why or 'That slot is unavailable'})
            db.execute(text("""INSERT INTO appointments(id,site_id,name,email,starts_at,status,source,cancellation_token_hash,created_at,lead_id,conversation_id)
              VALUES (:i,:s,:n,:e,:t,'BOOKED','AI_ASSISTANT',:h,:a,:l,:c)"""),{'i':aid,'s':site_id,'n':payload.name,'e':str(payload.email).lower(),'t':payload.starts_at,'h':cancel_hash,'a':now_iso(),'l':lead['id'] if lead else None,'c':conversation_id})
            db.execute(text("INSERT INTO assistant_action_keys(id,site_id,conversation_id,action_type,idempotency_key,result_id,created_at) VALUES (:i,:s,:c,'CREATE_APPOINTMENT',:k,:r,:a)"),{'i':str(uuid4()),'s':site_id,'c':conversation_id,'k':idem,'r':aid,'a':now_iso()})
            created=True;site=dict(site);session_id=conv['session_id']
    except IntegrityError as exc:
        raise HTTPException(409,detail={'code':'APPOINTMENT_SLOT_TAKEN','message':'That appointment slot has already been booked.'}) from exc
    if created:
        link_appointment(conversation_id,aid,lead['id'] if lead else None)
        notify(site['user_id'],site_id,'APPOINTMENT',f"New appointment for {site['business_name']}",f'{payload.name} booked {payload.starts_at}.',idempotency_key='appointment:'+aid)
        sync_google_sheet_event(site_id,'APPOINTMENT',{'name':payload.name,'email':str(payload.email).lower(),'starts_at':payload.starts_at,'source':'AI_ASSISTANT'})
        try:record_analytics(site_id,'ASSISTANT_APPOINTMENT_BOOKED',session_id,'/',{})
        except Exception:pass
    return {'ok':True,'id':aid,'idempotent':False,'starts_at':payload.starts_at,'cancellation_token':raw_cancel}


class HandoffIn(BaseModel):
    kind:str=Field(pattern='^(WHATSAPP|HUMAN|CALLBACK)$')
    contact:ContactIn|None=None
    message:str|None=Field(default=None,max_length=1000)
    turnstile_token:str|None=None


@router.post('/public/sites/{site_id}/assistant/conversations/{conversation_id}/handoff')
def assistant_handoff(site_id: str,conversation_id: str,payload: HandoffIn,request: Request):
    ip=request.client.host if request.client else 'unknown'; durable_rate_limit(f'assistant-handoff:{ip}',20,3600)
    with SessionLocal() as db:
        site=db.execute(text("SELECT * FROM sites WHERE id=:s AND status='LIVE'"),{'s':site_id}).mappings().first()
        conv=db.execute(text('SELECT * FROM assistant_conversations WHERE id=:c AND site_id=:s AND test_mode=0'),{'c':conversation_id,'s':site_id}).mappings().first()
    if not site or not conv: raise HTTPException(404,'Conversation not found')
    cfg=site_config(site_id); contact=payload.contact.model_dump(mode='json') if payload.contact else {}
    lead=None
    if contact.get('email') or contact.get('phone'):
        verify_turnstile(payload.turnstile_token,ip)
        lead=ensure_conversion_lead(site_id,conversation_id,contact=contact,intent='CALLBACK_REQUEST' if payload.kind=='CALLBACK' else 'CONTACT_INTENT',note=payload.message or f'{payload.kind.title()} handoff requested')
    options=get_contact_options(dict(site),cfg)
    result={'ok':True,'kind':payload.kind,'lead':lead}
    if payload.kind=='WHATSAPP':
        if not int(cfg.get('whatsapp_handoff') or 0) or not options.get('whatsapp'): raise HTTPException(409,'WhatsApp handoff is not configured')
        digits=re.sub(r'\D','',options['whatsapp']); result['url']=f'https://wa.me/{digits}' if digits else None
        try:record_analytics(site_id,'ASSISTANT_WHATSAPP_HANDOFF',conv['session_id'],conv.get('page_url') or '/',{})
        except Exception:pass
    else:
        if not int(cfg.get('human_handoff') or 0): raise HTTPException(409,'Human handoff is disabled')
        if lead:
            notify(site['user_id'],site_id,'OTHER',f"AI Assistant handoff for {site['business_name']}",lead['summary'],idempotency_key=f'assistant-handoff:{conversation_id}:{payload.kind}')
        try:record_analytics(site_id,'ASSISTANT_HUMAN_HANDOFF',conv['session_id'],conv.get('page_url') or '/',{})
        except Exception:pass
    return result


class AssistantSettingsPatch(BaseModel):
    enabled:bool|None=None
    tone:str|None=Field(default=None,max_length=30)
    primary_goal:str|None=Field(default=None,max_length=60)
    proactive_prompts:bool|None=None
    qualification_fields:list[str]|None=Field(default=None,max_length=20)
    contact_collection:str|None=Field(default=None,max_length=20)
    human_handoff:bool|None=None
    whatsapp_handoff:bool|None=None
    appointment_booking:bool|None=None
    use_business_profile:bool|None=None
    use_published_site:bool|None=None
    use_approved_knowledge:bool|None=None
    cms_collection_ids:list[str]|None=Field(default=None,max_length=20)
    restricted_topics:list[str]|None=Field(default=None,max_length=30)
    custom_instructions:str|None=Field(default=None,max_length=2000)
    model:str|None=Field(default=None,max_length=120)


@router.get('/sites/{site_id}/assistant/settings')
def owner_assistant_settings(site_id: str,request: Request):
    u=_user(request)
    with SessionLocal() as db:_owned_site(db,u['id'],site_id)
    cfg=site_config(site_id);cfg['appointment_configured']=bool(get_appointment_settings(site_id));cfg['available_models']=enabled_models();return cfg


@router.patch('/sites/{site_id}/assistant/settings')
def owner_assistant_settings_patch(site_id: str,payload: AssistantSettingsPatch,request: Request):
    u=_user(request,True)
    with SessionLocal() as db:_owned_site(db,u['id'],site_id)
    try:cfg=save_site_config(site_id,payload.model_dump(exclude_unset=True))
    except ValueError as exc:raise HTTPException(422,str(exc))
    with SessionLocal.begin() as db:
        db.execute(text('UPDATE sites SET primary_conversion_goal=:g,updated_at=:a WHERE id=:s'),{'g':cfg['primary_goal'],'a':now_iso(),'s':site_id})
        db.execute(text('INSERT INTO audit_log(user_id,action,object_type,object_id,metadata,created_at) VALUES (:u,\'ASSISTANT_SETTINGS_UPDATE\',\'site\',:s,:m,:a)'),{'u':u['id'],'s':site_id,'m':json.dumps({'revision':cfg['config_revision']}),'a':now_iso()})
    return cfg


@router.get('/sites/{site_id}/assistant/conversations')
def owner_conversations(site_id: str,request: Request,limit:int=50):
    u=_user(request);limit=max(1,min(limit,100))
    with SessionLocal() as db:
        _owned_site(db,u['id'],site_id)
        rows=db.execute(text('''SELECT c.*,l.name AS lead_name,l.email AS lead_email,l.phone AS lead_phone,l.lead_score,l.lead_temperature,l.summary AS lead_summary
          FROM assistant_conversations c LEFT JOIN leads l ON l.id=c.lead_id WHERE c.site_id=:s ORDER BY c.last_activity_at DESC LIMIT :l'''),{'s':site_id,'l':limit}).mappings().all()
    return {'items':[dict(r) for r in rows]}


@router.get('/sites/{site_id}/assistant/conversations/{conversation_id}')
def owner_conversation_detail(site_id: str,conversation_id: str,request: Request):
    u=_user(request)
    with SessionLocal() as db:_owned_site(db,u['id'],site_id)
    try:return conversation_detail(site_id,conversation_id)
    except KeyError:raise HTTPException(404,'Conversation not found')


@router.post('/sites/{site_id}/assistant/test/conversations')
def owner_test_conversation(site_id: str,payload: PublicConversationIn,request: Request):
    u=_user(request,True)
    with SessionLocal() as db:_owned_site(db,u['id'],site_id)
    try:conv=create_conversation(site_id,payload.session_id,page_url=payload.page_url,test_mode=True)
    except (KeyError,PermissionError,ValueError) as exc:raise HTTPException(422,str(exc))
    except Exception:raise HTTPException(502,'Assistant test conversation could not be created')
    return {'id':conv['id'],'test_mode':True}


@router.post('/sites/{site_id}/assistant/test/conversations/{conversation_id}/messages')
def owner_test_message(site_id: str,conversation_id: str,payload: MessageIn,request: Request):
    u=_user(request,True)
    with SessionLocal() as db:_owned_site(db,u['id'],site_id)
    try:return {**process_message(site_id,conversation_id,payload.message,contact=payload.contact.model_dump(mode='json') if payload.contact else None,test_mode=True,expected_assistant_type='OWNER_ASSISTANT'),'test_mode':True}
    except KeyError:raise HTTPException(404,'Test conversation not found')
    except (ValueError,OverflowError) as exc:raise HTTPException(422,str(exc))


@router.get('/sites/{site_id}/assistant/analytics')
def owner_assistant_analytics(site_id: str,request: Request,days:int=30):
    u=_user(request);days=max(1,min(days,365))
    with SessionLocal() as db:_owned_site(db,u['id'],site_id)
    start=(datetime.now(timezone.utc)-timedelta(days=days)).isoformat()
    return {'days':days,'funnel':assistant_funnel([site_id],start)}


class AppointmentSettingsIn(BaseModel):
    timezone:str=Field(default='UTC',max_length=80)
    weekdays:list[int]=Field(default_factory=lambda:[0,1,2,3,4],max_length=7)
    start_hour:int=Field(default=9,ge=0,le=23)
    end_hour:int=Field(default=17,ge=1,le=24)
    duration_minutes:int=Field(default=60,ge=5,le=480)
    buffer_minutes:int=Field(default=0,ge=0,le=240)


@router.get('/sites/{site_id}/appointment-settings')
def owner_appointment_settings(site_id: str,request: Request):
    u=_user(request)
    with SessionLocal() as db:_owned_site(db,u['id'],site_id)
    row=get_appointment_settings(site_id)
    if not row:return {'configured':False}
    row['weekdays']=json.loads(row.pop('weekdays_json') or '[]');return {'configured':True,**row}


@router.put('/sites/{site_id}/appointment-settings')
def owner_appointment_settings_save(site_id: str,payload: AppointmentSettingsIn,request: Request):
    from zoneinfo import ZoneInfo
    u=_user(request,True)
    with SessionLocal() as db:_owned_site(db,u['id'],site_id)
    try:ZoneInfo(payload.timezone)
    except Exception:raise HTTPException(422,'Unknown timezone')
    if payload.end_hour<=payload.start_hour:raise HTTPException(422,'End hour must be after start hour')
    weekdays=sorted(set(payload.weekdays))
    if any(x<0 or x>6 for x in weekdays):raise HTTPException(422,'Weekdays must be between 0 and 6')
    with SessionLocal.begin() as db:
        db.execute(text('''INSERT INTO appointment_settings(site_id,timezone,weekdays_json,start_hour,end_hour,duration_minutes,buffer_minutes,updated_at)
          VALUES (:s,:tz,:w,:sh,:eh,:d,:b,:a) ON CONFLICT(site_id) DO UPDATE SET timezone=:tz,weekdays_json=:w,start_hour=:sh,end_hour=:eh,duration_minutes=:d,buffer_minutes=:b,updated_at=:a'''),{'s':site_id,'tz':payload.timezone,'w':json.dumps(weekdays),'sh':payload.start_hour,'eh':payload.end_hour,'d':payload.duration_minutes,'b':payload.buffer_minutes,'a':now_iso()})
    return {'configured':True,**payload.model_dump(),'weekdays':weekdays}


@router.get('/sites/{site_id}/appointments')
def get_site_appointments(site_id: str, request: Request):
    u = _user(request)
    with SessionLocal() as db:
        _owned_site(db, u['id'], site_id)
        rows = db.execute(text("SELECT id, site_id, name, email, starts_at, status, source, created_at, lead_id, conversation_id FROM appointments WHERE site_id=:s ORDER BY starts_at DESC LIMIT 50"), {'s': site_id}).mappings().all()
    return {'items': [dict(r) for r in rows]}


# Smart forms deliberately reuse the public lead endpoint/renderer; this stores only its editable field schema.
ALLOWED_FORM_TYPES={'text','email','tel','textarea','select','date','time','number'}
class FormField(BaseModel):
    id:str=Field(pattern=r'^[a-z][a-z0-9_]{0,39}$')
    label:str=Field(min_length=1,max_length=100)
    type:str=Field(default='text',max_length=20)
    required:bool=False
    placeholder:str|None=Field(default=None,max_length=160)
    options:list[str]|None=Field(default=None,max_length=30)
class LeadFormConfigIn(BaseModel):fields:list[FormField]=Field(min_length=1,max_length=20)


def _default_form(site: dict) -> list[dict]:
    blob=(str(site.get('business_name') or '')+' '+str(site.get('description') or '')+' '+str(site.get('template_slug') or '')).lower()
    base=[{'id':'name','label':'Name','type':'text','required':True},{'id':'email','label':'Email','type':'email','required':True}]
    if any(x in blob for x in ('photograph','wedding')): return base+[{'id':'event_type','label':'Event type','type':'text','required':True},{'id':'event_date','label':'Event date','type':'date','required':False},{'id':'location','label':'Location','type':'text','required':False},{'id':'budget','label':'Budget','type':'text','required':False},{'id':'message','label':'Message','type':'textarea','required':False}]
    if any(x in blob for x in ('consult','agency')): return base+[{'id':'company','label':'Company','type':'text','required':False},{'id':'need','label':'What do you need help with?','type':'textarea','required':True},{'id':'preferred_time','label':'Preferred consultation time','type':'text','required':False}]
    return base+[{'id':'phone','label':'Phone','type':'tel','required':False},{'id':'service','label':'Service of interest','type':'text','required':False},{'id':'message','label':'How can we help?','type':'textarea','required':False}]


@router.post('/sites/{site_id}/lead-form/generate')
def generate_lead_form(site_id: str,request: Request):
    u=_user(request,True)
    with SessionLocal() as db:site=_owned_site(db,u['id'],site_id)
    fields=_default_form(site);now=now_iso()
    with SessionLocal.begin() as db:
        db.execute(text('''INSERT INTO lead_form_configs(site_id,fields_json,ai_generated,version,updated_at,created_at) VALUES (:s,:f,1,1,:a,:a)
          ON CONFLICT(site_id) DO UPDATE SET fields_json=:f,ai_generated=1,version=version+1,updated_at=:a'''),{'s':site_id,'f':json.dumps(fields),'a':now})
    return {'fields':fields,'ai_generated':True}


@router.get('/sites/{site_id}/lead-form')
def get_lead_form(site_id: str,request: Request):
    u=_user(request)
    with SessionLocal() as db:
        site=_owned_site(db,u['id'],site_id);row=db.execute(text('SELECT * FROM lead_form_configs WHERE site_id=:s'),{'s':site_id}).mappings().first()
    fields=json.loads(row['fields_json']) if row else _default_form(site)
    return {'fields':fields,'ai_generated':bool(row and row['ai_generated'])}


@router.put('/sites/{site_id}/lead-form')
def save_lead_form(site_id: str,payload: LeadFormConfigIn,request: Request):
    u=_user(request,True)
    with SessionLocal() as db:_owned_site(db,u['id'],site_id)
    fields=[]
    for f in payload.fields:
        data=f.model_dump();typ=data['type'].lower()
        if typ not in ALLOWED_FORM_TYPES:raise HTTPException(422,f'Unsupported form field type: {typ}')
        data['type']=typ;data['options']=[str(x)[:100] for x in (data.get('options') or [])][:30];fields.append(data)
    with SessionLocal.begin() as db:
        db.execute(text('''INSERT INTO lead_form_configs(site_id,fields_json,ai_generated,version,updated_at,created_at) VALUES (:s,:f,0,1,:a,:a)
          ON CONFLICT(site_id) DO UPDATE SET fields_json=:f,ai_generated=0,version=version+1,updated_at=:a'''),{'s':site_id,'f':json.dumps(fields),'a':now_iso()})
    return {'fields':fields,'ai_generated':False}
