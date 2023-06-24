import React, { ComponentProps, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { IconContext, IconProps } from 'phosphor-react';
import styled, { keyframes } from 'styled-components';

import { Button, ButtonProps } from '..';
import { cv } from '../../style';

const ActionBoxDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: fit-content;
    user-select: none;
`;

const FadeInFromTop = keyframes`
    0% {
        transform: translateY(-4px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

const FadeInFromBottom = keyframes`
    0% {
        transform: translateY(4px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

type OverlayDivProps = {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    buttonHeight: number;
    removePadding?: boolean;
};

const OverlayDiv = styled.div<OverlayDivProps>`
    position: absolute;
    min-width: 230px;
    ${(props) => props.top !== undefined && `top: ${props.top + props.buttonHeight}px;`};
    ${(props) => props.right !== undefined && `right: ${props.right}px;`};
    ${(props) => props.bottom !== undefined && `bottom: ${props.bottom + props.buttonHeight}px;`};
    ${(props) => props.left !== undefined && `left: ${props.left}px;`};
    padding: ${(props) => (props.removePadding ? '0px' : '8px 16px')};
    box-shadow: 0 8px 30px rgba(0, 0, 0, 10%);
    background-color: ${cv.bg_element1};
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    z-index: 10;
    border-radius: 6px;
    border: solid 1px ${cv.border4};
    animation: ${(props) => (props.top !== undefined ? FadeInFromTop : FadeInFromBottom)} 150ms
        cubic-bezier(0.07, 0.75, 0.54, 0.93);
    color: ${cv.text1};
`;

export interface ActionBoxProps extends ButtonProps {
    /** 오버레이 박스 안 내용 */
    overlay: React.ReactNode;
    /** 오버레이 안 padding 유무 */
    removePadding?: boolean;
}

/**
 * 클릭했을 때 오버레이를 표시하는 버튼입니다.
 *
 * \<Button\>에서 확장되었습니다.
 */
export function ActionBox({ children, removePadding, overlay, ...props }: ActionBoxProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [direction, setDirection] = useState<{
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }>({});

    const ref = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent): void {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    const calcPos = useCallback(() => {
        if (!ref.current) return;

        const pos: {
            top?: number;
            right?: number;
            bottom?: number;
            left?: number;
        } = {};

        if (
            ref.current.getBoundingClientRect().right + 250 >
            (window.innerWidth >= 1200 ? (window.innerWidth - 1200) / 2 + 1200 : window.innerWidth)
        ) {
            pos.right = 0;
        } else {
            pos.left = 0;
        }

        if (ref.current.getBoundingClientRect().bottom + 300 > window.innerHeight) {
            pos.bottom = 0;
        } else {
            pos.top = 0;
        }

        setDirection(pos);
    }, []);

    const IconStyle = useMemo<IconProps>(
        () => ({
            size: 16,
            weight: 'bold',
            color: cv.text3,
        }),
        []
    );

    return (
        <ActionBoxDiv ref={ref}>
            <Button
                {...props}
                ref={buttonRef}
                onClick={(e) => {
                    calcPos();
                    setIsOpen(!isOpen);
                    if (props.onClick) props.onClick(e);
                }}
            >
                {children}
            </Button>
            <IconContext.Provider value={IconStyle}>
                {isOpen && (
                    <OverlayDiv
                        {...direction}
                        ref={overlayRef}
                        buttonHeight={(buttonRef.current?.offsetHeight && buttonRef.current.offsetHeight + 4) || 34}
                        removePadding={removePadding}
                    >
                        {overlay}
                    </OverlayDiv>
                )}
            </IconContext.Provider>
        </ActionBoxDiv>
    );
}
