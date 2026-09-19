// Sovereign telemetry stub for Zylora
// Replaces external PostHog tracking with a no-op tenant-safe interface

export function usePostHog() {
    return {
        capture: (_event: string, _properties?: any) => {},
        identify: () => {},
        reset: () => {},
    };
}

export type PostHog = ReturnType<typeof usePostHog>;
