from __future__ import annotations

import hashlib
import json
import math
import re
from datetime import datetime, timedelta, timezone
from urllib.parse import urlparse
from uuid import uuid4

from bs4 import BeautifulSoup
from sqlalchemy import text

from .config import settings
from .db import SessionLocal, now_iso
from .settings_store import get_system_setting


def safe_exception_summary(exc: BaseException) -> str:
    """Return provider-safe diagnostic metadata without echoing secrets, URLs or bodies."""
    name=type(exc).__name__
    status=getattr(getattr(exc,'response',None),'status_code',None)
    if status is None:
        status=getattr(exc,'status_code',None)
    return f'{name} (HTTP {status})' if status is not None else name


def _json(value, default):
    if isinstance(value, type(default)):
        return value
    try:
        parsed=json.loads(value or '')
        return parsed if isinstance(parsed,type(default)) else default
    except Exception:
        return default


def record_operational_event(component: str, event_code: str, message: str, *, severity: str='ERROR', user_id: str|None=None,
                             site_id: str|None=None, metadata: dict|None=None, dedupe_minutes: int=5) -> str:
    """Persist actionable operational failures without flooding the table with identical events."""
    component=str(component or 'APPLICATION').upper()[:50]
    severity=str(severity or 'ERROR').upper()[:20]
    if severity not in {'INFO','WARNING','ERROR','CRITICAL'}: severity='ERROR'
    code=str(event_code or 'UNKNOWN').upper()[:100]
    msg=' '.join(str(message or 'Operational failure').split())[:1500]
    cutoff=(datetime.now(timezone.utc)-timedelta(minutes=max(0,dedupe_minutes))).isoformat()
    with SessionLocal.begin() as db:
        prior=db.execute(text("""SELECT id FROM operational_events WHERE status='OPEN' AND component=:c AND event_code=:e
            AND coalesce(site_id,'')=coalesce(:s,'') AND created_at>=:cut ORDER BY created_at DESC LIMIT 1"""),
            {'c':component,'e':code,'s':site_id,'cut':cutoff}).scalar()
        if prior: return str(prior)
        eid=str(uuid4())
        db.execute(text("""INSERT INTO operational_events(id,user_id,site_id,component,severity,event_code,message,metadata,status,created_at)
          VALUES (:i,:u,:s,:c,:v,:e,:m,:j,'OPEN',:a)"""),{'i':eid,'u':user_id,'s':site_id,'c':component,'v':severity,'e':code,'m':msg,
          'j':json.dumps(metadata or {},separators=(',',':')),'a':now_iso()})
    return eid


def provider_readiness() -> dict:
    return {
        'openai': bool(settings.openai_api_key),
        'email': bool(settings.resend_api_key),
        'whatsapp': bool((settings.twilio_account_sid and settings.twilio_auth_token and settings.twilio_whatsapp_from) or (settings.whatsapp_phone_number_id and settings.whatsapp_access_token)),
        'payments': bool(settings.payment_provider=='mock' or (settings.razorpay_key_id and settings.razorpay_key_secret and settings.razorpay_webhook_secret)),
        'turnstile': bool(settings.turnstile_secret_key),
        'cloudflare': bool(settings.cloudflare_api_token and settings.cloudflare_zone_id),
        'production_safe': settings.app_env!='production' or all([
            bool(settings.openai_api_key),
            bool(settings.resend_api_key),
            bool(settings.turnstile_secret_key),
            bool(settings.razorpay_key_id and settings.razorpay_key_secret and settings.razorpay_webhook_secret),
            bool(settings.cloudflare_api_token and settings.cloudflare_zone_id),
        ]),
    }


def _page_keys(site: dict) -> list[str]:
    from .structured_editor import parse_document
    from .templates import BY_SLUG
    doc=parse_document(site.get('draft_structure_json'))
    keys=[str(x.get('id') or x.get('slug') or '').strip().lower() for x in doc.get('pages',[]) if isinstance(x,dict)]
    keys=[x for x in keys if x]
    if keys: return list(dict.fromkeys(keys))
    meta=BY_SLUG.get(str(site.get('template_slug') or '')) or {}
    return ['home',*list(meta.get('page_slugs') or [])[:max(0,int(site.get('page_count') or 1)-1)]]


