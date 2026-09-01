from __future__ import annotations
import uuid


def activate_plan(client, headers: dict, plan: str='STARTER', country: str='US') -> dict:
    """Activate a public self-service plan through the regional subscription contract."""
    plan=str(plan or 'STARTER').upper()
    assert plan in {'STARTER','GROWTH'}
    checkout_headers={**headers,'Idempotency-Key':'qa-'+uuid.uuid4().hex,'cf-ipcountry':country}
    order=client.post('/api/billing/subscription',headers=checkout_headers,json={'plan':plan})
    assert order.status_code==200,order.text
    data=order.json()
    payload={'subscription_id':data['subscription_id'],'payment_id':data.get('mock_payment_id'),'signature':data.get('mock_signature')}
    if data.get('provider')=='mock': payload['mock_billing_country']=country
    verify=client.post('/api/billing/subscription/verify',headers=headers,json=payload)
    assert verify.status_code==200,verify.text
    assert verify.json()['plan']==plan
    return verify.json()


def activate_zylora(client, headers: dict, country: str='US') -> dict:
    """Compatibility alias for older tests; public paid access now defaults to Starter."""
    return activate_plan(client,headers,'STARTER',country)
