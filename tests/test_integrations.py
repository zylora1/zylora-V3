import json, hmac, hashlib
import httpx
import pytest
from apps.api.app import integrations as i
from apps.api.app.config import settings

class R:
    def __init__(self,data): self.data=data
    def raise_for_status(self): pass
    def json(self): return self.data
class C:
    def __init__(self,data): self.data=data; self.calls=[]
    def post(self,*a,**kw): self.calls.append(('post',a,kw)); return R(self.data)
    def get(self,*a,**kw): self.calls.append(('get',a,kw)); return R(self.data)

def setv(name,val): object.__setattr__(settings,name,val)

def test_turnstile():
    setv('turnstile_secret_key','s'); c=C({'success':True}); assert i.verify_turnstile('t','1.2.3.4',c); assert c.calls[0][2]['data']['response']=='t'
def test_google(monkeypatch):
    setv('google_client_id','cid')
    class SigningKey: key='public-key'
    class JWK:
        def get_signing_key_from_jwt(self, token): return SigningKey()
    def fake_decode(token,key,algorithms,audience,issuer,options):
        assert audience=='cid' and 'RS256' in algorithms
        return {'aud':'cid','iss':'https://accounts.google.com','email_verified':True,'email':'a@b.com','sub':'1','exp':9999999999,'iat':1}
    import jwt
    monkeypatch.setattr(jwt,'decode',fake_decode)
    assert i.verify_google_id_token('signed.jwt.token',lambda:JWK())['sub']=='1'
    def bad_decode(*a,**k): raise ValueError('bad')
    monkeypatch.setattr(jwt,'decode',bad_decode)
    with pytest.raises(i.IntegrationError): i.verify_google_id_token('bad.jwt.token',lambda:JWK())
def test_razorpay_create_and_signature():
    setv('razorpay_key_id','k');setv('razorpay_key_secret','s'); c=C({'id':'sub_1','status':'created'}); assert i.razorpay_create_subscription('plan',client=c)['id']=='sub_1'
    setv('razorpay_webhook_secret','wh'); body=b'{}'; sig=hmac.new(b'wh',body,hashlib.sha256).hexdigest(); assert i.verify_razorpay_webhook(body,sig); assert not i.verify_razorpay_webhook(body,'bad')
def test_resend():
    setv('resend_api_key','re');setv('resend_from_email','Z <z@x.com>'); c=C({'id':'email'}); assert i.resend_email('a@b.com','s','<b>x</b>',c,idempotency_key='managed/1/customer')['id']=='email';assert c.calls[0][2]['headers']['Idempotency-Key']=='managed/1/customer'
def test_resend_classifies_transport_and_http_failures():
    setv('resend_api_key','re')
    class Timeout:
        def post(self,*a,**kw): raise httpx.ConnectTimeout('timeout')
    with pytest.raises(i.TransientIntegrationError): i.resend_email('a@b.com','s','h',Timeout())
    class Status:
        def __init__(self,status): self.status=status
        def post(self,*a,**kw):
            request=httpx.Request('POST','https://api.resend.com/emails');response=httpx.Response(self.status,request=request)
            raise httpx.HTTPStatusError('bad',request=request,response=response)
    with pytest.raises(i.TransientIntegrationError): i.resend_email('a@b.com','s','h',Status(503))
    with pytest.raises(i.TransientIntegrationError): i.resend_email('a@b.com','s','h',Status(409),idempotency_key='same')
    with pytest.raises(i.IntegrationError): i.resend_email('a@b.com','s','h',Status(400))
def test_twilio():
    setv('twilio_account_sid','AC1');setv('twilio_auth_token','tok');setv('twilio_whatsapp_from','whatsapp:+1'); c=C({'sid':'SM1'}); assert i.twilio_whatsapp('+2','hi',c)['sid']=='SM1'; assert c.calls[0][2]['data']['To']=='whatsapp:+2'
def test_twilio_classifies_retryable_and_ambiguous_transport_failures():
    setv('twilio_account_sid','AC1');setv('twilio_auth_token','tok');setv('twilio_whatsapp_from','whatsapp:+1')
    class ConnectFail:
        def post(self,*a,**kw): raise httpx.ConnectTimeout('connect timeout')
    class ReadFail:
        def post(self,*a,**kw): raise httpx.ReadTimeout('read timeout')
    with pytest.raises(i.TransientIntegrationError): i.twilio_whatsapp('+2','hi',ConnectFail())
    with pytest.raises(i.AmbiguousIntegrationError): i.twilio_whatsapp('+2','hi',ReadFail())
def test_cloudflare():
    setv('cloudflare_api_token','cf');setv('cloudflare_zone_id','zone'); c=C({'success':True,'result':{'id':'h','status':'pending','ssl':{'status':'pending'}}}); assert i.cloudflare_create_hostname('a.com',c)['id']=='h'
def test_missing_config():
    setv('resend_api_key','')
    with pytest.raises(i.IntegrationError): i.resend_email('a','b','c',C({}))
