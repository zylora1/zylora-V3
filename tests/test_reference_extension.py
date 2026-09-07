from __future__ import annotations

import hashlib
import json
from pathlib import Path

from fastapi.testclient import TestClient

from app.main import app
from app.templates import AI_RUNTIME_SLUG, BY_SLUG, TEMPLATES, _catalogue_project_ready

ROOT=Path(__file__).resolve().parents[1]


def test_reference_catalogue_is_fail_closed_and_only_verified_projects_publish():
    assert len(TEMPLATES) >= 40
    assert AI_RUNTIME_SLUG in BY_SLUG
    assert BY_SLUG[AI_RUNTIME_SLUG]['hidden'] is True
    assert not (ROOT/'site_templates').exists()
    assert (ROOT/'template_projects').exists()
    public=[]; workbench=[]
    for meta_path in sorted((ROOT/'template_projects').glob('*/metadata.json')):
        meta=json.loads(meta_path.read_text(encoding='utf-8'))
        if meta.get('publication',{}).get('state')=='public' and not meta.get('hidden'):
            public.append(meta.get('slug'))
            assert _catalogue_project_ready(meta_path.parent,meta) is True
        else:
            workbench.append(meta.get('slug'))
            assert meta.get('hidden') is True
            assert _catalogue_project_ready(meta_path.parent,meta) is False
    assert len(public)>=40 and not workbench
    assert {x['slug'] for x in TEMPLATES}==set(public)
    for stale in [
        'generated-template-metadata.json',
        'reference-extension-map.json',
        'reference-214-rebuild-manifest.json',
    ]:
        assert not (ROOT/'data'/stale).exists()


def test_unverified_candidates_are_not_public_routes():
    c=TestClient(app)
    assert c.get('/api/templates').json()=={'items':[],'retired':True}
    page=c.get('/templates',follow_redirects=False); assert page.status_code==307 and page.headers['location']=='/signup'
    for slug in ['bruno-simon-folio-2025','mr-pandas-paper-portfolio','cinder-frame','atelier-noir','ai-runtime']:
        assert c.get(f'/template-preview/{slug}').status_code==404
        assert c.get(f'/templates/{slug}').status_code==404


def test_exact_source_gate_requires_local_source_binary_and_render_evidence(tmp_path: Path):
    project=tmp_path/'candidate'; project.mkdir()
    meta={
        'slug':'candidate',
        'publication':{'state':'public','render_gate':'passed'},
        'source':{
            'fidelity':'exact_source',
            'repository':'https://github.com/example/example',
            'commit_sha':'a'*40,
            'local_path':'upstream',
            'license_file':'LICENSE.upstream',
        },
        'verification':{'gate_file':'verification/render-gate.json','render_home':'render/home.html','css_file':'app/globals.css'},
    }
    assert _catalogue_project_ready(project,meta) is False
    (project/'upstream').mkdir(); (project/'LICENSE.upstream').write_text('MIT',encoding='utf-8')
    (project/'render').mkdir(); (project/'app').mkdir(); (project/'verification').mkdir()
    render=project/'render/home.html'; render.write_text('<main>Exact render</main>',encoding='utf-8')
    (project/'app/globals.css').write_text('main{display:block}',encoding='utf-8')
    gate={
        'status':'passed','commit_sha':'a'*40,
        'source_tree_local':True,'binary_assets_local':True,
        'render_smoke_passed':True,'content_adapter_passed':True,
        'render_home_sha256':hashlib.sha256(render.read_bytes()).hexdigest(),
    }
    (project/'verification/render-gate.json').write_text(json.dumps(gate),encoding='utf-8')
    assert _catalogue_project_ready(project,meta) is True
    gate['binary_assets_local']=False
    (project/'verification/render-gate.json').write_text(json.dumps(gate),encoding='utf-8')
    assert _catalogue_project_ready(project,meta) is False


def test_reference_reconstruction_gate_accepts_verified_independent_implementation(tmp_path: Path):
    project=tmp_path/'reference-candidate'; project.mkdir()
    (project/'render').mkdir(); (project/'app').mkdir(); (project/'verification').mkdir(); (project/'public').mkdir()
    render=project/'render/home.html'
    render.write_text('<main><h1>{{BUSINESS_NAME}}</h1><img src="/template-assets/reference-candidate/hero.webp" alt=""></main>',encoding='utf-8')
    (project/'app/globals.css').write_text('main{display:grid}img{width:100%;object-fit:cover}',encoding='utf-8')
    (project/'assets-manifest.json').write_text(json.dumps({'all_assets_local':True,'commercial_reuse_verified':True,'assets':[]}),encoding='utf-8')
    gate={
        'status':'passed','rights_check_passed':True,'independent_source_passed':True,
        'asset_license_passed':True,'no_hotlinks':True,'render_smoke_passed':True,
        'responsive_passed':True,'motion_review_passed':True,'content_adapter_passed':True,
        'visual_fidelity_score':9.1,
        'render_home_sha256':hashlib.sha256(render.read_bytes()).hexdigest(),
    }
    (project/'verification/render-gate.json').write_text(json.dumps(gate),encoding='utf-8')
    meta={
        'slug':'reference-candidate',
        'publication':{'state':'public','render_gate':'passed'},
        'source':{'fidelity':'reference_reconstruction','reference_url':'https://example.com/reference'},
        'rights':{'mode':'third_party_reference','proprietary_source_reused':False,'protected_brand_assets_reused':False},
        'verification':{'gate_file':'verification/render-gate.json','render_home':'render/home.html','css_file':'app/globals.css','assets_manifest':'assets-manifest.json'},
    }
    assert _catalogue_project_ready(project,meta) is True


