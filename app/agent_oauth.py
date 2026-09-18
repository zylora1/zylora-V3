"""First-party OAuth authorization for the single Zylora agent gateway.

This provider is intentionally small and standards-shaped: public clients use
authorization-code + PKCE, redirect URIs are exact matches, consent is tied to
the logged-in Zylora session and a short-lived CSRF cookie, access tokens are
opaque hashed connector credentials, and refresh tokens rotate on every use.
The resulting credential is consumed by ``app.agent_gateway``; this module
does not introduce another tool service or website model.
"""

from __future__ import annotations

from datetime import datetime, timedelta, timezone
import base64
import hashlib
import hmac
import json
from html import escape
from secrets import token_urlsafe
from typing import Any
from urllib.parse import parse_qs, urlencode, urlparse, urlunparse
from uuid import uuid4

from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import HTMLResponse, JSONResponse, RedirectResponse
from sqlalchemy import text

from .agent_gateway import ALLOWED_SCOPES, _SCOPE_ORDER, issue_connector
from .config import settings
from .db import SessionLocal, now_iso
from .security import current_user, durable_rate_limit


router = APIRouter()
OAUTH_RESOURCE = settings.app_url.rstrip('/') + '/api/agent'
OAUTH_AUTH_CODE_TTL = timedelta(minutes=5)
OAUTH_ACCESS_TTL = timedelta(hours=1)
OAUTH_REFRESH_TTL = timedelta(days=30)


def _now() -> datetime:
    return datetime.now(timezone.utc)


def _iso(stamp: datetime) -> str:
    return stamp.astimezone(timezone.utc).isoformat()


def _hash(value: str) -> str:
    return hashlib.sha256(value.encode('utf-8')).hexdigest()


def _valid_redirect_uri(value: str) -> bool:
    try:
        parsed = urlparse(value)
    except ValueError:
        return False
    if parsed.fragment or parsed.username or parsed.password or not parsed.netloc or parsed.path == '':
        return False
    host = (parsed.hostname or '').lower().rstrip('.')
    if parsed.scheme == 'https':
        return True
    return parsed.scheme == 'http' and host in {'127.0.0.1', 'localhost', '::1'}


def _validate_redirects(values: Any) -> list[str]:
    if not isinstance(values, list):
        raise HTTPException(422, detail={'code': 'INVALID_REDIRECT_URI', 'message': 'redirect_uris must be a list.'})
    redirects = list(dict.fromkeys(str(value).strip() for value in values if str(value).strip()))
    if not redirects or len(redirects) > 20 or any(len(value) > 2048 or not _valid_redirect_uri(value) for value in redirects):
        raise HTTPException(422, detail={'code': 'INVALID_REDIRECT_URI', 'message': 'Use exact HTTPS redirect URIs or loopback HTTP redirects.'})
    return redirects


def _client(db, client_id: str) -> dict[str, Any]:
    row = db.execute(text('SELECT * FROM agent_oauth_clients WHERE client_id=:client_id AND active=1'), {'client_id': client_id}).mappings().first()
    if not row:
        raise HTTPException(400, detail={'code': 'INVALID_CLIENT', 'message': 'Unknown or inactive OAuth client.'})
    return dict(row)


def _redirect_for(client: dict[str, Any], redirect_uri: str) -> bool:
    try:
        redirects = json.loads(client.get('redirect_uris_json') or '[]')
    except (TypeError, ValueError):
        redirects = []
    return redirect_uri in redirects


def _scopes(raw: str | None) -> list[str]:
    requested = list(dict.fromkeys(str(raw or 'account.read').split()))
    invalid = sorted(set(requested) - ALLOWED_SCOPES)
    if invalid or not requested:
        raise HTTPException(400, detail={'code': 'INVALID_SCOPE', 'message': 'Unsupported OAuth scope requested.', 'invalid_scopes': invalid})
    return [scope for scope in _SCOPE_ORDER if scope in requested]


def _resource(value: str | None) -> str:
    if value and value != OAUTH_RESOURCE:
        raise HTTPException(400, detail={'code': 'INVALID_RESOURCE', 'message': 'The requested resource is not the Zylora Agent Gateway.'})
    return OAUTH_RESOURCE


