from sqlmodel import Field, SQLModel, Relationship
from datetime import datetime
from typing import Optional

class User(SQLModel, table=True):
    __tablename__ = "users"
    
    id: Optional[int] = Field(default=None, primary_key=True)
    email: str = Field(..., unique=True, index=True)
    name: str = Field(..., unique=True) 
    password: str = Field(nullable=False)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    plan_id: Optional[int] = Field(default=None, foreign_key="plans.id")
    plan: Optional["Plan"] = Relationship(back_populates="users")
