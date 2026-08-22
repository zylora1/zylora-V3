from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker
from .config import settings

class Base(DeclarativeBase):
    pass

def make_engine(url: str | None = None):
    target = url or settings.database_url
    # Railway and other managed providers expose driver-neutral PostgreSQL
    # URLs.  This application ships psycopg 3, so select that driver
    # explicitly instead of allowing SQLAlchemy to fall back to psycopg2.
    if target.startswith("postgres://"):
        target = "postgresql+psycopg://" + target.removeprefix("postgres://")
    elif target.startswith("postgresql://"):
        target = "postgresql+psycopg://" + target.removeprefix("postgresql://")
    kwargs = {"future": True}
    if target.startswith("sqlite"):
        kwargs["connect_args"] = {"check_same_thread": False}
    return create_engine(target, **kwargs)

engine = make_engine()
SessionLocal = sessionmaker(bind=engine, expire_on_commit=False, future=True)
