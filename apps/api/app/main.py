from __future__ import annotations
from contextlib import asynccontextmanager
import json, hashlib
from fastapi import FastAPI, Depends, HTTPException, Request, Header, Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.orm import Session
from .db import Base, engine
from .auth import get_db, current_user
from .models import User, Subscription, CustomDomain, Site, WebhookEvent
from .security import hash_password, verify_password, issue_token
from .services.accounts import create_action_token, verify_email, reset_password, export_account
from .services.operations import readiness
from .config import settings, validate_production_settings
from .enums import Role, Plan
from .integrations import verify_google_id_token, verify_turnstile, razorpay_create_subscription, verify_razorpay_webhook, resend_email, cloudflare_create_hostname, IntegrationError
from .rate_limit import enforce_rate_limit
from .routers import sites,leads,blog,scheduling,managed,admin,publishing,credits,pricing,chatbot,templates,notifications

@asynccontextmanager
async def lifespan(app:FastAPI):
    # Fail closed at process startup for unsafe production configuration.
    validate_production_settings()
    if settings.env in ('development','test'):
        Base.metadata.create_all(engine)
    yield

app=FastAPI(title='Zylora API',version='3.4.0',lifespan=lifespan)
app.add_middleware(CORSMiddleware,allow_origins=[x.strip() for x in settings.cors_origins.split(',') if x.strip()],allow_credentials=True,allow_methods=['*'],allow_headers=['*'])
for r in (sites.router,leads.router,blog.router,scheduling.router,managed.router,admin.router,publishing.router,publishing.public_router,credits.router,pricing.router,chatbot.router,templates.router,templates.admin_router,notifications.router):
    app.include_router(r)
@app.get('/health')
def health(): return {'status':'ok','service':'zylora-api','version':'3.4.0'}
@app.get('/ready')
def ready(db:Session=Depends(get_db)):
    result=readiness(db)
    if not result['ready']: raise HTTPException(503,detail=result)
    return result

class Signup(BaseModel): email:str; password:str; turnstile_token:str|None=None
class Login(BaseModel): email:str; password:str; turnstile_token:str|None=None
class GoogleLogin(BaseModel): id_token:str; turnstile_token:str|None=None

def captcha(token:str|None,request:Request):
    if settings.env=='test': return
    if not token: raise HTTPException(400,'turnstile_required')
    try:
        if not verify_turnstile(token, request.client.host if request.client else None): raise HTTPException(400,'turnstile_failed')
    except IntegrationError as e: raise HTTPException(503,str(e))

def establish_session(response:Response,user:User):
    token=issue_token(user.id,user.role,settings.secret_key)
    response.set_cookie('zylora_session',token,httponly=True,secure=settings.session_cookie_secure,samesite='lax',max_age=60*60*24*7,path='/')
    return {'user':{'id':user.id,'email':user.email,'role':user.role,'plan':user.plan,'ai_credits':user.ai_credits,'lead_credits':user.lead_credits}}

@app.post('/auth/signup')
def signup(body:Signup,request:Request,response:Response,db:Session=Depends(get_db)):
    enforce_rate_limit(request,'signup',8,60); captcha(body.turnstile_token,request)
    email=body.email.strip().lower()
    if '@' not in email or len(body.password)<8: raise HTTPException(422,'invalid_signup')
    if db.scalar(select(User).where(User.email==email)): raise HTTPException(409,'email_exists')
    user=User(email=email,password_hash=hash_password(body.password),role=Role.USER,plan=Plan.FREE,ai_credits=15,lead_credits=25)
    db.add(user); db.commit(); db.refresh(user); return establish_session(response,user)

@app.post('/auth/login')
def login(body:Login,request:Request,response:Response,db:Session=Depends(get_db)):
    enforce_rate_limit(request,'login',10,60); captcha(body.turnstile_token,request)
    user=db.scalar(select(User).where(User.email==body.email.strip().lower()))
    if not user or not verify_password(body.password,user.password_hash): raise HTTPException(401,'invalid_credentials')
    return establish_session(response,user)

