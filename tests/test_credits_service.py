import pytest
from apps.api.app.services.credits import consume,CreditError,chatbot_mode

def test_credit_ledger_consumption(db,user):
    user.lead_credits=3;user.ai_credits=2;db.commit()
    assert consume(db,user,'LEAD',1,'lead-1')==2
    assert consume(db,user,'LEAD',1,'lead-1')==2
    assert consume(db,user,'AI',1,'ai-1')==1
    assert chatbot_mode(user)=='LEAD_CREDITS'
    with pytest.raises(CreditError):consume(db,user,'BAD',1)
    with pytest.raises(CreditError):consume(db,user,'AI',0)
    with pytest.raises(CreditError):consume(db,user,'AI',99)
