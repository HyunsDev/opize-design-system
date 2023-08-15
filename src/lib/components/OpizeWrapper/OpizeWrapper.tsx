import { createGlobalStyle } from 'styled-components';
import { colorCSSVariables } from '../../style/colors/colorPalette';
import { ModalContextProvider } from '../../hooks/useModal/Modal.context';
import { TopLoadingContextProvider } from '../../hooks/useTopLoading/TopLoading.context';

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Inter", 'Noto Sans KR', -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
        -webkit-tap-highlight-color : transparent;
    }

    :root {
        ${colorCSSVariables.light}
        transition: 0.125s all ease-in;
        scroll-padding-top: 64px;

        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        touch-action: manipulation;

        color: var(--text1);
        font-size: var(--fontSize400);
    }

    @media (prefers-color-scheme: dark) {
        body {
            ${colorCSSVariables.dark};
            background-color: var(--bg-page2);
        }
    }

    body[data-theme='light'] {
        ${colorCSSVariables.light};
        background-color: var(--bg-page2);

        * {
            ::selection {
                background: #74fde0;
            }
        }
    }

    body[data-theme='dark'] {
        ${colorCSSVariables.dark};
        background-color: var(--bg-page2);

        * {
            ::selection {
                background: #7270ff;
            }
        }
    }

    a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;

export type OpizeWrapperProps = {
    children: React.ReactNode;
};

export function OpizeWrapper({ children }: OpizeWrapperProps) {
    return (
        <>
            <GlobalStyles />
            <TopLoadingContextProvider>
                <ModalContextProvider>{children}</ModalContextProvider>
            </TopLoadingContextProvider>
        </>
    );
}
