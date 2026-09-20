import type { Provider } from '@onlook/code-provider';
import { EXCLUDED_SYNC_PATHS } from '@onlook/constants';
import type { CodeFileSystem } from '@onlook/file-system';
import { type FileEntry } from '@onlook/file-system';
import type { Branch, RouterConfig } from '@onlook/models';
import { makeAutoObservable, reaction } from 'mobx';
import type { EditorEngine } from '../engine';
import type { ErrorManager } from '../error';
import { GitManager } from '../git';
import { detectRouterConfig } from '../pages/helper';
import { copyPreloadScriptToPublic, getLayoutPath as detectLayoutPath } from './preload-script';
import { SessionManager } from './session';

export enum PreloadScriptState {
    NOT_INJECTED = 'not-injected',
    LOADING = 'loading',
    INJECTED = 'injected'
}
export class SandboxManager {
    readonly session: SessionManager;
    readonly gitManager: GitManager;
    private providerReactionDisposer?: () => void;
    preloadScriptState: PreloadScriptState = PreloadScriptState.NOT_INJECTED
    routerConfig: RouterConfig | null = null;

    constructor(
        private branch: Branch,
        private readonly editorEngine: EditorEngine,
        private readonly errorManager: ErrorManager,
        private readonly fs: CodeFileSystem,
    ) {
        this.session = new SessionManager(this.branch, this.errorManager, this.editorEngine.projectId);
        this.gitManager = new GitManager(this);
        makeAutoObservable(this);
    }

    async init() {
        // Start connection asynchronously (don't wait)
        if (!this.session.provider) {
            this.session.start(this.branch.sandbox.id).catch(err => {
                console.error('[SandboxManager] Initial connection failed:', err);
                // Don't throw - let reaction handle retries/reconnects
            });
        }

        // React to provider becoming available (now or later)
        this.providerReactionDisposer = reaction(
            () => this.session.provider,
            async (provider) => {
                if (provider) {
                    await this.initializeSyncEngine(provider);
                    await this.gitManager.init();
                }
            },
            { fireImmediately: true },
        );
    }

    async getRouterConfig(): Promise<RouterConfig | null> {
        if (!!this.routerConfig) {
            return this.routerConfig;
        }
        if (!this.session.provider) {
            return null;
        }
        this.routerConfig = await detectRouterConfig(this.session.provider);
        if (!this.routerConfig) {
            // Vite workspaces do not expose a Next.js router config. The
            // Zylora workspace adapter installs the preview preload directly
            // into public/ and the entrypoint carries the corresponding tag.
            // Treat that explicit state as the supported router boundary.
            try {
                const index = await this.fs.readFile('index.html');
                const preload = await this.fs.exists('public/onlook-preload-script.js');
                if (preload && typeof index === 'string' && index.includes('/onlook-preload-script.js')) {
                    this.routerConfig = { type: 'vite' } as RouterConfig;
                }
            } catch {
                // Keep null so unsupported projects fail closed.
            }
        }
        return this.routerConfig;
    }

    async initializeSyncEngine(provider?: any) {
        await this.ensurePreloadScriptExists();
    }

    private async ensurePreloadScriptExists(): Promise<void> {
        try {
            if (this.preloadScriptState !== PreloadScriptState.NOT_INJECTED
            ) {
                return;
            }

            this.preloadScriptState = PreloadScriptState.LOADING

            if (!this.session.provider) {
                throw new Error('No provider available for preload script injection');
            }

            // Zylora installs the preview hooks server-side when a Vite
            // workspace starts. Reusing that durable state avoids a second
            // client-side write (and a stale-CSRF race) while keeping the
            // upstream Next.js injector available for supported router types.
            try {
                const index = await this.fs.readFile('index.html');
                const preload = await this.fs.exists('public/onlook-preload-script.js');
                if (preload && typeof index === 'string' && index.includes('/onlook-preload-script.js')) {
                    this.preloadScriptState = PreloadScriptState.INJECTED;
                    return;
                }
                // Vite workspaces are instrumented by the Zylora server just
                // before the preview process starts. Their index file is the
                // durable source signal; never attempt a browser-side write
                // before that server boundary has completed.
                const packageJson = await this.fs.readFile('package.json');
                if (typeof index === 'string' && typeof packageJson === 'string' && /"vite"\s*:/.test(packageJson)) {
                    this.preloadScriptState = PreloadScriptState.INJECTED;
                    return;
                }
            } catch {
                // Continue to the router-specific injector below.
            }

            const routerConfig = await this.getRouterConfig();
            if (!routerConfig) {
                throw new Error('No router config found for preload script injection');
            }

            await copyPreloadScriptToPublic(this.session.provider, routerConfig);
            this.preloadScriptState = PreloadScriptState.INJECTED
        } catch (error) {
            console.error('[SandboxManager] Failed to ensure preload script exists:', error);
            // Mark as injected to prevent blocking frames indefinitely
            // Frames will handle the missing preload script gracefully
            this.preloadScriptState = PreloadScriptState.NOT_INJECTED
        }
    }

