from __future__ import annotations

import hashlib
import json
import re
import secrets
import threading
from datetime import datetime, timedelta, timezone
from html import escape
from urllib.parse import urlparse, urlunparse
from uuid import uuid4

import httpx
from bs4 import BeautifulSoup
from fastapi import HTTPException
from sqlalchemy import text

from .config import settings
from .db import SessionLocal, now_iso
from .media import get_asset, media_url
from .templates import BY_SLUG

SEO_SCHEMA_VERSION = 2
_ALLOWED_LOCAL_TYPES = {
    'LocalBusiness','Dentist','Restaurant','HealthClub','BeautySalon','AutomotiveBusiness',
    'ProfessionalService','RealEstateAgent','Store','MedicalBusiness','LegalService',
    'FinancialService','HomeAndConstructionBusiness','FoodEstablishment','LodgingBusiness',
}
_PLACEHOLDER_PATTERNS = [
    re.compile(r'\blorem ipsum\b', re.I),
    re.compile(r'\bexample company\b', re.I),
    re.compile(r'\b123 main (?:street|st\.?)(?:\b|,)', re.I),
    re.compile(r'\b(?:555[-. ]?01\d\d|\+?1[-. ]?555[-. ]?\d{3}[-. ]?\d{4})\b'),
    re.compile(r'\bdemo testimonial\b', re.I),
    re.compile(r'\bacme\b', re.I),
    re.compile(r'\bexample(?:\.com|@example\.com)\b', re.I),
]


def _json_obj(raw) -> dict:
    if isinstance(raw, dict):
        return raw
    try:
        data = json.loads(raw or '{}')
    except Exception:
        return {}
    return data if isinstance(data, dict) else {}


def seo_document(site: dict) -> dict:
    data = _json_obj(site.get('seo_json'))
    if not isinstance(data.get('site'), dict): data['site'] = {}
    if not isinstance(data.get('entity'), dict): data['entity'] = {}
    if not isinstance(data.get('pages'), dict): data['pages'] = {}
    if not isinstance(data.get('indexnow'), dict): data['indexnow'] = {}
    if not isinstance(data.get('experimental'), dict): data['experimental'] = {}
    if not isinstance(data.get('footer_links'), list): data['footer_links'] = []
    if not isinstance(data.get('external_destinations'), dict): data['external_destinations'] = {}
    data.setdefault('schema_version', SEO_SCHEMA_VERSION)
    return data


def clean_text(value, max_len: int = 500) -> str:
    value = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]', '', str(value or ''))
    return ' '.join(value.split())[:max_len].strip()


def _safe_https_url(value: str | None, *, allow_http_dev: bool = True) -> str | None:
    raw = clean_text(value, 1200)
    if not raw:
        return None
    try: p = urlparse(raw)
    except Exception: return None
    allowed = {'https'} | ({'http'} if allow_http_dev and settings.app_env.lower() != 'production' else set())
    if p.scheme not in allowed or not p.hostname or p.username or p.password:
        return None
    if any(ch in raw for ch in ('\r','\n','\x00')):
        return None
    host = p.hostname.encode('idna').decode('ascii').lower()
    port = f':{p.port}' if p.port else ''
    return urlunparse((p.scheme, host + port, p.path or '/', '', p.query, ''))


def validate_canonical(value: str | None) -> str | None:
    if value in {None, ''}: return None
    out = _safe_https_url(value)
    if not out: raise HTTPException(422, 'Canonical URL must be a safe absolute HTTPS URL')
    return out


def normalize_public_slug(value: str, *, home: bool = False) -> str:
    if home: return ''
    raw = clean_text(value, 120).lower()
    raw = raw.encode('ascii','ignore').decode('ascii')
    slug = re.sub(r'[^a-z0-9]+','-',raw).strip('-')[:80]
    if not slug: raise HTTPException(422,'Page slug cannot be empty')
    if slug in {'api','static','dashboard','editor','robots.txt','sitemap.xml','llms.txt'}:
        raise HTTPException(422,'That page slug is reserved')
    return slug


