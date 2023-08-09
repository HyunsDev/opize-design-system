import React, { useEffect, useRef, useState, useCallback, useContext } from 'react';

import styled from 'styled-components';

import { TabNavActionContext, TabNavValueContext } from '../../context/tabNavContext/tabNavContext';
import { cv } from '../../style';

const Div = styled.div`
    border-bottom: solid 1px ${cv.border4};
    align-items: center;
    display: flex;
    position: relative;
    gap: 0px;
    width: 100%;
`;

const ItemDivver = styled.div`
    padding-bottom: 6px;
    z-index: 1;
`;

const Item = styled.div<{ selected?: boolean }>`
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 4px;
    user-select: none;
    transition: 200ms;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => (props.selected ? cv.text1 : cv.text2)};
    &:hover {
        color: ${cv.text1};
    }
`;

interface FlowProps {
    left: number;
    width: number;
}

const Underline = styled.div<FlowProps>`
    position: absolute;
    transition: 100ms, left 200ms cubic-bezier(0, 0.61, 0.4, 1.15);
    bottom: -1px;
    left: ${(props) => props.left + 8 || 4}px;
    width: ${(props) => props.width - 16}px;
    height: 1px;
    border-bottom: solid 2px ${cv.border1};
`;

const HoverBox = styled.div<FlowProps & { show: boolean }>`
    position: absolute;
    transition: 200ms, transform 150ms ease;
    height: 32px;
    user-select: none;
    border-radius: 4px;
    transform: translateX(${(props) => props.left}px);
    width: ${(props) => props.width}px;
    margin-bottom: 4px;
    background-color: rgba(0, 0, 0, 0);
    ${(props) => props.show && `background-color: ${cv.bg_element3}`};
`;

export interface TabNavProps {
    /**
     * context를 사용하여 위치 정보를 저장할 지 여부입니다. 화면 당 한 컴포넌트만 사용할 수 있습니다.
     */
    hasContext?: boolean;
    /**
     * 현재 선택된 메뉴의 아이디입니다.
     */
    selected: string;
    /**
     * TabNav의 메뉴입니다.
     */
    menu: {
        [id: string]: {
            text: React.ReactNode;
            onClick: () => void;
        };
    };
}

/**
 * 탭 이동을 위한 네비게이션 바입니다.
 */
export function TabNav({ selected, menu, hasContext }: TabNavProps) {
    const ref = useRef<HTMLDivElement>(null);
    const targets = useRef<{ [key: string]: HTMLDivElement }>({});
    const hoverTimer = useRef<NodeJS.Timeout>();
    const { lastHoverBoxStyle, lastUnderlineStyle } = useContext(TabNavValueContext);
    const { setLastHoverBoxStyle, setLastUnderlineStyle } = useContext(TabNavActionContext);
    const [underlineStyle, setUnderlineStyle] = useState(
        hasContext ? lastUnderlineStyle : { width: 0, left: 0 }
    );
    const [hoverBoxStyle, setHoverBoxStyle] = useState(
        hasContext ? lastHoverBoxStyle : { width: 0, left: 0, show: false }
    );

    useEffect(() => {
        const style = {
            width: targets.current[selected]?.offsetWidth,
            left:
                Number(targets.current[selected]?.getBoundingClientRect().left) -
                Number(ref.current?.getBoundingClientRect().left),
        };
        setUnderlineStyle(style);
        setLastUnderlineStyle(style);
    }, [selected, setLastUnderlineStyle]);

    const hover = useCallback(
        (key: string) => {
            if (hoverTimer.current) clearTimeout(hoverTimer.current);
            const style = {
                width: targets.current[key]?.offsetWidth,
                left:
                    Number(targets.current[key]?.getBoundingClientRect().left) -
                    Number(ref.current?.getBoundingClientRect().left),
                show: true,
            };
            setHoverBoxStyle(style);
            setLastHoverBoxStyle({
                ...style,
                show: false,
            });
        },
        [setLastHoverBoxStyle]
    );

    const mouseLeave = useCallback(() => {
        hoverTimer.current = setTimeout(() => {
            setHoverBoxStyle((prev) => ({
                ...prev,
                show: false,
            }));
        }, 10);
    }, []);

    return (
        <Div ref={ref}>
            <Underline {...underlineStyle} />
            <HoverBox {...hoverBoxStyle} />
            {Object.entries(menu).map((e) => {
                return (
                    <ItemDivver
                        key={e[0]}
                        ref={(el) => {
                            targets.current[e[0]] = el as HTMLDivElement;
                        }}
                        onMouseOver={() => hover(e[0])}
                        onMouseLeave={mouseLeave}
                    >
                        <Item
                            selected={e[0] === selected}
                            onClick={() => e[1].onClick && e[1].onClick()}
                        >
                            {e[1].text}
                        </Item>
                    </ItemDivver>
                );
            })}
        </Div>
    );
}
