from __future__ import annotations
from datetime import datetime, timezone
import re
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import NullPool
from .config import settings, ROOT

def _normalize_database_url(url: str) -> str:
    raw = (url or '').strip()
    if raw.startswith('postgres://'):
        return 'postgresql://' + raw[len('postgres://'):]
    return raw

def _create_engine():
    norm_url = _normalize_database_url(settings.database_url)
    if settings.app_env == 'production' and (not norm_url or norm_url.startswith('sqlite')):
        raise RuntimeError(
            "CRITICAL CONFIGURATION ERROR: Production environment requires PostgreSQL. "
            "DATABASE_URL cannot be missing or use SQLite in production."
        )
    if norm_url.startswith('sqlite'):
        return create_engine(
            norm_url,
            future=True,
            connect_args={'check_same_thread': False, 'timeout': 30},
            poolclass=NullPool,
        )
    return create_engine(
        norm_url,
        future=True,
        pool_pre_ping=True,
        pool_size=10,
        max_overflow=20,
        pool_recycle=300,
    )

engine = _create_engine()
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


def _ensure_ai_ledger_immutability(conn) -> None:
    """Install the PostgreSQL guard that makes finalized ledger history append-only.

    The application already writes corrections as compensating entries.  This
    database-level trigger closes the remaining gap where a normal SQL client
    could otherwise UPDATE or DELETE historical AI-credit rows.  It is run
    after migrations as well as during startup so fresh and upgraded databases
    converge on the same protection.  SQLite test databases intentionally keep
    the fixture reset path writable; production is PostgreSQL by policy.
    """
    if conn.dialect.name != 'postgresql':
        return
    conn.execute(text("""
DO $zylora$
BEGIN
    IF to_regclass(current_schema() || '.ai_credit_ledger') IS NOT NULL THEN
        CREATE OR REPLACE FUNCTION zylora_reject_ai_ledger_mutation()
        RETURNS trigger
        LANGUAGE plpgsql
        AS $fn$
        BEGIN
            -- Allow PostgreSQL's own ON DELETE CASCADE while rejecting direct
            -- operator/application UPDATE or DELETE statements. Account
            -- deletion already performs explicit privacy cleanup; the parent
            -- row removal is the one deliberate historical purge.
            IF TG_OP = 'DELETE' AND pg_trigger_depth() > 1 THEN
                RETURN OLD;
            END IF;
            RAISE EXCEPTION 'ai_credit_ledger is append-only; use a compensating entry';
        END;
        $fn$;
        DROP TRIGGER IF EXISTS trg_ai_credit_ledger_immutable ON ai_credit_ledger;
        CREATE TRIGGER trg_ai_credit_ledger_immutable
            BEFORE UPDATE OR DELETE ON ai_credit_ledger
            FOR EACH ROW EXECUTE FUNCTION zylora_reject_ai_ledger_mutation();
    END IF;
END
$zylora$;
"""))

def _ensure_fractional_ai_usage_events(conn) -> None:
    """Upgrade legacy integer assistant telemetry to Decimal credits on PostgreSQL.

    SQLite's dynamic typing can safely store the fractional values in the
    existing INTEGER-affinity column during local certification. PostgreSQL
    needs an explicit NUMERIC type so usage telemetry cannot round a real
    provider charge to a whole credit.
    """
    if conn.dialect.name != 'postgresql':
        return
    exists = conn.execute(text("""
        SELECT 1 FROM information_schema.columns
        WHERE table_schema=current_schema() AND table_name='ai_usage_events'
          AND column_name='billable_credits'
    """)).first()
    if not exists:
        return
    dtype = conn.execute(text("""
        SELECT data_type FROM information_schema.columns
        WHERE table_schema=current_schema() AND table_name='ai_usage_events'
          AND column_name='billable_credits'
    """)).scalar_one_or_none()
    if dtype in {'smallint', 'integer', 'bigint', 'numeric'}:
        # NUMERIC is idempotent here; PostgreSQL only executes the conversion
        # when the current type is still an integer legacy schema.
        if dtype != 'numeric':
            conn.execute(text("""
                ALTER TABLE ai_usage_events
                ALTER COLUMN billable_credits TYPE NUMERIC(24,6)
                USING billable_credits::numeric
            """))

def migrate() -> None:
    if settings.app_env == 'production' and (not settings.database_url or settings.database_url.startswith('sqlite')):
        raise RuntimeError(
            "CRITICAL CONFIGURATION ERROR: Production database migrations require PostgreSQL. "
            "DATABASE_URL cannot be missing or use SQLite in production."
        )
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
        _ensure_fractional_ai_usage_events(conn)
        _ensure_ai_ledger_immutability(conn)

def db_session():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
