import React from 'react';

export type ButtonWidth = 'auto' | '100%' | 'fit-content' | string;
export type ButtonSize = 'small' | 'regular' | 'medium';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonColor = 'gray' | 'yellow' | 'red' | 'green' | 'blue' | 'violet';
export type ButtonShape = 'square' | 'round';
export type ButtonAlign = 'start' | 'center' | 'end';

export type OriginalButtonProps = {
    width?: string;
    size?: ButtonSize;
    variant?: ButtonVariant;
    color?: ButtonColor;
    iconOnly?: boolean;
    shape?: ButtonShape;
    align?: ButtonAlign;

    disabled?: boolean;
    isLoading?: boolean;

    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
};

export type ButtonProps<T extends React.ElementType = 'button'> = {
    as?: T;
    ref?: React.ComponentPropsWithRef<T>['ref'];
} & Omit<React.ComponentPropsWithoutRef<T>, 'prefix' | 'suffix'> &
    OriginalButtonProps;
