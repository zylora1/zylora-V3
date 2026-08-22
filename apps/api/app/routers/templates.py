from fastapi import APIRouter,Depends,HTTPException
from pydantic import BaseModel,Field
from sqlalchemy.orm import Session
from ..auth import get_db,current_user
from ..models import User
from ..enums import Role
from ..services import templates as svc

router=APIRouter(prefix='/templates',tags=['templates'])
admin_router=APIRouter(prefix='/admin/templates',tags=['admin-templates'])

class TemplatePatch(BaseModel):
    family:str|None=None
    quality_tier:str|None=None
    visible:bool|None=None
    featured:bool|None=None
    display_name:str|None=None
    description:str|None=None
    tags:list[str]|None=None
    preview_image:str|None=None
    sort_order:int|None=Field(default=None,ge=0)

def require_admin(user:User):
    if user.role!=Role.SUPER_ADMIN: raise HTTPException(403,'super_admin_required')

@router.get('/public')
def public_templates(db:Session=Depends(get_db)):
    return [svc.serialize(x) for x in svc.public_records(db)]

@admin_router.get('')
def admin_templates(user:User=Depends(current_user),db:Session=Depends(get_db)):
    require_admin(user);return [svc.serialize(x) for x in svc.all_records(db)]

@admin_router.patch('/{key}')
def patch_template(key:str,body:TemplatePatch,user:User=Depends(current_user),db:Session=Depends(get_db)):
    require_admin(user)
    data=body.model_dump(exclude_unset=True)
    if 'tags' in data:data['tags_csv']=','.join(data.pop('tags') or [])
    try:return svc.serialize(svc.update_record(db,key,**data))
    except ValueError as exc: raise HTTPException(404,str(exc))

@admin_router.post('/bulk-hide-non-premium')
def hide_non_premium(user:User=Depends(current_user),db:Session=Depends(get_db)):
    require_admin(user);return svc.bulk_hide_non_premium(db)
