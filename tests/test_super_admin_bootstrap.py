from __future__ import annotations

from uuid import uuid4

import pytest
from sqlalchemy import text

from app.bootstrap import bootstrap_super_admin
from app.config import settings
from app.db import SessionLocal, migrate, now_iso
from app.security import hash_password, verify_password


def _delete_user(email: str) -> None:
    migrate()
    with SessionLocal.begin() as db:
        db.execute(text('DELETE FROM users WHERE lower(email)=lower(:e)'), {'e': email})


def test_super_admin_is_bootstrapped_from_environment_and_plaintext_is_not_stored(monkeypatch):
    email='bootstrap-admin@example.com'
    password='A-strong-bootstrap-password-123!'
    _delete_user(email)
    monkeypatch.setattr(settings,'super_admin_email',email)
    monkeypatch.setattr(settings,'super_admin_password',password)

    assert bootstrap_super_admin() is True
    with SessionLocal() as db:
        row=db.execute(text('SELECT * FROM users WHERE email=:e'),{'e':email}).mappings().one()
        assert row['role']=='SUPER_ADMIN'
        assert row['email_verified']==1
        assert row['plan_selected']==1
        assert row['password_hash'] != password
        assert password not in row['password_hash']
        assert verify_password(password,row['password_hash'])
        audit=db.execute(text("SELECT action,metadata FROM audit_log WHERE user_id=:u AND action='SUPER_ADMIN_BOOTSTRAPPED'"),{'u':row['id']}).mappings().one()
        assert audit['action']=='SUPER_ADMIN_BOOTSTRAPPED'
        assert password not in (audit['metadata'] or '')


def test_super_admin_bootstrap_is_idempotent_and_does_not_reset_password(monkeypatch):
    email='bootstrap-idempotent@example.com'
    original='Original-bootstrap-password-123!'
    replacement='Replacement-password-never-applied-456!'
    _delete_user(email)
    monkeypatch.setattr(settings,'super_admin_email',email)
    monkeypatch.setattr(settings,'super_admin_password',original)
    assert bootstrap_super_admin() is True
    with SessionLocal() as db:
        first_hash=db.execute(text('SELECT password_hash FROM users WHERE email=:e'),{'e':email}).scalar_one()

    monkeypatch.setattr(settings,'super_admin_password',replacement)
    assert bootstrap_super_admin() is False
    with SessionLocal() as db:
        second_hash=db.execute(text('SELECT password_hash FROM users WHERE email=:e'),{'e':email}).scalar_one()
    assert second_hash==first_hash
    assert verify_password(original,second_hash)
    assert not verify_password(replacement,second_hash)


def test_super_admin_bootstrap_refuses_to_elevate_existing_normal_user(monkeypatch):
    email='bootstrap-normal-user@example.com'
    _delete_user(email)
    stamp=now_iso()
    with SessionLocal.begin() as db:
        db.execute(text("""INSERT INTO users(id,email,password_hash,name,role,plan,plan_selected,ai_credits,lead_credits,email_verified,account_type,updated_at,created_at)
            VALUES (:i,:e,:p,'Normal User','USER','FREE',1,0,0,1,'CLIENT',:a,:a)"""),
            {'i':str(uuid4()),'e':email,'p':hash_password('Normal-user-password-123!'),'a':stamp})
    monkeypatch.setattr(settings,'super_admin_email',email)
    monkeypatch.setattr(settings,'super_admin_password','Bootstrap-password-123456!')
    with pytest.raises(RuntimeError,match='refusing automatic privilege escalation'):
        bootstrap_super_admin()
    with SessionLocal() as db:
        assert db.execute(text('SELECT role FROM users WHERE email=:e'),{'e':email}).scalar_one()=='USER'


def test_super_admin_bootstrap_requires_both_variables_when_either_is_set(monkeypatch):
    monkeypatch.setattr(settings,'super_admin_email','partial-admin@example.com')
    monkeypatch.setattr(settings,'super_admin_password','')
    with pytest.raises(RuntimeError,match='must be set together'):
        bootstrap_super_admin()
    monkeypatch.setattr(settings,'super_admin_email','')
    monkeypatch.setattr(settings,'super_admin_password','some-password')
    with pytest.raises(RuntimeError,match='must be set together'):
        bootstrap_super_admin()


@pytest.mark.parametrize('valid_pw', ['12345678', 'abcdefgh', 'password', 'super-admin-pass'])
def test_super_admin_bootstrap_accepts_valid_passwords_min_length_8(monkeypatch, valid_pw):
    email = f'bootstrap-{uuid4().hex[:6]}@example.com'
    _delete_user(email)
    monkeypatch.setattr(settings, 'super_admin_email', email)
    monkeypatch.setattr(settings, 'super_admin_password', valid_pw)

    assert bootstrap_super_admin() is True
    with SessionLocal() as db:
        row = db.execute(text('SELECT * FROM users WHERE email=:e'), {'e': email}).mappings().one()
        assert row['role'] == 'SUPER_ADMIN'
        assert row['password_hash'] != valid_pw
        assert verify_password(valid_pw, row['password_hash'])
    _delete_user(email)


@pytest.mark.parametrize('short_pw', ['a', '1', 'abc', '1234567'])
def test_super_admin_bootstrap_rejects_passwords_shorter_than_8(monkeypatch, short_pw):
    email = f'bootstrap-short-{uuid4().hex[:6]}@example.com'
    _delete_user(email)
    monkeypatch.setattr(settings, 'super_admin_email', email)
    monkeypatch.setattr(settings, 'super_admin_password', short_pw)

    with pytest.raises(RuntimeError, match='at least 8 characters'):
        bootstrap_super_admin()
    _delete_user(email)
