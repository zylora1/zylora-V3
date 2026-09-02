from __future__ import annotations
import io, json, zipfile
from PIL import Image
from bs4 import BeautifulSoup
from sqlalchemy import text

from tests.test_api import auth_client, reset_db, create_site
from app.db import SessionLocal
from app.templates import render_template
from tests.billing_helpers import activate_zylora


def png_bytes(color=(205, 54, 82), size=(96, 64)) -> bytes:
    b=io.BytesIO(); Image.new('RGB',size,color).save(b,format='PNG'); return b.getvalue()


def upload(c,h,sid,name='storefront.png',alt='Storefront exterior'):
    r=c.post(f'/api/sites/{sid}/assets',headers=h,files={'file':(name,png_bytes(),'image/png')},data={'alt_text':alt})
    assert r.status_code==200,r.text
    return r.json()['asset']


def test_media_upload_validation_tenant_isolation_metadata_and_safe_delete():
    reset_db(); a,ha=auth_client('media-a@example.com','Media A'); activate_zylora(a,ha,country='GB'); sid=create_site(a,ha,'Media Site')
    asset=upload(a,ha,sid)
    assert asset['mime_type']=='image/png' and asset['width']==96 and asset['height']==64 and asset['original_filename']=='storefront.png'
    listed=a.get(f'/api/sites/{sid}/assets').json()['items']; assert [x['id'] for x in listed]==[asset['id']]
    patch=a.patch(f"/api/sites/{sid}/assets/{asset['id']}",headers=ha,json={'filename':'front elevation','alt_text':'Front elevation of the studio'}); assert patch.status_code==200 and patch.json()['asset']['filename'].startswith('front-elevation')
    b,hb=auth_client('media-b@example.com','Media B'); activate_zylora(b,hb,country='GB')
    assert b.get(f"/api/sites/{sid}/assets/{asset['id']}").status_code==404
    bad=a.post(f'/api/sites/{sid}/assets',headers=ha,files={'file':('fake.png',b'<script>alert(1)</script>','image/png')},data={'alt_text':''}); assert bad.status_code in {415,422}
    # Once referenced, deletion is blocked so drafts/revisions/published snapshots cannot break.
    op={'page':'home','type':'replace_image','selector':'[data-zylora-role="hero-image"]','asset_id':asset['id'],'mode':'image','alt':'Front elevation of the studio'}
    assert a.post(f'/api/sites/{sid}/editor/actions',headers=ha,json={'operations':[op],'action':'IMAGE_REPLACE'}).status_code==200
    assert a.delete(f"/api/sites/{sid}/assets/{asset['id']}",headers=ha).status_code==409


