/**
 * ZyloraWorkspaceAdapter: Filesystem bridge for Onlook code operations.
 * Maps file listing, reading, and writing to Zylora's tenant-isolated /api/sites/{siteId}/code/ endpoints.
 */

import { ZyloraAuthAdapter } from './ZyloraAuthAdapter';

export interface WorkspaceFileEntry {
  path: string;
  bytes: number;
  extension: string;
}

export class ZyloraWorkspaceAdapter {
  private siteId: string;
  private auth: ZyloraAuthAdapter;
  private cache = new Map<string, string>();

  constructor(siteId: string, auth: ZyloraAuthAdapter) {
    this.siteId = siteId;
    this.auth = auth;
  }

  async initialize(): Promise<void> {
    await this.listFiles();
  }

  async cleanup(): Promise<void> {
    this.cache.clear();
  }

  async listFiles(): Promise<WorkspaceFileEntry[]> {
    const res = await fetch(`/api/sites/${encodeURIComponent(this.siteId)}/code/files`, {
      headers: this.auth.getHeaders(),
    });
    if (!res.ok) {
      throw new Error(`Failed to list project files: ${res.statusText}`);
    }
    const data = await res.json();
    return (data.files || []).map((item: any) => ({
      path: item.path,
      bytes: item.bytes || 0,
      extension: item.extension || '',
    }));
  }

  async readFile(filePath: string): Promise<string> {
    const normalized = filePath.replace(/^\/+/, '');
    const res = await fetch(`/api/sites/${encodeURIComponent(this.siteId)}/code/file?path=${encodeURIComponent(normalized)}`, {
      headers: this.auth.getHeaders(),
    });
    if (!res.ok) {
      throw new Error(`Failed to read file ${normalized}: ${res.statusText}`);
    }
    const data = await res.json();
    this.cache.set(normalized, data.content);
    return data.content;
  }

  async writeFile(filePath: string, content: string): Promise<void> {
    const normalized = filePath.replace(/^\/+/, '');
    const res = await fetch(`/api/sites/${encodeURIComponent(this.siteId)}/code/file`, {
      method: 'PUT',
      headers: this.auth.getHeaders(),
      body: JSON.stringify({ path: normalized, content }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || `Failed to write file: ${normalized}`);
    }
    this.cache.set(normalized, content);
  }

  async deleteFile(filePath: string): Promise<void> {
    const normalized = filePath.replace(/^\/+/, '');
    const res = await fetch(`/api/sites/${encodeURIComponent(this.siteId)}/code/files?path=${encodeURIComponent(normalized)}`, {
      method: 'DELETE',
      headers: this.auth.getHeaders(),
    });
    if (!res.ok) {
      throw new Error(`Failed to delete file ${normalized}: ${res.statusText}`);
    }
    this.cache.delete(normalized);
  }

  async exists(filePath: string): Promise<boolean> {
    const files = await this.listFiles();
    const normalized = filePath.replace(/^\/+/, '');
    return files.some((f) => f.path === normalized);
  }
}
