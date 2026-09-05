from __future__ import annotations
import io, json, zipfile
from pathlib import Path
from fastapi.testclient import TestClient
from bs4 import BeautifulSoup
from sqlalchemy import text

from app.main import app
from app.db import SessionLocal, migrate
from app.importer import detect_framework
from app.structured_editor import apply_document, instrument_editable_html, extract_editor_nodes, validate_operations_against_html
from tests.test_api import reset_db, auth_client

from PIL import Image
_buf=io.BytesIO(); Image.new('RGB',(2,2),(120,140,160)).save(_buf,format='PNG'); PNG=_buf.getvalue()

def make_zip(files: dict[str, bytes|str]) -> bytes:
    b=io.BytesIO()
    with zipfile.ZipFile(b,'w',zipfile.ZIP_DEFLATED) as z:
        for name,data in files.items(): z.writestr(name,data.encode() if isinstance(data,str) else data)
    return b.getvalue()

def test_framework_detection_matrix(tmp_path: Path):
    matrix=[('Next.js',{'next':'16'}),('Angular',{'@angular/core':'20'}),('Nuxt',{'nuxt':'4'}),('Vue',{'vue':'3'}),('SvelteKit',{'@sveltejs/kit':'2'}),('Svelte',{'svelte':'5'}),('Astro',{'astro':'5'}),('React',{'react':'19'})]
    for framework,deps in matrix:
        root=tmp_path/framework.replace('/','-'); root.mkdir(); (root/'package.json').write_text(json.dumps({'dependencies':deps}))
        assert detect_framework(root)[0]==framework
    html=tmp_path/'plain'; html.mkdir(); (html/'index.html').write_text('<h1>Plain</h1>')
    assert detect_framework(html)[0]=='HTML/CSS/JS'

def test_instrument_and_replace_all_visual_media():
    raw='''<html><head><style>.mast{background-image:url(hero.png)}</style></head><body><div class="mast"><picture><source srcset="small.png"><img src="hero.png" alt="Hero"></picture></div><video poster="poster.png"></video><svg><image href="art.png"></image></svg></body></html>'''
    html=instrument_editable_html(raw,'home','imported-runtime'); soup=BeautifulSoup(html,'html.parser')
    assert soup.select_one('.mast')['data-zylora-background-editable']=='true'
    nodes=extract_editor_nodes(html); roles={x.get('role') for x in nodes}; assert {'poster','svg-image'} <= roles
    img=soup.find('img'); vid=soup.find('video'); svg=soup.find('image'); mast=soup.select_one('.mast')
    ops=[
      {'page':'home','type':'replace_image','selector':f'[data-zylora-id="{img["data-zylora-id"]}"]','asset_id':'asset12345','mode':'image','alt':'New hero'},
      {'page':'home','type':'replace_image','selector':f'[data-zylora-id="{vid["data-zylora-id"]}"]','asset_id':'asset12345','mode':'image'},
      {'page':'home','type':'replace_image','selector':f'[data-zylora-id="{svg["data-zylora-id"]}"]','asset_id':'asset12345','mode':'image'},
      {'page':'home','type':'replace_image','selector':f'[data-zylora-id="{mast["data-zylora-id"]}"]','asset_id':'asset12345','mode':'background'},
    ]
    checked=validate_operations_against_html(html,ops)
    out=BeautifulSoup(apply_document(html,{'schemaVersion':3,'operations':checked},'home',asset_resolver=lambda _:'/media/asset12345/new.png'),'html.parser')
    assert out.find('img')['src'].endswith('/new.png') and out.find('source')['srcset'].endswith('/new.png')
    assert out.find('video')['poster'].endswith('/new.png') and out.find('image')['href'].endswith('/new.png')
    assert '/new.png' in out.select_one('.mast').get('style','')

