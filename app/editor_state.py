from __future__ import annotations

import json
from uuid import uuid4
from sqlalchemy import text

from .db import now_iso
from .structured_editor import empty_document, parse_document

STATE_FIELDS = ('name','business_name','tagline','description','accent','page_count','draft_structure_json','brand_json','seo_json','business_profile_json','generation_meta_json','document_schema_version')


def site_state(site: dict) -> dict:
    return {
        'name': site.get('name') or site.get('business_name') or '',
        'business_name': site.get('business_name') or site.get('name') or '',
        'tagline': site.get('tagline') or '',
        'description': site.get('description') or '',
        'accent': site.get('accent') or '#111111',
        'page_count': int(site.get('page_count') or 1),
        'draft_structure_json': json.dumps(parse_document(site.get('draft_structure_json')), separators=(',',':')),
        'brand_json': site.get('brand_json') or '{}',
        'seo_json': site.get('seo_json') or '{}',
        'business_profile_json': site.get('business_profile_json') or '{}',
        'generation_meta_json': site.get('generation_meta_json') or '{}',
        'document_schema_version': int(site.get('document_schema_version') or 3),
    }


def _fetch_site(db, site_id: str) -> dict:
    row=db.execute(text('SELECT * FROM sites WHERE id=:s'), {'s':site_id}).mappings().first()
    if not row: raise KeyError(site_id)
    return dict(row)


def _backup_payload(site: dict) -> dict:
    payload=site_state(site)
    payload.update({
        'status':site.get('status') or 'DRAFT',
        'published_snapshot_json':site.get('published_snapshot_json'),
        'published_structure_json':site.get('published_structure_json'),
        'published_revision':int(site.get('published_revision') or 0),
        'template_slug':site.get('template_slug'),
        'origin':site.get('origin'),
    })
    return payload

def create_backup(db, site_id: str, user_id: str, reason: str='MANUAL', label: str|None=None) -> dict:
    site=_fetch_site(db,site_id)
    bid=str(uuid4()); created=now_iso()
    db.execute(text('INSERT INTO site_backups(id,site_id,user_id,reason,label,state_json,created_at) VALUES (:i,:s,:u,:r,:l,:j,:n)'),{
        'i':bid,'s':site_id,'u':user_id,'r':str(reason or 'MANUAL')[:40].upper(),'l':(label or '')[:160] or None,
        'j':json.dumps(_backup_payload(site),separators=(',',':')),'n':created})
    return {'id':bid,'reason':str(reason or 'MANUAL')[:40].upper(),'label':label,'created_at':created}

def maybe_auto_backup(db, site: dict, user_id: str) -> dict|None:
    try:
        from .settings_store import get_system_setting
        interval=max(5,min(24*60,int(get_system_setting('site_auto_backup_interval_minutes','60'))))
    except Exception:
        interval=60
    last=db.execute(text("SELECT created_at FROM site_backups WHERE site_id=:s AND reason='AUTO' ORDER BY created_at DESC LIMIT 1"),{'s':site['id']}).scalar()
    if last:
        try:
            from datetime import datetime, timezone, timedelta
            stamp=datetime.fromisoformat(str(last).replace('Z','+00:00'))
            if stamp.tzinfo is None: stamp=stamp.replace(tzinfo=timezone.utc)
            if datetime.now(timezone.utc)-stamp < timedelta(minutes=interval): return None
        except Exception:
            pass
    item=create_backup(db,site['id'],user_id,'AUTO','Automatic editor recovery point')
    try:
        from .settings_store import get_system_setting
        keep=max(10,min(500,int(get_system_setting('site_backup_retention_count','60'))))
        db.execute(text("DELETE FROM site_backups WHERE site_id=:s AND reason='AUTO' AND id NOT IN (SELECT id FROM site_backups WHERE site_id=:s AND reason='AUTO' ORDER BY created_at DESC LIMIT :k)"),{'s':site['id'],'k':keep})
    except Exception:
        pass
    return item

