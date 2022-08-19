/* eslint-disable react/jsx-no-constructed-context-values */
import styled, { css, FlattenInterpolation, ThemedStyledProps } from 'styled-components';
import { IconContext } from 'phosphor-react';
import React, { HTMLAttributes } from 'react';
import { Spinner } from '../spinner';
import { cv } from '../../style';

type ButtonWidth = 'fit-content' | '100%' | string;
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'gray' | 'red' | 'blue';
type ButtonVariant = 'default' | 'contained' | 'outlined' | 'text';

type StyledCss<Props extends { [key: string]: any } = Record<string, any>> = FlattenInterpolation<
    ThemedStyledProps<Props, any>
>;

type sizeProps = { width: string; iconOnly: boolean };
const sizeMap: Record<ButtonSize, StyledCss<sizeProps>> = {
    small: css<sizeProps>`
        height: 26px;
        padding: 0px 8px;
        width: ${(props) => props.width};
        ${(props) =>
            props.iconOnly &&
            !props.width &&
            css`
                padding: 0;
                width: 26px;
            `}
    `,
    medium: css<sizeProps>`
        height: 32px;
        padding: 0px 12px;
        width: ${(props) => props.width};
        ${(props) =>
            props.iconOnly &&
            !props.width &&
            css`
                padding: 0;
                width: 32px;
            `}
    `,
    large: css<sizeProps>`
        height: 40px;
        padding: 0px 16px;
        width: ${(props) => props.width};
        ${(props) =>
            props.iconOnly &&
            !props.width &&
            css`
                padding: 0;
                width: 40px;
            `}
    `,
};

