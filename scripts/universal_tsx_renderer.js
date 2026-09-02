const fs = require('fs');
const path = require('path');
const Module = require('module');
const ts = require('typescript');

const ROOT = path.resolve(process.argv[2]);
const ENTRY = path.resolve(process.argv[3]);
const OUT = path.resolve(process.argv[4]);

const Fragment = Symbol.for('zy.fragment');

function jsx(type, props, key) {
  return { __v: 1, type, props: props || {}, key };
}
const jsxs = jsx;

function flat(v, out = []) {
  if (Array.isArray(v)) for (const x of v) flat(x, out);
  else if (v !== null && v !== undefined && v !== false && v !== true) out.push(v);
  return out;
}

class Component {
  constructor(props) { this.props = props || {}; this.state = {}; }
  setState(v) { this.state = { ...this.state, ...(typeof v === 'function' ? v(this.state, this.props) : v) }; }
}
class PureComponent extends Component {}

const React = {
  Component, PureComponent,
  createElement: (type, props, ...children) => jsx(type, { ...(props || {}), children: children.length <= 1 ? children[0] : children }),
  Fragment,
  useState: (v) => [typeof v === 'function' ? v() : v, () => {}],
  useEffect: () => {}, useLayoutEffect: () => {},
  useMemo: (fn) => fn(), useCallback: (fn) => fn, useRef: (v) => ({ current: v }),
  useId: () => 'zy-' + Math.random().toString(36).slice(2, 8),
  useReducer: (r, v) => [v, () => {}],
  createContext: (v) => {
    const c = { _default: v };
    c.Provider = ({ children, value }) => { c._default = value; return children; };
    c.Consumer = ({ children }) => typeof children === 'function' ? children(c._default) : children;
    return c;
  },
  useContext: (c) => c && c._default,
  forwardRef: (fn) => (props) => fn(props, null),
  memo: (fn) => fn,
  cloneElement: (el, props, ...kids) => ({
    ...el,
    props: { ...(el.props || {}), ...(props || {}), ...(kids.length ? { children: kids.length === 1 ? kids[0] : kids } : {}) }
  }),
  isValidElement: (x) => !!(x && x.__v),
  Children: { toArray: (x) => flat(x), map: (x, fn) => flat(x).map(fn), count: (x) => flat(x).length, only: (x) => flat(x)[0] },
};

function tagComp(tag) { return function Comp(props) { return jsx(tag, props); }; }
function iconComp(props) {
  return jsx('svg', { ...props, viewBox: '0 0 24 24', 'aria-hidden': 'true', children: jsx('path', { d: 'M4 12h16M12 4v16', stroke: 'currentColor', 'stroke-width': '1.5', fill: 'none' }) });
}

const genericComponentProxy = new Proxy(function () { return null; }, {
  apply(t, thisArg, args) { const p = args[0] || {}; return p && typeof p === 'object' && ('children' in p) ? p.children : null; },
  get(t, k) { if (k === '__esModule') return true; if (k === 'default') return t; return iconComp; }
});

const motion = new Proxy({}, { get: (o, k) => tagComp(String(k)) });

