export type TextAreaProps = React.ComponentPropsWithRef<'textarea'> & {
    label?: React.ReactNode;
    error?: React.ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    width?: string;
    minHeight?: string;
};
