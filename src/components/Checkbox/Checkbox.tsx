import { forwardRef } from 'react';
import { useDOMRef } from '../../utils/dom';
import {
    StyledCheckbox,
    StyledCheckboxContainer,
    StyledCheckboxContent,
    StyledCheckboxLabel,
    StyledCheckboxOuterContainer,
} from './Checkbox.style';
import { useCheckboxContext } from './Checkbox.context';

export type CheckboxProps = Omit<React.ComponentPropsWithRef<'input'>, 'size'> & {
    children?: React.ReactNode;
    label?: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    width?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
    const domRef = useDOMRef(ref);
    const { children, name, disabled = false, size = 'medium', width = '100%', ...rest } = props;
    const context = useCheckboxContext();

    return (
        <StyledCheckboxOuterContainer $width={width}>
            {props.label && <StyledCheckboxLabel>{props.label}</StyledCheckboxLabel>}
            <StyledCheckboxContainer $disabled={disabled || context?.disabled || false}>
                <StyledCheckbox
                    ref={domRef}
                    type="checkbox"
                    disabled={disabled || context?.disabled}
                    name={name || context?.name}
                    $size={size || context?.size}
                    {...rest}
                />
                {children && (
                    <StyledCheckboxContent onClick={() => domRef.current?.click()}>
                        {children}
                    </StyledCheckboxContent>
                )}
            </StyledCheckboxContainer>
        </StyledCheckboxOuterContainer>
    );
});
