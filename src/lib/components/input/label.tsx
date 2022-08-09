import styled, { css } from "styled-components";
import { cv } from "../../style";
import React from "react";

export const Label = styled.label<{required: Boolean}>`
    display: block;
    font-size: 12px;
    color: ${cv.text3};
    margin-bottom: 4px;

    ${props => props.required && css`
        ::after {
            content: ' *'
        }
    `}
`