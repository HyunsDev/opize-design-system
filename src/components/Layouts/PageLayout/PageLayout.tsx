import React from 'react';

import { styled } from 'styled-components';

import { cv } from '../../../style';

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: auto;
    box-sizing: border-box;
`;
Content.displayName = 'PageLayout.Content';

const Pane = styled.div<{
    width?: string;
}>`
    width: 100%;
    max-width: ${(props) => props.width || '250px'};
    min-width: ${(props) => props.width || '250px'};

    @media (max-width: 767px) {
        max-width: 100%;
        width: 100%;
        min-width: 100%;
    }
`;
Pane.displayName = 'PageLayout.Pane';

const PageLayoutOuter = styled.div<{
    $minHeight: string;
    $backgroundColor: string;
}>`
    flex: 1;
    width: 100%;
    background-color: ${(props) => props.$backgroundColor};
    display: flex;
    justify-content: center;
    min-height: ${(props) => props.$minHeight};
`;

interface PageLayoutInnerProps {
    $width: string;
    $gap: string;
    $gutter: string;
    $panePosition: string;
    $paddingTop: string;
    $paddingBottom: string;
}
const PageLayoutInner = styled.div<PageLayoutInnerProps>`
    display: flex;
    width: 100%;
    max-width: ${(props) => props.$width};
    justify-items: stretch;
    gap: ${(props) => props.$gap};
    padding-left: ${(props) => props.$gutter};
    padding-right: ${(props) => props.$gutter};
    padding-top: ${(props) => props.$paddingTop};
    padding-bottom: ${(props) => props.$paddingBottom};

    @media (max-width: 767px) {
        padding-left: 0px;
        padding-right: 0px;
        flex-direction: ${(props) =>
            props.$panePosition === 'left' ? 'column-reverse' : 'column'};
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
    paddingTop?: string;
    paddingBottom?: string;
}
function PageLayoutRoot({
    width = '1200px',
    gap = '20px',
    gutter = '24px',
    backgroundColor = cv.background,
    children,
    minHeight = 'unset',
    panePosition = 'left',
    paddingTop = '24px',
    paddingBottom = '24px',
}: PageLayoutRootProps) {
    return (
        <PageLayoutOuter
            $minHeight={minHeight}
            $backgroundColor={backgroundColor}
        >
            <PageLayoutInner
                $width={width}
                $gap={gap}
                $gutter={gutter}
                $panePosition={panePosition}
                $paddingTop={paddingTop}
                $paddingBottom={paddingBottom}
            >
                {children}
            </PageLayoutInner>
        </PageLayoutOuter>
    );
}

PageLayoutRoot.displayName = 'PageLayout';

export { Content as PageLayoutContent, Pane as PageLayoutPane };
export const PageLayout = Object.assign(PageLayoutRoot, {
    Content,
    Pane,
});
