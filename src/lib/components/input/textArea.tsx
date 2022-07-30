import styled from "styled-components"

interface Props {
    type: 'text' | 'password' | 'search' | 'url'
    value: string
    onChange: Function
    placeholder?: string
    readonly?: boolean
    label?: string
    error?: boolean
    message?: string
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
    border: solid 1px var(--gray4);
    outline: solid 0px var(--blue3);

    &:focus {
        border: solid 1px var(--gray4);
        outline: solid 3px var(--blue3);
    }
`

const Label = styled.label`
    display: block;
    font-size: 12px;
    color: var(--gray5);
    margin-bottom: 4px;
`

const Message = styled.div<{error: boolean}>`
    height: 20px;
    color: ${(props) => props.error ? "var(--status-red)" : "var(--gray5)"};
    font-size: 12px;
    margin-top: 4px;
`

export function TextArea(props:Props) {
    return (
        <Divver>
            {props.label && <Label>{props.label}</Label>}
            <Input {...props} onChange={(e) => !props.readonly && props.onChange(e.target.value)} />
            { props.message && <Message error={props.error || false}>{props.message}</Message>}
        </Divver>
    )
}