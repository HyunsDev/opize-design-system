export type SelectProps = Omit<React.ComponentPropsWithRef<'select'>, 'size'> & {
    label?: React.ReactNode;
    error?: React.ReactNode;
    size?: 'small' | 'regular' | 'medium';
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    width?: string;
    placeholder?: string;
    suffix?: React.ReactNode;
};
