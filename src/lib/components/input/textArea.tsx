import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import { cv } from '../../style';
import { Label } from './label';

const Divver = styled.div``;

export type TextAreaProps = React.ComponentPropsWithoutRef<'textarea'> & {
    type?: 'text' | 'password' | 'search' | 'url';
    value?: string;
    placeholder?: string;
    readonly?: boolean;
    error?: React.ReactNode;
    label?: React.ReactNode;
};

const Input = styled.textarea<TextAreaProps>`
    display: block;
    width: 100%;
    border-radius: 4px;
    padding: 6px 12px;
    resize: vertical;
    height: 100px;
    font-size: 0.875rem;

    transition: 100ms, height 0ms;
    border: solid 1px ${cv.border3};
    outline: solid 0px ${cv.outline};

    &:focus {
        outline: solid 3px ${cv.outline};
    }

    &::placeholder {
        color: ${cv.text3};
    }
`;

const Message = styled.div`
    height: 20px;
    color: ${cv.red1};
    font-size: 12px;
    margin-top: 4px;
`;

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props: TextAreaProps, ref) => {
    return (
        <Divver>
            {props.label && <Label required={props.required || false}>{props.label}</Label>}
            <Input ref={ref} {...props} onChange={(e) => !props.readonly && props.onChange && props.onChange(e)} />
            {props.error && <Message>{props.error}</Message>}
        </Divver>
    );
});
