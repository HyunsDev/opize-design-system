import React from 'react';
import styled, { css } from 'styled-components';
import { cv } from '../../style';

const Header = styled.div`
    grid-area: header;
`;
Header.displayName = 'PageLayout.Header';

const Content = styled.div`
    grid-area: content;
`;
Content.displayName = 'PageLayout.Content';

const Pane = styled.div`
    grid-area: pane;
    min-width: 300px;
    width: 300px;
    max-width: 300px;
    @media (max-width: 767px) {
        max-width: 100%;
        width: 100%;
        min-width: 100%;
    }
`;
Pane.displayName = 'PageLayout.Pane';

const Footer = styled.div`
    grid-area: footer;
`;
Footer.displayName = 'PageLayout.Footer';

const PageLayoutOuter = styled.div<{ backgroundColor: string; marginTop: string }>`
    width: 100%;
    background-color: ${(props) => props.backgroundColor};
    margin-top: ${(props) => props.marginTop};
`;

interface PageLayoutInnerProps {
    width?: string;
    gap?: string;
    panPosition?: 'start' | 'end';
}
const PageLayoutInner = styled.div<PageLayoutInnerProps>`
    display: grid;
    width: ${(props) => props.width || cv.pageWidth};
    max-width: ${(props) => props.width || cv.pageWidth};
    row-gap: ${(props) => props.gap || '8px'};
    margin: 0 auto;
    justify-items: stretch;
    ${(props) =>
        props.panPosition === 'start'
            ? css`
                  grid-template:
                      'header header'
                      'pane content'
                      'footer footer';
                  ${Pane} {
                      margin-right: ${props.gap || '8px'};
                  }
                  grid-template-columns: fit-content(300px) auto;
              `
            : css`
                  grid-template:
                      'header header'
                      'content pane'
                      'footer footer';
                  ${Pane} {
                      margin-left: ${props.gap || '8px'};
                  }
                  grid-template-columns: auto fit-content(300px);
              `}

    @media ( max-width: 767px ) {
        grid-template-areas:
            'header'
            'content'
            'pane'
            'footer';
        ${Pane} {
            margin: 0;
        }
        grid-template-columns: 1fr;
    }
`;

interface PageLayoutRootProps {
    width?: string;
    marginTop?: string;
    gap?: string;
    panPosition?: 'start' | 'end';
    backgroundColor?: string;
    children?: React.ReactNode;
}
function PageLayoutRoot({
    width,
    gap,
    panPosition,
    backgroundColor,
    children,
    marginTop = '0px',
}: PageLayoutRootProps) {
    return (
        <PageLayoutOuter marginTop={marginTop} backgroundColor={backgroundColor || cv.bg_page2}>
            <PageLayoutInner width={width} gap={gap} panPosition={panPosition}>
                {children}
            </PageLayoutInner>
        </PageLayoutOuter>
    );
}

PageLayoutRoot.displayName = 'PageLayout';

/**
 * 일반적인 페이지 레이아웃을 위한 컴포넌트입니다.
 */
export const PageLayout = Object.assign(PageLayoutRoot, {
    Header,
    Content,
    Pane,
    Footer,
});
