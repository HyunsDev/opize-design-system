import React from 'react';
import { StyledCheckboxGroup, StyledCheckboxGroupLabel } from './CheckboxGroup.style';
import { CheckboxContextProvider } from './Checkbox.context';
import { useCheckbox } from './useCheckbox';

export type CheckboxGroupProps = Omit<React.ComponentPropsWithRef<'div'>, 'onChange'> & {
    name?: string;
    disabled?: boolean;
    size?: 'small' | 'regular' | 'medium';
    gap?: string;
    width?: string;
    label?: React.ReactNode;
};

export const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>((props, ref) => {
    const {
        children,
        name,
        disabled,
        size = 'regular',
        gap = '8px',
        width = '100%',
        label,
        ...rest
    } = props;
    const context = useCheckbox({
        disabled,
        size,
        name,
    });

    return (
        <CheckboxContextProvider value={context}>
            <StyledCheckboxGroup
                ref={ref}
                $gap={gap}
                $width={width}
                {...rest}
            >
                {label && <StyledCheckboxGroupLabel>{label}</StyledCheckboxGroupLabel>}
                {children}
            </StyledCheckboxGroup>
        </CheckboxContextProvider>
    );
});