def _site_selection(user_id: str, site_ids: list[str], all_sites: bool, scopes: list[str]) -> tuple[list[str], bool]:
    normalized = sorted(set(str(value).strip() for value in site_ids if str(value).strip()))
    if all_sites and normalized:
        raise HTTPException(400, detail={'code': 'INVALID_SITE_ALLOWLIST', 'message': 'Choose explicit sites or all sites, not both.'})
    if {'sites.read', 'sites.edit', 'sites.publish'} & set(scopes):
        if not normalized and not all_sites:
            raise HTTPException(400, detail={'code': 'SITE_ALLOWLIST_REQUIRED', 'message': 'Choose at least one site before authorizing.'})
    if 'sites.create' in scopes and not all_sites:
        raise HTTPException(400, detail={'code': 'SITE_ALLOWLIST_REQUIRED', 'message': 'sites.create requires allowing all current and future sites.'})
    if normalized:
        with SessionLocal() as db:
            placeholders = ','.join(f':site_{index}' for index in range(len(normalized)))
            rows = db.execute(text(f'SELECT id FROM sites WHERE user_id=:user_id AND id IN ({placeholders})'), {'user_id': user_id, **{f'site_{index}': value for index, value in enumerate(normalized)}}).scalars().all()
        if set(rows) != set(normalized):
            raise HTTPException(400, detail={'code': 'INVALID_SITE_ALLOWLIST', 'message': 'Every selected site must belong to the authenticated account.'})
    return normalized, all_sites


def _authorize_values(values: dict[str, Any], user_id: str) -> dict[str, Any]:
    client_id = str(values.get('client_id') or '').strip()
    redirect_uri = str(values.get('redirect_uri') or '').strip()
    response_type = str(values.get('response_type') or 'code')
    state = str(values.get('state') or '').strip()
    challenge = str(values.get('code_challenge') or '').strip()
    method = str(values.get('code_challenge_method') or 'S256').upper()
    if response_type != 'code' or not state or len(state) > 1024:
        raise HTTPException(400, detail={'code': 'INVALID_AUTHORIZATION_REQUEST', 'message': 'response_type=code and a bounded state value are required.'})
    if method != 'S256' or len(challenge) < 43 or len(challenge) > 128:
        raise HTTPException(400, detail={'code': 'PKCE_REQUIRED', 'message': 'Authorization-code clients must use S256 PKCE.'})
    scopes = _scopes(str(values.get('scope') or 'account.read'))
    with SessionLocal() as db:
        client = _client(db, client_id)
    if not _redirect_for(client, redirect_uri):
        raise HTTPException(400, detail={'code': 'INVALID_REDIRECT_URI', 'message': 'redirect_uri does not match the registered client.'})
    resource = _resource(str(values.get('resource') or '') or None)
    raw_sites = values.get('site_ids') or []
    if isinstance(raw_sites, str):
        raw_sites = [item for item in raw_sites.split(',') if item]
    all_sites = str(values.get('all_sites') or '').lower() in {'1', 'true', 'on', 'yes'}
    site_ids, all_sites = _site_selection(user_id, list(raw_sites), all_sites, scopes)
    return {
        'client': client, 'client_id': client_id, 'redirect_uri': redirect_uri, 'state': state,
        'scope': scopes, 'code_challenge': challenge, 'code_challenge_method': method,
        'resource': resource, 'site_ids': site_ids, 'all_sites': all_sites,
    }


def _set_query(url: str, values: dict[str, str]) -> str:
    parsed = urlparse(url)
    query = parse_qs(parsed.query, keep_blank_values=True)
    query.update({key: [value] for key, value in values.items()})
    return urlunparse(parsed._replace(query=urlencode(query, doseq=True)))


