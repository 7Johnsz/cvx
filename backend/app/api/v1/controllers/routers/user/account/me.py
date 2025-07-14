from fastapi import Depends, Request, Response, HTTPException, Cookie

# Config
from .......config.middleware.config import limiter
from ....config.database.models.schema import Users
from ....config.database.config import get_session
from ....config.api import router

from .......config.settings import SECRET_KEY

from sqlmodel import select, Session
from loguru import logger
from typing import Union

import jwt

@router.post("/me")
@limiter.limit("30/minute")
async def me(
    request: Request,
    response: Response,
    session: Session = Depends(get_session),
    access_token: str = Cookie(None) 
) -> Union[dict, str]:
    try:
        if not access_token:
            raise HTTPException(status_code=401, detail="No access token cookie found")
        payload = jwt.decode(access_token, SECRET_KEY, algorithms=["HS256"])
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
        logger.error(f"Error in me endpoint: {str(e)}")
        return {"error": "An error occurred during login"}