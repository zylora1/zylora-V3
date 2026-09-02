from __future__ import annotations
import hashlib, io, json, random, re, secrets, zipfile
from datetime import datetime, timedelta, timezone
from uuid import uuid4
from fastapi import APIRouter, HTTPException, Request, Response
from fastapi.responses import HTMLResponse, StreamingResponse
from pydantic import BaseModel, EmailStr, Field
from sqlalchemy import text
from sqlalchemy.exc import IntegrityError
from .db import SessionLocal, now_iso
from .security import current_user, require_csrf, new_session, hash_password, verify_password, durable_rate_limit, session_cookie_samesite
from .templates import TEMPLATES, BY_SLUG, AI_RUNTIME_SLUG, render_template, render_template_page
from .template_catalogue import public_templates
from .providers import ai_generate_site, ai_edit, send_whatsapp, sync_google_sheet_event, plan_site_architecture
from .notifications import notify
from .config import settings
from .plans import get_plan, tier3_page_limit, smallest_self_service_plan_for_pages, SELF_SERVICE_PLAN_KEYS, PAID_SELF_SERVICE_PLAN_KEYS
from .settings_store import get_system_setting
from .auth_flows import issue_auth_token
from .credits import debit_wallet, ensure_wallet, wallet_summary, reset_monthly_for_plan, reserve_wallet, finalize_wallet, refund_wallet
from .providers import verify_turnstile, cloudflare_delete_hostname
from .exporter import build_next_export
from .structured_editor import apply_document, generate_operations, merge_operations, parse_document, validate_operation, instrument_editable_html, extract_editor_nodes, validate_operations_against_html, validate_internal_page_links, build_site_document, SchemaCapabilityRequired
from .publish_permissions import capture_structural_snapshot, plan_is_paid, project_document_for_publish, structural_changes
from .media import list_assets, get_asset, delete_bytes
from .editor_state import ensure_history, push_history, create_revision, create_backup
from .seo_engine import create_redirect, enqueue_site_change, page_public_slug, seo_health, page_path, seo_document
from .site_policy import policy_response, footer_placement_policy
from .link_icons import normalize_footer_links
from .api_editor import render_draft
from .operations import run_site_qa, record_operational_event

router=APIRouter(prefix='/api')

class SignupIn(BaseModel):
    name:str=Field(min_length=2,max_length=80); email:EmailStr; password:str=Field(min_length=8,max_length=128); turnstile_token:str|None=None
class LoginIn(BaseModel): email:EmailStr; password:str=Field(min_length=1)
class SiteIn(BaseModel): business_name:str=Field(min_length=2,max_length=120); description:str=Field(default='',max_length=6000); template_slug:str|None=None; origin:str='AI'; industry:str=Field(default='Business',max_length=120); style:str=Field(default='Minimal',max_length=120); motion_style:str=Field(default='Subtle',max_length=40)
class EditIn(BaseModel): tagline:str|None=None; description:str|None=None; accent:str|None=None
class AiEditIn(BaseModel): instruction:str=Field(min_length=3,max_length=2000); page:str=Field(default='home',max_length=80); expected_version:int|None=Field(default=None,ge=1)
class LeadIn(BaseModel):
    site_id:str
    source:str=Field(default='FORM',max_length=30)
    name:str=Field(min_length=2,max_length=80)
    email:EmailStr
    phone:str|None=Field(default=None,max_length=40)
    message:str|None=Field(default=None,max_length=3000)
    session_id:str|None=Field(default=None,max_length=100)
    visitor_id:str|None=Field(default=None,max_length=100)
    company:str|None=Field(default=None,max_length=160)
    intent:str|None=Field(default=None,max_length=80)
    service_interest:str|None=Field(default=None,max_length=200)
    budget:str|None=Field(default=None,max_length=120)
    location:str|None=Field(default=None,max_length=200)
    preferred_date:str|None=Field(default=None,max_length=80)
    preferred_time:str|None=Field(default=None,max_length=80)
    qualification_data:dict|None=None
    page_url:str|None=Field(default=None,max_length=600)
    utm_source:str|None=Field(default=None,max_length=160)
    utm_medium:str|None=Field(default=None,max_length=160)
    utm_campaign:str|None=Field(default=None,max_length=160)
    referrer:str|None=Field(default=None,max_length=600)
    service_enquiry_consent:bool=True
    marketing_consent:bool=False
    website:str|None=Field(default=None,max_length=200)
    turnstile_token:str|None=None
class AppointmentIn(BaseModel):
    site_id:str
    name:str=Field(min_length=2,max_length=80)
    email:EmailStr
    starts_at:str=Field(max_length=80)
    source:str=Field(default='PUBLIC',max_length=30)
    session_id:str|None=Field(default=None,max_length=100)
    conversation_id:str|None=Field(default=None,max_length=100)
    phone:str|None=Field(default=None,max_length=40)
    website:str|None=Field(default=None,max_length=200)
    turnstile_token:str|None=None
class LeadStatusIn(BaseModel):
    status:str=Field(max_length=30)

class AppointmentCancelIn(BaseModel): token:str=Field(min_length=32,max_length=200)
class NotificationIn(BaseModel): email_to:EmailStr|None=None; country_code:str='+91'; phone_number:str|None=None; notify_new_form_lead:bool=True; notify_new_chatbot_lead:bool=True; notify_new_appointment:bool=True; notify_appointment_cancelled_or_rescheduled:bool=True; notify_other_enquiries:bool=True
class OtpIn(BaseModel): code:str=Field(pattern=r'^\d{6}$')
class PlanIn(BaseModel): plan:str
class PublishIn(BaseModel):
    selected_plan:str|None=None
    confirm_free_structural_reset:bool=False



def _creation_motion_operations(motion_style: str) -> list[dict]:
    """Translate the AI creator's motion direction into schema-supported effects."""
    mode=(motion_style or 'Subtle').strip().lower()
    if mode in {'none','off','static','no motion'}:
        return []
    if mode in {'immersive','cinematic','dynamic'}:
        return [
            {'page':'home','type':'set_effect','selector':'h1','effect_kind':'scroll','effect':'clip-up','config':{'duration_ms':900,'delay_ms':80}},
            {'page':'home','type':'set_effect','selector':'main section:nth-of-type(2)','effect_kind':'scroll','effect':'stagger','config':{'duration_ms':760,'delay_ms':0,'stagger_ms':110}},
            {'page':'home','type':'set_effect','selector':'main section:nth-of-type(3)','effect_kind':'scroll','effect':'parallax','config':{'duration_ms':700,'delay_ms':0,'amount':14}},
            {'page':'home','type':'set_effect','selector':'main section:nth-of-type(4)','effect_kind':'scroll','effect':'reveal','config':{'duration_ms':850,'delay_ms':0}},
            {'page':'home','type':'set_effect','selector':'a','effect_kind':'hover','effect':'lift','config':{}},
        ]
    if mode in {'energetic','playful','bold'}:
        return [
            {'page':'home','type':'set_effect','selector':'h1','effect_kind':'scroll','effect':'soft-bounce','config':{'duration_ms':850,'delay_ms':40}},
            {'page':'home','type':'set_effect','selector':'main section:nth-of-type(2)','effect_kind':'scroll','effect':'stagger','config':{'duration_ms':650,'stagger_ms':70}},
            {'page':'home','type':'set_effect','selector':'main section:nth-of-type(3)','effect_kind':'scroll','effect':'rotate-in','config':{'duration_ms':760}},
            {'page':'home','type':'set_effect','selector':'a','effect_kind':'hover','effect':'scale','config':{}},
        ]
    if mode in {'editorial','elegant','luxury'}:
        return [
            {'page':'home','type':'set_effect','selector':'h1','effect_kind':'scroll','effect':'reveal','config':{'duration_ms':950,'delay_ms':80}},
            {'page':'home','type':'set_effect','selector':'main section:nth-of-type(2)','effect_kind':'scroll','effect':'fade-up','config':{'duration_ms':900,'delay_ms':80}},
            {'page':'home','type':'set_effect','selector':'main section:nth-of-type(3)','effect_kind':'scroll','effect':'clip-up','config':{'duration_ms':950,'delay_ms':0}},
            {'page':'home','type':'set_effect','selector':'a','effect_kind':'hover','effect':'underline','config':{}},
        ]
    # Subtle is the safe default for AI-created sites.
    return [
        {'page':'home','type':'set_effect','selector':'h1','effect_kind':'scroll','effect':'fade-up','config':{'duration_ms':700,'delay_ms':40}},
        {'page':'home','type':'set_effect','selector':'main section:nth-of-type(2)','effect_kind':'scroll','effect':'stagger','config':{'duration_ms':650,'stagger_ms':80}},
        {'page':'home','type':'set_effect','selector':'a','effect_kind':'hover','effect':'lift','config':{}},
    ]
def _user(request:Request, csrf=False):
    u=current_user(request)
    if csrf: require_csrf(request,u,request.headers.get('X-CSRF-Token'))
    return u

def _owned_site(db, user_id, site_id):
    row=db.execute(text('SELECT * FROM sites WHERE id=:s AND user_id=:u'),{'s':site_id,'u':user_id}).mappings().first()
    if not row: raise HTTPException(404,'Site not found')
    return dict(row)

def _site_page_keys(site: dict) -> list[str]:
    doc=parse_document(site.get('draft_structure_json'))
    keys=[str(x.get('id') or x.get('slug') or '').strip().lower() for x in doc.get('pages',[]) if isinstance(x,dict)]
    keys=[x for x in keys if x]
    if keys: return keys
    meta=BY_SLUG[site['template_slug']]
    return ['home',*meta.get('page_slugs',[])[:max(0,int(site.get('page_count') or 1)-1)]]

def _audit(user_id, action, obj_type=None, obj_id=None, metadata=None):
    with SessionLocal.begin() as db:
        db.execute(text('INSERT INTO audit_log(user_id,action,object_type,object_id,metadata,created_at) VALUES (:u,:a,:t,:i,:m,:c)'),{'u':user_id,'a':action,'t':obj_type,'i':obj_id,'m':json.dumps(metadata or {}),'c':now_iso()})


def _publish_plan_options() -> list[dict]:
    items=[]
    for key in SELF_SERVICE_PLAN_KEYS:
        cfg=get_plan(key)
        items.append({
            'plan':key,
            'name':cfg.get('public_name') or key.title(),
            'is_paid':plan_is_paid(key),
            'page_limit':int(cfg.get('page_limit') or 0),
            'price_inr_minor':int(cfg.get('price_inr_minor') or 0),
            'price_usd_minor':int(cfg.get('price_usd_minor') or 0),
        })
    return items


