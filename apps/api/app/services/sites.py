from datetime import datetime
from sqlalchemy import select
from sqlalchemy.orm import Session
from ..models import Site, User, TemplateRecord
from ..enums import SiteState, SiteOrigin
from .entitlements import entitlement_for

class SiteError(ValueError): pass

def create_site(db: Session, owner: User, name: str, slug: str, origin: str, page_count: int, template_key: str | None = None) -> Site:
    if not name.strip() or not slug.strip(): raise SiteError("name_and_slug_required")
    ent = entitlement_for(owner.plan)
    if page_count < 1 or page_count > ent.page_limit: raise SiteError("page_limit_exceeded")
    if origin not in (SiteOrigin.TEMPLATE, SiteOrigin.AI): raise SiteError("invalid_origin")
    if origin == SiteOrigin.TEMPLATE and not template_key: raise SiteError("template_key_required")
    if origin == SiteOrigin.TEMPLATE:
        from .templates import seed_records
        seed_records(db)
        record=db.get(TemplateRecord,template_key)
        if record is not None and not record.visible: raise SiteError("template_not_available")
    drafts = db.scalars(select(Site).where(Site.owner_id==owner.id, Site.state==SiteState.DRAFT)).all()
    if len(drafts) >= 10: raise SiteError("draft_limit_reached")
    site = Site(owner_id=owner.id,name=name.strip(),slug=slug.strip(),origin=str(origin),page_count=page_count,template_key=template_key,state=SiteState.DRAFT)
    db.add(site); db.commit(); db.refresh(site); return site

def draft_warning(count: int) -> str | None:
    if count >= 10: return "BLOCK"
    if count == 9: return "STRONG_WARNING"
    if count == 8: return "WARNING"
    return None

def add_ai_page(db: Session, owner: User, site_id: int) -> Site:
    site = db.get(Site, site_id)
    if not site or site.owner_id != owner.id: raise SiteError("site_not_found")
    if site.origin != SiteOrigin.AI: raise SiteError("template_page_count_fixed")
    ent = entitlement_for(owner.plan)
    if site.page_count >= ent.page_limit: raise SiteError("page_limit_exceeded")
    if owner.ai_credits <= 0: raise SiteError("insufficient_ai_credits")
    site.page_count += 1; owner.ai_credits -= 1; site.updated_at = datetime.utcnow(); db.commit(); return site

def switch_live_site(db: Session, owner: User, site_id: int) -> Site:
    target = db.get(Site, site_id)
    if not target or target.owner_id != owner.id: raise SiteError("site_not_found")
    existing = db.scalars(select(Site).where(Site.owner_id==owner.id, Site.state==SiteState.LIVE)).all()
    for site in existing:
        if site.id != target.id: site.state = SiteState.DRAFT
    target.state = SiteState.LIVE; target.updated_at = datetime.utcnow(); db.commit(); return target

def transfer_ownership(db: Session, current_owner: User, site_id: int, new_owner: User) -> Site:
    site = db.get(Site, site_id)
    if not site or site.owner_id != current_owner.id: raise SiteError("site_not_found")
    if new_owner.id == current_owner.id: raise SiteError("same_owner")
    ent = entitlement_for(new_owner.plan)
    if site.page_count > ent.page_limit: raise SiteError("recipient_page_limit_exceeded")
    site.owner_id = new_owner.id
    if site.state == SiteState.LIVE: site.state = SiteState.DRAFT
    db.commit(); return site
