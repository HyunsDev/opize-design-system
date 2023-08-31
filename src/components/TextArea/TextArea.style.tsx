import { styled } from 'styled-components';
import { cv } from '../..';

export interface StyledTextAreaOuterContainerProps {
    $width?: string;
}
export const StyledTextAreaOuterContainer = styled.div<StyledTextAreaOuterContainerProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.$width || '100%'};
    gap: 6px;
`;

export interface StyledTextAreaLabelProps {}

export const StyledTextAreaLabel = styled.div<StyledTextAreaLabelProps>`
    color: ${cv.default600};
    font-size: 12px;
`;

export interface StyledTextAreaProps {
    $width: string;
    $minHeight: string;
    $isError: boolean;
}

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: ${(props) => props.$width};
    min-height: ${(props) => props.$minHeight};
    height: 100%;
    outline: none;
    background-color: transparent;
    transition: background 200ms;
    padding: 8px 12px;
    font-size: ${cv.formFontSizeMedium};
    border-radius: ${cv.formBorderRadiusMedium};
    border: solid 1px ${(props) => (props.$isError ? cv.red : cv.default200)};
    background-color: ${cv.background};
    color: ${cv.foreground};

    &:focus {
        border: solid 1px ${cv.default400};
        background-color: ${cv.background};
    }

    &::placeholder {
        color: ${cv.default400};
    }

    &:disabled {
        color: ${cv.default600};
        background-color: ${cv.default100};
        cursor: not-allowed;
        &::placeholder {
            color: ${cv.default400};
        }
    }

    &:read-only {
        color: ${cv.default600};
        background-color: ${cv.default100};
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
