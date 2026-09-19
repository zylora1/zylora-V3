import debounce from 'lodash.debounce';

import { ONLOOK_CACHE_DIRECTORY, ONLOOK_PRELOAD_SCRIPT_FILE } from '@onlook/constants';
import { RouterType } from '@onlook/models';
import {
    addOidsToAst,
    createTemplateNodeMap,
    formatContent,
    getAstFromContent,
    getContentFromAst,
    getContentFromTemplateNode,
    injectPreloadScript,
} from '@onlook/parser';
import { isRootLayoutFile, pathsEqual } from '@onlook/utility';

import type { JsxElementMetadata } from './index-cache';
import { FileSystem } from './fs';
import type { FileChangeEvent, FileEntry } from './types';
import type { ZyloraCodeFileSystemAdapter } from '../../zylora/adapters/ZyloraCodeFileSystemAdapter';
import {
    clearIndexCache,
    getIndexFromCache,
    getOrLoadIndex,
    saveIndexToCache,
} from './index-cache';

export type { JsxElementMetadata } from './index-cache';

export interface CodeEditorOptions {
    routerType?: RouterType;
}

/**
 * The upstream implementation.  It remains the cache/index implementation,
 * while ZyloraCodeFileSystem below makes the Zylora workspace authoritative.
 */
export class OnlookCodeFileSystem extends FileSystem {
    protected readonly projectId: string;
    protected readonly branchId: string;
    private options: Required<CodeEditorOptions>;
    private indexPath = `${ONLOOK_CACHE_DIRECTORY}/index.json`;

    constructor(projectId: string, branchId: string, options: CodeEditorOptions = {}) {
        super(`/${projectId}/${branchId}`);
        this.projectId = projectId;
        this.branchId = branchId;
        this.options = {
            routerType: options.routerType ?? RouterType.APP,
        };
    }

    async writeFile(path: string, content: string | Uint8Array): Promise<void> {
        if (this.isJsxFile(path) && typeof content === 'string') {
            const processedContent = await this.processJsxFile(path, content);
            await super.writeFile(path, processedContent);
        } else {
            await super.writeFile(path, content);
        }
    }

    async writeFiles(files: Array<{ path: string; content: string | Uint8Array }>): Promise<void> {
        // Write files sequentially to avoid race conditions to metadata file
        for (const { path, content } of files) {
            await this.writeFile(path, content);
        }
    }

    private async processJsxFile(path: string, content: string): Promise<string> {
        let processedContent = content;

        const ast = getAstFromContent(content);
        if (ast) {
            if (isRootLayoutFile(path, this.options.routerType)) {
                injectPreloadScript(ast);
            }

            const existingOids = await this.getFileOids(path);
            const { ast: processedAst } = addOidsToAst(ast, existingOids);

            processedContent = await getContentFromAst(processedAst, content);
        } else {
            console.warn(`Failed to parse ${path}, skipping OID injection but will still format`);
        }

        const formattedContent = await formatContent(path, processedContent);
        await this.updateMetadataForFile(path, formattedContent);

        return formattedContent;
    }

    private async getFileOids(path: string): Promise<Set<string>> {
        const index = await this.loadIndex();

        const oids = new Set<string>();
        for (const [oid, metadata] of Object.entries(index)) {
            if (pathsEqual(metadata.path, path)) {
                oids.add(oid);
            }
        }
        return oids;
    }

    private async updateMetadataForFile(path: string, content: string): Promise<void> {
        const index = await this.loadIndex();

        for (const [oid, metadata] of Object.entries(index)) {
            if (pathsEqual(metadata.path, path)) {
                delete index[oid];
            }
        }

        const ast = getAstFromContent(content);
        if (!ast) return;

        const templateNodeMap = createTemplateNodeMap({
            ast,
            filename: path,
            branchId: this.branchId,
        });

        for (const [oid, node] of templateNodeMap.entries()) {
            const code = await getContentFromTemplateNode(node, content);
            const metadata: JsxElementMetadata = {
                ...node,
                oid,
                code: code || '',
            };
            index[oid] = metadata;
        }

        await this.saveIndex(index);
    }

    async getJsxElementMetadata(oid: string): Promise<JsxElementMetadata | undefined> {
        const index = await this.loadIndex();
        const metadata = index[oid];
        if (!metadata) {
            console.warn(
                `[CodeEditorApi] No metadata found for OID: ${oid}. Total index size: ${Object.keys(index).length}`,
            );
        }
        return metadata;
    }

