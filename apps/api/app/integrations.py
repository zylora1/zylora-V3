from __future__ import annotations
import base64, hashlib, hmac
import httpx
from .config import settings

class IntegrationError(RuntimeError): pass
class TransientIntegrationError(IntegrationError): pass
class AmbiguousIntegrationError(IntegrationError): pass

def _required(value:str,name:str)->str:
    if not value: raise IntegrationError(f'{name}_not_configured')
    return value

def verify_turnstile(token:str, remote_ip:str|None=None, client=httpx)->bool:
    secret=_required(settings.turnstile_secret_key,'turnstile')
    data={'secret':secret,'response':token}
    if remote_ip: data['remoteip']=remote_ip
    r=client.post('https://challenges.cloudflare.com/turnstile/v0/siteverify',data=data,timeout=10)
    r.raise_for_status(); return bool(r.json().get('success'))

def verify_google_id_token(id_token:str, jwk_client_factory=None)->dict:
    audience=_required(settings.google_client_id,'google')
    try:
        import jwt
        factory = jwk_client_factory or (lambda: jwt.PyJWKClient('https://www.googleapis.com/oauth2/v3/certs'))
        key = factory().get_signing_key_from_jwt(id_token).key
        payload = jwt.decode(
            id_token, key, algorithms=['RS256'], audience=audience,
            issuer=['https://accounts.google.com','accounts.google.com'],
            options={'require':['exp','iat','aud','iss','sub']}
        )
    except Exception as exc:
        raise IntegrationError('invalid_google_token') from exc
    if payload.get('email_verified') not in (True,'true'):
        raise IntegrationError('invalid_google_token')
    return payload

def razorpay_create_subscription(plan_id:str,total_count:int=12, client=httpx)->dict:
    key=_required(settings.razorpay_key_id,'razorpay'); secret=_required(settings.razorpay_key_secret,'razorpay')
    r=client.post('https://api.razorpay.com/v1/subscriptions',auth=(key,secret),json={'plan_id':plan_id,'total_count':total_count,'quantity':1},timeout=15)
    r.raise_for_status(); return r.json()

def verify_razorpay_webhook(body:bytes, signature:str)->bool:
    secret=_required(settings.razorpay_webhook_secret,'razorpay_webhook')
    digest=hmac.new(secret.encode(),body,hashlib.sha256).hexdigest()
    return hmac.compare_digest(digest,signature)

def resend_email(to:str,subject:str,html:str, client=httpx, idempotency_key:str|None=None)->dict:
    key=_required(settings.resend_api_key,'resend')
    headers={'Authorization':f'Bearer {key}','Content-Type':'application/json'}
    if idempotency_key: headers['Idempotency-Key']=idempotency_key
    try:
        r=client.post('https://api.resend.com/emails',headers=headers,json={'from':settings.resend_from_email,'to':[to],'subject':subject,'html':html},timeout=15)
        r.raise_for_status()
    except (httpx.ConnectError,httpx.ConnectTimeout,httpx.ReadTimeout,httpx.RemoteProtocolError) as exc:
        raise TransientIntegrationError('resend_transport_failed') from exc
    except httpx.HTTPStatusError as exc:
        status=exc.response.status_code
        if status==429 or status>=500 or (status==409 and idempotency_key):
            raise TransientIntegrationError(f'resend_temporary_http_{status}') from exc
        raise IntegrationError(f'resend_permanent_http_{status}') from exc
    return r.json()

def twilio_whatsapp(to:str,body:str, client=httpx)->dict:
    sid=_required(settings.twilio_account_sid,'twilio'); token=_required(settings.twilio_auth_token,'twilio'); sender=_required(settings.twilio_whatsapp_from,'twilio_whatsapp_from')
    auth=base64.b64encode(f'{sid}:{token}'.encode()).decode()
    try:
        r=client.post(f'https://api.twilio.com/2010-04-01/Accounts/{sid}/Messages.json',headers={'Authorization':f'Basic {auth}'},data={'From':sender if sender.startswith('whatsapp:') else 'whatsapp:'+sender,'To':to if to.startswith('whatsapp:') else 'whatsapp:'+to,'Body':body},timeout=15)
        r.raise_for_status()
    except (httpx.ConnectError,httpx.ConnectTimeout) as exc:
        raise TransientIntegrationError('twilio_connect_failed') from exc
    except (httpx.ReadTimeout,httpx.RemoteProtocolError) as exc:
        # Twilio may have accepted the message before the response was lost. Do not
        # retry automatically because that could notify the owner twice.
        raise AmbiguousIntegrationError('twilio_delivery_outcome_unknown') from exc
    except httpx.HTTPStatusError as exc:
        status=exc.response.status_code
        if status==429 or status>=500:
            raise TransientIntegrationError(f'twilio_temporary_http_{status}') from exc
        raise IntegrationError(f'twilio_permanent_http_{status}') from exc
    return r.json()

def cloudflare_create_hostname(hostname:str, client=httpx)->dict:
    token=_required(settings.cloudflare_api_token,'cloudflare'); zone=_required(settings.cloudflare_zone_id,'cloudflare_zone')
    r=client.post(f'https://api.cloudflare.com/client/v4/zones/{zone}/custom_hostnames',headers={'Authorization':f'Bearer {token}'},json={'hostname':hostname,'ssl':{'method':'txt','type':'dv','settings':{'min_tls_version':'1.2'}}},timeout=15)
    r.raise_for_status(); data=r.json()
    if not data.get('success'): raise IntegrationError('cloudflare_create_failed')
    return data['result']
