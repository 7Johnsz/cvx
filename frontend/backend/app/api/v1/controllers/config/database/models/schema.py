from typing import List, Optional

from sqlalchemy import DateTime, Double, ForeignKeyConstraint, Index, Integer, PrimaryKeyConstraint, String, UniqueConstraint
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
import datetime

class Base(DeclarativeBase):
    pass


class Plans(Base):
    __tablename__ = 'plans'
    __table_args__ = (
        PrimaryKeyConstraint('id', name='plans_pkey'),
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String)
    price: Mapped[float] = mapped_column(Double(53))
    max_requests_per_month: Mapped[int] = mapped_column(Integer)

    users: Mapped[List['Users']] = relationship('Users', back_populates='plan')


class Users(Base):
    __tablename__ = 'users'
    __table_args__ = (
        ForeignKeyConstraint(['plan_id'], ['plans.id'], name='users_plan_id_fkey'),
        PrimaryKeyConstraint('id', name='users_pkey'),
        UniqueConstraint('name', name='users_name_key'),
        Index('ix_users_email', 'email', unique=True)
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    email: Mapped[str] = mapped_column(String)
    name: Mapped[str] = mapped_column(String)
    password: Mapped[str] = mapped_column(String)
    created_at: Mapped[datetime.datetime] = mapped_column(DateTime)
    plan_id: Mapped[Optional[int]] = mapped_column(Integer)

    plan: Mapped[Optional['Plans']] = relationship('Plans', back_populates='users')