import React from 'react';

import styled from 'styled-components';

import { cv } from '../../style';

const ToolTipBox = styled.div`
    position: relative;
    background-color: ${cv.bg_element5};
    color: ${cv.text5};
    font-size: 12px;
    border-radius: 6px;
    padding: 4px 8px;
    white-space: pre;
    user-select: none;
    pointer-events: none;
    z-index: 99999;

    &::after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 5px;
        user-select: none;
        pointer-events: none;
    }
`;

const ToolTipBoxTop = styled(ToolTipBox)`
    margin-bottom: 12px;
    transform: translate(-50%, 0%);

    &::after {
        top: 100%;
        left: 50%;
        transform: translate(-50%, 0%);
        border-color: ${cv.bg_element5} transparent transparent transparent;
    }
`;

const ToolTipBoxBottom = styled(ToolTipBox)`
    margin-top: 12px;
    transform: translate(-50%, 0%);

    &::after {
        bottom: 100%;
        left: 50%;
        transform: translate(-50%, 0%);
        border-color: transparent transparent ${cv.bg_element5} transparent;
    }
`;

const ToolTipBoxRight = styled(ToolTipBox)`
    margin-left: 12px;
    transform: translate(0%, -50%);

    &::after {
        top: 50%;
        right: 100%;

        transform: translate(0%, -50%);
        border-color: transparent ${cv.bg_element5} transparent transparent;
    }
`;

const ToolTipBoxLeft = styled(ToolTipBox)`
    margin-right: 12px;
    transform: translate(0%, -50%);

    &::after {
        top: 50%;
        left: 100%;
        transform: translate(0%, -50%);
        border-color: transparent transparent transparent ${cv.bg_element5};
    }
`;

export interface ToolTipProps {
    text: React.ReactNode;
    /**
     * 툴팁이 표시될 방향입니다.
     */
    direction: 'top' | 'bottom' | 'right' | 'left';
    pos: string;
}

const PosBox = styled.div<{ pos: string }>`
    position: absolute;
    inset: ${(props) => props.pos};
`;

export function ButtonToolTipBox({ text, direction, pos }: ToolTipProps) {
    let box: React.ReactNode;
    switch (direction) {
        case 'bottom':
            box = <ToolTipBoxBottom>{text}</ToolTipBoxBottom>;
            break;

        case 'right':
            box = <ToolTipBoxRight>{text}</ToolTipBoxRight>;
            break;

        case 'left':
            box = <ToolTipBoxLeft>{text}</ToolTipBoxLeft>;
            break;

        case 'top':
        default:
            box = <ToolTipBoxTop>{text}</ToolTipBoxTop>;
            break;
    }

    return <PosBox pos={pos}>{box}</PosBox>;
}
