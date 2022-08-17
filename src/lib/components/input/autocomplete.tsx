import { TextField, TextFieldProps } from ".";
import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import styled, { css, keyframes } from "styled-components";
import { cv } from "../../style";

type AutocompleteItem = {
    text: string
    id: number
}
export type AutocompleteProps = TextFieldProps & {
    items: AutocompleteItem[],
    type?: 'text' | 'password' | 'search' | 'url' | 'email',
}

const Div = styled.div`
    position: relative;
`

const SPACE = '​'

const FadeInFromTop = keyframes`
    0% {
        transform: translateY(-4px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`

const FadeInFromBottom = keyframes`
    0% {
        transform: translateY(4px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`

const OverlayDiv = styled.div<{top?: number, right?: number; bottom?: number, left?:number, paddingHeight: number}>`
    position: absolute;
    min-width: 230px;
    ${props => props.top !== undefined && `top: ${props.top + props.paddingHeight}px;`};
    ${props => props.right !== undefined && `right: ${props.right}px;`};
    ${props => props.bottom !== undefined && `bottom: ${props.bottom + props.paddingHeight}px;`};
    ${props => props.left !== undefined && `left: ${props.left}px;`};
    padding: 8px 0px;
    box-shadow: 0 8px 30px rgba(0,0,0,10%);
    background-color: ${cv.bg_element1};
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    z-index: 10;
    border-radius: 6px;
    border: solid 1px ${cv.border3};
    animation: ${props => props.top !== undefined ? FadeInFromTop : FadeInFromBottom} 150ms cubic-bezier(0.07, 0.75, 0.54, 0.93);
`

