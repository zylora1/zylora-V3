from fastapi.testclient import TestClient

from app.main import app


def test_pricing_is_the_public_plan_page_and_choose_plan_is_private_checkout():
    with TestClient(app) as client:
        pricing = client.get('/pricing')
        choose_plan = client.get('/choose-plan')
    assert pricing.status_code == 200
    assert choose_plan.status_code == 200
    assert 'index,follow' in pricing.text
    assert 'noindex,nofollow' in choose_plan.text
    assert pricing.text != choose_plan.text
