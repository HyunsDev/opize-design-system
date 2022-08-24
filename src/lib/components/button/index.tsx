/* eslint-disable react/jsx-no-constructed-context-values */
import styled from 'styled-components';
import { IconContext } from 'phosphor-react';
import React, { useContext } from 'react';
import { Spinner } from '../spinner';
import { ButtonComponent, ButtonProps, StyledButtonProps } from './buttonType';
import { colorMap, sizeMap } from './buttonStyle';
import { PolymorphicRef } from '../../utils/type/polymorphicComponent';
import { useCodeModal } from '../../hooks';
import { LinkContext } from '../../context/linkContext';

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
    border-radius: ${(props) => props.$borderRadius}px;

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

    ${(props) => sizeMap[props.$size]};
    ${(props) => colorMap[props.$variant][props.$color]};
`;

/**
 * 버튼
 */
export const Button: ButtonComponent = React.forwardRef(
    <T extends React.ElementType = 'button'>(
        {
            as,
            children,
            variant = 'default',
            isLoading = false,
            color = 'gray',
            size = 'medium',
            icon,
            iconPosition = 'start',
            onClick,
            type = 'button',
            borderRadius = 4,
            width = 'fit-content',
            disabled = false,
            to,
            ...props
        }: ButtonProps<T>,
        ref: PolymorphicRef<T>['ref']
    ) => {
        const { Link } = useContext(LinkContext);

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

        const iconOnly = !children && !!icon && width === 'fit-content';

        if (Link && to && !as) {
            const Element = Link || 'button';

            return (
                <StyledButton
                    {...props}
                    ref={ref}
                    $width={width}
                    onClick={() => onClick && onClick()}
                    $color={color}
                    $size={size}
                    $variant={variant}
                    type={type}
                    $borderRadius={borderRadius}
                    disabled={disabled}
                    $iconOnly={iconOnly}
                    as={Element}
                    to={to}
                >
                    {buttonChildren}
                </StyledButton>
            );
        }

        const Element = as || 'button';
        return (
            <StyledButton
                {...props}
                ref={ref}
                $width={width}
                onClick={() => onClick && onClick()}
                $color={color}
                $size={size}
                $variant={variant}
                type={type}
                $borderRadius={borderRadius}
                disabled={disabled}
                $iconOnly={iconOnly}
                as={Element}
            >
                {buttonChildren}
            </StyledButton>
        );
    }
);

export type { ButtonProps };
