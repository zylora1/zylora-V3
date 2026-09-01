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

def migrate() -> None:
    ROOT.joinpath('data').mkdir(exist_ok=True)
    with engine.begin() as conn:
        conn.execute(text('CREATE TABLE IF NOT EXISTS schema_migrations (version TEXT PRIMARY KEY, applied_at TEXT NOT NULL)'))
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
