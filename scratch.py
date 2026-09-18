import re
from pathlib import Path

index_path = Path(r"c:\Zylora-Ithanda finalu\Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4\static\index.html")
content = index_path.read_text(encoding='utf-8')

# Split out head + nav
head_match = re.search(r'(?s)(<!doctype html>.*?</nav>\s*</div>\s*<!-- Mobile Drawer -->.*?</div>\s*<main>)', content)
head_nav = head_match.group(1) if head_match else ""

# Split out the footer
footer_match = re.search(r'(?s)(<footer class="site-footer">.*)', content)
footer = footer_match.group(1) if footer_match else ""

if not footer:
    footer_match = re.search(r'(?s)(<footer.*)', content)
    footer = footer_match.group(1) if footer_match else "  </main>\n</body>\n</html>"

Path('test_extract.txt').write_text(f"HEAD LEN: {len(head_nav)}\nFOOTER LEN: {len(footer)}\n")
