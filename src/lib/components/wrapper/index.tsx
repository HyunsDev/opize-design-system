import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { themes, builtCssVariable } from '../../style';
import { OpizeContextProvider } from '../../context';
import '../../style/font.css';

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Inter", 'Noto Sans KR', -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
        -webkit-tap-highlight-color : transparent;
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
`;

interface OpizeWrapperProps {
    children: React.ReactElement;
    /**
     * Link를 사용해야 하는 곳에서 사용할 링크 컴포넌트입니다. ex. \<OpizeWrapper initLink={Link}\>...
     */
    initLink?: React.ElementType<any>;
}

/**
 * opize-design-system을 사용하기 위해 필수적으로 사용해야 하는 컴포넌트입니다.
 */
export function OpizeWrapper({ children, initLink }: OpizeWrapperProps) {
    return (
        <>
            <GlobalStyles />
            <OpizeContextProvider initLink={initLink}>{children}</OpizeContextProvider>
        </>
    );
}
