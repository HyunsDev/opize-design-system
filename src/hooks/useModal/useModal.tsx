import { useContext } from 'react';
import { ModalContext } from './Modal.context';

export function useModal() {
    return useContext(ModalContext);
}