def run_site_qa(site: dict, user_id: str, *, persist: bool=True) -> dict:
    """Deterministic pre-publish QA. It never changes customer content."""
    from .api_editor import render_draft
    from .seo_engine import seo_health, seo_document

    blockers=[]; warnings=[]; passes=[]; html_by_page={}
    keys=_page_keys(site)
    if not keys:
        blockers.append({'code':'NO_PAGES','message':'The website has no renderable pages.','page':None})
    for page in keys:
        try:
            html=render_draft(site,page); html_by_page[page]=html
        except Exception as exc:
            blockers.append({'code':'PAGE_RENDER_FAILED','message':f'{page}: {str(exc)[:240]}','page':page}); continue
        soup=BeautifulSoup(html,'html.parser')
        viewport=soup.find('meta',attrs={'name':'viewport'})
        if not viewport: warnings.append({'code':'MISSING_VIEWPORT','message':'Viewport metadata is missing.','page':page})
        h1=soup.find_all('h1')
        if len(h1)==0: warnings.append({'code':'MISSING_H1','message':'No H1 was found on this page.','page':page})
        elif len(h1)>1: warnings.append({'code':'MULTIPLE_H1','message':f'{len(h1)} H1 elements were found.','page':page})
        else: passes.append({'code':'H1_OK','page':page})
        ids=[str(x.get('id')) for x in soup.find_all(attrs={'id':True})]
        dupes=sorted({x for x in ids if ids.count(x)>1})
        if dupes: warnings.append({'code':'DUPLICATE_DOM_ID','message':f'Duplicate DOM IDs: {", ".join(dupes[:5])}','page':page})
        for img in soup.find_all('img'):
            src=str(img.get('src') or '').strip()
            if not src: blockers.append({'code':'IMAGE_SRC_MISSING','message':'An image has no source.','page':page})
            if not str(img.get('alt') or '').strip() and img.get('aria-hidden')!='true' and img.get('data-zylora-decorative')!='true':
                warnings.append({'code':'IMAGE_ALT_MISSING','message':'A meaningful image has no ALT text.','page':page})
        for btn in soup.find_all('button'):
            if not btn.get_text(' ',strip=True) and not btn.get('aria-label'):
                warnings.append({'code':'EMPTY_BUTTON','message':'A button has no accessible label.','page':page})
        for form in soup.find_all('form'):
            for field in form.find_all(['input','textarea','select']):
                typ=str(field.get('type') or '').lower()
                if typ in {'hidden','submit','button'}: continue
                fid=field.get('id'); labelled=bool(field.get('aria-label') or field.get('aria-labelledby'))
                if fid and soup.find('label',attrs={'for':fid}): labelled=True
                if field.find_parent('label'): labelled=True
                if not labelled: warnings.append({'code':'UNLABELLED_FIELD','message':'A form field has no accessible label.','page':page})
        # Static overflow heuristics catch the most common fixed-width mistakes; browser QA remains complementary.
        for tag in soup.find_all(style=True):
            style=str(tag.get('style') or '')
            for n in re.findall(r'(?:min-)?width\s*:\s*(\d{4,})px',style,re.I):
                if int(n)>1200: warnings.append({'code':'FIXED_WIDTH_RISK','message':f'Fixed width {n}px may overflow smaller screens.','page':page}); break

    seo=seo_health(site,html_by_page=html_by_page)
    for issue in seo.get('issues') or []:
        item={'code':'SEO_'+str(issue.get('code') or 'ISSUE').upper(),'message':str(issue.get('message') or 'SEO issue'),'page':issue.get('page')}
        if str(issue.get('severity')).lower()=='error': blockers.append(item)
        else: warnings.append(item)

    # Broken document-level internal links that are not always visible in the current HTML rendering.
    from .structured_editor import parse_document
    doc=parse_document(site.get('draft_structure_json')); allowed=set(keys)
    for op in doc.get('operations') or []:
        if op.get('type')=='set_link' and op.get('page_slug') and str(op.get('page_slug')).strip('/') not in allowed:
            blockers.append({'code':'BROKEN_INTERNAL_LINK','message':f"Link targets missing page {op.get('page_slug')}",'page':op.get('page')})

    brand=_json(site.get('brand_json'),{})
    seo_doc=seo_document(site)
    if not brand.get('favicon_asset_id'): warnings.append({'code':'FAVICON_MISSING','message':'Add a favicon before launch.','page':None})
    if not (seo_doc.get('site') or {}).get('og_image_asset_id'): warnings.append({'code':'SOCIAL_PREVIEW_IMAGE_MISSING','message':'Add a default Open Graph image.','page':None})

    # De-duplicate identical warnings so a template issue is understandable rather than noisy.
    def dedupe(items):
        seen=set(); out=[]
        for x in items:
            key=(x.get('code'),x.get('page'),x.get('message'))
            if key in seen: continue
            seen.add(key); out.append(x)
        return out
    blockers=dedupe(blockers); warnings=dedupe(warnings)
    score=max(0,min(100,100-len(blockers)*18-len(warnings)*3))
    result={'score':score,'blocking_count':len(blockers),'warning_count':len(warnings),'blockers':blockers,'warnings':warnings,
            'pages_checked':len(keys),'seo':seo,'generated_at':now_iso(),'publishable':len(blockers)==0}
    if persist:
        with SessionLocal.begin() as db:
            qid=str(uuid4())
            db.execute(text('INSERT INTO publish_qa_runs(id,site_id,user_id,score,blocking_count,warning_count,result_json,created_at) VALUES (:i,:s,:u,:sc,:b,:w,:j,:a)'),
              {'i':qid,'s':site['id'],'u':user_id,'sc':score,'b':len(blockers),'w':len(warnings),'j':json.dumps(result,separators=(',',':')),'a':now_iso()})
            result['run_id']=qid
    return result


