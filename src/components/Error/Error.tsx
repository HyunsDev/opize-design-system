import React from 'react';
import { WarningOctagon } from '@phosphor-icons/react';
import { ErrorContent, ErrorLabel, StyledError } from './Error.style';

export interface ErrorProps extends React.ComponentPropsWithRef<'div'> {
    label?: React.ReactNode;
    size?: 'small' | 'regular' | 'medium' | 'large';
}

export const Error = React.forwardRef<HTMLDivElement, ErrorProps>((props, ref) => {
    const { children, label, size = 'medium', ...otherProps } = props;

    const labelSize = size === 'small' ? 16 : size === 'medium' ? 20 : 24;
    const labelComponent = label || <WarningOctagon size={labelSize} />;

    return (
        <StyledError
            ref={ref}
            $size={size}
            {...otherProps}
        >
            <ErrorLabel $size={size}>{labelComponent}</ErrorLabel>
            <ErrorContent>{children}</ErrorContent>
        </StyledError>
    );
});
