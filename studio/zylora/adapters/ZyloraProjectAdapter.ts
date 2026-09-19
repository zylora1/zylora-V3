/**
 * ZyloraProjectAdapter: Maps Zylora site context into Onlook Project and Branch data structures.
 */

import type { Branch, Project } from '@onlook/models';

export interface ZyloraSiteContext {
  siteId: string;
  siteName?: string;
  codeWorkspaceId?: string;
  framework?: string;
}

export class ZyloraProjectAdapter {
  constructor(private readonly siteContext: ZyloraSiteContext) {}

  getProject(): Project {
    return ZyloraProjectAdapter.createProject(this.siteContext);
  }

  getDefaultBranch(): Branch {
    return ZyloraProjectAdapter.createDefaultBranch(this.siteContext);
  }

  static createProject(context: ZyloraSiteContext): Project {
    const now = new Date();
    return {
      id: context.siteId,
      name: context.siteName || 'Zylora Project',
      metadata: {
        createdAt: now,
        updatedAt: now,
        previewImg: null,
        description: 'Zylora Code-backed Project',
        tags: ['zylora', context.framework || 'vite-react'],
      },
    };
  }

  static createDefaultBranch(context: ZyloraSiteContext): Branch {
    const now = new Date();
    const workspaceId = context.codeWorkspaceId || context.siteId;
    return {
      id: workspaceId,
      projectId: context.siteId,
      name: 'main',
      description: 'Primary workspace branch',
      createdAt: now,
      updatedAt: now,
      isDefault: true,
      git: null,
      sandbox: {
        id: workspaceId,
      },
    };
  }
}
