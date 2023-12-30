import { forwardRef } from 'react';
import {
    StyledSwitch,
    StyledSwitchContainer,
    StyledSwitchContent,
    StyledSwitchLabel,
    StyledSwitchOuterContainer,
} from './Switch.style';
import { Error } from '../..';

export type SwitchProps = Omit<React.ComponentPropsWithRef<'input'>, 'size'> & {
    label?: React.ReactNode;
    error?: React.ReactNode;
    disabled?: boolean;
    width?: string;
    size?: 'small' | 'regular' | 'medium';
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
    const {
        children,
        label,
        error,
        size = 'regular',
        disabled = false,
        width = 'fit-content',
        ...rest
    } = props;

    return (
        <StyledSwitchOuterContainer $width={width}>
            {label && <StyledSwitchLabel>{label}</StyledSwitchLabel>}
            <StyledSwitchContainer
                $disabled={disabled}
                $size={size}
            >
                <StyledSwitch
                    ref={ref}
                    type="checkbox"
                    disabled={disabled}
                    {...rest}
                />
                <StyledSwitchContent>{children}</StyledSwitchContent>
            </StyledSwitchContainer>
            {error && <Error>{error}</Error>}
        </StyledSwitchOuterContainer>
    );
});
