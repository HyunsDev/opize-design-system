import styled from 'styled-components';
import React from 'react';

export const Spacer = styled.div<{ height: number }>`
    user-select: none;
    width: 100%;
    height: ${(props) => props.height}px;
`;
