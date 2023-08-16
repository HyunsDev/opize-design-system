import { styled } from 'styled-components';

import { cv } from '../../style';
import { forwardRef } from 'react';

export interface DividerProps extends React.ComponentPropsWithRef<'div'> {
    color?: string;
    margin?: string;
    width?: string;
}

interface StyledDividerProps {
    $color: string;
    $margin?: string;
    $width?: string;
}

const StyledDivider = styled.div<StyledDividerProps>`
    position: relative;
    border-bottom: solid 1px ${(props) => props.color};
    ${(props) => props.$margin && `margin: ${props.$margin} 0px;`}
    ${(props) => props.$width && `width: ${props.$width};`}
`;

export const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
    const { color = cv.default300, margin, width, ...rest } = props;
    return (
        <StyledDivider
            ref={ref}
            $color={color}
            $margin={margin}
            $width={width}
            {...rest}
        />
    );
});
