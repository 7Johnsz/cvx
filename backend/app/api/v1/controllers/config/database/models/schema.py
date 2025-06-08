from typing import List, Optional

from sqlalchemy import (
    DateTime, Double, 
    ForeignKeyConstraint, Index, 
    Integer, PrimaryKeyConstraint, 
    String, UniqueConstraint, ForeignKey
)

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
    
class Tokens(Base):
    __tablename__ = 'tokens'
    __table_args__ = (
        ForeignKeyConstraint(['user_id'], ['users.id'], name='tokens_user_id_fkey'),
        PrimaryKeyConstraint('id', name='tokens_pkey'),
        UniqueConstraint('token_hash', name='tokens_token_hash_key')
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    token_hash: Mapped[str] = mapped_column(String)
    created_at: Mapped[datetime.datetime] = mapped_column(DateTime)
    expires_at: Mapped[datetime.datetime] = mapped_column(DateTime)
    user_id: Mapped[Optional[int]] = mapped_column(Integer)

    user: Mapped[Optional['Users']] = relationship('Users', back_populates='tokens')