def active_custom_domain(site_id: str) -> str | None:
    with SessionLocal() as db:
        row = db.execute(text("""SELECT hostname FROM custom_domains
            WHERE site_id=:s AND status='ACTIVE' AND ssl_status='ACTIVE'
            ORDER BY updated_at DESC LIMIT 1"""), {'s': site_id}).first()
    return row[0].lower() if row else None


def site_origin(site: dict, *, custom_host: str | None = None) -> str:
    host = (custom_host or active_custom_domain(site['id']) or '').strip().lower().rstrip('.')
    if host:
        return f'https://{host}'
    base = settings.app_url.rstrip('/')
    return f"{base}/s/{site['slug']}"


def _page_config(site: dict, page_key: str) -> dict:
    pages = seo_document(site)['pages']
    value = pages.get(page_key)
    return value if isinstance(value, dict) else {}


def page_public_slug(site: dict, page_key: str) -> str:
    if page_key == 'home': return ''
    cfg = _page_config(site,page_key)
    configured = cfg.get('slug')
    if configured:
        try: return normalize_public_slug(str(configured))
        except HTTPException: pass
    return page_key



def published_site_view(site: dict) -> dict:
    """Return the immutable public view of a LIVE site.

    Draft content can continue changing after publication. Public routing, sitemap
    discovery and crawl metadata must therefore be derived from the published
    snapshot/structure rather than from the mutable draft graph.
    """
    view=dict(site)
    raw=view.get('published_snapshot_json')
    if raw:
        try:
            snapshot=json.loads(raw)
            if isinstance(snapshot,dict):
                view.update(snapshot)
        except Exception:
            pass
    if view.get('published_structure_json'):
        # Existing helpers prefer draft_structure_json for editor workflows. For a
        # public view, point that slot at the immutable published document so no
        # unpublished page can leak into routing or discovery resources.
        view['draft_structure_json']=view.get('published_structure_json')
    return view


def site_page_keys(site: dict, *, published_only: bool = False) -> list[str]:
    """Return the canonical page graph from SiteDocument, with legacy-template fallback.

    AI sites own their information architecture; template metadata must not silently
    replace or truncate that page graph. `published_only=True` is mandatory for
    public discovery surfaces such as sitemaps and llms.txt.
    """
    try:
        from .structured_editor import parse_document
        source=(site.get('published_structure_json') if published_only else (site.get('draft_structure_json') or site.get('published_structure_json')))
        doc=parse_document(source)
        keys=[]
        for item in doc.get('pages',[]):
            if not isinstance(item,dict):
                continue
            key=str(item.get('id') or item.get('slug') or '').strip().lower()
            if key and key not in keys:
                keys.append(key)
        if keys:
            return keys
    except Exception:
        pass
    meta=BY_SLUG.get(site.get('template_slug'),{})
    return ['home',*meta.get('page_slugs',[])[:max(0,int(site.get('page_count') or 1)-1)]]


def page_key_for_path(site: dict, public_path: str, *, published_only: bool = False) -> str | None:
    clean = public_path.strip('/')
    if not clean: return 'home'
    for key in site_page_keys(site,published_only=published_only):
        if page_public_slug(site,key) == clean:
            return key
    return None


def page_path(site: dict, page_key: str) -> str:
    slug = page_public_slug(site,page_key)
    return '' if page_key == 'home' else '/' + slug


def canonical_for_page(site: dict, page_key: str, *, custom_host: str | None = None) -> str:
    cfg = _page_config(site,page_key)
    override = _safe_https_url(cfg.get('canonical'))
    if override: return override.rstrip('/') if urlparse(override).path != '/' else override
    return site_origin(site,custom_host=custom_host).rstrip('/') + page_path(site,page_key)


