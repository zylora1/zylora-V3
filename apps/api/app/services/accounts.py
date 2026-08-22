from __future__ import annotations
from datetime import datetime, timedelta
import hashlib, secrets
from sqlalchemy import select
from sqlalchemy.orm import Session
from ..models import User, AuthActionToken, Site, Lead, Appointment
from ..security import hash_password

PURPOSES={"VERIFY_EMAIL","RESET_PASSWORD"}

def create_action_token(db:Session,user:User,purpose:str,ttl_minutes:int=30)->str:
    if purpose not in PURPOSES: raise ValueError("invalid_token_purpose")
    raw=secrets.token_urlsafe(32); digest=hashlib.sha256(raw.encode()).hexdigest()
    db.add(AuthActionToken(user_id=user.id,token_hash=digest,purpose=purpose,expires_at=datetime.utcnow()+timedelta(minutes=ttl_minutes)))
    db.commit(); return raw

def consume_action_token(db:Session,raw:str,purpose:str)->User:
    digest=hashlib.sha256(raw.encode()).hexdigest(); now=datetime.utcnow()
    row=db.scalar(select(AuthActionToken).where(AuthActionToken.token_hash==digest,AuthActionToken.purpose==purpose))
    if not row or row.used_at or row.expires_at<=now: raise ValueError("invalid_or_expired_token")
    row.used_at=now; user=db.get(User,row.user_id); db.commit(); return user

def verify_email(db:Session,raw:str)->User:
    user=consume_action_token(db,raw,"VERIFY_EMAIL"); user.email_verified=True; db.commit(); return user

def reset_password(db:Session,raw:str,new_password:str)->User:
    user=consume_action_token(db,raw,"RESET_PASSWORD"); user.password_hash=hash_password(new_password); db.commit(); return user

def export_account(db:Session,user:User)->dict:
    sites=list(db.scalars(select(Site).where(Site.owner_id==user.id)).all())
    leads=list(db.scalars(select(Lead).where(Lead.owner_id==user.id)).all())
    return {"user":{"id":user.id,"email":user.email,"plan":user.plan,"created_at":user.created_at.isoformat()},"sites":[{"id":s.id,"name":s.name,"slug":s.slug,"origin":s.origin,"state":s.state} for s in sites],"leads":[{"id":l.id,"site_id":l.site_id,"source":l.source,"name":l.name,"email":l.email,"phone":l.phone,"message":l.message,"created_at":l.created_at.isoformat()} for l in leads]}
