import React from 'react';

import { ItemContainer } from './Item.style';

export interface ComponentItemProps {
    width?: string;
    flex?: number;
    children?: React.ReactNode;
}

export function ComponentItem({ children, flex = 1, width }: ComponentItemProps) {
    return (
        <ItemContainer
            $flex={flex}
            $width={width}
        >
            {children}
        </ItemContainer>
    );
}

ComponentItem.displayName = 'ItemsTable.Row.Component';
