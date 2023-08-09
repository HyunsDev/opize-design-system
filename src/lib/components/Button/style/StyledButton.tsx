import { styled } from 'styled-components';
import { ButtonAlign, ButtonShape, ButtonSize, ButtonVariant, ButtonWidth } from '../Button.type';
import { getShapeStyle, getSizeStyle, getVariantStyle } from './style';

export interface StyledButtonProps {
    $width: ButtonWidth;
    $size: ButtonSize;
    $variant: ButtonVariant;
    $shape: ButtonShape;
    $align: ButtonAlign;
    $iconOnly: boolean;
}

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
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: ${({ $align }) => ($align === 'center' ? 'center' : `flex-${$align}`)};
        margin: 0 auto;
    }
`;
