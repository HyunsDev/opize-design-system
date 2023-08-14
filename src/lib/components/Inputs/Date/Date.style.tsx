import { styled } from 'styled-components';
import { cv } from '../../..';

export interface StyledDateOuterContainerProps {
    $width: string;
}
export const StyledDateOuterContainer = styled.div<StyledDateOuterContainerProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.$width};
    gap: 6px;
`;

export const StyledDateLabel = styled.div`
    color: ${cv.default600};
    font-size: 12px;
`;

const getSizeStyle = ({ $size }: StyledDateContainerProps) => {
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
export interface StyledDateContainerProps {
    $size: 'small' | 'medium' | 'large';
    $disabled: boolean;
    $readOnly: boolean;
    $width: string;
    $isError: boolean;
}

export const StyledDateContainer = styled.div<StyledDateContainerProps>`
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

export interface StyledDateProps {
    $size: 'small' | 'medium' | 'large';
}

const getDateSizeStyle = ({ $size }: StyledDateProps) => {
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

export const StyledDate = styled.input<StyledDateProps>`
    cursor: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    transition: 200ms;

    ${(props) => getDateSizeStyle(props)};

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

    &:focus-within {
        outline: none;
    }

    &::-webkit-datetime-edit-ampm-field,
    &::-webkit-datetime-edit-day-field,
    &::-webkit-datetime-edit-hour-field,
    &::-webkit-datetime-edit-millisecond-field,
    &::-webkit-datetime-edit-minute-field,
    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-second-field,
    &::-webkit-datetime-edit-week-field,
    &::-webkit-datetime-edit-year-field {
        cursor: text;
    }

    &::-webkit-calendar-picker-indicator {
        stroke: ${cv.foreground};
        cursor: pointer;
    }
`;
