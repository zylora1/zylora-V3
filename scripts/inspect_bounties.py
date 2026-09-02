import tarfile, os

p = r"C:\Users\joys0\OneDrive\Desktop\temp-1\bounties-site.tar.gz"
with tarfile.open(p, "r:gz") as t:
    for m in t.getmembers():
        print(f"{m.name} ({m.size} bytes)")
