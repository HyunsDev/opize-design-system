import styled, { css } from 'styled-components';
import React from 'react';
import { cv } from '../../style';

export const Label = styled.label<{ required: boolean }>`
    display: block;
    font-size: 14px;
    color: ${cv.text2};
    margin-bottom: 6px;

    ${(props) =>
        props.required &&
        css`
            ::after {
                content: ' *';
            }
        `}
`;