def _structural_snapshot_for_site(db, site: dict) -> dict:
    existing=site.get('template_default_structural_snapshot_json')
    if existing:
        try:
            parsed=json.loads(existing) if isinstance(existing,str) else existing
            if isinstance(parsed,dict) and parsed.get('pages'):
                return parsed
        except Exception:
            pass
    page_html={}
    keys=_site_page_keys(site)
    if str(site.get('origin') or '').upper()=='IMPORT':
        rows=db.execute(text('SELECT page_key,html FROM imported_site_pages WHERE site_id=:s'),{'s':site['id']}).mappings().all()
        by_page={str(r['page_key']):str(r['html']) for r in rows}
        for page in keys:
            if page in by_page:
                page_html[page]=by_page[page]
    else:
        for page in keys:
            html=render_template_page(site['template_slug'],site,'' if page=='home' else page)
            page_html[page]=instrument_editable_html(html,page,site['template_slug'])
    if not page_html:
        raise HTTPException(500,detail={'code':'TEMPLATE_BASELINE_MISSING','message':'The original template layout snapshot could not be created.'})
    meta=BY_SLUG.get(site['template_slug']) or {}
    snapshot=capture_structural_snapshot(page_html,template_slug=site['template_slug'],template_version=str(meta.get('version') or ''))
    db.execute(text('UPDATE sites SET template_default_structural_snapshot_json=:j,template_default_snapshot_created_at=COALESCE(template_default_snapshot_created_at,:a) WHERE id=:s'),{'j':json.dumps(snapshot,separators=(',',':')),'a':now_iso(),'s':site['id']})
    site['template_default_structural_snapshot_json']=json.dumps(snapshot,separators=(',',':'))
    return snapshot

@router.post('/auth/signup')
def signup(payload:SignupIn, request:Request, response:Response):
    ip=request.client.host if request.client else 'unknown'
    durable_rate_limit('signup:'+ip,10,3600)
    verify_turnstile(payload.turnstile_token,request.client.host if request.client else '')
    if get_system_setting('public_signup_enabled','true').lower()=='false': raise HTTPException(403,'Public signup is currently disabled')
    uid=str(uuid4())
    with SessionLocal.begin() as db:
        if db.execute(text('SELECT 1 FROM users WHERE lower(email)=lower(:e)'),{'e':str(payload.email)}).first(): raise HTTPException(409,'Email already registered')
        db.execute(text("INSERT INTO users(id,email,password_hash,name,role,plan,plan_selected,ai_credits,email_verified,updated_at,created_at) VALUES (:i,:e,:p,:n,'USER','FREE',0,20,0,:c,:c)"),{'i':uid,'e':str(payload.email).lower(),'p':hash_password(payload.password),'n':payload.name,'c':now_iso()})
        ensure_wallet(db,uid,'FREE',int(get_plan('FREE').get('signup_bonus_credits',5)))
        db.execute(text('INSERT INTO notification_settings(id,user_id,site_id,email_to,updated_at,created_at) VALUES (:i,:u,NULL,:e,:c,:c)'),{'i':str(uuid4()),'u':uid,'e':str(payload.email).lower(),'c':now_iso()})
    verify_token=issue_auth_token(uid,'VERIFY_EMAIL',str(payload.email).lower())
    token,csrf,_=new_session(uid); response.set_cookie('zylora_session',token,httponly=True,samesite=session_cookie_samesite(),secure=settings.app_env=='production',max_age=settings.session_ttl_hours*3600)
    result={'ok':True,'csrf_token':csrf,'email_verification_required':True,'plan_selected':False,'next':'/dashboard'}
    if settings.app_env!='production': result['debug_verification_token']=verify_token
    return result

@router.post('/auth/login')
def login(payload:LoginIn, request:Request, response:Response):
    ip=request.client.host if request.client else 'unknown'
    durable_rate_limit('login:'+ip,20,900)
    with SessionLocal() as db: row=db.execute(text('SELECT * FROM users WHERE lower(email)=lower(:e)'),{'e':str(payload.email)}).mappings().first()
    if not row or not verify_password(payload.password,row['password_hash']): raise HTTPException(401,'Invalid email or password')
    token,csrf,_=new_session(row['id']); response.set_cookie('zylora_session',token,httponly=True,samesite=session_cookie_samesite(),secure=settings.app_env=='production',max_age=settings.session_ttl_hours*3600)
    is_admin=row.get('role')=='SUPER_ADMIN'
    return {'ok':True,'csrf_token':csrf,'role':row.get('role'),'plan_selected':True if is_admin else bool(row.get('plan_selected',1)),
        'next':(settings.super_admin_app_url or '/admin') if is_admin else '/dashboard'}

@router.post('/auth/logout')
def logout(request:Request,response:Response):
    u=_user(request,True); token=request.cookies.get('zylora_session')
    with SessionLocal.begin() as db: db.execute(text('DELETE FROM sessions WHERE token=:t'),{'t':token})
    response.delete_cookie('zylora_session'); return {'ok':True}

@router.get('/auth/me')
def me(request:Request):
    u=_user(request)
    result={k:u[k] for k in ['id','email','name','role','plan','plan_selected','email_verified','csrf_token','account_type','profile_image_url'] if k in u}
    if u.get('role')=='SUPER_ADMIN':
        result['plan_selected']=True
        result['subscription_required']=False
        result['admin_portal_url']=settings.super_admin_app_url or '/admin'
        return result
    wallet=wallet_summary(u['id'])
    result['plan_selected']=bool(result.get('plan_selected',1))
    result['ai_credits']=wallet['total']; result['lead_credits']=wallet['lead_total']; result['credit_wallet']=wallet
    return result

class ProfilePatch(BaseModel):
    name: str = Field(min_length=2,max_length=80)

class AccountDeleteIn(BaseModel):
    email: EmailStr
    confirmation: str = Field(min_length=6,max_length=16)


def _delete_account_site_data(db, site_id: str) -> None:
    # Explicit cleanup is intentional. SQLite does not reliably enforce FK cascades by default, while production PostgreSQL does.
    # Keeping this sequence explicit makes account deletion deterministic in both.
    for sql in [
        'DELETE FROM assistant_usage WHERE site_id=:s',
        'DELETE FROM assistant_action_keys WHERE site_id=:s',
        'DELETE FROM assistant_messages WHERE conversation_id IN (SELECT id FROM assistant_conversations WHERE site_id=:s)',
        'DELETE FROM assistant_conversations WHERE site_id=:s',
        'DELETE FROM sales_assistant_configs WHERE site_id=:s',
        'DELETE FROM lead_form_configs WHERE site_id=:s',
        'DELETE FROM support_messages WHERE conversation_id IN (SELECT id FROM support_conversations WHERE website_id=:s)',
        'DELETE FROM support_conversations WHERE website_id=:s',
        'DELETE FROM source_export_entitlements WHERE site_id=:s',
        'DELETE FROM source_export_orders WHERE site_id=:s',
        'DELETE FROM published_versions WHERE site_id=:s',
        'DELETE FROM generation_jobs WHERE site_id=:s',
        'DELETE FROM notification_deliveries WHERE site_id=:s',
        'DELETE FROM chatbot_usage_metrics WHERE site_id=:s',
        'DELETE FROM chatbot_answer_cache WHERE site_id=:s',
        'DELETE FROM knowledge_embedding_cache WHERE document_id IN (SELECT id FROM site_knowledge_docs WHERE site_id=:s)',
        'DELETE FROM site_knowledge_docs WHERE site_id=:s',
        'DELETE FROM editor_history WHERE site_id=:s',
        'DELETE FROM site_revisions WHERE site_id=:s',
        'DELETE FROM imported_site_pages WHERE site_id=:s',
        'DELETE FROM site_imports WHERE site_id=:s',
        'DELETE FROM media_assets WHERE site_id=:s',
        'DELETE FROM indexnow_queue WHERE site_id=:s',
        'DELETE FROM site_redirects WHERE site_id=:s',
        'DELETE FROM analytics_events WHERE site_id=:s',
        'DELETE FROM appointment_settings WHERE site_id=:s',
        'DELETE FROM google_sheets_integrations WHERE site_id=:s',
        'DELETE FROM custom_domains WHERE site_id=:s',
        'DELETE FROM ownership_transfers WHERE site_id=:s',
        'DELETE FROM blog_posts WHERE site_id=:s',
        'DELETE FROM notification_settings WHERE site_id=:s',
        'DELETE FROM whatsapp_otps WHERE site_id=:s',
        'DELETE FROM freelancer_template_submissions WHERE source_site_id=:s',
        'DELETE FROM freelancer_ratings WHERE site_id=:s',
        'DELETE FROM leads WHERE site_id=:s',
        'DELETE FROM appointments WHERE site_id=:s',
        'DELETE FROM sites WHERE id=:s',
    ]:
        db.execute(text(sql), {'s': site_id})


def _delete_account_user_data(db, user_id: str, email: str) -> None:
    # Preserve transferred websites: historical/editor records still pointing at the
    # former owner are reassigned to the site's current owner before the user row is removed.
    for table, column in [
        ('media_assets','user_id'),('editor_history','user_id'),('site_revisions','user_id'),
        ('published_versions','created_by'),('chatbot_usage_metrics','user_id'),('site_imports','user_id')
    ]:
        db.execute(text(f'''UPDATE {table} SET {column}=(SELECT s.user_id FROM sites s WHERE s.id={table}.site_id)
            WHERE {column}=:u AND site_id IN (SELECT id FROM sites WHERE user_id<>:u)'''), {'u': user_id})

    # Delete customer support content owned by the account, then scrub any residual sender ref.
    db.execute(text('DELETE FROM support_messages WHERE conversation_id IN (SELECT id FROM support_conversations WHERE user_id=:u)'), {'u': user_id})
    db.execute(text('DELETE FROM support_conversations WHERE user_id=:u'), {'u': user_id})
    db.execute(text('UPDATE support_messages SET sender_user_id=NULL WHERE sender_user_id=:u'), {'u': user_id})

    # User-scoped data and marketplace identity.
    for sql in [
        'DELETE FROM source_export_entitlements WHERE user_id=:u',
        'DELETE FROM source_export_orders WHERE user_id=:u',
        'DELETE FROM generation_jobs WHERE user_id=:u',
        'DELETE FROM notification_deliveries WHERE user_id=:u',
        'DELETE FROM credit_transactions WHERE user_id=:u',
        'DELETE FROM credit_topup_orders WHERE user_id=:u',
        'DELETE FROM credit_usage WHERE user_id=:u',
        'DELETE FROM credit_wallets WHERE user_id=:u',
        'DELETE FROM subscriptions WHERE user_id=:u',
        'DELETE FROM billing_profiles WHERE user_id=:u',
        'DELETE FROM razorpay_orders WHERE user_id=:u',
        'DELETE FROM billing_events WHERE user_id=:u',
        'DELETE FROM auth_tokens WHERE user_id=:u',
        'DELETE FROM sessions WHERE user_id=:u',
        'DELETE FROM notification_settings WHERE user_id=:u',
        'DELETE FROM whatsapp_otps WHERE user_id=:u',
        'DELETE FROM contacts WHERE user_id=:u',
        'DELETE FROM freelancer_outbound_clicks WHERE freelancer_id=:u',
        'DELETE FROM freelancer_external_links WHERE freelancer_id=:u',
        'DELETE FROM freelancer_leads WHERE freelancer_id=:u',
        'DELETE FROM freelancer_leads WHERE lower(customer_email)=lower(:e)',
        'DELETE FROM freelancer_ratings WHERE freelancer_id=:u OR client_user_id=:u',
        'DELETE FROM freelancer_template_submissions WHERE freelancer_id=:u',
        'DELETE FROM freelancer_profiles WHERE user_id=:u',
        'DELETE FROM ownership_transfers WHERE from_user_id=:u OR lower(to_email)=lower(:e)',
        'DELETE FROM blog_posts WHERE author_user_id=:u',
        'DELETE FROM audit_log WHERE user_id=:u',
        'DELETE FROM pro_leads WHERE lower(email)=lower(:e)',
        'DELETE FROM outbox WHERE lower(recipient)=lower(:e)',
        'DELETE FROM users WHERE id=:u',
    ]:
        db.execute(text(sql), {'u': user_id, 'e': email})


