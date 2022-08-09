import { Share } from "phosphor-react"
import React, { ComponentProps } from "react"
import { Link as LinkRouter } from "react-router-dom"
import styled, { css } from "styled-components"
import { cv } from "../../style"

const LinkStyle = css`
    color: ${cv.blue1};
    text-decoration: none;
    font-size: .875rem;
    line-height: 24px;
    cursor: pointer;
`

const LinkA = styled.a<{color: String}>`
    ${LinkStyle}
    color: ${props => props.color};
    &:hover {
        border-bottom: solid 1px ${props => props.color};
    }
`

const LinkLink = styled(LinkRouter)<{color: String}>`
    ${LinkStyle}
    color: ${props => props.color};
    &:hover {
        border-bottom: solid 1px ${props => props.color};
    }
`

export function Link(props: {
    to: string
    newTab?: boolean
    hideIcon?: boolean
    children: React.ReactNode
    color?: string
}) {
    if (!props.to.includes('http')) {
        return <LinkLink to={props.to} color={props.color || cv.blue1}>{props.children}</LinkLink>
    } else {
        return (
            <LinkA href={props.to} target={props.newTab ? '_self' : '_blank'} rel='noreferrer' color={props.color || cv.blue1}>
                {props.children}
                {!props.hideIcon && <Share size={16} color={props.color || cv.blue1} weight='bold' style={{marginLeft: '4px', marginBottom: '-2px'}} />}
            </LinkA>
        )
    }
}
export type LinkProps = ComponentProps<typeof Link>