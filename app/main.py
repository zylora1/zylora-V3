from __future__ import annotations
from contextlib import asynccontextmanager
import asyncio
import time
from html import escape
from pathlib import Path
from datetime import datetime, timezone
import json
import re
from urllib.parse import urlparse

from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import FileResponse, HTMLResponse, PlainTextResponse, Response, RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from .api import router
from .api_extended import router as extended_router
from .api_gapfixes import router as gap_router
from .api_marketplace_support import router as marketplace_support_router, public_router as marketplace_public_router
from .api_editor import router as editor_router, public_router as editor_public_router, apply_brand_html, apply_page_seo
from .api_importer import router as importer_router
from .api_operations import router as operations_router, scan_stale_payment_orders, reconcile_due_payment_cases
from .api_sales_assistant import router as sales_assistant_router
from .sales_assistant import prune_assistant_data
from .notifications import retry_due_deliveries
from .operations import record_operational_event, prune_old_analytics, safe_exception_summary
from .config import ROOT, settings, validate_production_settings
from .security import current_user
from .template_catalogue import public_templates
from .db import SessionLocal, migrate
from .bootstrap import bootstrap_super_admin
from .templates import BY_SLUG, TEMPLATES, render_template, render_template_page
from .plans import all_plans
from .billing_regions import offer_for_request
from .structured_editor import apply_document, instrument_editable_html, resolve_document_links
from .media import media_url, validate_media_storage_config
from .link_icons import apply_footer_links_html, links_from_seo_json
from .seo_engine import (active_custom_domain, all_indexable_pages, apply_seo_html, canonical_for_page, indexnow_key_matches,
    page_key_for_path, page_path, published_site_view, resolve_redirect, site_llms, site_origin, site_robots, site_sitemap,
    seo_document, structured_data_for_page)

def _public_base_url() -> str:
    base=settings.app_url.rstrip('/')
    parsed=urlparse(base)
    if settings.app_env.lower() == 'production':
        host=(parsed.hostname or '').lower()
        if parsed.scheme not in {'http','https'} or not host or host in {'localhost','127.0.0.1','0.0.0.0','testserver'} or host.endswith('.example'):
            raise RuntimeError('APP_URL must be set to the real public Zylora origin before starting in production')
        if parsed.scheme != 'https':
            raise RuntimeError('APP_URL must use https in production')
    return base

async def _maintenance_loop():
    # Database-claimed retries are safe across multiple web workers: only one worker can
    # transition a due FAILED delivery into RETRYING. Payment recovery scans are idempotent.
    cycles=0
    while True:
        await asyncio.sleep(60); cycles+=1
        try: await asyncio.to_thread(retry_due_deliveries,25)
        except Exception as exc: record_operational_event('NOTIFICATIONS','RETRY_LOOP_FAILED',safe_exception_summary(exc),severity='ERROR')
        try:
            await asyncio.to_thread(scan_stale_payment_orders)
            await asyncio.to_thread(reconcile_due_payment_cases,25)
        except Exception as exc: record_operational_event('PAYMENTS','RECOVERY_SCAN_FAILED',safe_exception_summary(exc),severity='ERROR')
        if cycles%60==0:
            try:
                await asyncio.to_thread(prune_old_analytics)
                await asyncio.to_thread(prune_assistant_data)
            except Exception as exc: record_operational_event('ANALYTICS','RETENTION_PRUNE_FAILED',safe_exception_summary(exc),severity='WARNING')

@asynccontextmanager
async def lifespan(app: FastAPI):
    _public_base_url()
    validate_production_settings()
    migrate()
    bootstrap_super_admin()
    validate_media_storage_config()
    maintenance=asyncio.create_task(_maintenance_loop())
    try:
        yield
    finally:
        maintenance.cancel()
        try: await maintenance
        except asyncio.CancelledError: pass

app=FastAPI(title='Zylora',docs_url='/api/docs' if settings.app_env!='production' else None,redoc_url=None,lifespan=lifespan)
_admin_origin=settings.super_admin_app_url.rstrip('/') if settings.super_admin_app_url.startswith(('https://','http://')) else ''
if _admin_origin:
    app.add_middleware(CORSMiddleware,allow_origins=[_admin_origin],allow_credentials=True,allow_methods=['GET','POST','PUT','PATCH','DELETE','OPTIONS'],allow_headers=['Content-Type','X-CSRF-Token'])
app.include_router(router)
app.include_router(extended_router)
app.include_router(gap_router)
app.include_router(marketplace_support_router)
app.include_router(marketplace_public_router)
app.include_router(editor_router)
app.include_router(editor_public_router)
app.include_router(importer_router)
app.include_router(operations_router)
app.include_router(sales_assistant_router)
app.mount('/static',StaticFiles(directory=ROOT/'static'),name='static')

