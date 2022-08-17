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
};

const Divver = styled.div`
    width: 100%;
`;

const Input = styled.input<{ border: 'all' | 'bottom' | 'none' }>`
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

    ${(props) =>
        props.border === 'all'
            ? css`
                  border-radius: 2px;
              `
            : props.border === 'bottom'
            ? css``
            : ''}

    &:focus {
        ${(props) =>
            props.border === 'all'
                ? css`
                      outline: solid 3px ${cv.outline};
                  `
                : props.border === 'bottom'
                ? css`
                      box-shadow: 0px 3px 0px ${cv.outline};
                  `
                : ''}
    }
`;

const Message = styled.div`
    height: 20px;
    color: ${cv.red1};
    font-size: 14px;
    margin-top: 4px;
`;

const Inputs = styled.div<{ border: 'all' | 'bottom' | 'none' }>`
    display: flex;
    align-items: center;
    height: 36px;
    ${(props) =>
        props.border === 'all'
            ? css`
                  border-radius: 4px;
                  border: solid 1px ${cv.border3};
              `
            : props.border === 'bottom'
            ? css`
                  border-bottom: solid 1px ${cv.border3};
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

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((props: TextFieldProps, ref) => {
    return (
        <IconContext.Provider
            value={{
                weight: 'bold',
                size: 14,
                color: cv.text5,
            }}
        >
            <Divver>
                {props.label && <Label required={props.required || false}>{props.label}</Label>}
                <Inputs border={props.border || 'all'}>
                    {props.leftAddon && <Addon position="left" data={props.leftAddon} />}
                    <Input
                        {...props}
                        value={props.value}
                        ref={ref}
                        type={props.type || 'text'}
                        border={props.border || 'all'}
                    />
                    {props.rightAddon && <Addon position="right" data={props.rightAddon} />}
                </Inputs>
                {props.error && <Message>{props.error}</Message>}
            </Divver>
        </IconContext.Provider>
    );
});