def _assistant_ready(site_id: str) -> bool:
    try:
        with SessionLocal() as db:
            cfg=db.execute(text('SELECT enabled,use_business_profile,use_published_site,use_approved_knowledge FROM sales_assistant_configs WHERE site_id=:s'),{'s':site_id}).mappings().first()
            site=db.execute(text('SELECT business_profile_json,status FROM sites WHERE id=:s'),{'s':site_id}).mappings().first()
        if cfg and not bool(cfg.get('enabled')): return False
        profile=_json((site or {}).get('business_profile_json'),{})
        return bool(site and site.get('status')=='LIVE' and (profile.get('services') or profile.get('description') or profile.get('business_name')))
    except Exception:
        return False


def launch_checklist(site: dict, user_id: str, qa: dict|None=None) -> dict:
    from .seo_engine import seo_document
    qa=qa or run_site_qa(site,user_id,persist=False)
    brand=_json(site.get('brand_json'),{}); seo=seo_document(site); sseo=seo.get('site') or {}
    with SessionLocal() as db:
        domain=db.execute(text("SELECT hostname,status,ssl_status FROM custom_domains WHERE site_id=:s ORDER BY created_at DESC LIMIT 1"),{'s':site['id']}).mappings().first()
        failed=db.execute(text("SELECT count(*) FROM notification_deliveries WHERE site_id=:s AND status IN ('FAILED','DEAD_LETTER')"),{'s':site['id']}).scalar_one()
    items=[
        {'id':'content','label':'Content and links','status':'PASS' if qa['blocking_count']==0 else 'BLOCKED','detail':f"{qa['blocking_count']} blocking issue(s), {qa['warning_count']} warning(s)"},
        {'id':'mobile','label':'Responsive basics','status':'PASS' if not any(x['code'] in {'MISSING_VIEWPORT','FIXED_WIDTH_RISK'} for x in qa['warnings']) else 'WARN','detail':'Viewport and static overflow checks'},
        {'id':'lead_capture','label':'Lead capture','status':'PASS','detail':'Zylora public lead and appointment runtime is enabled'},
        {'id':'sales_assistant','label':'AI Sales Assistant','status':'PASS' if _assistant_ready(site['id']) else 'WARN','detail':'Active and grounded' if _assistant_ready(site['id']) else 'Review Assistant settings and complete the Business Profile'},
        {'id':'seo','label':'SEO discoverability','status':'PASS' if int((qa.get('seo') or {}).get('errors') or 0)==0 else 'BLOCKED','detail':f"{int((qa.get('seo') or {}).get('warnings') or 0)} SEO warning(s)"},
        {'id':'domain','label':'Domain and SSL','status':'PASS' if not domain or (domain['status']=='ACTIVE' and domain['ssl_status']=='ACTIVE') else 'WARN','detail':('Zylora subdomain ready' if not domain else f"{domain['hostname']} · {domain['status']} / {domain['ssl_status']}")},
        {'id':'favicon','label':'Favicon','status':'PASS' if brand.get('favicon_asset_id') else 'WARN','detail':'Configured' if brand.get('favicon_asset_id') else 'Not configured'},
        {'id':'social','label':'Social preview','status':'PASS' if sseo.get('og_image_asset_id') else 'WARN','detail':'Default Open Graph image'},
        {'id':'analytics','label':'Analytics','status':'PASS','detail':'Privacy-minimized first-party events enabled'},
        {'id':'accessibility','label':'Accessibility','status':'PASS' if not any(x['code'] in {'MISSING_H1','MULTIPLE_H1','IMAGE_ALT_MISSING','UNLABELLED_FIELD','EMPTY_BUTTON'} for x in qa['warnings']) else 'WARN','detail':'Automated semantic checks'},
        {'id':'delivery','label':'Lead delivery','status':'PASS' if not failed else 'WARN','detail':f'{failed} failed/dead-letter delivery item(s)' if failed else 'No unresolved delivery failures'},
    ]
    ready=all(x['status']!='BLOCKED' for x in items)
    return {'ready':ready,'items':items,'qa':qa,'generated_at':now_iso()}


