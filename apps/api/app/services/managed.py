from __future__ import annotations
import secrets, string
from datetime import datetime
from sqlalchemy.orm import Session
from ..models import ManagedLead
from ..enums import ManagedLeadStatus

class ManagedLeadError(ValueError): pass
ALPHABET = string.ascii_uppercase + string.digits

def generate_lead_code(existing: set[str] | None = None) -> str:
    existing = existing or set()
    for _ in range(100):
        code = "ZPRO-" + "".join(secrets.choice(ALPHABET) for _ in range(6))
        if code not in existing: return code
    raise ManagedLeadError("lead_code_generation_failed")

def create_managed_lead(db: Session, name: str, email: str, website_type: str, lead_code: str | None = None) -> ManagedLead:
    if not name.strip() or "@" not in email or len(website_type.strip()) < 3: raise ManagedLeadError("invalid_enquiry")
    lead=ManagedLead(lead_code=lead_code or generate_lead_code(), name=name.strip(), email=email.strip().lower(), website_type=website_type.strip(), status=ManagedLeadStatus.PENDING)
    db.add(lead); db.commit(); db.refresh(lead); return lead

def update_managed_status(db: Session, lead: ManagedLead, status: str, amount_minor: int | None = None, currency: str | None = None, notes: str | None = None) -> ManagedLead:
    if status not in tuple(ManagedLeadStatus): raise ManagedLeadError("invalid_status")
    if amount_minor is not None and amount_minor < 0: raise ManagedLeadError("invalid_amount")
    lead.status=status
    if amount_minor is not None: lead.amount_received_minor=amount_minor
    if currency is not None:
        if len(currency) != 3: raise ManagedLeadError("invalid_currency")
        lead.currency=currency.upper()
    if notes is not None: lead.internal_notes=notes
    lead.updated_at=datetime.utcnow(); db.commit(); return lead
