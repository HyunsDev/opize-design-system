import React from 'react';
import { ButtonProps } from './Button.type';
import { useDOMRef } from '../../utils/dom';
import { PolymorphicRef } from '../../utils/Polymorphic';
import { StyledButtonProps } from './Button.style';

export function useButton<T extends React.ElementType = 'button'>(props: ButtonProps<T>) {
    const {
        ref,
        as,
        children,
        width = 'fit-content',
        size = 'medium',
        variant = 'secondary',
        color = 'gray',
        iconOnly: isIconOnly = false,
        shape = 'square',
        align = 'center',
        disabled = false,
        isLoading = false,
        prefix,
        suffix,
        ...restProps
    } = props;

    const Component = as || 'button';
    const domRef = useDOMRef<PolymorphicRef<T>>(ref);

    const isDisabled = disabled || isLoading;

    const spinnerSize = {
        small: 18,
        regular: 20,
        medium: 20,
        large: 24,
    }[size];

    const styledProps: StyledButtonProps = {
        $width: width,
        $size: size,
        $variant: variant,
        $color: color,
        $shape: shape,
        $align: align,
        $iconOnly: isIconOnly,
    };

    const buttonProps = {
        disabled: isDisabled,
        ...restProps,
    };

    return {
        domRef,
        as: Component,
        children,
        styledProps,
        buttonProps,
        isLoading,
        spinnerSize,
        prefix,
        suffix,
    };
}
