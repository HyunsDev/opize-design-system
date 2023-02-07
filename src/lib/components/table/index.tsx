import React from 'react';
import styled from 'styled-components';
import { cv } from '../../style';
import { TableComponent } from './table';
import { TableData } from './tableData';
import { TableHead } from './tableHead';
import { TableRow } from './tableRow';

const THead = styled.thead``;
const TBody = styled.tbody``;

export const Table = Object.assign(TableComponent, {
    Row: TableRow,
    Data: TableData,
    Head: TableHead,
    THead,
    TBody,
});
