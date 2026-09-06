from __future__ import annotations

import json
import re
from html import escape

from bs4 import BeautifulSoup
from sqlalchemy import text

from .db import SessionLocal
from .media import media_url
from .studio_document import validate_studio_document
from .studio_renderer import render_page


def _json(raw,default):
    try:
        value=json.loads(raw or '')
        return value if isinstance(value,type(default)) else default
    except Exception:
        return default


def _public_item(row:dict)->dict:
    return {'id':row['id'],'site_id':row['site_id'],'collection_id':row['collection_id'],'slug':row['slug'],
        'values':_json(row.get('values_json'),{}),'status':row['status'],'published_at':row.get('published_at'),
        'updated_at':row.get('updated_at')}


def _plain(value)->str:
    if isinstance(value,(dict,list)): return json.dumps(value,ensure_ascii=False,separators=(',',':'))
    return BeautifulSoup(str(value or ''),'html.parser').get_text(' ',strip=True)


def _template(value,item:dict|None)->str:
    raw=str(value or '')
    if not item: return raw
    values=item.get('values') or {}
    def replace(match):
        key=match.group(1)
        if key=='slug': return str(item.get('slug') or '')
        if key=='id': return str(item.get('id') or '')
        if key.startswith('field:'): return _plain(values.get(key[6:]))
        return ''
    return re.sub(r'\{\{\s*([^{}]+?)\s*\}\}',replace,raw)[:500]


def render_dynamic_path(site:dict,path:str,origin:str)->str|None:
    clean=path.strip('/')
    with SessionLocal() as db:
        pages=[dict(row) for row in db.execute(text('''SELECT * FROM cms_dynamic_pages
            WHERE site_id=:site AND status='PUBLISHED' AND published_document_json IS NOT NULL
            ORDER BY length(route_prefix) DESC,page_kind DESC'''),{'site':site['id']}).mappings().all()]
        selected=None; item_slug=None
        for page in pages:
            prefix=str(page['route_prefix']).strip('/')
            if page['page_kind']=='COLLECTION' and clean==prefix:
                selected=page; break
            if page['page_kind']=='ITEM' and clean.startswith(prefix+'/') and '/' not in clean[len(prefix)+1:]:
                selected=page; item_slug=clean[len(prefix)+1:]; break
        if not selected: return None
        collection_id=selected['collection_id']
        rows=[dict(row) for row in db.execute(text('''SELECT * FROM cms_items WHERE site_id=:site AND collection_id=:collection
            AND status='PUBLISHED' ORDER BY published_at DESC,updated_at DESC,id'''),{
            'site':site['id'],'collection':collection_id}).mappings().all()]
    items=[_public_item(row) for row in rows]
    current=next((item for item in items if item['slug']==item_slug),None) if item_slug is not None else None
    if item_slug is not None and current is None: return ''
    try: document=validate_studio_document(json.loads(selected['published_document_json']))
    except Exception: return ''
    seo=_json(selected.get('seo_json'),{}); canonical=origin.rstrip('/')+'/'+clean if clean else origin.rstrip('/')
    seo_override={'title':_template(seo.get('title_template'),current),'description':_template(seo.get('description_template'),current),
        'og_title':_template(seo.get('og_title_template') or seo.get('title_template'),current),
        'og_description':_template(seo.get('og_description_template') or seo.get('description_template'),current),'canonical':canonical,'noindex':bool(seo.get('noindex'))}
    image_field=seo.get('og_image_field_id')
    if current and image_field and current['values'].get(image_field): seo_override['og_image']=media_url(str(current['values'][image_field]))
    schema_type=str(seo.get('structured_data_type') or '').strip()
    if schema_type:
        seo_override['structured_data']={'@context':'https://schema.org','@type':schema_type,'url':canonical,
            'name':seo_override['title'],'description':seo_override['description']}
    return render_page(document,selected['page_id'],data_context=current,collection_items=items,asset_resolver=media_url,seo_override=seo_override)


def dynamic_sitemap_entries(site_id:str,origin:str)->list[dict]:
    with SessionLocal() as db:
        pages=[dict(row) for row in db.execute(text("SELECT collection_id,page_kind,route_prefix,seo_json,updated_at FROM cms_dynamic_pages WHERE site_id=:site AND status='PUBLISHED'"),{'site':site_id}).mappings().all()]
        items=[dict(row) for row in db.execute(text("SELECT collection_id,slug,updated_at,published_at FROM cms_items WHERE site_id=:site AND status='PUBLISHED'"),{'site':site_id}).mappings().all()]
    entries=[]
    for page in pages:
        if _json(page.get('seo_json'),{}).get('noindex'): continue
        base=origin.rstrip('/')+'/'+str(page['route_prefix']).strip('/')
        if page['page_kind']=='COLLECTION': entries.append({'loc':base,'lastmod':page.get('updated_at')})
        else:
            for item in items:
                if item['collection_id']==page['collection_id']: entries.append({'loc':base+'/'+item['slug'],'lastmod':item.get('updated_at') or item.get('published_at')})
    return entries


def extend_sitemap_xml(xml:str,site_id:str,origin:str)->str:
    entries=dynamic_sitemap_entries(site_id,origin)
    addition=''.join(f'<url><loc>{escape(row["loc"])}</loc><lastmod>{escape(str(row["lastmod"])[:10])}</lastmod></url>' for row in entries if row.get('lastmod'))
    addition+=''.join(f'<url><loc>{escape(row["loc"])}</loc></url>' for row in entries if not row.get('lastmod'))
    return xml.replace('</urlset>',addition+'</urlset>') if addition else xml
