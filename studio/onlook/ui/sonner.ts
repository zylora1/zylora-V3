// Lightweight toast wrapper for Onlook editor feedback
export const toast = {
    success: (msg: string, opts?: any) => {
        if (typeof window !== 'undefined' && (window as any).__onlook_toast) {
            (window as any).__onlook_toast('success', msg, opts);
        }
        console.log('[Onlook]', msg, opts);
    },
    error: (msg: string, opts?: any) => {
        if (typeof window !== 'undefined' && (window as any).__onlook_toast) {
            (window as any).__onlook_toast('error', msg, opts);
        }
        console.error('[Onlook Error]', msg, opts);
    },
    info: (msg: string, opts?: any) => {
        console.info('[Onlook Info]', msg, opts);
    },
    message: (msg: string, opts?: any) => {
        console.log('[Onlook]', msg, opts);
    },
};

export const Toaster = () => null;
