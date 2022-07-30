import { IconContext } from "phosphor-react"
import { useCallback, useEffect, useRef, useState } from "react"
import styled, { keyframes } from "styled-components"

const ActionMenuDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: fit-content;
`

const ButtonDiv = styled.div<{isOpen: boolean, onlyIcon: boolean}>`
    padding: ${props => props.onlyIcon ? '6px' : '6px 12px'};
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 200ms;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    
    border-radius: ${props => props.onlyIcon ? '99999px' : '4px'};
    background-color: ${props => props.isOpen ? 'var(--gray1)' : '#ffffff'};

    &:hover {
        background-color: var(--gray1);
    }
`

const FadeInFromTop = keyframes`
    0% {
        transform: translateY(-5px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`

const FadeInFromBottom = keyframes`
    0% {
        transform: translateY(5px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`

const OverlayDiv = styled.div<{top?: number, right?: number; bottom?: number, left?:number}>`
    position: absolute;
    min-width: 200px;
    ${props => props.top !== undefined && `top: ${props.top + 30}px;`};
    ${props => props.right !== undefined && `right: ${props.right}px;`};
    ${props => props.bottom !== undefined && `bottom: ${props.bottom + 30}px;`};
    ${props => props.left !== undefined && `left: ${props.left}px;`};
    padding: 8px 0px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 8%);
    background-color: #ffffff;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    z-index: 10;
    border-radius: 8px;
    border: solid 1px var(--gray3);
    animation: ${props => props.top !== undefined ? FadeInFromTop : FadeInFromBottom} 180ms cubic-bezier(0.07, 0.75, 0.54, 0.93);
`

const ActionsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    width: 100%;
    padding: 0px 8px;

    border-bottom: solid 1px var(--gray3);
    padding-bottom: 8px;
    margin-bottom: 8px;
    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }
`

const ActionDiv = styled.div<{color: 'normal' | 'red'}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: #ffffff;
    cursor: pointer;
    transition: background-color 50ms;
    user-select: none;
    ${props => props.color === 'red' && 'color: var(--status-red)'};

    &:hover {
        background-color: ${props => props.color === 'red' ? 'var(--status-red-background)' : 'var(--gray1)'};
    }
`

export interface ActionType {
    label: string,
    icon: React.ReactElement,
    onClick: Function
    color?: 'normal' | 'red'
}

function Action({icon, label, onClick, color = 'normal'}: ActionType) {
    return (
        <ActionDiv onClick={() => onClick()} color={color}>
            <>
                { label }
                { icon }
            </>
        </ActionDiv>
    )
}

export function ActionMenu({actions, label, icon}: {
    actions: ActionType[][],
    label?: string,
    icon?: React.ReactElement
}) {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ direction, setDirection ] = useState<{
        top?: number,
        right?: number, 
        bottom?: number,
        left?: number
    }>({})

    const ref = useRef<HTMLDivElement>(null);
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
        if (!ref.current) return

        let pos: {
            top?: number,
            right?: number, 
            bottom?: number,
            left?: number
        } = {}

        if (ref.current.getBoundingClientRect().right + 250 > window.innerWidth) {
            pos.right = 0
        } else {
            pos.left = 0
        }

        if (ref.current.getBoundingClientRect().bottom + 300 > window.innerHeight) {
            pos.bottom = 0
        } else {
            pos.top = 0
        }

        setDirection(pos)
    }, [])

    const ActionClick = (onClick: Function) => {
        setIsOpen(false)
        onClick()
    }

    return (
        <ActionMenuDiv ref={ref}>
            <ButtonDiv onClick={() => {calcPos(); setIsOpen(!isOpen)}} isOpen={isOpen} onlyIcon={!!icon && !label} >
                {icon}
                {label}       
            </ButtonDiv>
            <IconContext.Provider
                value={{
                    size: 16,
                    weight: 'bold',
                    color: 'var(--gray5)'
                }}    
            >
                {
                    isOpen && <OverlayDiv {...direction} ref={overlayRef}>
                        {
                            actions.map((e, i) => <ActionsDiv key={i}>
                                {
                                    e.map((action, ii) => <Action key={ii} {...action} onClick={() => (ActionClick(action.onClick))} />)
                                }
                            </ActionsDiv>)
                        }
                    </OverlayDiv>
                }
            </IconContext.Provider>
        </ActionMenuDiv>
        
    )
}