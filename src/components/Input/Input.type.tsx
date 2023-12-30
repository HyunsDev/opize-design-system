export type InputProps = Omit<React.ComponentPropsWithRef<'input'>, 'prefix' | 'size'> & {
    label?: React.ReactNode;
    type?: 'text' | 'password' | 'url' | 'email' | 'number' | 'tel';
    error?: React.ReactNode;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'regular' | 'medium';
    disabled?: boolean;
    readOnly?: boolean;
    isLoading?: boolean;
    placeholder?: string;
    width?: string;
};
