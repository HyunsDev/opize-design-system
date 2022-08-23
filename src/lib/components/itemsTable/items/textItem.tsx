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
    font-weight: 600;
    color: ${cv.text2};
    font-size: 14px;
`;

const SubTextDiv = styled.div`
    color: ${cv.text2};
    font-size: 14px;
`;

export function TextItem({ text, flex, subText }: TextItemProps) {
    return (
        <TextsDiv flex={flex}>
            {text &&
                (text.startsWith('https') ? (
                    <TextDiv>
                        <a href={text}>{`${text.substring(0, 50)}${text.length > 50 ? '...' : ''}`}</a>
                    </TextDiv>
                ) : (
                    <TextDiv>{`${text.substring(0, 50)}${text.length > 50 ? '...' : ''}`}</TextDiv>
                ))}
            {subText && <SubTextDiv>{`${subText.substring(0, 50)}${subText.length > 50 ? '...' : ''}`}</SubTextDiv>}
        </TextsDiv>
    );
}

TextItem.displayName = 'ItemsTable.Row.TextItem';
