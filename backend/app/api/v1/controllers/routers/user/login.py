from fastapi import Depends, Request, Response

# Config
from ......config.middleware.config import redis_tokens
from ......config.middleware.config import limiter
from ...config.database.models.schema import Users
from ...config.database.config import get_session
from ...config.api import router

# Utils
from ....utils.token_gen import token_manager

# Models
from ....models.Login import LoginModel 

from sqlmodel import select, Session
from typing import Union

import datetime
import jwt
import os

secret_key = os.getenv("SECRET_KEY")

def create_access_token(user_id: str, secret_key: str):
    payload = {
        "sub": user_id,
        "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=15)  
    }
    token = jwt.encode(payload, secret_key, algorithm="HS256")
    return token

@router.post("/login")
@limiter.limit("30/minute")
async def login(
    request: Request,
    response: Response,
    login_data: LoginModel,
    session: Session = Depends(get_session)
) -> Union[dict, str]:
    try:
        if login_data.password and login_data.email:
            existing_user = session.exec(
                select(Users).where(
                    Users.email == login_data.email,
                )
            ).first()
            
            if existing_user and token_manager.decode(login_data.password, existing_user.password):
                access_token = create_access_token(secret_key=str(secret_key), user_id=str(existing_user.id))
                refresh_token = token_manager.encode(str(existing_user.id))
                
                await redis_tokens.set(
                    refresh_token,
                    existing_user.id, 
                    ex=60*60*24*7 # Store token for 7 days  
                )
                
                response.set_cookie(
                    key="refresh_token",
                    value=refresh_token,
                    httponly=True,
                    secure=True,        
                    samesite="lax",    
                    max_age=60*60*24*7  # 7 days
                )
                
                response.set_cookie(
                    key="access_token",
                    value=access_token,
                    httponly=True,
                    secure=True,     
                    samesite="lax",  
                    max_age=60*15    # 15 minutes
                )
                
                return {
                    "message": "Login successful",
                    "user": {
                        "id": existing_user.id,
                        "name": existing_user.name,
                    }
                }

            return {"error": "Invalid email or password"}
        
        return {"error": "Invalid user data"}
    except Exception as e:
        print(f"Error during login: {e}")
        return {"error": "An error occurred during login"}