@app.get('/template-assets/{slug}/{asset_path:path}',include_in_schema=False)
def template_asset(slug:str,asset_path:str):
    if slug not in {str(t.get('slug')) for t in public_templates()}: raise HTTPException(404,'Template asset not found')
    project=(ROOT/'template_projects'/slug).resolve()
    # Current template projects store portable assets at <project>/assets. Keep a
    # backwards-compatible public/assets fallback for older project layouts.
    for rel in (Path('assets'),Path('public')/'assets'):
        base=(project/rel).resolve(); target=(base/asset_path).resolve()
        if base in target.parents and target.is_file():
            return FileResponse(target)
    raise HTTPException(404,'Template asset not found')

def _apply_security_headers(request: Request, response: Response) -> Response:
    response.headers.setdefault('X-Content-Type-Options','nosniff')
    response.headers.setdefault('Referrer-Policy','strict-origin-when-cross-origin')
    response.headers.setdefault('X-Frame-Options','SAMEORIGIN')
    response.headers.setdefault('Content-Security-Policy',"frame-ancestors 'self'")
    response.headers.setdefault('Permissions-Policy','camera=(), microphone=(), geolocation=()')
    if request.url.path.startswith('/api/'):
        response.headers.setdefault('Cache-Control','no-store')
    if settings.app_env.lower()=='production':
        response.headers.setdefault('Strict-Transport-Security','max-age=31536000; includeSubDomains')
    return response

@app.middleware('http')
async def operational_monitoring(request: Request, call_next):
    started=time.perf_counter()
    try:
        response=await call_next(request)
    except Exception as exc:
        if not request.url.path.startswith(('/static/','/template-assets/')):
            record_operational_event('APPLICATION','UNHANDLED_EXCEPTION',safe_exception_summary(exc),severity='CRITICAL',metadata={'path':request.url.path,'method':request.method})
        raise
    elapsed_ms=round((time.perf_counter()-started)*1000,1)
    if response.status_code>=500 and not request.url.path.startswith(('/static/','/template-assets/')):
        record_operational_event('HTTP','SERVER_ERROR_RESPONSE',f'{request.method} {request.url.path} returned {response.status_code}',severity='ERROR',metadata={'status':response.status_code,'elapsed_ms':elapsed_ms})
    elif request.url.path.startswith('/api/') and elapsed_ms>=5000:
        record_operational_event('PERFORMANCE','SLOW_API_REQUEST',f'{request.method} {request.url.path} took {elapsed_ms}ms',severity='WARNING',metadata={'elapsed_ms':elapsed_ms},dedupe_minutes=15)
    response.headers.setdefault('Server-Timing',f'app;dur={elapsed_ms}')
    return response

@app.middleware('http')
async def security_headers(request: Request, call_next):
    response=await call_next(request)
    return _apply_security_headers(request,response)


def _with_public_runtime(html: str, site_id: str) -> str:
    runtime=f'''<script>window.ZYLORA_SITE_ID={site_id!r};</script><script src="/static/public-runtime.js"></script>'''
    return html.replace('</body>',runtime+'</body>')


