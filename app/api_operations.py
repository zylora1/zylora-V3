from __future__ import annotations

import hashlib
import json
import re
from datetime import datetime, timedelta, timezone
from uuid import uuid4

from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel, EmailStr, Field
from sqlalchemy import text

from .db import SessionLocal, now_iso
from .config import settings
from .security import current_user, require_csrf, durable_rate_limit
from .editor_state import create_backup, list_backups, restore_backup, ensure_history, push_history, create_revision
from .operations import run_site_qa, launch_checklist, site_health, growth_report, operations_summary, record_analytics, record_operational_event, safe_exception_summary
from .settings_store import get_system_setting
from .structured_editor import parse_document, merge_operations, generate_operations, validate_operations_against_html, validate_internal_page_links, extract_editor_nodes, instrument_editable_html
from .templates import render_template_page
from .media import list_assets, get_asset
from .credits import debit_wallet, wallet_summary, reserve_wallet, finalize_wallet, refund_wallet
from . import ai_billing
from .plans import get_plan
from .seo_engine import seo_document
from .notifications import retry_delivery, retry_due_deliveries
from .providers import razorpay_get_order, razorpay_order_payments

router=APIRouter(prefix='/api')


def _user(request: Request, csrf: bool=False) -> dict:
    u=current_user(request)
    if csrf: require_csrf(request,u,request.headers.get('X-CSRF-Token'))
    return u


def _admin(request: Request, csrf: bool=False) -> dict:
    u=_user(request,csrf)
    if u.get('role')!='SUPER_ADMIN': raise HTTPException(403,'Admin only')
    return u


def _owned_site(db,user_id: str,site_id: str) -> dict:
    row=db.execute(text('SELECT * FROM sites WHERE id=:s AND user_id=:u'),{'s':site_id,'u':user_id}).mappings().first()
    if not row: raise HTTPException(404,'Site not found')
    return dict(row)


def _audit(user_id: str, action: str, object_type: str|None=None, object_id: str|None=None, metadata: dict|None=None):
    with SessionLocal.begin() as db:
        db.execute(text('INSERT INTO audit_log(user_id,action,object_type,object_id,metadata,created_at) VALUES (:u,:a,:t,:i,:m,:c)'),
          {'u':user_id,'a':action,'t':object_type,'i':object_id,'m':json.dumps(metadata or {},separators=(',',':')),'c':now_iso()})


def _page_keys(site: dict) -> list[str]:
    doc=parse_document(site.get('draft_structure_json'))
    keys=[str(x.get('id') or x.get('slug') or '').strip().lower() for x in doc.get('pages',[]) if isinstance(x,dict)]
    keys=[x for x in keys if x]
    if keys: return list(dict.fromkeys(keys))
    from .templates import BY_SLUG
    meta=BY_SLUG.get(site['template_slug']) or {}
    return ['home',*list(meta.get('page_slugs') or [])[:max(0,int(site.get('page_count') or 1)-1)]]


class BackupCreateIn(BaseModel):
    label:str|None=Field(default=None,max_length=160)


@router.get('/sites/{site_id}/backups')
def backups(site_id: str, request: Request):
    u=_user(request)
    with SessionLocal() as db:
        _owned_site(db,u['id'],site_id)
        return {'items':list_backups(db,site_id)}


@router.post('/sites/{site_id}/backups')
def backup_create(site_id: str, payload: BackupCreateIn, request: Request):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        _owned_site(db,u['id'],site_id); item=create_backup(db,site_id,u['id'],'MANUAL',payload.label or 'Manual restore point')
    _audit(u['id'],'SITE_BACKUP_CREATE','site',site_id,{'backup_id':item['id']})
    return {'backup':item}


@router.post('/sites/{site_id}/backups/{backup_id}/restore')
def backup_restore(site_id: str, backup_id: str, request: Request):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        site=_owned_site(db,u['id'],site_id)
        try: result=restore_backup(db,site,u['id'],backup_id)
        except KeyError: raise HTTPException(404,'Backup not found')
    _audit(u['id'],'SITE_BACKUP_RESTORE','site',site_id,{'backup_id':backup_id})
    return {'ok':True,**result}


