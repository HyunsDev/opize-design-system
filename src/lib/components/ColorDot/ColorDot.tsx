import { styled } from 'styled-components';
import { cv } from '../..';

export type Color =
    | 'default'
    | 'background'
    | 'foreground'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'violet'
    | string;

export type ColorDotProps = {
    color?: Color;
    size?: string;
};

const colorMap: {
    [key in Color]: string;
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

export const ColorDot = styled.div<ColorDotProps>`
    width: ${(props) => props.size || '12px'};
    height: ${(props) => props.size || '12px'};
    min-width: ${(props) => props.size || '12px'};
    min-height: ${(props) => props.size || '12px'};
    border-radius: ${(props) => props.size || '12px'};
    background-color: ${({ color }) => colorMap?.[color || 'default'] || color};
`;
