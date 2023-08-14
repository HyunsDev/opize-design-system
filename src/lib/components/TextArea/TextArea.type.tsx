export type TextAreaProps = React.ComponentPropsWithRef<'textarea'> & {
    label?: React.ReactNode;
    type?: 'text' | 'password' | 'url' | 'email' | 'number' | 'tel';
    error?: React.ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    width?: string;
    minHeight?: string;
};