def list_backups(db, site_id: str, limit: int=60) -> list[dict]:
    rows=db.execute(text('SELECT id,reason,label,created_at FROM site_backups WHERE site_id=:s ORDER BY created_at DESC LIMIT :l'),{'s':site_id,'l':max(1,min(limit,200))}).mappings().all()
    return [dict(r) for r in rows]

def restore_backup(db, site: dict, user_id: str, backup_id: str) -> dict:
    row=db.execute(text('SELECT * FROM site_backups WHERE id=:i AND site_id=:s'),{'i':backup_id,'s':site['id']}).mappings().first()
    if not row: raise KeyError(backup_id)
    before=create_backup(db,site['id'],user_id,'PRE_RESTORE','Before backup restore')
    state=json.loads(row['state_json'])
    ensure_history(db,site,user_id)
    apply_state(db,site['id'],state)
    push_history(db,site['id'],user_id,'RESTORE_BACKUP')
    revision=create_revision(db,site['id'],user_id,'RESTORE',f"Restored backup {row['reason']}")
    return {'backup_id':backup_id,'safety_backup':before,'revision':revision}

def ensure_history(db, site: dict, user_id: str) -> int:
    maybe_auto_backup(db,site,user_id)
    cursor=int(site.get('editor_history_cursor') if site.get('editor_history_cursor') is not None else -1)
    exists=db.execute(text('SELECT 1 FROM editor_history WHERE site_id=:s LIMIT 1'),{'s':site['id']}).first()
    if exists:
        if cursor < 0:
            cursor=int(db.execute(text('SELECT max(seq) FROM editor_history WHERE site_id=:s'),{'s':site['id']}).scalar() or 0)
            db.execute(text('UPDATE sites SET editor_history_cursor=:c WHERE id=:s'),{'c':cursor,'s':site['id']})
        return cursor
    state=json.dumps(site_state(site),separators=(',',':'))
    db.execute(text('INSERT INTO editor_history(site_id,seq,user_id,state_json,action,created_at) VALUES (:s,0,:u,:j,\'INITIAL\',:n)'),{'s':site['id'],'u':user_id,'j':state,'n':now_iso()})
    db.execute(text('UPDATE sites SET editor_history_cursor=0 WHERE id=:s'),{'s':site['id']})
    return 0


def push_history(db, site_id: str, user_id: str, action: str) -> int:
    site=_fetch_site(db,site_id); cursor=ensure_history(db,site,user_id)
    # If ensure_history just inserted the current post-mutation state, do not duplicate it; callers must call ensure before mutation.
    maxseq=db.execute(text('SELECT max(seq) FROM editor_history WHERE site_id=:s'),{'s':site_id}).scalar()
    if maxseq is None: maxseq=0
    db.execute(text('DELETE FROM editor_history WHERE site_id=:s AND seq>:c'),{'s':site_id,'c':cursor})
    seq=cursor+1
    state=json.dumps(site_state(_fetch_site(db,site_id)),separators=(',',':'))
    db.execute(text('INSERT INTO editor_history(site_id,seq,user_id,state_json,action,created_at) VALUES (:s,:q,:u,:j,:a,:n)'),{'s':site_id,'q':seq,'u':user_id,'j':state,'a':action[:80],'n':now_iso()})
    db.execute(text('UPDATE sites SET editor_history_cursor=:q WHERE id=:s'),{'q':seq,'s':site_id})
    return seq


def apply_state(db, site_id: str, state: dict) -> None:
    current=_fetch_site(db,site_id)
    vals={k:(state.get(k) if state.get(k) is not None else current.get(k)) for k in STATE_FIELDS}
    vals['page_count']=int(vals.get('page_count') or current.get('page_count') or 1)
    db.execute(text('''UPDATE sites SET name=:name,business_name=:business_name,tagline=:tagline,description=:description,accent=:accent,page_count=:page_count,
        draft_structure_json=:draft_structure_json,brand_json=:brand_json,seo_json=:seo_json,business_profile_json=:business_profile_json,
        generation_meta_json=:generation_meta_json,document_schema_version=:document_schema_version,document_version=document_version+1,updated_at=:updated_at WHERE id=:site_id'''),{
        **vals,'site_id':site_id,'updated_at':now_iso()
    })


