import styled from 'styled-components';
import React from 'react';
import { cv } from '../../style';

export interface SpacerProps {
    width?: number;
    height: number;
    children?: React.ReactNode;
    backgroundColor?: string;
    color?: string;
}

/**
 * 빈 공간을 생성하기 위한 컴포넌트입니다.
 */
export const Spacer = styled.div<SpacerProps>`
    user-select: none;
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height}px;
    background-color: ${(props) => props.backgroundColor || 'transparent'};
    color: ${(props) => props.color || cv.text1};
    display: flex;
    align-items: center;
    justify-content: center;
`;
