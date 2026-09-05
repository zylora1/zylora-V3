import React from 'react';
import { useStudio, Node } from '../store';
import { useResize } from '../interactions/useResize';
import { useDrag } from '../interactions/useDrag';

export function CanvasNode({ nodeId }: { nodeId: string }) {
    const { state, dispatch } = useStudio();
    
    const [rectOverride, setRectOverride] = React.useState<any>(null);

    const handleResizeUpdate = (rect: any) => {
        setRectOverride(rect);
    };

    const handleResizeEnd = (rect: any) => {
        setRectOverride(null);
        if (!state.document) return;
        const node = state.document.pages[state.currentPageId].nodes[nodeId];
        const cssStyles = { ...node.style.css };
        
        const newCss: any = {
            width: `${rect.w}px`,
            height: `${rect.h}px`
        };
        if (cssStyles.position === 'absolute' || cssStyles.position === 'fixed') {
            newCss.left = `${rect.x}px`;
            newCss.top = `${rect.y}px`;
        }
        dispatch({
            type: 'UPDATE_NODE_STYLE',
            payload: {
                nodeId,
                style: newCss
            }
        });
    };

    const { startResize } = useResize(
        { x: 0, y: 0, w: 0, h: 0 }, 
        handleResizeUpdate, 
        handleResizeEnd
    );

    const { startDrag } = useDrag(
        handleResizeUpdate, 
        handleResizeEnd
    );

    if (!state.document) return null;
    const page = state.document.pages[state.currentPageId];
    if (!page) return null;
    
    const node = page.nodes[nodeId];
    if (!node) return null;

    const isSelected = state.selectedNodeIds.indexOf(nodeId) !== -1;
    
    // Combine base styles and breakpoint overrides
    let cssStyles: any = { ...node.style.css };
    if (state.currentBreakpoint !== 'desktop') {
        const bp = state.currentBreakpoint;
        const override = node.responsiveOverrides[bp];
        if (override && override.style) {
            cssStyles = { ...cssStyles, ...override.style.css };
        }
        // Also apply tablet if we are on mobile, for cascading
        if (bp === 'mobile') {
            const tabletOverride = node.responsiveOverrides['tablet'];
            if (tabletOverride && tabletOverride.style) {
                // Ensure mobile overrides take precedence
                cssStyles = { ...cssStyles, ...tabletOverride.style.css, ...(override?.style?.css || {}) };
            }
        }
    }

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // prevent parent selection
        dispatch({ type: 'SELECT_NODE', payload: [nodeId] });
    };
    
    const isAbsolute = cssStyles.position === 'absolute' || cssStyles.position === 'fixed';

    const handlePointerDown = (e: React.PointerEvent) => {
        if (!isAbsolute) return;
        const el = e.currentTarget as HTMLElement;
        startDrag(e as any, { 
            x: parseInt(cssStyles.left) || 0, 
            y: parseInt(cssStyles.top) || 0, 
            w: el.offsetWidth, 
            h: el.offsetHeight 
        });
    };

    const handleDragStart = (e: React.DragEvent) => {
        if (isAbsolute) {
            e.preventDefault();
            return;
        }
        e.stopPropagation();
        e.dataTransfer.setData('studio/node-id', node.id);
    };

    let Tag = 'div' as any;
    if (node.type === 'section') Tag = 'section';
    else if (node.type === 'heading') Tag = 'h2';
    else if (node.type === 'text') Tag = 'p';
    else if (node.type === 'image') Tag = 'img';
    else if (node.type === 'button') Tag = 'button';
    else if (node.type === 'link') Tag = 'a';
    else if (node.type === 'form') Tag = 'form';
    else if (node.type === 'form_field') Tag = 'input';
    else if (node.type === 'navigation') Tag = 'nav';

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const droppedNodeId = e.dataTransfer.getData('studio/node-id');
        if (droppedNodeId && droppedNodeId !== node.id) {
            dispatch({ 
                type: 'REPARENT_NODE', 
                payload: { nodeId: droppedNodeId, newParentId: node.id } 
            });
        }
    };

    // Duplicate variables removed.
    const renderProps: any = {
        style: {
            ...cssStyles,
            ...(rectOverride ? {
                width: `${rectOverride.w}px`,
                height: `${rectOverride.h}px`,
                ...(isAbsolute ? { left: `${rectOverride.x}px`, top: `${rectOverride.y}px` } : {})
            } : {}),
            outline: isSelected ? '2px solid #0055ff' : 'none',
            outlineOffset: isSelected ? '-2px' : '0',
            position: cssStyles.position || 'relative'
        },
        onClick: handleClick,
        onPointerDown: handlePointerDown,
        draggable: !isAbsolute,
        onDragStart: handleDragStart,
        onDragOver: handleDragOver,
        onDrop: handleDrop,
        'data-studio-id': node.id,
        'data-studio-type': node.type,
    };

    const renderResizeHandle = (pos: string) => {
        if (!isSelected) return null;
        const style: any = {
            position: 'absolute',
            width: '8px', height: '8px', background: '#fff', border: '1px solid #0055ff',
            zIndex: 1000
        };
        if (pos.includes('top')) style.top = '-4px';
        if (pos.includes('bottom')) style.bottom = '-4px';
        if (pos.includes('left')) style.left = '-4px';
        if (pos.includes('right')) style.right = '-4px';
        
        if (pos === 'top-left' || pos === 'bottom-right') style.cursor = 'nwse-resize';
        if (pos === 'top-right' || pos === 'bottom-left') style.cursor = 'nesw-resize';
        if (pos === 'top' || pos === 'bottom') { style.cursor = 'ns-resize'; style.left = 'calc(50% - 4px)'; }
        if (pos === 'left' || pos === 'right') { style.cursor = 'ew-resize'; style.top = 'calc(50% - 4px)'; }
        
        return <div key={pos} style={style} onMouseDown={(e) => {
            const el = (e.target as HTMLElement).parentElement;
            if (!el) return;
            const bounds = el.getBoundingClientRect();
            // Actually, we want the node's local position if it's absolute, but for now we extract size
            startResize(e, pos, { 
                x: parseInt(cssStyles.left) || 0, 
                y: parseInt(cssStyles.top) || 0, 
                w: el.offsetWidth, 
                h: el.offsetHeight 
            });
        }} />;
    };

    if (node.type === 'image' && node.content.src) {
        renderProps.src = node.content.src;
        renderProps.alt = node.content.alt;
        return <img {...renderProps} />;
    }

    return (
        <Tag {...renderProps}>
            {isSelected && ['top-left', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left'].map(renderResizeHandle)}
            {node.content.text || node.content.html || null}
            {node.children.map(childId => (
                <CanvasNode key={childId} nodeId={childId} />
            ))}
        </Tag>
    );
}
