import styled from 'styled-components';
import React from 'react';

const FlexLayout = styled.div`
    display: flex;
`;

const FlexCenter = styled.div<{ gap?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) => props.gap && `gap: ${props.gap}`};
`;

const FlexBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const FlexColumn = styled.div<{ gap?: string }>`
    display: flex;
    flex-direction: column;
    ${(props) => props.gap && `gap: ${props.gap}`};
`;

const FlexRow = styled.div<{ gap?: string }>`
    display: flex;
    align-items: center;
    ${(props) => props.gap && `gap: ${props.gap}`};
`;

export const Flex = Object.assign(FlexLayout, {
    Center: FlexCenter,
    Between: FlexBetween,
    Column: FlexColumn,
    Row: FlexRow,
});
