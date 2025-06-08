from fastapi import Depends, Request

# Services
from ....service.auth.decorator import AuthService

# Config
from ......config.middleware.config import limiter
from ...config.database.models.schema import Users
from ...config.database.config import get_session
from ...config.api import router

# Utils
from ....utils.pass_manager import password_manager

# Models
from ....models.Login import LoginModel 

from sqlmodel import select, Session
from typing import Union

@router.post("/login", dependencies=[Depends(AuthService)])
@limiter.limit("30/minute")
async def signup(
    request: Request,
    login_data: LoginModel,
    session: Session = Depends(get_session)
) -> Union[dict, str]:
    
    if login_data.password and login_data.email:
        existing_user = session.exec(
            select(Users).where(
                Users.email == login_data.email
            )
        ).first()
        
        if existing_user and password_manager.verify_password(login_data.password, existing_user.password):
            return {
                "message": "Login successful",
            }
        
        return {"error": "Invalid email or password"}
    
    return {"error": "Invalid user data"}