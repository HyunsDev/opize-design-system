import React from 'react';
import HeaderNoticeProvider from '../hooks/useHeaderNotice/context';
import ModalContextProvider from '../hooks/useModal/modalContext';
import TopLoadingContextProvider from '../hooks/useTopLoading/context';
import LinkContextProvider from './linkContext';

export function OpizeContextProvider({ children }: { children: React.ReactElement }) {
    return (
        <LinkContextProvider>
            <ModalContextProvider>
                <HeaderNoticeProvider>
                    <TopLoadingContextProvider>{children}</TopLoadingContextProvider>
                </HeaderNoticeProvider>
            </ModalContextProvider>
        </LinkContextProvider>
    );
}
