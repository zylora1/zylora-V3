/**
 * ZyloraPublishAdapter: Connects Studio publish actions to Zylora's build validation and deployment pipeline.
 */

import { ZyloraAuthAdapter } from './ZyloraAuthAdapter';

export interface PublishResult {
  ok: boolean;
  deploymentUrl?: string;
  status?: string;
  message?: string;
}

export class ZyloraPublishAdapter {
  private siteId: string;
  private auth: ZyloraAuthAdapter;

  constructor(siteId: string, auth: ZyloraAuthAdapter) {
    this.siteId = siteId;
    this.auth = auth;
  }

  async buildAndPublish(): Promise<PublishResult> {
    // 1. Trigger production build in sandbox
    const buildRes = await fetch(`/api/sites/${encodeURIComponent(this.siteId)}/code/command`, {
      method: 'POST',
      headers: this.auth.getHeaders(),
      body: JSON.stringify({ command: ['npm', 'run', 'build'], timeout_seconds: 30 }),
    });

    if (!buildRes.ok) {
      const err = await buildRes.json().catch(() => ({}));
      throw new Error(err.detail || 'Build step failed');
    }

    const buildData = await buildRes.json();
    if (!buildData.ok) {
      throw new Error(`Production build failed:\n${buildData.stderr || buildData.stdout}`);
    }

    // 2. Trigger Zylora platform publish
    const pubRes = await fetch(`/api/sites/${encodeURIComponent(this.siteId)}/publish`, {
      method: 'POST',
      headers: this.auth.getHeaders(),
    });

    if (!pubRes.ok) {
      const err = await pubRes.json().catch(() => ({}));
      throw new Error(err.detail || 'Publish to production failed');
    }

    const pubData = await pubRes.json();
    return {
      ok: true,
      deploymentUrl: pubData.url || pubData.production_url,
      status: 'LIVE',
      message: 'Published successfully to Zylora production infrastructure.',
    };
  }
}
