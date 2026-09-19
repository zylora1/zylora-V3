/**
 * ZyloraSandboxAdapter: Bridge between Onlook canvas and Zylora's LocalSandboxProvider.
 * Controls development server start/stop, status checks, and preview URL lifecycle.
 */

import { ZyloraAuthAdapter } from './ZyloraAuthAdapter';

export type SandboxStatus = 'stopped' | 'starting' | 'ready' | 'failed';

export class ZyloraSandboxAdapter {
  private siteId: string;
  private auth: ZyloraAuthAdapter;
  private _status: SandboxStatus = 'stopped';
  private _previewUrl: string = '';
  private _logs: string[] = [];

  constructor(siteId: string, auth: ZyloraAuthAdapter) {
    this.siteId = siteId;
    this.auth = auth;
  }

  get status(): SandboxStatus {
    return this._status;
  }

  get previewUrl(): string {
    return this._previewUrl;
  }

  get logs(): string[] {
    return this._logs;
  }

  async start(): Promise<{ preview_url: string; runtime: string }> {
    this._status = 'starting';
    const res = await fetch(`/api/sites/${encodeURIComponent(this.siteId)}/code/workspace/start`, {
      method: 'POST',
      headers: this.auth.getHeaders(),
    });
    const data = await res.json();
    if (!res.ok) {
      this._status = 'failed';
      throw new Error(data.detail || 'Sandbox failed to start');
    }
    this._previewUrl = data.preview_url || '';
    this._status = 'ready';
    return data;
  }

  async stop(): Promise<void> {
    await fetch(`/api/sites/${encodeURIComponent(this.siteId)}/code/workspace/stop`, {
      method: 'POST',
      headers: this.auth.getHeaders(),
    });
    this._status = 'stopped';
    this._previewUrl = '';
  }

  async refreshStatus(): Promise<void> {
    const res = await fetch(`/api/sites/${encodeURIComponent(this.siteId)}/code/workspace/status`, {
      headers: this.auth.getHeaders(),
    });
    if (res.ok) {
      const data = await res.json();
      this._status = (data.status as SandboxStatus) || this._status;
      this._previewUrl = data.preview_url || this._previewUrl;
      this._logs = data.logs || [];
    }
  }
}