def site_health(site: dict, user_id: str) -> dict:
    qa=run_site_qa(site,user_id,persist=False); checklist=launch_checklist(site,user_id,qa)
    with SessionLocal() as db:
        backups=db.execute(text('SELECT id,reason,label,created_at FROM site_backups WHERE site_id=:s ORDER BY created_at DESC LIMIT 1'),{'s':site['id']}).mappings().first()
        published=db.execute(text('SELECT revision,created_at FROM published_versions WHERE site_id=:s ORDER BY revision DESC LIMIT 1'),{'s':site['id']}).mappings().first()
        deliveries=db.execute(text("SELECT status,count(*) AS n FROM notification_deliveries WHERE site_id=:s GROUP BY status"),{'s':site['id']}).mappings().all()
        ops=db.execute(text("SELECT severity,count(*) AS n FROM operational_events WHERE site_id=:s AND status='OPEN' GROUP BY severity"),{'s':site['id']}).mappings().all()
    delivery_counts={r['status']:int(r['n']) for r in deliveries}; op_counts={r['severity']:int(r['n']) for r in ops}
    components={
        'content_qa':{'status':'HEALTHY' if qa['blocking_count']==0 else 'CRITICAL','score':qa['score']},
        'recoverability':{'status':'HEALTHY' if backups else 'WARNING','latest_backup':dict(backups) if backups else None},
        'publishing':{'status':'HEALTHY' if site.get('status')!='LIVE' or published else 'WARNING','revision':dict(published) if published else None},
        'lead_delivery':{'status':'WARNING' if delivery_counts.get('FAILED',0) or delivery_counts.get('DEAD_LETTER',0) else 'HEALTHY','counts':delivery_counts},
        'operations':{'status':'CRITICAL' if op_counts.get('CRITICAL',0) else ('WARNING' if op_counts.get('ERROR',0) or op_counts.get('WARNING',0) else 'HEALTHY'),'open':op_counts},
    }
    overall='CRITICAL' if any(x['status']=='CRITICAL' for x in components.values()) else ('WARNING' if any(x['status']=='WARNING' for x in components.values()) else 'HEALTHY')
    return {'site_id':site['id'],'status':overall,'score':qa['score'],'components':components,'launch':checklist,'generated_at':now_iso()}


def record_analytics(site_id: str, event_type: str, session_id: str, path: str='/', metadata: dict|None=None) -> str:
    event=str(event_type or '').upper()
    allowed={'PAGE_VIEW','CTA_CLICK','FORM_OPEN','CHATBOT_OPEN','SCROLL_75','ASSISTANT_IMPRESSION','ASSISTANT_OPEN','ASSISTANT_MESSAGE_SENT','ASSISTANT_RESPONSE','ASSISTANT_LEAD_STARTED','ASSISTANT_LEAD_CREATED','ASSISTANT_QUALIFIED','ASSISTANT_HOT_LEAD','ASSISTANT_APPOINTMENT_STARTED','ASSISTANT_APPOINTMENT_BOOKED','ASSISTANT_WHATSAPP_HANDOFF','ASSISTANT_HUMAN_HANDOFF','ASSISTANT_DISMISSED','ASSISTANT_ERROR'}
    if event not in allowed: raise ValueError('Unsupported analytics event')
    path='/' + str(path or '/').split('?',1)[0].split('#',1)[0].strip('/')
    path=path[:300] or '/'
    sh=hashlib.sha256(f'{site_id}|{session_id}'.encode()).hexdigest()[:40]
    clean={}
    for key in ('device','referrer_host','label'):
        val=(metadata or {}).get(key)
        if val is not None: clean[key]=str(val)[:160]
    eid=str(uuid4())
    with SessionLocal.begin() as db:
        db.execute(text('INSERT INTO analytics_events(id,site_id,event_type,session_hash,path,metadata_json,created_at) VALUES (:i,:s,:e,:h,:p,:m,:a)'),
          {'i':eid,'s':site_id,'e':event,'h':sh,'p':path,'m':json.dumps(clean,separators=(',',':')),'a':now_iso()})
    return eid


