import React, { createContext, useCallback, useMemo, useState } from 'react';
import { Modal } from '../../components/modal';

export interface HeaderNoticeContextProps {
    open: (content: React.ReactNode) => void;
    close: () => void;
    isOpen: boolean;
    content: React.ReactNode;
}

export const HeaderNoticeContext = createContext<HeaderNoticeContextProps>({
    open: () => null,
    close: () => null,
    isOpen: false,
    content: '',
});

function HeaderNoticeProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setOpen] = useState(false);
    const [headerNoticeContent, setHeaderNoticeContent] = useState<React.ReactNode>('');

    const open = useCallback((content: React.ReactNode) => {
        setOpen(true);
        setHeaderNoticeContent(content);
    }, []);

    const close = useCallback(() => {
        setOpen(false);
    }, []);

    const value = useMemo(
        () => ({
            isOpen,
            open,
            close,
            content: headerNoticeContent,
        }),
        [close, headerNoticeContent, isOpen, open]
    );

    return <HeaderNoticeContext.Provider value={value}>{children}</HeaderNoticeContext.Provider>;
}

export default HeaderNoticeProvider;