@router.delete('/auth/account')
def delete_account(payload: AccountDeleteIn, request: Request, response: Response):
    u=_user(request,True)
    if u.get('role')=='SUPER_ADMIN':
        raise HTTPException(403,'SUPER_ADMIN accounts must be deprovisioned administratively, not through self-service deletion')
    if str(payload.email).strip().lower()!=str(u['email']).lower() or payload.confirmation.strip().upper()!='DELETE':
        raise HTTPException(422,'Enter your account email and type DELETE to confirm')

    # Destructive account changes require a recent successful authentication, independent
    # of whether the user signed in with password or Google.
    created=u.get('session_created_at')
    if not created:
        raise HTTPException(409,detail={'code':'REAUTH_REQUIRED','message':'Sign in again before deleting your account.'})
    try:
        session_age=(datetime.now(timezone.utc)-datetime.fromisoformat(str(created))).total_seconds()
    except Exception:
        session_age=10**9
    if session_age>15*60:
        raise HTTPException(409,detail={'code':'REAUTH_REQUIRED','message':'For security, sign in again before deleting your account.'})

    with SessionLocal() as db:
        sites=[dict(r) for r in db.execute(text('SELECT id FROM sites WHERE user_id=:u'),{'u':u['id']}).mappings().all()]
        domains=[dict(r) for r in db.execute(text('''SELECT d.provider_hostname_id,d.hostname FROM custom_domains d JOIN sites s ON s.id=d.site_id WHERE s.user_id=:u'''),{'u':u['id']}).mappings().all()]
        media=[dict(r) for r in db.execute(text('''SELECT m.storage_key FROM media_assets m JOIN sites s ON s.id=m.site_id WHERE s.user_id=:u'''),{'u':u['id']}).mappings().all()]
        settings_rows=[dict(r) for r in db.execute(text('SELECT email_to,country_code,phone_number FROM notification_settings WHERE user_id=:u'),{'u':u['id']}).mappings().all()]
        recipients=[]
        for row in settings_rows:
            if row.get('email_to'): recipients.append(str(row['email_to']))
            if row.get('phone_number'): recipients.append(f"{row.get('country_code') or '+91'}{row['phone_number']}")

    # External/local resources are best-effort. Database deletion must not be blocked by
    # a temporary Cloudflare/S3 outage; warnings are returned for operational follow-up.
    cleanup_warnings=[]; cleanup_jobs=[]
    for d in domains:
        try: cloudflare_delete_hostname(d.get('provider_hostname_id') or '')
        except Exception as exc:
            cleanup_warnings.append(f"domain:{d.get('hostname')}: {exc}")
            cleanup_jobs.append(('DOMAIN',str(d.get('provider_hostname_id') or d.get('hostname') or ''),str(exc)[:1000]))
    for m in media:
        try: delete_bytes(m['storage_key'])
        except Exception as exc:
            cleanup_warnings.append(f"media:{m.get('storage_key')}: {exc}")
            cleanup_jobs.append(('MEDIA',str(m.get('storage_key') or ''),str(exc)[:1000]))

    user_id=str(u['id']); email=str(u['email']).lower()
    with SessionLocal.begin() as db:
        for site in sites: _delete_account_site_data(db,site['id'])
        for recipient in set(recipients):
            db.execute(text('DELETE FROM outbox WHERE lower(recipient)=lower(:r)'), {'r': recipient})
        _delete_account_user_data(db,user_id,email)
        for kind,key,error in cleanup_jobs:
            db.execute(text("INSERT INTO account_deletion_cleanup(id,resource_kind,resource_key,last_error,status,created_at,updated_at) VALUES (:i,:k,:r,:e,'PENDING',:c,:c)"),{'i':str(uuid4()),'k':kind,'r':key,'e':error,'c':now_iso()})
        # Keep one privacy-safe operational fact without retaining the deleted user id/email.
        db.execute(text("INSERT INTO audit_log(user_id,action,object_type,object_id,metadata,created_at) VALUES (NULL,'ACCOUNT_DELETED','user',NULL,:m,:c)"),
                   {'m':json.dumps({'cleanup_warning_count':len(cleanup_warnings)}),'c':now_iso()})

    response.delete_cookie('zylora_session')
    return {'ok':True,'deleted':True,'cleanup_warnings':cleanup_warnings}


@router.patch('/auth/profile')
def update_profile(payload: ProfilePatch, request: Request):
    u=_user(request,True)
    name=payload.name.strip()
    with SessionLocal.begin() as db:
        db.execute(text('UPDATE users SET name=:n,updated_at=:a WHERE id=:u'),{'n':name,'a':now_iso(),'u':u['id']})
    _audit(u['id'],'PROFILE_UPDATE','user',u['id'],{'name':name})
    return {'ok':True,'name':name,'email':u['email']}

@router.get('/credits')
def credits(request:Request):
    u=_user(request); return wallet_summary(u['id'])

@router.get('/templates')
def templates(): return {'items':public_templates()}

@router.get('/sites')
def sites(request:Request):
    u=_user(request)
    with SessionLocal() as db: rows=db.execute(text('SELECT * FROM sites WHERE user_id=:u ORDER BY updated_at DESC'),{'u':u['id']}).mappings().all()
    return {'items':[dict(r) for r in rows]}

@router.post('/sites')
def create_site(payload:SiteIn,request:Request):
    u=_user(request,True)
    origin=(payload.origin or 'AI').upper()
    if origin not in {'AI','TEMPLATE'}: raise HTTPException(422,'origin must be AI or TEMPLATE')
    if origin=='AI':
        # AI creation is deliberately independent of the public template catalogue.
        # The runtime slug is an internal renderer, never a selectable template.
        runtime_slug=AI_RUNTIME_SLUG
        meta=BY_SLUG[runtime_slug]
    else:
        available=public_templates()
        if not available:
            raise HTTPException(409,detail={'code':'TEMPLATE_CATALOGUE_EMPTY','message':'The template catalogue is being rebuilt. Create with AI for now.'})
        if not payload.template_slug or payload.template_slug not in {t['slug'] for t in available}:
            raise HTTPException(400,'Unknown template')
        runtime_slug=payload.template_slug
        meta=BY_SLUG[runtime_slug]
    ip=request.client.host if request.client else 'unknown'
    if origin=='AI':
        durable_rate_limit(f'ai-create-user-minute:{u["id"]}',3,60)
        durable_rate_limit(f'ai-create-user-hour:{u["id"]}',20,3600)
        durable_rate_limit(f'ai-create-ip:{ip}',30,3600)
        cfg=get_plan(u['plan'])
        if int(cfg.get('contact_only') or 0):
            raise HTTPException(403,detail={'code':'MANAGED_SELF_SERVICE_UNAVAILABLE','message':'Managed/PRO sites are built by RootPro and do not use the self-service AI dashboard.'})
    with SessionLocal() as db:
        draft_count=db.execute(text("SELECT count(*) FROM sites WHERE user_id=:u AND status='DRAFT'"),{'u':u['id']}).scalar_one()
    plan_cfg=get_plan(u['plan']); site_limit=int(plan_cfg['site_limit'])
    if draft_count>=site_limit: raise HTTPException(409,detail={'code':'DRAFT_LIMIT_REACHED','message':f'You already have {draft_count} drafts. Delete a draft before creating another.','limit':site_limit,'drafts':draft_count})

    idem=(request.headers.get('Idempotency-Key') or '').strip()[:120]
    if origin=='AI' and idem:
        with SessionLocal() as db:
            prior=db.execute(text('SELECT * FROM generation_jobs WHERE user_id=:u AND idempotency_key=:k'),{'u':u['id'],'k':idem}).mappings().first()
            if prior and prior.get('site_id') and prior.get('status')=='COMPLETED':
                site=db.execute(text('SELECT id,slug,page_count FROM sites WHERE id=:i AND user_id=:u'),{'i':prior['site_id'],'u':u['id']}).mappings().first()
                if site: return {**dict(site),'idempotent':True,'generation_job_id':prior['id']}
            if prior and prior.get('status') in {'PLANNING','GENERATING','VALIDATING'}:
                raise HTTPException(409,detail={'code':'GENERATION_ALREADY_RUNNING','job_id':prior['id'],'stage':prior['progress_stage']})
    if not idem: idem=secrets.token_hex(24)
    job_id=None; reservation_id=None
    if origin=='AI':
        job_id=str(uuid4())
        with SessionLocal.begin() as db:
            db.execute(text("""INSERT INTO generation_jobs(id,user_id,idempotency_key,status,progress_stage,created_at,updated_at)
                VALUES (:i,:u,:k,'PLANNING','Planning site',:a,:a)"""),{'i':job_id,'u':u['id'],'k':idem,'a':now_iso()})
            reserved=reserve_wallet(db,u['id'],u['plan'],int(plan_cfg.get('ai_site_cost',5)),'AI_SITE_CREATE','ai',idem,job_id)
            reservation_id=reserved.get('id')
    try:
        if origin=='AI':
            architecture=plan_site_architecture(payload.business_name,payload.description,payload.industry,payload.style,user_id=u['id'])
            pages=architecture.get('pages') or [{'id':'home','title':'Home','purpose':'Primary overview'}]
            page_count=max(1,min(20,len(pages)))
            with SessionLocal.begin() as db:
                db.execute(text("UPDATE generation_jobs SET status='GENERATING',progress_stage='Creating pages',updated_at=:a WHERE id=:i"),{'a':now_iso(),'i':job_id})
            copy=ai_generate_site(payload.business_name,payload.description,payload.industry,payload.style,payload.motion_style,user_id=u['id'])
        else:
            architecture={'pages':[{'id':'home','title':'Home','purpose':'Template home'},*[
                {'id':p,'title':p.replace('-',' ').title(),'purpose':'Template page'} for p in meta.get('page_slugs',[])]],
                'design_direction':meta.get('style'),'provider':'template'}
            page_count=int(meta['pages']); copy={'tagline':f"{payload.business_name}, designed to stand apart.",'description':payload.description}
        sid=str(uuid4()); slug=re.sub(r'[^a-z0-9]+','-',payload.business_name.lower()).strip('-')[:45] or 'site'; slug=f"{slug}-{secrets.token_hex(2)}"
        document=build_site_document(runtime_slug,meta.get('page_slugs',[]),page_count,str(meta.get('version') or '1.0.0'))
        if origin=='AI':
            planned=[]; nav=[]
            for item in architecture['pages'][:page_count]:
                raw_key=str(item.get('id') or item.get('title') or '').lower()
                key=re.sub(r'[^a-z0-9-]+','-',raw_key).strip('-')[:60] or 'page'
                if not planned: key='home'
                if any(x['id']==key for x in planned): continue
                title=str(item.get('title') or key.replace('-',' ').title())[:100]
                planned.append({'id':key,'slug':key,'title':title,'purpose':str(item.get('purpose') or '')[:260]})
                nav.append({'pageId':key,'label':title,'href':'/' if key=='home' else '/'+key})
            if not planned:
                planned=[{'id':'home','slug':'home','title':'Home','purpose':'Primary overview'}]; nav=[{'pageId':'home','label':'Home','href':'/'}]
            document['pages']=planned; document['navigation']=nav
            document['designPlan']={'archetype':architecture.get('design_direction'),'motion':payload.motion_style,'composition_source':'prompt+business-requirements'}
            document['businessProfile']={'business_name':payload.business_name,'description':payload.description,'industry':payload.industry,'supplied_facts_only':True}
            document['generationMeta']={'pipeline':'requirements>ia>design>content>site-document>validation','planner_provider':architecture.get('provider'),'model':settings.openai_model if settings.openai_api_key else 'local','prompt_version':'zylora-site-v4-2026-08-25'}
            motion_ops=_creation_motion_operations(payload.motion_style)
            if motion_ops: document=merge_operations(document,motion_ops)
            page_count=len(planned)
        with SessionLocal.begin() as db:
            if origin=='AI': db.execute(text("UPDATE generation_jobs SET status='VALIDATING',progress_stage='Checking website',updated_at=:a WHERE id=:i"),{'a':now_iso(),'i':job_id})
            db.execute(text("""INSERT INTO sites(id,user_id,name,slug,template_slug,origin,status,business_name,tagline,description,accent,page_count,
              draft_structure_json,document_schema_version,document_version,generation_state,generation_meta_json,business_profile_json,updated_at,created_at)
              VALUES (:i,:u,:n,:s,:t,:o,'DRAFT',:b,:g,:d,:a,:pc,:doc,3,1,'DRAFT',:gm,:bp,:c,:c)"""),{
              'i':sid,'u':u['id'],'n':payload.business_name,'s':slug,'t':runtime_slug,'o':origin,'b':payload.business_name,'g':copy['tagline'],
              'd':copy['description'],'a':meta['accent'],'pc':page_count,'doc':json.dumps(document,separators=(',',':')),
              'gm':json.dumps(document.get('generationMeta') or {},separators=(',',':')),'bp':json.dumps(document.get('businessProfile') or {},separators=(',',':')),'c':now_iso()})
            created_site=_owned_site(db,u['id'],sid)
            _structural_snapshot_for_site(db,created_site)
            if origin=='AI' and reservation_id: finalize_wallet(db,reservation_id)
            if origin=='AI': db.execute(text("UPDATE generation_jobs SET site_id=:s,status='COMPLETED',progress_stage='Ready to edit',updated_at=:a WHERE id=:i"),{'s':sid,'a':now_iso(),'i':job_id})
    except Exception as exc:
        if origin=='AI':
            with SessionLocal.begin() as db:
                if reservation_id:
                    try: refund_wallet(db,reservation_id,'generation failed')
                    except Exception: pass
                if job_id: db.execute(text("UPDATE generation_jobs SET status='FAILED',progress_stage='Generation failed',error=:e,updated_at=:a WHERE id=:i"),{'e':str(exc)[:1000],'a':now_iso(),'i':job_id})
        raise
    _audit(u['id'],'SITE_CREATE','site',sid,{'origin':origin,'page_count':page_count,'generation_job_id':job_id})
    return {'id':sid,'slug':slug,'page_count':page_count,'generation_job_id':job_id,'planning':architecture if origin=='AI' else None}

