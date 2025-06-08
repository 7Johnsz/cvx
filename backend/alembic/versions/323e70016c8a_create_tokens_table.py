"""create tokens table

Revision ID: 323e70016c8a
Revises: 8a0e7c104e9c
Create Date: 2025-06-08 16:28:54.745626

"""
from typing import Sequence, Union
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision: str = '323e70016c8a'
down_revision: Union[str, None] = '8a0e7c104e9c'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def upgrade() -> None:
    op.create_table(
        'tokens',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('user_id', sa.Integer(), sa.ForeignKey('users.id')),
        sa.Column('token_hash', sa.String(), nullable=False),
        sa.Column('created_at', sa.DateTime(), nullable=False),
        sa.Column('expires_at', sa.DateTime(), nullable=False),
        sa.PrimaryKeyConstraint('id', name='tokens_pkey'),
        sa.UniqueConstraint('token_hash', name='tokens_token_hash_key')
    )

def downgrade() -> None:
    op.drop_table('tokens')
