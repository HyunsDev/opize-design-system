import styled from "styled-components"
import { cv } from "../../style"
import React from "react"

const StyledBar = styled.div<{isShow: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${props => props.isShow ? cv.bg_element2 : 'rgba(0,0,0,0)'};
    user-select: none;
    pointer-events: none;
    z-index: 9999;
`

const StyledBarInner = styled.div<{width: number, isShow: boolean}>`
    transition: 300ms ease, background-color 400ms;
    width: ${props => props.width}%;
    height: 3px;
    background-color: ${props => props.isShow ? cv.bg_element6 : 'rgba(0,0,0,0)'};
`

export function TopLoadingBar({
    width,
    isShow
}: {
    width: number,
    isShow: boolean
}) {

    return (
        <StyledBar isShow={isShow}>
            <StyledBarInner width={width} isShow={isShow} />
        </StyledBar>
    )
}