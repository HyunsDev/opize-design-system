import React from 'react';
import { PolymorphicComponentProps } from '../../utils/type/polymorphicComponent';

export type ButtonWidth = 'fit-content' | '100%' | string;
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'gray' | 'red' | 'blue';
export type ButtonVariant = 'default' | 'contained' | 'outlined' | 'text';

export interface StyledButtonProps {
    iconOnly: boolean;
    variant: ButtonVariant;
    color: ButtonColor;
    size: ButtonSize;
    width: string;
    borderRadius: number;
}

type _ButtonProps = {
    /**
     * 버튼 내부에 표시되는 컴포넌트입니다.
     */
    children?: React.ReactNode;
    /**
     * 버튼의 전체적인 스타일입니다.
     */
    variant?: ButtonVariant;
    color?: ButtonColor;
    disabled?: boolean;
    size?: ButtonSize;
    /**
     * 버튼의 border-radius 속성입니다.
     */
    borderRadius?: number;
    /**
     * isLoading일 경우 label 대신 \<Spinner\>가 표시됩니다. width와 같이 사용하는 것을 추천합니다.
     */
    isLoading?: boolean;
    /**
     * label 왼쪽에 표시되는 아이콘입니다.
     *
     * (!children && icon && !width) 인 경우 가로 세로 크기가 똑같은 iconOnly 버튼이 됩니다.
     */
    icon?: React.ReactNode | string;
    /**
     * icon이 버튼에서 표시될 위치를 정합니다.
     */
    iconPosition?: 'start' | 'end';
    /**
     * 버튼의 너비를 지정할 수 있습니다.
     */
    width?: ButtonWidth;
    onClick?: (e?: React.MouseEvent) => void;
};

export type ButtonProps<T extends React.ElementType = 'button'> = PolymorphicComponentProps<T, _ButtonProps>;

export type ButtonComponent = <C extends React.ElementType = 'button'>(
    props: ButtonProps<C>
) => React.ReactElement | null;
