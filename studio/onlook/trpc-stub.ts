/**
 * Explicit Zylora compatibility surface for the transplanted Onlook editor.
 *
 * This is deliberately finite. The old implementation used a deep proxy
 * that returned empty values for every unknown call, making editor failures
 * indistinguishable from Onlook SaaS-only features.
 */

export interface ZyloraTrpcContext {
    projectId: string;
    branchId: string;
    auth?: { user: { id: string; email: string; name?: string; role?: string } | null };
    project?: Record<string, unknown>;
    projects?: Array<Record<string, unknown>>;
    sandbox?: {
        start: () => Promise<{ preview_url?: string; runtime?: string }>;
        stop: () => Promise<void>;
    };
    workspace?: {
        readFile: (path: string) => Promise<string>;
        writeFile: (path: string, content: string) => Promise<void>;
    };
}

export interface ZyloraTrpcTrace {
    path: string;
    operation: 'query' | 'mutation' | 'hook' | 'utils';
    input?: unknown;
    timestamp: string;
}

let context: ZyloraTrpcContext | null = null;

function trace(path: string, operation: ZyloraTrpcTrace['operation'], input?: unknown): void {
    if (typeof window === 'undefined') return;
    const entry: ZyloraTrpcTrace = { path, operation, input, timestamp: new Date().toISOString() };
    const target = window as Window & {
        __ZYLORA_TRPC_TRACE__?: ZyloraTrpcTrace[];
        __ZYLORA_TRPC_TRACE_ENABLED__?: boolean;
    };
    target.__ZYLORA_TRPC_TRACE__ ??= [];
    target.__ZYLORA_TRPC_TRACE__.push(entry);
    if (target.__ZYLORA_TRPC_TRACE_ENABLED__) console.info('[Zylora tRPC]', entry);
}

function requireContext(path: string): ZyloraTrpcContext {
    if (!context) throw new Error(`Zylora tRPC context is not initialized for ${path}`);
    return context;
}

export function configureZyloraTrpcContext(next: ZyloraTrpcContext): void {
    context = next;
}

export function clearZyloraTrpcContext(): void {
    context = null;
}

type QueryResult<T> = {
    data: T | undefined;
    isLoading: boolean;
    isFetching: boolean;
    isError: boolean;
    error: Error | null;
    refetch: () => Promise<{ data: T | undefined }>;
};

type MutationResult<TInput, TOutput> = {
    mutate: (input: TInput, callbacks?: { onSuccess?: (value: TOutput) => void; onError?: (error: Error) => void }) => void;
    mutateAsync: (input: TInput) => Promise<TOutput>;
    isPending: boolean;
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    reset: () => void;
};

function query<T>(path: string, resolver: (input?: any) => T | undefined) {
    return {
        useQuery(input?: any, _options?: any): QueryResult<T> {
            trace(path, 'hook', input);
            const value = resolver(input);
            return {
                data: value,
                isLoading: false,
                isFetching: false,
                isError: false,
                error: null,
                refetch: async () => {
                    trace(path, 'query', input);
                    return { data: resolver(input) };
                },
            };
        },
        async query(input?: any): Promise<T | undefined> {
            trace(path, 'query', input);
            return resolver(input);
        },
    };
}

function mutation<TInput = any, TOutput = any>(path: string, handler: (input: TInput) => Promise<TOutput> | TOutput) {
    return {
        useMutation(_options?: any): MutationResult<TInput, TOutput> {
            trace(path, 'hook');
            const invoke = async (input: TInput): Promise<TOutput> => {
                trace(path, 'mutation', input);
                return handler(input);
            };
            return {
                mutate: (input, callbacks) => {
                    void invoke(input).then(callbacks?.onSuccess).catch(callbacks?.onError);
                },
                mutateAsync: invoke,
                isPending: false,
                isLoading: false,
                isError: false,
                error: null,
                reset: () => undefined,
            };
        },
        async mutate(input: TInput): Promise<TOutput> {
            trace(path, 'mutation', input);
            return handler(input);
        },
        async mutateAsync(input: TInput): Promise<TOutput> {
            trace(path, 'mutation', input);
            return handler(input);
        },
    };
}

const unsupported = (path: string) => async (_input?: unknown): Promise<never> => {
    throw new Error(`Onlook dependency ${path} is not available in Zylora Studio`);
};

