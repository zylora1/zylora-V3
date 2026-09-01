from __future__ import annotations
from datetime import datetime, timezone
from uuid import uuid4
from fastapi import HTTPException
from sqlalchemy import text
from sqlalchemy.exc import IntegrityError
from .db import SessionLocal, now_iso
from .plans import get_plan

FALLBACK_ORDER=['MONTHLY','SIGNUP_BONUS','TOPUP']
CREDIT_TYPES={'ai','lead'}
TOPUP_PACKS={
    'ai':{
        'small':{'name':'Small','credits':50,'price_usd_minor':300},
        'medium':{'name':'Medium','credits':150,'price_usd_minor':800},
        'large':{'name':'Large','credits':400,'price_usd_minor':1800},
        'bulk':{'name':'Bulk','credits':1000,'price_usd_minor':4000},
    },
    'lead':{
        'small':{'name':'Small','credits':50,'price_usd_minor':500},
        'medium':{'name':'Medium','credits':150,'price_usd_minor':1300},
        'large':{'name':'Large','credits':400,'price_usd_minor':3000},
        'bulk':{'name':'Bulk','credits':1000,'price_usd_minor':6500},
    },
}

def _period_key()->str:
    n=datetime.now(timezone.utc); return f'{n.year:04d}-{n.month:02d}'

def _plan_contact_only(plan:str)->bool:
    return bool(int(get_plan(plan).get('contact_only') or 0))

def _bucket_names(credit_type:str)->tuple[str,str,str]:
    if credit_type=='ai': return ('monthly_remaining','signup_remaining','topup_remaining')
    if credit_type=='lead': return ('lead_monthly_remaining','lead_signup_remaining','lead_topup_remaining')
    raise ValueError('credit_type must be ai or lead')

def _sync_aggregates(db,user_id:str)->dict:
    row=db.execute(text('''SELECT monthly_remaining,signup_remaining,topup_remaining,
        lead_monthly_remaining,lead_signup_remaining,lead_topup_remaining FROM credit_wallets WHERE user_id=:u'''),{'u':user_id}).mappings().first()
    ai=sum(int(row[k]) for k in ('monthly_remaining','signup_remaining','topup_remaining')) if row else 0
    lead=sum(int(row[k]) for k in ('lead_monthly_remaining','lead_signup_remaining','lead_topup_remaining')) if row else 0
    db.execute(text('UPDATE users SET ai_credits=:a,lead_credits=:l,updated_at=:n WHERE id=:u'),{'a':ai,'l':lead,'n':now_iso(),'u':user_id})
    return {'ai':ai,'lead':lead}

def ensure_wallet(db,user_id:str,plan:str,signup_bonus:int|None=None):
    cfg=get_plan(plan)
    if int(cfg.get('contact_only') or 0):
        # Managed/contact-only accounts must not retain stale wallets from a previous plan.
        db.execute(text('DELETE FROM credit_wallets WHERE user_id=:u'),{'u':user_id})
        db.execute(text('UPDATE users SET ai_credits=0,lead_credits=0,updated_at=:a WHERE id=:u'),{'a':now_iso(),'u':user_id})
        return None
    period=_period_key()
    if signup_bonus is None: signup_bonus=int(cfg.get('signup_bonus_credits',5) or 0)
    row=db.execute(text('SELECT * FROM credit_wallets WHERE user_id=:u'),{'u':user_id}).mappings().first()
    if not row:
        db.execute(text('''INSERT INTO credit_wallets(user_id,monthly_remaining,signup_remaining,topup_remaining,
            lead_monthly_remaining,lead_signup_remaining,lead_topup_remaining,period_key,updated_at)
            VALUES (:u,:am,:as,0,:lm,:ls,0,:p,:a)'''),{
            'u':user_id,'am':int(cfg.get('ai_credits') or 0),'as':int(signup_bonus),
            'lm':int(cfg.get('lead_credits') or 0),'ls':int(signup_bonus),'p':period,'a':now_iso()})
    elif row['period_key']!=period:
        db.execute(text('''UPDATE credit_wallets SET monthly_remaining=:am,lead_monthly_remaining=:lm,
            period_key=:p,updated_at=:a WHERE user_id=:u'''),{
            'am':int(cfg.get('ai_credits') or 0),'lm':int(cfg.get('lead_credits') or 0),
            'p':period,'a':now_iso(),'u':user_id})
    return _sync_aggregates(db,user_id)

