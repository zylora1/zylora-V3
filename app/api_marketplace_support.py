from __future__ import annotations

import hashlib
import ipaddress
import json
import re
import secrets
from datetime import datetime, timedelta, timezone
from urllib.parse import urlparse
from uuid import uuid4

from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import RedirectResponse
from pydantic import BaseModel, EmailStr, Field, field_validator
from sqlalchemy import text

from .api import _audit, _owned_site, _user
from .config import settings
from .db import SessionLocal, now_iso
from .providers import razorpay_create_order, razorpay_signature, razorpay_verify_payment, send_email, verify_turnstile
from .security import durable_rate_limit
from .settings_store import get_system_setting
from .operations import safe_exception_summary, record_operational_event

router = APIRouter(prefix='/api')
public_router = APIRouter()

PLATFORM_HOSTS = {
    'fiverr.com': ('FIVERR', 'Hire on Fiverr'),
    'upwork.com': ('UPWORK', 'View Upwork Profile'),
    'contra.com': ('CONTRA', 'Hire on Contra'),
    'linkedin.com': ('LINKEDIN', 'LinkedIn'),
    'behance.net': ('BEHANCE', 'Behance'),
    'dribbble.com': ('DRIBBBLE', 'Dribbble'),
    'github.com': ('GITHUB', 'GitHub'),
    'instagram.com': ('INSTAGRAM', 'Instagram'),
    'youtube.com': ('YOUTUBE', 'YouTube'),
    'youtu.be': ('YOUTUBE', 'YouTube'),
    'x.com': ('X', 'X'),
    'twitter.com': ('X', 'X / Twitter'),
}
ECOMMERCE_TERMS = {
    'ecommerce','e-commerce','online store','shopping cart','marketplace','checkout','payment gateway',
    'multi vendor','multivendor','shopify','woocommerce','advanced custom commerce','custom application',
}


def _admin(request: Request, csrf: bool=False) -> dict:
    u=_user(request,csrf)
    if u['role']!='SUPER_ADMIN':
        raise HTTPException(403,'Admin only')
    return u


def _public_slug(value: str) -> str:
    value=re.sub(r'[^a-z0-9]+','-',value.lower()).strip('-')[:70] or 'freelancer'
    with SessionLocal() as db:
        slug=value; n=2
        while db.execute(text('SELECT 1 FROM freelancer_profiles WHERE slug=:s'),{'s':slug}).first():
            slug=f'{value}-{n}'; n+=1
    return slug


def _validate_external_url(raw: str) -> tuple[str,str,str,str]:
    value=(raw or '').strip()
    try:
        parsed=urlparse(value)
    except Exception:
        raise HTTPException(422,'Enter a valid external URL')
    if parsed.scheme.lower() not in {'http','https'} or not parsed.hostname:
        raise HTTPException(422,'Only http:// and https:// external links are allowed')
    host=parsed.hostname.lower().rstrip('.')
    if host in {'localhost','localhost.localdomain'} or host.endswith(('.local','.internal','.localhost')):
        raise HTTPException(422,'Private or local network links are not allowed')
    try:
        addr=ipaddress.ip_address(host.strip('[]'))
        if not addr.is_global:
            raise HTTPException(422,'Private or local network links are not allowed')
    except ValueError:
        pass
    if parsed.username or parsed.password:
        raise HTTPException(422,'URLs containing embedded credentials are not allowed')
    # Normalize away fragments. They are unnecessary for tracked outbound destinations.
    normalized=parsed._replace(fragment='').geturl()
    platform='WEBSITE'; label='Visit Website'
    for domain,(candidate,cta) in PLATFORM_HOSTS.items():
        if host==domain or host.endswith('.'+domain):
            platform=candidate; label=cta; break
    return normalized,host,platform,label


def _links_for(freelancer_id: str) -> list[dict]:
    with SessionLocal() as db:
        rows=db.execute(text('SELECT id,platform,url,hostname FROM freelancer_external_links WHERE freelancer_id=:f ORDER BY created_at'),{'f':freelancer_id}).mappings().all()
    result=[]
    for r in rows:
        try:
            url,host,platform,label=_validate_external_url(r['url'])
        except HTTPException:
            continue
        result.append({**dict(r),'url':url,'hostname':host,'platform':platform,'label':label,'tracked_url':f"/go/freelancer/{freelancer_id}/{r['id']}"})
    return result


def _public_profile(row: dict) -> dict:
    skills=json.loads(row.get('skills_json') or '[]')
    services=json.loads(row.get('services_json') or '[]')
    return {
        'id':row['user_id'],'slug':row['slug'],'full_name':row.get('full_name') or row['display_name'],
        'display_name':row['display_name'],'profile_photo_url':row.get('profile_photo_url'),
        'bio':row.get('bio') or '', 'description':row.get('description') or '',
        'skills':skills,'services':services,'years_experience':int(row.get('years_experience') or 0),
        'starting_price_minor':int(row.get('starting_price_minor') or 0),'currency':row.get('currency') or 'USD',
        'location':row.get('location'),'timezone':row.get('timezone'),'links':_links_for(row['user_id']),
        'approved_at':row.get('approved_at'),
    }


