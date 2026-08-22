import pytest
from sqlalchemy.orm import sessionmaker
from apps.api.app.db import Base, make_engine
from apps.api.app.models import User
from apps.api.app.security import hash_password

@pytest.fixture
def db():
    engine=make_engine('sqlite+pysqlite:///:memory:')
    Base.metadata.create_all(engine)
    Session=sessionmaker(bind=engine,expire_on_commit=False,future=True)
    with Session() as s: yield s

@pytest.fixture
def user(db):
    u=User(email='user@example.com',password_hash=hash_password('password123'),plan='GROWTH',role='USER',ai_credits=500); db.add(u); db.commit(); db.refresh(u); return u

@pytest.fixture
def admin(db):
    u=User(email='admin@example.com',password_hash=hash_password('password123'),plan='GROWTH',role='SUPER_ADMIN',ai_credits=500); db.add(u); db.commit(); db.refresh(u); return u
