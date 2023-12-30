import { styled } from 'styled-components';
import { cv, typos } from '../..';

export interface StyledTextAreaOuterContainerProps {
    $width?: string;
}
export const StyledTextAreaOuterContainer = styled.div<StyledTextAreaOuterContainerProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.$width || '100%'};
    gap: 4px;
`;

export interface StyledTextAreaLabelProps {}

export const StyledTextAreaLabel = styled.div<StyledTextAreaLabelProps>`
    ${typos.label}
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
    border-radius: ${cv.var.inputMdRound};
    border: solid 1px ${(props) => (props.$isError ? cv.statusRed : cv.border)};
    background-color: ${cv.background};
    color: ${cv.foreground};

    ${typos.input};

    &:focus {
        border: solid 1px ${cv.gray400};
        background-color: ${cv.background};
    }

    &::placeholder {
        color: ${cv.placeholder};
    }

    &:disabled {
        color: ${cv.gray500};
        background-color: ${cv.gray100};
        cursor: not-allowed;
        &::placeholder {
            color: ${cv.gray400};
        }
    }

    &:read-only {
        color: ${cv.gray500};
        background-color: ${cv.gray100};
        &::placeholder {
            color: ${cv.gray400};
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
