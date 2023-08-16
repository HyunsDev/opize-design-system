import { forwardRef } from 'react';
import { styled } from 'styled-components';

export type FlexProps = React.ComponentPropsWithRef<'div'> & {
    gap?: string;
    direction?: 'row' | 'column';
    align?: 'center' | 'start' | 'end' | 'stretch' | 'baseline';
    justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    width?: string;
};

interface StyledFlexProps {
    $gap?: string;
    $direction?: 'row' | 'column';
    $align?: 'center' | 'start' | 'end' | 'stretch' | 'baseline';
    $justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    $wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    $width?: string;
}

const StyledFlexLayout = styled.div<StyledFlexProps>`
    display: flex;
    flex-direction: ${(props) => props.$direction || 'row'};
    ${(props) => props.$gap && `gap: ${props.$gap}`};
    ${(props) => props.$align && `align-items: ${props.$align}`};
    ${(props) => props.$justify && `justify-content: ${props.$justify}`};
    ${(props) => props.$width && `width: ${props.$width}`};
    ${(props) => props.$wrap && `flex-wrap: ${props.$wrap}`};
`;
const FlexLayout = forwardRef<HTMLDivElement, FlexProps>(
    ({ gap, direction, align, justify, wrap, width, children, ...props }, ref) => {
        return (
            <StyledFlexLayout
                ref={ref}
                $gap={gap}
                $direction={direction}
                $align={align}
                $justify={justify}
                $wrap={wrap}
                $width={width}
                {...props}
            >
                {children}
            </StyledFlexLayout>
        );
    }
);

export type SubFlexProps = React.ComponentPropsWithRef<'div'> & {
    gap?: string;
    width?: string;
};

interface StyledSubFlexProps {
    gap?: string;
    width?: string;
}

const StyledFlexCenter = styled.div<StyledSubFlexProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) => props.gap && `gap: ${props.gap}`};
    ${(props) => props.width && `width: ${props.width}`};
`;

const FlexCenter = forwardRef<HTMLDivElement, SubFlexProps>(
    ({ gap, width, children, ...props }, ref) => {
        return (
            <StyledFlexCenter
                ref={ref}
                gap={gap}
                width={width}
                {...props}
            >
                {children}
            </StyledFlexCenter>
        );
    }
);

const StyledFlexBetween = styled.div<StyledSubFlexProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(props) => props.gap && `gap: ${props.gap}`};
    ${(props) => props.width && `width: ${props.width}`};
`;

const FlexBetween = forwardRef<HTMLDivElement, SubFlexProps>(
    ({ gap, width, children, ...props }, ref) => {
        return (
            <StyledFlexBetween
                ref={ref}
                gap={gap}
                width={width}
                {...props}
            >
                {children}
            </StyledFlexBetween>
        );
    }
);

const StyledFlexColumn = styled.div<StyledSubFlexProps>`
    display: flex;
    flex-direction: column;
    ${(props) => props.gap && `gap: ${props.gap}`};
    ${(props) => props.width && `width: ${props.width}`};
`;

const FlexColumn = forwardRef<HTMLDivElement, SubFlexProps>(
    ({ gap, width, children, ...props }, ref) => {
        return (
            <StyledFlexColumn
                ref={ref}
                gap={gap}
                width={width}
                {...props}
            >
                {children}
            </StyledFlexColumn>
        );
    }
);

const StyledFlexRow = styled.div<StyledSubFlexProps>`
    display: flex;
    align-items: center;
    ${(props) => props.gap && `gap: ${props.gap}`};
    ${(props) => props.width && `width: ${props.width}`};
`;

const FlexRow = forwardRef<HTMLDivElement, SubFlexProps>(
    ({ gap, width, children, ...props }, ref) => {
        return (
            <StyledFlexRow
                ref={ref}
                gap={gap}
                width={width}
                {...props}
            >
                {children}
            </StyledFlexRow>
        );
    }
);

export { FlexCenter, FlexBetween, FlexColumn, FlexRow };
export const Flex = Object.assign(FlexLayout, {
    Center: FlexCenter,
    Between: FlexBetween,
    Column: FlexColumn,
    Row: FlexRow,
});
