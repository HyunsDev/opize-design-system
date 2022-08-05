import styled from "styled-components";
import { useEffect, useRef, useState, useCallback, ComponentProps } from "react";
import { cv } from "../../style";

const Div = styled.div`
    border-bottom: solid 1px ${cv.border4};
    align-items: center;
    display: flex;
    position: relative;
    gap: 0px;
    width: 100%;
`

const ItemDivver = styled.div`
    padding-bottom: 6px;
    z-index: 1;
`

const Item = styled.div<{selected?: boolean}>`
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 4px;
    user-select: none;
    transition: 200ms;
    font-weight: 400;
    font-size: .875rem;
    color: ${props => props.selected ? cv.text1 : cv.text2};
    &:hover {
        color: ${cv.text1};
    }
`

interface FlowProps {
    left: number;
    width: number;
}

const Underline = styled.div<FlowProps>`
    position: absolute;
    transition: 100ms, left 200ms cubic-bezier(0, 0.61, 0.4, 1.15);
    bottom: -1px;
    left: ${props => props.left + 8 || 4}px;
    width: ${props => props.width - 16}px;
    height: 1px;
    border-bottom: solid 2px ${cv.border1};
`

const HoverBox = styled.div<FlowProps & {show: boolean}>`
    position: absolute;
    transition: 200ms, transform 150ms ease;
    height: 32px;
    user-select: none;
    border-radius: 4px;
    transform: translateX(${props => props.left}px);
    width: ${props => props.width}px;
    margin-bottom: 4px;
    background-color: rgba(0,0,0,0);
    ${props => props.show && `background-color: ${cv.bg_element3}`};
`

interface Props {
    selected: string;
    menu: {
        [key: string]: {
            text: string,
            onClick: Function,
        }
    }
}
export function TabNav(props: Props) {
    const ref = useRef<any>(null)
    const targets = useRef<any>({})
    const hoverTimer = useRef<any>(null)
    const [ underlineStyle , setUnderlineStyle ] = useState({ width: 0, left: 0 })
    const [ hoverBoxStyle, setHoverBoxStyle ] = useState({ width: 0, left: 0, show: false })

    useEffect(() => {
        setUnderlineStyle({
            width: targets.current[props.selected]?.offsetWidth,
            left: targets.current[props.selected]?.getBoundingClientRect().left - ref.current?.getBoundingClientRect().left
        })
    }, [props.selected])

    const hover = useCallback((key: string) => {
        clearTimeout(hoverTimer.current)
        setHoverBoxStyle({
            width: targets.current[key]?.offsetWidth,
            left: targets.current[key]?.getBoundingClientRect().left - ref.current?.getBoundingClientRect().left,
            show: true
        })
    }, [])

    const mouseLeave = useCallback(() => {
        hoverTimer.current = setTimeout(() => {
            setHoverBoxStyle(prev => ({
                ...prev,
                show: false
            }))
        }, 10)
    }, [])

    return (
        <Div ref={ref}>
            <Underline {...underlineStyle} />
            <HoverBox {...hoverBoxStyle} />
            {
                Object.entries(props.menu).map(e => {
                    return (
                        <ItemDivver key={e[0]} ref={el => targets.current[e[0]] = el} onMouseOver={() => hover(e[0])} onMouseLeave={mouseLeave} >
                            <Item selected={e[0] === props.selected} onClick={() => e[1].onClick && e[1].onClick()}>{e[1].text}</Item>
                        </ItemDivver>
                    )
                })
            }
        </Div>
    )
}

export type TabNavProps = ComponentProps<typeof TabNav>