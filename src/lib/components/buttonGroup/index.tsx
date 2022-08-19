import styled from 'styled-components';
import React from 'react';

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;

    & > button {
        border-radius: 0;
        margin-left: -1px;
    }

    & > button:hover {
        z-index: 1;
    }

    & > button:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        margin-left: 0px;
    }

    & > button:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
`;
