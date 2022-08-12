import React, { useContext } from "react";
import styled from "styled-components";
import { Button, ButtonProps } from "../../components";
import { ModalContext } from "../useModal/modalContext";
import { cv } from "../../style";
import { IconContext } from "phosphor-react";

const Padding = styled.div`
    padding: 16px;
    padding-bottom: 0px;
    font-size: .875rem;
`

const Icon = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0px 20px;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 8px;
`

const Content = styled.div`
    
`

const Buttons = styled.div`
    /* background-color: ${cv.bg_element2}; */
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    /* border-top: solid 1px ${cv.border4}; */
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    font-size: .875rem;
    padding: 12px 16px;

    & > button {
        flex: 1;
    }
`

type DialogButtonType = (ButtonProps & { closeModal?: boolean, onClick: Function })

function DialogScreen(props: {
    content?: string
    close: Function,
    buttons: DialogButtonType[],
    title?: string
    icon?: React.ReactNode
}) {
    return (
        <>
            <Padding>
                { props.icon && <Icon><IconContext.Provider value={{size: 28, weight: 'bold' }}>{props.icon}</IconContext.Provider></Icon>}
                { props.title && <Title>{props.title}</Title> }
                { props.content && <Content>{props.content}</Content> }
            </Padding>
            <Buttons>
                {
                    props.buttons.map((e, i) => <Button key={i} {...e} />)
                }
            </Buttons>
        </>
    )
}

export function useDialog() {
    const modal = useContext(ModalContext)

    return ({title, buttons, content, notAutoClose, icon}: {title: string, buttons: DialogButtonType[], content?: string, notAutoClose?: boolean, icon?: React.ReactNode}) => {
        const MappedButtons = buttons.map((e) => ({
            ...e,
            onClick: () => { e.onClick(); (!notAutoClose || e.closeModal) && modal.close() }
        }))

        modal.open(<DialogScreen close={modal.close} content={content} buttons={MappedButtons} title={title} icon={icon} />, {
            isPadding: false
        })
    }
}