from __future__ import annotations

import json
import re
import secrets
from html import escape
from uuid import uuid4

from bs4 import BeautifulSoup
from fastapi import APIRouter, File, Form, HTTPException, Request, UploadFile
from fastapi.responses import Response
from pydantic import BaseModel, Field
from sqlalchemy import text

from .db import SessionLocal, now_iso
from .config import settings
from .credits import debit_wallet
from .plans import get_plan
from .providers import ai_seo_metadata
from .operations import safe_exception_summary, record_operational_event
from .editor_state import create_revision, ensure_history, list_revisions, push_history, redo as history_redo, restore_revision, undo as history_undo
from .media import (
    asset_is_publicly_referenced, create_asset, get_asset, import_remote_stock, list_assets, load_bytes,
    media_url, pexels_search, soft_delete_asset, update_asset
)
from .security import current_user, require_csrf, durable_rate_limit
from .structured_editor import (
    apply_document, extract_editor_nodes, instrument_editable_html, merge_operations, parse_document, resolve_document_links,
    validate_operation, validate_operations_against_html, validate_internal_page_links, effect_capabilities, build_site_document
)
from .templates import BY_SLUG, AI_RUNTIME_SLUG, render_template_page
from .seo_engine import (apply_seo_html, clean_text, metadata_for_page, normalize_public_slug,
    page_public_slug, seo_document, seo_health, validate_canonical)
from .link_icons import normalize_footer_links, detect_link_platform, apply_footer_links_html
from .studio_document import validate_studio_document
from .studio_renderer import render_page as render_studio_page

router = APIRouter(prefix='/api')
public_router = APIRouter()
APPROVED_WEB_FONTS={'Inter','Space Grotesk','IBM Plex Mono','Manrope','Georgia','Arial'}


def _user(request: Request, csrf: bool=False) -> dict:
    u=current_user(request)
    if csrf: require_csrf(request,u,request.headers.get('X-CSRF-Token'))
    return u


def _owned_site(db, user_id: str, site_id: str) -> dict:
    row=db.execute(text('SELECT * FROM sites WHERE id=:s AND user_id=:u'),{'s':site_id,'u':user_id}).mappings().first()
    if not row: raise HTTPException(404,'Site not found')
    return dict(row)


def _page_keys(site: dict) -> list[str]:
    doc=parse_document(site.get('draft_structure_json'))
    keys=[str(x.get('id') or x.get('slug') or '').strip().lower() for x in doc.get('pages',[]) if isinstance(x,dict)]
    keys=[x for x in keys if x]
    if keys: return keys
    meta=BY_SLUG[site['template_slug']]
    return ['home',*meta.get('page_slugs',[])[:max(0,int(site.get('page_count') or 1)-1)]]


def _page_allowed(site: dict, page: str) -> str:
    p=(page or 'home').strip().lower(); allowed=set(_page_keys(site))
    if p not in allowed: raise HTTPException(404,'Page not available')
    return p


def _base_page(site: dict, page: str) -> str:
    p=_page_allowed(site,page)
    html=render_template_page(site['template_slug'],site,'' if p=='home' else p)
    return instrument_editable_html(html,p,site['template_slug'])


def _brand_dict(site: dict) -> dict:
    try: data=json.loads(site.get('brand_json') or '{}')
    except Exception: data={}
    return data if isinstance(data,dict) else {}


def apply_brand_html(html: str, site: dict) -> str:
    brand=_brand_dict(site)
    if not brand: return html
    css=[]
    primary=brand.get('primary'); secondary=brand.get('secondary'); bg=brand.get('background'); surface=brand.get('surface'); heading=brand.get('heading'); body=brand.get('body')
    accent=brand.get('accent'); muted=brand.get('muted'); border=brand.get('border')
    hfont=brand.get('heading_font'); bfont=brand.get('body_font'); radius=brand.get('button_radius')
    container=brand.get('container_width'); section_spacing=brand.get('section_spacing'); content_gap=brand.get('content_gap'); body_size=brand.get('body_font_size'); heading_scale=brand.get('heading_scale')
    root=[]
    for k,v in [('primary',primary),('secondary',secondary),('background',bg),('surface',surface),('heading',heading),('body',body),('accent',accent),('muted',muted),('border',border)]:
        if isinstance(v,str) and re.fullmatch(r'#[0-9A-Fa-f]{6}',v): root.append(f'--z-{k}:{v}')
    if root: css.append(':root{'+ ';'.join(root)+'}')
    if bg: css.append(f'body{{background:{bg}}}')
    if body: css.append(f'body{{color:{body}}}')
    if heading: css.append(f'h1,h2,h3,h4,h5,h6{{color:{heading}}}')
    if hfont and re.fullmatch(r"[A-Za-z0-9 ,.'\-]{2,120}",str(hfont)): css.append(f'h1,h2,h3,h4,h5,h6{{font-family:{hfont}}}')
    if bfont and re.fullmatch(r"[A-Za-z0-9 ,.'\-]{2,120}",str(bfont)): css.append(f'body{{font-family:{bfont}}}')
    if primary: css.append(f'a.button,.button,.cta,button{{--z-button-bg:{primary}}}')
    if radius and str(radius) in {'0px','6px','10px','16px','999px'}: css.append(f'a.button,.button,.cta,button{{border-radius:{radius}}}')
    if container in {'960px','1120px','1280px','1440px'}:
        css.append(f':root{{--z-container:{container}}}.container,[data-zylora-container]{{max-width:{container};margin-left:auto;margin-right:auto}}')
    if section_spacing in {'64px','80px','96px','120px','144px'}:
        css.append(f':root{{--z-section-space:{section_spacing}}}main>section[data-zylora-kind="section"]{{padding-top:var(--z-section-space);padding-bottom:var(--z-section-space)}}')
    if content_gap in {'16px','24px','32px','48px'}: css.append(f':root{{--z-content-gap:{content_gap}}}')
    if body_size in {'14px','16px','18px','20px'}: css.append(f'body{{font-size:{body_size}}}')
    if heading_scale in {'compact','balanced','expressive'}:
        scale={'compact':('.95','1.05'),'balanced':('1','1.12'),'expressive':('1.06','1.22')}[heading_scale]
        css.append(f':root{{--z-heading-scale:{scale[0]};--z-display-scale:{scale[1]}}}')
    style='<style id="zylora-brand-overrides">'+''.join(css)+'</style>' if css else ''
    rendered=html.replace('</head>',style+'</head>') if style else html
    logo_id=brand.get('logo_asset_id'); favicon_id=brand.get('favicon_asset_id')
    if logo_id or favicon_id:
        soup=BeautifulSoup(rendered,'html.parser')
        if logo_id:
            src=media_url(str(logo_id))
            target=soup.select_one('[data-zylora-role="logo"], header .wordmark, header .brand')
            if src and target:
                target.clear(); img=soup.new_tag('img'); img['src']=src; img['alt']=str(site.get('business_name') or 'Brand logo'); img['data-zylora-asset-id']=str(logo_id); img['style']='max-width:100%;max-height:52px;object-fit:contain;width:auto;height:auto'; target.append(img)
        if favicon_id and soup.head:
            src=media_url(str(favicon_id))
            if src:
                fav=soup.head.select_one('link[rel~=icon]')
                if not fav: fav=soup.new_tag('link'); fav['rel']='icon'; soup.head.append(fav)
                fav['href']=src
        rendered=str(soup)
    return rendered