    async rebuildIndex(): Promise<void> {
        const startTime = Date.now();
        const index: Record<string, JsxElementMetadata> = {};

        const entries = await this.listAll();
        const jsxFiles = entries.filter(
            (entry) => entry.type === 'file' && this.isJsxFile(entry.path),
        );

        const BATCH_SIZE = 10;
        let processedCount = 0;

        for (let i = 0; i < jsxFiles.length; i += BATCH_SIZE) {
            const batch = jsxFiles.slice(i, i + BATCH_SIZE);
            await Promise.all(
                batch.map(async (entry) => {
                    try {
                        const content = await this.readFile(entry.path);
                        if (typeof content === 'string') {
                            const ast = getAstFromContent(content);
                            if (!ast) return;

                            const templateNodeMap = createTemplateNodeMap({
                                ast,
                                filename: entry.path,
                                branchId: this.branchId,
                            });

                            for (const [oid, node] of templateNodeMap.entries()) {
                                const code = await getContentFromTemplateNode(node, content);
                                index[oid] = {
                                    ...node,
                                    oid,
                                    code: code || '',
                                };
                            }

                            processedCount++;
                        }
                    } catch (error) {
                        console.error(`Error indexing ${entry.path}:`, error);
                    }
                }),
            );
        }

        await this.saveIndex(index);

        const duration = Date.now() - startTime;
        console.log(
            `[CodeEditorApi] Index built: ${Object.keys(index).length} elements from ${processedCount} files in ${duration}ms`,
        );
    }

    async deleteFile(path: string): Promise<void> {
        await super.deleteFile(path);

        if (this.isJsxFile(path)) {
            const index = await this.loadIndex();
            let hasChanges = false;

            for (const [oid, metadata] of Object.entries(index)) {
                if (pathsEqual(metadata.path, path)) {
                    delete index[oid];
                    hasChanges = true;
                }
            }

            if (hasChanges) {
                await this.saveIndex(index);
            }
        }
    }

    async moveFile(oldPath: string, newPath: string): Promise<void> {
        await super.moveFile(oldPath, newPath);

        if (this.isJsxFile(oldPath) && this.isJsxFile(newPath)) {
            const index = await this.loadIndex();
            let hasChanges = false;

            for (const metadata of Object.values(index)) {
                if (pathsEqual(metadata.path, oldPath)) {
                    metadata.path = newPath;
                    hasChanges = true;
                }
            }

            if (hasChanges) {
                await this.saveIndex(index);
            }
        }
    }

    private async loadIndex(): Promise<Record<string, JsxElementMetadata>> {
        return getOrLoadIndex(this.getCacheKey(), this.indexPath, (path) => this.readFile(path));
    }

    private async saveIndex(index: Record<string, JsxElementMetadata>): Promise<void> {
        saveIndexToCache(this.getCacheKey(), index);
        void this.debouncedSaveIndexToFile();
    }

    private async undobounceSaveIndexToFile(): Promise<void> {
        try {
            await this.createDirectory(ONLOOK_CACHE_DIRECTORY);
        } catch {
            console.warn(`[CodeEditorApi] Failed to create ${ONLOOK_CACHE_DIRECTORY} directory`);
        }
        const index = getIndexFromCache(this.getCacheKey());
        if (index) {
            const serialized = JSON.stringify(index);
            try {
                await super.writeFile(this.indexPath, serialized);
            } catch (error) {
                // ZenFS backends can surface a stale EEXIST when two editor
                // consumers flush the same cache index at once.  The index is
                // transient parser metadata, never the durable Zylora source;
                // replace the stale cache entry and retry once rather than
                // leaking an unhandled rejection into the editor page.
                const code = (error as { code?: string } | null)?.code;
                if (code !== 'EEXIST' && !String(error).includes('already exists')) {
                    console.warn('[CodeEditorApi] Failed to persist transient index cache', error);
                    return;
                }
                try {
                    await super.deleteFile(this.indexPath);
                    await super.writeFile(this.indexPath, serialized);
                } catch (retryError) {
                    console.warn('[CodeEditorApi] Failed to replace transient index cache', retryError);
                }
            }
        }
    }

    private debouncedSaveIndexToFile = debounce(this.undobounceSaveIndexToFile, 1000);

    private isJsxFile(path: string): boolean {
        // Exclude the onlook preload script from JSX processing
        if (path.endsWith(ONLOOK_PRELOAD_SCRIPT_FILE)) {
            return false;
        }
        return /\.(jsx?|tsx?)$/i.test(path);
    }

