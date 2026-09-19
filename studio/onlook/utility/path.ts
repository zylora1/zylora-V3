import { NEXT_JS_FILE_EXTENSIONS } from '@onlook/constants';
import { RouterType } from '@onlook/models';

// Browser-safe path helpers
export const browserPath = {
    sep: '/',
    normalize(p: string): string {
        if (!p) return '';
        const isAbs = p.startsWith('/');
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
    },
    resolve(...paths: string[]): string {
        const combined = paths.join('/');
        return this.normalize(combined);
    },
    extname(p: string): string {
        const base = this.basename(p);
        const idx = base.lastIndexOf('.');
        return idx > 0 ? base.slice(idx) : '';
    },
    basename(p: string, ext?: string): string {
        const normalized = p.replace(/\\/g, '/').replace(/\/$/, '');
        const lastIdx = normalized.lastIndexOf('/');
        const base = lastIdx >= 0 ? normalized.slice(lastIdx + 1) : normalized;
        if (ext && base.endsWith(ext)) {
            return base.slice(0, -ext.length);
        }
        return base;
    },
    dirname(p: string): string {
        const normalized = p.replace(/\\/g, '/').replace(/\/$/, '');
        const lastIdx = normalized.lastIndexOf('/');
        return lastIdx > 0 ? normalized.slice(0, lastIdx) : (normalized.startsWith('/') ? '/' : '.');
    },
    posix: {
        normalize(p: string): string {
            return p.replace(/\\/g, '/').replace(/\/+/g, '/');
        }
    }
};

const path = browserPath;

function isSubdir(parentDir: string, subdir: string): boolean {
    const parent = normalize(parentDir).replace(/\/$/, '');
    const sub = normalize(subdir).replace(/\/$/, '');
    return sub === parent || sub.startsWith(parent + '/');
}

// Utility to normalize paths for comparison (handles Windows and POSIX)
function normalize(p: string): string {
    if (typeof p !== 'string' || !p) return '';
    let np = p.replace(/\\/g, '/');
    if (typeof np === 'string' && np.length > 0 && /^[A-Za-z]:\//.test(np)) {
        np = np[0]?.toLowerCase() + np.slice(1);
    }
    return np;
}

// isSubdir(parentDir, subdir) returns true if subdir is the same as or inside parentDir
export function isSubdirectory(filePath: string, directories: string[]): boolean {
    const absFilePath = path.resolve(filePath);
    const normFilePath = normalize(absFilePath);
    for (const directory of directories) {
        const absDirectory = path.resolve(directory);
        const normDirectory = normalize(absDirectory);
        if (isSubdir(normDirectory, normFilePath)) {
            return true;
        }
        if (
            !directory.includes(path.sep) &&
            !directory.includes('/') &&
            !directory.includes('\\')
        ) {
            const segments = normFilePath.split('/');
            if (segments.includes(directory)) {
                return true;
            }
        }
        const dirSegments = normalize(directory).split('/').filter(Boolean);
        const fileSegments = normFilePath.split('/').filter(Boolean);
        if (dirSegments.length > 0 && fileSegments.length >= dirSegments.length) {
            for (let i = 0; i <= fileSegments.length - dirSegments.length; i++) {
                let match = true;
                for (let j = 0; j < dirSegments.length; j++) {
                    if (fileSegments[i + j] !== dirSegments[j]) {
                        match = false;
                        break;
                    }
                }
                if (match) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Utility to check if a file matches the conditions
export const isTargetFile = (
    targetFile: string,
    conditions: { fileName: string; targetExtensions: string[]; potentialPaths: string[] },
): boolean => {
    const { fileName, targetExtensions, potentialPaths } = conditions;

    const fileExtWithDot = path.extname(targetFile);
    if (!fileExtWithDot) {
        return false;
    }

    const hasValidExtension = targetExtensions.some((ext) =>
        ext.startsWith('.') ? ext === fileExtWithDot : ext === fileExtWithDot.slice(1),
    );

    if (!hasValidExtension) {
        return false;
    }

    const baseName = path.basename(targetFile, fileExtWithDot);
    if (baseName !== fileName) {
        return false;
    }

    const dirName = normalize(path.dirname(targetFile));
    return potentialPaths.some((p) => normalize(p) === dirName);
};

export const isRootLayoutFile = (
    filePath: string,
    routerType: RouterType = RouterType.APP,
): boolean => {
    const potentialPaths =
        routerType === RouterType.APP ? ['app', 'src/app'] : ['pages', 'src/pages'];
    return isTargetFile(filePath, {
        fileName: 'layout',
        targetExtensions: NEXT_JS_FILE_EXTENSIONS,
        potentialPaths,
    });
};

/**
 * Compare two file paths for equality, handling different formats robustly
 */
export function pathsEqual(path1: string | undefined | null, path2: string | undefined | null): boolean {
    if (!path1 || !path2) return false;
    
    const normalizeForComparison = (p: string) => {
        const clean = p.startsWith('/') ? p.substring(1) : p;
        return path.posix.normalize(clean);
    };
    
    return normalizeForComparison(path1) === normalizeForComparison(path2);
}

export function pathMatchesAny(targetPath: string, paths: string[]): boolean {
    return paths.some(p => pathsEqual(targetPath, p));
}

export function findMatchingPath(targetPath: string, paths: string[]): string | undefined {
    return paths.find(p => pathsEqual(targetPath, p));
}
