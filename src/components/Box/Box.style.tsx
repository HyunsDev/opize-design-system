import { styled } from 'styled-components';
import { cv } from '../..';

interface StyledBoxContainerProps {
    $variant: 'primary' | 'danger';
    $width: string;
}

export const StyledBoxContainer = styled.div<StyledBoxContainerProps>`
    background-color: ${cv.background};
    width: ${(props) => props.$width};
    border: solid 1px ${(props) => (props.$variant === 'primary' ? cv.gray200 : cv.statusRed)};
    border-radius: 5px;
    color: ${cv.text};
    display: flex;
    flex-direction: column;
    padding: 0px;
`;

export const StyledBoxHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${cv.gray100};
    border-bottom: solid 1px ${cv.border};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
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
    padding: 24px 20px;
`;

export const StyledBoxFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: solid 1px ${cv.border};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 8px 20px;
`;