def test_image_lifecycle_crop_focal_fit_alt_reset_undo_redo_revision_publish_isolation_and_export():
    reset_db(); c,h=auth_client('image-flow@example.com','Image Flow'); activate_zylora(c,h,country='GB')
    sid=create_site(c,h,'Aurora Studio','atelier-noir'); asset=upload(c,h,sid,'aurora-storefront.png','Aurora storefront at dusk')
    doc=c.get(f'/api/sites/{sid}/editor-document?page=home').json(); hero=next(n for n in doc['nodes'] if n.get('role')=='hero-image')
    selector=f'[data-zylora-id="{hero["id"]}"]'
    ops=[
        {'page':'home','type':'replace_image','selector':selector,'asset_id':asset['id'],'mode':'image','alt':'Aurora storefront at dusk'},
        {'page':'home','type':'set_image_crop','selector':selector,'crop':{'x':4,'y':5,'width':90,'height':85},'preset':'free'},
        {'page':'home','type':'set_image_focal_point','selector':selector,'x':42,'y':67},
        {'page':'home','type':'set_image_fit','selector':selector,'fit':'cover'},
        {'page':'home','type':'set_image_alt','selector':selector,'alt':'Interior and storefront of Aurora Studio','decorative':False},
    ]
    r=c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':ops,'action':'IMAGE_EDIT'}); assert r.status_code==200,r.text
    preview=c.get(f'/api/sites/{sid}/preview').text; soup=BeautifulSoup(preview,'html.parser'); img=soup.select_one(selector)
    assert img and asset['id'] in img['src'] and img['alt']=='Interior and storefront of Aurora Studio'
    assert 'object-position:42.0% 67.0%' in img.get('style','') and 'object-fit:cover' in img.get('style','') and 'clip-path:inset' in img.get('style','')
    # Undo restores the pre-image document in one grouped transaction, redo restores it.
    assert c.post(f'/api/sites/{sid}/editor/undo',headers=h).json()['changed'] is True
    assert asset['id'] not in c.get(f'/api/sites/{sid}/preview').text
    assert c.post(f'/api/sites/{sid}/editor/redo',headers=h).json()['changed'] is True
    assert asset['id'] in c.get(f'/api/sites/{sid}/preview').text
    # Revision preview is durable and restore creates a new revision.
    revs=c.get(f'/api/sites/{sid}/revisions').json()['items']; assert revs
    prv=c.get(f"/api/sites/{sid}/revisions/{revs[0]['id']}/preview?page=home"); assert prv.status_code==200 and asset['id'] in prv.text
    # Site B from same template remains original: no global template mutation.
    sid2=create_site(c,h,'Second Copy','atelier-noir'); assert asset['id'] not in c.get(f'/api/sites/{sid2}/preview').text
    # Publish snapshots the exact managed image state.
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200; slug=c.get(f'/api/sites/{sid}').json()['slug']; public=c.get(f'/s/{slug}'); assert asset['id'] in public.text and 'Interior and storefront of Aurora Studio' in public.text
    media_url=img['src']; assert c.get(media_url).status_code==200
    # Reset affects draft only until republish and leaves unrelated content alone.
    assert c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':[{'page':'home','type':'reset_image','selector':selector}],'action':'IMAGE_RESET'}).status_code==200
    assert asset['id'] not in c.get(f'/api/sites/{sid}/preview').text and asset['id'] in c.get(f'/s/{slug}').text
    # Undo reset for export lifecycle.
    assert c.post(f'/api/sites/{sid}/editor/undo',headers=h).json()['changed'] is True
    order=c.post(f'/api/sites/{sid}/source-export/order',headers=h,json={'currency':'USD'}).json(); assert c.post(f'/api/sites/{sid}/source-export/verify',headers=h,json={'order_id':order['order_id'],'payment_id':order['mock_payment_id'],'signature':order['mock_signature']}).status_code==200
    zresp=c.get(f'/api/sites/{sid}/export'); assert zresp.status_code==200
    z=zipfile.ZipFile(io.BytesIO(zresp.content)); names=set(z.namelist()); media=[n for n in names if n.startswith('public/zylora-assets/')]; assert media
    manifest=json.loads(z.read('zylora-media-manifest.json')); assert any(x['id']==asset['id'] for x in manifest)
    client=z.read('app/zylora-edits.jsx').decode(); assert 'set_image_crop' in client and 'set_image_focal_point' in client and asset['id'] in client


