import styled from 'styled-components';
import React from 'react';
import { cv } from '../../style';
import { FooterMenu } from './footerMenu';
import { FooterNavigation } from './footerNavigation';

const FooterOuter = styled.div`
    width: 100%;
    background-color: ${cv.bg_page1};
    border-top: solid 1px ${cv.border4};
    position: relative;
    padding: 36px 0px;
`;

const FooterInner = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: calc(1200px + 2 * 24px);
    padding: 0px 24px;
    margin: auto;
    gap: 52px;

    @media (max-width: 767px) {
        padding: 0px 8px;
    }
`;

export interface StyledFooterProps {
    /**
     * Footer에 들어가는 내용입니다. \<Footer.Navigation\>, \<Footer.Menu\> 순으로 작성합니다.
     */
    children: React.ReactNode;
}

/**
 * 페이지 가장 하단에 들어가는 Footer입니다.
 */
const StyledFooter = Object.assign(
    ({ children }: StyledFooterProps) => {
        return (
            <FooterOuter>
                <FooterInner>{children}</FooterInner>
            </FooterOuter>
        );
    },
    {
        displayName: 'Footer',
    }
);

export const Footer = Object.assign(StyledFooter, {
    Navigation: FooterNavigation,
    Menu: FooterMenu,
});
