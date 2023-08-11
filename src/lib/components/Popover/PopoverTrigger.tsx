import { forwardRef, useCallback } from 'react';
import { PopoverTriggerProps } from './Popover.type';
import { Button } from '..';
import { usePopoverContext } from './Popover.context';

export const PopoverTrigger = forwardRef<HTMLButtonElement, PopoverTriggerProps>((props, ref) => {
    const { children, ...otherProps } = props;
    const { isOpen, openPopover, closePopover, triggerProps } = usePopoverContext();

    const onClick = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            isOpen ? closePopover() : openPopover();
            if (props.onClick) props.onClick(event);
        },
        [isOpen]
    );

    return (
        <Button
            ref={ref}
            onClick={onClick}
            {...otherProps}
            {...triggerProps}
        >
            {children}
        </Button>
    );
});

PopoverTrigger.displayName = 'Popover.Trigger';