@router.get('/sites/{site_id}')
def get_site(site_id:str,request:Request):
    u=_user(request)
    with SessionLocal() as db: return _owned_site(db,u['id'],site_id)

@router.put('/sites/{site_id}')
def update_site(site_id:str,payload:EditIn,request:Request):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        s=_owned_site(db,u['id'],site_id); ensure_history(db,s,u['id'])
        values={'g':payload.tagline if payload.tagline is not None else s['tagline'],'d':payload.description if payload.description is not None else s['description'],'a':payload.accent if payload.accent is not None else s['accent'],'c':now_iso(),'i':site_id}
        db.execute(text('UPDATE sites SET tagline=:g,description=:d,accent=:a,document_version=document_version+1,updated_at=:c WHERE id=:i'),values)
        push_history(db,site_id,u['id'],'CONTENT_EDIT'); create_revision(db,site_id,u['id'],'SAVE','Manual content save')
    _audit(u['id'],'SITE_UPDATE','site',site_id); return {'ok':True}

@router.post('/sites/{site_id}/ai-edit')
def edit_ai(site_id:str,payload:AiEditIn,request:Request):
    u=_user(request,True)
    ip=request.client.host if request.client else 'unknown'
    durable_rate_limit(f'ai-edit-user-minute:{u["id"]}',12,60)
    durable_rate_limit(f'ai-edit-user-hour:{u["id"]}',120,3600)
    durable_rate_limit(f'ai-edit-ip:{ip}',180,3600)
    if int(get_plan(u['plan']).get('contact_only') or 0):
        raise HTTPException(403,detail={'code':'MANAGED_SELF_SERVICE_UNAVAILABLE','message':'Managed/PRO accounts do not use the self-service AI editor.'})
    idem=(request.headers.get('Idempotency-Key') or '').strip()[:120] or None
    with SessionLocal.begin() as db:
        s=_owned_site(db,u['id'],site_id)
        current_version=int(s.get('document_version') or 1)
        if payload.expected_version is not None and int(payload.expected_version)!=current_version:
            raise HTTPException(409,detail={'code':'DOCUMENT_VERSION_CONFLICT','expected':int(payload.expected_version),'current':current_version,'message':'The website changed after this AI edit started. Reload/rebase before applying it.'})
        if idem:
            prior=db.execute(text("SELECT * FROM credit_transactions WHERE user_id=:u AND credit_type='ai' AND operation='AI_EDIT' AND idempotency_key=:k"),{'u':u['id'],'k':idem}).mappings().first()
            if prior and prior.get('status')=='FINALIZED':
                return {'tagline':s['tagline'],'description':s['description'],'provider':'idempotent','credits':wallet_summary(u['id']),'page':(payload.page or 'home').strip().lower(),'operations':[],'structure':parse_document(s.get('draft_structure_json')),'document_version':current_version,'idempotent':True}
        seo=seo_document(s)
        footer_policy=footer_placement_policy(payload.instruction, seo.get('footer_links') or [])
        if footer_policy:
            credits=wallet_summary(u['id'])
            if footer_policy.get('url'):
                current=list(seo.get('footer_links') or [])
                if not any(str(x.get('url') or '') == str(footer_policy['url']) for x in current):
                    current.append({'url':footer_policy['url']})
                seo['footer_links']=normalize_footer_links(current)
                db.execute(text('UPDATE sites SET seo_json=:seo,updated_at=:c WHERE id=:i'),{'seo':json.dumps(seo,separators=(',',':')),'c':now_iso(),'i':site_id})
            return {'tagline':s['tagline'],'description':s['description'],'provider':'policy','credits':credits,'page':(payload.page or 'home').strip().lower(),'operations':[],'structure':parse_document(s.get('draft_structure_json')),'message':footer_policy['message'],'footer_links':seo.get('footer_links') or []}
        policy_message=policy_response(payload.instruction, seo.get('external_destinations'))
        if policy_message:
            return {'tagline':s['tagline'],'description':s['description'],'provider':'policy','credits':wallet_summary(u['id']),'page':(payload.page or 'home').strip().lower(),'operations':[],'structure':parse_document(s.get('draft_structure_json')),'message':policy_message}
        meta=BY_SLUG[s['template_slug']]; allowed_pages=set(_site_page_keys(s))
        page=(payload.page or 'home').strip().lower()
        if page not in allowed_pages: raise HTTPException(422,'That page is not available on this website')
        html=instrument_editable_html(render_template_page(s['template_slug'],s,'' if page=='home' else page),page,s['template_slug'])
        context={**s,'assets':list_assets(u['id'],site_id),'editor_nodes':extract_editor_nodes(html)}
        try:
            operations,provider=generate_operations(context,payload.instruction,page,user_id=u['id'],site_id=site_id)
            if s.get('origin')=='TEMPLATE' and any(validate_operation(op)['type']=='add_section' for op in operations):
                raise ValueError('Template page structure is fixed; AI cannot add sections to template-origin sites')
            operations=validate_operations_against_html(html,operations)
            operations=validate_internal_page_links(operations,allowed_pages)
        except SchemaCapabilityRequired as exc:
            raise HTTPException(422,detail=exc.detail)
        except ValueError as exc:
            raise HTTPException(422,str(exc))
        for op in operations:
            if op['type']=='replace_image': get_asset(op['asset_id'],user_id=u['id'],site_id=site_id)
        current=parse_document(s.get('draft_structure_json')); document=merge_operations(current,operations)
        # Structured operations are authoritative for website editing. Do not also mutate
        # the legacy tagline/description fields as a hidden side effect of an unrelated
        # image/layout/style instruction. Those base fields remain unchanged unless the
        # user edits them through the explicit manual content endpoint.
        edited={'tagline':s['tagline'],'description':s['description']}
        # Credits are debited only after all AI actions and permissions have validated.
        debit=debit_wallet(db,u['id'],u['plan'],int(get_plan(u['plan']).get('ai_edit_cost',2)),'AI_EDIT',idem,credit_type='ai',reference_id=site_id)
        ensure_history(db,s,u['id'])
        db.execute(text('UPDATE sites SET tagline=:g,description=:d,draft_structure_json=:structure,document_schema_version=3,document_version=document_version+1,updated_at=:c WHERE id=:i AND document_version=:v'),{'g':edited['tagline'],'d':edited['description'],'structure':json.dumps(document,separators=(',',':')),'c':now_iso(),'i':site_id,'v':current_version})
        push_history(db,site_id,u['id'],'AI_EDIT'); create_revision(db,site_id,u['id'],'AI','AI structured edit')
    _audit(u['id'],'AI_EDIT','site',site_id,{'provider':provider,'credits':debit,'page':page,'operation_count':len(operations)}); return {'tagline':edited['tagline'],'description':edited['description'],'provider':provider,'credits':debit,'page':page,'operations':operations,'structure':document,'document_version':current_version+1}

class StructuredEditIn(BaseModel):
    operations:list[dict]=Field(min_length=1,max_length=50)

@router.get('/sites/{site_id}/structure')
def get_site_structure(site_id:str,request:Request):
    u=_user(request)
    with SessionLocal() as db: s=_owned_site(db,u['id'],site_id)
    return parse_document(s.get('draft_structure_json'))