def test_editor_structured_controls_responsive_brand_seo_accessibility_and_lock_enforcement():
    reset_db(); c,h=auth_client('editor-system@example.com','Editor System'); activate_zylora(c,h,country='GB'); sid=create_site(c,h,'Editor System','atelier-noir')
    d=c.get(f'/api/sites/{sid}/editor-document?page=home').json(); h1=next(n for n in d['nodes'] if n['tag']=='h1'); sel=f'[data-zylora-id="{h1["id"]}"]'
    ops=[
      {'page':'home','type':'set_text','selector':sel,'text':'Build with clarity.'},
      {'page':'home','type':'set_style','selector':sel,'styles':{'font-family':'Georgia','font-size':'72px','font-weight':'700','line-height':'1.05','letter-spacing':'-2px','text-align':'left','color':'#202020'}},
      {'page':'home','type':'set_responsive_style','selector':sel,'breakpoint':'mobile','styles':{'font-size':'36px','text-align':'center'}},
      {'page':'home','type':'set_effect','selector':sel,'effect_family':'scroll','effect':'fade-up','duration_ms':650,'delay_ms':50},
      {'page':'home','type':'set_effect','selector':sel,'effect_family':'hover','effect':'lift'},
    ]
    assert c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':ops,'action':'EDITOR_SYSTEM'}).status_code==200
    html=c.get(f'/api/sites/{sid}/preview').text; assert 'Build with clarity.' in html and '@media(max-width:640px)' in html and 'zy-motion-fade-up' in html and 'prefers-reduced-motion' in html
    assert c.patch(f'/api/sites/{sid}/brand',headers=h,json={'primary':'#123456','secondary':'#654321','background':'#ffffff','surface':'#f6f6f6','heading':'#111111','body':'#333333','heading_font':'Georgia','body_font':'Arial','button_radius':'16px'}).status_code==200
    assert c.patch(f'/api/sites/{sid}/seo',headers=h,json={'page':'home','title':'Aurora architecture studio','description':'Architecture and spatial design.','og_title':'Aurora Studio','og_description':'Material-led architecture.','noindex':False}).status_code==200
    html=c.get(f'/api/sites/{sid}/preview').text; soup=BeautifulSoup(html,'html.parser'); assert soup.title.string=='Aurora architecture studio' and soup.select_one('#zylora-brand-overrides')
    a11y=c.get(f'/api/sites/{sid}/accessibility-check?page=home'); assert a11y.status_code==200 and isinstance(a11y.json()['warnings'],list)
    # Template locked skip link cannot be modified.
    locked={'page':'home','type':'set_text','selector':'[data-zylora-editability="LOCKED"]','text':'Bad'}
    assert c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':[locked]}).status_code==422
    # Dangerous links and image URLs are rejected server-side.
    assert c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':[{'page':'home','type':'set_link','selector':'a','href':'javascript:alert(1)'}]}).status_code==422
    assert c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':[{'page':'home','type':'set_image','selector':'img','src':'http://127.0.0.1/private.png'}]}).status_code==422
from app.db import _postgresize_statement, _split_sql_statements

def test_postgres_migration_translation():
    s="INSERT OR IGNORE INTO system_settings(key,value,updated_at) VALUES ('x','y',CURRENT_TIMESTAMP)"
    out=_postgresize_statement(s)
    assert out.startswith('INSERT INTO system_settings') and out.endswith('ON CONFLICT DO NOTHING')
    assert _postgresize_statement('CREATE TABLE x(id INTEGER PRIMARY KEY AUTOINCREMENT)').endswith('BIGSERIAL PRIMARY KEY)')


def test_postgres_migration_split_ignores_comment_and_literal_semicolons():
    sql = "-- Forward-only; preserves data.\nINSERT OR IGNORE INTO x(value) VALUES ('a;b');\nSELECT 1;"
    statements = _split_sql_statements(sql)
    assert len(statements) == 2
    translated = _postgresize_statement(statements[0])
    assert 'INSERT INTO x' in translated
    assert 'INSERT OR IGNORE' not in translated
    assert translated.endswith('ON CONFLICT DO NOTHING')

def test_background_gallery_logo_responsive_focal_and_auto_fit_engine():
    from app.structured_editor import instrument_editable_html, validate_operations_against_html, apply_document
    html='''<!doctype html><html><head></head><body><header><a class="brand" href="#">Brand</a></header><main><section class="heroMedia" style="background-image:url(/old.jpg)"></section><section class="gallery"><img src="https://example.com/a.jpg" alt="A"><img src="https://example.com/b.jpg" alt="B"></section></main></body></html>'''
    base=instrument_editable_html(html,'home','synthetic')
    soup=BeautifulSoup(base,'html.parser')
    bg=soup.select_one('.heroMedia'); gallery=soup.select('.gallery img'); logo=soup.select_one('[data-zylora-role="logo"]')
    assert bg and bg.get('data-zylora-background-editable')=='true' and len(gallery)==2 and logo
    ops=[
      {'page':'home','type':'set_image_crop','selector':f'[data-zylora-id="{bg["data-zylora-id"]}"]','mode':'background','crop':{'x':10,'y':5,'width':80,'height':90},'preset':'free'},
      {'page':'home','type':'set_image_focal_point','selector':f'[data-zylora-id="{bg["data-zylora-id"]}"]','mode':'background','x':64,'y':43},
      {'page':'home','type':'set_responsive_image_focal_point','selector':f'[data-zylora-id="{bg["data-zylora-id"]}"]','mode':'background','breakpoint':'mobile','x':75,'y':30},
      {'page':'home','type':'set_image_fit','selector':f'[data-zylora-id="{gallery[0]["data-zylora-id"]}"]','mode':'image','fit':'auto'},
      {'page':'home','type':'set_image_alt','selector':f'[data-zylora-id="{gallery[1]["data-zylora-id"]}"]','alt':'Second gallery image','decorative':False},
    ]
    checked=validate_operations_against_html(base,ops)
    rendered=apply_document(base,{'schemaVersion':3,'operations':checked},'home')
    out=BeautifulSoup(rendered,'html.parser'); bg2=out.select_one('.heroMedia'); imgs=out.select('.gallery img')
    assert 'background-size:' in bg2.get('style','') and 'background-position:64.0% 43.0%' in bg2.get('style','')
    assert '@media(max-width:640px)' in rendered and 'background-position:75.0% 30.0%' in rendered
    assert 'object-fit:scale-down' in imgs[0].get('style','') and imgs[0].get('data-zylora-fit')=='auto'
    assert imgs[1]['alt']=='Second gallery image'


