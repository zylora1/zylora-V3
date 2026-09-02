from __future__ import annotations
from html.parser import HTMLParser
from pathlib import Path
import hashlib, re, subprocess, json

ROOT=Path(__file__).resolve().parents[1]

class AuditParser(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids=[]; self.hrefs=[]; self.anchors=set(); self.buttons=0
    def handle_starttag(self, tag, attrs):
        d=dict(attrs)
        if 'id' in d: self.ids.append(d['id']); self.anchors.add(d['id'])
        if tag=='a' and 'href' in d: self.hrefs.append(d['href'])
        if tag=='button': self.buttons+=1

def test_html_integrity_and_internal_links():
    files=list((ROOT/'static').glob('*.html'))+list((ROOT/'site_templates').glob('*.html'))
    assert len(files)>=10
    for path in files:
        p=AuditParser(); p.feed(path.read_text(encoding='utf-8'))
        assert len(p.ids)==len(set(p.ids)), f'duplicate id in {path.name}'
        for href in p.hrefs:
            if href.startswith('#') and href!='#':
                assert href[1:] in p.anchors, f'missing anchor {href} in {path.name}'
            assert href!='javascript:void(0)', f'dead JS link in {path.name}'

def test_template_catalogue_exposes_only_verified_public_projects():
    from app.templates import _catalogue_project_ready
    files=sorted((ROOT/'site_templates').glob('*.html')) if (ROOT/'site_templates').exists() else []
    projects=sorted(p for p in (ROOT/'template_projects').glob('*') if p.is_dir()) if (ROOT/'template_projects').exists() else []
    assert files==[]
    public=0; blocked=0
    for project in projects:
        meta=json.loads((project/'metadata.json').read_text(encoding='utf-8'))
        gate=json.loads((project/'verification/render-gate.json').read_text(encoding='utf-8'))
        if meta.get('publication',{}).get('state')=='public' and not meta.get('hidden'):
            public+=1
            assert meta.get('publication',{}).get('render_gate')=='passed'
            assert gate.get('status')=='passed'
            assert _catalogue_project_ready(project,meta) is True
        else:
            blocked+=1
            assert meta.get('hidden') is True
            assert meta.get('publication',{}).get('state')=='workbench'
            assert meta.get('publication',{}).get('render_gate')=='blocked'
            assert gate.get('status')=='blocked'
            assert _catalogue_project_ready(project,meta) is False
    assert public>=40 and blocked==0

def test_css_balance_and_no_external_asset_hotlinks():
    for path in list((ROOT/'static').glob('*.css'))+list((ROOT/'site_templates').glob('*.html')):
        txt=path.read_text(encoding='utf-8')
        assert txt.count('{')==txt.count('}'), f'unbalanced braces: {path.name}'
        assert 'static.wixstatic.com' not in txt
        assert 'haulix' not in txt.lower()

def test_javascript_syntax():
    for path in (ROOT/'static').glob('*.js'):
        result=subprocess.run(['node','--check',str(path)],capture_output=True,text=True)
        assert result.returncode==0, result.stderr

def test_key_dashboard_contrast_pairs():
    # Relative luminance checks for the core dashboard tokens.
    def rgb(h):
        h=h.lstrip('#'); return tuple(int(h[i:i+2],16)/255 for i in (0,2,4))
    def lum(h):
        vals=[]
        for c in rgb(h): vals.append(c/12.92 if c<=.04045 else ((c+.055)/1.055)**2.4)
        return .2126*vals[0]+.7152*vals[1]+.0722*vals[2]
    def ratio(a,b):
        x,y=sorted((lum(a),lum(b)),reverse=True); return (x+.05)/(y+.05)
    assert ratio('#f7f8f5','#0d0f0f')>=7
    assert ratio('#111111','#d8ff45')>=7

def test_reference_catalogue_runtime_stays_empty_until_exact_source_render_gate_passes():
    from fastapi.testclient import TestClient
    from app.main import app
    with TestClient(app) as client:
        page=client.get('/templates')
        assert page.status_code==200
        items=client.get('/api/templates').json()['items']; assert len(items)>=40 and all(x.get('publication',{}).get('state')=='public' for x in items)
        for slug in ['bruno-simon-folio-2025','mr-pandas-paper-portfolio','cinder-frame','atelier-noir','ai-runtime']:
            assert client.get(f'/template-preview/{slug}').status_code==404

def test_runtime_sql_is_postgresql_portable():
    """Docker Compose uses PostgreSQL; application SQL must not use SQLite-only DML."""
    sqlite_only=("INSERT OR IGNORE", "INSERT OR REPLACE", "last_insert_rowid(", "PRAGMA ")
    offenders=[]
    for path in (ROOT/'app').glob('*.py'):
        text_=path.read_text(encoding='utf-8')
        if path.name=='db.py':
            # db.py intentionally recognizes SQLite migration syntax and translates it for PostgreSQL.
            continue
        for token in sqlite_only:
            if token.lower() in text_.lower(): offenders.append(f'{path.name}: {token}')
    assert not offenders, 'SQLite-only runtime SQL is incompatible with production PostgreSQL: '+', '.join(offenders)


def test_environment_names_are_normalized_fail_safe():
    from app.config import Settings
    assert Settings(app_env='Production').app_env == 'production'
    assert Settings(app_env='PROD').app_env == 'production'
    assert Settings(app_env='Live').app_env == 'production'
    assert Settings(app_env='DEV').app_env == 'development'
    with __import__('pytest').raises(ValueError):
        Settings(app_env='production-ish')


def test_custom_domain_runtime_keeps_security_headers():
    from uuid import uuid4
    from fastapi.testclient import TestClient
    from sqlalchemy import text
    from app.main import app
    from app.db import SessionLocal, now_iso
    email=f"headers-{uuid4().hex[:10]}@example.com"
    with TestClient(app) as client:
        signup=client.post('/api/auth/signup',json={'name':'Header Test','email':email,'password':'SecurePass123!'})
        assert signup.status_code==200, signup.text
        sj=signup.json()
        assert client.post('/api/auth/email/verify',json={'token':sj['debug_verification_token']}).status_code==200
        headers={'X-CSRF-Token':sj['csrf_token']}
        assert client.post('/api/billing/select',headers=headers,json={'plan':'FREE'}).status_code==200
        site=client.post('/api/sites',headers=headers,json={'business_name':'Header Test Site','description':'A valid consulting business description for header testing.','template_slug':'atelier-noir','origin':'AI','industry':'Consulting','style':'Editorial'})
        assert site.status_code==200, site.text
        site_id=site.json()['id']
        assert client.post(f'/api/sites/{site_id}/publish',headers=headers).status_code==200
        host=f"{uuid4().hex[:12]}.audit.test"
        with SessionLocal.begin() as db:
            db.execute(text("INSERT INTO custom_domains(id,site_id,hostname,provider,status,ssl_status,created_at,updated_at) VALUES (:i,:s,:h,'mock','ACTIVE','ACTIVE',:a,:a)"),{'i':str(uuid4()),'s':site_id,'h':host,'a':now_iso()})
        response=client.get('/',headers={'host':host})
        assert response.status_code==200
        assert response.headers['x-content-type-options']=='nosniff'
        assert response.headers['x-frame-options']=='SAMEORIGIN'
        assert response.headers['referrer-policy']=='strict-origin-when-cross-origin'
        assert 'frame-ancestors' in response.headers['content-security-policy']
        assert 'camera=()' in response.headers['permissions-policy']
