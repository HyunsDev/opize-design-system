import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightSemanticColorPalette, lightBaseColorPalette, colorCSSVariable } from './colors';
import { typos } from './typo';
import { styleVariables, variableCSSVariable } from './variable';
import { cv } from '.';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color : transparent;
    }

    :root {
        ${colorCSSVariable};
        ${variableCSSVariable};
        transition: 0.125s all ease-in;
        scroll-padding-top: 64px;

        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        touch-action: manipulation;
    }

    body {
        background-color: ${cv.background};
        color: ${cv.text};
        font-size: 400;
    }

    a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;

const themes = {
    color: {
        ...lightSemanticColorPalette,
        base: lightBaseColorPalette,
    },
    typo: typos,
    var: styleVariables,
};

export type Theme = typeof themes;

export function StyleProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={themes}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
}
