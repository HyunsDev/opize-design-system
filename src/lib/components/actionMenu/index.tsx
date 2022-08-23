/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-constructed-context-values */
import { IconContext } from 'phosphor-react';
import React, { ComponentProps, useCallback, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { cv } from '../../style';
import { Button, ButtonProps } from '..';

const ActionMenuDiv = styled.div`
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

const OverlayDiv = styled.div<{ top?: number; right?: number; bottom?: number; left?: number; buttonHeight: number }>`
    position: absolute;
    min-width: 230px;
    ${(props) => props.top !== undefined && `top: ${props.top + props.buttonHeight}px;`};
    ${(props) => props.right !== undefined && `right: ${props.right}px;`};
    ${(props) => props.bottom !== undefined && `bottom: ${props.bottom + props.buttonHeight}px;`};
    ${(props) => props.left !== undefined && `left: ${props.left}px;`};
    padding: 8px 0px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 10%);
    background-color: ${cv.bg_element1};
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    z-index: 10;
    border-radius: 6px;
    border: solid 1px ${cv.border3};
    animation: ${(props) => (props.top !== undefined ? FadeInFromTop : FadeInFromBottom)} 150ms
        cubic-bezier(0.07, 0.75, 0.54, 0.93);
`;

const ActionsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    width: 100%;
    padding: 0px 0px;

    border-bottom: solid 1px ${cv.border3};
    padding-bottom: 8px;
    margin-bottom: 8px;
    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }
`;

const ActionDiv = styled.div<{ color: 'normal' | 'red' }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 16px;
    border-radius: 4px;
    background-color: ${cv.bg_element1};
    cursor: pointer;
    transition: 100ms;
    user-select: none;
    color: ${(props) => (props.color === 'red' ? cv.red1 : cv.text2)};
    font-size: 0.875rem;
    line-height: 24px;

    &:hover {
        color: ${(props) => (props.color === 'red' ? cv.red1 : cv.text1)};
        background-color: ${(props) => (props.color === 'red' ? cv.bg_red1 : cv.bg_element2)};
    }
`;

export interface ActionMenuActionType {
    label: React.ReactNode;
    icon?: React.ReactNode;
    onClick: () => void;
    color?: 'normal' | 'red';
}

function Action({ icon, label, onClick, color = 'normal' }: ActionMenuActionType) {
    return (
        <ActionDiv onClick={() => onClick()} color={color}>
            <>
                {label}
                {icon}
            </>
        </ActionDiv>
    );
}

export interface ActionMenuProps extends ButtonProps {
    /**
     * ActionMenu의 액션
     */
    actions: ActionMenuActionType[][];
}

/**
 * 클릭했을 때 여러 버튼이 있는 오버레이를 표시하는 버튼입니다.
 *
 * \<Button\>에서 확장되었습니다.
 */
export function ActionMenu({ actions, children, ...props }: ActionMenuProps) {
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
        function handleClickOutside(e: any): void {
            if (ref.current && !ref.current.contains(e.target)) {
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

    const ActionClick = (onClick: () => void) => {
        setIsOpen(false);
        onClick();
    };

    return (
        <ActionMenuDiv ref={ref}>
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

            <IconContext.Provider
                value={{
                    size: 16,
                    weight: 'bold',
                    color: cv.text3,
                }}
            >
                {isOpen && (
                    <OverlayDiv {...direction} ref={overlayRef} buttonHeight={buttonRef.current?.offsetHeight || 30}>
                        {actions.map((e, i) => (
                            <ActionsDiv key={i}>
                                {e.map((action, ii) => (
                                    <Action key={ii} {...action} onClick={() => ActionClick(action.onClick)} />
                                ))}
                            </ActionsDiv>
                        ))}
                    </OverlayDiv>
                )}
            </IconContext.Provider>
        </ActionMenuDiv>
    );
}
