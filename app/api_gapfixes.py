from __future__ import annotations
import hashlib, json, re
from difflib import SequenceMatcher
from datetime import datetime, timedelta, timezone
from pathlib import Path
from uuid import uuid4
from fastapi import APIRouter, File, Form, HTTPException, Request, UploadFile
from pydantic import BaseModel, Field
from sqlalchemy import text

from .api import _audit, _owned_site, _user
from .config import settings
from .credits import grant_topup, wallet_summary
from . import ai_billing
from .db import SessionLocal, now_iso
from .providers import grounded_chatbot_answer, sync_google_sheet_event, verify_turnstile
from .settings_store import get_system_setting
from .security import durable_rate_limit

router=APIRouter(prefix='/api')

# ----------------------- Public security config -----------------------------
@router.get('/public/security-config')
def security_config():
    configured=bool(settings.turnstile_secret_key and settings.turnstile_site_key)
    required=settings.app_env=='production' or bool(settings.turnstile_secret_key)
    return {'turnstile_required':required,'turnstile_configured':configured,'turnstile_site_key':settings.turnstile_site_key if configured else ''}

# ----------------------- Site knowledge + chatbot ---------------------------
class KnowledgeTextIn(BaseModel):
    title:str=Field(min_length=2,max_length=140)
    content:str=Field(min_length=20,max_length=100000)


def _normalize_text(raw:str)->str:
    raw=re.sub(r'<[^>]+>',' ',raw)
    raw=re.sub(r'\s+',' ',raw).strip()
    return raw[:100000]


def _invalidate_chatbot_cache(db,site_id:str)->None:
    db.execute(text('DELETE FROM chatbot_answer_cache WHERE site_id=:s'),{'s':site_id})

def _normalized_query(value:str)->str:
    return re.sub(r'\s+',' ',re.sub(r'[^a-z0-9 ]+',' ',value.lower())).strip()[:1200]

def _safe_json_obj(raw)->dict:
    if isinstance(raw,dict): return raw
    try:
        value=json.loads(raw or '{}')
    except Exception:
        return {}
    return value if isinstance(value,dict) else {}

def _site_fact_bundle(site:dict)->dict:
    """Return only tenant-supplied/configured business facts for deterministic FAQ answers."""
    business=_safe_json_obj(site.get('business_profile_json'))
    seo=_safe_json_obj(site.get('seo_json'))
    entity=seo.get('entity') if isinstance(seo.get('entity'),dict) else {}
    scfg=seo.get('site') if isinstance(seo.get('site'),dict) else {}
    address=entity.get('address') if isinstance(entity.get('address'),dict) else {}
    return {
        'business_name':str(entity.get('business_name') or business.get('business_name') or site.get('business_name') or '').strip(),
        'description':str(entity.get('business_description') or business.get('description') or site.get('description') or '').strip(),
        'industry':str(business.get('industry') or entity.get('business_type') or '').strip(),
        'phone':str(entity.get('telephone') or '').strip(),
        'email':str(entity.get('email') or '').strip(),
        'opening_hours':[str(x).strip() for x in (entity.get('opening_hours') or []) if str(x).strip()],
        'service_area':[str(x).strip() for x in (entity.get('service_area') or []) if str(x).strip()],
        'location':', '.join(str(address.get(k) or '').strip() for k in ('street','locality','region','postal_code','country') if str(address.get(k) or '').strip()) or str(scfg.get('primary_location') or '').strip(),
        'primary_topic':str(scfg.get('primary_topic') or '').strip(),
    }

def _rule_answer(message:str,facts:dict,docs:list[dict])->tuple[str,str|None,str|None]:
    """High-confidence business FAQ matcher. Never invent a missing value."""
    q=_normalized_query(message)
    if re.search(r'\b(hours?|opening|open|closing|close|when.*open)\b',q) and facts.get('opening_hours'):
        return 'Our listed hours are: '+', '.join(facts['opening_hours'])+'.',None,'hours'
    if re.search(r'\b(where|location|located|address|directions)\b',q) and facts.get('location'):
        return 'Our listed location is '+facts['location']+'.',None,'location'
    if re.search(r'\b(phone|telephone|call|contact number|whatsapp)\b',q) and facts.get('phone'):
        return 'You can contact us at '+facts['phone']+'.',None,'phone'
    if re.search(r'\b(email|e mail|contact email)\b',q) and facts.get('email'):
        return 'You can email us at '+facts['email']+'.',None,'email'
    # Pricing/services may live in tenant knowledge. Reuse the conservative deterministic
    # matcher and only accept a genuinely grounded sentence.
    if re.search(r'\b(price|pricing|cost|fee|fees|rate|rates)\b',q):
        ans,doc_id=_grounded_answer(message,docs)
        if doc_id: return ans,doc_id,'pricing'
    if re.search(r'\b(service|services|offer|provide|do you do|what do you)\b',q):
        ans,doc_id=_grounded_answer(message,docs)
        if doc_id: return ans,doc_id,'services'
        if facts.get('primary_topic'):
            return 'Our listed focus is '+facts['primary_topic']+'.',None,'services'
    return '',None,None

