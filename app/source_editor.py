"""Structured JSX/TSX mapping and safe source writes for code-backed Studio."""
from __future__ import annotations

import json
import os
from pathlib import Path
import subprocess
from typing import Any

from .code_project import CodeProjectAdapter, CodeProjectError
from .config import ROOT

class SourceEditError(ValueError): pass

_NODE_SCRIPT = ROOT / 'scripts' / 'source_transform.mjs'
_ALLOWED = {'.jsx', '.tsx', '.js', '.ts'}

def _run(action: str, file_path: str, source: str, **extra: Any) -> dict:
    payload = {'action': action, 'filePath': file_path, 'source': source, **extra}
    result = subprocess.run(['node', str(_NODE_SCRIPT)], input=json.dumps(payload), text=True, capture_output=True, timeout=15, cwd=ROOT, env={'PATH': os.environ.get('PATH','')})
    if result.returncode:
        raise SourceEditError('Source parser process failed')
    try: body = json.loads(result.stdout)
    except json.JSONDecodeError as exc: raise SourceEditError('Source parser returned invalid output') from exc
    if not body.get('ok'): raise SourceEditError(str(body.get('error') or 'Source operation rejected'))
    return body

def map_source(adapter: CodeProjectAdapter, path: str) -> dict:
    if Path(path).suffix.lower() not in _ALLOWED: raise SourceEditError('Only JSX/TSX/JS/TS files can be mapped')
    source = adapter.read_file(path); body = _run('map', path, source)
    nodes = body.get('nodes') or []
    for node in nodes:
        node.update({'projectId': adapter.project_id, 'workspaceId': adapter.project_id, 'mapping_status': 'exact' if node.get('text') else 'unsupported', 'editable': bool(node.get('text'))})
    return {'filePath': path, 'nodes': nodes}

def replace_text(adapter: CodeProjectAdapter, path: str, target: dict, value: str) -> dict:
    if Path(path).suffix.lower() not in _ALLOWED: raise SourceEditError('Unsupported source file')
    before = adapter.read_file(path)
    body = _run('replace-text', path, before, target=target, value=value)
    next_source = body['source']
    temp = adapter.root / ('.zylora-write-' + Path(path).name)
    relative = adapter._relative(path)
    target_path = adapter.root / relative
    try:
        temp.write_text(next_source, encoding='utf-8', newline='\n')
        # Parse was already performed by the AST subprocess; replace is atomic
        # within the confined project workspace.
        os.replace(temp, target_path)
    except Exception:
        temp.unlink(missing_ok=True)
        raise
    return {'path': path, 'previous': before, 'source': next_source, 'target': body['target'], 'validation': body['validation']}
