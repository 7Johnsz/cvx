from pydantic import BaseModel, ConfigDict, Field

class LoginModel(BaseModel):
    email: str = Field(
        ...,
        description="Email address",
        json_schema_extra={"example": "john@example.com"}
    )
    password: str = Field(..., min_length=6)
    
    model_config = ConfigDict(
        extra="forbid",
    )


