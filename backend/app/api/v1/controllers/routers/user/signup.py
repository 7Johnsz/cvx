from fastapi import Depends, Request

# Config
from ......config.middleware.config import limiter
from ...config.database.models.schema import Users
from ...config.database.config import get_session
from ...config.api import router

# Utils
from ....utils.pass_manager import password_manager

# Models
from ....models.User import UserModel

from sqlmodel import select, Session
from typing import Union
import datetime

@router.post("/signup")
@limiter.limit("30/minute")
async def signup(
    request: Request,
    user_data: UserModel,
    session: Session = Depends(get_session)
) -> Union[dict, str]:
    
    if user_data.user or user_data.email:
        existing_user = session.exec(
            select(Users).where(
                (Users.name == user_data.user) | (Users.email == user_data.email)
            )
        ).first()
        
        if existing_user:
            return {"error": "User already exists"}
        
        else:
            new_user = Users(
                name=user_data.user,
                email=user_data.email,
                password=password_manager.hash_password(user_data.password),  
                created_at=datetime.datetime.now(),
                plan_id=None    
            )
            session.add(new_user)
            session.commit()
            session.refresh(new_user)
            return {"message": "User created successfully", "user": new_user}
        
    return {"error": "Invalid user data"}
