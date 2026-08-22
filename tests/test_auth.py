import pytest
from fastapi import HTTPException
from apps.api.app.auth import current_user, get_db
from apps.api.app.security import issue_token
from apps.api.app.config import settings

def test_current_user_requires_bearer(db):
    with pytest.raises(HTTPException) as e: current_user(None, db)
    assert e.value.status_code==401
    with pytest.raises(HTTPException): current_user('Basic nope', db)

def test_current_user_rejects_bad_token(db):
    with pytest.raises(HTTPException) as e: current_user('Bearer invalid', db)
    assert e.value.status_code==401

def test_current_user_accepts_valid_token(db,user):
    token=issue_token(user.id,user.role,settings.secret_key)
    assert current_user('Bearer '+token,db).id==user.id

def test_current_user_rejects_missing_user(db):
    token=issue_token(999999,'USER',settings.secret_key)
    with pytest.raises(HTTPException) as e: current_user('Bearer '+token,db)
    assert e.value.detail=='user_not_found'

def test_get_db_dependency_opens_and_closes_session():
    gen=get_db(); session=next(gen); assert session is not None
    with pytest.raises(StopIteration): next(gen)
