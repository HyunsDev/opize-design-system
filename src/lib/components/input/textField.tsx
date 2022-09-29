/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';
import { IconContext } from 'phosphor-react';
import React from 'react';
import { cv } from '../../style';
import { Label } from './label';

type ButtonAddon = {
    type: 'button';
    label?: string;
    icon?: React.ReactElement;
    onClick: () => void;
};

export type TextFieldProps = React.ComponentPropsWithoutRef<'input'> & {
    label?: React.ReactNode;
    type?: 'text' | 'password' | 'search' | 'url' | 'email' | 'number' | 'tel';
    error?: React.ReactNode;
    leftAddon?: React.ReactNode | ButtonAddon;
    rightAddon?: React.ReactNode | ButtonAddon;
    border?: 'all' | 'bottom' | 'none';
    placeholder?: string;
    readOnly?: boolean;
};

const Divver = styled.div`
    width: 100%;
`;

const Input = styled.input<{ border: 'all' | 'bottom' | 'none'; readOnly: boolean }>`
    z-index: 1;
    padding: 0px 12px;
    height: 34px;
    display: flex;
    align-items: center;
    transition: 200ms;
    flex: 1;
    box-sizing: content-box;
    border: 0;
    font-size: 14px;
    outline: solid 3px rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 3px transparent;
    background-color: ${(props) => (props.readOnly ? cv.bg_element3 : cv.bg_element2)};
    color: ${cv.text1};

    ${(props) =>
        props.border === 'all'
            ? css`
                  border-radius: 4px;
              `
            : props.border === 'bottom'
            ? css``
            : ''}

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

const Inputs = styled.div<{ border: 'all' | 'bottom' | 'none'; readOnly: boolean }>`
    display: flex;
    align-items: center;
    transition: 150ms;
    background-color: ${cv.bg_element2};
    height: 36px;
    ${(props) =>
        props.border === 'all'
            ? css`
                  border-radius: 4px;
                  border: solid 1px ${cv.border4};

                  ${!props.readOnly &&
                  css`
                      &:focus-within {
                          border: solid 1px ${cv.border2};
                      }
                  `}
              `
            : props.border === 'bottom'
            ? css`
                  border-bottom: solid 1px ${cv.border4};

                  ${!props.readOnly &&
                  css`
                      &:focus-within {
                          border-bottom: solid 1px ${cv.border2};
                      }
                  `}
              `
            : ''}
`;

const AddonTextDiv = styled.div<{ position: 'left' | 'right' }>`
    padding: 0px 12px;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 14px;
    background-color: ${cv.bg_element3};

    ${(props) =>
        props.position === 'left' ? `border-right: solid 1px ${cv.border3};` : `border-left: solid 1px ${cv.border3};`};
    ${(props) =>
        props.position === 'left'
            ? `border-bottom-left-radius: 4px; border-top-left-radius: 4px;`
            : 'border-bottom-right-radius: 4px; border-top-right-radius: 4px;'};
`;

const AddonButtonDiv = styled.div<{ position: 'left' | 'right' }>`
    padding: 0px 8px;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 14px;
    background-color: ${cv.bg_element5};
    color: #ffffff;
    cursor: pointer;

    ${(props) =>
        props.position === 'left' ? `border-right: solid 1px ${cv.border3};` : `border-left: solid 1px ${cv.border3};`};
    ${(props) =>
        props.position === 'left'
            ? `border-bottom-left-radius: 4px; border-top-left-radius: 4px;`
            : 'border-bottom-right-radius: 4px; border-top-right-radius: 4px;'};
`;

function Addon({ position, data }: { position: 'left' | 'right'; data: ButtonAddon | React.ReactNode | any }) {
    if (typeof data === 'string') {
        return <AddonTextDiv position={position}>{data}</AddonTextDiv>;
    }
    if (data.type === 'button') {
        return (
            <AddonButtonDiv position={position} onClick={() => data.onClick()}>
                {data.icon}
                {data.label}
            </AddonButtonDiv>
        );
    }
    return <></>;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    (
        {
            label,
            required = false,
            border = 'all',
            leftAddon,
            rightAddon,
            value,
            type = 'text',
            readOnly = false,
            error,
            ...props
        }: TextFieldProps,
        ref
    ) => {
        return (
            <IconContext.Provider
                value={{
                    weight: 'bold',
                    size: 14,
                    color: cv.text5,
                }}
            >
                <Divver>
                    {label && <Label required={required}>{label}</Label>}
                    <Inputs border={border} readOnly={readOnly}>
                        {leftAddon && <Addon position="left" data={leftAddon} />}
                        <Input {...props} value={value} ref={ref} type={type} border={border} readOnly={readOnly} />
                        {rightAddon && <Addon position="right" data={rightAddon} />}
                    </Inputs>
                    {error && <Message>{error}</Message>}
                </Divver>
            </IconContext.Provider>
        );
    }
);
