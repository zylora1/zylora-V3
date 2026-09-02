from __future__ import annotations

import hashlib
import json
import re
from datetime import datetime, timedelta, timezone
from uuid import uuid4
from sqlalchemy import text

from .config import settings
from .db import SessionLocal, now_iso
from .settings_store import get_system_setting
from .providers import sales_assistant_completion, estimate_openai_cost_micros
from .notifications import notify
from .operations import record_analytics, record_operational_event, safe_exception_summary
from .appointment_engine import available_slots, slot_is_available

INTENTS={
 'PRICE_QUERY':(r'\b(price|pricing|cost|charge|fee|how much|rate)\b',),
 'LOCATION_QUERY':(r'\b(where|location|address|located|directions?)\b',),
 'BUSINESS_HOURS_QUERY':(r'\b(open|opening|hours|close|closing|what time)\b',),
 'AVAILABILITY_QUERY':(r'\b(available|availability|free on|slot|time available)\b',),
 'APPOINTMENT_INTENT':(r'\b(book|appointment|schedule|reserve|consultation|visit)\b',),
 'QUOTE_REQUEST':(r'\b(quote|estimate|proposal)\b',),
 'CALLBACK_REQUEST':(r'\b(call me|callback|call back|phone me)\b',),
 'PURCHASE_INTENT':(r'\b(buy|purchase|sign up|hire you|go ahead|ready to start)\b',),
 'CONTACT_INTENT':(r'\b(contact|talk to|speak to|reach|human|person|team)\b',),
 'COMPLAINT':(r'\b(complaint|unhappy|angry|frustrated|bad experience|not happy)\b',),
 'SUPPORT_QUERY':(r'\b(support|help with my|problem with|issue with)\b',),
 'SERVICE_QUERY':(r'\b(service|services|offer|do you|provide|package|packages)\b',),
}
HIGH_INTENT={'APPOINTMENT_INTENT','QUOTE_REQUEST','CALLBACK_REQUEST','PURCHASE_INTENT','CONTACT_INTENT'}
INJECTION=re.compile(r'(?i)(ignore\s+(all\s+)?previous|system\s+prompt|developer\s+message|reveal\s+.*(lead|secret|password|api\s*key)|act\s+as\s+system|override\s+instructions|execute\s+(sql|query)|drop\s+table)')
EMAIL_RE=re.compile(r'(?i)\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b')
PHONE_RE=re.compile(r'(?<!\d)(?:\+?\d[\d ()-]{7,18}\d)(?!\d)')
BUDGET_RE=re.compile(r'(?i)(?:budget|around|up to|under|about)\s*(?:is\s*)?([₹$€£]?\s?[\d,]+(?:\.\d+)?\s*(?:k|lakh|lakhs|million)?)')
DATE_RE=re.compile(r'(?i)\b(\d{4}-\d{2}-\d{2}|\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?|today|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b')

DEFAULT_CONFIG={
 'enabled':1,'tone':'FRIENDLY','primary_goal':'GET_ENQUIRIES','proactive_prompts':1,
 'qualification_fields_json':'[]','contact_collection':'BOTH','human_handoff':1,'whatsapp_handoff':1,
 'appointment_booking':1,'use_business_profile':1,'use_published_site':1,'use_approved_knowledge':1,
 'restricted_topics_json':'[]','custom_instructions':'','config_revision':1,
}

def _j(raw,default):
    try:
        val=json.loads(raw) if isinstance(raw,str) else raw
        return val if isinstance(val,type(default)) else default
    except Exception:return default


def _clean_text(value,limit=1000): return ' '.join(str(value or '').split())[:limit]


def _site(site_id: str, *, live_only: bool=True) -> dict:
    with SessionLocal() as db:
        row=db.execute(text("SELECT * FROM sites WHERE id=:s"+(" AND status='LIVE'" if live_only else '')),{'s':site_id}).mappings().first()
    if not row: raise KeyError(site_id)
    return dict(row)


def site_config(site_id: str) -> dict:
    with SessionLocal() as db:
        row=db.execute(text('SELECT * FROM sales_assistant_configs WHERE site_id=:s'),{'s':site_id}).mappings().first()
    cfg={**DEFAULT_CONFIG,**(dict(row) if row else {})}
    cfg['qualification_fields']=_j(cfg.pop('qualification_fields_json','[]'),[])
    cfg['restricted_topics']=_j(cfg.pop('restricted_topics_json','[]'),[])
    return cfg


