import { styled } from 'styled-components';
import { cv, typos } from '../..';

export interface StyledDateOuterContainerProps {
    $width: string;
}
export const StyledDateOuterContainer = styled.div<StyledDateOuterContainerProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.$width};
    gap: 4px;
`;

export const StyledDateLabel = styled.div`
    ${typos.label};
`;

const getSizeStyle = ({ $size }: StyledDateContainerProps) => {
    switch ($size) {
        case 'small':
            return `
                font-size: ${cv.var.inputSmFontSize};
                height: ${cv.var.inputSmHeight};
                border-radius: ${cv.var.inputSmRound}
            `;
        case 'regular':
            return `
                font-size: ${cv.var.inputRgFontSize};
                height: ${cv.var.inputRgHeight};
                border-radius: ${cv.var.inputRgRound}
            `;
        case 'medium':
            return `
            font-size: ${cv.var.inputMdFontSize};
                height: ${cv.var.inputMdHeight};
                border-radius: ${cv.var.inputMdRound}
            `;
    }
};
export interface StyledDateContainerProps {
    $size: 'small' | 'regular' | 'medium';
    $disabled: boolean;
    $variant: 'primary' | 'secondary';
    $readOnly: boolean;
    $width: string;
    $isError: boolean;
}

export const StyledDateContainer = styled.div<StyledDateContainerProps>`
    display: flex;
    align-items: center;
    transition: 200ms;
    border: solid 1px
        ${(props) =>
            props.$isError
                ? cv.statusRed
                : props.$variant === 'primary'
                ? cv.border
                : 'transparent'};
    background-color: ${(props) =>
        props.$disabled || props.$readOnly ? cv.gray100 : cv.background};
    width: ${(props) => props.$width || '100%'};

    ${(props) => getSizeStyle(props)};

    &:hover {
        ${(props) =>
            props.$disabled || props.$readOnly
                ? ''
                : `
            border: solid 1px ${cv.border};
        `}
    }

    &:focus-within {
        ${(props) =>
            props.$disabled || props.$readOnly
                ? ''
                : `
            border: solid 1px ${cv.gray100};
            background-color: ${cv.gray100};
        `}
    }
`;

export interface StyledDateProps {
    $size: 'small' | 'regular' | 'medium';
}

const getDateSizeStyle = ({ $size }: StyledDateProps) => {
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

    ${typos.input};
    ${(props) => getDateSizeStyle(props)};

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
        stroke: ${cv.text};
        cursor: pointer;
    }
`;
