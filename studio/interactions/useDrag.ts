import { useEffect, useRef, useState } from 'react';
import { Rect } from '../geometry/math';
import { computeSnapping, SnapLine } from '../geometry/snapping';

export function useDrag(
    onDragUpdate: (rect: Rect, snapLines: SnapLine[]) => void,
    onDragEnd: (rect: Rect) => void
) {
    const [isDragging, setIsDragging] = useState(false);
    const stateRef = useRef<{ startPos: { x: number, y: number }, startRect: Rect } | null>(null);

    useEffect(() => {
        if (!isDragging) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!stateRef.current) return;
            const { startPos, startRect } = stateRef.current;
            const dx = e.clientX - startPos.x;
            const dy = e.clientY - startPos.y;
            
            const rawRect = { ...startRect, x: startRect.x + dx, y: startRect.y + dy };
            // Parent bounds stub (could be passed in)
            const parentBounds = { x: 0, y: 0, w: 1000, h: 1000 }; 
            
            const { snappedRect, snapLines } = computeSnapping(rawRect, [], parentBounds);
            onDragUpdate(snappedRect, snapLines);
        };

        const handleMouseUp = (e: MouseEvent) => {
            if (!stateRef.current) return;
            const { startPos, startRect } = stateRef.current;
            const dx = e.clientX - startPos.x;
            const dy = e.clientY - startPos.y;
            
            const rawRect = { ...startRect, x: startRect.x + dx, y: startRect.y + dy };
            const { snappedRect } = computeSnapping(rawRect, [], { x: 0, y: 0, w: 1000, h: 1000 });
            
            onDragEnd(snappedRect);
            setIsDragging(false);
            stateRef.current = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, onDragUpdate, onDragEnd]);

    const startDrag = (e: React.MouseEvent, currentRect: Rect) => {
        e.stopPropagation();
        e.preventDefault();
        stateRef.current = {
            startPos: { x: e.clientX, y: e.clientY },
            startRect: currentRect
        };
        setIsDragging(true);
    };

    return { isDragging, startDrag };
}
