import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

const Divver = styled.div`
`

const Background = styled.div<{isOpen: Boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(var(--vh)*100);
    z-index: 99998;
    background-color: rgb(0, 0, 0);
    transition: 200ms;
    opacity: ${props => props.isOpen ? 0.2 : 0};
`

const ModalBoxDivver = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(var(--vh)*100);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
`

const ModalBox = styled.div<{isOpen: boolean, width: number}>`
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 16px;
    pointer-events: auto;
    min-width: ${props => props.width}px;
    max-width: 80vw;

    transition: 200ms;
    opacity: ${props => props.isOpen ? 1 : 0};
`

const ModalTitle = styled.div`
    font-weight: 700;
    font-size: 20px;
`

const ModalTitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`

interface ModalProps {
    setOpen: Function
    isOpen: boolean
    content: React.ReactElement
    width: number
    title?: string
}

export function Modal(props: ModalProps) {
    const timer = useRef<any>(0)
    const [ isOpen, setOpen ] = useState(props.isOpen)

    useEffect(() => {
        clearTimeout(timer.current)
        if (props.isOpen) {
            setOpen(props.isOpen)
        } else {
            timer.current = setTimeout(() => {
                setOpen(props.isOpen)
            }, 200)
        }
    }, [props.isOpen])

    return (
        <>
            {
                isOpen && (
                    <Divver>
                        <Background isOpen={props.isOpen} onClick={() => props.setOpen(false)} />
                        <ModalBoxDivver>
                            <ModalBox isOpen={props.isOpen} width={props.width}>
                                { props.title && <ModalTitleBox><ModalTitle>{props.title}</ModalTitle></ModalTitleBox> }
                                { props.content }
                            </ModalBox>
                        </ModalBoxDivver>
                    </Divver>
                )
            }
        </>
    )
}