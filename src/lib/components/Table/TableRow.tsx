import { forwardRef } from 'react';
import { StyledTableRow } from './Table.style';
import { useTableContext } from './Table.context';

export interface TableRowProps {
    children?: React.ReactNode;
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => {
    const { children, ...otherProps } = props;
    const {} = useTableContext();

    return (
        <StyledTableRow
            ref={ref}
            {...otherProps}
        >
            {children}
        </StyledTableRow>
    );
});
