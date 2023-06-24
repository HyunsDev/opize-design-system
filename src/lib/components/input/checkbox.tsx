import React, { ComponentProps } from 'react';

import styled, { css } from 'styled-components';

import { Flex } from '..';
import { cv } from '../../style';

import { Label } from './label';

type CheckboxSize = 'small' | 'medium';

export type CheckboxProps = React.ComponentPropsWithoutRef<'input'> & {
    label?: React.ReactNode;
    text?: React.ReactNode;
    disabled?: boolean;
    required?: boolean;
    checkBoxSize?: CheckboxSize;
};

const CheckBoxDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Input = styled.input<{ checkBoxSize: CheckboxSize }>`
    appearance: none;

    ${(props) =>
        props.checkBoxSize === 'medium' &&
        css`
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            border-radius: 4px;
        `}
    ${(props) =>
        props.checkBoxSize === 'small' &&
        css`
            width: 16px;
            height: 16px;
            min-width: 16px;
            min-height: 16px;
            border-radius: 2px;
        `}

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 200ms;

    border: solid 1px ${cv.border2};
    background: ${cv.bg_element1_1};
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
        background-color: ${cv.bg_element4};
        border: solid 1px ${cv.bg_element4};
    }

    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='white' fill='transparent' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpolyline points='19 7 10 17 5 12' /%3E%3C/svg%3E");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: ${cv.blue1};
        border: solid 1px ${cv.blue1};

        &:disabled {
            background-color: ${cv.bg_element4};
            border: solid 1px ${cv.bg_element4};
        }
    }
`;

const Text = styled.div<{ required: boolean }>`
    display: block;
    font-size: 14px;
    color: ${cv.text1};

    ${(props) =>
        props.required &&
        css`
            ::after {
                content: ' *';
            }
        `}
`;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ checkBoxSize = 'medium', ...props }: CheckboxProps, ref) => {
        return (
            <Flex
                style={{
                    flexDirection: 'column',
                }}
            >
                {props.label && <Label required={props.required || false}>{props.label}</Label>}
                <CheckBoxDiv>
                    <Input type="checkbox" {...props} checkBoxSize={checkBoxSize} ref={ref} />
                    <Text required={props.required || false}>{props.text}</Text>
                </CheckBoxDiv>
            </Flex>
        );
    }
);
