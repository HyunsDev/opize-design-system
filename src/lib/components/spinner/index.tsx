import styled, { keyframes } from "styled-components";
import React from 'react';
import '../../style/style.css'
import { cv } from "../../style";



const Loader = styled.div<{size: number}>`
    position: relative;
    margin: 0 auto;
    width: ${props => props.size}px;
    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }
`

const dash = keyframes`
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
`

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`

const Circular = styled.svg`
    animation: ${rotate} 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        animation: ${dash} 1.5s ease-in-out infinite;
        stroke: ${props => props.color || cv.text1};
        stroke-linecap: round;
    }
`

interface SpinnerProps {
    size?: number;
    color?: string;
    strokeWidth?: number;
}

export const Spinner = ({
    strokeWidth = 4,
    color = cv.text1,
    size = 32
}: SpinnerProps) => {
    return (
        <Loader size={size}>
            <Circular viewBox="25 25 50 50" color={color}>
                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth={strokeWidth} strokeMiterlimit="10" />
            </Circular>
        </Loader>
    )
}
