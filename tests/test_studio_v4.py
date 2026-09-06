from __future__ import annotations

from copy import deepcopy
from concurrent.futures import ThreadPoolExecutor

import pytest
from fastapi.testclient import TestClient

from app.main import app
from app.studio_ai_operations import apply_v4_operations
from app.studio_document import BreakpointOverride, Node, NodeContent, Page, SiteDocument, validate_studio_document
from app.studio_renderer import render_page
from tests.test_ai_first_rebuild import auth, reset_db
from app.db import SessionLocal, now_iso
from sqlalchemy import text
import json


def _document() -> SiteDocument:
    root=Node(id='root',type='page',children=['section'])
    section=Node(id='section',type='section',parentId='root',children=['heading'])
    heading=Node(id='heading',type='heading',parentId='section',content=NodeContent(text='Welcome'))
    return SiteDocument(pages={'home':Page(id='home',slug='home',name='Home',rootNodeId='root',nodes={
        'root':root,'section':section,'heading':heading,
    })})


def test_document_rejects_cycles_duplicate_children_and_orphans():
    base=_document().model_dump()
    duplicate=deepcopy(base)
    duplicate['pages']['home']['nodes']['section']['children'].append('heading')
    with pytest.raises(ValueError):
        validate_studio_document(duplicate)

    orphan=deepcopy(base)
    orphan['pages']['home']['nodes']['orphan']={'id':'orphan','type':'text','content':{'text':'lost'}}
    with pytest.raises(ValueError):
        validate_studio_document(orphan)

    cycle=deepcopy(base)
    cycle['pages']['home']['nodes']['heading']['children']=['section']
    cycle['pages']['home']['nodes']['section']['parentId']='heading'
    with pytest.raises(ValueError):
        validate_studio_document(cycle)


def test_ai_operations_are_atomic_and_keep_parent_references_consistent():
    document=_document()
    changed=apply_v4_operations(document,[{
        'type':'REPARENT_NODE','pageId':'home','nodeId':'heading','newParentId':'root',
    }])
    assert changed.pages['home'].nodes['heading'].parentId == 'root'
    assert 'heading' in changed.pages['home'].nodes['root'].children
    assert 'heading' not in changed.pages['home'].nodes['section'].children

    original=document.model_dump()
    with pytest.raises(ValueError):
        apply_v4_operations(document,[
            {'type':'UPDATE_TEXT','pageId':'home','nodeId':'heading','text':'Changed'},
            {'type':'REPARENT_NODE','pageId':'home','nodeId':'section','newParentId':'heading'},
        ])
    assert document.model_dump() == original


def test_renderer_escapes_content_filters_urls_and_css_and_emits_visibility():
    document=_document()
    heading=document.pages['home'].nodes['heading']
    heading.content.text='<script>alert(1)</script>'
    heading.style.css={
        'fontSize':'32px',
        'backgroundImage':'url(javascript:alert(1))',
        'color':'red;} body {display:none',
        'fontFamily':'Inter</style><script>alert(2)</script>',
    }
    heading.visibility='hidden'
    heading.responsiveOverrides['mobile']=BreakpointOverride(visibility='visible')
    rendered=render_page(document,'home')
    assert '&lt;script&gt;alert(1)&lt;/script&gt;' in rendered
    assert 'font-size: 32px' in rendered
    assert 'javascript:' not in rendered
    assert 'body {display:none' not in rendered
    assert 'alert(2)' not in rendered
    assert '.z-node-heading { display: none !important; }' in rendered
    assert '@media (max-width: 767px) { .z-node-heading { display: revert !important; } }' in rendered


def test_studio_migration_load_save_conflict_and_owned_shell():
    reset_db()
    client,headers=auth()
    created=client.post('/api/sites',headers=headers,json={
        'business_name':'Studio V4 QA',
        'description':'A professional design practice website with Home, Services and Contact pages.',
        'origin':'AI','industry':'Design','style':'Editorial',
    })
    assert created.status_code == 200, created.text
    site_id=created.json()['id']

    shell=client.get(f'/studio/{site_id}')
    assert shell.status_code == 200
    assert site_id in shell.text and 'csrfToken' in shell.text
    assert '/static/studio-ux.css' in shell.text

    migrated=client.post(f'/api/sites/{site_id}/studio-migrate',headers=headers)
    assert migrated.status_code == 200, migrated.text
    document=migrated.json()['document']
    assert document['schemaVersion'] == 4 and document['revision'] == 1

    saved=client.post(f'/api/sites/{site_id}/studio-save',headers=headers,json=document)
    assert saved.status_code == 200, saved.text
    assert saved.json()['newRevision'] == 2

    stale=client.post(f'/api/sites/{site_id}/studio-save',headers=headers,json=document)
    assert stale.status_code == 409
    assert stale.json()['detail']['code'] == 'STUDIO_REVISION_CONFLICT'
    assert stale.json()['detail']['serverRevision'] == 2

    anonymous=TestClient(app)
    assert anonymous.get(f'/studio/{site_id}').status_code == 401


