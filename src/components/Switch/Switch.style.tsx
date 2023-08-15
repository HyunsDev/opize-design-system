import { styled } from 'styled-components';
import { cv } from '../..';

export interface StyledSwitchOuterContainerProps {
    $width: string;
}
export const StyledSwitchOuterContainer = styled.div<StyledSwitchOuterContainerProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.$width};
    gap: 6px;
`;

export const StyledSwitchLabel = styled.div`
    color: ${cv.default600};
    font-size: 12px;
`;

export type StyledSwitchContainerProps = {
    $disabled: boolean;
};
export const StyledSwitchContainer = styled.div<StyledSwitchContainerProps>`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: ${(props) => (props.$disabled ? cv.default400 : cv.foreground)};
`;

export const StyledSwitch = styled.input`
    appearance: none;

    width: 44px;
    height: 24px;
    border: none;
    border-radius: 12px;
    background-color: ${cv.default200};
    transition: 250ms;

    display: flex;
    align-items: center;
    position: relative;

    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
    }

    &::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 4px;
        width: 18px;
        height: 18px;
        border-radius: 10px;
        background-color: ${cv.background};
        transition: 250ms;
    }

    @keyframes CircleAnimation {
        0% {
            transform: scaleX(1);
        }
        50% {
            transform: scaleX(1.3);
        }
        100% {
            transform: scaleX(1);
        }
    }

    &:checked {
        background-color: ${cv.blue};

        &::after {
            left: 22px;
            animation: CircleAnimation 250ms cubic-bezier(0, 0, 0.16, 0.99) forwards;
        }
    }
`;

export const StyledSwitchContent = styled.div``;
