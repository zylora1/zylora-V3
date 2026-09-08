"""Persistent, server-side campaign delivery and safe recipient import helpers."""
from __future__ import annotations

import base64
import csv
import hashlib
import hmac
import io
import json
import mimetypes
import re
import secrets
import xml.etree.ElementTree as ET
import zipfile
from datetime import datetime, timedelta, timezone
from pathlib import Path
from uuid import uuid4

from fastapi import HTTPException
from sqlalchemy import text

from .config import settings
from .content_safety import html_to_text, sanitize_email_html
from .db import SessionLocal, now_iso
from .email_service import EmailAttachment, email_service, normalize_recipient
from .media import load_bytes, store_bytes
from .operations import record_operational_event, safe_exception_summary

_EMAIL_HEADERS = {'email', 'emailaddress', 'email_address', 'mail', 'contactemail', 'contact_email'}
_DANGEROUS_EXTENSIONS = {'.exe', '.dll', '.bat', '.cmd', '.com', '.msi', '.js', '.jse', '.vbs', '.vbe', '.ps1', '.sh', '.jar', '.scr', '.hta', '.iso'}
_ALLOWED_ATTACHMENT_MIME_PREFIXES = ('application/pdf', 'image/', 'text/plain', 'text/csv', 'application/vnd.openxmlformats-officedocument')


def _clean(value: str, limit: int) -> str:
    return ' '.join(str(value or '').split())[:limit]


def _clean_subject(value: str) -> str:
    if '\r' in str(value or '') or '\n' in str(value or ''):
        raise HTTPException(422, 'Subject cannot contain line breaks')
    result = _clean(value, 200)
    if len(result) < 2:
        raise HTTPException(422, 'Subject is required')
    return result


def _header_key(value: str) -> str:
    return re.sub(r'[^a-z0-9]+', '', str(value or '').lower())


def _recipient_report(values: list[str], source: str) -> dict:
    seen: set[str] = set(); valid: list[dict] = []; invalid: list[dict] = []; duplicates = 0
    for raw in values:
        raw = str(raw or '').strip()
        if not raw:
            continue
        try: email = normalize_recipient(raw)
        except ValueError:
            invalid.append({'email': raw[:254], 'source': source}); continue
        if email in seen:
            duplicates += 1; continue
        seen.add(email); valid.append({'email': email, 'source': source})
    return {'recipients': valid, 'invalid': invalid, 'duplicates': duplicates, 'rows_detected': len(values)}


def parse_manual_recipients(values: list[str]) -> dict:
    expanded=[]
    for value in values or []:
        expanded.extend(re.split(r'[,;\n\r]+', str(value or '')))
    return _recipient_report(expanded, 'MANUAL')


def _email_column(headers: list[str]) -> str | None:
    for header in headers:
        if _header_key(header) in _EMAIL_HEADERS:
            return header
    return None


def parse_csv_recipients(raw: bytes, column: str | None = None) -> dict:
    if len(raw) > max(1, int(settings.email_campaign_upload_max_mb)) * 1024 * 1024:
        raise HTTPException(413, 'Recipient file is too large')
    try:
        decoded = raw.decode('utf-8-sig')
        reader = csv.DictReader(io.StringIO(decoded))
        headers = reader.fieldnames or []
        selected = column or _email_column(headers)
        if not selected or selected not in headers:
            raise HTTPException(422, 'No supported email column was found')
        report = _recipient_report([row.get(selected, '') for row in reader], 'CSV')
        report['column'] = selected; return report
    except UnicodeDecodeError as exc:
        raise HTTPException(422, 'CSV must be UTF-8 encoded') from exc
    except csv.Error as exc:
        raise HTTPException(422, 'Malformed CSV file') from exc


