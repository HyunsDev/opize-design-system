/* eslint-disable react/prop-types */
import React from 'react';

import { CaretDown } from 'phosphor-react';
import styled from 'styled-components';

import { Flex } from '..';
import { cv } from '../../style';

import { Label } from './label';

export type SelectProps = React.ComponentPropsWithoutRef<'select'> & { label?: string };

const Divver = styled.div`
    position: relative;
    border: solid 1px ${cv.border4};
    display: flex;
    align-items: center;
    border-radius: 4px;
    height: 34px;
    font-size: 14px;
    background-color: ${cv.bg_element1_1};

    color: ${cv.text1};
    transition: 150ms;
    &:focus-within {
        border: solid 1px ${cv.border2};
        background-color: ${cv.bg_element1};
    }
`;

const StyledSelect = styled.select`
    cursor: pointer;
    appearance: none;
    border-radius: inherit;
    border: 0;
    color: currentColor;
    font-size: inherit;
    outline: none;
    width: 100%;

    padding: 0px 12px;
    height: 32px;
    &:focus-within {
        outline: 0;
    }

    /* Firefox hacks */
    // https://github.com/primer/react/blob/main/src/Select.tsx
    background-color: inherit;
    margin-top: 1px;
    margin-left: 1px;
    margin-bottom: 1px;

    &:disabled {
        background-color: transparent;
    }

    @media screen and (forced-colors: active) {
        &:disabled {
            background-color: -moz-combobox;
        }
    }
`;

const Icon = styled(CaretDown)`
    position: absolute;
    right: 8px;
    user-select: none;
    pointer-events: none;
`;

const SelectA = React.forwardRef<HTMLSelectElement, SelectProps>((props: SelectProps, ref) => {
    return (
        <Flex
            style={{
                flexDirection: 'column',
            }}
        >
            {props.label && <Label required={props.required || false}>{props.label}</Label>}
            <Divver>
                <StyledSelect ref={ref} required={props.required} disabled={props.disabled} {...props}>
                    {props.children}
                </StyledSelect>
                <Icon size={16} color={cv.text1} />
            </Divver>
        </Flex>
    );
});

const Option: React.FC<React.PropsWithChildren<React.HTMLProps<HTMLOptionElement> & { value: string }>> = (props) => (
    <option {...props} />
);

const OptionGroup: React.FC<React.PropsWithChildren<React.HTMLProps<HTMLOptGroupElement>>> = (props) => (
    <optgroup {...props} />
);

export const Select = Object.assign(SelectA, {
    Option,
    OptionGroup,
});