type ButtonColorStyle = Record<ButtonColor, StyledCss>;
const colorMap: Record<ButtonVariant, ButtonColorStyle> = {
    default: {
        gray: css`
            color: ${cv.text1};
            --local-color: ${cv.text1};
            background-color: ${cv.bg_element2};
            border: solid 1px ${cv.border2};

            &:hover {
                background-color: ${cv.bg_element3};
                --local-border: solid 1px ${cv.border1};
            }

            &:active {
                background-color: ${cv.bg_element4};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                border: solid 1px ${cv.border3};
                color: ${cv.border3};
                --local-color: ${cv.border3};
            }

            &:focus-visible::after {
                outline-color: ${cv.border2};
            }
        `,
        red: css`
            color: ${cv.red1};
            --local-color: ${cv.red1};
            background-color: ${cv.bg_red1};
            border: solid 1px ${cv.red1};

            &:hover {
                background-color: ${cv.bg_red1_hover};
            }

            &:active {
                background-color: ${cv.bg_red1_hover};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                border: solid 1px ${cv.bg_red1};
                color: ${cv.bg_red1};
                --local-color: ${cv.bg_red1};
            }

            &:focus-visible::after {
                outline-color: ${cv.red1};
            }
        `,
        blue: css`
            color: ${cv.blue1};
            --local-color: ${cv.blue1};
            background-color: ${cv.bg_blue1};
            border: solid 1px ${cv.blue1};

            &:hover {
                background-color: ${cv.bg_blue1_hover};
            }

            &:active {
                background-color: ${cv.bg_blue1_hover};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                border: solid 1px ${cv.bg_blue1};
                color: ${cv.bg_blue1};
                --local-color: ${cv.bg_blue1};
            }

            &:focus-visible::after {
                outline-color: ${cv.blue1};
            }
        `,
    },
    contained: {
        gray: css`
            color: ${cv.bg_element1};
            // --local-color은 inherit으로 color를 받기 힘든 컴포넌트를 위한 CSS 변수입니다.
            // 스타일 추가시 color 속성을 사용하신다면 --local-color 속성도 추가해주셔야 합니다.
            // 현재는 isLoading 때 표시하는 Spinner의 색상 지정을 위해 사용중입니다.
            --local-color: ${cv.bg_element1};
            background-color: ${cv.bg_element5};
            border: solid 1px ${cv.bg_element5};

            &:hover {
                color: ${cv.bg_element5};
                --local-color: ${cv.bg_element5};
                background-color: ${cv.bg_element1};
            }

            &:active {
                background-color: ${cv.bg_element3};
            }

            &:disabled {
                background-color: ${cv.bg_element3};
                border: solid 1px ${cv.bg_element3};
                color: ${cv.bg_element1};
                --local-color: ${cv.bg_element1};
            }

            &:focus-visible::after {
                outline-color: ${cv.bg_element5};
            }
        `,
        red: css`
            color: ${cv.bg_element1};
            --local-color: ${cv.bg_element1};
            background-color: ${cv.red1};
            border: solid 1px ${cv.red1};

            &:hover {
                color: ${cv.red1};
                --local-color: ${cv.red1};
                background-color: ${cv.bg_element1};
            }

            &:active {
                background-color: ${cv.bg_element3};
            }

            &:disabled {
                background-color: ${cv.bg_red1};
                border: solid 1px ${cv.bg_red1};
                color: ${cv.bg_element1};
                --local-color: ${cv.bg_element1};
            }

            &:focus-visible::after {
                outline-color: ${cv.red1};
            }
        `,
        blue: css`
            color: ${cv.bg_element1};
            --local-color: ${cv.bg_element1};
            background-color: ${cv.blue1};
            border: solid 1px ${cv.blue1};

            &:hover {
                color: ${cv.blue1};
                --local-color: ${cv.blue1};
                background-color: ${cv.bg_element1};
            }

            &:active {
                background-color: ${cv.bg_element3};
            }

            &:disabled {
                background-color: ${cv.bg_blue1};
                border: solid 1px ${cv.bg_blue1};
                color: ${cv.bg_element1};
                --local-color: ${cv.bg_element1};
            }

            &:focus-visible::after {
                outline-color: ${cv.blue1};
            }
        `,
    },
    outlined: {
        gray: css`
            color: ${cv.text1};
            --local-color: ${cv.text1};
            background-color: ${cv.bg_element1};
            border: solid 1px ${cv.border2};

            &:hover {
                background-color: ${cv.bg_element1};
                border: solid 1px ${cv.border1};
                --local-border: solid 1px ${cv.border1};
            }

            &:active {
                background-color: ${cv.bg_element2};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                border: solid 1px ${cv.border3};
                color: ${cv.border3};
                --local-color: ${cv.border3};
            }

            &:focus-visible::after {
                outline-color: ${cv.border2};
            }
        `,
        red: css`
            color: ${cv.red1};
            --local-color: ${cv.red1};
            background-color: ${cv.bg_red1};
            border: solid 1px ${cv.red1};

            &:hover {
                background-color: ${cv.bg_red1_hover};
            }

            &:active {
                background-color: ${cv.bg_red1_hover};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                border: solid 1px ${cv.bg_red1};
                color: ${cv.bg_red1};
                --local-color: ${cv.bg_red1};
            }

            &:focus-visible::after {
                outline-color: ${cv.red1};
            }
        `,
        blue: css`
            color: ${cv.blue1};
            --local-color: ${cv.blue1};
            background-color: ${cv.bg_blue1};
            border: solid 1px ${cv.blue1};

            &:hover {
                background-color: ${cv.bg_blue1_hover};
            }

            &:active {
                background-color: ${cv.bg_blue1_hover};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                border: solid 1px ${cv.bg_blue1};
                color: ${cv.bg_blue1};
                --local-color: ${cv.bg_blue1};
            }

            &:focus-visible::after {
                outline-color: ${cv.blue1};
            }
        `,
    },
    text: {
        gray: css`
            color: ${cv.text1};
            --local-color: ${cv.text1};
            background-color: ${cv.bg_element1};
            border: solid 1px ${cv.bg_element1};

            &:hover {
                background-color: ${cv.bg_element2};
            }

            &:active {
                background-color: ${cv.bg_element3};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                color: ${cv.text3};
                --local-color: ${cv.text3};
            }

            &:focus-visible::after {
                outline-color: ${cv.text1};
            }
        `,
        red: css`
            color: ${cv.red1};
            --local-color: ${cv.red1};
            background-color: ${cv.bg_element1};
            border: solid 1px ${cv.bg_element1};

            &:hover {
                background-color: ${cv.bg_red1_hover};
            }

            &:active {
                background-color: ${cv.bg_red1_hover};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                color: ${cv.bg_red1};
                --local-color: ${cv.bg_red1};
            }

            &:focus-visible::after {
                outline-color: ${cv.red1};
            }
        `,
        blue: css`
            color: ${cv.blue1};
            --local-color: ${cv.blue1};
            background-color: ${cv.bg_element1};
            border: solid 1px ${cv.bg_element1};

            &:hover {
                background-color: ${cv.bg_blue1_hover};
            }

            &:active {
                background-color: ${cv.bg_blue1_hover};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                color: ${cv.bg_blue1};
                --local-color: ${cv.bg_blue1};
            }

            &:focus-visible::after {
                outline-color: ${cv.blue1};
            }
        `,
    },
};

