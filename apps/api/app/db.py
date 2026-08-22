from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker
from .config import settings

class Base(DeclarativeBase):
    pass

def normalize_database_url(url: str) -> str:
    """Select psycopg 3 for driver-neutral managed PostgreSQL URLs."""
    if url.startswith("postgres://"):
        return "postgresql+psycopg://" + url.removeprefix("postgres://")
    if url.startswith("postgresql://"):
        return "postgresql+psycopg://" + url.removeprefix("postgresql://")
    return url

def make_engine(url: str | None = None):
    target = normalize_database_url(url or settings.database_url)
    # Railway and other managed providers expose driver-neutral PostgreSQL
    # URLs.  This application ships psycopg 3, so select that driver
    # explicitly instead of allowing SQLAlchemy to fall back to psycopg2.
    kwargs = {"future": True}
    if target.startswith("sqlite"):
        kwargs["connect_args"] = {"check_same_thread": False}
    return create_engine(target, **kwargs)

engine = make_engine()
SessionLocal = sessionmaker(bind=engine, expire_on_commit=False, future=True)