class FreelancerApplicationIn(BaseModel):
    full_name: str = Field(min_length=2,max_length=100)
    display_name: str = Field(min_length=2,max_length=100)
    profile_photo_url: str|None = Field(default=None,max_length=1000)
    bio: str = Field(min_length=20,max_length=500)
    description: str = Field(min_length=50,max_length=3000)
    skills: list[str] = Field(default_factory=list,max_length=30)
    services: list[str] = Field(default_factory=list,max_length=30)
    years_experience: int = Field(default=0,ge=0,le=80)
    starting_price_minor: int = Field(default=0,ge=0,le=100_000_000)
    currency: str = Field(default='USD',min_length=3,max_length=3)
    portfolio_url: str|None = Field(default=None,max_length=1000)
    fiverr_url: str|None = Field(default=None,max_length=1000)
    upwork_url: str|None = Field(default=None,max_length=1000)
    contra_url: str|None = Field(default=None,max_length=1000)
    linkedin_url: str|None = Field(default=None,max_length=1000)
    behance_url: str|None = Field(default=None,max_length=1000)
    dribbble_url: str|None = Field(default=None,max_length=1000)
    github_url: str|None = Field(default=None,max_length=1000)
    personal_website_url: str|None = Field(default=None,max_length=1000)
    other_url: str|None = Field(default=None,max_length=1000)
    location: str|None = Field(default=None,max_length=120)
    timezone: str|None = Field(default=None,max_length=80)

    @field_validator('skills','services')
    @classmethod
    def clean_list(cls, values: list[str]):
        return [v.strip()[:80] for v in values if v and v.strip()][:30]


def _application_links(payload: FreelancerApplicationIn) -> list[tuple[str,str,str]]:
    raw=[payload.portfolio_url,payload.fiverr_url,payload.upwork_url,payload.contra_url,payload.linkedin_url,payload.behance_url,payload.dribbble_url,payload.github_url,payload.personal_website_url,payload.other_url]
    links=[]; seen=set()
    for value in raw:
        if not value: continue
        url,host,platform,_=_validate_external_url(value)
        key=(platform,url)
        if key in seen: continue
        seen.add(key); links.append((platform,url,host))
    if not links:
        raise HTTPException(422,'Add at least one portfolio or professional profile URL')
    return links


@router.get('/freelancer/application')
def freelancer_application(request: Request):
    u=_user(request)
    with SessionLocal() as db:
        row=db.execute(text('SELECT * FROM freelancer_profiles WHERE user_id=:u'),{'u':u['id']}).mappings().first()
    if not row: return {'profile':None,'links':[]}
    return {'profile':{**dict(row),'skills':json.loads(row['skills_json'] or '[]'),'services':json.loads(row['services_json'] or '[]')},'links':_links_for(u['id'])}


@router.post('/freelancer/application')
def submit_freelancer_application(payload: FreelancerApplicationIn, request: Request):
    u=_user(request,True); links=_application_links(payload); now=now_iso()
    photo=_validate_external_url(payload.profile_photo_url)[0] if payload.profile_photo_url else None
    with SessionLocal.begin() as db:
        existing=db.execute(text('SELECT * FROM freelancer_profiles WHERE user_id=:u'),{'u':u['id']}).mappings().first()
        slug=existing['slug'] if existing and existing['slug'] else _public_slug(payload.display_name)
        status=existing['status'] if existing and existing['status'] in {'APPROVED','SUSPENDED'} else 'PENDING'
        vals={'u':u['id'],'full':payload.full_name.strip(),'display':payload.display_name.strip(),'photo':photo,'bio':payload.bio.strip(),'desc':payload.description.strip(),'skills':json.dumps(payload.skills),'services':json.dumps(payload.services),'years':payload.years_experience,'price':payload.starting_price_minor,'currency':payload.currency.upper(),'location':payload.location,'timezone':payload.timezone,'slug':slug,'status':status,'now':now}
        if existing:
            db.execute(text('''UPDATE freelancer_profiles SET full_name=:full,display_name=:display,profile_photo_url=:photo,bio=:bio,description=:desc,skills_json=:skills,services_json=:services,years_experience=:years,starting_price_minor=:price,currency=:currency,location=:location,timezone=:timezone,slug=:slug,status=:status,submitted_at=:now,rejection_reason=NULL,updated_at=:now WHERE user_id=:u'''),vals)
        else:
            db.execute(text('''INSERT INTO freelancer_profiles(user_id,display_name,bio,status,created_at,updated_at,full_name,slug,profile_photo_url,description,skills_json,services_json,years_experience,starting_price_minor,currency,location,timezone,submitted_at) VALUES (:u,:display,:bio,:status,:now,:now,:full,:slug,:photo,:desc,:skills,:services,:years,:price,:currency,:location,:timezone,:now)'''),vals)
        db.execute(text('DELETE FROM freelancer_external_links WHERE freelancer_id=:u'),{'u':u['id']})
        for platform,url,host in links:
            db.execute(text('INSERT INTO freelancer_external_links(id,freelancer_id,platform,url,hostname,created_at,updated_at) VALUES (:i,:u,:p,:url,:h,:a,:a)'),{'i':str(uuid4()),'u':u['id'],'p':platform,'url':url,'h':host,'a':now})
    _audit(u['id'],'FREELANCER_APPLICATION_SUBMIT','freelancer',u['id'],{'status':status})
    return {'ok':True,'status':status,'slug':slug}


