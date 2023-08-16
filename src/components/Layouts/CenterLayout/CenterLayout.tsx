import React from 'react';

import { styled } from 'styled-components';

import { cv } from '../../../style';

const CenterLayoutOuter = styled.div<{
    $backgroundColor: string;
    $minHeight: string;
}>`
    width: 100%;
    background-color: ${(props) => props.$backgroundColor};
    display: flex;
    justify-content: center;
    min-height: ${(props) => props.$minHeight};
`;

interface CenterLayoutInnerProps {
    $width: string;
    $gutter: string;
}
const CenterLayoutInner = styled.div<CenterLayoutInnerProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${(props) => props.$width};
    margin: 0px ${(props) => props.$gutter};

    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
        margin: 0px 8px;
    }
`;

interface CenterLayoutProps {
    width?: string;
    backgroundColor?: string;
    children?: React.ReactNode;
    gutter?: string;
    minHeight?: string;
}
export function CenterLayout({
    width = '1200px',
    gutter = '24px',
    backgroundColor = cv.background,
    children,
    minHeight = 'unset',
}: CenterLayoutProps) {
    return (
        <CenterLayoutOuter
            $backgroundColor={backgroundColor}
            $minHeight={minHeight}
        >
            <CenterLayoutInner
                $width={width}
                $gutter={gutter}
            >
                {children}
            </CenterLayoutInner>
        </CenterLayoutOuter>
    );
}

CenterLayout.displayName = 'CenterLayout';
