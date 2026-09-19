'use client';

import { useEditorEngine } from '@/components/store/editor';
import { DeploymentStatus, DeploymentType } from '@onlook/models';
import { toast } from '@onlook/ui/sonner';
import { createContext, useContext, useState, type ReactNode } from 'react';

interface PublishParams {
    projectId: string;
    type: DeploymentType;
    sandboxId: string;
    buildScript?: string;
    buildFlags?: string;
    envVars?: Record<string, string>;
}

interface HostingContextValue {
    deployments: Record<DeploymentType, any | null>;
    isDeploying: (type: DeploymentType) => boolean;
    publish: (params: PublishParams) => Promise<{ success: boolean } | null>;
    unpublish: (projectId: string, type: DeploymentType) => Promise<{ deploymentId: string } | null>;
    cancel: (type: DeploymentType) => Promise<void>;
    refetch: (type: DeploymentType) => void;
    refetchAll: () => void;
}

const HostingContext = createContext<HostingContextValue | null>(null);

export const useHostingContext = () => {
    const context = useContext(HostingContext);
    if (!context) {
        throw new Error('useHostingContext must be used within a HostingProvider');
    }
    return context;
};

export const HostingProvider = ({ children }: { children: ReactNode }) => {
    const editorEngine = useEditorEngine();
    const [deploying, setDeploying] = useState<Record<DeploymentType, boolean>>({
        [DeploymentType.PREVIEW]: false,
        [DeploymentType.CUSTOM]: false,
        [DeploymentType.UNPUBLISH_PREVIEW]: false,
        [DeploymentType.UNPUBLISH_CUSTOM]: false,
    });

    const [deployments, setDeployments] = useState<Record<DeploymentType, any | null>>({
        [DeploymentType.PREVIEW]: null,
        [DeploymentType.CUSTOM]: null,
        [DeploymentType.UNPUBLISH_PREVIEW]: null,
        [DeploymentType.UNPUBLISH_CUSTOM]: null,
    });

    const isDeploying = (type: DeploymentType) => deploying[type] || false;

    const publish = async (params: PublishParams) => {
        const type = params.type || DeploymentType.PREVIEW;
        setDeploying(prev => ({ ...prev, [type]: true }));
        try {
            const csrf = (window as any).ZYLORA_STUDIO_CONTEXT?.csrfToken || '';
            const res = await fetch(`/api/sites/${encodeURIComponent(params.projectId)}/publish`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrf,
                },
                body: JSON.stringify({ environment: 'production' }),
            });
            if (!res.ok) throw new Error(`Publish failed with status ${res.status}`);
            const data = await res.json();
            setDeployments(prev => ({
                ...prev,
                [type]: {
                    id: data.deployment_id || 'prod-1',
                    status: DeploymentStatus.SUCCESS,
                    url: data.url || `/s/${params.projectId}`,
                }
            }));
            toast.success('Project published successfully to Zylora hosting');
            return { success: true };
        } catch (err: any) {
            toast.error(`Publish error: ${err.message}`);
            return { success: false };
        } finally {
            setDeploying(prev => ({ ...prev, [type]: false }));
        }
    };

    const unpublish = async (projectId: string, type: DeploymentType) => {
        return { deploymentId: 'unpublish-1' };
    };

    const cancel = async (type: DeploymentType) => {};
    const refetch = (type: DeploymentType) => {};
    const refetchAll = () => {};

    return (
        <HostingContext.Provider
            value={{
                deployments,
                isDeploying,
                publish,
                unpublish,
                cancel,
                refetch,
                refetchAll,
            }}
        >
            {children}
        </HostingContext.Provider>
    );
};
