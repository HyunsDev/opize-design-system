import styled from "styled-components"
import { IconContext } from 'phosphor-react'
import { cv } from "../../style"
import React from "react"
import { Label } from "./label"

export type TextFieldProps = React.ComponentPropsWithoutRef<'input'> & { 
    label?: React.ReactNode,
    type?: 'text' | 'password' | 'search' | 'url' | 'email' | 'number' | 'tel',
    error?: React.ReactNode
    leftAddon?: React.ReactNode | ButtonAddon
    rightAddon?: React.ReactNode | ButtonAddon
}

type ButtonAddon = {
    type: 'button',
    label?: string,
    icon?: React.ReactElement
    onClick: Function
}

const Divver = styled.div`
    width: 100%;
`

const Input = styled.input`
    z-index: 1;
    padding: 0px 12px;
    height: 32px;
    display: flex;
    align-items: center;
    transition: 200ms;
    flex: 1;
    border: 0;
    font-size: 14px;
    border-radius: 2px;

    outline: solid 3px rgba(0,0,0,0);
    &:focus {
        border: 0;
        outline: solid 3px ${cv.outline};
    }
`

const Message = styled.div`
    height: 20px;
    color: ${cv.red1};
    font-size: 14px;
    margin-top: 4px;
`

const Inputs = styled.div`
    display: flex;
    align-items: center;
    border-radius: 4px;
    height: 36px;
    border: solid 1px ${cv.border3};
`

const AddonTextDiv = styled.div<{position: 'left' | 'right'}>`
    padding: 0px 8px;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 14px;
    background-color: ${cv.bg_element3};

    ${props => props.position === 'left' ? `border-right: solid 1px ${cv.border3};` : `border-left: solid 1px ${cv.border3};`};
    ${props => props.position === 'left'
        ? `border-bottom-left-radius: 4px; border-top-left-radius: 4px;`
        : 'border-bottom-right-radius: 4px; border-top-right-radius: 4px;'};
`

const AddonButtonDiv = styled.div<{position: 'left' | 'right'}>`
    padding: 0px 8px;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 14px;
    background-color: ${cv.bg_element5};
    color: #ffffff;
    cursor: pointer;

    ${props => props.position === 'left' ? `border-right: solid 1px ${cv.border3};` : `border-left: solid 1px ${cv.border3};`};
    ${props => props.position === 'left'
        ? `border-bottom-left-radius: 4px; border-top-left-radius: 4px;`
        : 'border-bottom-right-radius: 4px; border-top-right-radius: 4px;'};
`

function Addon(props: {
    position: 'left' | 'right',
    data: ButtonAddon | React.ReactNode | any
}) {
    if (typeof props.data === 'string') {
        return <AddonTextDiv position={props.position}>{props.data}</AddonTextDiv>
    } else if (props.data.type === 'button') {
        return (
            <AddonButtonDiv position={props.position} onClick={() => props.data.onClick() }>
                {props.data.icon}
                {props.data.label}
            </AddonButtonDiv>
        )
    } else {
        return <></>
    }
}


export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((props:TextFieldProps, ref) => {
    return (
        <IconContext.Provider value={{
            weight: 'bold',
            size: 14,
            color: cv.text5
        }}>
            <Divver>
                {props.label && <Label required={props.required || false}>{props.label}</Label>}
                <Inputs>
                    {props.leftAddon && <Addon position="left" data={props.leftAddon} />}
                    <Input ref={ref} {...props} type={props.type || 'text'} />
                    {props.rightAddon && <Addon position="right" data={props.rightAddon} />}
                </Inputs>
                { props.error && (<Message>{props.error}</Message>)}
            </Divver>
        </IconContext.Provider>
    )
})