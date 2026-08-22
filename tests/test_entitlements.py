import pytest
from apps.api.app.services.entitlements import *

def test_entitlement_defaults_and_template_rules():
    assert entitlement_for('FREE').page_limit==2
    assert entitlement_for('STARTER').branding_removed
    assert entitlement_for('GROWTH').default_ai_credits==500
    assert can_use_template('FREE',2)
    assert not can_use_template('FREE',3)
    assert not can_use_template('GROWTH',11)
    assert not can_use_template('GROWTH',0)
    with pytest.raises(ValueError): entitlement_for('MANAGED')

def test_validate_page_count():
    validate_page_count('GROWTH','AI',2,8)
    validate_page_count('GROWTH','TEMPLATE',4,4)
    with pytest.raises(ValueError): validate_page_count('GROWTH','AI',2,0)
    with pytest.raises(ValueError): validate_page_count('FREE','AI',1,3)
    with pytest.raises(ValueError): validate_page_count('GROWTH','TEMPLATE',4,5)
