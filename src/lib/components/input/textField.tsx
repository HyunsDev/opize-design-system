import styled from "styled-components"
import { IconContext } from 'phosphor-react'

type ButtonAddon = {
    type: 'button',
    label?: string,
    icon?: React.ReactElement
    onClick: Function
}


interface TextFieldProps {
    type: 'text' | 'password' | 'search' | 'url'
    value: string
    onChange: Function
    placeholder?: string
    readonly?: boolean
    label?: string
    error?: string
    ref?: any
    leftAddon?: string | ButtonAddon
    rightAddon?: string | ButtonAddon
}

const Divver = styled.div`
    width: 100%;
`

const Input = styled.input<TextFieldProps>`
    z-index: 1;
    padding: 0px 12px;
    border-radius: 4px;
    height: 100%;
    display: flex;
    align-items: center;
    transition: 100ms;
    flex: 1;
    border: 0;

    outline: solid 0px var(--blue3);
    &:focus {
        border: 0;
        outline: 0;
        outline: solid 3px var(--blue3);
    }
`

const Label = styled.label`
    display: block;
    font-size: 14px;
    color: var(--gray6);
    margin-bottom: 4px;
`

const Message = styled.div`
    height: 20px;
    color: var(--status-red);
    font-size: 14px;
    margin-top: 4px;
`

const Inputs = styled.div`
    display: flex;
    align-items: center;
    border-radius: 4px;
    height: 32px;

    border: solid 1px var(--gray4);
    &:focus-within {
        border: solid 1px var(--gray4);
    }
`

const AddonTextDiv = styled.div<{position: 'left' | 'right'}>`
    padding: 0px 8px;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 14px;
    background-color: var(--gray2);

    ${props => props.position === 'left' ? `border-right: solid 1px var(--gray4);` : 'border-left: solid 1px var(--gray4);'};
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
    background-color: var(--gray9);
    color: #ffffff;
    cursor: pointer;

    ${props => props.position === 'left' ? `border-right: solid 1px var(--gray4);` : 'border-left: solid 1px var(--gray4);'};
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


export function TextField(props:TextFieldProps) {
    return (
        <IconContext.Provider value={{
            weight: 'bold',
            size: 14,
            color: '#ffffff'
        }}>
            <Divver>
                {props.label && (<Label>{props.label}</Label>)}
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