def _fallback_title(site: dict, page_key: str) -> str:
    doc = seo_document(site); site_cfg = doc['site']; entity = doc['entity']
    business = clean_text(entity.get('business_name') or site_cfg.get('business_name') or site.get('business_name'), 80) or 'Website'
    location = clean_text(entity.get('primary_location') or site_cfg.get('primary_location'), 100)
    if page_key == 'home':
        topic = clean_text(site_cfg.get('primary_topic') or site.get('tagline'), 90)
        if location and topic: return f'{topic} in {location} | {business}'[:180]
        if location: return f'{business} in {location}'[:180]
        if topic and business.lower() not in topic.lower(): return f'{business} — {topic}'[:180]
        return business[:180]
    label = page_key.replace('-',' ').strip().title()
    if location: return f'{label} in {location} | {business}'[:180]
    return f'{label} | {business}'[:180]


def _fallback_description(site: dict, page_key: str) -> str:
    doc = seo_document(site); site_cfg=doc['site']; entity=doc['entity']
    base = clean_text(_page_config(site,page_key).get('summary') or site_cfg.get('description') or entity.get('business_description') or site.get('description'), 320)
    if base: return base
    return f"Learn more about {clean_text(site.get('business_name'),80) or 'this business'}."


def _asset_absolute(site: dict, asset_id: str | None, origin: str) -> str | None:
    if not asset_id: return None
    try: asset = get_asset(str(asset_id), site_id=site['id'])
    except Exception: return None
    url = media_url(asset['id'])
    # Media currently lives on the Zylora app origin even for custom domains.
    if url.startswith('/'):
        app = settings.app_url.rstrip('/')
        return app + url
    return _safe_https_url(url)


def _social_profiles(entity: dict) -> list[str]:
    raw=entity.get('social_profiles') or []
    if not isinstance(raw,list): return []
    out=[]
    for item in raw[:20]:
        v=_safe_https_url(str(item))
        if v: out.append(v)
    return out


def _organization_schema(site: dict, origin: str) -> dict:
    doc=seo_document(site); entity=doc['entity']; site_cfg=doc['site']
    physical = bool(entity.get('address') or entity.get('primary_location') or entity.get('telephone'))
    requested = clean_text(entity.get('business_type') or site_cfg.get('business_type'),80)
    schema_type = requested if requested in _ALLOWED_LOCAL_TYPES else ('LocalBusiness' if physical else 'Organization')
    name=clean_text(entity.get('business_name') or site_cfg.get('business_name') or site.get('business_name'),160)
    obj={'@type':schema_type,'@id':origin.rstrip('/')+'/#organization','name':name,'url':origin.rstrip('/')+'/'}
    desc=clean_text(entity.get('business_description') or site_cfg.get('description') or site.get('description'),500)
    if desc: obj['description']=desc
    for key,target in [('telephone','telephone'),('email','email'),('price_range','priceRange')]:
        v=clean_text(entity.get(key),180)
        if v: obj[target]=v
    logo_id=(doc.get('site') or {}).get('logo_asset_id')
    logo=_asset_absolute(site,str(logo_id) if logo_id else None,origin)
    if logo: obj['logo']={'@type':'ImageObject','url':logo}
    address=entity.get('address')
    if isinstance(address,dict):
        addr={'@type':'PostalAddress'}
        mapping={'street':'streetAddress','locality':'addressLocality','region':'addressRegion','postal_code':'postalCode','country':'addressCountry'}
        for k,t in mapping.items():
            v=clean_text(address.get(k),180)
            if v: addr[t]=v
        if len(addr)>1: obj['address']=addr
    geo=entity.get('geo')
    if isinstance(geo,dict):
        try:
            lat=float(geo.get('latitude')); lon=float(geo.get('longitude'))
            if -90<=lat<=90 and -180<=lon<=180: obj['geo']={'@type':'GeoCoordinates','latitude':lat,'longitude':lon}
        except Exception: pass
    hours=entity.get('opening_hours')
    if isinstance(hours,list):
        vals=[clean_text(x,120) for x in hours if clean_text(x,120)]
        if vals: obj['openingHours']=vals[:20]
    area=entity.get('service_area')
    if isinstance(area,list):
        vals=[clean_text(x,160) for x in area if clean_text(x,160)]
        if vals: obj['areaServed']=vals[:30]
    same=_social_profiles(entity)
    if same: obj['sameAs']=same
    return obj


