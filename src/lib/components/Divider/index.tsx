import styled from 'styled-components';
import React from 'react';
import { cv } from '../../style';

export interface DividerProps {
    /**
     * Divider 상하에 들아가는 margin 입니다.
     */
    margin?: string;
}

/**
 * 구분선
 */
export const Divider = styled.div<DividerProps>`
    position: relative;
    border-bottom: solid 1px ${cv.border3};
    ${(props) => props.margin && `margin: ${props.margin} 0px;`}
`;