@app.post('/auth/google')
def google_login(body:GoogleLogin,request:Request,response:Response,db:Session=Depends(get_db)):
    enforce_rate_limit(request,'google_login',15,60); captcha(body.turnstile_token,request)
    try: info=verify_google_id_token(body.id_token)
    except Exception: raise HTTPException(401,'invalid_google_token')
    email=str(info['email']).lower(); sub=str(info['sub']); user=db.scalar(select(User).where(User.email==email))
    if not user:
        user=User(email=email,password_hash=hash_password('google-'+settings.secret_key[:16]),role=Role.USER,plan=Plan.FREE,ai_credits=15,lead_credits=25,email_verified=True,google_sub=sub); db.add(user)
    else:
        if user.google_sub and user.google_sub != sub: raise HTTPException(409,'google_account_mismatch')
        user.google_sub=sub; user.email_verified=True
    db.commit(); db.refresh(user); return establish_session(response,user)

@app.post('/auth/logout')
def logout(response:Response): response.delete_cookie('zylora_session',path='/'); return {'ok':True}
@app.get('/auth/me')
def me(user:User=Depends(current_user)): return {'id':user.id,'email':user.email,'role':user.role,'plan':user.plan,'ai_credits':user.ai_credits,'lead_credits':user.lead_credits}

class Checkout(BaseModel):
    plan: str
    # Compatibility-only: old clients may still send this, but the server never trusts it.
    razorpay_plan_id: str | None = None

def _razorpay_plan_id(plan: str) -> str:
    mapping = {
        Plan.STARTER: settings.razorpay_plan_starter_id,
        Plan.GROWTH: settings.razorpay_plan_growth_id,
    }
    plan_id = mapping.get(plan, '')
    if not plan_id:
        raise HTTPException(503, 'razorpay_plan_not_configured')
    return plan_id

@app.post('/billing/razorpay/subscription')
def checkout(body:Checkout,user:User=Depends(current_user),db:Session=Depends(get_db)):
    if body.plan not in (Plan.STARTER,Plan.GROWTH): raise HTTPException(400,'plan_not_purchasable')
    server_plan_id = _razorpay_plan_id(body.plan)
    if body.razorpay_plan_id and body.razorpay_plan_id != server_plan_id:
        raise HTTPException(400,'razorpay_plan_mismatch')
    try: remote=razorpay_create_subscription(server_plan_id)
    except IntegrationError as e: raise HTTPException(503,str(e))
    row=Subscription(user_id=user.id,provider_subscription_id=remote['id'],plan=body.plan,status=remote.get('status','created').upper()); db.add(row); db.commit()
    return {'subscription_id':remote['id'],'status':remote.get('status'),'plan':body.plan}

@app.post('/webhooks/razorpay')
async def razorpay_webhook(request:Request,x_razorpay_signature:str|None=Header(default=None),db:Session=Depends(get_db)):
    body=await request.body()
    if not x_razorpay_signature or not verify_razorpay_webhook(body,x_razorpay_signature): raise HTTPException(400,'invalid_signature')
    event=json.loads(body); event_key=str(event.get('id') or event.get('event') or '')+'|'+hashlib.sha256(body).hexdigest()
    if db.scalar(select(WebhookEvent).where(WebhookEvent.provider=='RAZORPAY',WebhookEvent.event_key==event_key)): return {'ok':True,'duplicate':True}
    db.add(WebhookEvent(provider='RAZORPAY',event_key=event_key)); db.flush(); entity=(event.get('payload',{}).get('subscription',{}).get('entity') or {}); sid=entity.get('id')
    if sid:
        row=db.scalar(select(Subscription).where(Subscription.provider_subscription_id==sid))
        if row:
            row.status=str(entity.get('status',row.status)).upper(); u=db.get(User,row.user_id)
            if row.status in ('ACTIVE','AUTHENTICATED'): u.plan=row.plan
            elif row.status in ('CANCELLED','COMPLETED','EXPIRED'): u.plan=Plan.FREE
    db.commit(); return {'ok':True}

