import React, { ComponentProps } from 'react';
import styled, { css } from 'styled-components';
import { cv } from '../../style';
import { Label } from './label';
import { Flex } from '..';

const SwitchDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

interface InputSwitchProps {
    backgroundColor: string;
    backgroundColorHover: string;
    borderColor: string;
    borderColorHover: string;
    checked?: boolean;
    disabled?: boolean;
}

const Input = styled.input<InputSwitchProps>`
    appearance: none;

    width: 40px;
    height: 24px;
    border-radius: 12px;
    border: solid 1px ${cv.border3};
    background: ${cv.bg_element4};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 150ms;
    position: relative;

    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

    &:checked {
        background-color: ${cv.blue1};
    }

    ::after {
        content: '';
        position: absolute;
        top: 1px;
        left: 2px;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: ${cv.text5};
        transition: 150ms;
    }

    &:checked {
        ::after {
            left: 16px;
        }
    }
`;

const Text = styled.div<{ required: boolean }>`
    display: block;
    font-size: 14px;
    color: ${cv.text3};
    margin-bottom: 4px;

    ${(props) =>
        props.required &&
        css`
            ::after {
                content: ' *';
            }
        `}
`;

interface Props {
    checked?: boolean;
    onChange?: any;
    label?: React.ReactNode;
    text?: React.ReactNode;
    disabled?: boolean;
    required?: boolean;
    ref?: any;
}

/**
 * \<Checkbox\>를 변형하여 스위치 형태로 표시하는 컴포넌트입니다.
 */
export const Switch = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
    const style = {
        backgroundColor: '',
        backgroundColorHover: '',
        borderColor: '',
        borderColorHover: '',
    };

    return (
        <Flex
            style={{
                flexDirection: 'column',
            }}
        >
            {props.label && <Label required={props.required || false}>{props.label}</Label>}
            <SwitchDiv>
                <Input type="checkbox" {...style} {...props} ref={ref} />
                <Text required={props.required || false}>{props.text}</Text>
            </SwitchDiv>
        </Flex>
    );
});

export type SwitchProps = ComponentProps<typeof Switch>;
