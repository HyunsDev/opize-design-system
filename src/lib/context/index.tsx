import ModalContextProvider from "./modal/modalContext"
import TopLoadingContextProvider from "./topLoading/topLoadingContext"
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