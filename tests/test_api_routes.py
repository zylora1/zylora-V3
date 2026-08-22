from datetime import datetime,timedelta,timezone
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool
from apps.api.app.main import app
from apps.api.app.auth import get_db
from apps.api.app.security import issue_token,hash_password
from apps.api.app.config import settings
from apps.api.app.db import Base
from apps.api.app.models import ManagedSchedulingConfig,User

def setup():
    engine=create_engine('sqlite+pysqlite:///:memory:',connect_args={'check_same_thread':False},poolclass=StaticPool)
    Base.metadata.create_all(engine);Session=sessionmaker(bind=engine,expire_on_commit=False,future=True);db=Session()
    user=User(email='user@example.com',password_hash=hash_password('password123'),plan='GROWTH',role='USER',ai_credits=500,lead_credits=1000)
    admin=User(email='admin@example.com',password_hash=hash_password('password123'),plan='GROWTH',role='SUPER_ADMIN',ai_credits=500,lead_credits=1000)
    db.add_all([user,admin]);db.commit();db.refresh(user);db.refresh(admin)
    app.dependency_overrides[get_db]=lambda: db
    return db,user,admin

def client_for(user):
    c=TestClient(app);c.cookies.set('zylora_session',issue_token(user.id,user.role,settings.secret_key));return c

def test_http_site_lead_and_admin_paths():
    db,user,admin=setup();c=client_for(user)
    r=c.post('/sites',json={'name':'Acme Clinic','slug':'acme-clinic','origin':'TEMPLATE','page_count':2,'template_key':'template-0001'});assert r.status_code==201,r.text
    site=r.json();r=c.patch(f"/sites/{site['id']}",json={'content':{'businessName':'Acme Clinic','phone':'+91 99999 99999'},'seo':{'title':'Acme Clinic Chennai'}});assert r.status_code==200 and r.json()['content']['businessName']=='Acme Clinic'
    assert c.post(f"/sites/{site['id']}/make-live").json()['state']=='LIVE'
    assert c.post('/leads/public',json={'site_id':site['id'],'source':'FORM','name':'Ravi','email':'ravi@example.com','message':'Need an appointment','idempotency_key':'api-route-lead-1'}).status_code==201
    assert c.get('/leads').json()[0]['email']=='ravi@example.com'
    c=client_for(admin);assert c.get('/admin/config').status_code==200;assert c.put('/admin/config/pricing.usd.starter',json={'value':'9'}).json()['value']=='9';db.close()

def test_http_blog_routes():
    db,user,admin=setup();c=client_for(admin)
    r=c.post('/blog',json={'title':'SEO that converts','slug':'seo-that-converts','excerpt':'A useful guide','content':'This article contains enough content to pass validation and publish safely.','seo_title':'SEO that converts | Zylora','seo_description':'A guide to better website SEO.'});assert r.status_code==201,r.text
    post=r.json();assert c.patch(f"/blog/{post['id']}/status",json={'status':'PUBLISHED'}).status_code==200;assert c.get('/blog/public').json()[0]['slug']=='seo-that-converts';assert c.get('/blog/public/seo-that-converts').json()['seo_title'].startswith('SEO');db.close()

def test_http_managed_zpro_flow():
    db,user,admin=setup();db.add(ManagedSchedulingConfig(id=1,enabled=True,timezone='UTC',duration_minutes=30,buffer_minutes=0,day_start_minute=540,day_end_minute=1020,weekdays_csv='0,1,2,3,4,5,6'));db.commit();c=TestClient(app)
    target=(datetime.now(timezone.utc)+timedelta(days=2)).date().isoformat();slots=c.get('/managed/slots',params={'on':target});assert slots.status_code==200 and slots.json();chosen=slots.json()[0]
    r=c.post('/managed/enquiries',json={'name':'Maya','email':'maya@example.com','website_type':'Premium business website','starts_at':chosen});assert r.status_code==201,r.text;data=r.json();assert data['lead_code'].startswith('ZPRO-') and data['status']=='PENDING'
    admin_client=client_for(admin);assert any(x['lead_code']==data['lead_code'] for x in admin_client.get('/managed/enquiries').json());closed=admin_client.patch(f"/managed/enquiries/{data['id']}",json={'status':'CLOSED','amount_minor':250000,'currency':'INR','notes':'Paid'});assert closed.status_code==200 and closed.json()['status']=='CLOSED';db.close()

