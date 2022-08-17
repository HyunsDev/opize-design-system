/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';
import { cv } from '../../style';
import { Label } from './label';
import { Flex } from '../layout';

export type DateProps = React.ComponentPropsWithoutRef<'input'> & {
    label?: string;
    type: 'date' | 'datetime-local' | 'month' | 'time' | 'week';
};

const Divver = styled.div`
    position: relative;
    border: solid 1px ${cv.border3};
    display: flex;
    align-items: center;
    border-radius: 4px;
    height: 36px;
    font-size: 0.875rem;
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
    outline: solid 3px rgba(0, 0, 0, 0);

    &:focus-within {
        border: 0;
        outline: solid 3px ${cv.outline};
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
                <StyledInput {...props} type={props.type} ref={ref}>
                    {props.children}
                </StyledInput>
            </Divver>
        </Flex>
    );
});
