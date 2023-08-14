import { forwardRef } from 'react';
import { StyledRadioGroup, StyledRadioGroupLabel } from './RadioGroup.style';
import { useRadio } from './useRadio';
import { RadioContextProvider } from './Radio.context';

export type RadioGroupProps = React.ComponentPropsWithRef<'div'> & {
    name?: string;
    width?: string;
    label?: React.ReactNode;
    gap?: string;
    error?: React.ReactNode;
    disabled?: boolean;
};

export const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>((props, ref) => {
    const {
        label,
        gap = '12px',
        width = '100%',
        children,
        disabled = false,
        name,
        ...rest
    } = props;
    const context = useRadio({
        disabled,
        name: name,
    });

    return (
        <RadioContextProvider value={context}>
            <StyledRadioGroup
                ref={ref}
                $gap={gap}
                $width={width}
                {...rest}
            >
                {label && <StyledRadioGroupLabel>{label}</StyledRadioGroupLabel>}
                {children}
            </StyledRadioGroup>
        </RadioContextProvider>
    );
});
