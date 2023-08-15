import { styled } from 'styled-components';
import { cv } from '../..';
import { forwardRef } from 'react';

export type ColorDotColor =
    | 'default'
    | 'background'
    | 'foreground'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'violet'
    | string;

export type ColorDotProps = React.ComponentPropsWithRef<'div'> & {
    color?: ColorDotColor;
    size?: string;
};

const colorMap: {
    [key in ColorDotColor]: string;
} = {
    default: cv.default400,
    background: cv.background,
    foreground: cv.foreground,
    red: cv.red,
    yellow: cv.yellow,
    green: cv.green,
    blue: cv.blue,
    violet: cv.violet,
};

interface StyledColorDotProps {
    $color: ColorDotColor;
    $size: string;
}

const StyledColorDot = styled.div<StyledColorDotProps>`
    width: ${(props) => props.$size};
    height: ${(props) => props.$size};
    min-width: ${(props) => props.$size};
    min-height: ${(props) => props.$size};
    border-radius: ${(props) => props.$size || '12px'};
    background-color: ${({ color }) => colorMap?.[color || 'default'] || color};
`;

export const ColorDot = forwardRef<HTMLDivElement, ColorDotProps>((props, ref) => {
    const { color = 'default', size = '12px', ...rest } = props;
    return (
        <StyledColorDot
            ref={ref}
            $color={color}
            $size={size}
            {...rest}
        />
    );
});
