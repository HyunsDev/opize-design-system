import { X } from "phosphor-react"
import { ComponentProps, useEffect, useRef, useState } from "react"
import styled, {keyframes} from "styled-components"
import { cv } from "../../style"

const Divver = styled.div`

`

const FadeInFromBottom = keyframes`
    0% {
        transform: translateY(10px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`

const Background = styled.div<{isOpen: Boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(${cv.vh}*100);
    z-index: 99998;
    background-color: ${cv.black};
    transition: 200ms;
    opacity: ${props => props.isOpen ? 0.2 : 0};
`

const ModalBoxDivver = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(${cv.vh}*100);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;

    animation: ${FadeInFromBottom} 200ms cubic-bezier(0.07, 0.75, 0.54, 0.93);
`

const ModalBox = styled.div<{isOpen: boolean, width: number}>`
    background-color: ${cv.bg_page2};
    color: ${cv.text1};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
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
    color: ${cv.text1};
`

const CloseBtn = styled.div`
    cursor: pointer;
    padding: 6px;
    background-color: ${cv.bg_element7};
    transition: 200ms;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25565px;

    &:hover {
        background-color: ${cv.bg_element8};
    }
`

export function Modal(props: {
    setOpen: Function
    isOpen: boolean
    content: React.ReactElement
    width: number
    title?: string
    close: Function
}) {
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
                                { props.title && <ModalTitleBox>
                                    <ModalTitle>{props.title}</ModalTitle>
                                    <CloseBtn onClick={() => props.close()}><X /></CloseBtn>
                                </ModalTitleBox> }
                                { props.content }
                            </ModalBox>
                        </ModalBoxDivver>
                    </Divver>
                )
            }
        </>
    )
}

export type ModalProps = ComponentProps<typeof Modal>