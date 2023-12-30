import { ModalContextProvider } from '../../hooks/useModal/Modal.context';
import { TopLoadingContextProvider } from '../../hooks/useTopLoading/TopLoading.context';
import { StyleProvider } from '../../styles';

export function OpizeWrapper({ children }: { children: React.ReactNode }) {
    return (
        <StyleProvider>
            <TopLoadingContextProvider>
                <ModalContextProvider>{children}</ModalContextProvider>
            </TopLoadingContextProvider>
        </StyleProvider>
    );
}