def _xlsx_rows(raw: bytes) -> list[list[str]]:
    if len(raw) > max(1, int(settings.email_campaign_upload_max_mb)) * 1024 * 1024:
        raise HTTPException(413, 'Recipient file is too large')
    try:
        archive = zipfile.ZipFile(io.BytesIO(raw))
        names = archive.namelist()
        if any(name.startswith('/') or '..' in Path(name).parts for name in names):
            raise HTTPException(422, 'Unsafe spreadsheet archive')
        expanded_size = sum(max(0, int(info.file_size or 0)) for info in archive.infolist())
        if expanded_size > max(1, int(settings.email_campaign_upload_max_mb)) * 4 * 1024 * 1024:
            raise HTTPException(413, 'Spreadsheet expands beyond the permitted size')
        if '[Content_Types].xml' not in names:
            raise HTTPException(422, 'Invalid XLSX file')
        shared=[]
        if 'xl/sharedStrings.xml' in names:
            root=ET.fromstring(archive.read('xl/sharedStrings.xml'))
            shared=[''.join(node.itertext()) for node in root.findall('{*}si')]
        sheet_names=sorted(name for name in names if re.fullmatch(r'xl/worksheets/sheet\d+\.xml', name))
        if not sheet_names: raise HTTPException(422, 'Workbook has no worksheets')
        rows=[]
        root=ET.fromstring(archive.read(sheet_names[0]))
        for row in root.findall('.//{*}row'):
            values=[]
            for cell in row.findall('{*}c'):
                kind=cell.get('t') or ''
                if cell.find('{*}f') is not None:
                    values.append('')
                elif kind=='s':
                    index=int((cell.findtext('{*}v') or '-1'))
                    values.append(shared[index] if 0 <= index < len(shared) else '')
                elif kind=='inlineStr':
                    values.append(''.join((cell.find('{*}is') or ET.Element('x')).itertext()))
                else:
                    values.append(cell.findtext('{*}v') or '')
            rows.append(values)
        return rows
    except HTTPException: raise
    except (ET.ParseError, ValueError, zipfile.BadZipFile) as exc:
        raise HTTPException(422, 'Malformed XLSX file') from exc


def parse_xlsx_recipients(raw: bytes, column: str | None = None) -> dict:
    rows=_xlsx_rows(raw)
    if not rows: raise HTTPException(422, 'Spreadsheet is empty')
    headers=[str(x).strip() for x in rows[0]]
    selected=column or _email_column(headers)
    if not selected or selected not in headers: raise HTTPException(422, 'No supported email column was found')
    index=headers.index(selected)
    report=_recipient_report([row[index] if len(row)>index else '' for row in rows[1:]], 'XLSX')
    report['column']=selected; return report


def resolve_internal_audience(audience: str) -> list[dict]:
    """Snapshot a supported internal audience into campaign recipient records."""
    audience=_clean(audience or '',30).upper()
    clauses=["u.email_verified=1", "COALESCE(p.marketing_consent,0)=1", "p.unsubscribed_at IS NULL"]
    params={}
    if audience in {'FREE','STARTER','GROWTH','ZYLORA','PRO'}:
        clauses.append('u.plan=:plan'); params['plan']=audience
    elif audience=='PAYING': clauses.append("u.plan IN ('STARTER','GROWTH','PRO','ZYLORA')")
    elif audience=='PUBLISHED': clauses.append("EXISTS (SELECT 1 FROM sites ps WHERE ps.user_id=u.id AND ps.status='LIVE')")
    elif audience=='UNPUBLISHED': clauses.append("EXISTS (SELECT 1 FROM sites ds WHERE ds.user_id=u.id AND ds.status<>'LIVE')")
    elif audience!='ALL': return []
    with SessionLocal() as db:
        rows=db.execute(text('SELECT u.email FROM users u LEFT JOIN email_preferences p ON p.user_id=u.id WHERE '+ ' AND '.join(clauses)),params).mappings().all()
    return [{'email':str(row['email']),'source':'INTERNAL_'+audience} for row in rows]


def _event(db, campaign_id: str, event_type: str, *, recipient_id: str | None = None, metadata: dict | None = None) -> None:
    db.execute(text('''INSERT INTO email_campaign_events(id,campaign_id,recipient_id,event_type,metadata,created_at)
        VALUES (:i,:c,:r,:e,:m,:a)'''), {'i':str(uuid4()),'c':campaign_id,'r':recipient_id,'e':event_type,
        'm':json.dumps(metadata or {},separators=(',',':')),'a':now_iso()})


def _suppressed(db, email: str) -> bool:
    return bool(db.execute(text('SELECT 1 FROM email_suppressions WHERE email=:e'), {'e': email}).first())


