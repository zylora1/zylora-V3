from fastapi import APIRouter,Depends,HTTPException
from sqlalchemy.orm import Session
from ..auth import get_db
from ..services.admin import get_config
router=APIRouter(prefix='/pricing',tags=['pricing'])
DEFAULTS={
 'USD':{'STARTER':9,'GROWTH':19},
 'INR':{'STARTER':799,'GROWTH':1999},
}
PAGES={'FREE':2,'STARTER':5,'GROWTH':8}
@router.get('')
def pricing(region:str='international',db:Session=Depends(get_db)):
    currency='INR' if region.lower() in ('india','in') else 'USD'
    def val(plan):
        key=f'pricing.{currency.lower()}.{plan.lower()}'
        raw=get_config(db,key,str(DEFAULTS[currency][plan]))
        try:return int(raw)
        except Exception:raise HTTPException(500,'invalid_pricing_config')
    return {'currency':currency,'plans':{'FREE':{'price':0,'pages':2},'STARTER':{'price':val('STARTER'),'pages':5},'GROWTH':{'price':val('GROWTH'),'pages':8},'MANAGED':{'price':None,'pages':None,'checkout':False}}}