def save_site_config(site_id: str, patch: dict) -> dict:
    allowed={'enabled','tone','primary_goal','proactive_prompts','qualification_fields','contact_collection','human_handoff','whatsapp_handoff','appointment_booking','use_business_profile','use_published_site','use_approved_knowledge','restricted_topics','custom_instructions'}
    clean={k:v for k,v in patch.items() if k in allowed}
    current=site_config(site_id); current.update(clean)
    tone=str(current.get('tone') or 'FRIENDLY').upper()
    if tone not in {'PROFESSIONAL','FRIENDLY','CONCISE','CUSTOM'}: raise ValueError('Unsupported assistant tone')
    contact=str(current.get('contact_collection') or 'BOTH').upper()
    if contact not in {'PHONE','EMAIL','BOTH','NONE'}: raise ValueError('Unsupported contact collection mode')
    goal=str(current.get('primary_goal') or 'GET_ENQUIRIES').upper()
    if goal not in {'GET_ENQUIRIES','BOOK_APPOINTMENTS','GET_PHONE_CALLS','GET_WHATSAPP_MESSAGES','REQUEST_QUOTE','COLLECT_LEADS','SHOW_PORTFOLIO'}: raise ValueError('Unsupported conversion goal')
    q=[str(x)[:60] for x in (current.get('qualification_fields') or [])][:20]
    restricted=[str(x)[:120] for x in (current.get('restricted_topics') or [])][:30]
    custom=_clean_text(current.get('custom_instructions'),2000)
    now=now_iso()
    with SessionLocal.begin() as db:
        row=db.execute(text('SELECT config_revision FROM sales_assistant_configs WHERE site_id=:s'),{'s':site_id}).mappings().first()
        rev=int(row['config_revision'])+1 if row else 1
        db.execute(text('''INSERT INTO sales_assistant_configs(site_id,enabled,tone,primary_goal,proactive_prompts,qualification_fields_json,contact_collection,human_handoff,whatsapp_handoff,appointment_booking,use_business_profile,use_published_site,use_approved_knowledge,restricted_topics_json,custom_instructions,config_revision,updated_at,created_at)
        VALUES (:s,:e,:t,:g,:p,:q,:c,:h,:w,:a,:bp,:ps,:ak,:r,:ci,:rev,:n,:n)
        ON CONFLICT(site_id) DO UPDATE SET enabled=:e,tone=:t,primary_goal=:g,proactive_prompts=:p,qualification_fields_json=:q,contact_collection=:c,human_handoff=:h,whatsapp_handoff=:w,appointment_booking=:a,use_business_profile=:bp,use_published_site=:ps,use_approved_knowledge=:ak,restricted_topics_json=:r,custom_instructions=:ci,config_revision=:rev,updated_at=:n'''),{
        's':site_id,'e':int(bool(current.get('enabled'))),'t':tone,'g':goal,'p':int(bool(current.get('proactive_prompts'))),'q':json.dumps(q),'c':contact,'h':int(bool(current.get('human_handoff'))),'w':int(bool(current.get('whatsapp_handoff'))),'a':int(bool(current.get('appointment_booking'))),'bp':int(bool(current.get('use_business_profile'))),'ps':int(bool(current.get('use_published_site'))),'ak':int(bool(current.get('use_approved_knowledge'))),'r':json.dumps(restricted),'ci':custom,'rev':rev,'n':now})
    return site_config(site_id)


def classify_intents(message: str) -> list[str]:
    low=message.lower(); found=[]
    for name,patterns in INTENTS.items():
        if any(re.search(p,low) for p in patterns): found.append(name)
    return found or ['GENERAL_QUERY']


def _business_profile(site: dict) -> dict:
    raw=_j(site.get('business_profile_json') or '{}',{})
    return {'business_name':site.get('business_name'),'description':site.get('description'),'tagline':site.get('tagline'),**raw}


def _qualification_defaults(site: dict, config: dict) -> list[str]:
    configured=[str(x) for x in config.get('qualification_fields') or [] if str(x).strip()]
    if configured:return configured[:20]
    blob=' '.join([str(site.get('business_name') or ''),str(site.get('description') or ''),str(site.get('template_slug') or '')]).lower()
    if any(x in blob for x in ('photograph','wedding')): return ['service','event_date','location','phone']
    if any(x in blob for x in ('salon','beauty','spa')): return ['service','preferred_date','preferred_time','phone']
    if any(x in blob for x in ('consult','agency')): return ['service','company','business_problem','preferred_time','email']
    if any(x in blob for x in ('real estate','property','realt')): return ['buy_or_rent','location','budget','property_type','timeline','phone']
    return ['service','preferred_date','contact']


def _extract_qualification(message: str, contact: dict|None=None) -> dict:
    q={}; contact=contact or {}
    for key in ('name','email','phone','company','service_interest','location','preferred_date','preferred_time','budget'):
        if contact.get(key): q[key]=_clean_text(contact[key],180)
    if 'email' not in q:
        m=EMAIL_RE.search(message)
        if m:q['email']=m.group(0).lower()
    if 'phone' not in q:
        m=PHONE_RE.search(message)
        if m:q['phone']=_clean_text(m.group(0),40)
    if 'budget' not in q:
        m=BUDGET_RE.search(message)
        if m:q['budget']=_clean_text(m.group(1),80)
    if 'preferred_date' not in q:
        m=DATE_RE.search(message)
        if m:q['preferred_date']=m.group(1)
    return q


def _safe_sentence_candidates(text_value: str) -> list[str]:
    text_value=_clean_text(text_value,12000)
    out=[]
    for sentence in re.split(r'(?<=[.!?])\s+|\n+',text_value):
        s=sentence.strip()
        if 8<=len(s)<=500 and not INJECTION.search(s): out.append(s)
    return out


