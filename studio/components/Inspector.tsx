import React, { useState } from 'react';
import {
  Breakpoint,
  NodeAction,
  NodeActionType,
  NodeGeometry,
  resolveNodeGeometry,
  useStudio,
  isNodeLocked,
} from '../store';
import { StudioIcon } from './StudioIcon';

export function Inspector() {
  const { state, dispatch } = useStudio();
  const [open, setOpen] = useState<Record<string, boolean>>({
    Transform: true,
    Arrange: true,
    Layout: true,
    Typography: true,
    Fill: true,
    Stroke: true,
    Shadow: false,
    Image: true,
    Content: true,
    Actions: false,
    Responsive: false,
    Accessibility: false,
  });

  const [cornersLinked, setCornersLinked] = useState(true);

  const page = state.document?.pages[state.currentPageId];
  const nodes = state.selectedNodeIds.map(id => page?.nodes[id]).filter(Boolean) as any[];

  if (!nodes.length) {
    return (
      <aside className="studio-inspector-panel empty" aria-label="Properties inspector">
        <div className="inspector-empty-state">
          <div className="inspector-empty-icon">
            <StudioIcon name="page" size={24} />
          </div>
          <b>No element selected</b>
          <p>Click any element or layer on the canvas to inspect and edit its properties.</p>
        </div>
      </aside>
    );
  }

  const node = nodes[0];
  const multi = nodes.length > 1;
  const bp = state.currentBreakpoint;
  const pageOptions = Object.values(state.document?.pages || {});
  const legacyAction: NodeAction = node.content?.action || {
    type: node.content?.href ? 'external' : 'none',
    url: node.content?.href || '',
  };

  const isTextLike = ['heading', 'paragraph', 'text', 'button', 'link'].includes(node.type);
  const isContainer = ['section', 'container', 'stack', 'flex', 'grid', 'page'].includes(node.type);
  const isImage = node.type === 'image';
  const geometry = resolveNodeGeometry(node, bp);

  const setAction = (type: NodeActionType, value?: string) => {
    const action: NodeAction =
      type === 'page'
        ? { type, pageId: value }
        : type === 'section'
        ? { type, sectionId: value }
        : type === 'external'
        ? { type, url: value }
        : type === 'email' || type === 'phone'
        ? { type, value }
        : type === 'booking' || type === 'form'
        ? { type, value: value || undefined }
        : { type: 'none' };
    const legacyHref =
      type === 'external'
        ? value
        : type === 'email'
        ? value
          ? `mailto:${value}`
          : undefined
        : type === 'phone'
        ? value
          ? `tel:${value}`
          : undefined
        : undefined;
    dispatch({
      type: 'UPDATE_NODE_CONTENT',
      payload: { nodeId: node.id, content: { action, href: legacyHref } },
    });
  };

  const getStyleVal = (prop: string) => {
    const base = node.style?.css?.[prop] || '';
    const tablet = node.responsiveOverrides?.tablet?.style?.css?.[prop];
    const own = node.responsiveOverrides?.[bp]?.style?.css?.[prop];
    return {
      value: bp === 'desktop' ? base : own !== undefined ? own : bp === 'mobile' && tablet !== undefined ? tablet : base,
      override: bp !== 'desktop' && own !== undefined,
    };
  };

  const updateStyle = (prop: string, v: string) => {
    dispatch({
      type: multi ? 'UPDATE_SELECTED_STYLE' : 'UPDATE_NODE_STYLE',
      ...(multi ? { payload: { [prop]: v } } : { payload: { nodeId: node.id, style: { [prop]: v } } }),
    } as any);
  };

  const updateGeometry = (property: keyof NodeGeometry, value: string | number) => {
    const cssKey: Record<string, string> = {
      x: 'left',
      y: 'top',
      width: 'width',
      height: 'height',
      rotation: 'rotate',
      mode: 'position',
    };
    const css = cssKey[String(property)];
    if (!css) return;

    let formattedVal = String(value);
    if (property === 'rotation') formattedVal = `${Number(value) || 0}deg`;
    else if (property === 'mode') formattedVal = value === 'flow' ? 'relative' : 'absolute';
    else if (['x', 'y', 'width', 'height'].includes(String(property))) formattedVal = `${Math.round(Number(value) || 0)}px`;

    const items = (multi ? nodes : [node]).map(item => ({
      nodeId: item.id,
      geometry: { [css]: formattedVal },
    }));
    dispatch({ type: 'UPDATE_SELECTED_GEOMETRIES', payload: { geometries: items } });
  };

  const toggleSection = (name: string) => setOpen(prev => ({ ...prev, [name]: !prev[name] }));

  // Helper for numeric inputs with Arrow and Shift+Arrow stepping
  const onNumericKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, currentVal: number, onChange: (v: number) => void) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      const step = e.shiftKey ? 10 : 1;
      const delta = e.key === 'ArrowUp' ? step : -step;
      onChange(currentVal + delta);
    }
  };

  return (
    <aside className="studio-inspector-panel" aria-label="Properties inspector">
      {/* 1. SELECTION HEADER */}
      <header className="inspector-header">
        <div className="inspector-title-row">
          <span className="inspector-type-icon">
            <StudioIcon name={multi ? 'duplicate' : isImage ? 'camera' : isTextLike ? 'text' : 'page'} size={15} />
          </span>
          <div className="inspector-title-text">
            {multi ? (
              <b>{nodes.length} items selected</b>
            ) : (
              <input
                className="inspector-rename-input"
                value={node.metadata?.displayName || node.type}
                onChange={e => dispatch({ type: 'RENAME_NODE', payload: { nodeId: node.id, name: e.target.value } })}
                title="Click to rename"
              />
            )}
            <span className="inspector-type-badge">{multi ? 'Selection' : node.type}</span>
          </div>
          {!multi && (
            <div className="inspector-header-actions">
              <button
                className={`inspector-icon-btn ${node.locked ? 'active' : ''}`}
                title={node.locked ? 'Unlock layer' : 'Lock layer'}
                onClick={() => dispatch({ type: 'TOGGLE_NODE_LOCK', payload: { nodeId: node.id } })}
              >
                <StudioIcon name="lock" size={13} />
              </button>
              <button
                className={`inspector-icon-btn ${node.visibility === 'hidden' ? 'muted' : ''}`}
                title={node.visibility === 'hidden' ? 'Show on canvas' : 'Hide on canvas'}
                onClick={() => dispatch({ type: 'TOGGLE_NODE_VISIBILITY', payload: { nodeId: node.id, breakpoint: bp } })}
              >
                <StudioIcon name="eye" size={13} />
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="inspector-scroll-area">
        {/* 2. TRANSFORM (POSITION & SIZE) */}
        <section className="inspector-accordion">
          <button className="accordion-toggle" onClick={() => toggleSection('Transform')}>
            <span className="accordion-title">Position & Size</span>
            <StudioIcon name="chevron-down" size={12} className={open.Transform ? 'open' : ''} />
          </button>
          {open.Transform && (
            <div className="accordion-body">
              <div className="inspector-grid-2x2">
                <div className="inspector-input-group">
                  <label>X</label>
                  <input
                    type="number"
                    value={Math.round(geometry.x)}
                    onChange={e => updateGeometry('x', e.target.value)}
                    onKeyDown={e => onNumericKeyDown(e, Math.round(geometry.x), v => updateGeometry('x', v))}
                  />
                  {bp !== 'desktop' && node.responsiveOverrides?.[bp]?.geometry?.x !== undefined && (
                    <button
                      className="reset-override-btn"
                      title="Reset override"
                      onClick={() => dispatch({ type: 'RESET_NODE_GEOMETRY', payload: { nodeId: node.id, property: 'x', breakpoint: bp } })}
                    >
                      <StudioIcon name="undo" size={10} />
                    </button>
                  )}
                </div>
                <div className="inspector-input-group">
                  <label>Y</label>
                  <input
                    type="number"
                    value={Math.round(geometry.y)}
                    onChange={e => updateGeometry('y', e.target.value)}
                    onKeyDown={e => onNumericKeyDown(e, Math.round(geometry.y), v => updateGeometry('y', v))}
                  />
                  {bp !== 'desktop' && node.responsiveOverrides?.[bp]?.geometry?.y !== undefined && (
                    <button
                      className="reset-override-btn"
                      title="Reset override"
                      onClick={() => dispatch({ type: 'RESET_NODE_GEOMETRY', payload: { nodeId: node.id, property: 'y', breakpoint: bp } })}
                    >
                      <StudioIcon name="undo" size={10} />
                    </button>
                  )}
                </div>
                <div className="inspector-input-group">
                  <label>W</label>
                  <input
                    type="number"
                    min="1"
                    value={Math.round(geometry.width)}
                    onChange={e => updateGeometry('width', e.target.value)}
                    onKeyDown={e => onNumericKeyDown(e, Math.round(geometry.width), v => updateGeometry('width', v))}
                  />
                  {bp !== 'desktop' && node.responsiveOverrides?.[bp]?.geometry?.width !== undefined && (
                    <button
                      className="reset-override-btn"
                      title="Reset override"
                      onClick={() => dispatch({ type: 'RESET_NODE_GEOMETRY', payload: { nodeId: node.id, property: 'width', breakpoint: bp } })}
                    >
                      <StudioIcon name="undo" size={10} />
                    </button>
                  )}
                </div>
                <div className="inspector-input-group">
                  <label>H</label>
                  <input
                    type="number"
                    min="1"
                    value={Math.round(geometry.height)}
                    onChange={e => updateGeometry('height', e.target.value)}
                    onKeyDown={e => onNumericKeyDown(e, Math.round(geometry.height), v => updateGeometry('height', v))}
                  />
                  {bp !== 'desktop' && node.responsiveOverrides?.[bp]?.geometry?.height !== undefined && (
                    <button
                      className="reset-override-btn"
                      title="Reset override"
                      onClick={() => dispatch({ type: 'RESET_NODE_GEOMETRY', payload: { nodeId: node.id, property: 'height', breakpoint: bp } })}
                    >
                      <StudioIcon name="undo" size={10} />
                    </button>
                  )}
                </div>
              </div>

              <div className="inspector-row-flex" style={{ marginTop: '8px' }}>
                <div className="inspector-input-group flex-1">
                  <label>Rotation</label>
                  <input
                    type="number"
                    value={Math.round(geometry.rotation)}
                    onChange={e => updateGeometry('rotation', e.target.value)}
                    onKeyDown={e => onNumericKeyDown(e, Math.round(geometry.rotation), v => updateGeometry('rotation', v))}
                  />
                  <span className="unit-label">°</span>
                </div>
                <div className="inspector-input-group flex-1">
                  <label>Mode</label>
                  <select
                    value={geometry.mode === 'flow' ? 'relative' : 'absolute'}
                    onChange={e => updateGeometry('mode', e.target.value === 'relative' ? 'flow' : 'freeform')}
                  >
                    <option value="absolute">Freeform</option>
                    <option value="relative">Flow</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 3. ALIGNMENT & ARRANGE */}
        <section className="inspector-accordion">
          <button className="accordion-toggle" onClick={() => toggleSection('Arrange')}>
            <span className="accordion-title">Alignment</span>
            <StudioIcon name="chevron-down" size={12} className={open.Arrange ? 'open' : ''} />
          </button>
          {open.Arrange && (
            <div className="accordion-body">
              <div className="alignment-button-strip">
                <button title="Align Left" onClick={() => dispatch({ type: 'ALIGN_SELECTED', payload: 'left' })}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M2 1h2v14H2V1zm4 3h8v2H6V4zm0 6h6v2H6v-2z"/></svg>
                </button>
                <button title="Align Horizontal Center" onClick={() => dispatch({ type: 'ALIGN_SELECTED', payload: 'horizontal-center' })}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M7 1h2v14H7V1zm-4 3h10v2H3V4zm2 6h6v2H5v-2z"/></svg>
                </button>
                <button title="Align Right" onClick={() => dispatch({ type: 'ALIGN_SELECTED', payload: 'right' })}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M12 1h2v14h-2V1zm-8 3h6v2H4V4zm-2 6h8v2H2v-2z"/></svg>
                </button>
                <button title="Align Top" onClick={() => dispatch({ type: 'ALIGN_SELECTED', payload: 'top' })}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M1 2h14v2H1V2zm3 4v8h2V6H4zm6 0v6h2V6h-2z"/></svg>
                </button>
                <button title="Align Vertical Middle" onClick={() => dispatch({ type: 'ALIGN_SELECTED', payload: 'vertical-center' })}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M1 7h14v2H1V7zm3-4v10h2V3H4zm6 2v6h2V5h-2z"/></svg>
                </button>
                <button title="Align Bottom" onClick={() => dispatch({ type: 'ALIGN_SELECTED', payload: 'bottom' })}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M1 12h14v2H1v-2zm3-8v6h2V4H4zm6-2v8h2V2h-2z"/></svg>
                </button>
              </div>
              {multi && (
                <div className="distribute-button-strip" style={{ marginTop: '6px' }}>
                  <button onClick={() => dispatch({ type: 'DISTRIBUTE_SELECTED', payload: 'horizontal-gap' })}>Distribute X</button>
                  <button onClick={() => dispatch({ type: 'DISTRIBUTE_SELECTED', payload: 'vertical-gap' })}>Distribute Y</button>
                </div>
              )}
            </div>
          )}
        </section>

        {/* 4. LAYOUT SYSTEM (FREEFORM VS FLEX CONTAINER) */}
        {isContainer && (
          <section className="inspector-accordion">
            <button className="accordion-toggle" onClick={() => toggleSection('Layout')}>
              <span className="accordion-title">Layout System</span>
              <StudioIcon name="chevron-down" size={12} className={open.Layout ? 'open' : ''} />
            </button>
            {open.Layout && (
              <div className="accordion-body">
                <div className="inspector-field">
                  <label>Display</label>
                  <select
                    value={getStyleVal('display').value || 'block'}
                    onChange={e => updateStyle('display', e.target.value)}
                  >
                    <option value="block">Freeform (Absolute)</option>
                    <option value="flex">Flexbox (Stack)</option>
                    <option value="grid">Grid</option>
                  </select>
                </div>
                {getStyleVal('display').value === 'flex' && (
                  <>
                    <div className="inspector-grid-2x2" style={{ marginTop: '8px' }}>
                      <div className="inspector-input-group">
                        <label>Direction</label>
                        <select
                          value={getStyleVal('flexDirection').value || 'row'}
                          onChange={e => updateStyle('flexDirection', e.target.value)}
                        >
                          <option value="row">Horizontal</option>
                          <option value="column">Vertical</option>
                        </select>
                      </div>
                      <div className="inspector-input-group">
                        <label>Gap</label>
                        <input
                          placeholder="16px"
                          value={getStyleVal('gap').value}
                          onChange={e => updateStyle('gap', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="inspector-grid-2x2" style={{ marginTop: '8px' }}>
                      <div className="inspector-input-group">
                        <label>Align</label>
                        <select
                          value={getStyleVal('alignItems').value || 'stretch'}
                          onChange={e => updateStyle('alignItems', e.target.value)}
                        >
                          <option value="flex-start">Start</option>
                          <option value="center">Center</option>
                          <option value="flex-end">End</option>
                          <option value="stretch">Stretch</option>
                        </select>
                      </div>
                      <div className="inspector-input-group">
                        <label>Justify</label>
                        <select
                          value={getStyleVal('justifyContent').value || 'flex-start'}
                          onChange={e => updateStyle('justifyContent', e.target.value)}
                        >
                          <option value="flex-start">Start</option>
                          <option value="center">Center</option>
                          <option value="flex-end">End</option>
                          <option value="space-between">Space Between</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </section>
        )}

        {/* 5. TYPOGRAPHY */}
        {isTextLike && (
          <section className="inspector-accordion">
            <button className="accordion-toggle" onClick={() => toggleSection('Typography')}>
              <span className="accordion-title">Typography</span>
              <StudioIcon name="chevron-down" size={12} className={open.Typography ? 'open' : ''} />
            </button>
            {open.Typography && (
              <div className="accordion-body">
                <div className="inspector-field">
                  <label>Font Family</label>
                  <select
                    value={getStyleVal('fontFamily').value || 'Inter'}
                    onChange={e => updateStyle('fontFamily', e.target.value)}
                  >
                    <option value="Inter, sans-serif">Inter</option>
                    <option value="Roboto, sans-serif">Roboto</option>
                    <option value="'Plus Jakarta Sans', sans-serif">Plus Jakarta Sans</option>
                    <option value="'Space Grotesk', sans-serif">Space Grotesk</option>
                    <option value="'Playfair Display', serif">Playfair Display</option>
                    <option value="system-ui, sans-serif">System UI</option>
                  </select>
                </div>

                <div className="inspector-grid-2x2" style={{ marginTop: '8px' }}>
                  <div className="inspector-input-group">
                    <label>Weight</label>
                    <select
                      value={getStyleVal('fontWeight').value || '400'}
                      onChange={e => updateStyle('fontWeight', e.target.value)}
                    >
                      <option value="300">Light 300</option>
                      <option value="400">Regular 400</option>
                      <option value="500">Medium 500</option>
                      <option value="600">SemiBold 600</option>
                      <option value="700">Bold 700</option>
                      <option value="800">ExtraBold 800</option>
                    </select>
                  </div>
                  <div className="inspector-input-group">
                    <label>Size</label>
                    <input
                      placeholder="16px"
                      value={getStyleVal('fontSize').value}
                      onChange={e => updateStyle('fontSize', e.target.value)}
                    />
                  </div>
                </div>

                <div className="inspector-grid-2x2" style={{ marginTop: '8px' }}>
                  <div className="inspector-input-group">
                    <label>Line Height</label>
                    <input
                      placeholder="1.5"
                      value={getStyleVal('lineHeight').value}
                      onChange={e => updateStyle('lineHeight', e.target.value)}
                    />
                  </div>
                  <div className="inspector-input-group">
                    <label>Spacing</label>
                    <input
                      placeholder="0px"
                      value={getStyleVal('letterSpacing').value}
                      onChange={e => updateStyle('letterSpacing', e.target.value)}
                    />
                  </div>
                </div>

                <div className="inspector-row-flex" style={{ marginTop: '8px' }}>
                  <div className="inspector-btn-strip">
                    {(['left', 'center', 'right', 'justify'] as const).map(align => (
                      <button
                        key={align}
                        className={getStyleVal('textAlign').value === align ? 'active' : ''}
                        onClick={() => updateStyle('textAlign', align)}
                      >
                        {align[0].toUpperCase()}
                      </button>
                    ))}
                  </div>
                  <div className="color-swatch-picker">
                    <input
                      type="color"
                      value={getStyleVal('color').value || '#18181A'}
                      onChange={e => updateStyle('color', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* 6. FILL */}
        <section className="inspector-accordion">
          <button className="accordion-toggle" onClick={() => toggleSection('Fill')}>
            <span className="accordion-title">Fill</span>
            <StudioIcon name="chevron-down" size={12} className={open.Fill ? 'open' : ''} />
          </button>
          {open.Fill && (
            <div className="accordion-body">
              <div className="inspector-row-flex">
                <div className="color-swatch-picker">
                  <input
                    type="color"
                    value={getStyleVal('backgroundColor').value || '#ffffff'}
                    onChange={e => updateStyle('backgroundColor', e.target.value)}
                  />
                </div>
                <input
                  className="hex-color-input"
                  placeholder="#FFFFFF"
                  value={getStyleVal('backgroundColor').value}
                  onChange={e => updateStyle('backgroundColor', e.target.value)}
                />
                <div className="inspector-input-group" style={{ width: '80px' }}>
                  <label>Opacity</label>
                  <input
                    type="number"
                    min="0"
                    max="1"
                    step="0.05"
                    placeholder="1"
                    value={getStyleVal('opacity').value || '1'}
                    onChange={e => updateStyle('opacity', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 7. STROKE & CORNERS */}
        <section className="inspector-accordion">
          <button className="accordion-toggle" onClick={() => toggleSection('Stroke')}>
            <span className="accordion-title">Stroke & Corners</span>
            <StudioIcon name="chevron-down" size={12} className={open.Stroke ? 'open' : ''} />
          </button>
          {open.Stroke && (
            <div className="accordion-body">
              <div className="inspector-grid-2x2">
                <div className="inspector-input-group">
                  <label>Width</label>
                  <input
                    placeholder="0px"
                    value={getStyleVal('borderWidth').value}
                    onChange={e => updateStyle('borderWidth', e.target.value)}
                  />
                </div>
                <div className="inspector-input-group">
                  <label>Style</label>
                  <select
                    value={getStyleVal('borderStyle').value || 'none'}
                    onChange={e => updateStyle('borderStyle', e.target.value)}
                  >
                    <option value="none">None</option>
                    <option value="solid">Solid</option>
                    <option value="dashed">Dashed</option>
                    <option value="dotted">Dotted</option>
                  </select>
                </div>
              </div>

              <div className="inspector-row-flex" style={{ marginTop: '8px' }}>
                <div className="color-swatch-picker">
                  <input
                    type="color"
                    value={getStyleVal('borderColor').value || '#000000'}
                    onChange={e => updateStyle('borderColor', e.target.value)}
                  />
                </div>
                <input
                  className="hex-color-input"
                  placeholder="#000000"
                  value={getStyleVal('borderColor').value}
                  onChange={e => updateStyle('borderColor', e.target.value)}
                />
              </div>

              <div className="inspector-field" style={{ marginTop: '8px' }}>
                <div className="field-header-row">
                  <label>Corner Radius</label>
                  <button
                    className={`link-toggle-btn ${cornersLinked ? 'active' : ''}`}
                    onClick={() => setCornersLinked(v => !v)}
                    title={cornersLinked ? 'Unlink corners' : 'Link all corners'}
                  >
                    {cornersLinked ? 'Linked' : 'Separate'}
                  </button>
                </div>
                {cornersLinked ? (
                  <input
                    placeholder="0px"
                    value={getStyleVal('borderRadius').value}
                    onChange={e => updateStyle('borderRadius', e.target.value)}
                  />
                ) : (
                  <div className="inspector-grid-2x2">
                    <input
                      placeholder="TL"
                      value={getStyleVal('borderTopLeftRadius').value}
                      onChange={e => updateStyle('borderTopLeftRadius', e.target.value)}
                    />
                    <input
                      placeholder="TR"
                      value={getStyleVal('borderTopRightRadius').value}
                      onChange={e => updateStyle('borderTopRightRadius', e.target.value)}
                    />
                    <input
                      placeholder="BL"
                      value={getStyleVal('borderBottomLeftRadius').value}
                      onChange={e => updateStyle('borderBottomLeftRadius', e.target.value)}
                    />
                    <input
                      placeholder="BR"
                      value={getStyleVal('borderBottomRightRadius').value}
                      onChange={e => updateStyle('borderBottomRightRadius', e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        {/* 8. SHADOWS */}
        <section className="inspector-accordion">
          <button className="accordion-toggle" onClick={() => toggleSection('Shadow')}>
            <span className="accordion-title">Shadow</span>
            <StudioIcon name="chevron-down" size={12} className={open.Shadow ? 'open' : ''} />
          </button>
          {open.Shadow && (
            <div className="accordion-body">
              <div className="inspector-field">
                <label>Box Shadow</label>
                <input
                  placeholder="0 4px 12px rgba(0,0,0,0.1)"
                  value={getStyleVal('boxShadow').value}
                  onChange={e => updateStyle('boxShadow', e.target.value)}
                />
              </div>
              <div className="shadow-preset-strip" style={{ marginTop: '6px' }}>
                <button onClick={() => updateStyle('boxShadow', 'none')}>None</button>
                <button onClick={() => updateStyle('boxShadow', '0 2px 8px rgba(0,0,0,0.08)')}>Subtle</button>
                <button onClick={() => updateStyle('boxShadow', '0 8px 24px rgba(0,0,0,0.14)')}>Medium</button>
                <button onClick={() => updateStyle('boxShadow', '0 16px 40px rgba(0,0,0,0.22)')}>Deep</button>
              </div>
            </div>
          )}
        </section>

        {/* 9. IMAGE FRAME */}
        {isImage && (
          <section className="inspector-accordion">
            <button className="accordion-toggle" onClick={() => toggleSection('Image')}>
              <span className="accordion-title">Image Frame</span>
              <StudioIcon name="chevron-down" size={12} className={open.Image ? 'open' : ''} />
            </button>
            {open.Image && (
              <div className="accordion-body">
                <div className="inspector-field">
                  <label>Image Source URL</label>
                  <input
                    value={node.content?.src || ''}
                    onChange={e => dispatch({ type: 'UPDATE_NODE_CONTENT', payload: { nodeId: node.id, content: { src: e.target.value } } })}
                  />
                </div>
                <div className="inspector-field">
                  <label>Alt Text</label>
                  <input
                    value={node.content?.alt || ''}
                    onChange={e => dispatch({ type: 'UPDATE_NODE_CONTENT', payload: { nodeId: node.id, content: { alt: e.target.value } } })}
                  />
                </div>
                <div className="inspector-field">
                  <label>Object Fit</label>
                  <select
                    value={getStyleVal('objectFit').value || 'cover'}
                    onChange={e => updateStyle('objectFit', e.target.value)}
                  >
                    <option value="cover">Cover (Fill & Crop)</option>
                    <option value="contain">Contain (Fit Whole)</option>
                    <option value="fill">Fill (Stretch)</option>
                  </select>
                </div>
                <button
                  className="wide-action-btn"
                  onClick={() => dispatch({ type: 'SET_CROP_MODE', payload: node.id })}
                >
                  Adjust Crop & Focal Point
                </button>
              </div>
            )}
          </section>
        )}

        {/* 10. TEXT CONTENT & ACTION LINKS */}
        {!multi && (
          <section className="inspector-accordion">
            <button className="accordion-toggle" onClick={() => toggleSection('Actions')}>
              <span className="accordion-title">Link & Action</span>
              <StudioIcon name="chevron-down" size={12} className={open.Actions ? 'open' : ''} />
            </button>
            {open.Actions && (
              <div className="accordion-body">
                <div className="inspector-field">
                  <label>Trigger Action</label>
                  <select
                    value={legacyAction.type}
                    onChange={e => setAction(e.target.value as NodeActionType, legacyAction.type === 'page' ? legacyAction.pageId : legacyAction.url)}
                  >
                    <option value="none">No Action</option>
                    <option value="page">Internal Page</option>
                    <option value="section">Section Anchor</option>
                    <option value="external">External Link</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>
                {legacyAction.type === 'page' && (
                  <div className="inspector-field">
                    <label>Target Page</label>
                    <select
                      value={legacyAction.pageId || ''}
                      onChange={e => setAction('page', e.target.value)}
                    >
                      <option value="">Select page...</option>
                      {pageOptions.map(p => (
                        <option key={p.id} value={p.id}>{p.name} (/{p.slug === 'home' ? '' : p.slug})</option>
                      ))}
                    </select>
                  </div>
                )}
                {legacyAction.type === 'external' && (
                  <div className="inspector-field">
                    <label>Destination URL</label>
                    <input
                      placeholder="https://example.com"
                      value={legacyAction.url || ''}
                      onChange={e => setAction('external', e.target.value)}
                    />
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* 11. RESPONSIVE OVERRIDES */}
        {!multi && (
          <section className="inspector-accordion">
            <button className="accordion-toggle" onClick={() => toggleSection('Responsive')}>
              <span className="accordion-title">Responsive Overrides</span>
              <StudioIcon name="chevron-down" size={12} className={open.Responsive ? 'open' : ''} />
            </button>
            {open.Responsive && (
              <div className="accordion-body">
                <div className="responsive-mode-indicator">
                  <span>Current View: <b>{bp.toUpperCase()}</b></span>
                  <button
                    className="small-toggle-btn"
                    onClick={() => dispatch({ type: 'TOGGLE_NODE_VISIBILITY', payload: { nodeId: node.id, breakpoint: bp } })}
                  >
                    {node.visibility === 'hidden' ? 'Show on ' + bp : 'Hide on ' + bp}
                  </button>
                </div>
                <p className="panel-hint">
                  Styles edited in Tablet or Mobile view automatically create local responsive overrides without affecting Desktop base.
                </p>
              </div>
            )}
          </section>
        )}
      </div>
    </aside>
  );
}
