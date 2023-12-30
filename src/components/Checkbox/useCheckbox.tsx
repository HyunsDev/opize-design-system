export interface CheckboxProps {
    name?: string;
    disabled?: boolean;
    size?: 'small' | 'regular' | 'medium';
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
