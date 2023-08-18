import React from 'react';
import { StyledSkeleton } from './Skeleton.style';

export interface SkeletonProps {
    children?: React.ReactNode;
    width?: string;
    height?: string;
    minHeight?: string;
    show?: boolean;
    borderRadius?: string;
}

export const Skeleton = React.forwardRef<HTMLSpanElement, SkeletonProps>((props, ref) => {
    const {
        children,
        width = 'fit-content',
        height = 'fit-content',
        minHeight = '24px',
        show = true,
        borderRadius = '12px',
        ...rest
    } = props;

    return (
        <StyledSkeleton
            ref={ref}
            $width={width}
            $height={height}
            $minHeight={minHeight}
            $show={show}
            $borderRadius={borderRadius}
            $isWrap={!!children}
            {...rest}
        >
            {children}
        </StyledSkeleton>
    );
});
Skeleton.displayName = 'Skeleton';