def search_business_knowledge(site: dict, question: str, config: dict) -> dict:
    profile=_business_profile(site); terms={x for x in re.findall(r'[a-z0-9]{3,}',question.lower()) if x not in {'what','when','where','does','your','with','have','this','that','about'}}
    facts=[]; sources=[]
    if int(config.get('use_business_profile') or 0):
        for key in ('description','tagline'):
            for s in _safe_sentence_candidates(profile.get(key) or ''): facts.append((len(terms & set(re.findall(r'[a-z0-9]{3,}',s.lower()))),s,'BUSINESS_PROFILE'))
        for service in profile.get('services') or []:
            s=_clean_text(service,400)
            if s and not INJECTION.search(s): facts.append((3 if any(t in s.lower() for t in terms) else 1,s,'BUSINESS_PROFILE'))
    if int(config.get('use_published_site') or 0):
        # Published structured text is data, never instructions.
        doc=_j(site.get('published_structure_json') or '{}',{})
        for op in doc.get('operations') or []:
            if isinstance(op,dict) and op.get('type')=='set_text':
                s=_clean_text(op.get('text'),500)
                if s and not INJECTION.search(s): facts.append((len(terms & set(re.findall(r'[a-z0-9]{3,}',s.lower()))),s,'PUBLISHED_SITE'))
    if int(config.get('use_approved_knowledge') or 0):
        with SessionLocal() as db:
            rows=db.execute(text('SELECT id,title,content FROM site_knowledge_docs WHERE site_id=:s ORDER BY updated_at DESC LIMIT 100'),{'s':site['id']}).mappings().all()
        for row in rows:
            for s in _safe_sentence_candidates(row['content']):
                score=len(terms & set(re.findall(r'[a-z0-9]{3,}',s.lower())))
                if score:facts.append((score,s,f"KNOWLEDGE:{row['id']}"))
    facts.sort(key=lambda x:(x[0],len(x[1])),reverse=True)
    for score,s,source in facts[:5]:
        if score<=0 and terms: continue
        sources.append({'text':s,'source':source})
    return {'matches':sources[:4]}


def get_business_hours(site: dict) -> dict:
    profile=_business_profile(site); hours=profile.get('opening_hours') or []
    return {'known':bool(hours),'opening_hours':[str(x)[:160] for x in hours[:20]]}


def get_location(site: dict) -> dict:
    p=_business_profile(site); keys=('street','locality','region','postal_code','country')
    parts=[_clean_text(p.get(k),160) for k in keys if p.get(k)]
    return {'known':bool(parts),'address':', '.join(parts),'location':_clean_text(p.get('location'),200) if p.get('location') else None}


def get_contact_options(site: dict, config: dict) -> dict:
    p=_business_profile(site); phone=_clean_text(p.get('phone'),80) or None; email=_clean_text(p.get('email'),254) or None
    whatsapp=_clean_text(p.get('whatsapp') or p.get('whatsapp_phone') or phone,80) if int(config.get('whatsapp_handoff') or 0) else None
    return {'phone':phone,'email':email,'whatsapp':whatsapp,'human_handoff':bool(config.get('human_handoff'))}


def _risk_guard(site: dict, message: str) -> str|None:
    blob=(' '.join([str(site.get('business_name') or ''),str(site.get('description') or ''),str(site.get('template_slug') or '')])).lower(); low=message.lower()
    medical=any(x in blob for x in ('clinic','medical','doctor','dental','hospital','health'))
    legal=any(x in blob for x in ('law','legal','attorney','lawyer'))
    financial=any(x in blob for x in ('finance','investment','wealth','financial'))
    if medical and re.search(r'\b(diagnos|prescrib|dose|medication|symptom|emergency|chest pain|suicid|overdose)\b',low):
        return "I can help with the clinic's services, hours and appointments, but I can't diagnose symptoms or recommend treatment. If this may be an emergency, contact local emergency services now."
    if legal and re.search(r'\b(should i sue|legal advice|what should i plead|am i liable|case strategy)\b',low):
        return "I can share the firm's approved service information and help arrange contact, but I can't provide personalized legal advice. I can send your question to the team."
    if financial and re.search(r'\b(should i buy|invest in|portfolio allocation|guaranteed return|financial advice)\b',low):
        return "I can share the business's approved information and arrange contact, but I can't provide personalized regulated financial recommendations."
    return None


