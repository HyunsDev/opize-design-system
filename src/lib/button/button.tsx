import styled from "styled-components"
import { cssVar } from "../style/css"
import { IconContext } from 'phosphor-react'
import '../style/var.css'
import { Spinner } from "../spinner/spinner"

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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${props => props.isOnlyIcon ? '8px' : '8px 16px'};
    gap: 8px;

    font-size: 14px;
    border: 0;
    border-radius: 4px;

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

interface ButtonProps {
    label?: string
    variant?: 'contained' | 'outlined' | 'text'
    color?: 'gray' | 'red'
    isDisabled?: boolean
    isLoading?: boolean
    icon?: React.ReactNode | string
    onClick: Function
}

function Button({
    label,
    variant = 'contained',
    isDisabled = false,
    isLoading = false,
    color = 'gray',
    icon,
    onClick
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
                    bgColor: cssVar('gray8'),
                    bgColorHover: cssVar('white'),
                    borderColor: cssVar('gray8'),
                    borderColorHover: '',
                    color: cssVar('white'),
                    colorHover: cssVar('black')
                }
            } else {
                ButtonColor = {
                    bgColor: cssVar('gray5'),
                    bgColorHover: '',
                    borderColor: cssVar('gray5'),
                    borderColorHover: '',
                    color: cssVar('white'),
                    colorHover: ''
                }
            }
        } else if (color === 'red') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: cssVar('red7'),
                    bgColorHover: cssVar('white'),
                    borderColor: cssVar('red7'),
                    borderColorHover: '',
                    color: cssVar('white'),
                    colorHover: cssVar('red7')
                }
            } else {
                ButtonColor = {
                    bgColor: cssVar('red3'),
                    bgColorHover: '',
                    borderColor: cssVar('red3'),
                    borderColorHover: '',
                    color: cssVar('white'),
                    colorHover: ''
                }
            }
        }
    } else if (variant === 'outlined') {
        if (color === 'gray') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: cssVar('white'),
                    bgColorHover: '',
                    borderColor: cssVar('gray5'),
                    borderColorHover: cssVar('gray9'),
                    color: cssVar('black'),
                    colorHover: ''
                }
            } else {
                ButtonColor = {
                    bgColor: cssVar('white'),
                    bgColorHover: '',
                    borderColor: cssVar('gray5'),
                    borderColorHover: '',
                    color: cssVar('gray5'),
                    colorHover: ''
                }
            }
        } else if (color === 'red') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: cssVar('white'),
                    bgColorHover: '',
                    borderColor: cssVar('red5'),
                    borderColorHover: cssVar('red9'),
                    color: cssVar('red9'),
                    colorHover: ''
                }
            } else {
                ButtonColor = {
                    bgColor: cssVar('white'),
                    bgColorHover: '',
                    borderColor: cssVar('red3'),
                    borderColorHover: '',
                    color: cssVar('red3'),
                    colorHover: ''
                }
            }
        }
    } else if (variant === 'text') {
        if (color === 'gray') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: cssVar('white'),
                    bgColorHover: cssVar('gray1'),
                    borderColor: cssVar('white'),
                    borderColorHover: '',
                    color: cssVar('black'),
                    colorHover: ''
                }
            } else {
                ButtonColor = {
                    bgColor: cssVar('white'),
                    bgColorHover: '',
                    borderColor: cssVar('white'),
                    borderColorHover: '',
                    color: cssVar('gray5'),
                    colorHover: ''
                }
            }
        } else if (color === 'red') {
            if (!isDisabled) {
                ButtonColor = {
                    bgColor: cssVar('white'),
                    bgColorHover: cssVar('red1'),
                    borderColor: cssVar('white'),
                    borderColorHover: '',
                    color: cssVar('red9'),
                    colorHover: ''
                }
            } else {
                ButtonColor = {
                    bgColor: cssVar('white'),
                    bgColorHover: '',
                    borderColor: cssVar('white'),
                    borderColorHover: '',
                    color: cssVar('red3'),
                    colorHover: ''
                }
            }
        }
    }

    return (
        <ButtonDiv isDisabled={isDisabled} isOnlyIcon={!!icon && !label} {...ButtonColor} onClick={() => onClick()}>
            { isLoading && <Spinner size={14} color={cssVar('local-color')} />}

            <IconContext.Provider
                value={{
                    size: 16,
                    weight: "bold",
                 }}
            >
                {Icon || icon}
            </IconContext.Provider>
            {label}
        </ButtonDiv>
    )
}

export {
    Button
}