class DomainIn(BaseModel): site_id:int; hostname:str
@app.post('/domains')
def add_domain(body:DomainIn,user:User=Depends(current_user),db:Session=Depends(get_db)):
    site=db.get(Site,body.site_id)
    if not site or site.owner_id!=user.id: raise HTTPException(404,'site_not_found')
    if user.plan==Plan.FREE: raise HTTPException(403,'paid_plan_required')
    try: result=cloudflare_create_hostname(body.hostname.lower().strip())
    except IntegrationError as e: raise HTTPException(503,str(e))
    row=CustomDomain(site_id=site.id,hostname=body.hostname.lower().strip(),cloudflare_hostname_id=result['id'],status=str(result.get('status','pending')).upper(),ssl_status=str(result.get('ssl',{}).get('status','pending')).upper()); db.add(row); db.commit(); db.refresh(row)
    return {'id':row.id,'hostname':row.hostname,'status':row.status,'ssl_status':row.ssl_status,'validation':result.get('ownership_verification') or result.get('ownership_verification_http')}

class MailIn(BaseModel): to:str; subject:str; html:str
class BulkMailIn(BaseModel): audience:str; subject:str; html:str
@app.post('/admin/email')
def admin_email(body:MailIn,user:User=Depends(current_user)):
    if user.role!=Role.SUPER_ADMIN: raise HTTPException(403,'super_admin_required')
    return resend_email(body.to,body.subject,body.html)
@app.post('/admin/email/bulk')
def admin_bulk_email(body:BulkMailIn,user:User=Depends(current_user),db:Session=Depends(get_db)):
    if user.role!=Role.SUPER_ADMIN: raise HTTPException(403,'super_admin_required')
    audience=body.audience.upper()
    recipients=set()
    if audience in ('USERS','ALL'):
        recipients.update(str(x) for x in db.scalars(select(User.email)).all() if x)
    if audience in ('LEADS','ALL'):
        from .models import Lead
        recipients.update(str(x) for x in db.scalars(select(Lead.email)).all() if x)
    if audience in ('MANAGED_LEADS','ALL'):
        from .models import ManagedLead
        recipients.update(str(x) for x in db.scalars(select(ManagedLead.email)).all() if x)
    if audience not in ('USERS','LEADS','MANAGED_LEADS','ALL'): raise HTTPException(400,'invalid_audience')
    sent=0; failures=[]
    for address in sorted(recipients):
        try: resend_email(address,body.subject,body.html); sent+=1
        except Exception as exc: failures.append({'email':address,'error':str(exc)})
    return {'audience':audience,'recipient_count':len(recipients),'sent':sent,'failed':len(failures),'failures':failures[:20]}
class TokenIn(BaseModel): token:str
class ResetRequest(BaseModel): email:str
class ResetConfirm(BaseModel): token:str; new_password:str
@app.post('/auth/email-verification/request')
def request_verification(request:Request,user:User=Depends(current_user),db:Session=Depends(get_db)):
    enforce_rate_limit(request,'verify_email',5,300); raw=create_action_token(db,user,'VERIFY_EMAIL',60)
    if settings.env!='test': resend_email(user.email,'Verify your Zylora email',f'<p>Verify your email: {settings.public_base_url}/verify-email?token={raw}</p>')
    return {'ok':True, **({'token':raw} if settings.env=='test' else {})}
@app.post('/auth/email-verification/confirm')
def confirm_verification(body:TokenIn,db:Session=Depends(get_db)):
    try: user=verify_email(db,body.token)
    except ValueError as e: raise HTTPException(400,str(e))
    return {'ok':True,'email':user.email}
@app.post('/auth/password-reset/request')
def request_reset(body:ResetRequest,request:Request,db:Session=Depends(get_db)):
    enforce_rate_limit(request,'password_reset',5,300); user=db.scalar(select(User).where(User.email==body.email.strip().lower()))
    if user:
        raw=create_action_token(db,user,'RESET_PASSWORD',30)
        if settings.env!='test': resend_email(user.email,'Reset your Zylora password',f'<p>Reset password: {settings.public_base_url}/reset-password?token={raw}</p>')
    return {'ok':True}
@app.post('/auth/password-reset/confirm')
def confirm_reset(body:ResetConfirm,db:Session=Depends(get_db)):
    try: reset_password(db,body.token,body.new_password)
    except ValueError as e: raise HTTPException(400,str(e))
    return {'ok':True}
@app.get('/account/export')
def account_export(user:User=Depends(current_user),db:Session=Depends(get_db)): return export_account(db,user)
