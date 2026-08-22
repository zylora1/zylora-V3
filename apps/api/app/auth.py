from __future__ import annotations
from fastapi import Depends, Header, HTTPException, Cookie
from sqlalchemy.orm import Session
from .db import SessionLocal
from .models import User
from .security import parse_token, SecurityError
from .config import settings

def get_db():
    db=SessionLocal()
    try: yield db
    finally: db.close()

def current_user(authorization:str|None=Header(default=None), db:Session=Depends(get_db), zylora_session:str|None=Cookie(default=None))->User:
    token=None
    if authorization and authorization.startswith('Bearer '): token=authorization[7:]
    elif zylora_session: token=zylora_session
    if not token: raise HTTPException(401,'authentication_required')
    try: payload=parse_token(token,settings.secret_key)
    except SecurityError as e: raise HTTPException(401,str(e))
    user=db.get(User,int(payload['sub']))
    if not user: raise HTTPException(401,'user_not_found')
    return user
