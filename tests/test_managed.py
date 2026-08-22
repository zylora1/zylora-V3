import pytest
from apps.api.app.services.managed import *

def test_code_and_managed_lifecycle(db):
    code=generate_lead_code(set()); assert code.startswith('ZPRO-') and len(code)==11
    lead=create_managed_lead(db,'Britto','B@example.com','Premium business website',lead_code='ZPRO-ABC123')
    assert lead.email=='b@example.com' and lead.status=='PENDING'
    update_managed_status(db,lead,'CLOSED',350000,'inr','Paid'); assert lead.amount_received_minor==350000 and lead.currency=='INR'
    with pytest.raises(ManagedLeadError): create_managed_lead(db,'','bad','x')
    with pytest.raises(ManagedLeadError): update_managed_status(db,lead,'BAD')
    with pytest.raises(ManagedLeadError): update_managed_status(db,lead,'CLOSED',-1)
    with pytest.raises(ManagedLeadError): update_managed_status(db,lead,'CLOSED',1,'RUPEE')