def _seo_dict(site: dict) -> dict:
    try: data=json.loads(site.get('seo_json') or '{}')
    except Exception: data={}
    return data if isinstance(data,dict) else {}


def apply_page_seo(html: str, site: dict, page: str, canonical: str|None=None) -> str:
    # Compatibility wrapper: all public/draft metadata now flows through the centralized SEO/GEO engine.
    rendered=apply_seo_html(html,site,page)
    if canonical:
        soup=BeautifulSoup(rendered,'html.parser'); head=soup.head
        if head:
            link=head.find('link',rel='canonical')
            if link: link['href']=canonical
            og=head.find('meta',attrs={'property':'og:url'})
            if og: og['content']=canonical
        rendered=str(soup)
    return rendered


def render_draft(site: dict, page: str) -> str:
    if site.get('studio_document_json'):
        document=validate_studio_document(json.loads(site['studio_document_json']))
        page_id=next((pid for pid,item in document.pages.items() if item.slug.strip('/')==(page or 'home').strip('/')),None)
        if page_id is None:
            raise ValueError('Page not found in Studio document')
        return render_studio_page(document,page_id,asset_resolver=media_url,seo_override={'noindex':True})
    html=_base_page(site,page); html=apply_brand_html(html,site)
    def draft_link(target: str) -> str:
        return f"/api/sites/{site['id']}/preview" if target=='home' else f"/api/sites/{site['id']}/preview/{target}"
    html=apply_document(html,site.get('draft_structure_json'),page,asset_resolver=media_url,link_resolver=draft_link)
    html=resolve_document_links(html,draft_link)
    html=apply_footer_links_html(html, seo_document(site).get('footer_links') or [])
    return apply_page_seo(html,site,page)


class AssetPatch(BaseModel):
    filename:str|None=Field(default=None,max_length=120)
    alt_text:str|None=Field(default=None,max_length=500)


@router.post('/sites/{site_id}/assets')
async def upload_asset(site_id: str, request: Request, file: UploadFile=File(...), alt_text: str=Form(default='')):
    u=_user(request,True)
    durable_rate_limit(f'media-upload-user:{u["id"]}',60,3600); durable_rate_limit(f'media-upload-site:{site_id}',120,3600)
    with SessionLocal() as db: _owned_site(db,u['id'],site_id)
    raw=await file.read(max(1, int(settings.media_max_upload_mb))*1024*1024+1)
    asset=create_asset(u['id'],site_id,file.filename or 'image',raw,alt_text=alt_text)
    return {'asset':asset}


@router.get('/sites/{site_id}/assets')
def assets(site_id: str, request: Request):
    u=_user(request)
    with SessionLocal() as db: _owned_site(db,u['id'],site_id)
    return {'items':list_assets(u['id'],site_id)}


@router.get('/sites/{site_id}/assets/{asset_id}')
def asset(site_id: str, asset_id: str, request: Request):
    u=_user(request)
    with SessionLocal() as db: _owned_site(db,u['id'],site_id)
    return {'asset':get_asset(asset_id,user_id=u['id'],site_id=site_id)}


@router.patch('/sites/{site_id}/assets/{asset_id}')
def patch_asset(site_id: str, asset_id: str, payload: AssetPatch, request: Request):
    u=_user(request,True)
    with SessionLocal() as db: _owned_site(db,u['id'],site_id)
    return {'asset':update_asset(asset_id,u['id'],site_id,filename=payload.filename,alt_text=payload.alt_text)}


@router.delete('/sites/{site_id}/assets/{asset_id}')
def delete_asset(site_id: str, asset_id: str, request: Request):
    u=_user(request,True)
    with SessionLocal() as db: _owned_site(db,u['id'],site_id)
    soft_delete_asset(asset_id,u['id'],site_id); return {'ok':True}


@router.get('/sites/{site_id}/stock-images')
def stock_search(site_id: str, request: Request, q: str='', per_page: int=20):
    u=_user(request)
    with SessionLocal() as db: _owned_site(db,u['id'],site_id)
    return pexels_search(q,per_page)


