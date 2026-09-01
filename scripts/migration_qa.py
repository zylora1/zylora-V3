from __future__ import annotations
import os, sqlite3, subprocess, sys, tempfile, json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
MIGRATIONS=sorted((ROOT/'migrations').glob('*.sql'))

def apply_raw(db_path: Path, paths):
    con=sqlite3.connect(db_path)
    try:
        con.execute('PRAGMA foreign_keys=ON')
        con.execute('CREATE TABLE IF NOT EXISTS schema_migrations(version TEXT PRIMARY KEY, applied_at TEXT NOT NULL)')
        for p in paths:
            con.executescript(p.read_text())
            con.execute('INSERT INTO schema_migrations(version,applied_at) VALUES (?,CURRENT_TIMESTAMP)',(p.stem,))
        con.commit()
    finally: con.close()

def app_migrate(db_path: Path):
    env=os.environ.copy(); env['DATABASE_URL']=f'sqlite:///{db_path}'
    subprocess.run([sys.executable,'-c','from app.db import migrate; migrate()'],cwd=ROOT,env=env,check=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)

def inspect(db_path: Path):
    con=sqlite3.connect(db_path)
    try:
        versions=[r[0] for r in con.execute('SELECT version FROM schema_migrations ORDER BY version')]
        tables={r[0] for r in con.execute("SELECT name FROM sqlite_master WHERE type='table'")}
        site_cols={r[1] for r in con.execute('PRAGMA table_info(sites)')}
        plan_cols={r[1] for r in con.execute('PRAGMA table_info(plan_configs)')}
        return versions,tables,site_cols,plan_cols
    finally: con.close()

def main():
    checks=[]
    def ck(cond,msg):
        if not cond: raise AssertionError(msg)
        checks.append(msg); print('PASS',msg)
    with tempfile.TemporaryDirectory() as td:
        td=Path(td)
        fresh=td/'fresh.db'; app_migrate(fresh)
        v,t,s,p=inspect(fresh)
        ck(v==[x.stem for x in MIGRATIONS],'fresh database reaches exact migration head')
        ck({'media_assets','editor_history','site_revisions','rate_limit_buckets','support_conversations','freelancer_external_links','source_export_orders'} <= t,'fresh database contains production editor/marketplace/support tables')
        ck({'document_schema_version','editor_history_cursor','brand_json','seo_json','draft_structure_json','published_snapshot_json','published_structure_json'} <= s,'fresh database contains versioned editor/publish columns')
        ck({'signup_bonus_credits','ai_site_cost','ai_edit_cost'} <= p,'fresh database contains configurable plan credit economics')
        ck('freelancer_fee_transactions' not in t,'obsolete freelancer transfer-fee table is absent')

        upgrade=td/'upgrade.db'; apply_raw(upgrade,MIGRATIONS[:-1])
        con=sqlite3.connect(upgrade)
        con.execute("INSERT INTO users(id,email,password_hash,name,role,plan,ai_credits,created_at,email_verified,updated_at,account_type) VALUES ('u1','upgrade@example.com','x','Upgrade','USER','FREE',15,CURRENT_TIMESTAMP,1,CURRENT_TIMESTAMP,'CLIENT')")
        con.execute("INSERT INTO sites(id,user_id,name,slug,template_slug,origin,status,business_name,tagline,description,accent,updated_at,created_at,page_count,draft_structure_json) VALUES ('s1','u1','Existing','existing','atelier-noir','TEMPLATE','DRAFT','Existing Biz','Existing tagline','Existing description','#111111',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1,'{}')")
        con.commit(); con.close()
        app_migrate(upgrade)
        v,t,s,p=inspect(upgrade)
        ck(v==[x.stem for x in MIGRATIONS],'existing database upgrades from previous head to current head')
        con=sqlite3.connect(upgrade); row=con.execute("SELECT business_name,tagline,description,document_schema_version FROM sites WHERE id='s1'").fetchone(); con.close()
        ck(row==('Existing Biz','Existing tagline','Existing description',3),'editor migration preserves existing website content')

    out={'checks':len(checks),'errors':0,'items':checks}
    (ROOT/'data'/'migration-qa.json').write_text(json.dumps(out,indent=2))
    print(f'migration_qa: {len(checks)} checks / 0 errors')
if __name__=='__main__': main()
