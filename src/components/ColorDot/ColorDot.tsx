import { styled } from 'styled-components';
import { cv } from '../..';
import { forwardRef } from 'react';

export type ColorDotColor =
    | 'gray'
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
    gray: cv.gray400,
    background: cv.background,
    foreground: cv.foreground,
    red: cv.statusRed,
    yellow: cv.statusYellow,
    green: cv.statusGreen,
    blue: cv.statusBlue,
    violet: cv.statusViolet,
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
    background-color: ${({ $color }) => $color};
`;

export const ColorDot = forwardRef<HTMLDivElement, ColorDotProps>((props, ref) => {
    const { color = 'gray', size = '12px', ...rest } = props;

    const _color = colorMap?.[color] || color;
    return (
        <StyledColorDot
            ref={ref}
            $color={_color}
            $size={size}
            {...rest}
        />
    );
});
