import { forwardRef } from 'react';
import { StyledTable } from './Table.style';
import { useTable } from './useTable';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableColumn } from './TableColumn';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';

export interface TableProps extends React.HTMLProps<HTMLTableElement> {}

const TableContainer = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
    const { children, domRef, ...otherProps } = useTable({ ...props, ref });

    return (
        <StyledTable
            ref={domRef}
            {...otherProps}
        >
            {children}
        </StyledTable>
    );
});

export { TableHead, TableBody, TableColumn, TableRow, TableCell };
export const Table = Object.assign(TableContainer, {
    Head: TableHead,
    Body: TableBody,
    Column: TableColumn,
    Row: TableRow,
    Cell: TableCell,
});
