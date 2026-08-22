import pytest
from apps.api.app.services.bootstrap import bootstrap_super_admin
from apps.api.app.enums import Role
from apps.api.app.models import User
from apps.api.app.security import verify_password

def test_bootstrap_super_admin_creates_admin(db):
    u=bootstrap_super_admin(db,'owner@example.com','very-long-admin-password')
    assert u.role==Role.SUPER_ADMIN
    assert u.email_verified is True
    assert verify_password('very-long-admin-password',u.password_hash)

def test_bootstrap_promotes_existing_user(db):
    u=User(email='existing@example.com',password_hash='x',role='USER',plan='FREE',ai_credits=0,lead_credits=0)
    db.add(u);db.commit()
    promoted=bootstrap_super_admin(db,'existing@example.com','another-long-password')
    assert promoted.role==Role.SUPER_ADMIN

def test_bootstrap_rejects_short_password(db):
    with pytest.raises(ValueError,match='password_too_short'):
        bootstrap_super_admin(db,'owner@example.com','short')
