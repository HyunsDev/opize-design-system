import React, { createContext, useCallback, useMemo, useState } from 'react';

import { Modal } from '../../components/modal';

export interface ModalContextProps {
    isOpen: boolean;
    open: (content: React.ReactNode, option?: { title?: string; width?: number | string; isPadding?: boolean }) => void;
    close: () => void;
    width: number | string;
    title?: string;
}

export const ModalContext = createContext<ModalContextProps>({
    isOpen: false,
    open: () => null,
    close: () => null,
    width: 400,
});

function ModalContextProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>('');
    const [width, setWidth] = useState<number | string>(350);
    const [title, setTitle] = useState<undefined | string>();
    const [isPadding, setPadding] = useState(true);

    const open = useCallback(
        (
            content: React.ReactNode,
            option?: {
                title?: string;
                width?: number | string;
                isPadding?: boolean;
            }
        ) => {
            setOpen(true);
            setTitle(option?.title);
            setWidth(option?.width || 350);
            setModalContent(content);
            setPadding(option?.isPadding === undefined ? true : option?.isPadding);
        },
        []
    );

    const close = useCallback(() => {
        setOpen(false);
    }, []);

    const value = useMemo(
        () => ({
            isOpen,
            open,
            close,
            width,
            title,
        }),
        [close, isOpen, open, title, width]
    );

    return (
        <ModalContext.Provider value={value}>
            <Modal
                setOpen={setOpen}
                isOpen={isOpen}
                content={modalContent}
                width={width}
                title={title}
                close={() => setOpen(false)}
                isPadding={isPadding}
            />

            {children}
        </ModalContext.Provider>
    );
}

export default ModalContextProvider;