def create_campaign(*, admin_id: str, title: str, subject: str, audience: str, body_html: str, body_text: str,
                    content_format: str, recipients: list[dict], idempotency_key: str, scheduled_at: str | None = None,
                    preheader: str = '') -> dict:
    title=_clean(title,200)
    if len(title)<2: raise HTTPException(422,'Campaign title is required')
    subject=_clean_subject(subject)
    if content_format not in {'HTML','TEXT'}: raise HTTPException(422,'Unsupported campaign format')
    html=sanitize_email_html(body_html) if content_format=='HTML' else ''
    plain=_clean(body_text or html_to_text(html),100000)
    if not plain: raise HTTPException(422,'Campaign message is required')
    audience=_clean(audience or 'MANUAL',30).upper()
    if not idempotency_key or len(idempotency_key)>120: raise HTTPException(422,'A valid idempotency key is required')
    now=now_iso(); campaign_id=f'camp_{uuid4().hex}'
    existing_id = None
    with SessionLocal.begin() as db:
        prior=db.execute(text('SELECT id FROM platform_campaigns WHERE created_by_user_id=:u AND idempotency_key=:k'), {'u':admin_id,'k':idempotency_key}).scalar()
        if prior:
            existing_id = str(prior)
        else:
            db.execute(text('''INSERT INTO platform_campaigns(id,title,subject,audience,body_html,body_text,preheader,content_format,status,
            total_recipients,eligible_count,suppressed_count,created_by_user_id,idempotency_key,scheduled_at,created_at,updated_at)
            VALUES (:i,:t,:s,:au,:h,:b,:p,:f,'DRAFT',0,0,0,:u,:k,:sch,:a,:a)'''),
                {'i':campaign_id,'t':title,'s':subject,'au':audience,'h':html,'b':plain,'p':_clean(preheader,160),'f':content_format,
                 'u':admin_id,'k':idempotency_key,'sch':scheduled_at,'a':now})
            suppressed=0
            for recipient in recipients:
                email=normalize_recipient(recipient['email']); state='SUPPRESSED' if _suppressed(db,email) else 'PENDING'
                suppressed += state=='SUPPRESSED'
                db.execute(text('''INSERT INTO email_campaign_recipients(id,campaign_id,email,source,status,created_at,updated_at)
                    VALUES (:i,:c,:e,:source,:st,:a,:a) ON CONFLICT(campaign_id,email) DO NOTHING'''),
                    {'i':str(uuid4()),'c':campaign_id,'e':email,'source':_clean(recipient.get('source','MANUAL'),20),'st':state,'a':now})
            total=int(db.execute(text('SELECT count(*) FROM email_campaign_recipients WHERE campaign_id=:c'), {'c':campaign_id}).scalar_one())
            eligible=total-suppressed
            db.execute(text('UPDATE platform_campaigns SET total_recipients=:t,eligible_count=:e,suppressed_count=:s WHERE id=:c'), {'t':total,'e':eligible,'s':suppressed,'c':campaign_id})
            _event(db,campaign_id,'CAMPAIGN_CREATED',metadata={'total':total,'suppressed':suppressed})
    return campaign_detail(existing_id or campaign_id)


def queue_campaign(campaign_id: str, *, admin_id: str, scheduled_at: str | None = None) -> dict:
    now=now_iso(); run_after=scheduled_at or now
    with SessionLocal.begin() as db:
        row=db.execute(text('SELECT * FROM platform_campaigns WHERE id=:c'), {'c':campaign_id}).mappings().first()
        if not row: raise HTTPException(404,'Campaign not found')
        if row['status'] not in {'DRAFT','SCHEDULED','FAILED','PARTIALLY_FAILED'}: raise HTTPException(409,'Campaign cannot be queued from its current state')
        if int(row.get('eligible_count') or 0)<1: raise HTTPException(422,'Campaign has no eligible recipients')
        future=False
        try: future=scheduled_at is not None and datetime.fromisoformat(scheduled_at.replace('Z','+00:00')) > datetime.now(timezone.utc)
        except Exception:
            if scheduled_at: raise HTTPException(422,'Invalid schedule timestamp')
        status='SCHEDULED' if future else 'QUEUED'
        db.execute(text("UPDATE platform_campaigns SET status=:s,scheduled_at=:r,updated_at=:a WHERE id=:c"), {'s':status,'r':run_after,'a':now,'c':campaign_id})
        db.execute(text('''INSERT INTO email_campaign_jobs(id,campaign_id,status,run_after,created_at,updated_at)
          VALUES (:i,:c,'QUEUED',:r,:a,:a)'''), {'i':str(uuid4()),'c':campaign_id,'r':run_after,'a':now})
        _event(db,campaign_id,'CAMPAIGN_SCHEDULED' if future else 'CAMPAIGN_QUEUED',metadata={'actor':admin_id})
    return campaign_detail(campaign_id)


