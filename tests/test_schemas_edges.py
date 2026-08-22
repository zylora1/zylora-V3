import pytest
from pydantic import ValidationError
from apps.api.app.schemas import RegisterIn, SiteCreateIn, LeadIn, ManagedLeadIn
from apps.api.app.services import managed
from apps.api.app.services.publishing import ObjectStore


def test_schema_construction_and_validation():
    r=RegisterIn(email='a@b.com',password='password123')
    assert r.email=='a@b.com'
    with pytest.raises(ValidationError): RegisterIn(email='a@b.com',password='short')
    s=SiteCreateIn(name='X',slug='x',origin='AI',page_count=2)
    assert s.template_key is None
    l=LeadIn(source='FORM',name='A',email='a@b.com')
    assert l.phone is None and l.message is None
    m=ManagedLeadIn(name='A',email='a@b.com',website_type='Studio')
    assert m.website_type=='Studio'


def test_managed_code_collision_failure(monkeypatch):
    monkeypatch.setattr(managed.secrets,'choice',lambda alphabet:'A')
    with pytest.raises(managed.ManagedLeadError):
        managed.generate_lead_code({'ZPRO-AAAAAA'})


def test_object_store_interface_raises():
    store=ObjectStore()
    with pytest.raises(NotImplementedError): store.put('x',b'x')
    with pytest.raises(NotImplementedError): store.get('x')
