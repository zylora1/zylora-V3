import React, { useEffect, useRef, useState } from 'react';
import type { ExplicitGuide } from '../geometry/snapping';

export interface GuideItem extends ExplicitGuide {
  id: string;
}

interface RulersAndGuidesProps {
  zoom: number;
  panX: number;
  panY: number;
  artboardWidth: number;
  artboardHeight?: number;
  guides: GuideItem[];
  onGuidesChange: (guides: GuideItem[]) => void;
  showGuides?: boolean;
}

const RULER_SIZE = 20;

export function RulersAndGuides({
  zoom,
  panX,
  panY,
  artboardWidth,
  guides,
  onGuidesChange,
  showGuides = true,
}: RulersAndGuidesProps) {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [activeGuideId, setActiveGuideId] = useState<string | null>(null);
  const hCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const vCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mouse move listener across canvas container to update cursor ticks on rulers
  useEffect(() => {
    const container = containerRef.current?.parentElement;
    if (!container) return;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const screenX = e.clientX - rect.left;
      const screenY = e.clientY - rect.top;
      // Convert to artboard coordinates
      const artboardX = (screenX - panX) / zoom;
      const artboardY = (screenY - panY) / zoom;
      setMousePos({ x: Math.round(artboardX), y: Math.round(artboardY) });
    };

    const onPointerLeave = () => setMousePos(null);

    container.addEventListener('pointermove', onPointerMove, { passive: true });
    container.addEventListener('pointerleave', onPointerLeave, { passive: true });

    return () => {
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [zoom, panX, panY]);

  // Determine tick step based on zoom
  const getTickInterval = (z: number) => {
    if (z < 0.35) return { minor: 50, major: 250 };
    if (z < 0.7) return { minor: 20, major: 100 };
    if (z < 1.4) return { minor: 10, major: 50 };
    return { minor: 5, major: 25 };
  };

  // Draw Horizontal Ruler
  useEffect(() => {
    const canvas = hCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = '#18181A';
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = '#2E2E32';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height - 0.5);
    ctx.lineTo(width, height - 0.5);
    ctx.stroke();

    const { minor, major } = getTickInterval(zoom);

    // Calculate start and end in artboard coordinates
    const startX = Math.floor((-panX) / zoom / minor) * minor - 100;
    const endX = Math.ceil((width - panX) / zoom / minor) * minor + 100;

    ctx.fillStyle = '#8A8A93';
    ctx.font = '9px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';

    ctx.strokeStyle = '#3A3A40';
    ctx.beginPath();

    for (let x = startX; x <= endX; x += minor) {
      const screenX = Math.round(panX + x * zoom) + 0.5;
      if (screenX < 0 || screenX > width) continue;

      const isMajor = x % major === 0;
      const isOrigin = x === 0 || x === artboardWidth;
      const tickHeight = isOrigin ? height : isMajor ? 9 : 4;

      ctx.moveTo(screenX, height - tickHeight);
      ctx.lineTo(screenX, height);

      if (isMajor && !isOrigin) {
        ctx.fillText(`${x}`, screenX + 3, height / 2 - 1);
      }
    }
    ctx.stroke();

    // Highlight artboard bounds on ruler
    const artboardLeft = Math.round(panX) + 0.5;
    const artboardRight = Math.round(panX + artboardWidth * zoom) + 0.5;

    ctx.strokeStyle = '#7D2CFF';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    if (artboardLeft >= 0 && artboardLeft <= width) {
      ctx.moveTo(artboardLeft, 0);
      ctx.lineTo(artboardLeft, height);
    }
    if (artboardRight >= 0 && artboardRight <= width) {
      ctx.moveTo(artboardRight, 0);
      ctx.lineTo(artboardRight, height);
    }
    ctx.stroke();

    // Mouse tracker line on horizontal ruler
    if (mousePos) {
      const mouseScreenX = Math.round(panX + mousePos.x * zoom) + 0.5;
      if (mouseScreenX >= 0 && mouseScreenX <= width) {
        ctx.strokeStyle = '#00E5FF';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(mouseScreenX, 0);
        ctx.lineTo(mouseScreenX, height);
        ctx.stroke();
      }
    }
  }, [zoom, panX, panY, artboardWidth, mousePos]);

  // Draw Vertical Ruler
  useEffect(() => {
    const canvas = vCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = '#18181A';
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = '#2E2E32';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width - 0.5, 0);
    ctx.lineTo(width - 0.5, height);
    ctx.stroke();

    const { minor, major } = getTickInterval(zoom);

    const startY = Math.floor((-panY) / zoom / minor) * minor - 100;
    const endY = Math.ceil((height - panY) / zoom / minor) * minor + 100;

    ctx.fillStyle = '#8A8A93';
    ctx.font = '9px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    ctx.strokeStyle = '#3A3A40';
    ctx.beginPath();

    for (let y = startY; y <= endY; y += minor) {
      const screenY = Math.round(panY + y * zoom) + 0.5;
      if (screenY < 0 || screenY > height) continue;

      const isMajor = y % major === 0;
      const isOrigin = y === 0;
      const tickWidth = isOrigin ? width : isMajor ? 9 : 4;

      ctx.moveTo(width - tickWidth, screenY);
      ctx.lineTo(width, screenY);

      if (isMajor && !isOrigin) {
        ctx.save();
        ctx.translate(2, screenY + 2);
        ctx.fillText(`${y}`, 0, 0);
        ctx.restore();
      }
    }
    ctx.stroke();

    // Highlight artboard top
    const artboardTop = Math.round(panY) + 0.5;
    ctx.strokeStyle = '#7D2CFF';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    if (artboardTop >= 0 && artboardTop <= height) {
      ctx.moveTo(0, artboardTop);
      ctx.lineTo(width, artboardTop);
    }
    ctx.stroke();

    // Mouse tracker line on vertical ruler
    if (mousePos) {
      const mouseScreenY = Math.round(panY + mousePos.y * zoom) + 0.5;
      if (mouseScreenY >= 0 && mouseScreenY <= height) {
        ctx.strokeStyle = '#00E5FF';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, mouseScreenY);
        ctx.lineTo(width, mouseScreenY);
        ctx.stroke();
      }
    }
  }, [zoom, panX, panY, mousePos]);

  // Handle resizing canvas resolution to match client display
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const parent = containerRef.current.parentElement;
        if (parent) {
          const w = parent.clientWidth;
          const h = parent.clientHeight;
          if (hCanvasRef.current) {
            hCanvasRef.current.width = Math.max(10, w - RULER_SIZE);
            hCanvasRef.current.height = RULER_SIZE;
          }
          if (vCanvasRef.current) {
            vCanvasRef.current.width = RULER_SIZE;
            vCanvasRef.current.height = Math.max(10, h - RULER_SIZE);
          }
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dragging a new guide from horizontal ruler
  const startDragHorizontalGuide = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const id = `guide_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    const startY = Math.round((e.clientY - panY) / zoom);
    const newGuide: GuideItem = { id, orientation: 'horizontal', position: startY };
    const updatedGuides = [...guides, newGuide];
    onGuidesChange(updatedGuides);
    setActiveGuideId(id);

    const onMove = (moveEvent: PointerEvent) => {
      const currentY = Math.round((moveEvent.clientY - panY) / zoom);
      onGuidesChange(updatedGuides.map(g => (g.id === id ? { ...g, position: currentY } : g)));
    };

    const onUp = (upEvent: PointerEvent) => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      // If dropped back in top ruler area, remove guide
      if (upEvent.clientY < RULER_SIZE + 40) {
        onGuidesChange(guides.filter(g => g.id !== id));
      }
      setActiveGuideId(null);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  // Dragging a new guide from vertical ruler
  const startDragVerticalGuide = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const id = `guide_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    const startX = Math.round((e.clientX - panX) / zoom);
    const newGuide: GuideItem = { id, orientation: 'vertical', position: startX };
    const updatedGuides = [...guides, newGuide];
    onGuidesChange(updatedGuides);
    setActiveGuideId(id);

    const onMove = (moveEvent: PointerEvent) => {
      const currentX = Math.round((moveEvent.clientX - panX) / zoom);
      onGuidesChange(updatedGuides.map(g => (g.id === id ? { ...g, position: currentX } : g)));
    };

    const onUp = (upEvent: PointerEvent) => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      // If dropped back in left ruler area, remove guide
      if (upEvent.clientX < RULER_SIZE + 40) {
        onGuidesChange(guides.filter(g => g.id !== id));
      }
      setActiveGuideId(null);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  // Moving an existing guide on canvas
  const startMoveGuide = (e: React.PointerEvent, guide: GuideItem) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveGuideId(guide.id);

    const onMove = (moveEvent: PointerEvent) => {
      if (guide.orientation === 'horizontal') {
        const currentY = Math.round((moveEvent.clientY - panY) / zoom);
        onGuidesChange(guides.map(g => (g.id === guide.id ? { ...g, position: currentY } : g)));
      } else {
        const currentX = Math.round((moveEvent.clientX - panX) / zoom);
        onGuidesChange(guides.map(g => (g.id === guide.id ? { ...g, position: currentX } : g)));
      }
    };

    const onUp = (upEvent: PointerEvent) => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      if (guide.orientation === 'horizontal' && upEvent.clientY < RULER_SIZE + 40) {
        onGuidesChange(guides.filter(g => g.id !== guide.id));
      } else if (guide.orientation === 'vertical' && upEvent.clientX < RULER_SIZE + 40) {
        onGuidesChange(guides.filter(g => g.id !== guide.id));
      }
      setActiveGuideId(null);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  return (
    <div className="studio-rulers-container" ref={containerRef} aria-hidden="true">
      {/* Origin Corner */}
      <div
        className="ruler-corner"
        title="Toggle Guides (Shift+R)"
        onClick={() => onGuidesChange(guides.length ? [] : [{ id: 'default', orientation: 'vertical', position: 0 }])}
      >
        <span>px</span>
      </div>

      {/* Top Horizontal Ruler */}
      <div className="ruler-horizontal-wrap" onPointerDown={startDragHorizontalGuide} title="Drag down to create guide">
        <canvas ref={hCanvasRef} className="ruler-canvas ruler-horizontal" />
      </div>

      {/* Left Vertical Ruler */}
      <div className="ruler-vertical-wrap" onPointerDown={startDragVerticalGuide} title="Drag right to create guide">
        <canvas ref={vCanvasRef} className="ruler-canvas ruler-vertical" />
      </div>

      {/* Canvas Guides Overlay */}
      {showGuides && (
        <div className="studio-guides-layer" style={{ pointerEvents: 'none' }}>
          {guides.map(guide => {
            const isHorizontal = guide.orientation === 'horizontal';
            const screenCoord = isHorizontal ? panY + guide.position * zoom : panX + guide.position * zoom;
            const isSelected = activeGuideId === guide.id;

            return (
              <div
                key={guide.id}
                className={`studio-user-guide ${guide.orientation}${isSelected ? ' active' : ''}`}
                style={{
                  position: 'absolute',
                  [isHorizontal ? 'top' : 'left']: `${screenCoord}px`,
                  [isHorizontal ? 'left' : 'top']: 0,
                  [isHorizontal ? 'right' : 'bottom']: 0,
                  pointerEvents: 'auto',
                  cursor: isHorizontal ? 'ns-resize' : 'ew-resize',
                  zIndex: 100,
                }}
                onPointerDown={e => startMoveGuide(e, guide)}
                onDoubleClick={() => onGuidesChange(guides.filter(g => g.id !== guide.id))}
              >
                <span className="guide-coord-badge">
                  {isHorizontal ? `Y: ${guide.position}px` : `X: ${guide.position}px`}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