def structured_data_for_page(site: dict, page_key: str, *, custom_host: str | None = None) -> list[dict]:
    origin=site_origin(site,custom_host=custom_host).rstrip('/')
    canonical=canonical_for_page(site,page_key,custom_host=custom_host)
    business=_organization_schema(site,origin)
    website={'@type':'WebSite','@id':origin+'/#website','url':origin+'/','name':clean_text(site.get('business_name'),160),'publisher':{'@id':origin+'/#organization'}}
    page={'@type':'WebPage','@id':canonical+'#webpage','url':canonical,'name':_fallback_title(site,page_key),'description':_fallback_description(site,page_key),'isPartOf':{'@id':origin+'/#website'},'about':{'@id':origin+'/#organization'}}
    graph=[business,website,page]
    if page_key!='home':
        graph.append({'@type':'BreadcrumbList','@id':canonical+'#breadcrumb','itemListElement':[
            {'@type':'ListItem','position':1,'name':'Home','item':origin+'/'},
            {'@type':'ListItem','position':2,'name':page_key.replace('-',' ').title(),'item':canonical},
        ]})
    return graph



def metadata_for_page(site: dict, page_key: str, *, custom_host: str | None = None) -> dict:
    doc=seo_document(site); site_cfg=doc['site']; page=_page_config(site,page_key)
    canonical=canonical_for_page(site,page_key,custom_host=custom_host)
    title=clean_text(page.get('title') or _fallback_title(site,page_key),180)
    description=clean_text(page.get('description') or _fallback_description(site,page_key),500)
    indexable=bool(site_cfg.get('indexable',True)) and not bool(page.get('noindex',False))
    follow=bool(site_cfg.get('follow_links',True)) and not bool(page.get('nofollow',False))
    og_title=clean_text(page.get('og_title') or title,180)
    og_desc=clean_text(page.get('og_description') or description,500)
    og_asset=page.get('og_image_asset_id') or site_cfg.get('og_image_asset_id')
    og_image=_asset_absolute(site,str(og_asset) if og_asset else None,site_origin(site,custom_host=custom_host))
    return {
        'title':title,'description':description,'canonical':canonical,'indexable':indexable,'follow':follow,
        'og_title':og_title,'og_description':og_desc,'og_image':og_image,
        'twitter_title':clean_text(page.get('twitter_title') or site_cfg.get('twitter_title') or og_title,180),
        'twitter_description':clean_text(page.get('twitter_description') or site_cfg.get('twitter_description') or og_desc,500),
        'twitter_image':og_image,
    }


