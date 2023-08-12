import { css, styled } from 'styled-components';
import { cv } from '../..';
import { TooltipProps } from './Tooltip';

const getDirectionStyle = (direction: TooltipProps['direction']) => {
    switch (direction) {
        case 'top':
            return `
                transform: translate(-50%, 0%);
                left: 50%;
                bottom: 130%;
                &::after {
                    top: 100%;
                    left: 50%;
                    transform: translate(-50%, 0%);
                    border-color: ${cv.foreground} transparent transparent transparent;
                }
            `;

        case 'bottom':
            return `
                transform: translate(-50%, 0%);
                left: 50%;
                top: 120%;
                &::after {
                    bottom: 100%;
                    left: 50%;
                    transform: translate(-50%, 0%);
                    border-color: transparent transparent ${cv.foreground} transparent;
                }
            `;
    }
};

export const StyledTooltip = styled.div<{ direction: TooltipProps['direction'] }>`
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: 150ms;
    display: hidden;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${cv.foreground};
    color: ${cv.background};
    font-size: 14px;
    border-radius: 10px;
    padding: 6px 10px;
    white-space: pre;
    pointer-events: none;

    ${(props) => getDirectionStyle(props.direction || 'top')};

    &::after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 5px;
        pointer-events: none;
    }
`;

export const TooltipContainer = styled.div<{ isHover: boolean }>`
    width: fit-content;
    height: fit-content;
    position: relative;

    ${(props) =>
        props.isHover &&
        css`
            ${StyledTooltip} {
                visibility: visible;
                opacity: 1;
                display: block;
            }
        `}
`;
