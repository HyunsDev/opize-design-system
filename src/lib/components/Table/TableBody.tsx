import { forwardRef } from 'react';
import { StyledTableBody } from './Table.style';

export interface TableBodyProps {
    children: React.ReactNode;
}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => {
    const { children, ...otherProps } = props;

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