    async cleanup(): Promise<void> {
        const cacheKey = this.getCacheKey();
        if (getIndexFromCache(cacheKey)) {
            await this.undobounceSaveIndexToFile();
        }

        clearIndexCache(cacheKey);
    }

    private getCacheKey(): string {
        return `${this.projectId}/${this.branchId}`;
    }
}

const runtimeFileSystems = new Map<string, ZyloraCodeFileSystem>();

function runtimeKey(projectId: string, branchId: string): string {
    return `${projectId}/${branchId}`;
}

function isRuntimeCachePath(path: string): boolean {
    const normalized = path.replaceAll('\\', '/').replace(/^\/+/, '');
    return normalized === '.onlook' || normalized.startsWith('.onlook/');
}

/**
 * Zylora's editor-facing filesystem.  ZenFS is deliberately retained only as
 * the transient parser/index cache used by the upstream editor.  Source files
 * are read and written through the tenant-scoped Zylora adapter.
 */
export class ZyloraCodeFileSystem extends OnlookCodeFileSystem {
    private readonly disposers: Array<() => void> = [];
    private durableReady = false;
    private initializePromise: Promise<void> | null = null;

    constructor(
        projectId: string,
        branchId: string,
        options: CodeEditorOptions = {},
        private readonly durableAdapter?: ZyloraCodeFileSystemAdapter,
    ) {
        super(projectId, branchId, options);
    }

    async initialize(): Promise<void> {
        if (this.durableReady) return;
        if (this.initializePromise) return this.initializePromise;

        // BranchManager and useFS can request initialization in the same
        // render window.  Coalesce those requests so ZenFS is initialized and
        // hydrated exactly once; otherwise the second mkdir/write race can
        // surface as an EEXIST page error in the real editor runtime.
        this.initializePromise = (async () => {
            await super.initialize();
            if (!this.durableAdapter) {
                throw new Error('Zylora filesystem adapter is required for Code Studio');
            }

            // Hydrate the parser/index cache once.  This is intentionally a
            // cache operation; future source reads do not trust ZenFS.
            const files = await this.durableAdapter.list();
            for (const file of files) {
                try {
                    const content = await this.durableAdapter.read(file.path);
                    await super.writeFile(file.path, content);
                } catch (error) {
                    console.warn(`[Zylora filesystem] failed to hydrate ${file.path}`, error);
                }
            }
            this.durableReady = true;
        })();

        try {
            await this.initializePromise;
        } catch (error) {
            this.durableReady = false;
            throw error;
        } finally {
            this.initializePromise = null;
        }
    }

    private requireAdapter(): ZyloraCodeFileSystemAdapter {
        if (!this.durableAdapter) {
            throw new Error('Zylora filesystem adapter is required for Code Studio');
        }
        return this.durableAdapter;
    }

    override async readFile(path: string): Promise<string | Uint8Array> {
        if (isRuntimeCachePath(path)) return super.readFile(path);
        return this.requireAdapter().read(path);
    }

    override async writeFile(path: string, content: string | Uint8Array): Promise<void> {
        if (isRuntimeCachePath(path)) {
            await super.writeFile(path, content);
            return;
        }

        // Let the upstream parser preserve OIDs/formatting in the cache, then
        // persist the transformed source from that cache through Zylora.
        await super.writeFile(path, content);
        const transformed = await super.readFile(path);
        if (typeof transformed === 'string') {
            await this.requireAdapter().write(path, transformed);
        } else {
            throw new Error(`Zylora source writes must be text: ${path}`);
        }
    }

    override async deleteFile(path: string): Promise<void> {
        if (isRuntimeCachePath(path)) {
            await super.deleteFile(path);
            return;
        }
        await this.requireAdapter().delete(path);
        try {
            await super.deleteFile(path);
        } catch {
            // The durable operation is authoritative; cache cleanup is best effort.
        }
    }

    override async moveFile(oldPath: string, newPath: string): Promise<void> {
        if (isRuntimeCachePath(oldPath) || isRuntimeCachePath(newPath)) {
            await super.moveFile(oldPath, newPath);
            return;
        }
        const content = await this.requireAdapter().read(oldPath);
        await this.requireAdapter().write(newPath, content);
        await this.requireAdapter().delete(oldPath);
        try {
            await super.moveFile(oldPath, newPath);
        } catch {
            // Cache state is reconstructed from durable source on the next boot.
        }
    }

