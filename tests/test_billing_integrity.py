from unittest.mock import patch
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool
from apps.api.app.main import app
from apps.api.app.auth import get_db
from apps.api.app.security import issue_token, hash_password
from apps.api.app.config import settings
from apps.api.app.db import Base
from apps.api.app.models import User


def _set(name, value):
    object.__setattr__(settings, name, value)


def _setup():
    engine=create_engine('sqlite+pysqlite:///:memory:',connect_args={'check_same_thread':False},poolclass=StaticPool)
    Base.metadata.create_all(engine)
    Session=sessionmaker(bind=engine,expire_on_commit=False,future=True)
    db=Session()
    user=User(email='buyer@example.com',password_hash=hash_password('password123'),plan='FREE',role='USER',ai_credits=15,lead_credits=25)
    db.add(user); db.commit(); db.refresh(user)
    app.dependency_overrides[get_db]=lambda: db
    c=TestClient(app)
    c.cookies.set('zylora_session',issue_token(user.id,user.role,settings.secret_key))
    return db,c


def test_checkout_uses_server_owned_starter_plan_id():
    db,c=_setup(); old=settings.razorpay_plan_starter_id; _set('razorpay_plan_starter_id','plan_starter_server')
    try:
        with patch('apps.api.app.main.razorpay_create_subscription',return_value={'id':'sub_1','status':'created'}) as create:
            r=c.post('/billing/razorpay/subscription',json={'plan':'STARTER'})
            assert r.status_code==200, r.text
            create.assert_called_once_with('plan_starter_server')
    finally:
        _set('razorpay_plan_starter_id',old); db.close(); app.dependency_overrides.clear()


def test_checkout_rejects_client_plan_id_mismatch():
    db,c=_setup(); old=settings.razorpay_plan_growth_id; _set('razorpay_plan_growth_id','plan_growth_server')
    try:
        r=c.post('/billing/razorpay/subscription',json={'plan':'GROWTH','razorpay_plan_id':'plan_cheap_starter'})
        assert r.status_code==400
        assert r.json()['detail']=='razorpay_plan_mismatch'
    finally:
        _set('razorpay_plan_growth_id',old); db.close(); app.dependency_overrides.clear()
