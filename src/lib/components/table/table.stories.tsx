import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Gear, UserCircle, X } from 'phosphor-react';
import { Table } from '..';

export default {
    title: 'HTML-Like Component/Table',
    component: Table,
    subcomponents: {
        'Table.Data': Table.Data,
        'Table.Head': Table.Head,
        'Table.Row': Table.Row,
        'Table.THead': Table.THead,
        'Table.TBody': Table.TBody,
    },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: (
        <>
            <Table.THead>
                <Table.Row>
                    <Table.Head>Head 1</Table.Head>
                    <Table.Head>Head 2</Table.Head>
                    <Table.Head>Head 3</Table.Head>
                    <Table.Head>Head 4</Table.Head>
                </Table.Row>
            </Table.THead>
            <Table.TBody>
                <Table.Row>
                    <Table.Data>Data 1</Table.Data>
                    <Table.Data>Data 2</Table.Data>
                    <Table.Data>Data 3</Table.Data>
                    <Table.Data>Data 4</Table.Data>
                </Table.Row>
                <Table.Row>
                    <Table.Data>Data 1</Table.Data>
                    <Table.Data>Data 2</Table.Data>
                    <Table.Data>Data 3</Table.Data>
                    <Table.Data>Data 4</Table.Data>
                </Table.Row>
                <Table.Row>
                    <Table.Data>Data 1</Table.Data>
                    <Table.Data>Data 2</Table.Data>
                    <Table.Data>Data 3</Table.Data>
                    <Table.Data>Data 4</Table.Data>
                </Table.Row>
            </Table.TBody>
        </>
    ),
};
