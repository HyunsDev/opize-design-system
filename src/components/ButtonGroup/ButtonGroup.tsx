import { styled } from 'styled-components';

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;

    & > button:not(:last-child):not(:first-child),
    & > div:not(:last-child):not(:first-child) > button {
        border-radius: 0;
        margin-left: -1px;
    }

    & > button:first-child,
    & > div:first-child > button {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    & > button:last-child,
    & > div:last-child > button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin-left: -1px;
    }

    & > button:hover,
    & > div > button:hover {
        z-index: 1;
    }
`;
