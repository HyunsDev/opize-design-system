import styled from "styled-components"
import { cv } from "../../style";

const CheckBoxDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const Input = styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

const Icon = styled.svg`
    fill: none;
    stroke: ${cv.text5};
    stroke-width: 2px;
    width: 18px;
    height: 18px;
`;

interface FakeCheckBoxProps {
    backgroundColor: string;
    backgroundColorHover: string;
    borderColor: string;
    borderColorHover: string;
    checked: boolean;
    disabled: boolean;
}

const FakeCheckBox = styled.div<FakeCheckBoxProps>`
    min-width: 24px; 
    width: 24px;
    height: 24px;
    border: solid 1px ${(props) => props.borderColor};
    background: ${(props) => props.backgroundColor};
    border-radius: 4px;
    transition: 200ms;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};

    &:hover {
        border: solid 1px ${(props) => props.borderColorHover};
    }

    ${Icon} {
        visibility: ${(props) => props.checked ? 'visible' : 'hidden'};
    }
`

const Label = styled.div`
    display: block;
    font-size: 14px;
    color: ${cv.text3};
    margin-bottom: 4px;
`

interface CheckboxProps {
    value: boolean;
    onChange: any;
    label: string;
    disabled: boolean;
    ref?: any
}

export function Checkbox(props: CheckboxProps) {
    const style = {
        backgroundColor: '',
        backgroundColorHover: '',
        borderColor: '',
        borderColorHover: '',
    }

    if (props.value) {
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

    const onClick = () => {
        if (!props.disabled) props.onChange(!props.value)
    }

    return (
        <CheckBoxDiv>
            <Input type={'checkbox'} checked={props.value} onChange={props.onChange} disabled={props.disabled} />
            <FakeCheckBox {...style} checked={props.value} onClick={onClick} disabled={props.disabled} >
                <Icon viewBox="0 0 24 24">
                    <polyline points="19 7 10 17 5 12" />
                </Icon>
            </FakeCheckBox>
            <Label>{props.label}</Label>
        </CheckBoxDiv>
    )
}

Checkbox.defaultProps = {
    value: true,
    onChange: () => null,
    label: '',
    disabled: false
}