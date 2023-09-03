import { styled } from 'styled-components';
import { cv } from '../..';

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
    color: ${cv.default600};
    font-size: 12px;
`;

const getSizeStyle = ({ $size }: StyledInputContainerProps) => {
    switch ($size) {
        case 'small':
            return `
                font-size: ${cv.formFontSizeSmall};
                height: ${cv.formHeightSmall};
                border-radius: ${cv.formBorderRadiusSmall};
            `;
        case 'regular':
            return `
                font-size: ${cv.formFontSizeRegular};
                height: ${cv.formHeightRegular};
                border-radius: ${cv.formBorderRadiusRegular};
            `;
        case 'medium':
            return `
                font-size: ${cv.formFontSizeMedium};
                height: ${cv.formHeightMedium};
                border-radius: ${cv.formBorderRadiusMedium};
            `;
        case 'large':
            return `
                font-size: ${cv.formFontSizeLarge};
                height: ${cv.formHeightLarge};
                border-radius: ${cv.formBorderRadiusLarge};
            `;
    }
};

export interface StyledInputContainerProps {
    $size: 'small' | 'regular' | 'medium' | 'large';
    $disabled: boolean;
    $readOnly: boolean;
    $width: string;
    $isError: boolean;
}
export const StyledInputContainer = styled.div<StyledInputContainerProps>`
    display: flex;
    align-items: center;
    transition: 200ms;
    border: solid 1px ${(props) => (props.$isError ? cv.red : cv.default200)};
    background-color: ${(props) =>
        props.$disabled || props.$readOnly ? cv.default100 : cv.background};
    width: ${(props) => props.$width || '100%'};

    ${(props) => getSizeStyle(props)};

    &:focus-within {
        ${(props) =>
            props.$disabled || props.$readOnly
                ? ''
                : `
            border: solid 1px ${cv.default400};
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
                padding: 0px 8px;
            `;
        case 'regular':
            return `
                padding: 0px 10px;
            `;
        case 'medium':
            return `
                padding: 0px 12px;
            `;
        case 'large':
            return `
                padding: 0px 16px;
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
        color: ${cv.default400};
    }

    &:disabled {
        color: ${cv.default600};
        cursor: not-allowed;
        &::placeholder {
            color: ${cv.default400};
        }
    }

    &:read-only {
        color: ${cv.default600};
        &::placeholder {
            color: ${cv.default400};
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