@router.get('/public/freelancers')
def public_freelancers(search: str='', skill: str='', service: str=''):
    q='%'+search.strip().lower()+'%'; sk=skill.strip().lower(); sv=service.strip().lower()
    with SessionLocal() as db:
        rows=db.execute(text("SELECT * FROM freelancer_profiles WHERE status='APPROVED' AND (:q='%%' OR lower(display_name) LIKE :q OR lower(bio) LIKE :q OR lower(description) LIKE :q) ORDER BY approved_at DESC,created_at DESC LIMIT 200"),{'q':q}).mappings().all()
    items=[]
    for r in rows:
        p=_public_profile(dict(r))
        if sk and not any(sk in x.lower() for x in p['skills']): continue
        if sv and not any(sv in x.lower() for x in p['services']): continue
        items.append(p)
    return {'items':items,'count':len(items)}


@router.get('/public/freelancers/{slug}')
def public_freelancer(slug: str):
    with SessionLocal() as db:
        row=db.execute(text("SELECT * FROM freelancer_profiles WHERE slug=:s AND status='APPROVED'"),{'s':slug}).mappings().first()
    if not row: raise HTTPException(404,'Freelancer not found')
    return _public_profile(dict(row))


@public_router.get('/go/freelancer/{freelancer_id}/{link_id}',include_in_schema=False)
def freelancer_redirect(freelancer_id: str, link_id: str, request: Request):
    with SessionLocal.begin() as db:
        row=db.execute(text("SELECT l.*,p.status FROM freelancer_external_links l JOIN freelancer_profiles p ON p.user_id=l.freelancer_id WHERE l.id=:l AND l.freelancer_id=:f AND p.status='APPROVED'"),{'l':link_id,'f':freelancer_id}).mappings().first()
        if not row: raise HTTPException(404,'Freelancer link not found')
        url,_,platform,_=_validate_external_url(row['url'])
        ip=request.client.host if request.client else ''; ua=request.headers.get('user-agent','')[:250]
        request_hash=hashlib.sha256(f'{ip}|{ua}'.encode()).hexdigest()
        db.execute(text('INSERT INTO freelancer_outbound_clicks(id,freelancer_id,platform,link_id,request_hash,created_at) VALUES (:i,:f,:p,:l,:h,:a)'),{'i':str(uuid4()),'f':freelancer_id,'p':platform,'l':link_id,'h':request_hash,'a':now_iso()})
        db.execute(text('UPDATE freelancer_profiles SET outbound_click_count=outbound_click_count+1,updated_at=:a WHERE user_id=:f'),{'a':now_iso(),'f':freelancer_id})
    return RedirectResponse(url,status_code=302,headers={'Referrer-Policy':'no-referrer'})


class FreelancerEnquiryIn(BaseModel):
    name: str = Field(min_length=2,max_length=100)
    email: EmailStr
    company: str|None = Field(default=None,max_length=140)
    website_type: str = Field(min_length=2,max_length=120)
    project_description: str = Field(min_length=20,max_length=3000)
    budget: str|None = Field(default=None,max_length=120)
    preferred_contact_method: str|None = Field(default=None,max_length=120)
    website: str|None = Field(default=None,max_length=250)  # honeypot
    turnstile_token: str|None = None
    idempotency_key: str|None = Field(default=None,max_length=120)