const OverlayItem = styled.div<{isHover: boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 16px;
    border-radius: 4px;
    background-color: ${cv.bg_element1};
    cursor: pointer;
    transition: 100ms;
    user-select: none;
    color: ${cv.text2};
    font-size: .875rem;
    line-height: 24px;

    ${props => props.isHover && css`
        color: ${cv.text1};
        background-color: ${cv.bg_element3};
    `}

    &:hover {
        color: ${cv.text1};
        background-color: ${cv.bg_element3};
    }
`

function Item(props: {id: number, text: string, onClick: Function, isHover?: boolean, onMouseOver: Function}) {
    return (
        <OverlayItem key={props.id} onClick={() => props.onClick()} isHover={props.isHover || false} onMouseOver={() => props.onMouseOver()}>
            {props.text}
        </OverlayItem>
    )
}

export const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    const [ currentItems, setCurrentItems ] = useState(props.items)
    const [ value, setValue ] = useState<string>(String(props.value || ''))
    const currentValue = useRef<string>(String(props.value || ''))
    const [ autocompleteSuggestion, setAutocompleteSuggestion ] = useState<string|null>('')
    const [ isHighlight, setHighlight ] = useState(false)
    const [ isOpen, setIsOpen ] = useState(false)
    const [ cursor, setCursor ] = useState(props.items[0].id)
    const [ direction, setDirection ] = useState<{
        top?: number,
        right?: number, 
        bottom?: number,
        left?: number
    }>({})
    const outRef = useRef<HTMLDivElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: any): void {
            if (outRef.current && !outRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    const calcPos = useCallback(() => {
        if (!outRef.current) return
        let pos: {
            top?: number,
            right?: number, 
            bottom?: number,
            left?: number
        } = {}

        if (outRef.current.getBoundingClientRect().right + 250 > (window.innerWidth >= 1200 ? (window.innerWidth - 1200)/2 + 1200 : window.innerWidth) ) {
            pos.right = 0
        } else {
            pos.left = 0
        }
        if (outRef.current.getBoundingClientRect().bottom + 300 > window.innerHeight) {
            pos.bottom = 0
        } else {
            pos.top = 0
        }
        setDirection(pos)
    }, [])

    const onInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        props.onInput && props.onInput(e)
    }, [props])

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setIsOpen(true)
        currentValue.current = e.target.value.replaceAll(SPACE, '')
        setValue(currentValue.current)
        const newCurrentItems = props.items.filter(item => item.text.startsWith(e.target.value))
        setCurrentItems(newCurrentItems)
        if (!props.items.find(e => e.id === cursor)?.text.startsWith(e.target.value)) {
            setCursor(newCurrentItems[0]?.id || -1)
        }

        if (newCurrentItems.length === 1 && currentValue.current === currentItems.find(e => e.id === cursor)?.text) {
            setHighlight(false)
        }

        setTimeout(() => {
            if (inputRef.current) {
                const event = new Event('change', { bubbles: true })
                props.onChange && props.onChange({
                    ...event,
                    nativeEvent: event,
                    isDefaultPrevented: () => e.isDefaultPrevented(),
                    isPropagationStopped: () => e.isPropagationStopped(),
                    persist: () => e.persist(),
                    target: inputRef.current,
                    currentTarget: inputRef.current
                })
            }
        }, 0)
    }, [currentItems, cursor, props])

    const onFocus = useCallback((e: React.FocusEvent<HTMLInputElement, Element>) => {
        props.onFocus && props.onFocus(e)

        calcPos()
        setIsOpen(true)

        const newCurrentItems = props.items.filter(item => item.text.startsWith(value))
        setCurrentItems(newCurrentItems)
        if (!props.items.find(e => e.id === cursor)?.text.startsWith(value)) {
            setCursor(newCurrentItems[0]?.id || -1)
        }
    }, [calcPos, cursor, props, value])

    const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'ArrowUp') {
            setCursor(prev => {
                const index = currentItems.findIndex(e => e.id === prev)
                if (currentItems[index - 1]) {
                    return currentItems[index - 1].id
                } else {
                    return currentItems[currentItems.length - 1].id
                }
            })
            e.preventDefault()
        } else if (e.code === 'ArrowDown') {
            setCursor(prev => {
                const index = currentItems.findIndex(e => e.id === prev)
                if (currentItems[index + 1]) {
                    return currentItems[index + 1].id
                } else {
                    return currentItems[0].id
                }
            })
            e.preventDefault()
        } else if (e.code === 'Tab') {
            setCursor(prev => {
                const index = currentItems.findIndex(e => e.id === prev)
                if (currentItems[index + 1]) {
                    return currentItems[index + 1].id
                } else {
                    return currentItems[0].id
                }
            })
            e.preventDefault()
        } else if (e.code === 'Enter') {
            const text = currentItems.find(e => e.id === cursor)?.text
            if (text) {
                setValue(text)
                setIsOpen(false)
                currentValue.current = text
                setHighlight(false)
                inputRef.current?.blur()
                setTimeout(() => {
                    const event = new Event('change', { bubbles: true })
                    props.onChange && props.onChange({
                        ...event,
                        nativeEvent: event,
                        isDefaultPrevented: () => false,
                        isPropagationStopped: () => false,
                        persist: () => null,
                        target: inputRef.current,
                        currentTarget: inputRef.current
                    } as React.ChangeEvent<HTMLInputElement>)
                }, 0)
            }
        } else if (e.code === 'Escape') {
            setValue('')
            inputRef.current?.blur()
            setIsOpen(false)
        }
        
        if (e.code === 'Backspace') {
            console.log("a", currentValue.current, autocompleteSuggestion)
            console.log("b", window.getSelection()?.toString(), autocompleteSuggestion?.slice(currentValue.current.length, autocompleteSuggestion?.length))
            if (window.getSelection()?.toString() === autocompleteSuggestion?.slice(currentValue.current.length, autocompleteSuggestion?.length)) {
                if (isHighlight) {
                    setValue(currentValue.current + ' ')
                }
            }
            
            setHighlight(false)
        } else {
            setHighlight(true)
        }

        if(autocompleteSuggestion && currentValue.current.length < autocompleteSuggestion?.length) {
            setAutocompleteSuggestion(prev => (prev?.replaceAll(SPACE, '') || '') + SPACE )
        }

        props.onKeyDown && props.onKeyDown(e)
    }, [autocompleteSuggestion, currentItems, cursor, isHighlight, props])

    const onKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        props.onKeyPress && props.onKeyPress(e)

        if (autocompleteSuggestion && inputRef.current) {
            if (currentValue.current.length + 1 === autocompleteSuggestion.length) {
                setValue(currentValue.current)
                currentValue.current = autocompleteSuggestion
            }
        }
    }, [autocompleteSuggestion, props])

    const onKeyUp = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(currentValue.current)
        props.onKeyUp && props.onKeyUp(e)
    }, [props])

    const onItemClick = (id: number) => {
        const itemValue = currentItems.find(e => e.id === id)?.text || ''
        currentValue.current = itemValue
        setValue(itemValue)
        const newCurrentItems = props.items.filter(item => item.text.startsWith(itemValue))
        setCurrentItems(newCurrentItems)
        setCursor(id)
        setHighlight(false)
        setAutocompleteSuggestion(itemValue)

        if (inputRef.current) {
            inputRef.current.setAttribute('value', itemValue);
            inputRef.current.dispatchEvent(new Event('change', { bubbles: true }));
            
            setTimeout(() => {
                const event = new Event('change', { bubbles: true })
                props.onChange && props.onChange({
                    ...event,
                    nativeEvent: event,
                    isDefaultPrevented: () => false,
                    isPropagationStopped: () => false,
                    persist: () => null,
                    target: inputRef.current,
                    currentTarget: inputRef.current
                } as React.ChangeEvent<HTMLInputElement>)
            }, 0)
        }
        setIsOpen(false)
    }

    useEffect(() => {
        setAutocompleteSuggestion(currentItems.find(e => e.id === cursor)?.text || null)
    }, [currentItems, cursor])

    useEffect(() => {
        if (!inputRef.current) return
        if (isHighlight && autocompleteSuggestion && value) {
            if (autocompleteSuggestion.includes(value)) {
                inputRef.current.setSelectionRange(currentValue.current.length, autocompleteSuggestion.length)
            }
        }
    }, [autocompleteSuggestion, isHighlight, value])

    return (
        <Div ref={outRef}>
            <TextField {...props} ref={inputRef} 
                onInput={e => onInput(e)}
                onChange={e => onChange(e)}
                onKeyDown={e => onKeyDown(e)}
                onKeyUp={e => onKeyUp(e)}
                onKeyPress={e => onKeyPress(e)}
                onFocus={e => onFocus(e)}
                value={value.length === 0 ? value : isHighlight ? autocompleteSuggestion || value : value}
            />
            { isOpen && currentItems.length !== 0 && <OverlayDiv {...direction} ref={overlayRef} paddingHeight={40}>
                {
                    currentItems.map((e, i) => <Item key={e.id} id={e.id} text={e.text} onClick={() => onItemClick(e.id)} isHover={e.id === cursor} onMouseOver={() => setCursor(e.id)} />)
                }
                
            </OverlayDiv>}
        </Div>
    )
})