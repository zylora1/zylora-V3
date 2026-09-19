'use client';

import { useEditorEngine } from '@/components/store/editor';
import { useState, useEffect } from 'react';

export const useStartProject = () => {
    const editorEngine = useEditorEngine();
    const [isProjectReady, setIsProjectReady] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (editorEngine) {
            setIsProjectReady(true);
            setError(null);
        }
    }, [editorEngine]);

    return { isProjectReady, error };
};
