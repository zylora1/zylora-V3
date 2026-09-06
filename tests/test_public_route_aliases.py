from fastapi.testclient import TestClient

from app.main import app


def test_pricing_alias_serves_the_public_plan_page():
    with TestClient(app) as client:
        pricing = client.get('/pricing')
        choose_plan = client.get('/choose-plan')
    assert pricing.status_code == 200
    assert choose_plan.status_code == 200
    assert pricing.text == choose_plan.text
