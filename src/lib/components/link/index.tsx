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
    border-bottom: solid 1px rgba(0,0,0,0);
`

const LinkA = styled.a<{color: String, showUnderline: Boolean}>`
    ${LinkStyle}
    color: ${props => props.color};
    ${props => props.showUnderline && css`
        &:hover {
            border-bottom: solid 1px ${props.color};
        }
    `}
`

const LinkLink = styled(LinkRouter)<{color: String, showUnderline: Boolean}>`
    ${LinkStyle}
    color: ${props => props.color};

    ${props => props.showUnderline && css`
        &:hover {
            border-bottom: solid 1px ${props.color};
        }
    `}
`

export function Link({
    to,
    color,
    newTab,
    hideIcon,
    children,
    showUnderline = true
}: {
    to: string
    newTab?: boolean
    hideIcon?: boolean
    children: React.ReactNode
    color?: string
    showUnderline?: boolean
}) {
    if (!to.includes('http')) {
        return <><LinkLink to={to} color={color || cv.blue1} showUnderline={showUnderline}>{children}</LinkLink></>
    } else {
        return (
            <>
                <LinkA href={to} target={newTab ? '_self' : '_blank'} rel='noreferrer' color={color || cv.blue1} showUnderline={showUnderline}>
                    {children}
                    {!hideIcon && <Share size={16} color={color || cv.blue1} weight='bold' style={{marginLeft: '4px', marginBottom: '-2px'}} />}
                </LinkA>
            </>
        )
    }
}
export type LinkProps = ComponentProps<typeof Link>