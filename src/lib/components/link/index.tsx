import { Share } from "phosphor-react"
import { ComponentProps } from "react"
import { Link as LinkRouter } from "react-router-dom"
import styled, { css } from "styled-components"
import { cv } from "../../style"

const LinkStyle = css`
    color: ${cv.blue1};
    text-decoration: none;
    font-size: .875rem;
    line-height: 24px;

    &:hover {
        border-bottom: solid 1px ${cv.blue1};
    }
`

const LinkA = styled.a`
    ${LinkStyle}
`

const LinkLink = styled(LinkRouter)`
    ${LinkStyle}
`

export function Link(props: {
    to?: string
    href?: string
    newTab?: boolean
    showIcon?: boolean
    children: React.ReactNode
}) {
    if (props.to) {
        return <LinkLink to={props.to}>{props.children}</LinkLink>
    } else {
        return (
            <LinkA href={props.href} target={props.newTab ? '_self' : '_blank'} rel='noreferrer' >
                {props.children}
                {props.showIcon && <Share size={16} color={cv.blue1} style={{marginLeft: '4px'}} />}
            </LinkA>
        )
    }
}
export type LinkProps = ComponentProps<typeof Link>