    async getLayoutPath(): Promise<string | null> {
        const routerConfig = await this.getRouterConfig();
        if (!routerConfig) {
            return null;
        }
        return detectLayoutPath(routerConfig, (path) => this.fileExists(path));
    }

    get errors() {
        return this.errorManager.errors;
    }

    get syncEngine() {
        return this.sync;
    }

    async readFile(path: string): Promise<string | Uint8Array> {
        if (!this.fs) throw new Error('File system not initialized');
        return this.fs.readFile(path);
    }

    async writeFile(path: string, content: string | Uint8Array): Promise<void> {
        if (!this.fs) throw new Error('File system not initialized');
        return this.fs.writeFile(path, content);
    }

    listAllFiles() {
        if (!this.fs) throw new Error('File system not initialized');
        return this.fs.listAll();
    }

    async readDir(dir: string): Promise<FileEntry[]> {
        if (!this.fs) throw new Error('File system not initialized');
        return this.fs.readDirectory(dir);
    }

    async listFilesRecursively(dir: string): Promise<string[]> {
        if (!this.fs) throw new Error('File system not initialized');
        return this.fs.listFiles(dir);
    }

    async fileExists(path: string): Promise<boolean> {
        if (!this.fs) throw new Error('File system not initialized');
        return this.fs?.exists(path);
    }

    async copyFile(path: string, targetPath: string): Promise<void> {
        if (!this.fs) throw new Error('File system not initialized');
        return this.fs.copyFile(path, targetPath);
    }

    async copyDirectory(path: string, targetPath: string): Promise<void> {
        if (!this.fs) throw new Error('File system not initialized');
        return this.fs.copyDirectory(path, targetPath);
    }

    async deleteFile(path: string): Promise<void> {
        if (!this.fs) throw new Error('File system not initialized');
        return this.fs.deleteFile(path);
    }

    async deleteDirectory(path: string): Promise<void> {
        if (!this.fs) throw new Error('File system not initialized');
        return this.fs.deleteDirectory(path);
    }

    async rename(oldPath: string, newPath: string): Promise<void> {
        if (!this.fs) throw new Error('File system not initialized');
        return this.fs.moveFile(oldPath, newPath);
    }

    // Download the code as a zip
    async downloadFiles(
        projectName?: string,
    ): Promise<{ downloadUrl: string; fileName: string } | null> {
        if (!this.session.provider) {
            console.error('No sandbox provider found for download');
            return null;
        }
        try {
            const { url } = await this.session.provider.downloadFiles({
                args: {
                    path: './',
                },
            });
            return {
                // in case there is no URL provided then the code must be updated
                // to handle this case
                downloadUrl: url ?? '',
                fileName: `${projectName ?? 'onlook-project'}-${Date.now()}.zip`,
            };
        } catch (error) {
            console.error('Error generating download URL:', error);
            return null;
        }
    }

    clear() {
        this.providerReactionDisposer?.();
        this.providerReactionDisposer = undefined;
        this.sync?.release();
        this.sync = null;
        this.preloadScriptState = PreloadScriptState.NOT_INJECTED
        this.session.clear();
    }
}
