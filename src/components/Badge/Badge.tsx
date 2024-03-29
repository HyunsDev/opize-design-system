import { ColorDot } from '..';
import { cv } from '../..';
import { BadgeProps } from './Badge.type';
import { StyledBadge } from './style';

const DotSizeMap = {
    small: '4px',
    medium: '6px',
    large: '8px',
};

const DotColorMap = {
    primary: {
        gray: 'background',
        red: 'background',
        blue: 'background',
        green: 'background',
        yellow: 'background',
        violet: 'background',
    },
    secondary: {
        gray: cv.gray600,
        red: 'red',
        blue: 'blue',
        green: 'green',
        yellow: 'yellow',
        violet: 'violet',
    },
    tertiary: {
        gray: cv.gray600,
        red: 'red',
        blue: 'blue',
        green: 'green',
        yellow: 'yellow',
        violet: 'violet',
    },
};

export function Badge({
    children,
    color = 'gray',
    variant = 'primary',
    size = 'medium',
    dot = false,
    prefix,
    suffix,
}: BadgeProps) {
    return (
        <StyledBadge
            color={color}
            size={size}
            variant={variant}
        >
            {dot && (
                <ColorDot
                    color={DotColorMap[variant][color]}
                    size={DotSizeMap[size]}
                />
            )}
            {prefix}
            {children}
            {suffix}
        </StyledBadge>
    );
}
