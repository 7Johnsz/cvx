import os

# Application security settings
SECRET_KEY = os.getenv("SECRET_KEY", "default-dev-secret-key-change-in-production")
