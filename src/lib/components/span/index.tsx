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
}>`
    font-family: ${(props) => (props.font === 'monospace' ? cv.fontFamilyMonospace : cv.fontFamily)};
    font-weight: ${(props) => (props.weight === 'semibold' ? cv.fontWeightSemiBold : cv.fontWeightRegular)};
    white-space: ${(props) => props.warp || 'normal'};
    font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
    font-size: ${(props) => props.size || cv.fontSizeNormal};
    line-height: ${(props) => props.lineHeight || cv.lineHeightNormal};
`;
