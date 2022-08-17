import React, { useContext } from 'react';
import { CodeBlock } from '../../components';
import { ModalContext, ModalContextProps } from './modalContext';

export function useModal(): ModalContextProps {
    return useContext(ModalContext);
}

export function useCodeModal() {
    const modal = useModal();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (title: string, code: any) => {
        modal.open(<CodeBlock>{JSON.stringify(code, null, 2)}</CodeBlock>, {
            title,
        });
    };
}
