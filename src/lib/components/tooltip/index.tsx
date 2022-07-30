import { useState } from "react"
import styled from "styled-components"

const ToolTipBox = styled.div`
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: 100ms;


    background-color: #2C303E;
    color: #ffffff;
    font-size: 12px;
    border-radius: 6px;
    padding: 4px 8px;
    white-space: pre;
    pointer-events: none;

    &::after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 5px;
        pointer-events: none;
    }
`

const Divver = styled.div<{isHover: boolean}>`
    width: fit-content;
    height: fit-content;
    position: relative;
    z-index: 1000;

    ${props => props.isHover && `
        ${ToolTipBox} {
            visibility: visible;
            opacity: 1;
        }
    `}
`

const ToolTipBoxTop = styled(ToolTipBox)`
    transform: translate(-50%, 0%);
    left: 50%;
    bottom: 130%;

    &::after {
        top: 100%;
        left: 50%;
        transform: translate(-50%, 0%);
        border-color: #2C303E transparent transparent transparent;
    }
`

const ToolTipBoxBottom = styled(ToolTipBox)`
    transform: translate(-50%, 0%);
    left: 50%;
    top: 120%;

    &::after {
        bottom: 100%;
        left: 50%;
        transform: translate(-50%, 0%);
        border-color: transparent transparent #2C303E transparent;
    }
`

const ToolTipBoxRight = styled(ToolTipBox)`
    transform: translate(0%, 50%);
    left: 110%;

    &::after {
        top: 25%;
        right: 100%;
        border-color: transparent #2C303E transparent transparent;
    }
`

const ToolTipBoxLeft = styled(ToolTipBox)`
    /* transform: translate(0%, 50%); */
    right: 110%;

    &::after {
        top: 35%;
        left: 100%;
        border-color: transparent transparent transparent #2C303E;
    }
`

interface ToolTipProps {
    children: React.ReactNode;
    text: string;
    direction?: 'top' | 'bottom' | 'right' | 'left'
}

export function ToolTip(props: ToolTipProps) {
    const [ isHover, setIsHover ] = useState(false)

    let box;
    switch (props.direction) {
        case 'top':
            box = <ToolTipBoxTop>{props.text}</ToolTipBoxTop>
            break 

        case 'bottom':
            box = <ToolTipBoxBottom>{props.text}</ToolTipBoxBottom>
            break 
        
        case 'right':
            box = <ToolTipBoxRight>{props.text}</ToolTipBoxRight>
            break
        
        case 'left':
            box = <ToolTipBoxLeft>{props.text}</ToolTipBoxLeft>
            break

        default:
            box = <ToolTipBoxTop>{props.text}</ToolTipBoxTop>
            break
    }

    return (
        <Divver isHover={isHover} onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className="tooltip">
            {box}
            {props.children}
        </Divver>
    )
}