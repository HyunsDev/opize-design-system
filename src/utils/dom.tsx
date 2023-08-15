import { Ref, RefObject, useImperativeHandle, useRef } from 'react';

export function canUseDOM(): boolean {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

export const isBrowser = canUseDOM();

export function useDOMRef<T extends HTMLElement = HTMLElement>(
    ref?: RefObject<T | null> | Ref<T | null>
) {
    const domRef = useRef<T>(null);
    useImperativeHandle(ref, () => domRef.current);

    return domRef;
}
