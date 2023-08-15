import React from 'react';
import { styled } from 'styled-components';

export interface TextProps extends React.ComponentProps<'p'> {
    font?: 'default' | 'mono';
    weight?: string;
    warp?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap';
    size?: string;
    color?: string;
}

export const Text: (props: TextProps) => React.ReactNode = styled.p<TextProps>`
    font-family: ${(props) =>
        props.font === 'mono'
            ? 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace'
            : 'inherit'};
    font-weight: ${(props) => props.weight || '400'};
    font-size: ${(props) => props.size || '16px'};
    color: ${(props) => props.color || 'inherit'};
    white-space: ${(props) => props.warp || 'normal'};
`;
