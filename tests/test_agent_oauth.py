"""Local OAuth authorization-code + PKCE contract coverage for agent clients."""

from base64 import urlsafe_b64encode
import hashlib
from urllib.parse import parse_qs, urlencode, urlparse
from uuid import uuid4

from fastapi.testclient import TestClient
from app.agent_gateway import issue_connector
from app.db import SessionLocal
from app.main import app
from tests.test_agent_gateway import _owner


def _pkce():
    verifier = urlsafe_b64encode(uuid4().bytes + uuid4().bytes).rstrip(b'=').decode('ascii')
    challenge = urlsafe_b64encode(hashlib.sha256(verifier.encode()).digest()).rstrip(b'=').decode('ascii')
    return verifier, challenge


def test_oauth_pkce_consent_issues_scoped_gateway_token_and_rotates_refresh():
    client, headers, site_id, _ = _owner('oauth')
    registered = client.post('/oauth/register', json={'client_name': 'Inspector AI', 'redirect_uris': ['https://client.example/callback']})
    assert registered.status_code == 200, registered.text
    client_id = registered.json()['client_id']
    verifier, challenge = _pkce()
    query = urlencode({
        'response_type': 'code', 'client_id': client_id, 'redirect_uri': 'https://client.example/callback',
        'scope': 'account.read sites.read sites.edit', 'state': 'state-123', 'code_challenge': challenge,
        'code_challenge_method': 'S256', 'resource': 'http://127.0.0.1:8000/api/agent', 'site_ids': site_id,
    })
    consent = client.get('/oauth/authorize?' + query)
    assert consent.status_code == 200, consent.text
    assert 'Authorize' in consent.text and site_id in consent.text
    csrf = client.cookies.get('zylora_oauth_consent')
    approved = client.post('/oauth/authorize', data={
        'response_type': 'code', 'client_id': client_id, 'redirect_uri': 'https://client.example/callback',
        'scope': 'account.read sites.read sites.edit', 'state': 'state-123', 'code_challenge': challenge,
        'code_challenge_method': 'S256', 'resource': 'http://127.0.0.1:8000/api/agent', 'site_ids': site_id,
        'csrf': csrf, 'decision': 'approve',
    }, follow_redirects=False)
    assert approved.status_code == 302, approved.text
    callback = parse_qs(urlparse(approved.headers['location']).query)
    assert callback['state'] == ['state-123'] and callback.get('code')

    tokens = client.post('/oauth/token', data={
        'grant_type': 'authorization_code', 'client_id': client_id, 'redirect_uri': 'https://client.example/callback',
        'code': callback['code'][0], 'code_verifier': verifier, 'resource': 'http://127.0.0.1:8000/api/agent',
    })
    assert tokens.status_code == 200, tokens.text
    token_body = tokens.json()
    assert token_body['token_type'] == 'Bearer' and token_body['refresh_token']
    replay = client.post('/oauth/token', data={
        'grant_type': 'authorization_code', 'client_id': client_id, 'redirect_uri': 'https://client.example/callback',
        'code': callback['code'][0], 'code_verifier': verifier, 'resource': 'http://127.0.0.1:8000/api/agent',
    })
    assert replay.status_code == 400 and replay.json()['error'] == 'invalid_grant'
    bearer = {'Authorization': 'Bearer ' + token_body['access_token']}
    read = client.post('/api/agent/invoke', headers=bearer, json={'tool': 'zylora.get_site_revision', 'arguments': {'site_id': site_id}})
    assert read.status_code == 200, read.text
    assert read.json()['site_id'] == site_id

    rotated = client.post('/oauth/token', data={'grant_type': 'refresh_token', 'refresh_token': token_body['refresh_token'], 'resource': 'http://127.0.0.1:8000/api/agent'})
    assert rotated.status_code == 200, rotated.text
    assert rotated.json()['refresh_token'] != token_body['refresh_token']
    old_refresh = client.post('/oauth/token', data={'grant_type': 'refresh_token', 'refresh_token': token_body['refresh_token']})
    assert old_refresh.status_code == 400 and old_refresh.json()['error'] == 'invalid_grant'

    revoked = client.post('/oauth/revoke', data={'token': rotated.json()['access_token']})
    assert revoked.status_code == 200
    assert client.get('/api/agent/capabilities', headers={'Authorization': 'Bearer ' + rotated.json()['access_token']}).status_code == 401
    client.close()


