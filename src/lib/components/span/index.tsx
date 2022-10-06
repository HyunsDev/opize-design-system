import styled from 'styled-components';
import { cv } from '../../style';

/**
 * 스타일링 된 \<span\>입니다.
 */
export const Span = styled.span<{
    font?: 'base' | 'monospace';
    weight?: 'regular' | 'semibold';
    warp?: 'normal' | 'nowrap';
    italic?: boolean;
    size?: string;
    lineHeight?: string;
    color?: string;
}>`
    ${(props) => props.font && `font-family: ${props.font === 'monospace' ? cv.fontFamilyMonospace : cv.fontFamily}`};
    ${(props) =>
        props.weight && `font-weight: ${props.weight === 'semibold' ? cv.fontWeightSemiBold : cv.fontWeightRegular}`};
    ${(props) => props.warp && `white-space: ${props.warp || 'normal'}`};
    ${(props) => props.italic && `font-style: ${props.italic ? 'italic' : 'normal'}`};
    ${(props) => props.size && `font-size: ${props.size || cv.fontSizeNormal}`};
    ${(props) => props.lineHeight && `line-height: ${props.lineHeight || cv.lineHeightNormal}`};
    ${(props) => props.color && `color: ${props.color}`};
`;
