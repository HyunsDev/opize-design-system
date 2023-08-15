import { forwardRef } from 'react';
import { TextAreaProps } from './TextArea.type';
import {
    StyledTextArea,
    StyledTextAreaLabel,
    StyledTextAreaOuterContainer,
} from './TextArea.style';
import { Error } from '../..';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    const {
        label,
        error,
        disabled = false,
        readOnly = false,
        placeholder,
        width = '100%',
        minHeight = 'unset',
        ...otherProps
    } = props;

    return (
        <StyledTextAreaOuterContainer>
            {label && <StyledTextAreaLabel>{label}</StyledTextAreaLabel>}
            <StyledTextArea
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
                $width={width}
                $minHeight={minHeight}
                $isError={!!error}
                ref={ref}
                {...otherProps}
            />
            {error && <Error>{error}</Error>}
        </StyledTextAreaOuterContainer>
    );
});
