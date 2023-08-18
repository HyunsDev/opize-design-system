import { forwardRef } from 'react';
import { StyledKBD, StyledKBDKey } from './KBD.style';

export interface KBDProps extends React.ComponentPropsWithRef<'kbd'> {
    children?: React.ReactNode;
    meta?: boolean;
    shift?: boolean;
    alt?: boolean;
    ctrl?: boolean;
}

export const KBD = forwardRef<HTMLElement, KBDProps>(
    ({ children, meta, shift, alt, ctrl, ...props }, ref) => {
        return (
            <StyledKBD
                ref={ref}
                {...props}
            >
                {meta && <StyledKBDKey>⌘</StyledKBDKey>}
                {shift && <StyledKBDKey>⇧</StyledKBDKey>}
                {alt && <StyledKBDKey>⌥</StyledKBDKey>}
                {ctrl && <StyledKBDKey>⌃</StyledKBDKey>}
                {children && <StyledKBDKey>{children}</StyledKBDKey>}
            </StyledKBD>
        );
    }
);
