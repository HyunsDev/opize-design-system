import styled from "styled-components"
import { IconContext } from 'phosphor-react'
import { cv } from "../../style"
import { ComponentProps } from "react"

type ButtonAddon = {
    type: 'button',
    label?: string,
    icon?: React.ReactElement
    onClick: Function
}

interface Props {
    type: 'text' | 'password' | 'search' | 'url'
    value: string
    onChange: Function
    placeholder?: string
    readonly?: boolean
    error?: string
    ref?: any
    leftAddon?: string | ButtonAddon
    rightAddon?: string | ButtonAddon
}

const Divver = styled.div`
    width: 100%;
`

const Input = styled.input<Props>`
    z-index: 1;
    padding: 0px 12px;
    height: 100%;
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
    height: 32px;
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
    data: ButtonAddon | string | any
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


export function TextField(props:Props) {
    return (
        <IconContext.Provider value={{
            weight: 'bold',
            size: 14,
            color: cv.text5
        }}>
            <Divver>
                <Inputs>
                    {props.leftAddon && <Addon position="left" data={props.leftAddon} />}
                    <Input {...props} onChange={(e) => !props.readonly && props.onChange(e.target.value)} />
                    {props.rightAddon && <Addon position="right" data={props.rightAddon} />}
                </Inputs>
                { props.error && (<Message>{props.error}</Message>)}
            </Divver>
        </IconContext.Provider>
    )
}

export type TextFieldProps = ComponentProps<typeof TextField>