def _answer_from_tools(site: dict, message: str, intents: list[str], tools: dict) -> tuple[str,bool]:
    risk=_risk_guard(site,message)
    if risk:return risk,True
    if 'BUSINESS_HOURS_QUERY' in intents:
        h=tools['business_hours']
        if h['known']:return 'Our confirmed hours are: '+'; '.join(h['opening_hours'])+'.',True
    if 'LOCATION_QUERY' in intents:
        loc=tools['location']
        if loc['known']:return f"The confirmed address is {loc['address'] or loc['location']}.",True
    if 'AVAILABILITY_QUERY' in intents or 'APPOINTMENT_INTENT' in intents:
        slots=tools.get('appointment_slots') or []
        if slots:return 'I can check real appointment availability. I found some available times below.',True
    matches=(tools.get('knowledge') or {}).get('matches') or []
    if matches:
        # Do not invent: return the best verified business-provided sentence.
        return matches[0]['text'],True
    if 'CONTACT_INTENT' in intents or 'CALLBACK_REQUEST' in intents:
        return "I can send this to the team. Share the contact detail you'd like them to use.",True
    return "I don't have confirmed information about that. I can send your question to the business instead.",False


def _lead_score(intents: list[str], q: dict, page_url: str|None) -> tuple[int,str,list[str]]:
    score=5; reasons=[]
    if 'APPOINTMENT_INTENT' in intents: score+=35; reasons.append('EXPLICIT_BOOKING_INTENT')
    if 'QUOTE_REQUEST' in intents: score+=30; reasons.append('QUOTE_REQUEST')
    if 'PURCHASE_INTENT' in intents: score+=35; reasons.append('PURCHASE_INTENT')
    if 'CALLBACK_REQUEST' in intents: score+=25; reasons.append('CALLBACK_REQUEST')
    if q.get('phone'): score+=12; reasons.append('PHONE_PROVIDED')
    if q.get('email'): score+=8; reasons.append('EMAIL_PROVIDED')
    if q.get('preferred_date'): score+=10; reasons.append('SPECIFIC_DATE')
    if q.get('budget'): score+=8; reasons.append('BUDGET_PROVIDED')
    if q.get('service_interest'): score+=8; reasons.append('SERVICE_SELECTED')
    if page_url and any(x in page_url.lower() for x in ('pricing','book','contact','service')): score+=5; reasons.append('HIGH_INTENT_PAGE')
    score=max(0,min(100,score)); temp='HOT' if score>=75 else ('WARM' if score>=40 else 'COLD')
    return score,temp,reasons


def _summary(site: dict, intents: list[str], q: dict, message: str) -> str:
    parts=[]
    if q.get('service_interest'):parts.append(f"Interested in {q['service_interest']}")
    elif 'QUOTE_REQUEST' in intents:parts.append('Requested a quote')
    elif 'APPOINTMENT_INTENT' in intents:parts.append('Interested in booking an appointment')
    elif 'CONTACT_INTENT' in intents:parts.append('Asked to contact the business')
    if q.get('preferred_date'):parts.append(f"Preferred date: {q['preferred_date']}")
    if q.get('location'):parts.append(f"Location: {q['location']}")
    if q.get('budget'):parts.append(f"Budget: {q['budget']}")
    if q.get('company'):parts.append(f"Company: {q['company']}")
    if not parts:parts.append(_clean_text(message,260))
    return '. '.join(parts)[:800].rstrip('.')+'.'


def _upsert_lead(db, site: dict, conv: dict, intents: list[str], q: dict, message: str) -> tuple[str,bool,dict]:
    existing=None
    if conv.get('lead_id'):
        existing=db.execute(text('SELECT * FROM leads WHERE id=:i AND site_id=:s'),{'i':conv['lead_id'],'s':site['id']}).mappings().first()
    if not existing:
        existing=db.execute(text("SELECT * FROM leads WHERE site_id=:s AND session_id=:x AND source='AI_ASSISTANT' ORDER BY created_at DESC LIMIT 1"),{'s':site['id'],'x':conv['session_id']}).mappings().first()
    score,temp,reasons=_lead_score(intents,q,conv.get('page_url')); summary=_summary(site,intents,q,message); now=now_iso()
    if existing:
        oldq=_j(existing.get('qualification_json') or '{}',{}); oldq.update(q)
        score,temp,reasons=_lead_score(intents,oldq,conv.get('page_url'))
        db.execute(text('''UPDATE leads SET name=COALESCE(NULLIF(:n,''),name),email=COALESCE(NULLIF(:e,''),email),phone=COALESCE(NULLIF(:p,''),phone),company=COALESCE(:co,company),intent=:intent,service_interest=COALESCE(:sv,service_interest),budget=COALESCE(:b,budget),location=COALESCE(:loc,location),preferred_date=COALESCE(:pd,preferred_date),preferred_time=COALESCE(:pt,preferred_time),qualification_json=:q,lead_score=:sc,lead_temperature=:temp,score_reasons_json=:r,conversation_id=:cv,summary=:sm,page_url=COALESCE(:url,page_url),updated_at=:a WHERE id=:i'''),
          {'n':q.get('name') or '','e':q.get('email') or '','p':q.get('phone') or '','co':q.get('company'),'intent':','.join(intents),'sv':q.get('service_interest'),'b':q.get('budget'),'loc':q.get('location'),'pd':q.get('preferred_date'),'pt':q.get('preferred_time'),'q':json.dumps(oldq),'sc':score,'temp':temp,'r':json.dumps(reasons),'cv':conv['id'],'sm':summary,'url':conv.get('page_url'),'a':now,'i':existing['id']})
        return existing['id'],False,{'score':score,'temperature':temp,'reasons':reasons,'summary':summary}
    lid=str(uuid4()); name=q.get('name') or 'Website visitor'; email=(q.get('email') or f'visitor-{hashlib.sha256(conv["session_id"].encode()).hexdigest()[:12]}@assistant.invalid').lower(); phone=q.get('phone')
    db.execute(text('''INSERT INTO leads(id,site_id,source,status,name,email,phone,message,session_id,visitor_id,company,intent,service_interest,budget,location,preferred_date,preferred_time,qualification_json,lead_score,lead_temperature,score_reasons_json,conversation_id,summary,page_url,utm_source,utm_medium,utm_campaign,referrer,created_at,updated_at)
      VALUES (:i,:s,'AI_ASSISTANT','NEW',:n,:e,:p,:m,:x,:v,:co,:intent,:sv,:b,:loc,:pd,:pt,:q,:sc,:temp,:r,:cv,:sm,:url,:us,:um,:uc,:ref,:a,:a)'''),
      {'i':lid,'s':site['id'],'n':name[:80],'e':email[:254],'p':phone,'m':message[:3000],'x':conv['session_id'],'v':conv.get('visitor_id'),'co':q.get('company'),'intent':','.join(intents),'sv':q.get('service_interest'),'b':q.get('budget'),'loc':q.get('location'),'pd':q.get('preferred_date'),'pt':q.get('preferred_time'),'q':json.dumps(q),'sc':score,'temp':temp,'r':json.dumps(reasons),'cv':conv['id'],'sm':summary,'url':conv.get('page_url'),'us':conv.get('utm_source'),'um':conv.get('utm_medium'),'uc':conv.get('utm_campaign'),'ref':conv.get('referrer'),'a':now})
    db.execute(text('UPDATE assistant_conversations SET lead_id=:l WHERE id=:c'),{'l':lid,'c':conv['id']})
    return lid,True,{'score':score,'temperature':temp,'reasons':reasons,'summary':summary}