def _cache_lookup(db,site_id:str,query:str)->dict|None:
    norm=_normalized_query(query); qhash=hashlib.sha256(norm.encode()).hexdigest()
    exact=db.execute(text('SELECT * FROM chatbot_answer_cache WHERE site_id=:s AND query_hash=:h AND expires_at>:n'),{'s':site_id,'h':qhash,'n':now_iso()}).mappings().first()
    if exact: return dict(exact)
    rows=db.execute(text('SELECT * FROM chatbot_answer_cache WHERE site_id=:s AND expires_at>:n ORDER BY created_at DESC LIMIT 200'),{'s':site_id,'n':now_iso()}).mappings().all()
    best=None; score=0.0
    for row in rows:
        candidate=str(row['normalized_query'] or '')
        ratio=SequenceMatcher(None,norm,candidate).ratio()
        # Require substantial token overlap too, preventing short generic questions
        # from colliding merely because their character shapes are similar.
        a,b=_tokens(norm),_tokens(candidate); overlap=len(a & b)/max(1,len(a | b))
        combined=max(ratio, overlap)
        if ratio>=0.92 and overlap>=0.60 and combined>score:
            best=dict(row); score=combined
    return best

def _cache_store(db,site_id:str,query:str,answer:str,source_doc_id:str|None)->None:
    norm=_normalized_query(query); qhash=hashlib.sha256(norm.encode()).hexdigest(); expires=(datetime.now(timezone.utc)+timedelta(days=30)).isoformat()
    db.execute(text('''INSERT INTO chatbot_answer_cache(id,site_id,normalized_query,answer,source_doc_id,query_hash,created_at,expires_at)
        VALUES (:i,:s,:q,:a,:d,:h,:n,:e) ON CONFLICT(site_id,query_hash) DO UPDATE SET answer=:a,source_doc_id=:d,created_at=:n,expires_at=:e'''),
        {'i':str(uuid4()),'s':site_id,'q':norm,'a':answer[:1000],'d':source_doc_id,'h':qhash,'n':now_iso(),'e':expires})

