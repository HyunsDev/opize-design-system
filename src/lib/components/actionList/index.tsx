import React, { ComponentProps } from 'react';
import styled, { css } from 'styled-components';
import { cv } from '../../style';

export interface ActionListDivProps {
    /**
     * ActionList가 position:sticky 속성을 가지는 지를 결정합니다.
     * true인 경우 스크롤를 내렸을 때 화면 상단에 붙습니다.
     */
    isSticky: boolean;
    /**
     * isSticky가 'true'일 때 화면 상단에서 얼마나 떨어져 있을 지를 결정합니다.
     */
    stickyTop?: number;
}

const ActionListDiv = styled.div<ActionListDivProps>`
    display: flex;
    flex-direction: column;
    ${(props) =>
        props.isSticky &&
        css`
            position: sticky;
            top: ${props.stickyTop || 64}px;
        `}
`;

const ActionListItem = styled.a<{ selected?: boolean }>`
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 4px;
    background-color: ${cv.bg_element1};
    transition: background-color 100ms;
    user-select: none;
    font-size: ${cv.fontSize400};
    text-decoration: none;
    color: ${cv.text1};
    line-height: 24px;
    font-weight: ${(props) => (props.selected ? cv.fontWeightSemiBold : cv.fontWeightRegular)};
    cursor: pointer;
    &:hover {
        background-color: ${(props) => (props.color === 'red' ? cv.bg_red1 : cv.bg_element2)};
    }
`;
ActionListItem.displayName = 'ActionList.Item';

const ActionListDivider = styled.div`
    border-bottom: solid 1px ${cv.border3};
    margin-top: 8px;
    margin-bottom: 8px;
`;
ActionListDivider.displayName = 'ActionList.Divider';

/**
 * 여러 액션 버튼이 있는 컴포넌트입니다.
 */
export const ActionList = Object.assign(ActionListDiv, {
    Item: ActionListItem,
    Divider: ActionListDivider,
});
ActionList.displayName = 'ActionList';

export type ActionListProps = ComponentProps<typeof ActionList>;
