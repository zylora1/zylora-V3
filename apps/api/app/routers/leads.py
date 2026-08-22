from fastapi import APIRouter,Depends,Request
from pydantic import BaseModel,ConfigDict,Field
from sqlalchemy.orm import Session
from ..auth import get_db,current_user
from ..models import User
from ..services.leads import capture_lead,leads_for_owner,notification_statuses_for_owner
from ..rate_limit import enforce_rate_limit
from .common import translate
router=APIRouter(prefix='/leads',tags=['leads'])
class LeadIn(BaseModel):
    model_config=ConfigDict(extra='forbid')
    site_id:int
    source:str='FORM'
    name:str=Field(min_length=1,max_length=160)
    email:str=Field(min_length=3,max_length=320)
    phone:str|None=Field(default=None,max_length=64)
    message:str|None=Field(default=None,max_length=2000)
    idempotency_key:str=Field(min_length=8,max_length=128)
@router.post('/public',status_code=201)
def public_capture(body:LeadIn,request:Request,db:Session=Depends(get_db)):
    enforce_rate_limit(request,'lead',20,60)
    try:
        l=capture_lead(db,body.site_id,body.source,body.name,body.email,body.phone,body.message,body.idempotency_key)
        return {'id':l.id,'ok':True}
    except Exception as e: translate(e)
@router.get('')
def mine(user:User=Depends(current_user),db:Session=Depends(get_db)):
    statuses=notification_statuses_for_owner(db,user)
    return [{'id':l.id,'site_id':l.site_id,'source':l.source,'name':l.name,'email':l.email,'phone':l.phone,'message':l.message,'created_at':l.created_at.isoformat(),'whatsapp_status':statuses.get(l.id,'SKIPPED')} for l in leads_for_owner(db,user)]
