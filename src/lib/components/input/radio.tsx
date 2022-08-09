import styled, { css } from "styled-components"
import React, { useImperativeHandle, useRef } from 'react'
import { cv } from "../../style"
import { Flex } from "../layout"
import { Label } from "./label";

const Divver = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 4px;
    font-size: .875rem;
    gap: 8px;
`

const StyledInput = styled.input`
    cursor: pointer;
`

const RadioLabel = styled.label<{required?: boolean}>`
    font-size: .875rem;
    cursor: pointer;

    ${props => props.required && css`
        ::after {
            content: ' *'
        }
    `}
`

export type RadioProps = React.ComponentPropsWithoutRef<'input'> & {
    label?: React.ReactNode
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props: RadioProps, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    return (
        <Divver>
            <StyledInput {...props} type='radio' ref={inputRef}>
                { props.children }
            </StyledInput>
            { props.label && <RadioLabel onClick={() => inputRef.current?.click()}>{props.label}</RadioLabel>}
        </Divver>
    )
})

export function RadioGroup(props: {
    children: React.ReactNode,
    label?: React.ReactNode
}) {
    return (
        <Flex.Column>
            { props.label && <Label required={false}>{props.label}</Label>}
            <Flex.Column gap="12px">
                {props.children}
            </Flex.Column>
        </Flex.Column>
    )
}