def _site_not_found(site: dict, custom_host: str|None=None) -> HTMLResponse:
    name=escape(str(site.get('business_name') or site.get('name') or 'Website'))
    accent=str(site.get('accent') or BY_SLUG.get(str(site.get('template_slug') or ''),{}).get('accent') or '#6f7bff')
    if not re.fullmatch(r'#[0-9A-Fa-f]{6}',accent): accent='#6f7bff'
    home='/' if custom_host else f"/s/{escape(str(site.get('slug') or ''))}"
    body=f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found | {name}</title><meta name="robots" content="noindex,nofollow"><style>:root{{--accent:{accent}}}*{{box-sizing:border-box}}body{{margin:0;min-height:100vh;display:grid;place-items:center;background:#0b0d10;color:#f7f8fb;font:16px/1.5 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}}main{{width:min(760px,calc(100% - 40px));padding:9vw 0}}.eyebrow{{font:700 12px ui-monospace,monospace;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)}}h1{{font-size:clamp(56px,11vw,128px);line-height:.86;letter-spacing:-.07em;margin:18px 0 26px}}p{{max-width:42rem;color:#aeb6c4;font-size:19px}}a{{display:inline-block;margin-top:22px;color:#071016;background:var(--accent);padding:14px 18px;text-decoration:none;font-weight:800;border-radius:4px}}a:focus-visible{{outline:3px solid #fff;outline-offset:4px}}</style></head><body><main><div class="eyebrow">{name} · 404</div><h1>That page isn’t here.</h1><p>The address may have changed or the page may no longer be available. Use the homepage to continue.</p><a href="{home}">Return to homepage</a></main></body></html>'''
    return HTMLResponse(body,status_code=404,headers={'Cache-Control':'no-store','X-Robots-Tag':'noindex, nofollow'})



def _render_live_site_path(site: dict, path: str, *, request_host: str|None=None):
    clean=path.strip('/')
    # Public SEO/content and routing are derived from the immutable published snapshot, not draft edits.
    render_site=published_site_view(site)
    origin=site_origin(render_site,custom_host=request_host if request_host else None).rstrip('/')
    if clean=='robots.txt': return PlainTextResponse(site_robots(render_site,custom_host=request_host),headers={'Cache-Control':'public,max-age=300'})
    if clean=='sitemap.xml': return Response(site_sitemap(render_site,custom_host=request_host),media_type='application/xml',headers={'Cache-Control':'public,max-age=300'})
    if clean=='llms.txt': return PlainTextResponse(site_llms(render_site,custom_host=request_host),headers={'Cache-Control':'public,max-age=300'})
    if re.fullmatch(r'[A-Za-z0-9-]{8,128}\.txt',clean):
        key=clean[:-4]
        # IndexNow keys are operational state and may be generated just after a publish snapshot.
        if indexnow_key_matches(site,key): return PlainTextResponse(key,headers={'Cache-Control':'public,max-age=3600'})
    redir=resolve_redirect(site['id'],'/'+clean) if clean else None
    if redir:
        target,status=redir
        return RedirectResponse(origin+target,status_code=status)
    page_key=page_key_for_path(render_site,clean,published_only=True)
    if page_key is None: return _site_not_found(render_site,request_host)
    try: html=render_template_page(render_site['template_slug'],render_site,'' if page_key=='home' else page_key)
    except KeyError: return _site_not_found(render_site,request_host)
    html=instrument_editable_html(html,page_key,render_site['template_slug'])
    html=apply_brand_html(html,render_site)
    def public_link(target: str) -> str:
        pth=page_path(render_site,target)
        if request_host: return pth or '/'
        return f"/s/{site['slug']}"+(pth or '')
    html=apply_document(html,site.get('published_structure_json'),page_key,asset_resolver=media_url,link_resolver=public_link)
    html=resolve_document_links(html,public_link)
    html=apply_footer_links_html(html,links_from_seo_json(render_site.get('seo_json')))
    html=apply_seo_html(html,render_site,page_key,custom_host=request_host)
    return HTMLResponse(_with_public_runtime(html,site['id']),headers={'Cache-Control':'public,max-age=60,stale-while-revalidate=300'})


@app.middleware('http')
async def custom_domain_runtime(request: Request, call_next):
    path=request.url.path
    if path.startswith('/api/') or path.startswith('/static/') or path=='/manifest.webmanifest':
        return await call_next(request)
    host=(request.headers.get('host') or '').split(':')[0].lower()
    app_host=(urlparse(settings.app_url).hostname or '').lower()
    local_hosts={app_host,'127.0.0.1','localhost','testserver',''}
    if host not in local_hosts:
        with SessionLocal() as db:
            site=db.execute(text("""SELECT s.* FROM custom_domains d JOIN sites s ON s.id=d.site_id WHERE lower(d.hostname)=:h AND d.status='ACTIVE' AND d.ssl_status='ACTIVE' AND s.status='LIVE' LIMIT 1"""),{'h':host}).mappings().first()
        if site:
            site=dict(site)
            canonical_host=active_custom_domain(site['id'])
            if canonical_host and canonical_host != host:
                target=f"https://{canonical_host}{path}"
                if request.url.query: target += '?' + request.url.query
                return _apply_security_headers(request,RedirectResponse(target,status_code=308))
            return _apply_security_headers(request,_render_live_site_path(site,path,request_host=host))
    return await call_next(request)


def _landing_html(request: Request) -> str:
    raw=(ROOT/'static'/'index.html').read_text(encoding='utf-8')
    starter=offer_for_request(request,plan='STARTER',display_only=True)
    growth=offer_for_request(request,plan='GROWTH',display_only=True)
    def _display(offer):
        return (f"₹{offer['amount_minor']//100:,}" if offer['currency']=='INR' else f"US${offer['amount_minor']//100}")
    note='India regional price · INR billing' if starter['billing_region']=='INDIA' else 'International regional price · USD billing'
    values={
        '{{APP_URL}}':_public_base_url(),
        '{{STARTER_REGIONAL_PRICE}}':_display(starter),
        '{{GROWTH_REGIONAL_PRICE}}':_display(growth),
        '{{REGIONAL_PRICE_NOTE}}':note,
    }
    for key,value in values.items(): raw=raw.replace(key,str(value))
    return raw

@app.get('/api/health',include_in_schema=False)
def health():
    with SessionLocal() as db:
        db.execute(text('SELECT 1')).scalar_one()
    return {'status':'ok'}

@app.get('/',include_in_schema=False)
def home(request: Request): return HTMLResponse(_landing_html(request))
@app.get('/admin',include_in_schema=False)
def admin_entry(request: Request):
    user=current_user(request)
    if user.get('role')!='SUPER_ADMIN': raise HTTPException(403,'Admin only')
    if settings.super_admin_app_url: return RedirectResponse(settings.super_admin_app_url,status_code=302)
    return HTMLResponse('<!doctype html><title>Zylora Admin</title><h1>SUPER_ADMIN_APP_URL is not configured.</h1>',status_code=503)
@app.get('/login',include_in_schema=False)
def login(): return FileResponse(ROOT/'static'/'login.html')
@app.get('/signup',include_in_schema=False)
def signup(): return FileResponse(ROOT/'static'/'signup.html')
@app.get('/forgot-password',include_in_schema=False)
def forgot_password(): return FileResponse(ROOT/'static'/'forgot-password.html')
@app.get('/reset-password',include_in_schema=False)
def reset_password(): return FileResponse(ROOT/'static'/'reset-password.html')
@app.get('/verify-email',include_in_schema=False)
def verify_email_page(): return FileResponse(ROOT/'static'/'verify-email.html')
@app.get('/accept-transfer',include_in_schema=False)
def accept_transfer_page(): return FileResponse(ROOT/'static'/'accept-transfer.html')
@app.get('/choose-plan',include_in_schema=False)
def choose_plan(): return FileResponse(ROOT/'static'/'choose-plan.html')
@app.get('/dashboard',include_in_schema=False)
def dashboard(request: Request):
    if request.cookies.get('zylora_session'):
        try:
            if current_user(request).get('role')=='SUPER_ADMIN': return RedirectResponse(settings.super_admin_app_url or '/admin',status_code=302)
        except HTTPException: pass
    return FileResponse(ROOT/'static'/'dashboard.html')
@app.get('/ai-create',include_in_schema=False)
def ai_create(): return FileResponse(ROOT/'static'/'ai-create.html')
@app.get('/legal',include_in_schema=False)
def legal(): return FileResponse(ROOT/'static'/'legal.html')
@app.get('/terms',include_in_schema=False)
def terms(): return FileResponse(ROOT/'static'/'terms.html')
@app.get('/privacy',include_in_schema=False)
def privacy(): return FileResponse(ROOT/'static'/'privacy.html')
@app.get('/editor/{site_id}',include_in_schema=False)
def editor(site_id:str): return FileResponse(ROOT/'static'/'editor.html')
@app.get('/freelancers',include_in_schema=False)
def freelancers_page():
    raw=(ROOT/'static'/'freelancers.html').read_text(encoding='utf-8')
    return HTMLResponse(raw.replace('{{APP_URL}}',_public_base_url()))

@app.get('/freelancers/{slug}',include_in_schema=False)
def freelancer_profile_page(slug:str):
    with SessionLocal() as db:
        profile=db.execute(text("SELECT * FROM freelancer_profiles WHERE slug=:s AND status='APPROVED' LIMIT 1"),{'s':slug}).mappings().first()
    if not profile: raise HTTPException(404,'Freelancer profile not found')
    profile=dict(profile); base=_public_base_url().rstrip('/'); canonical=f'{base}/freelancers/{slug}'
    name=str(profile.get('display_name') or profile.get('full_name') or 'Zylora freelancer').strip()[:120]
    description=' '.join(str(profile.get('description') or profile.get('bio') or f'Approved independent Zylora freelancer: {name}.').split())[:260]
    try:
        skills=[str(x).strip() for x in json.loads(profile.get('skills_json') or '[]') if str(x).strip()][:30]
    except Exception:
        skills=[]
    image=str(profile.get('profile_photo_url') or '').strip()
    if not image.startswith(('https://','http://','/')): image=''
    if image.startswith('/'): image=base+image
    person={'@type':'Person','@id':canonical+'#person','name':name,'url':canonical,'description':description}
    if skills: person['knowsAbout']=skills
    if image: person['image']=image
    if profile.get('location'): person['homeLocation']={'@type':'Place','name':str(profile['location'])[:160]}
    schema={'@context':'https://schema.org','@type':'ProfilePage','@id':canonical+'#profile','url':canonical,'name':f'{name} — Zylora freelancer','description':description,'mainEntity':person,'isPartOf':{'@id':base+'/#website'}}
    raw=(ROOT/'static'/'freelancer-profile.html').read_text(encoding='utf-8')
    title=f'{name} — Website Freelancer | Zylora'
    schema_json=json.dumps(schema,ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
    raw=raw.replace('<title>Freelancer — Zylora</title>',f'<title>{escape(title)}</title>',1)
    raw=raw.replace('<meta name="description" content="Approved Zylora freelancer profile.">',f'<meta name="description" content="{escape(description,quote=True)}"><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><link rel="canonical" href="{escape(canonical,quote=True)}"><meta property="og:type" content="profile"><meta property="og:title" content="{escape(title,quote=True)}"><meta property="og:description" content="{escape(description,quote=True)}"><meta property="og:url" content="{escape(canonical,quote=True)}">'+(f'<meta property="og:image" content="{escape(image,quote=True)}">' if image else '')+f'<meta name="twitter:card" content="{"summary_large_image" if image else "summary"}"><meta name="twitter:title" content="{escape(title,quote=True)}"><meta name="twitter:description" content="{escape(description,quote=True)}">'+(f'<meta name="twitter:image" content="{escape(image,quote=True)}">' if image else '')+f'<script type="application/ld+json">{schema_json}</script>',1)
    return HTMLResponse(raw,headers={'Cache-Control':'public,max-age=300'})

@app.get('/templates',include_in_schema=False)
def template_catalogue():
    raw=(ROOT/'static'/'templates.html').read_text(encoding='utf-8')
    return HTMLResponse(raw.replace('{{APP_URL}}',_public_base_url()))

@app.get('/template-preview/{slug}',response_class=HTMLResponse,include_in_schema=False)
def template_preview(slug:str):
    public_slugs={t['slug'] for t in TEMPLATES}
    if slug not in public_slugs: raise HTTPException(404,'Template not found')
    return HTMLResponse(render_template(slug,{}),headers={'X-Robots-Tag':'noindex, nofollow','Cache-Control':'public,max-age=300'})

@app.get('/template-preview/{slug}/{page_slug}',response_class=HTMLResponse,include_in_schema=False)
def template_preview_page(slug:str,page_slug:str):
    public_slugs={t['slug'] for t in TEMPLATES}
    if slug not in public_slugs: raise HTTPException(404,'Template not found')
    try: return HTMLResponse(render_template_page(slug,{'slug':'preview'},page_slug),headers={'X-Robots-Tag':'noindex, nofollow','Cache-Control':'public,max-age=300'})
    except KeyError: raise HTTPException(404,'Template page not found')

@app.get('/s/{slug}',response_class=HTMLResponse,include_in_schema=False)
def public_site(slug:str):
    with SessionLocal() as db:
        s=db.execute(text("SELECT * FROM sites WHERE slug=:s AND status='LIVE'"),{'s':slug}).mappings().first()
    if not s: raise HTTPException(404,'Site not found')
    return _render_live_site_path(dict(s),'')

@app.get('/s/{slug}/{path:path}',response_class=HTMLResponse,include_in_schema=False)
def public_site_path(slug:str,path:str):
    with SessionLocal() as db:
        s=db.execute(text("SELECT * FROM sites WHERE slug=:s AND status='LIVE'"),{'s':slug}).mappings().first()
    if not s: raise HTTPException(404,'Site not found')
    return _render_live_site_path(dict(s),path)

@app.get('/blog',response_class=HTMLResponse,include_in_schema=False)
def platform_blog():
    with SessionLocal() as db:
        rows=[dict(r) for r in db.execute(text("SELECT title,slug,excerpt,published_at,updated_at FROM blog_posts WHERE site_id IS NULL AND status='PUBLISHED' AND indexable=1 ORDER BY published_at DESC")).mappings().all()]
    base=_public_base_url().rstrip('/'); canonical=base+'/blog'; og=base+'/static/og-zylora.webp'
    cards=''.join(f'<article><small>{escape((r["published_at"] or "")[:10])}</small><h2><a href="/blog/{escape(r["slug"])}">{escape(r["title"])}</a></h2><p>{escape(r["excerpt"])}</p></article>' for r in rows) or '<section class="empty"><p class="kicker">No filler</p><h2>The editorial library starts when there is something useful to publish.</h2><p>Product notes and practical guides will appear here as they are ready.</p></section>'
    schema={'@context':'https://schema.org','@graph':[{'@type':'Blog','@id':canonical+'#blog','url':canonical,'name':'Zylora Blog','description':'Practical guides on website design, AI-assisted editing, conversion, SEO and digital growth for small businesses.','publisher':{'@id':base+'/#organization'}},{'@type':'CollectionPage','@id':canonical+'#webpage','url':canonical,'name':'Zylora Blog — Website design, AI and local business growth','isPartOf':{'@id':base+'/#website'},'about':{'@id':base+'/#organization'}}]}
    schema_json=json.dumps(schema,ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
    return HTMLResponse(f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Zylora Blog — Website design, AI and local business growth</title><meta name="description" content="Practical guides on websites, AI-assisted editing, conversion, SEO and digital growth for small businesses."><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><link rel="canonical" href="{canonical}"><meta property="og:type" content="website"><meta property="og:title" content="Zylora Blog — Website design, AI and local business growth"><meta property="og:description" content="Practical guides on websites, AI-assisted editing, conversion, SEO and digital growth for small businesses."><meta property="og:url" content="{canonical}"><meta property="og:image" content="{og}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Zylora Blog — Website design, AI and local business growth"><meta name="twitter:description" content="Practical website, AI, conversion and SEO guidance for small businesses."><meta name="twitter:image" content="{og}"><script type="application/ld+json">{schema_json}</script><link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"><style>*{{box-sizing:border-box}}body{{margin:0;background:#f5f3ee;color:#121312;font:16px/1.6 Inter,Arial,sans-serif}}header{{height:78px;display:flex;align-items:center;justify-content:space-between;padding:0 5vw;border-bottom:1px solid #cbc9c2}}header a{{color:inherit;text-decoration:none}}.brand{{font:700 22px 'Space Grotesk';letter-spacing:-.06em}}main{{max-width:1240px;margin:auto;padding:9vw 5vw}}.kicker{{font-size:11px;text-transform:uppercase;letter-spacing:.14em;font-weight:600}}h1{{font:500 clamp(64px,10vw,142px)/.85 'Space Grotesk';letter-spacing:-.065em;margin:18px 0 90px;max-width:1100px}}article{{border-top:1px solid #cbc9c2;padding:34px 0;display:grid;grid-template-columns:160px 1fr 1fr;gap:26px}}article h2{{font:500 34px/1 'Space Grotesk';letter-spacing:-.04em;margin:0}}article p{{margin:0;color:#696a65}}article a{{color:inherit}}.empty{{border-top:1px solid #cbc9c2;padding-top:36px;max-width:860px}}.empty h2{{font:500 clamp(38px,5vw,70px)/.95 'Space Grotesk';letter-spacing:-.05em;margin:15px 0}}.empty>p:last-child{{color:#696a65}}@media(max-width:700px){{article{{grid-template-columns:1fr}}main{{padding-top:90px}}}}</style></head><body><header><a class="brand" href="/">Zylora</a><a href="/">Back to product</a></header><main><p class="kicker">Resources</p><h1>Ideas for a better web presence.</h1>{cards}</main></body></html>''',headers={'Cache-Control':'public,max-age=300'})

@app.get('/blog/{post_slug}',response_class=HTMLResponse,include_in_schema=False)
def platform_blog_post(post_slug:str):
    with SessionLocal() as db:
        post=db.execute(text("SELECT * FROM blog_posts WHERE site_id IS NULL AND slug=:s AND status='PUBLISHED' AND indexable=1"),{'s':post_slug}).mappings().first()
    if not post: raise HTTPException(404,'Post not found')
    post=dict(post); base=_public_base_url().rstrip('/'); title=post.get('seo_title') or post['title']; desc=post.get('seo_description') or post['excerpt']; canonical=f'{base}/blog/{post["slug"]}'
    image=base+'/static/og-zylora.webp'
    asset_id=post.get('og_image_asset_id') or post.get('featured_image_asset_id')
    if asset_id:
        candidate=media_url(str(asset_id))
        if candidate: image=(base+candidate) if candidate.startswith('/') else candidate
    schema={'@context':'https://schema.org','@type':'BlogPosting','@id':canonical+'#article','url':canonical,'mainEntityOfPage':canonical,'headline':post['title'],'description':desc,'datePublished':post.get('published_at') or post.get('created_at'),'dateModified':post.get('updated_at') or post.get('published_at') or post.get('created_at'),'publisher':{'@id':base+'/#organization'},'image':image}
    if post.get('author_name'): schema['author']={'@type':'Person','name':str(post['author_name'])[:160]}
    schema_json=json.dumps(schema,ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
    paras=''.join(f'<p>{escape(p.strip())}</p>' for p in str(post['content']).split('\n\n') if p.strip())
    return HTMLResponse(f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{escape(title)}</title><meta name="description" content="{escape(desc,quote=True)}"><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><link rel="canonical" href="{escape(canonical,quote=True)}"><meta property="og:type" content="article"><meta property="og:title" content="{escape(title,quote=True)}"><meta property="og:description" content="{escape(desc,quote=True)}"><meta property="og:url" content="{escape(canonical,quote=True)}"><meta property="og:image" content="{escape(image,quote=True)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{escape(title,quote=True)}"><meta name="twitter:description" content="{escape(desc,quote=True)}"><meta name="twitter:image" content="{escape(image,quote=True)}"><script type="application/ld+json">{schema_json}</script><link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"><style>*{{box-sizing:border-box}}body{{font:17px/1.8 Inter,Arial,sans-serif;margin:0;background:#f5f3ee;color:#121312}}main{{max-width:860px;margin:auto;padding:8vw 5vw 12vw}}h1{{font:500 clamp(52px,8vw,96px)/.93 'Space Grotesk',Inter,sans-serif;letter-spacing:-.055em;margin:60px 0 24px}}.deck{{font-size:22px;line-height:1.55;color:#5e605c;margin-bottom:60px}}article p{{max-width:760px}}a{{color:inherit;text-underline-offset:3px}}</style></head><body><main><a href="/blog">← Zylora Blog</a><h1>{escape(post['title'])}</h1><p class="deck">{escape(post['excerpt'])}</p><article>{paras}</article></main></body></html>''',headers={'Cache-Control':'public,max-age=300'})

SITEMAP_URL_LIMIT=50_000
# Sitemap protocol limit is 50 MB uncompressed as well as 50,000 URLs.
# Keep a small safety margin for XML declarations/namespaces.
SITEMAP_BYTE_LIMIT=49*1024*1024

def _normalise_lastmod(value) -> str | None:
    if value in {None,''}: return None
    raw=str(value).strip()
    if not raw: return None
    # SQLite defaults may use a space separator while application timestamps use ISO 8601.
    if re.fullmatch(r'\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}(?:\.\d+)?',raw):
        raw=raw.replace(' ','T',1)+'+00:00'
    if raw.endswith('Z'): raw=raw[:-1]+'+00:00'
    try:
        dt=datetime.fromisoformat(raw)
        if dt.tzinfo is None: dt=dt.replace(tzinfo=timezone.utc)
        return dt.astimezone(timezone.utc).isoformat(timespec='seconds').replace('+00:00','Z')
    except ValueError:
        return None

def _latest_lastmod(*values) -> str | None:
    parsed=[]
    for value in values:
        norm=_normalise_lastmod(value)
        if norm:
            parsed.append(datetime.fromisoformat(norm.replace('Z','+00:00')))
    if not parsed: return None
    return max(parsed).astimezone(timezone.utc).isoformat(timespec='seconds').replace('+00:00','Z')

def _path_lastmod(path: Path) -> str | None:
    try:
        return datetime.fromtimestamp(path.stat().st_mtime,timezone.utc).isoformat(timespec='seconds').replace('+00:00','Z')
    except OSError:
        return None

def _template_catalogue_lastmod() -> str | None:
    values=[_path_lastmod(ROOT/'static'/'templates.html'),_path_lastmod(ROOT/'static'/'templates.js'),_path_lastmod(ROOT/'app'/'templates.py')]
    try:
        values.extend(_path_lastmod(x) for x in (ROOT/'template_projects').glob('*/metadata.json'))
    except OSError:
        pass
    return _latest_lastmod(*values)

def _platform_sitemap_entries() -> list[dict]:
    base=_public_base_url().rstrip('/')
    with SessionLocal() as db:
        sites=[dict(r) for r in db.execute(text("SELECT * FROM sites WHERE status='LIVE'")).mappings().all()]
        posts=[dict(r) for r in db.execute(text("SELECT slug,updated_at,published_at,indexable FROM blog_posts WHERE site_id IS NULL AND status='PUBLISHED' AND indexable=1")).mappings().all()]
        freelancers=[dict(r) for r in db.execute(text("SELECT slug,updated_at FROM freelancer_profiles WHERE status='APPROVED' AND slug IS NOT NULL")).mappings().all()]
        custom_domain_sites={str(r[0]) for r in db.execute(text("SELECT site_id FROM custom_domains WHERE status='ACTIVE' AND ssl_status='ACTIVE'")).fetchall()}
        published_at={str(r[0]):r[1] for r in db.execute(text("SELECT site_id,max(created_at) FROM published_versions GROUP BY site_id")).fetchall()}
        plan_lastmod=db.execute(text("SELECT max(updated_at) FROM plan_configs")).scalar()
    home_lastmod=_latest_lastmod(_path_lastmod(ROOT/'static'/'index.html'),plan_lastmod)
    blog_lastmod=_latest_lastmod(_path_lastmod(ROOT/'app'/'main.py'),*[p.get('updated_at') or p.get('published_at') for p in posts])
    freelancers_lastmod=_latest_lastmod(_path_lastmod(ROOT/'static'/'freelancers.html'),*[f.get('updated_at') for f in freelancers])
    rows=[
        {'loc':base+'/', 'lastmod':home_lastmod},
        {'loc':base+'/templates','lastmod':_template_catalogue_lastmod()},
        {'loc':base+'/freelancers','lastmod':freelancers_lastmod},
        {'loc':base+'/blog','lastmod':blog_lastmod},
    ]
    for profile in freelancers:
        rows.append({'loc':f"{base}/freelancers/{profile['slug']}",'lastmod':_normalise_lastmod(profile.get('updated_at'))})
    for post in posts:
        rows.append({'loc':f"{base}/blog/{post['slug']}",'lastmod':_normalise_lastmod(post.get('updated_at') or post.get('published_at'))})
    for raw_site in sites:
        site_id=str(raw_site.get('id') or '')
        # Once a custom domain is authoritative, its own root sitemap owns discovery.
        # Advertising the fallback /s/ URL here would conflict with the page canonical.
        if site_id in custom_domain_sites:
            continue
        public_site=published_site_view(raw_site)
        origin=f"{base}/s/{public_site['slug']}"
        site_lastmod=_normalise_lastmod(published_at.get(site_id) or raw_site.get('updated_at'))
        for page in all_indexable_pages(public_site,published_only=True):
            canonical=canonical_for_page(public_site,page['key'])
            expected=(origin.rstrip('/')+page['path']) if page['path'] else origin
            # Only submit URLs whose canonical remains on this hosted site. External
            # canonical overrides are intentionally excluded rather than contradicted.
            if canonical.rstrip('/') != expected.rstrip('/'):
                continue
            rows.append({'loc':expected,'lastmod':site_lastmod})
    # Canonical-only, deterministic, duplicate-free output. Keep the newest true
    # modification timestamp when two data sources describe the same URL.
    dedup={}
    for row in rows:
        loc=str(row.get('loc') or '').strip()
        if not loc: continue
        existing=dedup.get(loc)
        if not existing:
            dedup[loc]=row
        else:
            existing['lastmod']=_latest_lastmod(existing.get('lastmod'),row.get('lastmod'))
    return [dedup[k] for k in sorted(dedup,key=lambda x:(x!=base+'/',x))]

def _render_urlset(rows: list[dict]) -> str:
    parts=['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for row in rows:
        parts.append('<url><loc>'+escape(row['loc'])+'</loc>')
        if row.get('lastmod'): parts.append('<lastmod>'+escape(row['lastmod'])+'</lastmod>')
        parts.append('</url>')
    parts.append('</urlset>')
    return ''.join(parts)

def _sitemap_chunks(rows: list[dict]) -> list[list[dict]]:
    if not rows: return [[]]
    chunks=[]; current=[]
    # Account for XML wrapper bytes while measuring each URL entry as rendered.
    wrapper_bytes=len('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>'.encode('utf-8'))
    current_bytes=wrapper_bytes
    for row in rows:
        item=_render_urlset([row])
        item_bytes=max(0,len(item.encode('utf-8'))-wrapper_bytes)
        if current and (len(current)>=SITEMAP_URL_LIMIT or current_bytes+item_bytes>SITEMAP_BYTE_LIMIT):
            chunks.append(current); current=[]; current_bytes=wrapper_bytes
        current.append(row); current_bytes+=item_bytes
    if current: chunks.append(current)
    return chunks

@app.get('/robots.txt',response_class=PlainTextResponse,include_in_schema=False)
def robots():
    base=_public_base_url()
    private='Disallow: /dashboard\nDisallow: /editor/\nDisallow: /api/\n'
    return (
        'User-agent: *\nAllow: /\n'+private+'\n'
        'User-agent: OAI-SearchBot\nAllow: /\n'+private+'\n'
        'User-agent: Googlebot\nAllow: /\n'+private+'\n'
        'User-agent: Bingbot\nAllow: /\n'+private+'\n'
        f'Sitemap: {base}/sitemap.xml\n'
    )

@app.get('/sitemap.xml',include_in_schema=False)
def sitemap():
    rows=_platform_sitemap_entries(); chunks=_sitemap_chunks(rows)
    if len(chunks)==1:
        return Response(_render_urlset(chunks[0]),media_type='application/xml',headers={'Cache-Control':'public,max-age=300'})
    base=_public_base_url().rstrip('/')
    parts=['<?xml version="1.0" encoding="UTF-8"?>','<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for idx,chunk in enumerate(chunks,1):
        lastmod=_latest_lastmod(*[r.get('lastmod') for r in chunk])
        parts.append(f'<sitemap><loc>{escape(base+f"/sitemaps/{idx}.xml")}</loc>')
        if lastmod: parts.append(f'<lastmod>{escape(lastmod)}</lastmod>')
        parts.append('</sitemap>')
    parts.append('</sitemapindex>')
    return Response(''.join(parts),media_type='application/xml',headers={'Cache-Control':'public,max-age=300'})

@app.get('/sitemaps/{part}.xml',include_in_schema=False)
def sitemap_part(part:int):
    rows=_platform_sitemap_entries(); chunks=_sitemap_chunks(rows)
    if len(chunks)<=1 or part<1 or part>len(chunks): raise HTTPException(404,'Sitemap shard not found')
    return Response(_render_urlset(chunks[part-1]),media_type='application/xml',headers={'Cache-Control':'public,max-age=300'})

@app.get('/manifest.webmanifest',include_in_schema=False)
def manifest(): return FileResponse(ROOT/'static'/'manifest.webmanifest',media_type='application/manifest+json')
@app.get('/llms.txt',response_class=PlainTextResponse,include_in_schema=False)
def llms(): return (ROOT/'static'/'llms.txt').read_text(encoding='utf-8').replace('{{APP_URL}}',_public_base_url().rstrip('/'))
