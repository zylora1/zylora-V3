from __future__ import annotations

"""Non-secret-leaking staging smoke checks for Zylora's external providers.

The script is intentionally conservative. It validates credentials with read-only
calls where possible and performs write/send checks only when explicit test targets
are supplied. It never prints secret values.
"""

import json
import os
import socket
import sys
from dataclasses import dataclass, asdict
from typing import Callable

import httpx


@dataclass
class Check:
    provider: str
    status: str
    detail: str


def present(name: str) -> bool:
    return bool((os.getenv(name) or '').strip())


def blocked(provider: str, detail: str) -> Check:
    return Check(provider, 'BLOCKED', detail)


def run(provider: str, fn: Callable[[], str]) -> Check:
    try:
        return Check(provider, 'PASS', fn())
    except Exception as exc:
        return Check(provider, 'FAIL', f'{type(exc).__name__}: {str(exc)[:260]}')


def dns_probe(host: str, port: int = 443) -> None:
    socket.getaddrinfo(host, port, type=socket.SOCK_STREAM)


def check_openai() -> str:
    dns_probe('api.openai.com')
    key=os.environ['OPENAI_API_KEY']
    model=os.getenv('OPENAI_MODEL','gpt-5-mini')
    with httpx.Client(timeout=20) as c:
        r=c.post('https://api.openai.com/v1/responses', headers={'Authorization':f'Bearer {key}'}, json={
            'model':model,'input':'Reply with exactly: ZYLORA_SMOKE_OK','max_output_tokens':16
        })
        r.raise_for_status(); data=r.json()
    if not data.get('id'):
        raise RuntimeError('OpenAI response missing id')
    return f'Responses API accepted a live request using model {model}'


def check_razorpay() -> str:
    dns_probe('api.razorpay.com')
    key=os.environ['RAZORPAY_KEY_ID']; secret=os.environ['RAZORPAY_KEY_SECRET']
    with httpx.Client(timeout=20) as c:
        r=c.get('https://api.razorpay.com/v1/orders?count=1', auth=(key,secret))
        r.raise_for_status(); data=r.json()
    if 'items' not in data:
        raise RuntimeError('Razorpay credential check returned unexpected payload')
    return 'Razorpay authenticated read succeeded; no payment was charged'


def check_cloudflare() -> str:
    dns_probe('api.cloudflare.com')
    token=os.environ['CLOUDFLARE_API_TOKEN']; zone=os.environ['CLOUDFLARE_ZONE_ID']
    with httpx.Client(timeout=20) as c:
        r=c.get(f'https://api.cloudflare.com/client/v4/zones/{zone}', headers={'Authorization':f'Bearer {token}'})
        r.raise_for_status(); data=r.json()
    if not data.get('success'):
        raise RuntimeError(f"Cloudflare returned errors: {data.get('errors')}")
    return 'Cloudflare token and zone read succeeded'


def check_turnstile() -> str:
    dns_probe('challenges.cloudflare.com')
    token=(os.getenv('TURNSTILE_TEST_TOKEN') or '').strip()
    if not token:
        raise RuntimeError('TURNSTILE_TEST_TOKEN is required for a real siteverify transaction')
    with httpx.Client(timeout=20) as c:
        r=c.post('https://challenges.cloudflare.com/turnstile/v0/siteverify', data={'secret':os.environ['TURNSTILE_SECRET_KEY'],'response':token})
        r.raise_for_status(); data=r.json()
    if not data.get('success'):
        raise RuntimeError(f"Turnstile rejected the token: {data.get('error-codes')}")
    return 'Turnstile siteverify accepted a real challenge token'


def check_google_oauth() -> str:
    dns_probe('oauth2.googleapis.com')
    code=(os.getenv('GOOGLE_TEST_AUTH_CODE') or '').strip()
    verifier=(os.getenv('GOOGLE_TEST_CODE_VERIFIER') or '').strip()
    redirect=(os.getenv('GOOGLE_REDIRECT_URI') or '').strip()
    if not (code and verifier and redirect):
        raise RuntimeError('GOOGLE_TEST_AUTH_CODE, GOOGLE_TEST_CODE_VERIFIER and GOOGLE_REDIRECT_URI are required for a real OAuth exchange')
    payload={'code':code,'client_id':os.environ['GOOGLE_CLIENT_ID'],'client_secret':os.environ['GOOGLE_CLIENT_SECRET'],'redirect_uri':redirect,'grant_type':'authorization_code','code_verifier':verifier}
    with httpx.Client(timeout=20) as c:
        r=c.post('https://oauth2.googleapis.com/token',data=payload); r.raise_for_status(); data=r.json()
    if not data.get('id_token'):
        raise RuntimeError('Google OAuth exchange returned no id_token')
    return 'Google OAuth authorization-code exchange succeeded'



