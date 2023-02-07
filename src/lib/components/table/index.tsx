import React from 'react';
import styled from 'styled-components';
import { cv } from '../../style';
import { TableComponent } from './components/table';
import { TableData } from './components/tableData';
import { TableHead } from './components/tableHead';
import { TableRow } from './components/tableRow';

const THead = styled.thead``;
THead.displayName = 'Table.THead';

const TBody = styled.tbody``;
TBody.displayName = 'Table.TBody';

export const Table = Object.assign(TableComponent, {
    Row: TableRow,
    Data: TableData,
    Head: TableHead,
    THead,
    TBody,
});
