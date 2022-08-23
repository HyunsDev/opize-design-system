import { ActionMenuActionType } from '../actionMenu';

interface ItemProps {
    flex?: number;
}

export interface AvatarItemProps extends ItemProps {
    icon: React.ReactNode;
    name: React.ReactNode;
    label: React.ReactNode;
}

export interface StatusItemProps extends ItemProps {
    status: 'stateless' | 'error' | 'warning' | 'done' | 'good';
    label?: React.ReactNode;
}

export interface TextItemProps extends ItemProps {
    text?: string;
    subText?: string;
}

export interface ComponentItemProps extends ItemProps {
    children?: React.ReactNode;
}

export interface ButtonsItemProps extends ItemProps {
    buttons: ActionMenuActionType[][];
}

export type Type = (AvatarItemProps | StatusItemProps | TextItemProps | ButtonsItemProps | ComponentItemProps)[];

export interface ItemsTableProps {
    children: React.ReactNode;
}
