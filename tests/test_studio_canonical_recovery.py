"""Exercise recovery through the real canonical save and revision APIs."""
from copy import deepcopy
import json
from uuid import uuid4

from fastapi.testclient import TestClient
from sqlalchemy import text

from app.main import app
from app.db import SessionLocal
from app.editor_state import create_revision
from app.security import clear_rate_limits


def owner_site():
    clear_rate_limits()
    # The application limiter is durable by design; each helper-created test
    # account must clear only its isolated test bucket to avoid cross-test 429s.
    with SessionLocal.begin() as db:
        db.execute(text('DELETE FROM rate_limit_buckets'))
    client = TestClient(app)
    signup = client.post('/api/auth/signup', json={
        'name': 'Recovery test', 'email': f'recovery-{uuid4().hex}@example.com',
        'password': 'RecoveryTest123!',
    })
    assert signup.status_code == 200, signup.text
    data = signup.json()
    headers = {'X-CSRF-Token': data['csrf_token']}
    assert client.post('/api/auth/email/verify', json={'token': data['debug_verification_token']}).status_code == 200
    assert client.post('/api/billing/select', headers=headers, json={'plan': 'FREE'}).status_code == 200
    created = client.post('/api/sites/blank', headers=headers, json={'name': 'Recovery website'})
    assert created.status_code == 200, created.text
    sid = created.json()['id']
    loaded = client.post(f'/api/sites/{sid}/studio-migrate', headers=headers)
    assert loaded.status_code == 200, loaded.text
    return client, headers, sid, loaded.json()['document']


def test_save_revision_preview_restore_and_stale_write_use_canonical_document():
    client, headers, sid, initial = owner_site()
    saved = deepcopy(initial)
    saved['tokens']['colors'] = {'primary': '#123456'}
    response = client.post(f'/api/sites/{sid}/studio-save', headers=headers, json=saved)
    assert response.status_code == 200, response.text
    revisions = client.get(f'/api/sites/{sid}/revisions').json()['items']
    assert len(revisions) >= 2, 'Save must preserve initial and saved canonical checkpoints'
    checkpoint = revisions[0]
    with SessionLocal() as db:
        state = json.loads(db.execute(text('SELECT state_json FROM site_revisions WHERE id=:id'), {'id': checkpoint['id']}).scalar_one())
    assert json.loads(state['studio_document_json'])['tokens']['colors']['primary'] == '#123456'
    changed = deepcopy(saved)
    changed['revision'] = response.json()['newRevision']
    changed['tokens']['colors']['primary'] = '#abcdef'
    second = client.post(f'/api/sites/{sid}/studio-save', headers=headers, json=changed)
    assert second.status_code == 200, second.text
    preview = client.get(f"/api/sites/{sid}/revisions/{checkpoint['id']}/preview")
    assert preview.status_code == 200, preview.text
    restored = client.post(f"/api/sites/{sid}/revisions/{checkpoint['id']}/restore", headers=headers)
    assert restored.status_code == 200, restored.text
    reopened = client.post(f'/api/sites/{sid}/studio-migrate', headers=headers).json()['document']
    assert reopened['tokens']['colors']['primary'] == '#123456'
    assert reopened['revision'] > second.json()['newRevision']
    stale = client.post(f'/api/sites/{sid}/studio-save', headers=headers, json=changed)
    assert stale.status_code == 409


def test_invalid_save_creates_no_checkpoint_and_does_not_change_canonical_data():
    client, headers, sid, initial = owner_site()
    before = client.get(f'/api/sites/{sid}/revisions').json()['items']
    invalid = deepcopy(initial)
    invalid['pages']['home']['nodes']['bad'] = {'id': 'bad', 'type': 'text'}
    assert client.post(f'/api/sites/{sid}/studio-save', headers=headers, json=invalid).status_code >= 400
    assert client.get(f'/api/sites/{sid}/revisions').json()['items'] == before
    assert client.post(f'/api/sites/{sid}/studio-migrate', headers=headers).json()['document'] == initial


def test_legacy_checkpoint_without_studio_payload_preserves_current_document():
    client, headers, sid, initial = owner_site()
    with SessionLocal.begin() as db:
        uid = db.execute(text('SELECT user_id FROM sites WHERE id=:id'), {'id': sid}).scalar_one()
        revision = create_revision(db, sid, uid)
        raw = db.execute(text('SELECT state_json FROM site_revisions WHERE id=:id'), {'id': revision['id']}).scalar_one()
        legacy = json.loads(raw)
        legacy.pop('studio_document_json', None)
        legacy.pop('studio_revision', None)
        db.execute(text('UPDATE site_revisions SET state_json=:state WHERE id=:id'), {'id': revision['id'], 'state': json.dumps(legacy)})
    response = client.post(f"/api/sites/{sid}/revisions/{revision['id']}/restore", headers=headers)
    assert response.status_code == 200, response.text
    assert client.post(f'/api/sites/{sid}/studio-migrate', headers=headers).json()['document'] == initial


