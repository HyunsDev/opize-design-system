import React from 'react';
import styled, { css } from 'styled-components';
import { cv } from '../../style';

const Header = styled.div`
    grid-area: header;
`;
Header.displayName = 'PageLayout.Header';

const Content = styled.div`
    grid-area: content;
    max-width: 100%;
`;
Content.displayName = 'PageLayout.Content';

const Pane = styled.div`
    grid-area: pane;
    min-width: var(--local-pan-width);
    width: var(--local-pan-width);
    max-width: var(--local-pan-width);

    margin-left: var(--local-pan-margin-left);
    margin-right: var(--local-pan-margin-right);

    @media (max-width: 767px) {
        max-width: 100%;
        width: 100%;
        min-width: 100%;

        margin-left: 0px;
        margin-right: 0px;
    }
`;
Pane.displayName = 'PageLayout.Pane';

const Footer = styled.div`
    grid-area: footer;
`;
Footer.displayName = 'PageLayout.Footer';

const PageLayoutOuter = styled.div<{ minHeight: string; backgroundColor: string; marginTop: string; padding: string }>`
    width: 100%;
    background-color: ${(props) => props.backgroundColor};
    margin-top: ${(props) => props.marginTop};
    display: flex;
    justify-content: center;
    padding: ${(props) => props.padding};
    min-height: ${(props) => props.minHeight};
`;

interface PageLayoutInnerProps {
    width: string;
    gap: string;
    panPosition: 'start' | 'end';
    gutter: string;
    panWidth: string;
}
const PageLayoutInner = styled.div<PageLayoutInnerProps>`
    display: grid;
    width: 100%;
    max-width: ${(props) => props.width};
    row-gap: ${(props) => props.gap};
    justify-items: stretch;
    margin: 0px ${(props) => props.gutter};

    --local-pan-width: ${(props) => props.panWidth};
    --local-pan-margin-left: ${(props) => (props.panPosition === 'start' ? '0px' : props.gap)};
    --local-pan-margin-right: ${(props) => (props.panPosition === 'end' ? '0px' : props.gap)};

    ${(props) =>
        props.panPosition === 'start'
            ? css`
                  grid-template:
                      'header header'
                      'pane content'
                      'footer footer';
                  grid-template-columns: fit-content(300px) auto;
              `
            : css`
                  grid-template:
                      'header header'
                      'content pane'
                      'footer footer';
                  grid-template-columns: auto fit-content(300px);
              `}

    @media ( max-width: 767px ) {
        grid-template-areas:
            'header'
            'content'
            'pane'
            'footer';
        grid-template-columns: 1fr;
        margin: 0px 8px;
    }
`;

interface PageLayoutRootProps {
    width?: string;
    marginTop?: string;
    gap?: string;
    panPosition?: 'start' | 'end';
    backgroundColor?: string;
    children?: React.ReactNode;
    gutter?: string;
    panWidth?: string;
    padding?: string;
    minHeight?: string;
}
function PageLayoutRoot({
    width = cv.pageWidth,
    gap = '8px',
    gutter = '24px',
    panPosition = 'end',
    backgroundColor = cv.bg_page2,
    children,
    marginTop = '0px',
    panWidth = '300px',
    padding = '0px',
    minHeight = 'unset',
}: PageLayoutRootProps) {
    return (
        <PageLayoutOuter
            minHeight={minHeight}
            marginTop={marginTop}
            backgroundColor={backgroundColor}
            padding={padding}
        >
            <PageLayoutInner width={width} gap={gap} panPosition={panPosition} gutter={gutter} panWidth={panWidth}>
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
