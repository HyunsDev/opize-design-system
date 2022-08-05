import { ComponentProps } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { cv } from "../../style"
import { Flex } from "../layout"

const Divver = styled.nav`
    display: flex;
    width: 100%;
    max-width: calc(1200px + 2 * 24px);
    padding: 0px 24px;
    margin: auto;
    height: 64px;
    user-select: none;
    position: relative;

    @media ( max-width: 767px ) {
        padding: 0px 8px;
    }
    
    & > div {
        display: flex;
        align-items: center;
    }
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    flex: 1 1;
    gap: 8px;
`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const HeaderLink = styled(Link)`
    text-decoration: none;
`

const HerderLogoImg = styled.img`
    height: 32px;
    margin-left: 6px;
`

function HeaderLogo({
    to,
    src
}: {
    to: string
    src: string
}) {
    
    return (
        <HeaderLink to={to}>
            <HerderLogoImg src={src} alt='Logo' />
        </HeaderLink>
    )
}

const HeaderButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 4px;
    background-color: ${cv.bg_element7};
    cursor: pointer;
    border: 0;
    font-size: 14px;
    font-weight: 500;

    transition: 125ms;
    color: ${cv.text3};
    &:hover {
        color: ${cv.text2};
    }
`

function HeaderNavComponent({
    children,
}: {
    children: React.ReactNode,
}) {

    return (
        <Divver>
            {children}
        </Divver>
    )
}

export const HeaderNav = Object.assign(HeaderNavComponent, {
    Left: HeaderLeft,
    Right: HeaderRight,
    Link: HeaderLink,
    Logo: HeaderLogo,
    Button: HeaderButton
})
export type HeaderNavProps = ComponentProps<typeof HeaderNav>