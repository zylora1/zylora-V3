import { ZyloraAuthAdapter } from './ZyloraAuthAdapter';

export class ZyloraPermissionAdapter {
  constructor(
    readonly auth: ZyloraAuthAdapter
  ) {}

  canEditCode(): boolean {
    return this.auth.hasScope('studio.write');
  }

  canPublish(): boolean {
    return this.auth.hasScope('studio.publish');
  }

  canManageAssets(): boolean {
    return this.auth.hasScope('assets.write');
  }

  canUseAI(): boolean {
    return this.auth.hasScope('ai.use');
  }

  canManageDomains(): boolean {
    return this.auth.hasScope('domains.read');
  }
}
