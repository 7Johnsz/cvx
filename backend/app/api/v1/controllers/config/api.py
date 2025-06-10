from fastapi.security import OAuth2PasswordBearer
from fastapi import APIRouter

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="acess_token")

router = APIRouter(
    tags=["API"]
)
