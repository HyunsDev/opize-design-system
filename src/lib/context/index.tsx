import ModalContextProvider from "../hooks/useModal/modalContext"
import TopLoadingContextProvider from "../hooks/useTopLoading/context"
import React from 'react'

export function OpizeContextProvider({children}: {
    children: React.ReactElement
}) {
    return (
        <ModalContextProvider>
            <TopLoadingContextProvider>
                {children}
            </TopLoadingContextProvider>
        </ModalContextProvider>
    )
}