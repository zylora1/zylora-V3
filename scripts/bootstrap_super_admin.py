#!/usr/bin/env python
import argparse
import sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path: sys.path.insert(0,str(ROOT))
from apps.api.app.db import SessionLocal
from apps.api.app.services.bootstrap import bootstrap_super_admin

def main():
    parser=argparse.ArgumentParser(description='Create or promote the initial Zylora SUPER_ADMIN account.')
    parser.add_argument('--email', required=True)
    parser.add_argument('--password', required=True)
    args=parser.parse_args()
    with SessionLocal() as db:
        user=bootstrap_super_admin(db,args.email,args.password)
        print(f'SUPER_ADMIN ready: {user.email} (id={user.id})')

if __name__=='__main__':
    main()