def _unsubscribe_token(db, campaign_id: str, email: str) -> str:
    raw=secrets.token_urlsafe(32)
    sig=hmac.new((settings.email_unsubscribe_secret or 'development-only-change-me').encode(), raw.encode(), hashlib.sha256).hexdigest()
    token=f'{raw}.{sig}'
    db.execute(text('''INSERT INTO email_campaign_unsubscribe_tokens(id,campaign_id,email,token_hash,expires_at,created_at)
      VALUES (:i,:c,:e,:h,:x,:a)'''), {'i':str(uuid4()),'c':campaign_id,'e':email,
       'h':hashlib.sha256(token.encode()).hexdigest(),'x':(datetime.now(timezone.utc)+timedelta(days=365)).isoformat(),'a':now_iso()})
    return token


def _attachment_objects(campaign_id: str) -> list[EmailAttachment]:
    with SessionLocal() as db:
        rows=db.execute(text('SELECT filename,mime_type,storage_key FROM email_campaign_attachments WHERE campaign_id=:c'), {'c':campaign_id}).mappings().all()
    return [EmailAttachment(str(row['filename']),load_bytes(str(row['storage_key'])),str(row['mime_type'])) for row in rows]


def _public_unsubscribe_html(url: str) -> str:
    return f'<p style="font-size:12px;color:#64748b"><a href="{url}">Unsubscribe from marketing emails</a></p>'


