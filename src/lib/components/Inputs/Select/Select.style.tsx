import { styled } from 'styled-components';
import { cv } from '../../..';

export interface StyledSelectOuterContainerProps {
    $width?: string;
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
                font-size: 14px;
                height: 32px;
                border-radius: 8px;
            `;
        case 'medium':
            return `
                font-size: 14px;
                height: 40px;
                border-radius: 12px;
            `;
        case 'large':
            return `
                font-size: 16px;
                height: 48px;
                border-radius: 16px;
            `;
    }
};

export interface StyledSelectContainerProps {
    $size: 'small' | 'medium' | 'large';
    $disabled: boolean;
    $width: string;
    $isError: boolean;
}

export const StyledSelectContainer = styled.div<StyledSelectContainerProps>`
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
    $size: 'small' | 'medium' | 'large';
    $width: string;
}

const getSelectSizeStyle = ({ $size }: StyledSelectProps) => {
    switch ($size) {
        case 'small':
            return `
                padding: 0px 8px;
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