    override async readDirectory(path = '/'): Promise<FileEntry[]> {
        if (isRuntimeCachePath(path)) return super.readDirectory(path);
        const normalized = path.replaceAll('\\', '/').replace(/^\/+|\/+$/g, '');
        const prefix = normalized ? `${normalized}/` : '';
        const files = (await this.requireAdapter().list())
            .map((entry) => entry.path.replaceAll('\\', '/'))
            .filter((filePath) => filePath.startsWith(prefix));
        const root: FileEntry[] = [];
        const nodes = new Map<string, FileEntry>();
        for (const filePath of files) {
            const relative = filePath.slice(prefix.length);
            const parts = relative.split('/').filter(Boolean);
            let current = '';
            let children = root;
            parts.forEach((part, index) => {
                current = current ? `${current}/${part}` : part;
                const existing = nodes.get(current);
                if (existing) {
                    children = existing.children ?? (existing.children = []);
                    return;
                }
                const isDirectory = index < parts.length - 1;
                const entry: FileEntry = {
                    name: part,
                    path: current,
                    isDirectory,
                    size: isDirectory ? 0 : undefined,
                    children: isDirectory ? [] : undefined,
                };
                nodes.set(current, entry);
                children.push(entry);
                children = entry.children ?? children;
            });
        }
        return root;
    }

    override async listAll(): Promise<Array<{ path: string; type: 'file' | 'directory' }>> {
        return (await this.requireAdapter().list()).map((entry) => ({ path: entry.path, type: 'file' as const }));
    }

    override async listFiles(pattern = '**/*'): Promise<string[]> {
        const files = (await this.requireAdapter().list()).map((entry) => entry.path);
        if (!pattern.includes('*')) return files.filter((filePath) => filePath === pattern);
        const escapedPattern = pattern
            .split('*')
            .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
            .join('.*');
        const regex = new RegExp(`^${escapedPattern}$`);
        return files.filter((filePath) => regex.test(filePath));
    }

    override async exists(path: string): Promise<boolean> {
        if (isRuntimeCachePath(path)) return super.exists(path);
        return this.requireAdapter().exists(path);
    }

    override watchFile(path: string, callback: (event: FileChangeEvent) => void): () => void {
        if (isRuntimeCachePath(path)) return super.watchFile(path, callback);
        let lastContent: string | null = null;
        let active = true;
        const poll = async () => {
            if (!active) return;
            try {
                const next = await this.requireAdapter().read(path);
                if (lastContent !== null && next !== lastContent) callback({ type: 'update', path });
                lastContent = next;
            } catch {
                // Missing files are handled by the editor's normal error path.
            }
        };
        void poll();
        const timer = window.setInterval(() => void poll(), 750);
        const dispose = () => {
            active = false;
            window.clearInterval(timer);
        };
        this.disposers.push(dispose);
        return dispose;
    }

    override watchDirectory(path: string, callback: (event: FileChangeEvent) => void): () => void {
        if (isRuntimeCachePath(path)) return super.watchDirectory(path, callback);
        let previous = '';
        let active = true;
        const poll = async () => {
            if (!active) return;
            try {
                const next = (await this.requireAdapter().list(path)).map((file) => file.path).sort().join('\n');
                if (previous && next !== previous) callback({ type: 'update', path });
                previous = next;
            } catch {
                // Missing directories are handled by the editor's normal error path.
            }
        };
        void poll();
        const timer = window.setInterval(() => void poll(), 750);
        const dispose = () => {
            active = false;
            window.clearInterval(timer);
        };
        this.disposers.push(dispose);
        return dispose;
    }

    override async cleanup(): Promise<void> {
        this.disposers.splice(0).forEach((dispose) => dispose());
        await super.cleanup();
        this.durableReady = false;
        this.initializePromise = null;
    }
}

export function registerRuntimeFileSystem(fileSystem: ZyloraCodeFileSystem): void {
    runtimeFileSystems.set(runtimeKey(fileSystem.projectId, fileSystem.branchId), fileSystem);
}

export function getRuntimeFileSystem(projectId: string, branchId: string): ZyloraCodeFileSystem | null {
    return runtimeFileSystems.get(runtimeKey(projectId, branchId)) ?? null;
}

export function unregisterRuntimeFileSystem(projectId: string, branchId: string): void {
    runtimeFileSystems.delete(runtimeKey(projectId, branchId));
}

// Keep the upstream import contract intact while ensuring all runtime users
// resolve to the adapter-backed implementation.
export { ZyloraCodeFileSystem as CodeFileSystem };
