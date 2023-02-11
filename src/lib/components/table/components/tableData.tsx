import React from 'react';
import styled from 'styled-components';
import { cv } from '../../../style';

type Align = 'flex-start' | 'center' | 'flex-end';
export const TableData = styled.td<{ flex?: number; width?: string; $align?: Align }>`
    flex: ${(props) => (props.width ? 'unset' : props.flex || 1)};
    ${(props) => props.width && `width: ${props.width};`}
    padding: 0px 10px;
    min-height: 52px;

    display: flex;
    align-items: center;
    justify-content: ${(props) => props.$align || 'flex-start'};

    border-bottom: solid 1px ${cv.border4};
`;
TableData.displayName = 'Table.Data';
