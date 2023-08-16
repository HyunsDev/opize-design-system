import React from 'react';

import { styled } from 'styled-components';

import { cv } from '../../../style';

export interface TextItemProps {
    flex?: number;
    text?: React.ReactNode;
    subText?: React.ReactNode;
}

interface StyledTextItemProps {
    $flex?: number;
    $text?: React.ReactNode;
    $subText?: React.ReactNode;
}

const TextsDiv = styled.div<StyledTextItemProps>`
    flex: ${(props) => props.$flex || 3};
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
`;

const TextDiv = styled.div`
    color: ${cv.foreground};
    font-size: 14px;
`;

const SubTextDiv = styled.div`
    color: ${cv.default700};
    font-size: 14px;
`;

export function TextItem({ text, flex, subText }: TextItemProps) {
    return (
        <TextsDiv $flex={flex}>
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
        </TextsDiv>
    );
}

TextItem.displayName = 'ItemsTable.Row.TextItem';
