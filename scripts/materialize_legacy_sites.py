from __future__ import annotations

import argparse
import json

from app.db import SessionLocal
from app.studio_legacy_materializer import materialize_all


def main() -> None:
    parser=argparse.ArgumentParser(description='Materialize legacy Zylora sites before template-source retirement.')
    parser.add_argument('--apply',action='store_true',help='Persist validated V4 draft/public snapshots. Default is dry-run.')
    args=parser.parse_args()
    if args.apply:
        with SessionLocal.begin() as db:
            result=materialize_all(db,apply=True)
            if result['failures'] or result['after']['draft_dependencies'] or result['after']['public_dependencies']:
                raise SystemExit('Materialization incomplete; transaction rolled back: '+json.dumps(result,sort_keys=True))
    else:
        with SessionLocal() as db:
            result=materialize_all(db,apply=False)
    print(json.dumps(result,sort_keys=True))


if __name__=='__main__':
    main()
