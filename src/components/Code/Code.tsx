import { styled } from 'styled-components';

import { cv } from '../../style';
import React from 'react';

export interface CodeProps extends React.ComponentProps<'code'> {
    size?: string;
    color?: 'default' | 'blue' | 'green' | 'yellow' | 'red' | 'violet';
    borderRadius?: string;
}

const getColorStyle = (color: CodeProps['color']) => {
    switch (color) {
        case 'blue':
            return `
                background-color: ${cv.blue_background};
                color: ${cv.blue};
            `;
        case 'green':
            return `
                background-color: ${cv.green_background};
                color: ${cv.green};
            `;
        case 'yellow':
            return `
                background-color: ${cv.yellow_background};
                color: ${cv.yellow};
            `;
        case 'red':
            return `
                background-color: ${cv.red_background};
                color: ${cv.red};
            `;
        case 'violet':
            return `
                background-color: ${cv.violet_background};
                color: ${cv.violet};
            `;
        default:
            return `
                background-color: ${cv.default200};
                color: ${cv.foreground};
            `;
    }
};

interface StyledCodeProps {
    $color: CodeProps['color'];
    $size?: CodeProps['size'];
    $borderRadius: CodeProps['borderRadius'];
}

const StyledCode = styled.code<StyledCodeProps>`
    padding: 2px 6px;
    border-radius: ${(props) => props.$borderRadius};
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New,
        monospace;
    font-weight: 400;
    ${(props) => props.$size && `font-size: ${props.$size};`};
    ${(props) => getColorStyle(props.$color)};
`;

export const Code = React.forwardRef<HTMLDivElement, CodeProps>((props, ref) => {
    const { children, ...rest } = props;
    return (
        <StyledCode
            ref={ref}
            $borderRadius="6px"
            $color="default"
            {...rest}
        >
            {children}
        </StyledCode>
    );
});