def _quota(site_id: str, conversation_id: str) -> tuple[bool,str|None]:
    """Abuse controls only; the Assistant has no plan/monthly usage quota.

    AI credits are reserved for builder/editor/generation and lead credits for delivery
    actions. Assistant messages are therefore unlimited from an entitlement perspective,
    while per-session and per-site rate controls remain as service-protection guardrails.
    """
    session=max(1,int(get_system_setting('assistant_session_message_limit','30') or 30))
    hourly=max(1,int(get_system_setting('assistant_site_hourly_limit','180') or 180))
    hour_start=(datetime.now(timezone.utc)-timedelta(hours=1)).isoformat()
    with SessionLocal() as db:
        conv=int(db.execute(text('SELECT count(*) FROM assistant_messages WHERE conversation_id=:c AND role=\'user\''),{'c':conversation_id}).scalar_one() or 0)
        recent=int(db.execute(text('SELECT COALESCE(sum(units),0) FROM assistant_usage WHERE site_id=:s AND created_at>=:a'),{'s':site_id,'a':hour_start}).scalar_one() or 0)
    if conv>=session:return False,'SESSION_LIMIT'
    if recent>=hourly:return False,'SITE_RATE_LIMIT'
    return True,None


def create_conversation(site_id: str, session_id: str, *, page_url: str|None=None, referrer: str|None=None, utm_source: str|None=None, utm_medium: str|None=None, utm_campaign: str|None=None, visitor_id: str|None=None, test_mode: bool=False) -> dict:
    site=_site(site_id,live_only=not test_mode); cfg=site_config(site_id)
    if not int(cfg.get('enabled') or 0): raise PermissionError('Assistant is disabled')
    sid=_clean_text(session_id,120)
    if len(sid)<8: raise ValueError('session_id is too short')
    with SessionLocal.begin() as db:
        row=db.execute(text('SELECT * FROM assistant_conversations WHERE site_id=:s AND session_id=:x AND test_mode=:t'),{'s':site_id,'x':sid,'t':1 if test_mode else 0}).mappings().first()
        if row:return dict(row)
        cid=str(uuid4()); now=now_iso()
        db.execute(text('''INSERT INTO assistant_conversations(id,site_id,session_id,visitor_id,test_mode,stage,intents_json,qualification_json,page_url,referrer,utm_source,utm_medium,utm_campaign,model_version,prompt_version,tool_schema_version,business_profile_revision,published_site_revision,assistant_config_revision,last_activity_at,created_at)
        VALUES (:i,:s,:x,:v,:t,'DISCOVER','[]','{}',:url,:ref,:us,:um,:uc,:model,'sales-assistant-v1','1',:bp,:ps,:rev,:a,:a)'''),
        {'i':cid,'s':site_id,'x':sid,'v':visitor_id,'t':1 if test_mode else 0,'url':_clean_text(page_url,500) or None,'ref':_clean_text(referrer,500) or None,'us':_clean_text(utm_source,160) or None,'um':_clean_text(utm_medium,160) or None,'uc':_clean_text(utm_campaign,160) or None,'model':settings.sales_assistant_model,'bp':str(site.get('document_version') or ''),'ps':str(site.get('published_at') or site.get('updated_at') or ''),'rev':int(cfg.get('config_revision') or 1),'a':now})
        row=db.execute(text('SELECT * FROM assistant_conversations WHERE id=:i'),{'i':cid}).mappings().first()
    if not test_mode:
        try:record_analytics(site_id,'ASSISTANT_IMPRESSION',sid,page_url or '/',{})
        except Exception:pass
    return dict(row)


