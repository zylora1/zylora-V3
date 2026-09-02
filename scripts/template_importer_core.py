import sys, io, os, json, hashlib, re, shutil, base64, mimetypes, zipfile
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(".").resolve()
src_dir = Path(r"C:\Users\joys0\OneDrive\Desktop\temp-1")

def sha256_file(filepath):
    h = hashlib.sha256()
    with open(filepath, "rb") as f:
        while chunk := f.read(65536):
            h.update(chunk)
    return h.hexdigest()

def clean_html_links_and_auth(html: str) -> str:
    # 1. Remove login/signup buttons/links
    auth_patterns = [
        r'<a\b[^>]*\b(?:href=[\'"][^\'"]*[\'"])?[^>]*>\s*(?:Login|Log in|Sign In|Sign in|Signin|Sign Up|Signup|Sign up|Create Account|My Account|Member Login|Client Portal|Dashboard|Admin)\s*</a>',
        r'<button\b[^>]*>\s*(?:Login|Log in|Sign In|Sign in|Signin|Sign Up|Signup|Sign up|Create Account|My Account|Member Login|Client Portal|Dashboard|Admin)\s*</button>',
    ]
    for p in auth_patterns:
        html = re.sub(p, '', html, flags=re.IGNORECASE)
        
    # 2. Remove ThemeForest/Webflow/marketplace links
    mkt_patterns = [
        r'<a\b[^>]*\bhref=[\'"][^\'"]*(?:themeforest|envato|webflow|framer|templatemonster|bootstrapmade|colorlib|wix|squarespace|wordpress)[^\'"]*[\'"][^>]*>.*?</a>',
        r'<a\b[^>]*>\s*(?:Purchase Template|Buy Template|ThemeForest|Webflow Clone|Download Template)\s*</a>'
    ]
    for p in mkt_patterns:
        html = re.sub(p, '', html, flags=re.IGNORECASE)
        
    # 3. Clean href="#" to valid anchor or void
    html = re.sub(r'href="#"', 'href="#home"', html)
    html = re.sub(r'href=""', 'href="#home"', html)
    
    # 4. Remove comments
    html = re.sub(r'<!--.*?-->', '', html, flags=re.DOTALL)
    
    return html

print("Helper functions defined.")
