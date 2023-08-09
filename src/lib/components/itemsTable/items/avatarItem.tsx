import React from 'react';

import styled from 'styled-components';

import { cv } from '../../../style';
import { AvatarItemProps } from '../types';

const AvatarDiv = styled.div<{ flex?: number }>`
    display: flex;
    align-items: center;
    gap: 8px;
    flex: ${(props) => props.flex || 1};
    width: 100%;
`;

const AvatarIcon = styled.img`
    border-radius: 999px;
    background-color: ${cv.bg_element2};

    width: 36px;
    height: 36px;
`;

const AvatarInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const AvatarName = styled.div`
    color: ${cv.text1};
    font-size: 14px;
    line-height: 17px;
`;

const AvatarLabel = styled.div`
    font-size: 14px;
    color: ${cv.text2};
`;

/**
 * icon, name, label을 표시할 수 있는 아이템입니다.
 */
export function AvatarItem({ flex, icon, name, label }: AvatarItemProps) {
    return (
        <AvatarDiv flex={flex}>
            {typeof icon === 'string' ? (
                <AvatarIcon
                    src={icon}
                    alt=""
                />
            ) : (
                icon
            )}
            <AvatarInfo>
                {name && <AvatarName>{name}</AvatarName>}
                {label && <AvatarLabel>{label}</AvatarLabel>}
            </AvatarInfo>
        </AvatarDiv>
    );
}
// AvatarItem.displayName = 'ItemsTable.Row.Avatar';
