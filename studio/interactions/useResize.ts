import { useEffect, useRef, useState } from 'react';
import { computeResize, Rect } from '../geometry/math';

export function useResize(
    initialRect: Rect,
    onResizeUpdate: (rect: Rect) => void,
    onResizeEnd: (rect: Rect) => void
) {
    const [isResizing, setIsResizing] = useState(false);
    const stateRef = useRef<{ startPos: { x: number, y: number }, startRect: Rect, handle: string } | null>(null);

    useEffect(() => {
        if (!isResizing) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!stateRef.current) return;
            const { startPos, startRect, handle } = stateRef.current;
            const newRect = computeResize(startRect, startPos, { x: e.clientX, y: e.clientY }, handle);
            onResizeUpdate(newRect);
        };

        const handleMouseUp = (e: MouseEvent) => {
            if (!stateRef.current) return;
            const { startPos, startRect, handle } = stateRef.current;
            const newRect = computeResize(startRect, startPos, { x: e.clientX, y: e.clientY }, handle);
            onResizeEnd(newRect);
            setIsResizing(false);
            stateRef.current = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing, onResizeUpdate, onResizeEnd]);

    const startResize = (e: React.MouseEvent, handle: string, currentRect: Rect) => {
        e.stopPropagation();
        e.preventDefault();
        stateRef.current = {
            startPos: { x: e.clientX, y: e.clientY },
            startRect: currentRect,
            handle
        };
        setIsResizing(true);
    };

    return { isResizing, startResize };
}
