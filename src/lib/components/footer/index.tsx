import styled from "styled-components"
import { cv } from "../../style"
import { FooterMenu } from "./footerMenu"
import { FooterNavigation } from "./footerNavigation"
import React from "react";

const FooterOuter = styled.div`
    width: 100%;
    background-color: ${cv.bg_page1};
    border-top: solid 1px ${cv.border4};
    position: relative;
    padding: 36px 0px;
`

const FooterInner = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: calc(1200px + 2 * 24px);
    padding: 0px 24px;
    margin: auto;
    gap: 52px;

    @media ( max-width: 767px ) {
        padding: 0px 8px;
    }
`

function StyledFooter(props: {
    children: React.ReactNode
}) {

    return (
        <FooterOuter>
            <FooterInner>
                {props.children}
            </FooterInner>
        </FooterOuter>
    )
}

export const Footer = Object.assign(StyledFooter, {
    Navigation: FooterNavigation,
    Menu: FooterMenu,
})