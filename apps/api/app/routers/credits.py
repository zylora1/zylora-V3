from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from ..auth import current_user,get_db
from ..models import User
from ..services.credits import chatbot_mode
router=APIRouter(prefix='/credits',tags=['credits'])
@router.get('/status')
def status(user:User=Depends(current_user),db:Session=Depends(get_db)):
    return {'ai_credits':user.ai_credits,'lead_credits':user.lead_credits,'chatbot_mode':chatbot_mode(user)}
