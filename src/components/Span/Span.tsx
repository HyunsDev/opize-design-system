import React, { forwardRef } from 'react';
import { styled } from 'styled-components';

export interface SpanProps extends React.ComponentProps<'span'> {
    font?: 'default' | 'mono';
    weight?: string;
    warp?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap';
    size?: string;
    color?: string;
    lineHeight?: string;
}

interface StyledSpanProps {
    $font?: 'default' | 'mono';
    $weight?: string;
    $warp?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap';
    $size?: string;
    $color?: string;
    $lineHeight?: string;
}

const StyledSpan = styled.span<StyledSpanProps>`
    font-family: ${(props) =>
        props.$font === 'mono'
            ? 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace'
            : 'inherit'};
    font-weight: ${(props) => props.$weight || 'inherit'};
    font-size: ${(props) => props.$size || 'inherit'};
    color: ${(props) => props.$color || 'inherit'};
    white-space: ${(props) => props.$warp || 'inherit'};
    line-height: ${(props) => props.$lineHeight || 'inherit'};
`;

export const Span = forwardRef<HTMLSpanElement, SpanProps>(
    ({ font, weight, warp, size, color, lineHeight, ...props }, ref) => {
        return (
            <StyledSpan
                ref={ref}
                $font={font}
                $weight={weight}
                $warp={warp}
                $size={size}
                $color={color}
                $lineHeight={lineHeight}
                {...props}
            />
        );
    }
);
