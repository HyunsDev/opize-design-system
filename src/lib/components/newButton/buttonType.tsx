import React from 'react';

import { PolymorphicComponentProps } from '../../utils/type/polymorphicComponent';
import { ToolTipProps } from '../tooltip';

export type ButtonWidth = 'fit-content' | '100%' | string;
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'gray' | 'red' | 'blue';
export type ButtonVariant = 'default' | 'contained' | 'outlined' | 'text';

export interface StyledButtonProps {
    $iconOnly: boolean;
    $variant: ButtonVariant;
    $color: ButtonColor;
    $size: ButtonSize;
    $width: string;
    $borderRadius: number;
}

type _ButtonProps = {
    children?: React.ReactNode;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    borderRadius?: number;
    isLoading?: boolean;
    icon?: React.ReactNode | string;
    LeadingIcon?: React.ReactNode | string;
    TrailingIcon?: React.ReactNode | string;
    iconOnly?: boolean;
    width?: ButtonWidth;
    tooltip?: Omit<ToolTipProps, 'children'>;
};

export type ButtonProps<T extends React.ElementType = 'button'> = PolymorphicComponentProps<
    T,
    _ButtonProps
>;

export type ButtonComponent = <C extends React.ElementType = 'button'>(
    props: ButtonProps<C>
) => React.ReactElement | null;
