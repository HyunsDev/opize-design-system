import React from 'react';

import styled from 'styled-components';

import { cv } from '../../style';

const StyledNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex: 1;

    @media (max-width: 767px) {
        display: none;
    }
`;

const NavLink = styled.a`
    font-size: 14px;
    color: ${cv.text3};
    padding: 6px 14px;
    transition: 150ms;
    text-decoration: none;
    border-radius: 4px;

    &:hover {
        background-color: ${cv.bg_element3};
        color: ${cv.text1};
    }
`;

export const Nav = Object.assign(StyledNav, {
    Link: NavLink,
});
