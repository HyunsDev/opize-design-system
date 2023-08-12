import { forwardRef } from 'react';
import { useTableContext } from './Table.context';
import { StyledTableCell } from './Table.style';

export interface TableCellProps {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
}
export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>((props, ref) => {
    const { children, align = 'left', ...otherProps } = props;
    const {} = useTableContext();

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
