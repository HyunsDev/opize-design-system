import { forwardRef } from 'react';
import { StyledTableColumn } from './Table.style';

export interface TableColumnProps extends React.HTMLProps<HTMLTableCellElement> {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
}

export const TableColumn = forwardRef<HTMLTableCellElement, TableColumnProps>((props, ref) => {
    const { children, align = 'left', ...otherProps } = props;

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
