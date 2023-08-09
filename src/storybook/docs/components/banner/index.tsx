import React, { useEffect, useRef, useState } from 'react';

import styled, { keyframes } from 'styled-components';

import foxImg from './opizeFox.png';
import './style.css';

const Circle1FadeIn = keyframes`
    0% {
        transform: translate(-30px, -20px);
        opacity: 0.4;
    }
    100% {
        transform: translate(0px, 0px);
        opacity: 1;
    }
`;

const Circle2FadeIn = keyframes`
    0% {
        transform: translate(100px, 40px);
        opacity: 0.4;
    }
    100% {
        transform: translate(0px, 0px);
        opacity: 1;
    }
`;

const TextFadeIn1 = keyframes`
    0% {
        transform: translate(0, 20px);
        opacity: 0.4;
    }
    100% {
        transform: translate(0px, 0px);
        opacity: 1;
    }
`;

const TextFadeIn2 = keyframes`
    0% {
        transform: translate(0, 20px);
        opacity: 0.4;
    }
    4% {
        transform: translate(0, 20px);
        opacity: 0.4;
    }
    100% {
        transform: translate(0px, 0px);
        opacity: 1;
    }
`;

const ImgFadeIn = keyframes`
    0% {
        transform: translate(20px, 0px) scaleX(-1);
        opacity: 0.4;
    }
    4% {
        transform: translate(20px, 0px) scaleX(-1);
        opacity: 0.4;
    }
    100% {
        transform: translate(0px, 0px) scaleX(-1);
        opacity: 1;
    }
`;

const Outer = styled.div``;

const Div = styled.div`
    width: 100%;
    border-radius: 40px;
    box-shadow: 0px 8px 32px rgba(45, 101, 96, 0.45);
    min-height: 340px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(273.59deg, #0f9185 2.96%, #0b3b4a 76.46%);
    margin-bottom: 40px;

    & *::selection {
        background: #0f91845a;
    }
`;

const Circle1 = styled.div`
    position: absolute;
    height: 360px;
    width: 360px;
    background: linear-gradient(316deg, #0f9185 0.04%, #0b3b4a 50%);
    animation: ${Circle1FadeIn} 1s cubic-bezier(0.08, 0.37, 0, 1.02) forwards;
    border-radius: 99999px;
`;

const Circle2 = styled.div`
    position: absolute;
    height: 720px;
    width: 720px;
    background: linear-gradient(297.17deg, #0f9185 -13.71%, #0b3b4a 101.7%);
    animation: ${Circle2FadeIn} 1s cubic-bezier(0.08, 0.37, 0, 1.02) forwards;
    border-radius: 99999px;
`;

const Text1 = styled.div`
    position: absolute;
    left: 36px;
    bottom: 110px;
    font-size: 60px !important;
    font-weight: 800;
    line-height: 1.2;
    color: rgba(255, 255, 255, 0.8);
    animation: ${TextFadeIn1} 2s cubic-bezier(0.08, 0.37, 0, 1.02) forwards;
    font-family: 'Poppins', sans-serif !important;
`;

const Text2 = styled.div`
    position: absolute;
    left: 36px;
    bottom: 36px;
    font-size: 60px !important;
    font-weight: 800;
    font-family: 'Poppins', sans-serif !important;
    line-height: 1.2;
    color: rgba(255, 255, 255, 0.8);
    animation: ${TextFadeIn2} 2s cubic-bezier(0.08, 0.37, 0, 1.02) forwards;
`;

const Version = styled.span`
    font-size: 16px;
    color: rgba(218, 231, 211, 0.4);
    font-weight: 400;
`;

const Fox = styled.img`
    display: block;
    position: absolute;
    right: 0px;
    bottom: 0px;
    height: 380px;
    border-radius: 40px;
    user-select: none;
    animation: ${ImgFadeIn} 2s cubic-bezier(0.08, 0.37, 0, 1.02) forwards;
`;

export function Banner({ version }: { version: string }) {
    const circle1 = useRef<HTMLDivElement>(null);
    const circle2 = useRef<HTMLDivElement>(null);
    const box = useRef<HTMLDivElement>(null);

    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setPos({
                x: e.clientX,
                y: e.clientY,
            });
        };
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    return (
        <Outer>
            <Div ref={box}>
                <Circle1
                    ref={circle1}
                    style={{
                        top: `${-160 - (-pos.y / 2 + pos.y) / 50}px`,
                        left: `${-120 - (-pos.x / 2 + pos.x) / 50}px`,
                    }}
                />
                <Circle2
                    ref={circle2}
                    style={{
                        bottom: `${-300 - (-pos.y / 2 + pos.y) / 50}px`,
                        right: `${-300 - (-pos.x / 2 + pos.x) / 50}px`,
                    }}
                />
                <Fox
                    src={foxImg}
                    alt=""
                    draggable="false"
                />
                <Text1>Opize</Text1>
                <Text2>
                    Design System <Version>{version}</Version>
                </Text2>
            </Div>
        </Outer>
    );
}