def test_public_pricing_and_credit_modes():
    db,user,admin=setup();c=client_for(user)
    p=c.get('/pricing',params={'region':'international'});assert p.status_code==200 and p.json()['currency']=='USD' and p.json()['plans']['STARTER']['price']==9 and p.json()['plans']['GROWTH']['price']==19
    p=c.get('/pricing',params={'region':'india'});assert p.json()['currency']=='INR'
    s=c.get('/credits/status');assert s.status_code==200 and s.json()['chatbot_mode']=='LEAD_CREDITS'
    user.lead_credits=0;db.commit();assert c.get('/credits/status').json()['chatbot_mode']=='AI_FALLBACK_EMAIL_ONLY'
    user.ai_credits=0;db.commit();assert c.get('/credits/status').json()['chatbot_mode']=='CACHED_FORCED_CAPTURE';db.close()

def test_cors_preflight_is_configured():
    db,user,admin=setup();c=TestClient(app)
    r=c.options('/auth/login',headers={'Origin':'http://localhost:3000','Access-Control-Request-Method':'POST'})
    assert r.status_code==200 and r.headers.get('access-control-allow-origin')=='http://localhost:3000';db.close()

def test_http_scheduling_publishing_export_and_transfer():
    db,user,admin=setup();c=client_for(user)
    site=c.post('/sites',json={'name':'AI Studio','slug':'ai-studio','origin':'AI','page_count':1}).json()
    assert c.post(f"/sites/{site['id']}/ai-pages").json()['page_count']==2
    cfg={'site_id':site['id'],'enabled':True,'timezone':'UTC','duration_minutes':30,'buffer_minutes':0,'day_start_minute':540,'day_end_minute':1020,'weekdays':[0,1,2,3,4,5,6]}
    assert c.put('/scheduling/config',json=cfg).status_code==200
    target=(datetime.now(timezone.utc)+timedelta(days=3)).date().isoformat();slots=c.get('/scheduling/slots',params={'site_id':site['id'],'on':target});assert slots.status_code==200 and slots.json()
    booked=c.post('/scheduling/book',json={'site_id':site['id'],'starts_at':slots.json()[0]});assert booked.status_code==201
    assert c.post(f"/scheduling/{booked.json()['id']}/cancel").json()['status']=='CANCELLED'
    assert c.post(f"/publishing/sites/{site['id']}").status_code==200
    exp=c.get(f"/publishing/sites/{site['id']}/export");assert exp.status_code==200 and exp.headers['content-type']=='application/zip'
    recipient=User(email='recipient@example.com',password_hash=hash_password('password123'),plan='GROWTH',role='USER',ai_credits=500,lead_credits=100);db.add(recipient);db.commit()
    moved=c.post(f"/sites/{site['id']}/transfer",json={'target_email':'recipient@example.com'});assert moved.status_code==200
    db.close()

def test_managed_schedule_admin_and_errors():
    db,user,admin=setup();a=client_for(admin)
    assert a.put('/managed/schedule',json={'enabled':True,'timezone':'UTC','duration_minutes':45,'buffer_minutes':10,'day_start_minute':600,'day_end_minute':900,'weekdays':[0,1,2,3,4]}).status_code==200
    normal=client_for(user);assert normal.put('/managed/schedule',json={'enabled':True}).status_code==403
    assert normal.get('/sites/999999').status_code==404
    assert normal.post('/sites/999999/make-live').status_code==404
    db.close()