class StockImport(BaseModel):
    url:str=Field(min_length=12,max_length=2000); photographer:str=Field(default='',max_length=160); source_url:str=Field(default='',max_length=2000); provider:str=Field(default='Pexels',max_length=40)


@router.post('/sites/{site_id}/stock-images/import')
def stock_import(site_id: str, payload: StockImport, request: Request):
    u=_user(request,True); durable_rate_limit(f'stock-import-user:{u["id"]}',40,3600); durable_rate_limit(f'stock-import-site:{site_id}',80,3600)
    with SessionLocal() as db: _owned_site(db,u['id'],site_id)
    return {'asset':import_remote_stock(u['id'],site_id,payload.url,photographer=payload.photographer,source_url=payload.source_url,provider=payload.provider)}


@public_router.get('/media/{asset_id}/{filename}')
def media_delivery(asset_id: str, filename: str, request: Request):
    asset=get_asset(asset_id)
    allowed=asset_is_publicly_referenced(asset_id)
    if not allowed:
        try:
            u=current_user(request); allowed=u['id']==asset['user_id']
        except Exception:
            allowed=False
    if not allowed: raise HTTPException(404,'Asset not found')
    try: data=load_bytes(asset['storage_key'])
    except FileNotFoundError: raise HTTPException(404,'Asset not found')
    return Response(data,media_type=asset['mime_type'],headers={'Cache-Control':'public,max-age=31536000,immutable' if asset_is_publicly_referenced(asset_id) else 'private,max-age=3600','X-Content-Type-Options':'nosniff'})


class EditorActions(BaseModel):
    operations:list[dict]=Field(min_length=1,max_length=50)
    action:str=Field(default='MANUAL_EDIT',max_length=80)


@router.get('/sites/{site_id}/editor-document')
def editor_document(site_id: str, request: Request, page: str='home'):
    u=_user(request)
    with SessionLocal() as db:
        site=_owned_site(db,u['id'],site_id); p=_page_allowed(site,page); ensure_history(db,site,u['id']); site=_owned_site(db,u['id'],site_id)
        base=_base_page(site,p); rendered=render_draft(site,p)
        cursor=int(site.get('editor_history_cursor') or 0)
        can_redo=bool(db.execute(text('SELECT 1 FROM editor_history WHERE site_id=:s AND seq>:c LIMIT 1'),{'s':site_id,'c':cursor}).first())
        revs=list_revisions(db,site_id,50)
    return {'schemaVersion':3,'document_version':int(site.get('document_version') or 1),'page':p,'structure':parse_document(site.get('draft_structure_json')),'nodes':extract_editor_nodes(rendered),'base_nodes':extract_editor_nodes(base),'assets':list_assets(u['id'],site_id),'brand':_brand_dict(site),'seo':_seo_dict(site),'effects':effect_capabilities(),'history':{'cursor':cursor,'can_undo':cursor>0,'can_redo':can_redo},'revisions':revs}


@router.post('/sites/{site_id}/editor/actions')
def editor_actions(site_id: str, payload: EditorActions, request: Request):
    u=_user(request,True)
    try: validated=[validate_operation(x) for x in payload.operations]
    except ValueError as exc: raise HTTPException(422,str(exc))
    with SessionLocal.begin() as db:
        site=_owned_site(db,u['id'],site_id); ensure_history(db,site,u['id'])
        if site.get('origin')=='TEMPLATE' and any(op['type']=='add_section' for op in validated):
            raise HTTPException(422,'Template page structure is fixed; add sections only to AI-origin sites')
        enriched=[]
        for page in sorted({op.get('page','home') for op in validated}):
            p=_page_allowed(site,page)
            base=_base_page(site,p)
            group=[op for op in validated if op.get('page','home')==page]
            try: enriched.extend(validate_operations_against_html(base,group))
            except ValueError as exc: raise HTTPException(422,str(exc))
        validated=enriched
        meta=BY_SLUG[site['template_slug']]
        allowed_pages=set(_page_keys(site))
        try: validate_internal_page_links(validated,allowed_pages)
        except ValueError as exc: raise HTTPException(422,str(exc))
        for op in validated:
            if op['type']=='replace_image': get_asset(op['asset_id'],user_id=u['id'],site_id=site_id)
        doc=merge_operations(parse_document(site.get('draft_structure_json')),validated)
        db.execute(text('UPDATE sites SET draft_structure_json=:j,document_schema_version=3,document_version=document_version+1,updated_at=:n WHERE id=:s'),{'j':json.dumps(doc,separators=(',',':')),'n':now_iso(),'s':site_id})
        cursor=push_history(db,site_id,u['id'],payload.action); create_revision(db,site_id,u['id'],'AUTOSAVE',payload.action)
    return {'ok':True,'structure':doc,'history_cursor':cursor}


@router.post('/sites/{site_id}/editor/undo')
def editor_undo(site_id: str, request: Request):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        site=_owned_site(db,u['id'],site_id); result=history_undo(db,site,u['id'])
    return result


@router.post('/sites/{site_id}/editor/redo')
def editor_redo(site_id: str, request: Request):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        site=_owned_site(db,u['id'],site_id); result=history_redo(db,site,u['id'])
    return result


@router.get('/sites/{site_id}/revisions')
def revisions(site_id: str, request: Request):
    u=_user(request)
    with SessionLocal() as db: _owned_site(db,u['id'],site_id); items=list_revisions(db,site_id,100)
    return {'items':items}


