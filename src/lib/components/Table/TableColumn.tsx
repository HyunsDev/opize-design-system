import { forwardRef } from 'react';
import { useTableContext } from './Table.context';
import { StyledTableColumn } from './Table.style';

export interface TableColumnProps {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
}

export const TableColumn = forwardRef<HTMLTableCellElement, TableColumnProps>((props, ref) => {
    const { children, align = 'left', ...otherProps } = props;
    const {} = useTableContext();

    return (
        <StyledTableColumn
            ref={ref}
            $align={align}
            {...otherProps}
        >
            <div className="column-inner">{children}</div>
        </StyledTableColumn>
    );
});
