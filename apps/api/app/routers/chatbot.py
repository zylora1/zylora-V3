from fastapi import APIRouter,Depends,Request
from pydantic import BaseModel,Field
from sqlalchemy.orm import Session
from ..auth import get_db
from ..rate_limit import enforce_rate_limit
from ..services.chatbot import reply
from .common import translate
router=APIRouter(prefix='/chatbot',tags=['chatbot'])
class ChatIn(BaseModel):
    site_id:int
    visitor_key:str=Field(min_length=8,max_length=128)
    message:str=Field(min_length=1,max_length=2000)
@router.post('/public')
def public_chat(body:ChatIn,request:Request,db:Session=Depends(get_db)):
    enforce_rate_limit(request,'chatbot',40,60)
    try:return reply(db,body.site_id,body.visitor_key,body.message)
    except Exception as e: translate(e)