@router.post('/public/freelancers/{slug}/enquiries')
def freelancer_enquiry(slug: str, payload: FreelancerEnquiryIn, request: Request):
    if payload.website:
        return {'ok':True,'message':'Enquiry received.'}
    with SessionLocal() as db:
        profile=db.execute(text("SELECT p.*,u.email freelancer_email FROM freelancer_profiles p JOIN users u ON u.id=p.user_id WHERE p.slug=:s AND p.status='APPROVED'"),{'s':slug}).mappings().first()
    if not profile: raise HTTPException(404,'Freelancer not found')
    text_blob=f'{payload.website_type} {payload.project_description}'.lower()
    if any(term in text_blob for term in ECOMMERCE_TERMS):
        raise HTTPException(409,detail={'code':'MANAGED_SERVICE_REQUIRED','message':'This project needs Zylora managed support.','cta':'/#managed'})
    ip=request.client.host if request.client else 'unknown'; email=str(payload.email).lower(); fid=profile['user_id']
    idem=(payload.idempotency_key or hashlib.sha256(f'{fid}|{email}|{payload.website_type}|{payload.project_description.strip()}'.encode()).hexdigest())[:120]
    # A network/client retry with the same idempotency key is returned before consuming another abuse-limit slot or sending duplicate email.
    with SessionLocal() as db:
        existing=db.execute(text('SELECT id FROM freelancer_leads WHERE freelancer_id=:f AND idempotency_key=:k'),{'f':fid,'k':idem}).mappings().first()
    if existing:
        return {'ok':True,'id':existing['id'],'idempotent':True}
    # Shared/durable limits: safe across multiple app workers because counters live in the database.
    durable_rate_limit(f'freelancer-enquiry:ip15:{ip}',3,15*60)
    durable_rate_limit(f'freelancer-enquiry:ip24:{ip}',10,24*60*60)
    durable_rate_limit(f'freelancer-enquiry:email:{email}',6,24*60*60)
    durable_rate_limit(f'freelancer-enquiry:pair:{email}:{fid}',3,24*60*60)
    verify_turnstile(payload.turnstile_token,ip)
    request_hash=hashlib.sha256(f'{ip}|{request.headers.get("user-agent","")[:250]}'.encode()).hexdigest()
    with SessionLocal.begin() as db:
        # Re-check in the transaction to close the race between the preflight idempotency lookup and insertion.
        existing=db.execute(text('SELECT id FROM freelancer_leads WHERE freelancer_id=:f AND idempotency_key=:k'),{'f':fid,'k':idem}).mappings().first()
        if existing:
            return {'ok':True,'id':existing['id'],'idempotent':True}
        # Near-identical same-email/same-freelancer submissions remain blocked even if the client changes its idempotency key.
        recent=db.execute(text("SELECT id FROM freelancer_leads WHERE freelancer_id=:f AND lower(customer_email)=:e AND enquiry_summary=:m AND created_at>=:cut LIMIT 1"),{'f':fid,'e':email,'m':payload.project_description.strip(),'cut':(datetime.now(timezone.utc)-timedelta(hours=2)).isoformat()}).mappings().first()
        if recent:
            db.execute(text('UPDATE freelancer_profiles SET spam_count=spam_count+1 WHERE user_id=:f'),{'f':fid})
            raise HTTPException(429,'Too many requests')
        lid=str(uuid4()); now=now_iso()
        db.execute(text('''INSERT INTO freelancer_leads(id,freelancer_id,customer_name,customer_email,company,website_type,enquiry_summary,budget,preferred_contact_method,status,idempotency_key,request_hash,created_at) VALUES (:i,:f,:n,:e,:c,:w,:m,:b,:p,'SENT',:k,:h,:a)'''),{'i':lid,'f':fid,'n':payload.name.strip(),'e':email,'c':payload.company,'w':payload.website_type.strip(),'m':payload.project_description.strip(),'b':payload.budget,'p':payload.preferred_contact_method,'k':idem,'h':request_hash,'a':now})
        db.execute(text('UPDATE freelancer_profiles SET enquiry_count=enquiry_count+1,updated_at=:a WHERE user_id=:f'),{'a':now,'f':fid})
    notified=False
    try:
        send_email(profile['freelancer_email'],f'New Zylora enquiry from {payload.name}',f'{payload.name} ({email}) is interested in {payload.website_type}.\n\n{payload.project_description}')
        notified=True
    except Exception:
        pass
    try:
        send_email(email,'Your Zylora freelancer enquiry was sent',f'Your enquiry to {profile["display_name"]} was submitted. The freelancer can contact you using the details you provided.')
    except Exception:
        pass
    if notified:
        with SessionLocal.begin() as db: db.execute(text('UPDATE freelancer_leads SET notification_sent_at=:a WHERE id=:i'),{'a':now_iso(),'i':lid})
    return {'ok':True,'id':lid,'message':'Enquiry received.'}


@router.get('/admin/freelancers')
def admin_freelancers(request: Request, status: str='', search: str=''):
    _admin(request); status=status.upper().strip(); q='%'+search.strip().lower()+'%'
    params={'q':q,'status':status}
    where="(:status='' OR p.status=:status) AND (:q='%%' OR lower(p.display_name) LIKE :q OR lower(COALESCE(p.full_name,'')) LIKE :q OR lower(u.email) LIKE :q)"
    with SessionLocal() as db:
        rows=db.execute(text(f'''SELECT p.*,u.email,u.name account_name,
          (SELECT count(*) FROM freelancer_outbound_clicks c WHERE c.freelancer_id=p.user_id) click_count,
          (SELECT count(*) FROM freelancer_leads l WHERE l.freelancer_id=p.user_id) lead_count
          FROM freelancer_profiles p JOIN users u ON u.id=p.user_id WHERE {where} ORDER BY p.updated_at DESC LIMIT 500'''),params).mappings().all()
    return {'items':[{**dict(r),'skills':json.loads(r['skills_json'] or '[]'),'services':json.loads(r['services_json'] or '[]'),'links':_links_for(r['user_id'])} for r in rows]}


class AdminFreelancerPatch(BaseModel):
    status: str|None=None
    display_name: str|None=Field(default=None,min_length=2,max_length=100)
    full_name: str|None=Field(default=None,min_length=2,max_length=100)
    bio: str|None=Field(default=None,max_length=500)
    description: str|None=Field(default=None,max_length=3000)
    skills: list[str]|None=None
    services: list[str]|None=None
    years_experience: int|None=Field(default=None,ge=0,le=80)
    starting_price_minor: int|None=Field(default=None,ge=0,le=100_000_000)
    currency: str|None=Field(default=None,min_length=3,max_length=3)
    location: str|None=Field(default=None,max_length=120)
    timezone: str|None=Field(default=None,max_length=80)
    profile_photo_url: str|None=Field(default=None,max_length=1000)
    rejection_reason: str|None=Field(default=None,max_length=1000)
    links: list[str]|None=None


