import { ZyloraAuthAdapter } from './ZyloraAuthAdapter';

export interface ZyloraAsset {
  id: string;
  name: string;
  url: string;
  size: number;
  mimeType: string;
}

export class ZyloraAssetAdapter {
  constructor(
    readonly siteId: string,
    readonly auth: ZyloraAuthAdapter
  ) {}

  async listAssets(): Promise<ZyloraAsset[]> {
    const res = await fetch(`/api/sites/${encodeURIComponent(this.siteId)}/assets`, {
      headers: this.auth.getHeaders(),
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : data.assets || [];
  }

  async uploadAsset(file: File): Promise<ZyloraAsset> {
    const formData = new FormData();
    formData.append('file', file);
    const headers = this.auth.getHeaders();
    delete headers['Content-Type']; // Let browser set multipart boundary
    const res = await fetch(`/api/sites/${encodeURIComponent(this.siteId)}/assets`, {
      method: 'POST',
      headers,
      body: formData,
    });
    if (!res.ok) throw new Error(`Asset upload failed: ${res.status}`);
    return res.json();
  }
}
