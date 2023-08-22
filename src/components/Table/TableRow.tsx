import { forwardRef } from 'react';
import { StyledTableRow } from './Table.style';
export interface TableRowProps extends React.HTMLProps<HTMLTableRowElement> {
    children?: React.ReactNode;
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => {
    const { children, ...otherProps } = props;

    return (
        <StyledTableRow
            ref={ref}
            {...otherProps}
        >
            {children}
        </StyledTableRow>
    );
});
