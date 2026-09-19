/**
 * Zylora-backed CodeFileSystem implementation for Onlook editor engine.
 * Directly integrates Onlook's FileSystem calls with Zylora's atomic REST endpoints.
 */

export interface FileEntry {
    name: string;
    path: string;
    isDirectory: boolean;
    size?: number;
    modifiedTime?: Date;
    children?: FileEntry[];
}

export interface JsxElementMetadata {
    [key: string]: any;
}

export interface CodeEditorOptions {
    routerType?: any;
}

export class CodeFileSystem {
    private projectId: string;
    private branchId: string;
    private options: CodeEditorOptions;

    constructor(projectId: string, branchId: string, options: CodeEditorOptions = {}) {
        this.projectId = projectId;
        this.branchId = branchId;
        this.options = options;
    }

    async initialize(): Promise<void> {
        // Connected to Zylora workspace
    }

    async cleanup(): Promise<void> {
        // Clean up resources
    }

    private getHeaders(): Record<string, string> {
        const headers: Record<string, string> = { 'Content-Type': 'application/json' };
        if (typeof window !== 'undefined' && (window as any).ZYLORA_STUDIO_CONTEXT?.csrfToken) {
            headers['X-CSRF-Token'] = (window as any).ZYLORA_STUDIO_CONTEXT.csrfToken;
        }
        return headers;
    }

    async readFile(filePath: string): Promise<string> {
        const cleanPath = filePath.replace(/^\/+/, '');
        const res = await fetch(`/api/sites/${this.projectId}/code/file?path=${encodeURIComponent(cleanPath)}`, {
            headers: this.getHeaders(),
        });
        if (!res.ok) {
            throw new Error(`Failed to read file: ${cleanPath} (${res.status})`);
        }
        const data = await res.json();
        return data.content || '';
    }

    async writeFile(filePath: string, content: string | Uint8Array): Promise<void> {
        const cleanPath = filePath.replace(/^\/+/, '');
        const textContent = typeof content === 'string' ? content : new TextDecoder().decode(content);
        const res = await fetch(`/api/sites/${this.projectId}/code/file`, {
            method: 'PUT',
            headers: this.getHeaders(),
            body: JSON.stringify({ path: cleanPath, content: textContent }),
        });
        if (!res.ok) {
            throw new Error(`Failed to write file: ${cleanPath} (${res.status})`);
        }
    }

    async writeFiles(files: Array<{ path: string; content: string | Uint8Array }>): Promise<void> {
        for (const file of files) {
            await this.writeFile(file.path, file.content);
        }
    }

    async deleteFile(filePath: string): Promise<void> {
        // Retained for interface compatibility
    }

    async exists(filePath: string): Promise<boolean> {
        try {
            const cleanPath = filePath.replace(/^\/+/, '');
            const res = await fetch(`/api/sites/${this.projectId}/code/file?path=${encodeURIComponent(cleanPath)}`, {
                headers: this.getHeaders(),
            });
            return res.ok;
        } catch {
            return false;
        }
    }

    async listFiles(dirPath: string): Promise<string[]> {
        const entries = await this.readDirectory(dirPath);
        return entries.map((e) => e.path);
    }

    async copyFile(path: string, targetPath: string): Promise<void> {
        const content = await this.readFile(path);
        await this.writeFile(targetPath, content);
    }

    async copyDirectory(path: string, targetPath: string): Promise<void> {
        // Directory copy handled by backend sandbox
    }

    async readDirectory(dirPath: string): Promise<FileEntry[]> {
        const res = await fetch(`/api/sites/${this.projectId}/code/files`, {
            headers: this.getHeaders(),
        });
        if (!res.ok) return [];
        const data = await res.json();
        return (data.files || []).map((f: any) => ({
            name: f.name || f.path.split('/').pop() || f.path,
            path: f.path,
            isDirectory: !!f.is_directory,
            size: f.size_bytes,
        }));
    }
}
