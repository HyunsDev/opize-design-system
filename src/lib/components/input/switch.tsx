import React, { ComponentProps } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { cv } from '../../style';
import { Label } from './label';
import { Flex } from '..';

const SwitchDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const CircleAnimation = keyframes`
    0% {
        transform: scaleX(1)
    }
    50% {
        transform: scaleX(1.3)
    }
    100% {
        transform: scaleX(1)
    }
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

    width: 44px;
    height: 24px;
    border-radius: 12px;
    background: ${cv.bg_element4};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 250ms;
    position: relative;

    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

    &:checked {
        background-color: ${cv.blue1};
    }

    ::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 4px;
        width: 18px;
        height: 18px;
        border-radius: 10px;
        background-color: ${cv.white};
        transition: 250ms;
    }

    &:checked {
        ::after {
            left: 22px;
            animation: ${CircleAnimation} 250ms cubic-bezier(0, 0, 0.16, 0.99) forwards;
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
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
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
                <Input type="checkbox" {...style} {...props} ref={ref} onChange={props.onChange} />
                <Text required={props.required || false}>{props.text}</Text>
            </SwitchDiv>
        </Flex>
    );
});

export type SwitchProps = ComponentProps<typeof Switch>;
