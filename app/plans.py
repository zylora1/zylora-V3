from __future__ import annotations
from sqlalchemy import text
from .db import SessionLocal, now_iso

# Page count is a website capability, not a pricing lever. Keep this value in
# one server-side policy constant so legacy database rows and renamed plans
# cannot accidentally reintroduce plan-specific page ceilings.
MAX_PAGES_PER_SITE = 298

# Current public catalogue: Free, Starter, Growth, and Managed/Pro.
# ZYLORA is retained only as a backwards-compatible legacy entitlement so existing
# customer rows and historical subscriptions remain readable during migration.
DEFAULTS = {
    # Reserved allowance intentionally starts equal to the current normal AI
    # allocation. It is an independent, non-purchasable chatbot safeguard.
    'FREE': {'plan':'FREE','public_name':'Free','price_inr_minor':0,'price_usd_minor':0,'site_limit':10,'page_limit':MAX_PAGES_PER_SITE,'ai_credits':20,'chatbot_reserved_credits':20,'lead_credits':20,'signup_bonus_credits':0,'ai_site_cost':5,'ai_edit_cost':2,'contact_only':0},
    'STARTER': {'plan':'STARTER','public_name':'Starter','price_inr_minor':79900,'price_usd_minor':900,'site_limit':10,'page_limit':MAX_PAGES_PER_SITE,'ai_credits':100,'chatbot_reserved_credits':100,'lead_credits':100,'signup_bonus_credits':0,'ai_site_cost':5,'ai_edit_cost':2,'contact_only':0},
    'GROWTH': {'plan':'GROWTH','public_name':'Growth','price_inr_minor':179900,'price_usd_minor':1900,'site_limit':10,'page_limit':MAX_PAGES_PER_SITE,'ai_credits':300,'chatbot_reserved_credits':300,'lead_credits':300,'signup_bonus_credits':0,'ai_site_cost':5,'ai_edit_cost':2,'contact_only':0},
    'PRO': {'plan':'PRO','public_name':'Managed by experts','price_inr_minor':0,'price_usd_minor':0,'site_limit':10,'page_limit':MAX_PAGES_PER_SITE,'ai_credits':0,'chatbot_reserved_credits':0,'lead_credits':0,'signup_bonus_credits':0,'ai_site_cost':0,'ai_edit_cost':0,'contact_only':1},
    'ZYLORA': {'plan':'ZYLORA','public_name':'Legacy Zylora','price_inr_minor':79900,'price_usd_minor':900,'site_limit':10,'page_limit':MAX_PAGES_PER_SITE,'ai_credits':300,'chatbot_reserved_credits':300,'lead_credits':300,'signup_bonus_credits':0,'ai_site_cost':5,'ai_edit_cost':2,'contact_only':0},
}

PUBLIC_PLAN_KEYS=('FREE','STARTER','GROWTH','PRO')
SELF_SERVICE_PLAN_KEYS=('FREE','STARTER','GROWTH')
PAID_SELF_SERVICE_PLAN_KEYS=('STARTER','GROWTH')

EDITABLE_FIELDS={
    'public_name','price_inr_minor','price_usd_minor','site_limit','page_limit','ai_credits','lead_credits',
    'signup_bonus_credits','chatbot_reserved_credits','ai_site_cost','ai_edit_cost','contact_only'
}
NON_NEGATIVE_FIELDS={'price_inr_minor','price_usd_minor','site_limit','page_limit','ai_credits','lead_credits','signup_bonus_credits','chatbot_reserved_credits','ai_site_cost','ai_edit_cost'}

def get_plan(plan: str) -> dict:
    key=plan.upper()
    if key not in DEFAULTS: raise KeyError(key)
    with SessionLocal() as db:
        row=db.execute(text('SELECT * FROM plan_configs WHERE plan=:p'),{'p':key}).mappings().first()
    result = dict(row) if row else dict(DEFAULTS[key])
    # Existing databases may have been initialized from an older catalogue.
    # Never expose a stale plan-specific page limit to application callers.
    result['page_limit'] = MAX_PAGES_PER_SITE
    return result

def all_plans(*, include_legacy: bool=True) -> list[dict]:
    keys=list(PUBLIC_PLAN_KEYS)+( ['ZYLORA'] if include_legacy else [] )
    return [get_plan(k) for k in keys]

def update_plan(plan: str, values: dict) -> dict:
    key=plan.upper()
    if key not in DEFAULTS: raise KeyError(key)
    unknown=set(values)-EDITABLE_FIELDS
    if unknown: raise ValueError(f'Unsupported plan fields: {sorted(unknown)}')
    if 'page_limit' in values and int(values['page_limit']) != MAX_PAGES_PER_SITE:
        raise ValueError(f'page_limit is fixed at {MAX_PAGES_PER_SITE} for every plan')
    for field in NON_NEGATIVE_FIELDS:
        if field in values and int(values[field])<0: raise ValueError(f'{field} cannot be negative')
    current=get_plan(key)
    merged={**current,**values,'plan':key,'updated_at':now_iso()}
    if int(merged.get('contact_only') or 0):
        merged['ai_credits']=0; merged['lead_credits']=0; merged['signup_bonus_credits']=0; merged['ai_site_cost']=0; merged['ai_edit_cost']=0
        merged['chatbot_reserved_credits']=0
    with SessionLocal.begin() as db:
        db.execute(text('''UPDATE plan_configs SET public_name=:public_name,price_inr_minor=:price_inr_minor,price_usd_minor=:price_usd_minor,
          site_limit=:site_limit,page_limit=:page_limit,ai_credits=:ai_credits,lead_credits=:lead_credits,signup_bonus_credits=:signup_bonus_credits,
          ai_site_cost=:ai_site_cost,ai_edit_cost=:ai_edit_cost,chatbot_reserved_credits=:chatbot_reserved_credits,contact_only=:contact_only,updated_at=:updated_at WHERE plan=:plan'''),merged)
    return get_plan(key)

def tier3_page_limit() -> int:
    """Compatibility alias for the single website-wide page ceiling."""
    return MAX_PAGES_PER_SITE

def smallest_self_service_plan_for_pages(page_count: int) -> dict | None:
    """Return the smallest self-service plan that can publish the site."""
    if int(page_count) > MAX_PAGES_PER_SITE:
        return None
    for key in SELF_SERVICE_PLAN_KEYS:
        return get_plan(key)
    return None
