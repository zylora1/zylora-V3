from __future__ import annotations
import json
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from pydantic import BaseModel, Field
from sqlalchemy import select
from sqlalchemy.orm import Session
from ..auth import get_db, current_user
from ..models import Site, User, SiteDocument
from ..services import sites as svc
from .common import translate

router=APIRouter(prefix='/sites',tags=['sites'])
class SiteIn(BaseModel):
    name:str; slug:str; origin:str; page_count:int=Field(ge=1,le=10); template_key:str|None=None
class SitePatch(BaseModel):
    name:str|None=None; content:dict|None=None; seo:dict|None=None; theme:dict|None=None
class TransferIn(BaseModel): target_email:str
class DocumentIn(BaseModel): name:str=Field(min_length=1,max_length=240); content:str=Field(min_length=1,max_length=100000)

def dump(s:Site):
    return {'id':s.id,'name':s.name,'slug':s.slug,'origin':s.origin,'page_count':s.page_count,'template_key':s.template_key,'state':s.state,'content':json.loads(s.content_json or '{}'),'seo':json.loads(s.seo_json or '{}'),'theme':json.loads(s.theme_json or '{}')}

@router.get('')
def list_sites(user:User=Depends(current_user),db:Session=Depends(get_db)):
    return [dump(s) for s in db.scalars(select(Site).where(Site.owner_id==user.id).order_by(Site.updated_at.desc())).all()]

@router.post('',status_code=201)
def create(body:SiteIn,user:User=Depends(current_user),db:Session=Depends(get_db)):
    try:return dump(svc.create_site(db,user,body.name,body.slug,body.origin,body.page_count,body.template_key))
    except Exception as e: translate(e)


@router.get('/public/{slug}')
def public_site(slug:str,db:Session=Depends(get_db)):
    s=db.scalar(select(Site).where(Site.slug==slug,Site.state=='LIVE'))
    if not s: raise HTTPException(404,'site_not_found')
    return dump(s)

@router.get('/{site_id}')
def get(site_id:int,user:User=Depends(current_user),db:Session=Depends(get_db)):
    s=db.get(Site,site_id)
    if not s or s.owner_id!=user.id: raise HTTPException(404,'site_not_found')
    return dump(s)

@router.patch('/{site_id}')
def patch(site_id:int,body:SitePatch,user:User=Depends(current_user),db:Session=Depends(get_db)):
    s=db.get(Site,site_id)
    if not s or s.owner_id!=user.id: raise HTTPException(404,'site_not_found')
    if body.name is not None: s.name=body.name.strip() or s.name
    if body.content is not None: s.content_json=json.dumps(body.content,ensure_ascii=False)
    if body.seo is not None: s.seo_json=json.dumps(body.seo,ensure_ascii=False)
    if body.theme is not None: s.theme_json=json.dumps(body.theme,ensure_ascii=False)
    db.commit();db.refresh(s);return dump(s)

@router.post('/{site_id}/ai-pages')
def add_page(site_id:int,user:User=Depends(current_user),db:Session=Depends(get_db)):
    try:return dump(svc.add_ai_page(db,user,site_id))
    except Exception as e: translate(e)

@router.post('/{site_id}/make-live')
def make_live(site_id:int,user:User=Depends(current_user),db:Session=Depends(get_db)):
    try:return dump(svc.switch_live_site(db,user,site_id))
    except Exception as e: translate(e)

@router.post('/{site_id}/transfer')
def transfer(site_id:int,body:TransferIn,user:User=Depends(current_user),db:Session=Depends(get_db)):
    target=db.scalar(select(User).where(User.email==body.target_email.strip().lower()))
    if not target: raise HTTPException(404,'recipient_not_found')
    try:return dump(svc.transfer_ownership(db,user,site_id,target))
    except Exception as e: translate(e)


@router.get('/{site_id}/documents')
def documents(site_id:int,user:User=Depends(current_user),db:Session=Depends(get_db)):
    s=db.get(Site,site_id)
    if not s or s.owner_id!=user.id: raise HTTPException(404,'site_not_found')
    rows=db.scalars(select(SiteDocument).where(SiteDocument.site_id==site_id).order_by(SiteDocument.created_at.desc())).all()
    return [{'id':x.id,'name':x.name,'content':x.content,'source_type':x.source_type} for x in rows]

@router.post('/{site_id}/documents',status_code=201)
def add_document(site_id:int,body:DocumentIn,user:User=Depends(current_user),db:Session=Depends(get_db)):
    s=db.get(Site,site_id)
    if not s or s.owner_id!=user.id: raise HTTPException(404,'site_not_found')
    row=SiteDocument(site_id=site_id,name=body.name.strip(),content=body.content.strip(),source_type='PASTE')
    db.add(row);db.commit();db.refresh(row)
    return {'id':row.id,'name':row.name,'content':row.content,'source_type':row.source_type}

@router.post('/{site_id}/documents/upload',status_code=201)
async def upload_document(site_id:int,file:UploadFile=File(...),user:User=Depends(current_user),db:Session=Depends(get_db)):
    s=db.get(Site,site_id)
    if not s or s.owner_id!=user.id: raise HTTPException(404,'site_not_found')
    filename=(file.filename or 'document.txt').strip()[:240]
    ext='.'+filename.rsplit('.',1)[-1].lower() if '.' in filename else ''
    if ext not in ('.txt','.md','.csv','.json','.html','.htm'): raise HTTPException(415,'unsupported_document_type')
    data=await file.read(200000)
    if len(data)>=200000: raise HTTPException(413,'document_too_large')
    try: content=data.decode('utf-8')
    except UnicodeDecodeError: raise HTTPException(422,'document_must_be_utf8_text')
    if not content.strip(): raise HTTPException(422,'document_empty')
    row=SiteDocument(site_id=site_id,name=filename,content=content.strip(),source_type='UPLOAD')
    db.add(row);db.commit();db.refresh(row)
    return {'id':row.id,'name':row.name,'content':row.content,'source_type':row.source_type}

@router.delete('/{site_id}/documents/{document_id}')
def delete_document(site_id:int,document_id:int,user:User=Depends(current_user),db:Session=Depends(get_db)):
    s=db.get(Site,site_id)
    if not s or s.owner_id!=user.id: raise HTTPException(404,'site_not_found')
    row=db.get(SiteDocument,document_id)
    if not row or row.site_id!=site_id: raise HTTPException(404,'document_not_found')
    db.delete(row);db.commit();return {'ok':True}
