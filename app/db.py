from __future__ import annotations
from datetime import datetime, timezone
import re
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import NullPool
from .config import settings, ROOT

connect_args = {'check_same_thread': False, 'timeout': 30} if settings.database_url.startswith('sqlite') else {}
engine = create_engine(settings.database_url, future=True, pool_pre_ping=True, connect_args=connect_args, poolclass=NullPool if settings.database_url.startswith('sqlite') else None)
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False, future=True)

def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()

def _postgresize_statement(stmt: str) -> str:
    """Translate the small SQLite-only subset used by shipped SQL migrations.

    Production deployments use PostgreSQL; keeping the migration files single-source prevents
    schema drift between local certification and production.
    """
    normalized = stmt.strip()
    normalized = normalized.replace('INTEGER PRIMARY KEY AUTOINCREMENT', 'BIGSERIAL PRIMARY KEY')
    insert_or_ignore = re.compile(r'\bINSERT\s+OR\s+IGNORE\s+INTO\b', re.IGNORECASE)
    if insert_or_ignore.search(normalized):
        normalized = insert_or_ignore.sub('INSERT INTO', normalized, count=1)
        normalized = normalized.rstrip() + ' ON CONFLICT DO NOTHING'
    return normalized


def _split_sql_statements(sql: str) -> list[str]:
    """Split migration SQL without treating semicolons in strings/comments as terminators."""
    statements: list[str] = []
    current: list[str] = []
    quote: str | None = None
    line_comment = False
    block_comment = False
    index = 0
    while index < len(sql):
        char = sql[index]
        following = sql[index + 1] if index + 1 < len(sql) else ''
        if line_comment:
            current.append(char)
            if char == '\n':
                line_comment = False
            index += 1
            continue
        if block_comment:
            current.append(char)
            if char == '*' and following == '/':
                current.append(following)
                block_comment = False
                index += 2
            else:
                index += 1
            continue
        if quote:
            current.append(char)
            if char == quote:
                if following == quote:
                    current.append(following)
                    index += 2
                    continue
                quote = None
            index += 1
            continue
        if char == '-' and following == '-':
            current.extend((char, following))
            line_comment = True
            index += 2
            continue
        if char == '/' and following == '*':
            current.extend((char, following))
            block_comment = True
            index += 2
            continue
        if char in {"'", '"'}:
            quote = char
            current.append(char)
        elif char == ';':
            statement = ''.join(current).strip()
            if statement:
                statements.append(statement)
            current = []
        else:
            current.append(char)
        index += 1
    statement = ''.join(current).strip()
    if statement:
        statements.append(statement)
    return statements

