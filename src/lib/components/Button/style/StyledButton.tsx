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

    width: ${({ $width }) => $width};

    cursor: pointer;

    user-select: none;
    text-decoration: none;

    transition: 150ms ease;
    transition-property: background-color, color, border-color, box-shadow;

    ${(props) => getVariantStyle(props)};
    ${(props) => getSizeStyle(props)};
    ${(props) => getShapeStyle(props)};
`;
