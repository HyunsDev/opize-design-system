import styled from "styled-components"



const Input = styled.input`
    
`

interface TextFieldProps {
    onChange: Function
    value: string
    label?: string
    caption?: string
    isLoading?: boolean
    type?: 'text'
}

function TextField({
    onChange,
    value,
    type = 'text'
}: TextFieldProps) {
    let style = {
        
    }


    return (
        <Input type={type}>
        
        </Input>
    )
}

export {
    TextField
}