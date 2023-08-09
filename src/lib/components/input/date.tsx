/* eslint-disable react/prop-types */
import React from 'react';

import styled from 'styled-components';

import { Flex } from '..';
import { cv } from '../../style';

import { Label } from './label';

export type DateProps = React.ComponentPropsWithoutRef<'input'> & {
    label?: string;
    type: 'date' | 'datetime-local' | 'month' | 'time' | 'week';
};

const Divver = styled.div`
    position: relative;
    border: solid 1px ${cv.border4};
    background-color: ${cv.bg_element1_1};
    display: flex;
    align-items: center;
    border-radius: 4px;
    height: 34px;
    font-size: 0.875rem;

    color: ${cv.text1};
    transition: 150ms;
    &:focus-within {
        border: solid 1px ${cv.border2};
        background-color: ${cv.bg_element1};
    }
`;

const StyledInput = styled.input`
    cursor: auto;
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
    background-color: inherit;

    &:focus-within {
        outline: 0;
    }

    &::-webkit-datetime-edit-ampm-field,
    &::-webkit-datetime-edit-day-field,
    &::-webkit-datetime-edit-hour-field,
    &::-webkit-datetime-edit-millisecond-field,
    &::-webkit-datetime-edit-minute-field,
    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-second-field,
    &::-webkit-datetime-edit-week-field,
    &::-webkit-datetime-edit-year-field {
        cursor: text;
    }

    &::-webkit-calendar-picker-indicator {
        stroke: ${cv.text1};
        cursor: pointer;
    }
`;

export const Datetime = React.forwardRef<HTMLInputElement, DateProps>((props: DateProps, ref) => {
    return (
        <Flex
            style={{
                flexDirection: 'column',
            }}
        >
            {props.label && <Label required={props.required || false}>{props.label}</Label>}
            <Divver>
                <StyledInput
                    {...props}
                    type={props.type}
                    ref={ref}
                >
                    {props.children}
                </StyledInput>
            </Divver>
        </Flex>
    );
});
