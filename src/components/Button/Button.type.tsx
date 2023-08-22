import React from 'react';

export type ButtonWidth = 'auto' | '100%' | 'fit-content' | string;
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning';
export type ButtonShape = 'square' | 'round';
export type ButtonAlign = 'start' | 'center' | 'end';

export type OriginalButtonProps = {
    width?: string;
    size?: ButtonSize;
    variant?: ButtonVariant;
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

export type ButtonComponent<T extends React.ElementType = 'button'> = (<
    TT extends React.ElementType = T
>(
    props: ButtonProps<TT>
) => React.ReactElement) & {
    displayName?: string;
};
