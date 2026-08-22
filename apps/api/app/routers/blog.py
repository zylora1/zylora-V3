from datetime import datetime
from fastapi import APIRouter,Depends,HTTPException
from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.orm import Session
from ..auth import get_db,current_user
from ..models import User,BlogPost
from ..enums import Role
from ..services.blog import create_post,update_post,delete_post,set_status,public_posts
from .common import translate
router=APIRouter(prefix='/blog',tags=['blog'])
class PostIn(BaseModel): title:str;slug:str;excerpt:str;content:str;featured_image:str|None=None;seo_title:str|None=None;seo_description:str|None=None;canonical_url:str|None=None
class PostPatch(BaseModel): title:str|None=None;slug:str|None=None;excerpt:str|None=None;content:str|None=None;featured_image:str|None=None;seo_title:str|None=None;seo_description:str|None=None;canonical_url:str|None=None
class StatusIn(BaseModel): status:str;publish_at:datetime|None=None

def require_admin(user:User):
    if user.role!=Role.SUPER_ADMIN: raise HTTPException(403,'super_admin_required')

def serialize(p): return {'id':p.id,'title':p.title,'slug':p.slug,'excerpt':p.excerpt,'content':p.content,'featured_image':p.featured_image,'seo_title':p.seo_title,'seo_description':p.seo_description,'canonical_url':p.canonical_url,'status':p.status,'publish_at':p.publish_at.isoformat() if p.publish_at else None,'created_at':p.created_at.isoformat() if p.created_at else None,'updated_at':p.updated_at.isoformat() if p.updated_at else None}

@router.get('/public')
def public(db:Session=Depends(get_db)): return [serialize(p) for p in public_posts(db)]
@router.get('/public/{slug}')
def public_one(slug:str,db:Session=Depends(get_db)):
    p=db.scalar(select(BlogPost).where(BlogPost.slug==slug))
    if not p or p not in public_posts(db): raise HTTPException(404,'post_not_found')
    return serialize(p)
@router.get('')
def admin_list(user:User=Depends(current_user),db:Session=Depends(get_db)):
    require_admin(user); return [serialize(p) for p in db.scalars(select(BlogPost).order_by(BlogPost.updated_at.desc())).all()]
@router.post('',status_code=201)
def create(body:PostIn,user:User=Depends(current_user),db:Session=Depends(get_db)):
    require_admin(user)
    try:return serialize(create_post(db,**body.model_dump()))
    except Exception as e:translate(e)
@router.patch('/{post_id}')
def edit(post_id:int,body:PostPatch,user:User=Depends(current_user),db:Session=Depends(get_db)):
    require_admin(user); p=db.get(BlogPost,post_id)
    if not p: raise HTTPException(404,'post_not_found')
    try:return serialize(update_post(db,p,**body.model_dump()))
    except Exception as e:translate(e)
@router.delete('/{post_id}',status_code=204)
def delete(post_id:int,user:User=Depends(current_user),db:Session=Depends(get_db)):
    require_admin(user); p=db.get(BlogPost,post_id)
    if not p: raise HTTPException(404,'post_not_found')
    delete_post(db,p); return None
@router.patch('/{post_id}/status')
def status(post_id:int,body:StatusIn,user:User=Depends(current_user),db:Session=Depends(get_db)):
    require_admin(user); p=db.get(BlogPost,post_id)
    if not p: raise HTTPException(404,'post_not_found')
    try:return serialize(set_status(db,p,body.status,body.publish_at))
    except Exception as e:translate(e)
