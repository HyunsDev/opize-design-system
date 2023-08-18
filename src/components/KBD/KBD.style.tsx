import { styled } from 'styled-components';
import { cv } from '../..';

export const StyledKBD = styled.kbd`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding: 0px 8px;
    height: 28px;
    background-color: ${cv.background};
    border-radius: 6px;
    border: 1px solid ${cv.default200};
    gap: 4px;
`;

export const StyledKBDKey = styled.span`
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${cv.foreground};
`;
