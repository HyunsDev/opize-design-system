import { X } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useHeaderNotice } from '../../hooks/useHeaderNotice';
import { cv } from '../../style';
import { Flex } from '../layout';

const DivverOuter = styled.div<{ isScrolled: boolean; isOpen: boolean }>`
    position: relative;
    display: flex;
    width: 100%;
    border-bottom: solid 1px ${cv.border4};
    user-select: none;

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
    padding: 8px 24px;
    margin: auto;
    position: relative;
    margin-bottom: -1px;
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

export function HeaderNotice({ children }: { children?: React.ReactNode }) {
    const [isScrolled, setScrolled] = useState(window.screenY > 64 - 8);
    const { isOpen: isNoticeOpen, close: noticeClose, content: noticeContent, open: noticeOpen } = useHeaderNotice();

    useEffect(() => {
        const listener = () => {
            setScrolled(window.scrollY > 64 - 10);
        };

        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, []);

    useEffect(() => {
        if (children) noticeOpen(children);
    }, [children, noticeOpen]);

    return (
        <DivverOuter isScrolled={isScrolled} isOpen={isNoticeOpen}>
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
}
