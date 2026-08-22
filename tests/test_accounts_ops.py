from apps.api.app.models import User, Site, Lead
from apps.api.app.enums import Role, Plan, SiteOrigin
from apps.api.app.services.accounts import create_action_token, verify_email, reset_password, export_account
from apps.api.app.services.operations import readiness
from apps.api.app.security import hash_password, verify_password

def test_email_verification_and_reset(db):
    u=User(email='a@example.com',password_hash=hash_password('password123'),role=Role.USER,plan=Plan.FREE,ai_credits=15)
    db.add(u); db.commit(); db.refresh(u)
    t=create_action_token(db,u,'VERIFY_EMAIL',5); got=verify_email(db,t); assert got.email_verified
    r=create_action_token(db,u,'RESET_PASSWORD',5); reset_password(db,r,'newpassword123'); assert verify_password('newpassword123',u.password_hash)

def test_account_export(db):
    u=User(email='b@example.com',password_hash=hash_password('password123'),role=Role.USER,plan=Plan.FREE,ai_credits=15); db.add(u); db.commit(); db.refresh(u)
    s=Site(owner_id=u.id,name='X',slug='x',origin=SiteOrigin.TEMPLATE,page_count=1,state='DRAFT'); db.add(s); db.commit(); db.refresh(s)
    db.add(Lead(owner_id=u.id,site_id=s.id,source='FORM',name='N',email='n@e.com')); db.commit()
    data=export_account(db,u); assert data['user']['email']=='b@example.com'; assert len(data['sites'])==1; assert len(data['leads'])==1

def test_readiness(db, monkeypatch):
    import apps.api.app.services.operations as op
    class S: secret_key='x'*32; google_client_id='g'; razorpay_key_id='r'; razorpay_key_secret='s'; razorpay_webhook_secret='w'; resend_api_key='e'; twilio_account_sid='t'; twilio_auth_token='a'; twilio_whatsapp_from='f'; cloudflare_api_token='c'; cloudflare_zone_id='z'; turnstile_secret_key='q'
    monkeypatch.setattr(op,'settings',S())
    out=readiness(db); assert out['ready']; assert all(out['checks']['providers'].values())
