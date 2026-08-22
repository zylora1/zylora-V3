"""AI chatbot knowledge base and template admin records.

Revision ID: 20260822_0003
Revises: 20260822_0002
"""
from alembic import op
import sqlalchemy as sa

revision = '20260822_0003'
down_revision = '20260822_0002'
branch_labels = None
depends_on = None

def upgrade():
    bind=op.get_bind();existing=set(sa.inspect(bind).get_table_names())
    if 'site_documents' not in existing:
        op.create_table(
            'site_documents',
            sa.Column('id', sa.Integer(), primary_key=True),
            sa.Column('site_id', sa.Integer(), sa.ForeignKey('sites.id'), nullable=False),
            sa.Column('name', sa.String(length=240), nullable=False),
            sa.Column('content', sa.Text(), nullable=False),
            sa.Column('source_type', sa.String(length=32), nullable=False, server_default='PASTE'),
            sa.Column('created_at', sa.DateTime(), nullable=False),
            sa.Column('updated_at', sa.DateTime(), nullable=False),
        )
        op.create_index('ix_site_documents_site_id','site_documents',['site_id'])
    if 'template_records' not in existing:
        op.create_table(
            'template_records',
            sa.Column('key', sa.String(length=160), primary_key=True),
            sa.Column('family', sa.String(length=120), nullable=False),
            sa.Column('quality_tier', sa.String(length=32), nullable=False, server_default='variant'),
            sa.Column('page_count', sa.Integer(), nullable=False, server_default='1'),
            sa.Column('visible', sa.Boolean(), nullable=False, server_default=sa.true()),
            sa.Column('featured', sa.Boolean(), nullable=False, server_default=sa.false()),
            sa.Column('display_name', sa.String(length=240), nullable=False),
            sa.Column('description', sa.Text(), nullable=False, server_default=''),
            sa.Column('tags_csv', sa.Text(), nullable=False, server_default=''),
            sa.Column('preview_image', sa.Text(), nullable=True),
            sa.Column('sort_order', sa.Integer(), nullable=False, server_default='0'),
            sa.Column('created_at', sa.DateTime(), nullable=False),
            sa.Column('updated_at', sa.DateTime(), nullable=False),
        )
        op.create_index('ix_template_records_family','template_records',['family'])
        op.create_index('ix_template_records_quality_tier','template_records',['quality_tier'])
        op.create_index('ix_template_records_visible','template_records',['visible'])
        op.create_index('ix_template_records_featured','template_records',['featured'])
        op.create_index('ix_template_records_sort_order','template_records',['sort_order'])

def downgrade():
    bind=op.get_bind();existing=set(sa.inspect(bind).get_table_names())
    if 'template_records' in existing:
        for name in ('ix_template_records_sort_order','ix_template_records_featured','ix_template_records_visible','ix_template_records_quality_tier','ix_template_records_family'):
            try: op.drop_index(name,table_name='template_records')
            except Exception: pass
        op.drop_table('template_records')
    if 'site_documents' in existing:
        try: op.drop_index('ix_site_documents_site_id',table_name='site_documents')
        except Exception: pass
        op.drop_table('site_documents')
