import React, { ComponentProps } from "react";
import styled, { css } from "styled-components"
import { cv } from "../../style";
import { Label } from "./label";
import { Flex } from '..'

const CheckBoxDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

interface InputCheckBoxProps {
    backgroundColor: string;
    backgroundColorHover: string;
    borderColor: string;
    borderColorHover: string;
    checked?:  boolean;
    disabled?: boolean;
}

const Input = styled.input<InputCheckBoxProps>`
    appearance: none;

    width: 26px;
    height: 26px;
    border-radius: 4px;
    border: solid 1px ${(props) => props.borderColor};
    background: ${(props) => props.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 200ms;

    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};

    &:hover {
        border: solid 1px ${(props) => props.borderColorHover};
    }

    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='white' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpolyline points='19 7 10 17 5 12' /%3E%3C/svg%3E");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: ${cv.bg_element5};
    }
`

const Text = styled.div<{required: Boolean}>`
    display: block;
    font-size: 14px;
    color: ${cv.text3};
    margin-bottom: 4px;

    ${props => props.required && css`
        ::after {
            content: ' *'
        }
    `}
`

interface Props {
    checked?: boolean;
    onChange?: any;
    label?: string;
    text?: string;
    disabled?: boolean;
    required?: boolean
    ref?: any
}

export const Checkbox = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
    const style = {
        backgroundColor: '',
        backgroundColorHover: '',
        borderColor: '',
        borderColorHover: '',
    }

    if (props.checked) {
        if (props.disabled) {
            style.backgroundColor = cv.bg_element6
            style.backgroundColorHover = cv.bg_element6
            style.borderColor = cv.bg_element6
            style.borderColorHover = cv.bg_element6
        } else {
            style.backgroundColor = cv.bg_element5
            style.backgroundColorHover = cv.bg_element5
            style.borderColor = cv.bg_element5
            style.borderColorHover = cv.bg_element5
        }
    } else {
        if (props.disabled) {
            style.borderColor = cv.border3
            style.borderColorHover = cv.border3
        } else {
            style.borderColor = cv.border3
            style.borderColorHover = cv.border3
        }
    }


    return (
        <Flex style={{
            flexDirection: 'column',
        }}>
            { props.label && <Label required={props.required || false}>{props.label}</Label>}
            <CheckBoxDiv>
                <Input type='checkbox' {...style} {...props} ref={ref} />
                <Text required={props.required || false}>{props.text}</Text>
            </CheckBoxDiv>
        </Flex>

    )
})

export type CheckboxProps = ComponentProps<typeof Checkbox>