import React from 'react';

import styled from 'styled-components';

export type TableRowProps = React.ComponentPropsWithoutRef<'tr'>;

export const TableRow = styled.tr`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
TableRow.displayName = 'Table.Row';