@router.get('/sites/{site_id}/health')
def health(site_id: str, request: Request):
    u=_user(request)
    with SessionLocal() as db: site=_owned_site(db,u['id'],site_id)
    return site_health(site,u['id'])


@router.post('/sites/{site_id}/qa')
def run_qa(site_id: str, request: Request):
    u=_user(request,True)
    with SessionLocal() as db: site=_owned_site(db,u['id'],site_id)
    result=run_site_qa(site,u['id'],persist=True)
    _audit(u['id'],'SITE_QA_RUN','site',site_id,{'score':result['score'],'blocking_count':result['blocking_count'],'warning_count':result['warning_count']})
    return result


@router.get('/sites/{site_id}/launch-checklist')
def get_launch_checklist(site_id: str, request: Request):
    u=_user(request)
    with SessionLocal() as db: site=_owned_site(db,u['id'],site_id)
    return launch_checklist(site,u['id'])


class BusinessProfilePatch(BaseModel):
    business_name:str|None=Field(default=None,max_length=160)
    tagline:str|None=Field(default=None,max_length=240)
    description:str|None=Field(default=None,max_length=1200)
    email:EmailStr|None=None
    phone:str|None=Field(default=None,max_length=80)
    whatsapp:str|None=Field(default=None,max_length=80)
    website:str|None=Field(default=None,max_length=1000)
    street:str|None=Field(default=None,max_length=180)
    locality:str|None=Field(default=None,max_length=120)
    region:str|None=Field(default=None,max_length=120)
    postal_code:str|None=Field(default=None,max_length=40)
    country:str|None=Field(default=None,max_length=80)
    opening_hours:list[str]|None=Field(default=None,max_length=20)
    services:list[str]|None=Field(default=None,max_length=50)
    service_pricing:list[str]|None=Field(default=None,max_length=80)
    service_area:str|None=Field(default=None,max_length=300)
    target_audience:str|None=Field(default=None,max_length=300)
    social_profiles:list[str]|None=Field(default=None,max_length=20)


def _profile(site: dict) -> dict:
    try: data=json.loads(site.get('business_profile_json') or '{}')
    except Exception: data={}
    if not isinstance(data,dict): data={}
    return {
        'business_name':data.get('business_name') or site.get('business_name') or '',
        'tagline':data.get('tagline') or site.get('tagline') or '',
        'description':data.get('description') or site.get('description') or '',
        **data,
    }


@router.get('/sites/{site_id}/business-profile')
def business_profile(site_id: str, request: Request):
    u=_user(request)
    with SessionLocal() as db: site=_owned_site(db,u['id'],site_id)
    return {'profile':_profile(site)}


@router.patch('/sites/{site_id}/business-profile')
def business_profile_patch(site_id: str, payload: BusinessProfilePatch, request: Request):
    u=_user(request,True); patch=payload.model_dump(exclude_unset=True)
    for key in ('website',):
        if patch.get(key):
            from urllib.parse import urlparse
            parsed=urlparse(str(patch[key]));
            if parsed.scheme not in {'http','https'} or not parsed.netloc: raise HTTPException(422,f'Invalid {key} URL')
    if patch.get('opening_hours') is not None: patch['opening_hours']=[str(x).strip()[:120] for x in patch['opening_hours'] if str(x).strip()][:20]
    if patch.get('services') is not None: patch['services']=[str(x).strip()[:160] for x in patch['services'] if str(x).strip()][:50]
    if patch.get('service_pricing') is not None: patch['service_pricing']=[str(x).strip()[:240] for x in patch['service_pricing'] if str(x).strip()][:80]
    if patch.get('social_profiles') is not None: patch['social_profiles']=[str(x).strip()[:1000] for x in patch['social_profiles'] if str(x).strip()][:20]
    with SessionLocal.begin() as db:
        site=_owned_site(db,u['id'],site_id); ensure_history(db,site,u['id']); current=_profile(site); current.update(patch)
        doc=parse_document(site.get('draft_structure_json')); doc['businessProfile']=current
        seo=seo_document(site); sseo=seo.setdefault('site',{})
        mapping={'business_name':'business_name','description':'business_description','email':'email','phone':'telephone','street':'street','locality':'locality','region':'region','postal_code':'postal_code','country':'country','opening_hours':'opening_hours','social_profiles':'social_profiles'}
        for src,dst in mapping.items():
            if src not in patch: continue
            value=current.get(src)
            if value in (None,'',[]): sseo.pop(dst,None)
            else: sseo[dst]=value
        name=str(current.get('business_name') or site['business_name'])[:160]; desc=str(current.get('description') or site['description'])[:1200]; tag=str(current.get('tagline') or site['tagline'])[:240]
        db.execute(text('''UPDATE sites SET name=:n,business_name=:n,tagline=:t,description=:d,business_profile_json=:bp,seo_json=:seo,draft_structure_json=:doc,
          document_version=document_version+1,updated_at=:a WHERE id=:s'''),{'n':name,'t':tag,'d':desc,'bp':json.dumps(current,separators=(',',':')),'seo':json.dumps(seo,separators=(',',':')),'doc':json.dumps(doc,separators=(',',':')),'a':now_iso(),'s':site_id})
        push_history(db,site_id,u['id'],'BUSINESS_PROFILE_EDIT'); create_revision(db,site_id,u['id'],'SAVE','Business profile update')
    _audit(u['id'],'BUSINESS_PROFILE_UPDATE','site',site_id,{'fields':sorted(patch)})
    return {'profile':current}