def test_ai_image_edit_and_export_preserves_brand_seo_and_media():
    reset_db(); c,h=auth_client('ai-media@example.com','AI Media'); activate_zylora(c,h,country='GB'); sid=create_site(c,h,'Media Export','atelier-noir')
    asset=upload(c,h,sid,'storefront.jpg','Storefront image')
    logo=upload(c,h,sid,'logo.png','Media Export logo')
    # Local structured AI must resolve an uploaded asset by filename rather than inventing a URL/id.
    r=c.post(f'/api/sites/{sid}/ai-edit',headers=h,json={'instruction':'Replace the hero image with storefront.jpg'}); assert r.status_code==200,r.text
    assert asset['id'] in c.get(f'/api/sites/{sid}/preview').text
    assert c.patch(f'/api/sites/{sid}/brand',headers=h,json={'primary':'#123456','background':'#fafafa','heading':'#111111','body':'#222222','heading_font':'Georgia','body_font':'Arial','button_radius':'16px','logo_asset_id':logo['id'],'favicon_asset_id':logo['id']}).status_code==200
    assert c.patch(f'/api/sites/{sid}/seo',headers=h,json={'page':'home','title':'Media Export Studio','description':'A media-rich studio website.','og_title':'Media Export','og_description':'Managed media export test.','og_image_asset_id':asset['id'],'canonical':'https://example.com/','noindex':False}).status_code==200
    order=c.post(f'/api/sites/{sid}/source-export/order',headers=h,json={'currency':'USD'}).json(); c.post(f'/api/sites/{sid}/source-export/verify',headers=h,json={'order_id':order['order_id'],'payment_id':order['mock_payment_id'],'signature':order['mock_signature']})
    zr=c.get(f'/api/sites/{sid}/export'); assert zr.status_code==200
    z=zipfile.ZipFile(io.BytesIO(zr.content)); client=z.read('app/zylora-edits.jsx').decode(); page=z.read('app/page.jsx').decode(); layout=z.read('app/layout.jsx').decode()
    assert 'const brand=' in client and '#123456' in client and '/zylora-assets/' in client
    assert 'Media Export Studio' in page and 'openGraph' in page and 'NEXT_PUBLIC_SITE_URL' in page
    assert 'metadataBase:new URL(zyloraSiteUrl)' in page and 'alternates:{canonical:"/"}' in page and 'https://example.com/' not in page
    assert 'Media Export Studio' in layout
    assert any(x.startswith('public/zylora-assets/') for x in z.namelist())


def test_dashboard_has_no_decorative_gradients():
    from pathlib import Path
    css=Path('static/dashboard.css').read_text().lower()
    assert 'gradient(' not in css