def wallet_summary(user_id:str)->dict:
    with SessionLocal.begin() as db:
        user=db.execute(text('SELECT plan FROM users WHERE id=:u'),{'u':user_id}).mappings().first()
        if not user: raise HTTPException(404,'User not found')
        cfg=get_plan(user['plan'])
        if int(cfg.get('contact_only') or 0):
            ensure_wallet(db,user_id,user['plan'])
            return {'contact_only':True,'ai':None,'lead':None,'total':0,'lead_total':0,'fallback_order':FALLBACK_ORDER}
        ensure_wallet(db,user_id,user['plan'])
        row=dict(db.execute(text('SELECT * FROM credit_wallets WHERE user_id=:u'),{'u':user_id}).mappings().first())
        ai={
            'monthly_remaining':int(row['monthly_remaining']),'signup_remaining':int(row['signup_remaining']),
            'topup_remaining':int(row['topup_remaining'])}
        lead={
            'monthly_remaining':int(row['lead_monthly_remaining']),'signup_remaining':int(row['lead_signup_remaining']),
            'topup_remaining':int(row['lead_topup_remaining'])}
        ai['total']=sum(ai.values()); lead['total']=sum(lead.values())
        # Keep the legacy AI fields while returning both balances together.
        return {**row,'total':ai['total'],'lead_total':lead['total'],'ai':ai,'lead':lead,'contact_only':False,'fallback_order':FALLBACK_ORDER}

def _exhaustion(credit_type:str,cost:int,available:int)->HTTPException:
    code='AI_CREDITS_EXHAUSTED' if credit_type=='ai' else 'LEAD_CREDITS_EXHAUSTED'
    return HTTPException(402,detail={'code':code,'credit_type':credit_type,'required':cost,'available':available,
        'fallback_order':FALLBACK_ORDER,'manual_editing_available':credit_type=='ai'})

