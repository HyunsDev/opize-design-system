import styled from 'styled-components';
import React from 'react';

/**
 * display:flex인 일반적인 div 태그입니다.
 */
const FlexLayout = styled.div<{ gap?: string }>`
    display: flex;
    ${(props) => props.gap && `gap: ${props.gap}`};
`;

/**
 * justify-content가 center인 \<Flex\>입니다.
 */
const FlexCenter = styled.div<{ gap?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) => props.gap && `gap: ${props.gap}`};
`;

/**
 * justify-content: space-between 인 \<Flex\>입니다.
 */
const FlexBetween = styled.div<{ gap?: string }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

/**
 * flex-direction: column 인 \<Flex\>입니다.
 */
const FlexColumn = styled.div<{ gap?: string }>`
    display: flex;
    flex-direction: column;
    ${(props) => props.gap && `gap: ${props.gap}`};
`;

/**
 * align-items: center 인 \<Flex\>입니다.
 */
const FlexRow = styled.div<{ gap?: string }>`
    display: flex;
    align-items: center;
    ${(props) => props.gap && `gap: ${props.gap}`};
`;

/**
 * 레이아웃을 위한 컴포넌트입니다.
 */
export const Flex = Object.assign(FlexLayout, {
    Center: FlexCenter,
    Between: FlexBetween,
    Column: FlexColumn,
    Row: FlexRow,
});
