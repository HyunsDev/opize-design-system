import { styled } from 'styled-components';
import { cv } from '../..';

interface StyledBoxContainerProps {
    $variant: 'primary' | 'danger';
    $width: string;
}

export const StyledBoxContainer = styled.div<StyledBoxContainerProps>`
    background-color: ${cv.background};
    width: ${(props) => props.$width};
    border: solid 1px ${(props) => (props.$variant === 'primary' ? cv.default200 : cv.red)};
    border-radius: 8px;
    color: ${cv.foreground};
    display: flex;
    flex-direction: column;
    padding: 0px;
`;

export const StyledBoxHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${cv.default100};
    border-bottom: solid 1px ${cv.default200};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 8px 20px;
`;

export const StyledBoxTitle = styled.div`
    font-size: 18px;
    margin-bottom: 8px;
`;

export const StyledBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    padding: 16px 20px;
`;

export const StyledBoxFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${cv.default100};
    border-top: solid 1px ${cv.default200};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 8px 20px;
`;