def reserve_wallet(db,user_id:str,plan:str,cost:int,operation:str,credit_type:str='ai',idempotency_key:str|None=None,reference_id:str|None=None)->dict:
    if credit_type not in CREDIT_TYPES: raise ValueError('credit_type must be ai or lead')
    if cost<=0: return {'cost':0,'credit_type':credit_type,'monthly_used':0,'signup_used':0,'topup_used':0,'skipped':False}
    if _plan_contact_only(plan):
        ensure_wallet(db,user_id,plan)
        return {'cost':0,'credit_type':credit_type,'monthly_used':0,'signup_used':0,'topup_used':0,'skipped':True,'contact_only':True}
    ensure_wallet(db,user_id,plan)
    if idempotency_key:
        prior=db.execute(text('''SELECT * FROM credit_transactions WHERE user_id=:u AND credit_type=:ct AND operation=:o AND idempotency_key=:k'''),
            {'u':user_id,'ct':credit_type,'o':operation,'k':idempotency_key}).mappings().first()
        if prior: return {**dict(prior),'idempotent':True}
    mcol,scol,tcol=_bucket_names(credit_type)
    for _ in range(6):
        row=db.execute(text(f'SELECT {mcol} AS m,{scol} AS s,{tcol} AS t FROM credit_wallets WHERE user_id=:u'),{'u':user_id}).mappings().first()
        if not row: raise HTTPException(409,'Credit wallet is unavailable')
        old_m,old_s,old_t=int(row['m']),int(row['s']),int(row['t']); available=old_m+old_s+old_t
        if available<cost: raise _exhaustion(credit_type,cost,available)
        remaining=cost; used_m=min(old_m,remaining); remaining-=used_m; used_s=min(old_s,remaining); remaining-=used_s; used_t=min(old_t,remaining)
        result=db.execute(text(f'''UPDATE credit_wallets SET {mcol}=:nm,{scol}=:ns,{tcol}=:nt,updated_at=:a
            WHERE user_id=:u AND {mcol}=:om AND {scol}=:os AND {tcol}=:ot'''),{
            'nm':old_m-used_m,'ns':old_s-used_s,'nt':old_t-used_t,'a':now_iso(),'u':user_id,
            'om':old_m,'os':old_s,'ot':old_t})
        if result.rowcount!=1: continue
        tid=str(uuid4())
        try:
            db.execute(text('''INSERT INTO credit_transactions(id,user_id,credit_type,operation,amount,monthly_used,signup_used,topup_used,
                reference_id,idempotency_key,status,created_at) VALUES (:i,:u,:ct,:o,:c,:m,:s,:t,:r,:k,'RESERVED',:a)'''),{
                'i':tid,'u':user_id,'ct':credit_type,'o':operation,'c':cost,'m':used_m,'s':used_s,'t':used_t,
                'r':reference_id,'k':idempotency_key,'a':now_iso()})
        except IntegrityError:
            if idempotency_key:
                prior=db.execute(text('''SELECT * FROM credit_transactions WHERE user_id=:u AND credit_type=:ct AND operation=:o AND idempotency_key=:k'''),
                    {'u':user_id,'ct':credit_type,'o':operation,'k':idempotency_key}).mappings().first()
                if prior:
                    # Undo our local reservation if another request won the idempotency race.
                    db.execute(text(f'UPDATE credit_wallets SET {mcol}={mcol}+:m,{scol}={scol}+:s,{tcol}={tcol}+:t,updated_at=:a WHERE user_id=:u'),
                        {'m':used_m,'s':used_s,'t':used_t,'a':now_iso(),'u':user_id})
                    _sync_aggregates(db,user_id); return {**dict(prior),'idempotent':True}
            raise
        totals=_sync_aggregates(db,user_id)
        return {'id':tid,'cost':cost,'amount':cost,'credit_type':credit_type,'monthly_used':used_m,'signup_used':used_s,
            'topup_used':used_t,'total_remaining':totals[credit_type],'status':'RESERVED','idempotent':False}
    raise HTTPException(409,detail={'code':'CREDIT_CONCURRENCY_CONFLICT','message':'Credit balance changed concurrently; retry safely with the same idempotency key.'})

def finalize_wallet(db,transaction_id:str)->dict:
    tx=db.execute(text('SELECT * FROM credit_transactions WHERE id=:i'),{'i':transaction_id}).mappings().first()
    if not tx: raise HTTPException(404,'Credit transaction not found')
    if tx['status']=='REFUNDED': raise HTTPException(409,'Credit transaction was already refunded')
    if tx['status']!='FINALIZED':
        db.execute(text("UPDATE credit_transactions SET status='FINALIZED',finalized_at=:a WHERE id=:i AND status='RESERVED'"),{'a':now_iso(),'i':transaction_id})
        # Backward-compatible usage ledger is written only when the charge becomes final.
        db.execute(text('''INSERT INTO credit_usage(id,user_id,operation,cost,monthly_used,signup_used,topup_used,idempotency_key,status,created_at,credit_type)
            VALUES (:i,:u,:o,:c,:m,:s,:t,:k,'DEBITED',:a,:ct)
            ON CONFLICT(id) DO NOTHING'''),{
            'i':transaction_id,'u':tx['user_id'],'o':tx['operation'],'c':tx['amount'],'m':tx['monthly_used'],'s':tx['signup_used'],
            't':tx['topup_used'],'k':tx['idempotency_key'],'a':now_iso(),'ct':tx['credit_type']})
    return dict(db.execute(text('SELECT * FROM credit_transactions WHERE id=:i'),{'i':transaction_id}).mappings().first())

