import re
from sqlalchemy.orm import Session
from ..models import PlatformConfig, User
from ..enums import Role

class AdminError(PermissionError): pass
LEAD_NOTIFICATION_EMAIL_KEY = "lead_notification_email"
EMAIL = re.compile(r"^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$")

def require_super_admin(user: User) -> None:
    if user.role != Role.SUPER_ADMIN: raise AdminError("super_admin_required")

def set_config(db: Session, admin: User, key: str, value: str) -> PlatformConfig:
    require_super_admin(admin)
    if not key.strip(): raise ValueError("config_key_required")
    if key == LEAD_NOTIFICATION_EMAIL_KEY:
        value = normalize_notification_email(value) or ""
    row=db.get(PlatformConfig,key)
    if row is None:
        row=PlatformConfig(key=key,value=value); db.add(row)
    else: row.value=value
    db.commit(); return row

def normalize_notification_email(value: str | None) -> str | None:
    if value is None or not value.strip(): return None
    normalized=value.strip().lower()
    local=normalized.rsplit("@",1)[0]
    if len(normalized)>320 or len(local)>64 or local.startswith(".") or local.endswith(".") or ".." in local or "\r" in normalized or "\n" in normalized or not EMAIL.fullmatch(normalized):
        raise ValueError("invalid_lead_notification_email")
    return normalized

def get_config(db: Session, key: str, default: str | None = None) -> str | None:
    row=db.get(PlatformConfig,key); return row.value if row else default
