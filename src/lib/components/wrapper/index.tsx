import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { themes, builtCssVariable } from '../../style';
import { OpizeContextProvider } from '../../context';
import { CvThemeProvider } from '../../style/cvThemeProvider';

const BaseGLobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color : transparent;
    }

    :root {
        ${builtCssVariable}
        ${themes.light}
        scroll-padding-top: 64px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        touch-action: manipulation;
    }

    @media (prefers-color-scheme: dark) {
        body {
            ${themes.dark};
        }
    }

    body[data-theme='light'] {
        ${themes.light};
    }

    body[data-theme='dark'] {
        ${themes.dark};
    }

    a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Inter", 'Noto Sans KR', -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
        -webkit-tap-highlight-color : transparent;
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
            ${themes.dark};
            background-color: var(--bg-page2);
        }
    }

    body[data-theme='light'] {
        ${themes.light};
        background-color: var(--bg-page2);

        * {
            ::selection {
                background: #74fde0;
            }
        }
    }

    body[data-theme='dark'] {
        ${themes.dark};
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

interface OpizeWrapperProps {
    children: React.ReactNode;
    /**
     * Link를 사용해야 하는 곳에서 사용할 링크 컴포넌트입니다. ex. \<OpizeWrapper initLink={Link}\>...
     */
    initLink?: React.ElementType<any>;
    /**
     * Opize Design System의 기본 스타일 (폰트, 배경색, 텍스트 선택 배경 등) 적용 유뮤입니다. 기본값은 true입니다.
     */
    applyDefaultStyle?: boolean;
}

/**
 * opize-design-system을 사용하기 위해 필수적으로 사용해야 하는 컴포넌트입니다.
 */
export function OpizeWrapper({ children, initLink = 'a', applyDefaultStyle = true }: OpizeWrapperProps) {
    return (
        <>
            {applyDefaultStyle ? <GlobalStyles /> : <BaseGLobalStyles />}
            <OpizeContextProvider initLink={initLink}>
                <CvThemeProvider>{children}</CvThemeProvider>
            </OpizeContextProvider>
        </>
    );
}
