from typing import List, Optional
from sqlmodel import SQLModel, Field, Relationship

class Plan(SQLModel, table=True):
    __tablename__ = "plans"
    
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    price: float
    enable_ai_fine_tune: bool = False
    max_requests_per_month: int = 10

    # Relationships - one-to-many
    users: List["User"] = Relationship(back_populates="plan")