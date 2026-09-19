// Zylora Sovereign Code Provider
// Implements Onlook OSS @onlook/code-provider interfaces backed by Zylora local sandbox runtime

export enum CodeProvider {
    CodeSandbox = 'code_sandbox',
    E2B = 'e2b',
    Daytona = 'daytona',
    VercelSandbox = 'vercel_sandbox',
    Modal = 'modal',
    NodeFs = 'node_fs',
    Zylora = 'zylora',
}

export interface WriteFileInput {
    args: {
        path: string;
        content: string | Uint8Array;
        overwrite?: boolean;
    };
}
export interface WriteFileOutput {
    success: boolean;
}

export interface StatFileInput {
    args: {
        path: string;
    };
}
export interface StatFileOutput {
    type: 'file' | 'directory';
    isSymlink?: boolean;
    size?: number;
    mtime?: number;
    ctime?: number;
    atime?: number;
}

export interface RenameFileInput {
    args: {
        oldPath: string;
        newPath: string;
    };
}
export interface RenameFileOutput {}

export interface ListFilesInput {
    args: {
        path: string;
    };
}
export interface ListFilesOutputFile {
    name: string;
    type: 'file' | 'directory';
    isSymlink: boolean;
}
export interface ListFilesOutput {
    files: ListFilesOutputFile[];
}

export interface ReadFileInput {
    args: {
        path: string;
    };
}
export interface ReadFileOutputFile {
    path: string;
    content: string;
    toString: () => string;
}
export interface ReadFileOutput {
    file: ReadFileOutputFile;
}

export interface DeleteFilesInput {
    args: {
        path: string;
        recursive?: boolean;
    };
}
export interface DeleteFilesOutput {}

export interface DownloadFilesInput {
    args: {
        path: string;
    };
}
export interface DownloadFilesOutput {
    url?: string;
}

export interface CopyFilesInput {
    args: {
        sourcePath: string;
        targetPath: string;
        recursive?: boolean;
        overwrite?: boolean;
    };
}
export interface CopyFileOutput {}

export interface CreateDirectoryInput {
    args: {
        path: string;
    };
}
export interface CreateDirectoryOutput {}

export interface WatchEvent {
    type: 'add' | 'change' | 'remove';
    paths: string[];
}
export interface WatchFilesInput {
    args: {
        path: string;
        recursive?: boolean;
        excludes?: string[];
    };
    onFileChange?: (event: WatchEvent) => Promise<void>;
}
export interface WatchFilesOutput {
    watcher: ProviderFileWatcher;
}

export interface CreateTerminalInput {}
export interface CreateTerminalOutput {
    terminal: ProviderTerminal;
}

export interface GetTaskInput {
    args: {
        id: string;
    };
}
export interface GetTaskOutput {
    task: ProviderTask;
}

export interface TerminalCommandInput {
    args: {
        command: string;
    };
}
export interface TerminalCommandOutput {
    output: string;
}

export interface TerminalBackgroundCommandInput {
    args: {
        command: string;
    };
}
export interface TerminalBackgroundCommandOutput {
    command: ProviderBackgroundCommand;
}

export interface GitStatusInput {}
export interface GitStatusOutput {
    changedFiles: string[];
}
export interface InitializeInput {}
export interface InitializeOutput {}
export interface SetupInput {}
export interface SetupOutput {}
export interface PauseProjectInput {}
export interface PauseProjectOutput {}
export interface StopProjectInput {}
export interface StopProjectOutput {}
export interface ListProjectsInput {}
export interface ListProjectsOutput {}
export interface CreateSessionInput {
    args: {
        id: string;
    };
}
export interface CreateSessionOutput {}

export abstract class ProviderFileWatcher {
    abstract start(input: WatchFilesInput): Promise<void>;
    abstract stop(): Promise<void>;
    abstract registerEventCallback(callback: (event: WatchEvent) => Promise<void>): void;
}

export abstract class ProviderTerminal {
    abstract get id(): string;
    abstract get name(): string;
    abstract open(dimensions?: { cols: number; rows: number }): Promise<string>;
    abstract write(input: string, dimensions?: { cols: number; rows: number }): Promise<void>;
    abstract run(input: string, dimensions?: { cols: number; rows: number }): Promise<void>;
    abstract kill(): Promise<void>;
    abstract onOutput(callback: (data: string) => void): () => void;
}

