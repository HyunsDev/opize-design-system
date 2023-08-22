import { forwardRef } from 'react';
import { StyledTableHead } from './Table.style';

export interface TableHeadProps extends React.HTMLProps<HTMLTableSectionElement> {
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
