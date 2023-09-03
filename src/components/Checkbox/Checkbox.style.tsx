import { styled } from 'styled-components';
import { cv } from '../..';

export interface StyledCheckboxOuterContainerProps {
    $width: string;
}
export const StyledCheckboxOuterContainer = styled.div<StyledCheckboxOuterContainerProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.$width};
    gap: 6px;
`;

export const StyledCheckboxLabel = styled.div`
    color: ${cv.default600};
    font-size: 12px;
`;

export type StyledCheckboxContainerProps = {
    $disabled: boolean;
};
export const StyledCheckboxContainer = styled.div<StyledCheckboxContainerProps>`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: ${(props) => (props.$disabled ? cv.default400 : cv.foreground)};
`;

export interface StyledCheckboxProps {
    $size: 'small' | 'medium' | 'large';
}

const getSizeStyle = ({ $size }: StyledCheckboxProps) => {
    switch ($size) {
        case 'small':
            return `
                width: 16px;
                height: 16px;
                border-radius: 4px;
            `;
        case 'medium':
            return `
                width: 24px;
                height: 24px;
                border-radius: 4px;
            `;
        case 'large':
            return `
                width: 32px;
                height: 32px;
                border-radius: 6px;
            `;
    }
};

export const StyledCheckbox = styled.input<StyledCheckboxProps>`
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 200ms;

    border: solid 1px ${cv.default200};
    background-color: ${cv.background};
    cursor: pointer;

    ${(props) => getSizeStyle(props)};

    &:disabled {
        cursor: not-allowed;
        background-color: ${cv.default400};
        border: solid 1px ${cv.default400};
    }

    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='white' fill='transparent' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpolyline points='19 7 10 17 5 12' /%3E%3C/svg%3E");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: ${cv.blue};
        border: solid 1px ${cv.blue};

        &:disabled {
            background-color: ${cv.default400};
            border: solid 1px ${cv.default400};
        }
    }
`;

export const StyledCheckboxContent = styled.div``;
