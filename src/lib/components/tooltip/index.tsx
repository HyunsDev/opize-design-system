import React, { useState } from 'react';

import styled, { css } from 'styled-components';

import { cv } from '../../style';

const ToolTipBox = styled.div`
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: 100ms;
    display: hidden;
    z-index: 1000;

    background-color: ${cv.bg_element5};
    color: ${cv.text5};
    font-size: 12px;
    border-radius: 6px;
    padding: 4px 8px;
    white-space: pre;
    pointer-events: none;

    &::after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 5px;
        pointer-events: none;
    }
`;

const Divver = styled.div<{ isHover: boolean }>`
    width: fit-content;
    height: fit-content;
    position: relative;

    ${(props) =>
        props.isHover &&
        css`
            ${ToolTipBox} {
                visibility: visible;
                opacity: 1;
                display: block;
            }
        `}
`;

const ToolTipBoxTop = styled(ToolTipBox)`
    transform: translate(-50%, 0%);
    left: 50%;
    bottom: 130%;

    &::after {
        top: 100%;
        left: 50%;
        transform: translate(-50%, 0%);
        border-color: ${cv.bg_element5} transparent transparent transparent;
    }
`;

const ToolTipBoxBottom = styled(ToolTipBox)`
    transform: translate(-50%, 0%);
    left: 50%;
    top: 120%;

    &::after {
        bottom: 100%;
        left: 50%;
        transform: translate(-50%, 0%);
        border-color: transparent transparent ${cv.bg_element5} transparent;
    }
`;

const ToolTipBoxRight = styled(ToolTipBox)`
    transform: translate(0%, 50%);
    left: 110%;

    &::after {
        top: 25%;
        right: 100%;
        border-color: transparent ${cv.bg_element5} transparent transparent;
    }
`;

const ToolTipBoxLeft = styled(ToolTipBox)`
    /* transform: translate(0%, 50%); */
    right: 110%;

    &::after {
        top: 35%;
        left: 100%;
        border-color: transparent transparent transparent ${cv.bg_element5};
    }
`;

export interface ToolTipProps {
    children: React.ReactNode;
    /**
     * 툴팁 텍스트입니다.
     */
    text: React.ReactNode;
    /**
     * 툴팁이 표시될 방향입니다.
     */
    direction?: 'top' | 'bottom' | 'right' | 'left';
}

/**
 * 마우스를 올렸을 때 툴팁을 표시합니다.
 */
export function ToolTip({ children, text, direction }: ToolTipProps) {
    const [isHover, setIsHover] = useState(false);

    let box;
    switch (direction) {
        case 'top':
            box = <ToolTipBoxTop>{text}</ToolTipBoxTop>;
            break;

        case 'bottom':
            box = <ToolTipBoxBottom>{text}</ToolTipBoxBottom>;
            break;

        case 'right':
            box = <ToolTipBoxRight>{text}</ToolTipBoxRight>;
            break;

        case 'left':
            box = <ToolTipBoxLeft>{text}</ToolTipBoxLeft>;
            break;

        default:
            box = <ToolTipBoxTop>{text}</ToolTipBoxTop>;
            break;
    }

    return (
        <Divver
            isHover={isHover}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            className="tooltip"
        >
            {box}
            {children}
        </Divver>
    );
}