def prune_old_analytics() -> int:
    days=max(30,min(3650,int(get_system_setting('analytics_retention_days','365') or 365)))
    cutoff=(datetime.now(timezone.utc)-timedelta(days=days)).isoformat()
    with SessionLocal.begin() as db:
        result=db.execute(text('DELETE FROM analytics_events WHERE created_at<:c'),{'c':cutoff})
    return max(0,int(result.rowcount or 0))


def growth_report(user_id: str, *, site_id: str|None=None, days: int=30) -> dict:
    days=max(1,min(int(days),365)); start=(datetime.now(timezone.utc)-timedelta(days=days)).isoformat()
    with SessionLocal() as db:
        params={'u':user_id,'start':start}; site_clause=''
        if site_id: params['s']=site_id; site_clause=' AND s.id=:s'
        sites=db.execute(text(f"SELECT s.id,s.business_name,s.slug,s.status FROM sites s WHERE s.user_id=:u{site_clause}"),params).mappings().all()
        if site_id and not sites: raise KeyError(site_id)
        ids=[r['id'] for r in sites]
        if not ids: return {'days':days,'totals':{'page_views':0,'visitors':0,'cta_clicks':0,'leads':0,'appointments':0,'lead_conversion_rate':0.0,'cta_rate':0.0},'pages':[],'insights':[],'sites':[]}
        # SQLAlchemy expanding parameters are unnecessary here because ids are already tenant-owned; aggregate per-site in small bounded loops.
        views=visitors=clicks=leads=appointments=0; page_map={}; site_metrics=[]
        for site in sites:
            sid=site['id']
            ev=db.execute(text("""SELECT path,event_type,count(*) AS n,count(DISTINCT session_hash) AS uniq
                FROM analytics_events WHERE site_id=:s AND created_at>=:a GROUP BY path,event_type"""),{'s':sid,'a':start}).mappings().all()
            site_views=site_visitors=site_clicks=0
            for r in ev:
                p=r['path'] or '/'; entry=page_map.setdefault(p,{'path':p,'views':0,'cta_clicks':0,'leads':0})
                if r['event_type']=='PAGE_VIEW':
                    n=int(r['n']); site_views+=n; views+=n; entry['views']+=n
                    # Summing distinct-by-path may overcount globally; per-site global visitor count is calculated below.
                elif r['event_type']=='CTA_CLICK':
                    n=int(r['n']); site_clicks+=n; clicks+=n; entry['cta_clicks']+=n
            site_visitors=int(db.execute(text("SELECT count(DISTINCT session_hash) FROM analytics_events WHERE site_id=:s AND event_type='PAGE_VIEW' AND created_at>=:a"),{'s':sid,'a':start}).scalar_one() or 0)
            visitors+=site_visitors
            site_leads=int(db.execute(text('SELECT count(*) FROM leads WHERE site_id=:s AND created_at>=:a'),{'s':sid,'a':start}).scalar_one() or 0); leads+=site_leads
            site_appts=int(db.execute(text("SELECT count(*) FROM appointments WHERE site_id=:s AND created_at>=:a AND status!='CANCELLED'"),{'s':sid,'a':start}).scalar_one() or 0); appointments+=site_appts
            site_metrics.append({**dict(site),'page_views':site_views,'visitors':site_visitors,'cta_clicks':site_clicks,'leads':site_leads,'appointments':site_appts,
              'lead_conversion_rate':round(site_leads/site_visitors*100,2) if site_visitors>0 else 0.0})
        # Attribute lead paths when public runtime records source path in future lead metadata; until then leads remain site-level.
        pages=sorted(page_map.values(),key=lambda x:x['views'],reverse=True)
        for p in pages:
            p['cta_rate']=round(p['cta_clicks']/p['views']*100,2) if p['views']>0 else 0.0
        lead_rate=round(leads/visitors*100,2) if visitors>0 else 0.0; cta_rate=round(clicks/views*100,2) if views>0 else 0.0
    insights=[]
    if views==0:
        insights.append({'severity':'INFO','code':'NO_TRAFFIC','title':'No tracked visitors yet','detail':'Publish the site and share it to start collecting first-party performance data.','action':'PUBLISH_OR_PROMOTE'})
    else:
        if visitors>=50 and lead_rate<2:
            insights.append({'severity':'HIGH','code':'LOW_LEAD_CONVERSION','title':'Traffic is not becoming leads','detail':f'{visitors} visitors produced {leads} leads ({lead_rate}%). Strengthen the primary offer and CTA on high-traffic pages.','action':'AI_OPTIMIZE_CTA'})
        if views>=100 and cta_rate<1.5:
            insights.append({'severity':'MEDIUM','code':'LOW_CTA_RATE','title':'Primary actions are under-clicked','detail':f'CTA click rate is {cta_rate}%. Test clearer button copy, stronger contrast, or earlier placement.','action':'AI_OPTIMIZE_CTA'})
        if pages:
            top=pages[0]
            if top['views']>=50 and top['cta_rate']<1:
                insights.append({'severity':'MEDIUM','code':'TOP_PAGE_WEAK_CTA','title':f"{top['path']} gets attention but few CTA clicks",'detail':f"{top['views']} views with a {top['cta_rate']}% CTA rate.",'action':'OPEN_EDITOR','path':top['path']})
        if appointments and leads:
            insights.append({'severity':'INFO','code':'APPOINTMENT_MOMENTUM','title':'Appointments are contributing to conversion','detail':f'{appointments} active appointment(s) were booked in this period.','action':'VIEW_APPOINTMENTS'})
    totals={'page_views':views,'visitors':visitors,'cta_clicks':clicks,'leads':leads,'appointments':appointments,'lead_conversion_rate':lead_rate,'cta_rate':cta_rate}
    
    try:
        from .sales_assistant import assistant_funnel
        assistant=assistant_funnel([str(site['id']) for site in sites],start)
        assistant['qualified_leads']=int(assistant.pop('qualified',0) or 0)
    except Exception:
        assistant={'opened':0,'meaningful_conversations':0,'leads_captured':0,'qualified_leads':0,'hot_leads':0,'appointments_booked':0,'conversion_rate':0.0}
    return {'days':days,'totals':totals,'assistant':assistant,'pages':pages[:30],'insights':insights[:12],'sites':site_metrics,'generated_at':now_iso()}


