"""chatbot conversation tables"""
from alembic import op
import sqlalchemy as sa
revision='20260822_0002'
down_revision='20260822_0001'
branch_labels=None
depends_on=None

def upgrade():
    bind=op.get_bind(); existing=set(sa.inspect(bind).get_table_names())
    if 'chat_sessions' not in existing:
        op.create_table('chat_sessions',
            sa.Column('id',sa.Integer(),primary_key=True),
            sa.Column('site_id',sa.Integer(),sa.ForeignKey('sites.id'),nullable=False),
            sa.Column('visitor_key',sa.String(128),nullable=False),
            sa.Column('created_at',sa.DateTime(),nullable=False),
            sa.Column('updated_at',sa.DateTime(),nullable=False),
            sa.UniqueConstraint('site_id','visitor_key',name='uq_chat_site_visitor'))
        op.create_index('ix_chat_sessions_site_id','chat_sessions',['site_id'])
        op.create_index('ix_chat_sessions_visitor_key','chat_sessions',['visitor_key'])
    if 'chat_messages' not in existing:
        op.create_table('chat_messages',
            sa.Column('id',sa.Integer(),primary_key=True),
            sa.Column('session_id',sa.Integer(),sa.ForeignKey('chat_sessions.id'),nullable=False),
            sa.Column('role',sa.String(16),nullable=False),
            sa.Column('content',sa.Text(),nullable=False),
            sa.Column('created_at',sa.DateTime(),nullable=False))
        op.create_index('ix_chat_messages_session_id','chat_messages',['session_id'])

def downgrade():
    bind=op.get_bind(); existing=set(sa.inspect(bind).get_table_names())
    if 'chat_messages' in existing:
        op.drop_index('ix_chat_messages_session_id',table_name='chat_messages');op.drop_table('chat_messages')
    if 'chat_sessions' in existing:
        op.drop_index('ix_chat_sessions_visitor_key',table_name='chat_sessions');op.drop_index('ix_chat_sessions_site_id',table_name='chat_sessions');op.drop_table('chat_sessions')
