import { styled } from 'styled-components';

export interface ItemContainerProps {
    $flex?: number;
    $width?: string;
}
export const ItemContainer = styled.div<ItemContainerProps>`
    display: flex;
    ${(props) => props.$flex && !props.$width && `flex: ${props.$flex};`}
    ${(props) => props.$width && `width: ${props.$width};`}
`;
