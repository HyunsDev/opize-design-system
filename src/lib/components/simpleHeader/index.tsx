import React, { ComponentProps, useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '..';
import { cv } from '../../style';
import { Nav } from './nav';

const StyledHeader = styled.header`
    z-index: 10;
`;

const DivverOuter = styled.div<{ isScrolled: boolean }>`
    display: flex;
    width: 100%;
    user-select: none;
    background-color: ${cv.bg_page2};
    transition: box-shadow 200ms;
    z-index: 10;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    border-bottom: solid 1px ${cv.bg_page2};

    ${(props) =>
        props.isScrolled &&
        css`
            border-bottom: solid 1px ${cv.border4};
        `};
`;

const Divver = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    height: 52px;
    padding: 0px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
        padding: 0px 8px;
    }
`;

export type SimpleHeaderProps = {
    children: React.ReactNode;
};
function SimpleHeaderComponent({ children }: SimpleHeaderProps) {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const listener = () => {
            setIsTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, []);

    return (
        <StyledHeader>
            <DivverOuter isScrolled={!isTop}>
                <Divver>{children}</Divver>
            </DivverOuter>
        </StyledHeader>
    );
}

export const SimpleHeader = Object.assign(SimpleHeaderComponent, {
    Nav,
});
