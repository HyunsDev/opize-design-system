import React from 'react';
import { PolymorphicProps } from '../../utils/Polymorphic';

export type ButtonWidth = 'auto' | '100%' | string;
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'warning';
export type ButtonShape = 'square' | 'round';
export type ButtonAlign = 'start' | 'center' | 'end';

export type OriginalButtonProps = {
    width?: ButtonWidth;
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

export type ButtonProps<T extends React.ElementType = 'button'> = PolymorphicProps<
    T,
    OriginalButtonProps
>;

export type ButtonComponent = <T extends React.ElementType = 'button'>(
    props: ButtonProps<T>
) => React.ReactElement | null;
