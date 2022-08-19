import styled from 'styled-components';
import React from 'react';

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;

    & > button,
    & > div > button {
        border-radius: 0;
        margin-left: -1px;
    }

    & > button:hover,
    & > div > button:hover {
        z-index: 1;
    }

    & > button:first-child,
    & > div:first-child > button {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        margin-left: 0px;
    }

    & > button:last-child,
    & > div:last-child > button {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
`;
