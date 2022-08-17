import React from 'react';
import ModalContextProvider from '../hooks/useModal/modalContext';
import TopLoadingContextProvider from '../hooks/useTopLoading/context';

export function OpizeContextProvider({ children }: { children: React.ReactElement }) {
    return (
        <ModalContextProvider>
            <TopLoadingContextProvider>{children}</TopLoadingContextProvider>
        </ModalContextProvider>
    );
}