const STUBS = {
  'react': React,
  'react/jsx-runtime': { jsx, jsxs, Fragment },
  'react/jsx-dev-runtime': { jsxDEV: jsx, Fragment },
  'next/image': { __esModule: true, default: (p) => jsx('img', { ...p, src: (p && p.src && p.src.src) || p.src }) },
  'next/link': { __esModule: true, default: tagComp('a') },
  'next/navigation': { useRouter: () => ({ push: () => {}, replace: () => {}, prefetch: () => {} }), usePathname: () => '/', useSearchParams: () => new URLSearchParams(), redirect: () => null, notFound: () => null },
  'next-themes': { useTheme: () => ({ theme: 'light', setTheme: () => {}, resolvedTheme: 'light' }), ThemeProvider: ({ children }) => children },
  'framer-motion': { motion, AnimatePresence: ({ children }) => children, useInView: () => true, useAnimation: () => ({ start: () => {} }) },
  'next/font/google': new Proxy({}, { get: () => () => ({ className: '', variable: '', style: {} }) }),
  'next/font/local': { __esModule: true, default: () => ({ className: '', variable: '', style: {} }) },
  'clsx': Object.assign((...a) => a.flat(Infinity).filter(Boolean).map(x => typeof x === 'object' ? Object.keys(x).filter(k => x[k]).join(' ') : x).join(' '), { clsx: (...a) => a.flat(Infinity).filter(Boolean).map(x => typeof x === 'object' ? Object.keys(x).filter(k => x[k]).join(' ') : x).join(' ') }),
  'class-variance-authority': { cva: () => () => '', cx: (...a) => a.filter(Boolean).join(' ') },
  'tailwind-merge': { twMerge: (...a) => a.filter(Boolean).join(' ') },
  'lucide-react': new Proxy({}, { get: (o, k) => k === '__esModule' ? true : iconComp }),
};

if (!global.window) global.window = { innerWidth: 1440, addEventListener: () => {}, removeEventListener: () => {}, matchMedia: () => ({ matches: false, addEventListener: () => {}, removeEventListener: () => {} }), location: { href: '', pathname: '/' } };
if (!global.document) global.document = { documentElement: {}, body: {}, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, addEventListener: () => {}, removeEventListener: () => {} };
if (!global.navigator) global.navigator = { clipboard: { writeText: async () => {} } };
if (!global.IntersectionObserver) global.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };

function resolveLocal(request, parent) {
  let base;
  if (request.startsWith('@/')) {
    base = path.join(ROOT, request.slice(2));
    if (!fs.existsSync(base) && fs.existsSync(path.join(ROOT, 'src', request.slice(2)))) {
      base = path.join(ROOT, 'src', request.slice(2));
    }
  } else if (request.startsWith('~/')) {
    base = path.join(ROOT, request.slice(2));
  } else if (request.startsWith('.')) {
    base = path.resolve(path.dirname(parent.filename), request);
  } else {
    // Check if relative to ROOT
    const cand = path.resolve(ROOT, request);
    if (fs.existsSync(cand)) base = cand;
    else return null;
  }
  const candidates = [base, ...['.tsx', '.ts', '.jsx', '.js', '.json'].map(e => base + e), ...['index.tsx', 'index.ts', 'index.jsx', 'index.js'].map(f => path.join(base, f))];
  for (const c of candidates) if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  return null;
}

const origLoad = Module._load;
Module._load = function (request, parent, isMain) {
  if (STUBS[request]) return STUBS[request];
  if (request.startsWith('@fortawesome/')) return new Proxy({}, { get: (o, k) => k === '__esModule' ? true : (k === 'FontAwesomeIcon' ? iconComp : { iconName: String(k) }) });
  if (request.startsWith('@radix-ui/')) return new Proxy({}, { get: (o, k) => k === '__esModule' ? true : tagComp(k === 'Root' ? 'div' : k === 'Trigger' ? 'button' : 'div') });
  if (request.startsWith('@headlessui/react')) return new Proxy({}, { get: (o, k) => k === '__esModule' ? true : tagComp(k === 'Button' ? 'button' : 'div') });
  if (request.startsWith('lucide-react')) return new Proxy({}, { get: (o, k) => k === '__esModule' ? true : iconComp });
  
  const local = parent ? resolveLocal(request, parent) : null;
  if (local) return origLoad(local, parent, isMain);
  
  try {
    return origLoad(request, parent, isMain);
  } catch (e) {
    if (!request.startsWith('.') && !path.isAbsolute(request)) return genericComponentProxy;
    throw e;
  }
};

function compileExt(mod, filename) {
  let src = fs.readFileSync(filename, 'utf8');
  // strip 'use client'
  src = src.replace(/['"]use client['"];?/g, '');
  const out = ts.transpileModule(src, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
      resolveJsonModule: true
    }
  }).outputText;
  mod._compile(out, filename);
}

