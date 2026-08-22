from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, ConfigDict, Field
from sqlalchemy.orm import Session

from ..auth import current_user, get_db
from ..models import Site, User
from ..services.notifications import NotificationError, TwilioWhatsAppProvider, normalize_whatsapp_number

router = APIRouter(prefix="/notifications", tags=["notifications"])


class WhatsAppSettingsIn(BaseModel):
    model_config = ConfigDict(extra="forbid")
    whatsapp_number: str | None = Field(default=None, max_length=32)


class WhatsAppTestIn(BaseModel):
    model_config = ConfigDict(extra="forbid")
    site_id: int


@router.get("/settings")
def get_settings(user: User = Depends(current_user)):
    return {"whatsapp_number": user.whatsapp_number}


@router.put("/settings")
def update_settings(body: WhatsAppSettingsIn, user: User = Depends(current_user), db: Session = Depends(get_db)):
    try:
        user.whatsapp_number = normalize_whatsapp_number(body.whatsapp_number)
    except ValueError as exc:
        raise HTTPException(422, detail=str(exc)) from exc
    db.commit()
    db.refresh(user)
    return {"whatsapp_number": user.whatsapp_number}


@router.post("/whatsapp")
def send_test(body: WhatsAppTestIn, user: User = Depends(current_user), db: Session = Depends(get_db)):
    site = db.get(Site, body.site_id)
    if not site or site.owner_id != user.id:
        raise HTTPException(404, detail="site_not_found")
    destination = normalize_whatsapp_number(user.whatsapp_number)
    if not destination:
        raise HTTPException(409, detail="owner_whatsapp_not_configured")
    try:
        message_id = TwilioWhatsAppProvider().send(destination, f"Zylora WhatsApp lead notifications are enabled for {site.name}.")
    except NotificationError as exc:
        raise HTTPException(503, detail=str(exc)) from exc
    return {"ok": True, "provider_message_id": message_id}
