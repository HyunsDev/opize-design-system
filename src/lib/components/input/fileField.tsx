import styled from "styled-components"
import { cv } from "../../style"

interface TextFieldProps {
    value: any
    onChange: Function
    label?: string
    error?: boolean
    message?: string
    ref?: any
}

const Divver = styled.div`

`

const Input = styled.input`
    width: 100%;
    border-radius: 4px;
    padding: 0px 12px;
    height: 32px;
    transition: 100ms;
    border: solid 1px ${cv.border3};
    outline: solid 0px ${cv.outline};
    
    display: flex;
    align-items: center;

    &:focus {
        border: solid 1px ${cv.border3};
        outline: solid 3px ${cv.outline};
    }
`

const Label = styled.label`
    display: block;
    font-size: 12px;
    color: ${cv.text3};
    margin-bottom: 4px;
`

const Message = styled.div<{error: boolean}>`
    height: 20px;
    color: ${(props) => props.error ? cv.red1 : cv.text3};
    font-size: 12px;
    margin-top: 4px;
`

export function FileField(props:TextFieldProps) {
    return (
        <Divver>
            {props.label && (<Label>{props.label}</Label>)}
            <Input type={'file'} onChange={(e) => props.onChange(e.target?.files?.[0])} />
            { props.message && (<Message error={props.error || false}>{props.message}</Message>)}
        </Divver>
    )
}