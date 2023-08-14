import { forwardRef } from 'react';
import { InputProps } from './Input.type';
import {
    StyledInput,
    StyledInputContainer,
    StyledInputLabel,
    StyledInputOuterContainer,
    StyledSpinner,
    StyledPrefix,
    StyledSuffix,
} from './Input.style';
import { Error, Spinner } from '../..';

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        size = 'medium',
        type = 'text',
        label,
        error,
        prefix,
        suffix,
        disabled = false,
        readOnly = false,
        isLoading = false,
        placeholder,
        width = '100%',
        ...otherProps
    } = props;

    return (
        <StyledInputOuterContainer>
            {label && <StyledInputLabel>{label}</StyledInputLabel>}
            <StyledInputContainer
                $size={size}
                $width={width}
                $disabled={disabled || isLoading}
                $readOnly={readOnly}
                $isError={!!error}
                aria-disabled={disabled || isLoading}
                aria-readonly={readOnly}
            >
                {isLoading ? (
                    <StyledSpinner>
                        <Spinner size={20} />
                    </StyledSpinner>
                ) : null}
                {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
                <StyledInput
                    ref={ref}
                    type={type}
                    $size={size}
                    placeholder={placeholder}
                    disabled={disabled || isLoading}
                    readOnly={readOnly}
                    {...otherProps}
                />
                {suffix && <StyledSuffix>{suffix}</StyledSuffix>}
            </StyledInputContainer>
            {error && <Error size={size}>{error}</Error>}
        </StyledInputOuterContainer>
    );
});
