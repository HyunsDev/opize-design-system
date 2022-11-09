import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import { cv } from '../../style';

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    flex: 1 1;
    gap: 8px;
`;
HeaderLeft.displayName = 'Header.Nav.Left';

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
HeaderRight.displayName = 'Header.Nav.Right';

const HeaderLink = styled.a`
    text-decoration: none;
`;
HeaderLink.displayName = 'Header.Nav.Link';

const HeaderButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 4px;
    background-color: ${cv.bg_element1};
    cursor: pointer;
    border: 0;
    font-size: 14px;
    font-weight: 500;

    transition: 125ms;
    color: ${cv.text3};
    &:hover {
        color: ${cv.text2};
    }
    text-decoration: none;
`;
HeaderButton.displayName = 'Header.Nav.Button';

const HeaderNavComponent = styled.nav`
    display: flex;
    width: 1200px;
    margin: 0px 24px;
    margin: auto;
    height: 64px;
    user-select: none;
    position: relative;

    z-index: 11;

    @media (max-width: 767px) {
        margin: 0px 8px;
    }

    & > div {
        display: flex;
        align-items: center;
    }
`;

export const HeaderNav = Object.assign(HeaderNavComponent, {
    Left: HeaderLeft,
    Right: HeaderRight,
    Link: HeaderLink,
    Button: HeaderButton,
});
export type HeaderNavProps = ComponentProps<typeof HeaderNav>;
