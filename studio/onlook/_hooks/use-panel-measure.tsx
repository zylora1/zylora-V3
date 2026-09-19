'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export const usePanelMeasurements = (
    leftPanelRef: React.RefObject<HTMLDivElement | null>,
    rightPanelRef: React.RefObject<HTMLDivElement | null>
) => {
    const [toolbarLeft, setToolbarLeft] = useState<number>(0);
    const [toolbarRight, setToolbarRight] = useState<number>(0);
    const [editorBarAvailableWidth, setEditorBarAvailableWidth] = useState<number>(0);

    // Use refs to store current values to avoid effect re-initialization
    const toolbarLeftRef = useRef<number>(0);
    const toolbarRightRef = useRef<number>(0);
    const editorBarAvailableWidthRef = useRef<number>(0);

    const measure = useCallback(() => {
        const left = leftPanelRef.current?.getBoundingClientRect().right ?? 0;
        const right =
            window.innerWidth -
            (rightPanelRef.current?.getBoundingClientRect().left ?? window.innerWidth);

        const availableWidth = window.innerWidth - left - right;

        // ResizeObserver and MutationObserver can both report the same
        // layout repeatedly while the upstream panels mount. Only publish a
        // state change when a measurement actually changed; otherwise the
        // observer -> render -> observer loop can monopolize the browser
        // thread before the editor becomes interactive.
        const leftChanged = Math.abs(left - toolbarLeftRef.current) > 0.5;
        const rightChanged = Math.abs(right - toolbarRightRef.current) > 0.5;
        const widthChanged = Math.abs(availableWidth - editorBarAvailableWidthRef.current) > 0.5;

        toolbarLeftRef.current = left;
        toolbarRightRef.current = right;
        editorBarAvailableWidthRef.current = availableWidth;

        if (leftChanged) setToolbarLeft(left);
        if (rightChanged) setToolbarRight(right);
        if (widthChanged) setEditorBarAvailableWidth(availableWidth);
    }, [leftPanelRef, rightPanelRef]);

    useEffect(() => {
        // Initial measurement
        measure();

        // Measure after DOM paint
        const rafId = requestAnimationFrame(measure);

        // Window resize listener
        const handleResize = () => measure();
        window.addEventListener('resize', handleResize);

        // ResizeObservers for the two panel containers. Observing every
        // descendant and every class/style mutation in the upstream panels
        // creates a large callback fan-out during mount and tab changes while
        // the only value we need is each panel's outer width.
        const observers: ResizeObserver[] = [];

        const createObserver = (element: HTMLElement) => {
            const observer = new ResizeObserver(() => {
                // Use requestAnimationFrame to debounce rapid changes
                requestAnimationFrame(measure);
            });
            observer.observe(element);
            return observer;
        };

        if (leftPanelRef.current) {
            const leftObserver = createObserver(leftPanelRef.current);
            observers.push(leftObserver);
        }

        if (rightPanelRef.current) {
            const rightObserver = createObserver(rightPanelRef.current);
            observers.push(rightObserver);
        }

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('resize', handleResize);
            observers.forEach(observer => observer.disconnect());
        };
    }, [measure]); // Only depend on measure callback, not the state values

    return { toolbarLeft, toolbarRight, editorBarAvailableWidth };
};
