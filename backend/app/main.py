from fastapi.responses import ORJSONResponse
from fastapi import FastAPI

# Configuration
from app.config.middleware.config import configure_middleware
from app.config.handlers.config import configure_events

# Router
from app.api.v1.controllers.routers.main import index, memory, health, docs
from app.api.v1.controllers.routers.security import refresh_token
from app.api.v1.controllers.routers.user import login, signup
from app.api.v1.controllers.routers.user import logout

class BaseConfig:
    def __init__(self):
        self.app = FastAPI(
            description="Description of your API here",
            title="Title of your API",
            version="1.0.0",    
            default_response_class=ORJSONResponse)
    
    def create_app(self) -> FastAPI:
        # Configure app
        configure_middleware(self.app)
        configure_events(self.app)
        
        # Main routers
        self.app.include_router(health.router, tags=["Health Check"])
        self.app.include_router(memory.router, tags=["Memory Usage"])
        self.app.include_router(index.router, tags=["Index"])
        self.app.include_router(docs.router, tags=["Docs"])
        
        # User routers
        self.app.include_router(signup.router, tags=["User Signup"])
        self.app.include_router(logout.router, tags=["User Logout"])
        self.app.include_router(login.router, tags=["User Login"])
        
        # Security routers
        self.app.include_router(refresh_token.router, tags=["Refresh Token"])
                
        return self.app

# Create application instance
base_config = BaseConfig()
app = base_config.create_app()