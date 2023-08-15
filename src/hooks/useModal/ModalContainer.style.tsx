import { styled } from 'styled-components';
import { cv } from '../..';

export type StyledModalContainerWrapperProps = {
    $isOpen: boolean;
};
export const StyledModalContainerWrapper = styled.div<StyledModalContainerWrapperProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    pointer-events: none;
    padding: 16px;

    @media (max-width: 400px) {
        align-items: flex-end;
    }
`;

export type StyledModalOverlayProps = {
    $isOpen: boolean;
};
export const StyledModalOverlay = styled.div<StyledModalOverlayProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: ${cv.foreground};

    transition: 300ms;
    opacity: ${(props) => (props.$isOpen ? 0.2 : 0)};

    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 0.2;
        }
    }
    animation: opacity 300ms;
`;

export type StyledModalContainerProps = {
    $width: string;
    $isOpen: boolean;
    $isPadding: boolean;
};
export const StyledModalContainer = styled.section<StyledModalContainerProps>`
    z-index: 10000;
    background-color: ${cv.background};
    color: ${cv.foreground};
    border-radius: 12px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
    width: ${(props) => props.$width};
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    padding: ${(props) => (props.$isPadding ? '16px' : '0')};
    pointer-events: auto;

    transition: 300ms;
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};
    transform: translateY(${(props) => (props.$isOpen ? 0 : -20)}px);

    @keyframes fadeIn {
        0% {
            transform: translateY(-20px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }
    animation: fadeIn 300ms;
`;
