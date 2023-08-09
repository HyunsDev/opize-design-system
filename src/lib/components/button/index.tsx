/* eslint-disable react/display-name */
import React, { useContext, useImperativeHandle, useRef, useState } from 'react';

import { IconContext } from 'phosphor-react';
import styled from 'styled-components';

import { PolymorphicRef } from '../../utils/type/polymorphicComponent';
import { Spinner } from '../spinner';

import { colorMap, sizeMap } from './buttonStyle';
import { ButtonToolTipBox } from './buttonTooltip';
import { ButtonComponent, ButtonProps, StyledButtonProps } from './buttonType';

const StyledButton = styled.button<StyledButtonProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    line-height: 20px;

    border: 0;
    border-radius: ${(props) => props.$borderRadius}px;

    transition: 100ms;

    cursor: pointer;
    user-select: none;

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
            iconPosition = 'end',
            onClick,
            type = 'button',
            borderRadius,
            width = 'fit-content',
            disabled = false,
            to,
            tooltip,
            ...props
        }: ButtonProps<T>,
        ref: PolymorphicRef<T>['ref']
    ): JSX.Element => {
        const inputRef = useRef<any>(null);
        useImperativeHandle(ref, () => inputRef.current as unknown);

        const [isHover, setIsHover] = useState(false);

        // 아이콘
        let Icon;
        if (typeof icon === 'string') {
            Icon = (
                <img
                    src={icon}
                    alt=""
                />
            );
        }

        const buttonChildren = (
            <IconContext.Provider
                value={{
                    size: 16,
                    weight: 'bold',
                }}
            >
                {isLoading && (
                    <Spinner
                        size={16}
                        color="var(--local-color)"
                    />
                )}
                {!isLoading && iconPosition === 'start' && (Icon || icon)}
                {!isLoading && children}
                {!isLoading && iconPosition === 'end' && (Icon || icon)}
            </IconContext.Provider>
        );

        const iconOnly = !children && !!icon;

        const Element = as || 'button';

        const PreButton = (
            <StyledButton
                {...props}
                ref={inputRef}
                $width={width}
                onClick={(e) => onClick && onClick(e)}
                $color={color}
                $size={size}
                $variant={variant}
                type={type}
                $borderRadius={borderRadius || iconOnly ? 99999 : 4}
                disabled={disabled}
                $iconOnly={iconOnly}
                as={Element}
                onMouseOver={(e) => {
                    setIsHover(true);
                    if (props.onMouseOver) props.onMouseOver(e);
                }}
                onMouseOut={(e) => {
                    setIsHover(false);
                    if (props.onMouseOut) props.onMouseOut(e);
                }}
            >
                {buttonChildren}
            </StyledButton>
        );

        if (tooltip) {
            const pos: {
                top: number;
                right: number;
                bottom: number;
                left: number;
            } = {
                top: -1,
                right: -1,
                bottom: -1,
                left: -1,
            };

            switch (tooltip.direction || 'top') {
                case 'right':
                    pos.left =
                        (inputRef.current?.offsetLeft as number) +
                        (inputRef.current?.offsetWidth as number);
                    pos.top =
                        (inputRef.current?.offsetTop as number) +
                        (inputRef.current?.offsetHeight as number) / 2;
                    break;
                case 'bottom':
                    pos.left =
                        (inputRef.current?.offsetLeft as number) +
                        (inputRef.current?.offsetWidth as number) / 2;
                    pos.top =
                        (inputRef.current?.offsetTop as number) +
                        (inputRef.current?.offsetHeight as number);
                    break;
                case 'left':
                    pos.right =
                        document.documentElement.scrollWidth -
                        (inputRef.current?.offsetLeft as number) -
                        (inputRef.current?.offsetWidth as number);
                    pos.top =
                        (inputRef.current?.offsetTop as number) +
                        (inputRef.current?.offsetHeight as number) / 2;
                    break;
                case 'top':
                default:
                    pos.left =
                        (inputRef.current?.offsetLeft as number) +
                        (inputRef.current?.offsetWidth as number) / 2;
                    pos.bottom =
                        document.body.offsetHeight -
                        (inputRef.current?.offsetTop as number) -
                        (inputRef.current?.offsetHeight as number);
                    break;
            }

            const f = (e: number) => (e === -1 ? 'auto' : `${e}px`);
            const inset = `${f(pos.top)} ${f(pos.right)} ${f(pos.bottom)} ${f(pos.left)}`;

            return (
                <>
                    {PreButton}
                    {isHover && (
                        <ButtonToolTipBox
                            text={tooltip.text}
                            direction={tooltip.direction || 'top'}
                            pos={inset}
                        />
                    )}
                </>
            );
        }
        return PreButton;
    }
);

export type { ButtonProps };
