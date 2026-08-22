from sqlalchemy import select
from sqlalchemy.orm import Session
from ..models import User
from ..enums import Role, Plan
from ..security import hash_password

def bootstrap_super_admin(db: Session, email: str, password: str) -> User:
    email = email.strip().lower()
    if '@' not in email:
        raise ValueError('invalid_email')
    if len(password) < 12:
        raise ValueError('password_too_short')
    user = db.scalar(select(User).where(User.email == email))
    if user:
        if user.role == Role.SUPER_ADMIN:
            return user
        user.role = Role.SUPER_ADMIN
        user.password_hash = hash_password(password)
        user.email_verified = True
    else:
        user = User(
            email=email, password_hash=hash_password(password), role=Role.SUPER_ADMIN,
            plan=Plan.GROWTH, ai_credits=500, lead_credits=1000, email_verified=True
        )
        db.add(user)
    db.commit(); db.refresh(user)
    return user
