import React, { ComponentProps } from 'react';

import styled from 'styled-components';

import { cv } from '../../style';

const colorMap = {
    green: {
        color: cv.green1,
        backgroundColor: cv.bg_green1,
    },
    red: {
        color: cv.red1,
        backgroundColor: cv.bg_red1,
    },
    yellow: {
        color: cv.yellow1,
        backgroundColor: cv.bg_yellow1,
    },
    blue: {
        color: cv.blue1,
        backgroundColor: cv.bg_blue1,
    },
    gray: {
        color: cv.text3,
        backgroundColor: cv.bg_element4,
    },
};

const Badge = styled.div<{
    color: 'red' | 'yellow' | 'green' | 'blue' | 'gray';
    size: 'small' | 'normal';
}>`
    position: relative;

    ${(props) =>
        props.size === 'small' && `background-color: ${colorMap[props.color].backgroundColor};`}
    color: ${(props) => (props.size === 'small' ? colorMap[props.color].color : cv.text1)};
    padding: ${(props) => (props.size === 'normal' ? '4px 8px' : '0px 8px')};
    border-radius: 12px;
    height: 16px;
    font-size: ${(props) => (props.size === 'normal' ? '14px' : '12px')};
    display: flex;
    align-items: center;
    width: fit-content;

    &::before {
        content: '';
        width: ${(props) => (props.size === 'normal' ? '12px' : '8px')};
        height: ${(props) => (props.size === 'normal' ? '12px' : '8px')};
        background-color: ${(props) => colorMap[props.color].color};
        border-radius: 8px;
        margin-right: 6px;
    }
`;

interface StatusBadgeTagProps {
    color: 'green' | 'yellow' | 'red' | 'blue' | 'gray';
    text: React.ReactNode;
    size?: 'small' | 'normal';
}

/**
 * 상태를 나타내기 위한 뱃지입니다.
 */
export function StatusBadge({ color, text, size = 'normal' }: StatusBadgeTagProps) {
    return (
        <Badge
            color={color}
            size={size}
        >
            {text}
        </Badge>
    );
}

export type StatusBadgeProps = ComponentProps<typeof StatusBadge>;