def refund_wallet(db,transaction_id:str,reason:str|None=None)->dict:
    tx=db.execute(text('SELECT * FROM credit_transactions WHERE id=:i'),{'i':transaction_id}).mappings().first()
    if not tx: raise HTTPException(404,'Credit transaction not found')
    if tx['status']=='REFUNDED': return {**dict(tx),'idempotent':True}
    if tx['status'] not in {'RESERVED','FINALIZED'}: raise HTTPException(409,'Credit transaction cannot be refunded')
    mcol,scol,tcol=_bucket_names(tx['credit_type'])
    changed=db.execute(text("UPDATE credit_transactions SET status='REFUNDED',refunded_at=:a WHERE id=:i AND status!='REFUNDED'"),{'a':now_iso(),'i':transaction_id})
    if changed.rowcount==1:
        db.execute(text(f'''UPDATE credit_wallets SET {mcol}={mcol}+:m,{scol}={scol}+:s,{tcol}={tcol}+:t,updated_at=:a WHERE user_id=:u'''),
            {'m':int(tx['monthly_used']),'s':int(tx['signup_used']),'t':int(tx['topup_used']),'a':now_iso(),'u':tx['user_id']})
        db.execute(text("UPDATE credit_usage SET status='REFUNDED' WHERE id=:i"),{'i':transaction_id})
        _sync_aggregates(db,tx['user_id'])
    return {**dict(tx),'status':'REFUNDED','reason':reason,'idempotent':changed.rowcount!=1}

def debit_wallet(db,user_id:str,plan:str,cost:int,operation:str,idempotency_key:str|None=None,credit_type:str='ai',reference_id:str|None=None)->dict:
    reserved=reserve_wallet(db,user_id,plan,cost,operation,credit_type,idempotency_key,reference_id)
    if reserved.get('skipped') or reserved.get('idempotent'): return reserved
    finalized=finalize_wallet(db,reserved['id'])
    return {**reserved,'status':finalized['status']}

def reset_monthly_for_plan(db,user_id:str,plan:str)->int:
    cfg=get_plan(plan)
    if int(cfg.get('contact_only') or 0):
        ensure_wallet(db,user_id,plan); return 0
    ensure_wallet(db,user_id,plan)
    db.execute(text('''UPDATE credit_wallets SET monthly_remaining=:am,lead_monthly_remaining=:lm,period_key=:p,updated_at=:a WHERE user_id=:u'''),{
        'am':int(cfg.get('ai_credits') or 0),'lm':int(cfg.get('lead_credits') or 0),'p':_period_key(),'a':now_iso(),'u':user_id})
    return _sync_aggregates(db,user_id)['ai']

def grant_topup(user_id:str,credits:int,credit_type:str='ai',db=None)->dict:
    """Grant paid/admin top-up credits into the persistent top-up bucket.

    When ``db`` is supplied the grant participates in the caller's transaction.
    This is used by payment verification so entitlement and order status commit
    atomically and cannot be double-granted by verify/webhook races.
    """
    if credit_type not in CREDIT_TYPES: raise HTTPException(422,'credit_type must be ai or lead')
    if credits<=0: raise HTTPException(422,'credits must be positive')
    def _grant(tx):
        user=tx.execute(text('SELECT plan FROM users WHERE id=:u'),{'u':user_id}).mappings().first()
        if not user: raise HTTPException(404,'User not found')
        if _plan_contact_only(user['plan']): raise HTTPException(409,detail={'code':'CREDITS_NOT_APPLICABLE','message':'Managed/contact-only plans do not use credit wallets.'})
        ensure_wallet(tx,user_id,user['plan'])
        _,_,tcol=_bucket_names(credit_type)
        tx.execute(text(f'UPDATE credit_wallets SET {tcol}={tcol}+:c,updated_at=:a WHERE user_id=:u'),{'c':credits,'a':now_iso(),'u':user_id})
        totals=_sync_aggregates(tx,user_id)
        return {'ok':True,'credit_type':credit_type,'credits_added':credits,'total':totals[credit_type]}
    if db is not None:
        return _grant(db)
    with SessionLocal.begin() as tx:
        return _grant(tx)