def _ensure_postgres_compatibility(conn) -> None:
    """Ensure existing PostgreSQL tables have canonical TEXT primary/foreign key types.

    If an existing PostgreSQL database was provisioned with integer keys for users/sites,
    convert those columns to TEXT safely without losing any data so that foreign keys
    and UUID primary keys operate consistently across production.
    """
    if conn.dialect.name != 'postgresql':
        return
    compat_sql = text("""
DO $$
DECLARE
    rec RECORD;
    fk_rec RECORD;
BEGIN
    -- 1. Check users.id data type
    IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = current_schema() AND table_name = 'users' AND column_name = 'id'
          AND data_type IN ('integer', 'smallint', 'bigint', 'numeric')
    ) THEN
        FOR fk_rec IN (
            SELECT tc.table_name, tc.constraint_name
            FROM information_schema.table_constraints tc
            JOIN information_schema.constraint_column_usage ccu
              ON ccu.constraint_name = tc.constraint_name AND ccu.table_schema = tc.table_schema
            WHERE tc.constraint_type = 'FOREIGN KEY'
              AND ccu.table_name = 'users' AND ccu.column_name = 'id'
              AND tc.table_schema = current_schema()
        ) LOOP
            EXECUTE 'ALTER TABLE ' || quote_ident(fk_rec.table_name) || ' DROP CONSTRAINT IF EXISTS ' || quote_ident(fk_rec.constraint_name);
        END LOOP;

        BEGIN
            ALTER TABLE users ALTER COLUMN id DROP DEFAULT;
        EXCEPTION WHEN OTHERS THEN
            NULL;
        END;

        ALTER TABLE users ALTER COLUMN id TYPE TEXT USING id::text;
    END IF;

    -- 2. Check sites.id data type
    IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = current_schema() AND table_name = 'sites' AND column_name = 'id'
          AND data_type IN ('integer', 'smallint', 'bigint', 'numeric')
    ) THEN
        FOR fk_rec IN (
            SELECT tc.table_name, tc.constraint_name
            FROM information_schema.table_constraints tc
            JOIN information_schema.constraint_column_usage ccu
              ON ccu.constraint_name = tc.constraint_name AND ccu.table_schema = tc.table_schema
            WHERE tc.constraint_type = 'FOREIGN KEY'
              AND ccu.table_name = 'sites' AND ccu.column_name = 'id'
              AND tc.table_schema = current_schema()
        ) LOOP
            EXECUTE 'ALTER TABLE ' || quote_ident(fk_rec.table_name) || ' DROP CONSTRAINT IF EXISTS ' || quote_ident(fk_rec.constraint_name);
        END LOOP;

        BEGIN
            ALTER TABLE sites ALTER COLUMN id DROP DEFAULT;
        EXCEPTION WHEN OTHERS THEN
            NULL;
        END;

        ALTER TABLE sites ALTER COLUMN id TYPE TEXT USING id::text;
    END IF;

    -- 3. Check any existing foreign key columns that might have integer types
    FOR rec IN (
        SELECT table_name, column_name
        FROM information_schema.columns
        WHERE table_schema = current_schema()
          AND table_name NOT IN ('outbox', 'audit_log', 'schema_migrations')
          AND column_name IN (
              'user_id', 'site_id', 'client_user_id', 'freelancer_id',
              'author_user_id', 'assigned_admin_id', 'sender_user_id',
              'sender_admin_id', 'created_by_user_id', 'conversation_id',
              'domain_id', 'website_id', 'source_site_id'
          )
          AND data_type IN ('integer', 'smallint', 'bigint', 'numeric')
    ) LOOP
        EXECUTE 'ALTER TABLE ' || quote_ident(rec.table_name) || ' ALTER COLUMN ' || quote_ident(rec.column_name) || ' TYPE TEXT USING ' || quote_ident(rec.column_name) || '::text';
    END LOOP;
END $$;
    """)
    conn.execute(compat_sql)

def migrate() -> None:
    ROOT.joinpath('data').mkdir(exist_ok=True)
    with engine.begin() as conn:
        conn.execute(text('CREATE TABLE IF NOT EXISTS schema_migrations (version TEXT PRIMARY KEY, applied_at TEXT NOT NULL)'))
        if not settings.database_url.startswith('sqlite'):
            _ensure_postgres_compatibility(conn)
        applied = {r[0] for r in conn.execute(text('SELECT version FROM schema_migrations')).fetchall()}
        for path in sorted(ROOT.joinpath('migrations').glob('*.sql')):
            if path.stem in applied:
                continue
            sql = path.read_text(encoding='utf-8')
            # The shipped migration targets SQLite for local/test runtime.
            # PostgreSQL deploys should translate this schema through their migration pipeline.
            if settings.database_url.startswith('sqlite'):
                raw = conn.connection.driver_connection
                raw.executescript(sql)
            else:
                # Statements in this migration are intentionally portable enough for PostgreSQL
                # except AUTOINCREMENT; use the app's documented production migration path.
                for stmt in _split_sql_statements(sql):
                    conn.execute(text(_postgresize_statement(stmt)))
            conn.execute(text('INSERT INTO schema_migrations(version, applied_at) VALUES (:v,:a)'), {'v': path.stem, 'a': now_iso()})

def db_session():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
