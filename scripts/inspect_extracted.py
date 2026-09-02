import os
from pathlib import Path
work_dir = Path(r"C:\Zylora-Ithanda finalu\Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4\.template-import-work")
for root, dirs, files in os.walk(work_dir):
    print(root, "->", files[:6])
