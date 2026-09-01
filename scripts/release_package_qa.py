#!/usr/bin/env python3
"""Fail-closed QA for Zylora release directories and ZIP archives.

This deliberately rejects local databases, secrets, caches, uploaded media and
other runtime artifacts that must never be present in a distributable release.
It reports paths only; file contents are never read or printed.
"""
from __future__ import annotations

import argparse
import re
import sys
import zipfile
from pathlib import Path, PurePosixPath

FORBIDDEN_NAMES={
    '.env', '.DS_Store', '.coverage',
}
FORBIDDEN_DIRS={
    '__pycache__', '.pytest_cache', '.mypy_cache', '.ruff_cache',
    'node_modules', '.next', 'htmlcov',
}
FORBIDDEN_SUFFIXES={
    '.pyc', '.pyo', '.db', '.sqlite', '.sqlite3', '.log',
}
SENSITIVE_NAME_PATTERNS=(
    re.compile(r'(^|/)(id_rsa|id_ed25519|server\.key|private\.key)$',re.I),
    re.compile(r'(^|/).*\.(pem|p12|pfx)$',re.I),
)


def reason_for(path: PurePosixPath) -> str | None:
    parts=path.parts
    if any(p in FORBIDDEN_DIRS for p in parts):
        return 'cache/build dependency directory'
    if path.name in FORBIDDEN_NAMES:
        return 'secret/runtime metadata file'
    if path.suffix.lower() in FORBIDDEN_SUFFIXES:
        return 'runtime/database/cache artifact'
    # Runtime uploads must never be bundled. QA JSON files under data/ are fine.
    if len(parts)>=2 and parts[-2]=='media' and 'data' in parts:
        return 'runtime uploaded media'
    normalized='/'.join(parts)
    if any(p.search(normalized) for p in SENSITIVE_NAME_PATTERNS):
        return 'private key/certificate material'
    return None


def scan_dir(root: Path):
    errors=[]
    for p in root.rglob('*'):
        if p.is_symlink():
            errors.append((p.relative_to(root).as_posix(),'symbolic link'))
            continue
        if not p.is_file():
            continue
        rel=PurePosixPath(p.relative_to(root).as_posix())
        reason=reason_for(rel)
        if reason: errors.append((rel.as_posix(),reason))
    return errors


def scan_zip(path: Path):
    errors=[]
    with zipfile.ZipFile(path) as zf:
        for info in zf.infolist():
            if info.is_dir():
                continue
            rel=PurePosixPath(info.filename)
            reason=reason_for(rel)
            mode=(info.external_attr >> 16) & 0o170000
            if mode==0o120000:
                reason=reason or 'symbolic link'
            if reason: errors.append((rel.as_posix(),reason))
    return errors


def main() -> int:
    ap=argparse.ArgumentParser()
    ap.add_argument('artifact',nargs='?',default='.',help='release directory or .zip')
    args=ap.parse_args()
    target=Path(args.artifact).resolve()
    if target.is_dir(): errors=scan_dir(target)
    elif target.is_file() and target.suffix.lower()=='.zip': errors=scan_zip(target)
    else:
        print(f'release_package_qa: unsupported artifact: {target}',file=sys.stderr)
        return 2
    if errors:
        print(f'release_package_qa: {len(errors)} forbidden artifact(s)')
        for path,reason in errors[:100]: print(f'ERROR {path}: {reason}')
        return 1
    print('release_package_qa: 0 forbidden artifacts')
    return 0

if __name__=='__main__':
    raise SystemExit(main())