for (const ext of ['.tsx', '.ts', '.jsx']) Module._extensions[ext] = compileExt;
Module._extensions['.css'] = (m, f) => m.exports = new Proxy({}, { get: (o, k) => String(k) });
for (const ext of ['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.svg']) {
  Module._extensions[ext] = (m, f) => {
    let rel = path.relative(ROOT, f).split(path.sep).join('/');
    m.exports = { __esModule: true, default: '../assets/' + rel.replace(/^public\//, ''), src: '../assets/' + rel.replace(/^public\//, '') };
  };
}

function esc(s, attr = false) {
  s = String(s ?? '');
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(attr ? /"/g : /\u0000/g, attr ? '&quot;' : '');
}

function styleObj(o) {
  if (!o || typeof o !== 'object') return '';
  return Object.entries(o)
    .filter(([k, v]) => v != null && typeof v !== 'object')
    .map(([k, v]) => k.replace(/[A-Z]/g, m => '-' + m.toLowerCase()) + ':' + (typeof v === 'number' && v !== 0 && !['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'order'].includes(k) ? v + 'px' : v))
    .join(';');
}

async function render(node) {
  if (node == null || node === false || node === true) return '';
  if (typeof node === 'string' || typeof node === 'number') return esc(node);
  if (Array.isArray(node)) {
    let s = '';
    for (const n of node) s += await render(n);
    return s;
  }
  if (node && typeof node.then === 'function') return render(await node);
  if (!node.__v) {
    if (typeof node === 'object' && node.$$typeof && node.props) return render({ __v: 1, type: node.type, props: node.props });
    return '';
  }
  let { type, props = {} } = node;
  if (type === Fragment) return render(props.children);
  if (typeof type === 'function') {
    try {
      if (type.prototype instanceof Component) {
        const inst = new type(props);
        return render(await inst.render());
      }
      return render(await type(props));
    } catch (e) {
      return `<div data-render-warning="${esc((e && e.message) || 'component error', true)}"></div>`;
    }
  }
  if (typeof type !== 'string') return render(props.children);
  const voids = new Set(['img', 'input', 'br', 'hr', 'meta', 'link', 'source', 'area', 'base', 'col', 'embed', 'param', 'track', 'wbr']);
  let attrs = '';
  for (let [k, v] of Object.entries(props)) {
    if (k === 'children' || k === 'dangerouslySetInnerHTML' || k === 'key' || k === 'ref' || k.startsWith('on') || typeof v === 'function' || v == null || v === false) continue;
    if (k === 'className') {
      k = 'class';
      if (Array.isArray(v)) v = v.flat(Infinity).filter(Boolean).join(' ');
      else if (v && typeof v === 'object') v = Object.entries(v).filter(([kk, vv]) => vv).map(([kk]) => kk).join(' ');
    }
    if (k === 'htmlFor') k = 'for';
    if (k === 'srcSet') k = 'srcset';
    if (k === 'tabIndex') k = 'tabindex';
    if (k === 'style' && typeof v === 'object') v = styleObj(v);
    if (typeof v === 'object') continue;
    if (v === true) attrs += ' ' + k;
    else attrs += ' ' + k + '="' + esc(v, true) + '"';
  }
  let inner = '';
  if (props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html != null) inner = String(props.dangerouslySetInnerHTML.__html);
  else inner = await render(props.children);
  return voids.has(type.toLowerCase()) ? `<${type}${attrs}>` : `<${type}${attrs}>${inner}</${type}>`;
}

(async () => {
  try {
    let mod = require(ENTRY);
    let Comp = mod.default || mod.Home || mod.App || mod.Template || mod;
    let vnode = typeof Comp === 'function' ? await Comp({}) : Comp;
    let html = await render(vnode);
    fs.mkdirSync(path.dirname(OUT), { recursive: true });
    fs.writeFileSync(OUT, html, 'utf8');
    console.log('RENDER_OK ' + OUT + ' (' + html.length + ' bytes)');
  } catch (err) {
    console.error('RENDER_FAIL ' + err.message);
    console.error(err.stack);
    process.exit(1);
  }
})();