@router.post('/sites/{site_id}/structure')
def update_site_structure(site_id:str,payload:StructuredEditIn,request:Request):
    u=_user(request,True)
    try: validated=[validate_operation(x) for x in payload.operations]
    except ValueError as exc: raise HTTPException(422,str(exc))
    with SessionLocal.begin() as db:
        s=_owned_site(db,u['id'],site_id); meta=BY_SLUG[s['template_slug']]
        if s.get('origin')=='TEMPLATE' and any(op['type']=='add_section' for op in validated):
            raise HTTPException(422,'Template page structure is fixed; add sections only to AI-origin sites')
        enriched=[]
        for page in sorted({x.get('page','home') for x in validated}):
            allowed=set(_site_page_keys(s))
            if page not in allowed: raise HTTPException(422,'That page is not available on this website')
            html=instrument_editable_html(render_template_page(s['template_slug'],s,'' if page=='home' else page),page,s['template_slug'])
            group=[x for x in validated if x.get('page','home')==page]
            try: enriched.extend(validate_operations_against_html(html,group))
            except ValueError as exc: raise HTTPException(422,str(exc))
        validated=enriched
        try: validated=validate_internal_page_links(validated,allowed)
        except ValueError as exc: raise HTTPException(422,str(exc))
        for op in validated:
            if op['type']=='replace_image': get_asset(op['asset_id'],user_id=u['id'],site_id=site_id)
        ensure_history(db,s,u['id']); document=merge_operations(parse_document(s.get('draft_structure_json')),validated)
        db.execute(text('UPDATE sites SET draft_structure_json=:d,document_schema_version=3,document_version=document_version+1,updated_at=:a WHERE id=:i'),{'d':json.dumps(document,separators=(',',':')),'a':now_iso(),'i':site_id})
        push_history(db,site_id,u['id'],'STRUCTURED_EDIT'); create_revision(db,site_id,u['id'],'AUTOSAVE','Structured edit')
    _audit(u['id'],'STRUCTURED_EDIT','site',site_id,{'operation_count':len(validated)}); return document

@router.post('/sites/{site_id}/publish')
def publish(site_id:str,request:Request,payload:PublishIn|None=None):
    u=_user(request,True); durable_rate_limit(f'publish-user:{u["id"]}',30,3600); durable_rate_limit(f'publish-site:{site_id}',12,3600)
    if not bool(u.get('email_verified')): raise HTTPException(403,'Verify your email before publishing')
    requested=(payload.selected_plan.upper().strip() if payload and payload.selected_plan else None)
    confirm_free=bool(payload.confirm_free_structural_reset) if payload else False
    if requested and requested not in set(SELF_SERVICE_PLAN_KEYS):
        raise HTTPException(400,'Unknown self-service plan')
    if str(u.get('plan') or '').upper()=='PRO':
        raise HTTPException(403,detail={'code':'MANAGED_PRO_PUBLISH','message':'PRO/ZPRO websites are handled manually by RootPro outside the self-service editor and publish flow.'})

    # Run deterministic QA before any publish-side mutation. The QA result is persisted
    # independently so a blocked publish remains diagnosable from Site Health.
    with SessionLocal() as qa_db:
        qa_site=_owned_site(qa_db,u['id'],site_id)
    qa=run_site_qa(dict(qa_site),u['id'],persist=True)
    qa_blocking=str(get_system_setting('publish_qa_blocking','true') or 'true').strip().lower() in {'1','true','yes','on'}
    if qa_blocking and qa.get('blocking_count',0):
        record_operational_event('PUBLISH','PUBLISH_QA_BLOCKED','Publish blocked by deterministic site QA',severity='WARNING',user_id=u['id'],site_id=site_id,metadata={'run_id':qa.get('run_id'),'blocking_count':qa.get('blocking_count'),'score':qa.get('score')},dedupe_minutes=1)
        raise HTTPException(409,detail={'code':'PUBLISH_QA_BLOCKED','message':'Fix the blocking Site Health checks before publishing.','qa':qa})

    transferred_domains=[]; redirect_pairs=[]; projection_meta={}; active_plan=str(u.get('plan') or 'FREE').upper()
    with SessionLocal.begin() as db:
        s=_owned_site(db,u['id'],site_id)
        create_backup(db,site_id,u['id'],'PRE_PUBLISH','Before publish')
        page_count=max(1,int(s.get('page_count') or 1))
        changes=structural_changes(s.get('draft_structure_json'))
        has_structural=bool(changes)

        # New accounts remain plan-agnostic until Publish. The publish handler is the
        # sole authority that introduces/selects the self-service entitlement.
        if not bool(u.get('plan_selected',1)):
            if requested is None:
                raise HTTPException(409,detail={
                    'code':'PLAN_SELECTION_REQUIRED',
                    'message':'Choose Free, Starter, or Growth to continue publishing.',
                    'page_count':page_count,
                    'has_structural_changes':has_structural,
                    'structural_change_count':len(changes),
                    'plans':_publish_plan_options(),
                })
            if plan_is_paid(requested):
                # Paid entitlement is never granted by a client-provided plan string.
                # Verified checkout must activate it, after which this handler is retried.
                raise HTTPException(402,detail={
                    'code':'PAID_PLAN_ACTIVATION_REQUIRED',
                    'message':f'Activate {requested.title()} through verified checkout, then publishing will continue automatically.',
                    'plan':requested,
                    'plans':_publish_plan_options(),
                })
            active_plan='FREE'
        else:
            active_plan=str(u.get('plan') or 'FREE').upper()
            # If an already-entitled user picked another paid plan in the publish modal,
            # require checkout rather than treating the request body as entitlement.
            if requested and requested!=active_plan:
                if plan_is_paid(requested):
                    raise HTTPException(402,detail={
                        'code':'PAID_PLAN_ACTIVATION_REQUIRED','message':f'Activate {requested.title()} through verified checkout before publishing.','plan':requested,'plans':_publish_plan_options()
                    })
                # Downgrades are not performed implicitly from Publish. Existing paid
                # users publish with their active paid entitlement.
                if requested=='FREE' and plan_is_paid(active_plan):
                    raise HTTPException(409,detail={'code':'ACTIVE_PAID_PLAN','message':f'Your active {active_plan.title()} plan already preserves structural edits. Manage downgrades from Billing.'})

        current_plan=get_plan(active_plan)
        eligible=smallest_self_service_plan_for_pages(page_count)
        if str(s.get('origin') or '').upper()!='AI' and page_count>int(current_plan['page_limit']):
            recommendation=eligible or get_plan('PRO')
            suitable=[]
            for plan_key in PAID_SELF_SERVICE_PLAN_KEYS:
                cfg=get_plan(plan_key)
                if page_count<=int(cfg['page_limit']):
                    suitable.append({'plan':plan_key,'name':cfg.get('public_name') or plan_key.title(),'page_limit':int(cfg['page_limit']),'price_inr_minor':int(cfg.get('price_inr_minor') or 0),'price_usd_minor':int(cfg.get('price_usd_minor') or 0),'is_paid':True})
            raise HTTPException(402,detail={'code':'PLAN_UPGRADE_REQUIRED','message':f"The {active_plan.title()} plan supports {current_plan['page_limit']} pages, but this website has {page_count}. Choose an eligible paid plan to publish.",'current_plan':active_plan,'page_count':page_count,'page_limit':int(current_plan['page_limit']),'recommended_plan':recommendation['plan'],'recommended_page_limit':int(recommendation['page_limit']),'managed':recommendation['plan']=='PRO','suitable_plans':suitable})

        is_paid=plan_is_paid(active_plan)
        if not is_paid and has_structural and not confirm_free:
            raise HTTPException(409,detail={
                'code':'FREE_STRUCTURAL_RESET_CONFIRMATION_REQUIRED',
                'message':'Your layout and sizing changes require a paid plan and will reset to the template default on Free. Your text and images are safe. Choose Starter or Growth to keep your layout.',
                'plan':'FREE',
                'is_paid':False,
                'structural_change_count':len(changes),
                'plans':_publish_plan_options(),
            })

        baseline=_structural_snapshot_for_site(db,s)
        try:
            published_doc,projection_meta=project_document_for_publish(
                s.get('draft_structure_json'), is_paid=is_paid, baseline_snapshot=baseline
            )
        except ValueError as exc:
            raise HTTPException(500,detail={'code':'TEMPLATE_BASELINE_MISSING','message':'The template baseline is unavailable. Please try again.'}) from exc

        # Free is activated only at the final publish transaction, after eligibility
        # checks and any required structural-reset confirmation have passed.
        if not bool(u.get('plan_selected',1)) and active_plan=='FREE':
            db.execute(text("UPDATE users SET plan='FREE',plan_selected=1,updated_at=:a WHERE id=:u"),{'a':now_iso(),'u':u['id']})

        # Compare the immutable previous snapshot to the new draft. Redirects become public only on publish.
        try:
            keys=_site_page_keys(s)
            old_site=dict(s)
            if s.get('published_snapshot_json'):
                old_site.update(json.loads(s['published_snapshot_json']))
            else:
                old_site['seo_json']='{}'
            for key in keys:
                if key=='home': continue
                old_slug=page_public_slug(old_site,key); new_slug=page_public_slug(s,key)
                if old_slug and new_slug and old_slug!=new_slug: redirect_pairs.append(('/'+old_slug,'/'+new_slug))
        except Exception:
            redirect_pairs=[]
        previous=db.execute(text("SELECT id FROM sites WHERE user_id=:u AND status='LIVE' AND id<>:i LIMIT 1"),{'u':u['id'],'i':site_id}).mappings().first()
        if previous:
            domains=db.execute(text('SELECT id,hostname FROM custom_domains WHERE site_id=:s'),{'s':previous['id']}).mappings().all()
            for d in domains:
                db.execute(text('UPDATE custom_domains SET site_id=:n,updated_at=:a WHERE id=:i'),{'n':site_id,'a':now_iso(),'i':d['id']})
                transferred_domains.append(d['hostname'])
        db.execute(text("UPDATE sites SET status='DRAFT',updated_at=:c WHERE user_id=:u AND status='LIVE' AND id<>:i"),{'c':now_iso(),'u':u['id'],'i':site_id})
        snapshot=json.dumps({
            'business_name':s['business_name'],'tagline':s['tagline'],'description':s['description'],'accent':s['accent'],'page_count':s['page_count'],
            'brand_json':s.get('brand_json') or '{}','seo_json':s.get('seo_json') or '{}','document_schema_version':int(s.get('document_schema_version') or 3),
            'publish_permissions_version':1,'is_paid':is_paid,'structural_reset_applied':bool(projection_meta.get('structural_reset_applied')),
            'template_default_structural_snapshot_sha256':str(baseline.get('sha256') or ''),
        },separators=(',',':'))
        structure=json.dumps(published_doc,separators=(',',':'))
        next_revision=int(s.get('published_revision') or 0)+1
        db.execute(text("UPDATE sites SET status='LIVE',published_snapshot_json=:snapshot,published_structure_json=:structure,published_revision=:r,updated_at=:c WHERE id=:i"),{'snapshot':snapshot,'structure':structure,'r':next_revision,'c':now_iso(),'i':site_id})
        db.execute(text("INSERT INTO published_versions(id,site_id,revision,snapshot_json,structure_json,created_by,created_at) VALUES (:i,:s,:r,:snap,:st,:u,:a)"),{'i':str(uuid4()),'s':site_id,'r':next_revision,'snap':snapshot,'st':structure,'u':u['id'],'a':now_iso()})
        create_revision(db,site_id,u['id'],'PUBLISH','Published snapshot')
    for old_path,new_path in redirect_pairs:
        create_redirect(site_id,old_path,new_path)
    _audit(u['id'],'SITE_PUBLISH','site',site_id,{'custom_domains_transferred':transferred_domains,'plan':active_plan,'is_paid':plan_is_paid(active_plan),**projection_meta})
    if not bool(u.get('plan_selected',1)) and active_plan=='FREE':
        _audit(u['id'],'PLAN_SELECTED_AT_PUBLISH','billing',u['id'],{'plan':'FREE'})
    try: queued=enqueue_site_change(site_id,'publish')
    except Exception: queued=0
    with SessionLocal() as db: published=dict(db.execute(text('SELECT * FROM sites WHERE id=:s'),{'s':site_id}).mappings().first())
    health=seo_health(published)
    return {'ok':True,'url':f"/s/{s['slug']}",'custom_domains_transferred':transferred_domains,'seo_warnings':health['issues'],'indexnow_queued':queued,'plan':active_plan,'is_paid':plan_is_paid(active_plan),**projection_meta}

