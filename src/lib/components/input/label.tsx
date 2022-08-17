import styled, { css } from 'styled-components';
import React from 'react';
import { cv } from '../../style';

export const Label = styled.label<{ required: boolean }>`
    display: block;
    font-size: 12px;
    color: ${cv.text3};
    margin-bottom: 4px;

    ${(props) =>
        props.required &&
        css`
            ::after {
                content: ' *';
            }
        `}
`;
