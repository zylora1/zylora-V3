import sys, io, os, zipfile, shutil
from pathlib import Path

ROOT = Path(".").resolve()
src_dir = Path(r"C:\Users\joys0\OneDrive\Desktop\temp-1")
work_dir = ROOT / ".template-import-work"
work_dir.mkdir(parents=True, exist_ok=True)

zips = [
    ("editorial-neon-yellow-v1.1.zip", "editorial-neon-yellow"),
    ("editorial-red-portfolio-v1.1.zip", "editorial-red-portfolio"),
    ("neo-brutal-saas-template(1).zip", "neo-brutal-saas"),
]

for zip_name, slug in zips:
    zp = src_dir / zip_name
    dest = work_dir / slug
    dest.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(zp, 'r') as z:
        for member in z.infolist():
            # protect against path traversal
            if ".." in member.filename or member.filename.startswith("/"):
                continue
            z.extract(member, dest)
    print(f"Extracted {zip_name} into {dest}")
