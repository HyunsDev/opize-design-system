import { forwardRef } from 'react';
import { useTableContext } from './Table.context';
import { StyledTableHead } from './Table.style';

export interface TableHeadProps {
    children: React.ReactNode;
}

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>((props, ref) => {
    const { children, ...otherProps } = props;
    const {} = useTableContext();

    return (
        <StyledTableHead
            ref={ref}
            {...otherProps}
        >
            {children}
        </StyledTableHead>
    );
});
