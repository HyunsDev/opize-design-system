import React from 'react';

import { styled } from 'styled-components';

import { cv } from '../../../style';

const PageLayoutOuter = styled.div<{
    $backgroundColor: string;
    $minHeight: string;
}>`
    width: 100%;
    background-color: ${(props) => props.$backgroundColor};
    display: flex;
    justify-content: center;
    min-height: ${(props) => props.$minHeight};
`;

const PageLayoutInner = styled.div<{
    $width: string;
    $gutter: string;
}>`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${(props) => props.$width};
    margin: 0px ${(props) => props.$gutter};

    @media (max-width: 767px) {
        margin: 0px 8px;
    }
`;

interface BoxLayoutProps {
    width?: string;
    backgroundColor?: string;
    children?: React.ReactNode;
    gutter?: string;
    minHeight?: string;
}
export function BoxLayout({
    width = '1200px',
    gutter = '24px',
    backgroundColor = cv.background,
    children,
    minHeight = 'unset',
}: BoxLayoutProps) {
    return (
        <PageLayoutOuter
            $backgroundColor={backgroundColor}
            $minHeight={minHeight}
        >
            <PageLayoutInner
                $width={width}
                $gutter={gutter}
            >
                {children}
            </PageLayoutInner>
        </PageLayoutOuter>
    );
}

BoxLayout.displayName = 'BoxLayout';
