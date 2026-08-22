from datetime import date,datetime
from fastapi import APIRouter,Depends,HTTPException,Request
from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.orm import Session
from ..auth import get_db,current_user
from ..models import ManagedLead,ManagedLeadStatusHistory,ManagedSchedulingConfig,User
from ..enums import Role
from ..services.managed import create_managed_lead,update_managed_status
from ..services.scheduling import book_slot,available_slots
from ..rate_limit import enforce_rate_limit
from .common import translate
router=APIRouter(prefix='/managed',tags=['managed'])
class EnquiryIn(BaseModel): name:str;email:str;website_type:str;starts_at:datetime
class UpdateIn(BaseModel): status:str;amount_minor:int|None=None;currency:str|None=None;notes:str|None=None
class ScheduleIn(BaseModel): enabled:bool=True;timezone:str='Asia/Kolkata';duration_minutes:int=30;buffer_minutes:int=15;day_start_minute:int=540;day_end_minute:int=1020;weekdays:list[int]=[0,1,2,3,4]
def get_cfg(db:Session):
    c=db.get(ManagedSchedulingConfig,1)
    if not c:
        c=ManagedSchedulingConfig(id=1);db.add(c);db.commit();db.refresh(c)
    return c
@router.get('/slots')
def slots(on:date,request:Request,db:Session=Depends(get_db)):
    enforce_rate_limit(request,'managed_slots',60,60);return [x.isoformat() for x in available_slots(db,get_cfg(db),on)]
@router.put('/schedule')
def schedule(body:ScheduleIn,user:User=Depends(current_user),db:Session=Depends(get_db)):
    if user.role!=Role.SUPER_ADMIN: raise HTTPException(403,'super_admin_required')
    c=get_cfg(db)
    for k,v in body.model_dump(exclude={'weekdays'}).items():setattr(c,k,v)
    c.weekdays_csv=','.join(str(x) for x in body.weekdays);db.commit();return {'ok':True}
@router.post('/enquiries',status_code=201)
def enquiry(body:EnquiryIn,request:Request,db:Session=Depends(get_db)):
    enforce_rate_limit(request,'managed_enquiry',10,60)
    try:
        lead=create_managed_lead(db,body.name,body.email,body.website_type);appt=book_slot(db,get_cfg(db),body.starts_at,managed_lead_id=lead.id)
        return {'id':lead.id,'lead_code':lead.lead_code,'status':lead.status,'appointment':{'id':appt.id,'starts_at':appt.starts_at.isoformat(),'timezone':appt.timezone}}
    except Exception as e: translate(e)
@router.get('/enquiries')
def list_all(user:User=Depends(current_user),db:Session=Depends(get_db)):
    if user.role!=Role.SUPER_ADMIN: raise HTTPException(403,'super_admin_required')
    return [serialize(x) for x in db.scalars(select(ManagedLead).order_by(ManagedLead.created_at.desc())).all()]
@router.patch('/enquiries/{lead_id}')
def update(lead_id:int,body:UpdateIn,user:User=Depends(current_user),db:Session=Depends(get_db)):
    if user.role!=Role.SUPER_ADMIN: raise HTTPException(403,'super_admin_required')
    lead=db.get(ManagedLead,lead_id)
    if not lead: raise HTTPException(404,'managed_lead_not_found')
    old=lead.status
    try:update_managed_status(db,lead,body.status,body.amount_minor,body.currency,body.notes)
    except Exception as e:translate(e)
    db.add(ManagedLeadStatusHistory(managed_lead_id=lead.id,actor_user_id=user.id,old_status=old,new_status=lead.status));db.commit();return serialize(lead)
def serialize(x):return {'id':x.id,'lead_code':x.lead_code,'name':x.name,'email':x.email,'website_type':x.website_type,'status':x.status,'amount_received_minor':x.amount_received_minor,'currency':x.currency,'internal_notes':x.internal_notes}
