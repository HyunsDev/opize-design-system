import styled from "styled-components"
import { css } from "../../style"

interface Props {
    type: 'text' | 'password' | 'search' | 'url'
    value: string
    onChange: Function
    placeholder?: string
    readonly?: boolean
    label?: string
    error?: string
    ref?: any
}

const Divver = styled.div`

`

const Input = styled.textarea<Props>`
    display: block;
    width: 100%;
    border-radius: 4px;
    padding: 6px 12px;
    resize: vertical;
    height: 100px;

    transition: 100ms, height 0ms;
    border: solid 1px ${css.border3};
    outline: solid 0px ${css.outline};

    &:focus {
        outline: solid 3px ${css.outline};
    }
`

const Label = styled.label`
    display: block;
    font-size: 12px;
    color: ${css.text3};
    margin-bottom: 4px;
`

const Message = styled.div`
    height: 20px;
    color: ${css.red1};
    font-size: 12px;
    margin-top: 4px;
`

export function TextArea(props:Props) {
    return (
        <Divver>
            {props.label && <Label>{props.label}</Label>}
            <Input {...props} onChange={(e) => !props.readonly && props.onChange(e.target.value)} />
            { props.error && <Message>{props.error}</Message>}
        </Divver>
    )
}