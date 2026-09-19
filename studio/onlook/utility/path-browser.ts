// Complete Browser Path Polyfill for Vite Studio Bundle

function normalize(p: string): string {
    if (!p || typeof p !== 'string') return '';
    const isAbs = p.startsWith('/') || /^[a-zA-Z]:[/\\]/.test(p);
    const parts = p.replace(/\\/g, '/').split('/').filter(Boolean);
    const resolved: string[] = [];
    for (const part of parts) {
        if (part === '..') {
            resolved.pop();
        } else if (part !== '.') {
            resolved.push(part);
        }
    }
    return (isAbs ? '/' : '') + resolved.join('/');
}

function isAbsolute(p: string): boolean {
    if (!p || typeof p !== 'string') return false;
    return p.startsWith('/') || /^[a-zA-Z]:[/\\]/.test(p);
}

function join(...paths: string[]): string {
    return normalize(paths.filter(Boolean).join('/'));
}

function resolve(...paths: string[]): string {
    return normalize(paths.filter(Boolean).join('/'));
}

function extname(p: string): string {
    const base = basename(p);
    const idx = base.lastIndexOf('.');
    return idx > 0 ? base.slice(idx) : '';
}

function basename(p: string, ext?: string): string {
    if (!p || typeof p !== 'string') return '';
    const normalized = p.replace(/\\/g, '/').replace(/\/$/, '');
    const lastIdx = normalized.lastIndexOf('/');
    const base = lastIdx >= 0 ? normalized.slice(lastIdx + 1) : normalized;
    if (ext && base.endsWith(ext)) {
        return base.slice(0, -ext.length);
    }
    return base;
}

function dirname(p: string): string {
    if (!p || typeof p !== 'string') return '.';
    const normalized = p.replace(/\\/g, '/').replace(/\/$/, '');
    const lastIdx = normalized.lastIndexOf('/');
    return lastIdx > 0 ? normalized.slice(0, lastIdx) : (normalized.startsWith('/') ? '/' : '.');
}

function relative(from: string, to: string): string {
    const fromParts = normalize(from).split('/').filter(Boolean);
    const toParts = normalize(to).split('/').filter(Boolean);
    let common = 0;
    while (common < fromParts.length && common < toParts.length && fromParts[common] === toParts[common]) {
        common++;
    }
    const up = fromParts.slice(common).map(() => '..');
    const down = toParts.slice(common);
    return [...up, ...down].join('/') || '.';
}

const pathPolyfill = {
    sep: '/',
    normalize,
    isAbsolute,
    join,
    resolve,
    relative,
    extname,
    basename,
    dirname,
    posix: {
        sep: '/',
        normalize,
        isAbsolute,
        join,
        resolve,
        relative,
        extname,
        basename,
        dirname,
    }
};

export { normalize, isAbsolute, join, resolve, relative, extname, basename, dirname };
export const sep = '/';
export const posix = pathPolyfill.posix;
export default pathPolyfill;
