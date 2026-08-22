import json
from pathlib import Path
from fastapi.testclient import TestClient
from sqlalchemy import create_engine, select
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from apps.api.app.main import app
from apps.api.app.auth import get_db
from apps.api.app.db import Base
from apps.api.app.models import User,Site,SiteDocument,TemplateRecord
from apps.api.app.security import hash_password,issue_token
from apps.api.app.config import settings


def setup():
    engine=create_engine('sqlite+pysqlite:///:memory:',connect_args={'check_same_thread':False},poolclass=StaticPool)
    Base.metadata.create_all(engine);Session=sessionmaker(bind=engine,expire_on_commit=False,future=True);db=Session()
    owner=User(email='owner-kb@example.com',password_hash=hash_password('password123'),plan='GROWTH',role='USER',ai_credits=5,lead_credits=5)
    admin=User(email='admin-kb@example.com',password_hash=hash_password('password123'),plan='GROWTH',role='SUPER_ADMIN',ai_credits=5,lead_credits=5)
    db.add_all([owner,admin]);db.commit();db.refresh(owner);db.refresh(admin);app.dependency_overrides[get_db]=lambda:db
    return db,owner,admin

def authed(user):
    c=TestClient(app);c.cookies.set('zylora_session',issue_token(user.id,user.role,settings.secret_key));return c


def test_owner_can_paste_upload_list_and_delete_chatbot_documents():
    db,owner,admin=setup();c=authed(owner)
    site=c.post('/sites',json={'name':'Clinic','slug':'kb-clinic','origin':'AI','page_count':1}).json();sid=site['id']
    a=c.post(f'/sites/{sid}/documents',json={'name':'Pricing','content':'Initial consultation costs 500 rupees.'});assert a.status_code==201
    b=c.post(f'/sites/{sid}/documents/upload',files={'file':('faq.md',b'# FAQ\nOpen Monday to Friday.','text/markdown')});assert b.status_code==201,b.text
    rows=c.get(f'/sites/{sid}/documents');assert rows.status_code==200 and len(rows.json())==2
    assert c.delete(f"/sites/{sid}/documents/{a.json()['id']}").status_code==200
    assert len(c.get(f'/sites/{sid}/documents').json())==1
    db.close()


def test_chatbot_llm_context_contains_site_and_uploaded_docs(monkeypatch):
    db,owner,admin=setup();site=Site(owner_id=owner.id,name='Clinic',slug='live-kb',origin='AI',page_count=1,state='LIVE',content_json=json.dumps({'businessName':'Nova Clinic','services':['Therapy']}));db.add(site);db.commit();db.refresh(site)
    db.add(SiteDocument(site_id=site.id,name='Pricing',content='Therapy session price is 900 INR.',source_type='PASTE'));db.commit()
    captured={}
    def fake(context,message,history): captured['context']=context;captured['message']=message;return 'Therapy is 900 INR per session.'
    monkeypatch.setattr('apps.api.app.services.chatbot._claude_answer',fake)
    r=TestClient(app).post('/chatbot/public',json={'site_id':site.id,'visitor_key':'visitor-kb-12345','message':'How much is therapy?'});assert r.status_code==200,r.text
    assert 'Nova Clinic' in captured['context'] and 'Therapy session price is 900 INR.' in captured['context']
    assert r.json()['reply']=='Therapy is 900 INR per session.'
    db.refresh(owner);assert owner.lead_credits==4
    db.close()


def test_template_admin_seeds_1008_and_controls_gallery_visibility():
    db,owner,admin=setup();admin_client=authed(admin);public=TestClient(app)
    rows=admin_client.get('/admin/templates');assert rows.status_code==200 and len(rows.json())==1008
    key=rows.json()[0]['key']
    patched=admin_client.patch(f'/admin/templates/{key}',json={'visible':False,'featured':False,'display_name':'Hidden Example'});assert patched.status_code==200
    gallery=public.get('/templates/public');assert gallery.status_code==200 and all(x['key']!=key for x in gallery.json())
    db.close()


def test_non_admin_cannot_mutate_template_records():
    db,owner,admin=setup();c=authed(owner)
    assert c.get('/admin/templates').status_code==403
    assert c.patch('/admin/templates/template-0001-dental-minimalism',json={'visible':False}).status_code==403
    db.close()


def test_catalogue_has_1008_unique_family_layout_recipes_and_responsive_sources():
    data=json.loads(Path('apps/web/public/template-catalogue.json').read_text(encoding='utf-8'))
    assert len(data)==1008
    pairs={(x['family'],x['layout_recipe']) for x in data};assert len(pairs)==1008
    for x in data:
        text=(Path('apps/web/templates')/x['file']).read_text(encoding='utf-8')
        assert '@media(max-width:1024px)' in text and '@media(max-width:768px)' in text and '@media(max-width:430px)' in text
        assert 'prefers-reduced-motion' in text
        assert 'heroImage' in text and 'imageAlt' in text
        assert x['layout_recipe'].replace(':',':') in text

def test_claude_messages_contract_uses_grounded_system_prompt(monkeypatch):
    from apps.api.app.services import chatbot as svc
    captured={}
    class Resp:
        def raise_for_status(self): pass
        def json(self): return {'content':[{'type':'text','text':'Grounded answer'}]}
    class Client:
        def __init__(self,*a,**k): pass
        def __enter__(self): return self
        def __exit__(self,*a): pass
        def post(self,url,headers=None,json=None): captured.update(url=url,headers=headers,json=json);return Resp()
    old_key=settings.anthropic_api_key
    try:
        object.__setattr__(settings,'anthropic_api_key','test-anthropic-key')
        monkeypatch.setattr(svc.httpx,'Client',Client)
        answer=svc._claude_answer('Business name: Nova\nServices: Therapy','What do you offer?',[])
    finally:
        object.__setattr__(settings,'anthropic_api_key',old_key)
    assert answer=='Grounded answer'
    assert captured['url']=='https://api.anthropic.com/v1/messages'
    assert captured['headers']['x-api-key']=='test-anthropic-key'
    assert 'Answer only from the supplied business information and documents' in captured['json']['system']
    assert 'Services: Therapy' in captured['json']['system']


def test_chatbot_session_message_cap_forces_capture(monkeypatch):
    from apps.api.app.models import ChatSession,ChatMessage
    db,owner,admin=setup();site=Site(owner_id=owner.id,name='Cap Clinic',slug='cap-clinic',origin='AI',page_count=1,state='LIVE',content_json='{}');db.add(site);db.commit();db.refresh(site)
    session=ChatSession(site_id=site.id,visitor_key='visitor-cap-1234');db.add(session);db.flush()
    old=settings.chatbot_max_messages_per_session
    try:
        object.__setattr__(settings,'chatbot_max_messages_per_session',2)
        for i in range(2):db.add(ChatMessage(session_id=session.id,role='USER',content=f'q{i}'));db.add(ChatMessage(session_id=session.id,role='ASSISTANT',content='a'))
        db.commit()
        r=TestClient(app).post('/chatbot/public',json={'site_id':site.id,'visitor_key':'visitor-cap-1234','message':'one more'})
    finally: object.__setattr__(settings,'chatbot_max_messages_per_session',old)
    assert r.status_code==200 and r.json()['force_capture'] is True and r.json()['message_limit_reached'] is True
    db.close()