@router.post('/sites/{site_id}/studio-migrate')
def migrate_to_studio(site_id: str, request: Request):
    u=_user(request,True)
    from .studio_migration import migrate_v3_to_v4
    with SessionLocal.begin() as db:
        site=_owned_site(db,u['id'],site_id)
        if site.get('studio_document_json'):
            try:
                document=validate_studio_document(json.loads(site['studio_document_json']))
            except Exception as exc:
                raise HTTPException(409,detail={'code':'STUDIO_DOCUMENT_INVALID','message':'The saved Studio document is invalid and was not modified.','reason':str(exc)})
            if int(site.get('studio_revision') or 0) != document.revision:
                db.execute(text('UPDATE sites SET studio_revision=:revision WHERE id=:site_id AND user_id=:user_id'),{
                    'revision':document.revision,'site_id':site_id,'user_id':u['id']
                })
            return {'ok': True, 'migrated': False, 'message': 'Already migrated', 'document': document.model_dump(exclude_none=True)}
        
        # We must render the base pages to perform the migration correctly
        rendered_pages = {}
        for p in _page_keys(site):
            rendered_pages[p] = render_draft(site, p)
            
        v3_doc = parse_document(site.get('draft_structure_json'))
        v4_doc = migrate_v3_to_v4(v3_doc, rendered_pages)
        
        v4_json = v4_doc.model_dump_json(exclude_none=True)
        db.execute(text('UPDATE sites SET studio_document_json=:v4,studio_revision=:revision WHERE id=:s'), {
            'v4':v4_json,'revision':v4_doc.revision,'s':site_id
        })
        
        # Also backup current to revisions if needed
        create_revision(db,site_id,u['id'],'BACKUP','Studio v4 Migration Backup')
        return {'ok': True, 'migrated': True, 'document': v4_doc.model_dump(exclude_none=True)}
        
from .studio_document import SiteDocument, create_empty_document, validate_studio_document
from .user_site_templates import clone_template_document, sanitize_template_document


class BlankSiteIn(BaseModel):
    name: str = Field(default="Untitled website", min_length=2, max_length=120)


@router.post('/sites/blank')
def create_blank_site(payload: BlankSiteIn, request: Request):
    """Create the authoritative blank-canvas website without AI or a catalogue."""
    u = _user(request, True)
    name = payload.name.strip() or 'Untitled website'
    with SessionLocal() as db:
        draft_count = int(db.execute(text("SELECT count(*) FROM sites WHERE user_id=:u AND status='DRAFT'"), {'u': u['id']}).scalar_one())
    limit = int(get_plan(u['plan'])['site_limit'])
    if draft_count >= limit:
        raise HTTPException(409, detail={'code': 'DRAFT_LIMIT_REACHED', 'message': 'Delete a draft before creating another website.', 'limit': limit, 'drafts': draft_count})
    site_id = str(uuid4())
    slug_base = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')[:45] or 'untitled-website'
    slug = f"{slug_base}-{secrets.token_hex(2)}"
    now = now_iso()
    document = create_empty_document()
    document.id = site_id
    document_json = document.model_dump_json(exclude_none=True)
    legacy_shell = build_site_document(AI_RUNTIME_SLUG, [], 1, str(BY_SLUG[AI_RUNTIME_SLUG].get('version') or '1.0.0'))
    with SessionLocal.begin() as db:
        db.execute(text('''INSERT INTO sites(
            id,user_id,name,slug,template_slug,origin,status,business_name,tagline,description,accent,page_count,
            draft_structure_json,document_schema_version,document_version,generation_state,studio_document_json,studio_revision,updated_at,created_at
          ) VALUES (
            :id,:user,:name,:slug,:runtime,'MANUAL','DRAFT',:name,'','',:accent,1,
            :legacy,3,1,'DRAFT',:document,1,:now,:now
          )'''), {
            'id': site_id, 'user': u['id'], 'name': name, 'slug': slug, 'runtime': AI_RUNTIME_SLUG,
            'accent': BY_SLUG[AI_RUNTIME_SLUG].get('accent') or '#6f7bff', 'legacy': json.dumps(legacy_shell, separators=(',', ':')),
            'document': document_json, 'now': now,
        })
    return {'ok': True, 'id': site_id, 'slug': slug, 'page_count': 1, 'origin': 'MANUAL', 'studio_url': f'/studio/{site_id}'}


