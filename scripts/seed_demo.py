from uuid import uuid4
from sqlalchemy import text
from app.db import migrate, SessionLocal, now_iso
from app.security import hash_password

migrate()
email='demo@zylora.local'
password='DemoPass123!'
with SessionLocal.begin() as db:
    if not db.execute(text('SELECT 1 FROM users WHERE email=:e'),{'e':email}).first():
        uid=str(uuid4())
        db.execute(text("INSERT INTO users(id,email,password_hash,name,role,plan,ai_credits,created_at) VALUES (:i,:e,:p,'Demo Admin','SUPER_ADMIN','GROWTH',500,:c)"),{'i':uid,'e':email,'p':hash_password(password),'c':now_iso()})
        db.execute(text('INSERT INTO notification_settings(id,user_id,site_id,email_to,updated_at,created_at) VALUES (:i,:u,NULL,:e,:c,:c)'),{'i':str(uuid4()),'u':uid,'e':email,'c':now_iso()})
print(f'Demo admin ready: {email} / {password}')
