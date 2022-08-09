import React, { useContext } from "react";
import styled from "styled-components";
import { Button, ButtonProps } from "../../components";
import { ModalContext } from "../../context/modal/modalContext";
import { cv } from "../../style";

const Padding = styled.div`
    padding: 16px;
    padding-bottom: 0px;
    font-size: .875rem;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 8px;
`

const Buttons = styled.div`
    background-color: ${cv.bg_element2};
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    border-top: solid 1px ${cv.border3};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    font-size: .875rem;
    padding: 6px 8px;
`

type DialogButtonType = (ButtonProps & { closeModal?: boolean, onClick: Function })

function DialogScreen(props: {
    content?: string
    close: Function,
    buttons: DialogButtonType[],
    title?: string
}) {
    return (
        <>
            <Padding>
                { props.title && <Title>{props.title}</Title> }
                { props.content }
            </Padding>
            <Buttons>
                {
                    props.buttons.map(e => <Button {...e} />)
                }
            </Buttons>
        </>
    )
}

export function useDialog() {
    const modal = useContext(ModalContext)

    return (title: string, buttons: DialogButtonType[], content?: string, notAutoClose?: boolean) => {
        const MappedButtons = buttons.map((e: (DialogButtonType)) => ({
            ...e,
            onClick: () => { e.onClick(); (!notAutoClose || e.closeModal) && modal.close() }
        }))

        modal.open(<DialogScreen close={modal.close} content={content} buttons={MappedButtons} title={title} />, undefined, undefined, false)
    }
}