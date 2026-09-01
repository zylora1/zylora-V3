from __future__ import annotations

from fastapi import APIRouter, File, Form, HTTPException, Request, UploadFile
from sqlalchemy import text

from .config import settings
from .db import SessionLocal
from .importer import MAX_IMPORT_ARCHIVE_MB, import_site, import_summary
from .plans import get_plan
from .security import current_user, durable_rate_limit, require_csrf

router=APIRouter(prefix='/api')


def _user(request: Request, csrf: bool=False) -> dict:
    u=current_user(request)
    if csrf: require_csrf(request,u,request.headers.get('X-CSRF-Token'))
    return u


def _owned_site(db,user_id: str,site_id: str) -> dict:
    row=db.execute(text('SELECT * FROM sites WHERE id=:s AND user_id=:u'),{'s':site_id,'u':user_id}).mappings().first()
    if not row: raise HTTPException(404,'Site not found')
    return dict(row)


@router.post('/sites/import')
async def import_website(request: Request, file: UploadFile=File(...), site_name: str=Form(default='')):
    u=_user(request,True)
    ip=request.client.host if request.client else 'unknown'
    durable_rate_limit(f'site-import-user-hour:{u["id"]}',10,3600)
    durable_rate_limit(f'site-import-ip-hour:{ip}',30,3600)
    cfg=get_plan(u['plan'])
    if int(cfg.get('contact_only') or 0):
        raise HTTPException(403,detail={'code':'MANAGED_SELF_SERVICE_UNAVAILABLE','message':'Managed/PRO sites are handled by Zylora experts and do not use self-service project import.'})
    with SessionLocal() as db:
        drafts=int(db.execute(text("SELECT count(*) FROM sites WHERE user_id=:u AND status='DRAFT'"),{'u':u['id']}).scalar_one())
    limit=int(cfg.get('site_limit') or 1)
    if drafts>=limit:
        raise HTTPException(409,detail={'code':'DRAFT_LIMIT_REACHED','message':f'You already have {drafts} drafts. Delete a draft before importing another website.','limit':limit,'drafts':drafts})
    raw=await file.read(MAX_IMPORT_ARCHIVE_MB*1024*1024+1)
    if len(raw)>MAX_IMPORT_ARCHIVE_MB*1024*1024: raise HTTPException(413,'Website archive is too large')
    result=import_site(u['id'],raw=raw,filename=file.filename or 'website.zip',site_name=site_name[:120] if site_name else None)
    return {'ok':True,**result}


@router.get('/sites/{site_id}/import-summary')
def get_import_summary(site_id: str,request: Request):
    u=_user(request)
    with SessionLocal() as db: _owned_site(db,u['id'],site_id)
    item=import_summary(site_id,u['id'])
    if not item: raise HTTPException(404,'Import record not found')
    return {'item':item}
