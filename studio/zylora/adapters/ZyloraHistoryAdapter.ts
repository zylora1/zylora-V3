/**
 * ZyloraHistoryAdapter: Bridges Onlook checkpoints to Zylora revisions and snapshots.
 */

import { ZyloraAuthAdapter } from './ZyloraAuthAdapter';

export interface HistoryCheckpoint {
  id: string;
  timestamp: Date;
  description: string;
}

export class ZyloraHistoryAdapter {
  private siteId: string;
  private auth: ZyloraAuthAdapter;
  private checkpoints: HistoryCheckpoint[] = [];

  constructor(siteId: string, auth: ZyloraAuthAdapter) {
    this.siteId = siteId;
    this.auth = auth;
  }

  async createSnapshot(description: string = 'Manual checkpoint'): Promise<string> {
    const res = await fetch(`/api/sites/${encodeURIComponent(this.siteId)}/code/snapshot`, {
      method: 'POST',
      headers: this.auth.getHeaders(),
    });
    if (!res.ok) {
      throw new Error(`Failed to create snapshot: ${res.statusText}`);
    }
    const data = await res.json();
    const snapshotId = data.snapshot_id;
    this.checkpoints.unshift({
      id: snapshotId,
      timestamp: new Date(),
      description,
    });
    return snapshotId;
  }

  async restoreSnapshot(snapshotId: string): Promise<void> {
    const res = await fetch(`/api/sites/${encodeURIComponent(this.siteId)}/code/snapshot/restore`, {
      method: 'POST',
      headers: this.auth.getHeaders(),
      body: JSON.stringify({ snapshot_id: snapshotId }),
    });
    if (!res.ok) {
      throw new Error(`Failed to restore snapshot ${snapshotId}: ${res.statusText}`);
    }
  }

  getCheckpoints(): HistoryCheckpoint[] {
    return [...this.checkpoints];
  }
}