def _consent_page(request: Request, values: dict[str, Any], user: dict[str, Any], csrf: str) -> HTMLResponse:
    scope_labels = ', '.join(values['scope'])
    with SessionLocal() as db:
        sites = db.execute(text('SELECT id,business_name,slug FROM sites WHERE user_id=:user_id ORDER BY updated_at DESC'), {'user_id': user['id']}).mappings().all()
    selected = set(values['site_ids'])
    site_options = ''.join(
        f'<label><input type="checkbox" name="site_ids" value="{escape(str(site["id"]))}" {"checked" if str(site["id"]) in selected else ""}> {escape(str(site["business_name"] or site["slug"] or site["id"]))}</label>'
        for site in sites
    )
    hidden = ''.join(f'<input type="hidden" name="{escape(key)}" value="{escape(str(value))}">' for key, value in {
        'client_id': values['client_id'], 'redirect_uri': values['redirect_uri'], 'response_type': 'code',
        'scope': ' '.join(values['scope']), 'state': values['state'], 'code_challenge': values['code_challenge'],
        'code_challenge_method': values['code_challenge_method'], 'resource': values['resource'], 'csrf': csrf,
    }.items())
    html = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Connect AI client · Zylora</title><style>body{{font:16px system-ui;margin:0;background:#f6f7fb;color:#16181d}}main{{max-width:620px;margin:8vh auto;background:white;border:1px solid #dfe3ec;border-radius:16px;padding:32px;box-shadow:0 18px 50px #1d2a4420}}h1{{margin-top:0}}label{{display:block;padding:8px 0}}.muted{{color:#5e6675}}button{{margin-top:20px;padding:12px 18px;border:0;border-radius:8px;background:#5b5ce2;color:white;font-weight:700}}button.secondary{{background:#eef0f6;color:#222;margin-left:8px}}</style></head><body><main><p class="muted">ZYLORA · AI CONNECTION</p><h1>Connect {escape(str(values['client'].get('client_name') or 'AI client'))}</h1><p>This client requests <strong>{escape(scope_labels)}</strong> access to your Zylora tools.</p><p class="muted">Signed in as {escape(str(user.get('email') or 'account'))}. Select the sites this connection may access.</p><form method="post" action="/oauth/authorize">{hidden}<div>{site_options}</div><label><input type="checkbox" name="all_sites" value="true" {"checked" if values['all_sites'] else ""}> Allow all current and future sites</label><button type="submit" name="decision" value="approve">Authorize</button><button class="secondary" type="submit" name="decision" value="deny">Cancel</button></form></main></body></html>'''
    response = HTMLResponse(html)
    response.set_cookie('zylora_oauth_consent', csrf, httponly=True, samesite='lax', secure=settings.app_env == 'production', max_age=300)
    return response


@router.post('/oauth/register')
async def register_client(request: Request):
    """Register a public PKCE client with exact redirect URIs."""
    try:
        payload = await request.json()
    except Exception:
        raw = parse_qs((await request.body()).decode('utf-8'), keep_blank_values=True)
        payload = {key: values[-1] if len(values) == 1 else values for key, values in raw.items()}
    name = str(payload.get('client_name') or '').strip()
    if not name or len(name) > 120:
        raise HTTPException(422, detail={'code': 'INVALID_CLIENT_NAME', 'message': 'client_name is required.'})
    redirects = payload.get('redirect_uris')
    if isinstance(redirects, str):
        redirects = [redirects]
    redirects = _validate_redirects(redirects)
    durable_rate_limit('agent-oauth-register:' + (request.client.host if request.client else 'unknown'), 20, 3600)
    client_id = 'zylora_client_' + token_urlsafe(18)
    with SessionLocal.begin() as db:
        db.execute(text('INSERT INTO agent_oauth_clients(client_id,client_name,redirect_uris_json,token_endpoint_auth_method,active,created_at) VALUES (:id,:name,:uris,\'none\',1,:created)'), {'id': client_id, 'name': name, 'uris': json.dumps(redirects, separators=(',', ':')), 'created': now_iso()})
    return {'client_id': client_id, 'client_name': name, 'client_type': 'public', 'token_endpoint_auth_method': 'none', 'redirect_uris': redirects}


@router.api_route('/oauth/authorize', methods=['GET', 'POST'])
async def authorize(request: Request):
    user = current_user(request)
    if request.method == 'GET':
        values = {key: request.query_params.get(key, '') for key in ('client_id', 'redirect_uri', 'response_type', 'state', 'scope', 'code_challenge', 'code_challenge_method', 'resource', 'all_sites')}
        values['site_ids'] = request.query_params.getlist('site_ids')
        params = _authorize_values(values, user['id'])
        csrf = token_urlsafe(24)
        
        if params['client_id'] == 'zylora_penpot_client':
            # Auto-authorize trusted Penpot client
            request.method = 'POST'
            values['decision'] = 'approve'
        return _consent_page(request, params, user, csrf)
    parsed = parse_qs((await request.body()).decode('utf-8'), keep_blank_values=True)
    values = {key: items[-1] if len(items) == 1 else items for key, items in parsed.items()}
    cookie = request.cookies.get('zylora_oauth_consent')
    if not cookie or not hmac.compare_digest(cookie, str(values.get('csrf') or '')):
        raise HTTPException(400, detail={'code': 'CSRF_INVALID', 'message': 'The authorization request expired; restart the connection.'})
    params = _authorize_values(values, user['id'])
    if str(values.get('decision') or '') != 'approve':
        return RedirectResponse(_set_query(params['redirect_uri'], {'error': 'access_denied', 'state': params['state']}), status_code=302)
    raw_code = 'zylora_code_' + token_urlsafe(32)
    with SessionLocal.begin() as db:
        db.execute(text('''INSERT INTO agent_oauth_codes(code_hash,client_id,user_id,redirect_uri,scopes_json,site_ids_json,all_sites,code_challenge,code_challenge_method,resource,expires_at,consumed,created_at)
            VALUES (:code_hash,:client_id,:user_id,:redirect_uri,:scopes,:site_ids,:all_sites,:challenge,:method,:resource,:expires_at,0,:created_at)'''), {
            'code_hash': _hash(raw_code), 'client_id': params['client_id'], 'user_id': user['id'], 'redirect_uri': params['redirect_uri'],
            'scopes': json.dumps(params['scope'], separators=(',', ':')), 'site_ids': None if params['all_sites'] else json.dumps(params['site_ids'], separators=(',', ':')),
            'all_sites': 1 if params['all_sites'] else 0, 'challenge': params['code_challenge'], 'method': params['code_challenge_method'],
            'resource': params['resource'], 'expires_at': _iso(_now() + OAUTH_AUTH_CODE_TTL), 'created_at': now_iso(),
        })
    return RedirectResponse(_set_query(params['redirect_uri'], {'code': raw_code, 'state': params['state']}), status_code=302)


async def _form(request: Request) -> dict[str, str]:
    parsed = parse_qs((await request.body()).decode('utf-8'), keep_blank_values=True)
    return {key: values[-1] for key, values in parsed.items()}


def _pkce_valid(verifier: str, challenge: str) -> bool:
    digest = base64.urlsafe_b64encode(hashlib.sha256(verifier.encode('utf-8')).digest()).rstrip(b'=').decode('ascii')
    return hmac.compare_digest(digest, challenge)


def _oauth_error(code: str, message: str, status: int = 400) -> JSONResponse:
    return JSONResponse({'error': code, 'error_description': message}, status_code=status, headers={'Cache-Control': 'no-store', 'Pragma': 'no-cache'})


@router.post('/oauth/token')
async def token(request: Request):
    values = await _form(request)
    grant = values.get('grant_type')
    if grant == 'authorization_code':
        raw_code = values.get('code') or ''
        client_id = values.get('client_id') or ''
        redirect_uri = values.get('redirect_uri') or ''
        verifier = values.get('code_verifier') or ''
        resource = values.get('resource') or None
        if not raw_code or not client_id or not redirect_uri or not verifier:
            return _oauth_error('invalid_request', 'code, client_id, redirect_uri and code_verifier are required')
        with SessionLocal.begin() as db:
            code = db.execute(text('SELECT * FROM agent_oauth_codes WHERE code_hash=:code_hash AND client_id=:client_id'), {'code_hash': _hash(raw_code), 'client_id': client_id}).mappings().first()
            if not code:
                return _oauth_error('invalid_grant', 'Authorization code is invalid or already consumed')
            code = dict(code)
            if int(code.get('consumed') or 0) or datetime.fromisoformat(str(code['expires_at']).replace('Z', '+00:00')) <= _now():
                return _oauth_error('invalid_grant', 'Authorization code is expired')
            if not hmac.compare_digest(str(code['redirect_uri']), redirect_uri) or not _pkce_valid(verifier, str(code['code_challenge'])):
                return _oauth_error('invalid_grant', 'redirect_uri or PKCE verification failed')
            if resource and resource != code['resource']:
                return _oauth_error('invalid_target', 'resource does not match the authorization request')
            consumed = db.execute(text('UPDATE agent_oauth_codes SET consumed=1 WHERE code_hash=:code_hash AND consumed=0'), {'code_hash': code['code_hash']})
            if consumed.rowcount != 1:
                return _oauth_error('invalid_grant', 'Authorization code is invalid or already consumed')
            try:
                scopes = json.loads(code['scopes_json'] or '[]')
            except (TypeError, ValueError):
                scopes = []
            try:
                site_ids = json.loads(code['site_ids_json']) if code.get('site_ids_json') else []
            except (TypeError, ValueError):
                site_ids = []
            raw_access, connector = issue_connector(db, user_id=code['user_id'], name=f"OAuth · {client_id[:24]}", scopes=scopes, site_ids=site_ids, all_sites=bool(code.get('all_sites')), expires_at=_iso(_now() + OAUTH_ACCESS_TTL), audience=code['resource'])
            raw_refresh = 'zylora_refresh_' + token_urlsafe(32)
            db.execute(text('INSERT INTO agent_refresh_tokens(token_hash,connector_id,expires_at,created_at) VALUES (:token_hash,:connector_id,:expires_at,:created_at)'), {'token_hash': _hash(raw_refresh), 'connector_id': connector['id'], 'expires_at': _iso(_now() + OAUTH_REFRESH_TTL), 'created_at': now_iso()})
        return JSONResponse({'access_token': raw_access, 'token_type': 'Bearer', 'expires_in': int(OAUTH_ACCESS_TTL.total_seconds()), 'refresh_token': raw_refresh, 'scope': ' '.join(scopes), 'resource': code['resource']}, headers={'Cache-Control': 'no-store', 'Pragma': 'no-cache'})
    if grant == 'refresh_token':
        raw_refresh = values.get('refresh_token') or ''
        if not raw_refresh:
            return _oauth_error('invalid_request', 'refresh_token is required')
        with SessionLocal.begin() as db:
            row = db.execute(text('SELECT r.*,c.user_id,c.name,c.scopes_json,c.site_ids_json,c.status,c.audience FROM agent_refresh_tokens r JOIN agent_connectors c ON c.id=r.connector_id WHERE r.token_hash=:token_hash'), {'token_hash': _hash(raw_refresh)}).mappings().first()
            if not row or row.get('revoked_at') or str(row.get('status') or '') != 'ACTIVE':
                return _oauth_error('invalid_grant', 'Refresh token is invalid or revoked')
            if datetime.fromisoformat(str(row['expires_at']).replace('Z', '+00:00')) <= _now():
                return _oauth_error('invalid_grant', 'Refresh token is expired')
            if values.get('resource') and values['resource'] != row.get('audience'):
                return _oauth_error('invalid_target', 'resource does not match the connector audience')
            raw_access = 'zylora_ag_' + token_urlsafe(32)
            raw_new_refresh = 'zylora_refresh_' + token_urlsafe(32)
            rotated = db.execute(text('UPDATE agent_refresh_tokens SET revoked_at=:revoked_at,rotated_to_hash=:rotated_to_hash WHERE token_hash=:old_hash AND revoked_at IS NULL'), {'revoked_at': now_iso(), 'rotated_to_hash': _hash(raw_new_refresh), 'old_hash': _hash(raw_refresh)})
            if rotated.rowcount != 1:
                return _oauth_error('invalid_grant', 'Refresh token has already been rotated')
            db.execute(text('UPDATE agent_connectors SET token_hash=:token_hash,expires_at=:expires_at,last_used_at=NULL WHERE id=:id AND status=\'ACTIVE\''), {'token_hash': _hash(raw_access), 'expires_at': _iso(_now() + OAUTH_ACCESS_TTL), 'id': row['connector_id']})
            db.execute(text('INSERT INTO agent_refresh_tokens(token_hash,connector_id,expires_at,created_at) VALUES (:token_hash,:connector_id,:expires_at,:created_at)'), {'token_hash': _hash(raw_new_refresh), 'connector_id': row['connector_id'], 'expires_at': _iso(_now() + OAUTH_REFRESH_TTL), 'created_at': now_iso()})
            try:
                scopes = json.loads(row['scopes_json'] or '[]')
            except (TypeError, ValueError):
                scopes = []
            resource = row.get('audience') or OAUTH_RESOURCE
        return JSONResponse({'access_token': raw_access, 'token_type': 'Bearer', 'expires_in': int(OAUTH_ACCESS_TTL.total_seconds()), 'refresh_token': raw_new_refresh, 'scope': ' '.join(scopes), 'resource': resource}, headers={'Cache-Control': 'no-store', 'Pragma': 'no-cache'})
    return _oauth_error('unsupported_grant_type', 'Only authorization_code and refresh_token are supported')


@router.post('/oauth/revoke')
async def revoke(request: Request):
    values = await _form(request)
    raw = values.get('token') or ''
    if not raw:
        return _oauth_error('invalid_request', 'token is required')
    digest = _hash(raw)
    with SessionLocal.begin() as db:
        connector = db.execute(text('SELECT id FROM agent_connectors WHERE token_hash=:token_hash'), {'token_hash': digest}).mappings().first()
        if connector:
            db.execute(text('UPDATE agent_connectors SET status=\'REVOKED\',revoked_at=:revoked_at WHERE id=:id'), {'revoked_at': now_iso(), 'id': connector['id']})
            db.execute(text('UPDATE agent_refresh_tokens SET revoked_at=:revoked_at WHERE connector_id=:id AND revoked_at IS NULL'), {'revoked_at': now_iso(), 'id': connector['id']})
        else:
            db.execute(text('UPDATE agent_refresh_tokens SET revoked_at=:revoked_at WHERE token_hash=:token_hash AND revoked_at IS NULL'), {'revoked_at': now_iso(), 'token_hash': digest})
    return JSONResponse({}, status_code=200, headers={'Cache-Control': 'no-store'})


@router.get('/.well-known/oauth-authorization-server')
def authorization_server_metadata(request: Request):
    base = str(request.base_url).rstrip('/')
    return {
        'issuer': base,
        'authorization_endpoint': base + '/oauth/authorize',
        'token_endpoint': base + '/oauth/token',
        'registration_endpoint': base + '/oauth/register',
        'revocation_endpoint': base + '/oauth/revoke',
        'response_types_supported': ['code'],
        'grant_types_supported': ['authorization_code', 'refresh_token'],
        'code_challenge_methods_supported': ['S256'],
        'scopes_supported': list(_SCOPE_ORDER),
        'token_endpoint_auth_methods_supported': ['none'],
        'resource_indicators_supported': True,
    }


@router.get('/.well-known/oauth-protected-resource')
def protected_resource_metadata(request: Request):
    base = str(request.base_url).rstrip('/')
    return {'resource': OAUTH_RESOURCE, 'authorization_servers': [base], 'scopes_supported': list(_SCOPE_ORDER), 'bearer_methods_supported': ['header']}


@router.get('/oauth/userinfo')
async def userinfo(request: Request):
    auth = request.headers.get('Authorization')
    if not auth or not auth.startswith('Bearer '):
        raise HTTPException(401, 'Missing Bearer Token')
    
    token = auth.split('Bearer ')[1]
    with SessionLocal() as db:
        # Resolve token to user
        from sqlalchemy import text
        from .agent_oauth import _hash
        row = db.execute(text('SELECT u.id, u.email, u.name FROM agent_connectors c JOIN users u ON u.id = c.user_id WHERE c.token_hash = :hash'), {'hash': _hash(token)}).mappings().first()
        if not row:
            raise HTTPException(401, 'Invalid Token')
            
        return {
            'sub': str(row['id']),
            'email': str(row['email']),
            'name': str(row['name']) or 'Zylora User',
            'email_verified': True
        }
