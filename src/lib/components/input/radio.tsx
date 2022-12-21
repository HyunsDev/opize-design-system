/* eslint-disable react/prop-types */
import styled, { css } from 'styled-components';
import React, { useImperativeHandle, useRef } from 'react';
import { cv } from '../../style';
import { Flex } from '..';
import { Label } from './label';

const Divver = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 4px;
    font-size: 14px;
    gap: 8px;
    user-select: none;

    padding: 0px 8px;
    cursor: pointer;
    border: solid 1px ${cv.border4};
    background-color: ${cv.bg_element1_1};
    border-radius: 4px;
    height: 40px;
    color: ${cv.text1};
    transition: 150ms;
    &:hover {
        background-color: ${cv.bg_element2};
    }
    &:focus-within {
        border: solid 1px ${cv.border2};
    }

    &:has(input:checked) {
        background-color: ${cv.bg_element3};

        border: solid 1px ${cv.border3};
    }
`;

const StyledInput = styled.input`
    cursor: pointer;
    appearance: none;
    position: relative;

    width: 16px;
    height: 16px;
    border-radius: 9px;
    border: solid 2px ${cv.text1};

    &:checked {
        &::after {
            position: absolute;
            content: '';
            top: 2px;
            left: 2px;
            width: 8px;
            height: 8px;
            border-radius: 4px;
            background-color: ${cv.text1};
        }
    }
`;

const RadioLabel = styled.label<{ required?: boolean }>`
    font-size: 0.875rem;
    cursor: pointer;

    ${(props) =>
        props.required &&
        css`
            ::after {
                content: ' *';
            }
        `}
`;

export type RadioProps = React.ComponentPropsWithoutRef<'input'> & {
    label?: React.ReactNode;
};

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props: RadioProps, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    return (
        <Divver onClick={() => inputRef.current?.click()}>
            <StyledInput {...props} type="radio" ref={inputRef}>
                {props.children}
            </StyledInput>
            {props.label && <RadioLabel onClick={() => inputRef.current?.click()}>{props.label}</RadioLabel>}
        </Divver>
    );
});

export function RadioGroup({ children, label }: { children: React.ReactNode; label?: React.ReactNode }) {
    return (
        <Flex.Column>
            {label && <Label required={false}>{label}</Label>}
            <Flex.Column gap="6px">{children}</Flex.Column>
        </Flex.Column>
    );
}
