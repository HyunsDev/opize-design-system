import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { cv } from '../../style';

const ActionListDiv = styled.div<{ isSticky: boolean; stickyTop?: number }>`
    display: flex;
    flex-direction: column;
    ${(props) =>
        props.isSticky &&
        css`
            position: sticky;
            top: ${props.stickyTop || 64}px;
        `}
`;

const ActionListItem = styled(Link)`
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 4px;
    background-color: ${cv.bg_element1};
    transition: background-color 100ms;
    user-select: none;
    font-size: 0.875rem;
    text-decoration: none;
    color: ${cv.text1};
    line-height: 24px;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => (props.color === 'red' ? cv.bg_red1 : cv.bg_element2)};
    }
`;

const ActionListDivider = styled.div`
    border-bottom: solid 1px ${cv.border3};
    margin-top: 8px;
    margin-bottom: 8px;
`;

export const ActionList = Object.assign(ActionListDiv, {
    Item: ActionListItem,
    Divider: ActionListDivider,
});

export type ActionListProps = ComponentProps<typeof ActionList>;
