import json
from pathlib import Path
import re
from fastapi import APIRouter,Depends,HTTPException,Response
from sqlalchemy import select
from sqlalchemy.orm import Session
from ..auth import get_db,current_user
from ..config import settings
from ..models import Publication,Site,User
from ..services.publishing import object_store_from_settings,publish_site
from ..services.rendering import render_site_html
from ..services.exporting import build_source_zip
router=APIRouter(prefix='/publishing',tags=['publishing'])
public_router=APIRouter(tags=['public-sites'])
STORE=object_store_from_settings(settings)
@router.post('/sites/{site_id}')
def publish(site_id:int,user:User=Depends(current_user),db:Session=Depends(get_db)):
    s=db.get(Site,site_id)
    if not s or s.owner_id!=user.id: raise HTTPException(404,'site_not_found')
    rendered=render_site_html(s)
    p=publish_site(db,s,STORE,rendered)
    if s.state != 'LIVE':
        s.state='LIVE'; db.commit()
    return {'publication_id':p.id,'version':p.version,'storage_key':p.storage_key,'public_url':f'{settings.public_site_base_url.rstrip("/")}/site/{s.slug}'}

@public_router.get('/site/{slug}')
def serve_published_site(slug:str,db:Session=Depends(get_db)):
    site=db.scalar(select(Site).where(Site.slug==slug))
    if not site or site.state!='LIVE':
        raise HTTPException(404,'site_not_found')
    publication=db.scalar(
        select(Publication)
        .where(Publication.site_id==site.id)
        .order_by(Publication.version.desc())
        .limit(1)
    )
    if not publication:
        raise HTTPException(404,'publication_not_found')
    try:
        rendered=STORE.get(publication.storage_key)
    except FileNotFoundError:
        raise HTTPException(404,'publication_artifact_missing')
    return Response(
        content=rendered,
        media_type='text/html',
        headers={
            'Cache-Control':'public, max-age=60, stale-while-revalidate=300',
            'X-Zylora-Publication-Version':str(publication.version),
        },
    )

@router.get('/sites/{site_id}/export')
def export(site_id:int,user:User=Depends(current_user),db:Session=Depends(get_db)):
    s=db.get(Site,site_id)
    if not s or s.owner_id!=user.id: raise HTTPException(404,'site_not_found')
    content=json.loads(s.content_json or '{}');seo=json.loads(s.seo_json or '{}');theme=json.loads(s.theme_json or '{}')
    key=str(s.template_key or '')
    root=Path(__file__).resolve().parents[4]
    if key:
        if not re.fullmatch(r'[a-z0-9-]+',key): raise HTTPException(400,'invalid_template_key')
        template_path=root/'apps'/'web'/'templates'/f'{key}.tsx'
        if not template_path.exists(): raise HTTPException(404,'template_source_not_found')
        source=template_path.read_text(encoding='utf-8')
    else:
        # AI-origin sites are not tied to the catalogue but must remain source-exportable.
        source='''import React from "react";
import type { SiteTemplateProps } from "./types";
export default function AiSite({content = {}, theme = {}}: SiteTemplateProps){
  const businessName=String(content.businessName || "Your business");
  const headline=String(content.headline || "A website built for your next customer");
  const description=String(content.description || "");
  const accent=typeof theme.accent === "string" ? theme.accent : "#315efb";
  return <main style={{fontFamily:"system-ui,sans-serif",maxWidth:1120,margin:"0 auto",padding:"72px 24px",color:"#111827"}}>
    <p style={{color:accent,fontWeight:700}}>{businessName}</p><h1 style={{fontSize:"clamp(48px,8vw,108px)",lineHeight:.92,letterSpacing:"-.05em"}}>{headline}</h1><p style={{fontSize:20,maxWidth:720}}>{description}</p>
  </main>;
}
'''
    data=build_source_zip(s,source,content=content,seo=seo,theme=theme)
    return Response(data,media_type='application/zip',headers={'Content-Disposition':f'attachment; filename="{s.slug}.zip"'})
