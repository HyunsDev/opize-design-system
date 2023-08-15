import { forwardRef } from 'react';
import { StyledTableCell } from './Table.style';

export interface TableCellProps {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
}
export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>((props, ref) => {
    const { children, align = 'left', ...otherProps } = props;

    return (
        <StyledTableCell
            ref={ref}
            $align={align}
            {...otherProps}
        >
            <div className="cell-inner">{children}</div>
        </StyledTableCell>
    );
});

TableCell.displayName = 'Table.Cell';
