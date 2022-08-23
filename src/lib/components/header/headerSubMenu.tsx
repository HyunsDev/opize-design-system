import React, { ComponentProps, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { TabNav } from '..';
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
    width: 100%;
    max-width: calc(1200px + 2 * 24px);
    padding: 0px 24px;
    margin: auto;
    position: relative;
    margin-bottom: -1px;

    @media (max-width: 767px) {
        padding: 0px 8px;
    }
`;

export const HeaderSubMenu = Object.assign(
    (props: ComponentProps<typeof TabNav>) => {
        const [isScrolled, setScrolled] = useState(window.screenY > 64 - 8);

        useEffect(() => {
            const listener = () => {
                setScrolled(window.scrollY > 64 - 10);
            };

            window.addEventListener('scroll', listener);
            return () => {
                window.removeEventListener('scroll', listener);
            };
        }, []);

        return (
            <DivverOuter isScrolled={isScrolled}>
                <Divver>
                    <TabNav {...props} />
                </Divver>
            </DivverOuter>
        );
    },
    {
        displayName: 'Header.SubMenu',
    }
);

export type HeaderSubMenuProps = ComponentProps<typeof HeaderSubMenu>;
