import ModalContextProvider from "../../context/modal/modalContext"
import { createGlobalStyle } from 'styled-components';
import { themes, builtCssVariable } from "../../style";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        ${builtCssVariable}
        ${themes.light}
        transition: 0.125s all ease-in;
        scroll-padding-top: 64px;

        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-family: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    }

    @media (prefers-color-scheme: dark) {
        body {
            ${themes.light}
        }
    }

    body[data-theme='light'] {
        ${themes.light};
    }

    body[data-theme='dark'] {
        ${themes.light};
    }

    a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`

export function OpizeWrapper({ children }: {
    children: React.ReactElement
}) {

    return (
        <>
            <GlobalStyles />
            <ModalContextProvider>
                { children }
            </ModalContextProvider>
        </>
    )
}