def process_due_campaign_jobs(limit: int = 1) -> dict:
    processed=[]
    for _ in range(max(1,min(limit,10))):
        now=now_iso()
        with SessionLocal.begin() as db:
            job=db.execute(text("SELECT * FROM email_campaign_jobs WHERE status='QUEUED' AND run_after<=:n ORDER BY created_at LIMIT 1"), {'n':now}).mappings().first()
            if not job: break
            job=dict(job)
            claim=db.execute(text("UPDATE email_campaign_jobs SET status='RUNNING',attempt_count=attempt_count+1,claimed_at=:a,updated_at=:a WHERE id=:i AND status='QUEUED'"), {'a':now,'i':job['id']})
            if claim.rowcount != 1: continue
            campaign=db.execute(text('SELECT * FROM platform_campaigns WHERE id=:c'), {'c':job['campaign_id']}).mappings().first()
            if not campaign:
                db.execute(text("UPDATE email_campaign_jobs SET status='FAILED',last_error='Campaign missing',updated_at=:a WHERE id=:i"),{'a':now,'i':job['id']}); continue
            db.execute(text("UPDATE platform_campaigns SET status='SENDING',started_at=COALESCE(started_at,:a),updated_at=:a WHERE id=:c"),{'a':now,'c':campaign['id']})
            rows=[dict(r) for r in db.execute(text("SELECT * FROM email_campaign_recipients WHERE campaign_id=:c AND status IN ('PENDING','FAILED') ORDER BY created_at LIMIT :l"), {'c':campaign['id'],'l':max(1,min(int(settings.email_batch_size),100))}).mappings().all()]
        attachments=_attachment_objects(str(campaign['id']))
        for row in rows:
            with SessionLocal.begin() as db:
                fresh=db.execute(text('SELECT * FROM email_campaign_recipients WHERE id=:i'), {'i':row['id']}).mappings().first()
                if not fresh or fresh['status'] not in {'PENDING','FAILED'}: continue
                if _suppressed(db,str(fresh['email'])):
                    db.execute(text("UPDATE email_campaign_recipients SET status='SUPPRESSED',updated_at=:a WHERE id=:i"),{'a':now_iso(),'i':fresh['id']}); continue
                db.execute(text("UPDATE email_campaign_recipients SET status='SENDING',attempt_count=attempt_count+1,last_attempt_at=:a,updated_at=:a WHERE id=:i"),{'a':now_iso(),'i':fresh['id']})
                token=_unsubscribe_token(db,str(campaign['id']),str(fresh['email']))
            url=f'{settings.app_url.rstrip("/")}/api/email/unsubscribe/{token}'
            html=(str(campaign.get('body_html') or '') + _public_unsubscribe_html(url)) if str(campaign.get('content_format'))=='HTML' else None
            body=str(campaign.get('body_text') or '') + f'\n\nUnsubscribe: {url}'
            try:
                email_service.send_campaign(str(row['email']),str(campaign['subject']),body,html=html,attachments=attachments)
                with SessionLocal.begin() as db:
                    db.execute(text("UPDATE email_campaign_recipients SET status='SENT',sent_at=:a,last_error=NULL,updated_at=:a WHERE id=:i"), {'a':now_iso(),'i':row['id']})
                    _event(db,str(campaign['id']),'RECIPIENT_SENT',recipient_id=str(row['id']))
            except Exception as exc:
                summary=safe_exception_summary(exc)
                with SessionLocal.begin() as db:
                    attempt=int(db.execute(text('SELECT attempt_count FROM email_campaign_recipients WHERE id=:i'),{'i':row['id']}).scalar_one() or 1)
                    status='FAILED' if attempt < max(1,int(settings.email_max_retries)) else 'FAILED'
                    db.execute(text("UPDATE email_campaign_recipients SET status=:s,last_error=:e,updated_at=:a WHERE id=:i"), {'s':status,'e':summary,'a':now_iso(),'i':row['id']})
                    _event(db,str(campaign['id']),'RECIPIENT_FAILED',recipient_id=str(row['id']),metadata={'error':summary})
        with SessionLocal.begin() as db:
            counts={str(status):int(count) for status,count in db.execute(text('SELECT status,count(*) FROM email_campaign_recipients WHERE campaign_id=:c GROUP BY status'),{'c':campaign['id']}).all()}
            pending=counts.get('PENDING',0)+counts.get('SENDING',0)+sum(1 for r in db.execute(text("SELECT attempt_count FROM email_campaign_recipients WHERE campaign_id=:c AND status='FAILED'"),{'c':campaign['id']}).all() if int(r[0])<max(1,int(settings.email_max_retries)))
            sent=counts.get('SENT',0); failed=counts.get('FAILED',0); suppressed=counts.get('SUPPRESSED',0)
            if pending:
                failed_attempts=[int(r[0] or 1) for r in db.execute(text("SELECT attempt_count FROM email_campaign_recipients WHERE campaign_id=:c AND status='FAILED'"),{'c':campaign['id']}).all()]
                next_attempt=max(failed_attempts or [1])
                rate_delay=60*max(1,len(rows))/max(1,int(settings.email_max_sends_per_minute))
                backoff=max(1,int(settings.email_retry_base_delay or 60)) * (2 ** max(0,next_attempt-1))
                delay=min(86400, max(1, round(max(rate_delay, backoff))))
                db.execute(text("UPDATE email_campaign_jobs SET status='QUEUED',run_after=:r,updated_at=:a WHERE id=:i"), {'r':(datetime.now(timezone.utc)+timedelta(seconds=delay)).isoformat(),'a':now_iso(),'i':job['id']})
            else:
                final='COMPLETED' if not failed else ('PARTIALLY_FAILED' if sent else 'FAILED')
                db.execute(text("UPDATE email_campaign_jobs SET status='COMPLETED',updated_at=:a WHERE id=:i"),{'a':now_iso(),'i':job['id']})
                db.execute(text("UPDATE platform_campaigns SET status=:s,sent_count=:sent,delivered_count=:sent,failed_count=:f,suppressed_count=:sup,completed_at=:a,sent_at=:a,updated_at=:a WHERE id=:c"),{'s':final,'sent':sent,'f':failed,'sup':suppressed,'a':now_iso(),'c':campaign['id']})
                _event(db,str(campaign['id']),'CAMPAIGN_COMPLETED',metadata={'sent':sent,'failed':failed,'suppressed':suppressed})
        processed.append(str(campaign['id']))
    return {'processed':processed}


def campaign_detail(campaign_id: str) -> dict:
    with SessionLocal() as db:
        campaign=db.execute(text('SELECT * FROM platform_campaigns WHERE id=:c'),{'c':campaign_id}).mappings().first()
        if not campaign: raise HTTPException(404,'Campaign not found')
        item=dict(campaign)
        item['attachments']=[dict(r) for r in db.execute(text('SELECT id,filename,mime_type,size_bytes,created_at FROM email_campaign_attachments WHERE campaign_id=:c ORDER BY created_at'), {'c':campaign_id}).mappings().all()]
        item['recipient_counts']={str(s):int(n) for s,n in db.execute(text('SELECT status,count(*) FROM email_campaign_recipients WHERE campaign_id=:c GROUP BY status'),{'c':campaign_id}).all()}
    return item