@router.get('/sites/{site_id}/design-system')
def design_system(site_id: str, request: Request):
    u=_user(request)
    with SessionLocal() as db: site=_owned_site(db,u['id'],site_id)
    try: brand=json.loads(site.get('brand_json') or '{}')
    except Exception: brand={}
    return {'design_system':brand if isinstance(brand,dict) else {}}


class SitewideAiEditIn(BaseModel):
    instruction:str=Field(min_length=3,max_length=2000)
    expected_version:int|None=Field(default=None,ge=1)
    preview_only:bool=True
    preview_id:str|None=Field(default=None,max_length=80)


@router.post('/sites/{site_id}/ai-edit/sitewide')
def sitewide_ai_edit(site_id: str, payload: SitewideAiEditIn, request: Request):
    u=_user(request,True); ip=request.client.host if request.client else 'unknown'
    durable_rate_limit(f'ai-sitewide-user:{u["id"]}',8,3600); durable_rate_limit(f'ai-sitewide-ip:{ip}',30,3600)
    if int(get_plan(u['plan']).get('contact_only') or 0): raise HTTPException(403,'Managed accounts do not use the self-service AI editor')
    instruction_hash=hashlib.sha256(payload.instruction.strip().encode('utf-8')).hexdigest()
    with SessionLocal.begin() as db:
        site=_owned_site(db,u['id'],site_id); version=int(site.get('document_version') or 1)
        if payload.expected_version is not None and payload.expected_version!=version:
            raise HTTPException(409,detail={'code':'DOCUMENT_VERSION_CONFLICT','current':version,'expected':payload.expected_version,'message':'The website changed. Reload before applying this site-wide edit.'})
        db.execute(text('DELETE FROM ai_edit_previews WHERE expires_at<:n'),{'n':now_iso()})
        planned=[]; providers=set(); provider_usages=[]
        configured_cost=max(1,min(100,int(get_system_setting('ai_sitewide_edit_cost','5') or 5)))
        cost=configured_cost; apply_reservation=None
        # Preview generation itself invokes the provider. Reserve the whole
        # bounded site-wide budget before those calls; applying a saved preview
        # does not call AI and therefore creates no second reservation.
        pages=_page_keys(site)
        if settings.openai_api_key and (payload.preview_only or not payload.preview_id):
            try:
                estimate=ai_billing.feature_reservation_budget(
                    db, feature='AI_SITEWIDE_EDIT', provider='openai',
                    model=settings.openai_model, page_count=len(pages),
                )
                cost=ai_billing.public_decimal(estimate)
                apply_reservation=ai_billing.reserve_ai_operation(db,account_id=u['id'],user_id=u['id'],site_id=site_id,plan=u['plan'],estimated_credits=estimate,feature='AI_SITEWIDE_EDIT',operation_id=str(uuid4()),request_id=request.headers.get('Idempotency-Key') or str(uuid4()),idempotency_key=request.headers.get('Idempotency-Key'),provider='openai',model=settings.openai_model,allow_reserved=False)
                if apply_reservation and apply_reservation.get('idempotent'):
                    raise HTTPException(409,detail={'code':'AI_REQUEST_REPLAY','message':'This AI request was already processed. Retry without reusing its idempotency key.'})
            except ValueError as exc:
                raise HTTPException(503,'AI pricing is not configured for this model') from exc
        if not payload.preview_only and payload.preview_id:
            preview=db.execute(text("SELECT operations_json,providers_json,document_version FROM ai_edit_previews WHERE id=:i AND user_id=:u AND site_id=:s AND instruction_hash=:h AND expires_at>=:n"),
              {'i':payload.preview_id,'u':u['id'],'s':site_id,'h':instruction_hash,'n':now_iso()}).mappings().first()
            if not preview:
                raise HTTPException(409,detail={'code':'AI_PREVIEW_EXPIRED','message':'This site-wide AI preview expired or no longer matches the instruction. Generate a new preview.'})
            if int(preview['document_version'])!=version:
                raise HTTPException(409,detail={'code':'DOCUMENT_VERSION_CONFLICT','current':version,'expected':int(preview['document_version']),'message':'The website changed after this preview. Generate a new preview.'})
            try: planned=json.loads(preview['operations_json'] or '[]')
            except Exception: planned=[]
            try: providers=set(json.loads(preview['providers_json'] or '[]'))
            except Exception: providers=set()
        else:
            allowed=set(pages); assets=list_assets(u['id'],site_id)
            for page in pages[:20]:
                html=instrument_editable_html(render_template_page(site['template_slug'],site,'' if page=='home' else page),page,site['template_slug'])
                context={**site,'assets':assets,'editor_nodes':extract_editor_nodes(html),'sitewide_pages':pages}
                try:
                    generated=generate_operations(context,payload.instruction,page,user_id=u['id'],site_id=site_id,return_usage=True)
                    ops,provider=(generated[0],generated[1]); usage=generated[2] if len(generated)>2 else {}
                except Exception as exc: raise HTTPException(422,f'Could not plan the edit on {page}: {exc}')
                provider_usages.append((provider,usage or {}))
                try:
                    ops=validate_operations_against_html(html,ops); ops=validate_internal_page_links(ops,allowed)
                except ValueError as exc: raise HTTPException(422,f'{page}: {exc}')
                if str(site.get('origin') or '').upper()=='TEMPLATE' and any(op.get('type')=='add_section' for op in ops):
                    raise HTTPException(422,'Template page structure is fixed; site-wide AI cannot add sections to template-origin sites')
                for op in ops:
                    if op.get('type')=='replace_image': get_asset(op['asset_id'],user_id=u['id'],site_id=site_id)
                if ops: planned.extend(ops); providers.add(provider)
        impact={'pages':sorted({str(x.get('page') or 'home') for x in planned}),'operations':len(planned),'operation_types':sorted({str(x.get('type')) for x in planned})}
        if apply_reservation and not apply_reservation.get('skipped'):
            actual=ai_billing._dec(0)
            cost_details=[]
            for provider_name,usage in provider_usages:
                if provider_name!='openai': continue
                cached=int((usage.get('input_tokens_details') or {}).get('cached_tokens') or usage.get('cached_input_tokens') or 0)
                try:
                    measured=ai_billing.calculate_provider_cost(db,provider='openai',model=settings.openai_model,input_units=max(0,int(usage.get('input_tokens') or 0)-cached),cached_input_units=cached,output_units=int(usage.get('output_tokens') or 0))
                except ValueError: measured=None
                if measured: actual += measured['credits']; cost_details.append(measured)
            if cost_details:
                first=cost_details[0]
                debit=ai_billing.settle_ai_operation(db,apply_reservation,actual,provider_cost_micros=sum(x['provider_cost_micros'] for x in cost_details),customer_usage_value_micros=sum(x['customer_usage_value_micros'] for x in cost_details),provider='openai',model=settings.openai_model,pricing_version=first['pricing_version'],input_units=sum(x['input_units'] for x in cost_details),cached_input_units=sum(x['cached_input_units'] for x in cost_details),output_units=sum(x['output_units'] for x in cost_details))
            else:
                debit=ai_billing.settle_ai_operation(db,apply_reservation,0,metadata={'provider_usage_unavailable':True})
        else:
            debit=apply_reservation
        if payload.preview_only:
            preview_id=str(uuid4()); expires=(datetime.now(timezone.utc)+timedelta(minutes=15)).isoformat()
            db.execute(text("INSERT INTO ai_edit_previews(id,user_id,site_id,document_version,instruction_hash,operations_json,providers_json,expires_at,created_at) VALUES (:i,:u,:s,:v,:h,:o,:p,:e,:c)"),
              {'i':preview_id,'u':u['id'],'s':site_id,'v':version,'h':instruction_hash,'o':json.dumps(planned,separators=(',',':')),'p':json.dumps(sorted(providers),separators=(',',':')),'e':expires,'c':now_iso()})
            return {'preview_only':True,'preview_id':preview_id,'preview_expires_at':expires,'instruction':payload.instruction,'impact':impact,'operations':planned,'providers':sorted(providers),'credit_cost_on_apply':cost,'document_version':version}
        if not planned:
            if apply_reservation and not apply_reservation.get('skipped'):
                # The reservation was settled above; a zero-operation plan is
                # a no-cost outcome and has already released its full hold.
                pass
            if payload.preview_id: db.execute(text('DELETE FROM ai_edit_previews WHERE id=:i'),{'i':payload.preview_id})
            return {'preview_only':False,'applied':False,'impact':impact,'operations':[],'credits':wallet_summary(u['id']),'document_version':version}
        # Applying a preview never regenerates AI operations: the exact validated plan is reused atomically.
        create_backup(db,site_id,u['id'],'PRE_AI_SITEWIDE','Before site-wide AI edit'); ensure_history(db,site,u['id'])
        debit=debit
        document=merge_operations(parse_document(site.get('draft_structure_json')),planned)
        changed=db.execute(text('UPDATE sites SET draft_structure_json=:j,document_version=document_version+1,updated_at=:a WHERE id=:s AND document_version=:v'),{'j':json.dumps(document,separators=(',',':')),'a':now_iso(),'s':site_id,'v':version})
        if changed.rowcount!=1: raise HTTPException(409,'Website changed while applying the edit')
        if payload.preview_id: db.execute(text('DELETE FROM ai_edit_previews WHERE id=:i'),{'i':payload.preview_id})
        push_history(db,site_id,u['id'],'AI_SITEWIDE_EDIT'); create_revision(db,site_id,u['id'],'AI','Site-wide AI edit')
    _audit(u['id'],'AI_SITEWIDE_EDIT','site',site_id,{'impact':impact,'providers':sorted(providers),'credit_cost':cost})
    return {'preview_only':False,'applied':True,'impact':impact,'operations':planned,'providers':sorted(providers),'credits':debit,'document_version':version+1}


