import { styled } from 'styled-components';
import { cv } from '../..';

const alignMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};

export const StyledTable = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    border: 0;

    font-size: 14px;
    text-align: left;

    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    table-layout: auto;

    margin: 0 auto;
    white-space: nowrap;
`;

export const StyledTableHead = styled.thead``;

export const StyledTableBody = styled.tbody``;

export const StyledTableRow = styled.tr`
    vertical-align: middle;
`;

export interface StyledTableColumnProps {
    $align: 'left' | 'center' | 'right';
}
export const StyledTableColumn = styled.th<StyledTableColumnProps>`
    color: ${cv.default500};
    background-color: ${cv.default100};
    font-weight: 500;

    width: auto;
    padding: 0px 10px;
    height: 40px;

    text-align: ${({ $align }) => $align};
    border-radius: 0;

    &:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    &:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    & > .column-inner {
        display: flex;
        align-items: center;
        justify-content: ${(props) => alignMap[props.$align]};

        width: 100%;
        height: 100%;
    }
`;

export interface StyledTableCellProps {
    $align: 'left' | 'center' | 'right';
}
export const StyledTableCell = styled.td<StyledTableCellProps>`
    padding: 0px 10px;
    height: 48px;
    width: auto;

    font-size: 14px;
    text-align: ${({ $align }) => $align};
    border-bottom: solid 1px ${cv.default200};

    & > .cell-inner {
        display: flex;
        align-items: center;
        justify-content: ${(props) => alignMap[props.$align]};

        width: 100%;
        height: 100%;
    }
`;
