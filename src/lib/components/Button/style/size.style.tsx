import { ButtonSize } from '../Button.type';

export const sizeStyle: {
    [key in ButtonSize]: string;
} = {
    small: `
        font-size: 14px;
        padding: 8px 16px;
    `,
    medium: `
        font-size: 16px;
        padding: 12px 24px;
    `,
    large: `
        font-size: 18px;
        padding: 16px 32px;
    `,
};
