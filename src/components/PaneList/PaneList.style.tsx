import { styled } from 'styled-components';
import { cv } from '../..';

type StyledPaneListProps = {
    $isSticky: boolean;
    $stickyTop: string;
};
export const StyledPaneList = styled.ul<StyledPaneListProps>`
    display: flex;
    flex-direction: column;
    gap: 2px;
    ${(props) =>
        props.$isSticky &&
        `
            position: sticky;
            top: ${props.$stickyTop};
        `}
`;

type StyledPaneListItemProps = {
    $selected: boolean;
};
export const StyledPaneListItem = styled.li`
    list-style: none;
`;

export const StyledPanelistItemA = styled.a<StyledPaneListItemProps>`
    display: flex;
    align-items: center;
    padding: 0px 12px;
    height: 40px;
    border-radius: 8px;
    background-color: ${(props) => (props.$selected ? cv.default100 : cv.background)};
    transition: background-color 100ms;
    user-select: none;
    text-decoration: none;
    color: ${cv.foreground};
    line-height: 24px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 200ms;

    &:hover {
        background-color: ${cv.default100};
    }
`;
