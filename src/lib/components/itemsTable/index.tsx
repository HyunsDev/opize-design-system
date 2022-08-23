/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { IconContext } from 'phosphor-react';
import styled from 'styled-components';
import { cv } from '../../style';
import { ItemsTableProps } from './types';
import { Item } from './items';

const StyledTable = styled.div`
    margin-top: 8px;
    border-top: solid 1px ${cv.border3};
    border-bottom: solid 1px ${cv.border3};
    border-radius: 8px;
`;

function ItemsTableComponent({ children }: ItemsTableProps) {
    return (
        <StyledTable>
            <IconContext.Provider
                value={{
                    size: 36,
                    weight: 'regular',
                    color: cv.border1,
                }}
            >
                {children}
            </IconContext.Provider>
        </StyledTable>
    );
}

const StyledRow = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    gap: 8px;
    border-right: solid 1px ${cv.border3};
    border-left: solid 1px ${cv.border3};
    border-top: solid 1px ${cv.border3};

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 16px;
        gap: 8px;
    }

    &:first-of-type {
        border-top: none;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    &:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
`;

const Row = Object.assign(StyledRow, Item);

/**
 * 여러 아이템을 표 형식으로 표시하는 컴포넌트입니다.
 */
export const ItemsTable = Object.assign(ItemsTableComponent, {
    Row,
});

export type { ItemsTableProps };
