from scalar_fastapi import get_scalar_api_reference
from fastapi import Request, Depends

# Config
from ....service.auth.decorator import AuthService
from ......config.middleware.config import limiter
from ...config.api import router

@router.get("/scalar", include_in_schema=False, dependencies=[Depends(AuthService)])
@limiter.limit("30/minute")
async def scalar_html(request: Request):
    return get_scalar_api_reference(
        openapi_url=request.app.openapi_url,
        title=request.app.title)