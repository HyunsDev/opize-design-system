import { createGlobalStyle } from 'styled-components';
import { themes, builtCssVariable } from "../../style";
import { OpizeContextProvider } from "../../context";
import React from 'react';
import '../../style/font.css'

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Inter", -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
        ::selection {
            background: #74fde0;
        }
    }

    :root {
        ${builtCssVariable}
        ${themes.light}
        transition: 0.125s all ease-in;
        scroll-padding-top: 64px;

        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        touch-action: manipulation;
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
            <OpizeContextProvider>
                { children }
            </OpizeContextProvider>
        </>
    )
}