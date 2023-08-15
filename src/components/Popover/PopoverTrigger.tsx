import { forwardRef, useCallback } from 'react';
import { PopoverTriggerProps } from './Popover.type';
import { Button } from '..';
import { usePopoverContext } from './Popover.context';

export const PopoverTrigger = forwardRef<HTMLButtonElement, PopoverTriggerProps>((props, ref) => {
    const { children, onClick, ...otherProps } = props;
    const { isOpen, openPopover, closePopover, triggerProps } = usePopoverContext();

    const clickHandler = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            isOpen ? closePopover() : openPopover();
            if (onClick) onClick(event);
        },
        [isOpen, closePopover, openPopover, onClick]
    );

    return (
        <Button
            ref={ref}
            onClick={clickHandler}
            {...otherProps}
            {...triggerProps}
        >
            {children}
        </Button>
    );
});

PopoverTrigger.displayName = 'Popover.Trigger';