def process_message(site_id: str, conversation_id: str, message: str, *, contact: dict|None=None, test_mode: bool=False, conversion_allowed: bool=True) -> dict:
    site=_site(site_id,live_only=not test_mode); cfg=site_config(site_id)
    max_chars=max(200,min(10000,int(get_system_setting('assistant_input_char_limit','2000') or 2000)))
    msg=_clean_text(message,max_chars+1)
    if not msg: raise ValueError('Message is required')
    if len(msg)>max_chars: raise OverflowError('Message is too long')
    with SessionLocal() as db:
        convrow=db.execute(text('SELECT * FROM assistant_conversations WHERE id=:c AND site_id=:s AND test_mode=:t'),{'c':conversation_id,'s':site_id,'t':1 if test_mode else 0}).mappings().first()
    if not convrow: raise KeyError(conversation_id)
    conv=dict(convrow)
    # Owner preview/test conversations must not consume production Assistant quota or usage.
    # They still pass through the same validation/grounding/tool pipeline so test mode remains representative.
    ok,reason=(True,None) if test_mode else _quota(site_id,conversation_id)
    contacts=get_contact_options(site,cfg)
    fallback={'lead_form':True,'appointment':bool(int(cfg.get('appointment_booking') or 0)),'whatsapp':bool(contacts.get('whatsapp')),'phone':bool(contacts.get('phone'))}
    if not ok:
        if not test_mode:
            record_operational_event('AI_ASSISTANT','ASSISTANT_QUOTA_EXHAUSTED',reason or 'quota',severity='WARNING',site_id=site_id,dedupe_minutes=60)
        return {'answer':'I can still help you contact the business using the options below.','fallback':fallback,'quota_exhausted':True,'conversation_id':conversation_id,'lead':None,'slots':[]}
    intents=classify_intents(msg); q=_extract_qualification(msg,contact); previous_q=_j(conv.get('qualification_json') or '{}',{}); previous_q.update(q); q=previous_q
    requested_date=q.get('preferred_date') if re.fullmatch(r'\d{4}-\d{2}-\d{2}',str(q.get('preferred_date') or '')) else None
    daypart='afternoon' if 'afternoon' in msg.lower() else ('morning' if 'morning' in msg.lower() else ('evening' if 'evening' in msg.lower() else None))
    slots=available_slots(site_id,requested_date=requested_date,daypart=daypart,limit=5) if int(cfg.get('appointment_booking') or 0) and ({'AVAILABILITY_QUERY','APPOINTMENT_INTENT'} & set(intents)) else []
    tools={'knowledge':search_business_knowledge(site,msg,cfg),'business_hours':get_business_hours(site),'location':get_location(site),'contact_options':contacts,'appointment_slots':slots,'qualification_fields':_qualification_defaults(site,cfg)}
    answer,grounded=_answer_from_tools(site,msg,intents,tools)
    input_tokens=output_tokens=0; model=settings.sales_assistant_model
    # OpenAI is only a grounded language layer over validated tool outputs; actions already ran server-side.
    if settings.openai_api_key:
        try:
            with SessionLocal() as db:
                hist=[dict(r) for r in db.execute(text('SELECT role,content FROM assistant_messages WHERE conversation_id=:c ORDER BY created_at DESC LIMIT 8'),{'c':conversation_id}).mappings().all()][::-1]
            result=sales_assistant_completion(business_context={'business_name':site.get('business_name'),'goal':cfg.get('primary_goal')},visitor_message=msg,history=hist,tool_results={**tools,'grounded_fallback_answer':answer},tone=cfg.get('tone') or 'FRIENDLY',max_output_tokens=int(get_system_setting('assistant_output_token_limit','350') or 350))
            if result.get('answer'): answer=result['answer']; grounded=True
            input_tokens=int(result.get('input_tokens') or 0);output_tokens=int(result.get('output_tokens') or 0);model=result.get('model') or model
        except Exception as exc:
            if not test_mode: record_operational_event('AI_ASSISTANT','OPENAI_FALLBACK',safe_exception_summary(exc),severity='WARNING',site_id=site_id,dedupe_minutes=5)
    lead_candidate=bool((set(intents)&HIGH_INTENT) and (q.get('email') or q.get('phone'))) or bool(('COMPLAINT' in intents or 'SUPPORT_QUERY' in intents) and (q.get('email') or q.get('phone')))
    should_lead=bool(lead_candidate and conversion_allowed)
    conversion_deferred=bool(lead_candidate and not conversion_allowed)
    lead_info=None; lead_created=False
    with SessionLocal.begin() as db:
        now=now_iso(); uid=str(uuid4()); aid=str(uuid4())
        db.execute(text('INSERT INTO assistant_messages(id,conversation_id,role,content,intent_json,tool_calls_json,token_input,token_output,estimated_cost_micros,created_at) VALUES (:i,:c,\'user\',:m,:ints,\'[]\',0,0,0,:a)'),{'i':uid,'c':conversation_id,'m':msg,'ints':json.dumps(intents),'a':now})
        tool_calls=['search_business_knowledge','get_business_hours','get_location','get_contact_options'] + (['check_appointment_availability'] if slots or {'AVAILABILITY_QUERY','APPOINTMENT_INTENT'}&set(intents) else [])
        estimated_cost=estimate_openai_cost_micros(model,{'input_tokens':input_tokens,'output_tokens':output_tokens})
        db.execute(text('INSERT INTO assistant_messages(id,conversation_id,role,content,intent_json,tool_calls_json,token_input,token_output,estimated_cost_micros,created_at) VALUES (:i,:c,\'assistant\',:m,:ints,:tools,:tin,:tout,:cost,:a)'),{'i':aid,'c':conversation_id,'m':answer[:1200],'ints':json.dumps(intents),'tools':json.dumps(tool_calls),'tin':input_tokens,'tout':output_tokens,'cost':estimated_cost,'a':now})
        if not test_mode:
            db.execute(text('INSERT INTO assistant_usage(id,site_id,conversation_id,usage_unit,units,input_tokens,output_tokens,estimated_cost_micros,created_at) VALUES (:i,:s,:c,\'MESSAGE\',1,:tin,:tout,:cost,:a)'),{'i':str(uuid4()),'s':site_id,'c':conversation_id,'tin':input_tokens,'tout':output_tokens,'cost':estimated_cost,'a':now})
        stage='QUALIFY' if should_lead else ('UNDERSTAND' if intents!=['GENERAL_QUERY'] else 'DISCOVER')
        db.execute(text('UPDATE assistant_conversations SET stage=:st,intents_json=:ints,qualification_json=:q,model_version=:model,last_activity_at=:a WHERE id=:c'),{'st':stage,'ints':json.dumps(intents),'q':json.dumps(q),'model':model,'a':now,'c':conversation_id})
        conv.update({'intents_json':json.dumps(intents),'qualification_json':json.dumps(q)})
        if should_lead and not test_mode:
            lead_id,lead_created,lead_info=_upsert_lead(db,site,conv,intents,q,msg)
            db.execute(text('UPDATE assistant_conversations SET lead_id=:l,summary=:sm WHERE id=:c'),{'l':lead_id,'sm':lead_info['summary'],'c':conversation_id})
            lead_info={'id':lead_id,**lead_info}
    if not test_mode:
        try:record_analytics(site_id,'ASSISTANT_MESSAGE_SENT',conv['session_id'],conv.get('page_url') or '/',{})
        except Exception:pass
        if lead_info:
            try:
                record_analytics(site_id,'ASSISTANT_LEAD_CREATED',conv['session_id'],conv.get('page_url') or '/',{})
                if lead_info['temperature']=='HOT':record_analytics(site_id,'ASSISTANT_HOT_LEAD',conv['session_id'],conv.get('page_url') or '/',{})
            except Exception:pass
            if lead_created:
                notify(site['user_id'],site_id,'CHATBOT_LEAD',f"New AI Sales Assistant lead for {site['business_name']}",f"{lead_info['temperature']} · Score {lead_info['score']}\n{lead_info['summary']}",idempotency_key='assistant-lead:'+lead_info['id'])
    return {'answer':answer,'grounded':grounded,'intents':intents,'conversation_id':conversation_id,'lead':lead_info,'slots':slots,'fallback':fallback,'qualification':q,'qualification_fields':tools['qualification_fields'],'conversion_deferred':conversion_deferred}


