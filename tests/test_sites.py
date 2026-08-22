import pytest
from sqlalchemy import select
from apps.api.app.models import User,Site
from apps.api.app.services.sites import *
from apps.api.app.security import hash_password

def test_create_site_and_rules(db,user):
    s=create_site(db,user,'Site','site','TEMPLATE',4,'template-0001')
    assert s.page_count==4
    with pytest.raises(SiteError): create_site(db,user,'','x','AI',1)
    with pytest.raises(SiteError): create_site(db,user,'X','x2','INVALID',1)
    with pytest.raises(SiteError): create_site(db,user,'X','x3','TEMPLATE',1,None)
    with pytest.raises(SiteError): create_site(db,user,'X','x4','AI',9)

def test_draft_warnings():
    assert draft_warning(7) is None
    assert draft_warning(8)=='WARNING'
    assert draft_warning(9)=='STRONG_WARNING'
    assert draft_warning(10)=='BLOCK'
    assert draft_warning(11)=='BLOCK'

def test_draft_limit(db,user):
    for i in range(10): create_site(db,user,f'S{i}',f's{i}','AI',1)
    with pytest.raises(SiteError): create_site(db,user,'S11','s11','AI',1)

def test_ai_page_credit_and_template_block(db,user):
    ai=create_site(db,user,'AI','ai','AI',2)
    before=user.ai_credits
    add_ai_page(db,user,ai.id)
    assert ai.page_count==3 and user.ai_credits==before-1
    t=create_site(db,user,'T','t','TEMPLATE',2,'template-1')
    with pytest.raises(SiteError): add_ai_page(db,user,t.id)
    other=User(email='o@e.com',password_hash=hash_password('password123'),plan='FREE',role='USER',ai_credits=0); db.add(other); db.commit()
    with pytest.raises(SiteError): add_ai_page(db,other,ai.id)
    ai.page_count=8; db.commit()
    with pytest.raises(SiteError): add_ai_page(db,user,ai.id)
    ai.page_count=2; user.ai_credits=0; db.commit()
    with pytest.raises(SiteError): add_ai_page(db,user,ai.id)

def test_switch_live_and_transfer(db,user):
    a=create_site(db,user,'A','a','AI',2); b=create_site(db,user,'B','b','AI',2)
    switch_live_site(db,user,a.id); assert a.state=='LIVE'
    credits=user.ai_credits
    switch_live_site(db,user,b.id); db.refresh(a); assert b.state=='LIVE' and a.state=='DRAFT' and user.ai_credits==credits
    stranger=User(email='s@e.com',password_hash=hash_password('password123'),plan='GROWTH',role='USER',ai_credits=500); db.add(stranger); db.commit(); db.refresh(stranger)
    with pytest.raises(SiteError): switch_live_site(db,stranger,b.id)
    transfer_ownership(db,user,b.id,stranger); assert b.owner_id==stranger.id and b.state=='DRAFT'
    with pytest.raises(SiteError): transfer_ownership(db,user,b.id,stranger)
    with pytest.raises(SiteError): transfer_ownership(db,stranger,b.id,stranger)

def test_transfer_recipient_page_limit(db,user):
    s=create_site(db,user,'Eight','eight','AI',8)
    low=User(email='low@e.com',password_hash=hash_password('password123'),plan='FREE',role='USER',ai_credits=15); db.add(low); db.commit()
    with pytest.raises(SiteError): transfer_ownership(db,user,s.id,low)
