import React, { forwardRef } from 'react';
import { MenuOptionProps } from './Menu.type';
import { StyledOption } from './Menu.style';
import { Spinner } from '..';
import { usePopoverContext } from '../Popover/Popover.context';

export const MenuOption = forwardRef<HTMLButtonElement, MenuOptionProps>((props, ref) => {
    const {
        children,
        variant = 'default',
        isLoading = false,
        disabled = false,
        prefix,
        suffix,
        autoClose = true,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ref: _,
        onClick,
        ...otherProps
    } = props;

    const { closePopover } = usePopoverContext();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (autoClose) closePopover();
        onClick?.(event);
    };

    return (
        <StyledOption
            ref={ref}
            disabled={disabled || isLoading}
            $variant={variant}
            onClick={handleClick}
            {...otherProps}
        >
            {isLoading ? (
                <Spinner
                    size={20}
                    color={'var(--button-spinner-color)'}
                />
            ) : (
                prefix && <span className="button-prefix">{prefix}</span>
            )}
            <span className="button-child">{children}</span>
            {suffix && <span className="button-suffix">{suffix}</span>}
        </StyledOption>
    );
});