@router.patch('/admin/freelancers/{freelancer_id}')
def admin_freelancer_patch(freelancer_id: str, payload: AdminFreelancerPatch, request: Request):
    admin=_admin(request,True); data=payload.model_dump(exclude_none=True)
    with SessionLocal.begin() as db:
        row=db.execute(text('SELECT * FROM freelancer_profiles WHERE user_id=:f'),{'f':freelancer_id}).mappings().first()
        if not row: raise HTTPException(404,'Freelancer application not found')
        status=data.get('status',row['status']).upper()
        if status not in {'PENDING','APPROVED','REJECTED','SUSPENDED'}: raise HTTPException(422,'Invalid freelancer status')
        if 'profile_photo_url' in data and data.get('profile_photo_url'):
            data['profile_photo_url']=_validate_external_url(data['profile_photo_url'])[0]
        fields={
            'display_name':data.get('display_name',row['display_name']),'full_name':data.get('full_name',row['full_name']),
            'bio':data.get('bio',row['bio']),'description':data.get('description',row['description']),
            'skills_json':json.dumps(data.get('skills',json.loads(row['skills_json'] or '[]'))),
            'services_json':json.dumps(data.get('services',json.loads(row['services_json'] or '[]'))),
            'years_experience':data.get('years_experience',row['years_experience']),'starting_price_minor':data.get('starting_price_minor',row['starting_price_minor']),
            'currency':str(data.get('currency',row['currency'])).upper(),'location':data.get('location',row['location']),
            'timezone':data.get('timezone',row['timezone']),'profile_photo_url':data.get('profile_photo_url',row['profile_photo_url']),
            'rejection_reason':data.get('rejection_reason',row['rejection_reason']),'status':status,
            'approved_at':now_iso() if status=='APPROVED' and not row['approved_at'] else row['approved_at'],
            'moderated_by':admin['id'],'updated_at':now_iso(),'user_id':freelancer_id,
        }
        db.execute(text('''UPDATE freelancer_profiles SET display_name=:display_name,full_name=:full_name,bio=:bio,description=:description,skills_json=:skills_json,services_json=:services_json,years_experience=:years_experience,starting_price_minor=:starting_price_minor,currency=:currency,location=:location,timezone=:timezone,profile_photo_url=:profile_photo_url,rejection_reason=:rejection_reason,status=:status,approved_at=:approved_at,moderated_by=:moderated_by,updated_at=:updated_at WHERE user_id=:user_id'''),fields)
        if 'links' in data:
            new_links=[]
            for raw in data['links']:
                url,host,platform,_=_validate_external_url(raw); new_links.append((platform,url,host))
            if not new_links: raise HTTPException(422,'At least one professional link is required')
            db.execute(text('DELETE FROM freelancer_external_links WHERE freelancer_id=:f'),{'f':freelancer_id})
            for platform,url,host in new_links:
                db.execute(text('INSERT INTO freelancer_external_links(id,freelancer_id,platform,url,hostname,created_at,updated_at) VALUES (:i,:f,:p,:u,:h,:a,:a)'),{'i':str(uuid4()),'f':freelancer_id,'p':platform,'u':url,'h':host,'a':now_iso()})
    _audit(admin['id'],'ADMIN_FREELANCER_MODERATE','freelancer',freelancer_id,{'status':status})
    return {'ok':True,'status':status}


# --------------------------- Support messaging -----------------------------
SUPPORT_STATUSES={'OPEN','WAITING_ON_USER','WAITING_ON_SUPPORT','RESOLVED'}
PRIORITIES={'LOW','NORMAL','HIGH','URGENT'}


def _support_ref() -> str:
    alphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    for _ in range(20):
        code='ZSUP-'+''.join(secrets.choice(alphabet) for _ in range(6))
        with SessionLocal() as db:
            if not db.execute(text('SELECT 1 FROM support_conversations WHERE reference_code=:c'),{'c':code}).first(): return code
    raise RuntimeError('Could not allocate support reference')


class SupportCreateIn(BaseModel):
    website_id: str|None=None
    subject: str=Field(min_length=3,max_length=160)
    category: str|None=Field(default=None,max_length=80)
    message: str=Field(min_length=2,max_length=10000)


class SupportMessageIn(BaseModel):
    body: str=Field(min_length=1,max_length=10000)


@router.post('/support/conversations')
def support_create(payload: SupportCreateIn, request: Request):
    u=_user(request,True); durable_rate_limit(f'support-create:{u["id"]}',10,3600)
    if payload.website_id:
        with SessionLocal() as db: _owned_site(db,u['id'],payload.website_id)
    cid=str(uuid4()); mid=str(uuid4()); ref=_support_ref(); now=now_iso()
    with SessionLocal.begin() as db:
        db.execute(text("INSERT INTO support_conversations(id,reference_code,user_id,website_id,subject,category,status,priority,user_last_read_at,created_at,updated_at) VALUES (:i,:r,:u,:w,:s,:c,'WAITING_ON_SUPPORT','NORMAL',:a,:a,:a)"),{'i':cid,'r':ref,'u':u['id'],'w':payload.website_id,'s':payload.subject.strip(),'c':payload.category,'a':now})
        db.execute(text('INSERT INTO support_messages(id,conversation_id,sender_user_id,body,is_internal,created_at) VALUES (:i,:c,:u,:b,0,:a)'),{'i':mid,'c':cid,'u':u['id'],'b':payload.message.strip(),'a':now})
    _audit(u['id'],'SUPPORT_CREATE','support_conversation',cid,{'reference':ref})
    return {'ok':True,'id':cid,'reference_code':ref,'status':'WAITING_ON_SUPPORT'}


