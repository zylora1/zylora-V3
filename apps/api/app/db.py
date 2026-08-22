from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker
from .config import settings

class Base(DeclarativeBase):
    pass

def make_engine(url: str | None = None):
    target = url or settings.database_url
    kwargs = {"future": True}
    if target.startswith("sqlite"):
        kwargs["connect_args"] = {"check_same_thread": False}
    return create_engine(target, **kwargs)

engine = make_engine()
SessionLocal = sessionmaker(bind=engine, expire_on_commit=False, future=True)
