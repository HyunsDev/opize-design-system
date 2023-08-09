import React from 'react';

import styled from 'styled-components';

import { cv } from '../../../style';

export type TableProps = React.ComponentPropsWithoutRef<'table'>;

const StyledTable = styled.table`
    width: 100%;
    text-align: left;
    color: ${cv.text1};
    border: 0;
    border-spacing: 0;
`;
export const TableComponent = React.forwardRef<HTMLTableElement, TableProps>(
    ({ children, ...props }: TableProps, ref) => {
        return (
            <StyledTable
                {...props}
                ref={ref}
            >
                {children}
            </StyledTable>
        );
    }
);
TableComponent.displayName = 'Table';
