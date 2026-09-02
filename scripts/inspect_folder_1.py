import os

p = r"C:\Users\joys0\OneDrive\Desktop\temp-1\1"
print("Folder 1 files:")
for item in os.listdir(p):
    print(" ", item)

print("\nApp files:")
if os.path.exists(os.path.join(p, "app")):
    for item in os.listdir(os.path.join(p, "app")):
        print("  app/" + item)

print("\nPublic files:")
if os.path.exists(os.path.join(p, "public")):
    for item in os.listdir(os.path.join(p, "public")):
        print("  public/" + item)

print("\n--- app/page.tsx (first 500 chars) ---")
print(open(os.path.join(p, "app", "page.tsx"), encoding="utf-8", errors="ignore").read()[:500])

if os.path.exists(os.path.join(p, "app", "globals.css")):
    print("\n--- app/globals.css (first 300 chars) ---")
    print(open(os.path.join(p, "app", "globals.css"), encoding="utf-8", errors="ignore").read()[:300])
