export type SelectProps = Omit<React.ComponentPropsWithRef<'select'>, 'size'> & {
    label?: React.ReactNode;
    error?: React.ReactNode;
    size?: 'small' | 'regular' | 'medium' | 'large';
    disabled?: boolean;
    width?: string;
    placeholder?: string;
    suffix?: React.ReactNode;
};
