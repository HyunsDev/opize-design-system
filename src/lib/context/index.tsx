import React from 'react';
import HeaderNoticeProvider from '../hooks/useHeaderNotice/context';
import ModalContextProvider from '../hooks/useModal/modalContext';
import TopLoadingContextProvider from '../hooks/useTopLoading/context';
import LinkContextProvider from './linkContext';

export function OpizeContextProvider({
    children,
    initLink,
}: {
    children: React.ReactElement;
    initLink?: React.ElementType<any>;
}) {
    return (
        <LinkContextProvider initLink={initLink}>
            <ModalContextProvider>
                <HeaderNoticeProvider>
                    <TopLoadingContextProvider>{children}</TopLoadingContextProvider>
                </HeaderNoticeProvider>
            </ModalContextProvider>
        </LinkContextProvider>
    );
}
