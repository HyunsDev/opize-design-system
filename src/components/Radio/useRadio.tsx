export interface RadioGroupProps {
    name?: string;
    disabled?: boolean;
}

export function useRadio(props: RadioGroupProps) {
    const { name, disabled } = props;

    return {
        name,
        disabled,
    };
}

export type UseRadioReturn = ReturnType<typeof useRadio>;
