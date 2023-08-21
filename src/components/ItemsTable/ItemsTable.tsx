import { styled } from 'styled-components';

import { cv } from '../../style';
import { AvatarItem, ComponentItem, TextItem, MenuItem } from './components';

export type ItemsTableProps = {
    children: React.ReactNode;
};

const StyledTable = styled.div`
    border-top: solid 1px ${cv.default200};
    border-bottom: solid 1px ${cv.default200};
    border-radius: 8px;
`;

function ItemsTableComponent({ children }: ItemsTableProps) {
    return <StyledTable>{children}</StyledTable>;
}
ItemsTableComponent.displayName = 'ItemsTable';

const StyledRow = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    gap: 8px;
    border-right: solid 1px ${cv.default200};
    border-left: solid 1px ${cv.default200};
    border-top: solid 1px ${cv.default200};

    font-size: 14px;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 16px;
        gap: 8px;
    }

    &:first-of-type {
        border-top: none;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    &:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
`;
StyledRow.displayName = 'ItemsTable.Row';

const Row = Object.assign(StyledRow, {
    Avatar: AvatarItem,
    Text: TextItem,
    Component: ComponentItem,
    Menu: MenuItem,
});

export {
    StyledRow as ItemsTableRow,
    AvatarItem as ItemsTableAvatarItem,
    TextItem as ItemsTableTextItem,
    ComponentItem as ItemsTableComponentItem,
    MenuItem as ItemsTableMenuItem,
};
export const ItemsTable = Object.assign(ItemsTableComponent, {
    Row,
});
