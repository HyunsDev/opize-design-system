import { styled } from 'styled-components';
import { cv, typos } from '../..';

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
    ${typos.label}
`;

export type StyledSwitchContainerProps = {
    $disabled: boolean;
    $size?: 'small' | 'regular' | 'medium';
};
const getContainerSizeStyle = (size?: 'small' | 'regular' | 'medium') => {
    switch (size) {
        case 'small':
            return cv.var.inputSmHeight;
        case 'regular':
            return cv.var.inputRgHeight;
        case 'medium':
            return cv.var.inputMdHeight;
    }
};
export const StyledSwitchContainer = styled.div<StyledSwitchContainerProps>`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    height: ${(props) => getContainerSizeStyle(props.$size)};
    color: ${(props) => (props.$disabled ? cv.gray400 : cv.foreground)};
`;

export const StyledSwitch = styled.input`
    appearance: none;

    width: 44px;
    height: 24px;
    border: none;
    border-radius: 12px;
    background-color: ${cv.gray200};
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
        background-color: ${cv.primary};

        &::after {
            left: 22px;
            animation: CircleAnimation 250ms cubic-bezier(0, 0, 0.16, 0.99) forwards;
        }
    }
`;

export const StyledSwitchContent = styled.div``;
