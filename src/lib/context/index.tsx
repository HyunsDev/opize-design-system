import ModalContextProvider from "./modal/modalContext"


export function OpizeDesignSystemContextProvider({children}: {
    children: React.ReactElement
}) {
    return (
        <ModalContextProvider>
            {children}
        </ModalContextProvider>
    )
}