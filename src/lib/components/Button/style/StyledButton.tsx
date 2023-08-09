import { styled } from 'styled-components';
import { ButtonAlign, ButtonShape, ButtonSize, ButtonVariant, ButtonWidth } from '../Button.type';
import { variantStyle } from './variant.style';
import { sizeStyle } from './size.style';

export interface StyledButtonProps {
    $width: ButtonWidth;
    $size: ButtonSize;
    $variant: ButtonVariant;
    $shape: ButtonShape;
    $align: ButtonAlign;
    $disabled: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
    width: ${({ $width }) => $width};

    ${({ $variant }) => variantStyle[$variant]};
    ${({ $size }) => sizeStyle[$size]};
`;
