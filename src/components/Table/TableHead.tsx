import { forwardRef } from 'react';
import { StyledTableHead } from './Table.style';

export interface TableHeadProps {
    children: React.ReactNode;
}

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>((props, ref) => {
    const { children, ...otherProps } = props;

    return (
        <StyledTableHead
            ref={ref}
            {...otherProps}
        >
            {children}
        </StyledTableHead>
    );
});