def attach_campaign_file(campaign_id: str, filename: str, content_type: str, data: bytes) -> dict:
    safe=Path(str(filename or 'attachment')).name.replace('\x00','')
    ext=Path(safe).suffix.lower()
    max_bytes=max(1,int(settings.email_attachment_max_mb))*1024*1024
    if not data or len(data)>max_bytes: raise HTTPException(413,'Attachment exceeds the permitted size')
    if ext in _DANGEROUS_EXTENSIONS: raise HTTPException(415,'This attachment type is not permitted')
    guessed=(mimetypes.guess_type(safe)[0] or content_type or 'application/octet-stream').lower()
    if not guessed.startswith(_ALLOWED_ATTACHMENT_MIME_PREFIXES): raise HTTPException(415,'Unsupported attachment type')
    with SessionLocal() as db:
        total=int(db.execute(text('SELECT coalesce(sum(size_bytes),0) FROM email_campaign_attachments WHERE campaign_id=:c'),{'c':campaign_id}).scalar_one())
    if total+len(data)>max(1,int(settings.email_attachment_total_max_mb))*1024*1024: raise HTTPException(413,'Total attachments exceed the permitted size')
    attachment_id=str(uuid4()); storage_key=f'{settings.media_s3_prefix.strip("/")}/mail-campaigns/{campaign_id}/{attachment_id}{ext or ".bin"}'
    store_bytes(storage_key,data,guessed)
    try:
        with SessionLocal.begin() as db:
            db.execute(text('''INSERT INTO email_campaign_attachments(id,campaign_id,filename,mime_type,size_bytes,storage_key,created_at)
              VALUES (:i,:c,:f,:m,:s,:k,:a)'''),{'i':attachment_id,'c':campaign_id,'f':safe[:120],'m':guessed,'s':len(data),'k':storage_key,'a':now_iso()})
            _event(db,campaign_id,'ATTACHMENT_ADDED',metadata={'filename':safe[:120],'size_bytes':len(data)})
    except Exception:
        from .media import delete_bytes
        delete_bytes(storage_key); raise
    return {'id':attachment_id,'filename':safe[:120],'mime_type':guessed,'size_bytes':len(data)}


def suppress_from_token(token: str) -> bool:
    raw,sig=(str(token or '').split('.',1)+[''])[:2]
    expected=hmac.new((settings.email_unsubscribe_secret or 'development-only-change-me').encode(), raw.encode(), hashlib.sha256).hexdigest()
    if not raw or not hmac.compare_digest(sig,expected): return False
    digest=hashlib.sha256(token.encode()).hexdigest(); now=now_iso()
    with SessionLocal.begin() as db:
        row=db.execute(text("SELECT * FROM email_campaign_unsubscribe_tokens WHERE token_hash=:h AND used_at IS NULL"),{'h':digest}).mappings().first()
        if not row or str(row['expires_at'])<=now: return False
        email=str(row['email'])
        db.execute(text('''INSERT INTO email_suppressions(id,email,reason,source,created_at,updated_at)
          VALUES (:i,:e,'UNSUBSCRIBED','CAMPAIGN',:a,:a)
          ON CONFLICT(email) DO UPDATE SET reason='UNSUBSCRIBED',source='CAMPAIGN',updated_at=:a'''),{'i':str(uuid4()),'e':email,'a':now})
        # Keep the account preference in sync with the global suppression
        # record so the audience resolver excludes this user immediately.
        db.execute(text('''UPDATE email_preferences SET marketing_consent=0,unsubscribed_at=:a,updated_at=:a
            WHERE user_id IN (SELECT id FROM users WHERE lower(email)=:e)'''), {'a': now, 'e': email})
        db.execute(text('UPDATE email_campaign_unsubscribe_tokens SET used_at=:a WHERE id=:i'),{'a':now,'i':row['id']})
        _event(db,str(row['campaign_id']),'RECIPIENT_UNSUBSCRIBED',metadata={'email_sha256':hashlib.sha256(email.encode()).hexdigest()[:16]})
    return True


def campaign_csv(campaign_id: str) -> str:
    with SessionLocal() as db:
        rows=db.execute(text('SELECT email,status,attempt_count,last_error,sent_at FROM email_campaign_recipients WHERE campaign_id=:c ORDER BY created_at'),{'c':campaign_id}).mappings().all()
    output=io.StringIO(); writer=csv.writer(output); writer.writerow(['email','status','attempts','failure_reason','sent_at'])
    def neutral(value):
        value=str(value or '')
        return "'"+value if value.startswith(('=','+','-','@')) else value
    for row in rows: writer.writerow([neutral(row['email']),row['status'],row['attempt_count'],neutral(row['last_error']),row['sent_at'] or ''])
    return output.getvalue()