def check_resend() -> str:
    dns_probe('api.resend.com')
    key=os.environ['RESEND_API_KEY']
    target=(os.getenv('EXTERNAL_SMOKE_EMAIL_TO') or '').strip()
    headers={'Authorization':f'Bearer {key}','Content-Type':'application/json'}
    with httpx.Client(timeout=20) as c:
        if target:
            payload={'from':os.getenv('RESEND_FROM','Zylora <notifications@zylora.example>'),'to':[target],'subject':'Zylora staging smoke test','text':'ZYLORA_SMOKE_OK'}
            r=c.post('https://api.resend.com/emails',headers=headers,json=payload); r.raise_for_status(); data=r.json()
            if not data.get('id'): raise RuntimeError('Resend send returned no message id')
            return 'Resend authentication and real test-email send succeeded'
        r=c.get('https://api.resend.com/domains',headers=headers); r.raise_for_status(); data=r.json()
        if not isinstance(data,dict): raise RuntimeError('Resend credential check returned unexpected payload')
    return 'Resend authenticated read succeeded; send skipped because EXTERNAL_SMOKE_EMAIL_TO is unset'


def check_twilio() -> str:
    sid=os.environ['TWILIO_ACCOUNT_SID']; token=os.environ['TWILIO_AUTH_TOKEN']
    dns_probe('api.twilio.com')
    target=(os.getenv('EXTERNAL_SMOKE_WHATSAPP_TO') or '').strip()
    with httpx.Client(timeout=20) as c:
        r=c.get(f'https://api.twilio.com/2010-04-01/Accounts/{sid}.json',auth=(sid,token)); r.raise_for_status(); data=r.json()
        if str(data.get('sid'))!=sid: raise RuntimeError('Twilio account lookup returned an unexpected SID')
        if target:
            sender=os.environ['TWILIO_WHATSAPP_FROM']; sender=sender if sender.startswith('whatsapp:') else 'whatsapp:'+sender
            to=target if target.startswith('whatsapp:') else 'whatsapp:'+target
            r=c.post(f'https://api.twilio.com/2010-04-01/Accounts/{sid}/Messages.json',auth=(sid,token),data={'From':sender,'To':to,'Body':'ZYLORA_SMOKE_OK'}); r.raise_for_status(); msg=r.json()
            if not msg.get('sid'): raise RuntimeError('Twilio send returned no message SID')
            return 'Twilio authentication and real WhatsApp test send succeeded'
    return 'Twilio account authentication succeeded; send skipped because EXTERNAL_SMOKE_WHATSAPP_TO is unset'


def check_whatsapp() -> str:
    dns_probe('graph.facebook.com')
    version=os.getenv('WHATSAPP_GRAPH_VERSION','v23.0'); phone_id=os.environ['WHATSAPP_PHONE_NUMBER_ID']; token=os.environ['WHATSAPP_ACCESS_TOKEN']
    with httpx.Client(timeout=20) as c:
        r=c.get(f'https://graph.facebook.com/{version}/{phone_id}',headers={'Authorization':f'Bearer {token}'},params={'fields':'id,display_phone_number,verified_name'})
        r.raise_for_status(); data=r.json()
    if str(data.get('id')) != str(phone_id):
        raise RuntimeError('WhatsApp phone-number lookup returned an unexpected id')
    return 'Meta WhatsApp token and phone-number ID authenticated successfully'


def main() -> int:
    checks=[]
    requirements={
        'OpenAI':['OPENAI_API_KEY'],
        'Razorpay':['RAZORPAY_KEY_ID','RAZORPAY_KEY_SECRET'],
        'Cloudflare':['CLOUDFLARE_API_TOKEN','CLOUDFLARE_ZONE_ID'],
        'Turnstile':['TURNSTILE_SECRET_KEY'],
        'Google OAuth':['GOOGLE_CLIENT_ID','GOOGLE_CLIENT_SECRET'],
        'Resend':['RESEND_API_KEY'],
        'Twilio WhatsApp':['TWILIO_ACCOUNT_SID','TWILIO_AUTH_TOKEN','TWILIO_WHATSAPP_FROM'],
        'Meta WhatsApp fallback':['WHATSAPP_PHONE_NUMBER_ID','WHATSAPP_ACCESS_TOKEN'],
    }
    funcs={'OpenAI':check_openai,'Razorpay':check_razorpay,'Cloudflare':check_cloudflare,'Turnstile':check_turnstile,'Google OAuth':check_google_oauth,'Resend':check_resend,'Twilio WhatsApp':check_twilio,'Meta WhatsApp fallback':check_whatsapp}
    for provider,names in requirements.items():
        missing=[n for n in names if not present(n)]
        if missing:
            checks.append(blocked(provider,'Missing required staging credential/config: '+', '.join(missing)))
        else:
            checks.append(run(provider,funcs[provider]))
    output={'checks':[asdict(c) for c in checks]}
    print(json.dumps(output,indent=2))
    # BLOCKED means the environment is incomplete, not that the product failed.
    return 1 if any(c.status=='FAIL' for c in checks) else 0


if __name__=='__main__':
    sys.exit(main())