export abstract class ProviderTask {
    abstract get id(): string;
    abstract get name(): string;
    abstract get command(): string;
    abstract open(dimensions?: { cols: number; rows: number }): Promise<string>;
    abstract run(): Promise<void>;
    abstract restart(): Promise<void>;
    abstract stop(): Promise<void>;
    abstract onOutput(callback: (data: string) => void): () => void;
}

export abstract class ProviderBackgroundCommand {
    abstract get name(): string | undefined;
    abstract get command(): string;
    abstract open(): Promise<string>;
    abstract restart(): Promise<void>;
    abstract kill(): Promise<void>;
    abstract onOutput(callback: (data: string) => void): () => void;
}

export abstract class Provider {
    abstract writeFile(input: WriteFileInput): Promise<WriteFileOutput>;
    abstract renameFile(input: RenameFileInput): Promise<RenameFileOutput>;
    abstract statFile(input: StatFileInput): Promise<StatFileOutput>;
    abstract deleteFiles(input: DeleteFilesInput): Promise<DeleteFilesOutput>;
    abstract listFiles(input: ListFilesInput): Promise<ListFilesOutput>;
    abstract readFile(input: ReadFileInput): Promise<ReadFileOutput>;
    abstract downloadFiles(input: DownloadFilesInput): Promise<DownloadFilesOutput>;
    abstract copyFiles(input: CopyFilesInput): Promise<CopyFileOutput>;
    abstract createDirectory(input: CreateDirectoryInput): Promise<CreateDirectoryOutput>;
    abstract watchFiles(input: WatchFilesInput): Promise<WatchFilesOutput>;
    abstract createTerminal(input: CreateTerminalInput): Promise<CreateTerminalOutput>;
    abstract getTask(input: GetTaskInput): Promise<GetTaskOutput>;
    abstract runCommand(input: TerminalCommandInput): Promise<TerminalCommandOutput>;
    abstract runBackgroundCommand(
        input: TerminalBackgroundCommandInput,
    ): Promise<TerminalBackgroundCommandOutput>;
    abstract gitStatus(input: GitStatusInput): Promise<GitStatusOutput>;
    abstract createSession(input: CreateSessionInput): Promise<CreateSessionOutput>;
    abstract initialize(input: InitializeInput): Promise<InitializeOutput>;
    abstract setup(input: SetupInput): Promise<SetupOutput>;
    abstract reload(): Promise<boolean>;
    abstract reconnect(): Promise<void>;
    abstract ping(): Promise<boolean>;
    abstract pauseProject(input: PauseProjectInput): Promise<PauseProjectOutput>;
    abstract stopProject(input: StopProjectInput): Promise<StopProjectOutput>;
    abstract listProjects(input: ListProjectsInput): Promise<ListProjectsOutput>;
    abstract destroy(): Promise<void>;
}

class ZyloraProviderTerminal extends ProviderTerminal {
    id = 'zylora-cli';
    name = 'terminal';
    private listeners: ((data: string) => void)[] = [];

    async open(): Promise<string> {
        return 'Zylora Terminal Ready';
    }
    async write(input: string): Promise<void> {
        this.listeners.forEach((l) => l(input));
    }
    async run(input: string): Promise<void> {
        this.listeners.forEach((l) => l(`> ${input}\n`));
    }
    async kill(): Promise<void> {}
    onOutput(callback: (data: string) => void): () => void {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter((l) => l !== callback);
        };
    }
}

class ZyloraProviderTask extends ProviderTask {
    id = 'dev';
    name = 'dev-server';
    command = 'npm run dev';
    private listeners: ((data: string) => void)[] = [];

    constructor(private siteId?: string) {
        super();
    }

    async open(): Promise<string> {
        return 'Dev server running in Zylora local sandbox';
    }
    async run(): Promise<void> {}
    async restart(): Promise<void> {
        if (this.siteId) {
            await fetch(`/api/sites/${this.siteId}/code/workspace/start`, { credentials: 'same-origin' });
        }
    }
    async stop(): Promise<void> {}
    onOutput(callback: (data: string) => void): () => void {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter((l) => l !== callback);
        };
    }
}

export class ZyloraCodeProvider extends Provider {
    private siteId: string;

    constructor(options?: { siteId?: string }) {
        super();
        this.siteId = options?.siteId || (typeof window !== 'undefined' ? (window as any).__ZYLORA_SITE_ID__ || '' : '');
    }

