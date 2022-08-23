/* eslint-disable react/jsx-no-constructed-context-values */
import { DotsThreeVertical, IconContext } from 'phosphor-react';
import React from 'react';
import styled from 'styled-components';
import { ActionMenu } from '../../actionMenu';
import { ButtonsItemProps } from '../types';

const ItemButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    @media (max-width: 767px) {
        position: absolute;
        top: 16px;
        right: 16px;
    }
`;

export function ButtonsItem({ buttons }: ButtonsItemProps) {
    return (
        <ItemButtons>
            <IconContext.Provider
                value={{
                    size: 18,
                    weight: 'bold',
                }}
            >
                <ActionMenu icon={<DotsThreeVertical />} actions={buttons} variant="text" borderRadius={999} />
            </IconContext.Provider>
        </ItemButtons>
    );
}
ButtonsItem.displayName = 'ItemsTable.Row.Buttons';
