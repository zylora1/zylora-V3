import { ZyloraAuthAdapter } from './ZyloraAuthAdapter';
import { ZyloraWorkspaceAdapter, WorkspaceFileEntry } from './ZyloraWorkspaceAdapter';

export interface FileTreeItem {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileTreeItem[];
}

export class ZyloraCodeFileSystemAdapter {
  constructor(
    readonly siteId: string,
    readonly auth: ZyloraAuthAdapter,
    readonly workspace: ZyloraWorkspaceAdapter
  ) {}

  async list(dir: string = ''): Promise<WorkspaceFileEntry[]> {
    const normalized = dir.replaceAll('\\', '/').replace(/^\/+|\/+$/g, '');
    const prefix = normalized ? `${normalized}/` : '';
    const files = await this.workspace.listFiles();
    return files.filter((file) => !prefix || file.path.replaceAll('\\', '/').startsWith(prefix));
  }

  async read(path: string): Promise<string> {
    return this.workspace.readFile(path);
  }

  async write(path: string, content: string): Promise<void> {
    return this.workspace.writeFile(path, content);
  }

  async create(path: string, content: string = ''): Promise<void> {
    return this.workspace.writeFile(path, content);
  }

  async exists(path: string): Promise<boolean> {
    const normalized = path.replaceAll('\\', '/').replace(/^\/+/, '');
    const files = await this.workspace.listFiles();
    return files.some((file) => file.path.replaceAll('\\', '/') === normalized);
  }

  async rename(oldPath: string, newPath: string): Promise<void> {
    const content = await this.read(oldPath);
    await this.write(newPath, content);
    await this.delete(oldPath);
  }

  /** Hydrate the single editor-runtime cache from Zylora's durable workspace. */
  async hydrate(cache: { writeFile(path: string, content: string): Promise<void> }): Promise<number> {
    const files = await this.list();
    let hydrated = 0;
    for (const file of files.slice(0, 200)) {
      const content = await this.read(file.path);
      await cache.writeFile(file.path, content);
      hydrated += 1;
    }
    return hydrated;
  }

  async delete(path: string): Promise<void> {
    await this.workspace.deleteFile(path);
  }

  async search(query: string): Promise<string[]> {
    const files = await this.list();
    const q = query.toLowerCase();
    return files.filter(f => f.path.toLowerCase().includes(q)).map(f => f.path);
  }
}
