import { ButtonVariant } from '../Button.type';
import { cv } from '../../..';

export const variantStyle: {
    [key in ButtonVariant]: string;
} = {
    primary: `
        background-color: ${cv.foreground};
        color: ${cv.background};
        border: 1px solid ${cv.foreground};
    `,
    secondary: `
        background-color: ${cv.background};
        color: ${cv.foreground};
        border: 1px solid ${cv.foreground};
    `,
    tertiary: `
        background-color: ${cv.background};
        color: ${cv.foreground};
        border: 1px solid ${cv.background};
    `,
    danger: `
        background-color: ${cv.red};
        color: ${cv.background};
        border: 1px solid ${cv.red};
    `,
    warning: `
        background-color: ${cv.yellow};
        color: ${cv.background};
        border: 1px solid ${cv.yellow};
    `,
};
