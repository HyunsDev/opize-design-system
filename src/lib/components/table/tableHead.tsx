import React from 'react';
import styled from 'styled-components';
import { cv } from '../../style';

export const TableHead = styled.th`
    color: ${cv.text2};
    background-color: ${cv.bg_element2};
    padding: 0;
    padding: 10px 10px;
    font-weight: ${cv.fontWeightRegular};
    font-size: 12px;

    border-bottom: solid 1px ${cv.border4};
    border-top: solid 1px ${cv.border4};
    border-left: solid 1px ${cv.bg_element2};
    border-right: solid 1px ${cv.bg_element2};

    &:first-child {
        border-left: solid 1px ${cv.border4};
        border-radius: 4px 0px 0px 4px;
    }
    &:last-child {
        border-right: solid 1px ${cv.border4};
        border-radius: 0px 4px 4px 0px;
    }
`;