@router.get('/sites/{site_id}/published-versions')
def published_versions(site_id:str,request:Request):
    u=_user(request)
    with SessionLocal() as db:
        _owned_site(db,u['id'],site_id)
        rows=db.execute(text('SELECT id,revision,created_at FROM published_versions WHERE site_id=:s ORDER BY revision DESC LIMIT 50'),{'s':site_id}).mappings().all()
    return {'items':[dict(r) for r in rows]}

@router.post('/sites/{site_id}/rollback/{revision}')
def rollback_published(site_id:str,revision:int,request:Request):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        site=_owned_site(db,u['id'],site_id)
        row=db.execute(text('SELECT * FROM published_versions WHERE site_id=:s AND revision=:r'),{'s':site_id,'r':revision}).mappings().first()
        if not row: raise HTTPException(404,'Published revision not found')
        create_backup(db,site_id,u['id'],'PRE_ROLLBACK',f'Before rollback to published revision {revision}')
        next_revision=int(site.get('published_revision') or 0)+1
        db.execute(text("UPDATE sites SET status='LIVE',published_snapshot_json=:snap,published_structure_json=:st,published_revision=:r,updated_at=:a WHERE id=:s"),{'snap':row['snapshot_json'],'st':row['structure_json'],'r':next_revision,'a':now_iso(),'s':site_id})
        db.execute(text("INSERT INTO published_versions(id,site_id,revision,snapshot_json,structure_json,created_by,created_at) VALUES (:i,:s,:r,:snap,:st,:u,:a)"),{'i':str(uuid4()),'s':site_id,'r':next_revision,'snap':row['snapshot_json'],'st':row['structure_json'],'u':u['id'],'a':now_iso()})
    _audit(u['id'],'SITE_ROLLBACK','site',site_id,{'restored_revision':revision,'new_revision':next_revision})
    return {'ok':True,'restored_revision':revision,'published_revision':next_revision}

@router.get('/sites/{site_id}/preview', response_class=HTMLResponse)
def preview(site_id:str,request:Request):
    u=_user(request)
    with SessionLocal() as db: s=_owned_site(db,u['id'],site_id)
    return HTMLResponse(render_draft(s,'home'))

@router.get('/sites/{site_id}/preview/{page_slug}', response_class=HTMLResponse)
def preview_page(site_id:str,page_slug:str,request:Request):
    u=_user(request)
    with SessionLocal() as db: s=_owned_site(db,u['id'],site_id)
    page=(page_slug or 'home').strip().lower(); meta=BY_SLUG[s['template_slug']]
    allowed=set(_site_page_keys(s))
    if page not in allowed: raise HTTPException(404,'Page not available')
    return HTMLResponse(render_draft(s,page))

@router.get('/sites/{site_id}/export')
def export_site(site_id:str,request:Request):
    u=_user(request)
    with SessionLocal() as db:
        s=_owned_site(db,u['id'],site_id)
        entitled=db.execute(text('SELECT 1 FROM source_export_entitlements WHERE user_id=:u AND site_id=:s'),{'u':u['id'],'s':site_id}).first()
        if not entitled:
            from .settings_store import get_system_setting
            raise HTTPException(402,detail={'code':'SOURCE_EXPORT_PAYMENT_REQUIRED','prices':{'USD':int(get_system_setting('source_export_usd_minor','9900')),'INR':int(get_system_setting('source_export_inr_minor','829900'))}})
    buff=build_next_export(s)
    return StreamingResponse(buff,media_type='application/zip',headers={'Content-Disposition':f'attachment; filename="{s["slug"]}-nextjs.zip"'})

@router.post('/leads')
def lead(payload:LeadIn,request:Request):
    # Honeypot filtering happens before any credit-consuming/notification work.
    if (payload.website or '').strip(): return {'ok':True,'filtered':True}
    ip=request.client.host if request.client else 'unknown'
    email=str(payload.email).lower().strip(); source=str(payload.source or 'FORM').upper().strip()
    allowed_sources={'FORM','AI_ASSISTANT','APPOINTMENT','WHATSAPP','PHONE','OTHER','CHATBOT'}
    if source not in allowed_sources: source='OTHER'
    durable_rate_limit('lead-ip:'+ip,30,3600)
    durable_rate_limit('lead-site:'+payload.site_id,120,3600)
    durable_rate_limit('lead-email:'+payload.site_id+':'+hashlib.sha256(email.encode()).hexdigest(),6,3600)
    if payload.session_id: durable_rate_limit('lead-session:'+payload.site_id+':'+payload.session_id,10,3600)
    verify_turnstile(payload.turnstile_token,ip)
    now=now_iso(); lid=None; merged=False
    qualification=dict(payload.qualification_data or {})
    qualification['service_enquiry_consent']=bool(payload.service_enquiry_consent)
    qualification['marketing_consent']=bool(payload.marketing_consent)
    with SessionLocal.begin() as db:
        s=db.execute(text("SELECT * FROM sites WHERE id=:i AND status='LIVE'"),{'i':payload.site_id}).mappings().first()
        if not s: raise HTTPException(404,'Live site not found')
        contact=db.execute(text('SELECT id FROM contacts WHERE user_id=:u AND lower(email)=lower(:e)'),{'u':s['user_id'],'e':email}).mappings().first()
        if contact:
            contact_id=contact['id']; db.execute(text('UPDATE contacts SET display_name=:n,phone=COALESCE(:p,phone),updated_at=:a WHERE id=:i'),{'n':payload.name,'p':payload.phone,'a':now,'i':contact_id})
        else:
            contact_id=str(uuid4()); db.execute(text('INSERT INTO contacts(id,user_id,email,phone,display_name,created_at,updated_at) VALUES (:i,:u,:e,:p,:n,:a,:a)'),{'i':contact_id,'u':s['user_id'],'e':email,'p':payload.phone,'n':payload.name,'a':now})
        # Safe form/chat unification: only associate a same-session Assistant lead when a verified
        # contact value agrees. A session identifier alone is never considered identity.
        existing=None
        if payload.session_id and source!='AI_ASSISTANT':
            existing=db.execute(text('''SELECT * FROM leads WHERE site_id=:s AND session_id=:sid AND source='AI_ASSISTANT'
                AND (lower(email)=lower(:e) OR (:p IS NOT NULL AND :p<>'' AND phone=:p))
                ORDER BY created_at DESC LIMIT 1'''),{'s':payload.site_id,'sid':payload.session_id,'e':email,'p':payload.phone}).mappings().first()
        if existing:
            lid=existing['id']; merged=True
            try: q=json.loads(existing.get('qualification_json') or '{}')
            except Exception: q={}
            if not isinstance(q,dict): q={}
            q.update(qualification); paths=list(q.get('conversion_paths') or [])
            if source not in paths: paths.append(source)
            q['conversion_paths']=paths[-8:]
            db.execute(text('''UPDATE leads SET name=:n,email=:e,phone=COALESCE(:p,phone),message=COALESCE(:m,message),company=COALESCE(:co,company),
              intent=COALESCE(:intent,intent),service_interest=COALESCE(:svc,service_interest),budget=COALESCE(:b,budget),location=COALESCE(:loc,location),
              preferred_date=COALESCE(:pd,preferred_date),preferred_time=COALESCE(:pt,preferred_time),qualification_json=:q,page_url=COALESCE(:page,page_url),
              utm_source=COALESCE(:us,utm_source),utm_medium=COALESCE(:um,utm_medium),utm_campaign=COALESCE(:uc,utm_campaign),referrer=COALESCE(:ref,referrer),
              contact_id=:x,updated_at=:a WHERE id=:i'''),{'n':payload.name,'e':email,'p':payload.phone,'m':payload.message,'co':payload.company,'intent':payload.intent,'svc':payload.service_interest,
                'b':payload.budget,'loc':payload.location,'pd':payload.preferred_date,'pt':payload.preferred_time,'q':json.dumps(q,separators=(',',':')),
                'page':payload.page_url,'us':payload.utm_source,'um':payload.utm_medium,'uc':payload.utm_campaign,'ref':payload.referrer,'x':contact_id,'a':now,'i':lid})
        else:
            lid=str(uuid4())
            db.execute(text('''INSERT INTO leads(id,site_id,source,status,name,email,phone,message,created_at,contact_id,session_id,visitor_id,company,intent,
              service_interest,budget,location,preferred_date,preferred_time,qualification_json,page_url,utm_source,utm_medium,utm_campaign,referrer,updated_at)
              VALUES (:i,:s,:o,'NEW',:n,:e,:p,:m,:c,:x,:sid,:vid,:co,:intent,:svc,:b,:loc,:pd,:pt,:q,:page,:us,:um,:uc,:ref,:c)'''),
              {'i':lid,'s':payload.site_id,'o':source,'n':payload.name,'e':email,'p':payload.phone,'m':payload.message,'c':now,'x':contact_id,'sid':payload.session_id,
               'vid':payload.visitor_id,'co':payload.company,'intent':payload.intent,'svc':payload.service_interest,'b':payload.budget,'loc':payload.location,
               'pd':payload.preferred_date,'pt':payload.preferred_time,'q':json.dumps(qualification,separators=(',',':')),'page':payload.page_url,
               'us':payload.utm_source,'um':payload.utm_medium,'uc':payload.utm_campaign,'ref':payload.referrer})
        site=dict(s)
    event='CHATBOT_LEAD' if source in {'CHATBOT','AI_ASSISTANT'} else 'FORM_LEAD'
    notify(site['user_id'],payload.site_id,event,f'New {source.lower().replace("_"," ")} lead for {site["business_name"]}',f'{payload.name} ({email})\n{payload.message or "No message"}',idempotency_key='lead:'+lid+(':'+source if merged else ''))
    # A merged form submission is still a form conversion, but it must not become a second lead row.
    sync_google_sheet_event(payload.site_id,event,{'name':payload.name,'email':email,'phone':payload.phone or '','message':payload.message or '','source':source,'lead_id':lid,'merged':merged})
    return {'ok':True,'id':lid,'contact_id':contact_id,'merged':merged}

@router.get('/leads')
def list_leads(request:Request):
    u=_user(request)
    with SessionLocal() as db: rows=db.execute(text('SELECT l.*,s.business_name FROM leads l JOIN sites s ON s.id=l.site_id WHERE s.user_id=:u ORDER BY l.created_at DESC'),{'u':u['id']}).mappings().all()
    items=[]
    for r in rows:
        d=dict(r)
        for src,dst in [('qualification_json','qualification_data'),('score_reasons_json','score_reasons')]:
            try: d[dst]=json.loads(d.get(src) or ('{}' if src=='qualification_json' else '[]'))
            except Exception: d[dst]={} if src=='qualification_json' else []
        items.append(d)
    return {'items':items}

