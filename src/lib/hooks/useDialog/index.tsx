import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { IconContext, IconProps } from 'phosphor-react';
import { Button, ButtonProps } from '../../components';
import { ModalContext } from '../useModal/modalContext';
import { cv } from '../../style';

const Padding = styled.div`
    padding: 16px;
    padding-bottom: 0px;
    font-size: 0.875rem;
`;

const Icon = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0px 20px;
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 8px;
`;

const Content = styled.div``;

const Buttons = styled.div`
    /* background-color: ${cv.bg_element2}; */
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    /* border-top: solid 1px ${cv.border4}; */
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    font-size: 0.875rem;
    padding: 12px 16px;
`;

type DialogButtonType = ButtonProps & { closeModal?: boolean; onClick: () => void };

function DialogScreen({
    content,
    close,
    buttons,
    title,
    icon,
}: {
    content?: string;
    close: () => void;
    buttons: DialogButtonType[];
    title?: string;
    icon?: React.ReactNode;
}) {
    const iconStyle = useMemo<IconProps>(() => ({ size: 28, weight: 'bold' }), []);

    return (
        <>
            <Padding>
                {icon && (
                    <Icon>
                        <IconContext.Provider value={iconStyle}>{icon}</IconContext.Provider>
                    </Icon>
                )}
                {title && <Title>{title}</Title>}
                {content && <Content>{content}</Content>}
            </Padding>
            <Buttons>
                {buttons.map((e, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Button key={i} {...e} />
                ))}
            </Buttons>
        </>
    );
}

export function useDialog() {
    const modal = useContext(ModalContext);

    return ({
        title,
        buttons,
        content,
        notAutoClose,
        icon,
    }: {
        title: string;
        buttons: DialogButtonType[];
        content?: string;
        notAutoClose?: boolean;
        icon?: React.ReactNode;
    }) => {
        const MappedButtons = buttons.map((e) => ({
            ...e,
            onClick: () => {
                e.onClick();
                if (!notAutoClose || e.closeModal) modal.close();
            },
        }));

        modal.open(
            <DialogScreen close={modal.close} content={content} buttons={MappedButtons} title={title} icon={icon} />,
            {
                isPadding: false,
            }
        );
    };
}
