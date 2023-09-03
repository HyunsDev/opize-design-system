import React, { forwardRef } from 'react';
import { MenuOptionProps } from './Menu.type';
import { Button } from '..';
import { usePopoverContext } from '../Popover/Popover.context';

export const MenuOption = forwardRef<HTMLButtonElement, MenuOptionProps>((props, ref) => {
    const {
        autoClose = true,
        variant = 'tertiary',
        align = 'start',
        size = 'regular',
        width = '100%',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ref: _,
        onClick,
        children,
        ...otherProps
    } = props;

    const { closePopover } = usePopoverContext();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (autoClose) closePopover();
        onClick?.(event);
    };

    return (
        <Button
            ref={ref}
            onClick={handleClick}
            align={align}
            variant={variant}
            size={size}
            width={width}
            {...otherProps}
        >
            {children}
        </Button>
    );
});
