from __future__ import annotations
import json
from datetime import datetime
from pathlib import Path
from sqlalchemy import select
from sqlalchemy.orm import Session
from ..models import TemplateRecord

CATALOGUE_PATH = Path(__file__).resolve().parents[1] / 'template_catalogue.json'

class TemplateError(ValueError): pass

def _display_name(key:str,family:str)->str:
    suffix=key.replace('template-','').split('-',1)[0]
    return f"{family.replace('-', ' ').title()} {suffix}"

def seed_records(db:Session)->int:
    if db.scalar(select(TemplateRecord.key).limit(1)) is not None:
        return 0
    entries=json.loads(CATALOGUE_PATH.read_text(encoding='utf-8'))
    for idx,item in enumerate(entries):
        family=str(item.get('family') or 'general')
        premium=str(item.get('quality_tier') or 'premium')
        featured=idx < 24
        display=str(item.get('display_name') or _display_name(item['key'],family))
        description=str(item.get('description') or f"A {family.replace('-', ' ')} website composition for Zylora.")
        tags=item.get('tags') or [family,'responsive','lead-ready']
        db.add(TemplateRecord(
            key=item['key'],family=family,quality_tier=premium,page_count=int(item.get('page_count') or 1),
            visible=True,featured=featured,display_name=display,
            description=description,
            tags_csv=','.join(str(x) for x in tags),preview_image=item.get('preview_image'),sort_order=idx,
            created_at=datetime.utcnow(),updated_at=datetime.utcnow(),
        ))
    db.commit()
    return len(entries)

def serialize(t:TemplateRecord)->dict:
    return {
        'key':t.key,'family':t.family,'quality_tier':t.quality_tier,'page_count':t.page_count,'visible':t.visible,
        'featured':t.featured,'display_name':t.display_name,'description':t.description,
        'tags':[x.strip() for x in (t.tags_csv or '').split(',') if x.strip()],
        'preview_image':t.preview_image,'sort_order':t.sort_order,
    }

def public_records(db:Session)->list[TemplateRecord]:
    seed_records(db)
    return list(db.scalars(select(TemplateRecord).where(TemplateRecord.visible.is_(True)).order_by(TemplateRecord.featured.desc(),TemplateRecord.sort_order.asc(),TemplateRecord.key.asc())).all())

def all_records(db:Session)->list[TemplateRecord]:
    seed_records(db)
    return list(db.scalars(select(TemplateRecord).order_by(TemplateRecord.featured.desc(),TemplateRecord.sort_order.asc(),TemplateRecord.key.asc())).all())

def update_record(db:Session,key:str,**changes)->TemplateRecord:
    seed_records(db)
    row=db.get(TemplateRecord,key)
    if not row: raise TemplateError('template_not_found')
    allowed={'family','quality_tier','visible','featured','display_name','description','tags_csv','preview_image','sort_order'}
    for k,v in changes.items():
        if k in allowed and v is not None: setattr(row,k,v)
    row.updated_at=datetime.utcnow();db.commit();db.refresh(row);return row

def bulk_hide_non_premium(db:Session)->dict:
    seed_records(db);rows=all_records(db);hidden=0
    for row in rows:
        if row.quality_tier!='premium' and row.visible:
            row.visible=False;hidden+=1
    db.commit();return {'hidden':hidden,'remaining_visible':sum(1 for x in rows if x.quality_tier=='premium' or (x.visible and x.quality_tier=='premium'))}
