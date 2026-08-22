import pytest
from apps.api.app.services.sites import create_site,switch_live_site
from apps.api.app.services.leads import *

def test_capture_and_owner_persistence(db,user):
    a=create_site(db,user,'A','la','AI',2); b=create_site(db,user,'B','lb','AI',2)
    switch_live_site(db,user,a.id)
    lead=capture_lead(db,a.id,'FORM',' Alice ','Alice@Example.com',message='Hi')
    assert lead.owner_id==user.id and lead.email=='alice@example.com'
    switch_live_site(db,user,b.id)
    assert [x.id for x in leads_for_owner(db,user)]==[lead.id]
    with pytest.raises(LeadError): capture_lead(db,999,'FORM','A','a@b.com')
    with pytest.raises(LeadError): capture_lead(db,a.id,'BAD','A','a@b.com')
    with pytest.raises(LeadError): capture_lead(db,a.id,'FORM','','bad')