class AnalyticsIn(BaseModel):
    site_id:str=Field(min_length=8,max_length=80)
    event_type:str=Field(max_length=40)
    session_id:str=Field(min_length=8,max_length=120)
    path:str=Field(default='/',max_length=300)
    device:str|None=Field(default=None,max_length=40)
    referrer_host:str|None=Field(default=None,max_length=160)
    label:str|None=Field(default=None,max_length=160)


@router.post('/public/analytics')
def analytics_event(payload: AnalyticsIn, request: Request):
    ip=request.client.host if request.client else 'unknown'
    durable_rate_limit(f'analytics-session:{payload.site_id}:{payload.session_id}',300,3600)
    durable_rate_limit(f'analytics-site:{payload.site_id}',12000,3600)
    durable_rate_limit(f'analytics-ip:{ip}',3000,3600)
    with SessionLocal() as db:
        live=db.execute(text("SELECT 1 FROM sites WHERE id=:s AND status='LIVE'"),{'s':payload.site_id}).first()
    if not live: raise HTTPException(404,'Live site not found')
    try: record_analytics(payload.site_id,payload.event_type,payload.session_id,payload.path,{'device':payload.device,'referrer_host':payload.referrer_host,'label':payload.label})
    except ValueError as exc: raise HTTPException(422,str(exc))
    return {'ok':True}


