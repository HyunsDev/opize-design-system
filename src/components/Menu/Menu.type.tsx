import { DividerProps, PopoverContentProps, PopoverProps, PopoverTriggerProps } from '..';

export interface MenuProps extends PopoverProps {}

export interface MenuTriggerProps extends PopoverTriggerProps {}

export interface MenuContentProps extends PopoverContentProps {}

export type MenuOptionProps = {
    variant?: 'default' | 'danger';
    isLoading?: boolean;
    disabled?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    autoClose?: boolean;
} & Omit<React.ComponentPropsWithRef<'button'>, 'prefix' | 'suffix'>;

export interface MenuOptionDividerProps extends DividerProps {}
