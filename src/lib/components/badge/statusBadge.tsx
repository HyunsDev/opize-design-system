import styled from "styled-components"
import { css } from "../../style"

const colorMap = {
    green: {
        color: css.green1,
        backgroundColor: css.bg_green1
    },
    red: {
        color: css.red1,
        backgroundColor: css.bg_red1
    },
    yellow: {
        color: css.yellow1,
        backgroundColor: css.bg_yellow1
    },
    blue: {
        color: css.blue1,
        backgroundColor: css.bg_blue1
    },
    gray: {
        color: css.text3,
        backgroundColor: css.bg_element4
    },
}

const Badge = styled.div<{color: 'red' | 'yellow' | 'green' | 'blue' | 'gray', size: 'small' | 'normal'}>`
    position: relative;

    ${props => props.size === 'small' && `background-color: ${colorMap[props.color].backgroundColor};`}
    color: ${props => colorMap[props.color].color};
    padding: ${props => props.size === 'normal' ? '4px 8px' : '0px 8px'};
    border-radius: 12px;
    height: 16px;
    font-size: ${props => props.size === 'normal' ? '14px' : '12px'};
    display: flex;
    align-items: center;
    width: fit-content;
    font-weight: ${props => props.size === 'normal' ? '700' : '400'};

    &::before {
        content: "";
        width: ${props => props.size === 'normal' ? '12px' : '8px'};
        height: ${props => props.size === 'normal' ? '12px' : '8px'};
        background-color: ${props => colorMap[props.color].color};
        border-radius: 8px;
        margin-right: 6px;
    }
`

interface StatusBadgeTagProps {
    color: 'green' | 'yellow' | 'red' | 'blue' | 'gray'
    text: string
    size?: 'small' | 'normal'
}

export function StatusBadge({
    color,
    text,
    size = 'normal'
}: StatusBadgeTagProps) {
    return (
        <Badge color={color} size={size}>
            {text}
        </Badge>
    )
}