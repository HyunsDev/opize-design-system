import { Menu } from '../..';
import { DotsThreeVertical } from 'phosphor-react';
import { ItemContainer } from './Item.style';

export interface MenuItemProps {
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export function MenuItem({ icon = <DotsThreeVertical size={20} />, children }: MenuItemProps) {
    return (
        <ItemContainer $width="32px">
            <Menu>
                <Menu.Trigger
                    iconOnly
                    variant="tertiary"
                    shape="round"
                >
                    {icon}
                </Menu.Trigger>
                <Menu.Content>{children}</Menu.Content>
            </Menu>
        </ItemContainer>
    );
}
