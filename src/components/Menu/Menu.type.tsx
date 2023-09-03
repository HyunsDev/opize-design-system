import {
    ButtonProps,
    DividerProps,
    PopoverContentProps,
    PopoverProps,
    PopoverTriggerProps,
} from '..';

export interface MenuProps extends PopoverProps {}

export interface MenuTriggerProps extends PopoverTriggerProps {}

export interface MenuContentProps extends PopoverContentProps {}

export interface MenuOptionProps extends ButtonProps {
    autoClose?: boolean;
}

export interface MenuOptionDividerProps extends DividerProps {}