@router.get('/growth')
def growth(request: Request, days:int=30, site_id:str|None=None):
    u=_user(request)
    try: return growth_report(u['id'],site_id=site_id,days=days)
    except KeyError: raise HTTPException(404,'Site not found')


@router.get('/audit')
def tenant_audit(request: Request, limit:int=100, site_id:str|None=None):
    u=_user(request); limit=max(1,min(limit,250))
    with SessionLocal() as db:
        if site_id:
            _owned_site(db,u['id'],site_id)
            rows=db.execute(text('SELECT id,action,object_type,object_id,metadata,created_at FROM audit_log WHERE user_id=:u AND object_id=:s ORDER BY id DESC LIMIT :l'),{'u':u['id'],'s':site_id,'l':limit}).mappings().all()
        else:
            rows=db.execute(text('SELECT id,action,object_type,object_id,metadata,created_at FROM audit_log WHERE user_id=:u ORDER BY id DESC LIMIT :l'),{'u':u['id'],'l':limit}).mappings().all()
    return {'items':[{**dict(r),'metadata':json.loads(r['metadata'] or '{}')} for r in rows]}


@router.post('/sites/{site_id}/deliveries/retry')
def retry_site_deliveries(site_id: str, request: Request):
    u=_user(request,True)
    with SessionLocal() as db:
        _owned_site(db,u['id'],site_id)
        ids=[str(r[0]) for r in db.execute(text("SELECT id FROM notification_deliveries WHERE site_id=:s AND status IN ('FAILED','DEAD_LETTER') ORDER BY updated_at ASC LIMIT 25"),{'s':site_id}).all()]
    results=[retry_delivery(i,force=True) for i in ids]
    _audit(u['id'],'DELIVERY_RETRY','site',site_id,{'attempted':len(results)})
    return {'attempted':len(results),'results':results}


