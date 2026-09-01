from datetime import datetime, timedelta, timezone
from uuid import uuid4

from fastapi.testclient import TestClient
from sqlalchemy import text

from app.db import SessionLocal
from app.main import app


def _signup(client: TestClient, email: str):
    r=client.post('/api/auth/signup',json={'name':'Delete Flow','email':email,'password':'StrongPass123!','turnstile_token':None})
    assert r.status_code==200, r.text
    csrf=r.json()['csrf_token']
    client.headers.update({'X-CSRF-Token':csrf})
    r=client.post('/api/billing/select',json={'plan':'FREE'})
    assert r.status_code==200, r.text
    return csrf


def test_account_deletion_removes_owned_data_and_invalidates_session():
    email=f'delete-{uuid4().hex[:10]}@example.com'
    with TestClient(app) as client:
        _signup(client,email)
        me=client.get('/api/auth/me').json(); uid=me['id']
        create=client.post('/api/sites',json={
            'business_name':'Deletion Test Studio',
            'description':'A small design studio that needs a home, work page and contact page.',
            'origin':'AI','industry':'Design','style':'swiss-minimal','motion_style':'None'
        })
        assert create.status_code==200, create.text
        site_id=create.json()['id']
        with SessionLocal.begin() as db:
            db.execute(text("INSERT INTO leads(id,site_id,source,name,email,created_at) VALUES (:i,:s,'FORM','Visitor','visitor@example.com',:c)"),{'i':str(uuid4()),'s':site_id,'c':datetime.now(timezone.utc).isoformat()})
        r=client.request('DELETE','/api/auth/account',json={'email':email,'confirmation':'DELETE'})
        assert r.status_code==200, r.text
        assert r.json()['deleted'] is True
        assert client.get('/api/auth/me').status_code==401
        with SessionLocal() as db:
            assert db.execute(text('SELECT count(*) FROM users WHERE id=:u'),{'u':uid}).scalar_one()==0
            assert db.execute(text('SELECT count(*) FROM sites WHERE id=:s'),{'s':site_id}).scalar_one()==0
            assert db.execute(text('SELECT count(*) FROM leads WHERE site_id=:s'),{'s':site_id}).scalar_one()==0
            assert db.execute(text('SELECT count(*) FROM sessions WHERE user_id=:u'),{'u':uid}).scalar_one()==0


def test_account_deletion_requires_recent_authentication():
    email=f'stale-delete-{uuid4().hex[:10]}@example.com'
    with TestClient(app) as client:
        _signup(client,email)
        me=client.get('/api/auth/me').json(); uid=me['id']
        stale=(datetime.now(timezone.utc)-timedelta(hours=2)).isoformat()
        with SessionLocal.begin() as db:
            db.execute(text('UPDATE sessions SET created_at=:c WHERE user_id=:u'),{'c':stale,'u':uid})
        r=client.request('DELETE','/api/auth/account',json={'email':email,'confirmation':'DELETE'})
        assert r.status_code==409, r.text
        assert r.json()['detail']['code']=='REAUTH_REQUIRED'
        with SessionLocal() as db:
            assert db.execute(text('SELECT count(*) FROM users WHERE id=:u'),{'u':uid}).scalar_one()==1
        # cleanup test user without exercising the protected endpoint again
        with SessionLocal.begin() as db:
            db.execute(text('DELETE FROM sessions WHERE user_id=:u'),{'u':uid})
            db.execute(text('DELETE FROM notification_settings WHERE user_id=:u'),{'u':uid})
            db.execute(text('DELETE FROM credit_wallets WHERE user_id=:u'),{'u':uid})
            db.execute(text('DELETE FROM users WHERE id=:u'),{'u':uid})


def test_account_deletion_preserves_previously_transferred_site_history():
    email1=f'transfer-delete-{uuid4().hex[:8]}@example.com'
    email2=f'transfer-keep-{uuid4().hex[:8]}@example.com'
    with TestClient(app) as owner, TestClient(app) as recipient:
        _signup(owner,email1); uid1=owner.get('/api/auth/me').json()['id']
        _signup(recipient,email2); uid2=recipient.get('/api/auth/me').json()['id']
        create=owner.post('/api/sites',json={
            'business_name':'Transferred Site','description':'A transferred website that the recipient must keep after the former owner deletes their account.',
            'origin':'AI','industry':'Business','style':'swiss-minimal','motion_style':'None'
        })
        assert create.status_code==200, create.text
        sid=create.json()['id']
        with SessionLocal.begin() as db:
            db.execute(text('UPDATE sites SET user_id=:new WHERE id=:s'),{'new':uid2,'s':sid})
            db.execute(text("INSERT INTO site_revisions(id,site_id,user_id,version,kind,label,state_json,created_at) VALUES (:i,:s,:u,99,'MANUAL','Before transfer','{}',:c)"),
                       {'i':str(uuid4()),'s':sid,'u':uid1,'c':datetime.now(timezone.utc).isoformat()})
        r=owner.request('DELETE','/api/auth/account',json={'email':email1,'confirmation':'DELETE'})
        assert r.status_code==200, r.text
        with SessionLocal() as db:
            site=db.execute(text('SELECT user_id FROM sites WHERE id=:s'),{'s':sid}).mappings().first()
            assert site and site['user_id']==uid2
            rev=db.execute(text('SELECT user_id FROM site_revisions WHERE site_id=:s AND version=99'),{'s':sid}).mappings().first()
            assert rev and rev['user_id']==uid2
        # cleanup recipient and retained site through direct DB cleanup for test isolation
        with SessionLocal.begin() as db:
            db.execute(text('DELETE FROM site_revisions WHERE site_id=:s'),{'s':sid})
            db.execute(text('DELETE FROM editor_history WHERE site_id=:s'),{'s':sid})
            db.execute(text('DELETE FROM generation_jobs WHERE site_id=:s'),{'s':sid})
            db.execute(text('DELETE FROM sites WHERE id=:s'),{'s':sid})
            db.execute(text('DELETE FROM sessions WHERE user_id=:u'),{'u':uid2})
            db.execute(text('DELETE FROM notification_settings WHERE user_id=:u'),{'u':uid2})
            db.execute(text('DELETE FROM credit_wallets WHERE user_id=:u'),{'u':uid2})
            db.execute(text('DELETE FROM users WHERE id=:u'),{'u':uid2})
