/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-nested-ternary */
import React, { ComponentProps, useImperativeHandle, useRef } from 'react';

import { File, Folder, IconContext, Upload, UploadSimple } from 'phosphor-react';
import styled from 'styled-components';

import { cv } from '../../style';
import { Flex } from '../flex';

import { Label } from './label';

export type FileFieldProps = React.ComponentPropsWithoutRef<'input'> & {
    label?: React.ReactNode;
    error?: React.ReactNode;
    width?: string;
    onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    buttonText?: React.ReactNode;
    icon?: React.ReactNode;
};

const Divver = styled.div`
    width: 100%;
`;

const Input = styled.input`
    display: none;
`;

const FakeLabel = styled.div`
    z-index: 1;
    padding: 0px 12px;
    height: 32px;
    display: flex;
    align-items: center;
    transition: 200ms;
    flex: 1;
    box-sizing: content-box;
    border: 0;
    font-size: 14px;
    outline: solid 3px rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 3px transparent;
    background-color: ${cv.bg_element1_1};
    color: ${cv.text1};
    cursor: pointer;
    border-radius: 4px;
    gap: 8px;

    &:focus {
        background-color: ${cv.bg_element1};
    }

    &::placeholder {
        color: ${cv.text3};
    }
`;

const Message = styled.div`
    height: 20px;
    color: ${cv.red1};
    font-size: 14px;
    margin-top: 4px;
`;

const InputDivver = styled.div`
    display: flex;
    align-items: center;
    transition: 150ms;
    background-color: ${cv.bg_element2};
    height: 34px;
    border-radius: 4px;
    border: solid 1px ${cv.border4};
    &:focus-within {
        border: solid 1px ${cv.border2};
    }
`;

export const FileField = React.forwardRef<HTMLInputElement, FileFieldProps>(
    (
        {
            buttonText = '파일 업로드',
            icon = <UploadSimple />,
            label,
            required = false,
            value,
            error,
            width,
            ...props
        }: FileFieldProps,
        ref
    ) => {
        const inputRef = useRef<any>(null);
        useImperativeHandle(ref, () => inputRef.current as any);

        return (
            <IconContext.Provider
                value={{
                    weight: 'bold',
                    size: 14,
                    color: cv.text1,
                }}
            >
                <Divver style={{ width }}>
                    {label && <Label required={required}>{label}</Label>}
                    <Input type="file" {...props} ref={inputRef} value={value} />
                    <InputDivver>
                        <FakeLabel onClick={() => inputRef.current?.click()}>
                            {icon}
                            {buttonText}
                        </FakeLabel>
                    </InputDivver>

                    {error && <Message>{error}</Message>}
                </Divver>
            </IconContext.Provider>
        );
    }
);
