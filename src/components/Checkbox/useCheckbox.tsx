export interface CheckboxProps {
    name?: string;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
}

export function useCheckbox(props: CheckboxProps) {
    const { name, disabled, size } = props;

    return {
        name,
        disabled,
        size,
    };
}

export type UseCheckboxReturn = ReturnType<typeof useCheckbox>;
