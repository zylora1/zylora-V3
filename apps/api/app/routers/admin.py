from fastapi import APIRouter,Depends,HTTPException
from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.orm import Session
from ..auth import get_db,current_user
from ..models import PlatformConfig,User
from ..enums import Role
from ..services.admin import set_config
router=APIRouter(prefix='/admin',tags=['admin'])
class ConfigIn(BaseModel): value:str
DEFAULT_PRICING={'pricing.usd.starter':'9','pricing.usd.growth':'19','pricing.inr.starter':'799','pricing.inr.growth':'1999','credits.ai.free':'15','credits.ai.starter':'100','credits.ai.growth':'500','credits.lead.free':'25','credits.lead.starter':'250','credits.lead.growth':'1000','pages.free':'2','pages.starter':'5','pages.growth':'8'}
@router.get('/config')
def config(user:User=Depends(current_user),db:Session=Depends(get_db)):
    if user.role!=Role.SUPER_ADMIN: raise HTTPException(403,'super_admin_required')
    stored={x.key:x.value for x in db.scalars(select(PlatformConfig)).all()};return {**DEFAULT_PRICING,**stored}
@router.put('/config/{key}')
def put(key:str,body:ConfigIn,user:User=Depends(current_user),db:Session=Depends(get_db)):
    if user.role!=Role.SUPER_ADMIN: raise HTTPException(403,'super_admin_required')
    row=set_config(db,user,key,body.value);return {'key':row.key,'value':row.value}
