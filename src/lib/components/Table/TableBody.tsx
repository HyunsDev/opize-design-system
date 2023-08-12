import { forwardRef } from 'react';
import { useTableContext } from './Table.context';
import { StyledTableBody } from './Table.style';

export interface TableBodyProps {
    children: React.ReactNode;
}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => {
    const { children, ...otherProps } = props;
    const {} = useTableContext();

    return (
        <StyledTableBody
            ref={ref}
            {...otherProps}
        >
            {children}
        </StyledTableBody>
    );
});

TableBody.displayName = 'Table.Body';
