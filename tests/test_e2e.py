from __future__ import annotations
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_combined_browser_product_workflow():
    import os, tempfile
    with tempfile.TemporaryDirectory(prefix='zylora-e2e-') as td:
        env=os.environ.copy()
        env['DATABASE_URL']=f"sqlite:///{Path(td) / 'browser-e2e.db'}"
        env['MEDIA_STORAGE_DIR']=str(Path(td) / 'media')
        env['PYTHONIOENCODING']='utf-8'
        result = subprocess.run(
            [sys.executable, str(ROOT / 'scripts' / 'blank_studio_browser_e2e.py')],
            cwd=ROOT,
            capture_output=True,
            text=True,
            encoding='utf-8',
            timeout=300,
            env=env,
        )
    assert result.returncode == 0, (
        'browser_e2e.py failed\n'
        f'STDOUT:\n{result.stdout}\nSTDERR:\n{result.stderr}'
    )
    assert '0 errors' in result.stdout
