import React from 'react';

import { styled } from 'styled-components';

import { cv } from '../../../style';
import { ItemContainerProps } from './Item.style';

export interface TextItemProps {
    flex?: number;
    width?: string;
    text?: React.ReactNode;
    subText?: React.ReactNode;
}

const TextItemContainer = styled.div<ItemContainerProps>`
    display: flex;
    ${(props) => props.$flex && !props.$width && `flex: ${props.$flex};`}
    ${(props) => props.$width && `width: ${props.$width};`}

    flex-direction: column;
    gap: 2px;
`;

const TextDiv = styled.div`
    color: ${cv.foreground};
    font-size: 14px;
`;

const SubTextDiv = styled.div`
    color: ${cv.default700};
    font-size: 14px;
`;

export function TextItem({ text, flex = 1, subText, width }: TextItemProps) {
    return (
        <TextItemContainer
            $flex={flex}
            $width={width}
        >
            {text && typeof text === 'string' && (
                <TextDiv>{`${text.substring(0, 50)}${text.length > 50 ? '...' : ''}`}</TextDiv>
            )}
            {text && typeof text !== 'string' && <TextDiv>{text}</TextDiv>}
            {subText && typeof subText === 'string' && (
                <SubTextDiv>{`${subText.substring(0, 50)}${
                    subText.length > 50 ? '...' : ''
                }`}</SubTextDiv>
            )}
            {subText && typeof subText !== 'string' && <SubTextDiv>{subText}</SubTextDiv>}
        </TextItemContainer>
    );
}

TextItem.displayName = 'ItemsTable.Row.TextItem';
