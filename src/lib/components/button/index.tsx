import styled from "styled-components"
import { cv } from "../../style"
import { IconContext } from 'phosphor-react'
import '../../style/style.css'
import { Spinner } from "../spinner"
import { Link } from "react-router-dom"
import { ComponentProps, ComponentType } from "react"

interface ButtonDivProps {
    bgColor: string;
    bgColorHover: string;
    borderColor: string;
    borderColorHover: string;
    color: string;
    colorHover: string;
    isDisabled: boolean;
    padding: string;
}

const ButtonDiv = styled.button<ButtonDivProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${props => props.padding};
    gap: 8px;

    font-size: 14px;
    border: 0;
    border-radius: 4px;
    text-decoration: none;

    transition: 200ms;
    cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
    ${props => props.color && `color: ${props.color}`};
    ${props => props.bgColor && `background-color: ${props.bgColor}`};
    ${props => props.borderColor && `border: solid 1px ${props.borderColor}`};
    ${props => props.color && `--local-color: ${props.color}`};
    
    &:hover {
        ${props => props.color && `--local-color: ${props.colorHover}`};
        ${props => props.colorHover && `color: ${props.colorHover}`};
        ${props => props.bgColorHover && `background-color: ${props.bgColorHover}`};
        ${props => props.borderColorHover && `border: solid 1px ${props.borderColorHover}`};
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const A = styled.a`
    text-decoration: none;
`

interface _ButtonProps {
    label?: string
    variant?: 'contained' | 'outlined' | 'text'
    color?: 'gray' | 'red',
    size?: 'medium' | 'large',
    isDisabled?: boolean
    isLoading?: boolean
    icon?: React.ReactNode | string
    onClick?: Function,
    to?: string,
}

export function Button({
    label,
    variant = 'outlined',
    isDisabled = false,
    isLoading = false,
    color = 'gray',
    size = 'medium',
    icon,
    onClick,
    to
}: _ButtonProps) {
    // 아이콘
    let Icon
    if (typeof icon === 'string') {
        Icon = <img src={icon} alt="" />
    }

    // 색상
    let ButtonColor = {
        bgColor: '',
        bgColorHover: '',
        borderColor: '',
        borderColorHover: '',
        color: '',
        colorHover: ''
    }
    if (variant === 'contained') {
        if (color === 'gray') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: cv.bg_element5,
                    bgColorHover: cv.bg_element7,
                    borderColor: cv.bg_element5,
                    borderColorHover: '',
                    color: cv.bg_element7,
                    colorHover: cv.bg_element5
                }
            } else {
                ButtonColor = {
                    bgColor: cv.bg_element3,
                    bgColorHover: '',
                    borderColor: cv.bg_element3,
                    borderColorHover: '',
                    color: cv.bg_element7,
                    colorHover: ''
                }
            }
        } else if (color === 'red') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: cv.red1,
                    bgColorHover: cv.bg_element7,
                    borderColor: cv.red1,
                    borderColorHover: '',
                    color: cv.bg_element7,
                    colorHover: cv.red1
                }
            } else {
                ButtonColor = {
                    bgColor: cv.bg_red1,
                    bgColorHover: '',
                    borderColor: cv.bg_red1,
                    borderColorHover: '',
                    color: cv.bg_element7,
                    colorHover: ''
                }
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
                    colorHover: ''
                }
            } else {
                ButtonColor = {
                    bgColor: cv.white,
                    bgColorHover: '',
                    borderColor: cv.border3,
                    borderColorHover: '',
                    color: cv.border3,
                    colorHover: ''
                }
            }
        } else if (color === 'red') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: cv.bg_red1,
                    bgColorHover: cv.bg_red1_hover,
                    borderColor: cv.red1,
                    borderColorHover: '',
                    color: cv.red1,
                    colorHover: ''
                }
            } else {
                ButtonColor = {
                    bgColor: cv.white,
                    bgColorHover: '',
                    borderColor: cv.bg_red1,
                    borderColorHover: '',
                    color: cv.bg_red1,
                    colorHover: ''
                }
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
                    colorHover: cv.text1
                }
            } else {
                ButtonColor = {
                    bgColor: cv.bg_element1,
                    bgColorHover: '',
                    borderColor: cv.bg_element1,
                    borderColorHover: '',
                    color: cv.text3,
                    colorHover: ''
                }
            }
        } else if (color === 'red') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: cv.bg_element1,
                    bgColorHover: cv.bg_red1,
                    borderColor: cv.bg_element1,
                    borderColorHover: '',
                    color: cv.red1,
                    colorHover: ''
                }
            } else {
                ButtonColor = {
                    bgColor: cv.white,
                    bgColorHover: '',
                    borderColor: cv.white,
                    borderColorHover: '',
                    color: cv.red1,
                    colorHover: ''
                }
            }
        }
    }

    let padding = ''
    if (size === 'medium') {
        if (!!icon && !label) {
            padding = '7px'
        } else {
            padding = '7px 14px'
        }
    } else if (size === 'large') {
        if (!!icon && !label) {
            padding = '10px'
        } else {
            padding = '10px 20px'
        }
    }

    const children = (
        <>
            { isLoading && <Spinner size={14} color='var(--local-color)' />}

            <IconContext.Provider
                value={{
                    size: 16,
                    weight: "bold",
                }}
            >
                {Icon || icon}
            </IconContext.Provider>
            {label}
        </>
    )

    if (to && to?.includes('http')) {
        return (
            <A href={to}>
                <ButtonDiv isDisabled={isDisabled} {...ButtonColor} padding={padding}>
                    {children}
                </ButtonDiv>
            </A>
        )
    } else if (to) {
        return (
            <StyledLink to={to}>
                <ButtonDiv isDisabled={isDisabled} {...ButtonColor} padding={padding}>
                    {children}
                </ButtonDiv>
            </StyledLink>
        )
    }else if (onClick) {
         return (
            <ButtonDiv isDisabled={isDisabled} {...ButtonColor} onClick={() => onClick && onClick()} padding={padding}>
                {children}
            </ButtonDiv>
        )
    } else {
        console.error("<Button /> Need 'onClick' or 'to' prop")
        return (<></>)
    }
}
export type ButtonProps = ComponentProps<typeof Button>