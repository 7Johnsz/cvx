from fastapi import Request, HTTPException, status
from datetime import datetime
import os

AUTH_TOKEN = os.getenv('AUTHORIZATION_KEY')

async def AuthService(request: Request):
    unauthorized_response = {
        "status": "error",
        "message": "You don't have permission to access this resource",
        "timestamp": None 
    }

    auth_header = request.headers.get('Authorization', '')
    if not auth_header:
        unauthorized_response["timestamp"] = datetime.now().isoformat()
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=unauthorized_response
        )
    
    try:
        scheme, token = auth_header.split(' ', 1)
    except ValueError:
        unauthorized_response["timestamp"] = datetime.now().isoformat()
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=unauthorized_response
        )
    
    if scheme.lower() != 'bearer' or token != AUTH_TOKEN:
        unauthorized_response["timestamp"] = datetime.now().isoformat()
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=unauthorized_response
        )
