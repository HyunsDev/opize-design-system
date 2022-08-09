import React from "react"
import styled from "styled-components"
import { cv } from "../../style"

const StyledAvatar = styled.img<{size: number}>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: ${props => props.size}px;
    border: solid 1px ${cv.border3};
`

export function Avatar({
    src,
    alt = '',
    size = 24
}: {
    src: string,
    alt?: string,
    size?: number
}) {
    return (
        <StyledAvatar size={size} src={src} alt={alt} />
    )
}