def _support_user_thread(db, user_id: str, conversation_id: str):
    row=db.execute(text('SELECT c.*,s.business_name website_name FROM support_conversations c LEFT JOIN sites s ON s.id=c.website_id WHERE c.id=:c AND c.user_id=:u'),{'c':conversation_id,'u':user_id}).mappings().first()
    if not row: raise HTTPException(404,'Support conversation not found')
    return row


@router.get('/support/conversations')
def support_list(request: Request):
    u=_user(request)
    with SessionLocal() as db:
        rows=db.execute(text('''SELECT c.*,s.business_name website_name,
          (SELECT count(*) FROM support_messages m WHERE m.conversation_id=c.id AND m.sender_admin_id IS NOT NULL AND m.is_internal=0 AND (c.user_last_read_at IS NULL OR m.created_at>c.user_last_read_at)) unread_count
          FROM support_conversations c LEFT JOIN sites s ON s.id=c.website_id WHERE c.user_id=:u ORDER BY c.updated_at DESC'''),{'u':u['id']}).mappings().all()
    return {'items':[dict(r) for r in rows]}


@router.get('/support/conversations/{conversation_id}')
def support_thread(conversation_id: str, request: Request):
    u=_user(request)
    with SessionLocal.begin() as db:
        row=_support_user_thread(db,u['id'],conversation_id)
        msgs=db.execute(text('SELECT id,sender_user_id,sender_admin_id,body,created_at,edited_at FROM support_messages WHERE conversation_id=:c AND is_internal=0 ORDER BY created_at'),{'c':conversation_id}).mappings().all()
        db.execute(text('UPDATE support_conversations SET user_last_read_at=:a WHERE id=:c'),{'a':now_iso(),'c':conversation_id})
    return {'conversation':dict(row),'messages':[dict(m) for m in msgs]}


@router.post('/support/conversations/{conversation_id}/messages')
def support_user_message(conversation_id: str, payload: SupportMessageIn, request: Request):
    u=_user(request,True); durable_rate_limit(f'support-message:{u["id"]}',60,3600); now=now_iso()
    with SessionLocal.begin() as db:
        row=_support_user_thread(db,u['id'],conversation_id)
        if row['status']=='RESOLVED': raise HTTPException(409,'Reopen this conversation before replying')
        mid=str(uuid4())
        db.execute(text('INSERT INTO support_messages(id,conversation_id,sender_user_id,body,is_internal,created_at) VALUES (:i,:c,:u,:b,0,:a)'),{'i':mid,'c':conversation_id,'u':u['id'],'b':payload.body.strip(),'a':now})
        db.execute(text("UPDATE support_conversations SET status='WAITING_ON_SUPPORT',updated_at=:a,user_last_read_at=:a WHERE id=:c"),{'a':now,'c':conversation_id})
    return {'ok':True,'id':mid,'status':'WAITING_ON_SUPPORT'}


@router.post('/support/conversations/{conversation_id}/resolve')
def support_user_resolve(conversation_id: str, request: Request):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        _support_user_thread(db,u['id'],conversation_id)
        db.execute(text("UPDATE support_conversations SET status='RESOLVED',resolved_at=:a,updated_at=:a WHERE id=:c"),{'a':now_iso(),'c':conversation_id})
    return {'ok':True,'status':'RESOLVED'}


@router.post('/support/conversations/{conversation_id}/reopen')
def support_user_reopen(conversation_id: str, request: Request):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        _support_user_thread(db,u['id'],conversation_id)
        db.execute(text("UPDATE support_conversations SET status='WAITING_ON_SUPPORT',resolved_at=NULL,updated_at=:a WHERE id=:c"),{'a':now_iso(),'c':conversation_id})
    return {'ok':True,'status':'WAITING_ON_SUPPORT'}


@router.get('/admin/support/operators')
def support_operators(request: Request):
    _admin(request)
    with SessionLocal() as db:
        rows=db.execute(text("SELECT id,name,email FROM users WHERE role='SUPER_ADMIN' ORDER BY name,email")).mappings().all()
    return {'items':[dict(r) for r in rows]}


@router.get('/admin/support/meta')
def support_admin_meta(request: Request):
    _admin(request)
    with SessionLocal() as db:
        operators=db.execute(text("SELECT id,name,email FROM users WHERE role='SUPER_ADMIN' ORDER BY name,email")).mappings().all()
        sites=db.execute(text("SELECT s.id,s.business_name,u.name owner_name,u.email owner_email FROM sites s JOIN users u ON u.id=s.user_id ORDER BY s.business_name,u.email LIMIT 5000")).mappings().all()
        plans=[r[0] for r in db.execute(text("SELECT plan FROM plan_configs ORDER BY plan")).fetchall()]
    return {'operators':[dict(r) for r in operators],'sites':[dict(r) for r in sites],'plans':plans}


