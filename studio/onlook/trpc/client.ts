// Zylora TRPC client stub for Onlook API bridge
export const api = {
    utils: {
        webSearch: { mutate: async (input: any) => [] },
        applyDiff: { mutate: async (input: any) => ({ diff: input.updateSnippet }) },
        scrapeUrl: { mutate: async (input: any) => ({ content: '' }) },
    },
    chat: {
        message: {
            getAll: { query: async (input: any) => [] },
        },
    },
};
