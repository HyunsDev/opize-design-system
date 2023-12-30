import React from 'react';
import { StatusColor, cv, getStatusColorName } from '../..';
import styled from 'styled-components';

export interface CodeProps extends React.ComponentProps<'code'> {
    size?: string;
    color?: StatusColor;
    borderRadius?: string;
}

const getColorStyle = (color: StatusColor) => {
    return `
        background-color: ${cv[getStatusColorName(color, 'BgLg')]};
        color: ${cv[getStatusColorName(color)]};
    `;
};

interface StyledCodeProps {
    $color: StatusColor;
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
    const { children, color = 'gray', ...rest } = props;
    return (
        <StyledCode
            ref={ref}
            $borderRadius="6px"
            $color={color}
            {...rest}
        >
            {children}
        </StyledCode>
    );
});
