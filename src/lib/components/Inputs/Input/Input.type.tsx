export type InputProps = Omit<React.ComponentPropsWithRef<'input'>, 'prefix'> & {
    label?: React.ReactNode;
    type?: 'text' | 'password' | 'url' | 'email' | 'number' | 'tel';
    error?: React.ReactNode;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    readOnly?: boolean;
    isLoading?: boolean;
    placeholder?: string;
    width?: string;
};
