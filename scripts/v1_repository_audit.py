"""Reproducible source inventory. Presence is not certification."""
from pathlib import Path
import ast
import hashlib
import json
import re
import subprocess
import zipfile

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'docs' / 'v1-20260915'
SPEC = Path('C:/Users/joys0/.codex/attachments/c29f6f74-c3a6-42c2-983b-e3e6df69cb4b/pasted-text.txt')
ZIP = Path('C:/Users/joys0/Downloads/free-react-tailwind-admin-dashboard-main.zip')


def table(name, headers, rows, intro=''):
    def cell(value):
        return str(value).replace('|', '\\|').replace('\n', ' ')
    content = '# ' + name.replace('-', ' ').title() + '\n\n' + intro + '\n\n'
    content += '| ' + ' | '.join(headers) + ' |\n|' + '|'.join('---' for _ in headers) + '|\n'
    content += '\n'.join('| ' + ' | '.join(cell(v) for v in row) + ' |' for row in rows) + '\n'
    (OUT / (name + '.md')).write_text(content, encoding='utf-8')


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / 'master-specification.txt').write_text(SPEC.read_text(encoding='utf-8'), encoding='utf-8')
    status = subprocess.run(['git', 'status', '--porcelain'], cwd=ROOT, capture_output=True, text=True, check=True)
    if not (OUT / 'initial-working-tree.txt').exists():
        (OUT / 'initial-working-tree.txt').write_text(status.stdout, encoding='utf-8')
    tests = {p.relative_to(ROOT).as_posix(): p.read_text(encoding='utf-8-sig') for p in (ROOT / 'tests').glob('test_*.py')}
    front = {p.relative_to(ROOT).as_posix(): p.read_text(encoding='utf-8-sig') for folder, pattern in [('static', '*.js'), ('static', '*.html'), ('studio', '*.tsx')] for p in (ROOT / folder).rglob(pattern)}
    routes = []
    for source in sorted((ROOT / 'app').glob('*.py')):
        tree = ast.parse(source.read_text(encoding='utf-8-sig'))
        for node in ast.walk(tree):
            if not isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
                continue
            for dec in node.decorator_list:
                if not isinstance(dec, ast.Call) or not isinstance(dec.func, ast.Attribute) or dec.func.attr not in {'get', 'post', 'put', 'patch', 'delete', 'head', 'options', 'api_route'} or not dec.args or not isinstance(dec.args[0], ast.Constant):
                    continue
                path = str(dec.args[0].value)
                prefix = path.split('{')[0].rstrip('/')
                matches = [p for p, content in tests.items() if prefix and prefix in content]
                entries = [p for p, content in front.items() if prefix and prefix in content]
                routes.append([node.name, dec.func.attr.upper() + ' ' + path, ', '.join(entries[:5]) or 'Not resolved by literal scan', f'{source.relative_to(ROOT).as_posix()}:{node.lineno}', ', '.join(matches[:5]) or 'No literal match; inspect indirect coverage', 'PRESENT / runtime unverified'])
    table('product-feature-inventory', ['FEATURE', 'ROUTE/API (router-local)', 'FRONTEND ENTRY', 'BACKEND OWNER', 'BASELINE TEST CANDIDATES', 'STATUS'], routes,
          'Every statically declared application route. Router prefixes must be resolved from main.py and APIRouter declarations. Test and frontend matches are candidates, not assertions of coverage. Baseline suite runs separately.')
    (OUT / 'route-inventory.json').write_text(json.dumps(routes, indent=2), encoding='utf-8')
    with zipfile.ZipFile(ZIP) as archive:
        names = archive.namelist()
        (OUT / 'dashboard-zip-files.txt').write_text('\n'.join(names), encoding='utf-8')
        reference = OUT / 'dashboard-reference'
        selected = [n for n in names if re.search(r'/(LICENSE[^/]*|package.json|README.md)$|/src/(layout/|context/|index.css$|components/ui/|components/ecommerce/|icons/)', n, re.I) and not n.endswith('/')]
        for name in selected:
            relative = Path(*name.split('/')[1:])
            target = reference / relative
            if not target.resolve().is_relative_to(reference.resolve()):
                raise ValueError('Unsafe archive path')
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(archive.read(name))
        licenses = [n for n in names if 'license' in n.lower()]
        (OUT / 'dashboard-provenance.json').write_text(json.dumps({'archive': str(ZIP), 'sha256': hashlib.sha256(ZIP.read_bytes()).hexdigest(), 'licenses': licenses, 'copied_for_audit_only': selected}, indent=2), encoding='utf-8')
    mappings = [
        ('src/layout/AppLayout.tsx','Shell','static/dashboard.html; static/dashboard-sneat.css','Port shell preserving dashboard.js IDs/actions'),
        ('src/layout/AppSidebar.tsx','Navigation width / collapse / mobile','static/dashboard.html','Port geometry and active state; keep USER routes'),
        ('src/layout/AppHeader.tsx','Header / account / search','static/dashboard.html','Keep real session/account controls'),
        ('src/context/SidebarContext.tsx','Mobile/collapse state','static/dashboard.js','One UI state owner'),
        ('src/index.css','Typography / colors / spacing','static/dashboard-sneat.css','Scoped token/component port'),
        ('src/components/ecommerce','KPI / charts / orders','static/dashboard.js','Use actual metrics; remove sample identities and orders'),
        ('src/components/ui','Badges / buttons / tables / modal','static/dashboard.html','Port accessible variants'),
        ('src/icons','SVG icon vocabulary','static dashboard controls','Retain license; never reinterpret icons as third-party logos'),
    ]
    table('dashboard-zip-reference-map', ['ZIP FILE/COMPONENT','VISUAL ROLE','ZYLORA MAPPING','LICENSE','IMPLEMENTATION','VISUAL TEST'], [(*r[:3], 'Inspect dashboard-reference/LICENSE.md',r[3],'NOT RUN: matched viewport reference and product screenshots required') for r in mappings], 'Archive inspected and selected source copied for review only. No production dashboard port claimed.')
    table('penpot-integration-matrix',['PENPOT CAPABILITY','EXISTING ZYLORA CAPABILITY','ADAPTER/PORT PLAN','CANONICAL STATE OWNER','TEST'],[
        ('Scene / board','SiteDocument pages/nodes','Typed ephemeral projection; preserve business types and IDs','app/studio_document.py; studio/store.ts','Round trip all supported node types; not implemented'),
        ('Transforms / snapping','studio/geometry; studio/interactions','Inspect upstream math; port only justified mechanics with provenance','Reducer canonical geometry','tests/test_studio_geometry_contract.py'),
        ('Selection / layers','LayersPanel; SelectionOverlay','Use canonical selectedNodeIds; no second selection store','Studio ephemeral state','Cross-browser gestures not rerun'),
        ('Tokens / aliases','SiteStylesPanel; tokens','Audit recursive aliases, cycles, renaming and renderer resolution','SiteDocument tokens','Alias and override tests needed'),
        ('Flex / Grid','Node layout and renderer','Map deterministic subset and inspect parity','Canonical node layout','tests/test_studio_publish_fidelity.py'),
        ('Components / variants','ComponentsPanel; component definitions','Verify overrides/detach; do not claim variants prematurely','SiteDocument components','Coverage audit pending'),
        ('History / autosave','Reducer history; useAutosave; studio-save','Bound history and make durable recovery canonical','Document snapshots; CAS revisions','tests/test_studio_canonical_recovery.py; tests/test_studio_history_runtime.py'),
    ],'No Penpot import/adapter found by initial application-source scan. Upstream frontend architecture inspected: https://help.penpot.app/technical-guide/developer/architecture/frontend/. Integration and MPL source boundary remain unimplemented.')
    headings = []
    for line in SPEC.read_text(encoding='utf-8').splitlines():
        if re.match(r'^\d{1,2}\.\s+[A-Z]',line) and line == line.upper():
            headings.append([line,'See route inventory and existing test candidates','Requirement-level audit pending; not certified','app/; studio/; static/; tests/','Inspect in specification phase order','Acceptance criteria in master-specification.txt'])
    table('gap-matrix',['REQUIREMENT','EXISTING IMPLEMENTATION','GAP','FILES','ACTION','TEST'],headings,'Initial requirement ledger, intentionally UNVERIFIED where evidence is not yet established. Broad paths are audit scope, not an implementation plan.')
    workflows = ['Account to publish','Lead notification accounting','Appointments','Chatbot','CMS dynamic output','AI edit/accounting/rollback','Billing/branding','Auth/session/navigation','Admin separation','Dashboard fidelity','Public conversion','Failure/recovery','Cross-browser Studio','Mobile journey']
    table('workflow-certification-matrix',['WORKFLOW A-N','ENVIRONMENT','EXPECTED','RESULT','EVIDENCE','NOTES'],[(chr(65+i)+' — '+w,'Local isolated database / browsers','All steps in section 55','NOT RUN','None for this task yet','Historical reports are not reused as passes') for i,w in enumerate(workflows)])
    table('external-ai-compatibility-matrix',['CLIENT','CONNECTION METHOD','AUTH','SCOPES','TOOLS','REAL CLIENT TEST','LIMITATIONS','TESTED DATE'],[
        ('OpenAI API / ChatGPT','Remote MCP / API; current client path still requires a real client test','Connector bearer token; client OAuth not implemented','account.read; sites.read; sites.edit','Shared Zylora registry','NOT RUN','Protocol surface exists; no branded client claim','No test date'),
        ('Claude','Remote MCP; current client path still requires a real client test','Connector bearer token; client OAuth not implemented','account.read; sites.read; sites.edit','Shared Zylora registry','NOT RUN','Protocol surface exists; no branded client claim','No test date'),
        ('Manus','MCP connectors; current client path still requires a real client test','Connector bearer token; client OAuth not implemented','account.read; sites.read; sites.edit','Shared Zylora registry','NOT RUN','Protocol surface exists; no branded client claim','No test date'),
        ('Generic MCP client','MCP 2025-06-18 JSON-RPC surface','Connector bearer token','Connector-scoped','tools/list and tools/call','PROTOCOL_COMPATIBLE — local contract test','Real external client interoperability remains untested','2026-09-15'),
        ('REST / function adapter','Versioned REST tool service','Connector bearer token','Connector-scoped','/api/agent/tools and /api/agent/invoke','PROTOCOL_COMPATIBLE — local contract test','Real external client interoperability remains untested','2026-09-15'),
    ],'Generic REST/MCP protocol compatibility is locally tested. Named third-party integrations remain NOT_CURRENTLY_CERTIFIED until their current client connection flows are exercised.')
    table('external-ai-tool-contract-matrix',['TOOL','REQUIRED SCOPE','READ/WRITE/SENSITIVE','INTERNAL SERVICE','IDEMPOTENT','REVISION-AWARE','TEST'],[
        ('zylora.get_capabilities','account.read','READ','Connector capability registry','Read','N/A','tests/test_agent_gateway.py'),
        ('zylora.list_sites','sites.read','READ','Owned-site access + allowlist','Read','Returns current revisions','tests/test_agent_gateway.py'),
        ('zylora.get_site_revision / zylora.get_site_structure','sites.read','READ','Canonical SiteDocument validation','Read','Returns revision','tests/test_agent_gateway.py'),
        ('zylora.apply_site_patch','sites.edit','WRITE','studio_ai_operations.apply_v4_operations','Durable key + payload binding','Exact CAS required','tests/test_agent_gateway.py'),
        ('publish_site / billing / delete','Not exposed by default','SENSITIVE','No gateway dispatch','N/A','N/A','Registry absence asserted in tests/test_agent_gateway.py'),
    ],'REST and MCP transports dispatch through one internal typed tool service. Deterministic agent patches do not reserve AI credits.')
    table('connector-security-matrix',['THREAT','EXPECTED CONTROL','TEST','RESULT','EVIDENCE'],[
        ('Missing/expired/revoked token','Resource-bound credentials; server revocation','Revoked token rejects with 401','PASS','tests/test_agent_gateway.py'),
        ('Scope escalation','Server scopes; sensitive scopes off by default','Read cannot edit; publish absent','PASS','tests/test_agent_gateway.py'),
        ('Cross-tenant/allowlist escape','Ownership plus selected-site restriction','Foreign site rejected','PASS','tests/test_agent_gateway.py'),
        ('Replay','Per-connector durable idempotency with payload binding','Same key replay; changed payload conflict','PASS','tests/test_agent_gateway.py'),
        ('Lost update','Atomic revision CAS','Stale base revision rejected','PASS','tests/test_agent_gateway.py'),
        ('Injection','Typed operations and executable payload rejection','Typed patch path; unsafe fields rejected','PASS / focused','app/agent_gateway.py; studio_ai_operations.py'),
        ('Secret leakage','Minimum response/audit fields','Hash and token excluded from listings','PASS','tests/test_agent_gateway.py'),
        ('Abuse / rate limit','Durable per-connector fixed-window limiter','Connector requests are bounded at 120 per minute','IMPLEMENTED / code path','app/agent_gateway.py; app/security.py'),
        ('Unmetered hosted inference','Deterministic edits bypass AI billing','No provider call in gateway service','PASS / code path','app/agent_gateway.py'),
    ])
    print(json.dumps({'routes':len(routes),'requirements':len(headings),'output':str(OUT)}))


if __name__ == '__main__':
    main()
