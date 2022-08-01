import ModalContextProvider from "./modal/modalContext"


export function OpizeContextProvider({children}: {
    children: React.ReactElement
}) {
    return (
        <ModalContextProvider>
            {children}
        </ModalContextProvider>
    )
}