def test_publish_http_contains_saved_customer_content():
    db,user,admin=setup(); c=client_for(user)
    created=c.post('/sites',json={'name':'Clinic Internal','slug':'clinic-live','origin':'TEMPLATE','page_count':2,'template_key':'template-0001-dental-minimalism'})
    assert created.status_code==201
    sid=created.json()['id']
    patched=c.patch(f'/sites/{sid}',json={
        'content':{'businessName':'Real Clinic','headline':'Healthy smiles','description':'Real care','email':'care@example.com'},
        'seo':{'title':'Real Clinic SEO','description':'Local clinic SEO'},
        'theme':{'accent':'#445566'},
    })
    assert patched.status_code==200
    published=c.post(f'/publishing/sites/{sid}')
    assert published.status_code==200
    from apps.api.app.routers.publishing import STORE
    body=STORE.get(published.json()['storage_key']).decode()
    assert 'Real Clinic' in body and 'Healthy smiles' in body and 'care@example.com' in body
    assert '<title>Real Clinic SEO</title>' in body
    assert 'template-0001-dental-minimalism' in body
    db.close()

def test_pricing_locked_defaults():
    db,user,admin=setup(); c=TestClient(app)
    usd=c.get('/pricing?region=international'); assert usd.status_code==200
    assert usd.json()['plans']['STARTER']['price']==9 and usd.json()['plans']['GROWTH']['price']==19
    inr=c.get('/pricing?region=india'); assert inr.status_code==200
    assert inr.json()['plans']['STARTER']['price']==799 and inr.json()['plans']['GROWTH']['price']==1999
    db.close()


def test_public_live_site_endpoint_and_publish_url():
    db,user,admin=setup(); c=client_for(user)
    site=c.post('/sites',json={'name':'Public Clinic','slug':'public-clinic','origin':'TEMPLATE','page_count':2,'template_key':'template-0001-dental-minimalism'}).json()
    c.patch(f"/sites/{site['id']}",json={'content':{'businessName':'Public Clinic','headline':'Real headline'}})
    pub=c.post(f"/publishing/sites/{site['id']}")
    assert pub.status_code==200 and pub.json()['public_url'].endswith('/site/public-clinic')
    public=TestClient(app).get('/sites/public/public-clinic')
    assert public.status_code==200
    assert public.json()['content']['businessName']=='Public Clinic'
    assert public.json()['template_key']=='template-0001-dental-minimalism'
    db.close()

def test_publish_public_url_is_reachable_and_serves_latest_artifact():
    db,user,admin=setup(); c=client_for(user)
    site=c.post('/sites',json={'name':'Visitor Clinic','slug':'visitor-clinic','origin':'TEMPLATE','page_count':2,'template_key':'template-0001-dental-minimalism'}).json()
    c.patch(f"/sites/{site['id']}",json={'content':{'businessName':'Visitor Clinic','headline':'First version'},'seo':{'title':'Visitor Clinic'}})
    first=c.post(f"/publishing/sites/{site['id']}")
    assert first.status_code==200,first.text
    assert first.json()['public_url'].endswith('/site/visitor-clinic')
    public=TestClient(app).get('/site/visitor-clinic')
    assert public.status_code==200,public.text
    assert public.headers['content-type'].startswith('text/html')
    assert public.headers['x-zylora-publication-version']=='1'
    assert 'Visitor Clinic' in public.text and 'First version' in public.text

    c.patch(f"/sites/{site['id']}",json={'content':{'businessName':'Visitor Clinic','headline':'Second version'}})
    second=c.post(f"/publishing/sites/{site['id']}")
    assert second.status_code==200 and second.json()['version']==2
    newest=TestClient(app).get('/site/visitor-clinic')
    assert newest.status_code==200
    assert newest.headers['x-zylora-publication-version']=='2'
    assert 'Second version' in newest.text and 'First version' not in newest.text
    db.close()


def test_public_site_route_rejects_unpublished_site():
    db,user,admin=setup(); c=client_for(user)
    c.post('/sites',json={'name':'Draft only','slug':'draft-only','origin':'AI','page_count':1})
    response=TestClient(app).get('/site/draft-only')
    assert response.status_code==404
    db.close()
