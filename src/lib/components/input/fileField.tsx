import styled from "styled-components"



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
    border: solid 2px var(--gray3);
    border-radius: 4px;
    padding: 0px 12px;
    height: 32px;
    transition: 100ms;
    border: solid 1px var(--gray4);
    outline: solid 0px var(--blue3);
    
    display: flex;
    align-items: center;

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

export function FileField(props:TextFieldProps) {
    return (
        <Divver>
            {props.label && (<Label>{props.label}</Label>)}
            <Input type={'file'} onChange={(e) => props.onChange(e.target?.files?.[0])} />
            { props.message && (<Message error={props.error || false}>{props.message}</Message>)}
        </Divver>
    )
}