interface StyledButtonProps {
    iconOnly: boolean;
    variant: ButtonVariant;
    color: ButtonColor;
    size: ButtonSize;
    width: string;
}

const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    position: relative;
    font-size: 14px;
    border: 0;
    text-decoration: none;
    transition: 150ms;
    font-weight: 500;
    line-height: 20px;
    gap: 8px;
    cursor: pointer;
    border-radius: 4px;

    &::after {
        content: '';
        position: absolute;
        z-index: 1;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        transition: 200ms;
        display: block;
        pointer-events: none;
        border-radius: 4px;
        outline: solid 2px transparent;
    }

    &:focus-visible {
        outline: none;
        transition: 200ms;

        &::after {
            top: -3px;
            right: -3px;
            bottom: -3px;
            left: -3px;
        }
    }

    &:disabled {
        cursor: not-allowed;
    }

    ${(props) => sizeMap[props.size]};
    ${(props) => colorMap[props.variant][props.color]};
`;

export interface ButtonProps extends HTMLAttributes<'button'> {
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
    onClick?: () => void;
    type?: 'submit' | 'button';
    /**
     * 버튼의 너비를 지정할 수 있습니다.
     */
    width?: ButtonWidth;
    /**
     * string 또는 컴포넌트를 입력하여 태그처럼 사용할 수 있습니다.
     * styled-components의 as prop을 참고하세요.
     *
     * ex. "a", Link(react-router-dom)
     */
    as?: any;
    /**
     * as를 사용했을 때 컴포넌트에 전달할 추가적인 props입니다.
     *
     * ex. { href: "/" }
     */
    asProps?: { [key: string]: any };
}

/**
 * 버튼
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = 'default',
            isLoading = false,
            color = 'gray',
            size = 'medium',
            icon,
            iconPosition = 'start',
            onClick,
            type = 'button',
            width,
            disabled = false,
            as,
            asProps = {},
            ...props
        }: ButtonProps,
        ref
    ) => {
        // 아이콘
        let Icon;
        if (typeof icon === 'string') {
            Icon = <img src={icon} alt="" />;
        }

        const buttonChildren = (
            <IconContext.Provider
                value={{
                    size: 16,
                    weight: 'bold',
                }}
            >
                {isLoading && <Spinner size={16} color="var(--local-color)" />}
                {!isLoading && iconPosition === 'start' && (Icon || icon)}
                {!isLoading && children}
                {!isLoading && iconPosition === 'end' && (Icon || icon)}
            </IconContext.Provider>
        );

        return (
            <StyledButton
                {...asProps}
                {...props}
                ref={ref}
                width={width}
                onClick={() => onClick && onClick()}
                color={color}
                size={size}
                variant={variant}
                type={type}
                as={as}
                disabled={disabled}
                iconOnly={!children && icon}
            >
                {buttonChildren}
            </StyledButton>
        );
    }
);
