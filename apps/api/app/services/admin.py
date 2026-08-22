from sqlalchemy.orm import Session
from ..models import PlatformConfig, User
from ..enums import Role

class AdminError(PermissionError): pass

def require_super_admin(user: User) -> None:
    if user.role != Role.SUPER_ADMIN: raise AdminError("super_admin_required")

def set_config(db: Session, admin: User, key: str, value: str) -> PlatformConfig:
    require_super_admin(admin)
    if not key.strip(): raise ValueError("config_key_required")
    row=db.get(PlatformConfig,key)
    if row is None:
        row=PlatformConfig(key=key,value=value); db.add(row)
    else: row.value=value
    db.commit(); return row

def get_config(db: Session, key: str, default: str | None = None) -> str | None:
    row=db.get(PlatformConfig,key); return row.value if row else default
