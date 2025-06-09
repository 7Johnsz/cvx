from fastapi import Request, Response

# Config
from ......config.middleware.config import redis_tokens
from ......config.middleware.config import limiter
from ...config.api import router

# Models
from ....models.Logout import LogoutModel 

@router.post("/logout")
@limiter.limit("30/minute")
async def logout(
    request: Request,
    response: Response,
    logout_data: LogoutModel
) -> dict:
    refresh_token = await redis_tokens.get(logout_data.token)
    
    if not refresh_token:
        return {"error": "Token not found or already logged out"}
    
    await redis_tokens.delete(logout_data.token)
    response.delete_cookie("refresh_token", path="/", httponly=True, secure=True, samesite="lax")
    response.delete_cookie("access_token", path="/", httponly=True, secure=True, samesite="lax")
    return {"message": "Logout successful"}