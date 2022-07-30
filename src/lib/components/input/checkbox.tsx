import styled from "styled-components"

const CheckBoxDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    stroke: var(--gray1);
    stroke-width: 2px;
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
    display: inline-block;
    min-width: 24px; 
    width: 24px;
    height: 24px;
    border: solid 1px ${(props) => props.borderColor};
    background: ${(props) => props.backgroundColor};
    border-radius: 4px;
    transition: 200ms;
    cursor: pointer;

    cursor: ${(props) => props.disabled ? 'not-allowed' : 'cursor'};

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
    color: var(--gray6);
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
            style.backgroundColor = 'var(--gray5)'
            style.backgroundColorHover = 'var(--gray5)'
            style.borderColor = 'var(--gray5)'
            style.borderColorHover = 'var(--gray5)'
        } else {
            style.backgroundColor = 'var(--gray9)'
            style.backgroundColorHover = 'var(--gray9)'
            style.borderColor = 'var(--gray9)'
            style.borderColorHover = 'var(--gray9)'
        }
    } else {
        if (props.disabled) {
            style.borderColor = 'var(--gray3)'
            style.borderColorHover = 'var(--gray3)'
        } else {
            style.borderColor = 'var(--gray4)'
            style.borderColorHover = 'var(--gray4)'
        }
    }

    const onClick = () => {
        if (!props.disabled) props.onChange(!props.value)
    }

    return (
        <CheckBoxDiv>
            <Label>{props.label}</Label>
            <Input type={'checkbox'} checked={props.value} onChange={props.onChange} disabled={props.disabled} />
            <FakeCheckBox {...style} checked={props.value} onClick={onClick} disabled={props.disabled} >
                <Icon viewBox="0 0 24 24">
                    <polyline points="19 7 10 17 5 12" />
                </Icon>
            </FakeCheckBox>
        </CheckBoxDiv>
    )
}

Checkbox.defaultProps = {
    value: true,
    onChange: () => null,
    label: '',
    disabled: false
}