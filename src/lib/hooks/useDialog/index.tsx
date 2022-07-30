import { useContext, useMemo } from "react";
import styled from "styled-components";
import { Button, ButtonProps } from "../../components";
import { ModalContext } from "../../context/modal/modalContext";

const Buttons = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

type DialogButtonType = (ButtonProps & { closeModal?: boolean })

function DialogScreen(props: {
    content?: string
    close: Function,
    buttons: DialogButtonType[]
}) {
    return (
        <>
            { props.content }
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

        modal.open(<DialogScreen close={modal.close} content={content} buttons={MappedButtons} />, title)
    }
}