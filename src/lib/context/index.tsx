import React from 'react';
import SlideBoxContextProvider from '../components/slideBox/context/slideBox.context';
import ColorThemeProvider from '../hooks/useColorTheme/colorThemeContext';
import HeaderNoticeProvider from '../hooks/useHeaderNotice/context';
import ModalContextProvider from '../hooks/useModal/modalContext';
import TopLoadingContextProvider from '../hooks/useTopLoading/context';
import LinkContextProvider from './linkContext';
import TabNavContextProvider from './tabNavContext/tabNavContext';

export function OpizeContextProvider({
    children,
    initLink,
}: {
    children: React.ReactElement;
    initLink?: React.ElementType<any>;
}) {
    return (
        <ColorThemeProvider>
            <LinkContextProvider initLink={initLink}>
                <ModalContextProvider>
                    <HeaderNoticeProvider>
                        <TabNavContextProvider>
                            <TopLoadingContextProvider>
                                <SlideBoxContextProvider>{children}</SlideBoxContextProvider>
                            </TopLoadingContextProvider>
                        </TabNavContextProvider>
                    </HeaderNoticeProvider>
                </ModalContextProvider>
            </LinkContextProvider>
        </ColorThemeProvider>
    );
}