def test_media_security_oversize_stock_ssrf_and_revision_restore(monkeypatch):
    from app.config import settings
    from app.media import import_remote_stock
    from fastapi import HTTPException
    reset_db(); c,h=auth_client('media-security@example.com','Media Security'); activate_zylora(c,h,country='GB'); sid=create_site(c,h,'Media Security','atelier-noir')
    # Request body size is enforced before decoding/processing the file.
    old=settings.media_max_upload_mb; settings.media_max_upload_mb=1
    try:
        r=c.post(f'/api/sites/{sid}/assets',headers=h,files={'file':('huge.png',b'0'*(1024*1024+8),'image/png')},data={'alt_text':''})
        assert r.status_code==413
    finally: settings.media_max_upload_mb=old
    for url,source in [('https://127.0.0.1/a.jpg','https://www.pexels.com/photo/1/'),('https://evil.example/a.jpg','https://www.pexels.com/photo/1/'),('https://images.pexels.com/photos/1/a.jpg','https://evil.example/photo/1/')]:
        try: import_remote_stock('u','s',url,source_url=source,provider='Pexels')
        except HTTPException as exc: assert exc.status_code==422
        else: raise AssertionError('unsafe/non-Pexels stock source accepted')
    # Restoring a historical revision creates a new current state rather than deleting history.
    d=c.get(f'/api/sites/{sid}/editor-document?page=home').json(); h1=next(n for n in d['nodes'] if n['tag']=='h1'); sel=f'[data-zylora-id="{h1["id"]}"]'
    c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':[{'page':'home','type':'set_text','selector':sel,'text':'Revision one'}],'action':'REV_ONE'})
    revs=c.get(f'/api/sites/{sid}/revisions').json()['items']; target=revs[-1]
    c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':[{'page':'home','type':'set_text','selector':sel,'text':'Revision two'}],'action':'REV_TWO'})
    before=len(c.get(f'/api/sites/{sid}/revisions').json()['items'])
    rr=c.post(f'/api/sites/{sid}/revisions/{target["id"]}/restore',headers=h); assert rr.status_code==200
    after=len(c.get(f'/api/sites/{sid}/revisions').json()['items']); assert after>=before and 'Revision two' not in c.get(f'/api/sites/{sid}/preview').text


def test_internal_page_links_are_validated_and_resolve_in_preview_live_and_export():
    reset_db(); c,h=auth_client('links@example.com','Links'); activate_zylora(c,h,country='GB'); sid=create_site(c,h,'Link Studio','atelier-noir',description='Create a website with separate Home, Projects and Contact pages for an architecture studio.')
    doc=c.get(f'/api/sites/{sid}/editor-document?page=home').json(); anchor=next(n for n in doc['nodes'] if n['tag']=='a' and n.get('editability')!='LOCKED'); sel=f'[data-zylora-id="{anchor["id"]}"]'
    op={'page':'home','type':'set_link','selector':sel,'link_type':'page','page_slug':'projects','label':'Projects'}
    r=c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':[op],'action':'LINK_EDIT'}); assert r.status_code==200,r.text
    draft=BeautifulSoup(c.get(f'/api/sites/{sid}/preview').text,'html.parser').select_one(sel); assert draft and draft['href']==f'/api/sites/{sid}/preview/projects' and draft.get('data-zylora-page-link')=='projects'
    bad=c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':[{**op,'page_slug':'not-a-page'}]}); assert bad.status_code==422
    c.post(f'/api/sites/{sid}/publish',headers=h); slug=c.get(f'/api/sites/{sid}').json()['slug']; live=BeautifulSoup(c.get(f'/s/{slug}').text,'html.parser').select_one(sel); assert live and live['href']==f'/s/{slug}/projects'
    order=c.post(f'/api/sites/{sid}/source-export/order',headers=h,json={'currency':'USD'}).json(); c.post(f'/api/sites/{sid}/source-export/verify',headers=h,json={'order_id':order['order_id'],'payment_id':order['mock_payment_id'],'signature':order['mock_signature']})
    zr=c.get(f'/api/sites/{sid}/export'); assert zr.status_code==200
    z=zipfile.ZipFile(io.BytesIO(zr.content)); client=z.read('app/zylora-edits.jsx').decode(); assert "o.page_slug==='home'?'/':'/'+o.page_slug" in client