@router.patch('/leads/{lead_id}/status')
def update_lead_status(lead_id:str,payload:LeadStatusIn,request:Request):
    u=_user(request,True); status=str(payload.status or '').upper()
    if status not in {'NEW','CONTACTED','QUALIFIED','WON','LOST'}: raise HTTPException(422,'Unsupported lead status')
    with SessionLocal.begin() as db:
        row=db.execute(text('SELECT l.id,l.site_id FROM leads l JOIN sites s ON s.id=l.site_id WHERE l.id=:i AND s.user_id=:u'),{'i':lead_id,'u':u['id']}).mappings().first()
        if not row: raise HTTPException(404,'Lead not found')
        db.execute(text('UPDATE leads SET status=:st,updated_at=:a WHERE id=:i'),{'st':status,'a':now_iso(),'i':lead_id})
    _audit(u['id'],'LEAD_STATUS_CHANGE','lead',lead_id,{'status':status})
    return {'ok':True,'id':lead_id,'status':status}

@router.post('/appointments')
def book(payload:AppointmentIn,request:Request):
    if (payload.website or '').strip(): return {'ok':True,'filtered':True}
    ip=request.client.host if request.client else 'unknown'; email=str(payload.email).lower().strip()
    durable_rate_limit('appt-ip:'+ip,30,3600)
    durable_rate_limit('appt-site:'+payload.site_id,120,3600)
    durable_rate_limit('appt-email:'+payload.site_id+':'+hashlib.sha256(email.encode()).hexdigest(),8,3600)
    if payload.session_id: durable_rate_limit('appt-session:'+payload.site_id+':'+payload.session_id,10,3600)
    verify_turnstile(payload.turnstile_token,ip)
    try: start=datetime.fromisoformat(payload.starts_at.replace('Z','+00:00'))
    except Exception: raise HTTPException(422,'Invalid starts_at')
    if start.tzinfo is None: start=start.replace(tzinfo=timezone.utc)
    if start < datetime.now(timezone.utc)+timedelta(minutes=5): raise HTTPException(422,'Appointment must be at least 5 minutes in the future')
    # Public callers must not be able to probe appointment configuration for drafts or unpublished sites.
    with SessionLocal() as db:
        live=db.execute(text("SELECT 1 FROM sites WHERE id=:i AND status='LIVE'"),{'i':payload.site_id}).first()
    if not live: raise HTTPException(404,'Live site not found')
    from .appointment_engine import slot_is_available, get_appointment_settings
    if get_appointment_settings(payload.site_id):
        ok,reason=slot_is_available(payload.site_id,payload.starts_at,require_settings=True)
        if not ok: raise HTTPException(409,detail={'code':'APPOINTMENT_UNAVAILABLE','message':reason or 'That appointment slot is unavailable.'})
    aid=str(uuid4()); raw_cancel=secrets.token_urlsafe(32); cancel_hash=hashlib.sha256(raw_cancel.encode()).hexdigest(); now=now_iso(); lead_id=None; conversation_id=payload.conversation_id
    try:
        with SessionLocal.begin() as db:
            s=db.execute(text("SELECT * FROM sites WHERE id=:i AND status='LIVE'"),{'i':payload.site_id}).mappings().first()
            if not s: raise HTTPException(404,'Live site not found')
            # Associate only an explicit conversation or a same-session/same-email Assistant lead.
            if conversation_id:
                conv=db.execute(text('SELECT id,lead_id FROM assistant_conversations WHERE id=:c AND site_id=:s AND test_mode=0'),{'c':conversation_id,'s':payload.site_id}).mappings().first()
                if not conv: raise HTTPException(404,'Conversation not found')
                lead_id=conv.get('lead_id')
            if not lead_id and payload.session_id:
                lr=db.execute(text("SELECT id,conversation_id FROM leads WHERE site_id=:s AND session_id=:sid AND lower(email)=lower(:e) ORDER BY created_at DESC LIMIT 1"),{'s':payload.site_id,'sid':payload.session_id,'e':email}).mappings().first()
                if lr: lead_id=lr['id']; conversation_id=conversation_id or lr.get('conversation_id')
            if not lead_id:
                lead_id=str(uuid4())
                db.execute(text('''INSERT INTO leads(id,site_id,source,status,name,email,phone,message,created_at,session_id,conversation_id,lead_score,lead_temperature,score_reasons_json,qualification_json,updated_at)
                  VALUES (:i,:s,'APPOINTMENT','NEW',:n,:e,:p,'Appointment booking',:a,:sid,:c,70,'WARM','["APPOINTMENT_SELECTED"]','{}',:a)'''),
                  {'i':lead_id,'s':payload.site_id,'n':payload.name,'e':email,'p':payload.phone,'a':now,'sid':payload.session_id,'c':conversation_id})
            db.execute(text("INSERT INTO appointments(id,site_id,name,email,starts_at,status,source,cancellation_token_hash,created_at,lead_id,conversation_id) VALUES (:i,:s,:n,:e,:t,'BOOKED',:o,:h,:c,:l,:cv)"),
              {'i':aid,'s':payload.site_id,'n':payload.name,'e':email,'t':payload.starts_at,'o':payload.source,'h':cancel_hash,'c':now,'l':lead_id,'cv':conversation_id})
            db.execute(text('UPDATE leads SET appointment_id=:a,preferred_date=COALESCE(preferred_date,:d),updated_at=:u WHERE id=:l'),{'a':aid,'d':payload.starts_at,'u':now,'l':lead_id})
            if conversation_id:
                db.execute(text('UPDATE assistant_conversations SET appointment_id=:a,lead_id=COALESCE(lead_id,:l),last_activity_at=:u WHERE id=:c AND site_id=:s'),{'a':aid,'l':lead_id,'u':now,'c':conversation_id,'s':payload.site_id})
            site=dict(s)
    except IntegrityError as exc:
        raise HTTPException(409,detail={'code':'APPOINTMENT_SLOT_TAKEN','message':'That appointment slot has already been booked.'}) from exc
    notify(site['user_id'],payload.site_id,'APPOINTMENT',f'New appointment for {site["business_name"]}',f'{payload.name} booked {payload.starts_at}.',idempotency_key='appointment:'+aid)
    sync_google_sheet_event(payload.site_id,'APPOINTMENT',{'name':payload.name,'email':email,'starts_at':payload.starts_at,'source':'APPOINTMENT','lead_id':lead_id})
    return {'ok':True,'id':aid,'lead_id':lead_id,'conversation_id':conversation_id,'cancellation_token':raw_cancel}

@router.post('/public/appointments/{appointment_id}/cancel')
def cancel_public_appointment(appointment_id:str,payload:AppointmentCancelIn,request:Request):
    ip=request.client.host if request.client else 'unknown'; durable_rate_limit('appt-cancel:'+ip,30,3600)
    digest=hashlib.sha256(payload.token.encode()).hexdigest()
    with SessionLocal.begin() as db:
        row=db.execute(text('''SELECT a.*,s.user_id,s.business_name FROM appointments a JOIN sites s ON s.id=a.site_id
            WHERE a.id=:i AND a.cancellation_token_hash=:h'''),{'i':appointment_id,'h':digest}).mappings().first()
        if not row: raise HTTPException(404,'Appointment not found')
        if row['status']=='CANCELLED': return {'ok':True,'idempotent':True}
        changed=db.execute(text("UPDATE appointments SET status='CANCELLED' WHERE id=:i AND status='BOOKED'"),{'i':appointment_id})
        if changed.rowcount!=1: raise HTTPException(409,'Appointment can no longer be cancelled')
        data=dict(row)
    notify(data['user_id'],data['site_id'],'APPOINTMENT_CHANGE',f'Appointment cancelled for {data["business_name"]}',f'{data["name"]} cancelled {data["starts_at"]}.',idempotency_key='appointment-cancel:'+appointment_id)
    return {'ok':True,'idempotent':False}

@router.get('/notifications')
def get_notifications(request:Request,site_id:str|None=None):
    u=_user(request)
    with SessionLocal() as db:
        row=db.execute(text('SELECT * FROM notification_settings WHERE user_id=:u AND ((site_id=:s) OR (site_id IS NULL AND :s IS NULL))'),{'u':u['id'],'s':site_id}).mappings().first()
    return dict(row or {})

@router.put('/notifications')
def set_notifications(payload:NotificationIn,request:Request,site_id:str|None=None):
    u=_user(request,True)
    if site_id:
        with SessionLocal() as db: _owned_site(db,u['id'],site_id)
    digits=re.sub(r'\D','',payload.phone_number or '')
    with SessionLocal.begin() as db:
        row=db.execute(text('SELECT * FROM notification_settings WHERE user_id=:u AND ((site_id=:s) OR (site_id IS NULL AND :s IS NULL))'),{'u':u['id'],'s':site_id}).mappings().first()
        verified=bool(row['whatsapp_verified']) if row else False
        if row and (row['phone_number']!=digits or row['country_code']!=payload.country_code): verified=False
        vals={'e':str(payload.email_to) if payload.email_to else None,'cc':payload.country_code,'p':digits or None,'v':1 if verified else 0,'f':int(payload.notify_new_form_lead),'ch':int(payload.notify_new_chatbot_lead),'a':int(payload.notify_new_appointment),'ac':int(payload.notify_appointment_cancelled_or_rescheduled),'o':int(payload.notify_other_enquiries),'c':now_iso(),'u':u['id'],'s':site_id}
        if row:
            db.execute(text('''UPDATE notification_settings SET email_to=:e,country_code=:cc,phone_number=:p,whatsapp_verified=:v,notify_new_form_lead=:f,notify_new_chatbot_lead=:ch,notify_new_appointment=:a,notify_appointment_cancelled_or_rescheduled=:ac,notify_other_enquiries=:o,updated_at=:c WHERE id=:i'''),{**vals,'i':row['id']})
        else:
            db.execute(text('''INSERT INTO notification_settings(id,user_id,site_id,email_to,country_code,phone_number,whatsapp_verified,notify_new_form_lead,notify_new_chatbot_lead,notify_new_appointment,notify_appointment_cancelled_or_rescheduled,notify_other_enquiries,updated_at,created_at) VALUES (:i,:u,:s,:e,:cc,:p,:v,:f,:ch,:a,:ac,:o,:c,:c)'''),{**vals,'i':str(uuid4())})
    return {'ok':True,'whatsapp_verified':verified}

@router.post('/notifications/whatsapp/request-otp')
def request_otp(request:Request,site_id:str|None=None):
    u=_user(request,True); durable_rate_limit('otp:'+u['id'],5,3600)
    with SessionLocal() as db:
        if site_id: _owned_site(db,u['id'],site_id)
        row=db.execute(text('SELECT * FROM notification_settings WHERE user_id=:u AND ((site_id=:s) OR (site_id IS NULL AND :s IS NULL))'),{'u':u['id'],'s':site_id}).mappings().first()
    if not row or not row['phone_number']: raise HTTPException(400,'Save a phone number first')
    code=f'{random.randint(0,999999):06d}'; digest=hashlib.sha256(code.encode()).hexdigest(); e164=f"{row['country_code']}{row['phone_number']}"
    with SessionLocal.begin() as db:
        db.execute(text('INSERT INTO whatsapp_otps(id,user_id,site_id,phone_e164,code_hash,expires_at,attempts,consumed,created_at) VALUES (:i,:u,:s,:p,:h,:e,0,0,:c)'),{'i':str(uuid4()),'u':u['id'],'s':site_id,'p':e164,'h':digest,'e':(datetime.now(timezone.utc)+timedelta(minutes=10)).isoformat(),'c':now_iso()})
    send_whatsapp(e164,f'Your Zylora verification code is {code}. It expires in 10 minutes.')
    result={'ok':True,'destination':e164[-4:]}
    if settings.app_env != 'production': result['debug_code']=code
    return result

