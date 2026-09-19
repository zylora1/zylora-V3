import { postPreviewMessage, PreviewPayload, SourceMetadata } from './bridge';

type InstrumentOptions = { projectId: string; workspaceId: string; parentOrigin: string; sourceMap?: Record<string, SourceMetadata> };

export function installPreviewInstrumentation(options: InstrumentOptions): () => void {
  const { projectId, workspaceId, parentOrigin, sourceMap = {} } = options;
  const ids = new WeakMap<Element, string>(); let serial = 0; let selected: Element | null = null; let hover: Element | null = null;
  const idFor = (element: Element) => { let id = ids.get(element); if (!id) { id = `dom_${++serial}`; ids.set(element, id); element.setAttribute('data-zylora-dom-id', id); } return id; };
  const metadata = (element: Element): PreviewPayload => {
    const id = idFor(element); const rect = element.getBoundingClientRect();
    const parent = element.parentElement; const source = sourceMap[id];
    return { type:'ELEMENT_METADATA', projectId, workspaceId, elementId:id, parentId:parent ? idFor(parent) : null,
      bounds:{x:rect.x,y:rect.y,width:rect.width,height:rect.height},
      metadata:{tag:element.tagName.toLowerCase(), role:element.getAttribute('role'), text:(element.textContent || '').trim().slice(0,240), children:Array.from(element.children).map(idFor)}, source };
  };
  const send = (message: PreviewPayload) => { try { postPreviewMessage(window.parent, parentOrigin, message); } catch { /* never break the customer app */ } };
  const outline = (element: Element | null, kind: 'hover'|'selected', on: boolean) => { if (!element) return; const attr = kind === 'hover' ? 'data-zylora-hover' : 'data-zylora-selected'; if (on) element.setAttribute(attr, 'true'); else element.removeAttribute(attr); };
  const onMove = (event: MouseEvent) => { const target = event.target instanceof Element ? event.target : null; if (target === hover) return; outline(hover, 'hover', false); hover = target; outline(hover, 'hover', true); if (hover) send({...metadata(hover), type:'ELEMENT_HOVER'}); };
  const onClick = (event: MouseEvent) => { const target = event.target instanceof Element ? event.target : null; if (!target) return; event.stopPropagation(); outline(selected, 'selected', false); selected = target; outline(selected, 'selected', true); send({...metadata(target), type:'ELEMENT_SELECTED'}); };
  const onResize = () => { if (selected) { const item = metadata(selected); send({...item, type:'ELEMENT_BOUNDS'}); } };
  document.addEventListener('mousemove', onMove, true); document.addEventListener('click', onClick, true); window.addEventListener('resize', onResize);
  send({type:'PREVIEW_READY', projectId, workspaceId, metadata:{instrumented:true}});
  return () => { document.removeEventListener('mousemove', onMove, true); document.removeEventListener('click', onClick, true); window.removeEventListener('resize', onResize); outline(hover,'hover',false); outline(selected,'selected',false); };
}
