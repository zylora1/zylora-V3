export type PreviewMessageType =
  | 'PREVIEW_READY' | 'ELEMENT_HOVER' | 'ELEMENT_SELECTED' | 'ELEMENT_BOUNDS'
  | 'ELEMENT_METADATA' | 'SOURCE_METADATA' | 'NAVIGATE_PARENT' | 'NAVIGATE_CHILD'
  | 'SOURCE_CHANGED' | 'PREVIEW_ERROR' | 'HMR_COMPLETE' | 'REQUEST_REFRESH';

export type SourceMetadata = {
  file: string; start: number; end: number; component?: string;
  element: string; editable: boolean; reason?: string;
};

export type PreviewPayload = {
  type: PreviewMessageType; projectId: string; workspaceId: string;
  elementId?: string; parentId?: string | null; bounds?: { x:number; y:number; width:number; height:number };
  metadata?: Record<string, unknown>; source?: SourceMetadata; error?: string;
};

const TYPES = new Set<PreviewMessageType>([
  'PREVIEW_READY','ELEMENT_HOVER','ELEMENT_SELECTED','ELEMENT_BOUNDS','ELEMENT_METADATA',
  'SOURCE_METADATA','NAVIGATE_PARENT','NAVIGATE_CHILD','SOURCE_CHANGED','PREVIEW_ERROR','HMR_COMPLETE','REQUEST_REFRESH',
]);
const ID = /^[A-Za-z0-9_-]{8,128}$/;

export function isPreviewMessage(value: unknown, projectId: string, workspaceId: string, expectedOrigin: string, event?: MessageEvent): value is PreviewPayload {
  if (event && event.origin !== expectedOrigin) return false;
  if (!value || typeof value !== 'object') return false;
  const message = value as Record<string, unknown>;
  if (!TYPES.has(message.type as PreviewMessageType)) return false;
  if (message.projectId !== projectId || message.workspaceId !== workspaceId) return false;
  if (typeof message.type !== 'string') return false;
  if (message.elementId !== undefined && (typeof message.elementId !== 'string' || message.elementId.length > 200)) return false;
  if (message.bounds !== undefined) {
    const b = message.bounds as Record<string, unknown>;
    if (!b || ['x','y','width','height'].some(k => typeof b[k] !== 'number' || !Number.isFinite(b[k] as number))) return false;
  }
  if (message.source !== undefined) {
    const source = message.source as Record<string, unknown>;
    if (!source || typeof source.file !== 'string' || !/^((src|app|pages)\/)[^\0]{1,240}\.(jsx|tsx|js|ts)$/.test(source.file)) return false;
    const start = source.start; const end = source.end;
    if (typeof start !== 'number' || typeof end !== 'number' || !Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < start) return false;
    if (typeof source.editable !== 'boolean') return false;
  }
  return true;
}

export function postPreviewMessage(target: Window, origin: string, message: PreviewPayload): void {
  if (!ID.test(message.projectId) || !ID.test(message.workspaceId) || !TYPES.has(message.type)) throw new Error('Invalid preview message');
  target.postMessage(message, origin);
}
