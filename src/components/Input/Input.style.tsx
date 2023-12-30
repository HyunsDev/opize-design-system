import { styled } from 'styled-components';
import { cv, typos } from '../..';

export interface StyledInputOuterContainerProps {
    $width: string;
}
export const StyledInputOuterContainer = styled.div<StyledInputOuterContainerProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.$width};
    gap: 6px;
    transition: 200ms;
`;

export const StyledInputLabel = styled.div`
    ${typos.label}
`;

const getSizeStyle = ({ $size }: StyledInputContainerProps) => {
    switch ($size) {
        case 'small':
            return `
                font-size: ${cv.var.inputMdFontSize};
                height: ${cv.var.inputSmHeight};
                border-radius: ${cv.var.inputSmRound};
            `;
        case 'regular':
            return `
                font-size: ${cv.var.inputMdFontSize};
                height: ${cv.var.inputRgHeight};
                border-radius: ${cv.var.inputRgRound};
            `;
        case 'medium':
            return `
                font-size: ${cv.var.inputMdFontSize};
                height: ${cv.var.inputMdHeight};
                border-radius: ${cv.var.inputMdRound};
            `;
    }
};

export interface StyledInputContainerProps {
    $size: 'small' | 'regular' | 'medium';
    $disabled: boolean;
    $readOnly: boolean;
    $width: string;
    $isError: boolean;
}
export const StyledInputContainer = styled.div<StyledInputContainerProps>`
    display: flex;
    align-items: center;
    transition: 200ms;
    border: solid 1px ${(props) => (props.$isError ? cv.statusRed : cv.border)};
    background-color: ${(props) =>
        props.$disabled || props.$readOnly ? cv.gray100 : cv.background};
    width: ${(props) => props.$width || '100%'};

    ${(props) => getSizeStyle(props)};

    &:focus-within {
        ${(props) =>
            props.$disabled || props.$readOnly
                ? ''
                : `
            border: solid 1px ${cv.gray400};
            background-color: ${cv.background};
        `}
    }
`;

export interface StyledInputProps {
    $size: 'small' | 'regular' | 'medium' | 'large';
    $width?: string;
}

const getInputSizeStyle = ({ $size }: StyledInputProps) => {
    switch ($size) {
        case 'small':
            return `
                padding: ${cv.var.inputSmPadding};
            `;
        case 'regular':
            return `
                padding: ${cv.var.inputRgPadding};
            `;
        case 'medium':
            return `
                padding: ${cv.var.inputMdPadding};
            `;
    }
};

export const StyledInput = styled.input<StyledInputProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    transition: 200ms;
    color: ${cv.foreground};

    ${(props) => getInputSizeStyle(props)};

    &::placeholder {
        color: ${cv.placeholder};
    }

    &:disabled {
        color: ${cv.gray500};
        cursor: not-allowed;
        &::placeholder {
            color: ${cv.placeholder};
        }
    }

    &:read-only {
        color: ${cv.gray500};
        &::placeholder {
            color: ${cv.placeholder};
        }
    }
`;

export const StyledSpinner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 12px;
`;

export const StyledPrefix = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-left: 12px;
`;

export const StyledSuffix = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-right: 12px;
`;
