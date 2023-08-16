import React from 'react';
import {
    StyledModalContainer,
    StyledModalContent,
    StyledModalFooter,
    StyledModalHeader,
} from './Modal.style';

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

export const Modal = Object.assign(ModalContainer, {
    Header: StyledModalHeader,
    Content: StyledModalContent,
    Footer: StyledModalFooter,
});
