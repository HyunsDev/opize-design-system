import { forwardRef } from 'react';
import { MenuProps } from './Menu.type';
import { MenuOption } from './MenuOption';
import { Popover } from '..';

const MenuContainer = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
    const { children, ...otherProps } = props;

    return (
        <Popover
            ref={ref}
            {...otherProps}
        >
            {children}
        </Popover>
    );
});

export const Menu = Object.assign(MenuContainer, {
    Trigger: Popover.Trigger,
    Content: Popover.Content,
    Option: MenuOption,
});
