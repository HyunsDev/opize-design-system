import React from 'react';
import { NoteAction, NoteContent, NoteLabel, StyledNote, StyledNoteLeft } from './Note.style';
import { CheckCircle, Info, Warning, WarningOctagon } from 'phosphor-react';

export interface NoteProps extends React.ComponentPropsWithRef<'div'> {
    action?: React.ReactNode;
    variant?: 'info' | 'success' | 'good' | 'warning' | 'error';
    fill?: boolean;
    label?: React.ReactNode;
}

const defaultLabel: Record<'info' | 'success' | 'good' | 'warning' | 'error', React.ReactNode> = {
    info: <Info size={20} />,
    good: <Info size={20} />,
    success: <CheckCircle size={20} />,
    warning: <Warning size={20} />,
    error: <WarningOctagon size={20} />,
};

export const Note = React.forwardRef<HTMLDivElement, NoteProps>((props, ref) => {
    const { children, variant = 'info', fill = false, label, ...otherProps } = props;

    const styleProps = {
        $variant: props.variant,
        $fill: props.fill,
    };

    const labelComponent = label || defaultLabel[variant];

    return (
        <StyledNote
            ref={ref}
            {...styleProps}
            {...otherProps}
        >
            <StyledNoteLeft>
                <NoteLabel>{labelComponent}</NoteLabel>
                <NoteContent>{children}</NoteContent>
            </StyledNoteLeft>
            {props.action && <NoteAction>{props.action}</NoteAction>}
        </StyledNote>
    );
});
