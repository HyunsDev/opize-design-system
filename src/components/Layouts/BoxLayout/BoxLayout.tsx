import React from 'react';

import { styled } from 'styled-components';

import { cv } from '../../../deprecated-style';

const BoxLayoutOuter = styled.div<{
    $backgroundColor: string;
    $minHeight: string;
}>`
    width: 100%;
    background-color: ${(props) => props.$backgroundColor};
    display: flex;
    justify-content: center;
    min-height: ${(props) => props.$minHeight};
`;

const BoxLayoutInner = styled.div<{
    $width: string;
    $gutter: string;
    $paddingTop: string;
    $paddingBottom: string;
}>`
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    width: 100%;
    max-width: ${(props) => props.$width};
    margin: 0px ${(props) => props.$gutter};
    padding-top: ${(props) => props.$paddingTop};
    padding-bottom: ${(props) => props.$paddingBottom};

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
    paddingTop?: string;
    paddingBottom?: string;
}
export function BoxLayout({
    width = '1200px',
    gutter = '24px',
    backgroundColor = cv.background,
    children,
    minHeight = 'unset',
    paddingTop = '24px',
    paddingBottom = '24px',
}: BoxLayoutProps) {
    return (
        <BoxLayoutOuter
            $backgroundColor={backgroundColor}
            $minHeight={minHeight}
        >
            <BoxLayoutInner
                $width={width}
                $gutter={gutter}
                $paddingTop={paddingTop}
                $paddingBottom={paddingBottom}
            >
                {children}
            </BoxLayoutInner>
        </BoxLayoutOuter>
    );
}

BoxLayout.displayName = 'BoxLayout';