def apply_seo_html(html: str, site: dict, page_key: str, *, custom_host: str | None = None) -> str:
    data=metadata_for_page(site,page_key,custom_host=custom_host)
    soup=BeautifulSoup(html,'html.parser')
    if soup.html is None: return html
    soup.html['lang']=clean_text(seo_document(site)['site'].get('language') or 'en',16) or 'en'
    head=soup.head
    if head is None:
        head=soup.new_tag('head'); soup.html.insert(0,head)
    if not head.find('meta',attrs={'charset':True}):
        m=soup.new_tag('meta'); m['charset']='utf-8'; head.insert(0,m)
    if not head.find('meta',attrs={'name':'viewport'}):
        m=soup.new_tag('meta'); m['name']='viewport'; m['content']='width=device-width,initial-scale=1'; head.append(m)
    if soup.title is None: head.append(soup.new_tag('title'))
    soup.title.string=data['title']
    def set_meta(*,name=None,prop=None,content=''):
        sel={'name':name} if name else {'property':prop}; tag=head.find('meta',attrs=sel)
        if tag is None:
            tag=soup.new_tag('meta'); tag['name' if name else 'property']=name or prop; head.append(tag)
        tag['content']=str(content)
    set_meta(name='description',content=data['description'])
    set_meta(name='robots',content=('index' if data['indexable'] else 'noindex')+','+('follow' if data['follow'] else 'nofollow'))
    set_meta(prop='og:type',content='website'); set_meta(prop='og:title',content=data['og_title']); set_meta(prop='og:description',content=data['og_description']); set_meta(prop='og:url',content=data['canonical'])
    if data['og_image']: set_meta(prop='og:image',content=data['og_image'])
    set_meta(name='twitter:card',content='summary_large_image' if data['twitter_image'] else 'summary')
    set_meta(name='twitter:title',content=data['twitter_title']); set_meta(name='twitter:description',content=data['twitter_description'])
    if data['twitter_image']: set_meta(name='twitter:image',content=data['twitter_image'])
    for old in list(head.find_all('link',rel='canonical')): old.decompose()
    can=soup.new_tag('link'); can['rel']='canonical'; can['href']=data['canonical']; head.append(can)
    for old in list(head.find_all('script',attrs={'data-zylora-seo':'jsonld'})): old.decompose()
    script=soup.new_tag('script'); script['type']='application/ld+json'; script['data-zylora-seo']='jsonld'; script.string=json.dumps({'@context':'https://schema.org','@graph':structured_data_for_page(site,page_key,custom_host=custom_host)},ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
    head.append(script)
    rendered=str(soup)
    rendered=re.sub(r'<link href="([^"]+)" rel="canonical"\s*/?>',r'<link rel="canonical" href="\1">',rendered)
    rendered=re.sub(r'<meta content="([^"]*)" property="og:url"\s*/?>',r'<meta property="og:url" content="\1">',rendered)
    return rendered



def _published_lastmod(site: dict) -> str | None:
    """Return the last successful publication timestamp when available."""
    site_id=str(site.get('id') or '')
    if site_id:
        try:
            with SessionLocal() as db:
                value=db.execute(text('SELECT max(created_at) FROM published_versions WHERE site_id=:s'),{'s':site_id}).scalar()
            if value:
                return str(value)
        except Exception:
            pass
    return str(site.get('updated_at') or '') or None


def all_indexable_pages(site: dict, *, published_only: bool = False) -> list[dict]:
    source=published_site_view(site) if published_only else site
    keys=site_page_keys(source,published_only=published_only)
    doc=seo_document(source); site_index=bool(doc['site'].get('indexable',True)); out=[]
    lastmod=_published_lastmod(source) if published_only else source.get('updated_at')
    for key in keys:
        p=_page_config(source,key)
        if site_index and not p.get('noindex',False):
            out.append({'key':key,'path':page_path(source,key),'lastmod':lastmod})
    return out


def site_robots(site: dict, *, custom_host: str | None = None) -> str:
    origin=site_origin(site,custom_host=custom_host).rstrip('/')
    indexable=bool(seo_document(site)['site'].get('indexable',True))
    if not indexable:
        return f'User-agent: *\nDisallow: /\nSitemap: {origin}/sitemap.xml\n'
    private='Disallow: /api/\nDisallow: /dashboard\nDisallow: /editor/\n'
    return (
        'User-agent: *\nAllow: /\n'+private+'\n'
        'User-agent: OAI-SearchBot\nAllow: /\n'+private+'\n'
        'User-agent: Googlebot\nAllow: /\n'+private+'\n'
        'User-agent: Bingbot\nAllow: /\n'+private+'\n'
        f'Sitemap: {origin}/sitemap.xml\n'
    )


def _sitemap_lastmod(value) -> str | None:
    if value in {None,''}: return None
    raw=str(value).strip()
    if not raw: return None
    if raw.endswith('Z'): raw=raw[:-1]+'+00:00'
    try:
        dt=datetime.fromisoformat(raw)
    except ValueError:
        return None
    if dt.tzinfo is None: dt=dt.replace(tzinfo=timezone.utc)
    return dt.astimezone(timezone.utc).isoformat(timespec='seconds').replace('+00:00','Z')


def site_sitemap(site: dict, *, custom_host: str | None = None) -> str:
    public_site=published_site_view(site)
    origin=site_origin(public_site,custom_host=custom_host).rstrip('/')
    entries=[]
    for p in all_indexable_pages(public_site,published_only=True):
        expected=origin+p['path']
        canonical=canonical_for_page(public_site,p['key'],custom_host=custom_host)
        # A sitemap should reinforce the canonical URL, never contradict it. If an
        # advanced override points somewhere outside this site's authoritative origin,
        # omit the local duplicate from the sitemap.
        if canonical.rstrip('/') != expected.rstrip('/'):
            continue
        entries.append((expected,p['lastmod']))
    parts=['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for loc,lastmod in entries:
        stamp=_sitemap_lastmod(lastmod)
        parts.append('<url><loc>'+escape(loc)+'</loc>'+(f'<lastmod>{escape(stamp)}</lastmod>' if stamp else '')+'</url>')
    parts.append('</urlset>')
    return ''.join(parts)


def site_llms(site: dict, *, custom_host: str | None = None) -> str:
    doc=seo_document(site)
    if not doc['experimental'].get('llms_txt',False): raise HTTPException(404,'llms.txt is not enabled')
    origin=site_origin(site,custom_host=custom_host).rstrip('/')
    lines=[f"# {clean_text(site.get('business_name'),160)}",'',clean_text(doc['site'].get('description') or site.get('description'),500),'','## Public pages']
    for p in all_indexable_pages(site,published_only=True): lines.append(f'- {origin+p["path"]}')
    return '\n'.join(lines).strip()+'\n'


def ensure_indexnow_key(site: dict) -> str:
    doc=seo_document(site); current=clean_text(doc['indexnow'].get('key'),128)
    if re.fullmatch(r'[A-Za-z0-9-]{8,128}',current): return current
    key=secrets.token_hex(16); doc['indexnow']['key']=key; doc['indexnow'].setdefault('enabled',True)
    with SessionLocal.begin() as db:
        db.execute(text('UPDATE sites SET seo_json=:j,seo_updated_at=:a WHERE id=:s'),{'j':json.dumps(doc,separators=(',',':')),'a':now_iso(),'s':site['id']})
    site['seo_json']=json.dumps(doc,separators=(',',':'))
    return key


def enqueue_indexnow(site_id: str, urls: list[str], event_kind: str) -> int:
    with SessionLocal() as db:
        site=db.execute(text('SELECT * FROM sites WHERE id=:s'),{'s':site_id}).mappings().first()
    if not site: return 0
    site=dict(site); doc=seo_document(site)
    if doc['indexnow'].get('enabled',True) is False: return 0
    ensure_indexnow_key(site); count=0; stamp=now_iso()
    with SessionLocal.begin() as db:
        for url in urls[:10000]:
            safe=_safe_https_url(url)
            if not safe: continue
            dedupe=hashlib.sha256(f'{site_id}|{event_kind}|{safe}'.encode()).hexdigest()
            result=db.execute(text("""INSERT INTO indexnow_queue(id,site_id,url,event_kind,dedupe_key,status,attempt_count,created_at,updated_at)
              VALUES (:i,:s,:u,:e,:d,'PENDING',0,:a,:a) ON CONFLICT(dedupe_key) DO UPDATE SET status='PENDING',updated_at=:a,last_error=NULL"""),
              {'i':str(uuid4()),'s':site_id,'u':safe,'e':event_kind[:60],'d':dedupe,'a':stamp})
            count += 1 if result.rowcount else 0
    if count and settings.app_env.lower()=='production':
        # Durable queue + asynchronous drain: external IndexNow latency/outages never block publishing.
        threading.Thread(target=process_indexnow_queue,args=(site_id,),daemon=True,name=f'indexnow-{site_id[:8]}').start()
    return count


def enqueue_site_change(site_id: str, event_kind: str, paths: list[str] | None = None) -> int:
    with SessionLocal() as db:
        row=db.execute(text('SELECT * FROM sites WHERE id=:s'),{'s':site_id}).mappings().first()
    if not row: return 0
    site=dict(row); origin=site_origin(site).rstrip('/')
    urls=[origin+(p if p.startswith('/') else '/'+p) for p in (paths or [p['path'] for p in all_indexable_pages(site,published_only=True)])]
    return enqueue_indexnow(site_id,urls,event_kind)


def process_indexnow_queue(site_id: str, *, batch_size: int = 100) -> dict:
    with SessionLocal() as db:
        site_row=db.execute(text('SELECT * FROM sites WHERE id=:s'),{'s':site_id}).mappings().first()
        rows=db.execute(text("SELECT * FROM indexnow_queue WHERE site_id=:s AND status IN ('PENDING','RETRY') AND (next_attempt_at IS NULL OR next_attempt_at<=:n) ORDER BY created_at LIMIT :l"),{'s':site_id,'n':now_iso(),'l':min(batch_size,10000)}).mappings().all()
    if not site_row or not rows: return {'attempted':0,'sent':0,'status':'EMPTY'}
    site=dict(site_row); key=ensure_indexnow_key(site); origin=site_origin(site).rstrip('/'); host=urlparse(origin).hostname
    payload={'host':host,'key':key,'keyLocation':origin+'/'+key+'.txt','urlList':[r['url'] for r in rows]}
    endpoint=getattr(settings,'indexnow_endpoint','https://api.indexnow.org/indexnow')
    try:
        with httpx.Client(timeout=8) as client:
            res=client.post(endpoint,json=payload,headers={'Content-Type':'application/json; charset=utf-8'})
        if res.status_code not in {200,202}: raise RuntimeError(f'IndexNow HTTP {res.status_code}')
        with SessionLocal.begin() as db:
            for r in rows: db.execute(text("UPDATE indexnow_queue SET status='SENT',attempt_count=attempt_count+1,last_error=NULL,updated_at=:a WHERE id=:i"),{'a':now_iso(),'i':r['id']})
        return {'attempted':len(rows),'sent':len(rows),'status':'SENT','http_status':res.status_code}
    except Exception as exc:
        with SessionLocal.begin() as db:
            for r in rows:
                attempt=int(r['attempt_count'] or 0)+1; delay=min(3600,30*(2**min(attempt,6))); nxt=(datetime.now(timezone.utc)+timedelta(seconds=delay)).isoformat()
                db.execute(text("UPDATE indexnow_queue SET status='RETRY',attempt_count=:c,next_attempt_at=:n,last_error=:e,updated_at=:a WHERE id=:i"),{'c':attempt,'n':nxt,'e':clean_text(exc,500),'a':now_iso(),'i':r['id']})
        return {'attempted':len(rows),'sent':0,'status':'RETRY','error':clean_text(exc,500)}


def create_redirect(site_id: str, from_path: str, to_path: str) -> None:
    f='/' + from_path.strip('/'); t='/' + to_path.strip('/')
    if f==t: return
    if t.startswith(f+'/'): pass
    # Resolve one-hop target to prevent obvious loops/chains.
    with SessionLocal.begin() as db:
        existing=db.execute(text('SELECT from_path,to_path FROM site_redirects WHERE site_id=:s'),{'s':site_id}).mappings().all()
        mapping={r['from_path']:r['to_path'] for r in existing}
        seen={f}; cur=t
        for _ in range(20):
            if cur in seen: raise HTTPException(422,'Redirect would create a loop')
            seen.add(cur)
            cur=mapping.get(cur)
            if cur is None: break
        db.execute(text("""INSERT INTO site_redirects(id,site_id,from_path,to_path,status_code,created_at,updated_at)
            VALUES (:i,:s,:f,:t,308,:a,:a) ON CONFLICT(site_id,from_path) DO UPDATE SET to_path=:t,status_code=308,updated_at=:a"""),{'i':str(uuid4()),'s':site_id,'f':f,'t':t,'a':now_iso()})
        # Collapse redirects that pointed to the old path.
        db.execute(text('UPDATE site_redirects SET to_path=:t,updated_at=:a WHERE site_id=:s AND to_path=:f'),{'t':t,'a':now_iso(),'s':site_id,'f':f})


def resolve_redirect(site_id: str, path: str) -> tuple[str,int] | None:
    p='/' + path.strip('/')
    with SessionLocal() as db:
        row=db.execute(text('SELECT to_path,status_code FROM site_redirects WHERE site_id=:s AND from_path=:p'),{'s':site_id,'p':p}).mappings().first()
    return (row['to_path'],int(row['status_code'])) if row else None


def seo_health(site: dict, html_by_page: dict[str,str] | None = None) -> dict:
    issues=[]; seen_titles={}; seen_desc={}; seen_canon={}
    pages=all_indexable_pages(site)
    for item in pages:
        key=item['key']; meta=metadata_for_page(site,key)
        if not meta['title']: issues.append({'severity':'warning','code':'missing_title','page':key,'message':'SEO title is missing.'})
        elif meta['title'] in seen_titles: issues.append({'severity':'warning','code':'duplicate_title','page':key,'message':f"SEO title duplicates {seen_titles[meta['title']]}"})
        else: seen_titles[meta['title']]=key
        if not meta['description']: issues.append({'severity':'warning','code':'missing_description','page':key,'message':'Meta description is missing.'})
        elif meta['description'] in seen_desc: issues.append({'severity':'warning','code':'duplicate_description','page':key,'message':f"Meta description duplicates {seen_desc[meta['description']]}"})
        else: seen_desc[meta['description']]=key
        if meta['canonical'] in seen_canon: issues.append({'severity':'error','code':'duplicate_canonical','page':key,'message':f"Canonical duplicates {seen_canon[meta['canonical']]}"})
        else: seen_canon[meta['canonical']]=key
        html=(html_by_page or {}).get(key)
        if html:
            soup=BeautifulSoup(html,'html.parser'); h1=soup.find_all('h1')
            if len(h1)!=1: issues.append({'severity':'warning','code':'h1_count','page':key,'message':f'Expected one primary H1; found {len(h1)}.'})
            for img in soup.find_all('img'):
                if not img.get('alt','').strip() and img.get('data-zylora-decorative')!='true' and img.get('aria-hidden')!='true': issues.append({'severity':'warning','code':'missing_alt','page':key,'message':'A meaningful image is missing ALT text.'})
            text_content=soup.get_text(' ',strip=True)
            for pat in _PLACEHOLDER_PATTERNS:
                if pat.search(text_content): issues.append({'severity':'warning','code':'placeholder_content','page':key,'message':'Possible template/demo placeholder content detected.'}); break
            allowed_paths={p['path'] or '/' for p in pages}
            for a in soup.find_all('a',href=True):
                href=str(a['href']).strip()
                if href.startswith('/') and not href.startswith('//') and not href.startswith(('/api/','/static/')):
                    target='/' + href.split('#',1)[0].split('?',1)[0].strip('/')
                    platform_prefix=f"/s/{site.get('slug','')}"
                    if target==platform_prefix: target='/'
                    elif platform_prefix and target.startswith(platform_prefix+'/'): target=target[len(platform_prefix):] or '/'
                    if target not in allowed_paths and target != '/':
                        issues.append({'severity':'warning','code':'broken_internal_link','page':key,'message':f'Internal link may not resolve: {href[:180]}'})
    counts={s:sum(1 for i in issues if i['severity']==s) for s in ('error','warning')}
    return {'schema_version':SEO_SCHEMA_VERSION,'checks':{'https':site_origin(site).startswith('https://') or settings.app_env!='production','canonical':not any(i['code']=='duplicate_canonical' for i in issues),'sitemap':True,'robots':True,'structured_data':True},'issues':issues,'errors':counts['error'],'warnings':counts['warning']}


def indexnow_key_matches(site: dict, key: str) -> bool:
    current=clean_text(seo_document(site)['indexnow'].get('key'),128)
    return bool(current and secrets.compare_digest(current,key))