def test_reference_reconstruction_gate_rejects_low_fidelity_and_hotlinks(tmp_path: Path):
    project=tmp_path/'reference-candidate'; project.mkdir()
    (project/'render').mkdir(); (project/'app').mkdir(); (project/'verification').mkdir()
    render=project/'render/home.html'; render.write_text('<main><h1>Reference</h1></main>',encoding='utf-8')
    css=project/'app/globals.css'; css.write_text('main{display:block}',encoding='utf-8')
    (project/'assets-manifest.json').write_text(json.dumps({'all_assets_local':True,'commercial_reuse_verified':True}),encoding='utf-8')
    gate={
        'status':'passed','rights_check_passed':True,'independent_source_passed':True,
        'asset_license_passed':True,'no_hotlinks':True,'render_smoke_passed':True,
        'responsive_passed':True,'motion_review_passed':True,'content_adapter_passed':True,
        'visual_fidelity_score':8.4,
        'render_home_sha256':hashlib.sha256(render.read_bytes()).hexdigest(),
    }
    (project/'verification/render-gate.json').write_text(json.dumps(gate),encoding='utf-8')
    meta={
        'slug':'reference-candidate','publication':{'state':'public','render_gate':'passed'},
        'source':{'fidelity':'reference_reconstruction','reference_url':'https://example.com/reference'},
        'rights':{'mode':'third_party_reference','proprietary_source_reused':False,'protected_brand_assets_reused':False},
        'verification':{'gate_file':'verification/render-gate.json','render_home':'render/home.html','css_file':'app/globals.css','assets_manifest':'assets-manifest.json'},
    }
    assert _catalogue_project_ready(project,meta) is False
    gate['visual_fidelity_score']=9.0
    render.write_text('<main><h1>Reference</h1><img src="https://example.com/protected.jpg"></main>',encoding='utf-8')
    gate['render_home_sha256']=hashlib.sha256(render.read_bytes()).hexdigest()
    (project/'verification/render-gate.json').write_text(json.dumps(gate),encoding='utf-8')
    assert _catalogue_project_ready(project,meta) is False


def test_reference_factory_seed_queue_has_750_normalized_independent_reconstruction_jobs():
    data=json.loads((ROOT/'data/reference-reconstruction-queue.json').read_text(encoding='utf-8'))
    assert data['target_public_templates']==3000
    assert data['discovery_target']>=3600
    assert len(data['items'])==750
    assert len({x['reference_url'].rstrip('/') for x in data['items']})==750
    assert all(x['implementation_mode']=='independent_reconstruction' for x in data['items'])
    assert all(x['rights_mode']=='third_party_reference' for x in data['items'])
    assert all('ref=lapaninja' not in str(x['live_url']) for x in data['items'])


def test_catalogue_renderer_injects_shared_effect_runtime(monkeypatch, tmp_path: Path):
    import app.templates as templates_mod
    slug='shared-effects-candidate'
    project=tmp_path/'template_projects'/slug
    (project/'render').mkdir(parents=True)
    (project/'app').mkdir()
    (tmp_path/'static').mkdir()
    (project/'render/home.html').write_text('<main><h1 data-zy-reveal>{{TAGLINE}}</h1><p>{{DESCRIPTION}}</p></main>',encoding='utf-8')
    (project/'app/globals.css').write_text('h1{color:{{ACCENT}}}',encoding='utf-8')
    (tmp_path/'static/zylora-template-effects.css').write_text('[data-zy-reveal]{opacity:0}.zy-in{opacity:1}',encoding='utf-8')
    (tmp_path/'static/zylora-template-effects.js').write_text("document.documentElement.dataset.effects='on'",encoding='utf-8')
    meta={'slug':slug,'version':'1.0.0','page_slugs':[],'name':'Candidate','demo_business_name':'Candidate','demo_tagline':'Demo','demo_description':'Demo description','accent':'#123456'}
    monkeypatch.setattr(templates_mod,'ROOT',tmp_path)
    monkeypatch.setattr(templates_mod,'BY_SLUG',{templates_mod.AI_RUNTIME_SLUG:templates_mod.AI_RUNTIME_META,slug:meta})
    rendered=templates_mod._render_catalogue_project(slug,{'business_name':'Acme','tagline':'Sharp idea','description':'Clear copy','accent':'#abcdef'})
    assert 'Sharp idea' in rendered
    assert 'Clear copy' in rendered
    assert 'color:#abcdef' in rendered
    assert '[data-zy-reveal]{opacity:0}.zy-in{opacity:1}' in rendered
    assert 'data-zylora-effects' in rendered
    assert "dataset.effects='on'" in rendered
