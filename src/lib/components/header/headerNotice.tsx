import { X } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useHeaderNotice } from '../../hooks/useHeaderNotice';
import { cv } from '../../style';
import { Flex } from '../layout';

const DivverOuter = styled.div<{ isOpen: boolean }>`
    position: relative;
    display: flex;
    width: 100%;
    border-bottom: solid 1px ${cv.border4};
    user-select: none;
    height: 32px;
    min-height: 32px;
    align-items: center;

    z-index: 10;

    background-color: ${cv.bg_element5};
    color: ${cv.text5};
    transition: box-shadow 200ms, margin-top 200ms cubic-bezier(0.01, 0.78, 0.51, 0.99);

    ${(props) =>
        !props.isOpen &&
        css`
            margin-top: -36px;
        `};
`;

const Divver = styled.div`
    display: flex;
    width: 100%;
    max-width: calc(1200px + 2 * 24px);
    padding: 0px 24px;
    margin: auto;
    position: relative;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
        padding: 0px 8px;
    }
`;

const Text = styled.div`
    padding-left: 8px;
    text-align: center;
    font-size: 14px;
`;

const Close = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 16px;
    background-color: transparent;
    transition: 200ms;
    position: absolute;
    right: 8px;
    border: 0;
    cursor: pointer;
    &:hover {
        background-color: ${cv.bg_element6};
    }
`;

export interface HeaderNoticeProps {
    /**
     * 공지에 들어갈 내용입니다. 채울 경우 해당 내용으로 공지가 열립니다.
     */
    children?: React.ReactNode;
}
export const HeaderNotice = Object.assign(
    ({ children }: HeaderNoticeProps) => {
        const {
            isOpen: isNoticeOpen,
            close: noticeClose,
            content: noticeContent,
            open: noticeOpen,
        } = useHeaderNotice();

        useEffect(() => {
            if (children) noticeOpen(children);
        }, [children, noticeOpen]);

        return (
            <DivverOuter isOpen={isNoticeOpen}>
                <Divver>
                    <Flex.Center style={{ flex: '1' }}>
                        <Text>{noticeContent}</Text>
                    </Flex.Center>
                    <Close onClick={() => noticeClose()}>
                        <X color="#ffffff" />
                    </Close>
                </Divver>
            </DivverOuter>
        );
    },
    {
        displayName: 'Header.Notice',
    }
);
