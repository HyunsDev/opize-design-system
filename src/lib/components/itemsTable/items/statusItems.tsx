/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';

import styled from 'styled-components';

import { cv } from '../../../style';
import { StatusBadge } from '../../badge';
import { StatusItemProps } from '../types';

const StateDiv = styled.div<{ flex?: number }>`
    width: 120px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: ${(props) => props.flex || 1};
    width: 100%;

    @media (max-width: 767px) {
        margin-top: 4px;
        width: 100%;
        flex-direction: row;
        gap: 4px;
    }
`;

const TypeDiv = styled.div<{ flex?: number }>`
    color: ${cv.text2};
    font-size: 14px;
    margin-left: 8px;
    flex: ${(props) => props.flex || 1};
    width: 100%;
`;

type color = 'red' | 'yellow' | 'green' | 'blue' | 'gray';
type mappedColor = 'stateless' | 'error' | 'warning' | 'done' | 'good';

const colorMap = (text: mappedColor): color => {
    const map = {
        stateless: 'gray',
        error: 'red',
        warning: 'yellow',
        done: 'blue',
        good: 'green',
    };
    return (map[text] as color) || 'gray';
};

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function StatusItem({ flex, status, label, text }: StatusItemProps) {
    return (
        <StateDiv flex={flex}>
            <StatusBadge
                color={colorMap(status.toLowerCase() as mappedColor)}
                text={text || capitalize(status)}
            />
            {label && <TypeDiv>{label}</TypeDiv>}
        </StateDiv>
    );
}

StatusItem.displayName = 'ItemsTable.Row.Status';
