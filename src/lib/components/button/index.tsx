/* eslint-disable react/jsx-no-constructed-context-values */
import styled from 'styled-components';
import { IconContext } from 'phosphor-react';
import { Link } from 'react-router-dom';
import React, { ComponentProps } from 'react';
import { Spinner } from '../spinner';
import { cv } from '../../style';

type ButtonWidth = 'fit-content' | '100%' | string;

interface ButtonDivProps {
    bgColor: string;
    bgColorHover: string;
    borderColor: string;
    borderColorHover: string;
    color: string;
    colorHover: string;
    isDisabled: boolean;
    padding: string;
    width: ButtonWidth;
}

const ButtonDiv = styled.button<ButtonDivProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${(props) => props.padding};
    gap: 8px;
    user-select: none;
    min-height: 33px;

    width: ${(props) => props.width};

    font-size: 14px;
    border: 0;
    border-radius: 4px;
    text-decoration: none;

    transition: 200ms;
    cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
    ${(props) => props.color && `color: ${props.color}`};
    ${(props) => props.bgColor && `background-color: ${props.bgColor}`};
    ${(props) => props.borderColor && `border: solid 1px ${props.borderColor}`};
    ${(props) => props.color && `--local-color: ${props.color}`};

    &:hover {
        ${(props) => props.color && `--local-color: ${props.colorHover}`};
        ${(props) => props.colorHover && `color: ${props.colorHover}`};
        ${(props) => props.bgColorHover && `background-color: ${props.bgColorHover}`};
        ${(props) => props.borderColorHover && `border: solid 1px ${props.borderColorHover}`};
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const A = styled.a`
    text-decoration: none;
`;

export interface ButtonProps {
    /**
     * 버튼 내부에 표시되는 컴포넌트입니다.
     */
    label?: React.ReactNode;
    variant?: 'contained' | 'outlined' | 'text';
    color?: 'gray' | 'red';
    size?: 'medium' | 'large';
    isDisabled?: boolean;
    /**
     * isLoading일 경우 label 대신 \<Spinner\>가 표시됩니다. width와 같이 사용하는 것을 추천합니다.
     */
    isLoading?: boolean;
    /**
     * label 왼쪽에 표시되는 아이콘입니다.
     */
    icon?: React.ReactNode | string;
    onClick?: () => void;
    /**
     * 클릭했을 때 이동할 링크입니다. http 포함 ? \<A\> : \<Link\> 를 사용합니다. onClick과 같이 설정한 경우 onClick은 무시됩니다.
     */
    to?: string;
    type?: 'submit' | 'button';
    /**
     * 버튼의 너비입니다. isLoading을 사용하는 경우 width 유지를 위해 사용하는 것을 추천합니다.
     */
    width?: ButtonWidth;
}

/**
 * 버튼입니다.
 */
export function Button({
    label,
    variant = 'outlined',
    isDisabled = false,
    isLoading = false,
    color = 'gray',
    size = 'medium',
    icon,
    onClick,
    to,
    type = 'button',
    width = 'fit-content',
}: ButtonProps) {
    // 아이콘
    let Icon;
    if (typeof icon === 'string') {
        Icon = <img src={icon} alt="" />;
    }

    // 색상
    let ButtonColor = {
        bgColor: '',
        bgColorHover: '',
        borderColor: '',
        borderColorHover: '',
        color: '',
        colorHover: '',
    };
    if (variant === 'contained') {
        if (color === 'gray') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: cv.bg_element5,
                    bgColorHover: 'rgba(0,0,0,0)',
                    borderColor: cv.bg_element5,
                    borderColorHover: '',
                    color: cv.bg_element1,
                    colorHover: cv.bg_element5,
                };
            } else {
                ButtonColor = {
                    bgColor: cv.bg_element3,
                    bgColorHover: '',
                    borderColor: cv.bg_element3,
                    borderColorHover: '',
                    color: cv.bg_element1,
                    colorHover: '',
                };
            }
        } else if (color === 'red') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: cv.red1,
                    bgColorHover: cv.bg_element1,
                    borderColor: cv.red1,
                    borderColorHover: '',
                    color: cv.bg_element1,
                    colorHover: cv.red1,
                };
            } else {
                ButtonColor = {
                    bgColor: cv.bg_red1,
                    bgColorHover: '',
                    borderColor: cv.bg_red1,
                    borderColorHover: '',
                    color: cv.bg_element1,
                    colorHover: '',
                };
            }
        }
    } else if (variant === 'outlined') {
        if (color === 'gray') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: cv.bg_element1,
                    bgColorHover: cv.bg_element1,
                    borderColor: cv.border2,
                    borderColorHover: cv.border1,
                    color: cv.text1,
                    colorHover: '',
                };
            } else {
                ButtonColor = {
                    bgColor: cv.white,
                    bgColorHover: '',
                    borderColor: cv.border3,
                    borderColorHover: '',
                    color: cv.border3,
                    colorHover: '',
                };
            }
        } else if (color === 'red') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: cv.bg_red1,
                    bgColorHover: cv.bg_red1_hover,
                    borderColor: cv.red1,
                    borderColorHover: '',
                    color: cv.red1,
                    colorHover: '',
                };
            } else {
                ButtonColor = {
                    bgColor: cv.white,
                    bgColorHover: '',
                    borderColor: cv.bg_red1,
                    borderColorHover: '',
                    color: cv.bg_red1,
                    colorHover: '',
                };
            }
        }
    } else if (variant === 'text') {
        if (color === 'gray') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: cv.bg_element1,
                    bgColorHover: cv.bg_element2,
                    borderColor: cv.bg_element1,
                    borderColorHover: '',
                    color: cv.text3,
                    colorHover: cv.text1,
                };
            } else {
                ButtonColor = {
                    bgColor: cv.bg_element1,
                    bgColorHover: '',
                    borderColor: cv.bg_element1,
                    borderColorHover: '',
                    color: cv.text3,
                    colorHover: '',
                };
            }
        } else if (color === 'red') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: cv.bg_element1,
                    bgColorHover: cv.bg_red1,
                    borderColor: cv.bg_element1,
                    borderColorHover: '',
                    color: cv.red1,
                    colorHover: '',
                };
            } else {
                ButtonColor = {
                    bgColor: cv.white,
                    bgColorHover: '',
                    borderColor: cv.white,
                    borderColorHover: '',
                    color: cv.red1,
                    colorHover: '',
                };
            }
        }
    }

    let padding = '';
    if (size === 'medium') {
        if (!!icon && !label) {
            padding = '7px';
        } else {
            padding = '7px 14px';
        }
    } else if (size === 'large') {
        if (!!icon && !label) {
            padding = '10px';
        } else {
            padding = '10px 20px';
        }
    }

    const children = (
        <IconContext.Provider
            value={{
                size: 16,
                weight: 'bold',
            }}
        >
            {isLoading && <Spinner size={16} color="var(--local-color)" />}
            {!isLoading && (Icon || icon)}
            {!isLoading && label}
        </IconContext.Provider>
    );

    if (to && to?.includes('http')) {
        return (
            <A href={to}>
                <ButtonDiv width={width} isDisabled={isDisabled} {...ButtonColor} padding={padding}>
                    {children}
                </ButtonDiv>
            </A>
        );
    }
    if (to) {
        return (
            <StyledLink to={to}>
                <ButtonDiv width={width} isDisabled={isDisabled} {...ButtonColor} padding={padding}>
                    {children}
                </ButtonDiv>
            </StyledLink>
        );
    }

    if (type === 'submit') {
        return (
            <ButtonDiv
                width={width}
                isDisabled={isDisabled}
                {...ButtonColor}
                padding={padding}
                type="submit"
                onClick={() => onClick && onClick()}
            >
                {children}
            </ButtonDiv>
        );
    }

    if (onClick) {
        return (
            <ButtonDiv
                width={width}
                isDisabled={isDisabled}
                {...ButtonColor}
                onClick={() => onClick && onClick()}
                padding={padding}
            >
                {children}
            </ButtonDiv>
        );
    }
    throw new Error("<Button /> Need 'onClick' or 'to' prop");
}
