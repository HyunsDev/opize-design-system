/* eslint-disable react/destructuring-assignment */
import { X } from 'phosphor-react';
import React, { ComponentProps, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { cv } from '../../style';

const Divver = styled.div``;

const FadeInFromBottom = keyframes`
    0% {
        transform: translateY(10px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

const Background = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(${cv.vh}*100);
    z-index: 9998;
    background-color: ${cv.black};
    transition: 200ms;
    opacity: ${(props) => (props.isOpen ? 0.2 : 0)};
`;

const ModalBoxDivver = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(${cv.vh}*100);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;

    animation: ${FadeInFromBottom} 200ms cubic-bezier(0.07, 0.75, 0.54, 0.93);
`;

const ModalBox = styled.div<{ isOpen: boolean; width: string; isPadding?: boolean }>`
    background-color: ${cv.bg_page2};
    color: ${cv.text1};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    pointer-events: auto;
    width: ${(props) => props.width};
    max-width: calc(100vw - 16px);
    padding: ${(props) => (props.isPadding ? 16 : 0)}px;

    transition: 200ms;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
`;

const ModalTitle = styled.div`
    font-weight: 700;
    font-size: 20px;
`;

const ModalTitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    color: ${cv.text1};
`;

const CloseBtn = styled.div`
    cursor: pointer;
    padding: 6px;
    background-color: ${cv.bg_element1};
    transition: 200ms;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25565px;

    &:hover {
        background-color: ${cv.bg_element2};
    }
`;

export function Modal(props: {
    setOpen: (isOpen: boolean) => void;
    isOpen: boolean;
    content: React.ReactNode;
    width: string | number;
    title?: React.ReactNode;
    close: () => void;
    isPadding?: boolean;
}) {
    const timer = useRef<NodeJS.Timeout>();
    const [isOpen, setOpen] = useState(props.isOpen);

    useEffect(() => {
        clearTimeout(timer.current);
        if (props.isOpen) {
            setOpen(props.isOpen);
        } else {
            timer.current = setTimeout(() => {
                setOpen(props.isOpen);
            }, 200);
        }
    }, [props.isOpen]);

    const width = typeof props.width === 'number' ? `${props.width}px` : props.width;

    if (isOpen) {
        return (
            <Divver>
                <Background isOpen={props.isOpen} onClick={() => props.setOpen(false)} />
                <ModalBoxDivver>
                    <ModalBox isOpen={props.isOpen} width={width} isPadding={props.isPadding}>
                        {props.title && (
                            <ModalTitleBox>
                                <ModalTitle>{props.title}</ModalTitle>
                                <CloseBtn onClick={() => props.close()}>
                                    <X />
                                </CloseBtn>
                            </ModalTitleBox>
                        )}
                        {props.content}
                    </ModalBox>
                </ModalBoxDivver>
            </Divver>
        );
    }
    return null;
}

export type ModalProps = ComponentProps<typeof Modal>;
