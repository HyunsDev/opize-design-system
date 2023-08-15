import React from 'react';
import { ModalContainer } from './ModalContainer';

export interface ModalContextProps {
    isOpen: boolean;
    open: (
        content: React.ReactNode,
        option?: {
            width?: string;
            isPadding?: boolean;
        }
    ) => void;
    close: () => void;
    width?: string;
}

export const ModalContext = React.createContext<ModalContextProps>({
    isOpen: false,
    open: () => {},
    close: () => {},
    width: '500px',
});

export function ModalContextProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [content, setContent] = React.useState<React.ReactNode>();
    const [width, setWidth] = React.useState('fit-content');
    const [isPadding, setIsPadding] = React.useState(true);

    const open = (
        content: React.ReactNode,
        option?: {
            width?: string;
            isPadding?: boolean;
        }
    ) => {
        setContent(content);
        setIsOpen(true);
        if (option?.width) {
            setWidth(option.width);
        }
        if (option?.isPadding !== undefined) {
            setIsPadding(option.isPadding);
        }
    };

    const close = () => {
        setIsOpen(false);
    };

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                open,
                close,
                width,
            }}
        >
            <ModalContainer
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                isPadding={isPadding}
                width={width}
            >
                {content}
            </ModalContainer>
            {children}
        </ModalContext.Provider>
    );
}