@router.post('/notifications/whatsapp/verify')
def verify_otp(payload:OtpIn,request:Request,site_id:str|None=None):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        row=db.execute(text('SELECT * FROM whatsapp_otps WHERE user_id=:u AND ((site_id=:s) OR (site_id IS NULL AND :s IS NULL)) AND consumed=0 ORDER BY created_at DESC LIMIT 1'),{'u':u['id'],'s':site_id}).mappings().first()
        if not row: raise HTTPException(400,'No active verification request')
        if datetime.fromisoformat(row['expires_at']) < datetime.now(timezone.utc): raise HTTPException(400,'Code expired')
        if row['attempts']>=5: raise HTTPException(429,'Too many attempts')
        db.execute(text('UPDATE whatsapp_otps SET attempts=attempts+1 WHERE id=:i'),{'i':row['id']})
        if hashlib.sha256(payload.code.encode()).hexdigest()!=row['code_hash']: raise HTTPException(400,'Incorrect code')
        db.execute(text('UPDATE whatsapp_otps SET consumed=1 WHERE id=:i'),{'i':row['id']})
        db.execute(text('UPDATE notification_settings SET whatsapp_verified=1,updated_at=:c WHERE user_id=:u AND ((site_id=:s) OR (site_id IS NULL AND :s IS NULL))'),{'c':now_iso(),'u':u['id'],'s':site_id})
    return {'ok':True,'whatsapp_verified':True}

@router.get('/billing')
def billing(request:Request):
    u=_user(request); p=get_plan(u['plan']); w=wallet_summary(u['id'])
    from .billing_regions import offer_for_request
    with SessionLocal() as db:
        sub=db.execute(text("SELECT * FROM subscriptions WHERE user_id=:u ORDER BY created_at DESC LIMIT 1"),{'u':u['id']}).mappings().first()
    offers={plan:offer_for_request(request,plan=plan,user_id=u['id'],display_only=True) for plan in PAID_SELF_SERVICE_PLAN_KEYS}
    offer=offers.get(str(u.get('plan') or '').upper()) or offers['STARTER']
    return {'plan':u['plan'],'plan_selected':bool(u.get('plan_selected',1)),'ai_credits':w['total'],'lead_credits':w['lead_total'],'credit_wallet':w,
      'limits':{'drafts':int(p['site_limit']),'pages':int(p['page_limit']),'template_page_limit':int(p['page_limit']),'page_limit_scope':'TEMPLATE','ai_page_policy':'PROMPT_DRIVEN','monthly_ai_credits':int(p.get('ai_credits') or 0),'monthly_lead_credits':int(p.get('lead_credits') or 0),'ai_max_pages':max(1,min(20,int(get_system_setting('ai_generation_max_pages','20'))))},
      'config':p,'regional_offer':offer,'regional_offers':offers,'subscription':dict(sub) if sub else None}

@router.get('/billing/history')
def billing_history(request:Request):
    u=_user(request)
    with SessionLocal() as db:
        plan_rows=db.execute(text("""SELECT id,target_plan AS label,amount_minor,currency,status,provider_payment_id,created_at,'PLAN' AS kind
            FROM razorpay_orders WHERE user_id=:u ORDER BY created_at DESC LIMIT 100"""),{'u':u['id']}).mappings().all()
        topup_rows=db.execute(text("""SELECT id,(upper(credit_type) || ' credits · ' || credits) AS label,amount_minor,currency,status,provider_payment_id,created_at,'TOPUP' AS kind
            FROM credit_topup_orders WHERE user_id=:u ORDER BY created_at DESC LIMIT 100"""),{'u':u['id']}).mappings().all()
        subscription_rows=db.execute(text("""SELECT id,(CASE product WHEN 'STARTER' THEN 'Starter subscription' WHEN 'GROWTH' THEN 'Growth subscription' ELSE 'Zylora subscription' END) AS label,billing_amount_minor AS amount_minor,billing_currency AS currency,status,provider_payment_id,created_at,'SUBSCRIPTION' AS kind
            FROM subscriptions WHERE user_id=:u ORDER BY created_at DESC LIMIT 100"""),{'u':u['id']}).mappings().all()
    items=[dict(r) for r in [*plan_rows,*topup_rows,*subscription_rows]]
    items.sort(key=lambda x:str(x.get('created_at') or ''),reverse=True)
    return {'items':items[:100]}

@router.post('/billing/select')
def select_plan(payload:PlanIn,request:Request):
    """Commit the initial Free-plan choice only.

    This endpoint is intentionally *not* a downgrade primitive. Paid subscribers must
    use the cancellation/change flow so the subscription lifecycle, entitlements and
    wallet state cannot diverge from ``users.plan``.
    """
    u=_user(request,True); selected=payload.plan.upper()
    if selected!='FREE':
        raise HTTPException(409,detail={'code':'CHECKOUT_REQUIRED','message':'Paid plans must be activated through verified checkout.','plan':selected})

    blocked=None; repaired_from=None; repaired_to=None; idempotent=False
    with SessionLocal.begin() as db:
        state=db.execute(text('SELECT plan,plan_selected FROM users WHERE id=:u'),{'u':u['id']}).mappings().first()
        if not state: raise HTTPException(404,'User not found')
        current=str(state.get('plan') or 'FREE').upper()
        active=db.execute(text("""SELECT product FROM subscriptions
            WHERE user_id=:u AND status='ACTIVE' AND product IN ('STARTER','GROWTH','ZYLORA')
            ORDER BY updated_at DESC LIMIT 1"""),{'u':u['id']}).mappings().first()

        if active:
            # Defensive self-heal for rows created before this guard existed: the active
            # paid subscription is the authoritative entitlement until cancellation.
            active_plan=str(active.get('product') or 'ZYLORA').upper()
            if current!=active_plan:
                db.execute(text('UPDATE users SET plan=:p,plan_selected=1,updated_at=:a WHERE id=:u'),{'p':active_plan,'a':now_iso(),'u':u['id']})
                repaired_from=current; repaired_to=active_plan
            blocked={'code':'SUBSCRIPTION_CANCELLATION_REQUIRED','message':'An active paid subscription exists. Schedule cancellation from Billing; paid access remains active through the current billing period.','plan':active_plan}
        elif current!='FREE':
            # Even if a paid subscription row is no longer ACTIVE, /billing/change owns
            # downgrade validation (template limits, wallet reset and billing event log).
            blocked={'code':'BILLING_CHANGE_REQUIRED','message':'Use the Billing change flow to move an existing paid account to Free.'}
        elif bool(state.get('plan_selected',0)):
            idempotent=True
        else:
            # Keep the final write atomic with an active-subscription predicate so a
            # concurrent payment activation cannot be overwritten by Free selection.
            claim=db.execute(text("""UPDATE users SET plan='FREE',plan_selected=1,updated_at=:a
                WHERE id=:u AND upper(plan)='FREE' AND plan_selected=0
                  AND NOT EXISTS (SELECT 1 FROM subscriptions WHERE user_id=:u AND status='ACTIVE')"""),{'a':now_iso(),'u':u['id']})
            if claim.rowcount!=1:
                blocked={'code':'CONCURRENT_BILLING_CHANGE','message':'Billing state changed while selecting Free. Refresh Billing before trying again.'}

    if repaired_to:
        _audit(u['id'],'BILLING_ENTITLEMENT_RECONCILED','billing',u['id'],{'from':repaired_from,'to':repaired_to,'reason':'active_subscription'})
    if blocked:
        raise HTTPException(409,detail=blocked)
    if not idempotent:
        _audit(u['id'],'PLAN_SELECTED','billing',u['id'],{'plan':'FREE'})
    return {'ok':True,'plan':'FREE','plan_selected':True,'idempotent':idempotent}

@router.post('/billing/change')
def change_plan(payload:PlanIn,request:Request):
    u=_user(request,True); new=payload.plan.upper(); old=str(u.get('plan') or 'FREE').upper()
    if new in PAID_SELF_SERVICE_PLAN_KEYS:
        raise HTTPException(409,detail={'code':'CHECKOUT_REQUIRED','message':f'{new.title()} must be activated through the server-authoritative regional subscription checkout.','plan':new})
    if new!='FREE':
        raise HTTPException(400,'Unknown self-service plan')
    if old in {*PAID_SELF_SERVICE_PLAN_KEYS,'ZYLORA'}:
        with SessionLocal() as db:
            active=db.execute(text("SELECT 1 FROM subscriptions WHERE user_id=:u AND status='ACTIVE' LIMIT 1"),{'u':u['id']}).first()
        if active:
            raise HTTPException(409,detail={'code':'SUBSCRIPTION_CANCELLATION_REQUIRED','message':'Schedule cancellation from Billing so paid access remains active through the current billing period.'})
    cfg=get_plan('FREE')
    with SessionLocal.begin() as db:
        too_large=db.execute(text("SELECT count(*) FROM sites WHERE user_id=:u AND status='LIVE' AND origin='TEMPLATE' AND page_count>:p"),{'u':u['id'],'p':int(cfg['page_limit'])}).scalar_one()
        if too_large: raise HTTPException(409,f"Downgrade blocked: {too_large} website(s) exceed the {cfg['page_limit']}-page Free limit")
        db.execute(text("UPDATE users SET plan='FREE',plan_selected=1,updated_at=:a WHERE id=:u"),{'a':now_iso(),'u':u['id']})
        total=reset_monthly_for_plan(db,u['id'],'FREE')
        db.execute(text("INSERT INTO billing_events(id,user_id,from_plan,to_plan,provider,status,created_at) VALUES (:i,:u,:f,'FREE',:p,'SUCCEEDED',:c)"),{'i':str(uuid4()),'u':u['id'],'f':old,'p':settings.payment_provider,'c':now_iso()})
    _audit(u['id'],'PLAN_CHANGE','billing',u['id'],{'from':old,'to':'FREE'}); return {'ok':True,'plan':'FREE','credits':total}

@router.get('/admin/stats')
def admin_stats(request:Request):
    u=_user(request)
    if u['role']!='SUPER_ADMIN': raise HTTPException(403,'Admin only')
    with SessionLocal() as db:
        return {k:db.execute(text(q)).scalar_one() for k,q in {'users':'SELECT count(*) FROM users','sites':'SELECT count(*) FROM sites','leads':'SELECT count(*) FROM leads','appointments':'SELECT count(*) FROM appointments'}.items()}

@router.get('/debug/outbox')
def debug_outbox(request:Request):
    u=_user(request)
    if settings.app_env=='production': raise HTTPException(404)
    with SessionLocal() as db: rows=db.execute(text('SELECT * FROM outbox ORDER BY id DESC LIMIT 50')).mappings().all()
    return {'items':[dict(r) for r in rows]}
