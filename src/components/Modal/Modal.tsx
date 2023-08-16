import React from 'react';
import { StyledModalContainer, ModalContent, ModalFooter, ModalHeader } from './Modal.style';

export type ModalProps = React.ComponentPropsWithRef<'div'> & {
    width?: string;
};

const ModalContainer = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
    const { children, width = '400px', ...otherProps } = props;

    return (
        <StyledModalContainer
            ref={ref}
            $width={width}
            {...otherProps}
        >
            {children}
        </StyledModalContainer>
    );
});

ModalContainer.displayName = 'Modal';

export { ModalHeader, ModalContent, ModalFooter };
export const Modal = Object.assign(ModalContainer, {
    Header: ModalHeader,
    Content: ModalContent,
    Footer: ModalFooter,
});
