import { forwardRef } from 'react';
import { styled } from 'styled-components';
import { cv } from '../..';

export type SpacerProps = React.ComponentPropsWithRef<'div'> & {
    children?: React.ReactNode;
    width?: string;
    height?: string;
    backgroundColor?: string;
    color?: string;
};

type StyledSpacerProps = {
    $width?: string;
    $height?: string;
    $backgroundColor?: string;
    $color?: string;
};

const StyledSpacer = styled.div<StyledSpacerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;

    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    color: ${({ $color }) => $color};
`;

export const Spacer = forwardRef<HTMLDivElement, SpacerProps>((props, ref) => {
    const {
        children,
        width = '100%',
        height = '100px',
        backgroundColor = 'transparent',
        color = cv.foreground,
        ...rest
    } = props;

    return (
        <StyledSpacer
            ref={ref}
            $width={width}
            $height={height}
            $backgroundColor={backgroundColor}
            $color={color}
            {...rest}
        >
            {children}
        </StyledSpacer>
    );
});
