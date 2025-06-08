from fastapi import Request, Depends

# Services
from ....service.auth.decorator import AuthService

# Config
from ......config.middleware.config import limiter
from ...config.api import router

@router.get("/", dependencies=[Depends(AuthService)])
@limiter.limit("30/minute")
async def root(request: Request):
    return "Hello World!"