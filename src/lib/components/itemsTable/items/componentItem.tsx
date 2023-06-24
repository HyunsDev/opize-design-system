/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';

import styled from 'styled-components';

import { ComponentItemProps } from '../types';

const Components = styled.div<{ flex?: number }>`
    flex: ${(props) => props.flex || 3};
    display: flex;
    width: 100%;
`;

export function ComponentItem({ children, flex }: ComponentItemProps) {
    return <Components flex={flex}>{children}</Components>;
}

ComponentItem.displayName = 'ItemsTable.Row.Component';
