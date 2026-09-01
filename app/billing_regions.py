from __future__ import annotations
from dataclasses import dataclass
import re
from fastapi import Request
from sqlalchemy import text
from .db import SessionLocal, now_iso
from .settings_store import get_system_setting
from .plans import get_plan, PAID_SELF_SERVICE_PLAN_KEYS

INDIA='INDIA'
INTERNATIONAL='INTERNATIONAL'
_TRUSTED_COUNTRY_HEADERS=('cf-ipcountry','x-vercel-ip-country','cloudfront-viewer-country','x-country-code')

@dataclass(frozen=True)
class BillingResolution:
    country_code: str|None
    region: str
    source: str
    verified: bool

def normalize_country(value: str|None) -> str|None:
    raw=str(value or '').strip().upper()
    if not re.fullmatch(r'[A-Z]{2}',raw): return None
    if raw in {'XX','T1'}: return None
    return raw

def region_for_country(country_code: str|None) -> str:
    return INDIA if normalize_country(country_code)=='IN' else INTERNATIONAL

def normalize_self_service_plan(plan: str|None) -> str:
    p=str(plan or 'STARTER').strip().upper()
    if p not in PAID_SELF_SERVICE_PLAN_KEYS:
        raise ValueError('Only Starter and Growth are available through self-service subscription checkout')
    return p

def regional_price(region: str, plan: str='STARTER') -> dict:
    plan_key=normalize_self_service_plan(plan)
    cfg=get_plan(plan_key)
    r=str(region or '').upper()
    if r==INDIA:
        return {'product':plan_key,'plan':plan_key,'billing_region':INDIA,'currency':'INR','amount_minor':int(cfg['price_inr_minor'])}
    return {'product':plan_key,'plan':plan_key,'billing_region':INTERNATIONAL,'currency':'USD','amount_minor':int(cfg['price_usd_minor'])}

def get_billing_profile(user_id: str) -> dict|None:
    with SessionLocal() as db:
        row=db.execute(text('SELECT * FROM billing_profiles WHERE user_id=:u'),{'u':user_id}).mappings().first()
    return dict(row) if row else None

def save_billing_country(user_id: str, country_code: str, *, source: str, verified: bool) -> dict:
    cc=normalize_country(country_code)
    if not cc: raise ValueError('A valid ISO-3166 alpha-2 billing country is required')
    with SessionLocal.begin() as db:
        old=db.execute(text('SELECT * FROM billing_profiles WHERE user_id=:u'),{'u':user_id}).mappings().first()
        previous=(old['country_code'] if old and int(old.get('country_verified') or 0) else (old.get('previous_verified_country_code') if old else None))
        if old and int(old.get('country_verified') or 0) and old['country_code']!=cc: previous=old['country_code']
        db.execute(text('''INSERT INTO billing_profiles(user_id,country_code,country_source,country_verified,previous_verified_country_code,updated_at)
          VALUES (:u,:c,:s,:v,:p,:a)
          ON CONFLICT(user_id) DO UPDATE SET country_code=:c,country_source=:s,country_verified=:v,
          previous_verified_country_code=COALESCE(:p,billing_profiles.previous_verified_country_code),updated_at=:a'''),
          {'u':user_id,'c':cc,'s':source[:40],'v':1 if verified else 0,'p':previous,'a':now_iso()})
    return get_billing_profile(user_id) or {}

def trusted_header_country(request: Request) -> str|None:
    for key in _TRUSTED_COUNTRY_HEADERS:
        cc=normalize_country(request.headers.get(key))
        if cc: return cc
    return None

def resolve_billing_region(request: Request, *, user_id: str|None=None, selected_country: str|None=None, display_only: bool=False) -> BillingResolution:
    if user_id:
        profile=get_billing_profile(user_id)
        if profile and int(profile.get('country_verified') or 0):
            cc=normalize_country(profile.get('country_code'))
            if cc: return BillingResolution(cc,region_for_country(cc),'VERIFIED_BILLING_PROFILE',True)
        if profile:
            prev=normalize_country(profile.get('previous_verified_country_code'))
            if prev: return BillingResolution(prev,region_for_country(prev),'PREVIOUS_VERIFIED_BILLING_COUNTRY',True)
    cc=trusted_header_country(request)
    if cc: return BillingResolution(cc,region_for_country(cc),'TRUSTED_PLATFORM_HEADER',False)
    selected=normalize_country(selected_country)
    if display_only and selected: return BillingResolution(selected,region_for_country(selected),'USER_PREFERENCE',False)
    return BillingResolution(None,INTERNATIONAL,'SAFE_DEFAULT',False)

def offer_for_request(request: Request, *, plan: str='STARTER', user_id: str|None=None, selected_country: str|None=None, display_only: bool=False) -> dict:
    res=resolve_billing_region(request,user_id=user_id,selected_country=selected_country,display_only=display_only)
    return {**regional_price(res.region,plan),'country_code':res.country_code,'country_source':res.source,'country_verified':res.verified}

def provider_plan_id(plan: str, region: str) -> str:
    p=normalize_self_service_plan(plan).lower()
    suffix='india' if str(region).upper()==INDIA else 'international'
    return str(get_system_setting(f'{p}_{suffix}_provider_plan_id','') or '').strip()