def link_appointment(conversation_id: str, appointment_id: str, lead_id: str|None=None) -> None:
    with SessionLocal.begin() as db:
        db.execute(text('UPDATE assistant_conversations SET appointment_id=:a,stage=\'CONVERT\',last_activity_at=:n WHERE id=:c'),{'a':appointment_id,'n':now_iso(),'c':conversation_id})
        if lead_id: db.execute(text('UPDATE leads SET appointment_id=:a,updated_at=:n WHERE id=:l'),{'a':appointment_id,'n':now_iso(),'l':lead_id})
        db.execute(text('UPDATE appointments SET conversation_id=:c,lead_id=:l WHERE id=:a'),{'c':conversation_id,'l':lead_id,'a':appointment_id})


def conversation_detail(site_id: str, conversation_id: str) -> dict:
    with SessionLocal() as db:
        conv=db.execute(text('SELECT * FROM assistant_conversations WHERE id=:c AND site_id=:s'),{'c':conversation_id,'s':site_id}).mappings().first()
        if not conv: raise KeyError(conversation_id)
        msgs=db.execute(text('SELECT id,role,content,intent_json,tool_calls_json,created_at FROM assistant_messages WHERE conversation_id=:c ORDER BY created_at'),{'c':conversation_id}).mappings().all()
    item=dict(conv);item['intents']=_j(item.pop('intents_json','[]'),[]);item['qualification']=_j(item.pop('qualification_json','{}'),{});item['messages']=[{**dict(x),'intents':_j(x['intent_json'],[]),'tool_calls':_j(x['tool_calls_json'],[])} for x in msgs]
    return item


