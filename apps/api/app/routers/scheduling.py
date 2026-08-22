from datetime import date,datetime
from fastapi import APIRouter,Depends,HTTPException,Request
from pydantic import BaseModel
from sqlalchemy.orm import Session
from ..auth import get_db,current_user
from ..models import SchedulingConfig,Site,User
from ..services.scheduling import available_slots,book_slot,cancel_appointment
from ..rate_limit import enforce_rate_limit
from .common import translate
router=APIRouter(prefix='/scheduling',tags=['scheduling'])
class ConfigIn(BaseModel): site_id:int;enabled:bool=True;timezone:str='Asia/Kolkata';duration_minutes:int=30;buffer_minutes:int=15;day_start_minute:int=540;day_end_minute:int=1020;weekdays:list[int]=[0,1,2,3,4]
class BookIn(BaseModel): site_id:int;starts_at:datetime;lead_id:int|None=None;managed_lead_id:int|None=None
@router.get('/config/{site_id}')
def get_config(site_id:int,user:User=Depends(current_user),db:Session=Depends(get_db)):
    s=db.get(Site,site_id)
    if not s or s.owner_id!=user.id: raise HTTPException(404,'site_not_found')
    c=db.get(SchedulingConfig,site_id)
    if not c: return {'site_id':site_id,'enabled':False,'timezone':'Asia/Kolkata','duration_minutes':30,'buffer_minutes':15,'day_start_minute':540,'day_end_minute':1020,'weekdays':[0,1,2,3,4]}
    return {'site_id':site_id,'enabled':c.enabled,'timezone':c.timezone,'duration_minutes':c.duration_minutes,'buffer_minutes':c.buffer_minutes,'day_start_minute':c.day_start_minute,'day_end_minute':c.day_end_minute,'weekdays':[int(x) for x in c.weekdays_csv.split(',') if x.strip()]}

@router.put('/config')
def configure(body:ConfigIn,user:User=Depends(current_user),db:Session=Depends(get_db)):
    s=db.get(Site,body.site_id)
    if not s or s.owner_id!=user.id: raise HTTPException(404,'site_not_found')
    c=db.get(SchedulingConfig,body.site_id) or SchedulingConfig(site_id=body.site_id)
    for k,v in body.model_dump(exclude={'weekdays'}).items(): setattr(c,k,v)
    c.weekdays_csv=','.join(str(x) for x in body.weekdays)
    db.add(c);db.commit();return {'ok':True}
@router.get('/slots')
def slots(site_id:int,on:date,request:Request,db:Session=Depends(get_db)):
    enforce_rate_limit(request,'slots',60,60)
    c=db.get(SchedulingConfig,site_id)
    if not c:return []
    return [d.isoformat() for d in available_slots(db,c,on)]
@router.post('/book',status_code=201)
def book(body:BookIn,request:Request,db:Session=Depends(get_db)):
    enforce_rate_limit(request,'book',20,60)
    c=db.get(SchedulingConfig,body.site_id)
    if not c: raise HTTPException(404,'scheduling_not_configured')
    try:
        a=book_slot(db,c,body.starts_at,body.lead_id,body.managed_lead_id)
        return {'id':a.id,'starts_at':a.starts_at.isoformat(),'ends_at':a.ends_at.isoformat(),'timezone':a.timezone,'status':a.status}
    except Exception as e:translate(e)
@router.post('/{appointment_id}/cancel')
def cancel(appointment_id:int,user:User=Depends(current_user),db:Session=Depends(get_db)):
    try:return {'id':cancel_appointment(db,appointment_id).id,'status':'CANCELLED'}
    except Exception as e:translate(e)
