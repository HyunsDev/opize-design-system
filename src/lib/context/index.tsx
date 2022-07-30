import ModalContextProvider from "./modal/modalContext"


export function ODSContextWrapper({children}: {
    children: React.ReactElement
}) {
    return (
        <ModalContextProvider>
            {children}
        </ModalContextProvider>
    )
}