def _record_chat_metric(db,site_id:str,user_id:str,route:str,docs:list[dict],message:str)->None:
    # A conservative token-savings estimate: characters avoided / 4, plus the
    # 200-token output ceiling avoided for non-LLM routes. This is telemetry, not billing.
    context_chars=min(sum(len(str(d.get('content') or '')) for d in docs),2700)+len(message)
    saved_in=0 if route=='LLM' else max(1,context_chars//4)
    saved_out=0 if route=='LLM' else 200
    db.execute(text('''INSERT INTO chatbot_usage_metrics(id,site_id,user_id,route,estimated_input_tokens_saved,estimated_output_tokens_saved,created_at)
        VALUES (:i,:s,:u,:r,:a,:b,:n)'''),{'i':str(uuid4()),'s':site_id,'u':user_id,'r':route,'a':saved_in,'b':saved_out,'n':now_iso()})

def _refresh_knowledge_hash_cache(db,docs:list[dict])->None:
    """Cache document fingerprints so retrieval preprocessing happens only on change.

    The production RAG provider currently uses a bounded local relevance index rather
    than making a paid embedding API call. The cache still gives document-hash keyed
    invalidation and is ready for a vector backend without recomputing unchanged docs.
    """
    for doc in docs:
        content=' '.join(str(doc.get('content') or '').split())
        digest=hashlib.sha256(content.encode()).hexdigest()
        row=db.execute(text('SELECT content_hash FROM knowledge_embedding_cache WHERE document_id=:i'),{'i':doc['id']}).mappings().first()
        if not row or row['content_hash']!=digest:
            # Store a compact deterministic sparse signature; no external API spend.
            toks=sorted(_tokens(content))[:256]
            db.execute(text('''INSERT INTO knowledge_embedding_cache(document_id,content_hash,embedding_json,updated_at) VALUES (:i,:h,:e,:n)
                ON CONFLICT(document_id) DO UPDATE SET content_hash=:h,embedding_json=:e,updated_at=:n'''),
                {'i':doc['id'],'h':digest,'e':json.dumps(toks,separators=(',',':')),'n':now_iso()})

@router.get('/sites/{site_id}/knowledge')
def list_knowledge(site_id:str,request:Request):
    u=_user(request)
    with SessionLocal() as db:
        _owned_site(db,u['id'],site_id)
        rows=db.execute(text('SELECT id,title,filename,length(content) AS characters,created_at,updated_at FROM site_knowledge_docs WHERE site_id=:s ORDER BY updated_at DESC'),{'s':site_id}).mappings().all()
    return {'items':[dict(r) for r in rows]}

@router.post('/sites/{site_id}/knowledge')
def add_knowledge_text(site_id:str,payload:KnowledgeTextIn,request:Request):
    u=_user(request,True); content=_normalize_text(payload.content)
    with SessionLocal.begin() as db:
        _owned_site(db,u['id'],site_id)
        count=db.execute(text('SELECT count(*) FROM site_knowledge_docs WHERE site_id=:s'),{'s':site_id}).scalar_one()
        if count>=20: raise HTTPException(409,'Knowledge document limit reached')
        did=str(uuid4()); db.execute(text('INSERT INTO site_knowledge_docs(id,site_id,title,filename,content,created_at,updated_at) VALUES (:i,:s,:t,NULL,:c,:a,:a)'),{'i':did,'s':site_id,'t':payload.title.strip(),'c':content,'a':now_iso()}); _invalidate_chatbot_cache(db,site_id)
    _audit(u['id'],'KNOWLEDGE_ADD','knowledge',did,{'site_id':site_id}); return {'ok':True,'id':did}

@router.post('/sites/{site_id}/knowledge/upload')
async def upload_knowledge(site_id:str,request:Request,file:UploadFile=File(...),title:str|None=Form(default=None)):
    u=_user(request,True)
    # Authorize before reading or parsing attacker-controlled upload bytes.
    with SessionLocal() as db: _owned_site(db,u['id'],site_id)
    suffix=Path(file.filename or '').suffix.lower()
    if suffix not in {'.txt','.md','.csv','.html','.htm'}: raise HTTPException(415,'Upload TXT, Markdown, CSV or HTML so the chatbot can ground answers on readable text.')
    raw=await file.read(250001)
    if len(raw)>250000: raise HTTPException(413,'Knowledge file is too large; maximum size is 250 KB')
    try: content=_normalize_text(raw.decode('utf-8'))
    except UnicodeDecodeError: raise HTTPException(422,'Knowledge file must be UTF-8 text')
    if len(content)<20: raise HTTPException(422,'Knowledge file is too short')
    name=(title or Path(file.filename or 'Knowledge').stem)[:140]
    with SessionLocal.begin() as db:
        _owned_site(db,u['id'],site_id)
        count=db.execute(text('SELECT count(*) FROM site_knowledge_docs WHERE site_id=:s'),{'s':site_id}).scalar_one()
        if count>=20: raise HTTPException(409,'Knowledge document limit reached')
        did=str(uuid4()); db.execute(text('INSERT INTO site_knowledge_docs(id,site_id,title,filename,content,created_at,updated_at) VALUES (:i,:s,:t,:f,:c,:a,:a)'),{'i':did,'s':site_id,'t':name,'f':file.filename,'c':content,'a':now_iso()}); _invalidate_chatbot_cache(db,site_id)
    _audit(u['id'],'KNOWLEDGE_UPLOAD','knowledge',did,{'site_id':site_id,'filename':file.filename}); return {'ok':True,'id':did,'title':name}

@router.delete('/sites/{site_id}/knowledge/{doc_id}')
def delete_knowledge(site_id:str,doc_id:str,request:Request):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        _owned_site(db,u['id'],site_id)
        row=db.execute(text('SELECT 1 FROM site_knowledge_docs WHERE id=:i AND site_id=:s'),{'i':doc_id,'s':site_id}).first()
        if not row: raise HTTPException(404,'Knowledge document not found')
        db.execute(text('DELETE FROM site_knowledge_docs WHERE id=:i'),{'i':doc_id}); _invalidate_chatbot_cache(db,site_id)
    _audit(u['id'],'KNOWLEDGE_DELETE','knowledge',doc_id,{'site_id':site_id}); return {'ok':True}

class ChatIn(BaseModel):
    site_id:str
    message:str=Field(min_length=2,max_length=1200)
    session_id:str=Field(min_length=6,max_length=100)
    turnstile_token:str|None=None


def _tokens(text_value:str)->set[str]:
    stop={'the','and','for','with','this','that','you','your','are','our','can','what','when','where','how','does','have','from','about','into','will','would','could','please'}
    return {w for w in re.findall(r'[a-z0-9]{3,}',text_value.lower()) if w not in stop}


def _grounded_answer(question:str,docs:list[dict])->tuple[str,str|None]:
    """Deterministic development fallback for grounded answers.

    Production uses OpenAI semantic grounding. This local path intentionally stays
    conservative, but recognizes a few high-confidence business concepts (such as
    operating hours expressed as clock ranges) so vocabulary mismatches do not
    produce obviously false 'not grounded' results during local development.
    """
    q=_tokens(question)
    q_lower=question.lower()
    asks_hours=bool(re.search(r'\b(hours?|open|opening|close|closing|when.*open)\b',q_lower))
    best=None; best_score=0
    for doc in docs:
        sentences=re.split(r'(?<=[.!?])\s+|\n+',doc['content'])
        for sentence in sentences:
            sent=sentence.strip()
            if len(sent)<8: continue
            score=len(q & _tokens(sent))
            if asks_hours:
                # High-confidence signals only: a time range and/or named weekdays.
                has_time_range=bool(re.search(r'\b(?:[01]?\d|2[0-3])(?::[0-5]\d)?\s*(?:am|pm)?\s*(?:-|–|—|to)\s*(?:[01]?\d|2[0-3])(?::[0-5]\d)?\s*(?:am|pm)\b',sent,re.I))
                has_weekday=bool(re.search(r'\b(?:mon(?:day)?|tue(?:sday)?|wed(?:nesday)?|thu(?:rsday)?|fri(?:day)?|sat(?:urday)?|sun(?:day)?)\b',sent,re.I))
                if has_time_range: score+=3
                if has_weekday: score+=1
            if score>best_score:
                best_score=score; best=(sent,doc['id'],doc['title'])
    threshold=2 if asks_hours else 1
    if best and best_score>=threshold:
        answer=best[0][:520]
        return f"{answer} — Source: {best[2]}",best[1]
    return "I don't have that information in this website's knowledge yet. I can help you book an appointment or you can leave your details for the team.",None


def _appointment_slots()->list[str]:
    now=datetime.now(timezone.utc)
    slots=[]
    for day in range(1,4):
        d=now+timedelta(days=day)
        for hour in (10,14):
            slots.append(d.replace(hour=hour,minute=0,second=0,microsecond=0).isoformat())
    return slots[:4]

@router.post('/public/chatbot')
def chatbot(payload:ChatIn,request:Request):
    ip=request.client.host if request.client else 'unknown'
    durable_rate_limit('chatbot-ip:'+ip,max(1,int(get_system_setting('ai_chatbot_ip_message_limit','120') or 120)),3600)
    durable_rate_limit('chatbot-session:'+payload.site_id+':'+payload.session_id,max(1,int(get_system_setting('ai_chatbot_session_message_limit','30') or 30)),3600)
    durable_rate_limit('chatbot-site:'+payload.site_id,max(1,int(get_system_setting('ai_chatbot_site_hourly_limit','180') or 180)),3600)
    verify_turnstile(payload.turnstile_token,ip)
    with SessionLocal.begin() as db:
        site_row=db.execute(text("SELECT * FROM sites WHERE id=:i AND status='LIVE'"),{'i':payload.site_id}).mappings().first()
        if not site_row: raise HTTPException(404,'Live site not found')
        site=dict(site_row); owner_id=str(site['user_id'])
        docs=[dict(r) for r in db.execute(text('SELECT id,title,content FROM site_knowledge_docs WHERE site_id=:s'),{'s':payload.site_id}).mappings().all()]
        _refresh_knowledge_hash_cache(db,docs)
        history=[dict(r) for r in db.execute(text('''SELECT role,content FROM chatbot_messages WHERE site_id=:s AND session_id=:x ORDER BY created_at DESC LIMIT 8'''),{'s':payload.site_id,'x':payload.session_id}).mappings().all()]
        history=list(reversed(history))
        facts=_site_fact_bundle(site)
        answer,doc_id,rule=_rule_answer(payload.message,facts,docs)
        route='RULE' if rule else ''
        action='ANSWER'; slots=[]
        lower=payload.message.lower()
        wants_booking=any(k in lower for k in ('book','appointment','schedule','reserve a time','consultation','meeting','availability'))
        if not answer and wants_booking:
            answer='I can help you book an appointment. Choose one of the available times below, then add your name and email to confirm it.'
            doc_id=None; action='BOOK_APPOINTMENT'; slots=_appointment_slots(); route='BOOKING'
        if not answer:
            cached=_cache_lookup(db,payload.site_id,payload.message)
            if cached:
                answer=str(cached['answer']); doc_id=cached.get('source_doc_id'); route='CACHE'
        if answer:
            _record_chat_metric(db,payload.site_id,owner_id,route,docs,payload.message)
    provider_reservation=None; provider_request_id=str(uuid4()); provider_model=getattr(settings,'sales_assistant_model','gpt-4o-mini')
    if not answer:
        if settings.app_env.lower()=='production':
            # Published-site LLM calls are paid work. Reserve from the owner's
            # NORMAL wallet, then CHATBOT_RESERVED protection, before contacting
            # the provider. The public visitor never supplies account identity.
            with SessionLocal.begin() as db:
                owner=db.execute(text('SELECT id,plan FROM users WHERE id=:u'),{'u':owner_id}).mappings().first()
                if not owner: raise HTTPException(404,'Live site owner not found')
                try:
                    # grounded_chatbot_answer bounds knowledge/history and the
                    # provider output; reserve that server-side maximum before
                    # the public request reaches OpenAI.
                    request_budget=ai_billing.feature_reservation_budget(
                        db, feature='PUBLIC_SITE_ASSISTANT', provider='openai',
                        model=provider_model,
                    )
                    day=datetime.now(timezone.utc).date().isoformat()+'T00:00:00+00:00'; month=datetime.now(timezone.utc).strftime('%Y-%m')+'-01T00:00:00+00:00'
                    used_day=ai_billing._dec(db.execute(text("SELECT COALESCE(SUM(CASE WHEN amount<0 THEN -amount ELSE 0 END),0) FROM ai_credit_ledger WHERE account_id=:a AND feature IN ('SALES_ASSISTANT','PUBLIC_SITE_ASSISTANT') AND entry_type='AI_SETTLEMENT' AND created_at>=:d"),{'a':owner['id'],'d':day}).scalar_one())
                    used_month=ai_billing._dec(db.execute(text("SELECT COALESCE(SUM(CASE WHEN amount<0 THEN -amount ELSE 0 END),0) FROM ai_credit_ledger WHERE account_id=:a AND feature IN ('SALES_ASSISTANT','PUBLIC_SITE_ASSISTANT') AND entry_type='AI_SETTLEMENT' AND created_at>=:d"),{'a':owner['id'],'d':month}).scalar_one())
                    daily_limit=ai_billing._dec(get_system_setting('ai_chatbot_daily_credit_limit','50')); monthly_limit=ai_billing._dec(get_system_setting('ai_chatbot_monthly_credit_limit','1000'))
                    if (daily_limit>0 and used_day+request_budget>daily_limit) or (monthly_limit>0 and used_month+request_budget>monthly_limit):
                        provider_reservation=None
                    else:
                        provider_reservation=ai_billing.reserve_ai_operation(db,account_id=owner['id'],user_id=owner['id'],site_id=payload.site_id,plan=owner['plan'],estimated_credits=request_budget,feature='PUBLIC_SITE_ASSISTANT',operation_id=provider_request_id,request_id=provider_request_id,idempotency_key='public-chat:'+payload.site_id+':'+payload.session_id+':'+hashlib.sha256(payload.message.encode()).hexdigest()[:24],provider='openai',model=provider_model,allow_reserved=True)
                    if provider_reservation and provider_reservation.get('idempotent'):
                        # A replayed public request may not cause another paid
                        # provider call.  Prefer the deterministic handoff if
                        # the original cached response is unavailable.
                        provider_reservation = None
                        answer = 'I can help pass this to the team. Please leave your contact details and a short description of what you need.'
                        route = 'CREDIT_FALLBACK'; doc_id = None
                except ValueError:
                    provider_reservation=None
            if provider_reservation is None:
                answer='I can help pass this to the team. Please leave your contact details and a short description of what you need.'
                route='CREDIT_FALLBACK'; doc_id=None
        if settings.app_env.lower()=='production' and provider_reservation is not None:
            try:
                try:
                    answer,doc_id,usage=grounded_chatbot_answer(payload.message,docs,history,return_usage=True)
                except TypeError:
                    answer,doc_id=grounded_chatbot_answer(payload.message,docs,history); usage={}
                route='LLM'
                with SessionLocal.begin() as db:
                    cost=ai_billing.calculate_provider_cost(db,provider='openai',model=provider_model,input_units=max(0,int(usage.get('input_tokens') or 0)-int((usage.get('input_tokens_details') or {}).get('cached_tokens') or 0)),cached_input_units=int((usage.get('input_tokens_details') or {}).get('cached_tokens') or 0),output_units=int(usage.get('output_tokens') or 0))
                    settled=ai_billing.settle_ai_operation(db,provider_reservation,cost['credits'],provider_cost_micros=cost['provider_cost_micros'],customer_usage_value_micros=cost['customer_usage_value_micros'],provider='openai',model=provider_model,pricing_version=cost['pricing_version'],input_units=cost['input_units'],cached_input_units=cost['cached_input_units'],output_units=cost['output_units'])
                    charged=ai_billing.public_decimal(settled.get('settled_amount',0))
                    wallet_mode='RESERVED' if provider_reservation.get('wallet_type')==ai_billing.CHATBOT_RESERVED else 'NORMAL'
            except Exception as exc:
                if provider_reservation:
                    try:
                        with SessionLocal.begin() as db: ai_billing.release_ai_operation(db,provider_reservation,'public_provider_failure')
                    except Exception: pass
                raise HTTPException(503,'AI assistant is temporarily unavailable') from exc
        else:
            if not answer:
                answer,doc_id=_grounded_answer(payload.message,docs); route='LOCAL_FALLBACK'
        if 'charged' not in locals(): charged=0
        with SessionLocal.begin() as db:
            if route=='LLM' and answer:
                _cache_store(db,payload.site_id,payload.message,answer,doc_id)
            _record_chat_metric(db,payload.site_id,owner_id,route,docs,payload.message)
    with SessionLocal.begin() as db:
        db.execute(text('INSERT INTO chatbot_messages(id,site_id,session_id,role,content,grounded_doc_id,action,created_at) VALUES (:i,:s,:x,\'USER\',:c,NULL,NULL,:a)'),{'i':str(uuid4()),'s':payload.site_id,'x':payload.session_id,'c':payload.message,'a':now_iso()})
        db.execute(text('INSERT INTO chatbot_messages(id,site_id,session_id,role,content,grounded_doc_id,action,created_at) VALUES (:i,:s,:x,\'ASSISTANT\',:c,:d,:o,:a)'),{'i':str(uuid4()),'s':payload.site_id,'x':payload.session_id,'c':answer,'d':doc_id,'o':action,'a':now_iso()})
    return {'answer':answer,'grounded':bool(doc_id) or route in {'RULE','BOOKING'},'source_doc_id':doc_id,'action':action,'slots':slots,'credit_cost':charged if 'charged' in locals() else 0,'route':route,'wallet_mode':locals().get('wallet_mode')}

@router.get('/sites/{site_id}/chatbot-metrics')
def site_chatbot_metrics(site_id:str,request:Request):
    u=_user(request)
    with SessionLocal() as db:
        _owned_site(db,u['id'],site_id)
        rows=db.execute(text('''SELECT route,count(*) AS queries,sum(estimated_input_tokens_saved+estimated_output_tokens_saved) AS tokens_saved
            FROM chatbot_usage_metrics WHERE site_id=:s GROUP BY route'''),{'s':site_id}).mappings().all()
    counts={str(r['route']):int(r['queries']) for r in rows}; total=sum(counts.values())
    return {'site_id':site_id,'total_queries':total,'routes':{k:{'queries':v,'percent':round(v*100/total,2) if total else 0} for k,v in counts.items()},
        'estimated_tokens_saved':sum(int(r['tokens_saved'] or 0) for r in rows)}

@router.get('/admin/chatbot-metrics')
def admin_chatbot_metrics(request:Request):
    u=_user(request)
    if u['role']!='SUPER_ADMIN': raise HTTPException(403,'Admin only')
    with SessionLocal() as db:
        aggregate=db.execute(text('''SELECT route,count(*) AS queries,sum(estimated_input_tokens_saved+estimated_output_tokens_saved) AS tokens_saved FROM chatbot_usage_metrics GROUP BY route''')).mappings().all()
        tenants=db.execute(text('''SELECT m.user_id,m.route,count(*) AS queries,sum(m.estimated_input_tokens_saved+m.estimated_output_tokens_saved) AS tokens_saved
            FROM chatbot_usage_metrics m GROUP BY m.user_id,m.route ORDER BY m.user_id,m.route''')).mappings().all()
    total=sum(int(r['queries']) for r in aggregate)
    return {'total_queries':total,'aggregate':[dict(r) for r in aggregate],'tenants':[dict(r) for r in tenants]}

# ----------------------- Google Sheets re-sync ------------------------------
@router.post('/sites/{site_id}/integrations/google-sheets/resync')
def google_sheets_resync(site_id:str,request:Request):
    u=_user(request,True)
    with SessionLocal() as db:
        _owned_site(db,u['id'],site_id)
        enabled=db.execute(text('SELECT 1 FROM google_sheets_integrations WHERE site_id=:s AND enabled=1'),{'s':site_id}).first()
        if not enabled: raise HTTPException(409,'Connect and enable Google Sheets first')
        leads=[dict(r) for r in db.execute(text('SELECT * FROM leads WHERE site_id=:s ORDER BY created_at'),{'s':site_id}).mappings().all()]
        appts=[dict(r) for r in db.execute(text('SELECT * FROM appointments WHERE site_id=:s ORDER BY created_at'),{'s':site_id}).mappings().all()]
    sent=0
    for x in leads:
        # Appointment-origin leads are the unified lead record for the appointment below.
        # Re-sync the appointment once, not both the synthetic APPOINTMENT lead and appointment row.
        if str(x.get('source') or '').upper()=='APPOINTMENT' and x.get('appointment_id'):
            continue
        event='CHATBOT_LEAD' if x['source'] in {'CHATBOT','AI_ASSISTANT'} else 'FORM_LEAD'
        if sync_google_sheet_event(site_id,event,{'name':x['name'],'email':x['email'],'phone':x['phone'] or '','message':x['message'] or '','source':x['source']}): sent+=1
    for x in appts:
        if sync_google_sheet_event(site_id,'APPOINTMENT',{'name':x['name'],'email':x['email'],'starts_at':x['starts_at'],'source':x.get('source') or 'APPOINTMENT'}): sent+=1
    _audit(u['id'],'GOOGLE_SHEETS_RESYNC','integration',site_id,{'events':sent}); return {'ok':True,'events_synced':sent}

# ----------------------- Freelancer program --------------------------------
class FreelancerProfileIn(BaseModel):
    display_name:str=Field(min_length=2,max_length=100)
    bio:str=Field(default='',max_length=1000)

@router.get('/freelancer/dashboard')
def freelancer_dashboard(request:Request):
    u=_user(request)
    with SessionLocal() as db:
        profile=db.execute(text('SELECT * FROM freelancer_profiles WHERE user_id=:u'),{'u':u['id']}).mappings().first()
        sites=db.execute(text('SELECT id,business_name,status,slug,template_slug,created_at FROM sites WHERE user_id=:u ORDER BY updated_at DESC'),{'u':u['id']}).mappings().all()
        submissions=db.execute(text('SELECT * FROM freelancer_template_submissions WHERE freelancer_id=:u ORDER BY updated_at DESC'),{'u':u['id']}).mappings().all()
        ratings=db.execute(text('SELECT * FROM freelancer_ratings WHERE freelancer_id=:u ORDER BY created_at DESC'),{'u':u['id']}).mappings().all()
    p=dict(profile) if profile else None
    if p: p['rating_average']=round((p['rating_sum']/p['rating_count']),2) if p['rating_count'] else None
    return {'profile':p,'sites':[dict(r) for r in sites],'template_submissions':[dict(r) for r in submissions],'ratings':[dict(r) for r in ratings],'pricing':{'dashboard_usd_minor':0,'studio_usd_minor':0,'transfer_usd_minor':0,'standalone_export_usd_minor':int(get_system_setting('source_export_usd_minor','9900'))}}

@router.put('/freelancer/profile')
def save_freelancer_profile(payload:FreelancerProfileIn,request:Request):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        row=db.execute(text('SELECT 1 FROM freelancer_profiles WHERE user_id=:u'),{'u':u['id']}).first()
        if row: db.execute(text('UPDATE freelancer_profiles SET display_name=:n,bio=:b,updated_at=:a WHERE user_id=:u'),{'n':payload.display_name,'b':payload.bio,'a':now_iso(),'u':u['id']})
        else: db.execute(text('INSERT INTO freelancer_profiles(user_id,display_name,bio,status,created_at,updated_at) VALUES (:u,:n,:b,\'ACTIVE\',:a,:a)'),{'u':u['id'],'n':payload.display_name,'b':payload.bio,'a':now_iso()})
        db.execute(text("UPDATE users SET account_type='FREELANCER',updated_at=:a WHERE id=:u"),{'a':now_iso(),'u':u['id']})
    _audit(u['id'],'FREELANCER_PROFILE_SAVE','freelancer',u['id']); return {'ok':True}

# Backward-compatible tombstone: freelancer fees were intentionally removed in migration 006.
@router.post('/freelancer/sites/{site_id}/fees/{fee_type}')
def obsolete_freelancer_fee(site_id:str,fee_type:str,request:Request):
    _user(request,True)
    raise HTTPException(410,'Freelancer transfer fees were removed. Ownership transfer is free; source export uses the independent source-export checkout.')

class FreelancerTemplateIn(BaseModel):
    name:str=Field(min_length=2,max_length=120)
    description:str=Field(min_length=10,max_length=500)

@router.post('/freelancer/sites/{site_id}/publish-template')
def freelancer_publish_template(site_id:str,payload:FreelancerTemplateIn,request:Request):
    _user(request,True)
    raise HTTPException(409,detail={
        'code':'TEMPLATE_SUBMISSIONS_PAUSED',
        'message':'Template submissions are paused while the catalogue is rebuilt from zero.'
    })

@router.get('/freelancer/ratings/eligible')
def eligible_freelancer_ratings(request:Request):
    u=_user(request)
    with SessionLocal() as db:
        rows=db.execute(text('''
          SELECT s.id AS site_id,s.business_name,t.from_user_id AS freelancer_id,
                 fp.display_name,r.stars
          FROM sites s
          JOIN ownership_transfers t ON t.site_id=s.id AND t.status='ACCEPTED' AND lower(t.to_email)=lower(:e)
          JOIN freelancer_profiles fp ON fp.user_id=t.from_user_id
          LEFT JOIN freelancer_ratings r ON r.client_user_id=:u AND r.site_id=s.id
          WHERE s.user_id=:u
          ORDER BY t.accepted_at DESC
        '''),{'u':u['id'],'e':u['email']}).mappings().all()
    return {'items':[dict(r) for r in rows]}

class RatingIn(BaseModel):
    site_id:str
    stars:int=Field(ge=1,le=5)

@router.post('/freelancer/ratings')
def rate_freelancer(payload:RatingIn,request:Request):
    u=_user(request,True)
    with SessionLocal.begin() as db:
        site=db.execute(text('SELECT * FROM sites WHERE id=:s AND user_id=:u'),{'s':payload.site_id,'u':u['id']}).mappings().first()
        if not site: raise HTTPException(404,'Owned site not found')
        tr=db.execute(text("SELECT * FROM ownership_transfers WHERE site_id=:s AND to_email=:e AND status='ACCEPTED' ORDER BY accepted_at DESC LIMIT 1"),{'s':payload.site_id,'e':u['email']}).mappings().first()
        if not tr: raise HTTPException(403,'This site is not eligible for a freelancer rating')
        freelancer_id=tr['from_user_id']
        if not db.execute(text('SELECT 1 FROM freelancer_profiles WHERE user_id=:u'),{'u':freelancer_id}).first(): raise HTTPException(403,'Transfer did not come from a freelancer')
        if db.execute(text('SELECT 1 FROM freelancer_ratings WHERE client_user_id=:u AND site_id=:s'),{'u':u['id'],'s':payload.site_id}).first(): raise HTTPException(409,'This site has already been rated')
        rid=str(uuid4()); db.execute(text('INSERT INTO freelancer_ratings(id,freelancer_id,client_user_id,site_id,stars,created_at) VALUES (:i,:f,:u,:s,:r,:a)'),{'i':rid,'f':freelancer_id,'u':u['id'],'s':payload.site_id,'r':payload.stars,'a':now_iso()})
        db.execute(text('UPDATE freelancer_profiles SET rating_sum=rating_sum+:r,rating_count=rating_count+1,updated_at=:a WHERE user_id=:f'),{'r':payload.stars,'a':now_iso(),'f':freelancer_id})
    _audit(u['id'],'FREELANCER_RATING','site',payload.site_id,{'stars':payload.stars,'freelancer_id':freelancer_id}); return {'ok':True,'id':rid}

# ----------------------- Admin credit top-up for fallback testing ------------
class CreditGrantIn(BaseModel):
    credits:int=Field(gt=0,le=100000)
    credit_type:str=Field(default='ai',pattern='^(ai|lead)$')
@router.post('/admin/users/{user_id}/credits/topup')
def admin_credit_topup(user_id:str,payload:CreditGrantIn,request:Request):
    u=_user(request,True)
    if u['role']!='SUPER_ADMIN': raise HTTPException(403,'Admin only')
    result=grant_topup(user_id,payload.credits,payload.credit_type); _audit(u['id'],'ADMIN_CREDIT_TOPUP','user',user_id,{'credits':payload.credits,'credit_type':payload.credit_type}); return result
