import React, { useEffect, useMemo, useRef, useState } from 'react';
import { isPreviewMessage, PreviewPayload } from '../code/bridge';

type Props = { siteId: string; csrf?: string; projectId?: string; onSelection?: (message: PreviewPayload) => void; onStatus?: (status: string) => void };

export function CodePreview({ siteId, csrf, onSelection, onStatus }: Props) {
  const [status, setStatus] = useState('bootstrapping'); const [url, setUrl] = useState(''); const [error, setError] = useState('');
  const [selected, setSelected] = useState<PreviewPayload | null>(null); const [source, setSource] = useState<any>(null); const [draft, setDraft] = useState(''); const [saving, setSaving] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);
  const setRuntimeStatus = (value: string) => { setStatus(value); onStatus?.(value); };
  const start = async () => {
    setRuntimeStatus('starting'); setError('');
    try {
      const response = await fetch(`/api/sites/${encodeURIComponent(siteId)}/code/workspace/start`, { method:'POST', headers:{'X-CSRF-Token':csrf || ''} });
      const body = await response.json(); if (!response.ok) throw new Error(body.detail || 'Runtime could not start');
      if (!body.preview_url) throw new Error('Runtime did not return a preview URL'); setUrl(body.preview_url); setRuntimeStatus('ready');
    } catch (cause) { setRuntimeStatus('failed'); setError(cause instanceof Error ? cause.message : 'Runtime failed'); }
  };
  useEffect(() => { void start(); return () => { void fetch(`/api/sites/${encodeURIComponent(siteId)}/code/workspace/stop`, {method:'POST',headers:{'X-CSRF-Token':csrf || ''}}); }; }, [siteId]);
  const origin = useMemo(() => { try { return new URL(url).origin; } catch { return ''; } }, [url]);
  useEffect(() => {
    if (!origin) return;
    const onMessage = (event: MessageEvent) => {
      const workspaceId = String((window as any).ZYLORA_STUDIO_CONTEXT?.codeWorkspaceId || '');
      // The local provider scopes the preview identity to the code workspace;
      // the parent still authorizes the workspace through the site endpoint.
      if (workspaceId && isPreviewMessage(event.data, workspaceId, workspaceId, origin, event)) {
        onSelection?.(event.data); if (event.data.type !== 'ELEMENT_SELECTED') return;
        setSelected(event.data); setSource(null);
        const tag = String(event.data.metadata?.tag || ''); const text = String(event.data.metadata?.text || '');
        if (!text || !tag) return;
        fetch(`/api/sites/${encodeURIComponent(siteId)}/code/files`).then(r => r.json()).then(async listing => {
          for (const file of (listing.files || []).filter((f: any) => /\.(jsx|tsx)$/.test(f.path))) {
            const mapped = await fetch(`/api/sites/${encodeURIComponent(siteId)}/code/source/map?path=${encodeURIComponent(file.path)}`).then(r => r.json());
            const exact = (mapped.nodes || []).filter((node: any) => node.elementType === tag && node.text === text);
            if (exact.length === 1) { setSource({...exact[0], filePath:file.path}); setDraft(text); break; }
          }
        }).catch(() => undefined);
      }
    };
    window.addEventListener('message', onMessage); return () => window.removeEventListener('message', onMessage);
  }, [origin, siteId, onSelection]);
  if (status === 'failed') return <section className="code-preview-state" role="alert"><h2>Runtime failed</h2><p>{error}</p><button onClick={() => void start()}>Retry preview</button></section>;
  if (!url) return <section className="code-preview-state" aria-live="polite"><span className="studio-spinner" /><p>{status === 'starting' ? 'Starting runtime…' : 'Creating workspace…'}</p></section>;
  const applyText = async () => { if (!source || !draft.trim()) return; setSaving(true); try { const response = await fetch(`/api/sites/${encodeURIComponent(siteId)}/code/source/text`, {method:'POST',headers:{'Content-Type':'application/json','X-CSRF-Token':csrf || ''},body:JSON.stringify({target:source,value:draft})}); const body=await response.json(); if (!response.ok) throw new Error(body.detail || 'Source edit rejected'); setSource({...source,text:draft}); setRuntimeStatus('source saved · HMR pending'); frame.current?.contentWindow?.postMessage({type:'REQUEST_REFRESH',projectId:source.workspaceId,workspaceId:source.workspaceId},origin); } catch (cause) { setError(cause instanceof Error ? cause.message : 'Source edit failed'); } finally { setSaving(false); } };
  return <div className="code-preview-shell"><iframe ref={frame} className="code-preview-frame" title="Live code project preview" src={url} sandbox="allow-scripts allow-forms allow-modals allow-popups" referrerPolicy="no-referrer" onLoad={() => setRuntimeStatus('ready')} />{selected && <aside className="code-source-popover" aria-live="polite"><strong>{source ? `${source.filePath}:${source.line}` : 'Selected element'}</strong>{source ? <><span>{source.mapping_status === 'exact' ? 'Mapped source' : 'Visual editing unavailable'}</span><textarea value={draft} onChange={e => setDraft(e.target.value)} disabled={saving} /><button onClick={() => void applyText()} disabled={saving || draft === source.text}>{saving ? 'Saving…' : 'Apply text edit'}</button></> : <span>Resolving source… Select static JSX text to edit.</span>}</aside>}</div>;
}
