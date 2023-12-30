import { styled } from 'styled-components';
import { cv } from '../..';

export const StyledPageHeadContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 128px;
    border-bottom: 1px solid ${cv.border};
`;

export interface StyledPageHeadProps {
    $width: string;
}
export const StyledPageHead = styled.div<StyledPageHeadProps>`
    display: flex;
    align-items: center;
    width: ${(props) => props.$width};
    justify-content: space-between;
    margin: 0 24px;
`;

export const StyledPageHeadTitle = styled.h1`
    font-size: 32px;
    font-weight: 500;
    color: ${cv.foreground};
`;

export const StyledPageHeadContent = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;