def scan_stale_payment_orders() -> int:
    cutoff=(datetime.now(timezone.utc)-timedelta(minutes=30)).isoformat(); created=0
    with SessionLocal.begin() as db:
        rows=db.execute(text("SELECT * FROM razorpay_orders WHERE status='CREATED' AND created_at<=:c ORDER BY created_at ASC LIMIT 100"),{'c':cutoff}).mappings().all()
        for r in rows:
            rid=str(uuid4()); res=db.execute(text("""INSERT INTO payment_recovery_cases(id,user_id,order_kind,local_order_id,provider_order_id,status,created_at,updated_at)
              VALUES (:i,:u,'PLAN',:l,:p,'OPEN',:a,:a) ON CONFLICT(order_kind,local_order_id) DO NOTHING"""),{'i':rid,'u':r['user_id'],'l':r['id'],'p':r['provider_order_id'],'a':now_iso()})
            created+=max(0,int(res.rowcount or 0))
        # Regional self-service subscriptions are a separate provider lifecycle from the
        # historical one-time plan orders.  A subscription that remains CREATED
        # for more than 30 minutes is surfaced for recovery as well.  Recovery
        # never grants an entitlement merely because the provider says "active";
        # activation still requires the signed payment/country reconciliation path.
        try:
            subscriptions=db.execute(text("SELECT * FROM subscriptions WHERE status IN ('CREATED','VERIFYING_COUNTRY') AND created_at<=:c ORDER BY created_at ASC LIMIT 100"),{'c':cutoff}).mappings().all()
            for r in subscriptions:
                rid=str(uuid4()); res=db.execute(text("""INSERT INTO payment_recovery_cases(id,user_id,order_kind,local_order_id,provider_order_id,status,created_at,updated_at)
                  VALUES (:i,:u,'SUBSCRIPTION',:l,:p,'OPEN',:a,:a) ON CONFLICT(order_kind,local_order_id) DO NOTHING"""),{'i':rid,'u':r['user_id'],'l':r['id'],'p':r['provider_subscription_id'],'a':now_iso()})
                created+=max(0,int(res.rowcount or 0))
        except Exception:
            # Backward compatibility while rolling the regional-billing migration
            # through older installations.
            pass
        try:
            topups=db.execute(text("SELECT * FROM credit_topup_orders WHERE status='CREATED' AND created_at<=:c ORDER BY created_at ASC LIMIT 100"),{'c':cutoff}).mappings().all()
            for r in topups:
                rid=str(uuid4()); res=db.execute(text("""INSERT INTO payment_recovery_cases(id,user_id,order_kind,local_order_id,provider_order_id,status,created_at,updated_at)
                  VALUES (:i,:u,'CREDIT_TOPUP',:l,:p,'OPEN',:a,:a) ON CONFLICT(order_kind,local_order_id) DO NOTHING"""),{'i':rid,'u':r['user_id'],'l':r['id'],'p':r['provider_order_id'],'a':now_iso()})
                created+=max(0,int(res.rowcount or 0))
        except Exception: pass
    return created


