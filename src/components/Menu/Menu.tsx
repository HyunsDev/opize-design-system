import { forwardRef } from 'react';
import { MenuProps } from './Menu.type';
import { MenuOption } from './MenuOption';
import { Popover, PopoverContentProps } from '..';

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

const ModalContent = forwardRef<HTMLDivElement, PopoverContentProps>((props, ref) => {
    const { children, ...otherProps } = props;

    return (
        <Popover.Content
            ref={ref}
            style={{
                minWidth: '180px',
            }}
            {...otherProps}
        >
            {children}
        </Popover.Content>
    );
});

const MenuTrigger = Popover.Trigger;
const MenuContent = Popover.Content;
export { MenuTrigger, MenuContent, MenuOption };
export const Menu = Object.assign(MenuContainer, {
    Trigger: Popover.Trigger,
    Content: ModalContent,
    Option: MenuOption,
});
