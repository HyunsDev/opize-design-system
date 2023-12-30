import { css, styled } from 'styled-components';
import { ButtonAlign, ButtonShape, ButtonSize, ButtonVariant, ButtonWidth } from './Button.type';
import { cv, getStatusColorName } from '../..';

export interface StyledButtonProps {
    $width: ButtonWidth;
    $size: ButtonSize;
    $variant: ButtonVariant;
    $color: 'gray' | 'yellow' | 'red' | 'green' | 'blue' | 'violet';
    $shape: ButtonShape;
    $align: ButtonAlign;
    $iconOnly: boolean;
}

export const getSizeStyle = (props: StyledButtonProps) => {
    if (props.$iconOnly) {
        switch (props.$size) {
            case 'small':
                return `
                    font-size: ${cv.var.inputSmFontSize};
                    width: ${cv.var.inputSmHeight};
                    height: ${cv.var.inputSmHeight};
                `;
            case 'regular':
                return `
                    font-size: ${cv.var.inputRgFontSize};
                    width: ${cv.var.inputRgHeight};
                    height: ${cv.var.inputRgHeight};
                `;
            case 'medium':
                return `
                    font-size: ${cv.var.inputMdFontSize};
                    width: ${cv.var.inputMdHeight};
                    height: ${cv.var.inputMdHeight};
                `;
        }
    }

    switch (props.$size) {
        case 'small':
            return `
                font-size: ${cv.var.inputSmFontSize};
                padding: ${cv.var.inputSmPadding};
                height: ${cv.var.inputSmHeight};
            `;
        case 'regular':
            return `
                font-size: ${cv.var.inputRgFontSize};
                padding: ${cv.var.inputRgPadding};
                height: ${cv.var.inputRgHeight};
            
            `;
        case 'medium':
            return `
                font-size: ${cv.var.inputMdFontSize};
                padding: ${cv.var.inputMdPadding};
                height: ${cv.var.inputMdHeight};
            `;
    }
};

export const getShapeStyle = ({ $size, $shape }: StyledButtonProps) => {
    if ($shape === 'round') {
        return `
            border-radius: 99999px;
        `;
    }

    switch ($size) {
        case 'small':
            return `
                border-radius: ${cv.var.inputSmRound};
            `;
        case 'regular':
            return `
                border-radius: ${cv.var.inputRgRound};
            `;
        case 'medium':
            return `
                border-radius: ${cv.var.inputMdRound};
            `;
    }
};

export const getVariantStyle = ({ $variant: variant, $color: color }: StyledButtonProps) => {
    switch (variant) {
        case 'primary':
            if (color === 'gray') {
                return `
                    background-color: ${cv.gray950};
                    color: ${cv.background};
                    border: 1px solid ${cv.gray950};
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

                    &:hover {
                        background-color: ${cv.gray900};
                        border-color: ${cv.gray900};
                    }

                    &:active {
                        background-color: ${cv.gray800};
                        border-color: ${cv.gray800};
                    }

                    &:disabled {
                        background-color: ${cv[getStatusColorName(color, 'BgLg')]};
                        border-color: ${cv[getStatusColorName(color, 'BgLg')]};
                        --button-spinner-color: ${cv.background};
                    }
                `;
            }

            return `
                background-color: ${cv[getStatusColorName(color)]};
                color: ${cv.background};
                border: 1px solid ${cv[getStatusColorName(color)]};
                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

                &:hover {
                    filter: brightness(95%);
                }

                &:active {
                    filter: brightness(92%);
                }

                &:disabled {
                    background-color: ${cv[getStatusColorName(color, 'BgDk')]};
                    border-color: ${cv[getStatusColorName(color, 'BgDk')]};
                    --button-spinner-color: ${cv.background};
                }
            `;

        case 'secondary':
            return `
                background-color: ${cv.gray050};
                border: 1px solid ${cv.gray200};
                color: ${cv[getStatusColorName(color)]};
                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

                &:hover {
                    filter: brightness(97%);
                }

                &:active {
                    filter: brightness(95%);
                }

                &:disabled {
                    background-color: ${cv.background};
                    color: ${cv[getStatusColorName(color, 'BgDk')]};
                    --button-spinner-color: ${cv[getStatusColorName(color, 'BgDk')]};
                }
            `;
        case 'tertiary':
            return `
                background-color: ${cv.background};
                color: ${cv[getStatusColorName(color)]};
                border: 1px solid ${cv.background};

                &:hover {
                    background-color: ${cv.gray100};
                }

                &:active {
                    filter: brightness(95%);
                }

                &:disabled {
                    background-color: ${cv.background};
                    color: ${cv[getStatusColorName(color, 'BgDk')]};
                    --button-spinner-color: ${cv[getStatusColorName(color, 'BgDk')]};
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
    transition: 100ms cubic-bezier(0, 0.3, 0.6, 1), transform 100ms cubic-bezier(0, 0.3, 0.6, 1),
        width 200ms ease, background-color 0ms;

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