def test_oauth_rejects_non_pkce_and_unregistered_redirects():
    client, _, _, _ = _owner('oauth-invalid')
    registered = client.post('/oauth/register', json={'client_name': 'Invalid AI', 'redirect_uris': ['https://client.example/callback']})
    assert registered.status_code == 200
    bad = client.get('/oauth/authorize', params={
        'response_type': 'code', 'client_id': registered.json()['client_id'], 'redirect_uri': 'https://evil.example/callback',
        'scope': 'account.read', 'state': 'state', 'code_challenge': 'short', 'code_challenge_method': 'plain',
    })
    assert bad.status_code == 400
    assert bad.json()['detail']['code'] in {'PKCE_REQUIRED', 'INVALID_REDIRECT_URI'}
    client.close()


def test_oauth_can_issue_explicit_create_and_publish_scopes():
    client, _, _, _ = _owner('oauth-scoped')
    registered = client.post('/oauth/register', json={'client_name': 'Continuity AI', 'redirect_uris': ['https://client.example/scoped']})
    assert registered.status_code == 200, registered.text
    client_id = registered.json()['client_id']
    verifier, challenge = _pkce()
    scope = 'account.read sites.read sites.edit sites.create sites.publish'
    params = {
        'response_type': 'code', 'client_id': client_id, 'redirect_uri': 'https://client.example/scoped',
        'scope': scope, 'state': 'scoped-state', 'code_challenge': challenge,
        'code_challenge_method': 'S256', 'resource': 'http://127.0.0.1:8000/api/agent', 'all_sites': 'true',
    }
    consent = client.get('/oauth/authorize', params=params)
    assert consent.status_code == 200, consent.text
    csrf = client.cookies.get('zylora_oauth_consent')
    approved = client.post('/oauth/authorize', data={**params, 'csrf': csrf, 'decision': 'approve'}, follow_redirects=False)
    assert approved.status_code == 302, approved.text
    callback = parse_qs(urlparse(approved.headers['location']).query)
    token = client.post('/oauth/token', data={
        'grant_type': 'authorization_code', 'client_id': client_id, 'redirect_uri': 'https://client.example/scoped',
        'code': callback['code'][0], 'code_verifier': verifier, 'resource': 'http://127.0.0.1:8000/api/agent',
    })
    assert token.status_code == 200, token.text
    bearer = {'Authorization': 'Bearer ' + token.json()['access_token']}
    capabilities = client.get('/api/agent/capabilities', headers=bearer)
    assert capabilities.status_code == 200, capabilities.text
    names = set(capabilities.json()['tools'])
    assert {'zylora.create_site', 'zylora.add_page', 'zylora.publish_site'} <= names
    client.close()


def test_oauth_metadata_advertises_pkce_and_resource_validation():
    client = TestClient(app)
    metadata = client.get('/.well-known/oauth-authorization-server')
    assert metadata.status_code == 200
    body = metadata.json()
    assert body['code_challenge_methods_supported'] == ['S256']
    assert body['authorization_endpoint'].endswith('/oauth/authorize')
    protected = client.get('/.well-known/oauth-protected-resource')
    assert protected.status_code == 200 and protected.json()['bearer_methods_supported'] == ['header']
    client.close()


def test_gateway_rejects_connector_with_wrong_audience():
    client, _, _, _ = _owner('oauth-audience')
    user_id = client.get('/api/auth/me').json()['id']
    with SessionLocal.begin() as db:
        raw, _ = issue_connector(db, user_id=user_id, name='wrong audience', scopes=['account.read'], audience='https://evil.example/api')
    response = client.get('/api/agent/capabilities', headers={'Authorization': 'Bearer ' + raw})
    assert response.status_code == 401, response.text
    assert response.json()['detail']['code'] == 'INVALID_AUDIENCE'
    client.close()
