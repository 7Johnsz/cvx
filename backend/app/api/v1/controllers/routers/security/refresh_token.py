from fastapi import Request, HTTPException, status

# Config
from ......config.middleware.config import limiter
from ...config.api import router
from ......config.middleware.config import redis_tokens

# Utils
from ....utils.token_gen import token_manager

# Models
from ....models.Token import TokenModel 

from typing import Union

@router.post("/refresh")
@limiter.limit("30/minute")
async def refresh_token(
    request: Request,
    token_data: TokenModel
) -> Union[dict, str]:
    user_id = await redis_tokens.get(token_data.token)
    
    if not user_id:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Refresh token inválido ou expirado",
        )

    access_token = token_manager.encode(str(user_id))
    
    new_refresh_token = token_manager.encode(str(user_id))
    await redis_tokens.set(new_refresh_token, user_id, ex=60*60*24*7)
    await redis_tokens.delete(token_data.token)

    return {
        "access_token": access_token,
    }