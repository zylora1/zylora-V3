'use client';

import { useEffect, useState } from 'react';

import { getRuntimeFileSystem } from '../code-fs';

export function useFS(projectId: string, branchId: string) {
    const [fs, setFs] = useState<ReturnType<typeof getRuntimeFileSystem>>(null);
    const [isInitializing, setIsInitializing] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fileSystem = getRuntimeFileSystem(projectId, branchId);
        if (!fileSystem) {
            setError(new Error(`Zylora filesystem is not registered for ${projectId}/${branchId}`));
            setFs(null);
            setIsInitializing(false);
            return;
        }

        fileSystem
            .initialize()
            .then(() => {
                setFs(fileSystem);
                setError(null);
                setIsInitializing(false);
            })
            .catch((err) => {
                setError(
                    err instanceof Error ? err : new Error('Failed to initialize file system'),
                );
                setFs(null);
                setIsInitializing(false);
            });

        // BranchManager owns the singleton lifecycle. Individual consumers
        // must not tear down the shared filesystem on unmount.
        return undefined;
    }, [projectId, branchId]);

    // Type guards are used below to ensure that the resultant type is correct
    if (isInitializing) {
        return { fs: null, isInitializing: true, error: null };
    }

    if (error) {
        return { fs: null, isInitializing: false, error };
    }

    return { fs: fs!, isInitializing: false, error: null };
}

export type UseFSResult = ReturnType<typeof useFS>;
