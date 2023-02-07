import React from 'react';
import styled from 'styled-components';
import { cv } from '../../../style';

type Align = 'flex-start' | 'center' | 'flex-end';
export const TableHead = styled.th<{ flex?: number; width?: string; $align?: Align }>`
    color: ${cv.text2};
    background-color: ${cv.bg_element2};

    flex: ${(props) => (props.width ? 'unset' : props.flex || 1)};
    ${(props) => props.width && `width: ${props.width};`}
    padding: 0px 10px;
    min-height: 40px;

    display: flex;
    align-items: center;
    justify-content: ${(props) => props.$align || 'flex-start'};

    font-weight: ${cv.fontWeightRegular};
    font-size: 12px;

    border-bottom: solid 1px ${cv.border4};
    border-top: solid 1px ${cv.border4};
    border-radius: 0;

    &:first-child {
        border-left: solid 1px ${cv.border4};
        border-radius: 4px 0px 0px 4px;
    }
    &:last-child {
        border-right: solid 1px ${cv.border4};
        border-radius: 0px 4px 4px 0px;
    }
`;
