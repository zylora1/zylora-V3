from __future__ import annotations
import json
from datetime import datetime
import httpx
from sqlalchemy import select, func
from sqlalchemy.orm import Session
from ..config import settings
from ..models import Site,User,ChatSession,ChatMessage,SiteDocument
from .credits import chatbot_mode,consume,CreditError

class ChatbotError(ValueError): pass


def _content(site:Site)->dict:
    try:return json.loads(site.content_json or '{}')
    except Exception:return {}


def _site_context(db:Session,site:Site)->str:
    content=_content(site)
    pieces=[
        f"Business name: {content.get('businessName') or site.name}",
        f"Description: {content.get('description') or ''}",
        f"Phone: {content.get('phone') or ''}",
        f"Email: {content.get('email') or ''}",
        f"Address: {content.get('address') or ''}",
    ]
    services=content.get('services') or []
    if services:
        names=[]
        for item in services:
            if isinstance(item,str): names.append(item)
            elif isinstance(item,dict): names.append(str(item.get('name') or item.get('title') or ''))
        pieces.append('Services: '+', '.join(x for x in names if x))
    docs=db.scalars(select(SiteDocument).where(SiteDocument.site_id==site.id).order_by(SiteDocument.updated_at.desc())).all()
    for doc in docs:
        pieces.append(f"\n--- Document: {doc.name} ---\n{doc.content}")
    return '\n'.join(pieces)[:settings.chatbot_knowledge_max_chars]


def _cached_answer(site:Site)->str:
    content=_content(site);business=str(content.get('businessName') or site.name)
    return f"I can help connect you with {business}. Please share your name and email in the contact form so the team can follow up."


def _claude_answer(context:str,message:str,history:list[dict])->str:
    if not settings.anthropic_api_key and settings.env not in ('production','prod'):
        # Deterministic local/test substitute; production requires Claude credentials.
        lower=message.lower()
        lines=[x.strip() for x in context.splitlines() if x.strip()]
        if 'service' in lower:
            svc=next((x for x in lines if x.startswith('Services:')), '')
            return svc.replace('Services:','Services include').strip()+'.' if svc else 'I do not know the services from the supplied information. Please share your contact details.'
        return (next((x.split(':',1)[1].strip() for x in lines if x.startswith('Description:') and x.split(':',1)[1].strip()), '') or 'I can only answer from the supplied business information. Please share your contact details if you would like a follow-up.')[:800]
    if not settings.anthropic_api_key:
        raise ChatbotError('chatbot_provider_not_configured')
    system=(
        "You are the website assistant for the business described below. "
        "Answer only from the supplied business information and documents. "
        "Do not invent prices, services, policies, availability, guarantees, or facts. "
        "If the answer is not present, say you do not know and offer to collect the visitor's contact details or help them book a time. "
        "Keep replies concise, friendly, and suitable for a business website.\n\n"
        f"BUSINESS KNOWLEDGE\n{context}"
    )
    messages=[]
    for item in history[-8:]:
        if item['role'] in ('user','assistant') and item['content']:
            messages.append({'role':item['role'],'content':item['content'][:2000]})
    messages.append({'role':'user','content':message})
    try:
        with httpx.Client(timeout=20.0) as client:
            res=client.post('https://api.anthropic.com/v1/messages',headers={
                'x-api-key':settings.anthropic_api_key,
                'anthropic-version':'2023-06-01','content-type':'application/json'
            },json={'model':settings.anthropic_model,'max_tokens':400,'temperature':0.2,'system':system,'messages':messages})
            res.raise_for_status();body=res.json()
    except Exception as exc:
        raise ChatbotError('chatbot_provider_unavailable') from exc
    text=''.join(str(x.get('text') or '') for x in body.get('content',[]) if x.get('type')=='text').strip()
    if not text: raise ChatbotError('chatbot_empty_response')
    return text[:3000]


def reply(db:Session,site_id:int,visitor_key:str,message:str)->dict:
    site=db.get(Site,site_id)
    if not site or site.state!='LIVE': raise ChatbotError('site_not_found')
    owner=db.get(User,site.owner_id)
    if not owner: raise ChatbotError('owner_not_found')
    text=message.strip()
    if not text or len(text)>2000: raise ChatbotError('invalid_message')
    session=db.scalar(select(ChatSession).where(ChatSession.site_id==site_id,ChatSession.visitor_key==visitor_key))
    if not session:
        session=ChatSession(site_id=site_id,visitor_key=visitor_key);db.add(session);db.flush()
    count=int(db.scalar(select(func.count(ChatMessage.id)).where(ChatMessage.session_id==session.id,ChatMessage.role=='USER')) or 0)
    if count>=settings.chatbot_max_messages_per_session:
        answer=_cached_answer(site)
        db.add(ChatMessage(session_id=session.id,role='USER',content=text));db.add(ChatMessage(session_id=session.id,role='ASSISTANT',content=answer));db.commit()
        return {'session_id':session.id,'mode':'CACHED_FORCED_CAPTURE','reply':answer,'force_capture':True,'message_limit_reached':True}
    mode=chatbot_mode(owner)
    history=[{'role':m.role.lower(),'content':m.content} for m in db.scalars(select(ChatMessage).where(ChatMessage.session_id==session.id).order_by(ChatMessage.created_at.asc())).all()]
    if mode=='CACHED_FORCED_CAPTURE':
        answer=_cached_answer(site)
    else:
        credit_type='LEAD' if mode=='LEAD_CREDITS' else 'AI'
        try: consume(db,owner,credit_type,1)
        except CreditError:
            mode=chatbot_mode(owner)
            if mode=='CACHED_FORCED_CAPTURE': answer=_cached_answer(site)
            else: answer=_claude_answer(_site_context(db,site),text,history)
        else:
            answer=_claude_answer(_site_context(db,site),text,history)
    session.updated_at=datetime.utcnow()
    db.add(ChatMessage(session_id=session.id,role='USER',content=text))
    db.add(ChatMessage(session_id=session.id,role='ASSISTANT',content=answer))
    db.commit()
    return {'session_id':session.id,'mode':mode,'reply':answer,'force_capture':mode=='CACHED_FORCED_CAPTURE','message_limit_reached':False}
