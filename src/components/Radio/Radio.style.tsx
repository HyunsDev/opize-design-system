import { styled } from 'styled-components';
import { cv } from '../..';

export const StyledRadioContainer = styled.div<{
    $disabled: boolean;
}>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    color: ${(props) => (props.$disabled ? cv.default400 : cv.foreground)};
    font-size: 14px;

    cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
`;

export const StyledRadio = styled.input`
    appearance: none;
    position: relative;
    cursor: pointer;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border: 2px solid ${cv.default200};
    outline: none;
    transition: 150ms;
    background-color: ${cv.background};

    &:hover {
        background-color: ${cv.default100};
    }

    &::after {
        content: '';
        position: absolute;
        transition: 150ms;
        top: 6px;
        left: 6px;
        width: 0px;
        height: 0px;
        border-radius: 6px;
        background-color: ${cv.default600};
    }

    &:checked {
        &::after {
            top: 2px;
            left: 2px;
            width: 8px;
            height: 8px;
        }
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${cv.default100};
        border-color: ${cv.default300};

        &::after {
            background-color: ${cv.default300};
        }
    }
`;

export const StyledRadioLabel = styled.div``;