def reconcile_payment_case(case_id: str, *, user_id: str|None=None) -> dict:
    with SessionLocal.begin() as db:
        row=db.execute(text("SELECT * FROM payment_recovery_cases WHERE id=:i" + (" AND user_id=:u" if user_id else '')),({'i':case_id,'u':user_id} if user_id else {'i':case_id})).mappings().first()
        if not row: raise KeyError(case_id)
        case=dict(row); db.execute(text('UPDATE payment_recovery_cases SET attempt_count=attempt_count+1,updated_at=:a WHERE id=:i'),{'a':now_iso(),'i':case_id})
    try:
        if case['order_kind']=='SUBSCRIPTION':
            # A stale regional subscription can be inspected safely, but it cannot
            # be activated here because this recovery surface does not possess the
            # signed payment plus verified billing-country evidence required by the
            # regional-pricing policy.  The normal verify/webhook path remains the
            # only authority that can grant a paid self-service entitlement.
            from .providers import razorpay_get_subscription
            provider=razorpay_get_subscription(case.get('provider_order_id') or '')
            status=str(provider.get('status') or 'unknown').lower()
            with SessionLocal.begin() as db:
                if status in {'cancelled','completed','expired'}:
                    db.execute(text("UPDATE payment_recovery_cases SET status='RESOLVED',last_error=:e,next_attempt_at=NULL,updated_at=:a WHERE id=:i"),{'e':f'Provider subscription is {status}; no entitlement was granted','a':now_iso(),'i':case_id})
                    return {'status':'RESOLVED','provider_status':status,'entitlement_granted':False}
                message='Provider subscription requires signed payment verification before Zylora can be activated'
                db.execute(text("UPDATE payment_recovery_cases SET status='OPEN',last_error=:e,next_attempt_at=:n,updated_at=:a WHERE id=:i"),{'e':message,'n':(datetime.now(timezone.utc)+timedelta(hours=1)).isoformat(),'a':now_iso(),'i':case_id})
            return {'status':'OPEN','provider_status':status,'entitlement_granted':False}

        provider=razorpay_get_order(case.get('provider_order_id') or '')
        payments=razorpay_order_payments(case.get('provider_order_id') or '')
        captured=next((p for p in payments if str(p.get('status')).lower() in {'captured','authorized'}),None)
        if captured:
            if case['order_kind']=='PLAN':
                from .api_extended import _complete_paid_order
                _complete_paid_order(case['local_order_id'],str(captured.get('id') or ''),None,'razorpay-recovery')
            else:
                from .api_extended import _complete_credit_topup
                _complete_credit_topup(case['local_order_id'],str(captured.get('id') or ''),None,'razorpay-recovery')
            with SessionLocal.begin() as db:
                db.execute(text("UPDATE payment_recovery_cases SET status='RESOLVED',last_error=NULL,next_attempt_at=NULL,updated_at=:a WHERE id=:i"),{'a':now_iso(),'i':case_id})
                if case['order_kind']=='PLAN': db.execute(text('UPDATE razorpay_orders SET last_reconciled_at=:a,last_error=NULL,recovery_attempt_count=recovery_attempt_count+1 WHERE id=:i'),{'a':now_iso(),'i':case['local_order_id']})
            return {'status':'RESOLVED','provider_status':provider.get('status'),'payment_id':captured.get('id')}
        with SessionLocal.begin() as db:
            db.execute(text("UPDATE payment_recovery_cases SET status='OPEN',last_error=:e,next_attempt_at=:n,updated_at=:a WHERE id=:i"),{'e':f"Provider order is {provider.get('status','unknown')} with no captured payment"[:1000],'n':(datetime.now(timezone.utc)+timedelta(hours=1)).isoformat(),'a':now_iso(),'i':case_id})
            if case['order_kind']=='PLAN': db.execute(text('UPDATE razorpay_orders SET last_reconciled_at=:a,last_error=:e,recovery_attempt_count=recovery_attempt_count+1 WHERE id=:i'),{'a':now_iso(),'e':f"Provider order {provider.get('status','unknown')}"[:1000],'i':case['local_order_id']})
        return {'status':'OPEN','provider_status':provider.get('status')}
    except Exception as exc:
        with SessionLocal.begin() as db:
            db.execute(text("UPDATE payment_recovery_cases SET status='OPEN',last_error=:e,next_attempt_at=:n,updated_at=:a WHERE id=:i"),{'e':safe_exception_summary(exc),'n':(datetime.now(timezone.utc)+timedelta(hours=1)).isoformat(),'a':now_iso(),'i':case_id})
        record_operational_event('PAYMENTS','RECONCILIATION_FAILED',safe_exception_summary(exc),severity='ERROR',user_id=case['user_id'],metadata={'case_id':case_id,'order_kind':case['order_kind']})
        return {'status':'OPEN','error':'Payment reconciliation is temporarily unavailable'}


