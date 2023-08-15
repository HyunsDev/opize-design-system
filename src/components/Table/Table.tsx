import { forwardRef } from 'react';
import { TableProps } from './Table.type';
import { StyledTable } from './Table.style';
import { useTable } from './useTable';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableColumn } from './TableColumn';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';

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

export const Table = Object.assign(TableContainer, {
    Head: TableHead,
    Body: TableBody,
    Column: TableColumn,
    Row: TableRow,
    Cell: TableCell,
});
