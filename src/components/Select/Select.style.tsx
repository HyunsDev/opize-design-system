import { styled } from 'styled-components';
import { cv, typos } from '../..';

export interface StyledSelectOuterContainerProps {
    $width: string;
}

export const StyledSelectOuterContainer = styled.div<StyledSelectOuterContainerProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.$width || '100%'};
    gap: 4px;
`;

export const StyledSelectLabel = styled.div`
    ${typos.label}
`;

const getSizeStyle = ({ $size }: StyledSelectContainerProps) => {
    switch ($size) {
        case 'small':
            return `
                font-size: ${cv.var.inputSmFontSize};
                height: ${cv.var.inputSmHeight};
                border-radius: ${cv.var.inputSmRound};
            `;
        case 'regular':
            return `
                font-size: ${cv.var.inputRgFontSize};
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

export interface StyledSelectContainerProps {
    $size: 'small' | 'regular' | 'medium';
    $disabled: boolean;
    $width: string;
    $isError: boolean;
}

export const StyledSelectContainer = styled.div<StyledSelectContainerProps>`
    position: relative;
    display: flex;
    align-items: center;
    transition: 200ms;
    border: solid 1px ${(props) => (props.$isError ? cv.statusRed : cv.border)};
    background-color: ${(props) => (props.$disabled ? cv.gray100 : cv.background)};
    width: ${(props) => props.$width || '100%'};

    ${(props) => getSizeStyle(props)};

    &:focus-within {
        ${(props) =>
            props.$disabled
                ? ''
                : `
            border: solid 1px ${cv.gray400};
            background-color: ${cv.background};
        `}
    }
`;

export interface StyledSelectProps {
    $size: 'small' | 'regular' | 'medium';
    $width: string;
}

const getSelectSizeStyle = ({ $size }: StyledSelectProps) => {
    switch ($size) {
        case 'small':
            return `
                padding: ${cv.var.inputSmPadding};
                padding-right: 28px;
            `;
        case 'regular':
            return `
                padding: ${cv.var.inputRgPadding};
                padding-right: 30px;
            `;
        case 'medium':
            return `
                padding: ${cv.var.inputMdPadding};
                padding-right: 32px;
            `;
    }
};

export const StyledSelect = styled.select<StyledSelectProps>`
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    transition: 200ms;
    cursor: pointer;
    ${typos.input};
    ${(props) => getSelectSizeStyle(props)};

    &:disabled {
        color: ${cv.gray500};
        cursor: not-allowed;
        &::placeholder {
            color: ${cv.gray400};
        }
    }

    &:read-only {
        color: ${cv.gray500};
        &::placeholder {
            color: ${cv.gray400};
        }
    }
`;

interface StyledSelectSuffixProps {
    $size: 'small' | 'regular' | 'medium';
}

const getSelectSuffixSizeStyle = ({ $size }: StyledSelectSuffixProps) => {
    switch ($size) {
        case 'small':
            return `
                right: 8px;
            `;
        case 'regular':
            return `
                right: 10px;
            `;
        case 'medium':
            return `
                right: 10px;
            `;
    }
};

export const StyledSuffix = styled.div<StyledSelectSuffixProps>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    user-select: none;
    pointer-events: none;
    transition: 200ms;
    ${(props) => getSelectSuffixSizeStyle(props)};
`;
