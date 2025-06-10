from fastapi import Depends, Request, Response, HTTPException

# Config
from .......config.middleware.config import limiter
from ....config.database.models.schema import Users
from ....config.database.config import get_session
from ....config.api import oauth2_scheme
from ....config.api import router

# Models
from .....models.Login import LoginModel 

from sqlmodel import select, Session
from typing import Union

import jwt
import os

secret_key = os.getenv("SECRET_KEY")

@router.post("/me")
@limiter.limit("30/minute")
async def me(
    request: Request,
    response: Response,
    session: Session = Depends(get_session),
    acess_token: str = Depends(oauth2_scheme)
) -> Union[dict, str]:
    try:
        payload = jwt.decode(acess_token, secret_key, algorithms=["HS256"])
        user_id = payload.get("sub")
        
        if not user_id:
            raise HTTPException(status_code=401, detail="Invalid access token")
        
        user = session.exec(
            select(Users).where(Users.id == user_id)
        ).first()
        
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        
        return {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "created_at": user.created_at.isoformat(),
            "plan_id": user.plan_id
        }
        
    except Exception as e:
        print(f"Error during login: {e}")
        return {"error": "An error occurred during login"}