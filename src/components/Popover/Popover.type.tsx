import { ButtonProps } from '..';

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export interface PopoverTriggerProps extends ButtonProps {}

export interface PopoverContentProps extends React.ComponentPropsWithRef<'div'> {
    children?: React.ReactNode;
}
