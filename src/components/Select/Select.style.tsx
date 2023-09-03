import { styled } from 'styled-components';
import { cv } from '../..';

export interface StyledSelectOuterContainerProps {
    $width: string;
}

export const StyledSelectOuterContainer = styled.div<StyledSelectOuterContainerProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.$width || '100%'};
    gap: 6px;
`;

export const StyledSelectLabel = styled.div`
    color: ${cv.default600};
    font-size: 12px;
`;

const getSizeStyle = ({ $size }: StyledSelectContainerProps) => {
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

export interface StyledSelectContainerProps {
    $size: 'small' | 'regular' | 'medium' | 'large';
    $disabled: boolean;
    $width: string;
    $isError: boolean;
}

export const StyledSelectContainer = styled.div<StyledSelectContainerProps>`
    position: relative;
    display: flex;
    align-items: center;
    transition: 200ms;
    border: solid 1px ${(props) => (props.$isError ? cv.red : cv.default200)};
    background-color: ${(props) => (props.$disabled ? cv.default100 : cv.background)};
    width: ${(props) => props.$width || '100%'};

    ${(props) => getSizeStyle(props)};

    &:focus-within {
        ${(props) =>
            props.$disabled
                ? ''
                : `
            border: solid 1px ${cv.default400};
            background-color: ${cv.background};
        `}
    }
`;

export interface StyledSelectProps {
    $size: 'small' | 'regular' | 'medium' | 'large';
    $width: string;
}

const getSelectSizeStyle = ({ $size }: StyledSelectProps) => {
    switch ($size) {
        case 'small':
            return `
                padding: 0px 8px;
                padding-right: 28px;
            `;
        case 'regular':
            return `
                padding: 0px 10px;
                padding-right: 30px;
            `;
        case 'medium':
            return `
                padding: 0px 12px;
                padding-right: 32px;
            `;
        case 'large':
            return `
                padding: 0px 16px;
                padding-right: 36px;
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

    ${(props) => getSelectSizeStyle(props)};

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

interface StyledSelectSuffixProps {
    $size: 'small' | 'regular' | 'medium' | 'large';
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
        case 'large':
            return `
                right: 12px;
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
