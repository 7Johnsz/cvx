from pydantic import BaseModel, ConfigDict, Field

class UserModel(BaseModel):
    user: str = Field(
        ...,
        description="Username",
        min_length=3,
        max_length=50,
        json_schema_extra={"example": "john_doe"}
    )
    email: str = Field(
        ...,
        description="Email address",
        json_schema_extra={"example": "john@example.com"}
    )
    password: str = Field(..., min_length=6)
    
    model_config = ConfigDict(
        extra="forbid",
    )


