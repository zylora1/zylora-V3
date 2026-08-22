from __future__ import annotations
from sqlalchemy.orm import Session
from ..models import User,CreditTransaction

class CreditError(ValueError): pass

def consume(db:Session,user:User,credit_type:str,amount:int=1,idempotency_key:str|None=None)->int:
    if amount<=0: raise CreditError('invalid_amount')
    field='ai_credits' if credit_type=='AI' else 'lead_credits' if credit_type=='LEAD' else None
    if not field: raise CreditError('invalid_credit_type')
    current=int(getattr(user,field) or 0)
    if current<amount: raise CreditError('insufficient_credits')
    if idempotency_key:
        from sqlalchemy import select
        if db.scalar(select(CreditTransaction).where(CreditTransaction.idempotency_key==idempotency_key)):
            return current
    setattr(user,field,current-amount)
    db.add(CreditTransaction(user_id=user.id,credit_type=credit_type,kind='CONSUME',amount=-amount,idempotency_key=idempotency_key))
    db.commit();return int(getattr(user,field))

def chatbot_mode(user:User)->str:
    if user.lead_credits>0: return 'LEAD_CREDITS'
    if user.ai_credits>0: return 'AI_FALLBACK_EMAIL_ONLY'
    return 'CACHED_FORCED_CAPTURE'