def test_multipage_editor_validation_uses_each_page_schema():
    reset_db(); c,h=auth_client('multipage@example.com','Multi Page'); activate_zylora(c,h,country='GB'); sid=create_site(c,h,'Multi Page','atelier-noir',description='Create a website with separate Home, Projects and Contact pages for a creative studio.')
    home=c.get(f'/api/sites/{sid}/editor-document?page=home').json(); projects=c.get(f'/api/sites/{sid}/editor-document?page=projects').json()
    h1h=next(n for n in home['nodes'] if n['tag']=='h1'); h1p=next(n for n in projects['nodes'] if n['tag']=='h1')
    ops=[
      {'page':'home','type':'set_text','selector':f'[data-zylora-id="{h1h["id"]}"]','text':'Home edited'},
      {'page':'projects','type':'set_text','selector':f'[data-zylora-id="{h1p["id"]}"]','text':'Projects edited'},
    ]
    r=c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':ops,'action':'MULTIPAGE'}); assert r.status_code==200,r.text
    assert 'Home edited' in c.get(f'/api/sites/{sid}/preview').text
    assert 'Projects edited' in c.get(f'/api/sites/{sid}/preview/projects').text


def test_all_five_template_archetypes_keep_image_replacements_site_isolated():
    reset_db(); c,h=auth_client('archetypes@example.com','Archetypes'); activate_zylora(c,h,country='GB')
    from app.templates import TEMPLATES
    image_templates=[meta for meta in TEMPLATES if '<img' in render_template(meta['slug'],{})][:5]
    assert len(image_templates)==5
    for idx,meta in enumerate(image_templates):
        sid=create_site(c,h,f'Archetype {idx}',meta['slug'],origin='TEMPLATE'); asset=upload(c,h,sid,f'{meta["slug"]}.png',f'{meta["name"]} replacement')
        doc=c.get(f'/api/sites/{sid}/editor-document?page=home').json(); img=next(n for n in doc['nodes'] if n['kind']=='image'); sel=f'[data-zylora-id="{img["id"]}"]'
        r=c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':[{'page':'home','type':'replace_image','selector':sel,'asset_id':asset['id'],'mode':'image','alt':f'{meta["name"]} replacement'}],'action':'ARCHETYPE_IMAGE'}); assert r.status_code==200,(meta['slug'],r.text)
        assert asset['id'] in c.get(f'/api/sites/{sid}/preview').text
        clone=create_site(c,h,f'Archetype clone {idx}',meta['slug'],origin='TEMPLATE'); assert asset['id'] not in c.get(f'/api/sites/{clone}/preview').text


def test_draft_media_is_private_until_published_and_cross_tenant_media_denied():
    reset_db(); c,h=auth_client('private-media@example.com','Private Media'); activate_zylora(c,h,country='GB'); sid=create_site(c,h,'Private Media','atelier-noir'); asset=upload(c,h,sid)
    anon=type(c)(c.app)
    assert anon.get(asset['url']).status_code==404
    d=c.get(f'/api/sites/{sid}/editor-document?page=home').json(); img=next(n for n in d['nodes'] if n['kind']=='image'); sel=f'[data-zylora-id="{img["id"]}"]'
    c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':[{'page':'home','type':'replace_image','selector':sel,'asset_id':asset['id'],'mode':'image','alt':'Safe'}]})
    assert anon.get(asset['url']).status_code==404
    c.post(f'/api/sites/{sid}/publish',headers=h)
    r=anon.get(asset['url']); assert r.status_code==200 and r.headers.get('x-content-type-options')=='nosniff'


def test_editor_markup_has_unique_ids_and_ai_does_not_mutate_legacy_copy_for_media_edits():
    from pathlib import Path
    html=BeautifulSoup(Path('static/editor.html').read_text(encoding='utf-8'),'html.parser'); ids=[x['id'] for x in html.select('[id]')]
    assert len(ids)==len(set(ids))
    reset_db(); c,h=auth_client('ai-side-effect@example.com','AI Side Effect'); activate_zylora(c,h,country='GB'); sid=create_site(c,h,'AI Side Effect','atelier-noir'); upload(c,h,sid,'storefront.png','Storefront')
    before=c.get(f'/api/sites/{sid}').json(); r=c.post(f'/api/sites/{sid}/ai-edit',headers=h,json={'instruction':'Replace the hero image with storefront.png'}); assert r.status_code==200,r.text
    after=c.get(f'/api/sites/{sid}').json(); assert after['tagline']==before['tagline'] and after['description']==before['description']
