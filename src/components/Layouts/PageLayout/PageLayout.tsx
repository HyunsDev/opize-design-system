import React from 'react';

import styled from 'styled-components';

import { cv } from '../../../style';

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
`;
Content.displayName = 'PageLayout.Content';

const Pane = styled.div<{
    width?: string;
}>`
    width: 100%;
    max-width: ${(props) => props.width || '250px'};

    @media (max-width: 767px) {
        max-width: 100%;
        width: 100%;
        min-width: 100%;
    }
`;
Pane.displayName = 'PageLayout.Pane';

const PageLayoutOuter = styled.div<{
    minHeight: string;
    backgroundColor: string;
}>`
    flex: 1;
    width: 100%;
    background-color: ${(props) => props.backgroundColor};
    display: flex;
    justify-content: center;
    min-height: ${(props) => props.minHeight};
`;

interface PageLayoutInnerProps {
    width: string;
    gap: string;
    gutter: string;
    panePosition: string;
}
const PageLayoutInner = styled.div<PageLayoutInnerProps>`
    display: flex;
    width: 100%;
    max-width: ${(props) => props.width};
    justify-items: stretch;
    margin: 0px ${(props) => props.gutter};
    gap: ${(props) => props.gap};

    @media (max-width: 767px) {
        margin: 0px 8px;
        flex-direction: ${(props) => (props.panePosition === 'left' ? 'column-reverse' : 'column')};
    }
`;

interface PageLayoutRootProps {
    width?: string;
    gap?: string;
    backgroundColor?: string;
    children?: React.ReactNode;
    gutter?: string;
    minHeight?: string;
    panePosition?: 'left' | 'right';
}
function PageLayoutRoot({
    width = '1200px',
    gap = '20px',
    gutter = '24px',
    backgroundColor = cv.background,
    children,
    minHeight = 'unset',
    panePosition = 'left',
}: PageLayoutRootProps) {
    return (
        <PageLayoutOuter
            minHeight={minHeight}
            backgroundColor={backgroundColor}
        >
            <PageLayoutInner
                width={width}
                gap={gap}
                gutter={gutter}
                panePosition={panePosition}
            >
                {children}
            </PageLayoutInner>
        </PageLayoutOuter>
    );
}

PageLayoutRoot.displayName = 'PageLayout';

export const PageLayout = Object.assign(PageLayoutRoot, {
    Content,
    Pane,
});