def assistant_funnel(site_ids: list[str], start_iso: str) -> dict:
    totals={'opened':0,'meaningful_conversations':0,'leads_captured':0,'qualified':0,'hot_leads':0,'appointments_booked':0}
    with SessionLocal() as db:
        for sid in site_ids:
            totals['opened']+=int(db.execute(text("SELECT count(*) FROM assistant_conversations WHERE site_id=:s AND test_mode=0 AND created_at>=:a"),{'s':sid,'a':start_iso}).scalar_one() or 0)
            totals['meaningful_conversations']+=int(db.execute(text("SELECT count(DISTINCT c.id) FROM assistant_conversations c JOIN assistant_messages m ON m.conversation_id=c.id WHERE c.site_id=:s AND c.test_mode=0 AND c.created_at>=:a AND m.role='user'"),{'s':sid,'a':start_iso}).scalar_one() or 0)
            totals['leads_captured']+=int(db.execute(text("SELECT count(*) FROM leads WHERE site_id=:s AND source='AI_ASSISTANT' AND created_at>=:a"),{'s':sid,'a':start_iso}).scalar_one() or 0)
            totals['qualified']+=int(db.execute(text("SELECT count(*) FROM leads WHERE site_id=:s AND source='AI_ASSISTANT' AND created_at>=:a AND lead_score>=40"),{'s':sid,'a':start_iso}).scalar_one() or 0)
            totals['hot_leads']+=int(db.execute(text("SELECT count(*) FROM leads WHERE site_id=:s AND source='AI_ASSISTANT' AND created_at>=:a AND lead_temperature='HOT'"),{'s':sid,'a':start_iso}).scalar_one() or 0)
            totals['appointments_booked']+=int(db.execute(text("SELECT count(*) FROM appointments WHERE site_id=:s AND conversation_id IS NOT NULL AND status='BOOKED' AND created_at>=:a"),{'s':sid,'a':start_iso}).scalar_one() or 0)
    totals['conversion_rate']=round(totals['leads_captured']/max(1,totals['meaningful_conversations'])*100,2)
    return totals

def ensure_conversion_lead(site_id: str, conversation_id: str, *, contact: dict, intent: str='APPOINTMENT_INTENT', note: str='Appointment request', test_mode: bool=False) -> dict|None:
    if test_mode:return None
    site=_site(site_id,live_only=True); q=_extract_qualification(note,contact); intents=[intent]
    with SessionLocal.begin() as db:
        convrow=db.execute(text('SELECT * FROM assistant_conversations WHERE id=:c AND site_id=:s AND test_mode=0'),{'c':conversation_id,'s':site_id}).mappings().first()
        if not convrow: raise KeyError(conversation_id)
        conv=dict(convrow); existing_q=_j(conv.get('qualification_json') or '{}',{});existing_q.update(q);q=existing_q
        lid,created,info=_upsert_lead(db,site,conv,intents,q,note)
        db.execute(text('UPDATE assistant_conversations SET lead_id=:l,qualification_json=:q,summary=:sm,stage=\'QUALIFY\',last_activity_at=:n WHERE id=:c'),{'l':lid,'q':json.dumps(q),'sm':info['summary'],'n':now_iso(),'c':conversation_id})
    if created:
        notify(site['user_id'],site_id,'CHATBOT_LEAD',f"New AI Sales Assistant lead for {site['business_name']}",f"{info['temperature']} · Score {info['score']}\n{info['summary']}",idempotency_key='assistant-lead:'+lid)
    return {'id':lid,**info}

def prune_assistant_data() -> int:
    days=max(30,min(3650,int(get_system_setting('assistant_retention_days','180') or 180)))
    cutoff=(datetime.now(timezone.utc)-timedelta(days=days)).isoformat()
    with SessionLocal.begin() as db:
        ids=[r[0] for r in db.execute(text('SELECT id FROM assistant_conversations WHERE last_activity_at<:c'),{'c':cutoff}).all()]
        if not ids:return 0
        # Explicit per-conversation cleanup keeps SQLite and PostgreSQL behavior aligned.
        for cid in ids:
            db.execute(text('DELETE FROM assistant_usage WHERE conversation_id=:c'),{'c':cid})
            db.execute(text('DELETE FROM assistant_messages WHERE conversation_id=:c'),{'c':cid})
            db.execute(text('DELETE FROM assistant_action_keys WHERE conversation_id=:c'),{'c':cid})
            db.execute(text('DELETE FROM assistant_conversations WHERE id=:c'),{'c':cid})
        return len(ids)
