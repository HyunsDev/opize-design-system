import styled from 'styled-components';

import { cv } from '../../style';

export interface DividerProps {
    color?: string;
    margin?: string;
    width?: string;
}

export const Divider = styled.div<DividerProps>`
    position: relative;
    border-bottom: solid 1px ${(props) => props.color || cv.default300};
    ${(props) => props.margin && `margin: ${props.margin} 0px;`}
    ${(props) => props.width && `width: ${props.width};`}
`;
