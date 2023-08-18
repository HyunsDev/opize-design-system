import React from 'react';
import {
    StyledBoxContainer,
    StyledBoxContent,
    StyledBoxFooter,
    StyledBoxHeader,
    StyledBoxTitle,
} from './Box.style';

export interface BoxProps {
    children?: React.ReactNode;
    width?: string;
    header?: React.ReactNode;
    title?: React.ReactNode;
    footer?: React.ReactNode;
    variant?: 'primary' | 'danger';
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
    const { children, variant = 'primary', width = '100%', header, title, footer, ...rest } = props;

    return (
        <StyledBoxContainer
            $variant={variant}
            ref={ref}
            $width={width}
            {...rest}
        >
            {header && <StyledBoxHeader>{header}</StyledBoxHeader>}
            <StyledBoxContent>
                {title && <StyledBoxTitle>{title}</StyledBoxTitle>}
                {children}
            </StyledBoxContent>
            {footer && <StyledBoxFooter>{footer}</StyledBoxFooter>}
        </StyledBoxContainer>
    );
});
