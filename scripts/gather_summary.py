import sys, io, os, json, hashlib, re, zipfile, tarfile
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

src_dir = r"C:\Users\joys0\OneDrive\Desktop\temp-1"

def sha256_file(filepath):
    h = hashlib.sha256()
    with open(filepath, "rb") as f:
        while chunk := f.read(65536):
            h.update(chunk)
    return h.hexdigest()

# 1. Gather all files in temp-1
total_files = 0
total_dirs = 0
ext_counts = {}
all_zips = []
total_size = 0

for root, dirs, files in os.walk(src_dir):
    # filter for fast counting
    total_dirs += len(dirs)
    total_files += len(files)
    for f in files:
        full_p = os.path.join(root, f)
        try:
            sz = os.path.getsize(full_p)
            total_size += sz
        except:
            pass
        ext = os.path.splitext(f)[1].lower() or '(no ext)'
        ext_counts[ext] = ext_counts.get(ext, 0) + 1
        if ext in ('.zip', '.tar.gz', '.tgz', '.tar', '.rar'):
            all_zips.append((os.path.relpath(full_p, src_dir), full_p, sz, sha256_file(full_p)))

print(f"Total files: {total_files}, Total directories: {total_dirs}, Total size: {total_size/(1024*1024):.2f} MB")
print("Top extensions:", sorted(ext_counts.items(), key=lambda x: -x[1])[:20])
print(f"Archives found ({len(all_zips)}):", all_zips)
