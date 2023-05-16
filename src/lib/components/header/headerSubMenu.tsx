import React, { ComponentProps, useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { TabNav } from '..';
import { useHeaderNotice } from '../../hooks';
import { cv } from '../../style';

const DivverOuter = styled.div<{ isScrolled: boolean }>`
    position: relative;
    display: flex;
    width: 100%;
    border-bottom: solid 1px ${cv.border4};
    user-select: none;
    margin-top: -4px;
    background-color: ${cv.bg_element1};
    transition: box-shadow 200ms;
    z-index: 10;

    ${(props) =>
        props.isScrolled &&
        css`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            margin-top: 0px;
            padding-top: 6px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 10%);
        `};
`;

const Divver = styled.div`
    display: flex;
    width: 1248px;
    padding: 0px 12px;
    margin: auto;
    position: relative;
    margin-bottom: -1px;
    z-index: 10;
    background-color: ${cv.bg_element1};

    @media (max-width: 767px) {
        margin: 0px 8px;
    }
`;

const VoidDivver = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    user-select: none;
    margin-top: -4px;
    background-color: transparent;
    z-index: 9;
    height: 37px;
`;

export const HeaderSubMenu = Object.assign(
    (props: ComponentProps<typeof TabNav>) => {
        const [isScrolled, setScrolled] = useState(false);
        const { isOpen } = useHeaderNotice();

        const listener = useCallback(() => {
            const height = isOpen ? 84 : 52;
            setScrolled(window.scrollY > height);
        }, [isOpen]);

        useEffect(() => {
            window.addEventListener('scroll', listener);
            return () => {
                window.removeEventListener('scroll', listener);
            };
        }, [listener]);

        return (
            <>
                {isScrolled && <VoidDivver />}
                <DivverOuter isScrolled={isScrolled}>
                    <Divver>
                        <TabNav {...props} hasContext />
                    </Divver>
                </DivverOuter>
            </>
        );
    },
    {
        displayName: 'Header.SubMenu',
    }
);

export type HeaderSubMenuProps = ComponentProps<typeof HeaderSubMenu>;
