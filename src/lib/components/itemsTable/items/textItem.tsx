import React from 'react';
import styled from 'styled-components';
import { cv } from '../../../style';
import { TextItemProps } from '../types';

const TextsDiv = styled.div<{ flex?: number }>`
    flex: ${(props) => props.flex || 3};
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
`;

const TextDiv = styled.div`
    color: ${cv.text1};
    font-size: 14px;
`;

const SubTextDiv = styled.div`
    color: ${cv.text2};
    font-size: 14px;
`;

export function TextItem({ text, flex, subText }: TextItemProps) {
    return (
        <TextsDiv flex={flex}>
            {text && <TextDiv>{`${text.substring(0, 50)}${text.length > 50 ? '...' : ''}`}</TextDiv>}
            {subText && <SubTextDiv>{`${subText.substring(0, 50)}${subText.length > 50 ? '...' : ''}`}</SubTextDiv>}
        </TextsDiv>
    );
}

TextItem.displayName = 'ItemsTable.Row.TextItem';
