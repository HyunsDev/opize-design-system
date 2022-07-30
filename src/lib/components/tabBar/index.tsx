import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const Div = styled.div`
    border-bottom: solid 1px var(--gray3);
    align-items: center;
    display: flex;
    position: relative;
    gap: 0px;
    margin-top: 8px;
    padding: 4px ;
`

const ItemDivver = styled.div`
    padding-bottom: 4px;
`

const Item = styled.div`
    padding: 4px 12px;
    cursor: pointer;
    border-radius: 4px;
    user-select: none;
    transition: 200ms;

    &:hover {
        background-color: var(--gray1);
    }
`

interface UnderLineIF {
    left: number;
    width: number;
}

const UnderLine = styled.div`
    position: absolute;
    transition: 100ms, left 200ms cubic-bezier(0, 0.61, 0.4, 1.15);
    bottom: 0;
    left: ${(props: UnderLineIF) => props.left || 0}px;
    width: ${(props: UnderLineIF) => props.width}px;
    height: 1px;
    border-bottom: solid 2px var(--gray5);
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
export function TabBar(props: Props) {
    const DivRef = useRef<any>(null)
    const targets = useRef<any>({})
    const [select, setSelect] = useState<any>('')
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const res = Object.entries(props.menu).map(e => {
            if (props.selected === e[0]) {
                return e[0]
            }
            return null 
        }).filter(Boolean)
        setSelect(res[res.length - 1])
    }, [props.selected, props.menu])

    useEffect(() => {
        setWidth(targets.current[select]?.offsetWidth)
    }, [select, props.selected])

    return (
        <Div ref={DivRef}>
            {
                Object.entries(props.menu).map(e => {
                    return (
                        <ItemDivver key={e[0]} ref={el => targets.current[e[0]] = el}>

                            {

                                <Item onClick={() => e[1].onClick && e[1].onClick()}>{e[1].text}</Item>
                            }

                            
                        </ItemDivver>
                    )
                })
            }
            <UnderLine width={width} left={targets.current[select]?.getBoundingClientRect().left - DivRef.current?.getBoundingClientRect().left} />
        </Div>
    )
}