def test_checkpoint_preview_includes_deleted_page_and_restore_preserves_publish():
    client, headers, sid, initial = owner_site()
    document = deepcopy(initial)
    document['pages']['services'] = deepcopy(document['pages']['home'])
    document['pages']['services'].update(id='services', name='Archived services', slug='services')
    page = document['pages']['services']
    id_map = {node_id: 'services-' + node_id for node_id in page['nodes']}
    page['rootNodeId'] = id_map[page['rootNodeId']]
    page['nodes'] = {id_map[node_id]: {**node, 'id':id_map[node_id],
        'parentId':id_map.get(node.get('parentId')), 'children':[id_map[child] for child in node['children']]}
        for node_id,node in page['nodes'].items()}
    first = client.post(f'/api/sites/{sid}/studio-save', headers=headers, json=document)
    assert first.status_code == 200, first.text
    checkpoint = client.get(f'/api/sites/{sid}/revisions').json()['items'][0]
    with SessionLocal() as db:
        count = db.execute(text('SELECT page_count FROM sites WHERE id=:id'), {'id':sid}).scalar_one()
    assert count == 2
    document['revision'] = first.json()['newRevision']
    del document['pages']['services']
    assert client.post(f'/api/sites/{sid}/studio-save', headers=headers, json=document).status_code == 200
    preview = client.get(f"/api/sites/{sid}/revisions/{checkpoint['id']}/preview?page=services")
    assert preview.status_code == 200, preview.text
    assert '<title>Archived services</title>' in preview.text
    assert 'noindex,nofollow' in preview.text
    with SessionLocal() as db:
        published_before = dict(db.execute(text('SELECT published_revision,published_studio_document_json,status FROM sites WHERE id=:id'), {'id':sid}).mappings().one())
    restored = client.post(f"/api/sites/{sid}/revisions/{checkpoint['id']}/restore", headers=headers)
    assert restored.status_code == 200, restored.text
    with SessionLocal() as db:
        published_after = dict(db.execute(text('SELECT published_revision,published_studio_document_json,status FROM sites WHERE id=:id'), {'id':sid}).mappings().one())
    assert published_after == published_before
    assert 'services' in client.post(f'/api/sites/{sid}/studio-migrate', headers=headers).json()['document']['pages']


def test_foreign_and_corrupt_revision_are_rejected_without_changes():
    client, headers, sid, initial = owner_site()
    other, other_headers, other_sid, _ = owner_site()
    assert client.post(f'/api/sites/{sid}/studio-save', headers=headers, json=initial).status_code == 200
    checkpoint = client.get(f'/api/sites/{sid}/revisions').json()['items'][0]
    path = f"/api/sites/{sid}/revisions/{checkpoint['id']}"
    assert other.get(path + '/preview').status_code == 404
    assert other.post(path + '/restore', headers=other_headers).status_code == 404
    assert other.post(f"/api/sites/{other_sid}/revisions/{checkpoint['id']}/restore", headers=other_headers).status_code == 404
    before = client.post(f'/api/sites/{sid}/studio-migrate', headers=headers).json()['document']
    with SessionLocal.begin() as db:
        db.execute(text('UPDATE site_revisions SET state_json=:state WHERE id=:id'), {'id':checkpoint['id'], 'state':json.dumps({'studio_document_json':'not json'})})
    assert client.post(path + '/restore', headers=headers).status_code == 422
    assert client.post(f'/api/sites/{sid}/studio-migrate', headers=headers).json()['document'] == before


def test_restore_rejects_revision_changed_since_dialog_opened():
    client, headers, sid, initial = owner_site()
    first = client.post(f'/api/sites/{sid}/studio-save', headers=headers, json=initial)
    checkpoint = client.get(f'/api/sites/{sid}/revisions').json()['items'][0]
    stale_revision = first.json()['newRevision']
    changed = deepcopy(initial)
    changed['revision'] = stale_revision
    changed['tokens']['colors'] = {'primary':'#987654'}
    assert client.post(f'/api/sites/{sid}/studio-save', headers=headers, json=changed).status_code == 200
    response = client.post(f"/api/sites/{sid}/revisions/{checkpoint['id']}/restore?expected_revision={stale_revision}", headers=headers)
    assert response.status_code == 409
    current = client.post(f'/api/sites/{sid}/studio-migrate', headers=headers).json()['document']
    assert current['tokens']['colors']['primary'] == '#987654'
