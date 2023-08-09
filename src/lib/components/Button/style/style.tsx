import { StyledButtonProps } from '.';
import { cv } from '../../..';
import { ButtonShape, ButtonSize, ButtonVariant } from '../Button.type';

export const getSizeStyle = (props: StyledButtonProps) => {
    switch (props.$size) {
        case 'small':
            return `
                font-size: 14px;
                padding: 0px 12px;
                height: 32px;
            `;
        case 'medium':
            return `
                font-size: 16px;
                padding: 0px 16px;
                height: 40px;
            `;
        case 'large':
            return `
                font-size: 18px;
                padding: 0px 20px;
                height: 48px;
            `;
    }
};

export const getShapeStyle = ({ $size, $shape }: StyledButtonProps) => {
    switch ($size) {
        case 'small':
            return `
                border-radius: ${$shape === 'square' ? '8px' : '16px'}};
            `;
        case 'medium':
            return `
                border-radius: ${$shape === 'square' ? '12px' : '20px'};
            `;
        case 'large':
            return `
                border-radius: ${$shape === 'square' ? '14px' : '24px'};
            `;
    }
};

export const getVariantStyle = ({ $variant }: StyledButtonProps) => {
    switch ($variant) {
        case 'primary':
            return `
                background-color: ${cv.foreground};
                color: ${cv.background};
                border: 1px solid ${cv.foreground};

                &:hover {
                    background-color: ${cv.default800};
                    border-color: ${cv.default800};
                }
            `;
        case 'secondary':
            return `
                background-color: ${cv.background};
                color: ${cv.foreground};
                border: 1px solid ${cv.default200};

                &:hover {
                    background-color: ${cv.default100};
                }
            `;
        case 'tertiary':
            return `
                background-color: ${cv.background};
                color: ${cv.foreground};
                border: 1px solid ${cv.background};

                &:hover {
                    background-color: ${cv.default100};
                }
            `;
        case 'danger':
            return `
                background-color: ${cv.red};
                color: ${cv.background};
                border: 1px solid ${cv.red};

                &:hover {
                    background-color: ${cv.red_dark};
                    border-color: ${cv.red_dark};
                }
            `;
        case 'warning':
            return `
                background-color: ${cv.yellow};
                color: ${cv.background};
                border: 1px solid ${cv.yellow};

                &:hover {
                    background-color: ${cv.yellow_dark};
                    border-color: ${cv.yellow_dark};
                }
            `;
    }
};
