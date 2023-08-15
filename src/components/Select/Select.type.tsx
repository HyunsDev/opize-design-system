export type SelectProps = Omit<React.ComponentPropsWithRef<'select'>, 'size'> & {
    label?: React.ReactNode;
    error?: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    width?: string;
    placeholder?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
};