const ZYLORA_DEFAULT_USER_SETTINGS = {
    id: 'zylora-local-settings',
    chat: {
        showSuggestions: true,
        autoApplyCode: true,
        expandCodeBlocks: false,
        showMiniChat: false,
    },
    editor: {
        shouldWarnDelete: false,
    },
};

function projectValue(input?: { projectId?: string }): Record<string, unknown> | undefined {
    const current = requireContext('project.get');
    if (input?.projectId && input.projectId !== current.projectId) return undefined;
    return current.project ?? { id: current.projectId, name: current.projectId };
}

const api = {
    project: {
        get: query('project.get', projectValue),
        list: query('project.list', () => requireContext('project.list').projects ?? []),
        captureScreenshot: mutation('project.captureScreenshot', async () => ({ url: null })),
        create: mutation('project.create', unsupported('project.create')),
        fork: mutation('project.fork', unsupported('project.fork')),
    },
    branch: {
        fork: mutation('branch.fork', unsupported('branch.fork')),
        createBlank: mutation('branch.createBlank', unsupported('branch.createBlank')),
        update: mutation('branch.update', async () => true),
        delete: mutation('branch.delete', async () => true),
    },
    frame: {
        create: mutation('frame.create', async () => true),
        update: mutation('frame.update', async () => true),
        delete: mutation('frame.delete', async () => true),
    },
    sandbox: {
        start: mutation('sandbox.start', async () => {
            const sandbox = requireContext('sandbox.start').sandbox;
            return sandbox ? sandbox.start() : unsupported('sandbox.start')();
        }),
        hibernate: mutation('sandbox.hibernate', async () => {
            await requireContext('sandbox.hibernate').sandbox?.stop();
            return true;
        }),
        fork: mutation('sandbox.fork', unsupported('sandbox.fork')),
    },
    user: {
        get: query('user.get', () => requireContext('user.get').auth?.user ?? null),
        settings: {
            get: query('user.settings.get', () => ZYLORA_DEFAULT_USER_SETTINGS),
            upsert: mutation('user.settings.upsert', async () => true),
        },
    },
    userCanvas: {
        update: mutation('userCanvas.update', async () => true),
        getWithFrames: query('userCanvas.getWithFrames', () => ({ canvas: null, frames: [] })),
    },
    chat: {
        conversation: {
            getAll: query('chat.conversation.getAll', () => []),
            upsert: mutation('chat.conversation.upsert', async (input) => input),
            update: mutation('chat.conversation.update', async () => true),
            delete: mutation('chat.conversation.delete', async () => true),
            generateTitle: mutation('chat.conversation.generateTitle', async () => ''),
        },
        message: {
            getAll: query('chat.message.getAll', () => []),
            updateCheckpoints: mutation('chat.message.updateCheckpoints', async () => true),
        },
    },
    utils: {
        webSearch: mutation('utils.webSearch', unsupported('utils.webSearch')),
        applyDiff: mutation('utils.applyDiff', async (input: any) => {
            const current = requireContext('utils.applyDiff');
            if (current.workspace && input?.path && typeof input?.generated === 'string') {
                await current.workspace.writeFile(input.path, input.generated);
                return { ok: true };
            }
            return unsupported('utils.applyDiff')();
        }),
        scrapeUrl: mutation('utils.scrapeUrl', unsupported('utils.scrapeUrl')),
    },
    domain: {
        preview: {
            get: query('domain.preview.get', () => null),
            create: mutation('domain.preview.create', unsupported('domain.preview.create')),
        },
        custom: {
            get: query('domain.custom.get', () => null),
        },
    },
    subscription: {
        get: query('subscription.get', () => null),
    },
    member: {
        list: query('member.list', () => []),
    },
    invitation: {
        list: query('invitation.list', () => []),
        suggested: query('invitation.suggested', () => []),
        create: mutation('invitation.create', unsupported('invitation.create')),
        delete: mutation('invitation.delete', unsupported('invitation.delete')),
    },
    useUtils: () => {
        trace('useUtils', 'utils');
        return {
            invalidate: async () => undefined,
            refetch: async () => undefined,
            project: { get: { invalidate: async () => undefined } },
            user: { settings: { get: { invalidate: async () => undefined } } },
        };
    },
};

export { api };
export default api;