def undo(db, site: dict, user_id: str) -> dict:
    cursor=ensure_history(db,site,user_id)
    if cursor <= 0: return {'changed':False,'cursor':cursor,'can_undo':False,'can_redo':True if db.execute(text('SELECT 1 FROM editor_history WHERE site_id=:s AND seq>:c'),{'s':site['id'],'c':cursor}).first() else False}
    target=cursor-1
    row=db.execute(text('SELECT state_json FROM editor_history WHERE site_id=:s AND seq=:q'),{'s':site['id'],'q':target}).first()
    if not row: return {'changed':False,'cursor':cursor,'can_undo':False,'can_redo':False}
    apply_state(db,site['id'],json.loads(row[0])); db.execute(text('UPDATE sites SET editor_history_cursor=:c WHERE id=:s'),{'c':target,'s':site['id']})
    return {'changed':True,'cursor':target,'can_undo':target>0,'can_redo':True}


def redo(db, site: dict, user_id: str) -> dict:
    cursor=ensure_history(db,site,user_id); target=cursor+1
    row=db.execute(text('SELECT state_json FROM editor_history WHERE site_id=:s AND seq=:q'),{'s':site['id'],'q':target}).first()
    if not row: return {'changed':False,'cursor':cursor,'can_undo':cursor>0,'can_redo':False}
    apply_state(db,site['id'],json.loads(row[0])); db.execute(text('UPDATE sites SET editor_history_cursor=:c WHERE id=:s'),{'c':target,'s':site['id']})
    more=bool(db.execute(text('SELECT 1 FROM editor_history WHERE site_id=:s AND seq>:c'),{'s':site['id'],'c':target}).first())
    return {'changed':True,'cursor':target,'can_undo':True,'can_redo':more}


def create_revision(db, site_id: str, user_id: str, kind: str='SAVE', label: str|None=None) -> dict:
    site=_fetch_site(db,site_id)
    version=int(db.execute(text('SELECT coalesce(max(version),0)+1 FROM site_revisions WHERE site_id=:s'),{'s':site_id}).scalar_one())
    rid=str(uuid4()); state=json.dumps(site_state(site),separators=(',',':'))
    db.execute(text('INSERT INTO site_revisions(id,site_id,user_id,version,kind,label,state_json,created_at) VALUES (:i,:s,:u,:v,:k,:l,:j,:n)'),{'i':rid,'s':site_id,'u':user_id,'v':version,'k':kind[:30],'l':(label or '')[:160] or None,'j':state,'n':now_iso()})
    return {'id':rid,'version':version,'kind':kind,'label':label,'created_at':now_iso()}


def list_revisions(db, site_id: str, limit: int=50) -> list[dict]:
    rows=db.execute(text('SELECT id,version,kind,label,created_at FROM site_revisions WHERE site_id=:s ORDER BY version DESC LIMIT :l'),{'s':site_id,'l':max(1,min(limit,100))}).mappings().all()
    return [dict(r) for r in rows]


def restore_revision(db, site: dict, user_id: str, revision_id: str) -> dict:
    row=db.execute(text('SELECT * FROM site_revisions WHERE id=:i AND site_id=:s'),{'i':revision_id,'s':site['id']}).mappings().first()
    if not row: raise KeyError(revision_id)
    ensure_history(db,site,user_id)
    apply_state(db,site['id'],json.loads(row['state_json']))
    push_history(db,site['id'],user_id,f"RESTORE_REVISION_{row['version']}")
    revision=create_revision(db,site['id'],user_id,'RESTORE',f"Restored version {row['version']}")
    return revision