@router.get('/admin/support')
def admin_support_list(request: Request, status: str='', search: str='', plan: str='', website_id: str='', assigned_admin_id: str=''):
    _admin(request); status=status.upper().strip(); plan=plan.upper().strip(); q='%'+search.strip().lower()+'%'
    with SessionLocal() as db:
        rows=db.execute(text('''SELECT c.*,u.name user_name,u.email user_email,u.plan,s.business_name website_name,a.name assigned_admin_name,
          (SELECT count(*) FROM support_messages m WHERE m.conversation_id=c.id AND m.sender_user_id IS NOT NULL AND (c.admin_last_read_at IS NULL OR m.created_at>c.admin_last_read_at)) unread_count
          FROM support_conversations c JOIN users u ON u.id=c.user_id LEFT JOIN sites s ON s.id=c.website_id LEFT JOIN users a ON a.id=c.assigned_admin_id
          WHERE (:status='' OR c.status=:status) AND (:plan='' OR u.plan=:plan) AND (:website='' OR c.website_id=:website)
            AND (:assigned='' OR c.assigned_admin_id=:assigned)
            AND (:q='%%' OR lower(c.reference_code) LIKE :q OR lower(c.subject) LIKE :q OR lower(u.name) LIKE :q OR lower(u.email) LIKE :q)
          ORDER BY CASE c.priority WHEN 'URGENT' THEN 0 WHEN 'HIGH' THEN 1 WHEN 'NORMAL' THEN 2 ELSE 3 END,c.updated_at DESC LIMIT 1000'''),{'status':status,'plan':plan,'website':website_id,'assigned':assigned_admin_id,'q':q}).mappings().all()
    return {'items':[dict(r) for r in rows]}


@router.get('/admin/support/{conversation_id}')
def admin_support_thread(conversation_id: str, request: Request):
    _admin(request)
    with SessionLocal.begin() as db:
        row=db.execute(text('''SELECT c.*,u.name user_name,u.email user_email,u.plan,s.business_name website_name FROM support_conversations c JOIN users u ON u.id=c.user_id LEFT JOIN sites s ON s.id=c.website_id WHERE c.id=:c'''),{'c':conversation_id}).mappings().first()
        if not row: raise HTTPException(404,'Support conversation not found')
        msgs=db.execute(text('''SELECT m.*,COALESCE(ua.name,uu.name) sender_name FROM support_messages m LEFT JOIN users ua ON ua.id=m.sender_admin_id LEFT JOIN users uu ON uu.id=m.sender_user_id WHERE m.conversation_id=:c ORDER BY m.created_at'''),{'c':conversation_id}).mappings().all()
        db.execute(text('UPDATE support_conversations SET admin_last_read_at=:a WHERE id=:c'),{'a':now_iso(),'c':conversation_id})
    return {'conversation':dict(row),'messages':[dict(m) for m in msgs]}


class AdminSupportMessageIn(BaseModel):
    body: str=Field(min_length=1,max_length=10000)
    is_internal: bool=False


@router.post('/admin/support/{conversation_id}/messages')
def admin_support_message(conversation_id: str, payload: AdminSupportMessageIn, request: Request):
    admin=_admin(request,True); now=now_iso()
    with SessionLocal.begin() as db:
        conv=db.execute(text('SELECT c.*,u.email,u.name FROM support_conversations c JOIN users u ON u.id=c.user_id WHERE c.id=:c'),{'c':conversation_id}).mappings().first()
        if not conv: raise HTTPException(404,'Support conversation not found')
        mid=str(uuid4())
        db.execute(text('INSERT INTO support_messages(id,conversation_id,sender_admin_id,body,is_internal,created_at) VALUES (:i,:c,:a,:b,:internal,:n)'),{'i':mid,'c':conversation_id,'a':admin['id'],'b':payload.body.strip(),'internal':int(payload.is_internal),'n':now})
        if payload.is_internal:
            db.execute(text('UPDATE support_conversations SET updated_at=:a,admin_last_read_at=:a WHERE id=:c'),{'a':now,'c':conversation_id})
        else:
            db.execute(text("UPDATE support_conversations SET status='WAITING_ON_USER',updated_at=:a,admin_last_read_at=:a WHERE id=:c"),{'a':now,'c':conversation_id})
    if not payload.is_internal:
        should_email=not conv['last_user_email_notified_at'] or datetime.fromisoformat(conv['last_user_email_notified_at']) < datetime.now(timezone.utc)-timedelta(minutes=30)
        if should_email:
            try:
                send_email(conv['email'],'New reply from Zylora Support',f'You have a new reply from Zylora Support. Reference: {conv["reference_code"]}\nOpen Zylora to view the conversation.')
                with SessionLocal.begin() as db: db.execute(text('UPDATE support_conversations SET last_user_email_notified_at=:a WHERE id=:c'),{'a':now_iso(),'c':conversation_id})
            except Exception:
                pass
    _audit(admin['id'],'SUPPORT_ADMIN_MESSAGE','support_conversation',conversation_id,{'internal':payload.is_internal})
    return {'ok':True,'id':mid,'status':'UNCHANGED' if payload.is_internal else 'WAITING_ON_USER'}


class AdminSupportPatch(BaseModel):
    status: str|None=None
    priority: str|None=None
    assigned_admin_id: str|None=None


