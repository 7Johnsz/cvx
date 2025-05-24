from fastapi import Depends, Request

# Services
from ....service.auth.decorator import AuthService

# Config
from ......config.middleware.config import limiter
from ...config.database.config import get_session
from ...config.database.models.User import User
from ...config.api import router

from sqlmodel import select, Session

@router.get("/signup")
@limiter.limit("30/minute")
@AuthService
async def signup(request: Request, session: Session = Depends(get_session)):
    users = session.exec(select(User)).all()
    return users
