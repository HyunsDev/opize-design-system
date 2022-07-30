import { useContext } from "react";
import { CodeBlock } from "../../components";
import { ModalContext } from "../../context/modal/modalContext";


export function useModal() {
    return useContext(ModalContext)
}

export function useCodeModal() {
    const modal = useModal()

    return (title: string, code: any) => {
        modal.open((<CodeBlock>{JSON.stringify(code, null, 2)}</CodeBlock>), title)
    }
}