class UserTemplateIn(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    description: str = Field(default='', max_length=500)


@router.get('/user-templates')
def list_user_templates(request: Request):
    u = _user(request)
    with SessionLocal() as db:
        rows = db.execute(text('''SELECT id,source_site_id,name,description,thumbnail_url,visibility,created_at,updated_at
          FROM user_site_templates WHERE user_id=:user ORDER BY updated_at DESC'''), {'user': u['id']}).mappings().all()
    return {'items': [dict(row) for row in rows]}


@router.post('/sites/{site_id}/user-templates')
def save_user_template(site_id: str, payload: UserTemplateIn, request: Request):
    u = _user(request, True)
    with SessionLocal.begin() as db:
        site = _owned_site(db, u['id'], site_id)
        if not site.get('studio_document_json'):
            raise HTTPException(409, detail={'code': 'STUDIO_DOCUMENT_REQUIRED', 'message': 'Save the design before saving it as a template.'})
        try:
            snapshot = sanitize_template_document(json.loads(site['studio_document_json']))
        except Exception as exc:
            raise HTTPException(422, f'Invalid Studio document: {exc}')
        template_id = str(uuid4())
        now = now_iso()
        db.execute(text('''INSERT INTO user_site_templates(id,user_id,source_site_id,name,description,document_json,visibility,created_at,updated_at)
          VALUES (:id,:user,:site,:name,:description,:document,'PRIVATE',:now,:now)'''), {
            'id': template_id, 'user': u['id'], 'site': site_id, 'name': payload.name.strip(),
            'description': payload.description.strip(), 'document': json.dumps(snapshot, separators=(',', ':')), 'now': now,
        })
    return {'ok': True, 'id': template_id, 'visibility': 'PRIVATE'}


@router.post('/user-templates/{template_id}/create')
def create_from_user_template(template_id: str, payload: BlankSiteIn, request: Request):
    u = _user(request, True)
    with SessionLocal() as db:
        row = db.execute(text('SELECT * FROM user_site_templates WHERE id=:id AND user_id=:user'), {'id': template_id, 'user': u['id']}).mappings().first()
        draft_count = int(db.execute(text("SELECT count(*) FROM sites WHERE user_id=:u AND status='DRAFT'"), {'u': u['id']}).scalar_one())
    if not row:
        raise HTTPException(404, 'Template not found')
    limit = int(get_plan(u['plan'])['site_limit'])
    if draft_count >= limit:
        raise HTTPException(409, detail={'code': 'DRAFT_LIMIT_REACHED', 'message': 'Delete a draft before creating another website.', 'limit': limit, 'drafts': draft_count})
    site_id = str(uuid4())
    name = payload.name.strip() or str(row['name'])
    slug_base = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')[:45] or 'website'
    slug = f"{slug_base}-{secrets.token_hex(2)}"
    document = clone_template_document(json.loads(row['document_json']), site_id=site_id)
    now = now_iso()
    legacy_shell = build_site_document(AI_RUNTIME_SLUG, [], max(1, len(document['pages'])), str(BY_SLUG[AI_RUNTIME_SLUG].get('version') or '1.0.0'))
    with SessionLocal.begin() as db:
        db.execute(text('''INSERT INTO sites(
            id,user_id,name,slug,template_slug,origin,status,business_name,tagline,description,accent,page_count,
            draft_structure_json,document_schema_version,document_version,generation_state,studio_document_json,studio_revision,updated_at,created_at
          ) VALUES (
            :id,:user,:name,:slug,:runtime,'USER_TEMPLATE','DRAFT',:name,'','',:accent,:pages,
            :legacy,3,1,'DRAFT',:document,1,:now,:now
          )'''), {
            'id': site_id, 'user': u['id'], 'name': name, 'slug': slug, 'runtime': AI_RUNTIME_SLUG,
            'accent': BY_SLUG[AI_RUNTIME_SLUG].get('accent') or '#6f7bff', 'pages': max(1, len(document['pages'])),
            'legacy': json.dumps(legacy_shell, separators=(',', ':')), 'document': json.dumps(document, separators=(',', ':')), 'now': now,
        })
    return {'ok': True, 'id': site_id, 'slug': slug, 'origin': 'USER_TEMPLATE', 'studio_url': f'/studio/{site_id}'}

@router.post('/sites/{site_id}/studio-save')
def save_studio(site_id: str, document: dict, request: Request):
    u=_user(request,True)
    
    with SessionLocal.begin() as db:
        site=_owned_site(db,u['id'],site_id)
        if not site:
            raise HTTPException(404, "Site not found")
            
        try:
            valid_doc = validate_studio_document(document)
            client_rev = valid_doc.revision
            
            # Concurrency check
            if site.get('studio_document_json'):
                current_server_doc = json.loads(site['studio_document_json'])
                server_rev = int(site.get('studio_revision') or current_server_doc.get("revision", 1))
                
                # If client revision is older than server revision, it's a conflict
                if client_rev != server_rev:
                    raise HTTPException(409,detail={
                        'code':'STUDIO_REVISION_CONFLICT',
                        'message':'A newer or different Studio revision is authoritative.',
                        'serverRevision':server_rev,
                    })
                
                # Bump revision for the successful save
                valid_doc.revision = server_rev + 1
            else:
                valid_doc.revision = 1
                
            doc_json = valid_doc.model_dump_json(exclude_none=True)
            result=db.execute(text('''UPDATE sites
                SET studio_document_json=:document, studio_revision=:next_revision, updated_at=:updated
                WHERE id=:site_id AND user_id=:user_id AND studio_revision=:expected_revision'''),{
                'document':doc_json,'next_revision':valid_doc.revision,'expected_revision':client_rev,
                'updated':now_iso(),'site_id':site_id,'user_id':u['id']
            })
            if result.rowcount != 1:
                authoritative=db.execute(text('SELECT studio_revision FROM sites WHERE id=:site_id AND user_id=:user_id'),{
                    'site_id':site_id,'user_id':u['id']
                }).scalar_one_or_none()
                raise HTTPException(409,detail={
                    'code':'STUDIO_REVISION_CONFLICT','message':'A concurrent Studio save won; this document was not saved.',
                    'serverRevision':int(authoritative or server_rev),
                })
            
        except HTTPException:
            raise
        except Exception as e:
            raise HTTPException(400, f"Invalid document: {str(e)}")

    return {'ok': True, 'newRevision': valid_doc.revision}

@router.get('/sites/{site_id}/revisions/{revision_id}/preview')
def revision_preview(site_id: str, revision_id: str, request: Request, page: str='home'):
    u=_user(request)
    with SessionLocal() as db:
        site=_owned_site(db,u['id'],site_id); p=_page_allowed(site,page)
        row=db.execute(text('SELECT state_json FROM site_revisions WHERE id=:i AND site_id=:s'),{'i':revision_id,'s':site_id}).first()
        if not row: raise HTTPException(404,'Revision not found')
    try: state=json.loads(row[0])
    except Exception: raise HTTPException(422,'Revision is corrupt')
    revision_site=dict(site)
    for k in ('tagline','description','accent','draft_structure_json','brand_json','seo_json','document_schema_version'):
        if k in state: revision_site[k]=state[k]
    return Response(render_draft(revision_site,p),media_type='text/html')

@router.post('/sites/{site_id}/revisions/{revision_id}/restore')
def revision_restore(site_id: str, revision_id: str, request: Request):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        site=_owned_site(db,u['id'],site_id)
        try: item=restore_revision(db,site,u['id'],revision_id)
        except KeyError: raise HTTPException(404,'Revision not found')
    return {'ok':True,'revision':item}


class BrandPatch(BaseModel):
    primary:str|None=None; secondary:str|None=None; background:str|None=None; surface:str|None=None; heading:str|None=None; body:str|None=None
    accent:str|None=None; muted:str|None=None; border:str|None=None
    heading_font:str|None=Field(default=None,max_length=120); body_font:str|None=Field(default=None,max_length=120); button_radius:str|None=None
    container_width:str|None=None; section_spacing:str|None=None; content_gap:str|None=None; body_font_size:str|None=None; heading_scale:str|None=None
    logo_asset_id:str|None=None; alternate_logo_asset_id:str|None=None; favicon_asset_id:str|None=None


@router.patch('/sites/{site_id}/brand')
def patch_brand(site_id: str, payload: BrandPatch, request: Request):
    u=_user(request,True); data={k:v for k,v in payload.model_dump().items() if v is not None}
    for key in {'primary','secondary','background','surface','heading','body','accent','muted','border'}:
        if key in data and not re.fullmatch(r'#[0-9A-Fa-f]{6}',str(data[key])): raise HTTPException(422,f'Invalid {key} color')
    if data.get('button_radius') not in {None,'0px','6px','10px','16px','999px'}: raise HTTPException(422,'Invalid button radius')
    if data.get('container_width') not in {None,'960px','1120px','1280px','1440px'}: raise HTTPException(422,'Invalid container width')
    if data.get('section_spacing') not in {None,'64px','80px','96px','120px','144px'}: raise HTTPException(422,'Invalid section spacing')
    if data.get('content_gap') not in {None,'16px','24px','32px','48px'}: raise HTTPException(422,'Invalid content gap')
    if data.get('body_font_size') not in {None,'14px','16px','18px','20px'}: raise HTTPException(422,'Invalid body font size')
    if data.get('heading_scale') not in {None,'compact','balanced','expressive'}: raise HTTPException(422,'Invalid heading scale')
    for key in {'heading_font','body_font'}:
        if key in data and data[key] not in APPROVED_WEB_FONTS: raise HTTPException(422,'Unsupported font family')
    with SessionLocal.begin() as db:
        site=_owned_site(db,u['id'],site_id); ensure_history(db,site,u['id']); current=_brand_dict(site); current.update(data)
        for key in {'logo_asset_id','alternate_logo_asset_id','favicon_asset_id'}:
            if current.get(key): get_asset(str(current[key]),user_id=u['id'],site_id=site_id)
        db.execute(text('UPDATE sites SET brand_json=:j,updated_at=:n WHERE id=:s'),{'j':json.dumps(current,separators=(',',':')),'n':now_iso(),'s':site_id}); push_history(db,site_id,u['id'],'BRAND_EDIT'); create_revision(db,site_id,u['id'],'AUTOSAVE','Brand edit')
    return {'brand':current}


class SeoPagePatch(BaseModel):
    page:str=Field(default='home',max_length=80)
    title:str|None=Field(default=None,max_length=180)
    description:str|None=Field(default=None,max_length=500)
    slug:str|None=Field(default=None,max_length=80)
    og_title:str|None=Field(default=None,max_length=180)
    og_description:str|None=Field(default=None,max_length=500)
    og_image_asset_id:str|None=None
    twitter_title:str|None=Field(default=None,max_length=180)
    twitter_description:str|None=Field(default=None,max_length=500)
    noindex:bool|None=None
    nofollow:bool|None=None
    canonical:str|None=Field(default=None,max_length=1200)


class SeoSitePatch(BaseModel):
    site_title:str|None=Field(default=None,max_length=180)
    description:str|None=Field(default=None,max_length=500)
    business_name:str|None=Field(default=None,max_length=160)
    business_description:str|None=Field(default=None,max_length=700)
    business_type:str|None=Field(default=None,max_length=80)
    primary_topic:str|None=Field(default=None,max_length=160)
    primary_location:str|None=Field(default=None,max_length=160)
    language:str|None=Field(default=None,max_length=16)
    indexable:bool|None=None
    follow_links:bool|None=None
    telephone:str|None=Field(default=None,max_length=80)
    email:str|None=Field(default=None,max_length=180)
    street:str|None=Field(default=None,max_length=180)
    locality:str|None=Field(default=None,max_length=120)
    region:str|None=Field(default=None,max_length=120)
    postal_code:str|None=Field(default=None,max_length=40)
    country:str|None=Field(default=None,max_length=80)
    service_area:list[str]|None=Field(default=None,max_length=30)
    opening_hours:list[str]|None=Field(default=None,max_length=20)
    social_profiles:list[str]|None=Field(default=None,max_length=20)
    og_image_asset_id:str|None=None
    llms_txt:bool|None=None
    indexnow_enabled:bool|None=None
    app_url:str|None=Field(default=None,max_length=1200)
    login_url:str|None=Field(default=None,max_length=1200)
    signup_url:str|None=Field(default=None,max_length=1200)
    booking_url:str|None=Field(default=None,max_length=1200)
    checkout_url:str|None=Field(default=None,max_length=1200)
    customer_portal_url:str|None=Field(default=None,max_length=1200)


@router.patch('/sites/{site_id}/seo')
def patch_seo(site_id: str, payload: SeoPagePatch, request: Request):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        site=_owned_site(db,u['id'],site_id); page=_page_allowed(site,payload.page); ensure_history(db,site,u['id']); seo=seo_document(site); pages=seo.setdefault('pages',{}); current=pages.setdefault(page,{})
        data={k:v for k,v in payload.model_dump(exclude={'page'}).items() if v is not None}
        if 'canonical' in data:
            data['canonical']=validate_canonical(data['canonical'])
        if data.get('og_image_asset_id'): get_asset(data['og_image_asset_id'],user_id=u['id'],site_id=site_id)
        old_slug=page_public_slug(site,page)
        if 'slug' in data:
            new_slug=normalize_public_slug(data['slug'],home=page=='home')
            # Public slugs may change without changing the immutable template page key.
            data['slug']=new_slug
            if page!='home' and new_slug!=old_slug:
                # Reject collisions with any other enabled page.
                probe=dict(site); probe_seo=seo_document(probe); probe_seo['pages'].setdefault(page,{}).update({'slug':new_slug}); probe['seo_json']=json.dumps(probe_seo)
                allowed=_page_keys(site)
                slugs=[page_public_slug(probe,k) for k in allowed]
                if len(slugs)!=len(set(slugs)): raise HTTPException(409,'That page slug is already in use')
        current.update(data)
        db.execute(text('UPDATE sites SET seo_json=:j,seo_schema_version=2,seo_updated_at=:n,updated_at=:n WHERE id=:s'),{'j':json.dumps(seo,separators=(',',':')),'n':now_iso(),'s':site_id})
        push_history(db,site_id,u['id'],'SEO_EDIT'); create_revision(db,site_id,u['id'],'AUTOSAVE','SEO edit')
    return {'seo':seo,'metadata':metadata_for_page({**site,'seo_json':json.dumps(seo)},page)}


@router.get('/sites/{site_id}/seo/settings')
def get_seo_settings(site_id: str, request: Request):
    u=_user(request)
    with SessionLocal() as db: site=_owned_site(db,u['id'],site_id)
    return {'seo':seo_document(site)}


@router.patch('/sites/{site_id}/seo/settings')
def patch_seo_settings(site_id: str, payload: SeoSitePatch, request: Request):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        site=_owned_site(db,u['id'],site_id); ensure_history(db,site,u['id']); seo=seo_document(site); site_cfg=seo['site']; entity=seo['entity']
        d=payload.model_dump(exclude_none=True)
        for key in ('site_title','description','business_type','primary_topic','primary_location','language','indexable','follow_links'):
            if key in d: site_cfg[key]=d[key] if isinstance(d[key],bool) else clean_text(d[key],500)
        for key in ('business_name','business_description','business_type','primary_location','telephone','email'):
            if key in d: entity[key]=clean_text(d[key],700)
        address=dict(entity.get('address') or {})
        for key in ('street','locality','region','postal_code','country'):
            if key in d: address[key]=clean_text(d[key],180)
        if address: entity['address']=address
        for key in ('service_area','opening_hours'):
            if key in d: entity[key]=[clean_text(x,180) for x in d[key] if clean_text(x,180)]
        if 'social_profiles' in d:
            links=normalize_footer_links([{'url':raw} for raw in d['social_profiles']])
            seo['footer_links']=links
            entity['social_profiles']=[x['url'] for x in links if x.get('url','').startswith(('https://','http://'))]
        ext=seo.setdefault('external_destinations',{})
        for key in ('app_url','login_url','signup_url','booking_url','checkout_url','customer_portal_url'):
            if key in d:
                if d[key] in {None,''}: ext.pop(key,None)
                else: ext[key]=validate_canonical(d[key])
        if d.get('og_image_asset_id'):
            get_asset(d['og_image_asset_id'],user_id=u['id'],site_id=site_id); site_cfg['og_image_asset_id']=d['og_image_asset_id']
        if 'llms_txt' in d: seo['experimental']['llms_txt']=bool(d['llms_txt'])
        if 'indexnow_enabled' in d: seo['indexnow']['enabled']=bool(d['indexnow_enabled'])
        db.execute(text('UPDATE sites SET seo_json=:j,seo_schema_version=2,seo_updated_at=:a,updated_at=:a WHERE id=:s'),{'j':json.dumps(seo,separators=(',',':')),'a':now_iso(),'s':site_id})
        db.execute(text('DELETE FROM chatbot_answer_cache WHERE site_id=:s'),{'s':site_id})
        push_history(db,site_id,u['id'],'SEO_SITE_EDIT'); create_revision(db,site_id,u['id'],'AUTOSAVE','SEO & discoverability settings')
    return {'seo':seo}


class FooterLinksPatch(BaseModel):
    links:list[dict|str]=Field(default_factory=list,max_length=8)


@router.get('/sites/{site_id}/footer-links')
def get_footer_links(site_id: str, request: Request):
    u=_user(request)
    with SessionLocal() as db: site=_owned_site(db,u['id'],site_id)
    return {'items':seo_document(site).get('footer_links') or []}


@router.put('/sites/{site_id}/footer-links')
def put_footer_links(site_id: str, payload: FooterLinksPatch, request: Request):
    u=_user(request,True); links=normalize_footer_links(payload.links)
    with SessionLocal.begin() as db:
        site=_owned_site(db,u['id'],site_id); ensure_history(db,site,u['id']); seo=seo_document(site)
        seo['footer_links']=links
        seo['entity']['social_profiles']=[x['url'] for x in links if x.get('url','').startswith(('https://','http://'))]
        db.execute(text('UPDATE sites SET seo_json=:j,seo_schema_version=2,seo_updated_at=:a,updated_at=:a WHERE id=:s'),{'j':json.dumps(seo,separators=(',',':')),'a':now_iso(),'s':site_id})
        db.execute(text('DELETE FROM chatbot_answer_cache WHERE site_id=:s'),{'s':site_id})
        push_history(db,site_id,u['id'],'FOOTER_LINKS_EDIT'); create_revision(db,site_id,u['id'],'AUTOSAVE','Footer link settings')
    return {'items':links}


@router.get('/sites/{site_id}/link-platform')
def preview_link_platform(site_id: str, url: str, request: Request):
    u=_user(request)
    with SessionLocal() as db: _owned_site(db,u['id'],site_id)
    return detect_link_platform(url)


class SeoAiAssistIn(BaseModel):
    page:str=Field(default='home',max_length=80)


@router.post('/sites/{site_id}/seo/ai-assist')
def seo_ai_assist(site_id: str, payload: SeoAiAssistIn, request: Request):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        site=_owned_site(db,u['id'],site_id); page=_page_allowed(site,payload.page); seo=seo_document(site)
        html=render_draft(site,page); page_text=' '.join(BeautifulSoup(html,'html.parser').stripped_strings)[:6000]
        ctx={
            'business_name':(seo.get('entity') or {}).get('business_name') or site.get('business_name'),
            'business_type':(seo.get('entity') or {}).get('business_type') or (seo.get('site') or {}).get('business_type'),
            'primary_topic':(seo.get('site') or {}).get('primary_topic'),
            'primary_location':(seo.get('site') or {}).get('primary_location'),
            'description':(seo.get('site') or {}).get('description') or site.get('description'),
            'page':page,'page_text':page_text,
        }
        try: result=ai_seo_metadata(ctx,user_id=u['id'],site_id=site_id)
        except Exception as exc:
            record_operational_event('AI','AI_SEO_UNAVAILABLE',safe_exception_summary(exc),severity='WARNING',user_id=u['id'],site_id=site_id,dedupe_minutes=2)
            raise HTTPException(502,detail={'code':'AI_SEO_UNAVAILABLE','message':'AI SEO assistance is temporarily unavailable. Please try again.'})
        cost=max(1,int(get_plan(u['plan']).get('ai_edit_cost',2)))
        debit=debit_wallet(db,u['id'],u['plan'],cost,'AI_SEO_ASSIST',request.headers.get('Idempotency-Key'))
    return {**result,'credit_cost':cost,'credits':debit}


@router.get('/sites/{site_id}/seo/health')
def seo_health_endpoint(site_id: str, request: Request):
    u=_user(request)
    with SessionLocal() as db: site=_owned_site(db,u['id'],site_id)
    rendered={}
    allowed=_page_keys(site)
    for page in allowed:
        rendered[page]=render_draft(site,page)
    return seo_health(site,rendered)


def _hex_rgb(value: str):
    m=re.fullmatch(r'#([0-9A-Fa-f]{6})',str(value or '').strip())
    if not m: return None
    h=m.group(1); return tuple(int(h[i:i+2],16)/255 for i in (0,2,4))


def _contrast_ratio(fg: str, bg: str) -> float|None:
    a=_hex_rgb(fg); b=_hex_rgb(bg)
    if not a or not b: return None
    def lum(rgb):
        vals=[v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4 for v in rgb]
        return .2126*vals[0]+.7152*vals[1]+.0722*vals[2]
    l1,l2=lum(a),lum(b); hi,lo=max(l1,l2),min(l1,l2)
    return (hi+.05)/(lo+.05)


@router.get('/sites/{site_id}/accessibility-check')
def accessibility_check(site_id: str, request: Request, page: str='home'):
    u=_user(request)
    with SessionLocal() as db: site=_owned_site(db,u['id'],site_id)
    html=render_draft(site,_page_allowed(site,page)); soup=BeautifulSoup(html,'html.parser'); warnings=[]
    brand=_brand_dict(site); bg=brand.get('background'); body=brand.get('body'); heading=brand.get('heading')
    if bg and body:
        ratio=_contrast_ratio(body,bg)
        if ratio is not None and ratio < 4.5: warnings.append({'type':'low_contrast','target':None,'message':f'Brand body text contrast is {ratio:.2f}:1; aim for at least 4.5:1.'})
    if bg and heading:
        ratio=_contrast_ratio(heading,bg)
        if ratio is not None and ratio < 3.0: warnings.append({'type':'low_contrast','target':None,'message':f'Brand heading contrast is {ratio:.2f}:1; aim for at least 3:1 for large text.'})
    for tag in soup.select('[style]'):
        style=str(tag.get('style') or ''); cm=re.search(r'(?:^|;)\s*color\s*:\s*(#[0-9A-Fa-f]{6})',style); bm=re.search(r'(?:^|;)\s*background(?:-color)?\s*:\s*(#[0-9A-Fa-f]{6})',style)
        if cm and bm:
            ratio=_contrast_ratio(cm.group(1),bm.group(1))
            if ratio is not None and ratio < 3.0: warnings.append({'type':'low_contrast','target':tag.get('data-zylora-id'),'message':f'This element has low foreground/background contrast ({ratio:.2f}:1).'})
    for img in soup.find_all('img'):
        if not img.has_attr('alt') or (not img.get('alt','').strip() and img.get('data-zylora-decorative')!='true'): warnings.append({'type':'missing_alt','target':img.get('data-zylora-id'),'message':'Meaningful image is missing alt text.'})
    last=0
    for h in soup.find_all(re.compile(r'^h[1-6]$')):
        lvl=int(h.name[1]);
        if last and lvl>last+1: warnings.append({'type':'heading_hierarchy','target':h.get('data-zylora-id'),'message':f'Heading jumps from H{last} to H{lvl}.'})
        last=lvl
    for a in soup.find_all('a'):
        if not a.get_text(' ',strip=True) and not a.get('aria-label'): warnings.append({'type':'empty_link','target':a.get('data-zylora-id'),'message':'Link has no accessible name.'})
    for field in soup.find_all(['input','textarea','select']):
        fid=field.get('id'); labelled=bool(field.get('aria-label') or (fid and soup.find('label',attrs={'for':fid})))
        if not labelled: warnings.append({'type':'unlabeled_field','target':field.get('data-zylora-id'),'message':'Form field needs a label.'})
    return {'warnings':warnings,'count':len(warnings)}
