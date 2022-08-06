import React, { createContext, useCallback, useState } from "react";
import { Modal } from "../../components/modal";

export interface ModalContextProps {
    isOpen: boolean
    open: (content: React.ReactElement, title?: string, width?: number, isPadding?: boolean) => void
    close: Function
    width: number
    title?: string
}

export const ModalContext = createContext<ModalContextProps>({
    isOpen: false,
    open: () => null,
    close: () => null,
    width: 350,
})

const ModalContextProvider = ({children}: {children: React.ReactElement}) => {
    const [ isOpen, setOpen ] = useState(false)
    const [ content, setContent ] = useState(<></>)
    const [ width, setWidth ] = useState(350)
    const [ title, setTitle ] = useState<undefined | string>()
    const [ isPadding, setPadding ] = useState(true)

    const open = useCallback((content: React.ReactElement, title?: string, width?:number, isPadding: boolean = true) => {
        setOpen(true)
        setTitle(title)
        setWidth(width || 350)
        setContent(content)
        setPadding(isPadding)
    }, [])

    const close = useCallback((content: React.ReactElement) => {
        setOpen(false)
    }, [])

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                open,
                close,
                width,
                title
            }}
        >
            <Modal
                setOpen={setOpen}
                isOpen={isOpen}
                content={content}
                width={width}
                title={title}
                close={() => setOpen(false)}
                isPadding={isPadding}
            />

            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider;