@router.patch('/admin/support/{conversation_id}')
def admin_support_patch(conversation_id: str, payload: AdminSupportPatch, request: Request):
    admin=_admin(request,True); data=payload.model_dump(exclude_unset=True)
    with SessionLocal.begin() as db:
        row=db.execute(text('SELECT * FROM support_conversations WHERE id=:c'),{'c':conversation_id}).mappings().first()
        if not row: raise HTTPException(404,'Support conversation not found')
        status=str(data.get('status',row['status'])).upper(); priority=str(data.get('priority',row['priority'])).upper()
        if status not in SUPPORT_STATUSES or priority not in PRIORITIES: raise HTTPException(422,'Invalid support status or priority')
        assignee=data.get('assigned_admin_id',row['assigned_admin_id'])
        if assignee:
            ok=db.execute(text("SELECT 1 FROM users WHERE id=:i AND role='SUPER_ADMIN'"),{'i':assignee}).first()
            if not ok: raise HTTPException(422,'Assignee must be a SUPER_ADMIN')
        resolved=now_iso() if status=='RESOLVED' else None
        db.execute(text('UPDATE support_conversations SET status=:s,priority=:p,assigned_admin_id=:a,resolved_at=:r,updated_at=:u WHERE id=:c'),{'s':status,'p':priority,'a':assignee,'r':resolved,'u':now_iso(),'c':conversation_id})
    _audit(admin['id'],'SUPPORT_ADMIN_UPDATE','support_conversation',conversation_id,{'status':status,'priority':priority,'assigned_admin_id':assignee})
    return {'ok':True,'status':status,'priority':priority,'assigned_admin_id':assignee}


@router.post('/support/attachments')
def support_attachments_disabled(request: Request):
    _user(request,True)
    raise HTTPException(501,'Support attachments are disabled until authenticated object storage and malware scanning are configured')


# ---------------------- Independent paid source export ---------------------
def _export_prices() -> dict:
    return {'USD':int(get_system_setting('source_export_usd_minor','9900')),'INR':int(get_system_setting('source_export_inr_minor','829900'))}


@router.get('/source-export/config')
def source_export_config(request: Request):
    _user(request); return {'prices':_export_prices()}


class SourceExportOrderIn(BaseModel):
    currency: str='USD'


@router.post('/sites/{site_id}/source-export/order')
def source_export_order(site_id: str, payload: SourceExportOrderIn, request: Request):
    u=_user(request,True); durable_rate_limit(f'source-export-order:{u["id"]}',10,3600); currency=payload.currency.upper(); prices=_export_prices()
    if currency not in prices: raise HTTPException(422,'Unsupported currency')
    with SessionLocal() as db:
        _owned_site(db,u['id'],site_id)
        entitled=db.execute(text('SELECT 1 FROM source_export_entitlements WHERE user_id=:u AND site_id=:s'),{'u':u['id'],'s':site_id}).first()
    if entitled: return {'ok':True,'entitled':True}
    oid=str(uuid4()); amount=prices[currency]
    try: provider=razorpay_create_order(amount,currency,f'export-{oid[:16]}',{'site_id':site_id,'user_id':u['id']})
    except Exception as exc:
        record_operational_event('PAYMENTS','SOURCE_EXPORT_ORDER_FAILED',safe_exception_summary(exc),severity='ERROR',user_id=u['id'],site_id=site_id,dedupe_minutes=2)
        raise HTTPException(503,'Source export checkout is temporarily unavailable. Please try again.')
    now=now_iso()
    with SessionLocal.begin() as db:
        db.execute(text('INSERT INTO source_export_orders(id,user_id,site_id,amount_minor,currency,provider_order_id,status,created_at,updated_at) VALUES (:i,:u,:s,:a,:c,:p,\'CREATED\',:n,:n)'),{'i':oid,'u':u['id'],'s':site_id,'a':amount,'c':currency,'p':provider['id'],'n':now})
    result={'order_id':provider['id'],'amount':amount,'currency':currency,'provider':provider.get('provider','razorpay'),'key_id':settings.razorpay_key_id or None}
    if result['provider']=='mock' and settings.app_env!='production':
        payment='pay_mock_'+secrets.token_hex(6); result['mock_payment_id']=payment; result['mock_signature']=razorpay_signature(provider['id'],payment,'zylora-mock-razorpay-secret')
    return result


class SourceExportVerifyIn(BaseModel):
    order_id: str
    payment_id: str
    signature: str


@router.post('/sites/{site_id}/source-export/verify')
def source_export_verify(site_id: str, payload: SourceExportVerifyIn, request: Request):
    u=_user(request,True); durable_rate_limit(f'source-export-verify:{u["id"]}',30,3600)
    with SessionLocal.begin() as db:
        row=db.execute(text("SELECT * FROM source_export_orders WHERE user_id=:u AND site_id=:s AND provider_order_id=:o AND status='CREATED'"),{'u':u['id'],'s':site_id,'o':payload.order_id}).mappings().first()
        if not row: raise HTTPException(404,'Source export order not found')
        if not razorpay_verify_payment(payload.order_id,payload.payment_id,payload.signature): raise HTTPException(400,'Invalid payment signature')
        db.execute(text("UPDATE source_export_orders SET provider_payment_id=:p,status='PAID',updated_at=:a WHERE id=:i"),{'p':payload.payment_id,'a':now_iso(),'i':row['id']})
        db.execute(text('INSERT INTO source_export_entitlements(user_id,site_id,order_id,created_at) VALUES (:u,:s,:o,:a) ON CONFLICT(user_id,site_id) DO NOTHING'),{'u':u['id'],'s':site_id,'o':row['id'],'a':now_iso()})
    _audit(u['id'],'SOURCE_EXPORT_UNLOCK','site',site_id,{'order_id':row['id']})
    return {'ok':True,'entitled':True}
