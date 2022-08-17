/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';
import { CaretDown } from 'phosphor-react';
import { cv } from '../../style';
import { Label } from './label';
import { Flex } from '../layout';

export type SelectProps = React.ComponentPropsWithoutRef<'select'> & { label?: string };

const Divver = styled.div`
    position: relative;
    border: solid 1px ${cv.border3};
    display: flex;
    align-items: center;
    border-radius: 4px;
    height: 36px;
    font-size: 0.875rem;
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
    height: 100%;

    transition: 200ms;
    outline: solid 3px rgba(0, 0, 0, 0);
    &:focus-within {
        border: 0;
        outline: solid 3px ${cv.outline};
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
                <Icon size={16} color={cv.text2} />
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
