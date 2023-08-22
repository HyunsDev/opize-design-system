import { css, styled } from 'styled-components';
import { ButtonAlign, ButtonShape, ButtonSize, ButtonVariant, ButtonWidth } from './Button.type';
import { cv } from '../..';

export interface StyledButtonProps {
    $width: ButtonWidth;
    $size: ButtonSize;
    $variant: ButtonVariant;
    $shape: ButtonShape;
    $align: ButtonAlign;
    $iconOnly: boolean;
}

export const getSizeStyle = (props: StyledButtonProps) => {
    if (props.$iconOnly) {
        switch (props.$size) {
            case 'small':
                return `
                    font-size: 14px;
                    width: 32px;
                    height: 32px;
                `;
            case 'medium':
                return `
                    font-size: 14px;
                    width: 40px;
                    height: 40px;
                `;
            case 'large':
                return `
                    font-size: 16px;
                    width: 48px;
                    height: 48px;
                `;
        }
    }

    switch (props.$size) {
        case 'small':
            return `
                font-size: 14px;
                padding: 0px 12px;
                height: 32px;
            `;
        case 'medium':
            return `
                font-size: 14px;
                padding: 0px 16px;
                height: 40px;
            `;
        case 'large':
            return `
                font-size: 16px;
                padding: 0px 20px;
                height: 48px;
            `;
    }
};

export const getShapeStyle = ({ $size, $shape }: StyledButtonProps) => {
    switch ($size) {
        case 'small':
            return `
                border-radius: ${$shape === 'square' ? '6px' : '16px'};
            `;
        case 'medium':
            return `
                border-radius: ${$shape === 'square' ? '8px' : '20px'};
            `;
        case 'large':
            return `
                border-radius: ${$shape === 'square' ? '10px' : '24px'};
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

                &:active {
                    background-color: ${cv.default700};
                    border-color: ${cv.default700};
                }

                &:disabled {
                    background-color: ${cv.default400};
                    border-color: ${cv.default400};
                    --button-spinner-color: ${cv.background};
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

                &:active {
                    background-color: ${cv.default200};
                    border-color: ${cv.default200};
                }

                &:disabled {
                    background-color: ${cv.default100};
                    border-color: ${cv.default200};
                    color: ${cv.default400};
                    --button-spinner-color: ${cv.default500};
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

                &:active {
                    background-color: ${cv.default200};
                }

                &:disabled {
                    background-color: ${cv.default100};
                    color: ${cv.default400};
                    --button-spinner-color: ${cv.default500};
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

                &:disabled {
                    background-color: ${cv.default400};
                    border-color: ${cv.default400};
                    --button-spinner-color: ${cv.background};
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

                &:disabled {
                    background-color: ${cv.default400};
                    border-color: ${cv.default400};
                    --button-spinner-color: ${cv.background};
                }
            `;
    }
};

export const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    align-items: center;
    gap: 12px;

    width: ${({ $width }) => $width};
    justify-content: ${({ $align }) => ($align === 'center' ? 'center' : `flex-${$align}`)};

    cursor: pointer;
    user-select: none;
    text-decoration: none;

    transition-property: background-color, color, border-color, box-shadow;
    transition: 150ms ease, transform 200ms ease, width 200ms ease;

    &:active {
        transform: scale(0.98);
    }

    &:disabled {
        cursor: not-allowed;
        &:active {
            transform: scale(1);
        }
    }

    ${(props) => getVariantStyle(props)};
    ${(props) => getSizeStyle(props)};
    ${(props) => getShapeStyle(props)};

    & > .button-child {
        ${(props) =>
            !props.$iconOnly &&
            css`
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;

                display: block;
                text-align: ${props.$align === 'center'
                    ? 'center'
                    : props.$align === 'start'
                    ? 'left'
                    : 'right'};
                margin: 0 auto;
                width: 100%;
                height: fit-content;
            `}

        ${(props) =>
            props.$iconOnly &&
            css`
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;

                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
            `}
    }

    & > .button-prefix,
    & > .button-suffix {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