def test_studio_concurrent_saves_use_database_compare_and_swap():
    reset_db()
    client,headers=auth()
    created=client.post('/api/sites',headers=headers,json={
        'business_name':'Studio CAS QA',
        'description':'A professional creative business website with services and contact information.',
        'origin':'AI','industry':'Design','style':'Editorial',
    })
    assert created.status_code == 200, created.text
    site_id=created.json()['id']
    document=client.post(f'/api/sites/{site_id}/studio-migrate',headers=headers).json()['document']
    first=deepcopy(document)
    second=deepcopy(document)
    first['metadata']['concurrentWriter']='first'
    second['metadata']['concurrentWriter']='second'

    def save(payload):
        return client.post(f'/api/sites/{site_id}/studio-save',headers=headers,json=payload)

    with ThreadPoolExecutor(max_workers=2) as pool:
        responses=list(pool.map(save,(first,second)))
    assert sorted(response.status_code for response in responses) == [200,409]

    current=client.post(f'/api/sites/{site_id}/studio-migrate',headers=headers).json()['document']
    assert current['revision'] == 2
    assert current['metadata']['concurrentWriter'] in {'first','second'}


def test_v4_canary_snapshot_is_immutable_and_legacy_rollback_is_proven():
    reset_db();client,headers=auth()
    created=client.post('/api/sites',headers=headers,json={'business_name':'Legacy Rollback Proof','description':'A complete production rollback verification website.','origin':'AI','industry':'Design','style':'Editorial'})
    assert created.status_code==200,created.text
    site_id=created.json()['id'];document=client.post(f'/api/sites/{site_id}/studio-migrate',headers=headers).json()['document']
    heading=next(node for node in document['pages']['home']['nodes'].values() if node['type']=='heading')
    heading['content']['text']='V4 immutable canary marker'
    saved=client.post(f'/api/sites/{site_id}/studio-save',headers=headers,json=document);assert saved.status_code==200,saved.text
    with SessionLocal.begin() as db:
        me=client.get('/api/auth/me').json();db.execute(text("UPDATE users SET role='SUPER_ADMIN',email_verified=1 WHERE id=:u"),{'u':me['id']})
        site=dict(db.execute(text('SELECT * FROM sites WHERE id=:s'),{'s':site_id}).mappings().one())
        snapshot=json.dumps({k:site[k] for k in ('business_name','tagline','description','accent','slug','template_slug','seo_json') if k in site})
        db.execute(text("UPDATE sites SET status='LIVE',published_snapshot_json=:snap,published_structure_json=draft_structure_json,updated_at=:now WHERE id=:s"),{'snap':snapshot,'now':now_iso(),'s':site_id})
    legacy=client.get(f"/s/{created.json()['slug']}");assert legacy.status_code==200 and 'Legacy Rollback Proof' in legacy.text
    captured=client.post(f'/api/admin/sites/{site_id}/renderer/capture-v4',headers=headers);assert captured.status_code==200,captured.text
    canary=client.post(f'/api/admin/sites/{site_id}/renderer',headers=headers,json={'state':'V4_CANARY'});assert canary.status_code==200,canary.text
    rendered=client.get(f"/s/{created.json()['slug']}");assert rendered.headers['X-Zylora-Renderer']=='V4_CANARY' and 'V4 immutable canary marker' in rendered.text
    draft=client.post(f'/api/sites/{site_id}/studio-migrate',headers=headers).json()['document'];draft_heading=next(node for node in draft['pages']['home']['nodes'].values() if node['type']=='heading');draft_heading['content']['text']='UNPUBLISHED DRAFT MUST NOT LEAK'
    assert client.post(f'/api/sites/{site_id}/studio-save',headers=headers,json=draft).status_code==200
    still_canary=client.get(f"/s/{created.json()['slug']}");assert 'V4 immutable canary marker' in still_canary.text and 'UNPUBLISHED DRAFT MUST NOT LEAK' not in still_canary.text
    rollback=client.post(f'/api/admin/sites/{site_id}/renderer',headers=headers,json={'state':'LEGACY'});assert rollback.status_code==200,rollback.text
    restored=client.get(f"/s/{created.json()['slug']}");assert restored.status_code==200 and 'Legacy Rollback Proof' in restored.text and 'V4 immutable canary marker' not in restored.text
    with SessionLocal() as db:
        audit=db.execute(text("SELECT metadata FROM audit_log WHERE action='RENDERER_ROLLBACK' AND object_id=:s ORDER BY id DESC LIMIT 1"),{'s':site_id}).scalar_one()
    assert json.loads(audit)=={'from':'V4_CANARY','to':'LEGACY'}
