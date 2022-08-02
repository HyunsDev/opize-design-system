import styled, { css as styledCss } from "styled-components"
import { css } from "../../style"
import { IconContext } from 'phosphor-react'
import '../../style/style.css'
import { Spinner } from "../spinner"
import { Link } from "react-router-dom"

const ButtonDiv = styled.button<{
    bgColor: string,
    bgColorHover: string,
    borderColor: string,
    borderColorHover: string,
    color: string,
    colorHover: string

    isDisabled: boolean
    isOnlyIcon: boolean
}>`
    justify-content: center;
    align-items: center;
    padding: ${props => props.isOnlyIcon ? '7px' : '7px 14px'};
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

export interface ButtonProps {
    label?: string
    variant?: 'contained' | 'outlined' | 'text'
    color?: 'gray' | 'red'
    isDisabled?: boolean
    isLoading?: boolean
    icon?: React.ReactNode | string
    onClick?: Function,
    to?: string,
}

// const ButtonA = (props: any) => <Link to={props.to}><buttonA  /></Link>

function Button({
    label,
    variant = 'outlined',
    isDisabled = false,
    isLoading = false,
    color = 'gray',
    icon,
    onClick,
    to
}: ButtonProps) {
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
                    bgColor: css.bg_element5,
                    bgColorHover: css.bg_element7,
                    borderColor: css.bg_element5,
                    borderColorHover: '',
                    color: css.bg_element7,
                    colorHover: css.bg_element5
                }
            } else {
                ButtonColor = {
                    bgColor: css.bg_element3,
                    bgColorHover: '',
                    borderColor: css.bg_element3,
                    borderColorHover: '',
                    color: css.bg_element7,
                    colorHover: ''
                }
            }
        } else if (color === 'red') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: css.red1,
                    bgColorHover: css.bg_element7,
                    borderColor: css.red1,
                    borderColorHover: '',
                    color: css.bg_element7,
                    colorHover: css.red1
                }
            } else {
                ButtonColor = {
                    bgColor: css.bg_red1,
                    bgColorHover: '',
                    borderColor: css.bg_red1,
                    borderColorHover: '',
                    color: css.bg_element7,
                    colorHover: ''
                }
            }
        }
    } else if (variant === 'outlined') {
        if (color === 'gray') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: css.bg_element2,
                    bgColorHover: css.bg_element3,
                    borderColor: css.border2,
                    borderColorHover: '',
                    color: css.text1,
                    colorHover: ''
                }
            } else {
                ButtonColor = {
                    bgColor: css.white,
                    bgColorHover: '',
                    borderColor: css.border3,
                    borderColorHover: '',
                    color: css.border3,
                    colorHover: ''
                }
            }
        } else if (color === 'red') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: css.bg_red1,
                    bgColorHover: css.bg_red1_hover,
                    borderColor: css.red1,
                    borderColorHover: '',
                    color: css.red1,
                    colorHover: ''
                }
            } else {
                ButtonColor = {
                    bgColor: css.white,
                    bgColorHover: '',
                    borderColor: css.bg_red1,
                    borderColorHover: '',
                    color: css.bg_red1,
                    colorHover: ''
                }
            }
        }
    } else if (variant === 'text') {
        if (color === 'gray') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: css.bg_element1,
                    bgColorHover: css.bg_element2,
                    borderColor: css.bg_element1,
                    borderColorHover: '',
                    color: css.text3,
                    colorHover: css.text1
                }
            } else {
                ButtonColor = {
                    bgColor: css.bg_element1,
                    bgColorHover: '',
                    borderColor: css.bg_element1,
                    borderColorHover: '',
                    color: css.text3,
                    colorHover: ''
                }
            }
        } else if (color === 'red') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: css.bg_element1,
                    bgColorHover: css.bg_red1,
                    borderColor: css.bg_element1,
                    borderColorHover: '',
                    color: css.red1,
                    colorHover: ''
                }
            } else {
                ButtonColor = {
                    bgColor: css.white,
                    bgColorHover: '',
                    borderColor: css.white,
                    borderColorHover: '',
                    color: css.red1,
                    colorHover: ''
                }
            }
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
            <a href={to}>
                <ButtonDiv isDisabled={isDisabled} isOnlyIcon={!!icon && !label} {...ButtonColor}>
                    {children}
                </ButtonDiv>
            </a>
        )
    } else if (to) {
        return (
            <Link to={to}>
                <ButtonDiv isDisabled={isDisabled} isOnlyIcon={!!icon && !label} {...ButtonColor}>
                    {children}
                </ButtonDiv>
            </Link>
        )
    }else if (onClick) {
         return (
            <ButtonDiv isDisabled={isDisabled} isOnlyIcon={!!icon && !label} {...ButtonColor} onClick={() => onClick && onClick()}>
                {children}
            </ButtonDiv>
        )
    } else {
        console.error("<Button /> Need 'onClick' or 'to' prop")
        return (<></>)
    }
}

export {
    Button
}