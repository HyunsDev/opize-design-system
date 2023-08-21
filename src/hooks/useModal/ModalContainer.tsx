import { useCallback, useEffect, useRef, useState } from 'react';
import {
    StyledModalContainer,
    StyledModalContainerWrapper,
    StyledModalOverlay,
} from './ModalContainer.style';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    children: React.ReactNode;
    isPadding: boolean;
    width: string;
}

export function ModalContainer({ isOpen, setIsOpen, children, isPadding, width }: ModalProps) {
    const [isShow, setIsShow] = useState(false);
    const timer = useRef<NodeJS.Timeout>();
    const ref = useRef<HTMLDivElement>(null);

    const openModal = () => {
        setIsShow(true);
    };

    const closeModal = useCallback(() => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            setIsOpen(false);
            setIsShow(false);
        }, 300);
    }, [setIsOpen]);

    useEffect(() => {
        if (isOpen) {
            openModal();
        } else {
            closeModal();
        }
    }, [closeModal, isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsOpen]);

    if (isShow) {
        return (
            <StyledModalContainerWrapper $isOpen={isOpen}>
                <StyledModalOverlay $isOpen={isOpen} />
                <StyledModalContainer
                    $isOpen={isOpen}
                    $width={width}
                    $isPadding={isPadding}
                    ref={ref}
                >
                    {children}
                </StyledModalContainer>
            </StyledModalContainerWrapper>
        );
    }
    return null;
}
