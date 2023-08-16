import { forwardRef } from 'react';
import { SelectProps } from './Select.type';
import {
    StyledSelect,
    StyledSelectContainer,
    StyledSelectOuterContainer,
    StyledSuffix,
} from './Select.style';
import { StyledInputLabel } from '../Input/Input.style';
import { Error } from '../..';
import { CaretDown } from 'phosphor-react';

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
    const {
        label,
        error,
        size = 'medium',
        disabled = false,
        width = '100%',
        placeholder,
        suffix = <CaretDown />,
        ...rest
    } = props;

    return (
        <StyledSelectOuterContainer>
            {label && <StyledInputLabel>{label}</StyledInputLabel>}
            <StyledSelectContainer
                $disabled={disabled}
                $isError={!!error}
                $size={size}
                $width={width}
            >
                <StyledSelect
                    ref={ref}
                    disabled={disabled}
                    placeholder={placeholder}
                    $size={size}
                    $width={width}
                    {...rest}
                />
                {suffix && <StyledSuffix $size={size}>{suffix}</StyledSuffix>}
            </StyledSelectContainer>
            {error && <Error size={size}>{error}</Error>}
        </StyledSelectOuterContainer>
    );
});