def test_import_static_site_edit_publish_and_export():
    reset_db(); c,h=auth_client('importer@example.com','Importer')
    # Standard users are forbidden from universal import
    assert c.post('/api/sites/import',headers=h,files={'file':('website.zip',b'fake','application/zip')}).status_code==403
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE users SET role='SUPER_ADMIN' WHERE email='importer@example.com'"))
    project=make_zip({
      'site/index.html':'''<!doctype html><html><head><title>Imported Home</title><link rel="stylesheet" href="style.css"></head><body><nav><a href="about.html">About</a></nav><section class="hero"><picture><source srcset="hero.png"><img src="hero.png" alt="Original"></picture><h1>Imported Home</h1></section><video poster="poster.png"></video></body></html>''',
      'site/about.html':'<!doctype html><html><body><a href="index.html">Home</a><h1>About Imported</h1></body></html>',
      'site/style.css':'.hero{background-image:url(hero.png);min-height:50vh}',
      'site/hero.png':PNG,'site/poster.png':PNG,
    })
    r=c.post('/api/sites/import',headers=h,files={'file':('website.zip',project,'application/zip')},data={'site_name':'Imported Example'})
    assert r.status_code==200,r.text; j=r.json(); assert j['framework']=='HTML/CSS/JS' and j['page_count']==2 and j['managed_assets']==2
    sid=j['site_id']; detail=c.get(f'/api/sites/{sid}').json(); assert detail['origin']=='IMPORT' and detail['template_slug']=='imported-runtime'
    preview=c.get(f'/api/sites/{sid}/preview'); assert preview.status_code==200 and 'Imported Home' in preview.text
    ps=BeautifulSoup(preview.text,'html.parser'); assert f'/api/sites/{sid}/preview/about' in [a.get('href') for a in ps.find_all('a')]
    assert ps.select_one('.hero').get('data-zylora-background-editable')=='true'
    assets=c.get(f'/api/sites/{sid}/assets').json()['items']; assert len(assets)==2
    img=ps.find('img'); selector=f'[data-zylora-id="{img["data-zylora-id"]}"]'
    op={'page':'home','type':'replace_image','selector':selector,'asset_id':assets[1]['id'],'mode':'image','alt':'Replaced'}
    rr=c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':[op],'action':'IMAGE_REPLACE_TEST'}); assert rr.status_code==200,rr.text
    changed=BeautifulSoup(c.get(f'/api/sites/{sid}/preview').text,'html.parser'); assert changed.find('img')['src'].startswith(f'/media/{assets[1]["id"]}/'); assert changed.find('source')['srcset']==changed.find('img')['src']
    pub=c.post(f'/api/sites/{sid}/publish',headers=h); assert pub.status_code==200,pub.text
    slug=c.get(f'/api/sites/{sid}').json()['slug']; live=c.get(f'/s/{slug}'); assert live.status_code==200 and '/about' in live.text
    base_asset=assets[0]; media=c.get(base_asset['url']); assert media.status_code==200 and media.headers['cache-control'].startswith('public')
    # Grant source export through the normal purchase flow.
    order=c.post(f'/api/sites/{sid}/source-export/order',headers=h,json={'currency':'USD'}).json()
    verify=c.post(f'/api/sites/{sid}/source-export/verify',headers=h,json={'order_id':order['order_id'],'payment_id':order['mock_payment_id'],'signature':order['mock_signature']}); assert verify.status_code==200,verify.text
    exp=c.get(f'/api/sites/{sid}/export'); assert exp.status_code==200,exp.text[:200]
    z=zipfile.ZipFile(io.BytesIO(exp.content)); names=set(z.namelist()); assert {'package.json','app/page.jsx','app/about/page.jsx','app/zylora-edits.jsx','zylora-site.json'} <= names
    assert any(n.startswith('public/zylora-assets/') for n in names)
    exported=z.read('app/page.jsx').decode(); assert 'Imported Home' in exported and '/zylora-assets/' in exported


def test_source_only_frameworks_normalize_without_execution():
    import shutil
    from app.importer import prepare_import
    cases=[
      ('React', {'package.json':json.dumps({'dependencies':{'react':'19'}}),'src/App.jsx':'export default function App(){return (<main><h1>React Site</h1></main>)}'}),
      ('Next.js', {'package.json':json.dumps({'dependencies':{'next':'16','react':'19'}}),'app/page.jsx':'export default function Page(){return (<main><h1>Next Site</h1></main>)}'}),
      ('Angular', {'package.json':json.dumps({'dependencies':{'@angular/core':'20'}}),'src/app/home.component.html':'<main><h1>Angular Site</h1></main>'}),
      ('Vue', {'package.json':json.dumps({'dependencies':{'vue':'3'}}),'src/views/Home.vue':'<template><main><h1>Vue Site</h1></main></template>'}),
      ('Nuxt', {'package.json':json.dumps({'dependencies':{'nuxt':'4','vue':'3'}}),'pages/index.vue':'<template><main><h1>Nuxt Site</h1></main></template>'}),
      ('Svelte', {'package.json':json.dumps({'dependencies':{'svelte':'5'}}),'src/App.svelte':'<script>let x=1</script><main><h1>Svelte Site</h1></main>'}),
      ('SvelteKit', {'package.json':json.dumps({'dependencies':{'@sveltejs/kit':'2','svelte':'5'}}),'src/routes/+page.svelte':'<main><h1>SvelteKit Site</h1></main>'}),
      ('Astro', {'package.json':json.dumps({'dependencies':{'astro':'5'}}),'src/pages/index.astro':'---\nconst x=1\n---\n<main><h1>Astro Site</h1></main>'}),
    ]
    for framework,files in cases:
        temp,detected,manifest,pages,base,mode,warnings=prepare_import(make_zip(files),framework.lower().replace('.','-')+'.zip')
        try:
            assert detected==framework and mode=='source-normalized' and pages and '<h1' in pages[0].html.lower()
            assert manifest['conversion_mode']=='source-normalized'
        finally:
            shutil.rmtree(temp,ignore_errors=True)


def test_import_rejects_zip_traversal():
    reset_db(); c,h=auth_client('safeimport@example.com','Safe Import')
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE users SET role='SUPER_ADMIN' WHERE email='safeimport@example.com'"))
    bad=make_zip({'../outside.html':'<h1>bad</h1>'})
    r=c.post('/api/sites/import',headers=h,files={'file':('bad.zip',bad,'application/zip')})
    assert r.status_code==422