def reconcile_due_payment_cases(limit: int=25) -> dict:
    limit=max(1,min(int(limit),100)); now=now_iso()
    with SessionLocal() as db:
        ids=[str(r[0]) for r in db.execute(text("SELECT id FROM payment_recovery_cases WHERE status='OPEN' AND (next_attempt_at IS NULL OR next_attempt_at<=:n) ORDER BY updated_at ASC LIMIT :l"),{'n':now,'l':limit}).all()]
    resolved=0; still_open=0
    for case_id in ids:
        result=reconcile_payment_case(case_id)
        if result.get('status')=='RESOLVED': resolved+=1
        else: still_open+=1
    return {'attempted':len(ids),'resolved':resolved,'still_open':still_open}


@router.get('/billing/recovery')
def billing_recovery(request: Request):
    u=_user(request); scan_stale_payment_orders()
    with SessionLocal() as db:
        rows=db.execute(text("SELECT id,order_kind,local_order_id,provider_order_id,status,attempt_count,last_error,next_attempt_at,created_at,updated_at FROM payment_recovery_cases WHERE user_id=:u AND status='OPEN' ORDER BY updated_at DESC LIMIT 50"),{'u':u['id']}).mappings().all()
    return {'items':[dict(r) for r in rows]}


@router.post('/billing/recovery/{case_id}/reconcile')
def billing_reconcile(case_id: str, request: Request):
    u=_user(request,True)
    try: result=reconcile_payment_case(case_id,user_id=u['id'])
    except KeyError: raise HTTPException(404,'Recovery case not found')
    _audit(u['id'],'PAYMENT_RECONCILE','billing',case_id,result)
    return result


@router.get('/admin/operations')
def admin_operations(request: Request):
    _admin(request); scan_stale_payment_orders(); return operations_summary()


@router.post('/admin/operations/retry-deliveries')
def admin_retry_deliveries(request: Request):
    admin=_admin(request,True); result=retry_due_deliveries(100); _audit(admin['id'],'ADMIN_DELIVERY_RETRY','operations',None,result); return result


@router.patch('/admin/operations/events/{event_id}/resolve')
def resolve_operational_event(event_id: str, request: Request):
    admin=_admin(request,True)
    with SessionLocal.begin() as db:
        changed=db.execute(text("UPDATE operational_events SET status='RESOLVED',resolved_at=:a WHERE id=:i AND status='OPEN'"),{'a':now_iso(),'i':event_id})
        if changed.rowcount!=1: raise HTTPException(404,'Open operational event not found')
    _audit(admin['id'],'OPERATIONAL_EVENT_RESOLVE','operations',event_id)
    return {'ok':True}
