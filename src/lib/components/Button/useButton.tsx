import React from 'react';
import { ButtonProps } from './Button.type';
import { useDOMRef } from '../../utils/dom';
import { StyledButtonProps } from './style';
import { PolymorphicRef } from '../../utils/Polymorphic';

export function useButton<T extends React.ElementType = 'button'>(props: ButtonProps<T>) {
    const {
        ref,
        as,
        children,
        width = 'fit-content',
        size = 'medium',
        variant = 'primary',
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
        medium: 20,
        large: 24,
    }[size];

    const styledProps: StyledButtonProps = {
        $width: width,
        $size: size,
        $variant: variant,
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
