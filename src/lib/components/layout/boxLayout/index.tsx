import React from 'react';

import styled from 'styled-components';

import { cv } from '../../../style';

const PageLayoutOuter = styled.div<{
    backgroundColor: string;
    marginTop: string;
    padding: string;
    minHeight: string;
}>`
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
    gutter: string;
}
const PageLayoutInner = styled.div<PageLayoutInnerProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${(props) => props.width};
    gap: ${(props) => props.gap};
    margin: 0px ${(props) => props.gutter};

    @media (max-width: 767px) {
        margin: 0px 8px;
    }
`;

interface BoxLayoutProps {
    width?: string;
    marginTop?: string;
    gap?: string;
    backgroundColor?: string;
    children?: React.ReactNode;
    gutter?: string;
    padding?: string;
    minHeight?: string;
}
export function BoxLayout({
    width = cv.pageWidth,
    gap = '8px',
    gutter = '24px',
    backgroundColor = cv.bg_page2,
    children,
    marginTop = '0px',
    padding = '0px',
    minHeight = 'unset',
}: BoxLayoutProps) {
    return (
        <PageLayoutOuter
            marginTop={marginTop}
            backgroundColor={backgroundColor}
            padding={padding}
            minHeight={minHeight}
        >
            <PageLayoutInner
                width={width}
                gap={gap}
                gutter={gutter}
            >
                {children}
            </PageLayoutInner>
        </PageLayoutOuter>
    );
}

BoxLayout.displayName = 'BoxLayout';
