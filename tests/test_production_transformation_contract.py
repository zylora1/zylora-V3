from fastapi.testclient import TestClient
from tests.test_api import reset_db, auth_client, create_site
from app.main import app


def test_ai_catalog_is_authenticated_and_model_allowlist_is_server_authoritative():
    reset_db(); client, headers = auth_client('model-contract@example.com', 'Model Contract')
    response = client.get('/api/ai/models')
    assert response.status_code == 200
    assert isinstance(response.json()['items'], list)
    anonymous = TestClient(app)
    assert anonymous.get('/api/ai/models').status_code == 401
    invalid = client.post('/api/sites', headers=headers, json={
        'business_name': 'Invalid model site', 'description': 'A valid business description',
        'origin': 'AI', 'model': 'provider/arbitrary-model'
    })
    assert invalid.status_code == 422


def test_editor_is_a_canonical_authenticated_studio_alias():
    reset_db(); client, headers = auth_client('studio-canonical@example.com', 'Studio Canonical')
    site_id = create_site(client, headers, 'Canonical Studio')
    response = client.get(f'/editor/{site_id}', follow_redirects=False)
    assert response.status_code == 307
    assert response.headers['location'] == f'/studio/{site_id}'
    assert client.get(f'/studio/{site_id}').status_code == 200
    assert TestClient(app).get(f'/editor/{site_id}').status_code == 401


def test_bfcache_session_restore_script_revalidates_without_logout_on_transient_failure():
    from pathlib import Path
    script = (Path(__file__).parents[1] / 'static' / 'session-restore.js').read_text(encoding='utf-8')
    assert "event.persisted" in script
    assert "credentials: 'same-origin'" in script
    assert 'location.replace' in script
    assert 'Transient' not in script