def operations_summary() -> dict:
    with SessionLocal() as db:
        open_events=[dict(r) for r in db.execute(text("SELECT id,component,severity,event_code,message,site_id,created_at FROM operational_events WHERE status='OPEN' ORDER BY CASE severity WHEN 'CRITICAL' THEN 0 WHEN 'ERROR' THEN 1 WHEN 'WARNING' THEN 2 ELSE 3 END,created_at DESC LIMIT 100")).mappings().all()]
        delivery=dict(db.execute(text("SELECT count(*) AS total,sum(CASE WHEN status='FAILED' THEN 1 ELSE 0 END) AS failed,sum(CASE WHEN status='DEAD_LETTER' THEN 1 ELSE 0 END) AS dead FROM notification_deliveries")).mappings().first() or {})
        payment=dict(db.execute(text("SELECT count(*) AS pending FROM razorpay_orders WHERE status='CREATED'")).mappings().first() or {})
        recovery=int(db.execute(text("SELECT count(*) FROM payment_recovery_cases WHERE status='OPEN'")).scalar_one() or 0)
    readiness=provider_readiness()
    return {'status':'CRITICAL' if any(x['severity']=='CRITICAL' for x in open_events) or not readiness['production_safe'] else ('WARNING' if open_events or int(delivery.get('failed') or 0) or int(delivery.get('dead') or 0) else 'HEALTHY'),
            'providers':readiness,'open_events':open_events,'delivery':delivery,'pending_payment_orders':int(payment.get('pending') or 0),'open_payment_recovery_cases':recovery,'generated_at':now_iso()}
