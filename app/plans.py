from __future__ import annotations
from sqlalchemy import text
from .db import SessionLocal, now_iso

# Current public catalogue: Free, Starter, Growth, and Managed/Pro.
# ZYLORA is retained only as a backwards-compatible legacy entitlement so existing
# customer rows and historical subscriptions remain readable during migration.
DEFAULTS = {
    'FREE': {'plan':'FREE','public_name':'Free','price_inr_minor':0,'price_usd_minor':0,'site_limit':10,'page_limit':2,'ai_credits':20,'lead_credits':20,'signup_bonus_credits':0,'ai_site_cost':5,'ai_edit_cost':2,'contact_only':0},
    'STARTER': {'plan':'STARTER','public_name':'Starter','price_inr_minor':79900,'price_usd_minor':900,'site_limit':10,'page_limit':5,'ai_credits':100,'lead_credits':100,'signup_bonus_credits':0,'ai_site_cost':5,'ai_edit_cost':2,'contact_only':0},
    'GROWTH': {'plan':'GROWTH','public_name':'Growth','price_inr_minor':179900,'price_usd_minor':1900,'site_limit':10,'page_limit':8,'ai_credits':300,'lead_credits':300,'signup_bonus_credits':0,'ai_site_cost':5,'ai_edit_cost':2,'contact_only':0},
    'PRO': {'plan':'PRO','public_name':'Managed by experts','price_inr_minor':0,'price_usd_minor':0,'site_limit':10,'page_limit':10,'ai_credits':0,'lead_credits':0,'signup_bonus_credits':0,'ai_site_cost':0,'ai_edit_cost':0,'contact_only':1},
    'ZYLORA': {'plan':'ZYLORA','public_name':'Legacy Zylora','price_inr_minor':79900,'price_usd_minor':900,'site_limit':10,'page_limit':10,'ai_credits':300,'lead_credits':300,'signup_bonus_credits':0,'ai_site_cost':5,'ai_edit_cost':2,'contact_only':0},
}

PUBLIC_PLAN_KEYS=('FREE','STARTER','GROWTH','PRO')
SELF_SERVICE_PLAN_KEYS=('FREE','STARTER','GROWTH')
PAID_SELF_SERVICE_PLAN_KEYS=('STARTER','GROWTH')

EDITABLE_FIELDS={
    'public_name','price_inr_minor','price_usd_minor','site_limit','page_limit','ai_credits','lead_credits',
    'signup_bonus_credits','ai_site_cost','ai_edit_cost','contact_only'
}
NON_NEGATIVE_FIELDS={'price_inr_minor','price_usd_minor','site_limit','page_limit','ai_credits','lead_credits','signup_bonus_credits','ai_site_cost','ai_edit_cost'}

def get_plan(plan: str) -> dict:
    key=plan.upper()
    if key not in DEFAULTS: raise KeyError(key)
    with SessionLocal() as db:
        row=db.execute(text('SELECT * FROM plan_configs WHERE plan=:p'),{'p':key}).mappings().first()
    return dict(row) if row else dict(DEFAULTS[key])

def all_plans(*, include_legacy: bool=True) -> list[dict]:
    keys=list(PUBLIC_PLAN_KEYS)+( ['ZYLORA'] if include_legacy else [] )
    return [get_plan(k) for k in keys]

def update_plan(plan: str, values: dict) -> dict:
    key=plan.upper()
    if key not in DEFAULTS: raise KeyError(key)
    unknown=set(values)-EDITABLE_FIELDS
    if unknown: raise ValueError(f'Unsupported plan fields: {sorted(unknown)}')
    for field in NON_NEGATIVE_FIELDS:
        if field in values and int(values[field])<0: raise ValueError(f'{field} cannot be negative')
    current=get_plan(key)
    merged={**current,**values,'plan':key,'updated_at':now_iso()}
    if int(merged.get('contact_only') or 0):
        merged['ai_credits']=0; merged['lead_credits']=0; merged['signup_bonus_credits']=0; merged['ai_site_cost']=0; merged['ai_edit_cost']=0
    with SessionLocal.begin() as db:
        db.execute(text('''UPDATE plan_configs SET public_name=:public_name,price_inr_minor=:price_inr_minor,price_usd_minor=:price_usd_minor,
          site_limit=:site_limit,page_limit=:page_limit,ai_credits=:ai_credits,lead_credits=:lead_credits,signup_bonus_credits=:signup_bonus_credits,
          ai_site_cost=:ai_site_cost,ai_edit_cost=:ai_edit_cost,contact_only=:contact_only,updated_at=:updated_at WHERE plan=:plan'''),merged)
    return get_plan(key)

def tier3_page_limit() -> int:
    """Highest current self-service template entitlement ceiling. AI sites are prompt-driven."""
    return int(get_plan('GROWTH')['page_limit'])

def smallest_self_service_plan_for_pages(page_count: int) -> dict | None:
    """Return the smallest current self-service plan that can publish a template site."""
    for key in SELF_SERVICE_PLAN_KEYS:
        cfg=get_plan(key)
        if int(page_count)<=int(cfg['page_limit']): return cfg
    return None