    async writeFile(input: WriteFileInput): Promise<WriteFileOutput> {
        const path = input.args.path.replace(/^\//, '');
        const content = typeof input.args.content === 'string'
            ? input.args.content
            : new TextDecoder().decode(input.args.content);
        const res = await fetch(`/api/sites/${this.siteId}/code/file?path=${encodeURIComponent(path)}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content }),
            credentials: 'same-origin',
        });
        return { success: res.ok };
    }

    async renameFile(input: RenameFileInput): Promise<RenameFileOutput> {
        return {};
    }

    async statFile(input: StatFileInput): Promise<StatFileOutput> {
        return { type: 'file' };
    }

    async deleteFiles(input: DeleteFilesInput): Promise<DeleteFilesOutput> {
        return {};
    }

    async listFiles(input: ListFilesInput): Promise<ListFilesOutput> {
        const res = await fetch(`/api/sites/${this.siteId}/code/files`, { credentials: 'same-origin' });
        if (!res.ok) return { files: [] };
        const data = await res.json();
        const files: ListFilesOutputFile[] = (data.files || []).map((f: any) => ({
            name: typeof f === 'string' ? f : f.name || f.path,
            type: (f.isDir || f.type === 'directory') ? 'directory' : 'file',
            isSymlink: false,
        }));
        return { files };
    }

    async readFile(input: ReadFileInput): Promise<ReadFileOutput> {
        const path = input.args.path.replace(/^\//, '');
        const res = await fetch(`/api/sites/${this.siteId}/code/file?path=${encodeURIComponent(path)}`, {
            credentials: 'same-origin',
        });
        const content = res.ok ? await res.text() : '';
        return {
            file: {
                path,
                content,
                toString: () => content,
            },
        };
    }

    async downloadFiles(input: DownloadFilesInput): Promise<DownloadFilesOutput> {
        return {};
    }

    async copyFiles(input: CopyFilesInput): Promise<CopyFileOutput> {
        return {};
    }

    async createDirectory(input: CreateDirectoryInput): Promise<CreateDirectoryOutput> {
        return {};
    }

    async watchFiles(input: WatchFilesInput): Promise<WatchFilesOutput> {
        return {
            watcher: {
                start: async () => {},
                stop: async () => {},
                registerEventCallback: () => {},
            },
        };
    }

    async createTerminal(input: CreateTerminalInput): Promise<CreateTerminalOutput> {
        return { terminal: new ZyloraProviderTerminal() };
    }

    async getTask(input: GetTaskInput): Promise<GetTaskOutput> {
        return { task: new ZyloraProviderTask(this.siteId) };
    }

    async runCommand(input: TerminalCommandInput): Promise<TerminalCommandOutput> {
        return { output: 'Zylora sandbox: command acknowledged' };
    }

    async runBackgroundCommand(
        input: TerminalBackgroundCommandInput,
    ): Promise<TerminalBackgroundCommandOutput> {
        return {
            command: {
                name: 'bg',
                command: input.args.command,
                open: async () => '',
                restart: async () => {},
                kill: async () => {},
                onOutput: () => () => {},
            },
        };
    }

    async gitStatus(input: GitStatusInput): Promise<GitStatusOutput> {
        return { changedFiles: [] };
    }

    async createSession(input: CreateSessionInput): Promise<CreateSessionOutput> {
        return {};
    }

    async initialize(input: InitializeInput): Promise<InitializeOutput> {
        return {};
    }

    async setup(input: SetupInput): Promise<SetupOutput> {
        return {};
    }

    async reload(): Promise<boolean> {
        return true;
    }

    async reconnect(): Promise<void> {}

    async ping(): Promise<boolean> {
        return true;
    }

    async pauseProject(input: PauseProjectInput): Promise<PauseProjectOutput> {
        return {};
    }

    async stopProject(input: StopProjectInput): Promise<StopProjectOutput> {
        return {};
    }

    async listProjects(input: ListProjectsInput): Promise<ListProjectsOutput> {
        return {};
    }

    async destroy(): Promise<void> {}
}

export interface CreateClientOptions {
    providerOptions?: any;
}

export async function createCodeProviderClient(
    codeProvider: CodeProvider,
    _options?: CreateClientOptions,
): Promise<Provider> {
    const provider = new ZyloraCodeProvider();
    await provider.initialize({});
    return provider;
}
